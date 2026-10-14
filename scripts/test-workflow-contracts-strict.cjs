"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs"), os=require("node:os"), path=require("node:path");
const {spawnSync}=require("node:child_process");
const implementation=path.resolve(__dirname,"checks/workflow-contracts-check.cjs");
const pinned="0123456789abcdef0123456789abcdef01234567";
const doc=(uses,name="Fixture")=>`name: ${name}\non:\n  workflow_dispatch:\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n${uses}\n`;
const cases=[
 {name:"missing workflows directory fails closed", files:null, exit:1},
 {name:"empty workflows directory fails closed", files:{},exit:1},
 {name:"no YAML workflows fails closed", files:{"README.md":"none"},exit:1},
 {name:"inline SHA pinned action accepted", files:{"a.yml":doc(`      - uses: actions/checkout@${pinned}`)},exit:0},
 {name:"inline mutable tag rejected", files:{"a.yml":doc("      - uses: actions/checkout@v4")},exit:1},
 {name:"inline unversioned remote action rejected", files:{"a.yml":doc("      - uses: actions/checkout")},exit:1},
 {name:"separate uses mutable tag still rejected", files:{"a.yml":doc("      - name: Checkout\n        uses: actions/checkout@v4")},exit:1},
 {name:"separate uses pinned SHA accepted", files:{"a.yml":doc(`      - name: Checkout\n        uses: actions/checkout@${pinned}`)},exit:0},
 {name:"quoted pinned inline ref accepted", files:{"a.yml":doc(`      - uses: 'actions/checkout@${pinned}' # reviewed pin`)},exit:0},
 {name:"quoted mutable inline ref rejected", files:{"a.yml":doc("      - uses: 'actions/checkout@v4' # bad tag")},exit:1},
 {name:"uppercase pinned SHA accepted", files:{"a.yml":doc(`      - uses: actions/checkout@${pinned.toUpperCase()}`)},exit:0},
 {name:"local action exemption preserved", files:{"a.yml":doc("      - uses: ./.github/actions/local")},exit:0},
 {name:"local reusable exemption preserved", files:{"a.yml":"name: Local\non: workflow_dispatch\njobs:\n  call:\n    uses: ./.github/workflows/reusable.yml\n"},exit:0},
 {name:"docker exemption preserved", files:{"a.yml":doc("      - uses: docker://alpine:3")},exit:0},
 {name:"commented action is ignored", files:{"a.yml":doc(`      # - uses: actions/checkout@v4\n      - uses: actions/checkout@${pinned}`)},exit:0},
 {name:"duplicate workflow names still rejected",files:{"a.yml":doc(`      - uses: actions/checkout@${pinned}`),"b.yaml":doc(`      - uses: actions/checkout@${pinned}`)},exit:1},
 {name:"tabs still rejected",files:{"a.yml":doc(`\t- uses: actions/checkout@${pinned}`)},exit:1},
 {name:"missing jobs still rejected",files:{"a.yml":"name: Missing\non: workflow_dispatch\n"},exit:1},
 {name:"case insensitive filename duplicates rejected",files:{"A.yml":doc(`      - uses: actions/checkout@${pinned}`,"A"),"a.yml":doc(`      - uses: actions/checkout@${pinned}`,"B")},exit:1}
];
for (const c of cases) test(c.name,()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),"zion-contracts-"));
 try {
  const dest=path.join(root,"scripts/checks/workflow-contracts-check.cjs"); fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(implementation,dest);
  if(c.files!==null){const dir=path.join(root,".github/workflows");fs.mkdirSync(dir,{recursive:true});for(const [name,text]of Object.entries(c.files))fs.writeFileSync(path.join(dir,name),text);}
  const run=spawnSync(process.execPath,[dest],{encoding:"utf8",timeout:5000});
  assert.equal(run.error,undefined);assert.equal(run.status,c.exit,`${run.stdout}\n${run.stderr}`);
 } finally {fs.rmSync(root,{recursive:true,force:true});}
});
