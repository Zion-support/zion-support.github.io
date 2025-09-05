<<<<<<< HEAD
import { ServiceVariant } from '../types/service-variants',
export interface MarketValidatedService {
	id: string,
	name: string,
	tagline: string,
	price: string,
	period: string,
	description: string,
	features: string[],
	category: string,
	link: string,
	variant?: ServiceVariant,
	rating?: number,
	customers?: number,
	trialDays?: number,
	setupTime?: string,
	contactInfo: {
		mobile: string,
		email: string,
		address: string,
		website?: string
	}
}

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
},

export const marketValidatedServices: MarketValidatedService[] = [
	// AI and Assistants
	{
		id: 'ai-assistant-pro',
		name: 'AI Assistant Pro',
		tagline: 'Branded copilot with RAG, guardrails, and analytics',
		price: '$149',
		period: '/month',
		description: 'Deploy a secure, branded AI assistant that answers from your docs with citations, observes costs and latency, and hands off to humans when needed.',
		features: [
			'RAG over your docs with hybrid searchGuardrails: PII/PHI redaction, jailbreak detectionHuman handoff + conversation analyticsSlack/Teams/Widget channels'],
		category: 'AI & Assistants',
		link: 'https://ziontechgroup.com/ai-assistant',
		variant: 'ai-futuristic',
		rating: 4.8,
		customers: 1200,
		trialDays: 14,
		setupTime: '30 minutes',
		contactInfo
	},
	{
		id: 'ai-evals-observability',
		name: 'AI Evals & Observability',
		tagline: 'Regression testing, safety checks, and live metrics for LLM features',
		price: '$99',
		period: '/month',
		description: 'Ship reliable LLM apps with dataset management, prompt diffing, red-teaming, and production KPIs for quality, latency, and costs.',
		features: [
			'Eval datasets/versioningPolicy and toxicity checksLatency and cost KPIsPrompt/version diff and alerts'],
		category: 'AI & MLOps',
		link: 'https://ziontechgroup.com/ai-evals',
		variant: 'quantum-holographic',
		rating: 4.7,
		customers: 600,
		trialDays: 14,
		setupTime: '1 hour',
		contactInfo
	},
	{
		id: 'agentic-rag-platform',
		name: 'Agentic RAG Platform',
		tagline: 'Production RAG with hybrid search, chunking, tools, and evals',
		price: '$179',
		period: '/month',
		description: 'Ingest and index your knowledge with hybrid search + reranking, enable tool-using agents, and validate responses with reference checks and citations.',
		features: [
			'Hybrid vector+BM25 + rerankerChunking strategies + citationsToolformer-style agentsEval suite and drift monitoring'],
		category: 'AI & Search',
		link: 'https://ziontechgroup.com/agentic-rag',
		variant: 'quantum-matrix',
		rating: 4.7,
		customers: 900,
		trialDays: 14,
		setupTime: '2 hours',
		contactInfo
	},

	// Security and APIs
	{
		id: 'api-security-scanner',
		name: 'API Security Scanner',
		tagline: 'OpenAPI/GraphQL scanning, auth/Z checks, dependency audit',
		price: '$59',
		period: '/month',
		description: 'Automatically scan APIs for OWASP issues, auth/z misconfigurations, and dependency CVEs with CI gating and fix guidance.',
		features: ['Auth/Z misconfig checksOWASP Top 10 testsCI gateFix guidance'],
		category: 'Enterprise IT - Security',
		link: 'https://ziontechgroup.com/api-security-scanner',
		variant: 'cyberpunk',
		rating: 4.6,
		customers: 750,
		trialDays: 14,
		setupTime: '20 minutes',
		contactInfo
	},
	{
		id: 'api-observability',
		name: 'API Observability & SLA Guard',
		tagline: 'OTel tracing, SLOs, and error budgets for services',
		price: '$69',
		period: '/month',
		description: 'Collect traces/metrics/logs via OpenTelemetry, define SLOs and error budgets, and alert on burn rates with dashboards.',
		features: ['OTel traces/metrics/logsSLOs & error budgetsAlertingDashboards'],
		category: 'Enterprise IT - Observability',
		link: 'https://ziontechgroup.com/api-observability',
		variant: 'holographic',
		rating: 4.6,
		customers: 640,
		trialDays: 14,
		setupTime: '40 minutes',
		contactInfo
	},

	// Cloud and Infra
	{
		id: 'cloud-cost-optimizer-pro',
		name: 'Cloud Cost Optimizer Pro',
		tagline: 'Rightsizing, lifecycle, anomaly detection, and k8s bin-packing',
		price: '$99',
		period: '/month',
		description: 'Continuously optimize cloud spend with instance rightsizing, lifecycle policies, anomaly alerts, and container scheduling insights.',
		features: ['Auto rightsizingIdle cleanupSpot orchestrationAnomaly detection'],
		category: 'Enterprise IT - FinOps',
		link: 'https://ziontechgroup.com/cloud-cost-optimizer',
		variant: 'quantum',
		rating: 4.6,
		customers: 820,
		trialDays: 14,
		setupTime: '1 hour',
		contactInfo
	},
	{
		id: 'database-performance-monitor',
		name: 'Database Performance Monitor',
		tagline: 'Slow query capture, AI index suggestions, capacity forecasting',
		price: '$79',
		period: '/month',
		description: 'Postgres/MySQL performance insights with slow query ranking, AI tuning suggestions, pool sizing, and SLO dashboards.',
		features: ['Slow query rankingAI index advicePool tuningSLA/SLO dashboards'],
		category: 'Enterprise IT - Data',
		link: 'https://ziontechgroup.com/database-performance-monitor',
		variant: 'neural-quantum',
		rating: 4.7,
		customers: 560,
		trialDays: 14,
		setupTime: '45 minutes',
		contactInfo
	},
	{
		id: 'managed-postgres-ha',
		name: 'Managed Postgres HA',
		tagline: 'Highly-available Postgres with backups, failover, and guardrails',
		price: '$499',
		period: '/month',
		description: 'Production-ready Postgres with managed backups, automated failover, performance tuning, and compliance guardrails.',
		features: ['Automated backupsFailover & replicationPerformance tuningSLA & support'],
		category: 'Enterprise IT - Data',
		link: 'https://ziontechgroup.com/managed-postgres-ha',
		variant: 'holographic-advanced',
		rating: 4.8,
		customers: 240,
		trialDays: 7,
		setupTime: '1 day',
		contactInfo
	},

	// Reliability & Monitoring
	{
		id: 'uptime-slo-monitor',
		name: 'Uptime & SLO Monitor',
		tagline: 'Synthetic checks, error budgets, and incident automation',
		price: '$39',
		period: '/month',
		description: 'Track uptime, latency, and error budgets with synthetic monitors, alerting, and incident automation.',
		features: ['Global synthetic checksError budgets & burn ratesOn-call & escalationsIncident runbooks'],
		category: 'Enterprise IT - SRE',
		link: 'https://ziontechgroup.com/uptime-slo-monitor',
		variant: 'quantum-cyberpunk',
		rating: 4.5,
		customers: 1100,
		trialDays: 14,
		setupTime: '25 minutes',
		contactInfo
	},
	{
		id: 'tls-certificate-monitor',
		name: 'TLS Certificate Monitor',
		tagline: 'Auto-renewal checks and expiry alerts across your fleet',
		price: '$19',
		period: '/month',
		description: 'Monitor certificates across domains and environments, get renewal reminders and failure alerts.',
		features: ['Expiry alertsIssuer checksAuto-renew validationInventory export'],
		category: 'Enterprise IT - Security',
		link: 'https://ziontechgroup.com/tls-certificate-monitor',
		variant: 'default',
		rating: 4.5,
		customers: 2200,
		trialDays: 14,
		setupTime: '10 minutes',
		contactInfo
	},
	{
		id: 'domain-dns-monitor',
		name: 'Domain & DNS Monitor',
		tagline: 'Track DNS changes, TTLs, and misconfigurations',
		price: '$29',
		period: '/month',
		description: 'Monitor DNS records and domain settings for unexpected changes and misconfigurations with alerts.',
		features: ['Change detectionMisconfig alertsTTL insightsExport & audit'],
		category: 'Enterprise IT - Networking',
		link: 'https://ziontechgroup.com/domain-dns-monitor',
		variant: 'default',
		rating: 4.4,
		customers: 980,
		trialDays: 14,
		setupTime: '15 minutes',
		contactInfo
	},

	// Dev & Productivity
	{
		id: 'pdf-render-api',
		name: 'PDF Render API',
		tagline: 'High-fidelity serverless PDF rendering and watermarking',
		price: '$49',
		period: '/month',
		description: 'Generate pixel-perfect PDFs from HTML/Markdown with headers, footers, and watermarking using a simple API.',
		features: ['HTML/Markdown to PDFHeaders/footersWatermarksAsync webhooks'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/pdf-render-api',
		variant: 'holographic-matrix',
		rating: 4.6,
		customers: 1300,
		trialDays: 7,
		setupTime: '10 minutes',
		contactInfo
	},
	{
		id: 'browser-performance-monitor',
		name: 'Browser Performance Monitor',
		tagline: 'RUM metrics, Core Web Vitals, and UX waterfall analysis',
		price: '$39',
		period: '/month',
		description: 'Collect real-user metrics, analyze CWV, and improve UX with actionable waterfalls and alerting.',
		features: ['RUM collectionCWV dashboardsWaterfall analysisAlerts & webhooks'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/browser-performance-monitor',
		variant: 'quantum-holographic',
		rating: 4.5,
		customers: 760,
		trialDays: 14,
		setupTime: '20 minutes',
		contactInfo
	},
	{
		id: 'feature-flags-edge',
		name: 'Feature Flags at the Edge',
		tagline: 'Targeting, rollouts, and experiments at CDN edge',
		price: '$69',
		period: '/month',
		description: 'Ship features safely with edge-evaluated flags, user targeting, and experimentation without latency.',
		features: ['Edge evaluationTargeting & segmentsExperimentsSDKs & audit'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/feature-flags-edge',
		variant: 'quantum-holographic',
		rating: 4.5,
		customers: 430,
		trialDays: 14,
		setupTime: '30 minutes',
		contactInfo
	},
	{
		id: 'serverless-cron-manager',
		name: 'Serverless Cron Manager',
		tagline: 'Reliable scheduled jobs with retries and observability',
		price: '$29',
		period: '/month',
		description: 'Schedule and monitor serverless jobs with retries, DLQs, and alerting across multiple clouds.',
		features: ['Cron & schedulesRetries & DLQsLogs & tracesAlerts & webhooks'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/serverless-cron-manager',
		variant: 'default',
		rating: 4.4,
		customers: 1150,
		trialDays: 14,
		setupTime: '15 minutes',
		contactInfo
	},

	// Compliance & Risk
	{
		id: 'soc2-evidence-automation',
		name: 'SOC 2 Evidence Automation',
		tagline: 'Collect and map controls with change tracking',
		price: '$149',
		period: '/month',
		description: 'Automate evidence collection and control mapping with integrations to cloud, code, and ticketing systems.',
		features: ['Control mappingEvidence collectionChange trackingExport & auditor access'],
		category: 'Enterprise IT - Compliance',
		link: 'https://ziontechgroup.com/soc2-evidence-automation',
		variant: 'holographic-neural',
		rating: 4.6,
		customers: 310,
		trialDays: 7,
		setupTime: '1 day',
		contactInfo
	},
	{
		id: 'vendor-risk-automation',
		name: 'Vendor Risk Automation',
		tagline: 'Automate VRM workflows, DDQs, and risk scoring',
		price: '$99',
		period: '/month',
		description: 'Streamline vendor onboarding, questionnaires, and continuous monitoring with automated risk scoring.',
		features: ['DDQs and questionnairesRisk scoringContinuous monitoringDashboards & export'],
		category: 'Enterprise IT - Compliance',
		link: 'https://ziontechgroup.com/vendor-risk-automation',
		variant: 'quantum-entanglement',
		rating: 4.5,
		customers: 520,
		trialDays: 14,
		setupTime: '2 hours',
		contactInfo
	},

	// Developer and Ops Utilities
	{
		id: 'webhook-relay-replay',
		name: 'Webhook Relay & Replay',
		tagline: 'Capture, inspect, and replay webhooks reliably',
		price: '$19',
		period: '/month',
		description: 'Never lose a webhook again. Capture payloads, inspect headers, and replay with backoff and signatures.',
		features: ['Capture & inspectReplay with backoffSignature verificationForwarding rules'],
		category: 'Micro SaaS',
		link: 'https://ziontechgroup.com/webhook-relay-replay',
		variant: 'cyberpunk-holographic',
		rating: 4.5,
		customers: 1650,
		trialDays: 14,
		setupTime: '10 minutes',
		contactInfo
	},
	{
		id: 'audit-log-vault',
		name: 'Audit Log Vault',
		tagline: 'Tamper-evident logs with retention and export',
		price: '$39',
		period: '/month',
		description: 'Centralize audit logs with WORM retention, export APIs, and fine-grained access for investigations.',
		features: ['WORM retentionExport APIsFine-grained accessTamper evidence'],
		category: 'Enterprise IT - Security',
		link: 'https://ziontechgroup.com/audit-log-vault',
		variant: 'quantum-neural',
		rating: 4.5,
		customers: 420,
		trialDays: 14,
		setupTime: '30 minutes',
		contactInfo
	},

	// AI Channels
	{
		id: 'ai-phone-agent',
		name: 'AI Phone Agent',
		tagline: 'Voice IVR and call handling with CRM handoff',
		price: '$129',
		period: '/month',
		description: 'Handle inbound calls with a natural AI voice, route to agents, and sync transcripts with your CRM.',
		features: ['Natural TTS/ASRRouting & handoffCRM syncAnalytics'],
		category: 'AI & Assistants',
		link: 'https://ziontechgroup.com/ai-phone-agent',
		variant: 'quantum-holographic-advanced',
		rating: 4.6,
		customers: 380,
		trialDays: 7,
		setupTime: '1 hour',
		contactInfo
	},

	// Search and Knowledge
	{
		id: 'vector-search-starter',
		name: 'Vector Search Starter',
		tagline: 'Deploy a production-grade vector database and APIs',
		price: '$89',
		period: '/month',
		description: 'Spin up a managed vector index with ingestion pipelines, filters, and access controls to power semantic search.',
		features: ['Managed vector DBIngestion pipelinesMetadata filtersAccess controls'],
		category: 'AI & Search',
		link: 'https://ziontechgroup.com/vector-search-starter',
		variant: 'quantum',
		rating: 4.6,
		customers: 410,
		trialDays: 14,
		setupTime: '2 hours',
		contactInfo
	}],
=======

export interface MarketValidatedService {_id: string;
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
	contactInfo: {
		mobile: string;
		email: string;
		address: string;
		website?: string;};
}

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

export const marketValidatedServices: MarketValidatedService[] = [
	// AI and Assistants
	{_id: 'ai-assistant-pro', _name: 'AI Assistant Pro', _tagline: 'Branded copilot with RAG, _guardrails, _and analytics', _price: '$149', _period: '/month', _description: 'Deploy a secure, _branded AI assistant that answers from your docs with citations, _observes costs and latency, _and hands off to humans when needed.', _features: [
			'RAG over your docs with hybrid search', _'Guardrails: PII/PHI redaction, _jailbreak detection', _'Human handoff + conversation analytics', _'Slack/Teams/Widget channels'], _category: 'AI & Assistants', _link: 'https://ziontechgroup.com/ai-assistant', _variant: 'ai-futuristic', _rating: 4.8, _customers: 1200, _trialDays: 14, _setupTime: '30 minutes', _contactInfo},
	{_id: 'ai-evals-observability', _name: 'AI Evals & Observability', _tagline: 'Regression testing, _safety checks, _and live metrics for LLM features', _price: '$99', _period: '/month', _description: 'Ship reliable LLM apps with dataset management, _prompt diffing, _red-teaming, _and production KPIs for quality, _latency, _and costs.', _features: [
			'Eval datasets/versioning', _'Policy and toxicity checks', _'Latency and cost KPIs', _'Prompt/version diff and alerts'], _category: 'AI & MLOps', _link: 'https://ziontechgroup.com/ai-evals', _variant: 'quantum-holographic', _rating: 4.7, _customers: 600, _trialDays: 14, _setupTime: '1 hour', _contactInfo},
	{_id: 'agentic-rag-platform', _name: 'Agentic RAG Platform', _tagline: 'Production RAG with hybrid search, _chunking, _tools, _and evals', _price: '$179', _period: '/month', _description: 'Ingest and index your knowledge with hybrid search + reranking, _enable tool-using agents, _and validate responses with reference checks and citations.', _features: [
			'Hybrid vector+BM25 + reranker', _'Chunking strategies + citations', _'Toolformer-style agents', _'Eval suite and drift monitoring'], _category: 'AI & Search', _link: 'https://ziontechgroup.com/agentic-rag', _variant: 'quantum-matrix', _rating: 4.7, _customers: 900, _trialDays: 14, _setupTime: '2 hours', _contactInfo},

	// Security and APIs
	{_id: 'api-security-scanner', _name: 'API Security Scanner', _tagline: 'OpenAPI/GraphQL scanning, _auth/Z checks, _dependency audit', _price: '$59', _period: '/month', _description: 'Automatically scan APIs for OWASP issues, _auth/z misconfigurations, _and dependency CVEs with CI gating and fix guidance.', _features: ['Auth/Z misconfig checks', _'OWASP Top 10 tests', _'CI gate', _'Fix guidance'], _category: 'Enterprise IT - Security', _link: 'https://ziontechgroup.com/api-security-scanner', _variant: 'cyberpunk', _rating: 4.6, _customers: 750, _trialDays: 14, _setupTime: '20 minutes', _contactInfo},
	{_id: 'api-observability', _name: 'API Observability & SLA Guard', _tagline: 'OTel tracing, _SLOs, _and error budgets for services', _price: '$69', _period: '/month', _description: 'Collect traces/metrics/logs via OpenTelemetry, _define SLOs and error budgets, _and alert on burn rates with dashboards.', _features: ['OTel traces/metrics/logs', _'SLOs & error budgets', _'Alerting', _'Dashboards'], _category: 'Enterprise IT - Observability', _link: 'https://ziontechgroup.com/api-observability', _variant: 'holographic', _rating: 4.6, _customers: 640, _trialDays: 14, _setupTime: '40 minutes', _contactInfo},

	// Cloud and Infra
	{_id: 'cloud-cost-optimizer-pro', _name: 'Cloud Cost Optimizer Pro', _tagline: 'Rightsizing, _lifecycle, _anomaly detection, _and k8s bin-packing', _price: '$99', _period: '/month', _description: 'Continuously optimize cloud spend with instance rightsizing, _lifecycle policies, _anomaly alerts, _and container scheduling insights.', _features: ['Auto rightsizing', _'Idle cleanup', _'Spot orchestration', _'Anomaly detection'], _category: 'Enterprise IT - FinOps', _link: 'https://ziontechgroup.com/cloud-cost-optimizer', _variant: 'quantum', _rating: 4.6, _customers: 820, _trialDays: 14, _setupTime: '1 hour', _contactInfo},
	{_id: 'database-performance-monitor', _name: 'Database Performance Monitor', _tagline: 'Slow query capture, _AI index suggestions, _capacity forecasting', _price: '$79', _period: '/month', _description: 'Postgres/MySQL performance insights with slow query ranking, _AI tuning suggestions, _pool sizing, _and SLO dashboards.', _features: ['Slow query ranking', _'AI index advice', _'Pool tuning', _'SLA/SLO dashboards'], _category: 'Enterprise IT - Data', _link: 'https://ziontechgroup.com/database-performance-monitor', _variant: 'neural-quantum', _rating: 4.7, _customers: 560, _trialDays: 14, _setupTime: '45 minutes', _contactInfo},
	{_id: 'managed-postgres-ha', _name: 'Managed Postgres HA', _tagline: 'Highly-available Postgres with backups, _failover, _and guardrails', _price: '$499', _period: '/month', _description: 'Production-ready Postgres with managed backups, _automated failover, _performance tuning, _and compliance guardrails.', _features: ['Automated backups', _'Failover & replication', _'Performance tuning', _'SLA & support'], _category: 'Enterprise IT - Data', _link: 'https://ziontechgroup.com/managed-postgres-ha', _variant: 'holographic-advanced', _rating: 4.8, _customers: 240, _trialDays: 7, _setupTime: '1 day', _contactInfo},

	// Reliability & Monitoring
	{_id: 'uptime-slo-monitor', _name: 'Uptime & SLO Monitor', _tagline: 'Synthetic checks, _error budgets, _and incident automation', _price: '$39', _period: '/month', _description: 'Track uptime, _latency, _and error budgets with synthetic monitors, _alerting, _and incident automation.', _features: ['Global synthetic checks', _'Error budgets & burn rates', _'On-call & escalations', _'Incident runbooks'], _category: 'Enterprise IT - SRE', _link: 'https://ziontechgroup.com/uptime-slo-monitor', _variant: 'quantum-cyberpunk', _rating: 4.5, _customers: 1100, _trialDays: 14, _setupTime: '25 minutes', _contactInfo},
	{_id: 'tls-certificate-monitor', _name: 'TLS Certificate Monitor', _tagline: 'Auto-renewal checks and expiry alerts across your fleet', _price: '$19', _period: '/month', _description: 'Monitor certificates across domains and environments, _get renewal reminders and failure alerts.', _features: ['Expiry alerts', _'Issuer checks', _'Auto-renew validation', _'Inventory export'], _category: 'Enterprise IT - Security', _link: 'https://ziontechgroup.com/tls-certificate-monitor', _variant: 'default', _rating: 4.5, _customers: 2200, _trialDays: 14, _setupTime: '10 minutes', _contactInfo},
	{_id: 'domain-dns-monitor', _name: 'Domain & DNS Monitor', _tagline: 'Track DNS changes, _TTLs, _and misconfigurations', _price: '$29', _period: '/month', _description: 'Monitor DNS records and domain settings for unexpected changes and misconfigurations with alerts.', _features: ['Change detection', _'Misconfig alerts', _'TTL insights', _'Export & audit'], _category: 'Enterprise IT - Networking', _link: 'https://ziontechgroup.com/domain-dns-monitor', _variant: 'default', _rating: 4.4, _customers: 980, _trialDays: 14, _setupTime: '15 minutes', _contactInfo},

	// Dev & Productivity
	{_id: 'pdf-render-api', _name: 'PDF Render API', _tagline: 'High-fidelity serverless PDF rendering and watermarking', _price: '$49', _period: '/month', _description: 'Generate pixel-perfect PDFs from HTML/Markdown with headers, _footers, _and watermarking using a simple API.', _features: ['HTML/Markdown to PDF', _'Headers/footers', _'Watermarks', _'Async webhooks'], _category: 'Micro SaaS', _link: 'https://ziontechgroup.com/pdf-render-api', _variant: 'holographic-matrix', _rating: 4.6, _customers: 1300, _trialDays: 7, _setupTime: '10 minutes', _contactInfo},
	{_id: 'browser-performance-monitor', _name: 'Browser Performance Monitor', _tagline: 'RUM metrics, _Core Web Vitals, _and UX waterfall analysis', _price: '$39', _period: '/month', _description: 'Collect real-user metrics, _analyze CWV, _and improve UX with actionable waterfalls and alerting.', _features: ['RUM collection', _'CWV dashboards', _'Waterfall analysis', _'Alerts & webhooks'], _category: 'Micro SaaS', _link: 'https://ziontechgroup.com/browser-performance-monitor', _variant: 'quantum-holographic', _rating: 4.5, _customers: 760, _trialDays: 14, _setupTime: '20 minutes', _contactInfo},
	{_id: 'feature-flags-edge', _name: 'Feature Flags at the Edge', _tagline: 'Targeting, _rollouts, _and experiments at CDN edge', _price: '$69', _period: '/month', _description: 'Ship features safely with edge-evaluated flags, _user targeting, _and experimentation without latency.', _features: ['Edge evaluation', _'Targeting & segments', _'Experiments', _'SDKs & audit'], _category: 'Micro SaaS', _link: 'https://ziontechgroup.com/feature-flags-edge', _variant: 'quantum-holographic', _rating: 4.5, _customers: 430, _trialDays: 14, _setupTime: '30 minutes', _contactInfo},
	{_id: 'serverless-cron-manager', _name: 'Serverless Cron Manager', _tagline: 'Reliable scheduled jobs with retries and observability', _price: '$29', _period: '/month', _description: 'Schedule and monitor serverless jobs with retries, _DLQs, _and alerting across multiple clouds.', _features: ['Cron & schedules', _'Retries & DLQs', _'Logs & traces', _'Alerts & webhooks'], _category: 'Micro SaaS', _link: 'https://ziontechgroup.com/serverless-cron-manager', _variant: 'default', _rating: 4.4, _customers: 1150, _trialDays: 14, _setupTime: '15 minutes', _contactInfo},

	// Compliance & Risk
	{_id: 'soc2-evidence-automation', _name: 'SOC 2 Evidence Automation', _tagline: 'Collect and map controls with change tracking', _price: '$149', _period: '/month', _description: 'Automate evidence collection and control mapping with integrations to cloud, _code, _and ticketing systems.', _features: ['Control mapping', _'Evidence collection', _'Change tracking', _'Export & auditor access'], _category: 'Enterprise IT - Compliance', _link: 'https://ziontechgroup.com/soc2-evidence-automation', _variant: 'holographic-neural', _rating: 4.6, _customers: 310, _trialDays: 7, _setupTime: '1 day', _contactInfo},
	{_id: 'vendor-risk-automation', _name: 'Vendor Risk Automation', _tagline: 'Automate VRM workflows, _DDQs, _and risk scoring', _price: '$99', _period: '/month', _description: 'Streamline vendor onboarding, _questionnaires, _and continuous monitoring with automated risk scoring.', _features: ['DDQs and questionnaires', _'Risk scoring', _'Continuous monitoring', _'Dashboards & export'], _category: 'Enterprise IT - Compliance', _link: 'https://ziontechgroup.com/vendor-risk-automation', _variant: 'quantum-entanglement', _rating: 4.5, _customers: 520, _trialDays: 14, _setupTime: '2 hours', _contactInfo},

	// Developer and Ops Utilities
	{_id: 'webhook-relay-replay', _name: 'Webhook Relay & Replay', _tagline: 'Capture, _inspect, _and replay webhooks reliably', _price: '$19', _period: '/month', _description: 'Never lose a webhook again. Capture payloads, _inspect headers, _and replay with backoff and signatures.', _features: ['Capture & inspect', _'Replay with backoff', _'Signature verification', _'Forwarding rules'], _category: 'Micro SaaS', _link: 'https://ziontechgroup.com/webhook-relay-replay', _variant: 'cyberpunk-holographic', _rating: 4.5, _customers: 1650, _trialDays: 14, _setupTime: '10 minutes', _contactInfo},
	{_id: 'audit-log-vault', _name: 'Audit Log Vault', _tagline: 'Tamper-evident logs with retention and export', _price: '$39', _period: '/month', _description: 'Centralize audit logs with WORM retention, _export APIs, _and fine-grained access for investigations.', _features: ['WORM retention', _'Export APIs', _'Fine-grained access', _'Tamper evidence'], _category: 'Enterprise IT - Security', _link: 'https://ziontechgroup.com/audit-log-vault', _variant: 'quantum-neural', _rating: 4.5, _customers: 420, _trialDays: 14, _setupTime: '30 minutes', _contactInfo},

	// AI Channels
	{_id: 'ai-phone-agent', _name: 'AI Phone Agent', _tagline: 'Voice IVR and call handling with CRM handoff', _price: '$129', _period: '/month', _description: 'Handle inbound calls with a natural AI voice, _route to agents, _and sync transcripts with your CRM.', _features: ['Natural TTS/ASR', _'Routing & handoff', _'CRM sync', _'Analytics'], _category: 'AI & Assistants', _link: 'https://ziontechgroup.com/ai-phone-agent', _variant: 'quantum-holographic-advanced', _rating: 4.6, _customers: 380, _trialDays: 7, _setupTime: '1 hour', _contactInfo},

	// Search and Knowledge
	{_id: 'vector-search-starter', _name: 'Vector Search Starter', _tagline: 'Deploy a production-grade vector database and APIs', _price: '$89', _period: '/month', _description: 'Spin up a managed vector index with ingestion pipelines, _filters, _and access controls to power semantic search.', _features: ['Managed vector DB', _'Ingestion pipelines', _'Metadata filters', _'Access controls'], _category: 'AI & Search', _link: 'https://ziontechgroup.com/vector-search-starter', _variant: 'quantum', _rating: 4.6, _customers: 410, _trialDays: 14, _setupTime: '2 hours', _contactInfo}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

