'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',version='2026-10-08-network-home-v2';
const copy={
en:['Choose an app by the workflow you need to improve','Explore related tools without relying on inflated app counts. Start with the free Discovery, inspect the actual functionality, and define one measurable, reversible test.','Start with the network guide','Free Discovery','All apps','English','en/','Choose, compare and test apps','Three practical paths: capacity and cost, governance and reliability, and communications. Follow six related tools, inspect their source and record evidence before expanding a pilot.','Read the practical guide'],
pt:['Escolha um app pelo processo que precisa melhorar','Explore ferramentas relacionadas sem depender de contagens infladas de apps. Comece pelo Discovery gratuito, confira a funcionalidade real e defina um teste mensurável e reversível.','Comece pelo guia da rede','Discovery gratuito','Todos os apps','Português','','Escolha, compare e teste apps','Três caminhos práticos: capacidade e custos, governança e confiabilidade, e comunicação. Explore seis ferramentas relacionadas, confira o código e registre evidências antes de ampliar um piloto.','Ler o guia prático'],
es:['Elija una app por el proceso que necesita mejorar','Explore herramientas relacionadas sin depender de cifras infladas de apps. Empiece con Discovery gratuito, compruebe la funcionalidad real y defina una prueba medible y reversible.','Empiece con la guía de la red','Discovery gratuito','Todas las apps','Español','es/','Elija, compare y pruebe apps','Tres rutas prácticas: capacidad y costes, gobernanza y fiabilidad, y comunicación. Explore seis herramientas relacionadas, revise el código y registre evidencias antes de ampliar un piloto.','Leer la guía práctica'],
fr:['Choisissez une app selon le processus à améliorer','Explorez les outils associés sans vous fier à un nombre d’apps gonflé. Commencez par Discovery gratuit, vérifiez les fonctionnalités réelles et définissez un test mesurable et réversible.','Commencer avec le guide du réseau','Discovery gratuit','Toutes les apps','Français','fr/','Choisir, comparer et tester les apps','Trois parcours pratiques : capacité et coûts, gouvernance et fiabilité, communication. Explorez six outils associés, examinez le code et consignez les preuves avant d’élargir un pilote.','Lire le guide pratique'],
de:['Wählen Sie eine App nach dem zu verbessernden Prozess','Erkunden Sie verknüpfte Werkzeuge statt überhöhten App-Zahlen zu vertrauen. Beginnen Sie mit kostenlosem Discovery, prüfen Sie tatsächliche Funktionen und definieren Sie einen messbaren, reversiblen Test.','Mit dem Netzwerk-Leitfaden beginnen','Kostenloses Discovery','Alle Apps','Deutsch','de/','Apps auswählen, vergleichen und testen','Drei praktische Wege: Kapazität und Kosten, Governance und Zuverlässigkeit sowie Kommunikation. Erkunden Sie sechs verknüpfte Werkzeuge, prüfen Sie den Code und dokumentieren Sie Nachweise vor einer Piloterweiterung.','Praktischen Leitfaden lesen']
};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hosted=['roi-calc','finops-estimator','ai-governance-checklist','sla-calculator'];
for(const [l,c] of Object.entries(copy)){
 const p=l==='en'?'/':'/'+l+'/',f=path.join(out,c[6],'index.html'),guide=p+'apps/network-start-here.html',learning=p+'apps/network-learning-paths.html';
 assert(fs.existsSync(f),'Missing localized homepage '+f);
 assert(fs.existsSync(path.join(out,guide.slice(1))),'Missing guide '+guide);
 const lf=path.join(out,learning.slice(1));assert(fs.existsSync(lf),'Missing learning path '+learning);
 let page=fs.readFileSync(lf,'utf8');
 // These four tools are hosted in the website repository, not standalone repos.
 for(const slug of hosted){assert(fs.existsSync(path.join('public',slug,'index.html')),'Missing hosted source '+slug);page=page.replaceAll('href="https://github.com/Zion-support/'+slug+'"','href="https://github.com/Zion-support/zion-support.github.io/blob/main/public/'+slug+'/index.html"');}
 assert((page.match(/rel="alternate"/g)||[]).length===6,'Learning path language alternates missing');assert(!/<form\b/i.test(page),'Guide must not collect data');fs.writeFileSync(lf,page);
 let html=fs.readFileSync(f,'utf8');
 const section='<!--zion-network-home:start--><section class="section section-soft" data-network-home="'+version+'" aria-labelledby="network-start-title"><div class="wrap"><h2 id="network-start-title">'+esc(c[0])+'</h2><p class="lead">'+esc(c[1])+'</p><div class="actions"><a class="btn" href="'+guide+'">'+esc(c[2])+'</a><a class="btn alt" href="'+p+'discovery/">'+esc(c[3])+'</a><a class="btn alt" href="'+(fs.existsSync(path.join(out,p.slice(1),'apps/index.html'))?p+'apps/':'/apps/')+'">'+esc(c[4])+'</a></div><article class="card" data-learning-promotion="2026-10-08-v1"><h3>'+esc(c[7])+'</h3><p>'+esc(c[8])+'</p><p><a href="'+learning+'">'+esc(c[9])+'</a></p></article></div></section><!--zion-network-home:end-->';
 html=html.replace(/<!--zion-network-home:start-->[\s\S]*?<!--zion-network-home:end-->/g,'');
 assert(html.includes('</main>'),'Homepage main closing tag missing '+f);
 html=html.replace('</main>',section+'</main>');fs.writeFileSync(f,html);
 assert(html.includes('data-network-home="'+version+'"'));assert(html.includes('href="'+learning+'"'));
}
for(const slug of hosted){const f=path.join(out,slug,'index.html');assert(fs.existsSync(f),'Missing learning path tool '+f);let html=fs.readFileSync(f,'utf8');const lang=(html.match(/<html[^>]*lang=["']([^"']+)/i)||[])[1]||'en';const l=lang.startsWith('pt')?'pt':lang.split('-')[0];const c=copy[l]||copy.en,p=l==='en'?'/':'/'+l+'/';const marker='<!--zion-learning-return:start-->';html=html.replace(/<!--zion-learning-return:start-->[\s\S]*?<!--zion-learning-return:end-->/g,'');assert(/<\/body>/i.test(html),'Missing body '+f);const links=marker+'<aside class="card" data-learning-return="2026-10-08-v1"><h2>'+esc(c[7])+'</h2><p><a href="'+p+'apps/network-learning-paths.html">'+esc(c[9])+'</a> · <a href="'+p+'discovery/">'+esc(c[3])+'</a> · <a href="/apps/">'+esc(c[4])+'</a></p></aside><!--zion-learning-return:end-->';fs.writeFileSync(f,html.replace(/<\/body>/i,links+'</body>'));}
console.log('PASS '+version+': five translated homepage promotions, corrected source routes and four reciprocal tool links; existing forms preserved.');
require('./render-finance-insurance-paths.cjs');
require('./render-operations-baseline.cjs');
require('./render-operational-tools.cjs');
require('./test-operations-baseline.cjs');
require('./test-operational-tools.cjs');
require('./verify-network-publication.cjs');
require('./render-pilot-evidence.cjs');
require('./render-batch113-promotion.cjs');
require('./render-finops-scenario.cjs');

// Approved scoped editorial consolidation; preserve earlier renderer hooks.
require('./render-app-verification.cjs');

// Approved bilingual showcase; preserve all prior hooks and form behavior.
require('./render-network-showcase-release.cjs');
require('./test-network-showcase-release.cjs');

// Approved five-language FinOps hub and reciprocal navigation; preserve existing hooks.
require('./render-finops-hub.cjs');
require('./test-finops-hub.cjs');

// Approved five-language Sales & Revenue editorial guide and homepage promotion.
require('./render-sales-revenue.cjs');
require('./test-sales-revenue.cjs');

// Approved Mining promotion consolidation; preserve all prior renderer hooks.
require('./render-mining-catalog.cjs');

// Approved five-language app selection and matching-locale registry promotion.
require('./render-app-selection.cjs');

// Scoped editorial checklist; no additional promotional card or workflow changes.
require('./render-network-evaluation.cjs').render(out);
