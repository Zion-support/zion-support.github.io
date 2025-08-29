export type ServiceItem = {
	id: string;
	title: string;
	description: string;
	category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Digital Marketing' | 'E-commerce Solutions' | 'Remote Work Tools' | 'Legal Tech' | 'EdTech' | 'Real Estate Tech' | 'Supply Chain Tech' | 'Energy Tech' | 'Smart Cities' | 'AgriTech' | 'Media & Entertainment' | 'Logistics Tech' | 'HR Tech' | 'Sales Tech' | 'Customer Experience' | 'Productivity Tools';
	price: string; // average market starting price
	billing: 'month' | 'project' | 'hour';
	features: string[];
	ctaLabel: string;
	href: string; // internal path or external URL
	external?: boolean;
};
export type ServiceCategory = {
	name: string;
	slug: string;
	items: ServiceItem[];
};
export const servicesCatalog: ServiceCategory[] = [
	{
		name: 'Micro SaaS',
		slug: 'micro-saas',
		items: [
			{
				id: 'pdf-render-api',
				title: 'PDF Render API',
				description: 'Reliable HTML-to-PDF rendering with templates, assets, async callbacks, and storage destinations.',
				category: 'Micro SaaS',
				price: '$29',
				billing: 'month',
				features: [
					'Chromium-based rendering',
					'Templates and asset hosting',
					'Async callbacks and webhooks',
					'S3/GCS/Azure storage targets',
					'Usage analytics and quotas'
				],
				ctaLabel: 'Generate PDFs',
				href: 'https://ziontechgroup.com/services/pdf-render-api'
			},
			{
				id: 'api-documentation-generator',
				title: 'API Documentation Generator',
				description: 'Turn OpenAPI/GraphQL schemas into beautiful, versioned docs with SDK snippets and search.',
				category: 'Micro SaaS',
				price: '$49',
				billing: 'month',
				features: [
					'Schema parsing (OAS/GraphQL)',
					'SDK snippets and examples',
					'Changelogs and versioning',
					'Full-text search and themes',
					'CI publish workflows'
				],
				ctaLabel: 'Publish Docs',
				href: 'https://ziontechgroup.com/services/api-documentation-generator'
			},
			{
				id: 'smart-contract-risk-scanner',
				title: 'Smart Contract Risk Scanner',
				description: 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',
				category: 'Micro SaaS',
				price: '$299',
				billing: 'month',
				features: [
					'Real-time vulnerability detection',
					'Automated security scoring',
					'Compliance reporting',
					'Integration with major blockchains',
					'24/7 monitoring dashboard'
				],
				ctaLabel: 'Start Free Trial',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-content-optimizer',
				title: 'AI Content Optimizer Pro',
				description: 'Advanced content optimization using AI to improve SEO, readability, and engagement across all digital platforms.',
				category: 'Micro SaaS',
				price: '$199',
				billing: 'month',
				features: [
					'AI-powered SEO optimization',
					'Content readability scoring',
					'Multi-language support',
					'Performance analytics',
					'Automated A/B testing'
				],
				ctaLabel: 'Get Started',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-workflow-automation',
				title: 'Quantum Workflow Automation',
				description: 'Next-generation workflow automation leveraging quantum computing principles for complex business process optimization.',
				category: 'Micro SaaS',
				price: '$499',
				billing: 'month',
				features: [
					'Quantum-inspired algorithms',
					'Complex process modeling',
					'Real-time optimization',
					'Predictive analytics',
					'Enterprise integration'
				],
				ctaLabel: 'Schedule Demo',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'edge-ai-inference-engine',
				title: 'Edge AI Inference Engine',
				description: 'Lightweight AI inference engine optimized for edge devices, enabling real-time AI processing without cloud dependency.',
				category: 'Micro SaaS',
				price: '$399',
				billing: 'month',
				features: [
					'Edge-optimized models',
					'Low latency processing',
					'Offline capability',
					'Model compression',
					'Cross-platform support'
				],
				ctaLabel: 'Deploy Now',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'autonomous-crm-optimizer',
				title: 'Autonomous CRM Optimizer',
				description: 'AI-powered CRM system that automatically optimizes customer relationships, sales processes, and marketing campaigns.',
				category: 'Micro SaaS',
				price: '$599',
				billing: 'month',
				features: [
					'Autonomous lead scoring',
					'Predictive customer behavior',
					'Automated follow-ups',
					'Revenue optimization',
					'Multi-channel integration'
				],
				ctaLabel: 'Optimize CRM',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-supply-chain-optimizer',
				title: 'Quantum Supply Chain Optimizer',
				description: 'Revolutionary supply chain optimization using quantum algorithms for complex logistics and inventory management.',
				category: 'Micro SaaS',
				price: '$799',
				billing: 'month',
				features: [
					'Quantum route optimization',
					'Real-time inventory tracking',
					'Predictive demand forecasting',
					'Cost optimization',
					'Risk assessment'
				],
				ctaLabel: 'Optimize Supply Chain',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'soc2-compliance-automation-saas',
				title: 'SOC 2 Compliance Automation SaaS',
				description: 'Automate evidence collection, policy mapping, and control monitoring to pass SOC 2 audits faster.',
				category: 'Micro SaaS',
				price: '$249',
				billing: 'month',
				features: [
					'Automated evidence collection',
					'Control health dashboards',
					'Policy templates & mapping',
					'Integrations: AWS, GCP, Azure, Jira, GitHub',
					'Audit-ready export'
				],
				ctaLabel: 'Start Compliance',
				href: 'https://ziontechgroup.com/services'
			},
			{
				id: 'mlops-observability',
				title: 'MLOps Observability & Drift Monitor',
				description: 'Track model performance, detect data drift, and automate retraining triggers with guardrails.',
				category: 'Micro SaaS',
				price: '$299',
				billing: 'month',
				features: [
					'Latency, accuracy, bias metrics',
					'Drift and anomaly alerts',
					'Rollback and canary controls',
					'Integration: SageMaker, Vertex AI, OpenAI',
					'Compliance logging'
				],
				ctaLabel: 'Monitor Models',
				href: 'https://ziontechgroup.com/services'
			},
			// New innovative micro SaaS services
			{
				id: 'ai-video-content-generator',
				title: 'AI Video Content Generator',
				description: 'Generate professional videos from text, images, and audio using advanced AI models for marketing and training.',
				category: 'Micro SaaS',
				price: '$399',
				billing: 'month',
				features: [
					'Text-to-video generation',
					'AI voice synthesis',
					'Custom branding templates',
					'Multi-format export',
					'Collaborative editing'
				],
				ctaLabel: 'Create Videos',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'smart-invoice-processor',
				title: 'Smart Invoice Processor',
				description: 'AI-powered invoice processing that automatically extracts data, validates information, and integrates with accounting systems.',
				category: 'Micro SaaS',
				price: '$149',
				billing: 'month',
				features: [
					'OCR data extraction',
					'Automated validation',
					'ERP integration',
					'Approval workflows',
					'Fraud detection'
				],
				ctaLabel: 'Process Invoices',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-customer-support-automation',
				title: 'AI Customer Support Automation',
				description: 'Intelligent customer support system that handles inquiries, escalates complex issues, and provides 24/7 assistance.',
				category: 'Micro SaaS',
				price: '$299',
				billing: 'month',
				features: [
					'Natural language processing',
					'Multi-language support',
					'Knowledge base integration',
					'Escalation workflows',
					'Performance analytics'
				],
				ctaLabel: 'Automate Support',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'predictive-inventory-manager',
				title: 'Predictive Inventory Manager',
				description: 'AI-driven inventory management that predicts demand, optimizes stock levels, and reduces carrying costs.',
				category: 'Micro SaaS',
				price: '$199',
				billing: 'month',
				features: [
					'Demand forecasting',
					'Stock optimization',
					'Reorder automation',
					'Supplier integration',
					'Cost analysis'
				],
				ctaLabel: 'Optimize Inventory',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-powered-email-marketing',
				title: 'AI-Powered Email Marketing Suite',
				description: 'Intelligent email marketing platform that personalizes content, optimizes send times, and maximizes engagement rates.',
				category: 'Micro SaaS',
				price: '$249',
				billing: 'month',
				features: [
					'AI content personalization',
					'Optimal timing algorithms',
					'A/B testing automation',
					'Behavioral segmentation',
					'ROI tracking'
				],
				ctaLabel: 'Boost Engagement',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'AI Solutions',
		slug: 'ai-solutions',
		items: [
			{
				id: 'vector-search-starter',
				title: 'Vector Search Starter',
				description: 'Production-ready semantic search with multi-model embeddings, hybrid search, and relevance tuning.',
				category: 'AI Solutions',
				price: '$59',
				billing: 'month',
				features: [
					'Multi-model embeddings',
					'Hybrid + rerank search',
					'SDKs and relevance tuning',
					'Observability and quotas',
					'Pinecone/Weaviate/Postgres integrations'
				],
				ctaLabel: 'Launch Search',
				href: 'https://ziontechgroup.com/services/vector-search-starter'
			},
			{
				id: 'autonomous-business-manager',
				title: 'Autonomous Business Manager',
				description: 'AI-powered business management system that autonomously handles operations, decision-making, and strategic planning.',
				category: 'AI Solutions',
				price: '$2,999',
				billing: 'month',
				features: [
					'Autonomous decision making',
					'Predictive business modeling',
					'Resource optimization',
					'Risk assessment',
					'Continuous learning'
				],
				ctaLabel: 'Request Demo',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'consciousness-simulation-platform',
				title: 'Consciousness Simulation Platform',
				description: 'Advanced AI platform for simulating and understanding consciousness, enabling breakthrough research in cognitive science.',
				category: 'AI Solutions',
				price: '$5,999',
				billing: 'month',
				features: [
					'Neural network simulation',
					'Consciousness modeling',
					'Research tools',
					'Data visualization',
					'Collaborative workspace'
				],
				ctaLabel: 'Research Access',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-neural-network',
				title: 'Quantum Neural Network Platform',
				description: 'Revolutionary platform combining quantum computing with neural networks for unprecedented AI capabilities.',
				category: 'AI Solutions',
				price: '$8,999',
				billing: 'month',
				features: [
					'Quantum neural processing',
					'Hybrid classical-quantum',
					'Advanced training algorithms',
					'Quantum advantage',
					'Research collaboration'
				],
				ctaLabel: 'Quantum Access',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-autonomous-vehicles',
				title: 'AI Autonomous Vehicle Platform',
				description: 'Complete autonomous vehicle management system with AI-driven navigation, safety, and fleet optimization.',
				category: 'AI Solutions',
				price: '$4,999',
				billing: 'month',
				features: [
					'Autonomous navigation',
					'Safety monitoring',
					'Fleet management',
					'Predictive maintenance',
					'Regulatory compliance'
				],
				ctaLabel: 'Vehicle Integration',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'enterprise-rag-search',
				title: 'Enterprise RAG Search Platform',
				description: 'Private, secure Retrieval-Augmented Generation over your docs, wikis, tickets, and data.',
				category: 'AI Solutions',
				price: '$3,499',
				billing: 'month',
				features: [
					'Hybrid vector + keyword search',
					'PII redaction and access control',
					'Grounding citations',
					'Plugins: Confluence, Google Drive, SharePoint',
					'On-prem or VPC deployment'
				],
				ctaLabel: 'Launch Secure Chat',
				href: 'https://ziontechgroup.com/services'
			},
			{
				id: 'agentic-copilot-suite',
				title: 'Agentic Copilot Suite (Sales, Support, DevOps)',
				description: 'Task-driven AI agents that execute workflows across CRM, ticketing, CI/CD, and cloud.',
				category: 'AI Solutions',
				price: '$4,999',
				billing: 'month',
				features: [
					'Guardrailed tool use',
					'Human-in-the-loop approvals',
					'Observability and audit trails',
					'Connectors: Salesforce, Zendesk, GitHub, AWS',
					'Okta and SSO ready'
				],
				ctaLabel: 'Deploy Copilots',
				href: 'https://ziontechgroup.com/services'
			},
			// New AI Solutions
			{
				id: 'ai-legal-document-analyzer',
				title: 'AI Legal Document Analyzer',
				description: 'Advanced legal document analysis using AI to extract key information, identify risks, and generate summaries.',
				category: 'AI Solutions',
				price: '$1,999',
				billing: 'month',
				features: [
					'Contract analysis',
					'Risk identification',
					'Compliance checking',
					'Document summarization',
					'Legal research integration'
				],
				ctaLabel: 'Analyze Documents',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-medical-imaging-diagnosis',
				title: 'AI Medical Imaging Diagnosis',
				description: 'AI-powered medical imaging analysis for early disease detection, diagnosis, and treatment planning.',
				category: 'AI Solutions',
				price: '$3,999',
				billing: 'month',
				features: [
					'Multi-modality imaging',
					'Disease detection',
					'Treatment recommendations',
					'Radiologist assistance',
					'Clinical workflow integration'
				],
				ctaLabel: 'Medical AI Demo',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-financial-fraud-detection',
				title: 'AI Financial Fraud Detection',
				description: 'Real-time fraud detection system using AI to identify suspicious transactions and prevent financial crimes.',
				category: 'AI Solutions',
				price: '$2,499',
				billing: 'month',
				features: [
					'Real-time monitoring',
					'Behavioral analysis',
					'Risk scoring',
					'Alert management',
					'Compliance reporting'
				],
				ctaLabel: 'Detect Fraud',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-personalized-learning-platform',
				title: 'AI Personalized Learning Platform',
				description: 'Adaptive learning system that personalizes educational content based on individual learning styles and progress.',
				category: 'AI Solutions',
				price: '$1,499',
				billing: 'month',
				features: [
					'Learning path optimization',
					'Content personalization',
					'Progress tracking',
					'Adaptive assessments',
					'Analytics dashboard'
				],
				ctaLabel: 'Personalize Learning',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'IT Services',
		slug: 'it-services',
		items: [
			{
				id: 'email-deliverability-monitor',
				title: 'Email Deliverability Monitor',
				description: 'Inbox placement checks, DMARC/SPF/DKIM verification, and blocklist alerts with actionable guidance.',
				category: 'IT Services',
				price: '$39',
				billing: 'month',
				features: [
					'DMARC/SPF/DKIM verification',
					'Inbox placement tests',
					'Blocklist monitoring',
					'Domain reputation scoring',
					'Alerting and weekly reports'
				],
				ctaLabel: 'Improve Inbox Rate',
				href: 'https://ziontechgroup.com/services/email-deliverability-monitor'
			},
			{
				id: 'zero-trust-architecture',
				title: 'Zero Trust Network Architecture',
				description: 'Comprehensive zero trust security implementation with continuous verification and adaptive access control.',
				category: 'IT Services',
				price: '$15,000',
				billing: 'project',
				features: [
					'Identity verification',
					'Micro-segmentation',
					'Continuous monitoring',
					'Threat detection',
					'Compliance reporting'
				],
				ctaLabel: 'Security Assessment',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'five-g-enterprise-network',
				title: '5G Enterprise Network Solutions',
				description: 'Custom 5G network infrastructure for enterprises with ultra-low latency and massive IoT connectivity.',
				category: 'IT Services',
				price: '$25,000',
				billing: 'project',
				features: [
					'Private 5G networks',
					'Network slicing',
					'Edge computing',
					'IoT integration',
					'Performance optimization'
				],
				ctaLabel: 'Network Design',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-edge-computing',
				title: 'Quantum Edge Computing Platform',
				description: 'Next-generation edge computing platform leveraging quantum principles for ultra-fast processing and decision making.',
				category: 'IT Services',
				price: '$35,000',
				billing: 'project',
				features: [
					'Quantum edge processing',
					'Real-time analytics',
					'Distributed computing',
					'Energy optimization',
					'Scalable architecture'
				],
				ctaLabel: 'Edge Deployment',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'platform-engineering-kubernetes',
				title: 'Platform Engineering on Kubernetes',
				description: 'Golden paths, IDP, and paved roads for developers with secure, standardized delivery.',
				category: 'IT Services',
				price: '$40,000',
				billing: 'project',
				features: [
					'Backstage developer portal',
					'GitOps with Argo CD or Flux',
					'Policy-as-code (OPA/Gatekeeper)',
					'Multi-cluster and multi-cloud',
					'SRE playbooks and training'
				],
				ctaLabel: 'Build Your IDP',
				href: 'https://ziontechgroup.com/services'
			},
			{
				id: 'finops-cloud-cost-optimization',
				title: 'FinOps Cloud Cost Optimization',
				description: 'Reduce cloud spend 20–40% with rightsizing, reservations, and architectural optimizations.',
				category: 'IT Services',
				price: '$12,000',
				billing: 'project',
				features: [
					'Cost anomaly detection',
					'RI/Savings Plan strategy',
					'Workload rightsizing',
					'Kubernetes cost allocation',
					'Executive reporting'
				],
				ctaLabel: 'Cut Cloud Costs',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'Cybersecurity',
		slug: 'cybersecurity',
		items: [
			{
				id: 'm365-security-hardening-kit',
				title: 'M365 Security Hardening Kit',
				description: 'Baseline hardening, drift detection, and auto-remediation for Microsoft 365 tenants with executive reporting.',
				category: 'Cybersecurity',
				price: '$199',
				billing: 'month',
				features: [
					'Secure baseline as code',
					'Misconfiguration detection',
					'Auto-remediation playbooks',
					'Graph API integrations',
					'Compliance-ready reports'
				],
				ctaLabel: 'Harden M365',
				href: 'https://ziontechgroup.com/services/m365-security-hardening'
			},
			{
				id: 'ai-threat-intelligence',
				title: 'AI Threat Intelligence Suite',
				description: 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',
				category: 'Cybersecurity',
				price: '$3,999',
				billing: 'month',
				features: [
					'AI threat detection',
					'Behavioral analysis',
					'Automated response',
					'Threat hunting',
					'Incident management'
				],
				ctaLabel: 'Security Demo',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-cryptography',
				title: 'Quantum Cryptography Solutions',
				description: 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.',
				category: 'Cybersecurity',
				price: '$12,000',
				billing: 'project',
				features: [
					'Quantum key distribution',
					'Post-quantum crypto',
					'Secure communication',
					'Key management',
					'Compliance ready'
				],
				ctaLabel: 'Quantum Security',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'managed-detection-response',
				title: 'Managed Detection & Response (MDR)',
				description: '24/7 monitoring, threat hunting, and incident response with SIEM/SOAR integration.',
				category: 'Cybersecurity',
				price: '$3,499',
				billing: 'month',
				features: [
					'SIEM setup and tuning',
					'Playbooks and automation',
					'Phishing and EDR integration',
					'Compliance-ready reporting',
					'Incident response retainers'
				],
				ctaLabel: 'Activate MDR',
				href: 'https://ziontechgroup.com/services'
			},
			{
				id: 'sase-rollout',
				title: 'Secure Access Service Edge (SASE) Rollout',
				description: 'Consolidate network and security with ZTNA, SWG, CASB, and SD-WAN.',
				category: 'Cybersecurity',
				price: '$20,000',
				billing: 'project',
				features: [
					'Architecture and vendor selection',
					'Pilot and phased migration',
					'Policy baselines',
					'User experience optimization',
					'Runbooks and training'
				],
				ctaLabel: 'Deploy SASE',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'Data & Analytics',
		slug: 'data-analytics',
		items: [
			{
				id: 'synthetic-data-generator',
				title: 'Synthetic Data Generator',
				description: 'Privacy-safe synthetic tabular/time-series/text data with utility/drift reports and DP options.',
				category: 'Data & Analytics',
				price: '$119',
				billing: 'month',
				features: [
					'Differential privacy & masking',
					'Tabular/time-series/text modes',
					'Utility and drift reports',
					'APIs and SDKs',
					'S3/Snowflake/BigQuery connectors'
				],
				ctaLabel: 'Generate Data',
				href: 'https://ziontechgroup.com/services/synthetic-data-generator'
			},
			{
				id: 'quantum-data-analytics',
				title: 'Quantum Data Analytics Platform',
				description: 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',
				category: 'Data & Analytics',
				price: '$6,999',
				billing: 'month',
				features: [
					'Quantum pattern recognition',
					'Complex data modeling',
					'Real-time insights',
					'Predictive analytics',
					'Visualization tools'
				],
				ctaLabel: 'Analytics Demo',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-business-intelligence',
				title: 'AI Business Intelligence Suite',
				description: 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.',
				category: 'Data & Analytics',
				price: '$2,499',
				billing: 'month',
				features: [
					'Automated insights',
					'Natural language queries',
					'Predictive modeling',
					'Custom dashboards',
					'Data integration'
				],
				ctaLabel: 'BI Assessment',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'data-quality-observability',
				title: 'Data Quality & Observability',
				description: 'Monitor freshness, completeness, and lineage to trust your analytics and AI.',
				category: 'Data & Analytics',
				price: '$1,499',
				billing: 'month',
				features: [
					'Column-level lineage',
					'Great Expectations policies',
					'Alerting and incident Mgmt',
					'Connectors: Snowflake, BigQuery, Databricks',
					'Root-cause analysis'
				],
				ctaLabel: 'Improve Data Trust',
				href: 'https://ziontechgroup.com/services'
			},
			{
				id: 'modern-etl-migration',
				title: 'Modern ETL/ELT Migration',
				description: 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.',
				category: 'Data & Analytics',
				price: '$18,000',
				billing: 'project',
				features: [
					'dbt modeling and tests',
					'Incremental loads',
					'CI for analytics',
					'Cost-efficient storage',
					'Knowledge transfer'
				],
				ctaLabel: 'Migrate Workloads',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'Cloud & DevOps',
		slug: 'cloud-devops',
		items: [
			{
				id: 'uptime-slo-monitor',
				title: 'Uptime & SLO Monitor',
				description: 'Multi-region synthetic checks with SLO dashboards, error budgets, and burn rate alerts.',
				category: 'Cloud & DevOps',
				price: '$49',
				billing: 'month',
				features: [
					'Multi-region probes',
					'SLO calculation and burn rates',
					'Error budget policy',
					'Alerts and dashboards',
					'CI/CD release gates'
				],
				ctaLabel: 'Monitor Reliability',
				href: 'https://ziontechgroup.com/services/uptime-slo-monitor'
			},
			{
				id: 'kubernetes-cost-analyzer',
				title: 'Kubernetes Cost Analyzer',
				description: 'Allocation, rightsizing, and bin‑packing insights by team/namespace with chargeback reports.',
				category: 'Cloud & DevOps',
				price: '$99',
				billing: 'month',
				features: [
					'Cost allocation by namespace/team',
					'Requests/limits advisor',
					'Bin‑packing recommendations',
					'Chargeback/showback reports',
					'Slack/Grafana integrations'
				],
				ctaLabel: 'Cut K8s Spend',
				href: 'https://ziontechgroup.com/services/kubernetes-cost-analyzer'
			},
			{
				id: 'autonomous-devops-platform',
				title: 'Autonomous DevOps Platform',
				description: 'Self-managing DevOps platform that automatically optimizes deployments, scaling, and infrastructure management.',
				category: 'Cloud & DevOps',
				price: '$4,999',
				billing: 'month',
				features: [
					'Automated deployments',
					'Self-healing infrastructure',
					'Performance optimization',
					'Cost management',
					'Continuous monitoring'
				],
				ctaLabel: 'DevOps Demo',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-cloud-infrastructure',
				title: 'Quantum Cloud Infrastructure',
				description: 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.',
				category: 'Cloud & DevOps',
				price: '$18,000',
				billing: 'project',
				features: [
					'Quantum cloud services',
					'Hybrid infrastructure',
					'Quantum optimization',
					'Scalable architecture',
					'Enterprise support'
				],
				ctaLabel: 'Cloud Migration',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'serverless-application-factory',
				title: 'Serverless Application Factory',
				description: 'Blueprints and accelerators to build secure, low-cost serverless backends fast.',
				category: 'Cloud & DevOps',
				price: '$16,000',
				billing: 'project',
				features: [
					'Patterns: EventBridge, Step Functions',
					'IaC with CDK/Terraform',
					'Observability baked-in',
					'SECaaS and guardrails',
					'Cost-efficiency targets'
				],
				ctaLabel: 'Build Serverless',
				href: 'https://ziontechgroup.com/services'
			},
			{
				id: 'disaster-recovery-blueprints',
				title: 'Disaster Recovery Blueprints (RTO/RPO)',
				description: 'Design and test DR strategies with automated failover and periodic game days.',
				category: 'Cloud & DevOps',
				price: '$20,000',
				billing: 'project',
				features: [
					'Multi-region architectures',
					'Automated chaos tests',
					'Backup and restore pipelines',
					'Compliance documentation',
					'Executive tabletop exercises'
				],
				ctaLabel: 'Harden Resilience',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'Quantum Computing',
		slug: 'quantum-computing',
		items: [
			{
				id: 'quantum-financial-trading',
				title: 'Quantum Financial Trading Platform',
				description: 'Revolutionary trading platform using quantum algorithms for portfolio optimization and risk assessment.',
				category: 'Quantum Computing',
				price: '$25,000',
				billing: 'month',
				features: [
					'Quantum portfolio optimization',
					'Risk modeling',
					'Real-time trading',
					'Compliance tools',
					'Performance analytics'
				],
				ctaLabel: 'Trading Demo',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-drug-discovery',
				title: 'Quantum Drug Discovery Platform',
				description: 'Advanced drug discovery platform leveraging quantum computing for molecular modeling and drug design.',
				category: 'Quantum Computing',
				price: '$45,000',
				billing: 'month',
				features: [
					'Quantum molecular modeling',
					'Drug design algorithms',
					'Clinical trial optimization',
					'Research collaboration',
					'Regulatory support'
				],
				ctaLabel: 'Research Access',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Blockchain & Web3',
		slug: 'blockchain-web3',
		items: [
			{
				id: 'decentralized-ai-marketplace',
				title: 'Decentralized AI Marketplace',
				description: 'Web3-powered marketplace for AI models, data, and computational resources with blockchain-based governance.',
				category: 'Blockchain & Web3',
				price: '$1,999',
				billing: 'month',
				features: [
					'AI model marketplace',
					'Decentralized governance',
					'Smart contracts',
					'Token economics',
					'Community-driven'
				],
				ctaLabel: 'Marketplace Access',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-blockchain-platform',
				title: 'Quantum Blockchain Platform',
				description: 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.',
				category: 'Blockchain & Web3',
				price: '$8,999',
				billing: 'month',
				features: [
					'Quantum-resistant crypto',
					'Enhanced consensus',
					'Scalable architecture',
					'Interoperability',
					'Enterprise features'
				],
				ctaLabel: 'Blockchain Demo',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'IoT & Edge',
		slug: 'iot-edge',
		items: [
			{
				id: 'quantum-iot-platform',
				title: 'Quantum IoT Platform',
				description: 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',
				category: 'IoT & Edge',
				price: '$3,999',
				billing: 'month',
				features: [
					'Quantum edge processing',
					'Device optimization',
					'Intelligent routing',
					'Energy efficiency',
					'Scalable deployment'
				],
				ctaLabel: 'IoT Demo',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'autonomous-edge-ai',
				title: 'Autonomous Edge AI Platform',
				description: 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.',
				category: 'IoT & Edge',
				price: '$2,999',
				billing: 'month',
				features: [
					'Autonomous optimization',
					'Edge AI processing',
					'Network intelligence',
					'Resource management',
					'Performance monitoring'
				],
				ctaLabel: 'Edge AI Demo',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'predictive-maintenance-iot',
				title: 'Predictive Maintenance for IoT Fleets',
				description: 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',
				category: 'IoT & Edge',
				price: '$2,499',
				billing: 'month',
				features: [
					'Edge telemetry ingestion',
					'ML failure prediction',
					'Work order integration (EAM/CMMS)',
					'Kitting and rollout playbooks',
					'Dashboards and alerts'
				],
				ctaLabel: 'Reduce Downtime',
				href: 'https://ziontechgroup.com/services'
			},
			{
				id: 'digital-twin-starter',
				title: 'Digital Twin Starter Kit',
				description: 'Model physical systems with twins to simulate scenarios and optimize operations.',
				category: 'IoT & Edge',
				price: '$14,000',
				billing: 'project',
				features: [
					'3D/graph models',
					'Stream processing',
					'Integration with PLC/SCADA',
					'KPI definition and alerts',
					'Pilot-to-production plan'
				],
				ctaLabel: 'Build a Twin',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'Green Tech',
		slug: 'green-tech',
		items: [
			{
				id: 'quantum-energy-optimization',
				title: 'Quantum Energy Optimization',
				description: 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',
				category: 'Green Tech',
				price: '$12,000',
				billing: 'month',
				features: [
					'Quantum energy modeling',
					'Renewable optimization',
					'Grid management',
					'Carbon tracking',
					'Sustainability reporting'
				],
				ctaLabel: 'Energy Assessment',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-climate-prediction',
				title: 'AI Climate Prediction Platform',
				description: 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.',
				category: 'Green Tech',
				price: '$7,999',
				billing: 'month',
				features: [
					'AI climate modeling',
					'Quantum simulations',
					'Real-time predictions',
					'Risk assessment',
					'Policy recommendations'
				],
				ctaLabel: 'Climate Demo',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'carbon-accounting-saas',
				title: 'Carbon Accounting & ESG Reporting',
				description: 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',
				category: 'Green Tech',
				price: '$999',
				billing: 'month',
				features: [
					'GHG Protocol-aligned factors',
					'Automated data pipelines',
					'Supplier questionnaires',
					'Assurance-ready exports',
					'Target tracking (SBTi)'
				],
				ctaLabel: 'Start ESG Tracking',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'Space Tech',
		slug: 'space-tech',
		items: [
			{
				id: 'satellite-ai-orchestrator',
				title: 'Satellite AI Orchestrator',
				description: 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',
				category: 'Space Tech',
				price: '$15,000',
				billing: 'month',
				features: [
					'Autonomous orbital optimization',
					'AI-powered data analysis',
					'Real-time monitoring',
					'Collision avoidance',
					'Global coverage'
				],
				ctaLabel: 'Launch Satellites',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-space-communications',
				title: 'Quantum Space Communications',
				description: 'Next-generation quantum communication system for secure, ultra-fast data transmission between Earth and space.',
				category: 'Space Tech',
				price: '$25,000',
				billing: 'month',
				features: [
					'Quantum entanglement',
					'Unhackable encryption',
					'Light-speed transmission',
					'Deep space coverage',
					'Interplanetary network'
				],
				ctaLabel: 'Connect Space',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'satellite-imagery-analytics',
				title: 'Satellite Imagery Analytics',
				description: 'Computer vision on multi-spectral imagery for agriculture, insurance, and defense insights.',
				category: 'Space Tech',
				price: '$5,999',
				billing: 'month',
				features: [
					'Change detection',
					'Crop yield estimation',
					'Object and damage detection',
					'APIs and dashboards',
					'Tasking provider integrations'
				],
				ctaLabel: 'Analyze Imagery',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'BioTech & Health',
		slug: 'biotech-health',
		items: [
			{
				id: 'ai-drug-discovery-platform',
				title: 'AI Drug Discovery Platform',
				description: 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',
				category: 'BioTech & Health',
				price: '$35,000',
				billing: 'month',
				features: [
					'AI molecular modeling',
					'Quantum simulations',
					'Clinical trial optimization',
					'Drug repurposing',
					'Regulatory compliance'
				],
				ctaLabel: 'Discover Drugs',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-genome-analyzer',
				title: 'Quantum Genome Analyzer',
				description: 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.',
				category: 'BioTech & Health',
				price: '$18,000',
				billing: 'month',
				features: [
					'Quantum DNA sequencing',
					'Personalized medicine',
					'Disease prediction',
					'Genetic counseling',
					'Research collaboration'
				],
				ctaLabel: 'Analyze Genome',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'telemedicine-ai-triage',
				title: 'Telemedicine AI Triage',
				description: 'AI symptom checker with escalation workflows to clinicians and EHR integration.',
				category: 'BioTech & Health',
				price: '$1,999',
				billing: 'month',
				features: [
					'Clinical safety guardrails',
					'HL7/FHIR integration',
					'Language and accessibility',
					'Analytics and outcomes tracking',
					'Privacy and consent management'
				],
				ctaLabel: 'Enable Triage',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'FinTech & DeFi',
		slug: 'fintech-defi',
		items: [
			{
				id: 'quantum-trading-algorithm',
				title: 'Quantum Trading Algorithm',
				description: 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',
				category: 'FinTech & DeFi',
				price: '$45,000',
				billing: 'month',
				features: [
					'Quantum market analysis',
					'Microsecond trading',
					'Risk management',
					'Portfolio optimization',
					'Regulatory compliance'
				],
				ctaLabel: 'Start Trading',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'autonomous-defi-protocol',
				title: 'Autonomous DeFi Protocol',
				description: 'Self-managing DeFi protocol that automatically optimizes yields, manages risks, and executes strategies.',
				category: 'FinTech & DeFi',
				price: '$12,000',
				billing: 'month',
				features: [
					'Autonomous yield farming',
					'Risk management',
					'Strategy optimization',
					'Cross-chain integration',
					'Smart contract security'
				],
				ctaLabel: 'Deploy Protocol',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'kyc-aml-transaction-monitoring',
				title: 'KYC/AML Transaction Monitoring',
				description: 'Detect suspicious activity using rules + ML with investigator case management.',
				category: 'FinTech & DeFi',
				price: '$2,499',
				billing: 'month',
				features: [
					'Entity resolution',
					'Sanctions and watchlists',
					'Graph analytics',
					'Case workflow and SAR exports',
					'Audit and model governance'
				],
				ctaLabel: 'Strengthen Compliance',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'Metaverse & AR/VR',
		slug: 'metaverse-ar-vr',
		items: [
			{
				id: 'quantum-metaverse-engine',
				title: 'Quantum Metaverse Engine',
				description: 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',
				category: 'Metaverse & AR/VR',
				price: '$28,000',
				billing: 'month',
				features: [
					'Quantum rendering',
					'Infinite scalability',
					'Realistic physics',
					'Cross-platform support',
					'AI-powered NPCs'
				],
				ctaLabel: 'Enter Metaverse',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'autonomous-ar-navigation',
				title: 'Autonomous AR Navigation',
				description: 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.',
				category: 'Metaverse & AR/VR',
				price: '$8,500',
				billing: 'month',
				features: [
					'Real-time AR overlays',
					'Autonomous navigation',
					'Smart city integration',
					'Traffic optimization',
					'Safety monitoring'
				],
				ctaLabel: 'Navigate AR',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'vr-training-simulators',
				title: 'VR Training Simulators',
				description: 'Enterprise-grade immersive learning for safety, field ops, and medical procedures.',
				category: 'Metaverse & AR/VR',
				price: '$30,000',
				billing: 'project',
				features: [
					'Curriculum design',
					'Multi-user scenarios',
					'LMS integration and analytics',
					'Hardware procurement guidance',
					'Operations and support'
				],
				ctaLabel: 'Build Simulator',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		name: 'Autonomous Systems',
		slug: 'autonomous-systems',
		items: [
			{
				id: 'quantum-ai-controller',
				title: 'Quantum AI Controller',
				description: 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',
				category: 'Autonomous Systems',
				price: '$32,000',
				billing: 'month',
				features: [
					'Quantum decision making',
					'Autonomous learning',
					'System optimization',
					'Predictive maintenance',
					'Multi-system coordination'
				],
				ctaLabel: 'Control Systems',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'autonomous-robotics-platform',
				title: 'Autonomous Robotics Platform',
				description: 'Complete robotics platform for autonomous manufacturing, logistics, and service operations.',
				category: 'Autonomous Systems',
				price: '$22,000',
				billing: 'month',
				features: [
					'Autonomous navigation',
					'Task learning',
					'Safety protocols',
					'Multi-robot coordination',
					'Performance analytics'
				],
				ctaLabel: 'Deploy Robots',
				href: 'https://ziontechgroup.com/contact'
			}
			,
			{
				id: 'warehouse-robotics-orchestration',
				title: 'Warehouse Robotics Orchestration',
				description: 'Coordinate AMRs, conveyors, and pick stations to maximize throughput and safety.',
				category: 'Autonomous Systems',
				price: '$9,999',
				billing: 'month',
				features: [
					'Task allocation and routing',
					'3D digital twin monitoring',
					'Workforce and robot collaboration',
					'Safety zones and policies',
					'KPIs and optimization'
				],
				ctaLabel: 'Orchestrate Robots',
				href: 'https://ziontechgroup.com/services'
			}
		]
	},
	// New innovative service categories
	{
		name: 'Digital Marketing',
		slug: 'digital-marketing',
		items: [
			{
				id: 'ai-social-media-manager',
				title: 'AI Social Media Manager',
				description: 'Intelligent social media management platform that creates content, schedules posts, and optimizes engagement across all platforms.',
				category: 'Digital Marketing',
				price: '$199',
				billing: 'month',
				features: [
					'AI content generation',
					'Multi-platform scheduling',
					'Engagement optimization',
					'Analytics dashboard',
					'Brand voice consistency'
				],
				ctaLabel: 'Manage Social Media',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'predictive-marketing-analytics',
				title: 'Predictive Marketing Analytics',
				description: 'AI-powered marketing analytics that predicts customer behavior, optimizes campaigns, and maximizes ROI.',
				category: 'Digital Marketing',
				price: '$299',
				billing: 'month',
				features: [
					'Customer behavior prediction',
					'Campaign optimization',
					'ROI forecasting',
					'Attribution modeling',
					'Real-time insights'
				],
				ctaLabel: 'Analyze Marketing',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-seo-optimizer',
				title: 'AI SEO Optimizer Pro',
				description: 'Advanced SEO optimization platform that analyzes competitors, suggests improvements, and tracks rankings automatically.',
				category: 'Digital Marketing',
				price: '$249',
				billing: 'month',
				features: [
					'Competitor analysis',
					'Keyword optimization',
					'Content suggestions',
					'Ranking tracking',
					'Technical SEO audit'
				],
				ctaLabel: 'Optimize SEO',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'E-commerce Solutions',
		slug: 'ecommerce-solutions',
		items: [
			{
				id: 'ai-product-recommendation-engine',
				title: 'AI Product Recommendation Engine',
				description: 'Intelligent product recommendation system that increases conversion rates and average order value.',
				category: 'E-commerce Solutions',
				price: '$399',
				billing: 'month',
				features: [
					'Personalized recommendations',
					'Behavioral analysis',
					'A/B testing',
					'Real-time optimization',
					'Analytics dashboard'
				],
				ctaLabel: 'Boost Sales',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'smart-inventory-optimizer',
				title: 'Smart Inventory Optimizer',
				description: 'AI-driven inventory optimization for e-commerce that reduces stockouts and overstock situations.',
				category: 'E-commerce Solutions',
				price: '$299',
				billing: 'month',
				features: [
					'Demand forecasting',
					'Stock level optimization',
					'Reorder automation',
					'Seasonal adjustments',
					'Cost optimization'
				],
				ctaLabel: 'Optimize Inventory',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-customer-chatbot',
				title: 'AI Customer Chatbot',
				description: 'Intelligent chatbot that handles customer inquiries, provides product information, and processes orders.',
				category: 'E-commerce Solutions',
				price: '$199',
				billing: 'month',
				features: [
					'Natural language processing',
					'Product search assistance',
					'Order processing',
					'24/7 availability',
					'Human handoff'
				],
				ctaLabel: 'Deploy Chatbot',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Remote Work Tools',
		slug: 'remote-work-tools',
		items: [
			{
				id: 'ai-meeting-assistant',
				title: 'AI Meeting Assistant',
				description: 'Intelligent meeting assistant that transcribes, summarizes, and extracts action items from virtual meetings.',
				category: 'Remote Work Tools',
				price: '$149',
				billing: 'month',
				features: [
					'Real-time transcription',
					'Meeting summarization',
					'Action item extraction',
					'Integration with calendar',
					'Searchable archives'
				],
				ctaLabel: 'Assist Meetings',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'collaborative-project-manager',
				title: 'Collaborative Project Manager',
				description: 'AI-powered project management platform that optimizes team collaboration and project delivery.',
				category: 'Remote Work Tools',
				price: '$199',
				billing: 'month',
				features: [
					'Task automation',
					'Team collaboration',
					'Progress tracking',
					'Resource optimization',
					'Risk management'
				],
				ctaLabel: 'Manage Projects',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'virtual-office-platform',
				title: 'Virtual Office Platform',
				description: 'Immersive virtual office environment for remote teams with AI-powered collaboration tools.',
				category: 'Remote Work Tools',
				price: '$299',
				billing: 'month',
				features: [
					'3D virtual spaces',
					'Real-time collaboration',
					'AI meeting rooms',
					'Team building activities',
					'Productivity analytics'
				],
				ctaLabel: 'Create Virtual Office',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Legal Tech',
		slug: 'legal-tech',
		items: [
			{
				id: 'ai-contract-reviewer',
				title: 'AI Contract Reviewer',
				description: 'Advanced contract review system that identifies risks, suggests improvements, and ensures compliance.',
				category: 'Legal Tech',
				price: '$399',
				billing: 'month',
				features: [
					'Risk identification',
					'Compliance checking',
					'Clause analysis',
					'Version comparison',
					'Legal research integration'
				],
				ctaLabel: 'Review Contracts',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'legal-research-assistant',
				title: 'Legal Research Assistant',
				description: 'AI-powered legal research platform that finds relevant cases, statutes, and legal precedents.',
				category: 'Legal Tech',
				price: '$299',
				billing: 'month',
				features: [
					'Case law search',
					'Statute analysis',
					'Precedent identification',
					'Citation management',
					'Research summaries'
				],
				ctaLabel: 'Research Legal',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'compliance-monitoring-system',
				title: 'Compliance Monitoring System',
				description: 'Automated compliance monitoring that tracks regulatory changes and ensures adherence to legal requirements.',
				category: 'Legal Tech',
				price: '$499',
				billing: 'month',
				features: [
					'Regulatory tracking',
					'Compliance assessment',
					'Risk alerts',
					'Audit preparation',
					'Reporting automation'
				],
				ctaLabel: 'Monitor Compliance',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'EdTech',
		slug: 'edtech',
		items: [
			{
				id: 'adaptive-learning-platform',
				title: 'Adaptive Learning Platform',
				description: 'AI-powered learning platform that adapts content and pace to individual student needs and learning styles.',
				category: 'EdTech',
				price: '$199',
				billing: 'month',
				features: [
					'Personalized learning paths',
					'Adaptive assessments',
					'Progress tracking',
					'Content recommendations',
					'Analytics dashboard'
				],
				ctaLabel: 'Adapt Learning',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'virtual-reality-classroom',
				title: 'Virtual Reality Classroom',
				description: 'Immersive VR learning environment that creates engaging educational experiences for students.',
				category: 'EdTech',
				price: '$399',
				billing: 'month',
				features: [
					'3D learning environments',
					'Interactive simulations',
					'Multi-user collaboration',
					'Content creation tools',
					'Progress tracking'
				],
				ctaLabel: 'Create VR Classroom',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-tutor-assistant',
				title: 'AI Tutor Assistant',
				description: 'Intelligent tutoring system that provides personalized guidance and support to students.',
				category: 'EdTech',
				price: '$149',
				billing: 'month',
				features: [
					'Personalized tutoring',
					'Homework assistance',
					'Progress monitoring',
					'Parent communication',
					'Learning analytics'
				],
				ctaLabel: 'Get AI Tutor',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Real Estate Tech',
		slug: 'real-estate-tech',
		items: [
			{
				id: 'ai-property-valuator',
				title: 'AI Property Valuator',
				description: 'Advanced property valuation system using AI to analyze market data and provide accurate property assessments.',
				category: 'Real Estate Tech',
				price: '$299',
				billing: 'month',
				features: [
					'Market analysis',
					'Property comparison',
					'Valuation algorithms',
					'Market trends',
					'Investment insights'
				],
				ctaLabel: 'Value Property',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'virtual-property-tour',
				title: 'Virtual Property Tour Platform',
				description: 'Immersive virtual tour platform that allows potential buyers to explore properties remotely.',
				category: 'Real Estate Tech',
				price: '$199',
				billing: 'month',
				features: [
					'360-degree tours',
					'Interactive floor plans',
					'Virtual staging',
					'Lead generation',
					'Analytics dashboard'
				],
				ctaLabel: 'Create Virtual Tours',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'smart-property-manager',
				title: 'Smart Property Manager',
				description: 'AI-powered property management system that optimizes operations and tenant satisfaction.',
				category: 'Real Estate Tech',
				price: '$399',
				billing: 'month',
				features: [
					'Maintenance scheduling',
					'Tenant communication',
					'Financial tracking',
					'Performance analytics',
					'Predictive maintenance'
				],
				ctaLabel: 'Manage Properties',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Supply Chain Tech',
		slug: 'supply-chain-tech',
		items: [
			{
				id: 'ai-supply-chain-optimizer',
				title: 'AI Supply Chain Optimizer',
				description: 'Intelligent supply chain optimization platform that reduces costs and improves efficiency.',
				category: 'Supply Chain Tech',
				price: '$599',
				billing: 'month',
				features: [
					'Route optimization',
					'Inventory management',
					'Demand forecasting',
					'Cost analysis',
					'Risk assessment'
				],
				ctaLabel: 'Optimize Supply Chain',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'blockchain-tracking-system',
				title: 'Blockchain Tracking System',
				description: 'Transparent supply chain tracking using blockchain technology for end-to-end visibility.',
				category: 'Supply Chain Tech',
				price: '$399',
				billing: 'month',
				features: [
					'End-to-end tracking',
					'Transparency',
					'Quality assurance',
					'Compliance reporting',
					'Stakeholder access'
				],
				ctaLabel: 'Track Supply Chain',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'predictive-logistics',
				title: 'Predictive Logistics Platform',
				description: 'AI-powered logistics platform that predicts delays and optimizes delivery routes.',
				category: 'Supply Chain Tech',
				price: '$299',
				billing: 'month',
				features: [
					'Delay prediction',
					'Route optimization',
					'Real-time tracking',
					'Performance analytics',
					'Cost optimization'
				],
				ctaLabel: 'Optimize Logistics',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Energy Tech',
		slug: 'energy-tech',
		items: [
			{
				id: 'smart-grid-optimizer',
				title: 'Smart Grid Optimizer',
				description: 'AI-powered smart grid optimization platform that improves energy distribution and reduces waste.',
				category: 'Energy Tech',
				price: '$799',
				billing: 'month',
				features: [
					'Grid optimization',
					'Demand response',
					'Energy storage',
					'Renewable integration',
					'Cost reduction'
				],
				ctaLabel: 'Optimize Grid',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'renewable-energy-manager',
				title: 'Renewable Energy Manager',
				description: 'Comprehensive renewable energy management system for solar, wind, and hydroelectric power.',
				category: 'Energy Tech',
				price: '$499',
				billing: 'month',
				features: [
					'Energy production monitoring',
					'Storage optimization',
					'Grid integration',
					'Performance analytics',
					'Maintenance scheduling'
				],
				ctaLabel: 'Manage Renewables',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'energy-efficiency-analyzer',
				title: 'Energy Efficiency Analyzer',
				description: 'AI-powered energy efficiency analysis that identifies optimization opportunities and tracks improvements.',
				category: 'Energy Tech',
				price: '$299',
				billing: 'month',
				features: [
					'Efficiency analysis',
					'Optimization recommendations',
					'Cost tracking',
					'Performance monitoring',
					'Sustainability reporting'
				],
				ctaLabel: 'Analyze Efficiency',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Smart Cities',
		slug: 'smart-cities',
		items: [
			{
				id: 'traffic-optimization-system',
				title: 'Traffic Optimization System',
				description: 'AI-powered traffic management system that reduces congestion and improves urban mobility.',
				category: 'Smart Cities',
				price: '$999',
				billing: 'month',
				features: [
					'Real-time traffic monitoring',
					'Signal optimization',
					'Congestion prediction',
					'Public transport integration',
					'Environmental impact'
				],
				ctaLabel: 'Optimize Traffic',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'smart-parking-platform',
				title: 'Smart Parking Platform',
				description: 'Intelligent parking management system that reduces search time and optimizes space utilization.',
				category: 'Smart Cities',
				price: '$399',
				billing: 'month',
				features: [
					'Space detection',
					'Mobile app integration',
					'Payment processing',
					'Analytics dashboard',
					'City integration'
				],
				ctaLabel: 'Smart Parking',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'environmental-monitoring',
				title: 'Environmental Monitoring System',
				description: 'Comprehensive environmental monitoring platform for air quality, noise, and pollution tracking.',
				category: 'Smart Cities',
				price: '$599',
				billing: 'month',
				features: [
					'Air quality monitoring',
					'Noise pollution tracking',
					'Data visualization',
					'Alert system',
					'Regulatory compliance'
				],
				ctaLabel: 'Monitor Environment',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'AgriTech',
		slug: 'agritech',
		items: [
			{
				id: 'precision-agriculture-platform',
				title: 'Precision Agriculture Platform',
				description: 'AI-powered precision agriculture system that optimizes crop yields and reduces resource waste.',
				category: 'AgriTech',
				price: '$499',
				billing: 'month',
				features: [
					'Soil analysis',
					'Crop monitoring',
					'Irrigation optimization',
					'Yield prediction',
					'Resource management'
				],
				ctaLabel: 'Optimize Agriculture',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'drone-farming-system',
				title: 'Drone Farming System',
				description: 'Autonomous drone system for crop monitoring, spraying, and data collection in agriculture.',
				category: 'AgriTech',
				price: '$799',
				billing: 'month',
				features: [
					'Autonomous flight',
					'Crop monitoring',
					'Precision spraying',
					'Data collection',
					'Analytics platform'
				],
				ctaLabel: 'Deploy Drones',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'livestock-monitoring',
				title: 'Livestock Monitoring System',
				description: 'AI-powered livestock monitoring system for health tracking and productivity optimization.',
				category: 'AgriTech',
				price: '$299',
				billing: 'month',
				features: [
					'Health monitoring',
					'Behavior analysis',
					'Productivity tracking',
					'Disease detection',
					'Breeding optimization'
				],
				ctaLabel: 'Monitor Livestock',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Media & Entertainment',
		slug: 'media-entertainment',
		items: [
			{
				id: 'ai-content-creator',
				title: 'AI Content Creator',
				description: 'Advanced AI platform that generates creative content for media and entertainment industries.',
				category: 'Media & Entertainment',
				price: '$399',
				billing: 'month',
				features: [
					'Content generation',
					'Style customization',
					'Multi-format output',
					'Collaboration tools',
					'Quality assurance'
				],
				ctaLabel: 'Create Content',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'personalized-streaming',
				title: 'Personalized Streaming Platform',
				description: 'AI-powered streaming platform that personalizes content recommendations and user experience.',
				category: 'Media & Entertainment',
				price: '$299',
				billing: 'month',
				features: [
					'Content personalization',
					'Recommendation engine',
					'User behavior analysis',
					'Content discovery',
					'Engagement optimization'
				],
				ctaLabel: 'Personalize Streaming',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'virtual-production-studio',
				title: 'Virtual Production Studio',
				description: 'Immersive virtual production environment for film, TV, and digital content creation.',
				category: 'Media & Entertainment',
				price: '$1,999',
				billing: 'month',
				features: [
					'Virtual sets',
					'Real-time rendering',
					'Motion capture',
					'Collaborative editing',
					'Asset management'
				],
				ctaLabel: 'Create Virtually',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Logistics Tech',
		slug: 'logistics-tech',
		items: [
			{
				id: 'autonomous-delivery-system',
				title: 'Autonomous Delivery System',
				description: 'AI-powered autonomous delivery system for last-mile logistics and package delivery.',
				category: 'Logistics Tech',
				price: '$899',
				billing: 'month',
				features: [
					'Route optimization',
					'Autonomous navigation',
					'Package tracking',
					'Delivery scheduling',
					'Customer notification'
				],
				ctaLabel: 'Automate Delivery',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'warehouse-automation',
				title: 'Warehouse Automation Platform',
				description: 'Comprehensive warehouse automation system that optimizes operations and reduces costs.',
				category: 'Logistics Tech',
				price: '$699',
				billing: 'month',
				features: [
					'Robotic automation',
					'Inventory management',
					'Order fulfillment',
					'Performance analytics',
					'Maintenance scheduling'
				],
				ctaLabel: 'Automate Warehouse',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'supply-chain-visibility',
				title: 'Supply Chain Visibility Platform',
				description: 'End-to-end supply chain visibility platform with real-time tracking and analytics.',
				category: 'Logistics Tech',
				price: '$399',
				billing: 'month',
				features: [
					'Real-time tracking',
					'Risk assessment',
					'Performance analytics',
					'Stakeholder collaboration',
					'Compliance reporting'
				],
				ctaLabel: 'Track Supply Chain',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'HR Tech',
		slug: 'hr-tech',
		items: [
			{
				id: 'ai-recruitment-platform',
				title: 'AI Recruitment Platform',
				description: 'Intelligent recruitment platform that automates candidate screening and improves hiring efficiency.',
				category: 'HR Tech',
				price: '$299',
				billing: 'month',
				features: [
					'Resume screening',
					'Skill assessment',
					'Interview scheduling',
					'Candidate matching',
					'Analytics dashboard'
				],
				ctaLabel: 'Recruit Smarter',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'employee-engagement-monitor',
				title: 'Employee Engagement Monitor',
				description: 'AI-powered employee engagement platform that tracks satisfaction and improves workplace culture.',
				category: 'HR Tech',
				price: '$199',
				billing: 'month',
				features: [
					'Engagement surveys',
					'Sentiment analysis',
					'Performance tracking',
					'Feedback management',
					'Action planning'
				],
				ctaLabel: 'Monitor Engagement',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'learning-management-system',
				title: 'AI Learning Management System',
				description: 'Intelligent learning management system that personalizes training and tracks employee development.',
				category: 'HR Tech',
				price: '$249',
				billing: 'month',
				features: [
					'Personalized learning',
					'Skill assessment',
					'Progress tracking',
					'Content management',
					'Analytics reporting'
				],
				ctaLabel: 'Manage Learning',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Sales Tech',
		slug: 'sales-tech',
		items: [
			{
				id: 'ai-sales-predictor',
				title: 'AI Sales Predictor',
				description: 'Advanced sales prediction platform that forecasts revenue and identifies growth opportunities.',
				category: 'Sales Tech',
				price: '$399',
				billing: 'month',
				features: [
					'Revenue forecasting',
					'Lead scoring',
					'Opportunity identification',
					'Performance analytics',
					'Growth insights'
				],
				ctaLabel: 'Predict Sales',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'sales-automation-platform',
				title: 'Sales Automation Platform',
				description: 'Comprehensive sales automation platform that streamlines processes and increases productivity.',
				category: 'Sales Tech',
				price: '$299',
				billing: 'month',
				features: [
					'Lead management',
					'Email automation',
					'Meeting scheduling',
					'Pipeline tracking',
					'Performance analytics'
				],
				ctaLabel: 'Automate Sales',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'customer-success-platform',
				title: 'Customer Success Platform',
				description: 'AI-powered customer success platform that improves retention and drives growth.',
				category: 'Sales Tech',
				price: '$249',
				billing: 'month',
				features: [
					'Customer health monitoring',
					'Success planning',
					'Retention analytics',
					'Upsell opportunities',
					'Churn prediction'
				],
				ctaLabel: 'Succeed with Customers',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Customer Experience',
		slug: 'customer-experience',
		items: [
			{
				id: 'omnichannel-experience-platform',
				title: 'Omnichannel Experience Platform',
				description: 'Unified customer experience platform that provides seamless interactions across all channels.',
				category: 'Customer Experience',
				price: '$499',
				billing: 'month',
				features: [
					'Channel integration',
					'Customer journey mapping',
					'Personalization engine',
					'Analytics dashboard',
					'Performance optimization'
				],
				ctaLabel: 'Unify Experience',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'sentiment-analysis-engine',
				title: 'Sentiment Analysis Engine',
				description: 'Advanced sentiment analysis platform that monitors customer feedback and improves satisfaction.',
				category: 'Customer Experience',
				price: '$199',
				billing: 'month',
				features: [
					'Real-time monitoring',
					'Multi-language support',
					'Trend analysis',
					'Alert system',
					'Action recommendations'
				],
				ctaLabel: 'Analyze Sentiment',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'customer-feedback-automation',
				title: 'Customer Feedback Automation',
				description: 'Automated customer feedback collection and analysis system for continuous improvement.',
				category: 'Customer Experience',
				price: '$149',
				billing: 'month',
				features: [
					'Automated surveys',
					'Feedback analysis',
					'Response management',
					'Improvement tracking',
					'ROI measurement'
				],
				ctaLabel: 'Automate Feedback',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Productivity Tools',
		slug: 'productivity-tools',
		items: [
			{
				id: 'ai-task-manager',
				title: 'AI Task Manager',
				description: 'Intelligent task management platform that prioritizes work and optimizes productivity.',
				category: 'Productivity Tools',
				price: '$99',
				billing: 'month',
				features: [
					'Smart prioritization',
					'Time tracking',
					'Progress monitoring',
					'Team collaboration',
					'Performance analytics'
				],
				ctaLabel: 'Manage Tasks',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'workflow-automation-engine',
				title: 'Workflow Automation Engine',
				description: 'Powerful workflow automation platform that streamlines business processes and reduces manual work.',
				category: 'Productivity Tools',
				price: '$199',
				billing: 'month',
				features: [
					'Process automation',
					'Integration capabilities',
					'Workflow designer',
					'Performance monitoring',
					'Analytics dashboard'
				],
				ctaLabel: 'Automate Workflows',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'collaborative-workspace',
				title: 'Collaborative Workspace Platform',
				description: 'Advanced collaborative workspace that enhances team productivity and communication.',
				category: 'Productivity Tools',
				price: '$149',
				billing: 'month',
				features: [
					'Real-time collaboration',
					'Document sharing',
					'Communication tools',
					'Project management',
					'Analytics insights'
				],
				ctaLabel: 'Collaborate Better',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	}
];