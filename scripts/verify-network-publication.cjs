'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',L=['en','pt','es','fr','de'],cache=new Map();
const read=f=>{if(!cache.has(f))cache.set(f,fs.readFileSync(f,'utf8'));return cache.get(f);};
const language=s=>{const m=s.match(/<html[^>]*\blang=["']([^"']+)/i);return m?m[1].toLowerCase().split('-')[0]:null;};
const manifest=path.join(out,'apps/network-publication-coverage.json');
const report=JSON.parse(fs.readFileSync(manifest,'utf8'));
report.languageCheck='Counterpart must exist, not redirect, and declare the requested language. This is not a semantic translation review.';
let removed=0;
for(const g of report.groups){const candidates={en:g.path,pt:'pt/'+g.path,es:'es/'+g.path,fr:'fr/'+g.path,de:'de/'+g.path};if(g.path==='index.html'){candidates.en='en/index.html';candidates.pt='index.html';}
 g.available=L.filter(l=>{const f=path.join(out,candidates[l]);if(!fs.existsSync(f))return false;const s=read(f);return language(s)===l&&!/http-equiv\s*=\s*["']refresh/i.test(s);});g.missing=L.filter(l=>!g.available.includes(l));}
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else if(e.isFile()&&e.name.endsWith('.html')){
 const s=read(f);if(!s.includes('<!--zion-network-nav:start-->'))continue;
 const next=s.replace(/<!--zion-network-nav:start-->[\s\S]*?<!--zion-network-nav:end-->/g,nav=>nav.replace(/<a hreflang="([^"]+)" lang="[^"]+" href="([^"]+)">[^<]*<\/a>/g,(anchor,lang,u)=>{
 const target=path.join(out,u.slice(1)+(u.endsWith('/')?'index.html':''));const expected=lang.toLowerCase().split('-')[0];
 if(!fs.existsSync(target)||language(read(target))!==expected){removed++;return '';}
 return anchor;
 }));
 if(next!==s){fs.writeFileSync(f,next);cache.set(f,next);}
 assert((next.match(/<!--zion-network-nav:start-->/g)||[]).length===1,'Duplicate navigation '+f);
 }}}walk(out);
report.fiveLanguageGroups=report.groups.filter(g=>g.missing.length===0).length;report.translationGapGroups=report.groups.filter(g=>g.missing.length>0).length;report.mislabeledLinksRemoved=removed;
fs.writeFileSync(manifest,JSON.stringify(report,null,2)+'\n');
for(const l of L){const p=l==='en'?'':l+'/',f=path.join(out,p+'apps/network-start-here.html'),s=read(f);assert(language(s)===l);assert(s.includes('2026-10-08-network-start-v1'));assert((s.match(/rel="alternate"/g)||[]).length===6);assert(!/<form\b/i.test(s));assert(!/onload=|onerror=/i.test(s));}
console.log('PASS declared-language verification: '+removed+' inaccurate translation links removed; '+report.fiveLanguageGroups+' verified five-language groups and '+report.translationGapGroups+' translation-gap groups.');
