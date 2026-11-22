/**
 * Zion — PNCP AI Tender Radar service pages (5 languages).
 *   node scripts/generate-pncp-radar.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const SITE = 'https://ziontechgroup.com';
const SLUG = 'pncp-tender-radar';

const LANGS = [
  { code: 'en', prefix: '', htmlLang: 'en' },
  { code: 'pt', prefix: 'pt/', htmlLang: 'pt-BR' },
  { code: 'es', prefix: 'es/', htmlLang: 'es' },
  { code: 'fr', prefix: 'fr/', htmlLang: 'fr' },
  { code: 'de', prefix: 'de/', htmlLang: 'de' },
];

const C = {
  en: {
    name: 'PNCP AI Tender Radar',
    tagline: 'Every open AI and IT tender in Brazil, matched to what you actually sell.',
    description:
      'The National Public Procurement Portal (PNCP) publishes every federal, state and municipal tender in Brazil, and it exposes an official open API. Most suppliers never see the ones that fit them, because the portal is too large to watch manually. Zion PNCP AI Tender Radar reads the official API, filters for AI, IT, cloud, security and field-service opportunities that match your CNAE and delivery capacity, scores each tender on qualification fit, deadline pressure and competitive intensity, and sends you a shortlist with a written go or no-go recommendation before proposals close.',
    stepsTitle: 'How it works',
    steps: [
      'We connect to the official PNCP query API and read open procurement notices and price-registration intentions',
      'Tenders are filtered by area (AI, IT, cloud, security, data, field services) and by your CNAE and regions served',
      'Each opportunity is scored on qualification fit, required certifications, deadline and competitive intensity',
      'You receive a weekly shortlist with the object, buying entity, deadline, estimated value and documents',
      'For each shortlisted tender we produce a written go or no-go recommendation with the reasoning',
      'Optional: we prepare the qualification dossier and the proposal, itemising taxes and import duties',
    ],
    factsTitle: 'The market is real and open',
    facts: [
      'PNCP centralises every federal, state and municipal procurement in Brazil under Law 14.133/2021',
      'The official PNCP query API is public and free, maintained by Serpro',
      'Real AI tenders are being awarded now — including legal AI systems at state and municipal level',
      'Brazilian AI implementation spending exceeds US$ 3.4 billion in 2026, growing over 30% year on year',
      'Most suppliers miss fitted tenders because the portal cannot be watched manually',
    ],
    deliverTitle: 'What you receive',
    deliver: [
      'A weekly shortlist matched to your CNAE and delivery regions',
      'A qualification score per tender with the evidence behind it',
      'A written go or no-go recommendation before the proposal deadline',
      'Alerts when a relevant price-registration intention (IRP) opens',
      'Optional dossier and proposal preparation with itemised taxes',
    ],
    ctaTitle: 'Start with a Discovery',
    ctaBody:
      'A Discovery identifies which tender profiles fit your company and what you need to qualify. One process, one report, one 30-minute session.',
    ctaPrimary: 'Start Free Discovery',
    relatedTitle: 'Paired with these Apps Network tools',
    related: [
      ['edital-desk', 'Edital Desk', '/edital-desk/'],
      ['rfp-readiness', 'RFP Readiness Score', '/rfp-readiness/'],
      ['ai-tender-scout', 'AI Tender Scout', '/ai-tender-scout/'],
      ['licitacao-radar', 'Licitação Radar', '/licitacao-radar/'],
      ['agent-inventory-shadow-ai', 'Agent Inventory', '/agent-inventory-shadow-ai/'],
      ['managed-ai-operations', 'Managed AI Operations', '/managed-ai-operations/'],
    ],
    pricing: 'Monthly monitoring per company, plus an optional success fee on awarded tenders.',
    footer: 'Zion Tech Group · Delaware, USA',
  },
  pt: {
    name: 'PNCP AI Tender Radar',
    tagline: 'Todos os editais abertos de IA e TI no Brasil, cruzados com o que você realmente vende.',
    description:
      'O Portal Nacional de Contratações Públicas (PNCP) publica todas as licitações federais, estaduais e municipais do Brasil e expõe uma API oficial aberta. A maioria dos fornecedores nunca vê os editais que lhes servem, porque o portal é grande demais para acompanhar manualmente. O Zion PNCP AI Tender Radar lê a API oficial, filtra oportunidades de IA, TI, cloud, segurança e serviços de campo que correspondem ao seu CNAE e à sua capacidade de entrega, pontua cada edital por adequação de qualificação, pressão de prazo e intensidade competitiva, e envia uma shortlist com recomendação escrita de participar ou não antes do fechamento das propostas.',
    stepsTitle: 'Como funciona',
    steps: [
      'Ligamos à API oficial de consulta do PNCP e lemos editais abertos e intenções de registro de preço',
      'Os editais são filtrados por área (IA, TI, cloud, segurança, dados, serviços de campo) e pelo seu CNAE e regiões de atuação',
      'Cada oportunidade é pontuada por adequação de qualificação, certificações exigidas, prazo e intensidade competitiva',
      'Recebe uma shortlist semanal com objeto, órgão comprador, prazo, valor estimado e documentos',
      'Para cada edital da shortlist, produzimos uma recomendação escrita de participar ou não, com o racional',
      'Opcional: preparamos o dossiê de qualificação e a proposta, com impostos e importação itemizados',
    ],
    factsTitle: 'O mercado é real e aberto',
    facts: [
      'O PNCP centraliza todas as contratações federais, estaduais e municipais do Brasil sob a Lei 14.133/2021',
      'A API oficial de consulta do PNCP é pública e gratuita, mantida pela Serpro',
      'Editais reais de IA estão a ser adjudicados agora, incluindo sistemas de IA jurídica a nível estadual e municipal',
      'O gasto brasileiro com implementação de IA supera US$ 3,4 mil milhões em 2026, a crescer mais de 30% ao ano',
      'A maioria dos fornecedores perde editais adequados porque o portal não pode ser vigiado manualmente',
    ],
    deliverTitle: 'O que recebe',
    deliver: [
      'Uma shortlist semanal cruzada com o seu CNAE e regiões de entrega',
      'Uma pontuação de qualificação por edital, com a evidência',
      'Uma recomendação escrita de participar ou não antes do prazo de propostas',
      'Alertas quando abre uma intenção de registro de preço (IRP) relevante',
      'Opcional: preparação de dossiê e proposta com impostos itemizados',
    ],
    ctaTitle: 'Comece com uma Discovery',
    ctaBody:
      'Uma Discovery identifica quais perfis de licitação servem a sua empresa e o que falta para se qualificar. Um processo, um relatório, uma sessão de 30 minutos.',
    ctaPrimary: 'Começar Discovery gratuita',
    relatedTitle: 'Pares úteis na Apps Network',
    related: [
      ['edital-desk', 'Edital Desk', '/pt/edital-desk/'],
      ['rfp-readiness', 'Escore de Prontidão para RFP', '/pt/rfp-readiness/'],
      ['ai-tender-scout', 'AI Tender Scout', '/ai-tender-scout/'],
      ['licitacao-radar', 'Licitação Radar', '/licitacao-radar/'],
      ['agent-inventory-shadow-ai', 'Inventário de Agentes', '/pt/agent-inventory-shadow-ai/'],
      ['managed-ai-operations', 'Managed AI Operations', '/pt/managed-ai-operations/'],
    ],
    pricing: 'Monitorização mensal por empresa, mais taxa de sucesso opcional sobre editais ganhos.',
    footer: 'Zion Tech Group · Delaware, EUA',
  },
  es: {
    name: 'PNCP AI Tender Radar',
    tagline: 'Todas las licitaciones abiertas de IA y TI en Brasil, cruzadas con lo que realmente vendes.',
    description:
      'El Portal Nacional de Contrataciones Públicas (PNCP) publica todas las licitaciones federales, estatales y municipales de Brasil y expone una API oficial abierta. La mayoría de los proveedores nunca ven las que encajan con ellos, porque el portal es demasiado grande para seguirlo manualmente. Zion PNCP AI Tender Radar lee la API oficial, filtra oportunidades de IA, TI, nube, seguridad y servicios de campo que encajan con su CNAE y su capacidad de entrega, puntúa cada licitación por adecuación de calificación, presión de plazo e intensidad competitiva, y envía una lista corta con una recomendación escrita de participar o no antes del cierre de propuestas.',
    stepsTitle: 'Cómo funciona',
    steps: [
      'Nos conectamos a la API oficial de consulta del PNCP y leemos avisos abiertos e intenciones de registro de precios',
      'Las licitaciones se filtran por área (IA, TI, nube, seguridad, datos, servicios de campo) y por su CNAE y regiones atendidas',
      'Cada oportunidad se puntúa por adecuación de calificación, certificaciones exigidas, plazo e intensidad competitiva',
      'Recibe una lista corta semanal con objeto, entidad compradora, plazo, valor estimado y documentos',
      'Para cada licitación seleccionada emitimos una recomendación escrita de participar o no, con el razonamiento',
      'Opcional: preparamos el dosier de calificación y la propuesta, con impuestos e importación desglosados',
    ],
    factsTitle: 'El mercado es real y abierto',
    facts: [
      'El PNCP centraliza todas las contrataciones federales, estatales y municipales de Brasil bajo la Ley 14.133/2021',
      'La API oficial de consulta del PNCP es pública y gratuita, mantenida por Serpro',
      'Hay licitaciones reales de IA adjudicándose ahora, incluidos sistemas de IA legal a nivel estatal y municipal',
      'El gasto brasileño en implementación de IA supera los US$ 3.400 millones en 2026, con un crecimiento superior al 30% anual',
      'La mayoría de los proveedores pierde licitaciones adecuadas porque el portal no puede vigilarse manualmente',
    ],
    deliverTitle: 'Qué recibe',
    deliver: [
      'Una lista corta semanal cruzada con su CNAE y regiones de entrega',
      'Una puntuación de calificación por licitación, con la evidencia',
      'Una recomendación escrita de participar o no antes del cierre de propuestas',
      'Alertas cuando se abre una intención de registro de precios (IRP) relevante',
      'Opcional: preparación de dosier y propuesta con impuestos desglosados',
    ],
    ctaTitle: 'Empiece con un Discovery',
    ctaBody:
      'Un Discovery identifica qué perfiles de licitación encajan con su empresa y qué le falta para calificar. Un proceso, un informe, una sesión de 30 minutos.',
    ctaPrimary: 'Empezar Discovery gratuito',
    relatedTitle: 'Herramientas de la Apps Network',
    related: [
      ['edital-desk', 'Edital Desk', '/es/edital-desk/'],
      ['rfp-readiness', 'Puntuación de Preparación para RFP', '/es/rfp-readiness/'],
      ['ai-tender-scout', 'AI Tender Scout', '/ai-tender-scout/'],
      ['licitacao-radar', 'Licitação Radar', '/licitacao-radar/'],
      ['agent-inventory-shadow-ai', 'Inventario de Agentes', '/es/agent-inventory-shadow-ai/'],
      ['managed-ai-operations', 'Managed AI Operations', '/es/managed-ai-operations/'],
    ],
    pricing: 'Monitorización mensual por empresa, más una comisión de éxito opcional sobre licitaciones ganadas.',
    footer: 'Zion Tech Group · Delaware, EE. UU.',
  },
  fr: {
    name: 'PNCP AI Tender Radar',
    tagline: 'Tous les appels d’offres IA et IT ouverts au Brésil, recoupés avec ce que vous vendez vraiment.',
    description:
      'Le Portail National des Marchés Publics (PNCP) publie tous les marchés fédéraux, étatiques et municipaux du Brésil et expose une API officielle ouverte. La plupart des fournisseurs ne voient jamais ceux qui leur correspondent, car le portail est trop vaste pour être suivi manuellement. Zion PNCP AI Tender Radar lit l’API officielle, filtre les opportunités IA, IT, cloud, sécurité et services terrain correspondant à votre CNAE et à votre capacité de livraison, note chaque marché sur l’adéquation de qualification, la pression du délai et l’intensité concurrentielle, puis envoie une courte liste avec une recommandation écrite go ou no-go avant la clôture des propositions.',
    stepsTitle: 'Comment ça marche',
    steps: [
      'Connexion à l’API officielle de consultation du PNCP : avis ouverts et intentions d’enregistrement de prix',
      'Filtrage des marchés par domaine (IA, IT, cloud, sécurité, données, services terrain) et par votre CNAE et vos régions',
      'Notation de chaque opportunité sur la qualification, les certifications exigées, le délai et la concurrence',
      'Une courte liste hebdomadaire avec objet, entité acheteuse, échéance, valeur estimée et documents',
      'Pour chaque marché retenu, une recommandation écrite go ou no-go avec le raisonnement',
      'Optionnel : préparation du dossier de qualification et de la proposition, taxes et importation détaillées',
    ],
    factsTitle: 'Un marché réel et ouvert',
    facts: [
      'Le PNCP centralise tous les marchés fédéraux, étatiques et municipaux du Brésil sous la loi 14.133/2021',
      'L’API officielle de consultation du PNCP est publique et gratuite, maintenue par Serpro',
      'Des marchés IA réels sont attribués aujourd’hui, y compris des systèmes d’IA juridique au niveau étatique et municipal',
      'Les dépenses brésiliennes en implémentation IA dépassent 3,4 milliards USD en 2026, en hausse de plus de 30 % par an',
      'La plupart des fournisseurs ratent les marchés adaptés car le portail ne peut pas être surveillé manuellement',
    ],
    deliverTitle: 'Ce que vous recevez',
    deliver: [
      'Une courte liste hebdomadaire recoupée avec votre CNAE et vos régions de livraison',
      'Une note de qualification par marché, avec les preuves',
      'Une recommandation écrite go ou no-go avant la clôture des propositions',
      'Des alertes à l’ouverture d’une intention d’enregistrement de prix (IRP) pertinente',
      'Optionnel : préparation du dossier et de la proposition avec taxes détaillées',
    ],
    ctaTitle: 'Commencez par un Discovery',
    ctaBody:
      'Un Discovery identifie les profils d’appels d’offres qui correspondent à votre entreprise et ce qui manque pour qualifier. Un processus, un rapport, une session de 30 minutes.',
    ctaPrimary: 'Démarrer le Discovery gratuit',
    relatedTitle: 'Outils Apps Network associés',
    related: [
      ['edital-desk', 'Edital Desk', '/fr/edital-desk/'],
      ['rfp-readiness', 'Score de Préparation RFP', '/fr/rfp-readiness/'],
      ['ai-tender-scout', 'AI Tender Scout', '/ai-tender-scout/'],
      ['licitacao-radar', 'Licitação Radar', '/licitacao-radar/'],
      ['agent-inventory-shadow-ai', 'Inventaire des Agents', '/fr/agent-inventory-shadow-ai/'],
      ['managed-ai-operations', 'Managed AI Operations', '/fr/managed-ai-operations/'],
    ],
    pricing: 'Surveillance mensuelle par entreprise, plus des honoraires de succès optionnels sur les marchés gagnés.',
    footer: 'Zion Tech Group · Delaware, États-Unis',
  },
  de: {
    name: 'PNCP AI Tender Radar',
    tagline: 'Jede offene KI- und IT-Ausschreibung in Brasilien, abgeglichen mit dem, was Sie wirklich verkaufen.',
    description:
      'Das Nationale Beschaffungsportal (PNCP) veröffentlicht alle Bundes-, Staats- und Kommunalausschreibungen Brasiliens und stellt eine offizielle offene API bereit. Die meisten Lieferanten sehen die für sie passenden Ausschreibungen nie, weil das Portal zu groß ist, um es manuell zu verfolgen. Zion PNCP AI Tender Radar liest die offizielle API, filtert KI-, IT-, Cloud-, Sicherheits- und Field-Service-Möglichkeiten, die zu Ihrem CNAE und Ihrer Lieferkapazität passen, bewertet jede Ausschreibung nach Qualifikationsfit, Fristdruck und Wettbewerbsintensität und sendet eine Shortlist mit schriftlicher Go-/No-Go-Empfehlung vor Angebotschluss.',
    stepsTitle: 'So funktioniert es',
    steps: [
      'Anbindung an die offizielle PNCP-Abfrage-API: offene Bekanntmachungen und Preisregistrierungsabsichten',
      'Filterung nach Bereich (KI, IT, Cloud, Sicherheit, Daten, Field Services) und nach CNAE und Ihren Regionen',
      'Bewertung je Chance nach Qualifikation, geforderten Zertifizierungen, Frist und Wettbewerbsintensität',
      'Eine wöchentliche Shortlist mit Gegenstand, kaufender Stelle, Frist, Geschätztem Wert und Unterlagen',
      'Für jede kurzgelistete Ausschreibung eine schriftliche Go-/No-Go-Empfehlung mit Begründung',
      'Optional: Erstellung des Qualifikationsdossiers und des Angebots mit aufgeschlüsselten Steuern und Importabgaben',
    ],
    factsTitle: 'Der Markt ist real und offen',
    facts: [
      'Das PNCP bündelt alle Bundes-, Staats- und Kommunalbeschaffungen Brasiliens nach Gesetz 14.133/2021',
      'Die offizielle PNCP-Abfrage-API ist öffentlich und kostenlos, betrieben von Serpro',
      'Echte KI-Ausschreibungen werden jetzt vergeben, auch KI-Systeme für die Justiz auf Staats- und Kommunalebene',
      'Brasilianische KI-Implementierungsausgaben überschreiten 2026 mehr als 3,4 Milliarden USD, über 30 % Wachstum im Jahr',
      'Die meisten Lieferanten verpassen passende Ausschreibungen, weil das Portal manuell nicht zu überwachen ist',
    ],
    deliverTitle: 'Was Sie erhalten',
    deliver: [
      'Eine wöchentliche Shortlist, abgeglichen mit CNAE und Ihren Lieferregionen',
      'Eine Qualifikationsbewertung je Ausschreibung, mit Belegen',
      'Eine schriftliche Go-/No-Go-Empfehlung vor Angebotschluss',
      'Alarme bei relevanter Preisregistrierungsabsicht (IRP)',
      'Optional: Dossier- und Angebotserstellung mit aufgeschlüsselten Steuern',
    ],
    ctaTitle: 'Starten Sie mit einem Discovery',
    ctaBody:
      'Ein Discovery zeigt, welche Ausschreibungsprofile zu Ihrem Unternehmen passen, und was für die Qualifikation fehlt. Ein Prozess, ein Bericht, eine 30-minütige Sitzung.',
    ctaPrimary: 'Kostenloses Discovery starten',
    relatedTitle: 'Passende Apps-Network-Tools',
    related: [
      ['edital-desk', 'Edital Desk', '/de/edital-desk/'],
      ['rfp-readiness', 'RFP-Readiness-Score', '/de/rfp-readiness/'],
      ['ai-tender-scout', 'AI Tender Scout', '/ai-tender-scout/'],
      ['licitacao-radar', 'Licitação Radar', '/licitacao-radar/'],
      ['agent-inventory-shadow-ai', 'Agenten-Inventar', '/de/agent-inventory-shadow-ai/'],
      ['managed-ai-operations', 'Managed AI Operations', '/de/managed-ai-operations/'],
    ],
    pricing: 'Monatliches Monitoring pro Unternehmen plus optionale Erfolgsgebühr bei gewonnenen Ausschreibungen.',
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
.hero h1{font-size:clamp(1.8rem,4.5vw,2.6rem);line-height:1.12;margin:0 0 14px;letter-spacing:-.02em}
.lede{color:var(--muted);font-size:1.1rem;max-width:48rem;margin:0 0 26px}
section{padding:40px 0;border-top:1px solid var(--line)}
h2{font-size:1.4rem;margin:0 0 18px;letter-spacing:-.01em}
p{margin:0 0 14px}
ul.feat{list-style:none;padding:0;margin:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
ul.feat li{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px}
ul.facts{list-style:none;padding:0;margin:0;display:grid;gap:10px}
ul.facts li{border-left:3px solid var(--brand);padding:6px 12px;color:var(--muted);background:var(--card);border-radius:0 10px 10px 0;font-size:.92rem}
.note{color:var(--muted);font-size:.88rem;max-width:48rem}
.grid{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px}
.card h3{font-size:.98rem;margin:0}
.card h3 a{color:var(--ink)}
.card h3 a:hover{color:var(--accent)}
.btn{display:inline-block;background:linear-gradient(90deg,#7c3aed,#ec4899);color:#fff;font-weight:700;padding:12px 20px;border-radius:10px}
.cta-row{display:flex;flex-wrap:wrap;gap:12px}
.price{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px 16px;color:var(--muted);font-size:.9rem;display:inline-block}
footer{margin-top:12px;border-top:1px solid var(--line);padding-top:20px;color:var(--muted);font-size:.85rem}
footer .wrap{display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;align-items:center;padding-top:18px;padding-bottom:18px}
@media(max-width:640px){.hero{padding:40px 0 28px}section{padding:30px 0}}
`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const url = (l) => (l.prefix ? `${SITE}/${l.prefix}` : `${SITE}/`) + SLUG + '/';

function render(l) {
  const c = C[l.code];
  const nav = LANGS.map((x) => `<a href="${url(x)}"${x.code === l.code ? ' aria-current="true"' : ''}>${x.code.toUpperCase()}</a>`).join('');
  const hreflang = LANGS.map((x) => `  <link rel="alternate" hreflang="${x.code}" href="${url(x)}">`).join('\n');
  const sec = (id, title, body) => `<section id="${id}"><h2>${esc(title)}</h2>${body}</section>`;
  const list = (items, cls) => `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
  const related = `<div class="grid">${c.related.map(([, n, h]) => `<div class="card"><h3><a href="${h}">${esc(n)}</a></h3></div>`).join('\n')}</div>`;
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Service', name: c.name, inLanguage: l.htmlLang, url: url(l), provider: { '@type': 'Organization', name: 'Zion Tech Group', address: '364 E Main St STE 1008, Middletown, DE 19709' }, description: c.description };
  return `<!DOCTYPE html>
<html lang="${l.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.name)} · Zion Tech Group</title>
<meta name="description" content="${esc(c.description)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${url(l)}">
${hreflang}
  <link rel="alternate" hreflang="x-default" href="${url(LANGS[0])}">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<style>${css}</style>
</head>
<body>
<header class="site">
  <div class="wrap">
    <a class="brand" href="${l.prefix ? `/${l.prefix}` : '/'}">Zion <span>Tech Group</span></a>
    <nav class="langs" aria-label="Language">${nav}</nav>
  </div>
</header>
<main id="main">
  <div class="wrap">
    <div class="hero">
      <h1>${esc(c.name)}</h1>
      <p class="lede">${esc(c.tagline)}</p>
      <div class="cta-row"><a class="btn" href="/discovery/">${esc(c.ctaPrimary)}</a></div>
    </div>
    <section id="about"><h2>${esc(c.name)}</h2><p class="note">${esc(c.description)}</p></section>
    ${sec('steps', c.stepsTitle, list(c.steps, 'feat'))}
    ${sec('facts', c.factsTitle, list(c.facts, 'facts'))}
    ${sec('deliver', c.deliverTitle, list(c.deliver, 'feat'))}
    ${sec('related', c.relatedTitle, related)}
    <section id="cta">
      <h2>${esc(c.ctaTitle)}</h2>
      <p class="note">${esc(c.ctaBody)}</p>
      <p><span class="price">${esc(c.pricing)}</span></p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">${esc(c.ctaPrimary)}</a>
        <a class="btn alt" href="/edital-desk/">Edital Desk</a>
      </div>
    </section>
  </div>
</main>
<footer>
  <div class="wrap">
    <div>${esc(c.footer)}</div>
    <div class="langs">${nav}</div>
  </div>
</footer>
</body>
</html>
`;
}

let n = 0;
for (const l of LANGS) {
  const rel = path.join(l.prefix, SLUG, 'index.html');
  fs.mkdirSync(path.dirname(path.join(PUBLIC, rel)), { recursive: true });
  fs.writeFileSync(path.join(PUBLIC, rel), render(l), 'utf8');
  n++;
}
console.log(`Wrote ${n} PNCP Tender Radar pages`);
