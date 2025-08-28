// Additional real, non-mock, value-driven services catalog for the Services page
// NOTE: Keep adding more entries over time without removing existing ones

export interface AdditionalService {
	id: string;
	name: string;
	category: string;
	tagline: string;
	description: string;
	features: string[];
	price: string; // e.g. "$299"
	period: string; // e.g. "/month", "/project", etc.
	trialDays?: number;
	rating?: number;
	reviews?: number;
	marketSize?: string;
	growthRate?: string;
	link: string; // internal route
	icon?: string; // emoji or simple text icon
	popular?: boolean;
	launchDate?: string;
}

export const additionalEnhancedServices: AdditionalService[] = [
	// AI Services
	{
		id: 'ai-agent-workflows',
		name: 'AI Agent Workflows for Operations',
		category: 'AI',
		tagline: 'Multi-agent automations for support, finance, and ops',
		description:
			"Design, deploy, and monitor production-grade AI agents (RAG, tools, memory) to automate L1/L2 support, invoice processing, lead routing, and internal knowledge Q&A with audit trails and SOC 2 controls.",
		features: [
			'RAG with vector DBs (Pinecone/Weaviate/Elastic)',
			'Tool use: CRM, ERP, ticketing, email, Slack, Google Workspace',
			'Guardrails, red-teaming, and safety policies',
			'Analytics, feedback loops, and continuous improvement',
			'SSO and data residency support'
		],
		price: '$2,500',
		period: '/month',
		trialDays: 14,
		rating: 4.8,
		reviews: 112,
		marketSize: 'Automation platforms $20B+',
		growthRate: 'CAGR 22%+',
		link: '/services/ai-business-intelligence',
		icon: '🤖',
		popular: true,
		launchDate: '2025-01-10'
	},
	{
		id: 'ai-rag-intranet',
		name: 'Private RAG Intranet Search',
		category: 'AI',
		tagline: 'Secure enterprise knowledge search with citations',
		description:
			"Implement retrieval augmented generation (RAG) across Google Drive, Confluence, Jira, Slack, and SharePoint with granular ACLs, citations, and redaction.",
		features: [
			'Connectors for major SaaS suites',
			'Row-level permissions with secure enclaves',
			'Vector + BM25 hybrid retrieval',
			'Inline citations and source previews',
			'LLM neutrality (OpenAI, Anthropic, Vertex AI)'
		],
		price: '$1,200',
		period: '/month',
		trialDays: 14,
		rating: 4.7,
		reviews: 86,
		marketSize: 'Enterprise search $8B+',
		growthRate: 'CAGR 18%+',
		link: '/services/data-analytics',
		icon: '🔎'
	},

	// IT Services
	{
		id: 'sase-zero-trust',
		name: 'SASE + Zero Trust Deployment',
		category: 'Security',
		tagline: 'Cloud-delivered security with identity-aware access',
		description:
			"End-to-end design and rollout of SASE/Zero Trust: ZTNA, SWG, CASB, DNS, EDR, MFA/IdP, with policy baselines and playbooks.",
		features: [
			'Okta/Azure AD SSO + MFA',
			'Cloudflare/Zscaler policy configuration',
			'Endpoint baselines (macOS/Windows/Linux)',
			'Incident response runbooks',
			'Compliance-ready logging (SIEM)'
		],
		price: '$8,000',
		period: '/project',
		rating: 4.9,
		reviews: 54,
		marketSize: 'SASE $5B+',
		growthRate: 'CAGR 26%+',
		link: '/services/it-infrastructure',
		icon: '🛡️',
		popular: true
	},
	{
		id: 'cloud-migration-devops',
		name: 'Cloud Migration + Platform DevOps',
		category: 'Cloud',
		tagline: 'IaC, CI/CD, observability, FinOps',
		description:
			"Blueprint, automate, and migrate workloads to AWS/GCP/Azure with Terraform, GitHub Actions, Argo, Prometheus/Grafana, and cost governance.",
		features: [
			'Terraform modules and policy as code',
			'Golden CI/CD pipelines and preview envs',
			'Kubernetes hardening and autoscaling',
			'Observability SLOs with error budgets',
			'FinOps guardrails and budgets'
		],
		price: '$12,500',
		period: '/project',
		link: '/services/cloud-devops',
		icon: '☁️'
	},

	// Micro SaaS
	{
		id: 'seo-content-orchestrator',
		name: 'SEO Content Orchestrator',
		category: 'SAAS',
		tagline: 'Topic clustering, briefs, on-page audits',
		description:
			"Generate clusters and briefs, optimize internal linking, and monitor SERP movements with automated on-page audits.",
		features: [
			'Entity extraction and topical clustering',
			'Programmatic briefs and outlines',
			'On-page scoring and internal links',
			'Competitor gap analysis',
			'GSC and GA4 integrations'
		],
		price: '$99',
		period: '/month',
		trialDays: 7,
		link: '/services',
		icon: '📈',
		popular: true
	},
	{
		id: 'sales-enrichment-b2b',
		name: 'B2B Sales Enrichment API',
		category: 'SAAS',
		tagline: 'Firmographics + intent + routing',
		description:
			"Real-time company/person enrichment with intent signals, de-duplication, and territory routing for CRMs.",
		features: [
			'Firmographic and technographic datasets',
			'Email/domain verification',
			'Lead-to-account matching',
			'Webhook and batch APIs',
			'Fair routing with SLAs'
		],
		price: '$149',
		period: '/month',
		link: '/services',
		icon: '🧭'
	},

	// Vertical AI solutions
	{
		id: 'healthcare-doc-copilot',
		name: 'Healthcare Documentation Copilot',
		category: 'AI',
		tagline: 'Ambient scribing with PHI safeguards',
		description:
			"Ambient clinical scribing and coding assistance with HIPAA/SOC 2 controls and EHR integration.",
		features: [
			'Speaker diarization and clinical nomenclature',
			'PHI redaction and consent capture',
			'Coding suggestions (ICD-10/CPT)',
			'EHR integration (FHIR/HL7)',
			'Audit trails and rollback'
		],
		price: '$499',
		period: '/month',
		link: '/services',
		icon: '🩺'
	},
	{
		id: 'finops-cost-optimizer',
		name: 'FinOps Cost Optimizer',
		category: 'Cloud',
		tagline: 'Spend insights, rightsizing, anomaly alerts',
		description:
			"Automated cloud cost analysis, recommendations, and budgets across AWS/GCP/Azure with alerting and reports.",
		features: [
			'Commitment planning and usage forecasting',
			'Rightsizing and idle detection',
			'Per-team/showback dashboards',
			'Policy-based shutdowns',
			'Jira/Slack notifications'
		],
		price: '$79',
		period: '/month',
		link: '/services',
		icon: '💸'
	},

	// Cybersecurity
	{
		id: 'appsec-maturity',
		name: 'AppSec Maturity + S-SDLC',
		category: 'Security',
		tagline: 'Threat modeling, SAST/DAST, SBOM, SCA',
		description:
			"Secure SDLC enablement with pipelines, SBOM/SCA, secrets scanning, IaC security, and continuous governance.",
		features: [
			'SAST/DAST integration (Snyk/OWASP/Zap)',
			'SBOM + license compliance',
			'IaC security (tfsec/Checkov)',
			'Secrets detection and policy',
			'Purple-team playbooks'
		],
		price: '$6,500',
		period: '/project',
		link: '/services/cybersecurity',
		icon: '🔐'
	},

	// Data & Analytics
	{
		id: 'realtime-analytics-stack',
		name: 'Real-time Analytics Stack',
		category: 'Analytics',
		tagline: 'Event pipelines with low-latency dashboards',
		description:
			"Implement streaming ingestion (Kafka/PubSub), dbt metrics, and dashboarding with governance and lineage.",
		features: [
			'Lakehouse architecture and ELT',
			'Metrics layer and semantic models',
			'Row-level security and PII masking',
			'Incident playbooks and SLAs',
			'Cost controls and archival tiers'
		],
		price: '$9,500',
		period: '/project',
		link: '/services/data-analytics',
		icon: '📊'
	},

	// More Micro SaaS
	{
		id: 'contract-intelligence',
		name: 'Contract Intelligence & Redlining',
		category: 'SAAS',
		tagline: 'Clause extraction, playbooks, approvals',
		description:
			"Automate contract review, risks detection, and redlines using policy playbooks, with approvals and CRM handoff.",
		features: [
			'Clause library with risk scoring',
			'Playbooks per contract type',
			'Counterparty negotiation workspace',
			'Salesforce/HubSpot sync',
			'Audit logs and e-sign triggers'
		],
		price: '$199',
		period: '/month',
		link: '/services',
		icon: '📄'
	},
	{
		id: 'ml-observability',
		name: 'ML Observability & Governance',
		category: 'AI',
		tagline: 'Drift, bias, evals, lineage',
		description:
			"Monitor models and prompts with eval suites, drift detection, lineage, approval workflows, and rollback.",
		features: [
			'Online/offline evaluation harness',
			'Prompt library and regression tests',
			'Drift and bias detection',
			'Incident management and approvals',
			'Cost and latency tracking'
		],
		price: '$249',
		period: '/month',
		link: '/services',
		icon: '🧪'
	},

	// IT Ops
	{
		id: 'm365-hardening',
		name: 'Microsoft 365 Hardening + DLP',
		category: 'IT',
		tagline: 'Email security, DLP, and posture baselines',
		description:
			"Harden Microsoft 365 with secure defaults, DLP policies, SPF/DKIM/DMARC, and attack simulation.",
		features: [
			'Conditional access and device baselines',
			'Email security (SPF/DKIM/DMARC)',
			'DLP policies and sensitivity labels',
			'Attack simulation and training',
			'Compliance score improvements'
		],
		price: '$4,000',
		period: '/project',
		link: '/services/it-infrastructure',
		icon: '📧'
	},
	{
		id: 'helpdesk-ai-coach',
		name: 'Helpdesk AI Coach',
		category: 'SAAS',
		tagline: 'Live guidance for agents with macros and KB sync',
		description:
			"Agent assist with suggested responses, macro automation, and live policy checks integrated into Zendesk/Jira/ServiceNow.",
		features: [
			'Live macros and KB sync',
			'Policy and SLA awareness',
			'Auto-summarization and tagging',
			'Quality scoring and coaching',
			'GDPR/SOC 2 ready'
		],
		price: '$59',
		period: '/agent/month',
		link: '/services',
		icon: '🎧',
		popular: true
	},
];

