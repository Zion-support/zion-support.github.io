#!/usr/bin/env node
/**
 * Zion Apps Network — multilingual consolidation generator.
 *
 * Single source of truth: app/data/appsNetwork.ts (deduplicated, fully
 * translated). This script emits:
 *   - the Apps Network hub in every available language
 *     (public/apps-network/index.html + public/<lang>/apps-network/index.html)
 *   - one consistent, interlinked app page per app per language, filling any
 *     language that is still missing (existing rich pages are never overwritten)
 *   - public/apps-network-sitemap.xml covering every emitted URL
 *
 *   node --experimental-strip-types scripts/generate-apps-network-i18n.mjs
 *
 * Idempotent and offline. public/ is the source of truth for GitHub Pages
 * (scripts/prepare-pages-out.sh copies it verbatim into the Pages artifact).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { appsNetworkCatalog } from '../app/data/appsNetwork.ts';
import { LANGS, GROUP_LABEL, T } from './apps-network-page-data.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const SITE = 'https://ziontechgroup.com';

/** Group-level capability / use-case copy, authored per language. */
const GROUP_COPY = {
  money: {
    en: { features: ['Cost baseline before you commit', 'Waste and anomaly flags', 'Exportable number for finance'], useCases: ['Monthly cost review', 'Pre-migration cleanup', 'Pilot budgeting'] },
    pt: { features: ['Linha de base de custo antes do compromisso', 'Sinalizadores de desperdício e anomalias', 'Número exportável para finanças'], useCases: ['Revisão mensal de custos', 'Limpeza pré-migração', 'Orçamentação de piloto'] },
    es: { features: ['Línea base de costes antes de comprometerte', 'Alertas de desperdicio y anomalías', 'Número exportable para finanzas'], useCases: ['Revisión mensual de costes', 'Limpieza previa a la migración', 'Presupuesto de piloto'] },
    fr: { features: ['Base de coûts avant engagement', "Signalements de gaspillage et d'anomalies", 'Chiffre exportable pour la finance'], useCases: ['Revue mensuelle des coûts', 'Nettoyage pré-migration', "Budgétisation d'un pilote"] },
    de: { features: ['Kostenbasis vor der Bindung', 'Warnungen zu Verschwendung und Anomalien', 'Exportierbare Zahl für Finance'], useCases: ['Monatliche Kostenreview', 'Bereinigung vor Migration', 'Pilot-Budgetierung'] },
  },
  ops: {
    en: { features: ['Live status and SLA tracking', 'Breach and risk early-warning', 'Runbook-ready response steps'], useCases: ['Incident triage', 'Change-window planning', 'Support operations monitoring'] },
    pt: { features: ['Status ao vivo e acompanhamento de SLA', 'Alerta precoce de violação e risco', 'Etapas de resposta prontas para runbook'], useCases: ['Triagem de incidentes', 'Planejamento de janela de mudança', 'Monitoramento de operações de suporte'] },
    es: { features: ['Estado en vivo y seguimiento de SLA', 'Aviso temprano de incumplimiento y riesgo', 'Pasos de respuesta listos para runbook'], useCases: ['Triaje de incidentes', 'Planificación de ventanas de cambio', 'Monitorización de operaciones de soporte'] },
    fr: { features: ['Statut en direct et suivi des SLA', 'Alerte précoce de violation et de risque', 'Étapes de réponse prêtes pour runbook'], useCases: ["Tri des incidents", 'Planification des fenêtres de changement', 'Surveillance des opérations de support'] },
    de: { features: ['Live-Status und SLA-Tracking', 'Frühwarnung zu Verletzung und Risiko', 'Runbook-fertige Reaktionsschritte'], useCases: ['Incident-Triage', 'Planung von Änderungsfenstern', 'Überwachung des Supportbetriebs'] },
  },
  govern: {
    en: { features: ['Compliance control checklist', 'Evidence-ready documentation', 'Bid and deadline tracking'], useCases: ['Bid readiness review', 'Import/export classification', 'Audit preparation'] },
    pt: { features: ['Checklist de controles de conformidade', 'Documentação pronta para evidências', 'Acompanhamento de licitações e prazos'], useCases: ['Revisão de prontidão para licitação', 'Classificação de importação/exportação', 'Preparação para auditoria'] },
    es: { features: ['Lista de controles de conformidad', 'Documentación lista para evidencias', 'Seguimiento de licitaciones y plazos'], useCases: ['Revisión de preparación para licitar', 'Clasificación de importación/exportación', 'Preparación de auditoría'] },
    fr: { features: ['Checklist des contrôles de conformité', 'Documentation prête pour les preuves', "Suivi des appels d'offres et des échéances"], useCases: ["Revue de préparation aux appels d'offres", 'Classification import/export', "Préparation d'audit"] },
    de: { features: ['Compliance-Kontrollliste', 'Beweisfähige Dokumentation', 'Tracking von Ausschreibungen und Fristen'], useCases: ['Ausschreibungs-Readiness-Review', 'Import/Export-Klassifizierung', 'Audit-Vorbereitung'] },
  },
  work: {
    en: { features: ['Copy-ready brief or prompt', 'Nothing stored without consent', 'Feeds into a Discovery report'], useCases: ['Preparing a Discovery session', 'Drafting an RFQ response', 'Documenting an SOP'] },
    pt: { features: ['Briefing ou prompt pronto para copiar', 'Nada é armazenado sem consentimento', 'Alimenta um relatório de Discovery'], useCases: ['Preparando uma sessão de Discovery', 'Redigindo uma resposta a RFQ', 'Documentando um SOP'] },
    es: { features: ['Brief o prompt listo para copiar', 'No se almacena nada sin consentimiento', 'Alimenta un informe de Discovery'], useCases: ['Preparando una sesión de Discovery', 'Redactando una respuesta a RFQ', 'Documentando un SOP'] },
    fr: { features: ['Brief ou prompt prêt à copier', "Rien n'est stocké sans consentement", 'Alimente un rapport Discovery'], useCases: ["Préparation d'une session Discovery", "Rédaction d'une réponse RFQ", "Documentation d'une SOP"] },
    de: { features: ['Kopierfertiger Brief oder Prompt', 'Nichts wird ohne Einwilligung gespeichert', 'Speist einen Discovery-Bericht'], useCases: ['Discovery-Sitzung vorbereiten', 'RFQ-Antwort entwerfen', 'SOP dokumentieren'] },
  },
  ai: {
    en: { features: ['Model and prompt controls', 'Security and injection defense', 'Usage and cost telemetry'], useCases: ['Building a support agent', 'Evaluating a model change', 'Reviewing prompt security'] },
    pt: { features: ['Controles de modelo e prompt', 'Defesa de segurança e contra injeção', 'Telemetria de uso e custo'], useCases: ['Construindo um agente de suporte', 'Avaliando uma mudança de modelo', 'Revisando a segurança de prompts'] },
    es: { features: ['Controles de modelo y prompt', 'Defensa de seguridad y contra inyección', 'Telemetría de uso y costes'], useCases: ['Construyendo un agente de soporte', 'Evaluando un cambio de modelo', 'Revisando la seguridad de prompts'] },
    fr: { features: ['Contrôles de modèle et de prompt', "Défense de sécurité et contre l'injection", "Télémétrie d'usage et de coût"], useCases: ["Construction d'un agent de support", "Évaluation d'un changement de modèle", 'Revue de la sécurité des prompts'] },
    de: { features: ['Modell- und Prompt-Kontrollen', 'Sicherheits- und Injectionsabwehr', 'Nutzungs- und Kostentelemetrie'], useCases: ['Support-Agenten bauen', 'Modellwechsel bewerten', 'Prompt-Sicherheit prüfen'] },
  },
  field: {
    en: { features: ['Technician and asset routing', 'Warranty and lifecycle lookup', 'On-site survey and dispatch support'], useCases: ['Scheduling a field visit', 'Tracking a warranty claim', 'Balancing depot stock'] },
    pt: { features: ['Roteamento de técnicos e ativos', 'Consulta de garantia e ciclo de vida', 'Apoio a vistoria e despacho em campo'], useCases: ['Agendando uma visita de campo', 'Rastreando uma reclamação de garantia', 'Equilibrando estoque entre depósitos'] },
    es: { features: ['Enrutado de técnicos y activos', 'Consulta de garantía y ciclo de vida', 'Apoyo a inspección y despacho en campo'], useCases: ['Programando una visita de campo', 'Rastreando una reclamación de garantía', 'Equilibrando stock entre depósitos'] },
    fr: { features: ['Acheminement des techniciens et des actifs', 'Recherche de garantie et de cycle de vie', 'Appui aux visites et au dispatch terrain'], useCases: ["Planification d'une visite terrain", "Suivi d'une réclamation de garantie", 'Équilibrage du stock entre dépôts'] },
    de: { features: ['Techniker- und Asset-Routing', 'Garantie- und Lebenszyklus-Suche', 'Unterstützung vor Ort und Dispatch'], useCases: ['Field-Termin planen', 'Garantieanspruch verfolgen', 'Lagerbestand ausgleichen'] },
  },
  hub: {
    en: { features: ['Single source of truth', 'Pipeline and engagement history', 'Connects to every network app'], useCases: ['Account planning', 'Lead qualification', 'Revenue operations review'] },
    pt: { features: ['Fonte única de verdade', 'Histórico de pipeline e engajamento', 'Conecta a todos os apps da rede'], useCases: ['Planejamento de contas', 'Qualificação de leads', 'Revisão de operações de receita'] },
    es: { features: ['Fuente única de verdad', 'Historial de pipeline e interacción', 'Conecta con todas las apps de la red'], useCases: ['Planificación de cuentas', 'Calificación de leads', 'Revisión de operaciones de ingresos'] },
    fr: { features: ['Source unique de vérité', "Historique de pipeline et d'engagement", 'Se connecte à toutes les apps du réseau'], useCases: ['Planification des comptes', 'Qualification des leads', 'Revue des opérations de revenus'] },
    de: { features: ['Einzige Wahrheit', 'Pipeline- und Engagement-Verlauf', 'Verbindet sich mit jeder App im Netz'], useCases: ['Kundenplanung', 'Lead-Qualifizierung', 'Review der Umsatzoperationen'] },
  },
};

