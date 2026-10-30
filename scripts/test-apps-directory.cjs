'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {data,locales,catalog,route,render}=require('./render-apps-directory.cjs');
// The public file is a classic browser script; the repository uses type: module.
// Evaluate the unchanged script explicitly instead of importing it as an ES module.
const runtime={exports:{}};
require('node:vm').runInNewContext(fs.readFileSync(path.join(__dirname,'../public/assets/js/apps-directory.js'),'utf8'),{module:runtime},{filename:'apps-directory.js'});
const {normalize,matches}=runtime.exports;
test('all fifteen resources have five real translations and valid related destinations',()=>{
  assert.equal(data.resources.length,15);const ids=new Set(data.resources.map(r=>r.id));assert.equal(ids.size,15);
  for(const r of data.resources){assert(ids.has(r.related));assert.notEqual(r.related,r.id);assert(data.categories.includes(r.category));assert(['tool','guide','assessment'].includes(r.kind));assert.deepEqual(Object.keys(r.text),locales);for(const l of locales){assert(r.text[l].title.length>5);assert(r.text[l].description.length>40);assert(route(l,r).startsWith('/'));if(l!=='en')assert.notEqual(r.text[l].description,r.text.en.description);}}
});
test('existing five entry routes are deterministic and metadata/card/link parity is complete',()=>{
  for(const l of locales){const html=render(l),file=path.join(__dirname,'../public',catalog(l).slice(1),'index.html');assert.equal(fs.readFileSync(file,'utf8'),html,'Run renderer before committing');assert(html.includes(`<html lang="${data.locales[l].lang}">`));assert.equal((html.match(/rel="alternate"/g)||[]).length,6);assert.equal((html.match(/data-resource="/g)||[]).length,15);assert.equal((html.match(/<h1\b/g)||[]).length,1);assert(html.includes(`rel="canonical" href="https://ziontechgroup.com${catalog(l)}"`));for(const r of data.resources)assert(html.includes(`href="${route(l,r)}"`));for(const w of data.locales[l].workflows)for(const id of w[2])assert(data.resources.some(r=>r.id===id));assert(!/40%|instant dual email|700\+|<form\b|<iframe\b/.test(html));const json=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];assert.equal(JSON.parse(json).mainEntity.itemListElement.length,15);}
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
