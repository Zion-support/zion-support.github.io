'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out';
const forms=s=>s.match(/<form\b[\s\S]*?<\/form>/gi)||[];
const staged=[];
for(const rel of ['index.html','en/index.html','es/index.html','fr/index.html','de/index.html']){
 const f=path.join(out,rel),before=fs.readFileSync(f,'utf8');
 const legacy=/<section\b[^>]*\bid=["']discovery-first-win["'][^>]*>[\s\S]*?<\/section>/gi;
 const old=before.match(legacy)||[];for(const block of old)assert(!/<form\b/i.test(block),'Legacy promotion has a form; preserve and review');
 const html=before.replace(legacy,'');assert.deepEqual(forms(before),forms(html));assert.equal((html.match(/data-first-win-release="first-win-2026-10-10"/g)||[]).length,1,'Expected one localized homepage promotion');
 staged.push([f,html]);
}
for(const [f,html] of staged)fs.writeFileSync(f,html);
const manifest=path.join(out,'apps/first-win-publication.json'),m=JSON.parse(fs.readFileSync(manifest,'utf8'));m.layout='single-promotion-v2';fs.writeFileSync(manifest,JSON.stringify(m,null,2)+'\n');
console.log('PASS single First Win promotion on all five homepages; forms unchanged.');
