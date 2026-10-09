'use strict';
// Offline assertions plus optional read-only GETs. Never submit a form.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',origin='https://ziontechgroup.com';
const locales={en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'};
const route=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
function verify(html,l){
 assert(html.includes('<html lang="'+locales[l]+'"'),'wrong language '+l);
 assert(html.includes('data-field-evidence-release="2026-10-09"'),'missing release '+l);
 assert(!/<form\b|<script\b/i.test(html),'guide must not submit '+l);
 assert(html.includes('rel="canonical" href="'+origin+route(l)+'"'),'canonical '+l);
 for(const [other,lang] of Object.entries(locales)){
  assert(html.includes('hreflang="'+lang+'" href="'+origin+route(other)+'"'),'alternate '+l+' '+other);
  assert(html.includes('href="'+route(other)+'"'),'language navigation '+l+' '+other);
 }
 for(const url of ['/apps/supplier-quote-evidence-workbench.html','/sla-calculator/','/roi-calc/','/automation-pilot-planner/'])assert(html.includes('href="'+url+'"'),'tool link '+url);
}
function verifyDiscovery(html,l){
 const owned=html.match(/<!--zion-field-return:start-->[\s\S]*?<!--zion-field-return:end-->/g)||[];
 assert.equal(owned.length,1,'Discovery return block '+l);
 assert(owned[0].includes('lang="'+locales[l]+'"'),'Discovery return language '+l);
 assert(owned[0].includes('href="'+route(l)+'"'),'Discovery localized guide '+l);
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
 })().catch(e=>{console.error(e);process.exitCode=1;});
}else{
 for(const l of Object.keys(locales))verify(fs.readFileSync(path.join(out,route(l).slice(1)),'utf8'),l);
 for(const l of Object.keys(locales)){
  const rel=l==='pt'?'index.html':l+'/index.html',f=path.join(out,rel);if(!fs.existsSync(f))continue;
  const html=fs.readFileSync(f,'utf8');if(/http-equiv\s*=\s*["']?refresh/i.test(html))continue;
  assert(html.includes('href="'+route(l)+'"'),'localized homepage '+l);
 }
 for(const l of Object.keys(locales)){
  const rel=l==='en'?'discovery/index.html':l+'/discovery/index.html';
  verifyDiscovery(fs.readFileSync(path.join(out,rel),'utf8'),l);
 }
 const js=fs.readFileSync(path.join(out,'assets/js/discovery-delivery.js'),'utf8');
 assert(js.includes('function recommendationKind('),'classifications missing');
 assert(js.includes("commercial@ziontechgroup.com"),'commercial recipient lost');
 assert(js.includes('recommendationKind(a[1])')||js.includes('resourceType(a)'),'report labels missing');
 assert(js.includes('recommendationKind(path)')||js.includes('resourceType([name,path])'),'on-page labels missing');
 console.log('PASS five guide locales, alternates, navigation, homepage links and recommendation labels.');
}
