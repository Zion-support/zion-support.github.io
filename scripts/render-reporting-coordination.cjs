"use strict";
// Preserve concurrent shared labels and the intentional Portuguese redirect.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process');
const bridge=require('./reporting-contract-bridge.cjs');
const out=process.argv[2]||'out',redirect=path.join(out,'pt/index.html'),saved=redirect+'.reporting-preserve';
let redirectBytes;
if(fs.existsSync(redirect)&&/http-equiv\s*=\s*["']refresh/i.test(fs.readFileSync(redirect,'utf8'))){
 redirectBytes=fs.readFileSync(redirect);assert(!fs.existsSync(saved),'Previous redirect preservation not restored');fs.renameSync(redirect,saved);
}
try{require('./render-field-evidence-locales.cjs');}finally{
 if(redirectBytes){fs.renameSync(saved,redirect);assert.deepEqual(fs.readFileSync(redirect),redirectBytes,'Portuguese redirect changed');}
}
const file=path.join(out,'assets/js/discovery-delivery.js');const original=fs.readFileSync(file,'utf8');
execFileSync(process.execPath,[path.join(__dirname,'test-reporting-coordination.cjs'),file],{stdio:'inherit'});
const contract=bridge.prepare(original);fs.writeFileSync(file,contract.source);
try{
 require('./render-reporting-resources.cjs');
 // The standalone test expects an asset path, not the coordinator's output directory.
 execFileSync(process.execPath,[path.join(__dirname,'test-reporting-resource-types.cjs'),file],{stdio:'inherit'});
 fs.writeFileSync(file,bridge.restore(fs.readFileSync(file,'utf8'),contract));
}catch(error){fs.writeFileSync(file,original);throw error;}
assert.equal(bridge.delivery(fs.readFileSync(file,'utf8')),contract.tail);
console.log('PASS reporting coordination: legacy/current report and DOM contracts; shared labels, redirect and delivery preserved.');
