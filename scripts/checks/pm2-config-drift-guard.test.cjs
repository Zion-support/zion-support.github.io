'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const guard = path.join(__dirname, 'pm2-config-drift-guard.cjs');
function check(ecosystem, files={}) {
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-pm2-test-'));
  fs.writeFileSync(path.join(tmp,'package.json'),JSON.stringify({scripts:{}}));
  fs.writeFileSync(path.join(tmp,'ecosystem.config.cjs'),ecosystem);
  for(const [p,s] of Object.entries(files)) fs.writeFileSync(path.join(tmp,p),s);
  const run=spawnSync(process.execPath,[guard,tmp],{encoding:'utf8'});
  const report=JSON.parse(fs.readFileSync(path.join(tmp,'automation/reports/pm2-config-drift-guard-latest.json'),'utf8'));
  fs.rmSync(tmp,{recursive:true,force:true});
  return {status:run.status,report};
}
test('clean definition passes and writes evidence',()=>{
 const r=check("module.exports={apps:[{name:'a',script:'a.cjs'}]}",{'a.cjs':''});
 assert.equal(r.status,0);assert.equal(r.report.driftCount,0);
});
test('malformed ecosystem fails closed while writing artifact',()=>{
 const r=check("module.exports={apps:[{name:'a'}]};,");
 assert.equal(r.status,1);assert.ok(r.report.errors.length);
});
test('missing app script fails rather than falsely passing',()=>{
 const r=check("module.exports={apps:[{name:'a',script:'absent.cjs'}]}");
 assert.equal(r.status,1);assert.equal(r.report.ecosystemAppsWithMissingScripts[0].app,'a');
});
test('duplicates fail rather than falsely passing',()=>{
 const r=check("module.exports={apps:[{name:'a',script:'a.cjs'},{name:'a',script:'a.cjs'}]}",{'a.cjs':''});
 assert.equal(r.status,1);assert.deepEqual(r.report.duplicateAppNames,['a']);
});
