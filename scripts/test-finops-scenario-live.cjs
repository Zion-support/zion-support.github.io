'use strict';
const assert=require('node:assert/strict'),vm=require('node:vm');
const base='https://ziontechgroup.com',version='2026-10-09-finops-scenario-v1',L=['en','pt','es','fr','de'],prefix=l=>l==='en'?'/':'/'+l+'/',delay=ms=>new Promise(r=>setTimeout(r,ms));
const operationalVersion='2026-10-30-operational-tools-v2',baselineVersion='roi-baseline-2026-10-30-v1';
const toolSlugs=['roi-calc','sla-calculator','ai-governance-checklist'];
function verifyJourney(h,l,u){
 assert(L.includes(l),'Known journey locale');
 const p=prefix(l),target=p+'apps/finops-scenario-estimator.html',slug=toolSlugs.find(s=>u===p+s+'/');
 if(slug){
  assert(h.includes('<html lang="'+(l==='pt'?'pt-BR':l)+'"'),u+' language');
  assert(h.includes('rel="canonical" href="'+base+u+'"'),u+' canonical');
  assert(h.includes('data-operational-tools="'+operationalVersion+'"'),u+' operational release marker');
  if(slug==='roi-calc')assert(h.includes('data-roi-baseline="'+baselineVersion+'"'),u+' baseline release marker');
  const links=[...h.matchAll(/<a\b[^>]*\shref="([^"]*)"[^>]*>/g)].map(m=>m[1]);
  assert.equal(links.filter(href=>href===target).length,1,u+' unique local FinOps destination');
  for(const other of L)if(other!==l)assert(!links.includes(prefix(other)+'apps/finops-scenario-estimator.html'),u+' wrong-language FinOps destination '+other);
 }else{
  assert(u===(l==='pt'?'/':'/'+l+'/')||u===p+'apps/network-learning-paths.html','Known FinOps promotion route '+u);
  assert.equal((h.match(/data-finops-promotion="2026-10-09-finops-scenario-v1"/g)||[]).length,1,u+' unique promotion');
  assert(h.includes('href="'+target+'"'),u+' return link');
  if(u.endsWith('network-learning-paths.html'))assert(h.includes('id="finops-mobile-fix"'),u+' mobile rule');
 }
}
function selfTest(){
 let accepted=0,rejected=0;
 const reject=(html,l,u,message)=>{assert.throws(()=>verifyJourney(html,l,u),message);rejected++;};
 for(const l of L){
  const p=prefix(l),target=p+'apps/finops-scenario-estimator.html',wrong=prefix(l==='en'?'pt':'en')+'apps/finops-scenario-estimator.html';
  for(const slug of toolSlugs){
   const u=p+slug+'/',baseline=slug==='roi-calc'?' data-roi-baseline="'+baselineVersion+'"':'';
   const h='<html lang="'+(l==='pt'?'pt-BR':l)+'"><head><link rel="canonical" href="'+base+u+'"></head><body data-operational-tools="'+operationalVersion+'"'+baseline+'><a href="'+target+'">FinOps</a></body></html>';
   verifyJourney(h,l,u);accepted++;
   reject(h.replace('<a href="'+target+'">FinOps</a>',''),l,u,/unique local FinOps destination/);
   reject(h.replace('href="'+target+'"','href="'+wrong+'"'),l,u,/unique local FinOps destination/);
   reject(h+'<a href="'+wrong+'">Wrong locale</a>',l,u,/wrong-language FinOps destination/);
   reject(h+'<a href="'+target+'">Duplicate</a>',l,u,/unique local FinOps destination/);
   reject(h.replace('<html lang="','<html lang="invalid-'),l,u,/language/);
   reject(h.replace('href="'+base+u+'"','href="'+base+'/wrong/"'),l,u,/canonical/);
   reject(h.replace(operationalVersion,'stale-operational-release'),l,u,/operational release marker/);
   if(baseline)reject(h.replace(baseline,''),l,u,/baseline release marker/);
  }
  for(const u of [l==='pt'?'/':'/'+l+'/',p+'apps/network-learning-paths.html']){
   const h='<aside data-finops-promotion="'+version+'"><a href="'+target+'">FinOps</a></aside>'+(u.endsWith('network-learning-paths.html')?'<style id="finops-mobile-fix"></style>':'');
   verifyJourney(h,l,u);accepted++;
   reject(h.replace(version,'stale-finops-release'),l,u,/unique promotion/);
   reject(h+h,l,u,/unique promotion/);
   reject(h.replace('href="'+target+'"','href="'+wrong+'"'),l,u,/return link/);
   if(u.endsWith('network-learning-paths.html'))reject(h.replace('id="finops-mobile-fix"',''),l,u,/mobile rule/);
  }
 }
 console.log('PASS FinOps journey self-test: '+accepted+' valid fixtures, '+rejected+' rejected corruptions; no network requests.');
 return {accepted,rejected};
}
async function get(u){const r=await fetch(base+u,{cache:'no-store',signal:AbortSignal.timeout(20000)});assert.equal(r.status,200,'HTTP '+r.status+' '+u);return r.text();}
async function check(){let count=0;
 for(const l of L){const p=prefix(l),lang=l==='pt'?'pt-BR':l;
  for(const slug of ['finops-scenario-estimator','finops-pilot-guide']){const u=p+'apps/'+slug+'.html',h=await get(u);assert(h.includes('data-finops-scenario="'+version+'"'),u+' release marker');assert(h.includes('<html lang="'+lang+'"'),u+' language');assert(h.includes('rel="canonical" href="'+base+u+'"'),u+' canonical');assert.equal((h.match(/rel="alternate"/g)||[]).length,6,u+' alternates');count++;}
  const routes=[l==='pt'?'/':'/'+l+'/',...['roi-calc','sla-calculator','ai-governance-checklist'].map(s=>p+s+'/'),p+'apps/network-learning-paths.html'];
  for(const u of routes){const h=await get(u);verifyJourney(h,l,u);count++;}
 }
 const js=await get('/assets/js/finops-scenario.js');assert(!/fetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon|innerHTML/.test(js));const model={};vm.runInNewContext(js,model,{timeout:1000});assert.deepEqual(Array.from(model.ZionFinopsScenario.calculate([10000,15,200,3000,12])).slice(0,3),[1500,1300,12600]);count++;
 const css=await get('/assets/css/discovery.css');assert(css.length>100);count++;
 const manifest=JSON.parse(await get('/apps/finops-scenario-publication.json'));assert.equal(manifest.version,version);assert.equal(manifest.pages.length,10);assert.equal(manifest.homepages.length,5);assert.equal(manifest.reciprocalPages.length,20);count++;
 console.log('PASS '+count+' live pages/assets: 10 translated pages, 5 homepage promotions, 20 reciprocal links, JS math, CSS and manifest. Browser viewport and native form behavior are separate checks.');
}
module.exports={verifyJourney,selfTest};
if(require.main===module){
 if(process.argv.includes('--self-test'))selfTest();
 else (async()=>{for(let attempt=1;attempt<=6;attempt++){try{await check();return;}catch(e){console.error('Attempt '+attempt+': '+e.message);if(attempt===6)throw e;await delay(20000);}}})().catch(e=>{console.error(e.stack);process.exitCode=1;});
}