const css = `
:root{--bg:#0b1220;--card:#121a2b;--ink:#e8eef8;--muted:#9aa8bd;--line:#243049;--accent:#7dd3fc;--brand:#a78bfa}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.6}
a{color:var(--accent);text-decoration:none}a:hover{color:#a5d7ff;text-decoration:underline}
.wrap{max-width:1080px;margin:0 auto;padding:0 20px 72px}
.skip{position:absolute;left:-9999px;top:0;background:var(--accent);color:#042033;padding:8px 14px;z-index:10}
.skip:focus{left:8px;top:8px}
header.site{border-bottom:1px solid var(--line);background:rgba(11,18,32,.92)}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:14px;padding-bottom:14px;flex-wrap:wrap}
.brand{color:var(--ink);font-weight:700;letter-spacing:-.01em}
.brand span{color:var(--brand)}
.langs{display:flex;flex-wrap:wrap;gap:6px;font-size:.8rem}
.langs a{color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:3px 10px}
.langs a[aria-current="true"]{color:#042033;background:var(--accent);border-color:var(--accent);font-weight:700}
.hero{padding:56px 0 40px;background:radial-gradient(ellipse at top,rgba(167,139,250,.16),transparent 60%)}
.chip{display:inline-block;font-size:.72rem;text-transform:uppercase;letter-spacing:.14em;color:var(--brand);border:1px solid rgba(167,139,250,.4);border-radius:999px;padding:4px 12px;margin-bottom:16px}
.hero h1{font-size:clamp(2rem,5vw,3rem);line-height:1.1;margin:0 0 14px;letter-spacing:-.02em}
.lede{color:var(--muted);font-size:1.12rem;max-width:46rem;margin:0 0 26px}
.cta-row{display:flex;flex-wrap:wrap;gap:12px}
.btn{display:inline-block;background:linear-gradient(90deg,#7c3aed,#ec4899);color:#fff;font-weight:700;padding:12px 20px;border-radius:10px}
.btn.alt{background:transparent;border:1px solid var(--line);color:var(--ink)}
section{padding:44px 0;border-top:1px solid var(--line)}
h2{font-size:1.5rem;margin:0 0 18px;letter-spacing:-.01em}
h3{font-size:1.05rem;margin:0 0 6px}
p{margin:0 0 14px}
ul.feat{list-style:none;padding:0;margin:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
ul.feat li{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px}
ul.feat li strong{display:block;color:var(--ink);margin-bottom:4px}
ul.feat li span{color:var(--muted);font-size:.9rem}
.grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(230px,1fr))}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px;display:block;color:inherit}
.card:hover{border-color:rgba(167,139,250,.5)}
.card .g{font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;color:var(--brand);margin-bottom:6px}
.card p{color:var(--muted);font-size:.88rem;margin:0}
.card .rel{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;font-size:.75rem}
.card .rel a{color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:2px 8px}
.card .rel a:hover{color:var(--accent);border-color:rgba(125,211,252,.4)}
.note{color:var(--muted);font-size:.9rem;max-width:46rem}
.stats{display:flex;flex-wrap:wrap;gap:22px;margin-top:26px}
.stat b{display:block;font-size:1.5rem;color:var(--ink)}
.stat span{color:var(--muted);font-size:.82rem}
.badges{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.badge{font-size:.78rem;color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:5px 12px}
footer{margin-top:12px;border-top:1px solid var(--line);padding-top:20px;color:var(--muted);font-size:.85rem}
footer .wrap{display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;align-items:center;padding-top:18px;padding-bottom:18px}
footer a{color:var(--muted)}
@media(max-width:640px){.hero{padding:40px 0 28px}section{padding:32px 0}}
`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const bySlug = Object.fromEntries(appsNetworkCatalog.map((a) => [a.slug, a]));
const GROUP_ORDER = ['money', 'ops', 'govern', 'work', 'ai', 'field', 'hub'];

