/**
 * Zion — Agent Inventory & Shadow AI Discovery service pages (5 languages).
 *
 *   node scripts/generate-agent-inventory.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const SITE = 'https://ziontechgroup.com';
const SLUG = 'agent-inventory-shadow-ai';

const LANGS = [
  { code: 'en', prefix: '', htmlLang: 'en' },
  { code: 'pt', prefix: 'pt/', htmlLang: 'pt-BR' },
  { code: 'es', prefix: 'es/', htmlLang: 'es' },
  { code: 'fr', prefix: 'fr/', htmlLang: 'fr' },
  { code: 'de', prefix: 'de/', htmlLang: 'de' },
];

const C = {
  en: {
    name: 'Agent Inventory & Shadow AI Discovery',
    tagline: 'Find every AI agent running in your company — including the ones nobody approved.',
    description:
      'Most enterprises cannot say which AI agents are running. In 2026 surveys, only about one in five organisations had every agent formally inventoried, roughly half had continuous monitoring, and nearly half admitted they could not reliably inventory the agents already in production — while 46% were scaling agentic AI across departments. Shadow AI is not a policy gap, it is an inventory gap. This engagement discovers every agent, model, plugin and MCP connection in your environment, maps who owns it and what it can reach, classifies risk, and leaves you with a governed inventory, an audit trail and a remediation plan.',
    stepsTitle: 'How the discovery works',
    steps: [
      'Automated discovery of agents, models, plugins, MCP servers and connected tools across endpoints',
      'Attribution of every agent to a human owner, application, endpoint and intent',
      'Permission and attack-path mapping, including overprivileged machine identities',
      'Risk classification and a complete 30-day audit trail per agent',
      'A governed inventory register with review gates and least-privilege recommendations',
      'A written remediation plan and a quarterly re-check so the inventory does not go stale',
    ],
    factsTitle: 'Why this is urgent now',
    facts: [
      'Only about 18% of organisations have every AI agent formally inventoried and approved',
      '47% cannot reliably inventory the agents running in their own environment',
      '74% discovered more AI tools running than they expected — 30% found 16 or more',
      '52% found unauthorised AI applications inside their perimeter in the last year',
      'Only 23% can stop a misbehaving agent mid-action, and 11% can detect drift',
    ],
    deliverTitle: 'What you receive',
    deliver: [
      'A complete agent and model inventory with owners and permissions',
      'A shadow-AI register: unauthorised agents, models and MCP connections',
      'A risk classification per agent with the evidence behind it',
      'A 30-day audit trail an auditor can read without your help',
      'A remediation plan with quick wins and a 90-day roadmap',
    ],
    ctaTitle: 'Start with a Discovery',
    ctaBody:
      'A Discovery identifies which agent workflows matter most and where the inventory gaps are. One process, one report, one 30-minute session.',
    ctaPrimary: 'Start Free Discovery',
    relatedTitle: 'Paired with these Apps Network tools',
    related: [
      ['ai-governance-checklist', 'AI Governance Checklist', '/ai-governance-checklist/'],
      ['ai-ticket-sentinel', 'AI Ticket Sentinel', '/ai-ticket-sentinel/'],
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Change Risk Score', '/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/managed-ai-operations/'],
    ],
    pricing: 'Fixed-fee discovery, then a quarterly re-check retainer.',
    footer: 'Zion Tech Group · Delaware, USA',
  },
  pt: {
    name: 'Inventário de Agentes & Descoberta de Shadow AI',
    tagline: 'Encontre todos os agentes de IA na sua empresa — incluindo os que ninguém aprovou.',
    description:
      'A maioria das empresas não consegue dizer que agentes de IA estão a correr. Em 2026, apenas cerca de uma em cada cinco organizações tinha todos os agentes formalmente inventariados, cerca de metade tinha monitorização contínua, e quase metade admitiu não conseguir inventariar de forma fiável os agentes já em produção — enquanto 46% expandiam IA agente em vários departamentos. Shadow AI não é uma falha de política, é uma falha de inventário. Este serviço descobre todos os agentes, modelos, plugins e ligações MCP no seu ambiente, mapeia quem é o dono e o que cada um alcança, classifica o risco e entrega um inventário governado, um rastro de auditoria e um plano de correção.',
    stepsTitle: 'Como funciona a descoberta',
    steps: [
      'Descoberta automatizada de agentes, modelos, plugins, servidores MCP e ferramentas ligadas nos endpoints',
      'Atribuição de cada agente a um dono humano, aplicação, endpoint e intenção',
      'Mapeamento de permissões e caminhos de ataque, incluindo identidades de máquina sobre-privilegiadas',
      'Classificação de risco e rastro de auditoria completo de 30 dias por agente',
      'Registo de inventário governado com portões de revisão e recomendações de privilégio mínimo',
      'Plano de correção escrito e reverificação trimestral para o inventário não ficar desatualizado',
    ],
    factsTitle: 'Por que é urgente agora',
    facts: [
      'Apenas cerca de 18% das organizações têm todos os agentes formalmente inventariados e aprovados',
      '47% não conseguem inventariar de forma fiável os agentes no seu ambiente',
      '74% descobriram mais ferramentas de IA a correr do que esperavam — 30% encontraram 16 ou mais',
      '52% encontraram aplicações de IA não autorizadas dentro do perímetro no último ano',
      'Apenas 23% conseguem parar um agente em comportamento anómalo a meio da ação, e 11% detetam drift',
    ],
    deliverTitle: 'O que recebe',
    deliver: [
      'Inventário completo de agentes e modelos com donos e permissões',
      'Registo de shadow AI: agentes, modelos e ligações MCP não autorizados',
      'Classificação de risco por agente, com a evidência respetiva',
      'Rastro de auditoria de 30 dias que um auditor lê sem a sua ajuda',
      'Plano de correção com quick wins e um roadmap de 90 dias',
    ],
    ctaTitle: 'Comece com uma Discovery',
    ctaBody:
      'Uma Discovery identifica quais os fluxos de agentes que mais importam e onde estão as lacunas de inventário. Um processo, um relatório, uma sessão de 30 minutos.',
    ctaPrimary: 'Começar Discovery gratuita',
    relatedTitle: 'Pares úteis na Apps Network',
    related: [
      ['ai-governance-checklist', 'AI Governance Checklist', '/pt/ai-governance-checklist/'],
      ['ai-ticket-sentinel', 'AI Ticket Sentinel', '/pt/ai-ticket-sentinel/'],
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Escore de Risco de Mudança', '/pt/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/pt/managed-ai-operations/'],
    ],
    pricing: 'Discovery de taxa fixa, depois retabilidade de reverificação trimestral.',
    footer: 'Zion Tech Group · Delaware, EUA',
  },
  es: {
    name: 'Inventario de Agentes y Detección de Shadow AI',
    tagline: 'Localice todos los agentes de IA de su empresa, incluidos los que nadie aprobó.',
    description:
      'La mayoría de las empresas no puede decir qué agentes de IA están en ejecución. En 2026, solo alrededor de una de cada cinco organizaciones tenía todos los agentes formalmente inventariados, cerca de la mitad tenía monitorización continua y casi la mitad admitió que no podía inventariar de forma fiable los agentes ya en producción, mientras el 46% escalaba IA agente en varios departamentos. El shadow AI no es un problema de políticas, es un problema de inventario. Este servicio descubre todos los agentes, modelos, plugins y conexiones MCP de su entorno, mapea quién es el propietario y a qué llega cada uno, clasifica el riesgo y entrega un inventario gobernado, un rastro de auditoría y un plan de corrección.',
    stepsTitle: 'Cómo funciona el descubrimiento',
    steps: [
      'Descubrimiento automatizado de agentes, modelos, plugins, servidores MCP y herramientas conectadas',
      'Atribución de cada agente a un propietario humano, aplicación, endpoint e intención',
      'Mapeo de permisos y rutas de ataque, incluidas identidades de máquina con privilegios excesivos',
      'Clasificación de riesgo y rastro de auditoría completo de 30 días por agente',
      'Registro de inventario gobernado con puertas de revisión y recomendaciones de mínimo privilegio',
      'Plan de corrección escrito y revisión trimestral para que el inventario no quede obsoleto',
    ],
    factsTitle: 'Por qué es urgente ahora',
    facts: [
      'Solo alrededor del 18% de las organizaciones tiene todos los agentes formalmente inventariados y aprobados',
      'El 47% no puede inventariar de forma fiable los agentes de su entorno',
      'El 74% descubrió más herramientas de IA en ejecución de las esperadas; el 30% encontró 16 o más',
      'El 52% encontró aplicaciones de IA no autorizadas dentro de su perímetro en el último año',
      'Solo el 23% puede detener un agente que se comporta mal a mitad de acción, y el 11% detecta drift',
    ],
    deliverTitle: 'Qué recibe',
    deliver: [
      'Inventario completo de agentes y modelos con propietarios y permisos',
      'Registro de shadow AI: agentes, modelos y conexiones MCP no autorizados',
      'Clasificación de riesgo por agente con su evidencia',
      'Rastro de auditoría de 30 días que un auditor lee sin su ayuda',
      'Plan de corrección con quick wins y una hoja de ruta de 90 días',
    ],
    ctaTitle: 'Empiece con un Discovery',
    ctaBody:
      'Un Discovery identifica qué flujos de agentes importan más y dónde están las brechas de inventario. Un proceso, un informe, una sesión de 30 minutos.',
    ctaPrimary: 'Empezar Discovery gratuito',
    relatedTitle: 'Herramientas de la Apps Network',
    related: [
      ['ai-governance-checklist', 'AI Governance Checklist', '/es/ai-governance-checklist/'],
      ['ai-ticket-sentinel', 'AI Ticket Sentinel', '/es/ai-ticket-sentinel/'],
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Puntuación de Riesgo de Cambio', '/es/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/es/managed-ai-operations/'],
    ],
    pricing: 'Discovery de tarifa fija y luego retención de revisión trimestral.',
    footer: 'Zion Tech Group · Delaware, EE. UU.',
  },
  fr: {
    name: 'Inventaire des Agents & Découverte du Shadow AI',
    tagline: 'Identifiez tous les agents IA de votre entreprise — y compris ceux que personne n’a approuvés.',
    description:
      'La plupart des entreprises ne peuvent pas dire quels agents IA sont en exécution. En 2026, environ une organisation sur cinq seulement avait inventorié formellement tous ses agents, près de la moitié disposait d’une supervision continue, et près de la moitié admettait ne pas pouvoir inventorier de façon fiable les agents déjà en production — alors que 46 % déployaient de l’IA agentique dans plusieurs départements. Le shadow AI n’est pas un problème de politique, c’est un problème d’inventaire. Cette intervention découvre tous les agents, modèles, plugins et connexions MCP de votre environnement, attribue à chacun un propriétaire et une portée, classe le risque et vous laisse un inventaire gouverné, une piste d’audit et un plan de remédiation.',
    stepsTitle: 'Comment fonctionne la découverte',
    steps: [
      'Découverte automatisée des agents, modèles, plugins, serveurs MCP et outils connectés sur les endpoints',
      'Attribution de chaque agent à un propriétaire humain, une application, un endpoint et une intention',
      'Cartographie des permissions et des chemins d’attaque, y compris les identités machine sur-privilégiées',
      'Classification du risque et piste d’audit complète sur 30 jours par agent',
      'Registre d’inventaire gouverné avec portes de revue et recommandations de moindre privilège',
      'Plan de remédiation écrit et revérification trimestrielle pour que l’inventaire ne vieillisse pas',
    ],
    factsTitle: 'Pourquoi c’est urgent maintenant',
    facts: [
      'Seules environ 18 % des organisations ont inventorié et approuvé formellement tous leurs agents',
      '47 % ne peuvent pas inventorier de façon fiable les agents de leur environnement',
      '74 % ont découvert plus d’outils IA en exécution que prévu — 30 % en ont trouvé 16 ou plus',
      '52 % ont trouvé des applications IA non autorisées dans leur périmètre sur la dernière année',
      'Seuls 23 % peuvent arrêter un agent qui dérive en cours d’action, et 11 % détectent le drift',
    ],
    deliverTitle: 'Ce que vous recevez',
    deliver: [
      'Un inventaire complet des agents et modèles avec propriétaires et permissions',
      'Un registre de shadow AI : agents, modèles et connexions MCP non autorisés',
      'Une classification du risque par agent, avec les preuves',
      'Une piste d’audit de 30 jours qu’un auditeur lit sans votre aide',
      'Un plan de remédiation avec quick wins et une feuille de route à 90 jours',
    ],
    ctaTitle: 'Commencez par un Discovery',
    ctaBody:
      'Un Discovery identifie les flux d’agents qui comptent le plus et les lacunes d’inventaire. Un processus, un rapport, une session de 30 minutes.',
    ctaPrimary: 'Démarrer le Discovery gratuit',
    relatedTitle: 'Outils Apps Network associés',
    related: [
      ['ai-governance-checklist', 'AI Governance Checklist', '/fr/ai-governance-checklist/'],
      ['ai-ticket-sentinel', 'AI Ticket Sentinel', '/fr/ai-ticket-sentinel/'],
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Score de Risque de Changement', '/fr/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/fr/managed-ai-operations/'],
    ],
    pricing: 'Discovery à tarif fixe, puis rétention de revérification trimestrielle.',
    footer: 'Zion Tech Group · Delaware, États-Unis',
  },
  de: {
    name: 'Agenten-Inventar & Shadow-AI-Erkennung',
    tagline: 'Finden Sie jeden KI-Agenten in Ihrem Unternehmen — auch die nicht genehmigten.',
    description:
      'Die meisten Unternehmen können nicht sagen, welche KI-Agenten laufen. 2026 hatte nur etwa jedes fünfte Unternehmen alle Agenten formell inventarisiert, rund die Hälfte hatte kontinuierliches Monitoring, und fast die Hälfte gab zu, die Agenten in Produktion nicht zuverlässig inventarisieren zu können — während 46 % agentisches KI über mehrere Abteilungen skalierten. Shadow AI ist kein Policy-Problem, es ist ein Inventar-Problem. Dieses Engagement entdeckt alle Agenten, Modelle, Plugins und MCP-Verbindungen in Ihrer Umgebung, ordnet jedem einen Eigentümer und einen Zugriffsbereich zu, klassifiziert das Risiko und hinterlässt ein governances Inventar, eine Audit-Spur und einen Behebungsplan.',
    stepsTitle: 'So funktioniert die Erkennung',
    steps: [
      'Automatische Entdeckung von Agenten, Modellen, Plugins, MCP-Servern und verbundenen Tools auf Endpoints',
      'Zuordnung jedes Agenten zu einem menschlichen Eigentümer, Anwendung, Endpoint und Absicht',
      'Kartierung von Berechtigungen und Angriffspfaden, inklusive überprivilegierter Maschinenidentitäten',
      'Risikoklassifizierung und lückenlose 30-Tage-Audit-Spur pro Agent',
      'Governanceregister mit Review-Gates und Least-Privilege-Empfehlungen',
      'Schriftlicher Behebungsplan und quartalsweise Neuprüfung, damit das Inventar nicht veraltet',
    ],
    factsTitle: 'Warum das jetzt dringend ist',
    facts: [
      'Nur etwa 18 % der Organisationen haben alle KI-Agenten formell inventarisiert und genehmigt',
      '47 % können die Agenten in ihrer Umgebung nicht zuverlässig inventarisieren',
      '74 % fanden mehr KI-Tools in Betrieb als erwartet — 30 % fanden 16 oder mehr',
      '52 % fanden im letzten Jahr nicht autorisierte KI-Anwendungen in ihrer Perimeter',
      'Nur 23 % können einen fehlverhaltenden Agenten mitten in der Aktion stoppen, 11 % erkennen Drift',
    ],
    deliverTitle: 'Was Sie erhalten',
    deliver: [
      'Ein vollständiges Agenten- und Modellinventar mit Eigentümern und Berechtigungen',
      'Ein Shadow-AI-Register: nicht autorisierte Agenten, Modelle und MCP-Verbindungen',
      'Eine Risikoklassifizierung pro Agent mit Belegen',
      'Eine 30-Tage-Audit-Spur, die ein Auditor ohne Ihre Hilfe liest',
      'Ein Behebungsplan mit Quick Wins und einem 90-Tage-Roadmap',
    ],
    ctaTitle: 'Starten Sie mit einem Discovery',
    ctaBody:
      'Ein Discovery zeigt, welche Agenten-Workflows am wichtigsten sind und wo Inventar-Lücken bestehen. Ein Prozess, ein Bericht, eine 30-minütige Sitzung.',
    ctaPrimary: 'Kostenloses Discovery starten',
    relatedTitle: 'Passende Apps-Network-Tools',
    related: [
      ['ai-governance-checklist', 'AI Governance Checklist', '/de/ai-governance-checklist/'],
      ['ai-ticket-sentinel', 'AI Ticket Sentinel', '/de/ai-ticket-sentinel/'],
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Change-Risiko-Score', '/de/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/de/managed-ai-operations/'],
    ],
    pricing: 'Discovery zu Festpreis, danach quartalsweise Neuprüfung als Retainer.',
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
  const related = `<div class="grid">${c.related.map(([s, n, h]) => `<div class="card"><h3><a href="${h}">${esc(n)}</a></h3></div>`).join('\n')}</div>`;
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Service', name: c.name, inLanguage: l.htmlLang,
    url: url(l), provider: { '@type': 'Organization', name: 'Zion Tech Group', address: '364 E Main St STE 1008, Middletown, DE 19709' },
    description: c.description,
  };
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
        <a class="btn alt" href="/managed-ai-operations/">Managed AI Operations</a>
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
console.log(`Wrote ${n} Agent Inventory pages`);
