"use strict";
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const base=require('./render-ai-evidence-locales.cjs'),review=require('./render-ai-evidence-review.cjs'),finalizer=require('./finalize-ai-evidence-accessibility.cjs');
const out=fs.mkdtempSync(path.join(os.tmpdir(),'zion-evidence-nav-'));
review.render(process.env.ZION_APPS_ROOT||path.resolve(__dirname,'../public'),out);
const prefixes=['','pt','es','fr','de'];
function route(slug,i){return '/'+(i?prefixes[i]+'/':'')+slug+'/';}
function attributes(tag){return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m=>[m[1],m[2]]));}
function links(html){return [...html.matchAll(/<a\b[^>]*>/g)].map(m=>attributes(m[0]));}
function safe(href){
 if(typeof href!=='string'||!href||/[\s\x00-\x1f\\]/.test(href)||href.startsWith('//')||/%(?:2e|2f|5c)/i.test(href))return false;
 if(href.startsWith('#'))return true;
 if(href.startsWith('/'))return !href.split('/').some(p=>p==='.'||p==='..');
 try{const u=new URL(href);return (u.protocol==='https:'&&!u.username&&!u.password)||(u.protocol==='mailto:'&&!!u.pathname);}catch{return false;}
}
for(let i=0;i<5;i++){
 test(base.locales[i]+' exact reciprocal alternates resolve to generated pages',()=>{
  for(const slug of base.slugs){
   const html=fs.readFileSync(path.join(out,route(slug,i),'index.html'),'utf8');
   const alternates=[...html.matchAll(/<link\b[^>]*>/g)].map(m=>attributes(m[0])).filter(a=>a.rel==='alternate');
   assert.deepEqual(alternates.map(a=>a.hreflang),[...base.locales,'x-default']);
   alternates.forEach((a,j)=>{assert.equal(a.href,'https://ziontechgroup.com'+route(slug,j===5?0:j));assert.ok(fs.existsSync(path.join(out,new URL(a.href).pathname,'index.html')));});
   const langs=links(html).filter(a=>a.hreflang);assert.equal(langs.length,5);langs.forEach((a,j)=>{assert.equal(a.href,route(slug,j));assert.equal(a.lang,base.locales[j]);assert.equal(a.hreflang,base.locales[j]);assert.equal(a['aria-current'],j===i?'page':undefined);});
  }
 });
 test(base.locales[i]+' unique IDs, resolving fragments and safe link schemes',()=>{
  for(const slug of base.slugs){const html=fs.readFileSync(path.join(out,route(slug,i),'index.html'),'utf8'),markup=html.replace(/<script>[\s\S]*?<\/script>/g,'');const ids=[...markup.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);for(const a of links(markup)){assert.ok(safe(a.href),'Unsafe link '+a.href);if(a.href.startsWith('#'))assert.ok(ids.includes(a.href.slice(1)));}for(const m of markup.matchAll(/\b(?:for|aria-labelledby|aria-describedby)="([^"]+)"/g))for(const id of m[1].split(' '))assert.ok(ids.includes(id),'Unresolved reference '+id);}
 });
 test(base.locales[i]+' focusable skip target, reduced motion and unchanged local script',()=>{
  for(const slug of base.slugs){const html=fs.readFileSync(path.join(out,route(slug,i),'index.html'),'utf8');assert.ok(html.includes('<main id="main" tabindex="-1">'));assert.ok(html.includes('@media(prefers-reduced-motion:reduce)'));assert.ok(html.includes('min-height:44px'));assert.equal(finalizer.finalize(html),html);}
 });
}
test('URI policy rejects executable, protocol-relative and traversal fixtures',()=>{
 for(const href of['javascript:alert(1)','data:text/html,x','vbscript:x','http://example.test','//example.test','/../x','/%2e%2e/x','/a\\b','https://user:pass@example.test'])assert.equal(safe(href),false,href);
 for(const href of['#main','/pt/agent-trace-evidence-lab/','https://github.com/Zion-support/zion-support.github.io/pull/71573','mailto:commercial@ziontechgroup.com'])assert.equal(safe(href),true,href);
});
test('accessibility finalizer fails closed on contract drift and preserves JavaScript',()=>{
 assert.throws(()=>finalizer.finalize('<main></main>'),/contract changed/);
 const input='<style>html{scroll-behavior:smooth}</style><main id="main"></main><script>const localOnly=true;</script>',output=finalizer.finalize(input);
 assert.equal(output.match(/<script>[\s\S]*?<\/script>/)[0],input.match(/<script>[\s\S]*?<\/script>/)[0]);assert.equal(finalizer.finalize(output),output);
});
