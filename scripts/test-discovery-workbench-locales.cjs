'use strict';
// Standalone read-only checks. Node 18+; no form submissions or app execution.
// Offline: node scripts/test-discovery-workbench-locales.cjs public
// Artifact: node scripts/test-discovery-workbench-locales.cjs out
// Live: node scripts/test-discovery-workbench-locales.cjs --live
// Authored during a sandbox outage; execution must be independently verified.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const origin = 'https://ziontechgroup.com';
const routes = [
  {lang:'en',url:'/apps/discovery-report-workbench.html',guide:'/apps/free-discovery-to-pilot-guide.html'},
  {lang:'pt-BR',url:'/pt/apps/discovery-report-workbench.html',guide:'/pt/apps/free-discovery-to-pilot-guide.html'},
  {lang:'es',url:'/es/apps/discovery-report-workbench.html',guide:'/es/apps/free-discovery-to-pilot-guide.html'},
  {lang:'fr',url:'/fr/apps/discovery-report-workbench.html',guide:'/fr/apps/free-discovery-to-pilot-guide.html'},
  {lang:'de',url:'/de/apps/discovery-report-workbench.html',guide:'/de/apps/free-discovery-to-pilot-guide.html'}
];
function attr(tag,key){const m=tag.match(new RegExp('\\b'+key+'=["\']([^"\']*)["\']','i'));return m?m[1]:null;}
function verify(html,route){
  assert.equal(typeof html,'string');
  assert.equal(attr((html.match(/<html\b[^>]*>/i)||[])[0]||'','lang'),route.lang,'document language '+route.url);
  assert.equal((html.match(/<h1\b/gi)||[]).length,1,'one h1');
  assert((html.match(/<h2\b/gi)||[]).length>=5,'planning sections');
  assert.equal((html.match(/class=["']card["']/g)||[]).length,9,'nine planning cards');
  assert(!/<(?:form|script)\b/i.test(html),'guide must not introduce forms or scripts');
  const links=html.match(/<link\b[^>]*>/gi)||[];
  const canon=links.filter(t=>attr(t,'rel')==='canonical');
  assert.equal(canon.length,1,'one canonical');
  assert.equal(attr(canon[0],'href'),origin+route.url,'self canonical');
  const alts=links.filter(t=>attr(t,'rel')==='alternate');
  assert.equal(alts.length,6,'five languages plus default');
  for(const r of routes){const a=alts.filter(t=>attr(t,'hreflang')===r.lang);assert.equal(a.length,1,'unique alternate '+r.lang);assert.equal(attr(a[0],'href'),origin+r.url);}
  const def=alts.filter(t=>attr(t,'hreflang')==='x-default');assert.equal(def.length,1);assert.equal(attr(def[0],'href'),origin+routes[0].url);
  const navs=html.match(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi)||[];
  const owned=navs.filter(n=>routes.every(r=>n.includes('href="'+r.url+'"')));
  assert.equal(owned.length,1,'one complete language selector');
  const anchors=owned[0].match(/<a\b[^>]*>/gi)||[];
  assert.equal(anchors.length,5,'five language anchors');
  let current=0;
  for(const r of routes){const a=anchors.filter(t=>attr(t,'href')===r.url);assert.equal(a.length,1,'unique selector target');assert.equal(attr(a[0],'lang'),r.lang);assert.equal(attr(a[0],'hreflang'),r.lang);if(attr(a[0],'aria-current')==='page'){current++;assert.equal(r.lang,route.lang,'correct current language');}}
  assert.equal(current,1,'one current language');
  assert(html.includes('href="'+route.guide+'"'),'same-language pilot guide');
  assert(html.includes(':focus-visible'),'visible keyboard focus style');
  return true;
}
async function main(){
  const live=process.argv.includes('--live');
  const root=process.argv.slice(2).find(a=>!a.startsWith('--'))||'public';
  const pages=[];
  if(!live){for(const r of routes)assert(fs.existsSync(path.join(root,r.url.slice(1))),'missing page '+r.url);}
  for(const r of routes){
    let html;
    if(live){const response=await fetch(origin+r.url+'?workbench-contract='+Date.now(),{redirect:'error',signal:AbortSignal.timeout(25000),headers:{'Cache-Control':'no-cache'}});assert.equal(response.status,200,r.url);html=await response.text();}
    else html=fs.readFileSync(path.join(root,r.url.slice(1)),'utf8');
    verify(html,r);pages.push({route:r,html});console.log('PASS '+r.lang+' '+r.url);
  }
  // Negative fixtures: make sure incomplete navigation and unsafe content fail.
  const {route,html}=pages[0];
  assert.throws(()=>verify(html.replace('aria-current="page"',''),route));
  assert.throws(()=>verify(html.replace('hreflang="x-default"','hreflang="bad-default"'),route));
  assert.throws(()=>verify(html.replace('</body>','<form></form></body>'),route));
  assert.throws(()=>verify(html.replace('</body>','<script></script></body>'),route));
  console.log('PASS five-page contract and four negative fixtures ('+(live?'live read-only':'offline')+')');
}
module.exports={verify,routes};
if(require.main===module)main().catch(error=>{console.error(error);process.exitCode=1;});
