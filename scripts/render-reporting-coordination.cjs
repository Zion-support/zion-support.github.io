'use strict';
// Preserve concurrent field evidence and leave the intentional /pt/ redirect unchanged.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',redirect=path.join(out,'pt/index.html'),saved=redirect+'.reporting-preserve';
let redirectBytes;
if(fs.existsSync(redirect)&&/http-equiv\s*=\s*["']refresh/i.test(fs.readFileSync(redirect,'utf8'))){
 redirectBytes=fs.readFileSync(redirect);assert(!fs.existsSync(saved),'Previous redirect preservation not restored');fs.renameSync(redirect,saved);
}
try{require('./render-field-evidence-locales.cjs');}finally{
 if(redirectBytes){fs.renameSync(saved,redirect);assert.deepEqual(fs.readFileSync(redirect),redirectBytes,'Portuguese redirect changed');}
}
const file=path.join(out,'assets/js/discovery-delivery.js');let js=fs.readFileSync(file,'utf8');
if(!js.includes('resourceClassificationV1')){
 const delivery=js.slice(js.indexOf(' const cc='));
 const classified="apps.map(a=>a[0]+' ['+recommendationKind(a[1])+'] https://ziontechgroup.com'+a[1])";
 const original="apps.map(a=>a[0]+' https://ziontechgroup.com'+a[1])";
 assert(js.includes(classified),'Concurrent report classification contract changed');
 assert(js.includes('link.textContent=name+" — "+recommendationKind(path);'),'Concurrent display contract changed');
 js=js.replace(classified,original).replace('link.textContent=name+" — "+recommendationKind(path);','link.textContent=name;');
 assert.equal(js.slice(js.indexOf(' const cc=')),delivery,'Email delivery logic changed');fs.writeFileSync(file,js);
}
require('./render-reporting-resources.cjs');
require('./test-reporting-resource-types.cjs');
console.log('PASS coordinated field evidence and reporting guides; preserved Portuguese redirect and parallel release.');
