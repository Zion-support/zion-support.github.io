"use strict";
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||'out'),base='https://ziontechgroup.com';
const publication=JSON.parse(fs.readFileSync(path.join(root,'apps/planning-locales-publication.json'),'utf8'));
assert.equal(publication.catalogs.length,5);assert.equal(publication.surveyPages.length,5);assert.equal(publication.homepages.length,5);
for(const p of publication.catalogs){const u=new URL(p.url),f=path.join(root,u.pathname,u.pathname.endsWith('/')?'index.html':'');const h=fs.readFileSync(f,'utf8');assert(h.includes(`<html lang="${p.lang}">`));assert(h.includes(`rel="canonical" href="${p.url}"`));assert.equal((h.match(/data-tool=/g)||[]).length,7);assert.equal((h.match(/hreflang=/g)||[]).length,6);assert(!h.includes('<form')&&!h.includes('<script'));assert(h.includes('planning-directory-locales-2026-10-08'));const l=p.lang==='pt-BR'?'pt':p.lang;const survey='/site-survey-planner/'+(l==='en'?'':l+'/');assert(h.includes(`href="${survey}"`));const pf=path.join(root,l==='en'?'':l,'apps/app-experiment-planner.html');const planner=fs.readFileSync(pf,'utf8');assert(planner.includes(`href="${u.pathname}"`));assert(planner.includes(`href="${survey}"`));}
for(const home of publication.homepages){const h=fs.readFileSync(path.join(root,new URL(home).pathname,'index.html'),'utf8');assert.equal((h.match(/id="site-survey-spotlight"/g)||[]).length,1);}
console.log('PASS: five translated curated directories, reciprocal survey/planner paths, seven-tool parity and additive homepage promotion.');
