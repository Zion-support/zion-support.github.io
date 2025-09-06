<<<<<<< HEAD


origin/cursor/expand-services-advertise-and-build-project-c28b

import { ServiceVariant } from '../types/service-variants';
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  category: string;
  link: string;
  variant?: ServiceVariant;
  rating?: number;
  customers?: number;
  trial_days?: number;
  setup_time?: string;
  contact_info: {
    mobile: string;
    email: string;
    address: string;
    website?: string;
  }
<<<<<<< HEAD

;
const contact_info = {

  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup && ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',

  website: 'https://ziontechgroup.com',
}
;
export const marketValidatedServices: MarketValidatedService[] = [;
  // AI and Assistants;
  {
    id: 'ai - assistant - pro',
    name: 'AI Assistant Pro',
    tagline: 'Branded copilot with RAG, guardrails, and analytics',
    price: '$149',
    period: '/month',
    description:;
      'Deploy a secure, branded AI assistant that answers from your docs with citations, observes costs and latency, and hands off to humans when needed.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'RAG over your docs with hybrid search',
      'Guardrails: PII / PHI redaction, jailbreak detection',
      'Human handoff + conversation analytics',
      'Slack / Teams / Widget channels',
    ],
    category: 'AI & Assistants',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / ai - assistant',
    variant: 'ai - futuristic',
    rating: 4.8,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 1200,
    trial_days: 14,
    setup_time: '30 minutes',
    contact_info,
  },
  {
<<<<<<< HEAD

      'Eval datasets/versioning',
    id: 'ai - evals - observability',
    name: 'AI Evals & Observability',
    tagline:;
      'Regression testing, safety checks, and live metrics for LLM features',
    price: '$99',
    period: '/month',
    description:;
      'Ship reliable LLM apps with dataset management, prompt diffing, red - teaming, and production KPIs for quality, latency, and costs.',
    features: [;
      'Eval datasets / versioning',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Policy and toxicity checks',
      'Latency and cost KPIs',
      'Prompt / version diff and alerts',
    ],
    category: 'AI & MLOps',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / ai - evals',
    variant: 'quantum - holographic',
    rating: 4.7,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 600,
    trial_days: 14,
    setup_time: '1 hour',
    contact_info,
  },
  {
<<<<<<< HEAD

      'Hybrid vector+BM25 + reranker',
    id: 'agentic - rag - platform',
    name: 'Agentic RAG Platform',
    tagline: 'Production RAG with hybrid search, chunking, tools, and evals',
    price: '$179',
    period: '/month',
    description:;
      'Ingest and index your knowledge with hybrid search + reranking, enable tool - using agents, and validate responses with reference checks and citations.',
    features: [;
      'Hybrid vector + BM25 + reranker',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Chunking strategies + citations',
      'Toolformer - style agents',
      'Eval suite and drift monitoring',
    ],
    category: 'AI & Search',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / agentic - rag',
    variant: 'quantum - matrix',
    rating: 4.7,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 900,
    trial_days: 14,
    setup_time: '2 hours',
    contact_info,
  },
<<<<<<< HEAD

      'Auth/Z misconfig checks',
  // Security and APIs;
  {
    id: 'api - security - scanner',
    name: 'API Security Scanner',
    tagline: 'OpenAPI / GraphQL scanning, auth / Z checks, dependency audit',
    price: '$59',
    period: '/month',
    description:;
      'Automatically scan APIs for OWASP issues, auth / z misconfigurations, and dependency CVEs with CI gating and fix guidance.',
    features: [;
      'Auth / Z misconfig checks',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'OWASP Top 10 tests',
      'CI gate',
      'Fix guidance',
    ],
    category: 'Enterprise IT - Security',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / api - security - scanner',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    variant: 'cyberpunk',
    rating: 4 && 4.6,
    customers: 750,
    trial_days: 14,
    setup_time: '20 minutes',
    contact_info,
  },
  {
<<<<<<< HEAD

      'OTel traces/metrics/logs',
    id: 'api - observability',
    name: 'API Observability & SLA Guard',
    tagline: 'OTel tracing, SLOs, and error budgets for services',
    price: '$69',
    period: '/month',
    description:;
      'Collect traces / metrics / logs via OpenTelemetry, define SLOs and error budgets, and alert on burn rates with dashboards.',
    features: [;
      'OTel traces / metrics / logs',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'SLOs & error budgets',
      'Alerting',
      'Dashboards',
    ],
    category: 'Enterprise IT - Observability',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / api - observability',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    variant: 'holographic',
    rating: 4 && 4.6,
    customers: 640,
    trial_days: 14,
    setup_time: '40 minutes',
    contact_info,
  },
