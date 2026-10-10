'use strict';
// Artifact-only quality pass. No requests, forms, bookings or dispatches.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out';
const copy={
 en:{language:'Language',title:'Three evidence gates before a field visit',gates:['Scope: confirm the site, local time window, access rules and acceptance evidence.','Supplier: require named technicians, written availability, skills, tools and complete costs.','Approval: obtain written client approval and the applicable PO/reference before any booking or dispatch.'],cta:'Start free Discovery',types:['Service page','Documentation / concept','Interactive calculator — validate assumptions','Directory / navigation','Resource — capability not verified']},
 pt:{language:'Idioma',title:'Três etapas de evidência antes de uma visita técnica',gates:['Escopo: confirme local, horário local, regras de acesso e evidências de aceite.','Fornecedor: exija técnicos identificados, disponibilidade escrita, habilidades, ferramentas e custos completos.','Aprovação: obtenha aprovação escrita do cliente e PO ou referência aplicável antes de agendar ou mobilizar.'],cta:'Começar o Discovery gratuito',types:['Página de serviço','Documentação / conceito','Calculadora interativa — valide as hipóteses','Diretório / navegação','Recurso — funcionalidade não verificada']},
 es:{language:'Idioma',title:'Tres controles de evidencia antes de una visita técnica',gates:['Alcance: confirme el sitio, horario local, reglas de acceso y pruebas de aceptación.','Proveedor: exija técnicos identificados, disponibilidad escrita, habilidades, herramientas y costes completos.','Aprobación: obtenga aprobación escrita del cliente y la orden de compra o referencia aplicable antes de reservar o movilizar.'],cta:'Iniciar Discovery gratuito',types:['Página de servicio','Documentación / concepto','Calculadora interactiva — valide los supuestos','Directorio / navegación','Recurso — funcionalidad no verificada']},
 fr:{language:'Langue',title:'Trois contrôles de preuves avant une visite sur site',gates:['Périmètre : confirmez le site, les horaires locaux, les règles d’accès et les preuves de réception.','Fournisseur : exigez des techniciens identifiés, une disponibilité écrite, les compétences, les outils et les coûts complets.','Approbation : obtenez l’accord écrit du client et le bon de commande ou la référence applicable avant toute réservation ou mobilisation.'],cta:'Commencer Discovery gratuitement',types:['Page de service','Documentation / concept','Calculateur interactif — validez les hypothèses','Annuaire / navigation','Ressource — fonctionnalité non vérifiée']},
 de:{language:'Sprache',title:'Drei Nachweisprüfungen vor einem Vor-Ort-Einsatz',gates:['Umfang: bestätigen Sie Standort, lokale Zeiten, Zugangsregeln und Abnahmenachweise.','Anbieter: verlangen Sie benannte Techniker, schriftliche Verfügbarkeit, Fähigkeiten, Werkzeuge und vollständige Kosten.','Freigabe: holen Sie die schriftliche Kundenzustimmung und die erforderliche Bestellung oder Referenz ein, bevor Sie buchen oder einen Einsatz veranlassen.'],cta:'Kostenloses Discovery starten',types:['Dienstleistungsseite','Dokumentation / Konzept','Interaktiver Rechner — Annahmen prüfen','Verzeichnis / Navigation','Ressource — Funktionalität nicht verifiziert']}
};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const route=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
for(const [l,c] of Object.entries(copy)){
 const file=path.join(out,route(l).slice(1));const before=fs.readFileSync(file,'utf8');assert(!/<form\b|<script\b/i.test(before));
 let html=before.replace(/<!--field-evidence-gates:start-->[\s\S]*?<!--field-evidence-gates:end-->/g,'');assert(html.includes('</main>'));
 const section='<!--field-evidence-gates:start--><section class="card" data-field-evidence-gates="2026-10-09"><h2>'+esc(c.title)+'</h2><ol>'+c.gates.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ol><a href="'+(l==='en'?'/discovery/':'/'+l+'/discovery/')+'">'+esc(c.cta)+'</a></section><!--field-evidence-gates:end-->';
 html=html.replace('</main>',section+'</main>').replace(/(data-field-evidence-languages aria-label=")[^"]*(")/g,'$1'+c.language+'$2');fs.writeFileSync(file,html);
}
const file=path.join(out,'assets/js/discovery-delivery.js');let js=fs.readFileSync(file,'utf8');
const old=js.match(/function recommendationKind\((?:path|url)\)\{[\s\S]*?\n\}/);assert(old,'Classification helper anchor changed; do not publish an unreviewed rewrite.');
const helper='function recommendationKind(path){\n const labels='+JSON.stringify(Object.fromEntries(Object.entries(copy).map(([l,c])=>[l,c.types])))+';\n const code=(document.documentElement?.lang||"en").slice(0,2);const t=labels[code]||labels.en;\n if(path==="/ai-predictive-analytics/")return t[0];\n if(path==="/ai-roi-tracker/"||path.includes("checklist")||path.includes("assessment"))return t[1];\n if(["/roi-calc/","/roi-calculator/","/sla-calculator/","/finops-estimator/"].includes(path))return t[2];\n if(path==="/apps/"||path==="/apps/network.html")return t[3];\n return t[4];\n}';
// Only replace capability metadata. All delivery code and recipients remain unchanged.
js=js.replace(old[0],helper);fs.writeFileSync(file,js);
fs.writeFileSync(path.join(out,'apps/field-evidence-quality.json'),JSON.stringify({release:'2026-10-09',scope:'Five field evidence guides and localized Discovery resource labels only',pages:Object.keys(copy).map(l=>({language:l,url:route(l)})),verification:'Unknown destinations are not certified interactive apps',delivery:'unchanged'},null,2));
console.log('PASS five translated evidence-gate sections and conservative localized capability labels');

require('./render-field-network-promotion.cjs');

require('./render-field-evidence-pack.cjs');

// Generate locale aliases only after the complete translated evidence pack.
require('./render-field-evidence-route-aliases.cjs');

require('./test-field-evidence-alias-integrity.cjs');
