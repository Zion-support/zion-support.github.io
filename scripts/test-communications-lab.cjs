'use strict';
// node scripts/test-communications-lab.cjs out
// node scripts/test-communications-lab.cjs --live
// Offline mode never sends data. Live mode performs GET requests only.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const locales=['en','pt','es','fr','de'],apps=['smart-call-routing-ai','call-intelligence-hub','voicemail-triage-ai','meeting-intelligence-ai'];
const live=process.argv.includes('--live'),out=path.resolve(process.argv[2]&&!live?process.argv[2]:'out');
const prefix=l=>l==='en'?'/':'/'+l+'/';
async function read(route,marker){
 if(!live){const text=fs.readFileSync(path.join(out,route.slice(1)+(route.endsWith('/')?'index.html':'')),'utf8');if(marker)assert(text.includes(marker),route+': expected content');return text;}
 let last;
 for(let attempt=0;attempt<8;attempt++){
  try{
   const res=await fetch('https://ziontechgroup.com'+route+'?communications_check='+Date.now()+'-'+attempt,{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(15000)});
   assert.equal(res.status,200,route+': HTTP '+res.status);const text=await res.text();if(marker)assert(text.includes(marker),route+': expected release not propagated');return text;
  }catch(error){last=error;if(attempt<7){console.log('Waiting for strict live publication check: '+route+' ('+(attempt+1)+'/8)');await new Promise(resolve=>setTimeout(resolve,5000));}}
 }
 throw last;
}
function formTest(source,config){
 const elements={},events={},values={f0:'Synthetic owner',f1:'30 callbacks/week',f2:'<img src=x onerror=alert(1)>',f3:'Human review; stop on error'};
 for(const id of ['pilot-form','pilot-config','pilot-result','pilot-text','pilot-download'])elements[id]={hidden:true,textContent:'',addEventListener:(event,fn)=>events[id+':'+event]=fn};
 elements['pilot-config'].textContent=JSON.stringify(config);elements['pilot-form'].reportValidity=()=>true;
 let downloaded=0,revoked=0,blob;
 const sandbox={document:{getElementById:id=>elements[id],createElement:()=>({click:()=>downloaded++})},FormData:class{get(key){return values[key]}},URL:{createObjectURL:b=>(blob=b,'blob:local'),revokeObjectURL:()=>revoked++},Blob,setTimeout:fn=>fn(),fetch:()=>{throw Error('Worksheet must not use network')},localStorage:{setItem:()=>{throw Error('Worksheet must not use storage')}}};
 vm.runInNewContext(source,sandbox);events['pilot-form:submit']({preventDefault(){}});
 assert(!elements['pilot-result'].hidden);assert(elements['pilot-text'].textContent.includes(values.f2));
 for(const label of config.fields)assert(elements['pilot-text'].textContent.includes(label+': '));
 events['pilot-download:click']();assert.equal(downloaded,1);assert.equal(revoked,1);assert.equal(blob.type,'text/plain;charset=utf-8');
}
(async()=>{
 const source=await read('/assets/js/communications-planner.js','pilot-form');new vm.Script(source);let pages=0;
 for(const l of locales){
  for(const route of [...apps.map(slug=>prefix(l)+slug+'/'),prefix(l)+'apps/communications-workflow-lab.html']){
   const html=await read(route,'data-communications-lab="2026-10-08-tail"');
   assert(html.includes('<html lang="'+(l==='pt'?'pt-BR':l)+'"'),route+': locale');
   assert.equal((html.match(/<h1>/g)||[]).length,1);assert.equal((html.match(/id="pilot-form"/g)||[]).length,1);
   assert.equal((html.match(/hreflang=/g)||[]).length,6);
   for(const slug of apps)assert(html.includes('href="'+prefix(l)+slug+'/"'),route+': reciprocal link '+slug);
   const match=html.match(/<script type="application\/json" id="pilot-config">([\s\S]*?)<\/script>/);assert(match,route+': configuration');
   const config=JSON.parse(match[1]);assert.equal(config.fields.length,4);assert.equal(config.route,'https://ziontechgroup.com'+route);formTest(source,config);pages++;
  }
  const homepage=l==='pt'?'/':'/'+l+'/';const html=await read(homepage,'id="communications-workflow-lab"');
  assert.equal((html.match(/id="communications-workflow-lab"/g)||[]).length,1,homepage+': homepage promotion');
  assert(html.includes('href="'+prefix(l)+'apps/communications-workflow-lab.html"'),homepage+': local lab link');
 }
 assert.equal(pages,25);
 const manifest=JSON.parse(await read('/apps/communications-publication.json','2026-10-08-tail-decision'));
 assert.equal(manifest.release,'2026-10-08-tail-decision');assert.deepEqual(manifest.locales,locales);assert.equal(manifest.routes.length,40);assert.equal(new Set(manifest.routes).size,40);
 for(const route of manifest.routes){assert(/^\/[a-z0-9/.-]*$/i.test(route),'Unsafe manifest route');const html=await read(route,'data-communications-decision="2026-10-08-tail-decision"');
  assert.equal((html.match(/data-communications-decision=/g)||[]).length,1,route+': duplicate decision content');
  if(route.endsWith('communications-decision-guide.html')){
   const l=route.startsWith('/apps/')?'en':route.split('/')[1];assert(html.includes('<html lang="'+(l==='pt'?'pt-BR':l)+'"'),route+': language');
   assert.equal((html.match(/hreflang=/g)||[]).length,6);assert(html.includes('rel="canonical" href="https://ziontechgroup.com'+route+'"'));
   assert.equal((html.match(/<tr>/g)||[]).length,5,route+': comparison rows');
   for(const slug of apps)assert(html.includes('href="'+prefix(l)+slug+'/"'),route+': app link '+slug);
  }
 }
 console.log('PASS '+(live?'live GET + local behavioral':'offline structural + local behavioral')+': 25 worksheets, 5 homepage promotions, 40 decision-release routes, 5 complete guide locales; safe report rendering and downloads; no email sent.');
})().catch(error=>{console.error(error);process.exitCode=1;});
