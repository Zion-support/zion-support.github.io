'use strict';
// GET-only release checks. Never submit forms, send mail or alter a recipient.
const assert=require('node:assert/strict');
const release='mining-catalog-2026-10-11-v1';
const rows=[['en','/en/','/'],['pt-BR','/','/pt/'],['es','/es/','/es/'],['fr','/fr/','/fr/'],['de','/de/','/de/']];
const slugs=['mine-safety-sentinel','ore-grade-predictor','mining-fleet-optimizer','tailings-dam-monitor'];
const count=(s,re)=>(s.match(re)||[]).length;
async function get(route){
 const response=await fetch('https://ziontechgroup.com'+route+(route.includes('?')?'&':'?')+'mining_qa='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(20000)});
 assert.equal(response.status,200,route+': HTTP '+response.status);return response.text();
}
async function verify(){
 const manifest=JSON.parse(await get('/apps/mining-catalog-release.json'));
 assert.equal(manifest.release,release);assert.equal(manifest.homepage_sections,1);assert.deepEqual(manifest.locales,rows.map(r=>r[0]));
 for(const [lang,home,prefix] of rows){
  const guide=prefix+'apps/mining-discovery-guide.html';
  const html=await get(home);
  assert.equal(count(html,/id="mining-metals-discovery"/g),1,home+': duplicate Mining promotion');
  const owned=html.match(/<section\b[^>]*data-mining-catalog="mining-catalog-2026-10-11-v1"[^>]*>[\s\S]*?<\/section>/g)||[];
  assert.equal(owned.length,1,home+': release promotion missing');
  assert(owned[0].includes('href="'+guide+'"'),home+': guide CTA');
  assert(!/<form\b/i.test(owned[0]),home+': unexpected collection form');
  for(const slug of slugs){assert(owned[0].includes('href="/'+slug+'/"'));assert(owned[0].includes('href="https://github.com/Zion-support/'+slug+'"'));}
  const page=await get(guide);assert(page.includes('<html lang="'+lang+'"'),guide+': page language');
  assert(page.includes('rel="canonical" href="https://ziontechgroup.com'+guide+'"'),guide+': canonical');
  assert.equal(count(page,/data-mining-catalog-return="mining-catalog-2026-10-11-v1"/g),1,guide+': reciprocal block');
  assert(page.includes('href="https://github.com/Zion-support/zion-app-network/blob/main/CATALOG.md"'),guide+': master catalog return');
  assert.equal(count(page,/rel="alternate"/g),6,guide+': alternate count');
  for(const [language,,p] of rows){assert(page.includes('hreflang="'+language+'" href="https://ziontechgroup.com'+p+'apps/mining-discovery-guide.html"'),guide+': alternate '+language);assert(page.includes('href="'+p+'apps/mining-discovery-guide.html"'),guide+': language switcher '+language);}
  assert(page.includes('hreflang="x-default" href="https://ziontechgroup.com/apps/mining-discovery-guide.html"'),guide+': default locale');
  console.log('PASS Mining '+lang+': one promotion, source links, canonical, six alternates and reciprocal return');
 }
 for(const slug of slugs){const html=await get('/'+slug+'/');assert(/<html\b/i.test(html),slug+': not HTML');}
 console.log('PASS Mining release: 15 GET-only resources; not AI/safety certification or inbox receipt.');
}
module.exports=verify;
if(require.main===module)verify().catch(error=>{console.error(error);process.exitCode=1;});
