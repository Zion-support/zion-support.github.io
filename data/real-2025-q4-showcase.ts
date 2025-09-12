export type EnhancedRealMicroSaasService = {
  id: string;
  name: string;
  category?: string;
  description?: string;
  tagline?: string;
  price?: string | number;
  period?: string;
  features?: string[];
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link?: string;
};

export const real2025Q4Showcase: EnhancedRealMicroSaasService[] = [
  {
    id: 'genai-seo-copilot',
    name: 'GenAI SEO Copilot',
    category: 'AI & Data',
    tagline: 'On-page fixes, schema, and internal links in one click',
    description:
      'Automates audits and generates safe, structured improvements with review workflows and rollbacks.',
    price: '$79',
    period: '/month',
    features: [
      'Semantic audit and prioritized fixes',
      'JSON-LD schema generation',
      'Internal linking suggestions',
      'Safe change PRs with diff previews'
    ],
    popular: true,
    icon: '🔍',
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-100',
    link: '/services/genai-seo-copilot'
  },
  {
    id: 'customer-support-autoresponder',
    name: 'Customer Support Autoresponder',
    category: 'Developer Tools',
    tagline: 'LLM replies grounded in your docs, with guardrails',
    description:
      'Deflects repetitive tickets using retrieval-augmented answers, citations, and handoff rules.',
    price: '$99',
    period: '/month',
    features: [
      'RAG with citations',
      'Tone and brand controls',
      'Escalation and handoff policies',
      'Analytics and continuous learning'
    ],
    popular: true,
    icon: '💬',
    color: 'from-indigo-500 to-violet-600',
    textColor: 'text-indigo-100',
    link: '/services/customer-support-autoresponder'
  },
  {
    id: 'slo-guard-lite',
    name: 'SLO Guard Lite',
    category: 'Observability',
    tagline: 'Error budgets and burn alerts without APM lock-in',
    description:
      'Define SLOs with templates, receive burn-rate alerts, and get weekly reliability reports.',
    price: '$49',
    period: '/month',
    features: [
      'SLO templates',
      'Burn-rate paging',
      'Weekly reports',
      'OpenTelemetry integration'
    ],
    popular: false,
    icon: '📈',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-100',
    link: '/services/reliability-slo-guard'
  }
];

