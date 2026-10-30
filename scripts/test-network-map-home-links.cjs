'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const map=require('./render-network-map.cjs');
const promotion=require('./render-network-map-home-links.cjs');
function run(root=path.join(__dirname,'../public')) {
  for (const locale of map.locales) {
    const relative=locale==='pt'?'index.html':`${locale}/index.html`;
    const html=fs.readFileSync(path.join(root,relative),'utf8'),clean=promotion.stripOwned(html);
    assert.equal(promotion.transform(html,locale),html,'Promotion absent or not current: '+relative);
    assert.equal(promotion.transform(clean,locale),html,'Promotion cannot be safely reapplied: '+relative);
    const blocks=[...html.matchAll(promotion.owned)];assert.equal(blocks.length,1);
    const section=promotion.locate(html);
    assert(blocks[0].index>section.start&&blocks[0].index+blocks[0][0].length<section.end,'Promotion outside existing section');
    assert.equal((blocks[0][0].match(/<p\b/g)||[]).length,1);
    assert.equal((blocks[0][0].match(/<a\b/g)||[]).length,1);
    assert(blocks[0][0].includes(`href="${map.route(locale)}"`));
    assert(blocks[0][0].includes(map.escape(promotion.copy[locale][0])));
    assert.equal((clean.match(/<section\b/g)||[]).length,(html.match(/<section\b/g)||[]).length,'A new section was added');
    assert.deepEqual(promotion.protectedParts(clean),promotion.protectedParts(html));
  }
  const fixtures=[
    '<section id="app-network-2026"><p>Existing</p><section><p>Nested unchanged</p></section></section>',
    '<section aria-labelledby="network-2026-h"><h2 id="network-2026-h">Existing</h2></section>',
    '<!--zion-network-home:start--><section><div class="wrap"><p>Existing</p></div></section><!--zion-network-home:end-->',
    '<section id="app-network-2026"><p>Existing</p></section><!--zion-network-home:start--><section><div class="wrap"><p>Keep generated legacy content</p></div></section><!--zion-network-home:end-->',
    '<!--zion-network-home:start--><section><div class="wrap"><p>Keep generated legacy content</p></div></section><!--zion-network-home:end--><section aria-labelledby="network-2026-h"><h2 id="network-2026-h">Existing</h2></section>'
  ];
  for (const section of fixtures) {
    const before=`<!doctype html><html lang="en"><body><form><input name="synthetic"></form><script>window.synthetic=1;</script><a href="https://buy.stripe.com/synthetic">Existing payment link</a>${section}</body></html>`;
    const after=promotion.transform(before,'en');
    assert.equal(promotion.stripOwned(after),before,'Fixture unowned bytes changed');
    assert.equal(promotion.transform(after,'en'),after,'Fixture reapplication changed bytes');
    assert.deepEqual(promotion.protectedParts(after),promotion.protectedParts(before));
    if (/id="app-network-2026"|aria-labelledby="network-2026-h"/.test(section)) {
      const selected=promotion.locate(after),current=after.slice(selected.start,selected.end);
      assert(/id="app-network-2026"|aria-labelledby="network-2026-h"/.test(current),'Current source section must take precedence');
      assert(current.includes(promotion.start),'Promotion must remain in current source section');
    }
    const concurrent=before.replace('Existing</p>','Concurrent content retained</p>');
    assert.equal(promotion.stripOwned(promotion.transform(concurrent,'en')),concurrent,'Concurrent content lost');
  }
  const base='<html lang="en"><body><section id="app-network-2026">Existing</section></body></html>';
  assert.throws(()=>promotion.transform(base.replace('app-network-2026','different'),'en'),'Missing target must stop');
  assert.throws(()=>promotion.transform(base.replace('</body>','<section id="app-network-2026">Duplicate</section></body>'),'en'),'Ambiguous target must stop');
  assert.throws(()=>promotion.transform(base.replace('lang="en"','lang="fr"'),'en'),'Wrong language must stop');
  assert.throws(()=>promotion.transform(base.replace('</body>',promotion.start+'Unclosed</body>'),'en'),'Incomplete owned marker must stop');
  assert.throws(()=>promotion.transform(base.replace('</body>','<!--zion-network-home:start--></body>'),'en'),'Incomplete legacy marker must stop even with a current section');
  assert.throws(()=>promotion.transform(base.replace('</body>','<!--zion-network-home:end--><!--zion-network-home:start--></body>'),'en'),'Reversed legacy markers must stop');
  const ambiguousLegacy='<html lang="en"><body><!--zion-network-home:start--><section>First</section><section>Second</section><!--zion-network-home:end--></body></html>';
  assert.throws(()=>promotion.transform(ambiguousLegacy,'en'),'Multiple legacy fallback sections must stop');
  const misplaced=base.replace('</body>','<!--zion-network-home:start--><section>'+promotion.start+'<p>Old misplaced promotion</p>'+promotion.end+'</section><!--zion-network-home:end--></body>');
  assert.throws(()=>promotion.transform(misplaced,'en'),'Owned content in the non-selected legacy section must stop');
  console.log('PASS homepage map links: five locales, one paragraph in each existing section, byte-preserved unowned content, forms/scripts/payment links retained, safe reapplication and ambiguity rejection.');
}
module.exports={run};
if(require.main===module)run(process.argv[2]);
