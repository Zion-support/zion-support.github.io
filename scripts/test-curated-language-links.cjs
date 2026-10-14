'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {render,targets,route,home,copy,locales}=require('./render-curated-network.cjs');
function fixture(){const root=fs.mkdtempSync(path.join(os.tmpdir(),'curated-links-'));const file=u=>path.join(root,u.slice(1)+(u.endsWith('/')?'index.html':''));for(const l of locales)for(const u of [home(l),...targets(l)]){const f=file(u);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,'<!DOCTYPE html><html lang="'+copy[l][0]+'"><body><main><h1>Existing content</h1><form action="/preserve"><input name="evidence"></form></main><script>const pricing="unchanged";</script></body></html>');}return {root,file};}

// Reciprocal language-switch links must identify every exact locale destination.
for (const l of locales) test(l+' exact reciprocal hreflang and language-switch destinations',()=>{
 const {root,file}=fixture();
 try {
  render(root);
  const html=fs.readFileSync(file(route(l)),'utf8');
  for (const k of locales) {
   assert(html.includes('<link rel="alternate" hreflang="'+copy[k][0]+'" href="https://ziontechgroup.com'+route(k)+'">'));
   const links=html.match(/<a\b[^>]*>/g)||[];
   assert(links.some(tag=>tag.includes('lang="'+copy[k][0]+'"')&&tag.includes('hreflang="'+copy[k][0]+'"')&&tag.includes('href="'+route(k)+'"')),'Missing reciprocal language switch '+l+' -> '+k);
  }
  assert(html.includes('<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com'+route('en')+'">'));
 } finally { fs.rmSync(root,{recursive:true,force:true}); }
});
