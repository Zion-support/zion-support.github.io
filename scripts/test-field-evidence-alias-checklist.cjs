'use strict';
// Offline build regression: no requests, form submissions or delivery changes.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',origin='https://ziontechgroup.com',release='field-alias-checklist-2026-10-10';
const locales=['en','pt','es','fr','de'];
const route=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
const read=p=>fs.readFileSync(path.join(out,p.slice(1)),'utf8');
const pack=html=>{const m=html.match(/<!--field-evidence-pack:start-->([\s\S]*?)<!--field-evidence-pack:end-->/);assert(m,'Missing current evidence-pack checklist');assert.equal((m[1].match(/<li>/g)||[]).length,6,'Checklist must have six records');assert(m[1].includes('field-evidence-pack-2026-10-10'));return m[1];};
const pages=[];
for(const l of locales){
 const source=route(l),html=read(source),lang=l==='pt'?'pt-BR':l;
 assert(html.includes('<html lang="'+lang+'">'),'Source locale '+l);
 assert(html.includes('href="'+origin+source+'"'),'Source canonical '+l);
 assert.equal((html.match(/rel="alternate"/g)||[]).length,6,'Source alternate set '+l);
 assert.equal((html.match(/data-field-evidence-pack=/g)||[]).length,1,'Duplicate source checklist '+l);
 assert(!/<form\b|<script\b/i.test(html),'Guide must stay read-only '+l);
 const content=pack(html);pages.push({language:lang,url:source,checklist:'six records verified'});
 if(l==='en')continue;
 const alias='/'+l+'/apps/field-service-evidence-guide.html',translated=read(alias);
 assert.equal(translated,html,'Alias must equal complete canonical at copy stage '+l);
 assert.equal(pack(translated),content,'Checklist mismatch '+l);
 pages.push({language:lang,url:alias,canonical:source,checklist:'same six records verified'});
}
fs.writeFileSync(path.join(out,'apps/field-evidence-alias-checklist-qa.json'),JSON.stringify({release,pages,scope:'Offline checklist parity for five canonical guides and four aliases at alias-copy stage; not whole-network translation or runtime certification',forms:'no forms submitted',delivery:'unchanged'},null,2));
console.log('PASS '+release+': five canonical guides, four matching locale aliases, six records each');