<<<<<<< HEAD

  // Cloud and Infra;
  {
    id: 'cloud - cost - optimizer - pro',
    name: 'Cloud Cost Optimizer Pro',
    tagline: 'Rightsizing, lifecycle, anomaly detection, and k8s bin - packing',
    price: '$99',
    period: '/month',
    description:;
      'Continuously optimize cloud spend with instance rightsizing, lifecycle policies, anomaly alerts, and container scheduling insights.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Auto rightsizing',
      'Idle cleanup',
      'Spot orchestration',
      'Anomaly detection',
    ],
    category: 'Enterprise IT - FinOps',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / cloud - cost - optimizer',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    variant: 'quantum',
    rating: 4 && 4.6,
    customers: 820,
    trial_days: 14,
    setup_time: '1 hour',
    contact_info,
  },
  {
<<<<<<< HEAD

    id: 'database - performance - monitor',
    name: 'Database Performance Monitor',
    tagline: 'Slow query capture, AI index suggestions, capacity forecasting',
    price: '$79',
    period: '/month',
    description:;
      'Postgres / MySQL performance insights with slow query ranking, AI tuning suggestions, pool sizing, and SLO dashboards.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Slow query ranking',
      'AI index advice',
      'Pool tuning',
      'SLA / SLO dashboards',
    ],
    category: 'Enterprise IT - Data',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / database - performance - monitor',
    variant: 'neural - quantum',
    rating: 4.7,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 560,
    trial_days: 14,
    setup_time: '45 minutes',
    contact_info,
  },
  {
<<<<<<< HEAD

    id: 'managed - postgres - ha',
    name: 'Managed Postgres HA',
    tagline: 'Highly - available Postgres with backups, failover, and guardrails',
    price: '$499',
    period: '/month',
    description:;
      'Production - ready Postgres with managed backups, automated failover, performance tuning, and compliance guardrails.',
    features: [;

      'Automated backups',
      'Failover & replication',
      'Performance tuning',
      'SLA & support',
    ],
    category: 'Enterprise IT - Data',

    link: 'https://ziontechgroup.com / managed - postgres - ha',
    variant: 'holographic - advanced',
    rating: 4.8,

    customers: 240,
    trial_days: 7,
    setup_time: '1 day',
    contact_info,
  },

  // Reliability & Monitoring;
  {
    id: 'uptime - slo - monitor',
    name: 'Uptime & SLO Monitor',
    tagline: 'Synthetic checks, error budgets, and incident automation',
    price: '$39',
    period: '/month',
    description:;
      'Track uptime, latency, and error budgets with synthetic monitors, alerting, and incident automation.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Global synthetic checks',
      'Error budgets & burn rates',
      'On - call & escalations',
      'Incident runbooks',
    ],
    category: 'Enterprise IT - SRE',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / uptime - slo - monitor',
    variant: 'quantum - cyberpunk',
    rating: 4.5,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 1100,
    trial_days: 14,
    setup_time: '25 minutes',
    contact_info,
  },
  {
<<<<<<< HEAD

    id: 'tls - certificate - monitor',
    name: 'TLS Certificate Monitor',
    tagline: 'Auto - renewal checks and expiry alerts across your fleet',
    price: '$19',
    period: '/month',
    description:;
      'Monitor certificates across domains and environments, get renewal reminders and failure alerts.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Expiry alerts',
      'Issuer checks',
      'Auto - renew validation',
      'Inventory export',
    ],
    category: 'Enterprise IT - Security',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / tls - certificate - monitor',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    variant: 'default',
    rating: 4 && 4.5,
    customers: 2200,
    trial_days: 14,
    setup_time: '10 minutes',
    contact_info,
  },
  {
<<<<<<< HEAD

    id: 'domain - dns - monitor',
    name: 'Domain & DNS Monitor',
    tagline: 'Track DNS changes, TTLs, and misconfigurations',
    price: '$29',
    period: '/month',
    description:;
      'Monitor DNS records and domain settings for unexpected changes and misconfigurations with alerts.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Change detection',
      'Misconfig alerts',
      'TTL insights',
      'Export & audit',
    ],
    category: 'Enterprise IT - Networking',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / domain - dns - monitor',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    variant: 'default',
    rating: 4 && 4.4,
    customers: 980,
    trial_days: 14,
    setup_time: '15 minutes',
    contact_info,
  },
