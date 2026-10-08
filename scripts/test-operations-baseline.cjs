'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const out=process.argv[2]||'out',asset=fs.readFileSync(path.join(out,'assets/js/operations-baseline.js'),'utf8');new vm.Script(asset);
const {estimate}=require(path.resolve(out,'assets/js/operations-baseline.js'));
assert.deepEqual(estimate(100,45,40),{capacityHours:40,capacityValue:1800});assert.deepEqual(estimate(0,45,100),{capacityHours:0,capacityValue:0});assert.equal(estimate(100,45,0).capacityValue,0);assert.equal(estimate(100,45,100).capacityValue,4500);assert.equal(estimate(100000,10000,100).capacityValue,1000000000);
for(const h of [NaN,Infinity,-1,100001,'100',undefined])assert.equal(estimate(h,45,40),null);assert.equal(estimate(100,10001,40),null);assert.equal(estimate(100,45,101),null);
assert(!/fetch\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon/.test(asset));
const m=JSON.parse(fs.readFileSync(path.join(out,'apps/operations-baseline-publication.json'),'utf8'));assert.equal(m.pages.length,5);assert.equal(m.homepages.length,5);assert.equal(m.tools.length,4);
for(const [i,r] of m.pages.entries()){
 const l=['en','pt-BR','es','fr','de'][i],h=fs.readFileSync(path.join(out,r.slice(1)),'utf8');assert(h.includes('<html lang="'+l+'">'));assert.equal((h.match(/rel="alternate"/g)||[]).length,6);assert.equal((h.match(/type="number"/g)||[]).length,3);assert(h.includes('src="/assets/js/operations-baseline.js" defer'));assert(!/<form\b/.test(h));
 const listeners={},nodes={'operations-baseline':{},'baseline-hours':{valueAsNumber:100},'baseline-rate':{valueAsNumber:45},'baseline-share':{valueAsNumber:40},'baseline-error':{},'baseline-hours-result':{},'baseline-value-result':{},'baseline-calculate':{}};for(const [id,n] of Object.entries(nodes))n.addEventListener=(e,fn)=>{listeners[id+e]=fn;};
 const document={documentElement:{lang:l},getElementById:id=>nodes[id]};vm.runInNewContext(asset,{document});assert.equal(nodes['baseline-error'].hidden,true);assert.equal(nodes['baseline-hours-result'].textContent,new Intl.NumberFormat(l,{maximumFractionDigits:2}).format(40));assert.equal(nodes['baseline-value-result'].textContent,new Intl.NumberFormat(l,{style:'currency',currency:'USD',maximumFractionDigits:2}).format(1800));nodes['baseline-hours'].valueAsNumber=NaN;listeners['baseline-hoursinput']();assert.equal(nodes['baseline-error'].hidden,false);assert.equal(nodes['baseline-value-result'].textContent,'—');nodes['baseline-hours'].valueAsNumber=0;listeners['baseline-calculateclick']();assert.equal(nodes['baseline-error'].hidden,true);
}
for(const r of [...m.homepages,...m.tools]){const h=fs.readFileSync(path.join(out,r.slice(1),'index.html'),'utf8');assert.equal((h.match(/<!--operations-baseline:start-->/g)||[]).length,1);}
console.log('PASS operations baseline: calculations, limits, invalid/blank inputs, five-language browser results and nine reciprocal promotions.');
