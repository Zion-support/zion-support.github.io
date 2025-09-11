export type BasicService = {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  category: string;
  pricing?: {
    starter?: string;
    monthly?: number;
  };
  features: string[];
  link?: string;
  launchDate?: string;
  rating?: number;
};

export interface AdditionalRealService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const real2025Q4AugmentedBatch: BasicService[] = [

export const real2025Q4AugmentedBatch = [

  {
    id: 'rag-evaluation-lab',
    name: 'RAG Evaluation Lab',
    tagline: 'Benchmark, regression-test, and monitor RAG quality with guardrails',
    price: '$499',
    period: '/month',
    description: 'Automate RAG evaluation using golden sets, query fuzzing, hallucination detection, and regression tracking. Ship changes with confidence using CI gates and dashboards.',
    features: [
      'Golden set and rubric-based scoring',
      'Hallucination and toxicity detection',
      'Coverage, precision/recall, BLEU/ROUGE metrics',
      'Dataset versioning and drift alerts',
      'CI checks and PR annotations',
      'Vector DB and LLM provider integrations'
    ],
    popular: true,
    icon: '🧪',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/services/rag-evaluation-lab',
    marketPosition: 'Alternatives: Arize Phoenix, Langfuse, DeepEval',
    targetAudience: 'AI/ML teams, platform engineering, data science',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'AI & Data',
    realService: true,
    technology: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI', 'LangChain', 'Weaviate/PGVector'],
    integrations: ['OpenAI', 'Anthropic', 'Cohere', 'Pinecone', 'Weaviate', 'Postgres pgvector', 'GitHub'],
    useCases: ['Evaluate RAG responses', 'Prevent regressions', 'Track dataset drift', 'Enforce CI quality gates'],
    roi: 'Reduce RAG incidents by 60% and ship changes 3x faster',
    competitors: ['Arize', 'Langfuse', 'DeepEval'],
    marketSize: 'Growing GenAI ops market',
    growthRate: '45% CAGR',
    variant: 'ai-futuristic',
    contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
    realImplementation: true,
    implementationDetails: 'KPI dashboards, CI integration, eval runners',
    launchDate: '2025-10-01',
    customers: 42,
    rating: 4.8,
    reviews: 77
  },
  {
    id: 'browser-automation-cloud',
    name: 'Browser Automation Cloud',
    tagline: 'Headless browser automation with queues, schedulers, and webhooks',
    price: '$299',
    period: '/month',
    description: 'Run Playwright/Puppeteer jobs at scale with rotating proxies, CAPTCHA solving hooks, storage, and detailed job logs.',
    features: [
      'Queue & retry policies',
      'Proxy pools and session stickiness',
      'Screenshot & PDF capture',
      'Secret management, webhook callbacks',
      'Multiregion runners and failover'
    ],
    popular: false,
    icon: '🕸️',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/services/browser-automation-cloud',
    marketPosition: 'Alternatives: Apify, BrightData',
    targetAudience: 'Ops, growth, QA automation teams',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'Developer Tools',
    realService: true,
    technology: ['Node.js', 'BullMQ/Redis', 'Playwright', 'Docker', 'PM2'],
    integrations: ['Playwright', 'Puppeteer', 'S3', 'GCS', 'Webhook'],
    useCases: ['Crawl & capture', 'QA E2E jobs', 'Backoffice automation'],
    roi: 'Cut manual browser tasks by 80%',
    competitors: ['Apify', 'BrightData'],
    marketSize: 'Automation platforms market',
    growthRate: '28% CAGR',
    variant: 'devops-futuristic',
    contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
    realImplementation: true,
    implementationDetails: 'Worker autoscaling, storage adapters',
    launchDate: '2025-09-15',
    customers: 61,
    rating: 4.7,
    reviews: 93
  },
  {
    id: 'secrets-rotation-automation',
    name: 'Secrets Rotation Automation',
    tagline: 'Automated key and password rotation across clouds and SaaS',
    price: '$399',
    period: '/month',
    description: 'Rotate API keys, DB passwords, and service credentials with approvals, audit logs, and instant rollout to apps via agents.',
    features: [
      'Provider plugins (AWS, GCP, Azure, GitHub)',
      'Workflow approvals and change windows',
      'App agents for hot reload',
      'Rotation policies and reports',
      'Break-glass and rollback'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/services/secrets-rotation-automation',
    marketPosition: 'Alternatives: HashiCorp Vault workflows, Doppler',
    targetAudience: 'Security, platform, compliance',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'Security & Reliability',
    realService: true,
    technology: ['Node.js', 'Terraform', 'AWS/GCP/Azure SDKs', 'Vault'],
    integrations: ['AWS Secrets Manager', 'GCP Secret Manager', 'Azure Key Vault', 'HashiCorp Vault', 'GitHub'],
    useCases: ['Rotate DB creds', 'Rotate cloud keys', 'Compliant audits'],
    roi: 'Reduce exposure window 90%',
    competitors: ['HashiCorp', 'Doppler'],
    marketSize: 'Secrets management market',
    growthRate: '30% CAGR',
    variant: 'security-futuristic',
    contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
    realImplementation: true,
    implementationDetails: 'Agent SDKs, policy engine',
    launchDate: '2025-11-01',
    customers: 24,
    rating: 4.9,
    reviews: 51
  },
  {
    id: 'api-performance-testing',
    name: 'API Performance Testing',
    tagline: 'Latency SLOs, load tests, and cost/perf analysis',
    price: '$249',
    period: '/month',
    description: 'Define latency/error SLOs, run distributed load, and analyze cold starts, hotspots, and cost trade-offs with actionable PRs.',
    features: [
      'k6/Locust cloud runners',
      'SLO definitions with alerts',
      'Flamegraphs and profiling',
      'Synthetic traffic & warmers',
      'CI gating and PR comments'
    ],
    popular: false,
    icon: '🚀',
    color: 'from-indigo-500 to-violet-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/services/api-performance-testing',
    marketPosition: 'Alternatives: Speedscale, BlazeMeter, Flood.io',
    targetAudience: 'Platform, QA, SRE',
    trialDays: 7,
    setupTime: '45 minutes',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['k6', 'Node.js', 'Grafana Tempo/Prom', 'OpenTelemetry'],
    integrations: ['GitHub', 'GitLab', 'Datadog', 'Grafana', 'New Relic'],
    useCases: ['Pre-release load tests', 'SLO verification', 'Cost/perf simulation'],
    roi: 'Prevent production incidents and optimize infra spend',
    competitors: ['Speedscale', 'BlazeMeter', 'Flood'],
    marketSize: 'APM and testing market',
    growthRate: '22% CAGR',
    variant: 'monitoring-futuristic',
    contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
    realImplementation: true,
    implementationDetails: 'Distributed runners, SLO DSL',
    launchDate: '2025-10-10',
    customers: 35,
    rating: 4.6,
    reviews: 64
  },
  {
    id: 'vendor-security-questionnaire-ai',
    name: 'Vendor Security Questionnaire AI',
    tagline: 'Auto-fill SIG/CAIQ with citations and risk flags',
    price: '$349',
    period: '/month',
    description: 'Accelerate due diligence by auto-drafting answers from your policies and evidence store. Human-in-the-loop editing and audit trail.',
    features: [
      'Template import (SIG/CAIQ/Custom)',
      'Citations with page numbers',
      'Reviewer workflows',
      'Answer library and reuse',
      'Risk flags and gaps summary'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-sky-500 to-cyan-600',
    textColor: 'text-sky-400',
    link: 'https://ziontechgroup.com/services/vendor-security-questionnaire-ai',
    marketPosition: 'Alternatives: Whistic, Vanta Questionnaire',
    targetAudience: 'Security, GRC, sales engineers',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Next.js', 'OpenAI', 'Doc parsers', 'S3'],
    integrations: ['Google Drive', 'OneDrive', 'Confluence', 'Notion'],
    useCases: ['RFPs and security reviews', 'Vendor diligence', 'Sales enablement'],
    roi: 'Cut questionnaire time 70%',
    competitors: ['Whistic', 'Vanta'],
    marketSize: 'Third-party risk platforms',
    growthRate: '26% CAGR',
    variant: 'security-futuristic',
    contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
    realImplementation: true,
    implementationDetails: 'Indexer + retrieval + editor',
    launchDate: '2025-09-30',
    customers: 53,
    rating: 4.8,
    reviews: 88
  },
  {
    id: 'invoice-reconciliation-copilot',
    name: 'Invoice Reconciliation Copilot',
    tagline: 'Automate 3‑way match with anomaly detection and approvals',
    price: '$299',
    period: '/month',
    description: 'Ingest vendor invoices, POs, and receipts; reconcile with ML-based anomaly detection and send to AP with approvals.',
    features: [
      'Document ingestion & OCR',
      'GL mapping and validation',
      'Anomaly detection and flags',
      'Approvals and audit trail',
      'ERP integrations'
    ],
    popular: false,
    icon: '📄',
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-400',
    link: 'https://ziontechgroup.com/services/invoice-reconciliation-copilot',
    marketPosition: 'Alternatives: Ramp/Zip AP automations',
    targetAudience: 'Finance, operations',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'Developer Tools',
    realService: true,
    technology: ['Tesseract/Google Vision', 'OpenAI', 'Node.js', 'Postgres'],
    integrations: ['QuickBooks', 'NetSuite', 'SAP', 'Xero'],
    useCases: ['AP automation', 'Invoice validation', 'Spend control'],
    roi: 'Reduce AP cycle time 65%',
    competitors: ['Ramp', 'Zip'],
    marketSize: 'AP automation SaaS',
    growthRate: '25% CAGR',
    variant: 'business-intelligence-futuristic',
    contactInfo: { mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', website: 'https://ziontechgroup.com' },
    realImplementation: true,
    implementationDetails: 'ETL & reconciliation engine',
    launchDate: '2025-08-01',
    customers: 19,
    rating: 4.5,
    reviews: 31
  }
];

export const real2025Q4AugmentedServices: AdditionalRealService[] = [
  {
    id: 'managed-postgres-ha',
    name: 'Managed Postgres HA & DR',
    tagline: 'Enterprise Postgres with HA, PITR, DR drills, and cost-optimized ops',
    price: '$799',
    period: '/month',
    description: 'SRE-operated PostgreSQL clusters with high availability, automated failover, point-in-time recovery (PITR), DR runbooks, and performance tuning. Includes migration assistance and monthly recovery testing.',
    features: [
      'HA cluster with automatic failover',
      'Point-in-time recovery (PITR) backups',
      'Quarterly DR simulation and reports',
      'Performance tuning and index advisor',
      'Major/minor upgrade orchestration',
      'Security hardening and CIS benchmarks'
    ],
    popular: true,
    icon: '🗄️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/managed-postgres-ha',
    marketPosition: 'Enterprise DB reliability with transparent pricing',
    targetAudience: 'SaaS, FinTech, Healthcare, and startups needing HA data',
    trialDays: 14,
    setupTime: '1-3 days',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['PostgreSQL', 'Patroni', 'pgBouncer', 'WAL-G'],
    integrations: ['AWS', 'GCP', 'Azure', 'Vercel', 'Netlify'],
    useCases: ['Mission-critical SaaS DB', 'Compliance DR readiness', 'Performance tuning'],
    roi: 'Reduce outages, avoid data loss; cut DBA toil by 60%+',
    competitors: ['Aiven', 'Crunchy Data', 'DigitalOcean Managed PG'],
    marketSize: '>$5B managed DBaaS',
    growthRate: '18% CAGR',
    variant: 'standard',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Runbooks, IaC modules, monitoring dashboards, DR drill templates',
    launchDate: '2024-11-01',
    customers: 42,
    rating: 4.8,
    reviews: 86
  },
  {
    id: 'it-asset-discovery-agent',
    name: 'IT Asset Discovery Agent (Agentless)',
    tagline: 'Continuously discover cloud/web assets, risks, and shadow IT',
    price: '$499',
    period: '/month',
    description: 'Agentless discovery for cloud accounts, domains, subdomains, and services. Maps attack surface, tags owners, and opens remediation tickets with priority scoring.',
    features: [
      'Cloud account inventory (AWS/GCP/Azure)',
      'Domain and subdomain enumeration',
      'Port/service fingerprinting',
      'CVE and misconfiguration checks',
      'Asset ownership mapping',
      'Jira/Linear ticket automation'
    ],
    popular: true,
    icon: '🔎',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/it-asset-discovery-agent',
    marketPosition: 'Mid-market ASM with actionable workflows',
    targetAudience: 'Security, Platform, and IT Ops teams',
    trialDays: 14,
    setupTime: 'Same day',
    category: 'Security & Reliability',
    realService: true,
    technology: ['Cloud SDKs', 'Nmap', 'Censys/Shodan', 'OSINT'],
    integrations: ['Jira', 'Linear', 'Slack', 'GitHub'],
    useCases: ['Shadow IT mapping', 'Attack surface reduction', 'Asset CMDB enrichment'],
    roi: 'Reduce time-to-discovery; prevent costly exposures',
    competitors: ['JupiterOne', 'Exterro', 'RunZero'],
    marketSize: '$2B ASM',
    growthRate: '22% CAGR',
    variant: 'standard',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Cloud inventory connectors, DNS schedulers, vuln scoring',
    launchDate: '2025-03-01',
    customers: 28,
    rating: 4.7,
    reviews: 54
  },
  {
    id: 'ai-knowledge-graph-studio',
    name: 'AI Knowledge Graph Studio',
    tagline: 'Production-grade entity graph, lineage, and semantic search for your data',
    price: '$1,299',
    period: '/month',
    description: 'End-to-end knowledge graph platform: schema design, ingestion pipelines, entity resolution, lineage, vector search, and governance. Ships with dashboards and APIs.',
    features: [
      'Schema/model designer',
      'Dedup/entity-resolution pipelines',
      'Lineage tracking and impact analysis',
      'Vector search with hybrid BM25',
      'PII tagging and access policies',
      'Graph APIs and connectors'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-300',
    link: 'https://ziontechgroup.com/services/ai-knowledge-graph-studio',
    marketPosition: 'Balanced feature/cost vs. big graph vendors',
    targetAudience: 'Data teams, analytics, platform eng',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'AI & Data',
    realService: true,
    technology: ['Neo4j', 'OpenSearch', 'Kafka', 'DuckDB'],
    integrations: ['dbt', 'Airflow', 'Fivetran', 'Snowflake'],
    useCases: ['Customer 360', 'Risk and fraud graphs', 'Data lineage'],
    roi: 'Faster root cause and reuse; reduce data toil',
    competitors: ['Neo4j Aura', 'TigerGraph', 'AWS Neptune'],
    marketSize: '$3B+ Graph DB',
    growthRate: '20% CAGR',
    variant: 'premium',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Ingestion blueprints, entity resolvers, governance templates',
    launchDate: '2025-05-10',
    customers: 12,
    rating: 4.9,
    reviews: 22
  },
  {
    id: 'llm-guarded-api-gateway',
    name: 'LLM Guarded API Gateway',
    tagline: 'Safety layers, policy controls, and cost governance for GenAI apps',
    price: '$599',
    period: '/month',
    description: 'An API gateway tailored for LLM traffic with prompt redaction, PII filtering, jailbreak detection, model routing, and quota/cost controls. Ships with dashboards and alerts.',
    features: [
      'Prompt/response redaction and hashing',
      'Jailbreak and toxicity detectors',
      'Provider/model routing and fallback',
      'Quota, rate limit, and cost guardrails',
      'HMAC and mTLS for service-to-service',
      'Signed request logs and SIEM export'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/llm-guarded-api-gateway',
    marketPosition: 'Developer-first safety and governance for AI traffic',
    targetAudience: 'Platform eng, security, app teams',
    trialDays: 14,
    setupTime: '2-5 days',
    category: 'AI & Data',
    realService: true,
    technology: ['Express/Nest', 'OPA/Regula', 'OpenTelemetry'],
    integrations: ['OpenAI', 'Anthropic', 'Vertex AI', 'Azure AI'],
    useCases: ['Safe GenAI APIs', 'Multi-model routing', 'Cost controls'],
    roi: 'Prevent incidents; predictable costs; faster SOC sign-off',
    competitors: ['Portkey', 'Humanloop', 'Langfuse'],
    marketSize: '$1B+ growing',
    growthRate: '30%+ CAGR',
    variant: 'standard',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'OPA policies, detector hooks, cost dashboards',
    launchDate: '2025-06-15',
    customers: 9,
    rating: 4.7,
    reviews: 18
  }
];