/** Shared Zion Apps Network catalog for Next.js surfaces + interlinks. */
export type AppsNetworkApp = {
  slug: string;
  name: string;
  href: string;
  description: string;
  group: 'money' | 'ops' | 'govern' | 'work' | 'ai' | 'field' | 'hub';
  related: string[];
};

export const APPS_NETWORK_HUB = {
  title: 'Zion Apps Network',
  canonical: 'https://ziontechgroup.com/apps-network/',
  hubs: [
    { name: 'Apps Network hub', href: '/apps-network/' },
    { name: 'Live catalog', href: '/apps/' },
    { name: 'Full directory', href: '/zion-app-network/' },
    { name: 'Playbook', href: '/apps/playbook/' },
    { name: 'Free AI/IT tools', href: '/free-ai-it-tools/' },
  ],
};

export const appsNetworkCatalog: AppsNetworkApp[] = [
  {
    slug: 'roi-calc',
    name: 'ROI calculator',
    href: '/roi-calc/',
    description: 'Hours leaked vs Discovery / Consulting / Starter.',
    group: 'money',
    related: ['token-cost', 'finops-estimator', 'cloud-waste'],
  },
  {
    slug: 'token-cost',
    name: 'Token cost',
    href: '/token-cost/',
    description: 'LLM spend envelope before you ship an agent.',
    group: 'money',
    related: ['llm-gateway', 'finops-estimator', 'roi-calc'],
  },
  {
    slug: 'finops-estimator',
    name: 'FinOps estimator',
    href: '/finops-estimator/',
    description: 'Compute, storage, egress and model spend sketch.',
    group: 'money',
    related: ['cloud-waste', 'finops-autopilot', 'token-cost'],
  },
  {
    slug: 'cloud-waste',
    name: 'Cloud waste',
    href: '/cloud-waste/',
    description: 'Idle / over-provision sketch for cloud + model lines.',
    group: 'money',
    related: ['finops-estimator', 'finops-autopilot', 'cloud-cost-estimator'],
  },
  {
    slug: 'sla-calculator',
    name: 'SLA calculator',
    href: '/sla-calculator/',
    description: 'Allowed downtime and penalty exposure.',
    group: 'ops',
    related: ['incident-cost', 'change-risk', 'patch-window'],
  },
  {
    slug: 'incident-cost',
    name: 'Incident cost',
    href: '/incident-cost/',
    description: 'Revenue + users + hours down → a Discovery number.',
    group: 'ops',
    related: ['sla-calculator', 'change-risk', 'zion-ai-incident-commander'],
  },
  {
    slug: 'patch-window',
    name: 'Patch window',
    href: '/patch-window/',
    description: 'Maintenance nights for a patch batch.',
    group: 'ops',
    related: ['change-risk', 'incident-cost', 'sla-calculator'],
  },
  {
    slug: 'change-risk',
    name: 'Change risk',
    href: '/change-risk/',
    description: 'Score change risk before a patch window.',
    group: 'ops',
    related: ['patch-window', 'incident-cost', 'stack-audit'],
  },
  {
    slug: 'ai-governance',
    name: 'AI governance',
    href: '/ai-governance-checklist/',
    description: 'Ten controls. Live readiness score.',
    group: 'govern',
    related: ['prompt-shield', 'stack-audit', 'secrets-sentinel'],
  },
  {
    slug: 'stack-audit',
    name: 'Stack audit',
    href: '/stack-audit/',
    description: 'Ten yes/no checks that pick the next SKU.',
    group: 'govern',
    related: ['ai-governance', 'agent-brief', 'rfp-readiness'],
  },
  {
    slug: 'rfp-readiness',
    name: 'RFP readiness',
    href: '/rfp-readiness/',
    description: 'Score an edital / RFQ before you bid.',
    group: 'govern',
    related: ['edital-desk', 'licitacao-radar', 'ai-tender-scout'],
  },
  {
    slug: 'prompt-library',
    name: 'Prompt library',
    href: '/prompt-library/',
    description: 'Ten enterprise IT-ops prompts, copy-ready.',
    group: 'work',
    related: ['agent-brief', 'prompt-shield', 'llm-gateway'],
  },
  {
    slug: 'agent-brief',
    name: 'Agent brief',
    href: '/agent-brief/',
    description: 'One-pager for Discovery. Nothing stored.',
    group: 'work',
    related: ['prompt-library', 'stack-audit', 'llm-gateway'],
  },
  {
    slug: 'llm-gateway',
    name: 'LLM Gateway',
    href: '/llm-gateway/',
    description: 'Smart model routing, caching & failover.',
    group: 'ai',
    related: ['token-cost', 'model-observatory', 'prompt-shield'],
  },
  {
    slug: 'prompt-shield',
    name: 'Prompt Shield',
    href: '/prompt-shield/',
    description: 'LLM security testing & prompt-injection defense.',
    group: 'ai',
    related: ['ai-governance', 'secrets-sentinel', 'llm-gateway'],
  },
  {
    slug: 'finops-autopilot',
    name: 'FinOps Autopilot',
    href: '/finops-autopilot/',
    description: 'Cloud cost anomaly detection & rightsizing.',
    group: 'money',
    related: ['cloud-waste', 'finops-estimator', 'cloud-cost-estimator'],
  },
  {
    slug: 'field-dispatch',
    name: 'AI Field Dispatch',
    href: '/zion-ai-field-dispatch-optimizer/',
    description: 'Roteirização e despacho inteligente de técnicos.',
    group: 'field',
    related: ['zion-ai-spare-parts-matcher', 'warranty-lens', 'zion-ai-rma-tracker'],
  },
  {
    slug: 'licitacao-radar',
    name: 'Licitação Radar',
    href: '/licitacao-radar/',
    description: 'Monitoramento de licitações públicas no Brasil.',
    group: 'govern',
    related: ['rfp-readiness', 'edital-desk', 'ai-tender-scout'],
  },
  {
    slug: 'zion-ai-incident-commander',
    name: 'AI Incident Commander',
    href: '/zion-ai-incident-commander/',
    description: 'Incident response orchestration and automation.',
    group: 'ops',
    related: ['incident-cost', 'ops-runbook-ai', 'change-risk'],
  },
  {
    slug: 'model-observatory',
    name: 'Model Observatory',
    href: '/model-observatory/',
    description: 'ML/LLM observability, drift detection, cost telemetry.',
    group: 'ai',
    related: ['llm-gateway', 'token-cost', 'finops-autopilot'],
  },
  {
    slug: 'secrets-sentinel',
    name: 'Secrets Sentinel',
    href: '/secrets-sentinel/',
    description: 'Secret scanning and leak response.',
    group: 'govern',
    related: ['prompt-shield', 'ai-governance', 'stack-audit'],
  },
  {
    slug: 'edital-desk',
    name: 'Edital desk',
    href: '/edital-desk/',
    description: 'RFQ / TR brief. No invented hardware prices.',
    group: 'work',
    related: ['rfp-readiness', 'licitacao-radar', 'agent-brief'],
  },
  {
    slug: 'cloud-cost-estimator',
    name: 'Cloud cost estimator',
    href: '/cloud-cost-estimator/',
    description: 'Multi-cloud compute & serverless price comparison.',
    group: 'money',
    related: ['cloud-waste', 'finops-estimator', 'finops-autopilot'],
  },
  {
    slug: 'zion-ai-spare-parts-matcher',
    name: 'AI Spare Parts Matcher',
    href: '/zion-ai-spare-parts-matcher/',
    description: 'Match spare parts by part number, photo, and equivalence.',
    group: 'field',
    related: ['field-dispatch', 'warranty-lens', 'depot-stock-balancer'],
  },
  {
    slug: 'warranty-lens',
    name: 'Warranty Lens',
    href: '/warranty-lens/',
    description: 'Warranty lookup by serial with coverage history.',
    group: 'field',
    related: ['field-dispatch', 'zion-ai-rma-tracker', 'zion-ai-spare-parts-matcher'],
  },
  {
    slug: 'ops-runbook-ai',
    name: 'Ops Runbook AI',
    href: '/ops-runbook-ai/',
    description: 'Operational runbooks generated from incidents.',
    group: 'ops',
    related: ['zion-ai-incident-commander', 'incident-cost', 'change-risk'],
  },
  {
    slug: 'ai-tender-scout',
    name: 'AI Tender Scout',
    href: '/ai-tender-scout/',
    description: 'Public-sector bid discovery & proposal support.',
    group: 'govern',
    related: ['licitacao-radar', 'rfp-readiness', 'edital-desk'],
  },
  {
    slug: 'depot-stock-balancer',
    name: 'Depot Stock Balancer',
    href: '/depot-stock-balancer/',
    description: 'Balance inventory across depots with recommendations.',
    group: 'field',
    related: ['zion-ai-spare-parts-matcher', 'field-dispatch', 'warranty-lens'],
  },
  {
    slug: 'zion-ai-rma-tracker',
    name: 'AI RMA Tracker',
    href: '/zion-ai-rma-tracker/',
    description: 'RMA tracking with status, deadlines, and alerts.',
    group: 'field',
    related: ['warranty-lens', 'field-dispatch', 'zion-ai-spare-parts-matcher'],
  },
];

export const appsNetworkBySlug = Object.fromEntries(
  appsNetworkCatalog.map((app) => [app.slug, app])
) as Record<string, AppsNetworkApp>;

export function relatedApps(slug: string, limit = 4): AppsNetworkApp[] {
  const app = appsNetworkBySlug[slug];
  if (!app) return appsNetworkCatalog.slice(0, limit);
  const fromRelated = app.related
    .map((s) => appsNetworkBySlug[s])
    .filter(Boolean) as AppsNetworkApp[];
  if (fromRelated.length >= limit) return fromRelated.slice(0, limit);
  const fillers = appsNetworkCatalog.filter(
    (a) => a.slug !== slug && !fromRelated.some((r) => r.slug === a.slug)
  );
  return [...fromRelated, ...fillers].slice(0, limit);
}

export const homepageFeaturedApps = [
  'llm-gateway',
  'prompt-shield',
  'finops-autopilot',
  'token-cost',
  'incident-cost',
  'change-risk',
  'cloud-waste',
  'field-dispatch',
  'licitacao-radar',
  'zion-ai-incident-commander',
  'rfp-readiness',
  'model-observatory',
]
  .map((s) => appsNetworkBySlug[s])
  .filter(Boolean) as AppsNetworkApp[];
