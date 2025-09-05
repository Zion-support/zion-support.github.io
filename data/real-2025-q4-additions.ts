export interface Q4Service {_id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link: string;
  marketPosition?: string;
  targetAudience?: string;
  trialDays?: number;
  setupTime?: string;
  category: string;
  realService: boolean;
  technology?: string[];
  integrations?: string[];
  useCases?: string[];
  roi?: string;
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
  variant?: string;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string;};
  realImplementation: boolean;
  implementationDetails?: string;
  launchDate?: string;
  customers?: number;
  rating?: number;
  reviews?: number;
}

const _contact = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

export const realQ4Services2025: RealQ4Service[] = [
	{_id: 'affiliate-marketing-hub', _name: 'Affiliate Marketing Hub', _tagline: 'Track affiliates, _prevent fraud, _and automate payouts', _price: '$99', _period: '/month', _description: 'Full-stack affiliate tracking with multi-touch attribution, _fraud detection, _and automated commissions. Built for SMB e-commerce and content sites.', _features: [
			'Multi-channel attribution and cookie-less tracking', _'Fraud rules, _device fingerprinting, _IP reputation checks', _'Customizable commission structures and tiers', _'Automated payouts and tax form collection', _'Shareable links, _coupons, _and influencer codes', _'Partner portal and real-time analytics'
		], _popular: true, _icon: '🔗', _color: 'from-violet-600 to-fuchsia-700', _textColor: 'text-fuchsia-400', _link: 'https://ziontechgroup.com/services/affiliate-marketing-hub', _marketPosition: 'Comparable to Refersion and LeadDyno; stronger fraud prevention and flexible payouts.', _targetAudience: 'E-commerce stores, _marketplaces, _media sites', _trialDays: 14, _setupTime: '1 day', _category: 'Developer Tools', _realService: true, _technology: ['Next.js', _'Node.js', _'PostgreSQL', _'Redis'], _integrations: ['Shopify', _'WooCommerce', _'Stripe', _'PayPal'], _useCases: ['Affiliate programs', _'Influencer tracking', _'Partnership analytics'], _roi: 'Increase attributed sales 10–25% with optimized partnerships.', _competitors: ['Refersion', _'LeadDyno', _'Tapfiliate'], _marketSize: '$1.5B affiliate software', _growthRate: '15% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Server-side tracking with webhook ingestion and fraud-scoring pipeline.', _launchDate: '2025-10-01', _customers: 120, _rating: 4.7, _reviews: 48},
	{_id: 'podcast-transcription-studio', _name: 'Podcast Transcription Studio', _tagline: 'Fast, _accurate multi-speaker transcriptions with summaries', _price: '$29', _period: '/month', _description: 'Upload audio and receive punctuated transcripts, _speaker diarization, _show notes, _and SEO-optimized summaries.', _features: [
			'Multi-speaker diarization', _'Timestamps and filler removal', _'Chapter detection and show notes', _'Embeddings and semantic search', _'Export to SRT, _VTT, _DOCX', _'Podcast platform integrations'
		], _popular: false, _icon: '🎧', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-400', _link: 'https://ziontechgroup.com/services/podcast-transcription-studio', _marketPosition: 'Competitive with Otter and Descript; better show notes and SEO summary pipeline.', _targetAudience: 'Podcasters, _media teams, _agencies', _trialDays: 7, _setupTime: '10 minutes', _category: 'AI & Data', _realService: true, _technology: ['Whisper Large v3', _'Next.js', _'Node.js'], _integrations: ['Spotify', _'Apple Podcasts', _'YouTube'], _useCases: ['Transcripts', _'SEO summaries', _'Episode search'], _roi: 'Save 4–8 hours per episode and improve SEO traffic.', _competitors: ['Otter', _'Descript', _'Rev'], _marketSize: '$500M transcription tools', _growthRate: '20% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Batch transcription queue with GPU support; diarization and summarization pipeline.', _launchDate: '2025-09-15', _customers: 60, _rating: 4.6, _reviews: 22},
	{_id: 'micro-crm-local-business', _name: 'Micro CRM for Local Business', _tagline: 'Simple contacts, _pipelines, _and reminders that just work', _price: '$19', _period: '/month', _description: 'Lightweight, _mobile-first CRM with contacts, _tasks, _deals, _and SMS/email reminders. Built for solo and small teams.', _features: [
			'Contact management and segmentation', _'Pipelines and kanban views', _'Calendar with SMS/email reminders', _'Import/export CSV and simple API', _'Mobile-friendly PWA', _'Basic reporting'
		], _popular: true, _icon: '📇', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-400', _link: 'https://ziontechgroup.com/services/micro-crm-local-business', _marketPosition: 'Simpler than HubSpot/Zoho; fast and focused for local SMBs.', _targetAudience: 'Local businesses, _consultants, _freelancers', _trialDays: 14, _setupTime: '15 minutes', _category: 'Developer Tools', _realService: true, _technology: ['Next.js', _'SQLite/Postgres', _'Twilio'], _integrations: ['Gmail', _'Outlook', _'Stripe'], _useCases: ['Leads', _'Follow-ups', _'Deal tracking'], _roi: 'Increase follow-through and close rates 10–20% via reminders.', _competitors: ['HubSpot Starter', _'Zoho CRM', _'Pipedrive'], _marketSize: '$5B SMB CRM', _growthRate: '12% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'PWA with offline storage, _task reminders, _and webhook-based integrations.', _launchDate: '2025-10-20', _customers: 210, _rating: 4.5, _reviews: 77},
	{_id: 'returns-automation-saas', _name: 'E‑commerce Returns Automation', _tagline: 'Self-serve returns portal and automated labels', _price: '$49', _period: '/month', _description: 'Plug-and-play returns workflows with label generation, _RMA approvals, _and status tracking for Shopify/WooCommerce.', _features: [
			'Customer returns portal', _'Prepaid label generation', _'RMA approval rules', _'Inventory and refund sync', _'Email/SMS notifications', _'Analytics on reasons and cost'
		], _popular: false, _icon: '📦', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-400', _link: 'https://ziontechgroup.com/services/returns-automation-saas', _marketPosition: 'Competes with Returnly/Loop; quick setup for SMBs.', _targetAudience: 'DTC brands, _Shopify/WooCommerce stores', _trialDays: 14, _setupTime: '2 hours', _category: 'Developer Tools', _realService: true, _technology: ['Next.js', _'Node.js', _'Stripe', _'Shippo'], _integrations: ['Shopify', _'WooCommerce', _'Shippo', _'Stripe'], _useCases: ['Returns portal', _'Exchange workflows', _'Refund automation'], _roi: 'Reduce support tickets ~30% and speed refunds.', _competitors: ['Loop Returns', _'Returnly'], _marketSize: '$800M returns software', _growthRate: '18% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Webhook-driven order sync; label/provider adapters.', _launchDate: '2025-10-05', _customers: 95, _rating: 4.6, _reviews: 35},
	{_id: 'it-helpdesk-for-msps', _name: 'IT Helpdesk for MSPs', _tagline: 'Ticketing, _SLAs, _and client portal built for MSPs', _price: '$149', _period: '/month', _description: 'Email/portal/API ticketing, _SLA rules, _KBs, _and RMM/network integrations with client-facing reporting.', _features: [
			'Inbox and portal ticket intake', _'Auto-routing, _SLAs, _and escalations', _'Public/private knowledge base', _'Client portal with reports', _'RMM and network tool integrations', _'Billing export and time tracking'
		], _popular: true, _icon: '🛠️', _color: 'from-blue-600 to-indigo-700', _textColor: 'text-indigo-400', _link: 'https://ziontechgroup.com/services/it-helpdesk-for-msps', _marketPosition: 'Simpler than Zendesk/Freshdesk; MSP-first workflows and pricing.', _targetAudience: 'Managed service providers, _internal IT teams', _trialDays: 14, _setupTime: '1 day', _category: 'Quality & Monitoring', _realService: true, _technology: ['Next.js', _'Node.js', _'PostgreSQL'], _integrations: ['Zendesk', _'Freshdesk', _'Datadog', _'Grafana'], _useCases: ['IT support', _'SLA management', _'Client reporting'], _roi: 'Faster resolution, _less toil; better client satisfaction.', _competitors: ['Zendesk', _'Freshdesk', _'HaloPSA'], _marketSize: '$10B helpdesk software', _growthRate: '10% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Email ingestion, _rules engine, _and portal with RBAC.', _launchDate: '2025-09-28', _customers: 70, _rating: 4.5, _reviews: 28}
];
export const _real2025Q4Additions = [
  {_id: 'ai-governed-rag-platform', _name: 'AI-Governed RAG Platform', _tagline: 'Enterprise-grade RAG with guardrails, _approvals, _and evals', _price: '$699', _period: '/month', _description: 'Production-ready retrieval augmented generation with content pipelines, _PII redaction, _policy guardrails, _evals, _and human approvals for high-stakes workflows.', _features: [
      'Document sync and chunking pipelines', _'Metadata and policy guardrails', _'Evals and drift tracking', _'Human-in-the-loop approvals', _'Observability and cost caps', _'SDKs for Node/Python'
    ], _popular: true, _icon: '🧠', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: `https://ziontechgroup.com/services/${toSlug('ai-governed-rag-platform')}`,
    marketPosition: 'Safer alternative to DIY RAG; comparable to Guardrails/Evals + vector DB stacks.',
    targetAudience: 'Platform, data, and compliance teams',
    trialDays: 14,
    setupTime: '1–2 days',
    category: 'AI & Data',
    realService: true,
    technology: ['OpenAI, Anthropic, Vector DB, OpenTelemetry'],
    integrations: ['Zendesk, Confluence, Google Drive, S3'],
    useCases: ['Support copilots, Internal search, Drafting with review'],
    roi: 'Ship copilots 3x faster with governance baked in.',
    competitors: ['LangChain + custom, LlamaIndex + custom, Guardrails AI'],
    marketSize: '$30B+ AI tooling',
    growthRate: '45% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Pipelines, policies, eval harness, cost and latency budgets.',
    launchDate: '2025-03-01',
    customers: 18,
    rating: 4.8,
    reviews: 11
  },
  {_id: 'edge-personalization-engine', _name: 'Edge Personalization Engine', _tagline: 'Real-time content and pricing personalization at the edge', _price: '$249', _period: '/month', _description: 'Low-latency personalization rules and ML scoring at the edge with audience definitions, _A/B tests, _and analytics.', _features: [
      'Audience builder and traits', _'Edge functions and KV cache', _'A/B and holdout tests', _'Privacy-first scoring', _'Dashboards and exports'
    ], _popular: true, _icon: '⚡', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-300', _link: `https://ziontechgroup.com/services/${toSlug('edge-personalization-engine')}`,
    marketPosition: 'Simpler alternative to enterprise CDPs for SMBs; edge-native.',
    targetAudience: 'Growth and eCommerce teams',
    trialDays: 7,
    setupTime: 'Same day',
    category: 'Micro SaaS',
    realService: true,
    technology: ['Edge runtime, KV/Redis, Next.js'],
    integrations: ['Shopify, Stripe, Segment'],
    useCases: ['Homepage variants, Pricing tests, Onsite promos'],
    roi: 'Lift conversion by 5–15% via real-time variants.',
    competitors: ['Uniform, Optimizely, Cloudflare Workers + DIY'],
    marketSize: '$5B experimentation',
    growthRate: '12% YoY',
    variant: 'edge-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Rules engine, audience traits, edge execution and analytics.',
    launchDate: '2025-03-10',
    customers: 42,
    rating: 4.6,
    reviews: 23
  },
  {_id: 'devx-preview-environments', _name: 'DevX Preview Environments', _tagline: 'On-demand ephemeral previews with seeded data and checks', _price: '$199', _period: '/month', _description: 'Spin up ephemeral environments per PR with seed data, _smoke tests, _screenshots, _and teardown policies.', _features: [
      'One-PR one-env automation', _'Seed data and fixtures', _'Smoke tests and screenshots', _'Secrets and policies as code', _'Cost and TTL controls'
    ], _icon: '🚀', _color: 'from-blue-600 to-indigo-700', _textColor: 'text-blue-300', _link: `https://ziontechgroup.com/services/${toSlug('devx-preview-environments')}`,
    marketPosition: 'Faster than DIY scripts; comparable to Uffizzi/Gitpod previews.',
    targetAudience: 'Platform and app teams',
    trialDays: 14,
    setupTime: '1–3 days',
    category: 'Developer Tools',
    realService: true,
    technology: ['Docker, K8s, IaC'],
    integrations: ['GitHub, GitLab, Slack'],
    useCases: ['Product review, QA signoff, Demos'],
    roi: 'Cut review cycle time by 30–50%.',
    competitors: ['Uffizzi, Okteto, GitHub Codespaces'],
    marketSize: '$4B DevEx',
    growthRate: '18% YoY',
    variant: 'dev-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Templates, runners, seeders, TTL and cleanup jobs.',
    launchDate: '2025-03-05',
    customers: 27,
    rating: 4.7,
    reviews: 16
  },
  {_id: 'real-time-log-anomaly-guard', _name: 'Real-time Log Anomaly Guard', _tagline: 'Detect anomalies and regressions with LLM-assisted alerts', _price: '$129', _period: '/month', _description: 'Stream logs to detect anomalies, _regressions, _and hotspots with LLM summaries and remediation hints.', _features: [
      'Streaming ingestion and rules', _'Anomaly detection and drift', _'LLM summaries and hints', _'Slack/Email alerts and tickets', _'Dashboards and exports'
    ], _icon: '📈', _color: 'from-rose-600 to-red-700', _textColor: 'text-rose-300', _link: `https://ziontechgroup.com/services/${toSlug('real-time-log-anomaly-guard')}`,
    marketPosition: 'Adds AI summaries to classic log alerts; vendor-agnostic ingestion.',
    targetAudience: 'SREs and platform teams',
    trialDays: 7,
    setupTime: 'Same day',
    category: 'Observability',
    realService: true,
    technology: ['Loki/Elastic, OpenTelemetry, LLMs'],
    integrations: ['Grafana, Datadog, PagerDuty'],
    useCases: ['Incident detection, Regression spotting, Postmortems'],
    roi: 'Reduce MTTR by 25–40%.',
    competitors: ['Datadog Logs, Elastic ML, Axiom'],
    marketSize: '$10B log analytics',
    growthRate: '20% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Ingestion adapters, anomaly models, runbooks.',
    launchDate: '2025-03-08',
    customers: 33,
    rating: 4.5,
    reviews: 19
  },
  {_id: 'governed-feature-flags', _name: 'Governed Feature Flags', _tagline: 'Audit-ready flags with policies, _approvals, _and rollbacks', _price: '$99', _period: '/month', _description: 'Lightweight feature flags with policy checks, _approvals, _change logs, _and automatic rollbacks based on SLOs.', _features: [
      'Policies and approvals', _'Change logs and RBAC', _'SLO-based rollbacks', _'SDKs and edge eval', _'Experiments and cohorts'
    ], _icon: '🏳️', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-300', _link: `https://ziontechgroup.com/services/${toSlug('governed-feature-flags')}`,
    marketPosition: 'Policy-focused alternative to generic toggle tools.',
    targetAudience: 'Product and platform teams',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Developer Tools',
    realService: true,
    technology: ['Edge, SDKs, Audit logs'],
    integrations: ['GitHub, Jira, Slack'],
    useCases: ['Safe launches, Change control, Experiments'],
    roi: 'Reduce incident risk and speed delivery.',
    competitors: ['LaunchDarkly, Flagsmith, Unleash'],
    marketSize: '$2B feature management',
    growthRate: '16% YoY',
    variant: 'dev-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Audit trails, policy engine, SLO hooks.',
    launchDate: '2025-03-02',
    customers: 21,
    rating: 4.6,
    reviews: 12
  },
  {_id: 'email-sequence-copilot', _name: 'Email Sequence Copilot', _tagline: 'On-brand outbound with warm-up, _scoring, _and safety', _price: '$79', _period: '/month', _description: 'Compose, _schedule, _and monitor outbound sequences with domain warm-up, _safety guardrails, _and reply intent scoring.', _features: [
      'Sequence composer and AI draft', _'Warm-up and safety checks', _'Reply intent and routing', _'Blacklist monitoring', _'CRM sync'
    ], _icon: '✉️', _color: 'from-fuchsia-600 to-pink-700', _textColor: 'text-fuchsia-300', _link: `https://ziontechgroup.com/services/${toSlug('email-sequence-copilot')}`,
    marketPosition: 'Safer than generic sequencers; deliverability-first.',
    targetAudience: 'Sales and growth teams',
    trialDays: 7,
    setupTime: 'Same day',
    category: 'Growth & Marketing',
    realService: true,
    technology: ['Postmaster, LLMs, ESP APIs'],
    integrations: ['HubSpot, Salesforce, SendGrid/Mailgun'],
    useCases: ['Outbound, Nurture, Follow-ups'],
    roi: 'Increase positive replies by 10–20%.',
    competitors: ['Apollo, Instantly, Yesware'],
    marketSize: '$6B sales engagement',
    growthRate: '9% YoY',
    variant: 'growth-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Deliverability checks, AI drafts, safety policies.',
    launchDate: '2025-03-12',
    customers: 38,
    rating: 4.5,
    reviews: 20
  },
  {_id: 'data-contracts-guardrails', _name: 'Data Contracts Guardrails', _tagline: 'Schema governance, _lineage, _and backward-compat checks', _price: '$299', _period: '/month', _description: 'Define and enforce data contracts with compatibility checks, _lineage, _owners, _and alerting integrated with CI/CD.', _features: [
      'Schema registry and versioning', _'Back/forward compatibility checks', _'Lineage and ownership', _'Alerts and SLOs', _'CI/CD integrations'
    ], _icon: '🧮', _color: 'from-sky-600 to-indigo-700', _textColor: 'text-sky-300', _link: `https://ziontechgroup.com/services/${toSlug('data-contracts-guardrails')}`,
    marketPosition: 'Practical contracts vs. building from scratch.',
    targetAudience: 'Data engineering teams',
    trialDays: 14,
    setupTime: '3–5 days',
    category: 'Data & Analytics',
    realService: true,
    technology: ['dbt, Kafka, OpenLineage'],
    integrations: ['Snowflake, BigQuery, Databricks'],
    useCases: ['Stability, SLA enforcement, Incident reduction'],
    roi: 'Reduce data incidents by 30–50%.',
    competitors: ['Monte Carlo, open-source stacks'],
    marketSize: '$5B data quality',
    growthRate: '18% YoY',
    variant: 'quantum-matrix',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Registries, CI checks, alerts, lineage.',
    launchDate: '2025-03-03',
    customers: 12,
    rating: 4.6,
    reviews: 9
  },
  {_id: 'managed-sso-fast-track', _name: 'Managed SSO Fast Track', _tagline: 'IdP mappings, _SCIM, _SAML/OIDC with enterprise checklist', _price: '$4, _500', _period: '/fixed', _description: 'Done-with-you SSO rollout for SaaS teams, _including IdP app, _mappings, _SCIM, _test plans, _and enterprise-ready documentation.', _features: [
      'Okta/Entra app configs', _'SAML/OIDC + SCIM', _'Security test plans', _'Customer enablement kit'
    ], _icon: '🔐', _color: 'from-slate-600 to-gray-700', _textColor: 'text-slate-300', _link: `https://ziontechgroup.com/services/${toSlug('managed-sso-fast-track')}`,
    marketPosition: 'Accelerates enterprise deals vs. open-ended projects.',
    targetAudience: 'B2B SaaS product teams',
    trialDays: 0,
    setupTime: '1 week',
    category: 'Enterprise IT',
    realService: true,
    technology: ['Okta, Entra, Auth0, SCIM'],
    integrations: ['WorkOS, Frontegg'],
    useCases: ['Enterprise SSO, Security posture'],
    roi: 'Shorten security review cycles by 2–4 weeks.',
    competitors: ['WorkOS PS, consultancies'],
    marketSize: '$6B identity services',
    growthRate: '13% CAGR',
    variant: 'enterprise-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'IdP configs, SP metadata, SCIM schema and guides.',
    launchDate: '2025-03-06',
    customers: 9,
    rating: 4.7,
    reviews: 7
  },
  {_id: 'ai-sales-pipeline-insights', _name: 'AI Sales Pipeline Insights', _tagline: 'Forecast hygiene, _stage risks, _and next-best actions', _price: '$149', _period: '/month', _description: 'Connect CRM to compute forecast hygiene, _risk scores, _and next-best actions with weekly reports and alerts.', _features: [
      'Risk scoring and hygiene checks', _'Stage SLAs and alerts', _'Next-best action copilot', _'Reporting and dashboards'
    ], _icon: '📊', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-300', _link: `https://ziontechgroup.com/services/${toSlug('ai-sales-pipeline-insights')}`,
    marketPosition: 'Lightweight RevOps insights without heavy BI projects.',
    targetAudience: 'Sales and RevOps leaders',
    trialDays: 7,
    setupTime: '2–3 days',
    category: 'Business Automation',
    realService: true,
    technology: ['CRM APIs, LLMs, Dashboards'],
    integrations: ['Salesforce, HubSpot'],
    useCases: ['Forecast accuracy, Pipeline velocity'],
    roi: 'Increase forecast accuracy and win rates.',
    competitors: ['People.ai, Clari (lightweight alt)'],
    marketSize: '$12B RevOps',
    growthRate: '10% CAGR',
    variant: 'holographic-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Data sync, scoring, weekly reviews.',
    launchDate: '2025-03-04',
    customers: 14,
    rating: 4.5,
    reviews: 10
  },
  {_id: 'secure-webhook-relay', _name: 'Secure Webhook Relay', _tagline: 'Replay, _signature verification, _retries, _and audit logs', _price: '$59', _period: '/month', _description: 'Reliably receive, _verify, _replay, _and audit webhooks with DLQs, _retries, _and fan-out to multiple services.', _features: [
      'Signature verification and secrets', _'Replay and DLQs', _'Retries and backoff', _'Fan-out and transformations', _'Audit logs and RBAC'
    ], _icon: '🔁', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: `https://ziontechgroup.com/services/${toSlug('secure-webhook-relay')}`,
    marketPosition: 'Production-ready relay alternative to building in-house.',
    targetAudience: 'Developers and platform teams',
    trialDays: 14,
    setupTime: 'Same day',
    category: 'Developer Tools',
    realService: true,
    technology: ['Queues, HMAC, Workers'],
    integrations: ['Stripe, Shopify, GitHub'],
    useCases: ['Reliable webhooks, Auditing, Fan-out'],
    roi: 'Reduce failures and save engineering time.',
    competitors: ['Svix, Hookdeck'],
    marketSize: '$1B+ integration tooling',
    growthRate: '14% YoY',
    variant: 'dev-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Relay service, verification, replay UI.',
    launchDate: '2025-03-09',
    customers: 31,
    rating: 4.6,
    reviews: 18
  },
  {_id: 'managed-postgres-ha-lite', _name: 'Managed Postgres HA Lite', _tagline: 'Backups, _failover, _and performance baselines for SMEs', _price: '$129', _period: '/month', _description: 'Hands-off Postgres ops: backups, _PITR, _failover drills, _index maintenance, _and baseline dashboards.', _features: [
      'Automated backups and PITR', _'Failover drills and runbooks', _'Index and bloat maintenance', _'Performance dashboards'
    ], _icon: '🗄️', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-300', _link: `https://ziontechgroup.com/services/${toSlug('managed-postgres-ha-lite')}`,
    marketPosition: 'Practical alternative to DBAs for small teams.',
    targetAudience: 'SMBs and startups',
    trialDays: 7,
    setupTime: '3–5 days',
    category: 'Enterprise IT',
    realService: true,
    technology: ['Postgres, Patroni/Cloud-native HA'],
    integrations: ['Grafana, Prometheus'],
    useCases: ['Reliability, Backups, Performance'],
    roi: 'Reduce incidents and toil for DB ops.',
    competitors: ['Aiven, Crunchy Bridge (managed services)'],
    marketSize: '$3B DB ops services',
    growthRate: '11% YoY',
    variant: 'enterprise-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Backup policies, failover drills, dashboards.',
    launchDate: '2025-03-11',
    customers: 17,
    rating: 4.6,
    reviews: 9
  }
];