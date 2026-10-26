'use strict';
// Review-only generator. Not connected to any build, workflow, form or deployment.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const RELEASE = 'insurance-governance-review-2026-10-13-v1';
const ORIGIN = 'https://ziontechgroup.com';
const locales = ['en', 'pt-BR', 'es', 'fr', 'de'];
const suffix = {'en':'', 'pt-BR':'.pt-br', 'es':'.es', 'fr':'.fr', 'de':'.de'};
const homes = {'en':'/en/', 'pt-BR':'/', 'es':'/es/', 'fr':'/fr/', 'de':'/de/'};
const discovery = {'en':'/discovery/', 'pt-BR':'/pt/discovery/', 'es':'/es/discovery/', 'fr':'/fr/discovery/', 'de':'/de/discovery/'};
const groups = {
 insurance: {file:'october-2026-batch113-insurance', batch:113, repos:['zion-claims-triage-ai','zion-fraud-signal-detector','zion-underwriting-copilot','zion-policy-doc-compare','zion-subrogation-finder','zion-quote-bind-accelerator'], trees:['a1ffea224c687acae2296f6dbc48361093f3c724','1d061098021140b8406521e6789d98f8de111431','5a4f43fff3cc2834bf2aa5874e23bc74acb5dd13','b9a5b7a66e02b45869d0cec9c575403109bbfef6','bf39b62fdf20cc07181d6de898f9ad4202b790ca','02cabb77f99c18d9e3e9c6ef31fb10a2c96b88b6']},
 governance: {file:'october-2026-batch114-governance-ai', batch:114, repos:['zion-ai-regs-radar','zion-devsec-checklist','ai-compliance-auditor','k8s-pod-security-scanner','tech-debt-radar','ai-review-insights','vendor-matrix-compare'], trees:['20d0f809199cccd21427a9dfec053d0ba2962234','c78e5a0b58f140d0fca078330b90138e705722d6','4028eb381c79d68914ab521f98f878e8ef7f18fc','f35d2797a6e65eedaeeafd06b47edd358f9e16e4','5a6bb691ccdbb49af1fb4952531095b067cf927d','206032784afec5a7be6f1eefbde07d817056a293','6ae62ba26bf890fb127e72b13595f63fdf5121f0']}
};
const copy = {
 en: {
  language:'English', skip:'Skip to main content', home:'Homepage', catalog:'App catalog', network:'App network', start:'Free Discovery', other:'Related guide', languages:'Languages', review:'Review draft — not published',
  insurance:'Insurance and InsurTech: an evidence-led starting point', governance:'AI governance and engineering quality: review before adoption',
  intro:'Choose one small, reversible workflow. Inspect the source, identify a responsible reviewer, and establish a baseline before evaluating any tool.',
  insuranceLimit:'All six audited Insurance repositories contained README documentation only. These are documented concepts, not implemented AI applications, operational claims systems or verified fraud detectors.',
  governanceLimit:'All seven audited Governance repositories contained static page source. Source presence does not prove working controls, AI integration, security scanning, compliance certification or production readiness.',
  delivery:'Discovery offers a free questionnaire and an on-page report. Email submission requests delivery to the participant and commercial@ziontechgroup.com; provider acceptance does not establish inbox receipt. Availability and delivery timing are not guaranteed.',
  privacy:'Use synthetic or redacted examples. Do not upload claim files, personal identifiers, credentials or production security data. Human review is required; these resources do not provide legal, insurance or security certification.',
  stepsTitle:'A four-step review path', steps:['Assign an owner and choose one bounded workflow.','Record the baseline: manual time, error rate or unresolved evidence gaps.','Inspect source and test a synthetic example with a qualified reviewer.','Compare results with the baseline; stop or roll back when evidence is missing.'],
  source:'Inspect source', evidence:'Audit snapshot', status:'Capability boundary', promo:'Explore Insurance and Governance without overstating readiness', promoText:'Review six documented Insurance concepts and seven Governance resources with static page source. Choose a synthetic-data trial, clear owner and stop rule.',
  insuranceCards:['Initial claim intake and triage concept','Fraud-signal review concept','Underwriting review concept','Policy wording comparison concept','Subrogation opportunity review concept','Quote-to-bind workflow review concept'],
  governanceCards:['Regulatory tracking page','DevSecOps checklist page','Compliance review page','Kubernetes security review page','Technical debt review page','Code and document review page','Vendor comparison page']
 },
 'pt-BR': {
  language:'Português', skip:'Pular para o conteúdo principal', home:'Página inicial', catalog:'Catálogo de aplicativos', network:'Rede de aplicativos', start:'Discovery gratuito', other:'Guia relacionado', languages:'Idiomas', review:'Rascunho para revisão — não publicado',
  insurance:'Seguros e InsurTech: um ponto de partida baseado em evidências', governance:'Governança de IA e qualidade de engenharia: revise antes de adotar',
  intro:'Escolha um fluxo pequeno e reversível. Examine o código-fonte, defina um revisor responsável e registre uma linha de base antes de avaliar uma ferramenta.',
  insuranceLimit:'Os seis repositórios de Seguros auditados continham somente documentação README. São conceitos documentados, não aplicativos de IA implementados, sistemas operacionais de sinistros ou detectores de fraude verificados.',
  governanceLimit:'Os sete repositórios de Governança auditados continham código de páginas estáticas. A presença do código não comprova controles funcionais, integração de IA, varredura de segurança, certificação de conformidade ou prontidão para produção.',
  delivery:'O Discovery oferece um questionário gratuito e um relatório na página. A submissão por e-mail solicita entrega ao participante e a commercial@ziontechgroup.com; a aceitação pelo provedor não comprova recebimento nas caixas. Disponibilidade e prazo de entrega não são garantidos.',
  privacy:'Use exemplos sintéticos ou anonimizados. Não envie arquivos de sinistros, identificadores pessoais, credenciais ou dados de segurança de produção. A revisão humana é obrigatória; estes recursos não fornecem certificação jurídica, de seguros ou de segurança.',
  stepsTitle:'Um percurso de revisão em quatro etapas', steps:['Defina um responsável e escolha um fluxo com escopo limitado.','Registre a linha de base: tempo manual, taxa de erros ou lacunas de evidência.','Examine o código e teste um exemplo sintético com um revisor qualificado.','Compare os resultados com a linha de base; pare ou reverta se faltar evidência.'],
  source:'Examinar código-fonte', evidence:'Registro da auditoria', status:'Limites de capacidade', promo:'Explore Seguros e Governança sem exagerar a prontidão', promoText:'Revise seis conceitos documentados de Seguros e sete recursos de Governança com código de páginas estáticas. Escolha um teste com dados sintéticos, responsável definido e regra de parada.',
  insuranceCards:['Conceito de recepção e triagem inicial de sinistros','Conceito de revisão de sinais de fraude','Conceito de revisão de subscrição','Conceito de comparação de textos de apólices','Conceito de revisão de oportunidades de sub-rogação','Conceito de revisão do fluxo entre cotação e contratação'],
  governanceCards:['Página de acompanhamento regulatório','Página de checklist DevSecOps','Página de revisão de conformidade','Página de revisão de segurança do Kubernetes','Página de revisão de dívida técnica','Página de revisão de código e documentos','Página de comparação de fornecedores']
 },
 es: {
  language:'Español', skip:'Saltar al contenido principal', home:'Inicio', catalog:'Catálogo de aplicaciones', network:'Red de aplicaciones', start:'Discovery gratuito', other:'Guía relacionada', languages:'Idiomas', review:'Borrador para revisión — no publicado',
  insurance:'Seguros e InsurTech: un punto de partida basado en evidencias', governance:'Gobernanza de IA y calidad de ingeniería: revise antes de adoptar',
  intro:'Elija un flujo pequeño y reversible. Examine el código fuente, identifique un revisor responsable y establezca una referencia antes de evaluar una herramienta.',
  insuranceLimit:'Los seis repositorios de Seguros auditados contenían únicamente documentación README. Son conceptos documentados, no aplicaciones de IA implementadas, sistemas operativos de siniestros ni detectores de fraude verificados.',
  governanceLimit:'Los siete repositorios de Gobernanza auditados contenían código de páginas estáticas. Su presencia no demuestra controles funcionales, integración de IA, análisis de seguridad, certificación de cumplimiento ni preparación para producción.',
  delivery:'Discovery ofrece un cuestionario gratuito y un informe en la página. El envío por correo solicita la entrega al participante y a commercial@ziontechgroup.com; la aceptación del proveedor no demuestra recepción en las bandejas. No se garantizan disponibilidad ni plazos de entrega.',
  privacy:'Use ejemplos sintéticos o anonimizados. No cargue expedientes de siniestros, identificadores personales, credenciales ni datos de seguridad de producción. Se requiere revisión humana; estos recursos no ofrecen certificación jurídica, de seguros ni de seguridad.',
  stepsTitle:'Un recorrido de revisión en cuatro pasos', steps:['Asigne un responsable y elija un flujo con alcance limitado.','Registre la referencia: tiempo manual, tasa de errores o lagunas de evidencia.','Examine el código y pruebe un ejemplo sintético con un revisor cualificado.','Compare los resultados con la referencia; deténgase o revierta si faltan evidencias.'],
  source:'Examinar código fuente', evidence:'Registro de auditoría', status:'Límites de capacidad', promo:'Explore Seguros y Gobernanza sin exagerar su preparación', promoText:'Revise seis conceptos documentados de Seguros y siete recursos de Gobernanza con código de páginas estáticas. Elija una prueba con datos sintéticos, responsable y regla de parada.',
  insuranceCards:['Concepto de recepción y clasificación inicial de siniestros','Concepto de revisión de señales de fraude','Concepto de revisión de suscripción','Concepto de comparación de textos de pólizas','Concepto de revisión de oportunidades de subrogación','Concepto de revisión del flujo entre cotización y contratación'],
  governanceCards:['Página de seguimiento regulatorio','Página de lista de control DevSecOps','Página de revisión de cumplimiento','Página de revisión de seguridad de Kubernetes','Página de revisión de deuda técnica','Página de revisión de código y documentos','Página de comparación de proveedores']
 },
 fr: {
  language:'Français', skip:'Aller au contenu principal', home:'Accueil', catalog:'Catalogue des applications', network:'Réseau d’applications', start:'Discovery gratuit', other:'Guide associé', languages:'Langues', review:'Brouillon à relire — non publié',
  insurance:'Assurance et InsurTech : un point de départ fondé sur des preuves', governance:'Gouvernance de l’IA et qualité d’ingénierie : examiner avant d’adopter',
  intro:'Choisissez un processus limité et réversible. Examinez le code source, désignez un responsable de la revue et établissez une référence avant d’évaluer un outil.',
  insuranceLimit:'Les six dépôts Assurance audités contenaient uniquement une documentation README. Il s’agit de concepts documentés, pas d’applications d’IA implémentées, de systèmes opérationnels de sinistres ou de détecteurs de fraude vérifiés.',
  governanceLimit:'Les sept dépôts Gouvernance audités contenaient le code de pages statiques. Sa présence ne prouve pas le fonctionnement des contrôles, une intégration d’IA, une analyse de sécurité, une certification de conformité ou une aptitude à la production.',
  delivery:'Discovery propose un questionnaire gratuit et un rapport sur la page. L’envoi par courriel demande une livraison au participant et à commercial@ziontechgroup.com ; l’acceptation du prestataire ne prouve pas la réception. La disponibilité et le délai de livraison ne sont pas garantis.',
  privacy:'Utilisez des exemples synthétiques ou anonymisés. Ne téléversez pas de dossiers de sinistres, d’identifiants personnels, de secrets ou de données de sécurité de production. Une revue humaine est obligatoire ; ces ressources ne fournissent aucune certification juridique, assurantielle ou de sécurité.',
  stepsTitle:'Un parcours de revue en quatre étapes', steps:['Désignez un responsable et choisissez un processus au périmètre limité.','Consignez la référence : temps manuel, taux d’erreur ou preuves manquantes.','Examinez le code et testez un exemple synthétique avec un relecteur qualifié.','Comparez les résultats à la référence ; arrêtez ou revenez en arrière si les preuves manquent.'],
  source:'Examiner le code source', evidence:'Instantané d’audit', status:'Limites des capacités', promo:'Explorez Assurance et Gouvernance sans exagérer leur maturité', promoText:'Examinez six concepts documentés d’Assurance et sept ressources de Gouvernance avec du code de pages statiques. Choisissez un essai synthétique, un responsable et une règle d’arrêt.',
  insuranceCards:['Concept de réception et de triage initial des sinistres','Concept de revue des signaux de fraude','Concept de revue de souscription','Concept de comparaison des clauses de polices','Concept de revue des possibilités de subrogation','Concept de revue du parcours devis-souscription'],
  governanceCards:['Page de suivi réglementaire','Page de liste de contrôle DevSecOps','Page de revue de conformité','Page de revue de sécurité Kubernetes','Page de revue de dette technique','Page de revue du code et des documents','Page de comparaison des fournisseurs']
 },
 de: {
  language:'Deutsch', skip:'Zum Hauptinhalt springen', home:'Startseite', catalog:'Anwendungskatalog', network:'Anwendungsnetzwerk', start:'Kostenlose Discovery', other:'Verwandter Leitfaden', languages:'Sprachen', review:'Prüfentwurf — nicht veröffentlicht',
  insurance:'Versicherung und InsurTech: ein evidenzbasierter Einstieg', governance:'KI-Governance und Engineering-Qualität: vor der Einführung prüfen',
  intro:'Wählen Sie einen kleinen, reversiblen Ablauf. Prüfen Sie den Quellcode, benennen Sie eine verantwortliche Prüfperson und erfassen Sie einen Ausgangswert, bevor Sie ein Werkzeug bewerten.',
  insuranceLimit:'Alle sechs geprüften Versicherungs-Repositories enthielten ausschließlich README-Dokumentation. Es sind dokumentierte Konzepte, keine implementierten KI-Anwendungen, betriebsbereiten Schadenssysteme oder geprüften Betrugsdetektoren.',
  governanceLimit:'Alle sieben geprüften Governance-Repositories enthielten Quellcode statischer Seiten. Vorhandener Quellcode belegt weder funktionsfähige Kontrollen, KI-Integration, Sicherheitsscans, Compliance-Zertifizierung noch Produktionsreife.',
  delivery:'Discovery bietet einen kostenlosen Fragebogen und einen Bericht auf der Seite. Der E-Mail-Versand fordert die Zustellung an die teilnehmende Person und commercial@ziontechgroup.com an; die Annahme durch den Anbieter belegt keinen Posteingang. Verfügbarkeit und Zustellzeit sind nicht garantiert.',
  privacy:'Verwenden Sie synthetische oder anonymisierte Beispiele. Laden Sie keine Schadensakten, personenbezogenen Kennungen, Zugangsdaten oder Produktions-Sicherheitsdaten hoch. Menschliche Prüfung ist erforderlich; diese Ressourcen bieten keine Rechts-, Versicherungs- oder Sicherheitszertifizierung.',
  stepsTitle:'Ein Prüfpfad in vier Schritten', steps:['Benennen Sie eine verantwortliche Person und begrenzen Sie den Ablauf.','Erfassen Sie den Ausgangswert: manuelle Zeit, Fehlerquote oder Evidenzlücken.','Prüfen Sie den Quellcode und testen Sie ein synthetisches Beispiel mit einer Fachperson.','Vergleichen Sie die Ergebnisse mit dem Ausgangswert; stoppen Sie oder machen Sie Änderungen bei fehlender Evidenz rückgängig.'],
  source:'Quellcode prüfen', evidence:'Audit-Snapshot', status:'Funktionsgrenzen', promo:'Versicherung und Governance ohne übertriebene Reifeversprechen erkunden', promoText:'Prüfen Sie sechs dokumentierte Versicherungskonzepte und sieben Governance-Ressourcen mit statischem Seitenquellcode. Wählen Sie einen synthetischen Test, klare Verantwortung und eine Stoppregel.',
  insuranceCards:['Konzept für Erstaufnahme und Triage von Schäden','Konzept zur Prüfung von Betrugssignalen','Konzept zur Underwriting-Prüfung','Konzept zum Vergleich von Policentexten','Konzept zur Prüfung von Regressmöglichkeiten','Konzept zur Prüfung des Angebots-Abschluss-Ablaufs'],
  governanceCards:['Seite zur regulatorischen Beobachtung','DevSecOps-Checklisten-Seite','Seite zur Compliance-Prüfung','Seite zur Kubernetes-Sicherheitsprüfung','Seite zur Prüfung technischer Schulden','Seite zur Code- und Dokumentenprüfung','Seite zum Lieferantenvergleich']
 }
};
const css = 'html{font-family:system-ui,sans-serif;color:#16283e;background:#f6f8fc}*{box-sizing:border-box}body{margin:0}main{max-width:1100px;margin:auto;padding:24px}nav{display:flex;flex-wrap:wrap;gap:14px;margin:18px 0}a{color:#154f9c;text-underline-offset:3px;overflow-wrap:anywhere}a:focus-visible{outline:3px solid #b25100;outline-offset:4px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:16px}.card,.notice{background:white;border:1px solid #bac8db;border-radius:12px;padding:18px;margin:16px 0}h1{font-size:clamp(1.7rem,5vw,2.7rem);line-height:1.2}p,li{line-height:1.65}code{overflow-wrap:anywhere}li{margin:8px 0}.skip{position:absolute;left:-9999px}.skip:focus{left:8px;top:8px;background:white;padding:12px}';
function esc(value) {return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function route(group, locale) {return '/apps/' + groups[group].file + suffix[locale] + '.html';}
function link(url, label, extra='') {assert(/^(https:\/\/|\/(?!\/))/.test(url), 'Unsafe destination');return `<a href="${esc(url)}"${extra}>${esc(label)}</a>`;}
function alternates(group) {return locales.map(l => `<link rel="alternate" hreflang="${l}" href="${ORIGIN}${route(group,l)}">`).join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${ORIGIN}${route(group,'en')}">`;}
function page(group, locale) {
 const c=copy[locale], g=groups[group], other=group==='insurance'?'governance':'insurance';
 const cards=g.repos.map((repo,i)=>`<article class="card"><h2>${esc(c[group+'Cards'][i])}</h2><p><code>${repo}</code></p><p>${esc(c[group+'Limit'])}</p><p>${link('https://github.com/Zion-support/'+repo,c.source)} · ${link('https://github.com/Zion-support/'+repo+'/tree/'+g.trees[i],c.evidence)}</p></article>`).join('\n');
 const langs=locales.map(l=>link(route(group,l),copy[l].language,` hreflang="${l}" lang="${l}"${l===locale?' aria-current="page"':''}`)).join(' ');
 return `<!doctype html>\n<html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${esc(c[group])} | Zion Tech Group</title><meta name="description" content="${esc(c.intro)}"><link rel="canonical" href="${ORIGIN}${route(group,locale)}">${alternates(group)}<style>${css}</style></head><body><a class="skip" href="#main">${esc(c.skip)}</a><main id="main" tabindex="-1" data-review-release="${RELEASE}" data-family="${group}"><p class="notice"><strong>${esc(c.review)}</strong></p><nav>${link(homes[locale],c.home)} ${link('/apps/',c.catalog)} ${link('/zion-app-network/',c.network)} ${link(discovery[locale],c.start)}</nav><nav aria-label="${esc(c.languages)}">${langs}</nav><h1>${esc(c[group])}</h1><p>${esc(c.intro)}</p><section class="notice"><h2>${esc(c.status)}</h2><p>${esc(c[group+'Limit'])}</p><p>${esc(c.privacy)}</p></section><div class="grid">${cards}</div><section><h2>${esc(c.stepsTitle)}</h2><ol>${c.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></section><section class="notice"><h2>${esc(c.start)}</h2><p>${esc(c.delivery)}</p>${link(discovery[locale],c.start)}</section><footer>${link(route(other,locale),c.other+': '+c[other])} · ${link('/apps/network.html',c.network)} · ${link('/apps/content-hub.html',c.catalog)}</footer></main></body></html>\n`;
}
function promotion(locale) {
 const c=copy[locale];
 return `<section lang="${locale}" class="notice" data-review-release="${RELEASE}"><h2>${esc(c.promo)}</h2><p>${esc(c.promoText)}</p><p>${link(route('insurance',locale),c.insurance)} · ${link(route('governance',locale),c.governance)} · ${link(discovery[locale],c.start)}</p><p>${esc(c.delivery)}</p></section>\n`;
}
function render() {
 const files={};
 for(const l of locales){for(const g of Object.keys(groups)){files[route(g,l).slice(1)]=page(g,l);}files['homepage-fragments/'+l+'.html']=promotion(l);}
 files['review-manifest.json']=JSON.stringify({release:RELEASE,status:'review-only-not-deployed',sourceOnlyAudit:true,productionTranslationInventoryVerified:false,locales,groups,homepageTargets:homes,files:Object.keys(files)},null,2)+'\n';
 return files;
}
function test() {
 const first=render(), second=render();assert.deepEqual(first,second,'Determinism');let checks=1;
 for(const l of locales){for(const g of Object.keys(groups)){
  const html=first[route(g,l).slice(1)], c=copy[l];
  for(const value of [`<html lang="${l}">`,c[g],c[g+'Limit'],c.delivery,c.privacy]){assert(html.includes(esc(value))||html.includes(value));checks++;}
  assert.equal((html.match(/rel="alternate"/g)||[]).length,6);checks++;
  assert.equal((html.match(/<article /g)||[]).length,groups[g].repos.length);checks++;
  assert.equal((html.match(/<li>/g)||[]).length,4);checks++;
  assert(html.includes(`href="${ORIGIN}${route(g,l)}"`));checks++;
  assert.equal((html.match(/aria-current="page"/g)||[]).length,1);checks++;
  assert(html.includes('noindex,nofollow'));checks++;
  assert(html.includes('<main id="main" tabindex="-1"'));checks++;
  assert(html.includes(`<a class="skip" href="#main">${esc(c.skip)}</a>`));checks++;
  assert(!/<(?:form|script|iframe)\b/i.test(html));checks++;
  assert(!/all live|pay back fastest|instant results by email|the moment you submit|always on/i.test(html));checks++;
  const other=g==='insurance'?'governance':'insurance';assert(html.includes(`href="${route(other,l)}"`));checks++;
  for(const repo of groups[g].repos){assert(html.includes('https://github.com/Zion-support/'+repo));checks++;}
 }
 assert(first['homepage-fragments/'+l+'.html'].includes(`lang="${l}"`));checks++;
 }
 for(const bad of ['//example.com','javascript:alert(1)','data:text/html,bad']){assert.throws(()=>link(bad,'bad'));checks++;}
 assert.equal(Object.keys(first).length,16);checks++;
 console.log(`PASS ${checks} structural, safety, copy and determinism assertions; 10 guides, 5 fragments, 1 manifest. Not browser/native-speaker/live QA.`);
 return checks;
}
function write(outDir) {
 const resolved=path.resolve(outDir);
 // Never target live source or artifact directories with this review generator.
 assert(!/(^|[\\/])(public|out|dist|build|docs)([\\/]|$)/i.test(resolved),'Production output directories forbidden');
 fs.mkdirSync(resolved,{recursive:true});
 for(const [name,content] of Object.entries(render())){const target=path.join(resolved,name);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content);}
 return resolved;
}
module.exports={render,test,write,page,promotion,route,groups,locales,copy,RELEASE};
if(require.main===module){if(process.argv.includes('--test')){test();}else{const arg=process.argv.indexOf('--outdir');const dir=arg>=0?process.argv[arg+1]:'review-output/insurance-governance-20261013';assert(dir,'Missing output directory');console.log('Review material written to '+write(dir));}}
