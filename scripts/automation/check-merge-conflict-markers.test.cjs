'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { evaluate, writeEvidence } = require('./check-merge-conflict-markers.cjs');
function git(root,...args) {
  const r=spawnSync('git',args,{cwd:root,encoding:'utf8'});
  if(r.status!==0) throw new Error('git '+args.join(' ')+': '+r.stderr);
}
function fixture(files){
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-merge-marker-'));
  git(root,'init','-q');git(root,'config','user.email','ci@example.invalid');git(root,'config','user.name','CI Fixture');
  for(const [filename,body] of Object.entries(files)){
    const absolute=path.join(root,filename);fs.mkdirSync(path.dirname(absolute),{recursive:true});fs.writeFileSync(absolute,body);
  }
  if(Object.keys(files).length) {git(root,'add','.');git(root,'commit','-qm','test fixtures');}
  return root;
}
function cleanup(root){fs.rmSync(root,{recursive:true,force:true});}
test('clean tracked TypeScript passes with source count',()=>{
  const dir=fixture({'app/page.tsx':'export default function Page(){ return null; }\n'});
  try{const x=evaluate(dir);assert.equal(x.status,'PASS');assert.equal(x.scannedTrackedSourceFiles,1);assert.equal(x.markerCount,0);}finally{cleanup(dir);}
});
test('conflict markers fail closed and reveal file/line but no source lines',()=>{
  const dir=fixture({'app/services/page.tsx':'<<<<<<< HEAD\nconst secret = "private";\n=======\nconst x=1;\n>>>>>>> abc123\n'});
  try{const x=evaluate(dir);assert.equal(x.status,'FAIL');assert.equal(x.markerCount,3);assert.equal(x.affectedFiles,1);
    assert.deepEqual(x.samples.map(m=>m.line),[1,3,5]);assert.equal(x.sourceSnippetStored,false);const o=writeEvidence(x,dir);
    const json=fs.readFileSync(o.file,'utf8');assert.ok(!json.includes('private'));assert.ok(!json.includes('const x=1'));}
  finally{cleanup(dir);}
});
test('one-sided marker still fails, even if rest of conflict was removed',()=>{
  const dir=fixture({'src/a.js':'const x=1;\n>>>>>>> 1234abcd\n'});
  try{const r=evaluate(dir);assert.equal(r.markerCount,1);assert.equal(r.samples[0].marker,'END');}finally{cleanup(dir);}
});
test('inline examples and ordinary equals do not cause false positives',()=>{
  const dir=fixture({'src/guard.cjs':'const message = "<<<<<<< HEAD";\nconst equal = "=======";\n'});
  try{assert.equal(evaluate(dir).status,'PASS');}finally{cleanup(dir);}
});
test('documentation-only markers do not fail a source check',()=>{
  const dir=fixture({'README.md':'<<<<<<< HEAD\n=======\n>>>>>>> abc\n','src/a.ts':'export const a=1;\n'});
  try{assert.equal(evaluate(dir).status,'PASS');}finally{cleanup(dir);}
});
test('untracked local files are not mistaken for checked-in source',()=>{
  const dir=fixture({'app/ok.tsx':'export default () => null;\n'});
  try{fs.writeFileSync(path.join(dir,'app/untracked.tsx'),'<<<<<<< HEAD\n');assert.equal(evaluate(dir).status,'PASS');}finally{cleanup(dir);}
});
test('empty git repository cannot return a false green status',()=>{
  const dir=fixture({});try{const r=evaluate(dir);assert.equal(r.status,'ERROR');assert.equal(r.problem,'NO_TRACKED_SOURCE_FILES');}finally{cleanup(dir);}
});
test('wrong checkout or unavailable git fails closed',()=>{
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-not-git-'));
  try{const r=evaluate(dir);assert.equal(r.status,'ERROR');assert.match(r.problem,/GIT_INDEX_UNAVAILABLE/);}finally{cleanup(dir);}
});
test('multiple source files record affected count independently of marker count',()=>{
  const dir=fixture({'app/a.tsx':'<<<<<<< HEAD\n=======\n','automation/b.cjs':'>>>>>>> other\n'});
  try{const r=evaluate(dir);assert.equal(r.markerCount,3);assert.equal(r.affectedFiles,2);}finally{cleanup(dir);}
});
test('evidence sample is capped, with total count retained',()=>{
  const dir=fixture({'app/big.tsx':Array(110).fill('<<<<<<< HEAD').join('\n')+'\n'});
  try{const r=evaluate(dir);assert.equal(r.markerCount,110);assert.equal(r.samples.length,100);assert.equal(r.truncated,true);}finally{cleanup(dir);}
});
test('JSON report includes code paths, not file contents or credentials',()=>{
  const dir=fixture({'app/a.tsx':'<<<<<<< HEAD\nconst secret = "fake-secret";\n'});
  try{const r=evaluate(dir);const o=writeEvidence(r,dir);const txt=fs.readFileSync(o.file,'utf8');
    assert.match(txt,/"status": "FAIL"/);assert.match(txt,/app\/a.tsx/);assert.doesNotMatch(txt,/fake-secret/);}finally{cleanup(dir);}
});

test('untrusted Git filenames are safe in Markdown step summaries',()=>{
  const dir=fixture({'app/a`[bad].tsx':'<<<<<<< HEAD\n'});
  try{const r=evaluate(dir);const out=writeEvidence(r,dir);
    assert.equal(r.status,'FAIL');assert.doesNotMatch(out.summary,/a`\[bad\]/);
    assert.match(out.summary,/a__bad_\.tsx/);
  }finally{cleanup(dir);}
});
