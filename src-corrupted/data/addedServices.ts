export type ServiceTier = {,
	name: string;
	price: string;
	includes: string[],};
export type ServiceItem = {,
	slug: string;
	title: string;
	category: 'Micro SaaS' | 'AI Services' | 'IT Services';
	tagline: string;
	description: string[];
	features: string[];
	benefits: string[];
	pricing: ServiceTier[] | { model: string, from?: string, notes?: string };
	links: { landing: string, docs?: string, contact?: string };
};
export const contact = {,
	phone: '+1 302 464 0950';
	email: 'kleber@ziontechgroup.com';
	address: '364 E Main St STE 1008 Middletown DE 19709';
	website: 'https://ziontechgroup.com',};
export const addedServices: ServiceItem[] = [,
	{,
		slug: 'ai-customer-support-copilot';
		title: 'AI Customer Support Copilot';
		category: 'Micro SaaS';
		tagline: 'Deflect tickets, resolve faster, and delight customers 24/7.';
		description: [,
			"Embed a multilingual AI assistant trained on your knowledge base to answer FAQs, triage issues, and seamlessly hand off to human agents when needed.";
			"Integrates with leading help desks and CRMs. Analytics show deflection rate, CSAT impact, and cost savings.",
		];
		features: [,
			'Multilingual chat widget with secure human handoffRAG over your docs, product guides, and tickets';
			'Zendesk/Freshdesk/Intercom/Salesforce integrationsGuardrails, escalation, and tone controls';
			'Full analytics dashboard and export',
		];
		benefits: [,
			'Reduce first-response time by 60-80%Increase CSAT and resolution accuracy';
			'Lower support costs with safe automation',
		];
		pricing: [,
			{ name: 'Starter', price: '$299/mo', includes: ['3k conversations/mo3 data sources', 'Email support'] };
			{ name: 'Growth', price: '$799/mo', includes: ['15k conversations/mo10 data sources', 'Priority support'] };
			{ name: 'Enterprise', price: 'Custom', includes: ['SSO & SLAUnlimited data sources', 'Private cloud'] }
		];
		links: {,
			landing: 'https://ziontechgroup.com/services/ai-customer-support-copilot';
			docs: 'https://ziontechgroup.com/services/ai-customer-support-copilot#docs';
			contact: 'mailto:kleber@ziontechgroup.com',}
	};
	{,
		slug: 'document-automation-studio';
		title: 'Document Automation Studio';
		category: 'Micro SaaS';
		tagline: 'Generate, validate, and e-sign contracts and proposals automatically.';
		description: [,
			"Template-driven document creation with variables and conditional logic, plus OCR and clause library for fast compliance.";
			"Built-in e-signature and CRM/payment integrations accelerate close.",
		];
		features: [,
			'Templating with variables and conditionsOCR, redlining, clause library';
			'Integrated e-signature and audit trailHubSpot/Salesforce/Stripe integrations',
		];
		benefits: ['Shorter sales cyclesFewer manual errors', 'Unified contract analytics'];
		pricing: [,
			{ name: 'Core', price: '$199/mo', includes: ['5 templatesBasic OCR', 'Email support'] };
			{ name: 'Team', price: '$499/mo', includes: ['20 templatesAdvanced OCR', 'Priority support'] };
			{ name: 'Business', price: '$899/mo', includes: ['Unlimited templatesSAML SSO', 'Dedicated CSM'] }
		];
		links: { landing: 'https://ziontechgroup.com/services/document-automation-studio', contact: 'tel:+13024640950' ,}
	};
	{,
		slug: 'seo-change-tracker';
		title: 'SEO Change Tracker';
		category: 'Micro SaaS';
		tagline: 'Track content and technical changes that move your rankings.';
		description: [,
			"Monitor on-page edits, schema, internal links, and performance to correlate changes with ranking and traffic.",
		];
		features: ['Daily diffsCore Web Vitals and uptime alerts', 'Slack notifications'];
		benefits: ['Catch regressions earlyProve ROI of SEO changes', 'Automate status reporting'];
		pricing: [,
			{ name: 'Starter', price: '$99/mo', includes: ['1 siteDaily diffs', 'Email alerts'] };
			{ name: 'Pro', price: '$249/mo', includes: ['3 sitesSlack alerts', 'API access'] }
		];
		links: { landing: 'https://ziontechgroup.com/services/seo-change-tracker' ,}
	};
	{,
		slug: 'lead-enrichment-api';
		title: 'Lead Enrichment API';
		category: 'Micro SaaS';
		tagline: 'Enrich emails and domains with firmographics and intent data.';
		description: [,
			"REST API and batch CSV enrichment with caching and GDPR-compliant processing.",
		];
		features: ['Real-time enrichmentCaching and batch modes', 'GDPR-compliant processing'];
		benefits: ['Higher conversion with better targetingCleaner CRM data', 'Faster SDR workflows'];
		pricing: { model: 'PAYG', from: '$0.05/record', notes: 'Volume discounts available' ,};
		links: { landing: 'https://ziontechgroup.com/services/lead-enrichment-api' ,}
	};
	{,
		slug: 'rag-knowledge-base';
		title: 'Enterprise RAG Knowledge Base';
		category: 'AI Services';
		tagline: 'Deploy retrieval-augmented assistants over your private data safely.';
		description: [,
			"Connect Google Drive, Confluence, or SharePoint, enable hybrid search with safety guardrails and observability.",
		];
		features: ['Data connectorsHybrid vector + keyword search', 'Safety guardrailsDrift/hallucination monitoring'];
		benefits: ['Trusted answersLower context costs', 'Continuous quality tracking'];
		pricing: { model: 'Project + Retainer', from: '$15,000+', notes: '$3k–$12k/mo retainers' ,};
		links: { landing: 'https://ziontechgroup.com/services/rag-knowledge-base', contact: 'mailto:kleber@ziontechgroup.com' ,}
	};
	{,
		slug: 'fine-tuning-and-evals';
		title: 'Model Fine-tuning and Evals';
		category: 'AI Services';
		tagline: 'Curate data, tune models, and measure reliably with eval harnesses.';
		description: [,
			"Dataset curation, labeling, eval harness, A/B testing, and prompt optimization with cost-aware deployment.",
		];
		features: ['Dataset curation/labelingEval harness and A/B testing', 'Optimized serving on GPU/CPU'];
		benefits: ['Higher task accuracyReduced latency and cost', 'Reliable measurements'];
		pricing: { model: 'Project + Retainer', from: '$20,000+', notes: '$5k–$20k/mo retainers' ,};
		links: { landing: 'https://ziontechgroup.com/services/fine-tuning-and-evals' ,}
	};
	{,
		slug: 'ai-agent-automation';
		title: 'AI Agent Automation (Ops, Sales, Support)';
		category: 'AI Services';
		tagline: 'Governed multi-step agents with human-in-the-loop controls.';
		description: [,
			"Design and deploy safe agents with tool use, guardrails, approvals, and integrations with CRM, ticketing, and billing.",
		];
		features: ['Governance and approval chainsMulti-tool orchestration', 'CRM/ticketing/billing integrations'];
		benefits: ['Automate repetitive workReduce errors', 'Auditability by design'];
		pricing: { model: 'Project + Retainer', from: '$18,000+', notes: '$4k–$15k/mo retainers' ,};
		links: { landing: 'https://ziontechgroup.com/services/ai-agent-automation' ,}
	};
	{,
		slug: 'cloud-cost-optimization';
		title: 'Cloud Cost Optimization (AWS/Azure/GCP)';
		category: 'IT Services';
		tagline: 'Rightsize workloads and save 20–40% while maintaining security.';
		description: [,
			"Cost audits, reserved instance strategy, autoscaling policies, and FinOps dashboards with monthly reviews.",
		];
		features: ['Rightsizing and RIsAutoscaling policies', 'FinOps dashboards'];
		benefits: ['Immediate savingsBetter visibility', 'No security regressions'];
		pricing: { model: 'Fee + Savings Share', from: '$5,000 engagement', notes: '20% of realized savings' ,};
		links: { landing: 'https://ziontechgroup.com/services/cloud-cost-optimization' ,}
	};
	{,
		slug: 'managed-kubernetes';
		title: 'Managed Kubernetes Platform';
		category: 'IT Services';
		tagline: 'GitOps, observability, and 24/7 SRE for your clusters.';
		description: ['Hardened clusters with CIS benchmarks, zero trust networking, and progressive delivery.'];
		features: ['GitOps and progressive deliveryObservability stack', '24/7 SRE on-call'];
		benefits: ['Fewer incidentsFaster deployments', 'Stronger security'];
		pricing: { model: 'Monthly', from: '$4,000/mo', notes: 'Custom SLAs available' ,};
		links: { landing: 'https://ziontechgroup.com/services/managed-kubernetes' ,}
	};
	{,
		slug: 'data-engineering-analytics';
		title: 'Data Engineering and Analytics';
		category: 'IT Services';
		tagline: 'Modern ELT, lakehouse, and metrics with governance.';
		description: ['Build resilient pipelines, a governed lakehouse, and a semantic layer with BI dashboards.'];
		features: ['ELT pipelinesLakehouse and semantic layer', 'Metrics catalog and BI'];
		benefits: ['Trusted metricsSelf-serve analytics', 'SLA-backed data quality'];
		pricing: { model: 'Project', from: '$25,000+', notes: '' ,};
		links: { landing: 'https://ziontechgroup.com/services/data-engineering-analytics' ,}
	};
	{,
		slug: 'security-assessments-and-pentest';
		title: 'Security Assessments and Pentesting';
		category: 'IT Services';
		tagline: 'Application and cloud security with remediation roadmap.';
		description: ['Automated and manual testing with clear findings, risk ratings, and prioritized fixes.'];
		features: ['App and cloud reviewsManual penetration testing', 'Quick-win remediation plan'];
		benefits: ['Reduce riskMeet compliance needs', 'Actionable fixes'];
		pricing: { model: 'Fixed price', from: '$8,000+', notes: 'Scope-dependent' ,};
		links: { landing: 'https://ziontechgroup.com/services/security-assessments-and-pentest' ,}
	}
];