<<<<<<< HEAD

      'HTML/Markdown to PDF',
      'Headers/footers',
  // Dev & Productivity;
  {
    id: 'pdf - render - api',
    name: 'PDF Render API',
    tagline: 'High - fidelity serverless PDF rendering and watermarking',
    price: '$49',
    period: '/month',
    description:;
      'Generate pixel - perfect PDFs from HTML / Markdown with headers, footers, and watermarking using a simple API.',
    features: [;
      'HTML / Markdown to PDF',
      'Headers / footers',

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Watermarks',
      'Async webhooks',
    ],
    category: 'Micro SaaS',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / pdf - render - api',
    variant: 'holographic - matrix',
    rating: 4.6,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 1300,
    trial_days: 7,
    setup_time: '10 minutes',
    contact_info,
  },
  {
<<<<<<< HEAD

    id: 'browser - performance - monitor',
    name: 'Browser Performance Monitor',
    tagline: 'RUM metrics, Core Web Vitals, and UX waterfall analysis',
    price: '$39',
    period: '/month',
    description:;
      'Collect real - user metrics, analyze CWV, and improve UX with actionable waterfalls and alerting.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'RUM collection',
      'CWV dashboards',
      'Waterfall analysis',
      'Alerts & webhooks',
    ],
    category: 'Micro SaaS',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / browser - performance - monitor',
    variant: 'quantum - holographic',
    rating: 4.5,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 760,
    trial_days: 14,
    setup_time: '20 minutes',
    contact_info,
  },
  {
<<<<<<< HEAD

    id: 'feature - flags - edge',
    name: 'Feature Flags at the Edge',
    tagline: 'Targeting, rollouts, and experiments at CDN edge',
    price: '$69',
    period: '/month',
    description:;
      'Ship features safely with edge - evaluated flags, user targeting, and experimentation without latency.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Edge evaluation',
      'Targeting & segments',
      'Experiments',
      'SDKs & audit',
    ],
    category: 'Micro SaaS',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / feature - flags - edge',
    variant: 'quantum - holographic',
    rating: 4.5,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 430,
    trial_days: 14,
    setup_time: '30 minutes',
    contact_info,
  },
  {
<<<<<<< HEAD

    id: 'serverless - cron - manager',
    name: 'Serverless Cron Manager',
    tagline: 'Reliable scheduled jobs with retries and observability',
    price: '$29',
    period: '/month',
    description:;
      'Schedule and monitor serverless jobs with retries, DLQs, and alerting across multiple clouds.',
    features: [;

      'Cron & schedules',
      'Retries & DLQs',
      'Logs & traces',
      'Alerts & webhooks',
    ],
    category: 'Micro SaaS',

    link: 'https://ziontechgroup.com / serverless - cron - manager',

    variant: 'default',
    rating: 4 && 4.4,
    customers: 1150,
    trial_days: 14,
    setup_time: '15 minutes',
    contact_info,
  },

  // Compliance & Risk;
  {
    id: 'soc2 - evidence - automation',
    name: 'SOC 2 Evidence Automation',
    tagline: 'Collect and map controls with change tracking',
    price: '$149',
    period: '/month',
    description:;
      'Automate evidence collection and control mapping with integrations to cloud, code, and ticketing systems.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Control mapping',
      'Evidence collection',
      'Change tracking',
      'Export & auditor access',
    ],
    category: 'Enterprise IT - Compliance',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / soc2 - evidence - automation',
    variant: 'holographic - neural',
    rating: 4.6,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 310,
    trial_days: 7,
    setup_time: '1 day',
    contact_info,
  },
  {
<<<<<<< HEAD

    id: 'vendor - risk - automation',
    name: 'Vendor Risk Automation',
    tagline: 'Automate VRM workflows, DDQs, and risk scoring',
    price: '$99',
    period: '/month',
    description:;
      'Streamline vendor onboarding, questionnaires, and continuous monitoring with automated risk scoring.',
    features: [;

      'DDQs and questionnaires',
      'Risk scoring',
      'Continuous monitoring',
      'Dashboards & export',
    ],
    category: 'Enterprise IT - Compliance',

    link: 'https://ziontechgroup.com / vendor - risk - automation',
    variant: 'quantum - entanglement',
    rating: 4.5,

    customers: 520,
    trial_days: 14,
    setup_time: '2 hours',
    contact_info,
  },

  // Developer and Ops Utilities;
  {
    id: 'webhook - relay - replay',
    name: 'Webhook Relay & Replay',
    tagline: 'Capture, inspect, and replay webhooks reliably',
    price: '$19',
    period: '/month',
    description:;
      'Never lose a webhook again. Capture payloads, inspect headers, and replay with backoff and signatures.',
    features: [;

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Capture & inspect',
      'Replay with backoff',
      'Signature verification',
      'Forwarding rules',
    ],
    category: 'Micro SaaS',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / webhook - relay - replay',
    variant: 'cyberpunk - holographic',
    rating: 4.5,

origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    customers: 1650,
    trial_days: 14,
    setup_time: '10 minutes',
    contact_info,
  },
  {
<<<<<<< HEAD
    id: 'audit-log-vault'
    name: 'Audit Log Vault'
    tagline: 'Tamper-evident logs with retention and export'
    price: '$39'
    period: '/month'
    description:
      'Centralize audit logs with WORM retention, export APIs, and fine-grained access for investigations.'
    features: [
      'WORM retention'
      'Export APIs'
      'Fine-grained access'
      'Tamper evidence'
    ]
    category: 'Enterprise IT - Security'
    link: 'https://ziontechgroup.com/audit-log-vault'
    variant: 'quantum-neural'
    rating: 4.5
    customers: 420
    trialDays: 14
    setupTime: '30 minutes'
    contactInfo
  }
  // AI Channels
  {
    id: 'ai-phone-agent'
    name: 'AI Phone Agent'
    tagline: 'Voice IVR and call handling with CRM handoff'
    price: '$129'
    period: '/month'
    description:
      'Handle inbound calls with a natural AI voice, route to agents, and sync transcripts with your CRM.'
    features: ['Natural TTS/ASR', 'Routing & handoff', 'CRM sync', 'Analytics']
    category: 'AI & Assistants'
    link: 'https://ziontechgroup.com/ai-phone-agent'
    variant: 'quantum-holographic-advanced'
    rating: 4.6
    customers: 380
    trialDays: 7
    setupTime: '1 hour'
    contactInfo
  }
  // Search and Knowledge
  {
    id: 'vector-search-starter'
    name: 'Vector Search Starter'
    tagline: 'Deploy a production-grade vector database and APIs'
    price: '$89'
    period: '/month'
    description:
      'Spin up a managed vector index with ingestion pipelines, filters, and access controls to power semantic search.'
    features: [
      'Managed vector DB',
      'Ingestion pipelines',
      'Metadata filters',
      'Access controls',
    ],
    category: 'AI & Search',
    link: 'https://ziontechgroup.com/vector-search-starter',
    variant: 'quantum',
    rating: 4.6,
    customers: 410,
    trialDays: 14,
    setupTime: '2 hours',
    contactInfo,
  },
];
origin/cursor/automate-test-improve-and-merge-code-2533
export interface MarketValidatedService {

