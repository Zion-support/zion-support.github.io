export type ServiceTier = {
	name: string;
	price: string;
	includes: string[];
};

export type ServiceItem = {
	slug: string;
	title: string;
	category: 'Micro SaaS' | 'AI Services' | 'IT Services';
	tagline: string;
	description: string[];
	features: string[];
	benefits: string[];
	pricing: ServiceTier[] | { model: string; from?: string; notes?: string };
	links: { landing: string; docs?: string; contact?: string };
};

export const contact = {
	phone: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

export const addedServices: ServiceItem[] = [
	{
		slug: 'ai-customer-support-copilot',
		title: 'AI Customer Support Copilot',
		category: 'Micro SaaS',
		tagline: 'Deflect tickets, resolve faster, and delight customers 24/7.',
		description: [
			"Embed a multilingual AI assistant trained on your knowledge base to answer FAQs, triage issues, and seamlessly hand off to human agents when needed.",
			"Integrates with leading help desks and CRMs. Analytics show deflection rate, CSAT impact, and cost savings."
		],
		features: [
			'Multilingual chat widget with secure human handoff',
			'RAG over your docs, product guides, and tickets',
			'Zendesk/Freshdesk/Intercom/Salesforce integrations',
			'Guardrails, escalation, and tone controls',
			'Full analytics dashboard and export'
		],
		benefits: [
			'Reduce first-response time by 60-80%',
			'Increase CSAT and resolution accuracy',
			'Lower support costs with safe automation'
		],
		pricing: [
			{ name: 'Starter', price: '$299/mo', includes: ['3k conversations/mo', '3 data sources', 'Email support'] },
			{ name: 'Growth', price: '$799/mo', includes: ['15k conversations/mo', '10 data sources', 'Priority support'] },
			{ name: 'Enterprise', price: 'Custom', includes: ['SSO & SLA', 'Unlimited data sources', 'Private cloud'] }
		],
		links: {
			landing: 'https://ziontechgroup.com/services/ai-customer-support-copilot',
			docs: 'https://ziontechgroup.com/services/ai-customer-support-copilot#docs',
			contact: 'mailto:kleber@ziontechgroup.com'
		}
	},
	{
		slug: 'document-automation-studio',
		title: 'Document Automation Studio',
		category: 'Micro SaaS',
		tagline: 'Generate, validate, and e-sign contracts and proposals automatically.',
		description: [
			"Template-driven document creation with variables and conditional logic, plus OCR and clause library for fast compliance.",
			"Built-in e-signature and CRM/payment integrations accelerate close."
		],
		features: [
			'Templating with variables and conditions',
			'OCR, redlining, clause library',
			'Integrated e-signature and audit trail',
			'HubSpot/Salesforce/Stripe integrations'
		],
		benefits: ['Shorter sales cycles', 'Fewer manual errors', 'Unified contract analytics'],
		pricing: [
			{ name: 'Core', price: '$199/mo', includes: ['5 templates', 'Basic OCR', 'Email support'] },
			{ name: 'Team', price: '$499/mo', includes: ['20 templates', 'Advanced OCR', 'Priority support'] },
			{ name: 'Business', price: '$899/mo', includes: ['Unlimited templates', 'SAML SSO', 'Dedicated CSM'] }
		],
		links: { landing: 'https://ziontechgroup.com/services/document-automation-studio', contact: 'tel:+13024640950' }
	},
	{
		slug: 'seo-change-tracker',
		title: 'SEO Change Tracker',
		category: 'Micro SaaS',
		tagline: 'Track content and technical changes that move your rankings.',
		description: [
			"Monitor on-page edits, schema, internal links, and performance to correlate changes with ranking and traffic."
		],
		features: ['Daily diffs', 'Core Web Vitals and uptime alerts', 'Slack notifications'],
		benefits: ['Catch regressions early', 'Prove ROI of SEO changes', 'Automate status reporting'],
		pricing: [
			{ name: 'Starter', price: '$99/mo', includes: ['1 site', 'Daily diffs', 'Email alerts'] },
			{ name: 'Pro', price: '$249/mo', includes: ['3 sites', 'Slack alerts', 'API access'] }
		],
		links: { landing: 'https://ziontechgroup.com/services/seo-change-tracker' }
	},
	{
		slug: 'lead-enrichment-api',
		title: 'Lead Enrichment API',
		category: 'Micro SaaS',
		tagline: 'Enrich emails and domains with firmographics and intent data.',
		description: [
			"REST API and batch CSV enrichment with caching and GDPR-compliant processing."
		],
		features: ['Real-time enrichment', 'Caching and batch modes', 'GDPR-compliant processing'],
		benefits: ['Higher conversion with better targeting', 'Cleaner CRM data', 'Faster SDR workflows'],
		pricing: { model: 'PAYG', from: '$0.05/record', notes: 'Volume discounts available' },
		links: { landing: 'https://ziontechgroup.com/services/lead-enrichment-api' }
	},
	{
		slug: 'rag-knowledge-base',
		title: 'Enterprise RAG Knowledge Base',
		category: 'AI Services',
		tagline: 'Deploy retrieval-augmented assistants over your private data safely.',
		description: [
			"Connect Google Drive, Confluence, or SharePoint; enable hybrid search with safety guardrails and observability."
		],
		features: ['Data connectors', 'Hybrid vector + keyword search', 'Safety guardrails', 'Drift/hallucination monitoring'],
		benefits: ['Trusted answers', 'Lower context costs', 'Continuous quality tracking'],
		pricing: { model: 'Project + Retainer', from: '$15,000+', notes: '$3k–$12k/mo retainers' },
		links: { landing: 'https://ziontechgroup.com/services/rag-knowledge-base', contact: 'mailto:kleber@ziontechgroup.com' }
	},
	{
		slug: 'fine-tuning-and-evals',
		title: 'Model Fine-tuning and Evals',
		category: 'AI Services',
		tagline: 'Curate data, tune models, and measure reliably with eval harnesses.',
		description: [
			"Dataset curation, labeling, eval harness, A/B testing, and prompt optimization with cost-aware deployment."
		],
		features: ['Dataset curation/labeling', 'Eval harness and A/B testing', 'Optimized serving on GPU/CPU'],
		benefits: ['Higher task accuracy', 'Reduced latency and cost', 'Reliable measurements'],
		pricing: { model: 'Project + Retainer', from: '$20,000+', notes: '$5k–$20k/mo retainers' },
		links: { landing: 'https://ziontechgroup.com/services/fine-tuning-and-evals' }
	},
	{
		slug: 'ai-agent-automation',
		title: 'AI Agent Automation (Ops, Sales, Support)',
		category: 'AI Services',
		tagline: 'Governed multi-step agents with human-in-the-loop controls.',
		description: [
			"Design and deploy safe agents with tool use, guardrails, approvals, and integrations with CRM, ticketing, and billing."
		],
		features: ['Governance and approval chains', 'Multi-tool orchestration', 'CRM/ticketing/billing integrations'],
		benefits: ['Automate repetitive work', 'Reduce errors', 'Auditability by design'],
		pricing: { model: 'Project + Retainer', from: '$18,000+', notes: '$4k–$15k/mo retainers' },
		links: { landing: 'https://ziontechgroup.com/services/ai-agent-automation' }
	},
	{
		slug: 'cloud-cost-optimization',
		title: 'Cloud Cost Optimization (AWS/Azure/GCP)',
		category: 'IT Services',
		tagline: 'Rightsize workloads and save 20–40% while maintaining security.',
		description: [
			"Cost audits, reserved instance strategy, autoscaling policies, and FinOps dashboards with monthly reviews."
		],
		features: ['Rightsizing and RIs', 'Autoscaling policies', 'FinOps dashboards'],
		benefits: ['Immediate savings', 'Better visibility', 'No security regressions'],
		pricing: { model: 'Fee + Savings Share', from: '$5,000 engagement', notes: '20% of realized savings' },
		links: { landing: 'https://ziontechgroup.com/services/cloud-cost-optimization' }
	},
	{
		slug: 'managed-kubernetes',
		title: 'Managed Kubernetes Platform',
		category: 'IT Services',
		tagline: 'GitOps, observability, and 24/7 SRE for your clusters.',
		description: ['Hardened clusters with CIS benchmarks, zero trust networking, and progressive delivery.'],
		features: ['GitOps and progressive delivery', 'Observability stack', '24/7 SRE on-call'],
		benefits: ['Fewer incidents', 'Faster deployments', 'Stronger security'],
		pricing: { model: 'Monthly', from: '$4,000/mo', notes: 'Custom SLAs available' },
		links: { landing: 'https://ziontechgroup.com/services/managed-kubernetes' }
	},
	{
		slug: 'data-engineering-analytics',
		title: 'Data Engineering and Analytics',
		category: 'IT Services',
		tagline: 'Modern ELT, lakehouse, and metrics with governance.',
		description: ['Build resilient pipelines, a governed lakehouse, and a semantic layer with BI dashboards.'],
		features: ['ELT pipelines', 'Lakehouse and semantic layer', 'Metrics catalog and BI'],
		benefits: ['Trusted metrics', 'Self-serve analytics', 'SLA-backed data quality'],
		pricing: { model: 'Project', from: '$25,000+', notes: '' },
		links: { landing: 'https://ziontechgroup.com/services/data-engineering-analytics' }
	},
	{
		slug: 'security-assessments-and-pentest',
		title: 'Security Assessments and Pentesting',
		category: 'IT Services',
		tagline: 'Application and cloud security with remediation roadmap.',
		description: ['Automated and manual testing with clear findings, risk ratings, and prioritized fixes.'],
		features: ['App and cloud reviews', 'Manual penetration testing', 'Quick-win remediation plan'],
		benefits: ['Reduce risk', 'Meet compliance needs', 'Actionable fixes'],
		pricing: { model: 'Fixed price', from: '$8,000+', notes: 'Scope-dependent' },
		links: { landing: 'https://ziontechgroup.com/services/security-assessments-and-pentest' }
	},
	// Enhanced AI-Powered Micro SaaS Services
	{
		slug: 'ai-content-studio-pro',
		title: 'AI Content Studio Pro',
		category: 'Micro SaaS',
		tagline: 'Generate, optimize, and distribute content across all channels with AI.',
		description: [
			"Advanced AI-powered content creation platform that generates blog posts, social media content, email campaigns, and marketing materials.",
			"Includes SEO optimization, brand voice consistency, and multi-platform distribution automation."
		],
		features: [
			'Multi-format content generation (blogs, social, email, ads)',
			'SEO optimization and keyword research',
			'Brand voice training and consistency',
			'Multi-platform publishing automation',
			'Content performance analytics',
			'A/B testing and optimization',
			'Plagiarism detection and originality scoring',
			'Multi-language support (50+ languages)'
		],
		benefits: [
			'Reduce content creation time by 80%',
			'Increase engagement rates by 45%',
			'Improve SEO rankings significantly',
			'Maintain consistent brand voice across all channels'
		],
		pricing: [
			{ name: 'Starter', price: '$199/mo', includes: ['10k words/month', '5 social platforms', 'Basic analytics'] },
			{ name: 'Professional', price: '$499/mo', includes: ['50k words/month', 'Unlimited platforms', 'Advanced analytics'] },
			{ name: 'Enterprise', price: '$1,299/mo', includes: ['Unlimited words', 'Custom integrations', 'Dedicated support'] }
		],
		links: {
			landing: 'https://ziontechgroup.com/services/ai-content-studio-pro',
			docs: 'https://ziontechgroup.com/services/ai-content-studio-pro#docs',
			contact: 'mailto:kleber@ziontechgroup.com'
		}
	},
	{
		slug: 'ai-email-orchestrator',
		title: 'AI Email Orchestrator',
		category: 'Micro SaaS',
		tagline: 'Intelligent email sequences that adapt to recipient behavior in real-time.',
		description: [
			"Advanced AI system that creates personalized email sequences, optimizes send times, and adapts content based on recipient engagement.",
			"Uses machine learning to predict optimal email timing, subject lines, and content for maximum open and conversion rates."
		],
		features: [
			'Behavioral trigger automation',
			'AI-powered subject line optimization',
			'Send time optimization',
			'Dynamic content personalization',
			'A/B testing with AI insights',
			'Deliverability optimization',
			'Unsubscribe prediction and prevention',
			'Cross-channel campaign coordination'
		],
		benefits: [
			'Increase open rates by 60%',
			'Boost conversion rates by 40%',
			'Reduce unsubscribe rates by 50%',
			'Save 20+ hours per week on email management'
		],
		pricing: [
			{ name: 'Starter', price: '$149/mo', includes: ['10k contacts', '5 campaigns', 'Basic analytics'] },
			{ name: 'Growth', price: '$399/mo', includes: ['50k contacts', 'Unlimited campaigns', 'Advanced analytics'] },
			{ name: 'Enterprise', price: '$999/mo', includes: ['Unlimited contacts', 'Custom integrations', 'Dedicated support'] }
		],
		links: {
			landing: 'https://ziontechgroup.com/services/ai-email-orchestrator',
			contact: 'mailto:kleber@ziontechgroup.com'
		}
	},
	{
		slug: 'ai-project-orchestrator',
		title: 'AI Project Orchestrator',
		category: 'Micro SaaS',
		tagline: 'Intelligent project management that predicts risks and optimizes team performance.',
		description: [
			"AI-powered project management platform that uses machine learning to predict project risks, optimize resource allocation, and automate task assignments.",
			"Provides real-time insights, automated reporting, and intelligent recommendations for project success."
		],
		features: [
			'AI-powered risk prediction',
			'Automated task assignment',
			'Resource optimization algorithms',
			'Real-time project health monitoring',
			'Predictive timeline adjustments',
			'Team performance analytics',
			'Automated status reporting',
			'Integration with 50+ tools'
		],
		benefits: [
			'Reduce project delays by 35%',
			'Improve team productivity by 45%',
			'Increase project success rate by 60%',
			'Save 15+ hours per week on project management'
		],
		pricing: [
			{ name: 'Team', price: '$299/mo', includes: ['10 team members', '5 projects', 'Basic AI features'] },
			{ name: 'Business', price: '$699/mo', includes: ['50 team members', 'Unlimited projects', 'Advanced AI features'] },
			{ name: 'Enterprise', price: '$1,499/mo', includes: ['Unlimited members', 'Custom integrations', 'Dedicated support'] }
		],
		links: {
			landing: 'https://ziontechgroup.com/services/ai-project-orchestrator',
			contact: 'mailto:kleber@ziontechgroup.com'
		}
	},
	// Advanced AI Services
	{
		slug: 'ai-financial-analytics-pro',
		title: 'AI Financial Analytics Pro',
		category: 'AI Services',
		tagline: 'Advanced AI-driven financial analysis and forecasting for businesses.',
		description: [
			"Comprehensive AI platform that analyzes financial data, predicts market trends, and provides actionable insights for business decisions.",
			"Uses advanced machine learning algorithms to identify patterns, detect anomalies, and forecast financial performance."
		],
		features: [
			'Real-time financial data analysis',
			'Predictive financial modeling',
			'Anomaly detection and fraud prevention',
			'Market trend analysis',
			'Cash flow forecasting',
			'Investment opportunity identification',
			'Risk assessment and mitigation',
			'Automated financial reporting'
		],
		benefits: [
			'Improve financial decision accuracy by 70%',
			'Reduce financial risks by 50%',
			'Increase profit margins by 25%',
			'Save 20+ hours per week on financial analysis'
		],
		pricing: [
			{ name: 'Professional', price: '$799/mo', includes: ['Basic analytics', 'Monthly reports', 'Email support'] },
			{ name: 'Business', price: '$1,999/mo', includes: ['Advanced analytics', 'Weekly reports', 'Priority support'] },
			{ name: 'Enterprise', price: '$4,999/mo', includes: ['Full analytics suite', 'Real-time reports', 'Dedicated support'] }
		],
		links: {
			landing: 'https://ziontechgroup.com/services/ai-financial-analytics-pro',
			contact: 'mailto:kleber@ziontechgroup.com'
		}
	},
	// Quantum Computing Services
	{
		slug: 'quantum-optimization-suite',
		title: 'Quantum Optimization Suite',
		category: 'AI Services',
		tagline: 'Leverage quantum computing for complex optimization problems.',
		description: [
			"Advanced quantum computing platform that solves complex optimization problems in logistics, finance, and manufacturing.",
			"Uses quantum algorithms to find optimal solutions for NP-hard problems that are intractable for classical computers."
		],
		features: [
			'Quantum annealing optimization',
			'Quantum machine learning algorithms',
			'Hybrid quantum-classical workflows',
			'Real-time quantum circuit optimization',
			'Quantum error correction',
			'Multi-objective optimization',
			'Quantum simulation capabilities',
			'Classical fallback algorithms'
		],
		benefits: [
			'Solve problems 1000x faster than classical computers',
			'Find optimal solutions for complex logistics',
			'Reduce operational costs by 30-50%',
			'Enable breakthrough discoveries in research'
		],
		pricing: [
			{ name: 'Research', price: '$2,999/mo', includes: ['10 quantum hours/month', 'Basic algorithms', 'Email support'] },
			{ name: 'Business', price: '$7,999/mo', includes: ['50 quantum hours/month', 'Advanced algorithms', 'Priority support'] },
			{ name: 'Enterprise', price: 'Custom', includes: ['Unlimited quantum hours', 'Custom solutions', 'Dedicated team'] }
		],
		links: {
			landing: 'https://ziontechgroup.com/services/quantum-optimization-suite',
			contact: 'mailto:kleber@ziontechgroup.com'
		}
	},
	// Blockchain & DeFi Services
	{
		slug: 'enterprise-blockchain-platform',
		title: 'Enterprise Blockchain Platform',
		category: 'IT Services',
		tagline: 'Secure, scalable blockchain solutions for enterprise applications.',
		description: [
			"Comprehensive blockchain platform that enables enterprises to build, deploy, and manage blockchain applications.",
			"Supports multiple consensus mechanisms, smart contracts, and provides enterprise-grade security and compliance."
		],
		features: [
			'Multi-blockchain support (Ethereum, Hyperledger, Corda)',
			'Smart contract development and deployment',
			'Enterprise-grade security and compliance',
			'Scalable consensus mechanisms',
			'Interoperability solutions',
			'Tokenization platform',
			'DeFi protocol integration',
			'Regulatory compliance tools'
		],
		benefits: [
			'Reduce transaction costs by 60%',
			'Increase transparency and trust',
			'Enable new business models',
			'Improve supply chain traceability'
		],
		pricing: [
			{ name: 'Starter', price: '$1,999/mo', includes: ['Basic blockchain setup', 'Standard support', 'Email support'] },
			{ name: 'Professional', price: '$4,999/mo', includes: ['Advanced features', 'Priority support', 'Custom development'] },
			{ name: 'Enterprise', price: '$12,999/mo', includes: ['Full platform access', 'Dedicated support', 'Custom solutions'] }
		],
		links: {
			landing: 'https://ziontechgroup.com/services/enterprise-blockchain-platform',
			contact: 'mailto:kleber@ziontechgroup.com'
		}
	},
	// IoT & Edge Computing
	{
		slug: 'ai-edge-computing-platform',
		title: 'AI Edge Computing Platform',
		category: 'IT Services',
		tagline: 'Deploy AI models at the edge for real-time processing and decision making.',
		description: [
			"Comprehensive edge computing platform that enables deployment of AI models on edge devices for real-time processing.",
			"Provides low-latency inference, offline capabilities, and seamless cloud synchronization."
		],
		features: [
			'Edge AI model deployment',
			'Real-time inference processing',
			'Offline operation capabilities',
			'Cloud-edge synchronization',
			'Device management and monitoring',
			'Model versioning and updates',
			'Data preprocessing pipelines',
			'Security and encryption'
		],
		benefits: [
			'Reduce latency by 90%',
			'Enable offline AI processing',
			'Reduce bandwidth costs by 70%',
			'Improve data privacy and security'
		],
		pricing: [
			{ name: 'Edge Starter', price: '$499/mo', includes: ['5 edge devices', 'Basic AI models', 'Email support'] },
			{ name: 'Edge Professional', price: '$1,299/mo', includes: ['25 edge devices', 'Advanced AI models', 'Priority support'] },
			{ name: 'Edge Enterprise', price: '$2,999/mo', includes: ['Unlimited devices', 'Custom solutions', 'Dedicated support'] }
		],
		links: {
			landing: 'https://ziontechgroup.com/services/ai-edge-computing-platform',
			contact: 'mailto:kleber@ziontechgroup.com'
		}
	},
	// Advanced Cybersecurity
	{
		slug: 'ai-cybersecurity-suite',
		title: 'AI Cybersecurity Suite',
		category: 'IT Services',
		tagline: 'Advanced AI-powered cybersecurity protection for modern threats.',
		description: [
			"Comprehensive AI-driven cybersecurity platform that provides real-time threat detection, automated response, and predictive security analytics.",
			"Uses machine learning to identify and prevent advanced persistent threats, zero-day attacks, and insider threats."
		],
		features: [
			'AI-powered threat detection',
			'Real-time security monitoring',
			'Automated incident response',
			'Behavioral analytics',
			'Vulnerability assessment',
			'Compliance reporting',
			'Security orchestration',
			'Threat intelligence integration'
		],
		benefits: [
			'Detect threats 10x faster than traditional methods',
			'Reduce false positives by 80%',
			'Prevent 95% of cyber attacks',
			'Ensure compliance with security standards'
		],
		pricing: [
			{ name: 'Essential', price: '$999/mo', includes: ['Basic threat detection', 'Email support', 'Standard monitoring'] },
			{ name: 'Professional', price: '$2,499/mo', includes: ['Advanced threat detection', 'Priority support', 'Custom rules'] },
			{ name: 'Enterprise', price: '$5,999/mo', includes: ['Full security suite', 'Dedicated support', 'Custom solutions'] }
		],
		links: {
			landing: 'https://ziontechgroup.com/services/ai-cybersecurity-suite',
			contact: 'mailto:kleber@ziontechgroup.com'
		}
	}
];

