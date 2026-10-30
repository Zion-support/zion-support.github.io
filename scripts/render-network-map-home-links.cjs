'use strict';
// Add one owned paragraph inside each existing network promotion. No new section.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const map = require('./render-network-map.cjs');
const start = '<!--zion-network-map-home:start-->';
const end = '<!--zion-network-map-home:end-->';
const owned = /<!--zion-network-map-home:start-->[\s\S]*?<!--zion-network-map-home:end-->/g;
const copy = {
  en:['Choose a practical path: evaluate automation, prepare a field visit, compare cost scenarios or review operations.','Explore the four task paths'],
  pt:['Escolha um caminho prático: avaliar automação, preparar uma visita técnica, comparar cenários de custo ou revisar a operação.','Explorar os quatro caminhos por tarefa'],
  es:['Elija una ruta práctica: evaluar automatización, preparar una visita técnica, comparar escenarios de coste o revisar la operación.','Explorar las cuatro rutas por tarea'],
  fr:['Choisissez un parcours pratique : évaluer l’automatisation, préparer une intervention, comparer les coûts ou examiner les opérations.','Explorer les quatre parcours par tâche'],
  de:['Wählen Sie einen praktischen Weg: Automatisierung bewerten, einen Vor-Ort-Einsatz vorbereiten, Kostenszenarien vergleichen oder den Betrieb prüfen.','Die vier Aufgabenpfade erkunden']
};
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map(match=>[match[1].toLowerCase(),match[2]]));
const sectionTags = /<\/?section\b(?:[^"'<>]|"[^"]*"|'[^']*')*>/gi;
function sectionAt(html,index) {
  const tags = new RegExp(sectionTags.source,'gi'); tags.lastIndex = index;
  let depth=0,tag;
  while ((tag=tags.exec(html))) {
    depth += /^<\//.test(tag[0]) ? -1 : 1;
    if (depth===0) return {start:index,close:tag.index,end:tags.lastIndex};
    assert(depth>0,'Unexpected section closing tag');
  }
  throw new Error('Unclosed network promotion section');
}
function locate(html) {
  const candidates=[];
  for (const match of html.matchAll(new RegExp(sectionTags.source,'gi'))) {
    if (/^<\//.test(match[0])) continue;
    const a=attrs(match[0]);
    if (a.id==='app-network-2026'||(a['aria-labelledby']||'').split(/\s+/).includes('network-2026-h')) candidates.push(sectionAt(html,match.index));
  }
  const legacyStart='<!--zion-network-home:start-->',legacyEnd='<!--zion-network-home:end-->';
  const starts=html.split(legacyStart).length-1,ends=html.split(legacyEnd).length-1;
  assert.equal(starts,ends,'Incomplete legacy network markers');
  assert(starts<=1,'Multiple legacy network promotions');
  const unique=[...new Map(candidates.map(candidate=>[candidate.start,candidate])).values()];
  assert(unique.length<=1,'Multiple current network promotions');
  let begin,limit;
  if (starts===1) {
    begin=html.indexOf(legacyStart)+legacyStart.length;limit=html.indexOf(legacyEnd,begin);
    assert(limit>=begin,'Legacy network markers are out of order');
  }
  // The publication bootstrap adds a separate legacy section. Keep the owned
  // paragraph in the current source section when both survive into the artifact.
  if (unique.length===1) return unique[0];
  assert.equal(starts,1,'Expected an existing network promotion');
  const fallback=[];
  const tags=new RegExp(sectionTags.source,'gi');tags.lastIndex=begin;
  let match;
  while ((match=tags.exec(html))&&match.index<limit) {
    assert(!/^<\//.test(match[0]),'Unexpected closing section in legacy promotion');
    const candidate=sectionAt(html,match.index);
    assert(candidate.end<=limit,'Legacy section crosses its marker');
    fallback.push(candidate);tags.lastIndex=candidate.end;
  }
  assert.equal(fallback.length,1,'Expected exactly one section in legacy promotion');
  return fallback[0];
}
const stripOwned = html => html.replace(owned,'');
const protectedParts = html => ({forms:html.match(/<form\b[\s\S]*?<\/form>/gi)||[],scripts:html.match(/<script\b[\s\S]*?<\/script>/gi)||[],stripe:html.match(/https:\/\/(?:buy|checkout)\.stripe\.com[^"'<>\s]*/g)||[]});
function transform(html,locale) {
  assert(map.locales.includes(locale),'Unsupported homepage locale');
  const expected=map.copy[locale].lang,actual=(html.match(/<html\b[^>]*\blang=["']([^"']+)/i)||[])[1];
  assert.equal(actual,expected,'Unexpected homepage language');
  assert.equal(html.split(start).length-1,html.split(end).length-1,'Incomplete owned promotion');
  assert(html.split(start).length<=2,'Duplicate owned promotion');
  const initial=locate(html),existing=[...html.matchAll(owned)];
  for (const block of existing) {
    assert(block.index>=initial.start&&block.index+block[0].length<=initial.end,'Owned promotion moved outside its section');
    assert(!/<form\b|<script\b|<section\b/i.test(block[0]),'Refuse to replace non-owned content');
  }
  const clean=stripOwned(html),section=locate(clean);
  // Keep a legacy .wrap container when its closing div directly precedes the section close.
  const body=clean.slice(section.start,section.end),tail=/<\/div>\s*<\/section>$/i.exec(body);
  const insertion=tail?section.start+tail.index:section.close;
  const c=copy[locale],block=`${start}<p class="network-map-home-link" data-network-map-home="${map.release}">${map.escape(c[0])} <a href="${map.route(locale)}">${map.escape(c[1])}</a>.</p>${end}`;
  const after=clean.slice(0,insertion)+block+clean.slice(insertion);
  assert.equal(stripOwned(after),clean,'Unowned homepage bytes changed');
  assert.deepEqual(protectedParts(after),protectedParts(html),'Protected homepage content changed');
  return after;
}
function run(root=path.join(__dirname,'../public')) {
  const prepared=map.locales.map(locale=>{
    const relative=locale==='pt'?'index.html':`${locale}/index.html`,file=path.join(root,relative),before=fs.readFileSync(file,'utf8'),after=transform(before,locale);
    assert.equal(transform(after,locale),after,'Homepage promotion must be idempotent');
    return {locale,relative,file,before,after};
  });
  const report=[];
  for (const item of prepared) {
    fs.writeFileSync(item.file,item.after);
    const counts=html=>Object.fromEntries(Object.entries(protectedParts(html)).map(([key,values])=>[key,values.length]));
    report.push({locale:item.locale,path:item.relative,before:counts(item.before),after:counts(item.after),unownedBytesPreserved:stripOwned(item.before)===stripOwned(item.after)});
  }
  return report;
}
module.exports={copy,start,end,owned,locate,stripOwned,protectedParts,transform,run};
if (require.main===module) console.log(JSON.stringify(run(process.argv[2]),null,2));