    id: 'audit - log - vault',
    name: 'Audit Log Vault',
    tagline: 'Tamper - evident logs with retention and export',
    price: '$39',
    period: '/month',
    description:;
      'Centralize audit logs with WORM retention, export APIs, and fine - grained access for investigations.',
    features: [;

      'WORM retention',
      'Export APIs',
      'Fine - grained access',
      'Tamper evidence',
    ],
    category: 'Enterprise IT - Security',

    link: 'https://ziontechgroup.com / audit - log - vault',
    variant: 'quantum - neural',
    rating: 4.5,

    customers: 420,
    trial_days: 14,
    setup_time: '30 minutes',
    contact_info,
  },

  // AI Channels;
  {
    id: 'ai - phone - agent',
    name: 'AI Phone Agent',
    tagline: 'Voice IVR and call handling with CRM handoff',
    price: '$129',
    period: '/month',
    description:;

      'Handle inbound calls with a natural AI voice, route to agents, and sync transcripts with your CRM.',
    features: ['Natural TTS / ASR', 'Routing & handoff', 'CRM sync', 'Analytics'],
    category: 'AI & Assistants',

    link: 'https://ziontechgroup.com / ai - phone - agent',
    variant: 'quantum - holographic - advanced',
    rating: 4.6,

    customers: 380,
    trial_days: 7,
    setup_time: '1 hour',
    contact_info,
  },

  // Search and Knowledge;
  {
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
      'Managed vector DB'
      'Ingestion pipelines'
      'Metadata filters'
      'Access controls'
    ]
    category: 'AI & Search'
    link: 'https://ziontechgroup.com/vector-search-starter'
    variant: 'quantum'
    rating: 4.6
    customers: 410
    trialDays: 14
    setupTime: '2 hours'
    contactInfo
  }
];import { ServiceVariant  } from "../types/service-variants";

