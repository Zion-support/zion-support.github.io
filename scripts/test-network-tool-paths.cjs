'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const {render,copy,routes,guide,home,release}=require('./render-network-tool-paths.cjs');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-tool-paths-'));let checks=0;const ok=(v,m)=>{assert(v,m);checks++;};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const write=(u,s)=>{const f=path.join(root,u.slice(1));fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,s);};
const read=u=>fs.readFileSync(path.join(root,u.slice(1)),'utf8');const urls=Object.keys(copy).flatMap(l=>[guide(l),home(l)+'index.html']);
try{
 for(const [l,c] of Object.entries(copy)){
 const head=`<!doctype html><html lang="${c.lang}"><head><title>Retained SEO</title></head><body>`,body='<form action="/retained"><input name="example"></form><script>const retained=true;</script>';
 write(guide(l),head+'<main><h1>Retained guide</h1>'+body+'</main></body></html>');write(home(l)+'index.html',head+body+'<!--zion-network-home:start--><section><div><h2 id="network-start-title">Retained promotion</h2></div></section><!--zion-network-home:end--></body></html>');
 }
 const originals=urls.map(u=>[u,read(u)]);ok(render(root).pages===10,'Ten pages');
 for(const [l,c] of Object.entries(copy)){
 const g=read(guide(l)),h=read(home(l)+'index.html');ok(g.includes(esc(c.title))&&g.includes(esc(c.intro))&&g.includes(esc(c.limit)),'Full localized introduction/limits');
 for(const [t,b] of c.cards)ok(g.includes(esc(t))&&g.includes(esc(b)),'Full localized card body');
 for(const u of routes(l).flat())ok(g.includes(`href="${u}"`),'Same-language resource link');
 ok(h.includes(`href="${guide(l)}#network-tool-paths"`)&&h.includes(esc(c.cta)),'Localized homepage CTA');ok(g.includes(`href="${home(l)}#network-start-title"`),'Homepage return');ok((g.match(/id="network-tool-paths"/g)||[]).length===1,'Unique section');ok((g.match(/<li>/g)||[]).length===3,'Three cards');ok(g.includes('auto-fit')&&g.includes('focus-visible'),'Responsive/focus rules');
 }
 for(const [u,s] of originals){const a=read(u);ok(a.match(/<head>[\s\S]*?<\/head>/)[0]===s.match(/<head>[\s\S]*?<\/head>/)[0],'SEO preserved');ok(a.includes('<form action="/retained"><input name="example"></form>')&&a.includes('<script>const retained=true;</script>'),'Protected blocks preserved');}
 const first=urls.map(u=>[u,read(u)]);render(root);ok(first.every(([u,s])=>read(u)===s),'Idempotent bytes');
 function negative(url,change,pattern){const good=read(url);write(url,change(good));const before=urls.map(u=>[u,read(u)]);assert.throws(()=>render(root),pattern);checks++;ok(before.every(([u,s])=>read(u)===s),'Preflight failure writes nothing');write(url,good);}
 negative(guide('de'),s=>s.replace('lang="de"','lang="en"'),/Wrong comparison language/);
 negative(guide('de'),s=>s.replace('</main>','<p id="network-tool-paths-title">Conflict</p></main>'),/Conflicting comparison ID/);
 negative(home('de')+'index.html',s=>s.replace('</body>','<!--zion-tool-paths-cta:start-->duplicate<!--zion-tool-paths-cta:end--></body>'),/Duplicate comparison block/);
 negative(guide('de'),s=>s.replace('</main>',''),/Missing comparison main/);
 console.log(`PASS tool-path comparison: ${checks} assertions; ${release}; fixtures only, no live or browser claim.`);
}finally{fs.rmSync(root,{recursive:true,force:true});}
