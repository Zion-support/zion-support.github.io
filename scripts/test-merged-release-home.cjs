'use strict';
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),assert=require('node:assert/strict');
const {render,release}=require('./render-merged-release-home.cjs');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-merged-release-'));
const locales={en:['en','en'],pt:['','pt-BR'],es:['es','es'],fr:['fr','fr'],de:['de','de']};
for(const [k,[dir,lang]] of Object.entries(locales)){
 const d=path.join(tmp,dir); fs.mkdirSync(d,{recursive:true});
 fs.writeFileSync(path.join(d,'index.html'),`<!doctype html><html lang="${lang}"><head><title>t</title></head><body><main><p>x</p><form action="/x"><input></form></main><script>1</script></body></html>`);
}
const r1=render(tmp); assert.equal(r1.pages,5);
const snap={};
for(const [k,[dir]] of Object.entries(locales)){
 const f=path.join(tmp,dir,'index.html'), h=fs.readFileSync(f,'utf8'); snap[k]=h;
 assert.equal((h.match(/<!--zion-merged-release-home:start-->/g)||[]).length,1,k);
 assert.equal((h.match(/<form\b/gi)||[]).length,1,k+' form count changed');
 for(const u of ['agent-trace-evidence-lab','field-sla-acceptance-matrix','ai-dependency-blast-radius']) assert(h.includes(u),k+' missing '+u);
 assert(h.includes('zion-app-network/app/network-merged-release-2026-showcase'),k+' showcase');
}
render(tmp);
for(const [k,[dir]] of Object.entries(locales)) assert.equal(fs.readFileSync(path.join(tmp,dir,'index.html'),'utf8'),snap[k],k+' not idempotent');
console.log('PASS '+release+': five locales, one marker each, three app links, showcase link, forms/scripts preserved, idempotent');
