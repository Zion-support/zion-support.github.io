'use strict';
// Read-only public-site checks. Never submit a form or send an email.
const assert = require('node:assert/strict');
const locales=['en','pt','es','fr','de'];
const apps=['smart-call-routing-ai','call-intelligence-hub','voicemail-triage-ai','meeting-intelligence-ai'];
const route=l=>'/apps/discovery-showcase'+(l==='en'?'':'-'+l)+'.html';
async function get(route) {
 const url='https://ziontechgroup.com'+route+(route.includes('?')?'&':'?')+'publication_check='+Date.now();
 let last;
 for(let attempt=0;attempt<3;attempt++) {
  try {
   const r=await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'Cache-Control':'no-cache'}});
   assert.equal(r.status,200,`${route}: HTTP ${r.status}`);
   const html=await r.text();assert(html.length>100,`${route}: empty response`);return html;
  } catch(e) {last=e;if(attempt<2)await new Promise(resolve=>setTimeout(resolve,5000));}
 }
 throw last;
}
(async()=>{
 let checks=0;
 for(const l of locales) {
  const html=await get(route(l));
  assert(html.includes(`lang="${l==='pt'?'pt-BR':l}"`),`${l}: HTML language`);
  assert(html.includes('data-discovery-release="2026-10-07"'),`${l}: release content`);
  assert(html.includes(`rel="canonical" href="https://ziontechgroup.com${route(l)}"`),`${l}: canonical`);
  for(const k of locales)assert(html.includes(`hreflang="${k==='pt'?'pt-BR':k}"`),`${l}: missing ${k} alternate`);
  for(const slug of apps)assert(html.includes(`href="/${slug}/"`),`${l}: missing ${slug}`);
  assert(html.includes('href="#main"'),`${l}: skip link`);
  assert(!html.includes('DRAFT — not published'),`${l}: draft banner`);
  assert(html.includes('commercial@ziontechgroup.com'),`${l}: commercial disclosure`);
  const home=await get(l==='pt'?'/':'/'+l+'/');
  assert.equal((home.match(/id="discovery-communications"/g)||[]).length,1,`${l}: homepage section`);
  for(const slug of apps)assert(home.includes(`href="/${slug}/"`),`${l}: homepage missing ${slug}`);
  console.log(`PASS ${l}: showcase HTML, language alternates, four app cards, homepage section`);checks+=2;
 }
 for(const slug of apps) {
  const html=await get('/'+slug+'/');
  assert(/<html/i.test(html),`${slug}: not HTML`);
  assert(html.toLowerCase().includes(slug)||html.toLowerCase().includes(slug.replaceAll('-',' ')),`${slug}: wrong destination`);
  console.log(`PASS app destination /${slug}/`);checks++;
 }
 for(const l of locales) {
  const q=l==='en'?'/discovery/':'/'+l+'/discovery/';
  const html=await get(q);assert(/<html/i.test(html),`${q}: not HTML`);
  console.log(`PASS questionnaire destination ${q}`);checks++;
 }
 const css=await get('/assets/css/site.css');assert(css.includes('{'),'shared CSS missing');checks++;
 console.log(`PASS ${checks} public resources; GET only, no questionnaires submitted, no email sent.`);
})().catch(e=>{console.error(e);process.exitCode=1;});
