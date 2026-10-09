"use strict";
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const bridge=require('./reporting-contract-bridge.cjs');
const reports=["apps.map(a=>a[0]+' — '+recommendationKind(a[1])+' https://ziontechgroup.com'+a[1])","apps.map(a=>a[0]+' ['+recommendationKind(a[1])+'] https://ziontechgroup.com'+a[1])"];
const current=" for(const [name,path] of apps){const item=document.createElement('li'),link=document.createElement('a'),kind=document.createElement('span');link.href=path;link.textContent=name;kind.textContent=' — '+recommendationKind(path);item.appendChild(link);item.appendChild(kind);list.appendChild(item);}";
const legacy=" for(const [name,path] of apps){const item=document.createElement('li'),link=document.createElement('a');link.href=path;link.textContent=name+\" — \"+recommendationKind(path);item.appendChild(link);list.appendChild(item);}";
let cases=0;
for(const report of reports)for(const display of [current,legacy]){
 const original=report+'\n'+display+'\n const cc=f.email; // delivery sentinel';const c=bridge.prepare(original);
 assert(!c.source.includes('recommendationKind'));assert.equal(bridge.delivery(c.source),bridge.delivery(original));
 const transformed='// resourceClassificationV1\n'+c.source.replace("a[0]+' https://ziontechgroup.com'+a[1]","a[0]+' ['+resourceType(a)+'] https://ziontechgroup.com'+a[1]").replace('link.textContent=name;',"link.textContent=name+' — '+resourceType([name,path]);");
 const restored=bridge.restore(transformed,c);assert(restored.includes(report));assert(restored.includes(display));assert.equal(bridge.delivery(restored),bridge.delivery(original));assert(bridge.prepare(restored).skip);cases++;
}
assert.throws(()=>bridge.prepare('unknown\n const cc=x'),/Unknown report/);
assert.throws(()=>bridge.prepare(reports[0]+'\n const cc=x'),/Unknown recommendation/);
assert.throws(()=>bridge.prepare('unknown'),/Missing delivery/);
const asset=process.argv[2];if(asset){const source=fs.readFileSync(asset,'utf8'),c=bridge.prepare(source);assert.equal(bridge.delivery(c.source),bridge.delivery(source));}
console.log('PASS bridge regression: '+cases+' report/DOM combinations, repeat render, fail-closed unknown contracts and delivery preservation.');
