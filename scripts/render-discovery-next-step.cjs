'use strict';
// Additive artifact-only integration; do not rewrite canonical homepage sources.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),out=path.join(root,'out');
const guide='/apps/discovery-next-step-guide.html',marker='data-discovery-local-preview-guide';
assert(fs.existsSync(path.join(out,guide.slice(1))),'Local preview guide missing');
const labels={pt:['Explore antes de compartilhar seus dados','Preview gratuito sem e-mail: compare hipóteses, siga apps relacionados e defina um piloto reversível. O guia está em inglês.','Abrir preview gratuito (EN)','Discovery completo grátis'],en:['Explore before sharing your details','Preview a free process-to-app journey without sending email. Validate assumptions, follow related tools and define a reversible pilot.','Open the free preview','Full free Discovery'],es:['Explore antes de compartir sus datos','Vista previa gratuita sin correo: valide supuestos, explore apps relacionadas y defina un piloto reversible. Guía en inglês.','Abrir vista previa (EN)','Discovery completo gratis'],fr:['Explorez avant de partager vos données','Aperçu gratuit sans e-mail : vérifiez les hypothèses, explorez les apps liées et définissez un pilote réversible. Guide en anglais.','Ouvrir l’aperçu (EN)','Discovery complet gratuit'],de:['Vor der Weitergabe Ihrer Daten erkunden','Kostenlose Vorschau ohne E-Mail: Annahmen prüfen, verknüpfte Apps erkunden und einen reversiblen Pilot planen. Leitfaden auf Englisch.','Kostenlose Vorschau (EN)','Kostenloses Discovery']};
for(const [locale,copy] of Object.entries(labels)){
 const file=path.join(out,locale==='pt'?'index.html':locale+'/index.html');if(!fs.existsSync(file))continue;
 let html=fs.readFileSync(file,'utf8');if(html.includes(marker))continue;
 assert(html.includes('</main>'),'Homepage main anchor missing: '+locale);
 const questionnaire=locale==='en'?'/discovery/':'/'+locale+'/discovery/';
 const section='<section class="section section-soft" '+marker+'="2026-10-08-bend"><div class="wrap"><h2>'+copy[0]+'</h2><p>'+copy[1]+'</p><p><a class="btn" href="'+guide+'">'+copy[2]+'</a> <a class="btn alt" href="'+questionnaire+'">'+copy[3]+'</a> <a href="/apps/">Apps Network</a></p></div></section>';
 html=html.replace('</main>',section+'\n</main>');fs.writeFileSync(file,html);
}
console.log('Free local preview guide linked from available homepages.');
// Unnumbered, additive field-services evidence journey. No form or delivery changes.
const fieldGuide='/apps/field-service-evidence-guide.html';
assert(fs.existsSync(path.join(out,fieldGuide.slice(1))),'Field evidence guide missing');
const fieldCopy={en:['Field services: evidence before dispatch','Explore free linked tools for scope, SLA, supplier comparisons and pilot planning. Confirm people, costs and approvals before any commitment.','Read the evidence guide (EN)'],pt:['Field Services: evidências antes do despacho','Explore ferramentas gratuitas e interligadas para escopo, SLA, comparação de fornecedores e planejamento. Valide pessoas, custos e aprovações antes de assumir compromissos.','Ler o guia de evidências (EN + resumo PT)'],es:['Servicios de campo: pruebas antes del despacho','Explore herramientas gratuitas para alcance, SLA, proveedores y planificación. Confirme personas, costes y aprobaciones antes de comprometer recursos.','Leer la guía de evidencias (EN)'],fr:['Services terrain : des preuves avant l’intervention','Explorez les outils gratuits pour le périmètre, les SLA, les fournisseurs et les pilotes. Vérifiez personnes, coûts et autorisations avant tout engagement.','Lire le guide des preuves (EN)'],de:['Field Services: Nachweise vor dem Einsatz','Kostenlose verknüpfte Werkzeuge für Umfang, SLA, Lieferantenvergleich und Pilotplanung. Personen, Kosten und Freigaben vor jeder Zusage prüfen.','Nachweis-Leitfaden lesen (EN)']};
for(const [locale,c] of Object.entries(fieldCopy)){
 const file=path.join(out,locale==='pt'?'index.html':locale+'/index.html');if(!fs.existsSync(file))continue;
 let html=fs.readFileSync(file,'utf8');html=html.replace(/<!--zion-field-evidence:start-->[\s\S]*?<!--zion-field-evidence:end-->/g,'');
 assert(html.includes('</main>'),'Field evidence homepage anchor missing '+locale);
 const discovery=locale==='en'?'/discovery/':'/'+locale+'/discovery/';
 const section='<!--zion-field-evidence:start--><section class="section section-soft" data-field-evidence="2026-10-08-v1"><div class="wrap"><h2>'+c[0]+'</h2><p>'+c[1]+'</p><div class="actions"><a class="btn" href="'+fieldGuide+'">'+c[2]+'</a><a class="btn alt" href="'+discovery+'">'+labels[locale][3]+'</a><a class="btn alt" href="/apps/">Apps Network</a></div></div></section><!--zion-field-evidence:end-->';
 fs.writeFileSync(file,html.replace('</main>',section+'</main>'));
}
for(const relative of ['apps/content-hub.html','apps/network.html','roi-calc/index.html','sla-calculator/index.html','automation-pilot-planner/index.html','apps/supplier-quote-evidence-workbench.html','discovery/index.html','pt/discovery/index.html','es/discovery/index.html','fr/discovery/index.html','de/discovery/index.html']){
 const file=path.join(out,relative);if(!fs.existsSync(file))continue;
 let html=fs.readFileSync(file,'utf8');html=html.replace(/<!--zion-field-return:start-->[\s\S]*?<!--zion-field-return:end-->/g,'');
 assert(/<\/body>/i.test(html),'Field evidence body anchor missing '+relative);
 const links='<!--zion-field-return:start--><aside class="card" data-field-evidence-return="2026-10-08-v1" lang="en"><h2>Field services: evidence before dispatch</h2><p><a href="'+fieldGuide+'">Free evidence guide (EN)</a> · <a href="/discovery/">Free Discovery (EN)</a> · <a href="/apps/network.html">App network map</a></p><p>Planning only: no booking, order or dispatch is created.</p></aside><!--zion-field-return:end-->';
 fs.writeFileSync(file,html.replace(/<\/body>/i,links+'</body>'));
}
console.log('Field evidence guide linked from available homepages, Discovery and related tools; existing forms preserved.');
