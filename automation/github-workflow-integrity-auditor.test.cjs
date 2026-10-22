'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {audit}=require('./github-workflow-integrity-auditor.cjs');
test('static audit produces real bounded findings without network',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-'));
 try{
  fs.writeFileSync(path.join(dir,'unsafe.yml'),"name: unsafe\non:\n  schedule:\n    - cron: '*/10 * * * *'\njobs:\n  test:\n    steps:\n      - uses: actions/checkout@v4\n");
  const report=audit(dir);
  assert.equal(report.workflowCount,1);
  assert.equal(report.status,'needs_review');
  assert.ok(report.findings.some(x=>x.type==='action-not-sha-pinned'));
  assert.ok(report.findings.some(x=>x.type==='implicit-permissions'));
  assert.ok(report.findings.some(x=>x.type==='high-frequency'));
 } finally {fs.rmSync(dir,{recursive:true,force:true});}
});
test('weekly schedule containing a shell cron string is not high frequency',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-'));
 try {
  const yaml=[
   'name: smoke',
   'on:',
   '  schedule:',
   "    - cron: '15 12 * * 3'",
   'permissions:',
   '  contents: read',
   'jobs:',
   '  check:',
   '    steps:',
   "      - run: grep -Fq 'cron: */10 * * * *' workflow.yml",
   ''
  ].join('\n');
  fs.writeFileSync(path.join(dir,'weekly.yml'),yaml);
  const result=audit(dir);
  assert.equal(result.findings.filter(x=>x.type==='high-frequency').length,0);
 } finally {fs.rmSync(dir,{recursive:true,force:true});}
});
test('two actual triggers in the same hour are flagged',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-'));
 try {
  fs.writeFileSync(path.join(dir,'twice.yml'),"name: twice\n'on':\n  schedule:\n    - cron: '0,30 * * * *'\npermissions:\n  contents: read\n");
  assert.equal(audit(dir).findings.filter(x=>x.type==='high-frequency').length,1);
 } finally {fs.rmSync(dir,{recursive:true,force:true});}
});

test('a workflow depending on a success-returning no-op helper is flagged',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-noop-'));
 try{
  const wfDir=path.join(root,'.github','workflows');
  const scriptDir=path.join(root,'scripts','automation');
  fs.mkdirSync(wfDir,{recursive:true});
  fs.mkdirSync(scriptDir,{recursive:true});
  fs.writeFileSync(path.join(scriptDir,'gh-issue-dedupe-or-create.cjs'),
    "process.stderr.write('stub: not implemented\\n');\nprocess.exitCode = 0;\n");
  fs.writeFileSync(path.join(wfDir,'guard.yml'), [
    'name: guard','"on":','  workflow_dispatch:','permissions:','  contents: read',
    'jobs:','  test:','    steps:','      - run: |',
    '          node scripts/automation/gh-issue-dedupe-or-create.cjs || true',''
  ].join('\n'));
  const r=audit(wfDir);
  const found=r.findings.filter(f=>f.type==='workflow-calls-successful-noop');
  assert.equal(found.length,1,JSON.stringify(r.findings));
  assert.equal(found[0].script,'scripts/automation/gh-issue-dedupe-or-create.cjs');
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('real helper and commented references never produce a no-op warning',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-noop-'));
 try{
  const wfDir=path.join(root,'.github','workflows');
  const scriptDir=path.join(root,'scripts','automation');
  fs.mkdirSync(wfDir,{recursive:true}); fs.mkdirSync(scriptDir,{recursive:true});
  fs.writeFileSync(path.join(scriptDir,'real.cjs'),"console.log('checked');\n");
  fs.writeFileSync(path.join(wfDir,'guard.yml'), [
    'name: guard','on:','  workflow_dispatch:','permissions:','  contents: read','jobs:',
    '  check:','    steps:','      - run: |',
    '          node scripts/automation/real.cjs',
    '          # node scripts/automation/gh-issue-dedupe-or-create.cjs',''
  ].join('\n'));
  assert.equal(audit(wfDir).findings.filter(f=>f.type==='workflow-calls-successful-noop').length,0);
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});

test('SHA-pinned workflow with explicit permissions is accepted',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-'));
 try{
  fs.writeFileSync(path.join(dir,'safe.yml'),"name: safe\n\"on\":\n  workflow_dispatch:\npermissions:\n  contents: read\njobs:\n  test:\n    steps:\n      - uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd\n");
  const report=audit(dir);
  assert.equal(report.status,'healthy');
  assert.equal(report.counts.totalFindings,0);
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});
