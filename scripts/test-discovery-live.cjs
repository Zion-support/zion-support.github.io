'use strict';
// Read-only public-site checks. Never submit a form or send an email.
const assert=require('node:assert/strict'),fs=require('node:fs');
function validateQuizAlias(html){
 assert.equal(typeof html,'string','Quiz alias: expected HTML text');
 const attr=(tag,name)=>{
  const match=tag.match(new RegExp('\\b'+name+'\\s*=\\s*(["\\\'])(.*?)\\1','i'));
  return match?match[2]:'';
 };
 const links=html.match(/<link\b[^>]*>/gi)||[];
 assert(links.some(tag=>attr(tag,'rel').split(/\s+/).includes('canonical')&&attr(tag,'href')==='https://ziontechgroup.com/discovery/'),'Quiz alias: canonical destination');
 const metas=html.match(/<meta\b[^>]*>/gi)||[];
 assert(metas.some(tag=>attr(tag,'http-equiv').toLowerCase()==='refresh'&&/^0\s*;\s*url\s*=\s*\/discovery\/$/i.test(attr(tag,'content'))),'Quiz alias: immediate canonical redirect');
 assert(/<a\b[^>]*href=["']\/discovery\/["']/i.test(html),'Quiz alias: accessible manual continuation');
 assert(!/<form\b/i.test(html),'Quiz alias: duplicate form');
 assert(!/<script\b/i.test(html),'Quiz alias: unexpected script/duplicate application');
 assert(html.includes('commercial@ziontechgroup.com'),'Quiz alias: Commercial disclosure');
 assert(/provider acceptance does not prove inbox delivery/i.test(html),'Quiz alias: truthful delivery caveat');
 assert(/no required meeting/i.test(html),'Quiz alias: no meeting gate');
}
module.exports={validateQuizAlias};
const locales=['en','pt','es','fr','de'];
const apps=['smart-call-routing-ai','call-intelligence-hub','voicemail-triage-ai','meeting-intelligence-ai'];
const mining=['mine-safety-sentinel','ore-grade-predictor','mining-fleet-optimizer','tailings-dam-monitor'];
const route=l=>'/apps/discovery-showcase'+(l==='en'?'':'-'+l)+'.html';
const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
async function get(route){
 const url='https://ziontechgroup.com'+route+(route.includes('?')?'&':'?')+'publication_check='+Date.now();let last;
 for(let a=0;a<5;a++)try{const r=await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'Cache-Control':'no-cache'}});assert.equal(r.status,200,route+': HTTP '+r.status);const html=await r.text();assert(html.length>100,route+': empty response');return html;}catch(e){last=e;if(a<4)await new Promise(r=>setTimeout(r,5000));}
 throw last;
}
if(require.main===module)(async()=>{
 const playbook=JSON.parse(fs.readFileSync('content/communications-playbook.json','utf8'));
 let checks=0;
 for(const l of locales){
  const html=await get(route(l));assert(html.includes('lang="'+(l==='pt'?'pt-BR':l)+'"'),l+': HTML language');assert(html.includes('data-discovery-release="2026-10-08"'),l+': release content');assert(html.includes('rel="canonical" href="https://ziontechgroup.com'+route(l)+'"'),l+': canonical');
  for(const k of locales)assert(html.includes('hreflang="'+(k==='pt'?'pt-BR':k)+'"'),l+': missing '+k+' alternate');
  for(const slug of apps)assert(html.includes('href="'+(l==='en'?'/':'/'+l+'/')+slug+'/"'),l+': missing localized '+slug);
  assert(html.includes('href="#main"'),l+': skip link');assert(html.includes('aria-label="'+esc(playbook[l].languages)+'"'),l+': language navigation');assert(html.includes(esc(playbook[l].checklistTitle)),l+': validation checklist');
  for(const text of playbook[l].descriptions)assert(html.includes(esc(text)),l+': untranslated workflow');assert(!html.includes('DRAFT — not published'),l+': draft banner');assert(html.includes('commercial@ziontechgroup.com'),l+': commercial disclosure');
  const home=await get(l==='pt'?'/':'/'+l+'/');assert.equal((home.match(/id="discovery-communications"/g)||[]).length,1,l+': communications section');
  for(const slug of apps)assert(home.includes('href="/'+slug+'/"'),l+': missing '+slug);assert(home.includes(esc(playbook[l].checklistTitle)),l+': homepage checklist');
  assert.equal((home.match(/id="mining-metals-discovery"/g)||[]).length,1,l+': Mining promotion');
  const guide=l==='en'?'/apps/mining-discovery-guide.html':'/'+l+'/apps/mining-discovery-guide.html';assert(home.includes('href="'+guide+'"'),l+': localized Mining guide link');
  for(const slug of mining)assert(home.includes('href="/'+slug+'/"'),l+': missing Mining app '+slug);
  const miningGuide=await get(guide);assert(miningGuide.includes('lang="'+(l==='pt'?'pt-BR':l)+'"'),l+': Mining guide language');
  for(const slug of mining)assert(miningGuide.includes('href="/'+slug+'/"'),l+': Mining guide app link');
  const questionnaire=await get(l==='en'?'/discovery/':'/'+l+'/discovery/');assert(questionnaire.includes('/assets/js/discovery-delivery.js'),l+': shared questionnaire application');assert(!questionnaire.includes('carlos@ziontechgroup.com'),l+': unexpected recipient');
  console.log('PASS '+l+': showcase, homepage promotions, Mining guide and shared questionnaire');checks+=4;
 }
 for(const slug of [...apps,...mining]){const html=await get('/'+slug+'/');assert(/<html/i.test(html),slug+': not HTML');console.log('PASS app landing /'+slug+'/');checks++;}
 const app=await get('/assets/js/discovery-delivery.js');assert(!app.includes('carlos@ziontechgroup.com'),'Unexpected shared-module recipient');assert(app.includes('formsubmit.co/ajax/commercial@ziontechgroup.com'),'Commercial endpoint missing');checks++;
 const css=await get('/assets/css/site.css');assert(css.includes('{'),'shared CSS missing');checks++;
 const quiz=await get('/discovery/quiz/');validateQuizAlias(quiz);checks++;
 console.log('PASS legacy quiz: canonical alias, no duplicate form or meeting gate, truthful email caveat');
 await require('./test-discovery-recommendation-routes.cjs')();
 await require('./test-mining-catalog.cjs')();
 console.log('PASS '+checks+' publication resources plus recommended routes; GET only, no email submitted.');
})().catch(e=>{console.error(e);process.exitCode=1;});
