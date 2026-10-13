'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',release='2026-10-08-ops-field-v1';
const labels={en:['AI & IT Operations Command Center','Field Services & Smart Hands Playbook','Five-language network guide'],pt:['Central de operações de IA e TI','Guia de serviços de campo e Smart Hands','Guia da rede em cinco idiomas'],es:['Centro de operaciones de IA y TI','Guía de servicios de campo y Smart Hands','Guía de la red en cinco idiomas'],fr:['Centre des opérations IA et informatique','Guide des services sur site et Smart Hands','Guide du réseau en cinq langues'],de:['Leitfaden für KI- und IT-Betrieb','Leitfaden für Vor-Ort-Service und Smart Hands','Netzwerk-Leitfaden in fünf Sprachen']};
const slugs=['ai-it-ops-command-center','field-services-smart-hands-playbook'];
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const forms=s=>s.match(/<form\b[\s\S]*?<\/form>/gi)||[];
for(const slug of ['roi-calc','sla-calculator','ai-governance-checklist']){
 const f=path.join(out,slug,'index.html');assert(fs.existsSync(f),'Missing hosted tool '+f);const before=fs.readFileSync(f,'utf8');assert(!/http-equiv=["']refresh/i.test(before),'Tool redirects '+f);
 const lang=(before.match(/<html[^>]*lang=["']([^"']+)/i)||[])[1]||'en',l=lang.startsWith('pt')?'pt':labels[lang]?lang:'en',c=labels[l],p=l==='en'?'/':'/'+l+'/';
 let html=before.replace(/<!--ops-field-return:start-->[\s\S]*?<!--ops-field-return:end-->/g,'');assert(/<\/body>/i.test(html));
 const links='<!--ops-field-return:start--><aside class="card" data-ops-field-return="'+release+'"><p><a href="'+p+'apps/'+slugs[0]+'.html">'+esc(c[0])+'</a> · <a href="'+p+'apps/'+slugs[1]+'.html">'+esc(c[1])+'</a></p></aside><!--ops-field-return:end-->';
 html=html.replace(/<\/body>/i,links+'</body>');assert.deepEqual(forms(html),forms(before));assert.equal((html.match(/data-ops-field-return=/g)||[]).length,1);fs.writeFileSync(f,html);
}
for(const [l,c] of Object.entries(labels))for(const slug of slugs){
 const f=path.join(out,l==='en'?'':l,'apps',slug+'.html'),before=fs.readFileSync(f,'utf8');let html=before.replace(/<!--ops-field-hub:start-->[\s\S]*?<!--ops-field-hub:end-->/g,'');
 assert(html.includes('</main>'));const link='<!--ops-field-hub:start--><p data-ops-field-hub-link="'+release+'"><a href="/zion-app-network/operations-field-guides.html#'+l+'">'+esc(c[2])+'</a></p><!--ops-field-hub:end-->';
 html=html.replace('</main>',link+'</main>');assert.deepEqual(forms(html),forms(before));assert.equal((html.match(/rel="alternate"/g)||[]).length,6);fs.writeFileSync(f,html);
}
console.log('PASS final operations navigation: three hosted-tool return links and ten localized hub links; original forms and six head alternates preserved.');

// Reconcile concurrent field evidence with approved reporting-resource release.
require('./render-reporting-coordination.cjs');
// Approved five-language standalone calculator promotion; no email submissions.
require('./render-roi-home.cjs').run(out);
// Approved field evidence translations and truthful Discovery classifications.
require('./render-field-evidence-release.cjs');

// Approved scoped First Win locales, truthful copy and reciprocal navigation.
require('./render-first-win-release.cjs');
// Consolidate the legacy promotion after the translated release.
require('./render-first-win-layout.cjs');

// Approved consolidated Discovery-to-pilot content; forms and recipients unchanged.
require('./render-discovery-pilot-evidence.cjs');

// Approved three-app locale and capability repair; preserve existing promotions and forms.
require('./render-legacy-three-locales.cjs').run(out);

// Approved productivity tools and incident planning locales; no external actions.
require('./render-productivity-incident-locales.cjs').run(out);

// Approved five-language worked workflow links inside existing network promotions.
require('./render-productivity-workflow-links.cjs').run(out);

// Approved Batch 91 SQL, scheduling-information and scorecard locales.
require('./render-batch91-locales.cjs').run(out);

// Approved practical three-resource copy inside the existing promotion only.
require('./render-devops-review-promotion.cjs').run(out);

// Approved evidence-led Construction106 mirrors and homepage promotions; pinned source, no submissions.
require('./render-construction106-release.cjs').run(out).catch(e=>{console.error(e);process.exitCode=1;});
