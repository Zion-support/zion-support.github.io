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
	},
	{
		id: 'ai-sales-call-coach',
		title: 'AI Sales Call Coach',
		description: 'Real-time sales call coaching with talk-time balance, objection detection, and next-best prompts.',
		category: 'Micro SaaS',
		price: { monthly: 79, yearly: 790, currency: 'USD', pricingModel: 'subscription' },
		features: ['Live transcript + insights', 'Objection classifier', 'CRM auto-logging', 'Playbooks & scoring'],
		benefits: ['Higher win rates', 'Shorter ramp time', 'Consistent messaging'],
		useCases: ['Sales teams', 'SDR/AE enablement'],
		tags: ['Speech-to-text', 'NLP', 'RevOps'],
		marketPrice: '$59–$199/mo',
		roi: '5–15% lift in conversion',
		innovationLevel: 'Streaming LLM guidance',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-sales-call-coach',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'vendor-risk-automation',
		title: 'Vendor Risk Automation (VRM)',
		description: 'Automate vendor intake, security questionnaire parsing, risk scoring, and continuous monitoring.',
		category: 'Micro SaaS',
		price: { monthly: 149, yearly: 1490, currency: 'USD', pricingModel: 'subscription' },
		features: ['SIG/CAIQ parser', 'Auto-issues to Jira', 'Risk tiers & SLAs', 'External posture scans'],
		benefits: ['Faster vendor onboarding', 'Reduced risk exposure', 'Audit-ready evidence'],
		useCases: ['Procurement', 'Security', 'Compliance'],
		tags: ['GRC', 'Security', 'Automation'],
		marketPrice: '$99–$499/mo',
		roi: '50–70% time saved per assessment',
		innovationLevel: 'Questionnaire LLM + scanners',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/vendor-risk-automation',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'ecommerce-pricing-optimizer',
		title: 'E-commerce Pricing Optimizer',
		description: 'Dynamic pricing engine with competitor tracking, elasticity modeling, and MAP compliance.',
		category: 'Micro SaaS',
		price: { monthly: 129, yearly: 1290, currency: 'USD', pricingModel: 'subscription + usage' },
		features: ['Competitor scraping', 'Price elasticity curves', 'MAP guardrails', 'Channel-specific strategies'],
		benefits: ['Higher margins', 'Price confidence', 'Faster response to market'],
		useCases: ['Retail', 'Marketplaces', 'D2C'],
		tags: ['Pricing', 'Scraping', 'Optimization'],
		marketPrice: '$99–$399/mo + usage',
		roi: '2–5% gross margin increase',
		innovationLevel: 'Elasticity + MAP aware engine',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ecommerce-pricing-optimizer',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'ai-fraud-detection-payments',
		title: 'AI Fraud Detection for Payments',
		description: 'Behavioral analytics and graph-based anomaly detection to block fraud in real time.',
		category: 'AI Solutions',
		price: { oneTime: 12000, currency: 'USD', pricingModel: 'fixed + usage' },
		features: ['Graph embeddings', 'Device fingerprinting', 'Adaptive thresholds', 'Case management'],
		benefits: ['Lower chargebacks', 'Better approvals', 'Safer growth'],
		useCases: ['Fintech', 'Marketplaces', 'Subscriptions'],
		tags: ['Fraud', 'Graph AI', 'Risk'],
		marketPrice: '$10k–$200k + usage',
		roi: 'Reduce fraud loss 30–70%',
		innovationLevel: 'Graph + streaming inference',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-fraud-detection-payments',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'genai-product-copilot',
		title: 'GenAI Product Management Copilot',
		description: 'Requirements to roadmap copilot with PRD drafting, impact estimation, and stakeholder summaries.',
		category: 'Micro SaaS',
		price: { monthly: 49, yearly: 490, currency: 'USD', pricingModel: 'subscription' },
		features: ['Idea clustering', 'PRD templates', 'ICE/RICE scoring', 'Executive digests'],
		benefits: ['Faster discovery', 'Better prioritization', 'Clearer alignment'],
		useCases: ['Product teams', 'Startups', 'Agencies'],
		tags: ['GenAI', 'PM', 'Product Ops'],
		marketPrice: '$29–$149/mo',
		roi: 'Accelerate cycle time 20–40%',
		innovationLevel: 'LLM-first product ops',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/genai-product-copilot',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'revops-data-pipeline',
		title: 'RevOps Analytics Pipeline',
		description: 'ELT pipeline and metrics store for leads-to-revenue with dbt models and dashboard templates.',
		category: 'IT Services',
		price: { oneTime: 9000, currency: 'USD', pricingModel: 'fixed' },
		features: ['dbt metrics layer', 'Reverse ETL', 'Benchmarks & dashboards', 'Alerting rules'],
		benefits: ['Unified truth for GTM', 'Faster insights', 'Operational alerts'],
		useCases: ['B2B SaaS', 'RevOps', 'Analytics teams'],
		tags: ['Data', 'ELT', 'dbt'],
		marketPrice: '$8k–$50k',
		roi: 'Accelerate growth decisions',
		innovationLevel: 'Composable analytics stack',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/revops-data-pipeline',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'customer-360-cdp',
		title: 'Customer 360 CDP Implementation',
		description: 'Design and deploy event-based CDP for identity resolution, audiences, and omni-channel activation.',
		category: 'IT Services',
		price: { oneTime: 18000, currency: 'USD', pricingModel: 'fixed + retainer' },
		features: ['Identity stitching', 'Traits & audiences', 'Privacy controls', 'Activation playbooks'],
		benefits: ['Personalized CX', 'Higher LTV', 'Operational efficiency'],
		useCases: ['E-commerce', 'SaaS', 'Media'],
		tags: ['CDP', 'MarTech', 'Data'],
		marketPrice: '$15k–$200k',
		roi: '5–20% lift in revenue per user',
		innovationLevel: 'Modern event schema + privacy by design',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/customer-360-cdp',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'ai-compliance-copilot',
		title: 'AI Compliance Copilot',
		description: 'Privacy and compliance assistant that drafts DPIAs, maps controls, and summarizes evidence.',
		category: 'Micro SaaS',
		price: { monthly: 69, yearly: 690, currency: 'USD', pricingModel: 'subscription' },
		features: ['DPIA templates', 'Control mapping', 'Evidence summaries', 'Audit trail'],
		benefits: ['Faster audits', 'Lower overhead', 'Consistent documentation'],
		useCases: ['GRC teams', 'Security', 'Legal'],
		tags: ['Compliance', 'LLM', 'GRC'],
		marketPrice: '$49–$199/mo',
		roi: '30–60% time savings',
		innovationLevel: 'LLM drafting with review workflows',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-compliance-copilot',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'ai-code-security-review',
		title: 'AI Code Security Review',
		description: 'Augmented SAST/DAST with LLM triage that de-duplicates, explains impact, and suggests secure fixes.',
		category: 'AI Solutions',
		price: { oneTime: 7000, currency: 'USD', pricingModel: 'fixed' },
		features: ['Multi-engine scans', 'LLM triage', 'PR annotations', 'Compliance reports'],
		benefits: ['Fewer false positives', 'Faster remediation', 'Developer-friendly'],
		useCases: ['AppSec', 'Platform', 'Product teams'],
		tags: ['Security', 'DevSecOps', 'LLM'],
		marketPrice: '$5k–$80k',
		roi: 'Reduce vulns backlog 30–60%',
		innovationLevel: 'Triage + fix suggestions in PRs',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-code-security-review',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'cloud-cost-optimizer',
		title: 'Cloud Cost Optimizer (FinOps)',
		description: 'Actionable cost insights with rightsizing, commitment planning, anomaly detection, and budgets.',
		category: 'Micro SaaS',
		price: { monthly: 99, yearly: 999, currency: 'USD', pricingModel: 'subscription' },
		features: ['Kubernetes cost allocation', 'Savings Planner', 'Unit economics', 'Anomaly alerts'],
		benefits: ['Lower cloud bills', 'Predictable spend', 'Team accountability'],
		useCases: ['SaaS', 'Enterprises', 'Data platforms'],
		tags: ['FinOps', 'Cloud', 'Kubernetes'],
		marketPrice: '$79–$399/mo',
		roi: '15–40% savings typical',
		innovationLevel: 'Allocation + planning in one',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/cloud-cost-optimizer',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'iot-digital-twin-starter',
		title: 'IoT Digital Twin Starter',
		description: 'Blueprint and deploy an IoT data plane with device ingestion, twin modeling, and real-time dashboards.',
		category: 'IT Services',
		price: { oneTime: 20000, currency: 'USD', pricingModel: 'fixed' },
		features: ['Device registry', 'Twin modeling', 'Stream processing', 'Operator dashboards'],
		benefits: ['Operational visibility', 'Predictive maintenance', 'Faster incident response'],
		useCases: ['Manufacturing', 'Logistics', 'Energy'],
		tags: ['IoT', 'Streaming', 'Analytics'],
		marketPrice: '$20k–$250k',
		roi: 'Reduce downtime 10–30%',
		innovationLevel: 'Edge to cloud reference design',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/iot-digital-twin-starter',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'ai-marketing-creative-studio',
		title: 'AI Marketing Creative Studio',
		description: 'Generate on-brand images, video scripts, and variations with collaborative approvals and usage tracking.',
		category: 'Micro SaaS',
		price: { monthly: 69, yearly: 690, currency: 'USD', pricingModel: 'subscription + usage' },
		features: ['Brand guardrails', 'Asset variations', 'Usage rights tracking', 'Team workspace'],
		benefits: ['Faster creative cycles', 'Lower costs', 'Brand consistency'],
		useCases: ['Marketing teams', 'Agencies', 'Creators'],
		tags: ['GenAI', 'Creative', 'Brand'],
		marketPrice: '$49–$299/mo + usage',
		roi: 'Cut production time 40–70%',
		innovationLevel: 'Brand-aware generation',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-marketing-creative-studio',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'ai-hr-copilot',
		title: 'AI HR Copilot',
		description: 'Job description drafting, candidate screening, interview question banks, and onboarding task automation.',
		category: 'Micro SaaS',
		price: { monthly: 59, yearly: 590, currency: 'USD', pricingModel: 'subscription' },
		features: ['JD generator', 'Resume screening', 'Structured interviews', 'Onboarding checklists'],
		benefits: ['Faster hiring', 'Better candidate fit', 'Consistent onboarding'],
		useCases: ['People Ops', 'Recruiters', 'Startups'],
		tags: ['HRTech', 'LLM', 'Automation'],
		marketPrice: '$39–$199/mo',
		roi: 'Reduce time-to-hire 20–40%',
		innovationLevel: 'Talent + onboarding workflows',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-hr-copilot',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'data-quality-observability',
		title: 'Data Quality Observability',
		description: 'Detect schema drift, null spikes, freshness issues, and PII leaks across data pipelines.',
		category: 'Micro SaaS',
		price: { monthly: 119, yearly: 1190, currency: 'USD', pricingModel: 'subscription' },
		features: ['Great Expectations rules', 'Auto-lineage', 'Freshness SLAs', 'PII detection'],
		benefits: ['Trustworthy data', 'Fewer incidents', 'Compliance-ready'],
		useCases: ['Data platforms', 'Analytics', 'ML teams'],
		tags: ['DataOps', 'Observability', 'Quality'],
		marketPrice: '$99–$499/mo',
		roi: 'Prevent costly data breaks',
		innovationLevel: 'Lineage + anomaly detection',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/data-quality-observability',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'ai-legal-summarizer',
		title: 'AI Legal Summarizer & Clause Extractor',
		description: 'Summarize contracts, extract obligations, and compare clauses to playbooks with redline suggestions.',
		category: 'AI Solutions',
		price: { oneTime: 8000, currency: 'USD', pricingModel: 'fixed + subscription' },
		features: ['Clause library', 'Risk flags', 'Playbook compare', 'Export to Word'],
		benefits: ['Faster reviews', 'Lower legal spend', 'Consistent terms'],
		useCases: ['Legal', 'Sales Ops', 'Procurement'],
		tags: ['LegalTech', 'NLP', 'LLM'],
		marketPrice: '$5k–$100k + seats',
		roi: 'Reduce review time 40–70%',
		innovationLevel: 'Contract-aware LLM with guidance',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/ai-legal-summarizer',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'security-data-lake',
		title: 'Security Data Lake & SIEM Modernization',
		description: 'Architect and implement a cloud-native security data lake with detections and dashboards.',
		category: 'IT Services',
		price: { oneTime: 25000, currency: 'USD', pricingModel: 'fixed + T&M' },
		features: ['Ingestion pipelines', 'Detection-as-code', 'Threat intel enrichment', 'SOC dashboards'],
		benefits: ['Lower SIEM costs', 'Better detections', 'Faster investigations'],
		useCases: ['Security teams', 'Enterprises'],
		tags: ['Security', 'SIEM', 'Data Lake'],
		marketPrice: '$20k–$500k',
		roi: 'Cost reduction vs legacy SIEM',
		innovationLevel: 'Detection-as-code approach',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/security-data-lake',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	},
	{
		id: 'llm-evaluation-harness',
		title: 'LLM Evaluation Harness & Red Teaming',
		description: 'Design eval datasets, automatic scoring, and red teaming workflows to harden LLM apps.',
		category: 'AI Solutions',
		price: { oneTime: 14000, currency: 'USD', pricingModel: 'fixed' },
		features: ['Golden sets', 'Bias/safety tests', 'Regression suite', 'Guardrail tuning'],
		benefits: ['Reduced regressions', 'Safer outputs', 'Measurable quality'],
		useCases: ['AI product teams', 'Enterprises'],
		tags: ['LLM', 'Evaluation', 'Safety'],
		marketPrice: '$10k–$200k',
		roi: 'Prevent costly failures',
		innovationLevel: 'Automated eval pipelines',
		contactInfo: {
			phone: '+1 302 464 0950',
			email: 'kleber@ziontechgroup.com',
			website: 'https://ziontechgroup.com/services/llm-evaluation-harness',
			address: '364 E Main St STE 1008 Middletown DE 19709'
		}
	}
];

export default ZION_SERVICES;