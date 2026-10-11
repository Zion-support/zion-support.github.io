'use strict';
// Offline VM checks never submit forms or send email. --live uses read-only GET.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const planner=require('./render-pilot-planner-locales.cjs');
const origin='https://ziontechgroup.com';
const targets=l=>['/roi-calculator/'+(l==='en'?'':l+'/'),(l==='en'?'':'/'+l)+'/ai-governance-checklist/'];
function check(h,l){
 const lang=l==='pt'?'pt-BR':l;
 assert(h.includes('<html lang="'+lang+'">'),'language '+l);
 assert(h.includes('rel="canonical" href="'+origin+planner.route(l)+'"'),'canonical '+l);
 assert.equal((h.match(/rel="alternate"/g)||[]).length,6);
 for(const x of planner.locales)assert(h.includes('href="'+planner.route(x)+'"'),'switch '+x);
 const runtime=h.match(/<script>([\s\S]*?)<\/script>/);assert(runtime,'runtime missing');
 const elements={};for(const id of ['process','baseline','owner','systems','risk','metric','stop','build','copy','download','plan','result','status'])elements[id]={value:'QA-'+id,textContent:'',hidden:true};
 let payload,clicked=false;
 const context={document:{getElementById:id=>elements[id],createElement:()=>({click(){clicked=true;},remove(){}}),body:{appendChild(){}}},navigator:{},Blob,URL:{createObjectURL:blob=>{payload=blob;return 'blob:qa';},revokeObjectURL(){}},setTimeout:fn=>fn(),fetch(){throw Error('Unexpected network access');}};
 vm.runInNewContext(runtime[1],context);
 elements.build.onclick();assert(!elements.result.hidden);
 for(const dest of targets(l)){
  assert(h.includes('href="'+dest+'"'),'anchor '+dest);
  assert(elements.plan.textContent.includes(origin+dest),'plan '+dest);
 }
 assert(!h.includes('href="/roi-calc/"'),'stale ROI destination');
 for(const id of ['process','baseline','owner','systems','risk','metric','stop'])assert(elements.plan.textContent.includes('QA-'+id),'retained '+id);
 elements.download.onclick();assert(clicked&&payload,'download missing');
 return payload.text().then(text=>assert.equal(text,elements.plan.textContent,'export differs'));
}
async function main(){
 await planner.qa();
 for(const l of planner.locales)await check(planner.html(l),l);
 const baseline=process.argv.find(a=>a.startsWith('--baseline='));
 if(baseline){const previous=require(require('node:path').resolve(baseline.slice(11)));for(const l of planner.locales){let old=previous.html(l);const [roi,governance]=targets(l);old=old.split('/roi-calc/').join(roi).split('/ai-governance-checklist/').join(governance);assert.equal(planner.html(l),old,'unexpected generated change '+l);}}
 if(process.argv.includes('--live')){
  for(const l of planner.locales){const r=await fetch(origin+planner.route(l)+'?qa=planner-interlinks-'+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});assert.equal(r.status,200);await check(await r.text(),l);}
  for(const dest of [...new Set(planner.locales.flatMap(targets))]){const r=await fetch(origin+dest+'?qa='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});assert.equal(r.status,200,'destination '+dest);assert((await r.text()).includes('<html'),'destination HTML '+dest);}
 }
 console.log('PASS Planner interlinks: five language anchors, generated plans, exports, metadata and retained inputs'+(process.argv.includes('--live')?'; five live Planners and ten tool destinations':''));
}
module.exports={check,targets};if(require.main===module)main().catch(e=>{console.error(e);process.exitCode=1;});