function nameOf(app, lang) {
  return app[`name${lang === 'en' ? '' : lang.charAt(0).toUpperCase() + lang.slice(1)}`] || app.name;
}
function descOf(app, lang) {
  return app[`description${lang === 'en' ? '' : lang.charAt(0).toUpperCase() + lang.slice(1)}`] || app.description;
}
function pageUrl(lang, href) {
  const rel = href.replace(/^\//, '').replace(/\/$/, '');
  return lang.prefix ? `${SITE}/${lang.prefix}${rel}/` : `${SITE}/${rel}/`;
}
function hrefFor(lang, href) {
  const rel = href.replace(/^\//, '').replace(/\/$/, '');
  return lang.code === 'en' ? `/${rel}/` : `/${lang.prefix}${rel}/`;
}
function relatedFor(app, lang, limit = 4) {
  const out = [];
  for (const slug of app.related) {
    if (out.length >= limit) break;
    if (slug === app.slug) continue;
    const target = bySlug[slug];
    if (!target) continue;
    if (out.some((r) => r.slug === slug)) continue;
    out.push({ slug, name: nameOf(target, lang.code), href: hrefFor(lang, target.href) });
  }
  return out;
}
function langSwitch(current, slug) {
  return LANGS.map((l) => {
    const href = pageUrl(l, slug);
    const attr = l.code === current.code ? ' aria-current="true"' : '';
    return `<a href="${href}"${attr} hreflang="${l.code}">${l.code.toUpperCase()}</a>`;
  }).join('');
}
function hreflangBlock(href) {
  return LANGS.map((l) => `  <link rel="alternate" hreflang="${l.code}" href="${pageUrl(l, href)}">`).join('\n')
    + `\n  <link rel="alternate" hreflang="x-default" href="${pageUrl(LANGS[0], href)}">`;
}
function write(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents, 'utf8');
}

const totalRelated = appsNetworkCatalog.reduce((n, a) => n + relatedFor(a, LANGS[0]).length, 0);

/* ── Hub, one per language ─────────────────────────────────────────────── */
for (const lang of LANGS) {
  const t = T[lang.code];
  const groups = GROUP_ORDER.map((g) => {
    const items = appsNetworkCatalog.filter((a) => a.group === g);
    if (!items.length) return '';
    const cards = items.map((app) => {
      const rel = relatedFor(app, lang, 4).map((r) => `<a href="${r.href}">${esc(r.name)}</a>`).join('');
      return `<div class="card">
  <h3><a href="${hrefFor(lang, app.href)}">${esc(nameOf(app, lang.code))}</a></h3>
  <p>${esc(descOf(app, lang.code))}</p>
  ${rel ? `<div class="rel">${rel}</div>` : ''}
</div>`;
    }).join('\n');
    return `<section id="${g}">
  <h2>${esc(GROUP_LABEL[lang.code][g] || g)}</h2>
  <p class="sub">${items.length} ${lang.code === 'en' ? 'apps' : esc(t.allApps.toLowerCase())}</p>
  <div class="grid">
${cards}
  </div>
</section>`;
  }).filter(Boolean).join('\n');

  const canonical = lang.prefix ? `${SITE}/${lang.prefix}apps-network/` : `${SITE}/apps-network/`;
  const html = `<!DOCTYPE html>
<html lang="${lang.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Zion Apps Network — ${appsNetworkCatalog.length} ${esc(t.statApps)} · Zion Tech Group</title>
<meta name="description" content="${esc(t.hubDescription || 'Zion Apps Network: interlinked AI, FinOps, security, operations and field-service apps. Free to try, no credit card.')}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${canonical}">
${LANGS.map((l) => `  <link rel="alternate" hreflang="${l.code}" href="${l.prefix ? pageUrl(l, '/apps-network/') : SITE}/apps-network/">`).join('\n')}
  <link rel="alternate" hreflang="x-default" href="${SITE}/apps-network/">
<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Zion Apps Network',
  url: canonical,
  inLanguage: lang.htmlLang,
  numberOfItems: appsNetworkCatalog.length,
  hasPart: appsNetworkCatalog.map((a) => ({ '@type': 'SoftwareApplication', name: a.name, url: `${SITE}${a.href}` })),
})}</script>
<style>${css}</style>
</head>
<body>
<a class="skip" href="#main">${lang.code === 'en' ? 'Skip to content' : lang.code === 'pt' ? 'Pular para o conteúdo' : lang.code === 'es' ? 'Saltar al contenido' : lang.code === 'fr' ? 'Aller au contenu' : 'Zum Inhalt springen'}</a>
<header class="site">
  <div class="wrap">
    <a class="brand" href="${lang.prefix ? `/${lang.prefix}` : '/'}">Zion <span>Apps Network</span></a>
    <nav class="langs" aria-label="${esc(t.langSwitch)}">${langSwitch(lang, 'apps-network')}</nav>
  </div>
</header>
<main id="main">
  <div class="wrap">
    <div class="hero">
      <h1>Zion Apps Network</h1>
      <p class="lede">${esc(t.hubLede)}</p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">${esc(t.ctaPrimary)}</a>
        <a class="btn alt" href="${lang.prefix ? `/${lang.prefix}` : ''}/apps/">${esc(t.allApps)}</a>
      </div>
      <div class="stats">
        <div class="stat"><b>${appsNetworkCatalog.length}</b><span>${esc(t.statApps)}</span></div>
        <div class="stat"><b>${totalRelated}</b><span>${esc(t.statLinks)}</span></div>
        <div class="stat"><b>${GROUP_ORDER.length}</b><span>${esc(t.statCategories)}</span></div>
        <div class="stat"><b>5</b><span>${esc(t.statLanguages)}</span></div>
      </div>
    </div>
${groups}
    <section id="cta">
      <h2>${esc(t.ctaTitle)}</h2>
      <p class="note">${esc(t.ctaBody)}</p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">${esc(t.ctaPrimary)}</a>
        <a class="btn alt" href="/pricing/">${esc(t.ctaSecondary)}</a>
      </div>
    </section>
  </div>
</main>
<footer>
  <div class="wrap">
    <div>Zion Apps Network · <a href="${lang.prefix ? `/${lang.prefix}` : '/'}">Zion Tech Group</a></div>
    <div class="langs">${langSwitch(lang, 'apps-network')}</div>
  </div>
</footer>
</body>
</html>
`;
  const out = path.join(PUBLIC, lang.prefix, 'apps-network', 'index.html');
  write(out, html);
}

/* ── App pages, filling any missing language ───────────────────────────── */
let writtenPages = 0;
let skippedPages = 0;
for (const app of appsNetworkCatalog) {
  for (const lang of LANGS) {
    const rel = path.join(lang.prefix, app.href.replace(/^\//, '').replace(/\/$/, ''), 'index.html');
    const out = path.join(PUBLIC, rel);
    if (fs.existsSync(out)) { skippedPages++; continue; }
    const t = T[lang.code];
    const copy = GROUP_COPY[app.group][lang.code];
    const related = relatedFor(app, lang, 6);
    const relatedCards = related.map((r) => `<a class="card" href="${r.href}">
  <div class="g">${esc(GROUP_LABEL[lang.code][bySlug[r.slug].group] || bySlug[r.slug].group)}</div>
  <h3>${esc(r.name)}</h3>
  <p>${esc(descOf(bySlug[r.slug], lang.code))}</p>
</a>`).join('\n');
    const features = copy.features.map((f) => `<li><strong>${esc(f)}</strong></li>`).join('\n');
    const useCases = copy.useCases.map((u) => `<li><strong>${esc(u)}</strong></li>`).join('\n');
    const canonical = pageUrl(lang, app.href);
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: nameOf(app, lang.code),
      applicationCategory: 'BusinessApplication',
      inLanguage: lang.htmlLang,
      url: canonical,
      description: descOf(app, lang.code),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      isPartOf: { '@type': 'CollectionPage', name: 'Zion Apps Network', url: `${SITE}/apps-network/` },
    };
    const html = `<!DOCTYPE html>
<html lang="${lang.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(nameOf(app, lang.code))} · Zion Tech Group</title>
<meta name="description" content="${esc(descOf(app, lang.code))}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${canonical}">
${hreflangBlock(app.href)}
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<style>${css}</style>
</head>
<body>
<a class="skip" href="#main">${lang.code === 'en' ? 'Skip to content' : lang.code === 'pt' ? 'Pular para o conteúdo' : lang.code === 'es' ? 'Saltar al contenido' : lang.code === 'fr' ? 'Aller au contenu' : 'Zum Inhalt springen'}</a>
<header class="site">
  <div class="wrap">
    <a class="brand" href="${lang.prefix ? `/${lang.prefix}` : '/'}">Zion <span>Apps Network</span></a>
    <nav class="langs" aria-label="${esc(t.langSwitch)}">${langSwitch(lang, app.href)}</nav>
  </div>
</header>
<main id="main">
  <div class="wrap">
    <div class="hero">
      <span class="chip">${esc(GROUP_LABEL[lang.code][app.group] || app.group)}</span>
      <h1>${esc(nameOf(app, lang.code))}</h1>
      <p class="lede">${esc(descOf(app, lang.code))}</p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">${esc(t.ctaPrimary)}</a>
        <a class="btn alt" href="/pricing/">${esc(t.ctaSecondary)}</a>
      </div>
      <div class="badges">
        <span class="badge">● ${esc(t.free)}</span>
        <span class="badge">${esc(t.noCard)}</span>
        <span class="badge">${esc(t.interlinked)}</span>
      </div>
    </div>

    <section id="what">
      <h2>${esc(t.whatItDoes)}</h2>
      <p class="note">${esc(descOf(app, lang.code))}</p>
    </section>

    <section id="capabilities">
      <h2>${esc(t.capabilities)}</h2>
      <ul class="feat">
${features}
      </ul>
    </section>

    <section id="when">
      <h2>${esc(t.whenToUse)}</h2>
      <ul class="feat">
${useCases}
      </ul>
    </section>

    <section id="related">
      <h2>${esc(t.related)}</h2>
      <p class="note">${esc(t.relatedHint)}</p>
      <div class="grid">
${relatedCards}
      </div>
    </section>

    <section id="cta">
      <h2>${esc(t.ctaTitle)}</h2>
      <p class="note">${esc(t.ctaBody)}</p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">${esc(t.ctaPrimary)}</a>
        <a class="btn alt" href="${lang.prefix ? `/${lang.prefix}` : ''}/apps-network/">${esc(t.hubLink)}</a>
      </div>
    </section>
  </div>
</main>
<footer>
  <div class="wrap">
    <div>Zion Apps Network · <a href="${lang.prefix ? `/${lang.prefix}` : '/'}">Zion Tech Group</a></div>
    <div class="langs">${langSwitch(lang, app.href)}</div>
  </div>
</footer>
</body>
</html>
`;
    write(out, html);
    writtenPages++;
  }
}

/* ── Sitemap ───────────────────────────────────────────────────────────── */
const urls = [];
for (const app of appsNetworkCatalog) {
  for (const lang of LANGS) {
    urls.push(`  <url><loc>${pageUrl(lang, app.href)}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  }
}
for (const lang of LANGS) {
  urls.push(`  <url><loc>${lang.prefix ? `${SITE}/${lang.prefix}` : SITE}/apps-network/</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`);
}
write(
  path.join(PUBLIC, 'apps-network-sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Generated by scripts/generate-apps-network-i18n.mjs — do not edit by hand. -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
);

console.log(`Hubs: ${LANGS.length} languages · app pages written: ${writtenPages} · existing kept: ${skippedPages} · sitemap URLs: ${urls.length}`);