export interface MarketValidatedService {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    id: 'vector - search - starter',
    name: 'Vector Search Starter',
    tagline: 'Deploy a production - grade vector database and APIs',
    price: '$89',
    period: '/month',
    description:;
      'Spin up a managed vector index with ingestion pipelines, filters, and access controls to power semantic search.',
    features: [;


<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
      'WORM retention',
      'Export APIs',
      'Fine - grained access',
      'Tamper evidence',
    ],
    category: 'Enterprise IT - Security',
    customers: 420,
    trial_days: 14,
    setup_time: '30 minutes',
    contact_info,
  },
    customers: 380,
    trial_days: 7,
    setup_time: '1 hour',
    contact_info,
  },
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      'Managed vector DB',
      'Ingestion pipelines',
      'Metadata filters',
      'Access controls',
    ],
    category: 'AI & Search',
<<<<<<< HEAD

    link: 'https://ziontechgroup.com / vector - search - starter',

    variant: 'quantum',
    rating: 4.6,
    customers: 410,
    trial_days: 14,
    setup_time: '2 hours',
    contact_info,
  },




export interface MarketValidatedService {
export interface MarketValidatedService {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
export interface MarketValidatedService {
export interface MarketValidatedService {;

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	category: string;
	link: string;
	variant?: ServiceVariant;
	rating?: number;
	customers?: number;
	trialDays?: number;
<<<<<<< HEAD
	setupTime?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
	contactInfo: {
		mobile: string;
		email: string;
		address: string;
		website?: string;
	};


		contactInfo
	}
];



ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

const contactInfo = null;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
}}


  mobile: "+1 302 464 0950",
	email: "kleber@ziontechgroup && ziontechgroup.com",
	address: "364 E Main St STE 1008 Middletown DE 19709";
  website: "https://ziontechgroup && ziontechgroup.com";,
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
