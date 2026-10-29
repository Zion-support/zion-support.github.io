'use strict';
// Additive, review-only navigation. Does not alter calculations or publish pages.
const copy={
 label:['On this page','Nesta página','En esta página','Sur cette page','Auf dieser Seite'],
 inputs:['Inputs','Entradas','Entradas','Saisies','Eingaben'],
 results:['Results','Resultados','Resultados','Résultats','Ergebnisse'],
 example:['Worked example','Exemplo comentado','Ejemplo explicado','Exemple commenté','Erläutertes Beispiel'],
 compare:['Compare tools','Comparar ferramentas','Comparar herramientas','Comparer les outils','Werkzeuge vergleichen'],
 caption:['Slowest recorded spans — up to 30 rows; not the total span count','Spans registrados mais lentos — até 30 linhas; não é o total de spans','Spans registrados más lentos — hasta 30 filas; no es el total de spans','Spans enregistrés les plus lents — 30 lignes maximum, pas le total des spans','Langsamste erfasste Spans — bis zu 30 Zeilen; nicht die Gesamtzahl der Spans']
};
const langs=['en','pt-BR','es','fr','de'];
function once(s,a,b){if(s.split(a).length!==2)throw Error('Section navigation contract changed: '+a);return s.replace(a,b);}
function complete(html,i){
 if(typeof html!=='string'||!Number.isInteger(i)||i<0||i>4)throw Error('Expected HTML and supported locale');
 if(!html.includes('<html lang="'+langs[i]+'">'))throw Error('Section navigation locale mismatch');
 const marker='id="evidence-section-nav"';
 if(html.includes(marker)){
  for(const id of ['evidence-section-nav','evidence-inputs','evidence-results','safe-worked-example','evidence-pathways'])if(html.split('id="'+id+'"').length!==2)throw Error('Invalid existing section navigation');
  return html;
 }
 for(const id of ['safe-worked-example','evidence-pathways'])if(html.split('id="'+id+'"').length!==2)throw Error('Missing section navigation target: '+id);
 for(const id of ['evidence-inputs','evidence-results'])if(html.includes('id="'+id+'"'))throw Error('Conflicting section target');
 let result=once(html,'<section class="panel"><h2>1.','<section class="panel" id="evidence-inputs" tabindex="-1"><h2>1.');
 result=once(result,'<section class="panel"><h2>2.','<section class="panel" id="evidence-results" tabindex="-1"><h2>2.');
 const ids=['evidence-inputs','evidence-results','safe-worked-example','evidence-pathways'];
 const labels=[copy.inputs[i],copy.results[i],copy.example[i],copy.compare[i]];
 const nav='<nav class="links" id="evidence-section-nav" aria-label="'+copy.label[i]+'">'+ids.map((id,j)=>'<a href="#'+id+'">'+labels[j]+'</a>').join('')+'</nav>';
 result=once(result,'</noscript>','</noscript>'+nav);
 for(const id of ids.slice(2))result=once(result,'id="'+id+'"','id="'+id+'" tabindex="-1"');
 if(result.includes('<table>'))result=once(result,'<table>','<table><caption>'+copy.caption[i]+'</caption>');
 return result;
}
module.exports={complete,copy};
