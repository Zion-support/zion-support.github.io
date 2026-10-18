'use strict';
// Editorial-only finalizer. No requests, storage, forms, pricing or AI execution.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const release='network-evaluation-2026-10-15-v1';
const copy={
 en:{lang:'en',title:'Four questions before choosing an app',intro:'Compare one workflow using evidence, not an app count.',questions:[['What actually runs?','Separate a documented concept, a local browser tool and a verified integration. Inspect the linked source and record what you tested.'],['Which inputs are safe?','Start with synthetic examples. Identify personal, confidential or regulated data and obtain the required review before using real records.'],['What will you measure?','Record the current process, one baseline and one success criterion. Estimated savings are assumptions until measured.'],['Who can approve or stop?','Name a human owner, define a stop rule and confirm permissions before a pilot. A guide is not authorization to purchase, send email or dispatch work.']],cta:'Compare app choices with four evidence questions',back:'Return to app pathways on the homepage',catalog:'Explore the multilingual network catalog'},
 pt:{lang:'pt-BR',title:'Quatro perguntas antes de escolher um app',intro:'Compare um processo com evidências, não com uma contagem de apps.',questions:[['O que realmente funciona?','Diferencie um conceito documentado, uma ferramenta local no navegador e uma integração verificada. Examine o código vinculado e registre o que testou.'],['Quais dados são seguros?','Comece com exemplos sintéticos. Identifique dados pessoais, confidenciais ou regulados e obtenha a revisão necessária antes de usar registros reais.'],['O que será medido?','Registre o processo atual, uma linha de base e um critério de sucesso. A economia estimada é uma hipótese até ser medida.'],['Quem pode aprovar ou interromper?','Defina um responsável humano, uma regra de parada e as permissões antes do piloto. Um guia não autoriza compras, envio de e-mails ou despacho de equipes.']],cta:'Compare apps com quatro perguntas baseadas em evidências',back:'Voltar às trilhas de apps na página inicial',catalog:'Explorar o catálogo multilíngue da rede'},
 es:{lang:'es',title:'Cuatro preguntas antes de elegir una app',intro:'Compare un proceso con evidencias, no con una cifra de apps.',questions:[['¿Qué funciona realmente?','Distinga un concepto documentado, una herramienta local del navegador y una integración verificada. Revise el código enlazado y registre lo que probó.'],['¿Qué datos son seguros?','Empiece con ejemplos sintéticos. Identifique datos personales, confidenciales o regulados y obtenga la revisión necesaria antes de usar registros reales.'],['¿Qué va a medir?','Registre el proceso actual, una línea base y un criterio de éxito. El ahorro estimado es una hipótesis hasta que se mida.'],['¿Quién puede aprobar o detener?','Defina un responsable humano, una regla de parada y los permisos antes del piloto. Una guía no autoriza compras, envío de correos ni desplazamientos de equipos.']],cta:'Compare apps con cuatro preguntas basadas en evidencias',back:'Volver a las rutas de apps en la página de inicio',catalog:'Explorar el catálogo multilingüe de la red'},
 fr:{lang:'fr',title:'Quatre questions avant de choisir une app',intro:'Comparez un processus à partir de preuves, pas du nombre d’apps.',questions:[['Qu’est-ce qui fonctionne réellement ?','Distinguez un concept documenté, un outil local dans le navigateur et une intégration vérifiée. Examinez le code associé et consignez ce que vous avez testé.'],['Quelles données utiliser sans risque ?','Commencez par des exemples synthétiques. Identifiez les données personnelles, confidentielles ou réglementées et obtenez la validation nécessaire avant d’utiliser des dossiers réels.'],['Que mesurerez-vous ?','Consignez le processus actuel, une référence initiale et un critère de réussite. Les économies estimées restent des hypothèses tant qu’elles ne sont pas mesurées.'],['Qui peut approuver ou arrêter ?','Désignez un responsable humain, une règle d’arrêt et les autorisations avant le pilote. Un guide n’autorise ni achat, ni envoi d’e-mails, ni intervention sur site.']],cta:'Comparez les apps avec quatre questions fondées sur des preuves',back:'Revenir aux parcours d’apps sur la page d’accueil',catalog:'Explorer le catalogue multilingue du réseau'},
 de:{lang:'de',title:'Vier Fragen vor der App-Auswahl',intro:'Vergleichen Sie einen Prozess anhand von Nachweisen, nicht anhand einer App-Anzahl.',questions:[['Was funktioniert tatsächlich?','Unterscheiden Sie ein dokumentiertes Konzept, ein lokales Browser-Werkzeug und eine verifizierte Integration. Prüfen Sie den verlinkten Code und dokumentieren Sie Ihre Tests.'],['Welche Daten sind sicher?','Beginnen Sie mit synthetischen Beispielen. Ermitteln Sie personenbezogene, vertrauliche oder regulierte Daten und holen Sie vor der Nutzung echter Datensätze die nötige Prüfung ein.'],['Was werden Sie messen?','Dokumentieren Sie den aktuellen Prozess, einen Ausgangswert und ein Erfolgskriterium. Geschätzte Einsparungen bleiben bis zur Messung Annahmen.'],['Wer darf freigeben oder stoppen?','Benennen Sie eine verantwortliche Person, eine Abbruchregel und die Berechtigungen vor dem Pilotversuch. Ein Leitfaden erlaubt weder Käufe noch E-Mail-Versand oder Vor-Ort-Einsätze.']],cta:'Apps mit vier nachweisorientierten Fragen vergleichen',back:'Zurück zu den App-Wegen auf der Startseite',catalog:'Mehrsprachigen Netzwerkkatalog erkunden'}
};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const wrap=(name,html)=>`<!--zion-${name}:start-->${html}<!--zion-${name}:end-->`;
const strip=(s,name)=>s.replace(new RegExp(`<!--zion-${name}:start-->[\\s\\S]*?<!--zion-${name}:end-->`,'g'),'');
const protectedBlocks=s=>s.match(/<(form|script)\b[\s\S]*?<\/\1\s*>/gi)||[];
function render(root){
 const plans=[];
 for(const [locale,c] of Object.entries(copy)){
  const prefix=locale==='en'?'/':`/${locale}/`,home=locale==='pt'?'/':`/${locale}/`,guide=`${prefix}apps/network-start-here.html`;
  const targets=[[guide,'guide'],[`${home}index.html`,'home']];
  for(const [url,kind] of targets){
   const file=path.join(root,url.slice(1));assert(fs.existsSync(file),`Missing ${kind}: ${url}`);
   const before=fs.readFileSync(file,'utf8');assert(new RegExp(`<html\\b[^>]*\\blang=["']${c.lang}["']`,'i').test(before),`Wrong language: ${url}`);
   let after;
   if(kind==='guide'){
    const clean=strip(before,'evaluation');assert(/<\/main>/i.test(clean),`Missing main: ${url}`);assert(!/id=["']network-evaluation(?:-title)?["']/i.test(clean),`Conflicting evaluation ID: ${url}`);
    const css='<style>.zion-evaluation{box-sizing:border-box;overflow-wrap:anywhere;margin-block:2rem}.zion-evaluation ol{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,14rem),1fr));gap:1rem;padding-inline-start:1.5rem}.zion-evaluation li{min-width:0;padding:.5rem}.zion-evaluation a:focus-visible{outline:3px solid #f59e0b;outline-offset:4px}</style>';
    const section=css+`<section class="zion-evaluation" id="network-evaluation" aria-labelledby="network-evaluation-title" data-network-evaluation="${release}"><h2 id="network-evaluation-title">${esc(c.title)}</h2><p>${esc(c.intro)}</p><ol>`+c.questions.map(([q,a])=>`<li><h3>${esc(q)}</h3><p>${esc(a)}</p></li>`).join('')+`</ol><p><a href="${home}#network-start-title">${esc(c.back)}</a></p><p><a href="/zion-app-network/">${esc(c.catalog)}</a></p></section>`;
    after=clean.replace(/<\/main>/i,wrap('evaluation',section)+'</main>');
   }else{
    const clean=strip(before,'evaluation-cta');
    const re=/<!--zion-network-home:start-->[\s\S]*?<!--zion-network-home:end-->/g,matches=clean.match(re)||[];
    assert.equal(matches.length,1,`Expected one owned promotion: ${url}`);assert(matches[0].includes('id="network-start-title"'),`Missing return anchor: ${url}`);
    const block=matches[0];assert.equal((block.match(/<\/section>/gi)||[]).length,1,`Ambiguous promotion: ${url}`);assert(/<\/div>\s*<\/section>/.test(block),`Missing promotion wrapper: ${url}`);
    const cta=wrap('evaluation-cta',`<p data-network-evaluation-cta="${release}"><a href="${guide}#network-evaluation">${esc(c.cta)}</a></p>`);
    after=clean.replace(block,block.replace(/<\/div>\s*<\/section>/i,cta+'</div></section>'));
   }
   assert.deepEqual(protectedBlocks(after),protectedBlocks(before),`Form/script preservation: ${url}`);
   plans.push({file,after});
  }
 }
 // All ten pages pass preflight before any file is modified.
 for(const {file,after} of plans)fs.writeFileSync(file,after);
 return {release,pages:plans.length,locales:Object.keys(copy)};
}
if(require.main===module)console.log(JSON.stringify(render(process.argv[2]||'out')));
module.exports={render,copy,release};
