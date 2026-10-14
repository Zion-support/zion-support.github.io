'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),assert=require('node:assert/strict');
const m=require('./render-first-workflow.cjs');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'zion-first-workflow-'));
const put=(u,s)=>{const f=m.file(root,u);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,s);};
const fixture=l=>'<!DOCTYPE html><html lang="'+m.C[l].lang+'"><head><title>Kept</title></head><body><main><a href="/kept/?a=1&amp;b=2">Keep</a><!--home-app-paths:start--><section id="app-paths-home"><p>Kept copy</p></section><!--home-app-paths:end--><form action="/unchanged"><input name="test"></form></main><script>window.unchanged="<safe>";</script></body></html>';
function snapshot(){const result={};function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else result[path.relative(root,f)]=fs.readFileSync(f,'utf8');}}walk(root);return result;}
try{
 for(const l of m.L)for(const u of [m.home(l),...m.targets(l)])put(u,fixture(l));
 const before=snapshot();m.render(root);assert(m.verify(root));const first=snapshot();m.render(root);assert.deepEqual(snapshot(),first,'Repeated render must be byte-idempotent');
 for(const [rel,s] of Object.entries(before)){const after=fs.readFileSync(path.join(root,rel),'utf8');assert.deepEqual(m.protectedParts(after),m.protectedParts(s));for(const u of m.hrefs(s))assert(m.hrefs(after).includes(u));if(m.L.some(l=>m.targets(l)[3]===('/'+rel.replace(/index\.html$/,''))))assert.equal(after,s,'Discovery page must not change');}
 const saved=m.C.en.title;m.C.en.title='<img src=x onerror=alert(1)>';assert(m.page('en').includes('&lt;img'));assert(!m.page('en').includes('<img src=x'));m.C.en.title=saved;
 const h=fixture('en');assert.throws(()=>m.transform(h.replace('lang="en"','lang="de"'),'en'),/language/);assert.throws(()=>m.transform(h.replace('<head>','<head><meta http-equiv="refresh" content="0;url=/">'),'en'),/redirect/);assert.throws(()=>m.transform(h.replace('<!--home-app-paths:end-->',''),'en',true),/section/);
 const missing=m.file(root,m.targets('de')[1]),content=fs.readFileSync(missing);fs.unlinkSync(missing);const preflight=snapshot();assert.throws(()=>m.render(root));assert.deepEqual(snapshot(),preflight,'Failed preflight must not partially write');fs.writeFileSync(missing,content);
 const clash=m.file(root,m.route('de')),guide=fs.readFileSync(clash);fs.writeFileSync(clash,fixture('de'));const collision=snapshot();assert.throws(()=>m.render(root),/unowned/);assert.deepEqual(snapshot(),collision);fs.writeFileSync(clash,guide);
 console.log('PASS fixture: five locales, 4 cards/6 alternates each, 20 reciprocal links, idempotence, escaping, redirect/language/collision rejection, all-or-nothing preflight, original forms/scripts/hrefs and untouched Discovery pages.');
}finally{fs.rmSync(root,{recursive:true,force:true});}
if(process.argv[2]){m.verify(process.argv[2]);console.log('PASS supplied artifact first-workflow contracts.');}
