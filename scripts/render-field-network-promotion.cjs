'use strict';
// Additive artifact-only field network promotion. No forms or requests.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const out=process.argv[2]||'out',version='field-network-2026-10-10-locale-pairs';
const copy={
 en:['Plan a field visit with evidence, not assumptions','Use the guide to qualify scope and suppliers. Explore four connected planning tools; estimates are not confirmed availability, a quote or permission to dispatch.','Read the evidence guide','Supplier quote evidence','SLA scenarios','ROI assumptions','Automation pilot scope','Related field-service resources','App network','Smart Hands playbook','Free Discovery','Tools currently open in their published language. No booking, purchase or dispatch is created.'],
 pt:['Planeje a visita técnica com evidências, não suposições','Use o guia para qualificar o escopo e os fornecedores. Explore quatro ferramentas de planejamento; estimativas não confirmam disponibilidade, cotação ou autorização de despacho.','Ler o guia de evidências','Evidências de cotações','Cenários de SLA','Hipóteses de ROI','Escopo do piloto de automação','Recursos relacionados de serviços de campo','Rede de apps','Guia Smart Hands','Discovery gratuito','As ferramentas abrem no idioma atualmente publicado. Nenhuma reserva, compra ou mobilização é criada.'],
 es:['Planifique la visita técnica con evidencias, no suposiciones','Use la guía para verificar el alcance y los proveedores. Explore cuatro herramientas de planificación; las estimaciones no confirman disponibilidad, una cotización ni permiso de despacho.','Leer la guía de evidencias','Evidencias de cotizaciones','Escenarios de SLA','Supuestos de ROI','Alcance del piloto de automatización','Recursos relacionados de servicios de campo','Red de apps','Guía Smart Hands','Discovery gratuito','Las herramientas se abren en su idioma publicado. No se crea ninguna reserva, compra ni movilización.'],
 fr:['Préparez la visite sur site avec des preuves, pas des suppositions','Utilisez le guide pour vérifier le périmètre et les fournisseurs. Explorez quatre outils de planification ; les estimations ne confirment ni disponibilité, ni devis, ni autorisation d’intervention.','Lire le guide des preuves','Preuves des devis','Scénarios de SLA','Hypothèses de ROI','Périmètre du pilote d’automatisation','Ressources associées aux services sur site','Réseau d’apps','Guide Smart Hands','Discovery gratuit','Les outils s’ouvrent dans leur langue publiée. Aucune réservation, commande ou intervention n’est créée.'],
 de:['Planen Sie Vor-Ort-Einsätze mit Nachweisen statt Annahmen','Prüfen Sie mit dem Leitfaden Umfang und Anbieter. Erkunden Sie vier Planungstools; Schätzungen bestätigen weder Verfügbarkeit noch Angebote oder Einsatzfreigaben.','Nachweis-Leitfaden lesen','Angebotsnachweise','SLA-Szenarien','ROI-Annahmen','Umfang des Automatisierungspiloten','Verwandte Vor-Ort-Ressourcen','App-Netzwerk','Smart-Hands-Leitfaden','Kostenloses Discovery','Die Tools öffnen in ihrer veröffentlichten Sprache. Es wird keine Buchung, Bestellung oder Einsatzfreigabe erstellt.']
};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const guide=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+(l==='pt'?'pt-br':l))+'.html';
const discovery=l=>l==='en'?'/discovery/':'/'+l+'/discovery/';
const playbook=l=>(l==='en'?'/':'/'+l+'/')+'apps/field-services-smart-hands-playbook.html';
const tools=['/apps/supplier-quote-evidence-workbench.html','/sla-calculator/','/roi-calc/','/automation-pilot-planner/'];
const forms=h=>[...h.matchAll(/<form\b[\s\S]*?<\/form>/gi)].map(m=>m[0]);
const pending=new Map();
function stage(rel,html){const file=path.join(out,rel);const before=fs.readFileSync(file,'utf8');assert.deepEqual(forms(html),forms(before),'Forms changed '+rel);pending.set(file,html);}
function insert(before,block,owned){const clean=before.replace(owned,'');assert(clean.includes('</main>'),'Missing main anchor');return clean.replace('</main>',()=>block+'</main>');}
for(const [l,c] of Object.entries(copy)){
 const lang=l==='pt'?'pt-BR':l;
 const rels=l==='pt'?['index.html','pt/index.html']:[l+'/index.html'];
 for(const rel of rels){const file=path.join(out,rel);assert(fs.existsSync(file),'Missing homepage '+rel);const before=fs.readFileSync(file,'utf8');if(/http-equiv\s*=\s*["']?refresh/i.test(before))continue;
 const block='<!--field-evidence-locales:start--><section class="section section-soft" data-field-evidence-promo="2026-10-09" data-field-network="'+version+'" lang="'+lang+'"><div class="wrap"><h2>'+esc(c[0])+'</h2><p>'+esc(c[1])+'</p><p><a class="btn" href="'+guide(l)+'">'+esc(c[2])+'</a> · <a href="'+discovery(l)+'">'+esc(c[10])+'</a></p><ul>'+tools.map((url,i)=>'<li><a href="'+url+'">'+esc(c[i+3])+'</a></li>').join('')+'</ul><p>'+esc(c[11])+'</p></div></section><!--field-evidence-locales:end-->';
 stage(rel,insert(before,block,/<!--field-evidence-locales:start-->[\s\S]*?<!--field-evidence-locales:end-->/g));
 }
 const rel=guide(l).slice(1),before=fs.readFileSync(path.join(out,rel),'utf8');
 const block='<!--field-network-links:start--><section class="card" data-field-network-links="'+version+'" lang="'+lang+'"><h2>'+esc(c[7])+'</h2><p><a href="/apps/network.html">'+esc(c[8])+'</a> · <a href="'+playbook(l)+'">'+esc(c[9])+'</a> · <a href="'+discovery(l)+'">'+esc(c[10])+'</a></p><p>'+esc(c[11])+'</p></section><!--field-network-links:end-->';
 stage(rel,insert(before,block,/<!--field-network-links:start-->[\s\S]*?<!--field-network-links:end-->/g));
}
for(const rel of ['apps/network.html','apps/field-services-smart-hands-playbook.html']){
 const before=fs.readFileSync(path.join(out,rel),'utf8');
 const block='<!--field-network-links:start--><section class="card" data-field-network-links="'+version+'"><h2>Field-service evidence: five language guides</h2><p>Compare scope, supplier evidence and client approval before any booking or dispatch.</p><nav aria-label="Field-service evidence guide languages">'+Object.keys(copy).map(l=>'<a hreflang="'+(l==='pt'?'pt-BR':l)+'" href="'+guide(l)+'">'+({en:'English',pt:'Português',es:'Español',fr:'Français',de:'Deutsch'}[l])+'</a>').join(' · ')+'</nav><p><a href="'+(rel==='apps/network.html'?'/apps/field-services-smart-hands-playbook.html':'/apps/network.html')+'">'+(rel==='apps/network.html'?'Smart Hands playbook':'App network map')+'</a></p></section><!--field-network-links:end-->';
 stage(rel,insert(before,block,/<!--field-network-links:start-->[\s\S]*?<!--field-network-links:end-->/g));
}
// Keep translated playbooks connected to the matching evidence guide.
for(const l of ['pt','es','fr','de']){
 const c=copy[l],rel=playbook(l).slice(1),before=fs.readFileSync(path.join(out,rel),'utf8');
 const block='<!--field-network-links:start--><section class="card" data-field-network-links="'+version+'" lang="'+(l==='pt'?'pt-BR':l)+'"><h2>'+esc(c[7])+'</h2><p><a href="'+guide(l)+'">'+esc(c[2])+'</a> · <a href="/apps/network.html">'+esc(c[8])+'</a> · <a href="'+discovery(l)+'">'+esc(c[10])+'</a></p><p>'+esc(c[11])+'</p></section><!--field-network-links:end-->';
 stage(rel,insert(before,block,/<!--field-network-links:start-->[\s\S]*?<!--field-network-links:end-->/g));
}
// Regression gate: all guide/playbook pairs must keep the selected locale.
for(const l of Object.keys(copy)){
 const g=pending.get(path.join(out,guide(l).slice(1)));
 assert(g.includes('href="'+playbook(l)+'"'),'Wrong playbook locale '+l);
 const p=pending.get(path.join(out,playbook(l).slice(1)));
 assert(p.includes('href="'+guide(l)+'"'),'Missing evidence return '+l);
 const expected=l==='pt'?'pt-BR':l;
 assert(new RegExp('<html[^>]*lang=["\']'+expected+'["\']','i').test(p),'Wrong playbook language '+l);
}
// Validate every staged document before writing any document.
for(const [file,html] of pending){const isHome=!file.includes('/apps/');assert.equal((html.match(isHome?/data-field-network=/g:/data-field-network-links=/g)||[]).length,1,'Duplicate owned section '+file);assert(html.includes(version));assert(!/<form\b|<script\b/i.test(html.match(/<!--field-(?:evidence-locales|network-links):start-->[\s\S]*?<!--field-(?:evidence-locales|network-links):end-->/)[0]));}
for(const [file,html] of pending)fs.writeFileSync(file,html);
fs.writeFileSync(path.join(out,'apps/field-network-publication.json'),JSON.stringify({release:version,pages:[...pending.keys()].map(f=>'/'+path.relative(out,f).replace(/\\/g,'/')),scope:'Homepage promotions and field-guide reciprocal navigation only; linked tools retain their published language',forms:'preserved',delivery:'unchanged'},null,2));
console.log('PASS '+version+': '+pending.size+' pages; translated promotions, reciprocal navigation and unchanged forms');
