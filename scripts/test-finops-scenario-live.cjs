'use strict';
const assert=require('node:assert/strict'),vm=require('node:vm');
const base='https://ziontechgroup.com',version='2026-10-09-finops-scenario-v1',L=['en','pt','es','fr','de'],prefix=l=>l==='en'?'/':'/'+l+'/',delay=ms=>new Promise(r=>setTimeout(r,ms));
async function get(u){const r=await fetch(base+u,{cache:'no-store',signal:AbortSignal.timeout(20000)});assert.equal(r.status,200,'HTTP '+r.status+' '+u);return r.text();}
async function check(){let count=0;
 for(const l of L){const p=prefix(l),lang=l==='pt'?'pt-BR':l;
  for(const slug of ['finops-scenario-estimator','finops-pilot-guide']){const u=p+'apps/'+slug+'.html',h=await get(u);assert(h.includes('data-finops-scenario="'+version+'"'),u+' release marker');assert(h.includes('<html lang="'+lang+'"'),u+' language');assert(h.includes('rel="canonical" href="'+base+u+'"'),u+' canonical');assert.equal((h.match(/rel="alternate"/g)||[]).length,6,u+' alternates');count++;}
  const routes=[l==='pt'?'/':'/'+l+'/',...['roi-calc','sla-calculator','ai-governance-checklist'].map(s=>p+s+'/'),p+'apps/network-learning-paths.html'];
  for(const u of routes){const h=await get(u);assert.equal((h.match(/data-finops-promotion="2026-10-09-finops-scenario-v1"/g)||[]).length,1,u+' unique promotion');assert(h.includes('href="'+p+'apps/finops-scenario-estimator.html"'),u+' return link');if(u.endsWith('network-learning-paths.html'))assert(h.includes('id="finops-mobile-fix"'),u+' mobile rule');count++;}
 }
 const js=await get('/assets/js/finops-scenario.js');assert(!/fetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon|innerHTML/.test(js));const model={};vm.runInNewContext(js,model,{timeout:1000});assert.deepEqual(Array.from(model.ZionFinopsScenario.calculate([10000,15,200,3000,12])).slice(0,3),[1500,1300,12600]);count++;
 const css=await get('/assets/css/discovery.css');assert(css.length>100);count++;
 const manifest=JSON.parse(await get('/apps/finops-scenario-publication.json'));assert.equal(manifest.version,version);assert.equal(manifest.pages.length,10);assert.equal(manifest.homepages.length,5);assert.equal(manifest.reciprocalPages.length,20);count++;
 console.log('PASS '+count+' live pages/assets: 10 translated pages, 5 homepage promotions, 20 reciprocal links, JS math, CSS and manifest. Browser viewport and native form behavior are separate checks.');
}
(async()=>{for(let attempt=1;attempt<=6;attempt++){try{await check();return;}catch(e){console.error('Attempt '+attempt+': '+e.message);if(attempt===6)throw e;await delay(20000);}}})().catch(e=>{console.error(e.stack);process.exitCode=1;});
