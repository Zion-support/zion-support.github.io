'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const routes=require('./network-publication-routes.cjs');
const out=process.argv[2]||'out',L=routes.locales;
const manifest=path.join(out,'apps/network-publication-coverage.json');
const report=JSON.parse(fs.readFileSync(manifest,'utf8'));
const inventory=routes.inventory(out);
report.coverageSchema='route-families-v2';
report.coverageRepairRelease='network-coverage-2026-10-12-v1';
report.languageCheck='Counterpart must have a complete body, not redirect, and declare the requested language. Folder and filename-suffix variants are grouped, with existing canonical destinations preferred. This is not a semantic translation review.';
let removed=0;
for(const [rel] of inventory.pages){const f=path.join(out,rel),s=fs.readFileSync(f,'utf8');if(!s.includes('<!--zion-network-nav:start-->'))continue;
 const g=inventory.byPath.get(inventory.keyFor(rel));
 const next=s.replace(/<!--zion-network-nav:start-->[\s\S]*?<!--zion-network-nav:end-->/g,nav=>{
  const old=[...nav.matchAll(/<a (?:hreflang|data-network-language)="([^"]+)" lang="[^"]+" href="([^"]+)">[^<]*<\/a>/g)];
  for(const a of old){const expected=a[1].toLowerCase().split('-')[0],target=a[2].slice(1)+(a[2].endsWith('/')?'index.html':'');if(inventory.pages.get(target)?.lang!==expected)removed++;}
  // Only replace the owned language paragraph. Main nav, forms, head SEO and bodies are untouched.
  return nav.replace(/<p>([^<]*: )[\s\S]*?<\/p>/,(_,label)=>'<p>'+label+routes.links(g)+'</p>');
 });
 if(next!==s)fs.writeFileSync(f,next);
 assert((next.match(/<!--zion-network-nav:start-->/g)||[]).length===1,'Duplicate navigation '+f);
}
report.groups=inventory.groups;report.fiveLanguageGroups=report.groups.filter(g=>g.missing.length===0).length;report.translationGapGroups=report.groups.filter(g=>g.missing.length>0).length;
report.mislabeledLinksRemoved=(report.mislabeledLinksRemoved||0)+removed;
fs.writeFileSync(manifest,JSON.stringify(report,null,2)+'\n');
for(const l of L){const p=l==='en'?'':l+'/',f=path.join(out,p+'apps/network-start-here.html'),s=fs.readFileSync(f,'utf8');assert(routes.language(s)===l);assert(s.includes('2026-10-08-network-start-v1'));assert((s.match(/rel="alternate"/g)||[]).length===6);assert(!/<form\b/i.test(s));assert(!/onload=|onerror=/i.test(s));assert((s.match(/hreflang=/g)||[]).length===6,'Shared navigation must preserve head-only alternate contract');}
console.log('PASS route-families-v2: '+removed+' inaccurate translation links removed; '+report.fiveLanguageGroups+' declared-language five-language groups and '+report.translationGapGroups+' translation-gap groups.');
