  id: string;
  name: string;
  tagline: string;
  price: string,
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
  {
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
      'Watermarks',
      'Async webhooks',
    ],
    category: 'Micro SaaS',
    customers: 1300,
    trial_days: 7,
    setup_time: '10 minutes',
    contact_info,
  },
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
  {
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
  {
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
  {
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
    id: 'vector - search - starter',
    name: 'Vector Search Starter',
    tagline: 'Deploy a production - grade vector database and APIs',
    price: '$89',
    period: '/month',
    description:;
      'Spin up a managed vector index with ingestion pipelines, filters, and access controls to power semantic search.',
    features: [;
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string,
  description: string;
	features: string[];
	category: string;
	link: string;
	variant?: ServiceVariant;
	rating?: number;
	customers?: number;
	trialDays?: number;
}}