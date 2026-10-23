"use strict";
// Five-language review candidate. Only writes staged HTML; no runtime submissions.
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const out=process.argv[2]||"out",release="2026-10-14-showcase-five-languages-v1";
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const file=u=>path.join(out,u.slice(1)+(u.endsWith("/")?"index.html":""));
const read=u=>fs.readFileSync(file(u),"utf8");
const put=(u,s)=>{fs.mkdirSync(path.dirname(file(u)),{recursive:true});fs.writeFileSync(file(u),s);};
const original=fs.readFileSync("public/apps/network.html","utf8");
const projects=[...new Set([...original.matchAll(/href="(https:\/\/github\.com\/Zion-support\/[^"]+)"/g)].map(m=>m[1]))].sort();
const legacy=[...new Set([...original.matchAll(/href="(?:https:\/\/ziontechgroup\.com)?(\/[^"#?]*)"/g)].map(m=>m[1]))].filter(u=>u!=="/apps/network.html"&&u!=="/").sort();
const copy={
  "en": {
    "lang": "en",
    "route": "/apps/network.html",
    "home": "/en/",
    "disc": "/app-network-discovery.html",
    "title": "Zion App Network — choose, inspect, test",
    "intro": "Start with a workflow, compare related tools and inspect the source before planning a small, reversible pilot. A published page is not evidence of a working AI model or production readiness.",
    "nav": "Network navigation",
    "homeLabel": "Home",
    "hub": "Network hub",
    "discovery": "Free Discovery",
    "skip": "Skip to content",
    "tools": "Local tools: check the assumptions",
    "toolNote": "The linked pages provide browser-side calculations or checklist scoring. This release improves their discovery, not their implementations. Linked interfaces may use a different language.",
    "open": "Open page",
    "source": "Inspect source",
    "roi": "Estimate manual-work cost from monthly hours and hourly rate. This is a scenario, not measured savings or audited ROI.",
    "sla": "Explore downtime allowances from uptime and period inputs. Review any penalty assumptions against the written contract; this is not a quote.",
    "gov": "Count self-reported checklist selections. A score is not compliance certification or permission to deploy.",
    "ptInterface": "Tool interface: Portuguese",
    "enInterface": "Tool interface: English",
    "steps": "A practical path to your first test",
    "step1": "Name one process and its owner. Record a measured baseline and one success metric before claiming improvement.",
    "step2": "Use synthetic or explicitly authorized data. Review permissions, retention and human escalation before connecting systems.",
    "step3": "Set a reviewer, a reversible test window and a stop rule. Compare the observed result with the baseline before expanding.",
    "guide": "Read the network guide",
    "learning": "Compare related workflow paths",
    "projects": "Explore source projects",
    "projectNote": "Preserved repository links from the earlier showcase. Names describe project topics, not verified capabilities. Inspect implementation, license and deployment evidence individually; no fleet-wide functionality claim is made.",
    "routes": "Continue through the catalog",
    "routeNote": "Existing catalog, sector and service links are retained below. Destination language and implementation maturity vary.",
    "related": "Related route",
    "freeTitle": "Discovery is a starting point, not an implementation",
    "freeText": "The free questionnaire provides a report in the browser and recommended paths. It requests email delivery to the validated participant and commercial@ziontechgroup.com. Provider acceptance is not proof of inbox receipt; copy, download or use the manual option if needed. Hosting and email services may be unavailable. Paid implementation is optional and separate.",
    "limit": "Scope: this showcase and its promotion are prepared in five languages. This does not certify all network translations, implementations or capabilities.",
    "journeyTitle": "Choose a starting question",
    "journeyIntro": "These browser-side tools help document assumptions. They do not book an engineer, validate a contract or certify an AI deployment.",
    "journeys": [["How much downtime is acceptable?","Model an availability target before requesting onsite support; confirm escalation ownership and contractual SLA separately."],["Where does manual work accumulate?","Document monthly hours, labor cost and a measured baseline before describing any savings."],["What must be reviewed before an AI pilot?","Record access controls, human review and stop conditions. A checklist score is not a compliance certificate."]],
    "promoTitle": "From a question to an evidence-backed test",
    "promoText": "Compare local calculators, inspect project source and record a baseline, reviewer and stop rule. Explore the network without treating a catalog entry as a production-ready AI app.",
    "promoLink": "Explore the consolidated app showcase",
    "interfaceNote": "Tool interface: English",
    "toolTitles": [
      "ROI Calculator",
      "SLA Calculator",
      "AI Governance Checklist"
    ]
  },
  "pt": {
    "lang": "pt-BR",
    "route": "/pt/apps/network.html",
    "home": "/",
    "disc": "/pt/discovery/",
    "title": "Zion App Network — escolha, confira, teste",
    "intro": "Comece por um processo, compare ferramentas relacionadas e confira o código antes de planejar um piloto pequeno e reversível. Uma página publicada não comprova um modelo de IA funcionando nem prontidão para produção.",
    "nav": "Navegação da rede",
    "homeLabel": "Página inicial",
    "hub": "Central da rede",
    "discovery": "Discovery gratuito",
    "skip": "Pular para o conteúdo",
    "tools": "Ferramentas locais: confira as premissas",
    "toolNote": "As páginas vinculadas oferecem cálculos no navegador ou pontuação de checklist. Esta publicação melhora a descoberta das ferramentas, não suas implementações. As interfaces vinculadas podem usar outro idioma.",
    "open": "Abrir página",
    "source": "Conferir código",
    "roi": "Estime o custo do trabalho manual com horas mensais e valor por hora. É um cenário, não economia medida nem ROI auditado.",
    "sla": "Explore tolerâncias de indisponibilidade com meta de uptime e período. Confira premissas de penalidade no contrato escrito; não é uma cotação.",
    "gov": "Conte as seleções autodeclaradas do checklist. Uma pontuação não é certificação de conformidade nem autorização para implantar.",
    "ptInterface": "Interface da ferramenta: português",
    "enInterface": "Interface da ferramenta: inglês",
    "steps": "Um caminho prático para o primeiro teste",
    "step1": "Defina um processo e seu responsável. Registre uma linha de base medida e uma métrica de sucesso antes de declarar melhoria.",
    "step2": "Use dados sintéticos ou expressamente autorizados. Revise permissões, retenção e escalação humana antes de conectar sistemas.",
    "step3": "Defina revisor, janela de teste reversível e regra de parada. Compare o resultado observado com a linha de base antes de ampliar.",
    "guide": "Ler o guia da rede",
    "learning": "Comparar trilhas de processos relacionados",
    "projects": "Explore projetos pelo código-fonte",
    "projectNote": "Links de repositórios preservados da vitrine anterior. Os nomes descrevem temas de projetos, não capacidades verificadas. Confira implementação, licença e evidências de publicação individualmente; não há garantia de funcionamento de toda a rede.",
    "routes": "Continue pelo catálogo",
    "routeNote": "Os links existentes de catálogo, setores e serviços estão preservados abaixo. O idioma e a maturidade de implementação dos destinos variam.",
    "related": "Rota relacionada",
    "freeTitle": "Discovery é um ponto de partida, não uma implementação",
    "freeText": "O questionário gratuito oferece relatório no navegador e caminhos recomendados. Solicita entrega por e-mail ao participante validado e a commercial@ziontechgroup.com. Aceitação pelo provedor não comprova recebimento; copie, baixe ou use a opção manual se necessário. Hospedagem e e-mail podem ficar indisponíveis. Implementação paga é opcional e separada.",
    "limit": "Escopo: esta vitrine e sua promoção estão preparadas em cinco idiomas. Isso não certifica todas as traduções, implementações ou capacidades da rede.",
    "journeyTitle": "Escolha uma pergunta inicial",
    "journeyIntro": "Estas ferramentas no navegador ajudam a documentar hipóteses. Elas não reservam técnicos, validam contratos nem certificam uma implantação de IA.",
    "journeys": [["Qual é a indisponibilidade aceitável?","Modele a meta de disponibilidade antes de solicitar suporte presencial; confirme separadamente o responsável e o SLA contratual."],["Onde se acumulam tarefas manuais?","Registre horas mensais, custo da mão de obra e uma linha de base medida antes de anunciar economia."],["O que revisar antes de um piloto de IA?","Registre controles de acesso, revisão humana e condições de parada. Uma pontuação não equivale a certificação."]],
    "promoTitle": "Da pergunta a um teste com evidências",
    "promoText": "Compare calculadoras locais, confira o código dos projetos e registre linha de base, revisor e regra de parada. Explore a rede sem tratar um item do catálogo como app de IA pronto para produção.",
    "promoLink": "Explorar a vitrine consolidada de apps",
    "interfaceNote": "Interface da ferramenta: português",
    "toolTitles": [
      "Calculadora de ROI",
      "Calculadora de SLA",
      "Checklist de governança de IA"
    ]
  },
  "es": {
    "title": "Zion App Network — elige, inspecciona y prueba",
    "intro": "Empieza por un proceso, compara herramientas e inspecciona el código antes de planificar una prueba pequeña y reversible. Una página publicada no demuestra que exista un modelo de IA operativo ni que esté listo para producción.",
    "nav": "Navegación de la red",
    "homeLabel": "Inicio",
    "hub": "Centro de la red",
    "discovery": "Discovery gratuito",
    "skip": "Saltar al contenido",
    "tools": "Herramientas locales: revisa los supuestos",
    "toolNote": "Estas páginas ofrecen cálculos locales o listas de comprobación. Esta publicación mejora su descubrimiento, no sus implementaciones. Verifica el idioma y los límites de cada herramienta.",
    "open": "Abrir página",
    "source": "Inspeccionar código",
    "roi": "Estima el coste del trabajo manual a partir de horas mensuales y tarifa por hora. Es un escenario, no ahorro medido ni ROI auditado.",
    "sla": "Calcula la tolerancia de indisponibilidad según el periodo y el objetivo de disponibilidad. Contrasta las penalizaciones con el contrato escrito; no es una cotización.",
    "gov": "Cuenta las selecciones declaradas en una lista de comprobación. La puntuación no certifica cumplimiento ni autoriza despliegues.",
    "ptInterface": "Interfaz: portugués",
    "enInterface": "Interfaz: inglés",
    "steps": "Un camino práctico hacia tu primera prueba",
    "step1": "Define un proceso y su responsable. Registra una línea base medida y una métrica de éxito antes de afirmar mejoras.",
    "step2": "Usa datos sintéticos o expresamente autorizados. Revisa permisos, conservación y escalamiento humano antes de conectar sistemas.",
    "step3": "Establece un revisor, una ventana reversible y una regla de parada. Compara el resultado observado con la línea base antes de ampliar.",
    "guide": "Leer la guía de la red",
    "learning": "Comparar procesos relacionados",
    "projects": "Explorar proyectos por su código",
    "projectNote": "Se conservan los enlaces originales. Los nombres describen temas, no capacidades verificadas. Revisa por separado implementación, licencia y despliegue; no se garantiza el funcionamiento de toda la red.",
    "routes": "Continuar por el catálogo",
    "routeNote": "Se conservan los enlaces existentes a catálogos, sectores y servicios. El idioma y la madurez de cada destino varían.",
    "related": "Ruta relacionada",
    "freeTitle": "Discovery es un punto de partida, no una implementación",
    "freeText": "El cuestionario gratuito ofrece un informe en el navegador y rutas recomendadas. Solicita entrega por correo al participante validado y a commercial@ziontechgroup.com. La aceptación del proveedor no demuestra recepción: copia o descarga el informe o usa la opción manual. Alojamiento y correo pueden fallar. La implementación de pago es opcional y separada.",
    "limit": "Alcance: este escaparate y su promoción están preparados en cinco idiomas. Esto no certifica todas las traducciones, implementaciones ni capacidades de la red.",
    "journeyTitle": "Elige una pregunta para empezar",
    "journeyIntro": "Estas herramientas en el navegador ayudan a documentar supuestos. No reservan técnicos, validan contratos ni certifican una implementación de IA.",
    "journeys": [["¿Cuánta interrupción es aceptable?","Modela un objetivo de disponibilidad antes de solicitar soporte presencial; confirma por separado el responsable y el SLA contractual."],["¿Dónde se acumula el trabajo manual?","Registra horas mensuales, costo laboral y una línea base medida antes de anunciar ahorros."],["¿Qué revisar antes de una prueba de IA?","Documenta controles de acceso, revisión humana y condiciones de parada. La puntuación no es una certificación."]],
    "promoTitle": "De una pregunta a una prueba respaldada por evidencia",
    "promoText": "Compara calculadoras, inspecciona el código y registra línea base, revisor y regla de parada. Un elemento del catálogo no es una aplicación de IA lista para producción.",
    "promoLink": "Explorar el escaparate de aplicaciones",
    "lang": "es",
    "route": "/es/apps/network.html",
    "home": "/es/",
    "disc": "/es/discovery/",
    "interfaceNote": "Interfaz de la herramienta: español",
    "toolTitles": [
      "Calculadora de ROI",
      "Calculadora de SLA",
      "Lista de gobernanza de IA"
    ]
  },
  "fr": {
    "title": "Zion App Network — choisir, examiner et tester",
    "intro": "Partez d’un processus, comparez les outils et examinez le code avant un essai limité et réversible. Une page publiée ne prouve ni le fonctionnement d’un modèle d’IA ni son aptitude à la production.",
    "nav": "Navigation du réseau",
    "homeLabel": "Accueil",
    "hub": "Centre du réseau",
    "discovery": "Discovery gratuit",
    "skip": "Aller au contenu",
    "tools": "Outils locaux : vérifier les hypothèses",
    "toolNote": "Ces pages proposent des calculs locaux ou des listes de contrôle. Cette publication améliore leur découverte, pas leur implémentation. Vérifiez la langue et les limites de chaque outil.",
    "open": "Ouvrir la page",
    "source": "Examiner le code",
    "roi": "Estimez le coût du travail manuel à partir des heures mensuelles et du taux horaire. Il s’agit d’un scénario, pas d’économies mesurées ni d’un ROI audité.",
    "sla": "Calculez la tolérance d’indisponibilité selon la période et la disponibilité cible. Vérifiez les pénalités dans le contrat écrit ; ce n’est pas un devis.",
    "gov": "Comptez les choix autodéclarés dans une liste de contrôle. Le score ne certifie pas la conformité et n’autorise aucun déploiement.",
    "ptInterface": "Interface : portugais",
    "enInterface": "Interface : anglais",
    "steps": "Un parcours pratique vers votre premier essai",
    "step1": "Définissez un processus et son responsable. Consignez une référence mesurée et un indicateur de réussite avant d’annoncer une amélioration.",
    "step2": "Utilisez des données synthétiques ou expressément autorisées. Vérifiez les accès, la conservation et l’escalade humaine avant de connecter des systèmes.",
    "step3": "Prévoyez un réviseur, une période réversible et une règle d’arrêt. Comparez le résultat à la référence avant d’élargir l’essai.",
    "guide": "Lire le guide du réseau",
    "learning": "Comparer les processus connexes",
    "projects": "Explorer le code des projets",
    "projectNote": "Les liens d’origine sont conservés. Les noms désignent des thèmes, pas des capacités vérifiées. Examinez séparément implémentation, licence et déploiement ; aucune garantie de fonctionnement global n’est donnée.",
    "routes": "Continuer dans le catalogue",
    "routeNote": "Les liens existants vers catalogues, secteurs et services sont conservés. La langue et la maturité des destinations varient.",
    "related": "Parcours connexe",
    "freeTitle": "Discovery est un point de départ, pas une implémentation",
    "freeText": "Le questionnaire gratuit fournit un rapport dans le navigateur et des parcours recommandés. Il demande l’envoi au participant validé et à commercial@ziontechgroup.com. L’acceptation du fournisseur ne prouve pas la réception : copiez ou téléchargez le rapport ou utilisez l’option manuelle. Hébergement et messagerie peuvent être indisponibles. L’implémentation payante reste facultative et distincte.",
    "limit": "Périmètre : cette vitrine et sa promotion sont préparées en cinq langues. Cela ne certifie pas toutes les traductions, implémentations ni capacités du réseau.",
    "journeyTitle": "Choisissez une première question",
    "journeyIntro": "Ces outils exécutés dans le navigateur aident à documenter les hypothèses. Ils ne réservent pas de technicien, ne valident pas de contrat et ne certifient pas un déploiement d’IA.",
    "journeys": [["Quelle interruption est acceptable ?","Modélisez un objectif de disponibilité avant de demander une intervention sur site ; confirmez séparément le responsable et le SLA contractuel."],["Où s’accumule le travail manuel ?","Consignez les heures mensuelles, le coût du travail et une référence mesurée avant d’annoncer des économies."],["Que vérifier avant un essai d’IA ?","Documentez les accès, la revue humaine et les conditions d’arrêt. Un score ne constitue pas une certification."]],
    "promoTitle": "D’une question à un essai fondé sur des preuves",
    "promoText": "Comparez les calculateurs, examinez le code et consignez référence, réviseur et règle d’arrêt. Une entrée du catalogue n’est pas une application d’IA prête pour la production.",
    "promoLink": "Explorer la vitrine des applications",
    "lang": "fr",
    "route": "/fr/apps/network.html",
    "home": "/fr/",
    "disc": "/fr/discovery/",
    "interfaceNote": "Interface de l’outil : français",
    "toolTitles": [
      "Calculateur de ROI",
      "Calculateur de SLA",
      "Liste de gouvernance de l’IA"
    ]
  },
  "de": {
    "title": "Zion App Network — auswählen, prüfen und testen",
    "intro": "Beginnen Sie mit einem Prozess, vergleichen Sie Werkzeuge und prüfen Sie den Quellcode vor einem kleinen, reversiblen Pilotversuch. Eine veröffentlichte Seite belegt weder ein funktionierendes KI-Modell noch Produktionsreife.",
    "nav": "Netzwerknavigation",
    "homeLabel": "Startseite",
    "hub": "Netzwerkzentrale",
    "discovery": "Kostenlose Discovery",
    "skip": "Zum Inhalt springen",
    "tools": "Lokale Werkzeuge: Annahmen prüfen",
    "toolNote": "Diese Seiten bieten lokale Berechnungen oder Checklisten. Diese Veröffentlichung verbessert ihre Auffindbarkeit, nicht ihre Implementierung. Prüfen Sie Sprache und Grenzen jedes Werkzeugs.",
    "open": "Seite öffnen",
    "source": "Quellcode prüfen",
    "roi": "Schätzen Sie manuelle Arbeitskosten anhand monatlicher Stunden und Stundensätze. Dies ist ein Szenario, keine gemessene Einsparung und kein geprüfter ROI.",
    "sla": "Berechnen Sie zulässige Ausfallzeiten anhand Zeitraum und Verfügbarkeitsziel. Prüfen Sie Vertragsstrafen im schriftlichen Vertrag; dies ist kein Angebot.",
    "gov": "Zählen Sie selbst angegebene Checklisten-Auswahlen. Der Wert ist keine Konformitätsbescheinigung und keine Freigabe zur Bereitstellung.",
    "ptInterface": "Oberfläche: Portugiesisch",
    "enInterface": "Oberfläche: Englisch",
    "steps": "Ein praktischer Weg zum ersten Pilotversuch",
    "step1": "Definieren Sie einen Prozess und seine verantwortliche Person. Dokumentieren Sie einen gemessenen Ausgangswert und ein Erfolgskriterium, bevor Sie Verbesserungen behaupten.",
    "step2": "Verwenden Sie synthetische oder ausdrücklich freigegebene Daten. Prüfen Sie Zugriffe, Aufbewahrung und menschliche Eskalation, bevor Sie Systeme verbinden.",
    "step3": "Legen Sie Prüfer, reversibles Testfenster und Abbruchregel fest. Vergleichen Sie Ergebnisse mit dem Ausgangswert, bevor Sie den Versuch erweitern.",
    "guide": "Netzwerkleitfaden lesen",
    "learning": "Verwandte Prozesse vergleichen",
    "projects": "Projektquellcode erkunden",
    "projectNote": "Die ursprünglichen Links bleiben erhalten. Namen beschreiben Themen, keine geprüften Fähigkeiten. Prüfen Sie Implementierung, Lizenz und Bereitstellung einzeln; es gibt keine Funktionsgarantie für das gesamte Netzwerk.",
    "routes": "Im Katalog fortfahren",
    "routeNote": "Vorhandene Katalog-, Branchen- und Dienstleistungslinks bleiben erhalten. Sprache und Reifegrad der Ziele unterscheiden sich.",
    "related": "Verwandter Pfad",
    "freeTitle": "Discovery ist ein Ausgangspunkt, keine Implementierung",
    "freeText": "Der kostenlose Fragebogen erstellt einen Bericht im Browser und empfiehlt nächste Schritte. Er fordert den E-Mail-Versand an den validierten Teilnehmer und commercial@ziontechgroup.com an. Anbieterannahme belegt keinen Posteingang: kopieren oder laden Sie den Bericht herunter oder nutzen Sie die manuelle Option. Hosting und E-Mail können ausfallen. Bezahlte Implementierung ist optional und separat.",
    "limit": "Umfang: Diese Übersicht und ihre Werbung sind in fünf Sprachen vorbereitet. Das bestätigt nicht sämtliche Übersetzungen, Implementierungen oder Fähigkeiten des Netzwerks.",
    "journeyTitle": "Wählen Sie eine Ausgangsfrage",
    "journeyIntro": "Diese Browser-Werkzeuge helfen, Annahmen zu dokumentieren. Sie buchen keine Techniker, prüfen keine Verträge und zertifizieren keine KI-Bereitstellung.",
    "journeys": [["Wie viel Ausfallzeit ist vertretbar?","Modellieren Sie ein Verfügbarkeitsziel, bevor Sie Vor-Ort-Support anfragen. Zuständigkeit und vertragliches SLA sind separat zu prüfen."],["Wo entsteht manuelle Arbeit?","Erfassen Sie monatliche Stunden, Arbeitskosten und einen gemessenen Ausgangswert, bevor Sie Einsparungen behaupten."],["Was ist vor einem KI-Pilotprojekt zu prüfen?","Dokumentieren Sie Zugriffskontrollen, menschliche Prüfung und Abbruchregeln. Ein Checklistenwert ist kein Zertifikat."]],
    "promoTitle": "Von einer Frage zu einem evidenzbasierten Pilotversuch",
    "promoText": "Vergleichen Sie Rechner, prüfen Sie Quellcode und dokumentieren Sie Ausgangswert, Prüfer und Abbruchregel. Ein Katalogeintrag ist keine produktionsreife KI-Anwendung.",
    "promoLink": "Anwendungsübersicht erkunden",
    "lang": "de",
    "route": "/de/apps/network.html",
    "home": "/de/",
    "disc": "/de/discovery/",
    "interfaceNote": "Werkzeugoberfläche: Deutsch",
    "toolTitles": [
      "ROI-Rechner",
      "SLA-Rechner",
      "Checkliste zur KI-Governance"
    ]
  }
};
const items=[["roi-calc","ROI Calculator","roi","ptInterface"],["sla-calculator","SLA Calculator","sla","enInterface"],["ai-governance-checklist","AI Governance Checklist","gov","enInterface"]];
const snapshots=[];
for(const [locale,c] of Object.entries(copy)){
 // A "free" CTA must lead to a real same-language questionnaire, not the paid checkout.
 const questionnaire=read(c.disc);
 assert(/<form\b/i.test(questionnaire),"Missing free Discovery questionnaire "+c.disc);
 assert(!/(?:buy\.stripe\.com|Discovery\s*\$99|R\$99|Pay\s*\$99)/i.test(questionnaire),"Paid Discovery cannot be labeled free "+c.disc);
 const questionnaireLang=(questionnaire.match(/<html[^>]*\blang=["']([^"']+)/i)||[])[1];
 assert(questionnaireLang===c.lang,"Discovery locale mismatch "+c.disc);
 const p=locale==="en"?"/":"/"+locale+"/",nav=`<nav aria-label="${esc(c.nav)}"><a href="${c.home}">${esc(c.homeLabel)}</a> · <a href="/zion-app-network/">${esc(c.hub)}</a> · <a href="${c.disc}">${esc(c.discovery)}</a> · ${Object.entries(copy).map(([key,target])=>`<a href="${target.route}" lang="${target.lang}"${key===locale?' aria-current="page"':""}>${esc(({en:"English",pt:"Português",es:"Español",fr:"Français",de:"Deutsch"})[key])}</a>`).join(" · ")}</nav>`;
 const cards=items.map(([slug,title,desc],index)=>{const toolRoute=p+slug+"/";assert(fs.existsSync(file(toolRoute)),"Missing localized tool "+toolRoute);const toolHTML=read(toolRoute),toolLang=(toolHTML.match(/<html[^>]*lang=["']([^"']+)/i)||[])[1];assert(toolLang===c.lang,"Tool locale mismatch "+toolRoute);const interfaceKey=toolLang.startsWith("pt")?"ptInterface":"enInterface";return `<article class="card"><h3>${esc(c.toolTitles[index])}</h3><p>${esc(c[desc])}</p><p class="muted">${esc(c.interfaceNote)}</p><div class="actions"><a class="btn" href="${toolRoute}">${esc(c.open)}</a><a href="https://github.com/Zion-support/zion-support.github.io/blob/main/scripts/render-operational-tools.cjs">${esc(c.source)}</a></div></article>`;}).join("");
 const journeySlugs=["sla-calculator","roi-calc","ai-governance-checklist"];
 assert(c.journeys.length===journeySlugs.length,"Exactly three translated journeys required "+locale);
 const journeys=c.journeys.map(([title,description],index)=>`<article class="card" data-journey-card="${index+1}"><h3>${esc(title)}</h3><p>${esc(description)}</p><a href="${p+journeySlugs[index]+"/"}">${esc(c.toolTitles[[1,0,2][index]])}</a></article>`).join("");
 const repoLinks=projects.map(u=>`<li><a href="${esc(u)}">${esc(u.split("/").pop().replaceAll("-"," "))}</a></li>`).join("");
 const routes=legacy.map(u=>`<li><a href="${esc(u)}">${esc(c.related)}: ${esc(u)}</a></li>`).join("");
 const html=`<!DOCTYPE html><html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(c.title)} | Zion Tech Group</title><meta name="description" content="${esc(c.intro)}"><link rel="canonical" href="https://ziontechgroup.com${c.route}">${Object.values(copy).map(target=>`<link rel="alternate" hreflang="${target.lang}" href="https://ziontechgroup.com${target.route}">`).join("")}<link rel="alternate" hreflang="x-default" href="https://ziontechgroup.com/apps/network.html"><link rel="stylesheet" href="/assets/css/site.css"><style>nav{display:flex;gap:.8rem;flex-wrap:wrap;padding:1rem 0}a:focus-visible{outline:3px solid #38bdf8;outline-offset:3px}.source-list{columns:2;column-width:18rem;overflow-wrap:anywhere}.source-list li{break-inside:avoid;margin:.6rem 0}.scope{border-left:4px solid #38bdf8;padding:1rem}</style></head><body data-showcase-release="${release}"><a class="skip" href="#main">${esc(c.skip)}</a><header class="wrap">${nav}</header><main id="main" class="wrap"><section class="section"><p class="eyebrow">Zion App Network</p><h1>${esc(c.title)}</h1><p class="lead">${esc(c.intro)}</p><div class="actions"><a class="btn" href="${c.disc}">${esc(c.discovery)}</a><a class="btn alt" href="${p}apps/network-learning-paths.html">${esc(c.guide)}</a></div></section><section class="section" aria-labelledby="tools-title"><h2 id="tools-title">${esc(c.tools)}</h2><p>${esc(c.toolNote)}</p><div class="grid">${cards}</div></section><section class="section" aria-labelledby="test-title"><h2 id="test-title">${esc(c.steps)}</h2><ol><li>${esc(c.step1)}</li><li>${esc(c.step2)}</li><li>${esc(c.step3)}</li></ol><p><a href="${p}apps/network-learning-paths.html">${esc(c.learning)}</a></p></section><section class="section" aria-labelledby="journeys-title"><h2 id="journeys-title">${esc(c.journeyTitle)}</h2><p>${esc(c.journeyIntro)}</p><div class="grid">${journeys}</div></section><section class="section"><h2>${esc(c.projects)}</h2><p>${esc(c.projectNote)}</p><ul class="source-list">${repoLinks}</ul></section><section class="section"><h2>${esc(c.routes)}</h2><p>${esc(c.routeNote)}</p><details><summary>${esc(c.routes)}</summary><ul class="source-list">${routes}</ul></details></section><section class="section"><h2>${esc(c.freeTitle)}</h2><p>${esc(c.freeText)}</p><a class="btn" href="${c.disc}">${esc(c.discovery)}</a></section><aside class="scope">${esc(c.limit)}</aside></main><footer class="wrap">${nav}<p>Zion Tech Group · <a href="https://github.com/Zion-support/zion-support.github.io/blob/main/scripts/render-network-showcase-release.cjs">${esc(c.source)}</a></p></footer></body></html>`;
 assert(!/<form\b|<script\b/i.test(html),"Showcase must remain read-only");
 assert(!/\d+\+ (?:free |live )?(?:apps|AI micro-apps)/i.test(html),"Unsupported app count");
 assert((html.match(/<h1\b/g)||[]).length===1,"One H1 required");
 put(c.route,html);
 const home=file(c.home);let homeHtml=fs.readFileSync(home,"utf8");
 const forms=homeHtml.match(/<form\b[\s\S]*?<\/form>/gi)||[],scripts=homeHtml.match(/<script\b[\s\S]*?<\/script>/gi)||[];
 const promoTools=items.map(([slug],index)=>`<li><a href="${p+slug+"/"}">${esc(c.toolTitles[index])}</a></li>`).join("");
 const promo=`<article class="card" data-showcase-promotion="${release}"><h3>${esc(c.promoTitle)}</h3><p>${esc(c.promoText)}</p><p><a href="${c.route}">${esc(c.promoLink)}</a></p><ul>${promoTools}</ul></article>`;
 homeHtml=homeHtml.replace(/<article class="card" data-showcase-promotion="[^"]+">[\s\S]*?<\/article>/g,"");
 const start="<!--zion-network-home:start-->",endMarker="<!--zion-network-home:end-->";
 const hasStart=homeHtml.includes(start),hasEnd=homeHtml.includes(endMarker);
 assert(hasStart===hasEnd,"Unbalanced existing network home markers");
 if(hasStart){
  const end="</div></section>"+endMarker;
  assert(homeHtml.split(end).length===2,"Expected one existing network home section");
  homeHtml=homeHtml.replace(end,promo+end);
 }else{
  assert(/id=["']app-paths-home["']/i.test(homeHtml),"Missing app paths homepage anchor");
  const anchor=locale==="pt"?"<footer":"</main>";
  assert(homeHtml.split(anchor).length===2,"Expected one homepage insertion anchor "+locale);
  homeHtml=homeHtml.replace(anchor,promo+anchor);
 }
 assert((homeHtml.match(/data-showcase-promotion=/g)||[]).length===1,"Exactly one owned showcase promotion");
 fs.writeFileSync(home,homeHtml);
 assert.deepEqual(homeHtml.match(/<form\b[\s\S]*?<\/form>/gi)||[],forms,"Homepage form changed");
 assert.deepEqual(homeHtml.match(/<script\b[\s\S]*?<\/script>/gi)||[],scripts,"Homepage script changed");
 assert(homeHtml.includes('href="'+c.route+'"'),"Missing locale backlink");
 for(const u of [c.disc,p+"apps/network-learning-paths.html","/assets/css/site.css"]){assert(fs.existsSync(file(u)),"Missing release dependency "+u);}
 snapshots.push({locale:c.lang,route:c.route,homepage:c.home,formCount:forms.length,sourceProjects:projects.length});
}
put("/apps/network-showcase-release.json",JSON.stringify({release,scope:"Five-language showcase and existing homepage promotion; not whole-network certification",generatedChecks:snapshots},null,2)+"\n");
console.log("PASS "+release+": five-language showcase, free questionnaire routes, reciprocal homepage links, preserved forms/scripts and source links.");
