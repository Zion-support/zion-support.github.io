'use strict';
// Compatibility entry point: shared five-language map + original EN/PT promotions.
// The active static publisher may use the committed public maps directly.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const map = require('./render-network-map.cjs');
const out = process.argv[2] || 'out';
const promotionRelease = '2026-10-11-showcase-v1';
const promotions = {
  en: {title:'From a question to an evidence-backed test',text:'Compare local calculators, inspect project source and record a baseline, reviewer and stop rule. Explore the network without treating a catalog entry as a production-ready AI app.',link:'Explore the consolidated app showcase'},
  pt: {title:'Da pergunta a um teste com evidências',text:'Compare calculadoras locais, confira o código dos projetos e registre linha de base, revisor e regra de parada. Explore a rede sem tratar um item do catálogo como app de IA pronto para produção.',link:'Explorar a vitrine consolidada de apps'}
};
const file = url => path.join(out,url.slice(1)+(url.endsWith('/')?'index.html':''));
const protectedParts = html => ({forms:html.match(/<form\b[\s\S]*?<\/form>/gi)||[],scripts:html.match(/<script\b[\s\S]*?<\/script>/gi)||[]});
const end = '</div></section><!--zion-network-home:end-->';
// Validate both owned insertion anchors before writing any output.
const homes = Object.keys(promotions).map(locale => {
  const target = file(map.home(locale));
  const before = fs.readFileSync(target,'utf8');
  assert.equal(before.split(end).length,2,`Expected one existing network home section: ${target}`);
  return {locale,target,before};
});
const pages = map.run(out);
for (const {locale,target,before} of homes) {
  const c = promotions[locale];
  const promo = `<article class="card" data-showcase-promotion="${promotionRelease}"><h3>${map.escape(c.title)}</h3><p>${map.escape(c.text)}</p><p><a href="${map.route(locale)}">${map.escape(c.link)}</a></p></article>`;
  const after = before.replace(/<article class="card" data-showcase-promotion="[^"]+">[\s\S]*?<\/article>/g,'').replace(end,promo+end);
  assert.deepEqual(protectedParts(after),protectedParts(before),'Homepage forms or scripts changed');
  fs.writeFileSync(target,after);
}
const manifest = {release:map.release,promotionRelease,scope:'Five-language network map and existing EN/PT homepage promotions; linked resources are not certified by the map',generatedChecks:pages.map(page=>({...page,sourceProjects:map.preserved.repositories.length,homepage:page.locale==='en'?'/en/':page.locale==='pt-BR'?'/':null}))};
fs.writeFileSync(file('/apps/network-showcase-release.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('PASS shared five-language network map and preserved EN/PT homepage promotion behavior.');
