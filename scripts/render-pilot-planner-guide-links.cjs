'use strict';
// Preserve the legacy all-locale guide-return contract after Planner rendering.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {locales,route}=require('./render-pilot-planner-locales.cjs');
const labels={pt:'Idiomas do guia de evidências',en:'Evidence guide languages',es:'Idiomas de la guía de evidencias',fr:'Langues du guide des preuves',de:'Sprachen des Nachweis-Leitfadens'};
const names={pt:'Português',en:'English',es:'Español',fr:'Français',de:'Deutsch'};
const guide=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
const root=process.argv[2]||'out';
for(const l of locales){const f=path.join(root,route(l),'index.html');let h=fs.readFileSync(f,'utf8');const runtime=h.match(/<script>[\s\S]*?<\/script>/)[0];h=h.replace(/<!--pilot-guide-return:start-->[\s\S]*?<!--pilot-guide-return:end-->/g,'');assert(h.includes('</main>'));const block='<!--pilot-guide-return:start--><section data-pilot-guide-return="2026-10-11-v1"><h2>'+labels[l]+'</h2>'+locales.map(x=>'<a href="'+guide(x)+'" lang="'+(x==='pt'?'pt-BR':x)+'">'+names[x]+'</a>').join(' · ')+'<p><a href="/zion-app-network/pilot-planner-languages.html">'+names[l]+' · Zion App Network</a></p></section><!--pilot-guide-return:end-->';h=h.replace('</main>',block+'</main>');for(const x of locales)assert(h.includes('href="'+guide(x)+'"'));assert.equal(h.match(/<script>[\s\S]*?<\/script>/)[0],runtime);fs.writeFileSync(f,h);}
console.log('PASS Planner reciprocal guide contract: five locales, all five guide returns, runtime preserved.');
