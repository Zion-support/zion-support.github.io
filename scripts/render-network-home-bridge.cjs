'use strict';
// Scoped homepage editorial/navigation update. No inference, storage, form or delivery changes.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const RELEASE='network-home-bridge-2026-10-13-v1';
const C={"en": {"lang": "en", "intro": "Turn a meeting recap into an agent brief and a reviewed email draft, or examine a SQL example. These published browser tools use local templates or keyword rules—not autonomous AI integrations. Compare capabilities and language editions before planning a pilot.", "hub": "Browse the resource network", "catalog": "Compare capabilities and languages", "nav": "App network navigation"}, "pt": {"lang": "pt-BR", "intro": "Transforme notas de reunião em um briefing de agente e um rascunho de e-mail revisado, ou examine um exemplo SQL. Essas ferramentas publicadas usam modelos locais ou regras por palavras-chave, não integrações autônomas de IA. Compare capacidades e idiomas antes de planejar um piloto.", "hub": "Explorar a rede de recursos", "catalog": "Comparar capacidades e idiomas", "nav": "Navegação da rede de apps"}, "es": {"lang": "es", "intro": "Convierta notas de reunión en un brief de agente y un borrador de correo revisado, o examine un ejemplo SQL. Estas herramientas publicadas usan plantillas locales o reglas por palabras clave, no integraciones autónomas de IA. Compare capacidades e idiomas antes de planificar un piloto.", "hub": "Explorar la red de recursos", "catalog": "Comparar capacidades e idiomas", "nav": "Navegación de la red de apps"}, "fr": {"lang": "fr", "intro": "Transformez des notes de réunion en brief d’agent et en brouillon de courriel relu, ou examinez un exemple SQL. Ces outils publiés utilisent des modèles locaux ou des règles par mots-clés, pas des intégrations d’IA autonomes. Comparez capacités et langues avant de préparer un pilote.", "hub": "Explorer le réseau de ressources", "catalog": "Comparer les capacités et les langues", "nav": "Navigation du réseau d’apps"}, "de": {"lang": "de", "intro": "Erstellen Sie aus Besprechungsnotizen ein Agentenbriefing und einen geprüften E-Mail-Entwurf oder prüfen Sie ein SQL-Beispiel. Diese veröffentlichten Browserwerkzeuge verwenden lokale Vorlagen oder Schlüsselwortregeln, keine autonomen KI-Integrationen. Vergleichen Sie Funktionen und Sprachausgaben vor der Pilotplanung.", "hub": "Ressourcennetzwerk erkunden", "catalog": "Funktionen und Sprachausgaben vergleichen", "nav": "Navigation im App-Netzwerk"}};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const protectedParts=h=>h.match(/<(form|script)\b[\s\S]*?<\/\1\s*>/gi)||[];
const hrefs=h=>[...h.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)].map(m=>m[1]);
function transform(html,l){
 const c=C[l];assert(c,'Unsupported locale');
 const owner=/<!--zion-network-home:start-->[\s\S]*?<!--zion-network-home:end-->/g;
 assert.equal([...html.matchAll(owner)].length,1,'Expected exactly one owned network homepage section');
 const after=html.replace(owner,block=>{
  assert(/data-network-home=/.test(block),'Network ownership missing');
  assert(!/<form\b/i.test(block),'Do not change a form-containing promotion');
  block=block.replace(/<!--network-home-bridge-links:start-->[\s\S]*?<!--network-home-bridge-links:end-->/g,'');
  const intro=/(<h2\b[^>]*>[\s\S]*?<\/h2>\s*<p\b[^>]*>)[\s\S]*?(<\/p>)/i;
  assert(intro.test(block),'Expected promotion introduction');
  block=block.replace(intro,(_,a,b)=>a+esc(c.intro)+b);
  assert(/<nav\b[^>]*>/.test(block),'Expected existing promotion navigation');
  if(!block.includes('data-network-bridge="'+RELEASE+'"'))block=block.replace(/<nav\b([^>]*)>/i,(_,attrs)=>'<nav'+attrs+' data-network-bridge="'+RELEASE+'" aria-label="'+esc(c.nav)+'">');
  const links='<!--network-home-bridge-links:start--> <a href="/zion-app-network/#start-here-'+l+'">'+esc(c.hub)+'</a> <a href="/zion-app-network/CATALOG-NAVIGATION.html#start-here-'+l+'">'+esc(c.catalog)+'</a><!--network-home-bridge-links:end-->';
  return block.replace(/<\/nav>/i,links+'</nav>');
 });
 assert.deepEqual(protectedParts(after),protectedParts(html),'Forms/scripts changed');
 for(const u of hrefs(html))assert(hrefs(after).includes(u),'Removed existing destination '+u);
 return after;
}
function render(out='out'){
 const pages=[];
 for(const l of Object.keys(C)){
  const home=l==='pt'?'index.html':l+'/index.html',f=path.join(out,home);
  const before=fs.readFileSync(f,'utf8'),after=transform(before,l);
  assert.equal(transform(after,l),after,'Renderer is not byte-idempotent');
  fs.writeFileSync(f,after);pages.push({locale:C[l].lang,url:l==='pt'?'/':'/'+l+'/',hub:'/zion-app-network/#start-here-'+l,catalog:'/zion-app-network/CATALOG-NAVIGATION.html#start-here-'+l});
 }
 const report={release:RELEASE,scope:'Five homepage introductions and two additive links per locale only; not a full-network translation or app-functionality certification.',pages,formsAndScriptsPreserved:true};
 fs.mkdirSync(path.join(out,'apps'),{recursive:true});fs.writeFileSync(path.join(out,'apps/network-home-bridge-release.json'),JSON.stringify(report,null,2)+'\n');
 console.log('PASS '+RELEASE+': five owned homepage promotions preserved and linked to the language-specific hub/catalog.');return report;
}

