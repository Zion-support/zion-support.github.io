'use strict';
// Offline or GET-only live release verification; never submits a form.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const live=process.argv.includes('--live'),out=path.resolve(live?'out':process.argv[2]||'out');
const locales=['en','pt','es','fr','de'],apps=['smart-call-routing-ai','call-intelligence-hub','voicemail-triage-ai','meeting-intelligence-ai'];
const prefix=l=>l==='en'?'/':'/'+l+'/',guide=l=>prefix(l)+'apps/communications-decision-guide.html';
async function get(r){if(!live)return fs.readFileSync(path.join(out,r.slice(1)+(r.endsWith('/')?'index.html':'')),'utf8');let last;for(let n=0;n<4;n++){try{const res=await fetch('https://ziontechgroup.com'+r+'?decision_check='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(20000)});assert.equal(res.status,200,r);return await res.text();}catch(e){last=e;if(n<3)await new Promise(resolve=>setTimeout(resolve,3000));}}throw last;}
(async()=>{
 const manifest=JSON.parse(await get('/apps/communications-publication.json'));assert.equal(manifest.release,'2026-10-08-tail-decision');assert.equal(manifest.routes.length,40);let checked=0;
 for(const l of locales){
  const h=await get(guide(l));assert(h.includes('data-communications-decision="2026-10-08-tail-decision"'));assert(h.includes('<html lang="'+(l==='pt'?'pt-BR':l)+'"'));assert.equal((h.match(/hreflang=/g)||[]).length,6);assert.equal((h.match(/<h1>/g)||[]).length,1);assert.equal((h.match(/<th scope="col">/g)||[]).length,4);assert.equal((h.match(/<th scope="row">/g)||[]).length,4);
  assert(h.includes('rel="canonical" href="https://ziontechgroup.com'+guide(l)+'"'));
  for(const slug of apps)assert(h.includes('href="'+prefix(l)+slug+'/"'));
  for(const k of locales)assert(h.includes('href="'+guide(k)+'"'));
  checked++;
  for(const r of [prefix(l)+'apps/communications-workflow-lab.html',...apps.map(s=>prefix(l)+s+'/'),'/apps/discovery-showcase'+(l==='en'?'':'-'+l)+'.html',l==='pt'?'/':'/'+l+'/']){
   const html=await get(r);assert(html.includes('href="'+guide(l)+'"'),r+': local comparison link missing');
   if(!live)assert.equal((html.match(/id="communications-decision-path"/g)||[]).length,1,r+': duplicate');
   checked++;
  }
 }
 assert.equal(checked,40);console.log('PASS '+(live?'GET-only live':'offline')+': 40 publication routes, 5 complete comparison guides, reciprocal localized navigation. No email sent.');
})().catch(e=>{console.error(e);process.exitCode=1;});
