'use strict';
// Read-only publication regression; never submit a form or call a delivery service.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',release='app-verification-2026-10-10';
const locales={en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'};
const route=l=>(l==='en'?'/':'/'+l+'/')+'apps/app-verification-guide.html';
function verify(html,l){
 assert(html.includes('<html lang="'+locales[l]+'">'),'Language '+l);
 assert(html.includes('data-app-verification="'+release+'"'),'Release '+l);
 assert(html.includes('rel="canonical" href="https://ziontechgroup.com'+route(l)+'"'),'Canonical '+l);
 assert.equal((html.match(/rel="alternate"/g)||[]).length,6,'Alternates '+l);
 for(const [k,lang] of Object.entries(locales)){
  assert(html.includes('hreflang="'+lang+'" href="https://ziontechgroup.com'+route(k)+'"'),'Alternate '+l+' '+k);
  assert(html.includes('href="'+route(k)+'"'),'Language switch '+l+' '+k);
 }
 assert(html.includes('href="#main"'),'Skip '+l);assert.equal((html.match(/<h1>/g)||[]).length,1,'Heading '+l);
 assert.equal((html.match(/<li>/g)||[]).length,5,'Checklist '+l);
 assert(!/<(?:form|script)\b|onload=|onerror=/i.test(html),'Editorial only '+l);
 for(const slug of ['roi-calc','finops-estimator','ai-governance-checklist','sla-calculator']){
  assert(html.includes('href="/'+slug+'/"'),'Tool '+l+' '+slug);
  assert(html.includes('/blob/main/public/'+slug+'/index.html'),'Source '+l+' '+slug);
 }
}
function verifyIntegration(h,u){const home=['/','/en/','/es/','/fr/','/de/'].includes(u);assert.equal((h.match(home?/data-app-verification-home=/g:/data-app-verification-return=/g)||[]).length,1,'Owned integration '+u);}
if(process.argv.includes('--live')){
 (async()=>{
  const get=async u=>{const r=await fetch('https://ziontechgroup.com'+u+(u.includes('?')?'&':'?')+'app_verification_check='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});assert.equal(r.status,200,u);assert.equal(new URL(r.url).origin,'https://ziontechgroup.com');return r.text();};
  for(const l of Object.keys(locales)){verify(await get(route(l)),l);console.log('PASS live '+route(l));}
  const m=JSON.parse(await get('/apps/app-verification-publication.json'));assert.equal(m.release,release);assert.equal(m.guides.length,5);assert.equal(m.collectsData,false);
  for(const u of m.integrationPaths)verifyIntegration(await get(u),u);
  console.log('PASS live five guides, publication manifest and '+m.integrationPaths.length+' reciprocal integration routes; GET only.');
 })().catch(e=>{console.error(e);process.exitCode=1;});
}else{
 const read=u=>fs.readFileSync(path.join(out,u.slice(1)+(u.endsWith('/')?'index.html':'')),'utf8');
 for(const l of Object.keys(locales))verify(read(route(l)),l);
 const m=JSON.parse(read('/apps/app-verification-publication.json'));assert.equal(m.release,release);assert.equal(m.guides.length,5);assert.equal(m.collectsData,false);
 for(const u of m.integrationPaths)verifyIntegration(read(u),u);
 console.log('PASS offline five guide language/canonical/switcher/safety/source contracts and '+m.integrationPaths.length+' single-block integrations.');
}
