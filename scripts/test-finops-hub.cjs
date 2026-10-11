'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const out=process.argv[2]||'out',version='2026-10-11-finops-hub-v1',manifestFile=path.join(out,'apps/finops-hub-publication.json');
const m=JSON.parse(fs.readFileSync(manifestFile,'utf8')),copy=JSON.parse(fs.readFileSync('content/finops-scenario.json','utf8')),L=['en','pt','es','fr','de'];
const file=u=>path.join(out,u.slice(1)+(u.endsWith('/')?'index.html':'')),read=u=>fs.readFileSync(file(u),'utf8');
assert.equal(m.version,version);assert.equal(m.pages.length,5);assert.equal(m.linkedPages.length,35);assert.equal(new Set(m.linkedPages).size,35);
for(let i=0;i<5;i++){const h=read(m.pages[i]),c=copy[L[i]];assert(h.includes('<html lang="'+c.lang+'">'));assert(h.includes(c.intro));assert(h.includes(c.limits));assert.equal((h.match(/rel="alternate"/g)||[]).length,6);for(const url of m.pages)assert(h.includes('href="https://ziontechgroup.com'+url+'"'));assert(!/<form\b|<script\b/i.test(h));}
for(const u of m.linkedPages){const h=read(u),l=u==='/'?'pt':/^\/(en|pt|es|fr|de)\//.exec(u)?.[1]||'en',hub=m.pages[L.indexOf(l)];assert.equal((h.match(/data-finops-hub-link=/g)||[]).length,1);assert(h.includes('href="'+hub+'"'));}
const paths=[...m.pages,...m.linkedPages],before=paths.map(read),manifestBefore=fs.readFileSync(manifestFile,'utf8');
cp.execFileSync(process.execPath,['scripts/render-finops-hub.cjs',out],{stdio:'pipe'});
assert.deepEqual(paths.map(read),before,'Repeat renderer changed output');assert.equal(fs.readFileSync(manifestFile,'utf8'),manifestBefore);
console.log('PASS '+version+': locales, six alternates, all 35 returns, disclosure and byte-identical repeat render.');
