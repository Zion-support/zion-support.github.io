'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {data,locales,catalog,route,render}=require('./render-apps-directory.cjs');
const promotion=require('./render-service-request-promotion.cjs');
// The public file is a classic browser script; the repository uses type: module.
// Evaluate the unchanged script explicitly instead of importing it as an ES module.
const runtime={exports:{}};
require('node:vm').runInNewContext(fs.readFileSync(path.join(__dirname,'../public/assets/js/apps-directory.js'),'utf8'),{module:runtime},{filename:'apps-directory.js'});
const {normalize,matches}=runtime.exports;
test('all twenty-four resources have five real translations and valid related destinations',()=>{
  assert.equal(data.resources.length,24);const ids=new Set(data.resources.map(r=>r.id));assert.equal(ids.size,24);
  for(const r of data.resources){assert(ids.has(r.related));assert.notEqual(r.related,r.id);assert(data.categories.includes(r.category));assert(['tool','guide','assessment'].includes(r.kind));assert.deepEqual(Object.keys(r.text),locales);for(const l of locales){assert(r.text[l].title.length>5);assert(r.text[l].description.length>40);assert(route(l,r).startsWith('/'));if(l!=='en')assert.notEqual(r.text[l].description,r.text.en.description);}}
});
test('existing five entry routes are deterministic and metadata/card/link parity is complete',()=>{
  for(const l of locales){const html=render(l),file=path.join(__dirname,'../public',catalog(l).slice(1),'index.html');assert.equal(fs.readFileSync(file,'utf8'),html,'Run renderer before committing');assert(html.includes(`<html lang="${data.locales[l].lang}">`));assert.equal((html.match(/rel="alternate"/g)||[]).length,6);assert.equal((html.match(/data-resource="/g)||[]).length,24);assert.equal((html.match(/<h1\b/g)||[]).length,1);assert(html.includes(`href="${l==='en'?'/':'/'+l+'/'}apps/network.html"`),'Map link must preserve catalog locale');assert(html.includes(`rel="canonical" href="https://ziontechgroup.com${catalog(l)}"`));for(const r of data.resources)assert(html.includes(`href="${route(l,r)}"`));for(const w of data.locales[l].workflows)for(const id of w[2])assert(data.resources.some(r=>r.id===id));assert(!/40%|instant dual email|700\+|<form\b|<iframe\b/.test(html));const json=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];assert.equal(JSON.parse(json).mainEntity.itemListElement.length,24);}
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

const plannerRoutes={en:'/quote-builder-ai/',pt:'/quote-builder-ai/pt/',es:'/quote-builder-ai/es/',fr:'/quote-builder-ai/fr/',de:'/quote-builder-ai/de/'};
const homePath=l=>l==='pt'?'index.html':l+'/index.html';
function assertPlannerCatalog(html,l){
  const planner=data.resources.find(r=>r.id==='service-cost-planner');
  const card=html.match(/<article\b[^>]*data-resource="service-cost-planner"[^>]*>[\s\S]*?<\/article>/);
  assert(card,'Missing cost-planner catalog card: '+l);
  assert(card[0].includes(`href="${plannerRoutes[l]}"`));
  assert(card[0].includes(planner.text[l].title));
  assert(card[0].includes(`href="${route(l,data.resources.find(r=>r.id==='service-request'))}"`));
  const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  const collection=schemas.find(s=>s['@type']==='CollectionPage');
  assert(collection,'Missing catalog structured data: '+l);
  const entries=collection.mainEntity.itemListElement;
  assert.equal(entries.length,24);
  assert.equal(entries.find(e=>e.name===planner.text[l].title).url,'https://ziontechgroup.com'+plannerRoutes[l]);
}
function assertPlannerHomepage(html,l){
  const section=html.match(/<!--datacenter-request-home:start-->([\s\S]*?)<!--datacenter-request-home:end-->/);
  assert(section,'Missing existing datacenter promotion: '+l);
  assert.equal((html.match(/id="datacenter-service-request-home"/g)||[]).length,1);
  assert.equal((html.match(/data-service-cost-planner="/g)||[]).length,1);
  assert(section[1].includes('data-service-request-home="datacenter-request-home-2026-10-30-v1"'));
  assert.match(section[1],/<section\b[^>]*>[\s\S]*<article\b[^>]*data-service-cost-planner="[^\"]+"[^>]*>[\s\S]*<\/article><\/section>$/);
  assert(section[1].includes(`href="${plannerRoutes[l]}"`));
  assert.equal((section[1].match(/data-service-cost-planner="/g)||[]).length,1);
  assert(section[1].includes(data.resources.find(r=>r.id==='service-cost-planner').text[l].title));
}
test('Service cost planner uses its published standalone locale paths and related service request',()=>{
  const planner=data.resources.find(r=>r.id==='service-cost-planner');
  assert.equal(planner.kind,'tool');assert.equal(planner.category,'costs');assert.equal(planner.related,'service-request');
  assert.deepEqual(planner.routes,plannerRoutes);
  for(const l of locales){assert.equal(route(l,planner),plannerRoutes[l]);assertPlannerCatalog(render(l),l);}
  assert.throws(()=>route('pt',{...planner,routes:{en:plannerRoutes.en}}),/Missing internal standalone route/);
  assert.throws(()=>route('en',{...planner,routes:{en:'//example.com/'}}),/Missing internal standalone route/);
});
test('one localized planner card stays inside the existing request section and renders idempotently',()=>{
  const owned=/<!--datacenter-request-home:start-->[\s\S]*?<!--datacenter-request-home:end-->/g;
  const protectedParts=html=>html.match(/<script\b[\s\S]*?<\/script>|<form\b[\s\S]*?<\/form>|<style\b[\s\S]*?<\/style>/gi)||[];
  for(const l of locales){
    const html=fs.readFileSync(path.join(__dirname,'../public',homePath(l)),'utf8');
    assertPlannerHomepage(html,l);
    assert.equal(promotion.render(html,l),html,'Homepage source must match its renderer');
    const input=html.replace(owned,'<!--datacenter-request-home:start--><section id="datacenter-service-request-home"><p>Earlier promotion</p></section><!--datacenter-request-home:end-->')+'<form action="/existing"><input name="existing"></form><script>/* existing behavior */</script><style>.existing{color:inherit}</style>';
    const updated=promotion.render(input,l);
    assert.equal(updated.replace(owned,''),input.replace(owned,''),'Unrelated homepage bytes changed: '+l);
    assert.deepEqual(protectedParts(updated),protectedParts(input));
    assert.equal(promotion.render(updated,l),updated);
  }
});
if(process.argv[2])test('the final Pages artifact retains all five planner cards and exact locale links',()=>{
  const root=path.resolve(process.argv[2]);
  for(const l of locales){
    const catalogHtml=fs.readFileSync(path.join(root,catalog(l).slice(1),'index.html'),'utf8');
    assert.equal((catalogHtml.match(/data-resource="/g)||[]).length,24);
    assertPlannerCatalog(catalogHtml,l);
    assertPlannerHomepage(fs.readFileSync(path.join(root,homePath(l)),'utf8'),l);
  }
});
