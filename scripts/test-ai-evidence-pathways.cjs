 'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const review=require('./render-ai-evidence-review.cjs'),base=require('./render-ai-evidence-locales.cjs'),content=require('./append-ai-evidence-pathways.cjs');
const source=process.env.ZION_APPS_ROOT||path.resolve(__dirname,'../public'),out=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evidence-pathways-'));
review.render(source,out);
for(let i=0;i<5;i++){
 test(base.locales[i]+' comparison/checklist is complete with reciprocal same-language links',()=>{
  for(const slug of base.slugs){
   const html=fs.readFileSync(path.join(out,content.route(slug,i),'index.html'),'utf8');
   assert.equal((html.match(/id="evidence-pathways"/g)||[]).length,1);
   const section=html.match(/<section class="panel" id="evidence-pathways"[^]*?<\/section>/)[0];
   assert.equal((section.match(/<article>/g)||[]).length,3);assert.equal((section.match(/<li>/g)||[]).length,3);
   assert.ok(section.includes(content.copy.title[i]));assert.ok(section.includes(content.copy.checklist[i]));
   for(const other of base.slugs.filter(s=>s!==slug)){
    const href=content.route(other,i)+'#evidence-pathways';assert.ok(section.includes('href="'+href+'"'));
    const target=fs.readFileSync(path.join(out,href.split('#')[0],'index.html'),'utf8');assert.ok(target.includes('id="evidence-pathways"'));
   }
   for(const row of [...content.copy.steps,...content.copy.limits])assert.ok(section.includes(row[i]));
   assert.doesNotMatch(section,/<script|<form|<iframe|onclick=|https?:/i);
  }
 });
 test(base.locales[i]+' homepage fragment adds translated choice copy without changing app destinations',()=>{
  const html=fs.readFileSync(path.join(out,'review-promotions',['en','pt','es','fr','de'][i]+'.html'),'utf8');
  assert.ok(html.includes(content.copy.promotion[i]));assert.equal((html.match(/data-evidence-pathways=/g)||[]).length,1);
  for(const slug of base.slugs)assert.ok(html.includes('href="'+content.route(slug,i)+'"'));
 });
}
test('content transformation preserves JavaScript and refuses duplicate or ambiguous insertion',()=>{
 const input='<main id="main"><script>const untouched="<safe>";</script></main>';
 const html=content.append(input,base.slugs[0],0);assert.equal(html.match(/<script>[^]*?<\/script>/)[0],input.match(/<script>[^]*?<\/script>/)[0]);
 assert.throws(()=>content.append(html,base.slugs[0],0),/contract changed/);
 for(const bad of ['<main></main><main></main>','<main>'])assert.throws(()=>content.append(bad,base.slugs[0],0),/contract changed/);
 assert.throws(()=>content.panel('unknown',0),/Unknown/);for(const i of [-1,5,1.1,'en'])assert.throws(()=>content.panel(base.slugs[0],i),/locale/);
 assert.throws(()=>content.promote('<h2>A</h2><h2>B</h2>',0),/contract changed/);
 const promo=content.promote('<h2>A</h2>',0);assert.throws(()=>content.promote(promo,0),/contract changed/);
});
test('new PR paths are covered with read-only CI and all evidence suites run',()=>{
 const workflow=fs.readFileSync(path.resolve(__dirname,'../.github/workflows/ai-evidence-satellites-contract.yml'),'utf8');
 for(const file of ['append-ai-evidence-pathways.cjs','test-ai-evidence-pathways.cjs'])assert.ok(workflow.includes("      - 'scripts/"+file+"'"));
 assert.ok(workflow.includes('run: node --test scripts/test-ai-evidence-*.cjs'));assert.doesNotMatch(workflow,/pages:\s*write|contents:\s*write|id-token:\s*write/);
});
