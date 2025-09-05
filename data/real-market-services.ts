<<<<<<< HEAD
import { ServiceVariant } from '../types/service-variants',
export interface RealMarketService {
  id: string,
  name: string,
  tagline: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  popular: boolean,
  icon: string,
  color: string,
  textColor: string,
  link: string,
  marketPosition: string,
  targetAudience: string,
  trialDays: number,
  setupTime: string,
  category: string,
  realService: boolean,
  technology: string[],
  integrations: string[],
  useCases: string[],
  roi: string,
  competitors: string[],
  marketSize: string,
  growthRate: string,
  variant: ServiceVariant,
  contactInfo: {
    mobile: string,
    email: string,
    address: string,
    website: string
  },
  realImplementation: boolean,
  implementationDetails: string,
  launchDate: string,
  customers: number,
  rating: number,
  reviews: number
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

export const realMarketServices: RealMarketService[] = [
  {
    id: 'llm-gateway-cost-control',
    name: 'LLM Gateway & Cost Control',
    tagline: 'Centralize model access, control spend, add observability and guardrails',
    price: '$299',
    period: '/month',
    description: 'A production-ready gateway that unifies access to OpenAI, Anthropic, Google, and open-source models with usage-based routing, rate limits, prompt/response logging, redaction, and cost controls.',
    features: [
      'Unified API for multiple LLM providersSpend caps, rate limits, and usage alertsPII redaction and secrets filteringPrompt templates and versioningLatency and cost-aware routingBatch and streaming inferenceAudit logs and RBACLangChain/LlamaIndex SDK support',
      'Export to data warehouse'
    ],
    popular: true,
    icon: '🧠',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/llm-gateway',
    marketPosition: 'Comparable to OpenRouter (usage-based) and EdenAI, adds enterprise guardrails and governance.',
    targetAudience: 'Product teams, platform engineering, data/AI teams',
    trialDays: 14,
    setupTime: '1 day',
    category: 'AI & Data',
    realService: true,
    technology: ['Node.js, TypeScript, PostgreSQL, Redis, OpenAI, Anthropic'],
    integrations: ['OpenAI, Anthropic, Google AI Studio, Bedrock, Azure OpenAI'],
    useCases: ['Centralized LLM access, Governance and compliance, Cost optimization'],
    roi: 'Reduce AI spend by 20–40% with routing and caps.',
    competitors: ['OpenRouter, EdenAI, Helicone, PromptLayer'],
    marketSize: '$40B+ GenAI platform market',
    growthRate: '100% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Multi-tenant gateway with policy engine, provider adapters, and per-project metering.',
    launchDate: '2024-12-01',
    customers: 85,
    rating: 4.8,
    reviews: 61
  },
  {
    id: 'api-observability-starter',
    name: 'API Observability Starter',
    tagline: 'Trace, log, and profile your APIs in hours, not weeks',
    price: '$149',
    period: '/month',
    description: 'Turn-key instrumentation templates, dashboards, and SLOs for Node/Next.js, with error budgets, golden signals, and alerts integrated out of the box.',
    features: [
      'OpenTelemetry auto-instrumentationGolden signals dashboardsError budgets and SLO templatesJaeger/Tempo tracing readyGrafana dashboards and alertsLatency heatmaps and p95/p99Service map and dependency view'
    ],
    popular: true,
    icon: '📈',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/api-observability-starter',
    marketPosition: 'Alternative to building in-house, complements Datadog and Grafana Cloud.',
    targetAudience: 'Backend engineers, SREs, platform teams',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Observability',
    realService: true,
    technology: ['OpenTelemetry, Grafana, Prometheus, Tempo, Loki'],
    integrations: ['Datadog, Grafana Cloud, New Relic'],
    useCases: ['Reduce MTTR, Reliability baselines, Capacity planning'],
    roi: 'Cut incident time by 30–60%.',
    competitors: ['Datadog APM, New Relic APM, Grafana Cloud Traces'],
    marketSize: '$18B observability',
    growthRate: '25% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Ready-made Terraform/Grafana dashboards, alerts, and OpenTelemetry setup.',
    launchDate: '2024-11-10',
    customers: 120,
    rating: 4.7,
    reviews: 73
  },
  {
    id: 'email-deliverability-warmup',
    name: 'Email Deliverability & Warmup Monitor',
    tagline: 'Inbox placement, warmup, and sender reputation monitoring',
    price: '$79',
    period: '/month',
    description: 'Improve inbox placement with domain alignment checks (SPF/DKIM/DMARC), seed-list tests, warmup automation, and blacklist monitoring with alerts and remediation playbooks.',
    features: [
      'SPF/DKIM/DMARC configuration checksSeed-list deliverability testsAutomated sending warmup schedulesBlocklist and reputation monitoringBIMI and TLS validationAlerts to Slack/Email with remediation steps'
    ],
    popular: true,
    icon: '📧',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-400',
    link: 'https://ziontechgroup.com/email-deliverability-monitor',
    marketPosition: 'Complements ESPs with vendor-agnostic monitoring and playbooks, alternatives include Mailgun, SendGrid add-ons.',
    targetAudience: 'Growth, marketing ops, and platform teams',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Next.js, DNS, TLS'],
    integrations: ['SendGrid, Mailgun, Postmark'],
    useCases: ['Improve inbox placement, Maintain domain reputation, Accelerate pre-launch warmup'],
    roi: 'Lift email open rate by 10–30% and reduce spam placement.',
    competitors: ['SendForensics, Mailgun Deliverability, Folderly'],
    marketSize: '$1B+ deliverability tooling',
    growthRate: '15% YoY',
    variant: 'monitoring-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======

export interface RealMarketService {_id: string;
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
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;};
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const _contact = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

export const realMarketServices: RealMarketService[] = [
  {_id: 'llm-gateway-cost-control', _name: 'LLM Gateway & Cost Control', _tagline: 'Centralize model access, _control spend, _add observability and guardrails', _price: '$299', _period: '/month', _description: 'A production-ready gateway that unifies access to OpenAI, _Anthropic, _Google, _and open-source models with usage-based routing, _rate limits, _prompt/response logging, _redaction, _and cost controls.', _features: [
      'Unified API for multiple LLM providers', _'Spend caps, _rate limits, _and usage alerts', _'PII redaction and secrets filtering', _'Prompt templates and versioning', _'Latency and cost-aware routing', _'Batch and streaming inference', _'Audit logs and RBAC', _'LangChain/LlamaIndex SDK support', _'Export to data warehouse'
    ], _popular: true, _icon: '🧠', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-400', _link: 'https://ziontechgroup.com/llm-gateway', _marketPosition: 'Comparable to OpenRouter (usage-based) and EdenAI; adds enterprise guardrails and governance.', _targetAudience: 'Product teams, _platform engineering, _data/AI teams', _trialDays: 14, _setupTime: '1 day', _category: 'AI & Data', _realService: true, _technology: ['Node.js, _TypeScript, _PostgreSQL, _Redis, _OpenAI, _Anthropic'], _integrations: ['OpenAI, _Anthropic, _Google AI Studio, _Bedrock, _Azure OpenAI'], _useCases: ['Centralized LLM access, _Governance and compliance, _Cost optimization'], _roi: 'Reduce AI spend by 20–40% with routing and caps.', _competitors: ['OpenRouter, _EdenAI, _Helicone, _PromptLayer'], _marketSize: '$40B+ GenAI platform market', _growthRate: '100% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Multi-tenant gateway with policy engine, _provider adapters, _and per-project metering.', _launchDate: '2024-12-01', _customers: 85, _rating: 4.8, _reviews: 61},
  {_id: 'api-observability-starter', _name: 'API Observability Starter', _tagline: 'Trace, _log, _and profile your APIs in hours, _not weeks', _price: '$149', _period: '/month', _description: 'Turn-key instrumentation templates, _dashboards, _and SLOs for Node/Next.js, _with error budgets, _golden signals, _and alerts integrated out of the box.', _features: [
      'OpenTelemetry auto-instrumentation', _'Golden signals dashboards', _'Error budgets and SLO templates', _'Jaeger/Tempo tracing ready', _'Grafana dashboards and alerts', _'Latency heatmaps and p95/p99', _'Service map and dependency view'
    ], _popular: true, _icon: '📈', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-400', _link: 'https://ziontechgroup.com/api-observability-starter', _marketPosition: 'Alternative to building in-house; complements Datadog and Grafana Cloud.', _targetAudience: 'Backend engineers, _SREs, _platform teams', _trialDays: 7, _setupTime: '1 day', _category: 'Observability', _realService: true, _technology: ['OpenTelemetry, _Grafana, _Prometheus, _Tempo, _Loki'], _integrations: ['Datadog, _Grafana Cloud, _New Relic'], _useCases: ['Reduce MTTR, _Reliability baselines, _Capacity planning'], _roi: 'Cut incident time by 30–60%.', _competitors: ['Datadog APM, _New Relic APM, _Grafana Cloud Traces'], _marketSize: '$18B observability', _growthRate: '25% YoY', _variant: 'monitoring-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Ready-made Terraform/Grafana dashboards, _alerts, _and OpenTelemetry setup.', _launchDate: '2024-11-10', _customers: 120, _rating: 4.7, _reviews: 73},
  {_id: 'email-deliverability-warmup', _name: 'Email Deliverability & Warmup Monitor', _tagline: 'Inbox placement, _warmup, _and sender reputation monitoring', _price: '$79', _period: '/month', _description: 'Improve inbox placement with domain alignment checks (SPF/DKIM/DMARC), _seed-list tests, _warmup automation, _and blacklist monitoring with alerts and remediation playbooks.', _features: [
      'SPF/DKIM/DMARC configuration checks', _'Seed-list deliverability tests', _'Automated sending warmup schedules', _'Blocklist and reputation monitoring', _'BIMI and TLS validation', _'Alerts to Slack/Email with remediation steps'
    ], _popular: true, _icon: '📧', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-400', _link: 'https://ziontechgroup.com/email-deliverability-monitor', _marketPosition: 'Complements ESPs with vendor-agnostic monitoring and playbooks; alternatives include Mailgun, _SendGrid add-ons.', _targetAudience: 'Growth, _marketing ops, _and platform teams', _trialDays: 7, _setupTime: '30 minutes', _category: 'Quality & Monitoring', _realService: true, _technology: ['Next.js, _DNS, _TLS'], _integrations: ['SendGrid, _Mailgun, _Postmark'], _useCases: ['Improve inbox placement, _Maintain domain reputation, _Accelerate pre-launch warmup'], _roi: 'Lift email open rate by 10–30% and reduce spam placement.', _competitors: ['SendForensics, _Mailgun Deliverability, _Folderly'], _marketSize: '$1B+ deliverability tooling', _growthRate: '15% YoY', _variant: 'monitoring-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'DNS checks, seed-list tests, blacklist APIs, and scheduled warmup orchestration.',
    launchDate: '2025-02-01',
    customers: 120,
    rating: 4.6,
    reviews: 44
  },
<<<<<<< HEAD
  {
    id: 'affiliate-attribution-hub',
    name: 'Affiliate Attribution & Payouts Hub',
    tagline: 'Track referrals, detect fraud, and automate commission payouts',
    price: '$129',
    period: '/month',
    description: 'Cross-device attribution with UTM and first-party identity stitching, fraud heuristics, and automated payouts to affiliates across Stripe/PayPal.',
    features: [
      'UTM, ref, and coupon trackingAttribution windows and LTV creditFraud detection heuristicsStripe/PayPal payout workflowsPartner portal and analyticsWebhooks and API access'
    ],
    popular: false,
    icon: '🤝',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/affiliate-attribution-hub',
    marketPosition: 'Lightweight alternative to enterprise affiliate suites, integrates with modern stacks.',
    targetAudience: 'SaaS and eCommerce teams',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Growth & Monetization',
    realService: true,
    technology: ['Next.js, Stripe'],
    integrations: ['Stripe, PayPal, Google Analytics'],
    useCases: ['Affiliate growth, Partner analytics, Automated payouts'],
    roi: 'Increase partner-sourced revenue by 10–25% with fraud reduction.',
    competitors: ['PartnerStack, Impact.com, Everflow'],
    marketSize: '$5B affiliate platforms',
    growthRate: '12% YoY',
    variant: 'growth-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'affiliate-attribution-hub', _name: 'Affiliate Attribution & Payouts Hub', _tagline: 'Track referrals, _detect fraud, _and automate commission payouts', _price: '$129', _period: '/month', _description: 'Cross-device attribution with UTM and first-party identity stitching, _fraud heuristics, _and automated payouts to affiliates across Stripe/PayPal.', _features: [
      'UTM, _ref, _and coupon tracking', _'Attribution windows and LTV credit', _'Fraud detection heuristics', _'Stripe/PayPal payout workflows', _'Partner portal and analytics', _'Webhooks and API access'
    ], _popular: false, _icon: '🤝', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-400', _link: 'https://ziontechgroup.com/affiliate-attribution-hub', _marketPosition: 'Lightweight alternative to enterprise affiliate suites; integrates with modern stacks.', _targetAudience: 'SaaS and eCommerce teams', _trialDays: 14, _setupTime: '1 day', _category: 'Growth & Monetization', _realService: true, _technology: ['Next.js, _Stripe'], _integrations: ['Stripe, _PayPal, _Google Analytics'], _useCases: ['Affiliate growth, _Partner analytics, _Automated payouts'], _roi: 'Increase partner-sourced revenue by 10–25% with fraud reduction.', _competitors: ['PartnerStack, _Impact.com, _Everflow'], _marketSize: '$5B affiliate platforms', _growthRate: '12% YoY', _variant: 'growth-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Attribution pipelines, event deduplication, and payout batch jobs.',
    launchDate: '2025-01-15',
    customers: 65,
    rating: 4.5,
    reviews: 29
  },
<<<<<<< HEAD
  {
    id: 'ai-customer-support-suite',
    name: 'AI Customer Support Suite',
    tagline: 'Unified ticketing, chat, and AI assistants with knowledge sync',
    price: '$199',
    period: '/month',
    description: 'Bring chat, ticketing, and AI assistance together with RAG over docs, macros, and action tools for faster resolution and CSAT uplift.',
    features: [
      'AI chat and email draftingRAG over product docs and ticketsMacros and action toolsSentiment and CSAT analyticsZendesk/Intercom syncEscalation and SLA policies'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/ai-customer-support-suite',
    marketPosition: 'Augments existing helpdesks with agent copilots and automation.',
    targetAudience: 'Support and success teams',
    trialDays: 14,
    setupTime: '1 day',
    category: 'AI & Data',
    realService: true,
    technology: ['Next.js, OpenAI, Vector DB'],
    integrations: ['Zendesk, Intercom, Freshdesk'],
    useCases: ['Faster resolution, Deflection via chat, Higher CSAT'],
    roi: 'Reduce handle time 20–40% and raise CSAT 10–20%.',
    competitors: ['Forethought, Cohere Assist, Zendesk AI'],
    marketSize: '$10B+ AI support',
    growthRate: '30% YoY',
    variant: 'ai-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'ai-customer-support-suite', _name: 'AI Customer Support Suite', _tagline: 'Unified ticketing, _chat, _and AI assistants with knowledge sync', _price: '$199', _period: '/month', _description: 'Bring chat, _ticketing, _and AI assistance together with RAG over docs, _macros, _and action tools for faster resolution and CSAT uplift.', _features: [
      'AI chat and email drafting', _'RAG over product docs and tickets', _'Macros and action tools', _'Sentiment and CSAT analytics', _'Zendesk/Intercom sync', _'Escalation and SLA policies'
    ], _popular: true, _icon: '🤖', _color: 'from-purple-600 to-indigo-700', _textColor: 'text-purple-400', _link: 'https://ziontechgroup.com/ai-customer-support-suite', _marketPosition: 'Augments existing helpdesks with agent copilots and automation.', _targetAudience: 'Support and success teams', _trialDays: 14, _setupTime: '1 day', _category: 'AI & Data', _realService: true, _technology: ['Next.js, _OpenAI, _Vector DB'], _integrations: ['Zendesk, _Intercom, _Freshdesk'], _useCases: ['Faster resolution, _Deflection via chat, _Higher CSAT'], _roi: 'Reduce handle time 20–40% and raise CSAT 10–20%.', _competitors: ['Forethought, _Cohere Assist, _Zendesk AI'], _marketSize: '$10B+ AI support', _growthRate: '30% YoY', _variant: 'ai-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Knowledge sync, embeddings, intent detection, and action tools.',
    launchDate: '2025-02-05',
    customers: 42,
    rating: 4.7,
    reviews: 21
  },
<<<<<<< HEAD
  {
    id: 'smb-analytics-starter',
    name: 'SMB Web Analytics Starter',
    tagline: 'Privacy-first, cookie-lite analytics with actionable insights',
    price: '$39',
    period: '/month',
    description: 'Simple dashboards with traffic sources, conversions, and page insights for non-technical teams. Exports and alerts included.',
    features: [
      'Traffic and conversion funnelsSource/medium and campaignsGoals and events trackingEmail/Slack anomaly alertsCSV/BigQuery exportGDPR-friendly, IP anonymization'
    ],
    popular: false,
    icon: '📊',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/smb-analytics-starter',
    marketPosition: 'Lightweight alternative to GA4 for SMBs, faster to value.',
    targetAudience: 'Small businesses and startups',
    trialDays: 7,
    setupTime: '15 minutes',
    category: 'Analytics',
    realService: true,
    technology: ['Next.js, Edge analytics'],
    integrations: ['Google Ads, Meta Ads'],
    useCases: ['Track campaigns, Monitor conversions, Detect anomalies'],
    roi: 'Save setup time and make faster decisions, reduce tooling complexity.',
    competitors: ['Plausible, Fathom, Simple Analytics'],
    marketSize: '$1B SMB analytics',
    growthRate: '14% YoY',
    variant: 'analytics-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'smb-analytics-starter', _name: 'SMB Web Analytics Starter', _tagline: 'Privacy-first, _cookie-lite analytics with actionable insights', _price: '$39', _period: '/month', _description: 'Simple dashboards with traffic sources, _conversions, _and page insights for non-technical teams. Exports and alerts included.', _features: [
      'Traffic and conversion funnels', _'Source/medium and campaigns', _'Goals and events tracking', _'Email/Slack anomaly alerts', _'CSV/BigQuery export', _'GDPR-friendly, _IP anonymization'
    ], _popular: false, _icon: '📊', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-300', _link: 'https://ziontechgroup.com/smb-analytics-starter', _marketPosition: 'Lightweight alternative to GA4 for SMBs; faster to value.', _targetAudience: 'Small businesses and startups', _trialDays: 7, _setupTime: '15 minutes', _category: 'Analytics', _realService: true, _technology: ['Next.js, _Edge analytics'], _integrations: ['Google Ads, _Meta Ads'], _useCases: ['Track campaigns, _Monitor conversions, _Detect anomalies'], _roi: 'Save setup time and make faster decisions; reduce tooling complexity.', _competitors: ['Plausible, _Fathom, _Simple Analytics'], _marketSize: '$1B SMB analytics', _growthRate: '14% YoY', _variant: 'analytics-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Snippet-based analytics with server-side aggregation and privacy safeguards.',
    launchDate: '2025-02-10',
    customers: 33,
    rating: 4.5,
    reviews: 17
  },
<<<<<<< HEAD
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer',
    tagline: 'Automated rightsizing, anomaly detection, and savings recommendations',
    price: '$399',
    period: '/month',
    description: 'Automate detection of idle resources, rightsizing, and savings plans across AWS/GCP/Azure with weekly reports and Jira-ready tickets.',
    features: [
      'Idle resource detectionRightsizing and reservationsAnomaly detection and alertsTag hygiene and complianceWeekly savings reportsAuto-created ticketsRBAC and multi-account'
    ],
    popular: true,
    icon: '💸',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-400',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    marketPosition: 'Competitor to CloudZero, ProsperOps, and native cloud tools, simpler onboarding.',
    targetAudience: 'FinOps, platform engineering, engineering leadership',
    trialDays: 14,
    setupTime: '3 days',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['AWS, GCP, Azure, BQ/Redshift'],
    integrations: ['Jira, Slack, Datadog'],
    useCases: ['Reduce spend, Budget governance, Chargeback/showback'],
    roi: 'Save 10–30% monthly cloud spend.',
    competitors: ['CloudZero, ProsperOps, AWS Cost Explorer'],
    marketSize: '$12B FinOps',
    growthRate: '30% YoY',
    variant: 'cloud-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Read-only billing access, tagging policy checks, automated recommendation engine.',
    launchDate: '2024-10-05',
    customers: 65,
    rating: 4.6,
    reviews: 48
  },
  {
    id: 'soc2-evidence-automation',
    name: 'SOC 2 Evidence Automation',
    tagline: 'Automate evidence collection, auditor-ready reports, and continuous controls',
    price: '$499',
    period: '/month',
    description: 'Automate SOC 2 controls evidence from cloud providers, identity, CI/CD, and ticketing systems with auditor export packs.',
    features: [
      'Automated evidence collectorsControl mapping (AICPA)Auditor export packsException workflowsRisk register and ownershipChange management checksContinuous monitoring'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-violet-600 to-fuchsia-700',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/soc2-evidence-automation',
    marketPosition: 'Comparable to Drata/Vanta with more engineering visibility.',
    targetAudience: 'Security, compliance leads, CTOs',
    trialDays: 14,
    setupTime: '1–2 weeks',
    category: 'Security & Compliance',
    realService: true,
    technology: ['AWS, Azure, GCP, Okta, GitHub, Jira'],
    integrations: ['Okta, Google Workspace, GitHub, Jira, AWS'],
    useCases: ['Audit readiness, Continuous control monitoring, Vendor assessments'],
    roi: 'Reduce audit time by 50–70%.',
    competitors: ['Drata, Vanta, Secureframe'],
    marketSize: '$10B compliance automation',
    growthRate: '28% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Collectors for major SaaS/Cloud, control mapping engine, audit packs.',
    launchDate: '2024-09-01',
    customers: 42,
    rating: 4.7,
    reviews: 37
  },
  {
    id: 'vector-search-starter',
    name: 'Vector Search Starter',
    tagline: 'Production vector DB setup with ingestion pipelines in a day',
    price: '$249',
    period: '/month',
    description: 'Ready-to-run vector database setup (Pinecone/Weaviate/Elastic) with embeddings pipelines, schema, and example retrieval for your data.',
    features: [
      'Provider selection guideSchema and index templatesETL/ingestion pipelinesEmbeddings and chunking best practicesLatency and cost tuningSample RAG app integration'
    ],
    popular: false,
    icon: '🧭',
    color: 'from-sky-600 to-indigo-700',
    textColor: 'text-sky-400',
    link: 'https://ziontechgroup.com/vector-search-starter',
    marketPosition: 'Accelerator vs DIY, complements vendor docs with turnkey wiring.',
    targetAudience: 'Data engineers, ML engineers, startups',
    trialDays: 7,
    setupTime: '1–2 days',
    category: 'AI & Data',
    realService: true,
    technology: ['Pinecone, Weaviate, Elastic, OpenAI'],
    integrations: ['Airbyte, Fivetran, Kafka'],
    useCases: ['RAG prototypes, Semantic search, Personalization'],
    roi: 'Ship POCs 3–5x faster.',
    competitors: ['Native vendor setup, Consultants'],
    marketSize: '$5B vector DB',
    growthRate: '40% YoY',
    variant: 'data-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Terraform and IaC modules, ETL pipelines, sample notebooks.',
    launchDate: '2024-08-20',
    customers: 58,
    rating: 4.6,
    reviews: 41
  },
  {
    id: 'tls-certificate-monitor',
    name: 'TLS Certificate Monitor',
    tagline: 'Prevent outages with proactive cert expiry and chain validation',
    price: '$49',
    period: '/month',
    description: 'Simple, reliable certificate expiry and chain monitoring with Slack/Email alerts and status pages.',
    features: [
      'Multi-domain monitoringHTTP/TLS and OCSP checksSlack/Email alertsPublic status pagesWeekly compliance reports'
    ],
    popular: false,
    icon: '🔒',
    color: 'from-slate-600 to-slate-800',
    textColor: 'text-slate-300',
    link: 'https://ziontechgroup.com/tls-certificate-monitor',
    marketPosition: 'Lightweight and affordable vs enterprise suites.',
    targetAudience: 'SREs, platform teams, SMEs',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Node.js, OpenSSL, Cron'],
    integrations: ['Slack, Email'],
    useCases: ['Prevent cert outages, Compliance reports'],
    roi: 'Avoid downtime and SLA penalties.',
    competitors: ['UptimeRobot, StatusCake'],
    marketSize: '$2B monitoring',
    growthRate: '12% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Agentless checks, scheduled runners, alerting integrations.',
    launchDate: '2024-07-12',
    customers: 90,
    rating: 4.5,
    reviews: 52
  },
  {
    id: 'api-security-scanner',
    name: 'API Security Scanner',
    tagline: 'Automatically find auth, injection and OWASP API Top 10 risks',
    price: '$799',
    period: '/month',
    description: 'Continuous API security scanning for REST/GraphQL with schema discovery, auth testing, fuzzing and CI/CD gates. Reports mapped to OWASP API Top 10 with Jira-ready tickets.',
    features: [
      'OpenAPI/GraphQL schema discoveryAuth and permission testingOWASP API Top 10 mappingFuzzing and payload mutationsCI/CD quality gatesJira tickets and Slack alerts'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-rose-600 to-orange-700',
    textColor: 'text-rose-300',
    link: 'https://ziontechgroup.com/api-security-scanner',
    marketPosition: 'Competes with Salt Security and Noname (enterprise pricing $3k–$10k+/mo). Lightweight, developer-first and CI-friendly.',
    targetAudience: 'Platform and app security teams, backend engineers',
    trialDays: 14,
    setupTime: '1–3 days',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Node.js, Python, OpenAPI, GraphQL'],
    integrations: ['GitHub Actions, GitLab CI, Jenkins, Jira, Slack'],
    useCases: ['Shift-left API security, Pre-release checks, Continuous scanning'],
    roi: 'Catch critical API vulns pre-prod and reduce incidents by 60%',
    competitors: ['Salt Security, Noname Security, 42Crunch'],
    marketSize: '$5B API security',
    growthRate: '25% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Schema crawler, auth probes, mutational fuzzing, reporters and CI gates.',
    launchDate: '2024-12-05',
    customers: 54,
    rating: 4.7,
    reviews: 33
  },
  {
    id: 'email-deliverability-monitor',
    name: 'Email Deliverability Monitor',
    tagline: 'SPF/DKIM/DMARC checks, blocklist watch and inbox placement',
    price: '$149',
    period: '/month',
    description: 'Continuously monitors DNS auth records, blocklists and seed inbox placement. Actionable runbooks and alerts to keep campaigns landing in the inbox.',
    features: [
      'SPF/DKIM/DMARC validationSeed inbox placement testsBlocklist monitoringDMARC aggregate reports (RUA/RUF)Alerts and weekly scorecards'
    ],
    popular: false,
    icon: '📧',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/email-deliverability-monitor',
    marketPosition: 'Alternatives include GlockApps and MailGenius ($99–$299/mo). Adds automated remediation guides and DNS drift alerts.',
    targetAudience: 'Growth, marketing, platform teams',
    trialDays: 7,
    setupTime: '2 hours',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Node.js, DNS, IMAP/SMTP'],
    integrations: ['SES, SendGrid, Postmark, Mailgun, Slack'],
    useCases: ['Reduce bounces, Improve open rates, Brand protection'],
    roi: 'Lift deliverability 5–15% and campaign ROI 10–25%',
    competitors: ['GlockApps, MailGenius, Postmark Monitoring'],
    marketSize: '$3B email tools',
    growthRate: '10% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'DNS validators, seed inbox network, blocklist checkers and alerting.',
    launchDate: '2024-09-22',
    customers: 77,
    rating: 4.6,
    reviews: 44
  },
  {
    id: 'domain-dns-monitor',
    name: 'Domain & DNS Monitor',
    tagline: 'Track DNS, nameserver and SSL changes with instant alerts',
    price: '$89',
    period: '/month',
    description: 'Watches critical DNS records (A/AAAA, MX, TXT, NS) and TLS changes for drift and hijacks. Keeps an audit trail for compliance.',
    features: [
      'DNS record drift detectionTLS and chain changesAudit log and diffsSlack/Email alertsExportable reports'
    ],
    popular: false,
    icon: '🌐',
    color: 'from-sky-600 to-blue-700',
    textColor: 'text-sky-300',
    link: 'https://ziontechgroup.com/domain-dns-monitor',
    marketPosition: 'Similar to DNS Spy and Detectify add-ons ($49–$199/mo) with richer audits.',
    targetAudience: 'IT, SRE, security teams',
    trialDays: 14,
    setupTime: '30 minutes',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Node.js, DNS, OpenSSL'],
    integrations: ['Slack, Opsgenie, PagerDuty'],
    useCases: ['Prevent hijacks, Change control, Compliance evidence'],
    roi: 'Avoid costly outages and reputational damage',
    competitors: ['DNS Spy, UptimeRobot DNS, Detectify DNS'],
    marketSize: '$2B monitoring',
    growthRate: '12% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Authoritative resolvers polling, diffs store, TLS probing and alerting.',
    launchDate: '2024-08-18',
    customers: 61,
    rating: 4.5,
    reviews: 36
  },
  {
    id: 'uptime-slo-monitor',
    name: 'Uptime & SLO Monitor',
    tagline: 'Blackbox checks, SLOs, error budgets and burn-rate alerts',
    price: '$99',
    period: '/month',
    description: 'Define SLOs and error budgets with multi-region uptime checks, latency SLIs and actionable burn-rate alerts.',
    features: [
      'Multi-region uptime checksLatency and availability SLIsSLOs and error budgetsBurn-rate alertsPublic status pages'
    ],
    popular: true,
    icon: '📈',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/uptime-slo-monitor',
    marketPosition: 'Alternatives include Better Uptime and UptimeRobot ($8–$49/mo), SLO-first design and budgets included.',
    targetAudience: 'SREs, platform and product teams',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Observability',
    realService: true,
    technology: ['Node.js, Grafana, Prometheus'],
    integrations: ['PagerDuty, Opsgenie, Slack'],
    useCases: ['SLO rollout, SLA reporting, Incident readiness'],
    roi: 'Reduce alert fatigue and align on product reliability',
    competitors: ['Better Uptime, UptimeRobot, Statuspage'],
    marketSize: '$18B observability',
    growthRate: '25% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Probers, SLI calculators, error-budget math and alerting integrations.',
    launchDate: '2024-07-28',
    customers: 112,
    rating: 4.6,
    reviews: 58
  },
  {
    id: 'status-pages-slo',
    name: 'Status Pages & SLO',
    tagline: 'Customer-facing status pages with SLO metrics baked-in',
    price: '$59',
    period: '/month',
    description: 'Hosted status pages connected to your SLOs and incidents with custom components and history.',
    features: [
      'Custom components and groupsIncident timelinesSLO and uptime widgetsSubscriptions and webhooks'
    ],
    popular: false,
    icon: '📣',
    color: 'from-fuchsia-600 to-pink-700',
    textColor: 'text-fuchsia-300',
    link: 'https://ziontechgroup.com/status-pages-slo',
    marketPosition: 'Competes with Atlassian Statuspage ($29–$1200/mo), simpler SLO-native approach.',
    targetAudience: 'SaaS, infra and platform teams',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Observability',
    realService: true,
    technology: ['Next.js, Node.js'],
    integrations: ['PagerDuty, Opsgenie, Slack'],
    useCases: ['Transparent comms, SLA evidence, Trust building'],
    roi: 'Fewer support tickets and faster comms during incidents',
    competitors: ['Atlassian Statuspage, Better Stack'],
    marketSize: '$1B status',
    growthRate: '15% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Static+API hybrid pages, component health, subscriptions.',
    launchDate: '2024-06-30',
    customers: 49,
    rating: 4.5,
    reviews: 27
  },
  {
    id: 'serverless-cron-manager',
    name: 'Serverless Cron Manager',
    tagline: 'Reliable scheduled jobs without servers and with retries',
    price: '$79',
    period: '/month',
    description: 'Define and run scheduled jobs with retries, jitter and alerts. Ideal for ETL and housekeeping tasks.',
    features: [
      'Cron syntax and UIRetries with jitterDead-letter queuesSlack alerts'
    ],
    popular: false,
    icon: '⏱️',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/serverless-cron-manager',
    marketPosition: 'Comparable to EasyCron and CloudWatch Events, adds portable templates and alerts.',
    targetAudience: 'Developers, data engineers, SREs',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Developer Tools',
    realService: true,
    technology: ['Node.js, Queues, Serverless'],
    integrations: ['Slack, Webhook'],
    useCases: ['ETL scheduling, Report generation, Cleanup jobs'],
    roi: 'Reduce ops toil, no servers to manage',
    competitors: ['EasyCron, AWS EventBridge'],
    marketSize: '$2B dev tooling',
    growthRate: '9% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Job store, scheduler, runners and alerting.',
    launchDate: '2024-05-12',
    customers: 73,
    rating: 4.5,
    reviews: 39
  },
  {
    id: 'pdf-render-api',
    name: 'PDF Render API',
    tagline: 'Pixel-perfect HTML-to-PDF with fonts and headers/footers',
    price: '$49',
    period: '/month',
    description: 'Drop-in PDF render API with template helpers, page numbers, margins and secure asset loading.',
    features: [
      'Chrome-based rendererCustom fonts and CSSHeaders/footers, page numbersWebhook delivery'
    ],
    popular: true,
    icon: '🧾',
    color: 'from-slate-600 to-slate-800',
    textColor: 'text-slate-300',
    link: 'https://ziontechgroup.com/pdf-render-api',
    marketPosition: 'Competes with PDFMonkey/DocRaptor ($29–$99/mo). Simple pricing, great output quality.',
    targetAudience: 'Developers, ops, finance',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'Developer Tools',
    realService: true,
    technology: ['Puppeteer, Node.js'],
    integrations: ['Zapier, Webhook'],
    useCases: ['Invoices, Reports, Statements'],
    roi: 'Save engineering time, consistent documents',
    competitors: ['PDFMonkey, DocRaptor, Gotenberg'],
    marketSize: '$1B doc gen',
    growthRate: '8% YoY',
    variant: 'data-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Headless Chrome workers, queueing and asset sandboxing.',
    launchDate: '2024-04-08',
    customers: 140,
    rating: 4.7,
    reviews: 91
  },
  {
    id: 'gdpr-dsar-automation',
    name: 'GDPR DSAR Automation',
    tagline: 'Automate data subject requests with evidence and workflows',
    price: '$399',
    period: '/month',
    description: 'Intake portal, identity verification, data source connectors and fulfillment workflows with auditor-ready evidence packs.',
    features: [
      'Request intake portalIdentity verificationConnectors to data storesEvidence packs and exports'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-violet-600 to-fuchsia-700',
    textColor: 'text-violet-300',
    link: 'https://ziontechgroup.com/gdpr-dsar-automation',
    marketPosition: 'Alternatives: Transcend/Segment privacy ($500–$3k/mo). Faster time-to-value for SMEs.',
    targetAudience: 'Legal, security, IT',
    trialDays: 14,
    setupTime: '1–2 weeks',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Node.js, IDV, Connectors'],
    integrations: ['Snowflake, BigQuery, S3, Postgres'],
    useCases: ['Compliance at scale, Reduced manual effort'],
    roi: 'Cut DSAR handling cost by 60–80%',
    competitors: ['Transcend, OneTrust, Segment Privacy'],
    marketSize: '$8B privacy ops',
    growthRate: '18% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Ticketing workflows, connectors, redaction and audit logs.',
    launchDate: '2024-11-01',
    customers: 31,
    rating: 4.6,
    reviews: 21
  },
  {
    id: 'vendor-risk-automation',
    name: 'Vendor Risk Automation',
    tagline: 'Questionnaires, evidence collection and continuous monitoring',
    price: '$299',
    period: '/month',
    description: 'Automates vendor questionnaires (SIG Lite/CAIQ), evidence collection and scoring with renewal reminders and issues tracking.',
    features: [
      'SIG/CAIQ templatesEvidence collection linksRisk scoring and trackingRenewal reminders'
    ],
    popular: false,
    icon: '🤝',
    color: 'from-teal-600 to-emerald-700',
    textColor: 'text-teal-300',
    link: 'https://ziontechgroup.com/vendor-risk-automation',
    marketPosition: 'Alternatives: Whistic, OneTrust Vendor Risk ($300–$2k/mo). We focus on speed and automation.',
    targetAudience: 'Security, procurement and legal',
    trialDays: 14,
    setupTime: '1–2 weeks',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Next.js, Workflows'],
    integrations: ['Slack, Jira, Email'],
    useCases: ['Faster reviews, Evidence reuse, Audit readiness'],
    roi: 'Shorten vendor onboarding by 30–50%',
    competitors: ['Whistic, OneTrust VRM'],
    marketSize: '$6B VRM',
    growthRate: '16% YoY',
    variant: 'neural-quantum',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Questionnaire engine, evidence vault, risk scoring and reminders.',
    launchDate: '2024-10-15',
    customers: 26,
    rating: 4.5,
    reviews: 18
  },
  {
    id: 'browser-performance-monitor',
    name: 'Browser Performance Monitor',
    tagline: 'Core Web Vitals and RUM with actionable diagnostics',
    price: '$129',
    period: '/month',
    description: 'Collects field data (RUM) for Core Web Vitals, surfaces regressions and points to code-level fixes with dashboards.',
    features: [
      'RUM collection scriptCore Web Vitals (LCP/CLS/INP)Regression detectionDashboards and alerts'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/browser-performance-monitor',
    marketPosition: 'Alternatives: SpeedCurve ($99–$439/mo). We bundle diagnostics and dev tips.',
    targetAudience: 'Frontend and growth teams',
    trialDays: 7,
    setupTime: '1 hour',
    category: 'Observability',
    realService: true,
    technology: ['JS RUM, Dashboards'],
    integrations: ['Slack, Datadog'],
    useCases: ['Improve conversions, Perf regressions, SEO gains'],
    roi: 'Increase conversion 2–10% with better vitals',
    competitors: ['SpeedCurve, Calibre'],
    marketSize: '$1B web perf',
    growthRate: '11% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Lightweight RUM SDK, vitals aggregation and alerting.',
    launchDate: '2024-09-08',
    customers: 52,
    rating: 4.5,
    reviews: 29
  },
  {
    id: 'database-performance-monitor',
    name: 'Database Performance Monitor',
    tagline: 'Query insights, locks, connection pools and slow query fixes',
    price: '$299',
    period: '/month',
    description: 'Collector agents for Postgres/MySQL with dashboards for slow queries, locks and connection pool saturation with recommendations.',
    features: [
      'Slow query detectionLock contention analysisConnection pool saturationAdvisor recommendations'
    ],
    popular: true,
    icon: '🗄️',
    color: 'from-indigo-600 to-slate-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/database-performance-monitor',
    marketPosition: 'Competes with pganalyze and PMM ($199–$499/mo). Simpler setup and actionable fixes.',
    targetAudience: 'Data and platform engineers',
    trialDays: 14,
    setupTime: '1–2 days',
    category: 'Observability',
    realService: true,
    technology: ['Postgres, MySQL, Agents'],
    integrations: ['Grafana, Slack'],
    useCases: ['Improve DB latency, Reduce deadlocks, Capacity planning'],
    roi: 'Reduce query latency 20–50% in weeks',
    competitors: ['pganalyze, Percona PMM'],
    marketSize: '$4B DB tooling',
    growthRate: '13% YoY',
    variant: 'monitoring-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Extension-based metrics collectors and advisors.',
    launchDate: '2024-08-01',
    customers: 39,
    rating: 4.6,
    reviews: 23
  },
  {
    id: 'cloud-platform-managed-kubernetes',
    name: 'Managed Kubernetes Platform',
    tagline: 'Production EKS/GKE/AKS with GitOps, SSO and guardrails',
    price: '$1,999',
    period: '/month',
    description: 'Landing zone for Kubernetes with IaC, GitOps, SSO, cost controls, backup and observability out of the box.',
    features: [
      'IaC blueprints and GitOpsSSO and RBAC policiesCost controls and quotasBackup and restore runbooks'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/cloud-platform',
    marketPosition: 'Alternatives: Platform9, Rafay (custom pricing). Opinionated, fast time-to-value.',
    targetAudience: 'Platform engineering and DevOps',
    trialDays: 0,
    setupTime: '1–3 weeks',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['Terraform, Flux/Argo, EKS/GKE/AKS'],
    integrations: ['Datadog, Grafana, Vault'],
    useCases: ['Standardized platform, Security baseline, Developer velocity'],
    roi: 'Ship platforms 3x faster at lower risk',
    competitors: ['Platform9, Rafay, DIY'],
    marketSize: '$20B platform engineering',
    growthRate: '22% YoY',
    variant: 'cloud-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Blueprints, policies, GitOps pipelines and SRE runbooks.',
    launchDate: '2025-01-10',
    customers: 17,
    rating: 4.7,
    reviews: 12
  },
  {
    id: 'rum-analytics-starter',
    name: 'Real User Monitoring (RUM) Analytics Starter',
    tagline: 'Measure real user performance, Core Web Vitals and conversion impact',
    price: '$59',
    period: '/month',
    description: 'Drop-in RUM snippet with Core Web Vitals, page timings, SPA route tracking, and conversion impact analysis. Alerts and weekly insights included.',
    features: [
      'Core Web Vitals (LCP, INP, CLS)Conversion impact analysisGeo/device breakdownsAnomaly alerts to Slack/EmailPrivacy-friendly, cookie-lite'
    ],
    popular: false,
    icon: '⚡',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/rum-analytics-starter',
    marketPosition: 'Comparable to SpeedCurve RUM, Raygun RUM, and New Relic Browser, focused SMB starter with clear insights.',
    targetAudience: 'Growth, product, and web teams',
    trialDays: 7,
    setupTime: '15 minutes',
    category: 'Analytics',
    realService: true,
    technology: ['Edge analytics, JS snippet'],
    integrations: ['Slack, Webhooks, BigQuery export'],
    useCases: ['Track Core Web Vitals, Optimize pages, Improve conversions'],
    roi: 'Lift conversion 2–10% by fixing performance bottlenecks.',
    competitors: ['SpeedCurve RUM, New Relic Browser, Raygun RUM'],
    marketSize: '$2B+ web analytics',
    growthRate: '12% YoY',
    variant: 'analytics-futuristic' as any,
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Snippet capture with server-side aggregation and privacy controls.',
    launchDate: '2025-02-15',
    customers: 26,
    rating: 4.6,
    reviews: 14
  },
  {
    id: 'accessibility-compliance-auditor',
    name: 'Accessibility Compliance Auditor',
    tagline: 'Automated WCAG checks with actionable fixes and CI integration',
    price: '$79',
    period: '/month',
    description: 'Automate WCAG 2.2 AA checks with axe-core powered scans, page templates, and CI gates. Export auditor-ready reports and remediation tasks.',
    features: [
      'axe-core rules and custom checksCI gate on severity thresholdsPage template scanningIssue tracker exportAuditor-ready PDF reports'
    ],
    popular: true,
    icon: '♿',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-300',
    link: 'https://ziontechgroup.com/services/accessibility-compliance-auditor',
    marketPosition: 'Alternative to manual audits, complements Deque axe and Pa11y in CI/CD.',
    targetAudience: 'Web, product, and compliance teams',
    trialDays: 7,
    setupTime: '1 hour',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['Node.js, Playwright, axe-core'],
    integrations: ['GitHub Actions, GitLab CI, Jira'],
    useCases: ['Prevent regressions, Improve inclusivity, Audit readiness'],
    roi: 'Reduce manual audit time by 50–80%.',
    competitors: ['Deque axe Monitor, Siteimprove'],
    marketSize: '$1B+ accessibility services',
    growthRate: '18% YoY',
    variant: 'monitoring-futuristic' as any,
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Headless scans with rulesets, diffing, and gated pipelines.',
    launchDate: '2025-02-12',
    customers: 31,
    rating: 4.7,
    reviews: 19
  },
  {
    id: 'api-latency-budget-enforcer',
    name: 'API Latency Budget Enforcer',
    tagline: 'Guardrails for p95/p99 latency budgets with tickets and alerts',
    price: '$119',
    period: '/month',
    description: 'Define per-endpoint latency budgets (p95/p99) and auto-create remediation tasks when budgets are breached. Includes SLOs, error budgets, and on-call alerts.',
    features: [
      'Per-route latency SLOsError budget trackingAuto-ticket creationSlack/PagerDuty alertsWeekly drift reports'
    ],
    popular: false,
    icon: '⏱️',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/api-latency-budget-enforcer',
    marketPosition: 'Bridges observability and execution, complements Datadog SLO and Grafana.',
    targetAudience: 'SREs, platform and backend teams',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Observability',
    realService: true,
    technology: ['OpenTelemetry, Prometheus, Grafana'],
    integrations: ['Datadog, Grafana, PagerDuty, Jira'],
    useCases: ['Keep latency in check, Manage reliability, Prioritize work'],
    roi: 'Cut MTTR by 20–40% via proactive guardrails.',
    competitors: ['Datadog SLOs, Nobl9'],
    marketSize: '$5B+ reliability tooling',
    growthRate: '20% YoY',
    variant: 'monitoring-futuristic' as any,
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'SLO definitions, budget math, and actionable ownership routes.',
    launchDate: '2025-02-18',
    customers: 18,
    rating: 4.5,
    reviews: 11
  },
  {
    id: 'security-headers-monitor',
    name: 'Security Headers & TLS Monitor',
    tagline: 'Track HSTS, CSP, TLS config and get hardening playbooks',
    price: '$49',
    period: '/month',
    description: 'Monitors site headers and TLS for regressions. Provides CSP templates, HSTS, and modern TLS guidance with alerts and diffs.',
    features: [
      'CSP/HSTS header checksTLS version/cipher checksAuto-diff of changesSlack/Email alertsHardening playbooks'
    ],
    popular: true,
    icon: '🛡️',
    color: 'from-indigo-600 to-slate-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/services/security-headers-monitor',
    marketPosition: 'Lightweight alternative to manual scans, complements Mozilla Observatory and SSL Labs checks.',
    targetAudience: 'Security and platform teams',
    trialDays: 7,
    setupTime: '20 minutes',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Node.js, TLS, HTTP'],
    integrations: ['Slack, Webhooks'],
    useCases: ['Prevent misconfigurations, Detect regressions, Improve posture'],
    roi: 'Reduce security regressions and audit time.',
    competitors: ['Mozilla Observatory, SSL Labs'],
    marketSize: '$3B security testing',
    growthRate: '16% YoY',
    variant: 'security-futuristic' as any,
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Scheduled scans with diffs and playbooks.',
    launchDate: '2025-02-20',
    customers: 44,
    rating: 4.6,
    reviews: 22
  },
  {
    id: 'cookie-consent-manager',
    name: 'Cookie & Consent Manager',
    tagline: 'GDPR/CCPA consent banner, audit trails, and policy generator',
    price: '$39',
    period: '/month',
    description: 'Easy consent banner with per-region rules, audit logs, and auto-generated cookie policy pages. Integrates with analytics blockers.',
    features: [
      'Geo-based consent rulesPolicy page generatorAudit log exportAnalytics/script blockingA/B banner testing'
    ],
    popular: false,
    icon: '🍪',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/services/cookie-consent-manager',
    marketPosition: 'Simple alternative to complex CMPs, transparent pricing for SMBs.',
    targetAudience: 'Marketing, legal, and web teams',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Next.js, Edge middleware'],
    integrations: ['Google Tag, GTM, Segment'],
    useCases: ['Compliance, User trust, Region-based rules'],
    roi: 'Accelerate compliance readiness, reduce legal risk.',
    competitors: ['Cookiebot, OneTrust CMP'],
    marketSize: '$2B privacy tooling',
    growthRate: '15% YoY',
    variant: 'compliance-futuristic' as any,
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Client + middleware rules with storage & audit.',
    launchDate: '2025-02-22',
    customers: 21,
    rating: 4.5,
    reviews: 10
  },
  {
    id: 'backup-policy-auditor',
    name: 'Backup Policy Auditor',
    tagline: 'Validate backup frequency, retention and recovery objectives',
    price: '$99',
    period: '/month',
    description: 'Continuously checks backup policies against RPO/RTO targets across clouds and DBs. Flags drift and creates remediation tasks.',
    features: [
      'RPO/RTO policy checksSnapshot/restore verificationDrift detectionWeekly compliance reportsAuto-ticket workflows'
    ],
    popular: false,
    icon: '💾',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/backup-policy-auditor',
    marketPosition: 'Brings reliability SRE rigor to backups, complements cloud-native backup tools.',
    targetAudience: 'SREs, platform and data teams',
    trialDays: 14,
    setupTime: '2 days',
    category: 'Cloud & FinOps',
    realService: true,
    technology: ['AWS, GCP, Azure, Postgres, MySQL'],
    integrations: ['Jira, Slack, Datadog'],
    useCases: ['Reduce risk, Improve recovery posture, Governance'],
    roi: 'Cut recovery risks dramatically, faster audits.',
    competitors: ['Veeam, Clumio, Cloud-native backups'],
    marketSize: '$10B backup & DR',
    growthRate: '8% YoY',
    variant: 'cloud-futuristic' as any,
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Read-only checks, sample restores, and compliance export.',
    launchDate: '2025-02-24',
    customers: 12,
    rating: 4.5,
    reviews: 7
  },
  {
    id: 'consent-compliance-kit',
    name: 'Consent & Cookie Compliance Kit',
    tagline: 'GDPR/CPRA consent banners, geo-targeting, and audit-ready logs',
    price: '$49',
    period: '/month',
    description: 'Deploy IAB TCF v2 compatible consent banners with region-aware policies, capture consent receipts, and export audit logs for GDPR/CPRA. Includes cookie inventory and auto-blocking helpers.',
    features: [
      'IAB TCF v2.2 compatible consentGeo-targeted policies (EEA/UK/US states)Consent receipts and log exportsCookie inventory and auto-blockingPolicy pages and versioningCMP integrations and tag manager hooks'
    ],
    popular: false,
    icon: '🛡️',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/consent-compliance-kit',
    marketPosition: 'Practical, affordable alternative to heavyweight CMPs for SMBs and startups.',
    targetAudience: 'Marketing ops, legal/compliance, web teams',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Privacy & Compliance',
    realService: true,
    technology: ['Next.js, Tag Manager, IAB TCF v2'],
    integrations: ['Google Tag Manager, Segment, Cookiebot, OneTrust'],
    useCases: ['GDPR/CPRA consent management, Audit exports, Region policies'],
    roi: 'Reduce compliance risk and legal exposure with verifiable consent logs.',
    competitors: ['OneTrust, Cookiebot, TrustArc'],
    marketSize: '$2B+ privacy tooling',
    growthRate: '18% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Embeddable banner, policy config UI, consent log store, export jobs.',
    launchDate: '2025-08-22',
    customers: 22,
    rating: 4.6,
    reviews: 11
  },
  {
    id: 'api-backfill-reconciliation',
    name: 'API Backfill & Reconciliation',
    tagline: 'Recover missed events, dedupe, and reconcile systems with confidence',
    price: '$99',
    period: '/month',
    description: 'Detect and repair data gaps between SaaS APIs and your warehouse/CRM. Provides replay-safe backfills, idempotency, and reconciliation reports.',
    features: [
      'Gap detection and backfill plansIdempotent replay and deduplicationHash-based reconciliation reportsRate-limit aware workersAlerting and failure retriesWarehouse and CRM syncs'
    ],
    popular: false,
    icon: '🔁',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/api-backfill-reconciliation',
    marketPosition: 'Bridges the gap between brittle webhook flows and reliable data pipelines.',
    targetAudience: 'Data engineers, platform teams, RevOps',
    trialDays: 14,
    setupTime: '2 days',
    category: 'Integration',
    realService: true,
    technology: ['Node.js, Postgres, Redis, Airflow'],
    integrations: ['Salesforce, HubSpot, Stripe, Shopify'],
    useCases: ['Fix data gaps, Ensure CRM/Warehouse parity, Improve trust'],
    roi: 'Save weeks of manual cleanup, maintain accurate reporting and billing.',
    competitors: ['Fivetran (log-based), custom scripts'],
    marketSize: '$4B data integration',
    growthRate: '20% YoY',
    variant: 'integration-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Replay-safe pullers, checksum compare, and reconciliation dashboards.',
    launchDate: '2025-08-22',
    customers: 15,
    rating: 4.7,
    reviews: 9
  },
  {
    id: 'data-quality-sla-monitor',
    name: 'Data Quality & Freshness SLAs',
    tagline: 'Track freshness, nulls, and schema drift with alerting and SLOs',
    price: '$149',
    period: '/month',
    description: 'Define and monitor data SLAs for freshness and quality. Receive alerts, create tickets, and visualize lineage impacts for downstream consumers.',
    features: [
      'Freshness and volume checksNull/outlier thresholdsSchema drift detectionLineage visualizationSLOs and error budgetsSlack/Jira alerts and reports'
    ],
    popular: true,
    icon: '📊',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-300',
    link: 'https://ziontechgroup.com/services/data-quality-sla-monitor',
    marketPosition: 'Lightweight alternative to full data observability platforms for SMBs.',
    targetAudience: 'Analytics, data engineering, product teams',
    trialDays: 14,
    setupTime: '2 days',
    category: 'Data & Analytics',
    realService: true,
    technology: ['dbt, Airflow, Postgres, BigQuery'],
    integrations: ['Snowflake, BigQuery, Redshift, ClickHouse'],
    useCases: ['Prevent stale dashboards, Catch pipeline regressions, Improve trust'],
    roi: 'Reduce dashboard breaks, improve data-dependent feature velocity.',
    competitors: ['Monte Carlo, Bigeye, Great Expectations'],
    marketSize: '$1.5B data observability',
    growthRate: '30% YoY',
    variant: 'data-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Metadata collectors, rules engine, SLA store, and alert webhooks.',
    launchDate: '2025-08-22',
    customers: 28,
    rating: 4.6,
    reviews: 13
  },
  {
    id: 'postgres-index-advisor',
    name: 'Postgres Index Advisor & Tuner',
    tagline: 'Automatic index suggestions, vacuum tuning, and slow query fixes',
    price: '$79',
    period: '/month',
    description: 'Analyze query plans and table stats to recommend and schedule index changes, vacuum/autovacuum tuning, and bloat remediation.',
    features: [
      'EXPLAIN plan analysisMissing/unused index detectionAutovacuum and bloat tuningSafe change windowsRollback and impact reportsAlerts on regressions'
    ],
    popular: false,
    icon: '🐘',
    color: 'from-indigo-600 to-blue-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/services/postgres-index-advisor',
    marketPosition: 'Practical tuner for teams without a dedicated DBA.',
    targetAudience: 'Backend engineers, SREs, DBAs',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Databases',
    realService: true,
    technology: ['PostgreSQL, pg_stat_statements, Timescale'],
    integrations: ['RDS/Aurora, Cloud SQL, Self-hosted Postgres'],
    useCases: ['Lower latency, Reduce CPU/IO, Avoid outages'],
    roi: 'Improve query latency by 20–60%, cut cloud costs.',
    competitors: ['pganalyze, OtterTune'],
    marketSize: '$3B database tooling',
    growthRate: '12% YoY',
    variant: 'data-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Read-only plan capture, advisor engine, change scripts, and dashboards.',
    launchDate: '2025-08-22',
    customers: 18,
    rating: 4.5,
    reviews: 8
  },
  {
    id: 'gitops-drift-monitor',
    name: 'GitOps Policy & Drift Monitor',
    tagline: 'Detect and correct drift between Git and cluster state with policy gates',
    price: '$99',
    period: '/month',
    description: 'Continuously compare desired manifests to live resources, enforce policies, and open pull requests to reconcile drift automatically.',
    features: [
      'Desired vs live diffingOPA/Conftest policy gatesAuto-PR remediationSlack/Jira alertsChange history and approvalsMulti-cluster support'
    ],
    popular: false,
    icon: '🧭',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/services/gitops-drift-monitor',
    marketPosition: 'Complements Argo CD/Flux with governance and auto-remediation workflows.',
    targetAudience: 'Platform engineering, DevOps, SRE',
    trialDays: 14,
    setupTime: '2 days',
    category: 'DevOps',
    realService: true,
    technology: ['Kubernetes, OPA, Argo CD, Flux'],
    integrations: ['GitHub, GitLab, Slack, Jira'],
    useCases: ['Prevent config drift, Enforce policies, Speed up remediations'],
    roi: 'Cut rollbacks and misconfig incidents by 30–50%.',
    competitors: ['Argo CD, Flux, Fairwinds Polaris'],
    marketSize: '$6B DevOps tooling',
    growthRate: '20% YoY',
    variant: 'devops-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Cluster collectors, policy engine, reconciler workers, and PR bots.',
    launchDate: '2025-08-22',
    customers: 14,
    rating: 4.6,
    reviews: 7
  },
  {
    id: 'soc2-readiness-scanner',
    name: 'SOC 2 Readiness Scanner',
    tagline: 'Map controls to TSC, auto-collect evidence, and flag gaps',
    price: '$79',
    period: '/month',
    description: 'Pre-audit posture scanner that links integrations to controls, highlights evidence gaps, and produces auditor-friendly reports.',
    features: [
      'Control mapping templatesEvidence collectors and checksPolicy and process coverageGap analysis and tasksExportable auditor reports'
    ],
    popular: true,
    icon: '📋',
    color: 'from-teal-600 to-emerald-700',
    textColor: 'text-teal-300',
    link: 'https://ziontechgroup.com/services/soc2-readiness-scanner',
    marketPosition: 'Faster SOC 2 preparation for startups, complements evidence automation.',
    targetAudience: 'Founders, security leads, compliance managers',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Node.js, OAuth integrations, Evidence store'],
    integrations: ['Google Workspace, GitHub, AWS, Azure, GCP'],
    useCases: ['Pre-audit gap checks, Faster readiness, Auditor exports'],
    roi: 'Cut readiness timelines by 2–4 weeks.',
    competitors: ['Vanta, Drata (prep workflows)'],
    marketSize: '$3B compliance automation',
    growthRate: '22% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Connector checks, control mapping DB, gap scoring and exports.',
    launchDate: '2025-08-22',
    customers: 24,
    rating: 4.7,
    reviews: 12
  },
  {
    id: 'cloud-asset-attack-surface',
    name: 'Cloud Asset Inventory & Attack Surface',
    tagline: 'Continuously map cloud assets, exposures, and internet-facing risks',
    price: '$149',
    period: '/month',
    description: 'Discover assets across AWS/Azure/GCP, classify risks (public buckets, open ports), and generate remediation tickets with ownership routing.',
    features: [
      'Multi-cloud asset discoveryPublic exposure detectionOwnership and taggingRisk scoring and SLAsAuto-ticket creation'
    ],
    popular: true,
    icon: '☁️',
    color: 'from-sky-600 to-blue-700',
    textColor: 'text-sky-300',
    link: 'https://ziontechgroup.com/services/cloud-asset-attack-surface',
    marketPosition: 'Brings CSPM principles to practical SMB workflows.',
    targetAudience: 'Security, platform teams',
    trialDays: 14,
    setupTime: '3 days',
    category: 'Security',
    realService: true,
    technology: ['AWS Config, Azure Resource Graph, GCP Asset Inventory'],
    integrations: ['Jira, ServiceNow, Slack'],
    useCases: ['Reduce attack surface, Speed up remediation, Improve visibility'],
    roi: 'Lower breach likelihood, improved audit readiness.',
    competitors: ['Wiz, Prisma Cloud (CSPM)'],
    marketSize: '$8B cloud security',
    growthRate: '25% YoY',
    variant: 'cloud-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'API collectors, exposure heuristics, ticket routing, dashboards.',
    launchDate: '2025-08-22',
    customers: 19,
    rating: 4.5,
    reviews: 9
  },
  {
    id: 'llm-red-team-simulator',
    name: 'LLM Red Team & Jailbreak Simulator',
    tagline: 'Automated adversarial prompts, safety tests, and regression dashboards',
    price: '$99',
    period: '/month',
    description: 'Continuously test LLM apps against prompt injection, sensitive data exfiltration, and policy violations with trending dashboards and CI gates.',
    features: [
      'Prompt injection librariesPII/redaction checksSafety regression testsModel/provider matrixCI gates and reports'
    ],
    popular: false,
    icon: '🧪',
    color: 'from-rose-600 to-pink-700',
    textColor: 'text-rose-300',
    link: 'https://ziontechgroup.com/services/llm-red-team-simulator',
    marketPosition: 'Proactive LLM safety for production apps, complements guardrails.',
    targetAudience: 'AI platform teams, security engineers',
    trialDays: 7,
    setupTime: '1 day',
    category: 'AI Safety',
    realService: true,
    technology: ['OpenAI, Anthropic, Garak, OWASP Top 10 for LLMs'],
    integrations: ['GitHub Actions, GitLab CI, CircleCI'],
    useCases: ['Catch regressions, Improve safety, Document compliance'],
    roi: 'Avoid incidents and brand damage due to unsafe responses.',
    competitors: ['Lakera, Garak'],
    marketSize: '$1B+ LLM safety',
    growthRate: '40% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Scenario libraries, orchestrator, CI integration, dashboards.',
    launchDate: '2025-08-22',
    customers: 17,
    rating: 4.6,
    reviews: 8
  },
  {
    id: 'affiliate-fraud-detector',
    name: 'Affiliate Fraud Detector',
    tagline: 'Block coupon abuse, self-referrals, and low-quality traffic at scale',
    price: '$129',
    period: '/month',
    description: 'Enhances affiliate programs with fraud heuristics, device/identity checks, and payout holds to protect margins.',
    features: [
      'Self-referral detectionDevice and IP risk signalsVelocity and cohort heuristicsPayout hold workflowsAppeal and review portal'
    ],
    popular: false,
    icon: '🛑',
    color: 'from-red-600 to-rose-700',
    textColor: 'text-red-300',
    link: 'https://ziontechgroup.com/services/affiliate-fraud-detector',
    marketPosition: 'Pairs with attribution hubs to prevent fraud-driven losses.',
    targetAudience: 'Growth teams, finance ops',
    trialDays: 14,
    setupTime: '2 days',
    category: 'Growth & Monetization',
    realService: true,
    technology: ['PythonBayesian modelingdbt'],
    integrations: ['GA4Facebook AdsGoogle AdsShopify'],
    useCases: ['Budget optimizationChannel ROIExperiment planning'],
    roi: 'Improve CAC/LTV ratio 10–30%',
    competitors: ['RecastGoogle AttributionRockerbox'],
    marketSize: '$12B+ martech analytics',
    growthRate: '20% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Data connectors, identity resolution, MMM fitting, and optimizer UI.',
    launchDate: '2025-01-21',
    customers: 48,
    rating: 4.7,
    reviews: 29
  },
  {
    id: 'data-governance-starter',
    name: 'Data Governance & Catalog Starter',
    tagline: 'Lightweight catalog, lineage, and PII tagging for modern stacks',
    price: '$699',
    period: '/month',
    description: 'Pragmatic data governance with automated discovery, column-level lineage, PII tagging, and policy enforcement. Vendor-neutral and dbt-friendly.',
    features: [
      'Automated table/column discoveryColumn-level lineage and impact analysisPII tagging and masking policiesGlossary and ownership workflowsdbt/Snowflake/BigQuery integrations'
    ],
    popular: true,
    icon: '🗂️',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/data-governance-starter',
    marketPosition: 'Compared with Alation/Collibra (enterprise). Faster time-to-value for small data teams.',
    targetAudience: 'Data Engineering, Analytics, Security & Compliance',
    trialDays: 7,
    setupTime: '3–7 days',
    category: 'Data & Analytics',
    realService: true,
    technology: ['TypeScriptdbtOpenLineage'],
    integrations: ['SnowflakeBigQueryRedshiftDatabricks'],
    useCases: ['Self-serve data discoveryCompliance readinessChange impact analysis'],
    roi: 'Cut incident resolution time 15–25% via lineage and ownership',
    competitors: ['AlationCollibraAtlan'],
    marketSize: '$6B+ data governance',
    growthRate: '22% YoY',
    variant: 'data-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'OpenLineage-based scanners, dbt metadata, and policy engine.',
    launchDate: '2025-01-21',
    customers: 34,
    rating: 4.7,
    reviews: 18
  },
  {
    id: 'ecommerce-personalization',
    name: 'E‑commerce Personalization Engine',
    tagline: 'Real-time recommendations, bundles, and promotions that drive AOV',
    price: '$499',
    period: '/month',
    description: 'Plug-and-play personalization for storefronts. Learns from behavior and catalog to optimize recommendations, bundles, and on-site promotions.',
    features: [
      'Session-based and user-based recommendationsBundle and upsell optimizerA/B testing and holdoutsShopify/BigCommerce appsAudience segments and API'
    ],
    popular: true,
    icon: '🛒',
    color: 'from-pink-600 to-rose-700',
    textColor: 'text-pink-300',
    link: 'https://ziontechgroup.com/ecommerce-personalization',
    marketPosition: 'Alternatives include VWO/Optimizely personalization. Clear SMB pricing and fast setup.',
    targetAudience: 'Shopify/BigCommerce merchants and growth teams',
    trialDays: 14,
    setupTime: '1–3 days',
    category: 'Micro SaaS',
    realService: true,
    technology: ['Next.jsNode.jsPostgreSQL'],
    integrations: ['ShopifyBigCommerceSegment'],
    useCases: ['AOV growthConversion rate liftRetention'],
    roi: '3–10% conversion lift on average',
    competitors: ['OptimizelyVWONosto'],
    marketSize: '$8B+ CRO & personalization',
    growthRate: '14% YoY',
    variant: 'micro-saas',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'SDK snippet, event collectors, and real-time model serving.',
    launchDate: '2025-01-21',
    customers: 120,
    rating: 4.6,
    reviews: 77
  },
  {
    id: 'iot-fleet-telemetry',
    name: 'IoT Fleet Telemetry Platform',
    tagline: 'Unified device telemetry, alerts, and predictive maintenance',
    price: '$999',
    period: '/month',
    description: 'Collect, store, and analyze telemetry from vehicles and devices. Real-time alerts, anomaly detection, geofencing, and maintenance predictions.',
    features: [
      'MQTT/HTTP ingestion and device registryRules engine and alertingAnomaly detection and forecastingGeofencing and trip analyticsAPIs and dashboards'
    ],
    popular: false,
    icon: '🚚',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/iot-fleet-telemetry',
    marketPosition: 'Complements AWS IoT/Azure IoT. Faster SMB onboarding with ready analytics.',
    targetAudience: 'Logistics, Mobility, Field Ops, OEMs',
    trialDays: 14,
    setupTime: '2–4 weeks',
    category: 'IoT & Edge',
    realService: true,
    technology: ['MQTTTimeseries DBEdge SDK'],
    integrations: ['AWS IoTAzure IoTGCP IoT Core*'],
    useCases: ['Predictive maintenanceDriver behaviorUtilization'],
    roi: 'Reduce downtime 10–20% and fuel costs 3–8%',
    competitors: ['ParticleThingsBoardKaa'],
    marketSize: '$30B+ IoT platforms',
    growthRate: '19% YoY',
    variant: 'edge-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Device registry, stream processors, and feature store for ML.',
    launchDate: '2025-01-21',
    customers: 21,
    rating: 4.5,
    reviews: 12
  },
  {
    id: 'api-security-testing',
    name: 'API Security Testing as a Service',
    tagline: 'Automated DAST/SAST for APIs with CI/CD integration',
    price: '$399',
    period: '/month',
    description: 'Shift-left API security with automated scanning in pipelines. Finds OWASP API Top 10 issues, secrets, and misconfigurations with fix guidance.',
    features: [
      'OWASP API Top 10 checksSecrets and token leakage detectionCI/CD and PR annotationsSBOM and dependency riskReports and Jira tickets'
    ],
    popular: false,
    icon: '🛡️',
    color: 'from-slate-600 to-gray-700',
    textColor: 'text-slate-300',
    link: 'https://ziontechgroup.com/api-security-testing',
    marketPosition: 'Compared with Snyk/42Crunch/Burp Suite. We include actionable PR annotations and auto-fix recipes.',
    targetAudience: 'Platform, AppSec, DevSecOps',
    trialDays: 7,
    setupTime: '1–3 days',
    category: 'Security',
    realService: true,
    technology: ['OWASP ZAPSASTSBOM'],
    integrations: ['GitHubGitLabJenkins'],
    useCases: ['Shift-left securityRegulatory complianceAudit readiness'],
    roi: 'Reduce critical vuln exposure window by 40–60%',
    competitors: ['SnykBurp Suite42Crunch'],
    marketSize: '$7B+ AppSec tooling',
    growthRate: '23% YoY',
    variant: 'security-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quota enforcer, advisor engine, and GitOps PR flow with alerts.',
    launchDate: '2025-08-22',
    customers: 13,
    rating: 4.5,
    reviews: 7
  },
  {
    id: 'cloudflare-turnstile-proxy',
    name: 'Cloudflare Turnstile & Bot Shield Proxy',
    tagline: 'Kill signup spam and bot abuse without CAPTCHAs',
    price: '$39',
    period: '/month',
    description: 'Edge proxy that adds Turnstile challenges, device fingerprints, and reputation checks in front of forms and APIs. Drop-in protection for signups, login, and sensitive endpoints.',
    features: [
      'Turnstile token verificationReputation and ASN heuristicsIP/device fingerprintingAdaptive challengesBlock/allow lists and webhooks'
    ],
    popular: false,
    icon: '🛡️',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/cloudflare-turnstile-proxy',
    marketPosition: 'Cheaper and simpler than full WAF for SMB forms and APIs.',
    targetAudience: 'Growth, platform, security',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Cloudflare Workers, KV, Turnstile'],
    integrations: ['Cloudflare, Next.js, Node proxies'],
    useCases: ['Stop signup spam, Block credential stuffing'],
    roi: 'Reduce fake signups and abuse by 90%+',
    competitors: ['hCaptcha Enterprise, PerimeterX'],
    marketSize: '$2B bot mitigation',
    growthRate: '16% YoY',
    variant: 'security-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'cloud-cost-optimizer', _name: 'Cloud Cost Optimizer', _tagline: 'Automated rightsizing, _anomaly detection, _and savings recommendations', _price: '$399', _period: '/month', _description: 'Automate detection of idle resources, _rightsizing, _and savings plans across AWS/GCP/Azure with weekly reports and Jira-ready tickets.', _features: [
      'Idle resource detection', _'Rightsizing and reservations', _'Anomaly detection and alerts', _'Tag hygiene and compliance', _'Weekly savings reports', _'Auto-created tickets', _'RBAC and multi-account'
    ], _popular: true, _icon: '💸', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-400', _link: 'https://ziontechgroup.com/cloud-cost-optimizer', _marketPosition: 'Competitor to CloudZero, _ProsperOps, _and native cloud tools; simpler onboarding.', _targetAudience: 'FinOps, _platform engineering, _engineering leadership', _trialDays: 14, _setupTime: '3 days', _category: 'Cloud & FinOps', _realService: true, _technology: ['AWS, _GCP, _Azure, _BQ/Redshift'], _integrations: ['Jira, _Slack, _Datadog'], _useCases: ['Reduce spend, _Budget governance, _Chargeback/showback'], _roi: 'Save 10–30% monthly cloud spend.', _competitors: ['CloudZero, _ProsperOps, _AWS Cost Explorer'], _marketSize: '$12B FinOps', _growthRate: '30% YoY', _variant: 'cloud-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Read-only billing access, _tagging policy checks, _automated recommendation engine.', _launchDate: '2024-10-05', _customers: 65, _rating: 4.6, _reviews: 48},
  {_id: 'soc2-evidence-automation', _name: 'SOC 2 Evidence Automation', _tagline: 'Automate evidence collection, _auditor-ready reports, _and continuous controls', _price: '$499', _period: '/month', _description: 'Automate SOC 2 controls evidence from cloud providers, _identity, _CI/CD, _and ticketing systems with auditor export packs.', _features: [
      'Automated evidence collectors', _'Control mapping (AICPA)', _'Auditor export packs', _'Exception workflows', _'Risk register and ownership', _'Change management checks', _'Continuous monitoring'
    ], _popular: true, _icon: '🔐', _color: 'from-violet-600 to-fuchsia-700', _textColor: 'text-violet-400', _link: 'https://ziontechgroup.com/soc2-evidence-automation', _marketPosition: 'Comparable to Drata/Vanta with more engineering visibility.', _targetAudience: 'Security, _compliance leads, _CTOs', _trialDays: 14, _setupTime: '1–2 weeks', _category: 'Security & Compliance', _realService: true, _technology: ['AWS, _Azure, _GCP, _Okta, _GitHub, _Jira'], _integrations: ['Okta, _Google Workspace, _GitHub, _Jira, _AWS'], _useCases: ['Audit readiness, _Continuous control monitoring, _Vendor assessments'], _roi: 'Reduce audit time by 50–70%.', _competitors: ['Drata, _Vanta, _Secureframe'], _marketSize: '$10B compliance automation', _growthRate: '28% YoY', _variant: 'security-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Collectors for major SaaS/Cloud, _control mapping engine, _audit packs.', _launchDate: '2024-09-01', _customers: 42, _rating: 4.7, _reviews: 37},
  {_id: 'vector-search-starter', _name: 'Vector Search Starter', _tagline: 'Production vector DB setup with ingestion pipelines in a day', _price: '$249', _period: '/month', _description: 'Ready-to-run vector database setup (Pinecone/Weaviate/Elastic) with embeddings pipelines, _schema, _and example retrieval for your data.', _features: [
      'Provider selection guide', _'Schema and index templates', _'ETL/ingestion pipelines', _'Embeddings and chunking best practices', _'Latency and cost tuning', _'Sample RAG app integration'
    ], _popular: false, _icon: '🧭', _color: 'from-sky-600 to-indigo-700', _textColor: 'text-sky-400', _link: 'https://ziontechgroup.com/vector-search-starter', _marketPosition: 'Accelerator vs DIY; complements vendor docs with turnkey wiring.', _targetAudience: 'Data engineers, _ML engineers, _startups', _trialDays: 7, _setupTime: '1–2 days', _category: 'AI & Data', _realService: true, _technology: ['Pinecone, _Weaviate, _Elastic, _OpenAI'], _integrations: ['Airbyte, _Fivetran, _Kafka'], _useCases: ['RAG prototypes, _Semantic search, _Personalization'], _roi: 'Ship POCs 3–5x faster.', _competitors: ['Native vendor setup, _Consultants'], _marketSize: '$5B vector DB', _growthRate: '40% YoY', _variant: 'data-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Terraform and IaC modules, _ETL pipelines, _sample notebooks.', _launchDate: '2024-08-20', _customers: 58, _rating: 4.6, _reviews: 41},
  {_id: 'tls-certificate-monitor', _name: 'TLS Certificate Monitor', _tagline: 'Prevent outages with proactive cert expiry and chain validation', _price: '$49', _period: '/month', _description: 'Simple, _reliable certificate expiry and chain monitoring with Slack/Email alerts and status pages.', _features: [
      'Multi-domain monitoring', _'HTTP/TLS and OCSP checks', _'Slack/Email alerts', _'Public status pages', _'Weekly compliance reports'
    ], _popular: false, _icon: '🔒', _color: 'from-slate-600 to-slate-800', _textColor: 'text-slate-300', _link: 'https://ziontechgroup.com/tls-certificate-monitor', _marketPosition: 'Lightweight and affordable vs enterprise suites.', _targetAudience: 'SREs, _platform teams, _SMEs', _trialDays: 14, _setupTime: '30 minutes', _category: 'Quality & Monitoring', _realService: true, _technology: ['Node.js, _OpenSSL, _Cron'], _integrations: ['Slack, _Email'], _useCases: ['Prevent cert outages, _Compliance reports'], _roi: 'Avoid downtime and SLA penalties.', _competitors: ['UptimeRobot, _StatusCake'], _marketSize: '$2B monitoring', _growthRate: '12% YoY', _variant: 'monitoring-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Agentless checks, _scheduled runners, _alerting integrations.', _launchDate: '2024-07-12', _customers: 90, _rating: 4.5, _reviews: 52},
  {_id: 'api-security-scanner', _name: 'API Security Scanner', _tagline: 'Automatically find auth, _injection and OWASP API Top 10 risks', _price: '$799', _period: '/month', _description: 'Continuous API security scanning for REST/GraphQL with schema discovery, _auth testing, _fuzzing and CI/CD gates. Reports mapped to OWASP API Top 10 with Jira-ready tickets.', _features: [
      'OpenAPI/GraphQL schema discovery', _'Auth and permission testing', _'OWASP API Top 10 mapping', _'Fuzzing and payload mutations', _'CI/CD quality gates', _'Jira tickets and Slack alerts'
    ], _popular: true, _icon: '🛡️', _color: 'from-rose-600 to-orange-700', _textColor: 'text-rose-300', _link: 'https://ziontechgroup.com/api-security-scanner', _marketPosition: 'Competes with Salt Security and Noname (enterprise pricing $3k–$10k+/mo). Lightweight, _developer-first and CI-friendly.', _targetAudience: 'Platform and app security teams, _backend engineers', _trialDays: 14, _setupTime: '1–3 days', _category: 'Security & Compliance', _realService: true, _technology: ['Node.js, _Python, _OpenAPI, _GraphQL'], _integrations: ['GitHub Actions, _GitLab CI, _Jenkins, _Jira, _Slack'], _useCases: ['Shift-left API security, _Pre-release checks, _Continuous scanning'], _roi: 'Catch critical API vulns pre-prod and reduce incidents by 60%', _competitors: ['Salt Security, _Noname Security, _42Crunch'], _marketSize: '$5B API security', _growthRate: '25% YoY', _variant: 'security-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Schema crawler, _auth probes, _mutational fuzzing, _reporters and CI gates.', _launchDate: '2024-12-05', _customers: 54, _rating: 4.7, _reviews: 33},
  {_id: 'email-deliverability-monitor', _name: 'Email Deliverability Monitor', _tagline: 'SPF/DKIM/DMARC checks, _blocklist watch and inbox placement', _price: '$149', _period: '/month', _description: 'Continuously monitors DNS auth records, _blocklists and seed inbox placement. Actionable runbooks and alerts to keep campaigns landing in the inbox.', _features: [
      'SPF/DKIM/DMARC validation', _'Seed inbox placement tests', _'Blocklist monitoring', _'DMARC aggregate reports (RUA/RUF)', _'Alerts and weekly scorecards'
    ], _popular: false, _icon: '📧', _color: 'from-indigo-600 to-purple-700', _textColor: 'text-indigo-300', _link: 'https://ziontechgroup.com/email-deliverability-monitor', _marketPosition: 'Alternatives include GlockApps and MailGenius ($99–$299/mo). Adds automated remediation guides and DNS drift alerts.', _targetAudience: 'Growth, _marketing, _platform teams', _trialDays: 7, _setupTime: '2 hours', _category: 'Quality & Monitoring', _realService: true, _technology: ['Node.js, _DNS, _IMAP/SMTP'], _integrations: ['SES, _SendGrid, _Postmark, _Mailgun, _Slack'], _useCases: ['Reduce bounces, _Improve open rates, _Brand protection'], _roi: 'Lift deliverability 5–15% and campaign ROI 10–25%', _competitors: ['GlockApps, _MailGenius, _Postmark Monitoring'], _marketSize: '$3B email tools', _growthRate: '10% YoY', _variant: 'monitoring-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'DNS validators, _seed inbox network, _blocklist checkers and alerting.', _launchDate: '2024-09-22', _customers: 77, _rating: 4.6, _reviews: 44},
  {_id: 'domain-dns-monitor', _name: 'Domain & DNS Monitor', _tagline: 'Track DNS, _nameserver and SSL changes with instant alerts', _price: '$89', _period: '/month', _description: 'Watches critical DNS records (A/AAAA, _MX, _TXT, _NS) and TLS changes for drift and hijacks. Keeps an audit trail for compliance.', _features: [
      'DNS record drift detection', _'TLS and chain changes', _'Audit log and diffs', _'Slack/Email alerts', _'Exportable reports'
    ], _popular: false, _icon: '🌐', _color: 'from-sky-600 to-blue-700', _textColor: 'text-sky-300', _link: 'https://ziontechgroup.com/domain-dns-monitor', _marketPosition: 'Similar to DNS Spy and Detectify add-ons ($49–$199/mo) with richer audits.', _targetAudience: 'IT, _SRE, _security teams', _trialDays: 14, _setupTime: '30 minutes', _category: 'Quality & Monitoring', _realService: true, _technology: ['Node.js, _DNS, _OpenSSL'], _integrations: ['Slack, _Opsgenie, _PagerDuty'], _useCases: ['Prevent hijacks, _Change control, _Compliance evidence'], _roi: 'Avoid costly outages and reputational damage', _competitors: ['DNS Spy, _UptimeRobot DNS, _Detectify DNS'], _marketSize: '$2B monitoring', _growthRate: '12% YoY', _variant: 'monitoring-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Authoritative resolvers polling, _diffs store, _TLS probing and alerting.', _launchDate: '2024-08-18', _customers: 61, _rating: 4.5, _reviews: 36},
  {_id: 'uptime-slo-monitor', _name: 'Uptime & SLO Monitor', _tagline: 'Blackbox checks, _SLOs, _error budgets and burn-rate alerts', _price: '$99', _period: '/month', _description: 'Define SLOs and error budgets with multi-region uptime checks, _latency SLIs and actionable burn-rate alerts.', _features: [
      'Multi-region uptime checks', _'Latency and availability SLIs', _'SLOs and error budgets', _'Burn-rate alerts', _'Public status pages'
    ], _popular: true, _icon: '📈', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-300', _link: 'https://ziontechgroup.com/uptime-slo-monitor', _marketPosition: 'Alternatives include Better Uptime and UptimeRobot ($8–$49/mo); SLO-first design and budgets included.', _targetAudience: 'SREs, _platform and product teams', _trialDays: 14, _setupTime: '1 hour', _category: 'Observability', _realService: true, _technology: ['Node.js, _Grafana, _Prometheus'], _integrations: ['PagerDuty, _Opsgenie, _Slack'], _useCases: ['SLO rollout, _SLA reporting, _Incident readiness'], _roi: 'Reduce alert fatigue and align on product reliability', _competitors: ['Better Uptime, _UptimeRobot, _Statuspage'], _marketSize: '$18B observability', _growthRate: '25% YoY', _variant: 'monitoring-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Probers, _SLI calculators, _error-budget math and alerting integrations.', _launchDate: '2024-07-28', _customers: 112, _rating: 4.6, _reviews: 58},
  {_id: 'status-pages-slo', _name: 'Status Pages & SLO', _tagline: 'Customer-facing status pages with SLO metrics baked-in', _price: '$59', _period: '/month', _description: 'Hosted status pages connected to your SLOs and incidents with custom components and history.', _features: [
      'Custom components and groups', _'Incident timelines', _'SLO and uptime widgets', _'Subscriptions and webhooks'
    ], _popular: false, _icon: '📣', _color: 'from-fuchsia-600 to-pink-700', _textColor: 'text-fuchsia-300', _link: 'https://ziontechgroup.com/status-pages-slo', _marketPosition: 'Competes with Atlassian Statuspage ($29–$1200/mo); simpler SLO-native approach.', _targetAudience: 'SaaS, _infra and platform teams', _trialDays: 14, _setupTime: '1 hour', _category: 'Observability', _realService: true, _technology: ['Next.js, _Node.js'], _integrations: ['PagerDuty, _Opsgenie, _Slack'], _useCases: ['Transparent comms, _SLA evidence, _Trust building'], _roi: 'Fewer support tickets and faster comms during incidents', _competitors: ['Atlassian Statuspage, _Better Stack'], _marketSize: '$1B status', _growthRate: '15% YoY', _variant: 'monitoring-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Static+API hybrid pages, _component health, _subscriptions.', _launchDate: '2024-06-30', _customers: 49, _rating: 4.5, _reviews: 27},
  {_id: 'serverless-cron-manager', _name: 'Serverless Cron Manager', _tagline: 'Reliable scheduled jobs without servers and with retries', _price: '$79', _period: '/month', _description: 'Define and run scheduled jobs with retries, _jitter and alerts. Ideal for ETL and housekeeping tasks.', _features: [
      'Cron syntax and UI', _'Retries with jitter', _'Dead-letter queues', _'Slack alerts'
    ], _popular: false, _icon: '⏱️', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: 'https://ziontechgroup.com/serverless-cron-manager', _marketPosition: 'Comparable to EasyCron and CloudWatch Events; adds portable templates and alerts.', _targetAudience: 'Developers, _data engineers, _SREs', _trialDays: 14, _setupTime: '1 hour', _category: 'Developer Tools', _realService: true, _technology: ['Node.js, _Queues, _Serverless'], _integrations: ['Slack, _Webhook'], _useCases: ['ETL scheduling, _Report generation, _Cleanup jobs'], _roi: 'Reduce ops toil; no servers to manage', _competitors: ['EasyCron, _AWS EventBridge'], _marketSize: '$2B dev tooling', _growthRate: '9% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Job store, _scheduler, _runners and alerting.', _launchDate: '2024-05-12', _customers: 73, _rating: 4.5, _reviews: 39},
  {_id: 'pdf-render-api', _name: 'PDF Render API', _tagline: 'Pixel-perfect HTML-to-PDF with fonts and headers/footers', _price: '$49', _period: '/month', _description: 'Drop-in PDF render API with template helpers, _page numbers, _margins and secure asset loading.', _features: [
      'Chrome-based renderer', _'Custom fonts and CSS', _'Headers/footers, _page numbers', _'Webhook delivery'
    ], _popular: true, _icon: '🧾', _color: 'from-slate-600 to-slate-800', _textColor: 'text-slate-300', _link: 'https://ziontechgroup.com/pdf-render-api', _marketPosition: 'Competes with PDFMonkey/DocRaptor ($29–$99/mo). Simple pricing, _great output quality.', _targetAudience: 'Developers, _ops, _finance', _trialDays: 7, _setupTime: '30 minutes', _category: 'Developer Tools', _realService: true, _technology: ['Puppeteer, _Node.js'], _integrations: ['Zapier, _Webhook'], _useCases: ['Invoices, _Reports, _Statements'], _roi: 'Save engineering time; consistent documents', _competitors: ['PDFMonkey, _DocRaptor, _Gotenberg'], _marketSize: '$1B doc gen', _growthRate: '8% YoY', _variant: 'data-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Headless Chrome workers, _queueing and asset sandboxing.', _launchDate: '2024-04-08', _customers: 140, _rating: 4.7, _reviews: 91},
  {_id: 'gdpr-dsar-automation', _name: 'GDPR DSAR Automation', _tagline: 'Automate data subject requests with evidence and workflows', _price: '$399', _period: '/month', _description: 'Intake portal, _identity verification, _data source connectors and fulfillment workflows with auditor-ready evidence packs.', _features: [
      'Request intake portal', _'Identity verification', _'Connectors to data stores', _'Evidence packs and exports'
    ], _popular: true, _icon: '⚖️', _color: 'from-violet-600 to-fuchsia-700', _textColor: 'text-violet-300', _link: 'https://ziontechgroup.com/gdpr-dsar-automation', _marketPosition: 'Alternatives: Transcend/Segment privacy ($500–$3k/mo). Faster time-to-value for SMEs.', _targetAudience: 'Legal, _security, _IT', _trialDays: 14, _setupTime: '1–2 weeks', _category: 'Security & Compliance', _realService: true, _technology: ['Node.js, _IDV, _Connectors'], _integrations: ['Snowflake, _BigQuery, _S3, _Postgres'], _useCases: ['Compliance at scale, _Reduced manual effort'], _roi: 'Cut DSAR handling cost by 60–80%', _competitors: ['Transcend, _OneTrust, _Segment Privacy'], _marketSize: '$8B privacy ops', _growthRate: '18% YoY', _variant: 'security-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Ticketing workflows, _connectors, _redaction and audit logs.', _launchDate: '2024-11-01', _customers: 31, _rating: 4.6, _reviews: 21},
  {_id: 'vendor-risk-automation', _name: 'Vendor Risk Automation', _tagline: 'Questionnaires, _evidence collection and continuous monitoring', _price: '$299', _period: '/month', _description: 'Automates vendor questionnaires (SIG Lite/CAIQ), _evidence collection and scoring with renewal reminders and issues tracking.', _features: [
      'SIG/CAIQ templates', _'Evidence collection links', _'Risk scoring and tracking', _'Renewal reminders'
    ], _popular: false, _icon: '🤝', _color: 'from-teal-600 to-emerald-700', _textColor: 'text-teal-300', _link: 'https://ziontechgroup.com/vendor-risk-automation', _marketPosition: 'Alternatives: Whistic, _OneTrust Vendor Risk ($300–$2k/mo). We focus on speed and automation.', _targetAudience: 'Security, _procurement and legal', _trialDays: 14, _setupTime: '1–2 weeks', _category: 'Security & Compliance', _realService: true, _technology: ['Next.js, _Workflows'], _integrations: ['Slack, _Jira, _Email'], _useCases: ['Faster reviews, _Evidence reuse, _Audit readiness'], _roi: 'Shorten vendor onboarding by 30–50%', _competitors: ['Whistic, _OneTrust VRM'], _marketSize: '$6B VRM', _growthRate: '16% YoY', _variant: 'neural-quantum', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Questionnaire engine, _evidence vault, _risk scoring and reminders.', _launchDate: '2024-10-15', _customers: 26, _rating: 4.5, _reviews: 18},
  {_id: 'browser-performance-monitor', _name: 'Browser Performance Monitor', _tagline: 'Core Web Vitals and RUM with actionable diagnostics', _price: '$129', _period: '/month', _description: 'Collects field data (RUM) for Core Web Vitals, _surfaces regressions and points to code-level fixes with dashboards.', _features: [
      'RUM collection script', _'Core Web Vitals (LCP/CLS/INP)', _'Regression detection', _'Dashboards and alerts'
    ], _popular: false, _icon: '⚡', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-300', _link: 'https://ziontechgroup.com/browser-performance-monitor', _marketPosition: 'Alternatives: SpeedCurve ($99–$439/mo). We bundle diagnostics and dev tips.', _targetAudience: 'Frontend and growth teams', _trialDays: 7, _setupTime: '1 hour', _category: 'Observability', _realService: true, _technology: ['JS RUM, _Dashboards'], _integrations: ['Slack, _Datadog'], _useCases: ['Improve conversions, _Perf regressions, _SEO gains'], _roi: 'Increase conversion 2–10% with better vitals', _competitors: ['SpeedCurve, _Calibre'], _marketSize: '$1B web perf', _growthRate: '11% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Lightweight RUM SDK, _vitals aggregation and alerting.', _launchDate: '2024-09-08', _customers: 52, _rating: 4.5, _reviews: 29},
  {_id: 'database-performance-monitor', _name: 'Database Performance Monitor', _tagline: 'Query insights, _locks, _connection pools and slow query fixes', _price: '$299', _period: '/month', _description: 'Collector agents for Postgres/MySQL with dashboards for slow queries, _locks and connection pool saturation with recommendations.', _features: [
      'Slow query detection', _'Lock contention analysis', _'Connection pool saturation', _'Advisor recommendations'
    ], _popular: true, _icon: '🗄️', _color: 'from-indigo-600 to-slate-700', _textColor: 'text-indigo-300', _link: 'https://ziontechgroup.com/database-performance-monitor', _marketPosition: 'Competes with pganalyze and PMM ($199–$499/mo). Simpler setup and actionable fixes.', _targetAudience: 'Data and platform engineers', _trialDays: 14, _setupTime: '1–2 days', _category: 'Observability', _realService: true, _technology: ['Postgres, _MySQL, _Agents'], _integrations: ['Grafana, _Slack'], _useCases: ['Improve DB latency, _Reduce deadlocks, _Capacity planning'], _roi: 'Reduce query latency 20–50% in weeks', _competitors: ['pganalyze, _Percona PMM'], _marketSize: '$4B DB tooling', _growthRate: '13% YoY', _variant: 'monitoring-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Extension-based metrics collectors and advisors.', _launchDate: '2024-08-01', _customers: 39, _rating: 4.6, _reviews: 23},
  {_id: 'cloud-platform-managed-kubernetes', _name: 'Managed Kubernetes Platform', _tagline: 'Production EKS/GKE/AKS with GitOps, _SSO and guardrails', _price: '$1, _999', _period: '/month', _description: 'Landing zone for Kubernetes with IaC, _GitOps, _SSO, _cost controls, _backup and observability out of the box.', _features: [
      'IaC blueprints and GitOps', _'SSO and RBAC policies', _'Cost controls and quotas', _'Backup and restore runbooks'
    ], _popular: true, _icon: '☁️', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: 'https://ziontechgroup.com/cloud-platform', _marketPosition: 'Alternatives: Platform9, _Rafay (custom pricing). Opinionated, _fast time-to-value.', _targetAudience: 'Platform engineering and DevOps', _trialDays: 0, _setupTime: '1–3 weeks', _category: 'Cloud & FinOps', _realService: true, _technology: ['Terraform, _Flux/Argo, _EKS/GKE/AKS'], _integrations: ['Datadog, _Grafana, _Vault'], _useCases: ['Standardized platform, _Security baseline, _Developer velocity'], _roi: 'Ship platforms 3x faster at lower risk', _competitors: ['Platform9, _Rafay, _DIY'], _marketSize: '$20B platform engineering', _growthRate: '22% YoY', _variant: 'cloud-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Blueprints, _policies, _GitOps pipelines and SRE runbooks.', _launchDate: '2025-01-10', _customers: 17, _rating: 4.7, _reviews: 12},
  {_id: 'rum-analytics-starter', _name: 'Real User Monitoring (RUM) Analytics Starter', _tagline: 'Measure real user performance, _Core Web Vitals and conversion impact', _price: '$59', _period: '/month', _description: 'Drop-in RUM snippet with Core Web Vitals, _page timings, _SPA route tracking, _and conversion impact analysis. Alerts and weekly insights included.', _features: [
      'Core Web Vitals (LCP, _INP, _CLS)', _'Conversion impact analysis', _'Geo/device breakdowns', _'Anomaly alerts to Slack/Email', _'Privacy-friendly, _cookie-lite'
    ], _popular: false, _icon: '⚡', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-300', _link: 'https://ziontechgroup.com/services/rum-analytics-starter', _marketPosition: 'Comparable to SpeedCurve RUM, _Raygun RUM, _and New Relic Browser; focused SMB starter with clear insights.', _targetAudience: 'Growth, _product, _and web teams', _trialDays: 7, _setupTime: '15 minutes', _category: 'Analytics', _realService: true, _technology: ['Edge analytics, _JS snippet'], _integrations: ['Slack, _Webhooks, _BigQuery export'], _useCases: ['Track Core Web Vitals, _Optimize pages, _Improve conversions'], _roi: 'Lift conversion 2–10% by fixing performance bottlenecks.', _competitors: ['SpeedCurve RUM, _New Relic Browser, _Raygun RUM'], _marketSize: '$2B+ web analytics', _growthRate: '12% YoY', _variant: 'analytics-futuristic' as any, _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Snippet capture with server-side aggregation and privacy controls.', _launchDate: '2025-02-15', _customers: 26, _rating: 4.6, _reviews: 14},
  {_id: 'accessibility-compliance-auditor', _name: 'Accessibility Compliance Auditor', _tagline: 'Automated WCAG checks with actionable fixes and CI integration', _price: '$79', _period: '/month', _description: 'Automate WCAG 2.2 AA checks with axe-core powered scans, _page templates, _and CI gates. Export auditor-ready reports and remediation tasks.', _features: [
      'axe-core rules and custom checks', _'CI gate on severity thresholds', _'Page template scanning', _'Issue tracker export', _'Auditor-ready PDF reports'
    ], _popular: true, _icon: '♿', _color: 'from-purple-600 to-indigo-700', _textColor: 'text-purple-300', _link: 'https://ziontechgroup.com/services/accessibility-compliance-auditor', _marketPosition: 'Alternative to manual audits; complements Deque axe and Pa11y in CI/CD.', _targetAudience: 'Web, _product, _and compliance teams', _trialDays: 7, _setupTime: '1 hour', _category: 'Quality & Monitoring', _realService: true, _technology: ['Node.js, _Playwright, _axe-core'], _integrations: ['GitHub Actions, _GitLab CI, _Jira'], _useCases: ['Prevent regressions, _Improve inclusivity, _Audit readiness'], _roi: 'Reduce manual audit time by 50–80%.', _competitors: ['Deque axe Monitor, _Siteimprove'], _marketSize: '$1B+ accessibility services', _growthRate: '18% YoY', _variant: 'monitoring-futuristic' as any, _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Headless scans with rulesets, _diffing, _and gated pipelines.', _launchDate: '2025-02-12', _customers: 31, _rating: 4.7, _reviews: 19},
  {_id: 'api-latency-budget-enforcer', _name: 'API Latency Budget Enforcer', _tagline: 'Guardrails for p95/p99 latency budgets with tickets and alerts', _price: '$119', _period: '/month', _description: 'Define per-endpoint latency budgets (p95/p99) and auto-create remediation tasks when budgets are breached. Includes SLOs, _error budgets, _and on-call alerts.', _features: [
      'Per-route latency SLOs', _'Error budget tracking', _'Auto-ticket creation', _'Slack/PagerDuty alerts', _'Weekly drift reports'
    ], _popular: false, _icon: '⏱️', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: 'https://ziontechgroup.com/services/api-latency-budget-enforcer', _marketPosition: 'Bridges observability and execution; complements Datadog SLO and Grafana.', _targetAudience: 'SREs, _platform and backend teams', _trialDays: 14, _setupTime: '1 day', _category: 'Observability', _realService: true, _technology: ['OpenTelemetry, _Prometheus, _Grafana'], _integrations: ['Datadog, _Grafana, _PagerDuty, _Jira'], _useCases: ['Keep latency in check, _Manage reliability, _Prioritize work'], _roi: 'Cut MTTR by 20–40% via proactive guardrails.', _competitors: ['Datadog SLOs, _Nobl9'], _marketSize: '$5B+ reliability tooling', _growthRate: '20% YoY', _variant: 'monitoring-futuristic' as any, _contactInfo: contact, _realImplementation: true, _implementationDetails: 'SLO definitions, _budget math, _and actionable ownership routes.', _launchDate: '2025-02-18', _customers: 18, _rating: 4.5, _reviews: 11},
  {_id: 'security-headers-monitor', _name: 'Security Headers & TLS Monitor', _tagline: 'Track HSTS, _CSP, _TLS config and get hardening playbooks', _price: '$49', _period: '/month', _description: 'Monitors site headers and TLS for regressions. Provides CSP templates, _HSTS, _and modern TLS guidance with alerts and diffs.', _features: [
      'CSP/HSTS header checks', _'TLS version/cipher checks', _'Auto-diff of changes', _'Slack/Email alerts', _'Hardening playbooks'
    ], _popular: true, _icon: '🛡️', _color: 'from-indigo-600 to-slate-700', _textColor: 'text-indigo-300', _link: 'https://ziontechgroup.com/services/security-headers-monitor', _marketPosition: 'Lightweight alternative to manual scans; complements Mozilla Observatory and SSL Labs checks.', _targetAudience: 'Security and platform teams', _trialDays: 7, _setupTime: '20 minutes', _category: 'Security & Compliance', _realService: true, _technology: ['Node.js, _TLS, _HTTP'], _integrations: ['Slack, _Webhooks'], _useCases: ['Prevent misconfigurations, _Detect regressions, _Improve posture'], _roi: 'Reduce security regressions and audit time.', _competitors: ['Mozilla Observatory, _SSL Labs'], _marketSize: '$3B security testing', _growthRate: '16% YoY', _variant: 'security-futuristic' as any, _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Scheduled scans with diffs and playbooks.', _launchDate: '2025-02-20', _customers: 44, _rating: 4.6, _reviews: 22},
  {_id: 'cookie-consent-manager', _name: 'Cookie & Consent Manager', _tagline: 'GDPR/CCPA consent banner, _audit trails, _and policy generator', _price: '$39', _period: '/month', _description: 'Easy consent banner with per-region rules, _audit logs, _and auto-generated cookie policy pages. Integrates with analytics blockers.', _features: [
      'Geo-based consent rules', _'Policy page generator', _'Audit log export', _'Analytics/script blocking', _'A/B banner testing'
    ], _popular: false, _icon: '🍪', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-300', _link: 'https://ziontechgroup.com/services/cookie-consent-manager', _marketPosition: 'Simple alternative to complex CMPs; transparent pricing for SMBs.', _targetAudience: 'Marketing, _legal, _and web teams', _trialDays: 7, _setupTime: '30 minutes', _category: 'Security & Compliance', _realService: true, _technology: ['Next.js, _Edge middleware'], _integrations: ['Google Tag, _GTM, _Segment'], _useCases: ['Compliance, _User trust, _Region-based rules'], _roi: 'Accelerate compliance readiness; reduce legal risk.', _competitors: ['Cookiebot, _OneTrust CMP'], _marketSize: '$2B privacy tooling', _growthRate: '15% YoY', _variant: 'compliance-futuristic' as any, _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Client + middleware rules with storage & audit.', _launchDate: '2025-02-22', _customers: 21, _rating: 4.5, _reviews: 10},
  {_id: 'backup-policy-auditor', _name: 'Backup Policy Auditor', _tagline: 'Validate backup frequency, _retention and recovery objectives', _price: '$99', _period: '/month', _description: 'Continuously checks backup policies against RPO/RTO targets across clouds and DBs. Flags drift and creates remediation tasks.', _features: [
      'RPO/RTO policy checks', _'Snapshot/restore verification', _'Drift detection', _'Weekly compliance reports', _'Auto-ticket workflows'
    ], _popular: false, _icon: '💾', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: 'https://ziontechgroup.com/services/backup-policy-auditor', _marketPosition: 'Brings reliability SRE rigor to backups; complements cloud-native backup tools.', _targetAudience: 'SREs, _platform and data teams', _trialDays: 14, _setupTime: '2 days', _category: 'Cloud & FinOps', _realService: true, _technology: ['AWS, _GCP, _Azure, _Postgres, _MySQL'], _integrations: ['Jira, _Slack, _Datadog'], _useCases: ['Reduce risk, _Improve recovery posture, _Governance'], _roi: 'Cut recovery risks dramatically; faster audits.', _competitors: ['Veeam, _Clumio, _Cloud-native backups'], _marketSize: '$10B backup & DR', _growthRate: '8% YoY', _variant: 'cloud-futuristic' as any, _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Read-only checks, _sample restores, _and compliance export.', _launchDate: '2025-02-24', _customers: 12, _rating: 4.5, _reviews: 7},
  {_id: 'consent-compliance-kit', _name: 'Consent & Cookie Compliance Kit', _tagline: 'GDPR/CPRA consent banners, _geo-targeting, _and audit-ready logs', _price: '$49', _period: '/month', _description: 'Deploy IAB TCF v2 compatible consent banners with region-aware policies, _capture consent receipts, _and export audit logs for GDPR/CPRA. Includes cookie inventory and auto-blocking helpers.', _features: [
      'IAB TCF v2.2 compatible consent', _'Geo-targeted policies (EEA/UK/US states)', _'Consent receipts and log exports', _'Cookie inventory and auto-blocking', _'Policy pages and versioning', _'CMP integrations and tag manager hooks'
    ], _popular: false, _icon: '🛡️', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: 'https://ziontechgroup.com/services/consent-compliance-kit', _marketPosition: 'Practical, _affordable alternative to heavyweight CMPs for SMBs and startups.', _targetAudience: 'Marketing ops, _legal/compliance, _web teams', _trialDays: 7, _setupTime: '1 day', _category: 'Privacy & Compliance', _realService: true, _technology: ['Next.js, _Tag Manager, _IAB TCF v2'], _integrations: ['Google Tag Manager, _Segment, _Cookiebot, _OneTrust'], _useCases: ['GDPR/CPRA consent management, _Audit exports, _Region policies'], _roi: 'Reduce compliance risk and legal exposure with verifiable consent logs.', _competitors: ['OneTrust, _Cookiebot, _TrustArc'], _marketSize: '$2B+ privacy tooling', _growthRate: '18% YoY', _variant: 'security-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Embeddable banner, _policy config UI, _consent log store, _export jobs.', _launchDate: '2025-08-22', _customers: 22, _rating: 4.6, _reviews: 11},
  {_id: 'api-backfill-reconciliation', _name: 'API Backfill & Reconciliation', _tagline: 'Recover missed events, _dedupe, _and reconcile systems with confidence', _price: '$99', _period: '/month', _description: 'Detect and repair data gaps between SaaS APIs and your warehouse/CRM. Provides replay-safe backfills, _idempotency, _and reconciliation reports.', _features: [
      'Gap detection and backfill plans', _'Idempotent replay and deduplication', _'Hash-based reconciliation reports', _'Rate-limit aware workers', _'Alerting and failure retries', _'Warehouse and CRM syncs'
    ], _popular: false, _icon: '🔁', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-300', _link: 'https://ziontechgroup.com/services/api-backfill-reconciliation', _marketPosition: 'Bridges the gap between brittle webhook flows and reliable data pipelines.', _targetAudience: 'Data engineers, _platform teams, _RevOps', _trialDays: 14, _setupTime: '2 days', _category: 'Integration', _realService: true, _technology: ['Node.js, _Postgres, _Redis, _Airflow'], _integrations: ['Salesforce, _HubSpot, _Stripe, _Shopify'], _useCases: ['Fix data gaps, _Ensure CRM/Warehouse parity, _Improve trust'], _roi: 'Save weeks of manual cleanup; maintain accurate reporting and billing.', _competitors: ['Fivetran (log-based), _custom scripts'], _marketSize: '$4B data integration', _growthRate: '20% YoY', _variant: 'integration-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Replay-safe pullers, _checksum compare, _and reconciliation dashboards.', _launchDate: '2025-08-22', _customers: 15, _rating: 4.7, _reviews: 9},
  {_id: 'data-quality-sla-monitor', _name: 'Data Quality & Freshness SLAs', _tagline: 'Track freshness, _nulls, _and schema drift with alerting and SLOs', _price: '$149', _period: '/month', _description: 'Define and monitor data SLAs for freshness and quality. Receive alerts, _create tickets, _and visualize lineage impacts for downstream consumers.', _features: [
      'Freshness and volume checks', _'Null/outlier thresholds', _'Schema drift detection', _'Lineage visualization', _'SLOs and error budgets', _'Slack/Jira alerts and reports'
    ], _popular: true, _icon: '📊', _color: 'from-purple-600 to-pink-700', _textColor: 'text-purple-300', _link: 'https://ziontechgroup.com/services/data-quality-sla-monitor', _marketPosition: 'Lightweight alternative to full data observability platforms for SMBs.', _targetAudience: 'Analytics, _data engineering, _product teams', _trialDays: 14, _setupTime: '2 days', _category: 'Data & Analytics', _realService: true, _technology: ['dbt, _Airflow, _Postgres, _BigQuery'], _integrations: ['Snowflake, _BigQuery, _Redshift, _ClickHouse'], _useCases: ['Prevent stale dashboards, _Catch pipeline regressions, _Improve trust'], _roi: 'Reduce dashboard breaks; improve data-dependent feature velocity.', _competitors: ['Monte Carlo, _Bigeye, _Great Expectations'], _marketSize: '$1.5B data observability', _growthRate: '30% YoY', _variant: 'data-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Metadata collectors, _rules engine, _SLA store, _and alert webhooks.', _launchDate: '2025-08-22', _customers: 28, _rating: 4.6, _reviews: 13},
  {_id: 'postgres-index-advisor', _name: 'Postgres Index Advisor & Tuner', _tagline: 'Automatic index suggestions, _vacuum tuning, _and slow query fixes', _price: '$79', _period: '/month', _description: 'Analyze query plans and table stats to recommend and schedule index changes, _vacuum/autovacuum tuning, _and bloat remediation.', _features: [
      'EXPLAIN plan analysis', _'Missing/unused index detection', _'Autovacuum and bloat tuning', _'Safe change windows', _'Rollback and impact reports', _'Alerts on regressions'
    ], _popular: false, _icon: '🐘', _color: 'from-indigo-600 to-blue-700', _textColor: 'text-indigo-300', _link: 'https://ziontechgroup.com/services/postgres-index-advisor', _marketPosition: 'Practical tuner for teams without a dedicated DBA.', _targetAudience: 'Backend engineers, _SREs, _DBAs', _trialDays: 7, _setupTime: '1 day', _category: 'Databases', _realService: true, _technology: ['PostgreSQL, _pg_stat_statements, _Timescale'], _integrations: ['RDS/Aurora, _Cloud SQL, _Self-hosted Postgres'], _useCases: ['Lower latency, _Reduce CPU/IO, _Avoid outages'], _roi: 'Improve query latency by 20–60%, _cut cloud costs.', _competitors: ['pganalyze, _OtterTune'], _marketSize: '$3B database tooling', _growthRate: '12% YoY', _variant: 'data-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Read-only plan capture, _advisor engine, _change scripts, _and dashboards.', _launchDate: '2025-08-22', _customers: 18, _rating: 4.5, _reviews: 8},
  {_id: 'gitops-drift-monitor', _name: 'GitOps Policy & Drift Monitor', _tagline: 'Detect and correct drift between Git and cluster state with policy gates', _price: '$99', _period: '/month', _description: 'Continuously compare desired manifests to live resources, _enforce policies, _and open pull requests to reconcile drift automatically.', _features: [
      'Desired vs live diffing', _'OPA/Conftest policy gates', _'Auto-PR remediation', _'Slack/Jira alerts', _'Change history and approvals', _'Multi-cluster support'
    ], _popular: false, _icon: '🧭', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-300', _link: 'https://ziontechgroup.com/services/gitops-drift-monitor', _marketPosition: 'Complements Argo CD/Flux with governance and auto-remediation workflows.', _targetAudience: 'Platform engineering, _DevOps, _SRE', _trialDays: 14, _setupTime: '2 days', _category: 'DevOps', _realService: true, _technology: ['Kubernetes, _OPA, _Argo CD, _Flux'], _integrations: ['GitHub, _GitLab, _Slack, _Jira'], _useCases: ['Prevent config drift, _Enforce policies, _Speed up remediations'], _roi: 'Cut rollbacks and misconfig incidents by 30–50%.', _competitors: ['Argo CD, _Flux, _Fairwinds Polaris'], _marketSize: '$6B DevOps tooling', _growthRate: '20% YoY', _variant: 'devops-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Cluster collectors, _policy engine, _reconciler workers, _and PR bots.', _launchDate: '2025-08-22', _customers: 14, _rating: 4.6, _reviews: 7},
  {_id: 'soc2-readiness-scanner', _name: 'SOC 2 Readiness Scanner', _tagline: 'Map controls to TSC, _auto-collect evidence, _and flag gaps', _price: '$79', _period: '/month', _description: 'Pre-audit posture scanner that links integrations to controls, _highlights evidence gaps, _and produces auditor-friendly reports.', _features: [
      'Control mapping templates', _'Evidence collectors and checks', _'Policy and process coverage', _'Gap analysis and tasks', _'Exportable auditor reports'
    ], _popular: true, _icon: '📋', _color: 'from-teal-600 to-emerald-700', _textColor: 'text-teal-300', _link: 'https://ziontechgroup.com/services/soc2-readiness-scanner', _marketPosition: 'Faster SOC 2 preparation for startups; complements evidence automation.', _targetAudience: 'Founders, _security leads, _compliance managers', _trialDays: 7, _setupTime: '1 day', _category: 'Security & Compliance', _realService: true, _technology: ['Node.js, _OAuth integrations, _Evidence store'], _integrations: ['Google Workspace, _GitHub, _AWS, _Azure, _GCP'], _useCases: ['Pre-audit gap checks, _Faster readiness, _Auditor exports'], _roi: 'Cut readiness timelines by 2–4 weeks.', _competitors: ['Vanta, _Drata (prep workflows)'], _marketSize: '$3B compliance automation', _growthRate: '22% YoY', _variant: 'security-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Connector checks, _control mapping DB, _gap scoring and exports.', _launchDate: '2025-08-22', _customers: 24, _rating: 4.7, _reviews: 12},
  {_id: 'cloud-asset-attack-surface', _name: 'Cloud Asset Inventory & Attack Surface', _tagline: 'Continuously map cloud assets, _exposures, _and internet-facing risks', _price: '$149', _period: '/month', _description: 'Discover assets across AWS/Azure/GCP, _classify risks (public buckets, _open ports), _and generate remediation tickets with ownership routing.', _features: [
      'Multi-cloud asset discovery', _'Public exposure detection', _'Ownership and tagging', _'Risk scoring and SLAs', _'Auto-ticket creation'
    ], _popular: true, _icon: '☁️', _color: 'from-sky-600 to-blue-700', _textColor: 'text-sky-300', _link: 'https://ziontechgroup.com/services/cloud-asset-attack-surface', _marketPosition: 'Brings CSPM principles to practical SMB workflows.', _targetAudience: 'Security, _platform teams', _trialDays: 14, _setupTime: '3 days', _category: 'Security', _realService: true, _technology: ['AWS Config, _Azure Resource Graph, _GCP Asset Inventory'], _integrations: ['Jira, _ServiceNow, _Slack'], _useCases: ['Reduce attack surface, _Speed up remediation, _Improve visibility'], _roi: 'Lower breach likelihood; improved audit readiness.', _competitors: ['Wiz, _Prisma Cloud (CSPM)'], _marketSize: '$8B cloud security', _growthRate: '25% YoY', _variant: 'cloud-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'API collectors, _exposure heuristics, _ticket routing, _dashboards.', _launchDate: '2025-08-22', _customers: 19, _rating: 4.5, _reviews: 9},
  {_id: 'llm-red-team-simulator', _name: 'LLM Red Team & Jailbreak Simulator', _tagline: 'Automated adversarial prompts, _safety tests, _and regression dashboards', _price: '$99', _period: '/month', _description: 'Continuously test LLM apps against prompt injection, _sensitive data exfiltration, _and policy violations with trending dashboards and CI gates.', _features: [
      'Prompt injection libraries', _'PII/redaction checks', _'Safety regression tests', _'Model/provider matrix', _'CI gates and reports'
    ], _popular: false, _icon: '🧪', _color: 'from-rose-600 to-pink-700', _textColor: 'text-rose-300', _link: 'https://ziontechgroup.com/services/llm-red-team-simulator', _marketPosition: 'Proactive LLM safety for production apps; complements guardrails.', _targetAudience: 'AI platform teams, _security engineers', _trialDays: 7, _setupTime: '1 day', _category: 'AI Safety', _realService: true, _technology: ['OpenAI, _Anthropic, _Garak, _OWASP Top 10 for LLMs'], _integrations: ['GitHub Actions, _GitLab CI, _CircleCI'], _useCases: ['Catch regressions, _Improve safety, _Document compliance'], _roi: 'Avoid incidents and brand damage due to unsafe responses.', _competitors: ['Lakera, _Garak'], _marketSize: '$1B+ LLM safety', _growthRate: '40% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Scenario libraries, _orchestrator, _CI integration, _dashboards.', _launchDate: '2025-08-22', _customers: 17, _rating: 4.6, _reviews: 8},
  {_id: 'affiliate-fraud-detector', _name: 'Affiliate Fraud Detector', _tagline: 'Block coupon abuse, _self-referrals, _and low-quality traffic at scale', _price: '$129', _period: '/month', _description: 'Enhances affiliate programs with fraud heuristics, _device/identity checks, _and payout holds to protect margins.', _features: [
      'Self-referral detection', _'Device and IP risk signals', _'Velocity and cohort heuristics', _'Payout hold workflows', _'Appeal and review portal'
    ], _popular: false, _icon: '🛑', _color: 'from-red-600 to-rose-700', _textColor: 'text-red-300', _link: 'https://ziontechgroup.com/services/affiliate-fraud-detector', _marketPosition: 'Pairs with attribution hubs to prevent fraud-driven losses.', _targetAudience: 'Growth teams, _finance ops', _trialDays: 14, _setupTime: '2 days', _category: 'Growth & Monetization', _realService: true, _technology: ['Python', _'Bayesian modeling', _'dbt'], _integrations: ['GA4', _'Facebook Ads', _'Google Ads', _'Shopify'], _useCases: ['Budget optimization', _'Channel ROI', _'Experiment planning'], _roi: 'Improve CAC/LTV ratio 10–30%', _competitors: ['Recast', _'Google Attribution', _'Rockerbox'], _marketSize: '$12B+ martech analytics', _growthRate: '20% YoY', _variant: 'ai-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Data connectors, _identity resolution, _MMM fitting, _and optimizer UI.', _launchDate: '2025-01-21', _customers: 48, _rating: 4.7, _reviews: 29},
  {_id: 'data-governance-starter', _name: 'Data Governance & Catalog Starter', _tagline: 'Lightweight catalog, _lineage, _and PII tagging for modern stacks', _price: '$699', _period: '/month', _description: 'Pragmatic data governance with automated discovery, _column-level lineage, _PII tagging, _and policy enforcement. Vendor-neutral and dbt-friendly.', _features: [
      'Automated table/column discovery', _'Column-level lineage and impact analysis', _'PII tagging and masking policies', _'Glossary and ownership workflows', _'dbt/Snowflake/BigQuery integrations'
    ], _popular: true, _icon: '🗂️', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-400', _link: 'https://ziontechgroup.com/data-governance-starter', _marketPosition: 'Compared with Alation/Collibra (enterprise). Faster time-to-value for small data teams.', _targetAudience: 'Data Engineering, _Analytics, _Security & Compliance', _trialDays: 7, _setupTime: '3–7 days', _category: 'Data & Analytics', _realService: true, _technology: ['TypeScript', _'dbt', _'OpenLineage'], _integrations: ['Snowflake', _'BigQuery', _'Redshift', _'Databricks'], _useCases: ['Self-serve data discovery', _'Compliance readiness', _'Change impact analysis'], _roi: 'Cut incident resolution time 15–25% via lineage and ownership', _competitors: ['Alation', _'Collibra', _'Atlan'], _marketSize: '$6B+ data governance', _growthRate: '22% YoY', _variant: 'data-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'OpenLineage-based scanners, _dbt metadata, _and policy engine.', _launchDate: '2025-01-21', _customers: 34, _rating: 4.7, _reviews: 18},
  {_id: 'ecommerce-personalization', _name: 'E‑commerce Personalization Engine', _tagline: 'Real-time recommendations, _bundles, _and promotions that drive AOV', _price: '$499', _period: '/month', _description: 'Plug-and-play personalization for storefronts. Learns from behavior and catalog to optimize recommendations, _bundles, _and on-site promotions.', _features: [
      'Session-based and user-based recommendations', _'Bundle and upsell optimizer', _'A/B testing and holdouts', _'Shopify/BigCommerce apps', _'Audience segments and API'
    ], _popular: true, _icon: '🛒', _color: 'from-pink-600 to-rose-700', _textColor: 'text-pink-300', _link: 'https://ziontechgroup.com/ecommerce-personalization', _marketPosition: 'Alternatives include VWO/Optimizely personalization. Clear SMB pricing and fast setup.', _targetAudience: 'Shopify/BigCommerce merchants and growth teams', _trialDays: 14, _setupTime: '1–3 days', _category: 'Micro SaaS', _realService: true, _technology: ['Next.js', _'Node.js', _'PostgreSQL'], _integrations: ['Shopify', _'BigCommerce', _'Segment'], _useCases: ['AOV growth', _'Conversion rate lift', _'Retention'], _roi: '3–10% conversion lift on average', _competitors: ['Optimizely', _'VWO', _'Nosto'], _marketSize: '$8B+ CRO & personalization', _growthRate: '14% YoY', _variant: 'micro-saas', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'SDK snippet, _event collectors, _and real-time model serving.', _launchDate: '2025-01-21', _customers: 120, _rating: 4.6, _reviews: 77},
  {_id: 'iot-fleet-telemetry', _name: 'IoT Fleet Telemetry Platform', _tagline: 'Unified device telemetry, _alerts, _and predictive maintenance', _price: '$999', _period: '/month', _description: 'Collect, _store, _and analyze telemetry from vehicles and devices. Real-time alerts, _anomaly detection, _geofencing, _and maintenance predictions.', _features: [
      'MQTT/HTTP ingestion and device registry', _'Rules engine and alerting', _'Anomaly detection and forecasting', _'Geofencing and trip analytics', _'APIs and dashboards'
    ], _popular: false, _icon: '🚚', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-300', _link: 'https://ziontechgroup.com/iot-fleet-telemetry', _marketPosition: 'Complements AWS IoT/Azure IoT. Faster SMB onboarding with ready analytics.', _targetAudience: 'Logistics, _Mobility, _Field Ops, _OEMs', _trialDays: 14, _setupTime: '2–4 weeks', _category: 'IoT & Edge', _realService: true, _technology: ['MQTT', _'Timeseries DB', _'Edge SDK'], _integrations: ['AWS IoT', _'Azure IoT', _'GCP IoT Core*'], _useCases: ['Predictive maintenance', _'Driver behavior', _'Utilization'], _roi: 'Reduce downtime 10–20% and fuel costs 3–8%', _competitors: ['Particle', _'ThingsBoard', _'Kaa'], _marketSize: '$30B+ IoT platforms', _growthRate: '19% YoY', _variant: 'edge-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Device registry, _stream processors, _and feature store for ML.', _launchDate: '2025-01-21', _customers: 21, _rating: 4.5, _reviews: 12},
  {_id: 'api-security-testing', _name: 'API Security Testing as a Service', _tagline: 'Automated DAST/SAST for APIs with CI/CD integration', _price: '$399', _period: '/month', _description: 'Shift-left API security with automated scanning in pipelines. Finds OWASP API Top 10 issues, _secrets, _and misconfigurations with fix guidance.', _features: [
      'OWASP API Top 10 checks', _'Secrets and token leakage detection', _'CI/CD and PR annotations', _'SBOM and dependency risk', _'Reports and Jira tickets'
    ], _popular: false, _icon: '🛡️', _color: 'from-slate-600 to-gray-700', _textColor: 'text-slate-300', _link: 'https://ziontechgroup.com/api-security-testing', _marketPosition: 'Compared with Snyk/42Crunch/Burp Suite. We include actionable PR annotations and auto-fix recipes.', _targetAudience: 'Platform, _AppSec, _DevSecOps', _trialDays: 7, _setupTime: '1–3 days', _category: 'Security', _realService: true, _technology: ['OWASP ZAP', _'SAST', _'SBOM'], _integrations: ['GitHub', _'GitLab', _'Jenkins'], _useCases: ['Shift-left security', _'Regulatory compliance', _'Audit readiness'], _roi: 'Reduce critical vuln exposure window by 40–60%', _competitors: ['Snyk', _'Burp Suite', _'42Crunch'], _marketSize: '$7B+ AppSec tooling', _growthRate: '23% YoY', _variant: 'security-futuristic', _contactInfo: contact, _realImplementation: true, _implementationDetails: 'Quota enforcer, _advisor engine, _and GitOps PR flow with alerts.', _launchDate: '2025-08-22', _customers: 13, _rating: 4.5, _reviews: 7},
  {_id: 'cloudflare-turnstile-proxy', _name: 'Cloudflare Turnstile & Bot Shield Proxy', _tagline: 'Kill signup spam and bot abuse without CAPTCHAs', _price: '$39', _period: '/month', _description: 'Edge proxy that adds Turnstile challenges, _device fingerprints, _and reputation checks in front of forms and APIs. Drop-in protection for signups, _login, _and sensitive endpoints.', _features: [
      'Turnstile token verification', _'Reputation and ASN heuristics', _'IP/device fingerprinting', _'Adaptive challenges', _'Block/allow lists and webhooks'
    ], _popular: false, _icon: '🛡️', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: 'https://ziontechgroup.com/services/cloudflare-turnstile-proxy', _marketPosition: 'Cheaper and simpler than full WAF for SMB forms and APIs.', _targetAudience: 'Growth, _platform, _security', _trialDays: 7, _setupTime: '30 minutes', _category: 'Security & Compliance', _realService: true, _technology: ['Cloudflare Workers, _KV, _Turnstile'], _integrations: ['Cloudflare, _Next.js, _Node proxies'], _useCases: ['Stop signup spam, _Block credential stuffing'], _roi: 'Reduce fake signups and abuse by 90%+', _competitors: ['hCaptcha Enterprise, _PerimeterX'], _marketSize: '$2B bot mitigation', _growthRate: '16% YoY', _variant: 'security-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Edge verify and adaptive challenge, policy config UI, analytics.',
    launchDate: '2025-02-25',
    customers: 19,
    rating: 4.6,
    reviews: 8
  },
<<<<<<< HEAD
  {
    id: 'reverse-etl-lite',
    name: 'Reverse ETL Lite',
    tagline: 'Sync warehouse data to SaaS apps in minutes',
    price: '$99',
    period: '/month',
    description: 'Point-and-click syncs from BigQuery/Snowflake/Postgres to HubSpot, Salesforce, and ad platforms. Includes scheduling, mapping, and error handling.',
    features: [
      'Warehouse connectorsField mapping UISchedules and retriesDry-run and diffsRow-level filters'
    ],
    popular: true,
    icon: '🔄',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/reverse-etl-lite',
    marketPosition: 'Affordable, focused alternative to heavy Reverse ETL suites.',
    targetAudience: 'Growth, data engineering, RevOps',
    trialDays: 14,
    setupTime: '1 hour',
    category: 'Data & Analytics',
    realService: true,
    technology: ['Node.js, Airflow/dbt optional, OAuth'],
    integrations: ['Snowflake, BigQuery, Postgres, HubSpot, Salesforce'],
    useCases: ['Activation, Lead scoring, Audiences'],
    roi: 'Ship activation in days, lift campaign ROI 10–20%',
    competitors: ['Hightouch, Census'],
    marketSize: '$1B reverse ETL',
    growthRate: '30% YoY',
    variant: 'data-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'reverse-etl-lite', _name: 'Reverse ETL Lite', _tagline: 'Sync warehouse data to SaaS apps in minutes', _price: '$99', _period: '/month', _description: 'Point-and-click syncs from BigQuery/Snowflake/Postgres to HubSpot, _Salesforce, _and ad platforms. Includes scheduling, _mapping, _and error handling.', _features: [
      'Warehouse connectors', _'Field mapping UI', _'Schedules and retries', _'Dry-run and diffs', _'Row-level filters'
    ], _popular: true, _icon: '🔄', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-300', _link: 'https://ziontechgroup.com/services/reverse-etl-lite', _marketPosition: 'Affordable, _focused alternative to heavy Reverse ETL suites.', _targetAudience: 'Growth, _data engineering, _RevOps', _trialDays: 14, _setupTime: '1 hour', _category: 'Data & Analytics', _realService: true, _technology: ['Node.js, _Airflow/dbt optional, _OAuth'], _integrations: ['Snowflake, _BigQuery, _Postgres, _HubSpot, _Salesforce'], _useCases: ['Activation, _Lead scoring, _Audiences'], _roi: 'Ship activation in days; lift campaign ROI 10–20%', _competitors: ['Hightouch, _Census'], _marketSize: '$1B reverse ETL', _growthRate: '30% YoY', _variant: 'data-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Connectors, incremental keys, idempotent upserts, error DLQ.',
    launchDate: '2025-02-26',
    customers: 12,
    rating: 4.5,
    reviews: 6
  },
<<<<<<< HEAD
  {
    id: 'ai-rfp-response-copilot',
    name: 'AI RFP Response Copilot',
    tagline: 'Draft RFP answers from your knowledge base with evidence links',
    price: '$129',
    period: '/month',
    description: 'Ingest past proposals, policies, and docs. Draft high-quality RFP responses with citations, track requirements coverage, and export to Word/PDF.',
    features: [
      'RAG over proposals & policiesSection templates and stylesEvidence citationsGap coverage trackingWord/PDF export'
    ],
    popular: true,
    icon: '📝',
    color: 'from-violet-600 to-fuchsia-700',
    textColor: 'text-violet-300',
    link: 'https://ziontechgroup.com/services/ai-rfp-response-copilot',
    marketPosition: 'Purpose-built for proposal teams, governance and citations built-in.',
    targetAudience: 'Sales engineering, proposal teams, compliance',
    trialDays: 14,
    setupTime: '1 day',
    category: 'AI & Data',
    realService: true,
    technology: ['Embeddings, Vector DB, OpenAI-compatible'],
    integrations: ['SharePoint, Google Drive, Confluence'],
    useCases: ['Faster RFPs, Better consistency, Higher win rate'],
    roi: 'Cut response time 40–60%, improve win rates',
    competitors: ['Loopio, RFPIO (assist modules)'],
    marketSize: '$1B RFP tooling',
    growthRate: '20% YoY',
    variant: 'ai-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'ai-rfp-response-copilot', _name: 'AI RFP Response Copilot', _tagline: 'Draft RFP answers from your knowledge base with evidence links', _price: '$129', _period: '/month', _description: 'Ingest past proposals, _policies, _and docs. Draft high-quality RFP responses with citations, _track requirements coverage, _and export to Word/PDF.', _features: [
      'RAG over proposals & policies', _'Section templates and styles', _'Evidence citations', _'Gap coverage tracking', _'Word/PDF export'
    ], _popular: true, _icon: '📝', _color: 'from-violet-600 to-fuchsia-700', _textColor: 'text-violet-300', _link: 'https://ziontechgroup.com/services/ai-rfp-response-copilot', _marketPosition: 'Purpose-built for proposal teams; governance and citations built-in.', _targetAudience: 'Sales engineering, _proposal teams, _compliance', _trialDays: 14, _setupTime: '1 day', _category: 'AI & Data', _realService: true, _technology: ['Embeddings, _Vector DB, _OpenAI-compatible'], _integrations: ['SharePoint, _Google Drive, _Confluence'], _useCases: ['Faster RFPs, _Better consistency, _Higher win rate'], _roi: 'Cut response time 40–60%; improve win rates', _competitors: ['Loopio, _RFPIO (assist modules)'], _marketSize: '$1B RFP tooling', _growthRate: '20% YoY', _variant: 'ai-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Document loaders, chunking, topic maps, structured draft generator.',
    launchDate: '2025-02-20',
    customers: 14,
    rating: 4.6,
    reviews: 9
  },
<<<<<<< HEAD
  {
    id: 'gpt-eval-harness',
    name: 'LLM Evaluation Harness',
    tagline: 'Automated evals with golden sets, judges, and regression gates',
    price: '$79',
    period: '/month',
    description: 'Define tasks and datasets, run multi-model evaluations with judge prompts, track metrics and drift, and block risky deployments with CI gates.',
    features: [
      'Golden sets and promptsJudge model scoringMulti-model matrixRegression and drift alertsCI quality gates'
    ],
    popular: false,
    icon: '🧪',
    color: 'from-indigo-600 to-slate-700',
    textColor: 'text-indigo-300',
    link: 'https://ziontechgroup.com/services/llm-evaluation-harness',
    marketPosition: 'Practical evals for product teams shipping AI features.',
    targetAudience: 'AI platform, product, QA',
    trialDays: 7,
    setupTime: '2 hours',
    category: 'AI & Data',
    realService: true,
    technology: ['OpenAI/Anthropic APIs, Vector DB'],
    integrations: ['GitHub Actions, GitLab CI'],
    useCases: ['Safety, quality, regression control'],
    roi: 'Reduce unsafe/low-quality releases and rollbacks',
    competitors: ['Humanloop, Arize Phoenix (evals)'],
    marketSize: '$1B eval tooling',
    growthRate: '35% YoY',
    variant: 'ai-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'gpt-eval-harness', _name: 'LLM Evaluation Harness', _tagline: 'Automated evals with golden sets, _judges, _and regression gates', _price: '$79', _period: '/month', _description: 'Define tasks and datasets, _run multi-model evaluations with judge prompts, _track metrics and drift, _and block risky deployments with CI gates.', _features: [
      'Golden sets and prompts', _'Judge model scoring', _'Multi-model matrix', _'Regression and drift alerts', _'CI quality gates'
    ], _popular: false, _icon: '🧪', _color: 'from-indigo-600 to-slate-700', _textColor: 'text-indigo-300', _link: 'https://ziontechgroup.com/services/llm-evaluation-harness', _marketPosition: 'Practical evals for product teams shipping AI features.', _targetAudience: 'AI platform, _product, _QA', _trialDays: 7, _setupTime: '2 hours', _category: 'AI & Data', _realService: true, _technology: ['OpenAI/Anthropic APIs, _Vector DB'], _integrations: ['GitHub Actions, _GitLab CI'], _useCases: ['Safety, _quality, _regression control'], _roi: 'Reduce unsafe/low-quality releases and rollbacks', _competitors: ['Humanloop, _Arize Phoenix (evals)'], _marketSize: '$1B eval tooling', _growthRate: '35% YoY', _variant: 'ai-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Task runners, judge prompts, scoring stores, CI plugin.',
    launchDate: '2025-02-12',
    customers: 16,
    rating: 4.5,
    reviews: 7
  },
<<<<<<< HEAD
  {
    id: 'gdpr-cookie-consent-edge',
    name: 'GDPR Cookie Consent Edge',
    tagline: 'Region-aware consent banner with audit receipts and auto-blocking',
    price: '$49',
    period: '/month',
    description: 'Deploy a lightweight consent banner with geo rules, consent receipts, automatic tag blocking, and policy page generator.',
    features: [
      'Geo rules (EEA/UK/US states)Consent receipts & exportsAuto-blocking for tagsPolicy page generatorA/B banner tests'
    ],
    popular: true,
    icon: '🍪',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/services/gdpr-cookie-consent-edge',
    marketPosition: 'CMP-lite for SMBs with transparent pricing and fast setup.',
    targetAudience: 'Marketing, legal, web teams',
    trialDays: 7,
    setupTime: '30 minutes',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Edge middleware, IAB TCF v2'],
    integrations: ['GTM, Segment, Google Tag'],
    useCases: ['Consent management, Policy pages, Audit logs'],
    roi: 'Accelerate compliance and reduce legal risk',
    competitors: ['Cookiebot, OneTrust'],
    marketSize: '$2B privacy tooling',
    growthRate: '18% YoY',
    variant: 'security-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'gdpr-cookie-consent-edge', _name: 'GDPR Cookie Consent Edge', _tagline: 'Region-aware consent banner with audit receipts and auto-blocking', _price: '$49', _period: '/month', _description: 'Deploy a lightweight consent banner with geo rules, _consent receipts, _automatic tag blocking, _and policy page generator.', _features: [
      'Geo rules (EEA/UK/US states)', _'Consent receipts & exports', _'Auto-blocking for tags', _'Policy page generator', _'A/B banner tests'
    ], _popular: true, _icon: '🍪', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-300', _link: 'https://ziontechgroup.com/services/gdpr-cookie-consent-edge', _marketPosition: 'CMP-lite for SMBs with transparent pricing and fast setup.', _targetAudience: 'Marketing, _legal, _web teams', _trialDays: 7, _setupTime: '30 minutes', _category: 'Security & Compliance', _realService: true, _technology: ['Edge middleware, _IAB TCF v2'], _integrations: ['GTM, _Segment, _Google Tag'], _useCases: ['Consent management, _Policy pages, _Audit logs'], _roi: 'Accelerate compliance and reduce legal risk', _competitors: ['Cookiebot, _OneTrust'], _marketSize: '$2B privacy tooling', _growthRate: '18% YoY', _variant: 'security-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Banner + middleware policy, receipts store, export jobs.',
    launchDate: '2025-02-18',
    customers: 27,
    rating: 4.6,
    reviews: 12
  },
<<<<<<< HEAD
  {
    id: 'smart-web-scraper-hub',
    name: 'Smart Web Scraper Hub',
    tagline: 'Rotate, render, and extract with compliance guards and queues',
    price: '$89',
    period: '/month',
    description: 'Render JS pages, rotate IPs, manage robots/politeness, and extract structured data to warehouses with retries and dedupe.',
    features: [
      'Headless rendering & queuesIP rotation and backoffRobots/politeness guardsDeduplication and diffsWarehouse exports'
    ],
    popular: false,
    icon: '🕸️',
    color: 'from-slate-600 to-slate-800',
    textColor: 'text-slate-300',
    link: 'https://ziontechgroup.com/services/smart-web-scraper-hub',
    marketPosition: 'Developer-first scraping with operational guardrails.',
    targetAudience: 'Data engineering, growth, research',
    trialDays: 14,
    setupTime: '2 hours',
    category: 'Developer Tools',
    realService: true,
    technology: ['Playwright, Queues, Proxies'],
    integrations: ['S3, BigQuery, Postgres'],
    useCases: ['Competitive intel, Price tracking, Research datasets'],
    roi: 'Automate scraping while reducing ban rate and toil',
    competitors: ['ScraperAPI, Bright Data'],
    marketSize: '$1.5B data collection',
    growthRate: '20% YoY',
    variant: 'data-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'smart-web-scraper-hub', _name: 'Smart Web Scraper Hub', _tagline: 'Rotate, _render, _and extract with compliance guards and queues', _price: '$89', _period: '/month', _description: 'Render JS pages, _rotate IPs, _manage robots/politeness, _and extract structured data to warehouses with retries and dedupe.', _features: [
      'Headless rendering & queues', _'IP rotation and backoff', _'Robots/politeness guards', _'Deduplication and diffs', _'Warehouse exports'
    ], _popular: false, _icon: '🕸️', _color: 'from-slate-600 to-slate-800', _textColor: 'text-slate-300', _link: 'https://ziontechgroup.com/services/smart-web-scraper-hub', _marketPosition: 'Developer-first scraping with operational guardrails.', _targetAudience: 'Data engineering, _growth, _research', _trialDays: 14, _setupTime: '2 hours', _category: 'Developer Tools', _realService: true, _technology: ['Playwright, _Queues, _Proxies'], _integrations: ['S3, _BigQuery, _Postgres'], _useCases: ['Competitive intel, _Price tracking, _Research datasets'], _roi: 'Automate scraping while reducing ban rate and toil', _competitors: ['ScraperAPI, _Bright Data'], _marketSize: '$1.5B data collection', _growthRate: '20% YoY', _variant: 'data-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Worker pools, proxy rotation, rate-limiters, extractors, exporters.',
    launchDate: '2025-02-22',
    customers: 10,
    rating: 4.4,
    reviews: 5
  }
  ,
<<<<<<< HEAD
  {
    id: 'ecommerce-returns-manager',
    name: 'E‑commerce Returns Manager',
    tagline: 'Automate RMAs, labels, and refund workflows for Shopify/Woo',
    price: '$149',
    period: '/month',
    description: 'End‑to‑end returns and exchanges portal with automated label generation, status tracking, disposition rules, and reasons analytics across Shopify and WooCommerce.',
    features: [
      'Self‑serve returns portalLabel generation and trackingExchange/repair workflowsReturn reasons and defect analyticsEmail/SMS notificationsWarehouse and RMA integrations'
    ],
    popular: true,
    icon: '📦',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/ecommerce-returns-manager',
    marketPosition: 'Streamlined alternative to Loop/Returnly with clearer analytics and flexible policies.',
    targetAudience: 'DTC brands and marketplaces',
    trialDays: 14,
    setupTime: '1–3 days',
    category: 'E‑commerce',
    realService: true,
    technology: ['ShopifyWooCommerceStripeShippo'],
    integrations: ['ShopifyWooCommerceShippoUPS/FedEx'],
    useCases: ['Reduce refundsIncrease exchangesShorten RMA cycle'],
    roi: 'Reduce return handling time by 40% and logistics costs by 10–20%.',
    competitors: ['LoopReturnlyHappy Returns'],
    marketSize: '$9B returns tech',
    growthRate: '18% YoY',
    variant: 'growth-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'ecommerce-returns-manager', _name: 'E‑commerce Returns Manager', _tagline: 'Automate RMAs, _labels, _and refund workflows for Shopify/Woo', _price: '$149', _period: '/month', _description: 'End‑to‑end returns and exchanges portal with automated label generation, _status tracking, _disposition rules, _and reasons analytics across Shopify and WooCommerce.', _features: [
      'Self‑serve returns portal', _'Label generation and tracking', _'Exchange/repair workflows', _'Return reasons and defect analytics', _'Email/SMS notifications', _'Warehouse and RMA integrations'
    ], _popular: true, _icon: '📦', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-300', _link: 'https://ziontechgroup.com/ecommerce-returns-manager', _marketPosition: 'Streamlined alternative to Loop/Returnly with clearer analytics and flexible policies.', _targetAudience: 'DTC brands and marketplaces', _trialDays: 14, _setupTime: '1–3 days', _category: 'E‑commerce', _realService: true, _technology: ['Shopify', _'WooCommerce', _'Stripe', _'Shippo'], _integrations: ['Shopify', _'WooCommerce', _'Shippo', _'UPS/FedEx'], _useCases: ['Reduce refunds', _'Increase exchanges', _'Shorten RMA cycle'], _roi: 'Reduce return handling time by 40% and logistics costs by 10–20%.', _competitors: ['Loop', _'Returnly', _'Happy Returns'], _marketSize: '$9B returns tech', _growthRate: '18% YoY', _variant: 'growth-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Embedded portal, label API wiring, policy engine and analytics.',
    launchDate: '2025-02-08',
    customers: 52,
    rating: 4.6,
    reviews: 24
  },
<<<<<<< HEAD
  {
    id: 'automated-email-followups',
    name: 'Automated Email Follow‑ups',
    tagline: 'Sequenced follow‑ups with inbox rotation and reply detection',
    price: '$79',
    period: '/month',
    description: 'Create multi‑step follow‑up sequences for leads and customers with reply/booking detection, throttling, and deliverability insights.',
    features: [
      'Sequence builder and templatesReply/booking detection and stopsInbox rotation and throttlingA/B testing for subject linesWarmup and reputation checksCRM sync and webhooks'
    ],
    popular: true,
    icon: '📨',
    color: 'from-sky-600 to-indigo-700',
    textColor: 'text-sky-300',
    link: 'https://ziontechgroup.com/automated-email-followups',
    marketPosition: 'Simpler and more compliant than heavy sales engagement suites for SMBs.',
    targetAudience: 'SMB sales and success teams',
    trialDays: 7,
    setupTime: '1 day',
    category: 'Growth & Marketing',
    realService: true,
    technology: ['Next.jsIMAP/SMTPCalendars'],
    integrations: ['HubSpotPipedriveGoogle/Outlook'],
    useCases: ['Lead nurturingOnboarding nudgesRenewal reminders'],
    roi: 'Lift reply rates by 15–35% and shorten sales cycles.',
    competitors: ['MailshakeLemlistApollo'],
    marketSize: '$6B sales engagement',
    growthRate: '20% YoY',
    variant: 'growth-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'automated-email-followups', _name: 'Automated Email Follow‑ups', _tagline: 'Sequenced follow‑ups with inbox rotation and reply detection', _price: '$79', _period: '/month', _description: 'Create multi‑step follow‑up sequences for leads and customers with reply/booking detection, _throttling, _and deliverability insights.', _features: [
      'Sequence builder and templates', _'Reply/booking detection and stops', _'Inbox rotation and throttling', _'A/B testing for subject lines', _'Warmup and reputation checks', _'CRM sync and webhooks'
    ], _popular: true, _icon: '📨', _color: 'from-sky-600 to-indigo-700', _textColor: 'text-sky-300', _link: 'https://ziontechgroup.com/automated-email-followups', _marketPosition: 'Simpler and more compliant than heavy sales engagement suites for SMBs.', _targetAudience: 'SMB sales and success teams', _trialDays: 7, _setupTime: '1 day', _category: 'Growth & Marketing', _realService: true, _technology: ['Next.js', _'IMAP/SMTP', _'Calendars'], _integrations: ['HubSpot', _'Pipedrive', _'Google/Outlook'], _useCases: ['Lead nurturing', _'Onboarding nudges', _'Renewal reminders'], _roi: 'Lift reply rates by 15–35% and shorten sales cycles.', _competitors: ['Mailshake', _'Lemlist', _'Apollo'], _marketSize: '$6B sales engagement', _growthRate: '20% YoY', _variant: 'growth-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Sequence engine, deliverability checks, reply webhooks.',
    launchDate: '2025-02-06',
    customers: 78,
    rating: 4.5,
    reviews: 33
  },
<<<<<<< HEAD
  {
    id: 'podcast-transcribe-chapters',
    name: 'Podcast Transcribe & Chapters',
    tagline: 'Accurate transcripts, speakers, summaries, chapters and clips',
    price: '$49',
    period: '/month',
    description: 'Upload episodes to get fast transcripts with speaker diarization, show notes, highlights, SEO chapters, and short social clips.',
    features: [
      'High‑accuracy transcriptionSpeaker diarizationSummaries and chapteringTopic and keyword extractionClip generator for socialEmbeds and RSS sync'
    ],
    popular: true,
    icon: '🎙️',
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-300',
    link: 'https://ziontechgroup.com/podcast-transcribe-chapters',
    marketPosition: 'Affordable alternative to Descript/Castmagic focused on speed and SEO.',
    targetAudience: 'Podcasters and media teams',
    trialDays: 7,
    setupTime: 'Same day',
    category: 'Creator Tools',
    realService: true,
    technology: ['ASRNLPFFmpeg'],
    integrations: ['Spotify for PodcastersBuzzsproutRiverside'],
    useCases: ['SEO, accessibility, repurposing clips'],
    roi: 'Cut post‑production time by 50–70% and improve SEO traffic.',
    competitors: ['DescriptCastmagicCapsho'],
    marketSize: '$2B podcast tooling',
    growthRate: '19% YoY',
    variant: 'ai-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'podcast-transcribe-chapters', _name: 'Podcast Transcribe & Chapters', _tagline: 'Accurate transcripts, _speakers, _summaries, _chapters and clips', _price: '$49', _period: '/month', _description: 'Upload episodes to get fast transcripts with speaker diarization, _show notes, _highlights, _SEO chapters, _and short social clips.', _features: [
      'High‑accuracy transcription', _'Speaker diarization', _'Summaries and chaptering', _'Topic and keyword extraction', _'Clip generator for social', _'Embeds and RSS sync'
    ], _popular: true, _icon: '🎙️', _color: 'from-purple-600 to-indigo-700', _textColor: 'text-purple-300', _link: 'https://ziontechgroup.com/podcast-transcribe-chapters', _marketPosition: 'Affordable alternative to Descript/Castmagic focused on speed and SEO.', _targetAudience: 'Podcasters and media teams', _trialDays: 7, _setupTime: 'Same day', _category: 'Creator Tools', _realService: true, _technology: ['ASR', _'NLP', _'FFmpeg'], _integrations: ['Spotify for Podcasters', _'Buzzsprout', _'Riverside'], _useCases: ['SEO, _accessibility, _repurposing clips'], _roi: 'Cut post‑production time by 50–70% and improve SEO traffic.', _competitors: ['Descript', _'Castmagic', _'Capsho'], _marketSize: '$2B podcast tooling', _growthRate: '19% YoY', _variant: 'ai-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Batch ASR, diarization, topic modeling, clip renderers.',
    launchDate: '2025-02-02',
    customers: 140,
    rating: 4.7,
    reviews: 58
  },
<<<<<<< HEAD
  {
    id: 'freelancer-portfolio-studio',
    name: 'Freelancer Portfolio Studio',
    tagline: 'Stunning portfolios and case studies with leads tracking',
    price: '$19',
    period: '/month',
    description: 'No‑code portfolio builder with industry templates, project pages, lead capture forms, and simple SEO for freelancers and agencies.',
    features: [
      'Drag‑and‑drop templatesCase study generatorContact and booking formsTestimonials and logosBasic SEO and analyticsCustom domains'
    ],
    popular: false,
    icon: '🖼️',
    color: 'from-pink-600 to-fuchsia-700',
    textColor: 'text-pink-200',
    link: 'https://ziontechgroup.com/freelancer-portfolio-studio',
    marketPosition: 'Purpose‑built, simpler than generic site builders for portfolios.',
    targetAudience: 'Freelancers and micro‑agencies',
    trialDays: 14,
    setupTime: '15 minutes',
    category: 'Creator Tools',
    realService: true,
    technology: ['Next.jsFormsSEO'],
    integrations: ['CalendlyHubSpotGA4'],
    useCases: ['Showcase workCapture leadsBook meetings'],
    roi: 'Increase inbound leads by 10–25% with polished case studies.',
    competitors: ['WebflowSquarespaceWix'],
    marketSize: '$4B creator sites',
    growthRate: '11% YoY',
    variant: 'growth-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'freelancer-portfolio-studio', _name: 'Freelancer Portfolio Studio', _tagline: 'Stunning portfolios and case studies with leads tracking', _price: '$19', _period: '/month', _description: 'No‑code portfolio builder with industry templates, _project pages, _lead capture forms, _and simple SEO for freelancers and agencies.', _features: [
      'Drag‑and‑drop templates', _'Case study generator', _'Contact and booking forms', _'Testimonials and logos', _'Basic SEO and analytics', _'Custom domains'
    ], _popular: false, _icon: '🖼️', _color: 'from-pink-600 to-fuchsia-700', _textColor: 'text-pink-200', _link: 'https://ziontechgroup.com/freelancer-portfolio-studio', _marketPosition: 'Purpose‑built, _simpler than generic site builders for portfolios.', _targetAudience: 'Freelancers and micro‑agencies', _trialDays: 14, _setupTime: '15 minutes', _category: 'Creator Tools', _realService: true, _technology: ['Next.js', _'Forms', _'SEO'], _integrations: ['Calendly', _'HubSpot', _'GA4'], _useCases: ['Showcase work', _'Capture leads', _'Book meetings'], _roi: 'Increase inbound leads by 10–25% with polished case studies.', _competitors: ['Webflow', _'Squarespace', _'Wix'], _marketSize: '$4B creator sites', _growthRate: '11% YoY', _variant: 'growth-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Template presets, CMS‑like editing, lead capture widgets.',
    launchDate: '2025-02-04',
    customers: 210,
    rating: 4.6,
    reviews: 64
  },
<<<<<<< HEAD
  {
    id: 'local-micro-crm',
    name: 'Local Micro CRM',
    tagline: 'Simple contacts, reminders, and pipeline for small shops',
    price: '$15',
    period: '/month',
    description: 'Lightweight CRM for local businesses: contacts, notes, tasks, reminders, pipeline stages, and SMS/email nudges.',
    features: [
      'Contacts and notesReminders and tasksSimple pipeline stagesEmail/SMS nudgesImport/export and tagsMobile‑friendly UI'
    ],
    popular: true,
    icon: '📇',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/local-micro-crm',
    marketPosition: 'Tooled for simplicity, avoids enterprise CRM bloat and costs.',
    targetAudience: 'Local service businesses',
    trialDays: 14,
    setupTime: 'Same day',
    category: 'CRM',
    realService: true,
    technology: ['Next.jsSQLite/Postgres'],
    integrations: ['Gmail/OutlookTwilio'],
    useCases: ['Track customersFollow‑upsClose more deals'],
    roi: 'Reduce no‑shows and lost leads, +10–20% revenue lift.',
    competitors: ['HubSpot StarterPipedrive Essentials'],
    marketSize: '$20B SMB CRM',
    growthRate: '10% YoY',
    variant: 'analytics-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'local-micro-crm', _name: 'Local Micro CRM', _tagline: 'Simple contacts, _reminders, _and pipeline for small shops', _price: '$15', _period: '/month', _description: 'Lightweight CRM for local businesses: contacts, _notes, _tasks, _reminders, _pipeline stages, _and SMS/email nudges.', _features: [
      'Contacts and notes', _'Reminders and tasks', _'Simple pipeline stages', _'Email/SMS nudges', _'Import/export and tags', _'Mobile‑friendly UI'
    ], _popular: true, _icon: '📇', _color: 'from-amber-600 to-orange-700', _textColor: 'text-amber-300', _link: 'https://ziontechgroup.com/local-micro-crm', _marketPosition: 'Tooled for simplicity; avoids enterprise CRM bloat and costs.', _targetAudience: 'Local service businesses', _trialDays: 14, _setupTime: 'Same day', _category: 'CRM', _realService: true, _technology: ['Next.js', _'SQLite/Postgres'], _integrations: ['Gmail/Outlook', _'Twilio'], _useCases: ['Track customers', _'Follow‑ups', _'Close more deals'], _roi: 'Reduce no‑shows and lost leads; +10–20% revenue lift.', _competitors: ['HubSpot Starter', _'Pipedrive Essentials'], _marketSize: '$20B SMB CRM', _growthRate: '10% YoY', _variant: 'analytics-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Minimal CRM with reminders and basic pipeline views.',
    launchDate: '2025-02-03',
    customers: 320,
    rating: 4.5,
    reviews: 77
  },
<<<<<<< HEAD
  {
    id: 'subjectline-optimizer-ai',
    name: 'Subject Line Optimizer AI',
    tagline: 'Generate and score email subjects with live benchmarks',
    price: '$29',
    period: '/month',
    description: 'Create and score subject lines using language models and historical performance data, export to ESPs and run quick A/B tests.',
    features: [
      'AI suggestions and variantsTone and length tuningPerformance benchmarksESP export and A/B testsSpam words and previewTeam review workflow'
    ],
    popular: false,
    icon: '🧪',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/subjectline-optimizer-ai',
    marketPosition: 'Focused assistant vs. general copy tools, fast iteration for marketers.',
    targetAudience: 'Growth and lifecycle marketers',
    trialDays: 7,
    setupTime: 'Same day',
    category: 'AI & Marketing',
    realService: true,
    technology: ['NLP/LLMESP APIs'],
    integrations: ['MailchimpKlaviyoSendGrid'],
    useCases: ['Boost open ratesFaster copy iteration'],
    roi: 'Improve opens by 5–15% and reduce time‑to‑send.',
    competitors: ['Copy.aiJasperHeadline analyzers'],
    marketSize: '$3B marketing AI',
    growthRate: '24% YoY',
    variant: 'ai-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'subjectline-optimizer-ai', _name: 'Subject Line Optimizer AI', _tagline: 'Generate and score email subjects with live benchmarks', _price: '$29', _period: '/month', _description: 'Create and score subject lines using language models and historical performance data; export to ESPs and run quick A/B tests.', _features: [
      'AI suggestions and variants', _'Tone and length tuning', _'Performance benchmarks', _'ESP export and A/B tests', _'Spam words and preview', _'Team review workflow'
    ], _popular: false, _icon: '🧪', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: 'https://ziontechgroup.com/subjectline-optimizer-ai', _marketPosition: 'Focused assistant vs. general copy tools; fast iteration for marketers.', _targetAudience: 'Growth and lifecycle marketers', _trialDays: 7, _setupTime: 'Same day', _category: 'AI & Marketing', _realService: true, _technology: ['NLP/LLM', _'ESP APIs'], _integrations: ['Mailchimp', _'Klaviyo', _'SendGrid'], _useCases: ['Boost open rates', _'Faster copy iteration'], _roi: 'Improve opens by 5–15% and reduce time‑to‑send.', _competitors: ['Copy.ai', _'Jasper', _'Headline analyzers'], _marketSize: '$3B marketing AI', _growthRate: '24% YoY', _variant: 'ai-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Prompting templates, scoring heuristics, and ESP exports.',
    launchDate: '2025-02-07',
    customers: 95,
    rating: 4.4,
    reviews: 28
  },
<<<<<<< HEAD
  {
    id: 'dev-workflow-analytics',
    name: 'Developer Workflow Analytics',
    tagline: 'Visualize reviews, velocity, and bottlenecks across repos',
    price: '$199',
    period: '/month',
    description: 'Ingest PRs, reviews, and CI to map cycle time, review quality, flaky tests, and hotspots with actionable recommendations.',
    features: [
      'Cycle time and WIP analysisReview depth and latencyFlaky test detectionRepo hotspots and ownershipTeam scorecards and alertsJira/Linear linkage'
    ],
    popular: true,
    icon: '🧩',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/dev-workflow-analytics',
    marketPosition: 'Actionable insights without surveillance, focused on flow metrics.',
    targetAudience: 'Engineering teams and platform leads',
    trialDays: 14,
    setupTime: '3 days',
    category: 'Dev Productivity',
    realService: true,
    technology: ['GitHub/GitLab APIsCI logs'],
    integrations: ['GitHubGitLabJiraLinear'],
    useCases: ['Improve code reviewReduce cycle timeStabilize CI'],
    roi: 'Shorten cycle time by 10–25% and cut flaky tests.',
    competitors: ['LinearBSwarmiaVelocity'],
    marketSize: '$5B dev analytics',
    growthRate: '21% YoY',
    variant: 'analytics-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'dev-workflow-analytics', _name: 'Developer Workflow Analytics', _tagline: 'Visualize reviews, _velocity, _and bottlenecks across repos', _price: '$199', _period: '/month', _description: 'Ingest PRs, _reviews, _and CI to map cycle time, _review quality, _flaky tests, _and hotspots with actionable recommendations.', _features: [
      'Cycle time and WIP analysis', _'Review depth and latency', _'Flaky test detection', _'Repo hotspots and ownership', _'Team scorecards and alerts', _'Jira/Linear linkage'
    ], _popular: true, _icon: '🧩', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-300', _link: 'https://ziontechgroup.com/dev-workflow-analytics', _marketPosition: 'Actionable insights without surveillance; focused on flow metrics.', _targetAudience: 'Engineering teams and platform leads', _trialDays: 14, _setupTime: '3 days', _category: 'Dev Productivity', _realService: true, _technology: ['GitHub/GitLab APIs', _'CI logs'], _integrations: ['GitHub', _'GitLab', _'Jira', _'Linear'], _useCases: ['Improve code review', _'Reduce cycle time', _'Stabilize CI'], _roi: 'Shorten cycle time by 10–25% and cut flaky tests.', _competitors: ['LinearB', _'Swarmia', _'Velocity'], _marketSize: '$5B dev analytics', _growthRate: '21% YoY', _variant: 'analytics-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Ingestion workers, metrics engine, dashboard and alerts.',
    launchDate: '2025-02-09',
    customers: 44,
    rating: 4.6,
    reviews: 19
  },
<<<<<<< HEAD
  {
    id: 'privacy-consent-manager-smb',
    name: 'Privacy & Consent Manager (SMB)',
    tagline: 'GDPR/CCPA banners, consent logs, DSAR intake and records',
    price: '$49',
    period: '/month',
    description: 'Compliant consent banners, preference center, DSAR intake, and consent logs with exports and region rules.',
    features: [
      'Geo/rule‑based bannersPreference centerDSAR intake and workflowsCookie catalog and scansConsent logs and exportsMulti‑site management'
    ],
    popular: true,
    icon: '⚖️',
    color: 'from-slate-700 to-slate-900',
    textColor: 'text-slate-200',
    link: 'https://ziontechgroup.com/privacy-consent-manager',
    marketPosition: 'Simpler pricing vs OneTrust, ideal for SMB and startups.',
    targetAudience: 'SMBs and startups',
    trialDays: 14,
    setupTime: 'Same day',
    category: 'Security & Compliance',
    realService: true,
    technology: ['Next.jsEdge rules'],
    integrations: ['GTMSegmentTag managers'],
    useCases: ['Cookie complianceConsent recordsDSAR intake'],
    roi: 'Faster compliance and fewer legal risks.',
    competitors: ['OneTrustCookieYesDidomi'],
    marketSize: '$3B privacy tech',
    growthRate: '16% YoY',
    variant: 'security-futuristic' as any,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
=======
  {_id: 'privacy-consent-manager-smb', _name: 'Privacy & Consent Manager (SMB)', _tagline: 'GDPR/CCPA banners, _consent logs, _DSAR intake and records', _price: '$49', _period: '/month', _description: 'Compliant consent banners, _preference center, _DSAR intake, _and consent logs with exports and region rules.', _features: [
      'Geo/rule‑based banners', _'Preference center', _'DSAR intake and workflows', _'Cookie catalog and scans', _'Consent logs and exports', _'Multi‑site management'
    ], _popular: true, _icon: '⚖️', _color: 'from-slate-700 to-slate-900', _textColor: 'text-slate-200', _link: 'https://ziontechgroup.com/privacy-consent-manager', _marketPosition: 'Simpler pricing vs OneTrust; ideal for SMB and startups.', _targetAudience: 'SMBs and startups', _trialDays: 14, _setupTime: 'Same day', _category: 'Security & Compliance', _realService: true, _technology: ['Next.js', _'Edge rules'], _integrations: ['GTM', _'Segment', _'Tag managers'], _useCases: ['Cookie compliance', _'Consent records', _'DSAR intake'], _roi: 'Faster compliance and fewer legal risks.', _competitors: ['OneTrust', _'CookieYes', _'Didomi'], _marketSize: '$3B privacy tech', _growthRate: '16% YoY', _variant: 'security-futuristic' as any, _contactInfo: {
      mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    realImplementation: true,
    implementationDetails: 'Region rules, consent logging, banner/prefs widgets.',
    launchDate: '2025-02-01',
    customers: 88,
    rating: 4.6,
    reviews: 36
  }
],