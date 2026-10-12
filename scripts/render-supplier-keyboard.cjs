'use strict';
// Additive artifact-only navigation; never edit calculator forms or scripts.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const release='supplier-keyboard-2026-10-12-v1';
const copy={
 en:{lang:'en',suffix:'',calculator:'Skip to calculator',report:'Skip to report',title:'Keyboard navigation and confidential reports',help:'Use Tab and Shift+Tab to move between controls. Use Space to toggle a checkbox and Enter to activate a focused link or button. The shortcuts at the top lead to the calculator and report.',review:'After changing an input, calculate again before downloading. The report stays internal: review original evidence with the responsible owner before sharing an approved client offer. No checkbox grants approval and no data is uploaded or stored.'},
 pt:{lang:'pt-BR',suffix:'.pt-br',calculator:'Ir para a calculadora',report:'Ir para o relatório',title:'Navegação por teclado e relatórios confidenciais',help:'Use Tab e Shift+Tab para percorrer os controles. Use Espaço para marcar uma caixa e Enter para ativar um link ou botão em foco. Os atalhos no início levam à calculadora e ao relatório.',review:'Depois de alterar um dado, calcule novamente antes de baixar. O relatório é interno: revise as evidências originais com o responsável antes de compartilhar uma oferta aprovada ao cliente. Nenhuma caixa concede autorização; os dados não são enviados nem armazenados.'},
 es:{lang:'es',suffix:'.es',calculator:'Ir a la calculadora',report:'Ir al informe',title:'Navegación con teclado e informes confidenciales',help:'Use Tab y Shift+Tab para recorrer los controles. Use Espacio para marcar una casilla y Enter para activar un enlace o botón enfocado. Los atajos al principio llevan a la calculadora y al informe.',review:'Después de cambiar un dato, vuelva a calcular antes de descargar. El informe es interno: revise las pruebas originales con el responsable antes de compartir una oferta aprobada con el cliente. Ninguna casilla otorga autorización; los datos no se envían ni se almacenan.'},
 fr:{lang:'fr',suffix:'.fr',calculator:'Aller au calculateur',report:'Aller au rapport',title:'Navigation au clavier et rapports confidentiels',help:'Utilisez Tab et Maj+Tab pour parcourir les contrôles. Utilisez Espace pour cocher une case et Entrée pour activer un lien ou un bouton sélectionné. Les raccourcis au début mènent au calculateur et au rapport.',review:'Après toute modification, recalculez avant de télécharger. Le rapport reste interne : vérifiez les preuves originales avec le responsable avant de partager une offre client approuvée. Aucune case ne donne une autorisation ; aucune donnée n’est envoyée ni stockée.'},
 de:{lang:'de',suffix:'.de',calculator:'Zum Rechner springen',report:'Zum Bericht springen',title:'Tastaturnavigation und vertrauliche Berichte',help:'Mit Tab und Umschalt+Tab wechseln Sie zwischen den Bedienelementen. Mit der Leertaste schalten Sie Kontrollkästchen um; mit Enter aktivieren Sie einen fokussierten Link oder eine Schaltfläche. Die Links am Anfang führen zum Rechner und zum Bericht.',review:'Berechnen Sie nach einer Eingabeänderung erneut, bevor Sie den Bericht herunterladen. Der Bericht bleibt intern: Prüfen Sie Originalnachweise mit der verantwortlichen Person, bevor Sie ein freigegebenes Kundenangebot teilen. Kein Häkchen erteilt eine Freigabe; Daten werden weder übertragen noch gespeichert.'}
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const protectedParts=s=>[...s.matchAll(/<(form|script)\b[\s\S]*?<\/\1>/gi)].map(m=>m[0]);
function transform(before,key){
 const c=copy[key];assert(c,'Unknown locale');
 let html=before.replace(/<!--supplier-keyboard:start-->[\s\S]*?<!--supplier-keyboard:end-->/g,'').replace(/<style id="supplier-keyboard-style">[\s\S]*?<\/style>/g,'').replace(/<!--supplier-keyboard-help:start-->[\s\S]*?<!--supplier-keyboard-help:end-->/g,'').replace(/<div id="supplier-(?:calculator|report)-target" tabindex="-1"><\/div>/g,'');
 assert(html.includes('<html lang="'+c.lang+'">'),'Unexpected language '+key);
 for(const token of ['</head>','<body','<header','<form id="quote-form">','<section aria-labelledby="report-title">','</main>'])assert.equal(html.split(token).length-1,1,'Changed or duplicated anchor '+token);
 const links='<!--supplier-keyboard:start--><div class="supplier-skip-links"><a href="#supplier-calculator-target">'+esc(c.calculator)+'</a><a href="#supplier-report-target">'+esc(c.report)+'</a></div><!--supplier-keyboard:end-->';
 html=html.replace(/(<body\b[^>]*>)/, '$1'+links);
 html=html.replace('</head>','<style id="supplier-keyboard-style">.supplier-skip-links a{position:absolute;left:-10000px;top:auto;z-index:1000}.supplier-skip-links a:focus{position:fixed;left:1rem;top:1rem;background:#0e1628;color:#f4f7ff;padding:1rem;border:3px solid #22d3ee;border-radius:8px}.supplier-skip-links a:nth-child(2):focus{top:5rem}#supplier-calculator-target,#supplier-report-target{scroll-margin-top:1rem;outline:none}</style></head>');
 html=html.replace('<form id="quote-form">','<div id="supplier-calculator-target" tabindex="-1"></div><form id="quote-form">');
 html=html.replace('<section aria-labelledby="report-title">','<div id="supplier-report-target" tabindex="-1"></div><section aria-labelledby="report-title">');
 html=html.replace('</main>','<!--supplier-keyboard-help:start--><section class="card" id="supplier-keyboard-help" lang="'+c.lang+'" data-supplier-keyboard="'+release+'"><h2>'+esc(c.title)+'</h2><p>'+esc(c.help)+'</p><p>'+esc(c.review)+'</p></section><!--supplier-keyboard-help:end--></main>');
 assert.deepEqual(protectedParts(html),protectedParts(before),'Calculator forms/scripts changed');
 return html;
}
function render(root){
 root=path.resolve(root);const edits=Object.keys(copy).map(key=>{const url='/apps/supplier-quote-evidence-workbench'+copy[key].suffix+'.html',file=path.join(root,url.slice(1));assert(fs.existsSync(file),'Missing locale '+key);return {key,url,file,html:transform(fs.readFileSync(file,'utf8'),key)};});
 // Fail closed on all five pages before writing any artifact.
 for(const e of edits)fs.writeFileSync(e.file,e.html);
 const manifest={release,scope:'Five workbench navigation/help blocks only; calculator forms/scripts preserved',pages:edits.map(({key,url})=>({lang:copy[key].lang,url})),browserCertified:false,emailSubmitted:false};
 fs.writeFileSync(path.join(root,'apps/supplier-keyboard-publication.json'),JSON.stringify(manifest,null,2)+'\n');return edits.length;
}
module.exports={copy,release,transform,render,protectedParts};
if(require.main===module)console.log('Rendered '+render(process.argv[2]||'out')+' supplier keyboard help pages.');
