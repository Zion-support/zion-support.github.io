/**
 * Zion — AI & IT ROI Benchmarks pages (5 languages).
 *   node scripts/generate-benchmarks.mjs
 * All figures are public third-party benchmarks, cited in the page footer.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const SITE = 'https://ziontechgroup.com';
const SLUG = 'ai-roi-benchmarks';

const LANGS = [
  { code: 'en', prefix: '', htmlLang: 'en' },
  { code: 'pt', prefix: 'pt/', htmlLang: 'pt-BR' },
  { code: 'es', prefix: 'es/', htmlLang: 'es' },
  { code: 'fr', prefix: 'fr/', htmlLang: 'fr' },
  { code: 'de', prefix: 'de/', htmlLang: 'de' },
];

const C = {
  en: {
    name: 'AI & IT ROI Benchmarks',
    tagline: 'The public numbers buyers use to justify an AI or IT operations investment — and the method to build your own case.',
    description:
      'Before you approve an AI or IT operations investment, finance wants a number. This page collects the public, third-party benchmarks that buying committees actually cite — Forrester Total Economic Impact studies, IT automation research and industry cost baselines — and shows the calculation method used to turn a proxy metric into a defensible euro, real or dollar figure. No client data, no invented prices: only published figures with their source, so you can check them.',
    methodTitle: 'How to build a defensible business case',
    method: [
      'Start from your own ticket export: cost per ticket by category, and the share of requests that need no human at all',
      'Use proxy metrics with disclosed logic — adoption against eligible users, error and rework rate, cycle time',
      'Convert to money only where the assumption chain is short and the rate is already accepted by your finance team',
      'Separate hard savings (cancelled contracts, retired systems) from estimated productivity gains',
      'Measure before and after: MTTR, first-contact resolution and automation rate, by category',
      'Re-check quarterly — a benchmark decays as fast as the technology it describes',
    ],
    benchTitle: 'Published benchmarks buyers cite',
    bench: [
      'Forrester TEI, autonomous IT operations: 235% ROI, payback under six months, $20.1M benefits over three years',
      'Same study: 75% reduction in mean time to repair, 95% better patching efficiency, 80% software licence reclamation',
      'Forrester TEI, certificate lifecycle automation: 356% ROI, under six months payback, 95% fewer incidents, 65–95% infrastructure cost reduction',
      'Forrester TEI, digital workplace consolidation: 254% ROI, nine months payback, three legacy tools replaced by one',
      'IT automation in practice: over $600k saved in six months across 54 workflows and 7,000+ reclaimed hours',
      'Companies waste 35–45% of their technology budget on redundant, outdated or poorly integrated systems',
      'Top performers spend 4–6% of revenue on IT, versus 2–3% for average companies (Gartner)',
      'Accounts using a self-service portal renewed six points above accounts that never activated',
    ],
    useTitle: 'How Zion uses these numbers',
    use: [
      'We quote the benchmark range before proposing scope, so you can challenge it',
      'We write the assumption chain into the proposal, line by line',
      'We agree the measurement points with you before work starts, not after',
      'We report against those points, in writing, at the end of the engagement',
    ],
    ctaTitle: 'Get your own number',
    ctaBody: 'A Discovery produces a one-page business case for one process in your company, using your ticket data. One process, one report, one 30-minute session.',
    ctaPrimary: 'Start Free Discovery',
    relatedTitle: 'Paired with these Apps Network tools',
    related: [
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Change Risk Score', '/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/managed-ai-operations/'],
      ['agent-inventory-shadow-ai', 'Agent Inventory', '/agent-inventory-shadow-ai/'],
      ['pncp-tender-radar', 'PNCP AI Tender Radar', '/pncp-tender-radar/'],
    ],
    sources: 'Sources: Forrester Total Economic Impact studies (Tanium, Keyfactor, LumApps, Device-as-a-Service); Serval automation results (Cribl); Gartner IT spending benchmarks; Intellectsoft digital transformation ROI guidance. Figures are third-party published results for other organisations — they are benchmarks, not a promise of your result.',
    pricing: 'Benchmarks are public and free. A business case built from your data is a fixed-fee Discovery.',
    footer: 'Zion Tech Group · Delaware, USA',
  },
  pt: {
    name: 'Benchmarks de ROI em IA e TI',
    tagline: 'Os números públicos que os compradores usam para justificar um investimento em IA ou operações de TI — e o método para construir o seu próprio caso.',
    description:
      'Antes de aprovar um investimento em IA ou operações de TI, a área financeira quer um número. Esta página reúne os benchmarks públicos e de terceiros que os comités de compra realmente citam — estudos Forrester Total Economic Impact, investigação sobre automação de TI e referências de custo do setor — e mostra o método de cálculo usado para transformar uma métrica proxy num valor defendível em euro, real ou dólar. Sem dados de clientes, sem preços inventados: apenas valores publicados com a fonte, para poder verificá-los.',
    methodTitle: 'Como construir um business case defendível',
    method: [
      'Comece pelo seu próprio export de tickets: custo por ticket por categoria e a parte dos pedidos que não precisa de ninguém',
      'Use métricas proxy com lógica explícita — adoção face aos utilizadores elegíveis, taxa de erro e retrabalho, tempo de ciclo',
      'Converta em dinheiro apenas onde a cadeia de premissas é curta e a taxa já é aceite pela sua área financeira',
      'Separe a poupança dura (contratos cancelados, sistemas aposentados) dos ganhos de produtividade estimados',
      'Meça antes e depois: MTTR, resolução no primeiro contacto e taxa de automação, por categoria',
      'Reveja trimestralmente — um benchmark desatualiza-se tão depressa como a tecnologia que descreve',
    ],
    benchTitle: 'Benchmarks publicados que os compradores citam',
    bench: [
      'Forrester TEI, operações de TI autónomas: 235% de ROI, retorno em menos de seis meses, US$ 20,1 milhões de benefícios em três anos',
      'Mesmo estudo: 75% de redução do tempo médio de reparação, 95% mais eficiência em patching, 80% de recuperação de licenças de software',
      'Forrester TEI, automação do ciclo de vida de certificados: 356% de ROI, retorno em menos de seis meses, 95% menos incidentes, 65–95% de redução de custo de infraestrutura',
      'Forrester TEI, consolidação do digital workplace: 254% de ROI, retorno em nove meses, três ferramentas legadas substituídas por uma',
      'Automação de TI na prática: mais de US$ 600 mil poupados em seis meses em 54 fluxos e mais de 7.000 horas recuperadas',
      'As empresas desperdiçam 35–45% do orçamento de tecnologia em sistemas redundantes, desatualizados ou mal integrados',
      'Os melhores gastam 4–6% da receita em TI, contra 2–3% das empresas médias (Gartner)',
      'Contas com portal de self-service renovaram seis pontos acima das contas que nunca ativaram',
    ],
    useTitle: 'Como a Zion usa estes números',
    use: [
      'Citamos a faixa do benchmark antes de propor o âmbito, para poder contestá-la',
      'Escrevemos a cadeia de premissas na proposta, linha a linha',
      'Acordamos os pontos de medição consigo antes de começar, não depois',
      'Reportamos contra esses pontos, por escrito, no fim do trabalho',
    ],
    ctaTitle: 'Obtenha o seu próprio número',
    ctaBody: 'Uma Discovery produz um business case de uma página para um processo da sua empresa, usando os seus dados de tickets. Um processo, um relatório, uma sessão de 30 minutos.',
    ctaPrimary: 'Começar Discovery gratuita',
    relatedTitle: 'Pares úteis na Apps Network',
    related: [
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Escore de Risco de Mudança', '/pt/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/pt/managed-ai-operations/'],
      ['agent-inventory-shadow-ai', 'Inventário de Agentes', '/pt/agent-inventory-shadow-ai/'],
      ['pncp-tender-radar', 'PNCP AI Tender Radar', '/pt/pncp-tender-radar/'],
    ],
    sources: 'Fontes: estudos Forrester Total Economic Impact (Tanium, Keyfactor, LumApps, Device-as-a-Service); resultados de automação Serval (Cribl); benchmarks de gasto em TI da Gartner; guia de ROI de transformação digital da Intellectsoft. Os valores são resultados publicados de terceiros para outras organizações — são benchmarks, não uma promessa do seu resultado.',
    pricing: 'Os benchmarks são públicos e gratuitos. Um business case construído com os seus dados é uma Discovery de taxa fixa.',
    footer: 'Zion Tech Group · Delaware, EUA',
  },
  es: {
    name: 'Benchmarks de ROI en IA y TI',
    tagline: 'Los números públicos que los compradores usan para justificar una inversión en IA u operaciones de TI — y el método para construir su propio caso.',
    description:
      'Antes de aprobar una inversión en IA u operaciones de TI, finanzas quiere un número. Esta página reúne los benchmarks públicos y de terceros que los comités de compra citan de verdad — estudios Forrester Total Economic Impact, investigación sobre automatización de TI y referencias de coste del sector — y muestra el método de cálculo que convierte una métrica proxy en una cifra defendible en euro, real o dólar. Sin datos de clientes ni precios inventados: solo cifras publicadas con su fuente, para que pueda verificarlas.',
    methodTitle: 'Cómo construir un business case defendible',
    method: [
      'Empiece por su propio export de tickets: coste por ticket por categoría y la parte de las solicitudes que no necesita a nadie',
      'Use métricas proxy con lógica explícita — adopción frente a usuarios elegibles, tasa de error y retrabajo, tiempo de ciclo',
      'Convierta a dinero solo donde la cadena de supuestos es corta y la tasa ya la acepta su área financiera',
      'Separe el ahorro duro (contratos cancelados, sistemas retirados) de las ganancias de productividad estimadas',
      'Mida antes y después: MTTR, resolución en el primer contacto y tasa de automatización, por categoría',
      'Revise trimestralmente: un benchmark se obsolece tan rápido como la tecnología que describe',
    ],
    benchTitle: 'Benchmarks publicados que citan los compradores',
    bench: [
      'Forrester TEI, operaciones de TI autónomas: 235% de ROI, retorno en menos de seis meses, US$ 20,1 millones de beneficios en tres años',
      'Mismo estudio: 75% de reducción del tiempo medio de reparación, 95% más eficiencia en parcheo, 80% de recuperación de licencias de software',
      'Forrester TEI, automatización del ciclo de vida de certificados: 356% de ROI, retorno en menos de seis meses, 95% menos incidentes, 65–95% de reducción de coste de infraestructura',
      'Forrester TEI, consolidación del digital workplace: 254% de ROI, retorno en nueve meses, tres herramientas heredadas sustituidas por una',
      'Automatización de TI en la práctica: más de US$ 600 mil ahorrados en seis meses en 54 flujos y más de 7.000 horas recuperadas',
      'Las empresas desperdician el 35–45% de su presupuesto tecnológico en sistemas redundantes, obsoletos o mal integrados',
      'Los mejores gastan el 4–6% de los ingresos en TI, frente al 2–3% de las empresas medias (Gartner)',
      'Las cuentas con portal de autoservicio renovaron seis puntos por encima de las que nunca lo activaron',
    ],
    useTitle: 'Cómo usa Zion estos números',
    use: [
      'Citamos el rango del benchmark antes de proponer el alcance, para que pueda discutirlo',
      'Escribimos la cadena de supuestos en la propuesta, línea a línea',
      'Acordamos los puntos de medición con usted antes de empezar, no después',
      'Informamos contra esos puntos, por escrito, al terminar el trabajo',
    ],
    ctaTitle: 'Obtenga su propio número',
    ctaBody: 'Un Discovery produce un business case de una página para un proceso de su empresa, usando sus datos de tickets. Un proceso, un informe, una sesión de 30 minutos.',
    ctaPrimary: 'Empezar Discovery gratuito',
    relatedTitle: 'Herramientas de la Apps Network',
    related: [
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Puntuación de Riesgo de Cambio', '/es/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/es/managed-ai-operations/'],
      ['agent-inventory-shadow-ai', 'Inventario de Agentes', '/es/agent-inventory-shadow-ai/'],
      ['pncp-tender-radar', 'PNCP AI Tender Radar', '/es/pncp-tender-radar/'],
    ],
    sources: 'Fuentes: estudios Forrester Total Economic Impact (Tanium, Keyfactor, LumApps, Device-as-a-Service); resultados de automatización de Serval (Cribl); benchmarks de gasto en TI de Gartner; guía de ROI de transformación digital de Intellectsoft. Las cifras son resultados publicados de terceros para otras organizaciones: son benchmarks, no una promesa de su resultado.',
    pricing: 'Los benchmarks son públicos y gratuitos. Un business case construido con sus datos es un Discovery de tarifa fija.',
    footer: 'Zion Tech Group · Delaware, EE. UU.',
  },
  fr: {
    name: 'Benchmarks ROI IA & IT',
    tagline: 'Les chiffres publics que les acheteurs utilisent pour justifier un investissement en IA ou en opérations IT — et la méthode pour construire votre propre cas.',
    description:
      'Avant d’approuver un investissement en IA ou en opérations IT, la finance veut un chiffre. Cette page rassemble les benchmarks publics et tiers que les comités d’achat citent réellement — études Forrester Total Economic Impact, recherche sur l’automatisation IT et références de coût du secteur — et montre la méthode de calcul qui transforme une métrique proxy en un montant défendable en euro, real ou dollar. Aucune donnée client, aucun prix inventé : uniquement des chiffres publiés avec leur source, pour que vous puissiez les vérifier.',
    methodTitle: 'Comment construire un business case défendable',
    method: [
      'Partez de votre propre export de tickets : coût par ticket par catégorie, et la part des demandes qui ne nécessite personne',
      'Utilisez des métriques proxy à logique explicite — adoption rapportée aux utilisateurs éligibles, taux d’erreur et de reprise, temps de cycle',
      'Convertissez en argent uniquement là où la chaîne d’hypothèses est courte et le taux déjà accepté par votre finance',
      'Séparrez les économies dures (contrats résiliés, systèmes retirés) des gains de productivité estimés',
      'Mesurez avant et après : MTTR, résolution au premier contact et taux d’automatisation, par catégorie',
      'Revérifiez trimestriellement — un benchmark vieillit aussi vite que la technologie qu’il décrit',
    ],
    benchTitle: 'Benchmarks publics cités par les acheteurs',
    bench: [
      'Forrester TEI, opérations IT autonomes : 235 % de ROI, retour en moins de six mois, 20,1 M$ de bénéfices sur trois ans',
      'Même étude : 75 % de réduction du temps moyen de réparation, 95 % de meilleure efficacité de patching, 80 % de récupération de licences',
      'Forrester TEI, automatisation du cycle de vie des certificats : 356 % de ROI, retour en moins de six mois, 95 % d’incidents en moins, 65–95 % de réduction du coût d’infrastructure',
      'Forrester TEI, consolidation du digital workplace : 254 % de ROI, retour en neuf mois, trois outils hérités remplacés par un',
      'Automatisation IT en pratique : plus de 600 k$ économisés en six mois sur 54 flux et plus de 7 000 heures récupérées',
      'Les entreprises gaspillent 35–45 % de leur budget technologique en systèmes redondants, obsolètes ou mal intégrés',
      'Les meilleurs dépensent 4–6 % de leur chiffre d’affaires en IT, contre 2–3 % pour les entreprises moyennes (Gartner)',
      'Les comptes utilisant un portail de self-service ont renouvelé six points au-dessus des comptes jamais activés',
    ],
    useTitle: 'Comment Zion utilise ces chiffres',
    use: [
      'Nous citons la fourchette du benchmark avant de proposer le périmètre, pour que vous puissiez la discuter',
      'Nous écrivons la chaîne d’hypothèses dans la proposition, ligne par ligne',
      'Nous convenons des points de mesure avec vous avant de commencer, pas après',
      'Nous rendons compte sur ces points, par écrit, à la fin de la mission',
    ],
    ctaTitle: 'Obtenez votre propre chiffre',
    ctaBody: 'Un Discovery produit un business case d’une page pour un processus de votre entreprise, à partir de vos données de tickets. Un processus, un rapport, une session de 30 minutes.',
    ctaPrimary: 'Démarrer le Discovery gratuit',
    relatedTitle: 'Outils Apps Network associés',
    related: [
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Score de Risque de Changement', '/fr/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/fr/managed-ai-operations/'],
      ['agent-inventory-shadow-ai', 'Inventaire des Agents', '/fr/agent-inventory-shadow-ai/'],
      ['pncp-tender-radar', 'PNCP AI Tender Radar', '/fr/pncp-tender-radar/'],
    ],
    sources: 'Sources : études Forrester Total Economic Impact (Tanium, Keyfactor, LumApps, Device-as-a-Service) ; résultats d’automatisation Serval (Cribl) ; benchmarks de dépenses IT de Gartner ; guide ROI de transformation digitale d’Intellectsoft. Les chiffres sont des résultats tiers publiés pour d’autres organisations — ce sont des benchmarks, pas une promesse de votre résultat.',
    pricing: 'Les benchmarks sont publics et gratuits. Un business case construit sur vos données est un Discovery à tarif fixe.',
    footer: 'Zion Tech Group · Delaware, États-Unis',
  },
  de: {
    name: 'KI- & IT-ROI-Benchmarks',
    tagline: 'Die öffentlichen Zahlen, mit denen Käufer eine KI- oder IT-Operations-Investition rechtfertigen — und die Methode, Ihren eigenen Fall zu bauen.',
    description:
      'Bevor Sie eine KI- oder IT-Operations-Investition freigeben, will die Finanzabteilung eine Zahl. Diese Seite sammelt die öffentlichen und von Dritten stammenden Benchmarks, die Einkaufsausschüsse tatsächlich zitieren — Forrester Total Economic Impact-Studien, Recherche zur IT-Automatisierung und Branchenkostenbasiswerte — und zeigt die Rechenmethode, mit der eine Proxy-Kennzahl in eine vertretbare Zahl in Euro, Real oder Dollar übersetzt wird. Keine Kundendaten, keine erfundenen Preise: nur veröffentlichte Werte mit Quelle, damit Sie sie prüfen können.',
    methodTitle: 'So bauen Sie ein vertretbares Business Case',
    method: [
      'Starten Sie mit Ihrem eigenen Ticket-Export: Kosten pro Ticket nach Kategorie und der Anteil der Anfragen, der ohne Menschen auskommt',
      'Nutzen Sie Proxy-Kennzahlen mit offengelegter Logik — Adoption gegenüber berechtigten Nutzern, Fehler- und Nacharbeitsrate, Zykluszeit',
      'Rechnen Sie nur dann in Geld um, wo die Annahmenkette kurz ist und der Satz von Ihrer Finanzabteilung bereits akzeptiert wird',
      'Trennen Sie harte Einsparungen (gekündigte Verträge, abgediente Systeme) von geschätzten Produktivitätsgewinnen',
      'Messen Sie vorher und nachher: MTTR, First-Contact-Resolution und Automatisierungsgrad, nach Kategorie',
      'Prüfen Sie quartalsweise — ein Benchmark veraltet so schnell wie die Technologie, die er beschreibt',
    ],
    benchTitle: 'Veröffentlichte Benchmarks, die Käufer zitieren',
    bench: [
      'Forrester TEI, autonome IT-Operationen: 235 % ROI, Amortisation in unter sechs Monaten, 20,1 Mio. USD Nutzen über drei Jahre',
      'Gleiche Studie: 75 % geringere Mean Time to Repair, 95 % bessere Patching-Effizienz, 80 % Softwarelizenz-Rückgewinnung',
      'Forrester TEI, Automatisierung des Zertifikats-Lebenszyklus: 356 % ROI, Amortisation in unter sechs Monaten, 95 % weniger Vorfälle, 65–95 % geringere Infrastrukturkosten',
      'Forrester TEI, Konsolidierung des digitalen Arbeitsplatzes: 254 % ROI, Amortisation in neun Monaten, drei Legacy-Tools durch eines ersetzt',
      'IT-Automatisierung in der Praxis: über 600.000 USD in sechs Monaten eingespart, 54 Workflows, über 7.000 zurückgewonnene Stunden',
      'Unternehmen verschwenden 35–45 % ihres Technologiebudgets für redundante, veraltete oder schlecht integrierte Systeme',
      'Spitzenreiter geben 4–6 % des Umsatzes für IT aus, gegenüber 2–3 % bei durchschnittlichen Unternehmen (Gartner)',
      'Konten mit Self-Service-Portal verlängerten sechs Punkte über Konten, die es nie aktiviert haben',
    ],
    useTitle: 'Wie Zion diese Zahlen nutzt',
    use: [
      'Wir nennen die Benchmark-Spanne, bevor wir den Umfang vorschlagen, damit Sie sie hinterfragen können',
      'Wir schreiben die Annahmenkette in den Vorschlag, Zeile für Zeile',
      'Wir vereinbaren die Messpunkte mit Ihnen vor Arbeitsbeginn, nicht danach',
      'Wir berichten schriftlich zu diesen Punkten am Ende des Engagements',
    ],
    ctaTitle: 'Ihre eigene Zahl',
    ctaBody: 'Ein Discovery erstellt ein einseitiges Business Case für einen Prozess in Ihrem Unternehmen auf Basis Ihrer Ticketdaten. Ein Prozess, ein Bericht, eine 30-minütige Sitzung.',
    ctaPrimary: 'Kostenloses Discovery starten',
    relatedTitle: 'Passende Apps-Network-Tools',
    related: [
      ['ops-runbook-ai', 'Ops Runbook AI', '/ops-runbook-ai/'],
      ['change-risk', 'Change-Risiko-Score', '/de/change-risk/'],
      ['model-observatory', 'Model Observatory', '/model-observatory/'],
      ['managed-ai-operations', 'Managed AI Operations', '/de/managed-ai-operations/'],
      ['agent-inventory-shadow-ai', 'Agenten-Inventar', '/de/agent-inventory-shadow-ai/'],
      ['pncp-tender-radar', 'PNCP AI Tender Radar', '/de/pncp-tender-radar/'],
    ],
    sources: 'Quellen: Forrester Total Economic Impact-Studien (Tanium, Keyfactor, LumApps, Device-as-a-Service); Serval-Automatisierungsergebnisse (Cribl); Gartner-IT-Ausgaben-Benchmarks; Intellectsoft-Leitfaden zur ROI von Digitaler Transformation. Die Zahlen sind veröffentlichte Drittergebnisse für andere Organisationen — Benchmarks, keine Zusage Ihres Ergebnisses.',
    pricing: 'Benchmarks sind öffentlich und kostenlos. Ein Business Case auf Basis Ihrer Daten ist ein Discovery zu Festpreis.',
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
.src{border-top:1px solid var(--line);padding-top:16px;margin-top:8px;font-size:.78rem;color:#7c8aa5}
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
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: c.name, inLanguage: l.htmlLang, url: url(l), author: { '@type': 'Organization', name: 'Zion Tech Group' }, description: c.description };
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
    ${sec('method', c.methodTitle, list(c.method, 'feat'))}
    ${sec('bench', c.benchTitle, list(c.bench, 'facts'))}
    ${sec('use', c.useTitle, list(c.use, 'feat'))}
    ${sec('related', c.relatedTitle, related)}
    <section id="cta">
      <h2>${esc(c.ctaTitle)}</h2>
      <p class="note">${esc(c.ctaBody)}</p>
      <p><span class="price">${esc(c.pricing)}</span></p>
      <div class="cta-row">
        <a class="btn" href="/discovery/">${esc(c.ctaPrimary)}</a>
        <a class="btn alt" href="/plans/">${l.code === 'pt' ? 'Planos' : 'Plans'}</a>
      </div>
    </section>
    <p class="src">${esc(c.sources)}</p>
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
console.log(`Wrote ${n} benchmark pages`);
