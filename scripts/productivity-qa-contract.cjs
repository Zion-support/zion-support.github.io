'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),nav=require('./render-productivity-navigation.cjs');
const C=nav.C,S=nav.slugs,origin='https://ziontechgroup.com';
const home=l=>C[l].home,catalog=l=>'/zion-app-network/CATALOG-PRODUCTIVITY-REVIEW.html#'+l;
const route=(l,s)=>nav.route(l,s);
const disk=(out,u)=>path.join(out,new URL(u,origin).pathname.replace(/^\//,'')+'index.html');
const protectedParts=h=>h.match(/<(form|script)\b[\s\S]*?<\/\1\s*>/gi)||[];
const owned=/<!--productivity-navigation:start-->[\s\S]*?<!--productivity-navigation:end-->/g;
function contract(n=nav){assert.deepEqual(Object.keys(n.C),['en','pt','es','fr','de']);assert.equal(n.slugs.length,6);for(const k of ['run','transform','block','route'])assert.equal(typeof n[k],'function','Renderer API '+k);for(const [l,c] of Object.entries(n.C)){assert.equal(c.lang,l==='pt'?'pt-BR':l);assert.equal(c.names.length,6);assert.equal(c.home,l==='pt'?'/':'/'+l+'/');for(const slug of n.slugs)assert.equal(n.route(l,slug),'/'+(l==='en'?'':l+'/')+slug+'/');}return true;}
function verify(out){contract();const pages=[];let links=0;
 for(const l of Object.keys(C))for(const slug of ['',...S]){const url=slug?route(l,slug):home(l),file=disk(out,url),h=fs.readFileSync(file,'utf8');assert.equal((h.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)||[])[1],C[l].lang,'Document locale '+url);if(slug){assert(h.includes('rel="canonical" href="'+origin+url+'"'),'Canonical route '+url);assert.equal((h.match(/rel="alternate"/g)||[]).length,6,'Six alternate metadata entries');}assert.equal(nav.transform(h,l,slug),h,'Navigation present and byte-idempotent '+url);const blocks=h.match(owned)||[];assert.equal(blocks.length,1,'One navigation block');assert.equal(blocks[0],nav.block(l,slug),'Exact localized navigation');const hrefs=[...blocks[0].matchAll(/\bhref="([^"]+)"/g)].map(m=>m[1]);assert.equal(hrefs.length,9);
 for(const href of hrefs){if(href.startsWith('/zion-app-network/')){assert(href===catalog(l)||href==='/zion-app-network/CATALOG-NAVIGATION.html#resource-path-'+l);}else{const dest=disk(out,href);assert(fs.existsSync(dest),'Missing owned route '+href);const hash=new URL(href,origin).hash;if(hash){const text=fs.readFileSync(dest,'utf8');assert(text.includes('id="'+hash.slice(1)+'"')||text.includes("id='"+hash.slice(1)+"'"),'Missing destination anchor '+href);}}links++;}
 pages.push({locale:C[l].lang,url,file});}
 return {pages,links};}
module.exports={C,S,home,catalog,route,disk,protectedParts,owned,contract,verify};
