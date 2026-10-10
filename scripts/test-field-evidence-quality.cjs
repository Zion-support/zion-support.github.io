'use strict';
// Offline checks only. Never submit forms or send messages.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const out=process.argv[2]||'out';const locales=['en','pt','es','fr','de'];
const js=fs.readFileSync(path.join(out,'assets/js/discovery-delivery.js'),'utf8');new vm.Script(js);
const helper=js.match(/function recommendationKind\(path\)\{[\s\S]*?\n\}/);assert(helper,'Missing helper');
for(const lang of locales){
 const sandbox={document:{documentElement:{lang:lang==='pt'?'pt-BR':lang}}};vm.createContext(sandbox);vm.runInContext(helper[0],sandbox);
 const kind=url=>vm.runInContext('recommendationKind('+JSON.stringify(url)+')',sandbox);
 const categories=['/ai-predictive-analytics/','/ai-roi-tracker/','/roi-calc/','/apps/','/unknown/'].map(kind);
 assert.equal(new Set(categories).size,5,'Classes conflated: '+lang);
 if(lang!=='en')assert(!categories.includes('Service page'),'English fallback: '+lang);
 assert.equal(kind('/roi-calc/'),kind('/roi-calculator/'));assert.notEqual(kind('/automation-pilot-planner/'),kind('/roi-calc/'),'Planner must not be classified as calculator');
 const route='apps/field-service-evidence-guide'+(lang==='en'?'':'.'+(lang==='pt'?'pt-br':lang))+'.html';const html=fs.readFileSync(path.join(out,route),'utf8');
 assert.equal((html.match(/data-field-evidence-gates=/g)||[]).length,1,'Duplicate section');assert(!/<form\b|<script\b/i.test(html));assert.equal((html.match(/rel="alternate"/g)||[]).length,6);
 assert(html.includes('href="'+(lang==='en'?'/discovery/':'/'+lang+'/discovery/')+'"'),'Wrong Discovery locale');
}
assert((js.includes('recommendationKind(a[1])')&&js.includes('recommendationKind(path)'))||(js.includes('resourceType(a)')&&js.includes('resourceType([name,path])')),'Missing supported report/page classifier');
assert(js.includes('commercial@ziontechgroup.com'),'Recipient changed');
console.log('PASS 5 locales, 25 capability cases, aliases, JS syntax, single content section and guide safety');

// Gate exact canonical and hreflang routes in every regular publication test.
require('./test-field-evidence-alias-integrity.cjs');
