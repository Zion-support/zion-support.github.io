/**
 * Zion — Managed AI Operations service pages (5 languages).
 *
 * Emits one service page per language into public/, following the same shell
 * as the Apps Network pages: hero, included, tiers, KPIs, CTA, footer language
 * switcher; canonical + hreflang + x-default + JSON-LD Service.
 *
 *   node scripts/generate-managed-ai-ops.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const SITE = 'https://ziontechgroup.com';

const LANGS = [
  { code: 'en', prefix: '', htmlLang: 'en', name: 'English' },
  { code: 'pt', prefix: 'pt/', htmlLang: 'pt-BR', name: 'Português (BR)' },
  { code: 'es', prefix: 'es/', htmlLang: 'es', name: 'Español' },
  { code: 'fr', prefix: 'fr/', htmlLang: 'fr', name: 'Français' },
  { code: 'de', prefix: 'de/', htmlLang: 'de', name: 'Deutsch' },
];

const COPY = {
  en: {
    name: 'Managed AI Operations',
    tagline: 'We run your production AI agents — monitoring, evals, drift and cost — so they keep working after launch.',
    description:
      'A production AI agent is not a project, it is an operating responsibility. Zion Managed AI Operations takes over the day-to-day of your agent systems: monitoring against the original test set, evaluation refreshes when a model vendor changes behaviour, prompt and model versioning, drift detection, cost and token control, and incident response with severity-based escalation. Reporting is mapped to KPIs you already track — resolution rate, uptime, accuracy and cost per agent action — so you can see what you are paying for.',
    includedTitle: 'What is included',
    included: [
      'Continuous monitoring of every production agent against its own test set',
      'Evaluation refresh when a model vendor changes behaviour or deprecates a version',
      'Prompt, model and dependency versioning with rollback',
      'Drift and accuracy review on a fixed cadence, with a written report',
      'Token and inference cost control, including cost per agent action',
      'Incident response with severity levels, escalation path and post-incident review',
    ],
    tiersTitle: 'Retention tiers',
    tiersNote: 'Priced per system under management, not per seat. Scope, coverage hours and SLAs are written into the contract.',
    tiers: [
      { name: 'Light', price: 'USD 3,000 / month', systems: '1 production system', points: ['Business-hours coverage with 24/7 alerting', 'Monthly accuracy and drift review', 'Incident response for one agent'] },
      { name: 'Standard', price: 'USD 8,000 / month', systems: 'Up to 3 production systems', points: ['Everything in Light, plus', 'Monthly improvements and a roadmap', 'Response targets per severity level'] },
      { name: 'Heavy', price: 'USD 20,000 / month', systems: '5+ systems or an agent platform', points: ['Everything in Standard, plus', '24/7 monitoring with on-call response', 'Quarterly strategy and full operating partnership'] },
    ],
    kpiTitle: 'Reported as KPIs, not activity',
    kpis: ['Resolution rate', 'Uptime', 'Accuracy', 'Cost per agent action'],
    ctaTitle: 'Start with a Discovery, then scope the operations',
    ctaBody:
      'A Discovery maps which of your agent workflows are ready for managed operations and what they would cost to run. One process, one report, one 30-minute session.',
    ctaPrimary: 'Start Free Discovery',
    relatedTitle: 'Paired with these Apps Network tools',
    related: [
      { slug: 'token-cost', name: 'Token Cost Calculator', href: '/token-cost/' },
      { slug: 'model-observatory', name: 'Model Observatory', href: '/model-observatory/' },
      { slug: 'change-risk', name: 'Change Risk Score', href: '/change-risk/' },
      { slug: 'ai-ticket-sentinel', name: 'AI Ticket Sentinel', href: '/ai-ticket-sentinel/' },
      { slug: 'ops-runbook-ai', name: 'Ops Runbook AI', href: '/ops-runbook-ai/' },
      { slug: 'ai-governance-checklist', name: 'AI Governance Checklist', href: '/ai-governance-checklist/' },
    ],
    footer: 'Zion Tech Group · Delaware, USA',
  },
  pt: {
    name: 'Managed AI Operations',
    tagline: 'Operamos os seus agentes de IA em produção — monitorização, evaluções, drift e custo — para continuarem a funcionar após o lançamento.',
    description:
      'Um agente de IA em produção não é um projeto, é uma responsabilidade operacional. O Zion Managed AI Operations assume o dia a dia dos seus sistemas de agentes: monitorização contra o conjunto de testes original, renovação das evaluções quando um fornecedor de modelo altera comportamento, versionamento de prompts e modelos, deteção de drift, controlo de custo e tokens, e resposta a incidentes com escalonamento por severidade. Os relatórios são mapeados para KPIs que já acompanha — taxa de resolução, uptime, precisão e custo por ação de agente — para que veja exatamente o que está a pagar.',
    includedTitle: 'O que está incluído',
    included: [
      'Monitorização contínua de cada agente em produção contra o seu conjunto de testes',
      'Renovação das evaluções quando um fornecedor altera ou descontinua uma versão',
      'Versionamento de prompts, modelos e dependências com rollback',
      'Revisão de drift e precisão em cadência fixa, com relatório escrito',
      'Controlo de custo de tokens e inferência, incluindo custo por ação de agente',
      'Resposta a incidentes com níveis de severidade, escalonamento e revisão pós-incidente',
    ],
    tiersTitle: 'Níveis de retabilidade',
    tiersNote: 'Preço por sistema gerido, não por assento. Abrangência, horas de cobertura e SLAs ficam escritos no contrato.',
    tiers: [
      { name: 'Light', price: 'USD 3.000 / mês', systems: '1 sistema em produção', points: ['Cobertura em horário comercial com alertas 24/7', 'Revisão mensal de precisão e drift', 'Resposta a incidentes para um agente'] },
      { name: 'Standard', price: 'USD 8.000 / mês', systems: 'Até 3 sistemas em produção', points: ['Tudo do Light, mais', 'Melhorias mensais e um roadmap', 'Metas de resposta por nível de severidade'] },
      { name: 'Heavy', price: 'USD 20.000 / mês', systems: '5+ sistemas ou uma plataforma de agentes', points: ['Tudo do Standard, mais', 'Monitorização 24/7 com resposta de sobreaviso', 'Estratégia trimestral e parceria operacional completa'] },
    ],
    kpiTitle: 'Reportado como KPI, não como atividade',
    kpis: ['Taxa de resolução', 'Uptime', 'Precisão', 'Custo por ação de agente'],
    ctaTitle: 'Comece com uma Discovery e depois escope a operação',
    ctaBody:
      'Uma Discovery mapeia quais dos seus fluxos de agentes estão prontos para operação gerida e quanto custariam para correr. Um processo, um relatório, uma sessão de 30 minutos.',
    ctaPrimary: 'Começar Discovery gratuita',
    relatedTitle: 'Pares úteis na Apps Network',
    related: [
      { slug: 'token-cost', name: 'Token Cost Calculator', href: '/pt/token-cost/' },
      { slug: 'model-observatory', name: 'Model Observatory', href: '/model-observatory/' },
      { slug: 'change-risk', name: 'Escore de Risco de Mudança', href: '/pt/change-risk/' },
      { slug: 'ai-ticket-sentinel', name: 'AI Ticket Sentinel', href: '/pt/ai-ticket-sentinel/' },
      { slug: 'ops-runbook-ai', name: 'Ops Runbook AI', href: '/ops-runbook-ai/' },
      { slug: 'ai-governance-checklist', name: 'AI Governance Checklist', href: '/pt/ai-governance-checklist/' },
    ],
    footer: 'Zion Tech Group · Delaware, EUA',
  },
  es: {
    name: 'Managed AI Operations',
    tagline: 'Operamos sus agentes de IA en producción — monitorización, evaluaciones, drift y coste — para que sigan funcionando tras el lanzamiento.',
    description:
      'Un agente de IA en producción no es un proyecto, es una responsabilidad operativa. Zion Managed AI Operations asume el día a día de sus sistemas de agentes: monitorización frente al conjunto de pruebas original, renovación de evaluaciones cuando un proveedor cambia el comportamiento de un modelo, versionado de prompts y modelos, detección de drift, control de costes y tokens, y respuesta a incidentes con escalado por severidad. Los informes se vinculan a KPIs que ya sigue — tasa de resolución, uptime, precisión y coste por acción de agente — para que vea exactamente qué paga.',
    includedTitle: 'Qué incluye',
    included: [
      'Monitorización continua de cada agente en producción frente a su conjunto de pruebas',
      'Renovación de evaluaciones cuando un proveedor cambia o retira una versión',
      'Versionado de prompts, modelos y dependencias con rollback',
      'Revisión de drift y precisión con cadencia fija e informe escrito',
      'Control de costes de tokens e inferencia, incluido el coste por acción de agente',
      'Respuesta a incidentes con niveles de severidad, escalado y revisión post-incidente',
    ],
    tiersTitle: 'Niveles de retención',
    tiersNote: 'Precio por sistema gestionado, no por asiento. Alcance, horas de cobertura y SLAs se recogen por escrito en el contrato.',
    tiers: [
      { name: 'Light', price: 'USD 3.000 / mes', systems: '1 sistema en producción', points: ['Cobertura en horario comercial con alertas 24/7', 'Revisión mensual de precisión y drift', 'Respuesta a incidentes para un agente'] },
      { name: 'Standard', price: 'USD 8.000 / mes', systems: 'Hasta 3 sistemas en producción', points: ['Todo lo de Light, más', 'Mejoras mensuales y una hoja de ruta', 'Objetivos de respuesta por severidad'] },
      { name: 'Heavy', price: 'USD 20.000 / mes', systems: '5+ sistemas o una plataforma de agentes', points: ['Todo lo de Standard, más', 'Monitorización 24/7 con respuesta de guardia', 'Estrategia trimestral y asociación operativa completa'] },
    ],
    kpiTitle: 'Reportado como KPI, no como actividad',
    kpis: ['Tasa de resolución', 'Uptime', 'Precisión', 'Coste por acción de agente'],
    ctaTitle: 'Empiece con un Discovery y luego defina la operación',
    ctaBody:
      'Un Discovery identifica qué flujos de agentes están listos para operación gestionada y cuánto costaría ejecutarlos. Un proceso, un informe, una sesión de 30 minutos.',
    ctaPrimary: 'Empezar Discovery gratuito',
    relatedTitle: 'Herramientas de la Apps Network',
    related: [
      { slug: 'token-cost', name: 'Token Cost Calculator', href: '/es/token-cost/' },
      { slug: 'model-observatory', name: 'Model Observatory', href: '/model-observatory/' },
      { slug: 'change-risk', name: 'Puntuación de Riesgo de Cambio', href: '/es/change-risk/' },
      { slug: 'ai-ticket-sentinel', name: 'AI Ticket Sentinel', href: '/es/ai-ticket-sentinel/' },
      { slug: 'ops-runbook-ai', name: 'Ops Runbook AI', href: '/ops-runbook-ai/' },
      { slug: 'ai-governance-checklist', name: 'AI Governance Checklist', href: '/es/ai-governance-checklist/' },
    ],
    footer: 'Zion Tech Group · Delaware, EE. UU.',
  },
  fr: {
    name: 'Managed AI Operations',
    tagline: 'Nous exploitons vos agents IA en production — supervision, évaluations, drift et coût — pour qu’ils continuent de fonctionner après le lancement.',
    description:
      'Un agent IA en production n’est pas un projet, c’est une responsabilité opérationnelle. Zion Managed AI Operations prend en charge le quotidien de vos systèmes d’agents : supervision sur le jeu de tests d’origine, renouvellement des évaluations lorsqu’un fournisseur modifie le comportement d’un modèle, versionnement des prompts et des modèles, détection de drift, contrôle des coûts et des jetons, et réponse aux incidents avec escalade par sévérité. Les rapports sont rattachés à des KPIs que vous suivez déjà — taux de résolution, disponibilité, précision et coût par action d’agent — pour que vous voyiez exactement ce que vous payez.',
    includedTitle: 'Ce qui est inclus',
    included: [
      'Supervision continue de chaque agent en production sur son jeu de tests',
      'Renouvellement des évaluations lorsqu’un fournisseur modifie ou retire une version',
      'Versionnement des prompts, modèles et dépendances avec rollback',
      'Revue de drift et de précision à cadence fixe, avec rapport écrit',
      'Contrôle des coûts de jetons et d’inférence, coût par action d’agent inclus',
      'Réponse aux incidents avec niveaux de sévérité, escalade et revue post-incident',
    ],
    tiersTitle: 'Niveaux de rétention',
    tiersNote: 'Tarif par système géré, pas par siège. Périmètre, heures de couverture et SLA sont écrits au contrat.',
    tiers: [
      { name: 'Light', price: 'USD 3 000 / mois', systems: '1 système en production', points: ['Couverture aux heures ouvrables avec alertes 24/7', 'Revue mensuelle de précision et de drift', 'Réponse aux incidents pour un agent'] },
      { name: 'Standard', price: 'USD 8 000 / mois', systems: 'Jusqu’à 3 systèmes en production', points: ['Tout le Light, plus', 'Améliorations mensuelles et feuille de route', 'Objectifs de réponse par sévérité'] },
      { name: 'Heavy', price: 'USD 20 000 / mois', systems: '5+ systèmes ou une plateforme d’agents', points: ['Tout le Standard, plus', 'Supervision 24/7 avec réponse d’astreinte', 'Stratégie trimestrielle et partenariat opérationnel complet'] },
    ],
    kpiTitle: 'Reporté en KPIs, pas en activité',
    kpis: ['Taux de résolution', 'Disponibilité', 'Précision', 'Coût par action d’agent'],
    ctaTitle: 'Commencez par un Discovery, puis cadrez l’exploitation',
    ctaBody:
      'Un Discovery identifie quels flux d’agents sont prêts pour une exploitation managée et ce que leur exécution coûterait. Un processus, un rapport, une session de 30 minutes.',
    ctaPrimary: 'Démarrer le Discovery gratuit',
    relatedTitle: 'Outils Apps Network associés',
    related: [
      { slug: 'token-cost', name: 'Token Cost Calculator', href: '/fr/token-cost/' },
      { slug: 'model-observatory', name: 'Model Observatory', href: '/model-observatory/' },
      { slug: 'change-risk', name: 'Score de Risque de Changement', href: '/fr/change-risk/' },
      { slug: 'ai-ticket-sentinel', name: 'AI Ticket Sentinel', href: '/fr/ai-ticket-sentinel/' },
      { slug: 'ops-runbook-ai', name: 'Ops Runbook AI', href: '/ops-runbook-ai/' },
      { slug: 'ai-governance-checklist', name: 'AI Governance Checklist', href: '/fr/ai-governance-checklist/' },
    ],
    footer: 'Zion Tech Group · Delaware, États-Unis',
  },
  de: {
    name: 'Managed AI Operations',
    tagline: 'Wir betreiben Ihre KI-Agenten in Produktion — Monitoring, Evals, Drift und Kosten — damit sie nach dem Launch weiterlaufen.',
    description:
      'Ein KI-Agent in Produktion ist kein Projekt, sondern eine operative Verantwortung. Zion Managed AI Operations übernimmt den Betrieb Ihrer Agentensysteme: Monitoring gegen den ursprünglichen Test-Set, Eval-Aktualisierung bei Verhaltensänderungen eines Modellanbieters, Versionierung von Prompts und Modellen, Drift-Erkennung, Kosten- und Token-Steuerung sowie Incident-Response mit Eskalation nach Schweregrad. Berichte werden auf KPIs gemappt, die Sie bereits verfolgen — Auflösungsrate, Uptime, Genauigkeit und Kosten pro Agenten-Aktion — damit Sie genau sehen, wofür Sie zahlen.',
    includedTitle: 'Was enthalten ist',
    included: [
      'Kontinuierliches Monitoring jedes Produktions-Agenten gegen seinen Test-Set',
      'Eval-Aktualisierung, wenn ein Anbieter eine Version ändert oder einstellt',
      'Versionierung von Prompts, Modellen und Abhängigkeiten mit Rollback',
      'Drift- und Genauigkeitsprüfung in festem Rhythmus mit schriftlichem Bericht',
      'Token- und Inferenzkostenkontrolle inklusive Kosten pro Agenten-Aktion',
      'Incident-Response mit Schweregraden, Eskalationspfad und Post-Incident-Review',
    ],
    tiersTitle: 'Retention-Stufen',
    tiersNote: 'Preis pro verwaltetem System, nicht pro Sitz. Umfang, Abdeckungszeiten und SLAs werden vertraglich festgehalten.',
    tiers: [
      { name: 'Light', price: 'USD 3.000 / Monat', systems: '1 Produktionssystem', points: ['Abdeckung zu Geschäftszeiten mit 24/7-Alarmierung', 'Monatliche Genauigkeits- und Drift-Prüfung', 'Incident-Response für einen Agenten'] },
      { name: 'Standard', price: 'USD 8.000 / Monat', systems: 'Bis zu 3 Produktionssysteme', points: ['Alles aus Light, plus', 'Monatliche Verbesserungen und Roadmap', 'Reaktionsziele je Schweregrad'] },
      { name: 'Heavy', price: 'USD 20.000 / Monat', systems: '5+ Systeme oder eine Agentenplattform', points: ['Alles aus Standard, plus', '24/7-Monitoring mit On-Call-Reaktion', 'Quartalsstrategie und volle Betriebspartnerschaft'] },
    ],
    kpiTitle: 'Als KPI berichtet, nicht als Aktivität',
    kpis: ['Auflösungsrate', 'Uptime', 'Genauigkeit', 'Kosten pro Agenten-Aktion'],
    ctaTitle: 'Starten Sie mit einem Discovery und scopen Sie dann den Betrieb',
    ctaBody:
      'Ein Discovery zeigt, welche Ihrer Agenten-Workflows für den Managed-Betrieb bereit sind und was ihr Lauf kostet. Ein Prozess, ein Bericht, eine 30-minütige Sitzung.',
    ctaPrimary: 'Kostenloses Discovery starten',
    relatedTitle: 'Passende Apps-Network-Tools',
    related: [
      { slug: 'token-cost', name: 'Token Cost Calculator', href: '/de/token-cost/' },
      { slug: 'model-observatory', name: 'Model Observatory', href: '/model-observatory/' },
      { slug: 'change-risk', name: 'Change-Risiko-Score', href: '/de/change-risk/' },
      { slug: 'ai-ticket-sentinel', name: 'AI Ticket Sentinel', href: '/de/ai-ticket-sentinel/' },
      { slug: 'ops-runbook-ai', name: 'Ops Runbook AI', href: '/ops-runbook-ai/' },
      { slug: 'ai-governance-checklist', name: 'AI Governance Checklist', href: '/de/ai-governance-checklist/' },
    ],
    footer: 'Zion Tech Group · Delaware, USA',
  },
};

const css = `
:root{--bg:#0b1220;--card:#121a2b;--ink:#e8eef8;--muted:#9aa8bd;--line:#243049;--accent:#7dd3fc;--brand:#a78bfa}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.6}
a{color:var(--accent);text-decoration:none}a:hover{color:#a5d7ff;text-decoration:underline}
.wrap{max-width:1080px;margin:0 auto;padding:0 20px 72px}
header.site{border-bottom:1px solid var(--line);background:rgba(11,18,32,.92)}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:14px;padding-bottom:14px;flex-wrap:wrap}
.brand{color:var(--ink);font-weight:700}.brand span{color:var(--brand)}
.langs{display:flex;flex-wrap:wrap;gap:6px;font-size:.8rem}
.langs a{color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:3px 10px}
.langs a[aria-current="true"]{color:#042033;background:var(--accent);border-color:var(--accent);font-weight:700}
.hero{padding:56px 0 40px;background:radial-gradient(ellipse at top,rgba(167,139,250,.16),transparent 60%)}
.hero h1{font-size:clamp(2rem,5vw,3rem);line-height:1.1;margin:0 0 14px;letter-spacing:-.02em}
.lede{color:var(--muted);font-size:1.12rem;max-width:48rem;margin:0 0 26px}
section{padding:40px 0;border-top:1px solid var(--line)}
h2{font-size:1.4rem;margin:0 0 18px;letter-spacing:-.01em}
h3{font-size:1.05rem;margin:0 0 6px}
p{margin:0 0 14px}
ul.feat{list-style:none;padding:0;margin:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
ul.feat li{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px}
.tiers{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.tier{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px}
.tier h3{margin-bottom:2px}
.tier .price{color:var(--accent);font-weight:700;margin:0 0 4px}
.tier .sys{color:var(--muted);font-size:.85rem;margin:0 0 12px}
.tier ul{margin:0;padding-left:18px;color:var(--muted);font-size:.88rem}
.note{color:var(--muted);font-size:.88rem;max-width:48rem}
.kpis{display:flex;flex-wrap:wrap;gap:10px}
.kpi{border:1px solid var(--line);border-radius:999px;padding:8px 16px;font-size:.85rem;color:var(--muted)}
.grid{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px}
.card h3{font-size:.98rem;margin:0 0 4px}
.card h3 a{color:var(--ink)}
.card h3 a:hover{color:var(--accent)}
.btn{display:inline-block;background:linear-gradient(90deg,#7c3aed,#ec4899);color:#fff;font-weight:700;padding:12px 20px;border-radius:10px}
.btn.alt{background:transparent;border:1px solid var(--line);color:var(--ink)}
.cta-row{display:flex;flex-wrap:wrap;gap:12px}
footer{margin-top:12px;border-top:1px solid var(--line);padding-top:20px;color:var(--muted);font-size:.85rem}
footer .wrap{display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;align-items:center;padding-top:18px;padding-bottom:18px}
@media(max-width:640px){.hero{padding:40px 0 28px}section{padding:30px 0}}
`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const url = (lang) => (lang.prefix ? `${SITE}/${lang.prefix}` : SITE) + 'managed-ai-operations/';

function render(lang) {
  const c = COPY[lang.code];
  const canonical = url(lang);
  const langNav = LANGS.map(
    (l) => `<a href="${url(l)}"${l.code === lang.code ? ' aria-current="true"' : ''}>${l.code.toUpperCase()}</a>`
  ).join('');
  const hreflang = LANGS.map((l) => `  <link rel="alternate" hreflang="${l.code}" href="${url(l)}">`).join('\n');
  const included = c.included.map((i) => `<li>${esc(i)}</li>`).join('\n');
  const tiers = c.tiers
    .map(
      (t) => `<div class="tier">
  <h3>${esc(t.name)}</h3>
  <p class="price">${esc(t.price)}</p>
  <p class="sys">${esc(t.systems)}</p>
  <ul>${t.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
</div>`
    )
    .join('\n');
  const kpis = c.kpis.map((k) => `<span class="kpi">${esc(k)}</span>`).join('');
  const related = c.related
    .map((r) => `<div class="card"><h3><a href="${r.href}">${esc(r.name)}</a></h3></div>`)
    .join('\n');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.name,
    inLanguage: lang.htmlLang,
    url: canonical,
    provider: { '@type': 'Organization', name: 'Zion Tech Group', address: '364 E Main St STE 1008, Middletown, DE 19709' },
    description: c.description,
    offers: c.tiers.map((t) => ({ '@type': 'Offer', name: t.name, price: t.price.replace(/[^0-9.]/g, ''), priceCurrency: 'USD' })),
  };
  return `<!DOCTYPE html>
<html lang="${lang.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.name)} · Zion Tech Group</title>
<meta name="description" content="${esc(c.description)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${canonical}">
${hreflang}
  <link rel="alternate" hreflang="x-default" href="${url(LANGS[0])}">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<style>${css}</style>
</head>
<body>
<header class="site">
  <div class="wrap">
    <a class="brand" href="${lang.prefix ? `/${lang.prefix}` : '/'}">Zion <span>Tech Group</span></a>
    <nav class="langs" aria-label="Language">${langNav}</nav>
  </div>
</header>
<main id="main">
  <div class="wrap">
    <div class="hero">
      <h1>${esc(c.name)}</h1>
      <p class="lede">${esc(c.tagline)}</p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">${esc(c.ctaPrimary)}</a>
      </div>
    </div>
    <section id="about">
      <h2>${esc(c.name)}</h2>
      <p class="note">${esc(c.description)}</p>
    </section>
    <section id="included">
      <h2>${esc(c.includedTitle)}</h2>
      <ul class="feat">
${included}
      </ul>
    </section>
    <section id="tiers">
      <h2>${esc(c.tiersTitle)}</h2>
      <p class="note">${esc(c.tiersNote)}</p>
      <div class="tiers">
${tiers}
      </div>
    </section>
    <section id="kpis">
      <h2>${esc(c.kpiTitle)}</h2>
      <div class="kpis">${kpis}</div>
    </section>
    <section id="related">
      <h2>${esc(c.relatedTitle)}</h2>
      <div class="grid">
${related}
      </div>
    </section>
    <section id="cta">
      <h2>${esc(c.ctaTitle)}</h2>
      <p class="note">${esc(c.ctaBody)}</p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">${esc(c.ctaPrimary)}</a>
        <a class="btn alt" href="/pricing/">${esc(lang.code === 'en' ? 'View pricing' : lang.code === 'pt' ? 'Ver preços' : lang.code === 'es' ? 'Ver precios' : lang.code === 'fr' ? 'Voir les tarifs' : 'Preise ansehen')}</a>
      </div>
    </section>
  </div>
</main>
<footer>
  <div class="wrap">
    <div>${esc(c.footer)}</div>
    <div class="langs">${langNav}</div>
  </div>
</footer>
</body>
</html>
`;
}

const written = [];
for (const lang of LANGS) {
  const rel = path.join(lang.prefix, 'managed-ai-operations', 'index.html');
  fs.mkdirSync(path.dirname(path.join(PUBLIC, rel)), { recursive: true });
  fs.writeFileSync(path.join(PUBLIC, rel), render(lang), 'utf8');
  written.push(`public/${rel}`);
}
console.log(`Wrote ${written.length} Managed AI Operations pages`);
