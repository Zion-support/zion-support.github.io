'use strict';
// Scoped editorial release. No form submissions, data uploads or AI inference.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=process.argv[2]||'out',release='mining-catalog-2026-10-11-v1';
const copy={
 en:['Mining & Metals: inspect the evidence before choosing an app','Compare four documented concepts: mine safety, ore grade, fleet planning and tailings evidence. Use a named owner, measured baseline, qualified human review and stop rule. These are documentation and landing pages, not validated AI or certified monitoring.','Read the Mining guide','Review the source catalog','Free Discovery','Related app concepts','Continue through the Mining network'],
 pt:['Mineração e metais: confira as evidências antes de escolher um app','Compare quatro conceitos documentados: segurança da mina, teor do minério, planejamento da frota e evidências de barragens de rejeitos. Defina responsável, linha de base medida, revisão humana qualificada e regra de parada. São documentação e páginas de apresentação, não IA validada nem monitoramento certificado.','Ler o guia de mineração','Consultar o catálogo de fontes','Discovery gratuito','Conceitos de apps relacionados','Continue pela rede de mineração'],
 es:['Minería y metales: revise las evidencias antes de elegir una app','Compare cuatro conceptos documentados: seguridad minera, ley del mineral, planificación de flotas y evidencias de presas de relaves. Defina responsable, línea base medida, revisión humana cualificada y regla de parada. Son documentación y páginas informativas, no IA validada ni monitorización certificada.','Leer la guía de minería','Revisar el catálogo de fuentes','Discovery gratuito','Conceptos de apps relacionados','Continúe por la red de minería'],
 fr:['Mines et métaux : examinez les preuves avant de choisir une app','Comparez quatre concepts documentés : sécurité minière, teneur du minerai, planification de flotte et preuves sur les barrages de résidus. Définissez un responsable, une référence mesurée, une revue humaine qualifiée et une règle d’arrêt. Il s’agit de documentation et de pages de présentation, pas d’IA validée ni de surveillance certifiée.','Lire le guide minier','Examiner le catalogue des sources','Discovery gratuit','Concepts d’apps associés','Poursuivre dans le réseau minier'],
 de:['Bergbau und Metalle: vor der App-Auswahl Nachweise prüfen','Vergleichen Sie vier dokumentierte Konzepte: Grubensicherheit, Erzgehalt, Flottenplanung und Nachweise zu Absetzdämmen. Legen Sie Verantwortliche, gemessene Ausgangswerte, qualifizierte menschliche Prüfung und eine Abbruchregel fest. Dies sind Dokumentation und Informationsseiten, keine validierte KI oder zertifizierte Überwachung.','Bergbau-Leitfaden lesen','Quellenkatalog prüfen','Kostenloses Discovery','Verknüpfte App-Konzepte','Im Bergbau-Netzwerk fortfahren']
};
const apps=[['mine-safety-sentinel','Mine Safety Sentinel'],['ore-grade-predictor','Ore Grade Predictor'],['mining-fleet-optimizer','Mining Fleet Optimizer'],['tailings-dam-monitor','Tailings Dam Monitor']];
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const forms=s=>s.match(/<form\b[\s\S]*?<\/form>/gi)||[];
const count=(s,re)=>(s.match(re)||[]).length;
for(const [l,c] of Object.entries(copy)){
 const prefix=l==='en'?'/':'/'+l+'/',home=l==='en'?'en/index.html':l==='pt'?'index.html':l+'/index.html';
 const homeFile=path.join(root,home),guide=prefix+'apps/mining-discovery-guide.html',guideFile=path.join(root,guide.slice(1));
 assert(fs.existsSync(homeFile),'Missing homepage '+home);assert(fs.existsSync(guideFile),'Missing guide '+guide);
 const original=fs.readFileSync(homeFile,'utf8'),old=original.match(/<section\b[^>]*\bid=["']mining-metals-discovery["'][^>]*>[\s\S]*?<\/section>/gi)||[];
 assert.equal(old.length,1,'Expected one existing Mining section '+home);assert(!/<form\b/i.test(old[0]),'Refuse to replace a form');
 const links=apps.map(([slug,name])=>'<li><a href="/'+slug+'/">'+esc(name)+'</a> · <a href="https://github.com/Zion-support/'+slug+'">GitHub</a></li>').join('');
 const section='<section id="mining-metals-discovery" class="section section-soft" data-mining-catalog="'+release+'" aria-labelledby="mining-catalog-title"><div class="wrap"><h2 id="mining-catalog-title">'+esc(c[0])+'</h2><p class="lead">'+esc(c[1])+'</p><div class="actions"><a class="btn" href="'+guide+'">'+esc(c[2])+'</a><a class="btn alt" href="https://github.com/Zion-support/zion-app-network/blob/main/CATALOG-MINING.md">'+esc(c[3])+'</a><a class="btn alt" href="'+prefix+'discovery/">'+esc(c[4])+'</a></div><details class="card"><summary>'+esc(c[5])+'</summary><ul>'+links+'</ul></details></div></section>';
 const html=original.replace(old[0],section);assert.deepEqual(forms(html),forms(original),'Forms changed');assert.equal(count(html,/id="mining-metals-discovery"/g),1);fs.writeFileSync(homeFile,html);
 const before=fs.readFileSync(guideFile,'utf8');assert(/<\/main>/i.test(before),'Missing guide main');
 const start='<!--mining-catalog-return:start-->',end='<!--mining-catalog-return:end-->';
 const block=start+'<aside class="card" data-mining-catalog-return="'+release+'"><h2>'+esc(c[6])+'</h2><p><a href="https://github.com/Zion-support/zion-app-network/blob/main/CATALOG.md">'+esc(c[3])+'</a> · <a href="'+(l==='pt'?'/':prefix==='/'?'/en/':prefix)+'">Zion Tech Group</a> · <a href="'+prefix+'discovery/">'+esc(c[4])+'</a> · <a href="/apps/">Zion Apps</a></p></aside>'+end;
 let after=before.replace(/<!--mining-catalog-return:start-->[\s\S]*?<!--mining-catalog-return:end-->/g,'').replace(/<\/main>/i,block+'</main>');
 if(!/hreflang=["']x-default["']/.test(after))after=after.replace(/<\/head>/i,'<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com/apps/mining-discovery-guide.html"></head>');
 assert.deepEqual(forms(after),forms(before),'Guide forms changed');assert.equal(count(after,/data-mining-catalog-return=/g),1);assert.equal(count(after,/rel="alternate"/g),6,'Six language alternates required');fs.writeFileSync(guideFile,after);
}
const manifest={release,locales:['en','pt-BR','es','fr','de'],homepage_sections:1,concepts:apps.map(a=>a[0]),scope:'Editorial content, interlinks and route markup; not certified AI, safety monitoring or full-network verification.'};
fs.mkdirSync(path.join(root,'apps'),{recursive:true});fs.writeFileSync(path.join(root,'apps/mining-catalog-release.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('PASS '+release+': five localized single promotions, four source links each, five reciprocal guide blocks; forms preserved.');
