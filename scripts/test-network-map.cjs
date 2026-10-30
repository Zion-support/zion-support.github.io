'use strict';
// Offline release checks. Never fetch links or submit a form.
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const {runInNewContext} = require('node:vm');
const {createRequire} = require('node:module');
const map = require('./render-network-map.cjs');
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map(match=>[match[1].toLowerCase(),match[2]]));
const hrefs = html => (html.match(/<a\b[^>]*>/gi)||[]).map(attributes).map(a=>a.href);
const mandatoryApproval = {
  en:['formal written client confirmation','corresponding PO','specific Zion operational release'],
  pt:['confirmação formal escrita do cliente','PO correspondente','liberação operacional específica da Zion'],
  es:['confirmación formal escrita del cliente','orden de compra correspondiente','autorización operativa específica de Zion'],
  fr:['confirmation écrite formelle du client','bon de commande correspondant','autorisation opérationnelle spécifique de Zion'],
  de:['formelle schriftliche Kundenbestätigung','zugehörige Bestellung','spezifische operative Freigabe von Zion']
};

function verify(html,locale) {
  const c = map.copy[locale];
  assert(html.includes(`<html lang="${c.lang}">`),'Wrong page language');
  assert(html.includes(`data-network-map="${map.release}"`),'Map release missing');
  assert.equal((html.match(/<h1\b/gi)||[]).length,1,'Exactly one page heading');
  assert(!/<form\b|<script\b|<iframe\b/i.test(html),'Map must remain static and read-only');
  assert(!/\d+\+\s+(?:free\s+|live\s+)?(?:apps|AI micro-apps)|Results go to you.*simultaneously/i.test(html),'Unsupported capability or delivery claim');
  const tags = (html.match(/<link\b[^>]*>/gi)||[]).map(attributes);
  const canonical = tags.filter(a=>a.rel==='canonical');
  assert.equal(canonical.length,1,'Exactly one canonical');
  assert.equal(canonical[0].href,map.origin+map.route(locale),'Wrong canonical');
  const alternates = tags.filter(a=>a.rel==='alternate');
  assert.equal(alternates.length,6,'Five locales plus x-default required');
  assert.equal(new Set(alternates.map(a=>a.hreflang)).size,6,'Duplicate language alternate');
  for (const other of map.locales) assert(alternates.some(a=>a.hreflang===map.copy[other].lang&&a.href===map.origin+map.route(other)),'Wrong alternate '+other);
  assert(alternates.some(a=>a.hreflang==='x-default'&&a.href===map.origin+map.route('en')));
  const languageNav = html.match(/<nav\b[^>]*data-network-map-languages[^>]*>[\s\S]*?<\/nav>/i);
  assert(languageNav,'Visible same-topic language navigation missing');
  const navLinks = (languageNav[0].match(/<a\b[^>]*>/gi)||[]).map(attributes);
  assert.equal(navLinks.length,5);
  assert.equal(navLinks.filter(a=>a['aria-current']==='page').length,1);
  for (const other of map.locales) assert(navLinks.some(a=>a.href===map.route(other)&&a.hreflang===map.copy[other].lang&&a.lang===map.copy[other].lang),'Wrong-topic language link '+other);
  assert(navLinks.some(a=>a.href===map.route(locale)&&a['aria-current']==='page'));
  const links = hrefs(html);
  for (const href of [map.home(locale),map.catalog(locale),map.discovery(locale),map.directory(locale),map.network(locale,'catalog-navigation'),`${map.prefix(locale)}apps/app-verification-guide.html`,...map.taskPaths(locale).flat(),...map.guideSlugs.map(slug=>map.network(locale,slug))]) assert(links.includes(href),'Missing matching-locale path '+href);
  for (const key of ['repositories','routes','external']) for (const href of map.preserved[key]) assert(links.includes(href),'Original destination removed '+href);
  assert.equal((html.match(/data-network-preserved/g)||[]).length,81,'Original destination coverage changed');
  assert.equal((html.match(/data-network-task=/g)||[]).length,4);
  assert.equal((html.match(/data-network-guide=/g)||[]).length,4);
  assert.equal((html.match(/<details\b/g)||[]).length,3,'Archive groups must remain identifiable');
  const ids = [...html.matchAll(/\bid=["']([^"']*)["']/g)].map(match=>match[1]);
  assert.equal(ids.length,new Set(ids).size,'Duplicate page anchor');
  for (const anchor of ['main','tasks','network-capability-note','network-capability-title']) assert(ids.includes(anchor),'Broken in-page navigation');
  for (const text of mandatoryApproval[locale]) assert(html.includes(text),'Missing cumulative operational requirement');
  assert(html.includes(map.escape(c.delivery)),'Delivery limitations must use page language');
  assert(html.includes('href="/assets/css/apps-directory.css"'),'Shared design stylesheet missing');
  return true;
}

