'use strict';
// Approved additive route aliases and owned promotion cleanup. No network calls.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out';
const pages=[];
for(const locale of ['pt','es','fr','de']){
 const lang=locale==='pt'?'pt-BR':locale;
 const source='/apps/field-service-evidence-guide.'+(locale==='pt'?'pt-br':locale)+'.html';
 const target='/'+locale+'/apps/field-service-evidence-guide.html';
 const html=fs.readFileSync(path.join(out,source.slice(1)),'utf8');
 assert(html.includes('<html lang="'+lang+'">'),'Unexpected source language '+locale);
 assert(html.includes('href="https://ziontechgroup.com'+source+'"'),'Canonical source missing '+locale);
 assert.equal((html.match(/rel="alternate"/g)||[]).length,6,'Alternate coverage '+locale);
 assert(html.includes('data-field-evidence-languages'),'Language navigation missing '+locale);
 assert(!/<form\b|<script\b/i.test(html),'Guide must remain read-only '+locale);
 const dest=path.join(out,target.slice(1));fs.mkdirSync(path.dirname(dest),{recursive:true});
 fs.writeFileSync(dest,html);assert.equal(fs.readFileSync(dest,'utf8'),html);
 pages.push({language:lang,url:target,canonical:source});
}
// Remove only the obsolete owned EN promotion when its translated replacement exists.
for(const rel of ['index.html','pt/index.html','en/index.html','es/index.html','fr/index.html','de/index.html']){
 const file=path.join(out,rel);if(!fs.existsSync(file))continue;
 const before=fs.readFileSync(file,'utf8');
 if(!before.includes('data-field-evidence-promo'))continue;
 const forms=s=>[...s.matchAll(/<form\b[\s\S]*?<\/form>/gi)].map(m=>m[0]);
 const owned=/<!--zion-field-evidence:start-->[\s\S]*?<!--zion-field-evidence:end-->/g;
 const html=before.replace(owned,block=>{assert(!/<form\b/i.test(block),'Refuse to remove form');return '';});
 assert.deepEqual(forms(html),forms(before),'Homepage forms changed '+rel);
 assert(!html.includes('<!--zion-field-evidence:start-->'),'Obsolete owned promo remains '+rel);
 fs.writeFileSync(file,html);
}
fs.writeFileSync(path.join(out,'apps/field-evidence-route-aliases.json'),JSON.stringify({release:'field-route-aliases-2026-10-10',pages,canonicalPolicy:'Existing suffix URLs retained to avoid duplicate search indexing',scope:'Four complete translated guide aliases and obsolete owned homepage promotion only',delivery:'unchanged'},null,2));
console.log('PASS four complete field guide aliases; canonical translations and forms preserved');
