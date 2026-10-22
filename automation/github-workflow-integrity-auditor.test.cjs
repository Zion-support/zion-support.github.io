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
test('SHA-pinned workflow with explicit permissions is accepted',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'zion-integrity-'));
 try{
  fs.writeFileSync(path.join(dir,'safe.yml'),"name: safe\n\"on\":\n  workflow_dispatch:\npermissions:\n  contents: read\njobs:\n  test:\n    steps:\n      - uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd\n");
  const report=audit(dir);
  assert.equal(report.status,'healthy');
  assert.equal(report.counts.totalFindings,0);
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});
