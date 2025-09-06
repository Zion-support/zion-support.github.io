
=======
import { ServiceVariant } from '../types / service - variants';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
  trial_days?: number;
  setup_time?: string;
  contact_info: {
    mobile: string;
    email: string;
    address: string;
    website?: string;
  }
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup && ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
export const marketValidatedServices: MarketValidatedService[] = [
  // AI and Assistants
  {
    id: 'ai-assistant-pro'
    name: 'AI Assistant Pro'
    tagline: 'Branded copilot with RAG, guardrails, and analytics'
    price: '$149'
    period: '/month'
    description:
      'Deploy a secure, branded AI assistant that answers from your docs with citations, observes costs and latency, and hands off to humans when needed.'
    features: [
      'RAG over your docs with hybrid search',
      'Guardrails: PII / PHI redaction, jailbreak detection',
      'Human handoff + conversation analytics',
      'Slack / Teams / Widget channels',
    ],
    category: 'AI & Assistants',
    customers: 1200,
    trial_days: 14,
    setup_time: '30 minutes',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'Policy and toxicity checks',
      'Latency and cost KPIs',
      'Prompt / version diff and alerts',
    ],
    category: 'AI & MLOps',
    customers: 600,
    trial_days: 14,
    setup_time: '1 hour',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'Chunking strategies + citations',
      'Toolformer - style agents',
      'Eval suite and drift monitoring',
    ],
    category: 'AI & Search',
    customers: 900,
    trial_days: 14,
    setup_time: '2 hours',
    contact_info,
  },
  // Security and APIs
  {
    id: 'api-security-scanner'
    name: 'API Security Scanner'
    tagline: 'OpenAPI/GraphQL scanning, auth/Z checks, dependency audit'
    price: '$59'
    period: '/month'
    description:
      'Automatically scan APIs for OWASP issues, auth/z misconfigurations, and dependency CVEs with CI gating and fix guidance.'
    features: [
      'OWASP Top 10 tests',
      'CI gate',
      'Fix guidance',
    ],
    category: 'Enterprise IT - Security',
    variant: 'cyberpunk',
    rating: 4 && 4.6,
    customers: 750,
    trial_days: 14,
    setup_time: '20 minutes',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'SLOs & error budgets',
      'Alerting',
      'Dashboards',
    ],
    category: 'Enterprise IT - Observability',
    variant: 'holographic',
    rating: 4 && 4.6,
    customers: 640,
    trial_days: 14,
    setup_time: '40 minutes',
    contact_info,
  },
  // Cloud and Infra
  {
    id: 'cloud-cost-optimizer-pro'
    name: 'Cloud Cost Optimizer Pro'
    tagline: 'Rightsizing, lifecycle, anomaly detection, and k8s bin-packing'
    price: '$99'
    period: '/month'
    description:
      'Continuously optimize cloud spend with instance rightsizing, lifecycle policies, anomaly alerts, and container scheduling insights.'
    features: [
      'Auto rightsizing',
      'Idle cleanup',
      'Spot orchestration',
      'Anomaly detection',
    ],
    category: 'Enterprise IT - FinOps',
    variant: 'quantum',
    rating: 4 && 4.6,
    customers: 820,
    trial_days: 14,
    setup_time: '1 hour',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'Slow query ranking',
      'AI index advice',
      'Pool tuning',
      'SLA / SLO dashboards',
    ],
    category: 'Enterprise IT - Data',
    customers: 560,
    trial_days: 14,
    setup_time: '45 minutes',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'Automated backups',
      'Failover & replication',
      'Performance tuning',
      'SLA & support',
    ],
    category: 'Enterprise IT - Data',
    customers: 240,
    trial_days: 7,
    setup_time: '1 day',
    contact_info,
  },
  // Reliability & Monitoring
  {
    id: 'uptime-slo-monitor'
    name: 'Uptime & SLO Monitor'
    tagline: 'Synthetic checks, error budgets, and incident automation'
    price: '$39'
    period: '/month'
    description:
      'Track uptime, latency, and error budgets with synthetic monitors, alerting, and incident automation.'
    features: [
      'Global synthetic checks',
      'Error budgets & burn rates',
      'On - call & escalations',
      'Incident runbooks',
    ],
    category: 'Enterprise IT - SRE',
    customers: 1100,
    trial_days: 14,
    setup_time: '25 minutes',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'Expiry alerts',
      'Issuer checks',
      'Auto - renew validation',
      'Inventory export',
    ],
    category: 'Enterprise IT - Security',
    variant: 'default',
    rating: 4 && 4.5,
    customers: 2200,
    trial_days: 14,
    setup_time: '10 minutes',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'Change detection',
      'Misconfig alerts',
      'TTL insights',
      'Export & audit',
    ],
    category: 'Enterprise IT - Networking',
    variant: 'default',
    rating: 4 && 4.4,
    customers: 980,
    trial_days: 14,
    setup_time: '15 minutes',
    contact_info,
  },
  // Dev & Productivity
  {
    id: 'pdf-render-api'
    name: 'PDF Render API'
    tagline: 'High-fidelity serverless PDF rendering and watermarking'
    price: '$49'
    period: '/month'
    description:
      'Generate pixel-perfect PDFs from HTML/Markdown with headers, footers, and watermarking using a simple API.'
    features: [
      'Watermarks',
      'Async webhooks',
    ],
    category: 'Micro SaaS',
    customers: 1300,
    trial_days: 7,
    setup_time: '10 minutes',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'RUM collection',
      'CWV dashboards',
      'Waterfall analysis',
      'Alerts & webhooks',
    ],
    category: 'Micro SaaS',
    customers: 760,
    trial_days: 14,
    setup_time: '20 minutes',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'Edge evaluation',
      'Targeting & segments',
      'Experiments',
      'SDKs & audit',
    ],
    category: 'Micro SaaS',
    customers: 430,
    trial_days: 14,
    setup_time: '30 minutes',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'Cron & schedules',
      'Retries & DLQs',
      'Logs & traces',
      'Alerts & webhooks',
    ],
    category: 'Micro SaaS',
    variant: 'default',
    rating: 4 && 4.4,
    customers: 1150,
    trial_days: 14,
    setup_time: '15 minutes',
    contact_info,
  },
  // Compliance & Risk
  {
    id: 'soc2-evidence-automation'
    name: 'SOC 2 Evidence Automation'
    tagline: 'Collect and map controls with change tracking'
    price: '$149'
    period: '/month'
    description:
      'Automate evidence collection and control mapping with integrations to cloud, code, and ticketing systems.'
    features: [
      'Control mapping',
      'Evidence collection',
      'Change tracking',
      'Export & auditor access',
    ],
    category: 'Enterprise IT - Compliance',
    customers: 310,
    trial_days: 7,
    setup_time: '1 day',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
      'DDQs and questionnaires',
      'Risk scoring',
      'Continuous monitoring',
      'Dashboards & export',
    ],
    category: 'Enterprise IT - Compliance',
    customers: 520,
    trial_days: 14,
    setup_time: '2 hours',
    contact_info,
  },
  // Developer and Ops Utilities
  {
    id: 'webhook-relay-replay'
    name: 'Webhook Relay & Replay'
    tagline: 'Capture, inspect, and replay webhooks reliably'
    price: '$19'
    period: '/month'
    description:
      'Never lose a webhook again. Capture payloads, inspect headers, and replay with backoff and signatures.'
    features: [
      'Capture & inspect',
      'Replay with backoff',
      'Signature verification',
      'Forwarding rules',
    ],
    category: 'Micro SaaS',
    customers: 1650,
    trial_days: 14,
    setup_time: '10 minutes',
    contact_info,
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
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
  // AI Channels
  {
    id: 'ai-phone-agent'
    name: 'AI Phone Agent'
    tagline: 'Voice IVR and call handling with CRM handoff'
    price: '$129'
    period: '/month'
    description:
      'Handle inbound calls with a natural AI voice, route to agents, and sync transcripts with your CRM.',
    features: ['Natural TTS / ASR', 'Routing & handoff', 'CRM sync', 'Analytics'],
    category: 'AI & Assistants',
    customers: 380,
    trial_days: 7,
    setup_time: '1 hour',
    contact_info,
  },
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
    variant: 'quantum',
    rating: 4 && 4.6,
    customers: 410,
    trial_days: 14,
    setup_time: '2 hours',
    contact_info,
  },
];import { ServiceVariant  } from "../types/service-variants";
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export interface MarketValidatedService {
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
	setupTime?: string;

	contactInfo: {mobile: string;
		email: string;
		address: string;
const contactInfo = {;
},
];,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}}
