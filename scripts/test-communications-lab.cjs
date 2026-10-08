'use strict';
// node scripts/test-communications-lab.cjs out
// node scripts/test-communications-lab.cjs --live
// Local mode never sends data. Live mode performs GET requests only.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const locales=['en','pt','es','fr','de'],apps=['smart-call-routing-ai','call-intelligence-hub','voicemail-triage-ai','meeting-intelligence-ai'];
const live=process.argv.includes('--live'),out=path.resolve(process.argv[2]&&!live?process.argv[2]:'out');
const prefix=l=>l==='en'?'/':'/'+l+'/';
async function read(route){
 if(!live)return fs.readFileSync(path.join(out,route.slice(1)+(route.endsWith('/')?'index.html':'')),'utf8');
 const res=await fetch('https://ziontechgroup.com'+route+'?communications_check='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(25000)});
 assert.equal(res.status,200,route+': HTTP '+res.status);return res.text();
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
 const source=await read('/assets/js/communications-planner.js');new vm.Script(source);let pages=0;
 for(const l of locales){
  for(const route of [...apps.map(slug=>prefix(l)+slug+'/'),prefix(l)+'apps/communications-workflow-lab.html']){
   const html=await read(route);assert(html.includes('data-communications-lab="2026-10-08-tail"'),route+': release marker');
   assert(html.includes('<html lang="'+(l==='pt'?'pt-BR':l)+'"'),route+': locale');
   assert.equal((html.match(/<h1>/g)||[]).length,1);assert.equal((html.match(/id="pilot-form"/g)||[]).length,1);
   assert.equal((html.match(/hreflang=/g)||[]).length,6);
   for(const slug of apps)assert(html.includes('href="'+prefix(l)+slug+'/"'),route+': reciprocal link '+slug);
   const match=html.match(/<script type="application\/json" id="pilot-config">([\s\S]*?)<\/script>/);assert(match,route+': configuration');
   const config=JSON.parse(match[1]);assert.equal(config.fields.length,4);assert.equal(config.route,'https://ziontechgroup.com'+route);formTest(source,config);pages++;
  }
  const homepage=l==='pt'?'/':'/'+l+'/';const html=await read(homepage);
  assert.equal((html.match(/id="communications-workflow-lab"/g)||[]).length,1,homepage+': homepage promotion');
  assert(html.includes('href="'+prefix(l)+'apps/communications-workflow-lab.html"'),homepage+': local lab link');
 }
 assert.equal(pages,25);
 console.log('PASS '+(live?'live GET + local behavioral':'offline structural + local behavioral')+': 25 pages, 5 homepage promotions, reciprocal links, 5 locales, safe report rendering and downloads; no email sent.');
})().catch(error=>{console.error(error);process.exitCode=1;});
