'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {data,locales,catalog,route,render}=require('./render-apps-directory.cjs');
// The public file is a classic browser script; the repository uses type: module.
// Evaluate the unchanged script explicitly instead of importing it as an ES module.
const runtime={exports:{}};
require('node:vm').runInNewContext(fs.readFileSync(path.join(__dirname,'../public/assets/js/apps-directory.js'),'utf8'),{module:runtime},{filename:'apps-directory.js'});
const {normalize,matches}=runtime.exports;
test('all twenty resources have five real translations and valid related destinations',()=>{
  assert.equal(data.resources.length,20);const ids=new Set(data.resources.map(r=>r.id));assert.equal(ids.size,20);
  for(const r of data.resources){assert(ids.has(r.related));assert.notEqual(r.related,r.id);assert(data.categories.includes(r.category));assert(['tool','guide','assessment'].includes(r.kind));assert.deepEqual(Object.keys(r.text),locales);for(const l of locales){assert(r.text[l].title.length>5);assert(r.text[l].description.length>40);assert(route(l,r).startsWith('/'));if(l!=='en')assert.notEqual(r.text[l].description,r.text.en.description);}}
});
test('existing five entry routes are deterministic and metadata/card/link parity is complete',()=>{
  for(const l of locales){const html=render(l),file=path.join(__dirname,'../public',catalog(l).slice(1),'index.html');assert.equal(fs.readFileSync(file,'utf8'),html,'Run renderer before committing');assert(html.includes(`<html lang="${data.locales[l].lang}">`));assert.equal((html.match(/rel="alternate"/g)||[]).length,6);assert.equal((html.match(/data-resource="/g)||[]).length,20);assert.equal((html.match(/<h1\b/g)||[]).length,1);assert(html.includes(`rel="canonical" href="https://ziontechgroup.com${catalog(l)}"`));for(const r of data.resources)assert(html.includes(`href="${route(l,r)}"`));for(const w of data.locales[l].workflows)for(const id of w[2])assert(data.resources.some(r=>r.id===id));assert(!/40%|instant dual email|700\+|<form\b|<iframe\b/.test(html));const json=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];assert.equal(JSON.parse(json).mainEntity.itemListElement.length,20);}
});
test('search is accent-insensitive, multi-term and category-aware, including empty/no-match cases',()=>{
  assert.equal(normalize('  Reunião  '),'reuniao');assert(matches('Reunião: decisões e ações','reuniao acoes','productivity','all'));assert(matches('Kosten und Prüfung','kosten','costs','costs'));assert(!matches('Kosten und Prüfung','kosten','costs','operations'));assert(matches('Cloud costs','   ','costs','all'));assert(!matches('Cloud costs','cloud unavailable','costs','all'));assert(!matches('A resource','<script>','plan','all'));
});
test('Pilot Planner follows the existing published locale routes',()=>{
  const pilot=data.resources.find(r=>r.id==='pilot');
  for(const l of locales)assert.equal(route(l,pilot),'/automation-pilot-planner/'+(l==='pt'?'':l+'/'));
});
test('the Portuguese search example finds the actual meeting resource without accents',()=>{
  const meeting=data.resources.find(r=>r.id==='meeting');
  assert(matches(meeting.text.pt.title+' '+meeting.text.pt.description,'reuniao','productivity','all'));
});
test('existing operations and reliability navigation remains available in all five languages',()=>{
  const expected={en:'/apps/operations-reliability-ai-2026.html',pt:'/apps/operations-reliability-ai-2026-pt.html',es:'/apps/operations-reliability-ai-2026-es.html',fr:'/apps/operations-reliability-ai-2026-fr.html',de:'/apps/operations-reliability-ai-2026-de.html'};
  for(const l of locales){assert(render(l).includes(`href="${expected[l]}"`));assert(data.locales[l].operationsGuide.length>10);}
  assert(render('en').includes('Operations &amp; Reliability'));
  assert(render('de').includes('Operations'));
});
test('four translated industry guides extend the original resources and have a dedicated filter',()=>{
  const original=['discovery','pilot','scorecard','brief','meeting','email','finops','finops-guide','access','essay','incident','evidence','handoff','completion','verification'];
  for(const id of original)assert(data.resources.some(r=>r.id===id),'Original resource missing: '+id);
  const collections=data.resources.filter(r=>r.category==='collections');
  assert.deepEqual(collections.map(r=>r.id),['green-education','infrastructure','govtech','legal-ops']);
  for(const l of locales){assert.equal(data.locales[l].categories.length,data.categories.length);assert(render(l).includes('data-filter="collections"'));assert(render(l).includes('/zion-app-network/catalog-navigation'+(l==='en'?'':l==='pt'?'-pt-br':'-'+l)+'.html'));}
});
test('the field-service guide is discoverable in every locale without changing the four workflows',()=>{
  const guide=data.resources.find(r=>r.id==='field-service');
  assert(guide,'Field-service planning guide is missing');
  assert.equal(guide.category,'operations');assert.equal(guide.kind,'guide');assert.equal(guide.related,'evidence');
  assert.equal(data.resources.find(r=>r.id==='handoff').kind,'tool');
  for(const l of locales){
    assert.equal(data.locales[l].workflows.length,4);assert.deepEqual(data.locales[l].workflows[3][2],['evidence','handoff','completion']);
    const destination='/zion-app-network/app/network-field-service-showcase'+(l==='en'?'':l==='pt'?'-pt-br':'-'+l)+'.html';
    assert.equal(route(l,guide),destination);
    const catalogHtml=render(l);
    assert(catalogHtml.includes('id="resource-field-service" data-resource="field-service" data-category="operations"'));
    assert(catalogHtml.includes(`href="${destination}"`));
    assert(matches(guide.text[l].title+' '+guide.text[l].description,'','operations','operations'));
    const homePath=l==='pt'?'index.html':l+'/index.html';
    const homepage=fs.readFileSync(path.join(__dirname,'../public',homePath),'utf8');
    assert.equal(homepage.split(`href="${destination}"`).length-1,1,'Homepage must have one incoming field-guide link');
    const promotionStart=homepage.indexOf('id="industry-guides-home"');
    const fieldHeading=homepage.indexOf('<h3>'+data.locales[l].workflows[3][0]+'</h3>',promotionStart);
    const workflowList=homepage.indexOf('<ol>',fieldHeading);
    const guideLink=homepage.indexOf(`href="${destination}"`);
    assert(promotionStart>=0 && fieldHeading>promotionStart && guideLink>fieldHeading && guideLink<workflowList,'Guide link belongs within the existing field-service promotion');
    assert.equal((homepage.match(/id="industry-guides-home"/g)||[]).length,1);
  }
});
test('the concurrent energy pilot guide remains linked in every catalog language',()=>{
  const expected={en:'/apps/october-2026-batch102-energy-ai.html',pt:'/pt/apps/october-2026-batch102-energy-ai.html',es:'/es/apps/october-2026-batch102-energy-ai.html',fr:'/fr/apps/october-2026-batch102-energy-ai.html',de:'/de/apps/october-2026-batch102-energy-ai.html'};
  for(const l of locales){assert(render(l).includes(`href="${expected[l]}"`));assert(data.locales[l].energyGuide.length>10);}
  assert.equal(new Set(locales.map(l=>data.locales[l].energyGuide)).size,5);
  assert(render('en').includes('Energy &amp; utilities pilot guide'));
});
