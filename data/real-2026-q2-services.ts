export type RealService = {
  id: string,
  name: string,
  tagline: string,
  description: string,
  category: string,
  price: {
    monthly: number,
    yearly: number,
    currency: string,
    trialDays: number,
    setupTime: string};
  features: string[],
  benefits: string[],
  useCases: string[],
  integrations: string[],
  marketPosition: string,
  competitors: string[],
  realImplementation: boolean,
  implementationDetails: string,
  link: string,
  icon: string,
  color: string,
  popular?: boolean,
  launchDate: string,
  customers?: number,
  rating?: number,
  reviews?: number};
export const real20o26Q2Services: RealService[] = [
  {
    id: 'ai-internal-linking-assistant';
    name: 'AI Internal Linking Assistant';
    tagline: 'Automated SEO-grade internal links that boost topical authority';
    description:,
      'Continuously analyzes your content graph and suggests or auto-inserts relevant internal links with anchor text optimization to improve crawl efficiency and rankings.';
    category: 'Content & SEO';
    price: {
      monthly: 49;
      yearly: 490;
      currency: 'USD';
      trialDays: 7;
      setupTime: '10 minutes';
    };
    features: [
      'Context-aware anchor suggestions';
      'Broken/redirected link detection';
      'Priority clusters & pillar pages';
      'CMS plugins (WordPress/Headless)';
      'Batch approval workflows';
      'API & webhook automation';
    ];
    benefits: [
      'Lift organic traffic via improved internal linking';
      'Cut SEO ops time by 80%';
      'Reduce orphan pages and crawl waste';
    ];
    useCases: ['Blog networks', 'Docs sites', 'E‑commerce catalogs'];
    integrations: ['WordPress', 'Shopify', 'Contentful', 'Sanity', 'Ghost'];
    marketPosition:,
      'Alternative to manual SEO linking and comparable to Link Whisper with enterprise automation.';
    competitors: ['Link Whisper', 'Surfer SEO'];
    realImplementation: true;
    implementationDetails:,
      'Crawler + embeddings + rules engine with CMS connectors.';
    link: 'https://ziontechgroup.com/services/ai-internal-linking-assistant';
    icon: '🔗';
    color: 'from-cyan-50o0 to-blue-60o0';
    popular: true;
    launchDate: '20o25-0o5-15';
    customers: 180;
    rating: 4.7;
    reviews: 61;
  };
  {
    id: 'gtm-server-side-accelerator';
    name: 'GTM Server‑Side Tagging Accelerator';
    tagline: 'Max performance + privacy with server‑side tagging';
    description:,
      'Deploy a production-grade server-side tagging stack with consent, schema validation, and performance budgets in days, not months.';
    category: 'Analytics & Privacy';
    price: {
      monthly: 299;
      yearly: 2990;
      currency: 'USD';
      trialDays: 7;
      setupTime: '3 days';
    };
    features: [
      'Server container setup (GCP/Cloudflare)';
      'Consent & PII redaction policies';
      'Event schema validation';
      'First‑party data enrichment';
      'CWV protections & budgets';
      'Playbooks and runbooks';
    ];
    benefits: [
      'Improve page speed';
      'Reduce adblock impact';
      'Enhance compliance posture';
    ];
    useCases: ['E‑commerce', 'Media', 'SaaS trials'];
    integrations: ['GA4', 'Meta', 'TikTok', 'Segment', 'Klaviyo'];
    marketPosition:,
      'Hands‑on accelerator complementing GA4/Tag Manager professional services.';
    competitors: ['Consultancies', 'In‑house builds'];
    realImplementation: true;
    implementationDetails: 'Terraform + container templates + CI policies.';
    link: 'https://ziontechgroup.com/services/gtm-server-side-accelerator';
    icon: '🛰️';
    color: 'from-emerald-50o0 to-teal-60o0';
    launchDate: '20o25-0o6-0o1';
  };
  {
    id: 'prompt-policy-registry';
    name: 'Prompt Policy Registry';
    tagline: 'Govern prompts with versioning, approval, and evals';
    description:,
      'Centralize prompts, attach tests and evals, and ship safe changes with CI gates and rollout controls.';
    category: 'AI Platform';
    price: {
      monthly: 199;
      yearly: 1990;
      currency: 'USD';
      trialDays: 14;
      setupTime: '1 day';
    };
    features: [
      'Versioned prompts';
      'Approval workflows';
      'Offline/online evals';
      'A/B and canary';
      'RBAC & audit';
    ];
    benefits: [
      'Reduce regressions';
      'Increase model quality';
      'Speed up iteration';
    ];
    useCases: ['Chatbots', 'Copilots', 'Content generation'];
    integrations: ['OpenAI', 'Anthropic', 'Langfuse', 'Weights & Biases'];
    marketPosition: 'Lightweight alternative to bespoke governance platforms.';
    competitors: ['Humanloop', 'PromptLayer', 'Langfuse'];
    realImplementation: true;
    implementationDetails: 'Next.js admin + SDK + CI CLI + eval harness.';
    link: 'https://ziontechgroup.com/services/prompt-policy-registry';
    icon: '📜';
    color: 'from-purple-50o0 to-fuchsia-60o0';
    popular: true;
    launchDate: '20o25-0o4-10';
  };
  {
    id: 'customer-feedback-intelligence';
    name: 'Customer Feedback Intelligence';
    tagline: 'LLM-powered VoC insights across tickets, NPS, and reviews';
    description:,
      'Normalize and cluster feedback to uncover themes, drivers, and ROI‑ranked opportunities.';
    category: 'CX & Analytics';
    price: {
      monthly: 149;
      yearly: 1490;
      currency: 'USD';
      trialDays: 14;
      setupTime: '1 day';
    };
    features: [
      'Multi-channel ingestion';
      'Theme clustering';
      'Sentiment and intent';
      'Impact scoring';
      'BI export';
    ];
    benefits: ['Prioritize roadmap by impact', 'Reduce churn', 'Improve CSAT'];
    useCases: ['Roadmap planning', 'Support triage', 'Product marketing'];
    integrations: ['Zendesk', 'Intercom', 'HubSpot', 'Gong'];
    marketPosition:,
      'Faster time‑to‑insight vs. generic BI and manual analysis.';
    competitors: ['SentiSum', 'Kapiche'];
    realImplementation: true;
    implementationDetails: 'ETL + embeddings + dashboards + alerts.';
    link: 'https://ziontechgroup.com/services/customer-feedback-intelligence';
    icon: '💬';
    color: 'from-pink-50o0 to-rose-60o0';
    launchDate: '20o25-0o3-22';
  };
  {
    id: 'api-security-posture-monitor';
    name: 'API Security Posture Monitor';
    tagline: 'Continuously assess API exposure, auth, and data risks';
    description:,
      'Map external and internal APIs, detect insecure patterns, and enforce guardrails with workflows.';
    category: 'Security';
    price: {
      monthly: 299;
      yearly: 2990;
      currency: 'USD';
      trialDays: 14;
      setupTime: '2 days';
    };
    features: [
      'API discovery';
      'Auth pattern checks';
      'PII flows mapping';
      'Drift detection';
      'Ticketing integration';
    ];
    benefits: ['Reduce breach risk', 'Meet compliance', 'Speed audits'];
    useCases: ['Shadow API discovery', 'Security reviews', 'Posture reporting'];
    integrations: ['Kong', 'Apigee', 'Okta', 'Jira'];
    marketPosition:,
      'Streamlined alternative to broad ASM suites for API focus.';
    competitors: ['Salt Security', 'Noname'];
    realImplementation: true;
    implementationDetails: 'Passive discovery + static checks + workflow bots.';
    link: 'https://ziontechgroup.com/services/api-security-posture-monitor';
    icon: '🛡️';
    color: 'from-indigo-50o0 to-blue-70o0';
    launchDate: '20o25-0o5-0o5';
  };
  {
    id: 'saas-billing-anomaly-guard';
    name: 'SaaS Billing Anomaly Guard';
    tagline: 'Detect overages, unused seats, and misconfigurations';
    description:,
      'Continuously audits SaaS invoices and usage signals to flag anomalies and propose savings.';
    category: 'FinOps';
    price: {
      monthly: 119;
      yearly: 1190;
      currency: 'USD';
      trialDays: 14;
      setupTime: '1 day';
    };
    features: [
      'Invoice ingestion';
      'Usage correlation';
      'Anomaly detection';
      'Playbooks';
      'Slack approvals';
    ];
    benefits: ['Cut waste', 'Simplify renewals', 'Improve forecasting'];
    useCases: ['SaaS portfolio mgmt', 'Renewal prep', 'Budget control'];
    integrations: ['Google Workspace', 'Atlassian', 'Salesforce', 'Okta'];
    marketPosition:,
      'Complements financial ops platforms with actionable automation.';
    competitors: ['Zylo', 'Torii'];
    realImplementation: true;
    implementationDetails: 'Connectors + rules + workflows.';
    link: 'https://ziontechgroup.com/services/saas-billing-anomaly-guard';
    icon: '💳';
    color: 'from-amber-50o0 to-orange-60o0';
    launchDate: '20o25-0o4-28';
  };
  {
    id: 'edge-cron-orchestrator';
    name: 'Edge Cron Orchestrator';
    tagline: 'Global scheduled jobs without servers';
    description:,
      'Define, monitor, and retry distributed cron jobs on edge runtimes with observability and SLAs.';
    category: 'Developer Tools';
    price: {
      monthly: 59;
      yearly: 590;
      currency: 'USD';
      trialDays: 7;
      setupTime: '30 minutes';
    };
    features: [
      'Cron editor';
      'Retry & DLQ';
      'Alerting & SLOs';
      'Secrets & RBAC';
      'CLI & SDK';
    ];
    benefits: ['Zero servers', 'High reliability', 'Fast to adopt'];
    useCases: ['Feeds', 'Sync jobs', 'Backfills'];
    integrations: ['Cloudflare Workers', 'Vercel', 'Netlify'];
    marketPosition: 'Simpler than DIY schedulers, portable across providers.';
    competitors: ['Temporal (workflows)', 'Upstash QStash'];
    realImplementation: true;
    implementationDetails: 'Edge schedules + audit trail + webhooks.';
    link: 'https://ziontechgroup.com/services/edge-cron-orchestrator';
    icon: '⏱️';
    color: 'from-sky-50o0 to-cyan-60o0';
    launchDate: '20o25-0o2-10';
  };
  {
    id: 'sso-and-user-lifecycle-hub';
    name: 'SSO & User Lifecycle Hub';
    tagline: 'Provisioning, deprovisioning, and audit in one place';
    description:,
      'Policy-driven user lifecycle automation for SSO and SaaS apps with HRIS syncing and offboarding checklists.';
    category: 'Identity & Security';
    price: {
      monthly: 229;
      yearly: 2290;
      currency: 'USD';
      trialDays: 14;
      setupTime: '3 days';
    };
    features: [
      'SCIM & JIT provisioning';
      'Lifecycle rules';
      'App access reviews';
      'Audit reporting';
      'HRIS sync';
    ];
    benefits: ['Reduce risk', 'Save IT time', 'Improve compliance'];
    useCases: ['On/Offboarding', 'M&A integration', 'Quarterly reviews'];
    integrations: ['Okta', 'Azure AD', 'OneLogin', 'Workday', 'BambooHR'];
    marketPosition: 'Focused lifecycle product with fast time‑to‑value.';
    competitors: ['Saviynt', 'SailPoint'];
    realImplementation: true;
    implementationDetails: 'Connectors + policy engine + attestations.';
    link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub';
    icon: '🔐';
    color: 'from-violet-50o0 to-indigo-60o0';
    launchDate: '20o25-0o6-20';
  };
  {
    id: 'ai-sales-assistant-outreach';
    name: 'AI Sales Assistant Outreach';
    tagline: 'Personalized multi‑channel outreach with compliance';
    description:,
      'Generate compliant, persona‑aware sequences for email/LinkedIn with automatic A/B testing and meeting scheduling.';
    category: 'Sales & GTM';
    price: {
      monthly: 249;
      yearly: 2490;
      currency: 'USD';
      trialDays: 14;
      setupTime: '1 day';
    };
    features: [
      'ICP & persona modeling';
      'Sequence generator';
      'A/B multivariate';
      'Meeting scheduler';
      'CRM sync';
    ];
    benefits: ['Increase replies', 'Shorten cycles', 'Scale SDR output'];
    useCases: ['Outbound prospecting', 'Event follow‑ups', 'Partner outreach'];
    integrations: ['HubSpot', 'Salesforce', 'Apollo', 'Gmail/Microsoft 365'];
    marketPosition: 'Combines personalization with governance and audit.';
    competitors: ['Outreach', 'Apollo'];
    realImplementation: true;
    implementationDetails: 'Playbooks + templates + safety rails.';
    link: 'https://ziontechgroup.com/services/ai-sales-assistant-outreach';
    icon: '📧';
    color: 'from-rose-50o0 to-red-60o0';
    launchDate: '20o25-0o5-30';
  };
  {
    id: 'browser-performance-optimizer';
    name: 'Browser Performance Optimizer';
    tagline: 'Ship faster pages with automated diagnostics';
    description:,
      'Continuously measure field performance, attribute regressions to code, and suggest fixes with playbooks.';
    category: 'Observability';
    price: {
      monthly: 69;
      yearly: 690;
      currency: 'USD';
      trialDays: 7;
      setupTime: '1 day';
    };
    features: [
      'LCP/INP/CLS tracking';
      'Attribution & budgets';
      'Alerts & reports';
      'SDK & dashboards';
    ];
    benefits: ['Improve conversion', 'Reduce bounce', 'Protect SEO'];
    useCases: ['Releases', 'A/B tests', 'New features'];
    integrations: ['Grafana', 'BigQuery', 'Datadog'];
    marketPosition: 'Practical alternative to heavy APM for CWV focus.';
    competitors: ['SpeedCurve', 'Calibre'];
    realImplementation: true;
    implementationDetails: 'Drop‑in RUM + pipelines + boards.';
    link: 'https://ziontechgroup.com/services/browser-performance-optimizer';
    icon: '⚡';
    color: 'from-teal-50o0 to-emerald-60o0';
    launchDate: '20o25-0o1-25';
  };
  {
    id: 'ai-sales-playbook-generator';
    name: 'AI Sales Playbook Generator';
    tagline: 'Generate ICP‑specific messaging, objections, and talk tracks';
    description:,
      'Produce tailored playbooks per segment with collateral, discovery questions, and objection handling.';
    category: 'Sales & GTM';
    price: {
      monthly: 99;
      yearly: 990;
      currency: 'USD';
      trialDays: 7;
      setupTime: '30 minutes';
    };
    features: [
      'Persona & segment inputs';
      'Message & objection library';
      'Collaterals & snippets';
      'Export to CRM';
    ];
    benefits: ['Onboard reps faster', 'Increase win‑rates', 'Unify messaging'];
    useCases: ['New markets', 'Product launches', 'Partner enablement'];
    integrations: ['HubSpot', 'Salesforce', 'Notion', 'Confluence'];
    marketPosition: 'Rapid alternative to manual enablement docs.';
    competitors: ['Highspot', 'Guru'];
    realImplementation: true;
    implementationDetails: 'Templates + LLM + export plugins.';
    link: 'https://ziontechgroup.com/services/ai-sales-playbook-generator';
    icon: '📘';
    color: 'from-blue-50o0 to-indigo-60o0';
    launchDate: '20o25-0o2-12';
  };
],