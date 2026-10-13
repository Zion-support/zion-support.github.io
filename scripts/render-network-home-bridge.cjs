'use strict';
// Scoped homepage editorial/navigation update. No inference, storage, form or delivery changes.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const RELEASE='network-home-bridge-2026-10-13-v2';
const productivity=require('./render-productivity-navigation.cjs');
const C={"en": {"lang": "en", "intro": "Draft a brief, prepare an email, organize meeting notes, or structure a human review. Compare what each resource actually does before you begin.", "hub": "Browse the resource network", "catalog": "Compare capabilities and languages", "nav": "App network navigation"}, "pt": {"lang": "pt-BR", "intro": "Prepare um briefing ou um e-mail, organize notas de reunião ou estruture uma revisão humana. Compare o que cada recurso realmente faz antes de começar.", "hub": "Explorar a rede de recursos", "catalog": "Comparar capacidades e idiomas", "nav": "Navegação da rede de apps"}, "es": {"lang": "es", "intro": "Prepara un resumen de trabajo o un correo, organiza notas de reunión o estructura una revisión humana. Compara lo que realmente hace cada recurso antes de empezar.", "hub": "Explorar la red de recursos", "catalog": "Comparar capacidades e idiomas", "nav": "Navegación de la red de apps"}, "fr": {"lang": "fr", "intro": "Préparez un brief ou un courriel, organisez des notes de réunion ou structurez une révision humaine. Comparez les capacités réelles de chaque ressource avant de commencer.", "hub": "Explorer le réseau de ressources", "catalog": "Comparer les capacités et les langues", "nav": "Navigation du réseau d’apps"}, "de": {"lang": "de", "intro": "Erstellen Sie ein Briefing oder einen E-Mail-Entwurf, ordnen Sie Besprechungsnotizen oder strukturieren Sie eine menschliche Prüfung. Vergleichen Sie vorab, was jede Ressource tatsächlich leistet.", "hub": "Ressourcennetzwerk erkunden", "catalog": "Funktionen und Sprachausgaben vergleichen", "nav": "Navigation im App-Netzwerk"}};
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
  block=block.replace(/<nav\b([^>]*)>/i,(_,attrs)=>'<nav'+attrs.replace(/\s+(?:data-network-bridge|aria-label)=["'][^"']*["']/gi,'')+' data-network-bridge="'+RELEASE+'" aria-label="'+esc(c.nav)+'">');
  const links='<!--network-home-bridge-links:start--> <a href="/zion-app-network/#start-here-'+l+'">'+esc(c.hub)+'</a> <a href="/zion-app-network/CATALOG-NAVIGATION.html#start-here-'+l+'">'+esc(c.catalog)+'</a> <a href="'+productivity.catalog(l)+'">'+esc(productivity.C[l].heading)+'</a><!--network-home-bridge-links:end-->';
  return block.replace(/<\/nav>/i,links+'</nav>');
 });
 assert.deepEqual(protectedParts(after),protectedParts(html),'Forms/scripts changed');
 const retained=new Set(hrefs(after));
 for(const u of hrefs(html))assert(retained.has(u),'Removed existing destination '+u);
 return after;
}
const cLang=l=>C[l].lang;
function render(out='out'){
 const pages=[],changes=[];
 // Validate the complete resource/home sample before any helper writes.
 const resourcePlan=productivity.plan(out);
 for(const l of Object.keys(C)){
  const home=l==='pt'?'index.html':l+'/index.html',f=path.join(out,home);
  const before=fs.readFileSync(f,'utf8');
  assert.equal((before.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)||[])[1],cLang(l),'Wrong homepage language');
  const after=transform(before,l);
  assert.equal(transform(after,l),after,'Renderer is not byte-idempotent');
  changes.push({file:f,before,after});pages.push({locale:C[l].lang,url:l==='pt'?'/':'/'+l+'/',hub:'/zion-app-network/#start-here-'+l,catalog:'/zion-app-network/CATALOG-NAVIGATION.html#start-here-'+l});
 }
 for(const p of changes)assert.equal(fs.readFileSync(p.file,'utf8'),p.before,'Homepage changed after validation');
 productivity.apply(resourcePlan);
 for(const p of changes)fs.writeFileSync(p.file,p.after);
 const report={release:RELEASE,scope:'Five homepage introductions, three additive links per locale and 30 related-resource blocks; not a full-network translation or app-functionality certification.',pages,formsAndScriptsPreserved:true};
 fs.mkdirSync(path.join(out,'apps'),{recursive:true});fs.writeFileSync(path.join(out,'apps/network-home-bridge-release.json'),JSON.stringify(report,null,2)+'\n');
 console.log('PASS '+RELEASE+': five owned homepage promotions preserved and linked to the language-specific hub/catalog.');return report;
}
module.exports={RELEASE,C,transform,render,protectedParts,hrefs};
if(require.main===module)render(process.argv[2]||'out');