// Approved directory entry links: extend only the existing owned promotion.
const directoryLabels={en:'Open the translated directory',pt:'Abrir diretório traduzido',es:'Abrir directorio traducido',fr:'Ouvrir le répertoire traduit',de:'Übersetztes Verzeichnis öffnen'};
const originalTransform=transform;
function withDirectory(html,l){
 const clean=html.replace(/<!--directory-entry-link:start-->[\s\S]*?<!--directory-entry-link:end-->/g,'');
 const result=originalTransform(clean,l);
 const owner=/<!--zion-network-home:start-->[\s\S]*?<!--zion-network-home:end-->/g;
 const after=result.replace(owner,block=>block.replace(/<\/nav>/i,'<!--directory-entry-link:start--><a data-directory-entry="directory-entry-2026-10-13-v1" href="/zion-app-network/directory-'+l+'.html">'+esc(directoryLabels[l])+'</a><!--directory-entry-link:end--></nav>'));
 assert.deepEqual(protectedParts(after),protectedParts(html));
 for(const u of hrefs(html))assert(hrefs(after).includes(u),'Removed existing destination '+u);
 return after;
}
transform=withDirectory;
module.exports.transform=transform;
module.exports={RELEASE,C,transform,render,protectedParts,hrefs};
if(require.main===module)render(process.argv[2]||'out');

// Approved field-ticket guide and one additive link per existing homepage promotion.
const ticketGuide=require('./render-field-ticket-types.cjs');
const ticketTransform=transform;
transform=function(html,l){
 const clean=html.replace(/<!--field-ticket-home:start-->[\s\S]*?<!--field-ticket-home:end-->/g,'');
 const result=ticketTransform(clean,l);
 const after=result.replace(/<!--zion-network-home:start-->[\s\S]*?<!--zion-network-home:end-->/g,block=>block.replace(/<\/nav>/i,'<!--field-ticket-home:start--><a data-field-ticket-home="field-ticket-types-2026-10-14-v1" href="'+ticketGuide.route(l)+'">'+esc(ticketGuide.C[l].promotion)+'</a><!--field-ticket-home:end--></nav>'));
 assert.deepEqual(protectedParts(after),protectedParts(html));
 assert.equal((after.match(/data-field-ticket-home=/g)||[]).length,1);
 const owned=/<!--field-ticket-home:start-->[\s\S]*?<!--field-ticket-home:end-->/g;
 for(const u of hrefs(html.replace(owned,'')))assert(hrefs(after).includes(u),'Removed existing destination '+u);
 return after;
};
module.exports.transform=transform;
module.exports.render=function(out='out'){ticketGuide.run(out);return render(out);};
if(require.main===module)module.exports.render(process.argv[2]||'out');

// Approved AgentForge locales; one additive link inside each existing promotion.
const agentGuide=require('./render-agentforge-locales.cjs'),agentTransform=transform;
transform=function(html,l){
 const owned=/<!--agentforge-home:start-->[\s\S]*?<!--agentforge-home:end-->/g;
 const result=agentTransform(html.replace(owned,''),l);
 const after=result.replace(/<!--zion-network-home:start-->[\s\S]*?<!--zion-network-home:end-->/g,b=>b.replace(/<\/nav>/i,'<!--agentforge-home:start--><a data-agentforge-home="agentforge-locales-2026-10-14-v1" href="'+agentGuide.route(l)+'">'+esc(agentGuide.C[l].promotion)+'</a><!--agentforge-home:end--></nav>'));
 assert.deepEqual(protectedParts(after),protectedParts(html));
 assert.equal((after.match(/data-agentforge-home=/g)||[]).length,1);
 for(const u of hrefs(html.replace(owned,'')))assert(hrefs(after).includes(u),'Removed existing destination '+u);
 return after;
};
const agentBaseRender=module.exports.render;
module.exports.transform=transform;
module.exports.render=function(out='out'){agentGuide.run(out);return agentBaseRender(out);};
if(require.main===module)module.exports.render(process.argv[2]||'out');
