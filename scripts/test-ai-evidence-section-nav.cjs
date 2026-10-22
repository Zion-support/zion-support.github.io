'use strict';
const {test,after}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const base=require('./render-ai-evidence-locales.cjs'),review=require('./render-ai-evidence-review.cjs'),nav=require('./complete-ai-evidence-section-nav.cjs');
const out=fs.mkdtempSync(path.join(os.tmpdir(),'zion-section-nav-'));
review.render(process.env.ZION_APPS_ROOT||path.resolve(__dirname,'../public'),out);
after(()=>fs.rmSync(out,{recursive:true,force:true}));
const ids=['evidence-inputs','evidence-results','safe-worked-example','evidence-pathways'];
for(let i=0;i<5;i++)for(const slug of base.slugs)test(base.locales[i]+' '+slug+' translated focus targets and caption',()=>{
 const p=path.join(out,i?['','pt','es','fr','de'][i]:'',slug,'index.html'),html=fs.readFileSync(p,'utf8');
 const block=html.match(/<nav class="links" id="evidence-section-nav"[^]*?<\/nav>/)[0];
 assert.ok(block.includes('aria-label="'+nav.copy.label[i]+'"'));
 assert.deepEqual([...block.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]),ids);
 for(const id of ids){assert.equal(html.split('id="'+id+'"').length,2);assert.ok(html.includes('id="'+id+'" tabindex="-1"'));}
 for(const key of ['inputs','results','example','compare'])assert.ok(block.includes('>'+nav.copy[key][i]+'</a>'));
 assert.equal(nav.complete(html,i),html);
 assert.equal((html.match(/<caption>/g)||[]).length,slug==='agent-trace-evidence-lab'?1:0);
 if(slug==='agent-trace-evidence-lab')assert.ok(html.includes('<caption>'+nav.copy.caption[i]+'</caption>'));
});
function fixture(){return '<html lang="en"><style>x</style><main><noscript>Local only</noscript><section class="panel"><h2>1. Inputs</h2></section><section class="panel"><h2>2. Results</h2><table></table></section><section id="safe-worked-example"></section><section id="evidence-pathways"></section></main><script>const x="<a>";</script></html>';}
test('section transform preserves exact scripts, styles and existing external links',()=>{
 const input=fixture().replace('</main>','<a href="https://example.test/">External</a></main>'),html=nav.complete(input,0);
 for(const tag of ['script','style']){const re=new RegExp('<'+tag+'>[^]*?</'+tag+'>');assert.equal(html.match(re)[0],input.match(re)[0]);}
 assert.ok(html.includes('<a href="https://example.test/">External</a>'));
});
test('section transform fails closed on missing, duplicate or conflicting targets and wrong locales',()=>{
 for(const input of [fixture().replace('id="evidence-pathways"','id="missing"'),fixture().replace('</main>','<div id="safe-worked-example"></div></main>'),fixture().replace('</main>','<div id="evidence-inputs"></div></main>'),fixture().replace('<table>','<table><table>')])assert.throws(()=>nav.complete(input,0));
 for(const i of [-1,5,1.5])assert.throws(()=>nav.complete(fixture(),i));
 assert.throws(()=>nav.complete(fixture(),1),/locale mismatch/);
 assert.throws(()=>nav.complete(nav.complete(fixture(),0).replace('id="evidence-results"','id="missing"'),0));
});
test('all navigation copy rows contain five nonempty translations',()=>{
 for(const row of Object.values(nav.copy)){assert.equal(row.length,5);row.forEach(v=>assert.ok(typeof v==='string'&&v.trim()));}
});
