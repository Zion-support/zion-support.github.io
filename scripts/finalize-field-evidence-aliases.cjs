'use strict';
// Final artifact pass: preserve forms and delivery; extend only owned editorial blocks.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const origin='https://ziontechgroup.com',release='field-tool-choice-2026-10-10';
const locales=['en','pt-BR','es','fr','de'];
const route=l=>'/apps/field-service-evidence-guide'+(l==='en'?'':'.'+l.toLowerCase())+'.html';
const pairs=locales.slice(1).map(l=>({language:l,canonical:route(l),alias:'/'+(l==='pt-BR'?'pt':l)+'/apps/field-service-evidence-guide.html'}));
const attributes=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g)].map(m=>[m[1].toLowerCase(),m[2]]));
// Scoped editorial enhancement: only owned blocks, no forms or delivery changes.
const toolChoiceCopy={"en":{"title":"Choose the right tool for the next decision","intro":"Use the four linked resources for different questions. Inspect the actual page and its assumptions; a link is not evidence that an outcome is verified.","columns":["Resource","Question to explore","Evidence to bring","Before relying on the output"],"rows":[["Supplier Quote Evidence Workbench","Which quote inputs or terms are missing?","Written scope, itemized quote and cost assumptions.","Reconcile costs and confirm supplier terms in writing."],["SLA Calculator","How do service-window and penalty assumptions affect a scenario?","Contract terms, exclusions and agreed service window.","Compare the scenario with the actual contract."],["ROI Calculator","What changes when baseline hours and costs change?","Measured baseline, explicit assumptions and review period.","Treat estimates as scenarios, not measured savings."],["Automation Pilot Planner","What is the smallest reversible test?","Named owner, baseline, human review and stop rule.","Obtain separate approval before production changes."]],"limit":"Planning only: these resources do not confirm technician availability, deliver an email, place an order or authorize dispatch.","cta":"Compare four linked planning tools","nav":["Tool comparison","Linked tools","Evidence checklist","Questions and answers"]},"pt-BR":{"title":"Escolha a ferramenta certa para a próxima decisão","intro":"Use os quatro recursos vinculados para perguntas diferentes. Confira a página real e suas premissas; um link não comprova um resultado verificado.","columns":["Recurso","Pergunta a explorar","Evidências necessárias","Antes de usar o resultado"],"rows":[["Bancada de evidências de cotações","Quais dados ou condições da cotação estão faltando?","Escopo escrito, cotação detalhada e premissas de custo.","Reconcilie custos e confirme as condições do fornecedor por escrito."],["Calculadora de SLA","Como as premissas de janela de serviço e penalidades afetam um cenário?","Contrato, exclusões e janela de serviço acordada.","Compare o cenário com o contrato real."],["Calculadora de ROI","O que muda quando as horas e os custos de referência mudam?","Referência medida, premissas explícitas e período de revisão.","Trate estimativas como cenários, não como economia medida."],["Planejador de piloto de automação","Qual é o menor teste reversível?","Responsável identificado, referência inicial, revisão humana e regra de parada.","Obtenha aprovação separada antes de alterar a produção."]],"limit":"Somente planejamento: estes recursos não confirmam disponibilidade de técnicos, entrega de email, compra nem autorização de mobilização.","cta":"Compare quatro ferramentas vinculadas de planejamento","nav":["Comparação de ferramentas","Ferramentas vinculadas","Checklist de evidências","Perguntas e respostas"]},"es":{"title":"Elija la herramienta adecuada para la próxima decisión","intro":"Use los cuatro recursos vinculados para preguntas distintas. Revise la página real y sus supuestos; un enlace no demuestra un resultado verificado.","columns":["Recurso","Pregunta que explorar","Evidencias necesarias","Antes de usar el resultado"],"rows":[["Banco de evidencias de cotizaciones","¿Qué datos o condiciones faltan en la cotización?","Alcance escrito, cotización detallada y supuestos de coste.","Concilie costes y confirme por escrito las condiciones del proveedor."],["Calculadora de SLA","¿Cómo afectan al escenario la ventana de servicio y las penalizaciones?","Contrato, exclusiones y ventana de servicio acordada.","Compare el escenario con el contrato real."],["Calculadora de ROI","¿Qué cambia al variar las horas y los costes de referencia?","Referencia medida, supuestos explícitos y periodo de revisión.","Trate las estimaciones como escenarios, no como ahorro medido."],["Planificador de piloto de automatización","¿Cuál es la prueba reversible más pequeña?","Responsable identificado, referencia inicial, revisión humana y regla de parada.","Obtenga aprobación separada antes de cambiar la producción."]],"limit":"Solo planificación: estos recursos no confirman disponibilidad técnica, entrega de correo, compra ni autorización de movilización.","cta":"Compare cuatro herramientas vinculadas de planificación","nav":["Comparación de herramientas","Herramientas vinculadas","Lista de evidencias","Preguntas y respuestas"]},"fr":{"title":"Choisissez le bon outil pour la prochaine décision","intro":"Utilisez les quatre ressources liées pour des questions différentes. Vérifiez la page réelle et ses hypothèses ; un lien ne prouve pas qu’un résultat est vérifié.","columns":["Ressource","Question à explorer","Preuves nécessaires","Avant d’utiliser le résultat"],"rows":[["Atelier de preuves des devis","Quelles données ou conditions manquent dans le devis ?","Périmètre écrit, devis détaillé et hypothèses de coût.","Rapprochez les coûts et confirmez par écrit les conditions du fournisseur."],["Calculateur de SLA","Comment les hypothèses de créneau et de pénalités influencent-elles un scénario ?","Contrat, exclusions et créneau de service convenu.","Comparez le scénario au contrat réel."],["Calculateur de ROI","Que change une variation des heures et coûts de référence ?","Référence mesurée, hypothèses explicites et période de revue.","Traitez les estimations comme des scénarios, non comme des économies mesurées."],["Planificateur de pilote d’automatisation","Quel est le plus petit test réversible ?","Responsable identifié, référence initiale, contrôle humain et règle d’arrêt.","Obtenez une autorisation distincte avant de modifier la production."]],"limit":"Planification uniquement : ces ressources ne confirment ni disponibilité des techniciens, ni réception d’un email, ni commande ou autorisation d’intervention.","cta":"Comparez quatre outils de planification liés","nav":["Comparaison des outils","Outils liés","Liste des preuves","Questions et réponses"]},"de":{"title":"Wählen Sie das richtige Werkzeug für die nächste Entscheidung","intro":"Nutzen Sie die vier verknüpften Ressourcen für unterschiedliche Fragen. Prüfen Sie die tatsächliche Seite und ihre Annahmen; ein Link belegt kein verifiziertes Ergebnis.","columns":["Ressource","Zu prüfende Frage","Benötigte Nachweise","Vor Nutzung des Ergebnisses"],"rows":[["Arbeitsbereich für Angebotsnachweise","Welche Angebotsdaten oder Bedingungen fehlen?","Schriftlicher Umfang, aufgeschlüsseltes Angebot und Kostenannahmen.","Gleichen Sie Kosten ab und bestätigen Sie Anbieterbedingungen schriftlich."],["SLA-Rechner","Wie beeinflussen Servicefenster und Vertragsstrafen ein Szenario?","Vertrag, Ausschlüsse und vereinbartes Servicefenster.","Vergleichen Sie das Szenario mit dem tatsächlichen Vertrag."],["ROI-Rechner","Was ändert sich bei anderen Ausgangsstunden und Kosten?","Gemessener Ausgangswert, ausdrückliche Annahmen und Prüfzeitraum.","Behandeln Sie Schätzungen als Szenarien, nicht als gemessene Einsparungen."],["Planer für Automatisierungspiloten","Was ist der kleinste reversible Test?","Benannte Verantwortliche, Ausgangswert, menschliche Prüfung und Abbruchregel.","Holen Sie vor Produktionsänderungen eine separate Freigabe ein."]],"limit":"Nur Planung: Diese Ressourcen bestätigen weder Technikerverfügbarkeit noch E-Mail-Zustellung, Bestellung oder Einsatzfreigabe.","cta":"Vier verknüpfte Planungswerkzeuge vergleichen","nav":["Werkzeugvergleich","Verknüpfte Werkzeuge","Nachweis-Checkliste","Fragen und Antworten"]}};
const toolChoicePaths=['/apps/supplier-quote-evidence-workbench.html','/sla-calculator/','/roi-calc/','/automation-pilot-planner/'];
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const protectedParts=s=>[...s.matchAll(/<(form|script)\b[\s\S]*?<\/\1>/gi)].map(m=>m[0]);
function enhance(out){
 const staged=new Map();
 for(const language of locales){
  const c=toolChoiceCopy[language],file=path.join(out,route(language).slice(1));
  const before=fs.readFileSync(file,'utf8');
  assert(!/<form\b|<script\b/i.test(before));
  let html=before.replace(/<!--field-tool-choice:start-->[\s\S]*?<!--field-tool-choice:end-->/g,'');
  const nav='<nav aria-label="'+esc(c.title)+'">'+['tool-choice','tools','evidence-pack','field-evidence-faq'].map((id,i)=>'<a href="#'+id+'">'+esc(c.nav[i])+'</a>').join(' · ')+'</nav>';
  const table='<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse"><caption>'+esc(c.title)+'</caption><thead><tr>'+c.columns.map(x=>'<th scope="col" style="text-align:left;padding:12px;border-bottom:1px solid #64748b">'+esc(x)+'</th>').join('')+'</tr></thead><tbody>'+c.rows.map((row,i)=>'<tr><th scope="row" style="text-align:left;padding:12px"><a href="'+toolChoicePaths[i]+'">'+esc(row[0])+'</a></th>'+row.slice(1).map(x=>'<td style="padding:12px;vertical-align:top">'+esc(x)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
  const block='<!--field-tool-choice:start--><section class="card" id="tool-choice" lang="'+language+'" data-field-tool-choice="field-tool-choice-2026-10-10"><h2>'+esc(c.title)+'</h2><p>'+esc(c.intro)+'</p>'+nav+table+'<p>'+esc(c.limit)+'</p></section><!--field-tool-choice:end-->';
  assert(html.includes('</main>'),'Guide main anchor missing');
  html=html.replace('</main>',block+'</main>');
  assert.deepEqual(protectedParts(html),protectedParts(before));checkChoice(html,language);
  staged.set(file,html);
  const homes=language==='pt-BR'?['index.html','pt/index.html']:[language+'/index.html'];
  for(const rel of homes){
   const f=path.join(out,rel);if(!fs.existsSync(f))continue;
   const old=fs.readFileSync(f,'utf8');if(/http-equiv\s*=\s*["']?refresh/i.test(old))continue;
   const owned=/<!--field-evidence-locales:start-->[\s\S]*?<!--field-evidence-locales:end-->/g;
   assert.equal([...old.matchAll(owned)].length,1,'Owned homepage promotion missing '+rel);
   const next=old.replace(owned,block=>{block=block.replace(/<!--field-tool-choice-cta:start-->[\s\S]*?<!--field-tool-choice-cta:end-->/g,'');assert(block.includes('</div></section>'));return block.replace('</div></section>','<!--field-tool-choice-cta:start--><p data-field-tool-choice-cta="field-tool-choice-2026-10-10"><a class="btn" href="'+route(language)+'#tool-choice">'+esc(c.cta)+'</a></p><!--field-tool-choice-cta:end--></div></section>');});
   assert.deepEqual(protectedParts(next),protectedParts(old));
   assert.equal((next.match(/data-field-tool-choice-cta=/g)||[]).length,1);staged.set(f,next);
  }
 }
 for(const [f,html] of staged)fs.writeFileSync(f,html);
 console.log('PASS five translated tool-choice matrices and owned homepage CTAs; forms/scripts preserved.');
}
function checkChoice(html,language){
 const blocks=[...html.matchAll(/<!--field-tool-choice:start-->[\s\S]*?<!--field-tool-choice:end-->/g)];
 assert.equal(blocks.length,1,'Tool choice block missing or duplicated '+language);
 const block=blocks[0][0];assert.equal((block.match(/<th scope="col"/g)||[]).length,4);
 assert.equal((block.match(/<th scope="row"/g)||[]).length,4);
 assert(block.includes('lang="'+language+'"'));assert(block.includes(esc(toolChoiceCopy[language].limit)));
 for(const dest of toolChoicePaths)assert(block.includes('href="'+dest+'"'));
 for(const id of ['tools','evidence-pack','field-evidence-faq'])assert(new RegExp('id=["\']'+id+'["\']').test(html),'Missing section '+id);
}
function checkGuide(html,language){
 checkChoice(html,language);
 assert(html.includes('<html lang="'+language+'">'),'Wrong guide language');
 assert(!/<form\b|<script\b/i.test(html),'Read-only guide required');
 const links=(html.match(/<link\b[^>]*>/gi)||[]).map(attributes),canonical=links.filter(x=>x.rel==='canonical');
 assert.equal(canonical.length,1);assert.equal(canonical[0].href,origin+route(language));
 const alternate=links.filter(x=>x.rel==='alternate');assert.equal(alternate.length,6);
 for(const l of [...locales,'x-default']){
  const found=alternate.filter(x=>x.hreflang===l);assert.equal(found.length,1,'Missing/duplicate alternate '+l);
  assert.equal(found[0].href,origin+route(l==='x-default'?'en':l));
 }
 const nav=html.match(/<nav\b[^>]*data-field-evidence-languages[^>]*>[\s\S]*?<\/nav>/i);assert(nav,'Missing language navigation');
 const destinations=(nav[0].match(/<a\b[^>]*>/gi)||[]).map(attributes);
 for(const l of locales)assert(destinations.some(a=>a.href===route(l)),'Missing language link '+l);
 assert(/id=["']tools["']/.test(html),'Missing linked-tools anchor');
 const pack=html.match(/<!--field-evidence-pack:start-->[\s\S]*?<!--field-evidence-pack:end-->/);assert(pack,'Missing evidence checklist');
 assert.equal((pack[0].match(/<li>/g)||[]).length,6);
 const faq=html.match(/<!--field-evidence-faq:start-->[\s\S]*?<!--field-evidence-faq:end-->/);assert(faq,'Missing translated FAQ');
 assert.equal((faq[0].match(/<details>/g)||[]).length,4);
 assert.equal((html.match(/data-field-evidence-faq=/g)||[]).length,1);
 const telecom='/apps/october-2026-batch112-telecom'+(language==='en'?'':'.'+language.toLowerCase())+'.html';
 assert(html.includes('href="'+telecom+'"'),'Final telecom interlink missing');
 return crypto.createHash('sha256').update(html).digest('hex');
}
function finalize(out){
 enhance(out);
 const originals=locales.map(l=>({language:l,html:fs.readFileSync(path.join(out,route(l).slice(1)),'utf8')}));
 originals.forEach(p=>checkGuide(p.html,p.language));
 const copies=pairs.map(p=>({...p,html:originals.find(x=>x.language===p.language).html}));
 for(const p of copies){const dest=path.join(out,p.alias.slice(1));fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,p.html);}
 const results=[];
 for(const p of copies){const a=fs.readFileSync(path.join(out,p.alias.slice(1)),'utf8'),c=fs.readFileSync(path.join(out,p.canonical.slice(1)),'utf8');assert.equal(a,c,'Final whole-page drift '+p.alias);results.push({...p,html:undefined,sha256:checkGuide(a,p.language)});}
 for(const p of originals)assert.equal(fs.readFileSync(path.join(out,route(p.language).slice(1)),'utf8'),p.html,'Canonical changed');
 fs.writeFileSync(path.join(out,'apps/field-evidence-final-integrity.json'),JSON.stringify({release,pairs:results,scope:'Nine read-only field-guide routes; full alias/canonical equality after all content renderers',forms:'unchanged',delivery:'unchanged'},null,2)+'\n');
 console.log('PASS '+release+': four final whole-page locale pairs; five-language metadata, FAQs and telecom interlinks');
}
async function live(){
 const read=async url=>{const r=await fetch(origin+url+'?qa='+Date.now(),{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});assert.equal(r.status,200,'HTTP '+url);return r.text();};
 let last;
 for(let attempt=0;attempt<4;attempt++){
  try{
   const rows=await Promise.all(pairs.map(async p=>{const [a,c]=await Promise.all([read(p.alias),read(p.canonical)]);assert.equal(a,c,'Live whole-page drift '+p.alias);checkGuide(a,p.language);checkGuide(c,p.language);return p.language;}));
   checkGuide(await read(route('en')),'en');console.log('LIVE PASS nine guides, complete HTML equality for '+rows.join(', ')+'; no submissions');return;
  }catch(e){last=e;if(attempt<3)await new Promise(r=>setTimeout(r,4000));}
 }
 throw last;
}
module.exports={checkGuide,finalize,live,pairs,route,enhance,checkChoice};
if(require.main===module){if(process.argv.includes('--live'))live().catch(e=>{console.error(e);process.exitCode=1;});else finalize(process.argv[2]||'out');}
