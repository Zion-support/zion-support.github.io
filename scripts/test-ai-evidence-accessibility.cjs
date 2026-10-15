"use strict";
const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const extension=require('./render-ai-evidence-accessibility.cjs'),review=require('./render-ai-evidence-review.cjs'),base=require('./render-ai-evidence-locales.cjs');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'zion-accessibility-'));
const source=path.resolve(__dirname,'../public'),before=path.join(tmp,'before'),after=path.join(tmp,'after');
review.render(source,before);extension.render(source,after);
const codes=['','pt','es','fr','de'];
for(let i=0;i<5;i++)for(const tool of base.slugs)test(tool+' '+base.locales[i]+' preserves logic and improves keyboard navigation',()=>{
 const rel=path.join(codes[i],tool,'index.html');const a=fs.readFileSync(path.join(before,rel),'utf8'),b=fs.readFileSync(path.join(after,rel),'utf8');
 assert.equal(b.match(/<script>[\s\S]*?<\/script>/)[0],a.match(/<script>[\s\S]*?<\/script>/)[0]);
 assert.match(b,/<main id="main" tabindex="-1">/);assert.match(b,/prefers-reduced-motion:reduce/);
 assert.ok(b.includes('href="'+extension.route(extension.slug,i)+'"'));
 if(tool===base.slugs[0])assert.ok(b.includes('<caption>'+extension.copy[i][11]+'</caption>'));
});
for(let i=0;i<5;i++)test('localized comparison guide '+base.locales[i],()=>{
 const html=fs.readFileSync(path.join(after,codes[i],extension.slug,'index.html'),'utf8');
 assert.ok(html.includes('<html lang="'+base.locales[i]+'">'));assert.ok(html.includes(extension.copy[i][10]));
 assert.equal((html.match(/rel="alternate"/g)||[]).length,6);
 for(const tool of base.slugs)assert.ok(html.includes('href="'+extension.route(tool,i)+'"'));
 assert.ok(html.includes('href="'+extension.route('discovery',i)+'"'));
 assert.equal((html.match(/aria-current="page"/g)||[]).length,1);
 assert.doesNotMatch(html,/<script|<form|fetch\(/);
});
test('fails closed on source output collision',()=>assert.throws(()=>extension.render(source,source),/Separate preview/));
test('source templates remain untouched',()=>{for(const tool of base.slugs){const html=fs.readFileSync(path.join(source,tool,'index.html'),'utf8');assert.doesNotMatch(html,/evidence-guide-link/);}});
test.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));
