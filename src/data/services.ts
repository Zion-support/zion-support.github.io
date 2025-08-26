import { UnifiedService } from '@/types/unifiedServiceTypes';

export const ZION_SERVICES: UnifiedService[] = [
	{
		id: 'ai-lead-scoring-api',
		title: 'AI Lead Scoring API',
		description: 'Real-time lead scoring API that ranks prospects by conversion likelihood using behavioral and firmographic signals.',
		category: 'Micro SaaS',
		price: { monthly: 99, yearly: 999, currency: 'USD', pricingModel: 'subscription' },
		features: [
			'Plug-and-play REST API with SDKs',
			'Adaptive models trained on your CRM outcomes',
			'Webhook automations for hot leads',
			'GDPR/CCPA data handling modes'
		],
		benefits: [
			'Focus sales on high-intent leads',
			'Increase close rates 10–25%',
			'Shorter sales cycles with predictive routing'
		],
		useCases: ['B2B SaaS', 'Agencies', 'E-commerce'],
		tags: ['API', 'Sales Ops', 'Predictive Analytics'],
		marketPrice: '$79–$199/mo',
		roi: '3–8x on paid pipeline efficiency',
		innovationLevel: 'Production-grade predictive scoring',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-lead-scoring-api',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'invoice-ocr-api',
		title: 'Invoice OCR & AP Automation API',
		description: 'High-accuracy invoice parsing and approval workflow automation with validation rules and export to ERP.',
		category: 'Micro SaaS',
		price: { monthly: 49, yearly: 490, currency: 'USD', pricingModel: 'usage + subscription' },
		features: [
			'95%+ field extraction accuracy',
			'Line-item table parsing',
			'Duplicate detection and fraud checks',
			'Exports to QuickBooks, Netsuite, Xero'
		],
		benefits: ['Reduce AP processing time by 70%', 'Lower manual errors', 'Automated approvals'],
		useCases: ['Finance teams', 'Bookkeepers', 'Marketplaces'],
		tags: ['OCR', 'FinOps', 'RPA'],
		marketPrice: '$39–$149/mo + usage',
		roi: '2–6x via labor savings',
		innovationLevel: 'Document AI + rule engine',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/invoice-ocr-api',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'uptime-ssl-monitor',
		title: 'Uptime, SSL & Lighthouse Monitor',
		description: 'Global uptime checks, SSL expiry alerts, and scheduled Lighthouse performance audits with webhooks.',
		category: 'Micro SaaS',
		price: { monthly: 29, yearly: 290, currency: 'USD', pricingModel: 'subscription' },
		features: ['Multi-region pings', 'SMS/Email/Slack alerts', 'Core Web Vitals tracking', 'Public status pages'],
		benefits: ['Prevent outages', 'Improve SEO & UX', 'Proactive SSL renewals'],
		useCases: ['SaaS apps', 'E-commerce', 'Agencies'],
		tags: ['DevOps', 'SRE', 'Monitoring'],
		marketPrice: '$15–$99/mo',
		roi: 'Avoid revenue loss from downtime',
		innovationLevel: 'Unified synthetic + web perf',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/uptime-monitor',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'ai-doc-qa-widget',
		title: 'AI Document Q&A Widget',
		description: 'Embed a secure, brandable chat widget that answers questions from your docs, PDFs, and knowledge base.',
		category: 'Micro SaaS',
		price: { monthly: 79, yearly: 790, currency: 'USD', pricingModel: 'subscription' },
		features: ['RAG over PDFs/Notion/Confluence', 'Citations and sources', 'Access control', 'Analytics dashboard'],
		benefits: ['Deflect support tickets', 'Faster onboarding', '24/7 self-serve answers'],
		useCases: ['Customer support', 'HR/IT helpdesk', 'Internal wikis'],
		tags: ['RAG', 'LLM', 'Support Automation'],
		marketPrice: '$59–$199/mo',
		roi: '20–40% ticket deflection',
		innovationLevel: 'Domain-grounded chat',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-doc-qa-widget',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'seo-content-studio',
		title: 'AI SEO Content Studio',
		description: 'Research, plan, and generate SEO briefs and drafts with SERP analysis and internal linking suggestions.',
		category: 'Micro SaaS',
		price: { monthly: 59, yearly: 590, currency: 'USD', pricingModel: 'subscription' },
		features: ['Keyword clustering', 'SERP gap analysis', 'Outline + draft generation', 'Programmatic SEO tools'],
		benefits: ['Rank faster', 'Scale content ops', 'Consistent quality'],
		useCases: ['Publishers', 'E-commerce', 'Agencies'],
		tags: ['SEO', 'NLP', 'Growth'],
		marketPrice: '$39–$149/mo',
		roi: 'Compounding organic growth',
		innovationLevel: 'Workflows + AI briefs',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-seo-content-studio',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'cloud-migration-accelerator',
		title: 'Cloud Migration Accelerator',
		description: 'Blueprint, migrate, and optimize workloads on AWS/Azure/GCP with security and FinOps baked in.',
		category: 'IT Services',
		price: { oneTime: 10000, currency: 'USD', pricingModel: 'fixed + T&M' },
		features: ['Landing zones & IaC', 'Zero-downtime cutovers', 'Guardrails & compliance', 'FinOps right-sizing'],
		benefits: ['Reduced cloud spend', 'Faster delivery', 'Lower risk migrations'],
		useCases: ['Data center exits', 'App modernization', 'M&A integration'],
		tags: ['Cloud', 'IaC', 'FinOps'],
		marketPrice: '$8k–$50k+',
		roi: '15–35% cost optimization',
		innovationLevel: 'Automation-first methodology',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/cloud-migration-accelerator',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'managed-kubernetes',
		title: 'Managed Kubernetes & Platform Engineering',
		description: 'SRE-grade Kubernetes clusters, GitOps pipelines, and golden paths for developer productivity.',
		category: 'IT Services',
		price: { monthly: 3000, yearly: 30000, currency: 'USD', pricingModel: 'retainer' },
		features: ['EKS/AKS/GKE', 'GitOps with ArgoCD/Flux', 'SLOs & autoscaling', 'Security baselines'],
		benefits: ['Higher reliability', 'Faster deploys', 'Reduced toil'],
		useCases: ['SaaS scale-ups', 'Enterprises', 'Gov/Regulated'],
		tags: ['Kubernetes', 'DevOps', 'SRE'],
		marketPrice: '$2k–$15k/mo',
		roi: 'Fewer incidents, faster MTTR',
		innovationLevel: 'Productized platform ops',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/managed-kubernetes',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'soc2-readiness',
		title: 'SOC 2 Readiness & Continuous Compliance',
		description: 'Gap assessment, remediation plan, and automation to pass SOC 2 Type I/II with ongoing evidence collection.',
		category: 'IT Services',
		price: { oneTime: 8000, currency: 'USD', pricingModel: 'fixed + retainer' },
		features: ['Control mapping', 'Policy pack', 'Ticketed remediation', 'Evidence automation'],
		benefits: ['Accelerate audits', 'Win enterprise deals', 'Lower compliance overhead'],
		useCases: ['B2B SaaS', 'Fintech', 'Healthcare'],
		tags: ['Security', 'Compliance', 'GRC'],
		marketPrice: '$6k–$30k+',
		roi: 'Shorter sales cycles',
		innovationLevel: 'Dev-friendly compliance ops',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/soc2-readiness',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'mlops-foundation',
		title: 'MLOps Foundation Package',
		description: 'End-to-end ML lifecycle setup: data versioning, experiment tracking, CI/CD for models, and monitoring.',
		category: 'AI Solutions',
		price: { oneTime: 12000, currency: 'USD', pricingModel: 'fixed' },
		features: ['Feature store', 'Model registry', 'Canary deploys', 'Drift monitoring'],
		benefits: ['Ship ML reliably', 'Reproducibility', 'Faster iteration'],
		useCases: ['Data science teams', 'AI product launches'],
		tags: ['MLOps', 'ML', 'Monitoring'],
		marketPrice: '$10k–$60k',
		roi: 'Cut model deployment time 50–80%',
		innovationLevel: 'Best-practice reference stack',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/mlops-foundation',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'custom-llm-fine-tuning',
		title: 'Custom LLM Fine-Tuning & RAG',
		description: 'Domain-adapted LLMs with secure retrieval over your private data, evaluation harness, and safety guardrails.',
		category: 'AI Solutions',
		price: { oneTime: 15000, currency: 'USD', pricingModel: 'fixed + usage' },
		features: ['Data pipelines', 'RAG indexing', 'Eval harness', 'Guardrails & PII redaction'],
		benefits: ['Higher answer accuracy', 'Brand-safe outputs', 'Lower hallucinations'],
		useCases: ['Support bots', 'Agent copilots', 'Doc Q&A'],
		tags: ['LLM', 'RAG', 'NLP'],
		marketPrice: '$15k–$150k+',
		roi: 'Deflect tickets, faster workflows',
		innovationLevel: 'Enterprise-grade LLMops',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/custom-llm-fine-tuning',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'ai-support-chatbot',
		title: 'AI Support Chatbot Implementation',
		description: 'Deploy an omni-channel AI assistant integrated with your ticketing, CRM, and knowledge base.',
		category: 'AI Solutions',
		price: { oneTime: 5000, currency: 'USD', pricingModel: 'fixed + subscription' },
		features: ['Omni-channel inbox', 'Escalation to human', 'CSAT tracking', 'Analytics & reporting'],
		benefits: ['24/7 support', 'Lower response times', 'Higher NPS'],
		useCases: ['Customer support', 'IT helpdesk'],
		tags: ['Chatbot', 'Automation', 'CX'],
		marketPrice: '$3k–$50k+',
		roi: '20–50% support cost savings',
		innovationLevel: 'Agent handoff + guardrails',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-support-chatbot',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'computer-vision-inspection',
		title: 'Computer Vision Quality Inspection',
		description: 'Edge and cloud vision models to detect defects on production lines with real-time alerts.',
		category: 'AI Solutions',
		price: { oneTime: 25000, currency: 'USD', pricingModel: 'fixed + hardware' },
		features: ['Model training & tuning', 'Edge deployment', 'Operator dashboard', 'Integration to MES/ERP'],
		benefits: ['Reduced scrap', 'Higher yield', 'Continuous improvement'],
		useCases: ['Manufacturing', 'Logistics', 'Agriculture'],
		tags: ['Vision', 'Edge AI', 'IoT'],
		marketPrice: '$20k–$250k+',
		roi: '3–12 month payback typical',
		innovationLevel: 'Edge + cloud hybrid',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/computer-vision-inspection',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	}
];

export default ZION_SERVICES;