function run(root=path.join(__dirname,'../public'),artifact=false) {
  map.validateModel();
  for (const locale of map.locales) {
    const html = fs.readFileSync(path.join(root,map.route(locale).slice(1)),'utf8');
    verify(html,locale);
    if (!artifact) assert.equal(html,map.render(locale),'Run the map renderer before committing');
  }
  const en = map.render('en');
  assert.throws(()=>verify(en.replace('hreflang="de"','hreflang="xx"'),'en'));
  assert.throws(()=>verify(en.replace('href="/pt/apps/network.html"','href="/apps/field-service-evidence-guide.pt-br.html"'),'en'));
  assert.throws(()=>verify(en.replaceAll(map.preserved.repositories[0],'https://example.com/removed'),'en'));
  assert.throws(()=>verify(en.replace('</main>','<p>100+ live apps</p></main>'),'en'));
  assert.throws(()=>verify(en.replace('corresponding PO','applicable reference'),'en'));
  // Exercise the compatibility entry point on synthetic homes, not real pages.
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(),'zion-network-map-'));
  try {
    const syntheticHome = '<!doctype html><html><body><form id="kept"><input name="synthetic"></form><script>window.synthetic=1;</script><main><!--zion-network-home:start--><section><div><p>Keep existing content</p></div></section><!--zion-network-home:end--></main></body></html>';
    fs.mkdirSync(path.join(fixture,'en'),{recursive:true});
    for (const relative of ['index.html','en/index.html']) fs.writeFileSync(path.join(fixture,relative),syntheticHome);
    const homeBefore = fs.readFileSync(path.join(fixture,'index.html'),'utf8');
    map.run(fixture);
    assert.equal(fs.readFileSync(path.join(fixture,'index.html'),'utf8'),homeBefore,'Standalone map renderer touched homepage');
    const evaluate = filename => {
      const absolute = path.join(__dirname,filename);
      runInNewContext(fs.readFileSync(absolute,'utf8'),{require:createRequire(absolute),process:{argv:[process.execPath,absolute,fixture]},console:{log() {}}},{filename:absolute});
    };
    evaluate('render-network-showcase-release.cjs');
    const first = Object.fromEntries(['index.html','en/index.html',...map.locales.map(l=>map.route(l).slice(1))].map(relative=>[relative,fs.readFileSync(path.join(fixture,relative),'utf8')]));
    evaluate('render-network-showcase-release.cjs');
    for (const [relative,html] of Object.entries(first)) assert.equal(fs.readFileSync(path.join(fixture,relative),'utf8'),html,'Compatibility renderer is not idempotent');
    for (const relative of ['index.html','en/index.html']) {
      const html = first[relative];
      assert(html.includes('<form id="kept"><input name="synthetic"></form>'));
      assert(html.includes('<script>window.synthetic=1;</script>'));
      assert(html.includes('<p>Keep existing content</p>'));
      assert.equal((html.match(/data-showcase-promotion=/g)||[]).length,1);
    }
    evaluate('test-network-showcase-release.cjs');
  } finally { fs.rmSync(fixture,{recursive:true,force:true}); }
  console.log('PASS network map: five translations, reciprocal languages, matching-locale task paths, 81 preserved destinations, cumulative approvals and idempotent legacy promotions.');
}

module.exports = {verify,run};
if (require.main === module) run(process.argv[2],process.argv.includes('--artifact'));
