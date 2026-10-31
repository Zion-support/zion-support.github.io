'use strict';
// Offline assertions plus optional read-only GETs. Never submit a form.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',origin='https://ziontechgroup.com';
const locales={en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'};
const route=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
const roiRoute=l=>(l==='en'?'/':'/'+l+'/')+'roi-calc/';
const networkRoute=l=>(l==='en'?'/':'/'+l+'/')+'apps/network.html';
function verify(html,l){
 assert(html.includes('<html lang="'+locales[l]+'"'),'wrong language '+l);
 assert(html.includes('data-field-evidence-release="2026-10-09"'),'missing release '+l);
 assert(!/<form\b|<script\b/i.test(html),'guide must not submit '+l);
 assert(html.includes('rel="canonical" href="'+origin+route(l)+'"'),'canonical '+l);
 for(const [other,lang] of Object.entries(locales)){
  assert(html.includes('hreflang="'+lang+'" href="'+origin+route(other)+'"'),'alternate '+l+' '+other);
  assert(html.includes('href="'+route(other)+'"'),'language navigation '+l+' '+other);
 }
 for(const url of ['/apps/supplier-quote-evidence-workbench.html','/sla-calculator/','/automation-pilot-planner/'])assert(html.includes('href="'+url+'"'),'tool link '+url);
 assert(html.includes('href="'+roiRoute(l)+'"'),'localized ROI tool link '+l);
 for(const other of Object.keys(locales))if(other!==l)assert(!html.includes('href="'+roiRoute(other)+'"'),'wrong-language ROI tool link '+l+' → '+other);
}
function verifyDiscovery(html,l){
 const owned=html.match(/<!--zion-field-return:start-->[\s\S]*?<!--zion-field-return:end-->/g)||[];
 assert.equal(owned.length,1,'Discovery return block '+l);
 assert(owned[0].includes('lang="'+locales[l]+'"'),'Discovery return language '+l);
 assert(owned[0].includes('href="'+route(l)+'"'),'Discovery localized guide '+l);
 assert(owned[0].includes('href="'+networkRoute(l)+'"'),'Discovery localized network map '+l);
 for(const other of Object.keys(locales))if(other!==l)assert(!owned[0].includes('href="'+networkRoute(other)+'"'),'wrong-language Discovery network map '+l+' → '+other);
 assert(owned[0].includes('data-field-evidence-return="2026-10-09-v2"'),'Discovery return version '+l);
 assert(/<form\b/i.test(html),'Discovery form missing '+l);
}
if(process.argv.includes('--live')){
 (async()=>{
  for(const l of Object.keys(locales)){
   const url=origin+route(l)+'?qa=field-evidence-20261009-'+Date.now();
   const r=await fetch(url,{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});
   assert.equal(r.status,200,url);verify(await r.text(),l);console.log('PASS live '+route(l));
   const discovery=l==='en'?'/discovery/':'/'+l+'/discovery/';
   const d=await fetch(origin+discovery+'?qa=field-return-'+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});
   assert.equal(d.status,200,discovery);verifyDiscovery(await d.text(),l);console.log('PASS live localized return '+discovery);
  }

  // Deployment-artifact aliases and reciprocal promotions are produced after
  // the early offline gate. Verify them only in this final live phase.
  async function readOnly(url){
   const r=await fetch(origin+url+'?qa=field-navigation-'+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});
   assert.equal(r.status,200,url);assert(new URL(r.url).origin===origin,'Unexpected cross-origin redirect '+url);
   return r.text();
  }
  for(const l of ['pt','es','fr','de']){
   const alias='/'+l+'/apps/field-service-evidence-guide.html';
   verify(await readOnly(alias),l);console.log('PASS live canonical-preserving alias '+alias);
  }
  for(const l of Object.keys(locales)){
   const home=l==='pt'?'/':'/'+l+'/';const html=await readOnly(home);
   assert(html.includes('href="'+route(l)+'"'),'Homepage lost localized field guide '+l);
   const promos=html.match(/<!--field-evidence-locales:start-->[\s\S]*?<!--field-evidence-locales:end-->/g)||[];
   assert.equal(promos.length,1,'Duplicate or missing owned homepage promotion '+l);
   assert(promos[0].includes('href="'+route(l)+'"'),'Owned promotion changed locale '+l);
   assert(!/<form\b|<script\b/i.test(promos[0]),'Promotion must not submit '+l);
   assert(!html.includes('<!--zion-field-evidence:start-->'),'Obsolete English promotion '+l);
   console.log('PASS live localized homepage promotion '+home);
  }
  for(const url of ['/apps/supplier-quote-evidence-workbench.html','/sla-calculator/','/roi-calc/','/automation-pilot-planner/']){
   const html=await readOnly(url);
   for(const l of Object.keys(locales))assert(html.includes('href="'+route(l)+'"'),'Tool lost guide return '+url+' '+l);
   console.log('PASS live reciprocal guide links '+url);
  }
  console.log('PASS 23 scoped live routes; publication and navigation only, not email delivery or functional certification.');

 })().catch(e=>{console.error(e);process.exitCode=1;});
}else{
 for(const l of Object.keys(locales)){
  const html=fs.readFileSync(path.join(out,route(l).slice(1)),'utf8');verify(html,l);
  // Retaining the correct link must not hide an additional wrong-language link.
  const wrong=roiRoute(l==='en'?'pt':'en'),bad=html+'<a href="'+wrong+'">wrong-language test fixture</a>';
  assert.throws(()=>verify(bad,l),/wrong-language ROI tool link/,'reject extra wrong-language ROI destination '+l);
 }
 for(const l of Object.keys(locales)){
  const rel=l==='pt'?'index.html':l+'/index.html',f=path.join(out,rel);if(!fs.existsSync(f))continue;
  const html=fs.readFileSync(f,'utf8');if(/http-equiv\s*=\s*["']?refresh/i.test(html))continue;
  assert(html.includes('href="'+route(l)+'"'),'localized homepage '+l);
 }
 for(const l of Object.keys(locales)){
  const rel=l==='en'?'discovery/index.html':l+'/discovery/index.html';
  const html=fs.readFileSync(path.join(out,rel),'utf8');verifyDiscovery(html,l);
  // Reject an extra wrong-language map even when the correct map is retained.
  const wrong=networkRoute(l==='en'?'pt':'en');
  const bad=html.replace('<!--zion-field-return:end-->','<a href="'+wrong+'">wrong-language test fixture</a><!--zion-field-return:end-->');
  assert.throws(()=>verifyDiscovery(bad,l),/wrong-language Discovery network map/,'reject extra wrong-language map '+l);
 }
 const js=fs.readFileSync(path.join(out,'assets/js/discovery-delivery.js'),'utf8');
 assert(js.includes('function recommendationKind('),'classifications missing');
 assert(js.includes("commercial@ziontechgroup.com"),'commercial recipient lost');
 assert(js.includes('recommendationKind(a[1])')||js.includes('resourceType(a)'),'report labels missing');
 assert(js.includes('recommendationKind(path)')||js.includes('resourceType([name,path])'),'on-page labels missing');
 console.log('PASS five guide locales, alternates, navigation, homepage links and recommendation labels.');
}
