'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',version='2026-10-08-network-home-v1';
const copy={
en:['Choose an app by the workflow you need to improve','Explore related tools without relying on inflated app counts. Start with the free Discovery, inspect the actual functionality, and define one measurable, reversible test.','Start with the network guide','Free Discovery','All apps','English','en/'],
pt:['Escolha um app pelo processo que precisa melhorar','Explore ferramentas relacionadas sem depender de contagens infladas de apps. Comece pelo Discovery gratuito, confira a funcionalidade real e defina um teste mensurável e reversível.','Comece pelo guia da rede','Discovery gratuito','Todos os apps','Português',''],
es:['Elija una app por el proceso que necesita mejorar','Explore herramientas relacionadas sin depender de cifras infladas de apps. Empiece con Discovery gratuito, compruebe la funcionalidad real y defina una prueba medible y reversible.','Empiece con la guía de la red','Discovery gratuito','Todas las apps','Español','es/'],
fr:['Choisissez une app selon le processus à améliorer','Explorez les outils associés sans vous fier à un nombre d’apps gonflé. Commencez par Discovery gratuit, vérifiez les fonctionnalités réelles et définissez un test mesurable et réversible.','Commencer avec le guide du réseau','Discovery gratuit','Toutes les apps','Français','fr/'],
de:['Wählen Sie eine App nach dem zu verbessernden Prozess','Erkunden Sie verknüpfte Werkzeuge statt überhöhten App-Zahlen zu vertrauen. Beginnen Sie mit kostenlosem Discovery, prüfen Sie tatsächliche Funktionen und definieren Sie einen messbaren, reversiblen Test.','Mit dem Netzwerk-Leitfaden beginnen','Kostenloses Discovery','Alle Apps','Deutsch','de/']
};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
for(const [l,c] of Object.entries(copy)){
 const p=l==='en'?'/':'/'+l+'/',f=path.join(out,c[6],'index.html'),guide=p+'apps/network-start-here.html';
 assert(fs.existsSync(f),'Missing localized homepage '+f);
 assert(fs.existsSync(path.join(out,guide.slice(1))),'Missing guide '+guide);
 let html=fs.readFileSync(f,'utf8');
 const section='<!--zion-network-home:start--><section class="section section-soft" data-network-home="'+version+'" aria-labelledby="network-start-title"><div class="wrap"><h2 id="network-start-title">'+esc(c[0])+'</h2><p class="lead">'+esc(c[1])+'</p><div class="actions"><a class="btn" href="'+guide+'">'+esc(c[2])+'</a><a class="btn alt" href="'+p+'discovery/">'+esc(c[3])+'</a><a class="btn alt" href="'+(fs.existsSync(path.join(out,p.slice(1),'apps/index.html'))?p+'apps/':'/apps/')+'">'+esc(c[4])+'</a></div></div></section><!--zion-network-home:end-->';
 html=html.replace(/<!--zion-network-home:start-->[\s\S]*?<!--zion-network-home:end-->/g,'');
 assert(html.includes('</main>'),'Homepage main closing tag missing '+f);
 html=html.replace('</main>',section+'</main>');fs.writeFileSync(f,html);
 assert(html.includes('data-network-home="'+version+'"'));
}
console.log('PASS '+version+': five translated homepage promotions linked to the matching guides; existing forms preserved.');
require('./verify-network-publication.cjs');
