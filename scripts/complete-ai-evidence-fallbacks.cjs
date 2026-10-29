"use strict";
const base=require('./render-ai-evidence-locales.cjs');
const nojs=[
'JavaScript is required for local calculations. No data is uploaded. Enable JavaScript to use the tools; this page does not authorize a quotation or dispatch.',
'O JavaScript é necessário para cálculos locais. Nenhum dado é enviado. Ative-o para usar as ferramentas; esta página não autoriza cotação nem despacho.',
'JavaScript es necesario para los cálculos locales. No se envían datos. Actívelo para usar las herramientas; esta página no autoriza cotizaciones ni despachos.',
'JavaScript est nécessaire aux calculs locaux. Aucune donnée n’est envoyée. Activez-le pour utiliser les outils ; cette page n’autorise ni devis ni intervention.',
'JavaScript ist für lokale Berechnungen erforderlich. Es werden keine Daten hochgeladen. Aktivieren Sie es für die Werkzeuge; diese Seite genehmigt weder Angebot noch Einsatz.'
];
const labels=['Local readiness report — select and copy manually if clipboard access is unavailable','Relatório local de prontidão — selecione e copie manualmente se a área de transferência estiver indisponível','Informe local de preparación — selecciónelo y cópielo manualmente si el portapapeles no está disponible','Rapport local de préparation — sélectionnez et copiez manuellement si le presse-papiers est indisponible','Lokaler Bereitschaftsbericht — bei fehlendem Zwischenablagezugriff manuell auswählen und kopieren'];
function once(s,a,b){if(s.split(a).length!==2)throw Error('Fallback source contract changed: '+a);return s.replace(a,b);}
function complete(html,slug,i){
 if(!base.slugs.includes(slug)||!Number.isInteger(i)||i<0||i>4)throw Error('Unknown tool or locale');
 html=once(html,'<main id="main">','<main id="main"><noscript><p class="status warn">'+nojs[i]+'</p></noscript>');
 const m=html.match(/<script>([\s\S]*?)<\/script>/);if(!m)throw Error('Missing review script');let js=m[1];
 if(slug==='field-sla-acceptance-matrix'){
  html=once(html,'<button type="button" id="copy">','<label for="readiness-brief">'+labels[i]+'</label><textarea id="readiness-brief" readonly rows="8" spellcheck="false"></textarea><button type="button" id="copy">');
  js=once(js,'function assess(){','function assessCore(){');
  js+='\nfunction assess(){assessCore();$("readiness-brief").value=brief;}\n';
 }
 if(slug==='ai-dependency-blast-radius')js=once(js,'for(const n of a){if(!n','for(const n of a){if(n && n.critical!==undefined && typeof n.critical!=="boolean")throw new TypeError("critical must be boolean");if(!n');
 return once(html,m[0],'<script>'+js+'</script>');
}
module.exports={complete,nojs,labels};
