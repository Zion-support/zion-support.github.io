'use strict';
// Artifact-only route inventory. Presence/lang checks are not semantic translation QA.
const fs=require('node:fs'),path=require('node:path');
const locales=['en','pt','es','fr','de'];
const tags={en:'en',pt:'pt-BR',es:'es',fr:'fr',de:'de'};
const names={en:'English',pt:'Português',es:'Español',fr:'Français',de:'Deutsch'};
function language(s){const m=s.match(/<html\b[^>]*\blang\s*=\s*["']([^"']+)/i);return m?m[1].toLowerCase().split('-')[0]:null;}
const redirect=s=>/http-equiv\s*=\s*["']refresh/i.test(s);
function inventory(out){
 const pages=new Map();
 function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else if(e.isFile()&&e.name.endsWith('.html')){const s=fs.readFileSync(f,'utf8'),l=language(s);if(locales.includes(l)&&!redirect(s)&&/<\/body>/i.test(s))pages.set(path.relative(out,f).split(path.sep).join('/'),{lang:l,canonical:canonical(s)});}}}
 function canonical(s){const tag=(s.match(/<link\b[^>]*\brel\s*=\s*["']canonical["'][^>]*>/i)||[])[0];if(!tag)return null;const href=(tag.match(/\bhref\s*=\s*["']([^"']+)/i)||[])[1];try{const u=new URL(href,'https://ziontechgroup.com');if(u.origin!=='https://ziontechgroup.com'||u.search||u.hash)return null;return u.pathname.slice(1)+(u.pathname.endsWith('/')?'index.html':'');}catch{return null;}}
 walk(out);
 function family(rel,l){
  let base=rel.replace(/^(en|pt|es|fr|de)\//,'');
  const match=base.match(/([.-])(pt-br|pt|es|fr|de)\.html$/i);
  if(match&&l!=='en'&&match[2].toLowerCase().split('-')[0]===l){const candidate=base.slice(0,-match[0].length)+'.html';if(pages.get(candidate)?.lang==='en'||pages.get('en/'+candidate)?.lang==='en')base=candidate;}
  return base;
 }
 const groups=new Map(),keys=new Map();
 for(const [rel,p] of pages){const key=family(rel,p.lang);keys.set(rel,key);if(!groups.has(key))groups.set(key,{path:key,routeVariants:{}});const g=groups.get(key);(g.routeVariants[p.lang]||=[]).push(rel);}
 for(const g of groups.values()){
  g.routes={};for(const l of locales){const variants=g.routeVariants[l];if(!variants)continue;variants.sort();const canonical=variants.filter(r=>pages.get(r).canonical===r);let preferred=l==='en'?g.path:l+'/'+g.path;if(g.path==='index.html')preferred=l==='pt'?'index.html':l+'/index.html';g.routes[l]=canonical.includes(preferred)?preferred:canonical[0]|| (variants.includes(preferred)?preferred:variants[0]);}
  g.available=locales.filter(l=>g.routes[l]);g.missing=locales.filter(l=>!g.routes[l]);
 }
 return {groups:[...groups.values()].sort((a,b)=>a.path.localeCompare(b.path)),byPath:groups,keyFor:rel=>keys.get(rel),pages};
}
const url=rel=>'/'+rel.replace(/index\.html$/,'');
function links(g){return g.available.map(l=>'<a data-network-language="'+tags[l]+'" lang="'+tags[l]+'" href="'+url(g.routes[l])+'">'+names[l]+'</a>').join(' · ');}
module.exports={inventory,language,redirect,locales,tags,names,url,links};
