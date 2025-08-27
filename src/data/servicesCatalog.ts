export type ServiceItem = {
	id: string;
	title: string;
	description: string;
	category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain Solutions' | 'IoT & Edge Computing' | 'FinTech Solutions' | 'HealthTech Solutions' | 'EdTech Solutions' | 'GreenTech Solutions' | 'SpaceTech Solutions' | 'Robotics & Automation' | 'AR/VR Solutions' | 'Biotech Solutions' | 'LegalTech Solutions' | 'Real Estate Tech' | 'Supply Chain Solutions';
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
				id: 'smart-contract-risk-scanner',
				title: 'Smart Contract Risk Scanner',
				description: 'Continuous vulnerability scanning and SBOM for EVM chains with CI/CD hooks.',
				category: 'Micro SaaS',
				price: 'From $199/month',
				billing: 'month',
				features: [
					'Automated static + dynamic analysis',
					'PR gate checks and severity scoring',
					'Exportable audit reports (SOC2-ready)'
				],
				ctaLabel: 'Start Free Trial',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'etl-to-lakehouse',
				title: 'No-Code ETL to Lakehouse',
				description: 'Connect SaaS apps and stream to S3/BigQuery with schema evolution.',
				category: 'Micro SaaS',
				price: 'From $149/month',
				billing: 'month',
				features: ['150+ connectors', 'Change Data Capture', 'dbt-compatible models'],
				ctaLabel: 'Connect Sources',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'email-deliverability-suite',
				title: 'Email Deliverability Suite',
				description: 'SPF/DKIM/DMARC orchestration, warm-up, and inbox placement analytics.',
				category: 'Micro SaaS',
				price: 'From $99/month',
				billing: 'month',
				features: ['Automatic DNS validation', 'Reputation monitoring', 'Seed list testing'],
				ctaLabel: 'Improve Deliverability',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'ai-content-generator',
				title: 'AI Content Generator Pro',
				description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
				category: 'Micro SaaS',
				price: 'From $79/month',
				billing: 'month',
				features: ['Multi-language support', 'SEO optimization', 'Brand voice consistency', 'Plagiarism detection'],
				ctaLabel: 'Start Creating',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'social-media-scheduler',
				title: 'Smart Social Media Scheduler',
				description: 'AI-powered social media management with optimal posting times and content optimization.',
				category: 'Micro SaaS',
				price: 'From $49/month',
				billing: 'month',
				features: ['Multi-platform posting', 'Best time to post AI', 'Content calendar', 'Analytics dashboard'],
				ctaLabel: 'Schedule Posts',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'invoice-automation',
				title: 'Invoice Automation Suite',
				description: 'Automated invoice processing, approval workflows, and payment tracking for businesses.',
				category: 'Micro SaaS',
				price: 'From $89/month',
				billing: 'month',
				features: ['OCR invoice scanning', 'Approval workflows', 'Payment tracking', 'Integration with accounting software'],
				ctaLabel: 'Automate Invoices',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'project-management-ai',
				title: 'AI Project Management Assistant',
				description: 'Intelligent project management with AI-powered task prioritization and resource optimization.',
				category: 'Micro SaaS',
				price: 'From $129/month',
				billing: 'month',
				features: ['AI task prioritization', 'Resource optimization', 'Risk prediction', 'Progress forecasting'],
				ctaLabel: 'Manage Projects',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'customer-feedback-analyzer',
				title: 'Customer Feedback Analyzer',
				description: 'AI-powered sentiment analysis and feedback categorization for customer insights.',
				category: 'Micro SaaS',
				price: 'From $69/month',
				billing: 'month',
				features: ['Sentiment analysis', 'Feedback categorization', 'Trend identification', 'Actionable insights'],
				ctaLabel: 'Analyze Feedback',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'AI Solutions',
		slug: 'ai-solutions',
		items: [
			{
				id: 'genai-knowledge-assistant',
				title: 'GenAI Knowledge Assistant',
				description: 'RAG chatbot over your docs with SOC2 logging and redaction.',
				category: 'AI Solutions',
				price: 'From $299/month',
				billing: 'month',
				features: ['Multi-tenant vector index', 'Retrieval policies', 'Human-in-the-loop'],
				ctaLabel: 'Deploy Assistant',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'ai-code-reviewer',
				title: 'AI Code Reviewer & Pair',
				description: 'LLM-powered code review with repository policies and risk scoring.',
				category: 'AI Solutions',
				price: 'From $199/month',
				billing: 'month',
				features: ['PR annotations', 'Sec rules (OWASP)', 'Refactor suggestions'],
				ctaLabel: 'Enable on GitHub',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'vision-inspection',
				title: 'Vision Quality Inspection',
				description: 'Edge vision models for manufacturing defects with active learning.',
				category: 'AI Solutions',
				price: 'From $499/month',
				billing: 'month',
				features: ['On-device inference', 'Model drift alerts', 'No internet required'],
				ctaLabel: 'Book Demo',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'ai-predictive-maintenance',
				title: 'AI Predictive Maintenance',
				description: 'Machine learning platform for predicting equipment failures and optimizing maintenance schedules.',
				category: 'AI Solutions',
				price: 'From $399/month',
				billing: 'month',
				features: ['IoT sensor integration', 'Failure prediction models', 'Maintenance optimization', 'Cost savings analytics'],
				ctaLabel: 'Predict Failures',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'ai-personalization-engine',
				title: 'AI Personalization Engine',
				description: 'Real-time personalization engine for e-commerce, content, and user experiences.',
				category: 'AI Solutions',
				price: 'From $249/month',
				billing: 'month',
				features: ['Real-time recommendations', 'A/B testing automation', 'User behavior analysis', 'Conversion optimization'],
				ctaLabel: 'Personalize Experience',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'ai-chatbot-platform',
				title: 'Enterprise AI Chatbot Platform',
				description: 'Advanced conversational AI platform for customer service and business automation.',
				category: 'AI Solutions',
				price: 'From $179/month',
				billing: 'month',
				features: ['Multi-language support', 'Integration APIs', 'Analytics dashboard', 'Custom training'],
				ctaLabel: 'Build Chatbot',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'ai-data-analytics',
				title: 'AI-Powered Data Analytics',
				description: 'Intelligent data analytics platform with automated insights and predictive modeling.',
				category: 'AI Solutions',
				price: 'From $349/month',
				billing: 'month',
				features: ['Automated insights', 'Predictive modeling', 'Natural language queries', 'Real-time dashboards'],
				ctaLabel: 'Analyze Data',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'ai-workflow-automation',
				title: 'AI Workflow Automation',
				description: 'Intelligent process automation with AI-powered decision making and optimization.',
				category: 'AI Solutions',
				price: 'From $199/month',
				billing: 'month',
				features: ['Process mining', 'AI decision making', 'Workflow optimization', 'Performance analytics'],
				ctaLabel: 'Automate Workflows',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'IT Services',
		slug: 'it-services',
		items: [
			{
				id: 'msp-care',
				title: 'Managed IT Care',
				description: 'Proactive monitoring, patching, and helpdesk with SLAs.',
				category: 'IT Services',
				price: 'From $80/user/month',
				billing: 'month',
				features: ['24/7 monitoring', 'Remote & onsite support', 'Asset inventory'],
				ctaLabel: 'Talk to Sales',
				href: '/contact'
			},
			{
				id: 'migrations-cloud',
				title: 'Cloud Migration Factory',
				description: 'Lift-and-shift or re-platform to AWS/Azure/GCP with IaC.',
				category: 'IT Services',
				price: 'From $8,000/project',
				billing: 'project',
				features: ['Landing zone design', 'IaC (Terraform)', 'Cost optimization'],
				ctaLabel: 'Get Estimate',
				href: '/contact'
			},
			{
				id: 'vcio',
				title: 'vCIO Advisory',
				description: 'Quarterly roadmap, security posture, and vendor governance.',
				category: 'IT Services',
				price: 'From $150/hour',
				billing: 'hour',
				features: ['IT roadmap', 'Budget planning', 'Compliance alignment'],
				ctaLabel: 'Book Session',
				href: '/contact'
			},
			{
				id: 'network-security-audit',
				title: 'Network Security Audit',
				description: 'Comprehensive network security assessment and vulnerability remediation.',
				category: 'IT Services',
				price: 'From $5,000/project',
				billing: 'project',
				features: ['Network mapping', 'Vulnerability assessment', 'Security recommendations', 'Compliance reporting'],
				ctaLabel: 'Audit Network',
				href: '/contact'
			},
			{
				id: 'disaster-recovery-planning',
				title: 'Disaster Recovery Planning',
				description: 'Comprehensive disaster recovery strategy and implementation for business continuity.',
				category: 'IT Services',
				price: 'From $12,000/project',
				billing: 'project',
				features: ['Risk assessment', 'Recovery planning', 'Testing procedures', 'Documentation'],
				ctaLabel: 'Plan Recovery',
				href: '/contact'
			},
			{
				id: 'data-center-optimization',
				title: 'Data Center Optimization',
				description: 'Data center infrastructure optimization for performance and cost efficiency.',
				category: 'IT Services',
				price: 'From $15,000/project',
				billing: 'project',
				features: ['Infrastructure assessment', 'Performance optimization', 'Cost reduction', 'Scalability planning'],
				ctaLabel: 'Optimize DC',
				href: '/contact'
			}
		]
	},
	{
		name: 'Cybersecurity',
		slug: 'cybersecurity',
		items: [
			{
				id: 'vapt',
				title: 'Vulnerability & Pen Test',
				description: 'External, internal, web app, and API testing with remediation plan.',
				category: 'Cybersecurity',
				price: 'From $6,000/project',
				billing: 'project',
				features: ['OWASP ASVS', 'Authenticated scans', 'Executive + technical reports'],
				ctaLabel: 'Request Scope',
				href: '/contact'
			},
			{
				id: 'soc2-readiness',
				title: 'SOC 2 Readiness',
				description: 'Gap assessment, policies, controls mappings, and audit prep.',
				category: 'Cybersecurity',
				price: 'From $10,000/project',
				billing: 'project',
				features: ['Policy kit', 'Evidence collection', 'Auditor liaison'],
				ctaLabel: 'Start Readiness',
				href: '/contact'
			},
			{
				id: 'mxdr',
				title: 'Managed XDR',
				description: '24/7 detection and response across endpoints, cloud, and identities.',
				category: 'Cybersecurity',
				price: 'From $35/endpoint/month',
				billing: 'month',
				features: ['MITRE ATT&CK mapping', 'Threat hunting', 'Monthly posture reviews'],
				ctaLabel: 'Secure Now',
				href: '/contact'
			},
			{
				id: 'zero-trust-implementation',
				title: 'Zero Trust Implementation',
				description: 'Comprehensive zero trust architecture design and implementation.',
				category: 'Cybersecurity',
				price: 'From $25,000/project',
				billing: 'project',
				features: ['Identity verification', 'Device trust', 'Network segmentation', 'Continuous monitoring'],
				ctaLabel: 'Implement Zero Trust',
				href: '/contact'
			},
			{
				id: 'security-awareness-training',
				title: 'Security Awareness Training',
				description: 'Comprehensive security training program for employees and organizations.',
				category: 'Cybersecurity',
				price: 'From $15/user/month',
				billing: 'month',
				features: ['Phishing simulations', 'Security modules', 'Progress tracking', 'Compliance reporting'],
				ctaLabel: 'Train Team',
				href: '/contact'
			}
		]
	},
	{
		name: 'Data & Analytics',
		slug: 'data-analytics',
		items: [
			{
				id: 'modern-bi',
				title: 'Modern BI Stack',
				description: 'ELT, warehouse modeling, and governed dashboards.',
				category: 'Data & Analytics',
				price: 'From $12,000/project',
				billing: 'project',
				features: ['dbt models', 'Metrics layer', 'Role-based access'],
				ctaLabel: 'Book Workshop',
				href: '/contact'
			},
			{
				id: 'mlops',
				title: 'MLOps Enablement',
				description: 'Feature store, CI/CD for models, and monitoring.',
				category: 'Data & Analytics',
				price: 'From $15,000/project',
				billing: 'project',
				features: ['Model registry', 'Canary rollout', 'Drift detection'],
				ctaLabel: 'Plan Rollout',
				href: '/contact'
			},
			{
				id: 'real-time-analytics',
				title: 'Real-Time Analytics Platform',
				description: 'Real-time data processing and analytics for instant business insights.',
				category: 'Data & Analytics',
				price: 'From $8,000/project',
				billing: 'project',
				features: ['Stream processing', 'Real-time dashboards', 'Alert systems', 'Performance monitoring'],
				ctaLabel: 'Build Analytics',
				href: '/contact'
			},
			{
				id: 'data-governance',
				title: 'Data Governance Framework',
				description: 'Comprehensive data governance strategy and implementation.',
				category: 'Data & Analytics',
				price: 'From $20,000/project',
				billing: 'project',
				features: ['Data catalog', 'Quality monitoring', 'Compliance framework', 'Access controls'],
				ctaLabel: 'Govern Data',
				href: '/contact'
			}
		]
	},
	{
		name: 'Cloud & DevOps',
		slug: 'cloud-devops',
		items: [
			{
				id: 'platform-engineering',
				title: 'Internal Developer Platform',
				description: 'Golden paths, templates, and paved road with Backstage/Port.',
				category: 'Cloud & DevOps',
				price: 'From $20,000/project',
				billing: 'project',
				features: ['Self-service scaffolding', 'Guardrails', 'Scorecards'],
				ctaLabel: 'Design IDP',
				href: '/contact'
			},
			{
				id: 'finops',
				title: 'FinOps Program',
				description: 'Cost visibility, allocation, and savings automation across clouds.',
				category: 'Cloud & DevOps',
				price: 'From $8,000/project',
				billing: 'project',
				features: ['Anomaly detection', 'RI/SP planning', 'Showback/chargeback'],
				ctaLabel: 'Cut Cloud Spend',
				href: '/contact'
			},
			{
				id: 'kubernetes-management',
				title: 'Kubernetes Management',
				description: 'Enterprise Kubernetes deployment, management, and optimization.',
				category: 'Cloud & DevOps',
				price: 'From $12,000/project',
				billing: 'project',
				features: ['Cluster design', 'Security hardening', 'Monitoring setup', 'Backup strategies'],
				ctaLabel: 'Manage K8s',
				href: '/contact'
			},
			{
				id: 'ci-cd-pipeline',
				title: 'CI/CD Pipeline Design',
				description: 'Custom CI/CD pipeline design and implementation for development teams.',
				category: 'Cloud & DevOps',
				price: 'From $10,000/project',
				billing: 'project',
				features: ['Pipeline design', 'Automation setup', 'Testing integration', 'Deployment strategies'],
				ctaLabel: 'Build Pipeline',
				href: '/contact'
			}
		]
	},
	{
		name: 'Quantum Computing',
		slug: 'quantum-computing',
		items: [
			{
				id: 'quantum-algorithm-development',
				title: 'Quantum Algorithm Development',
				description: 'Custom quantum algorithm development for optimization and simulation problems.',
				category: 'Quantum Computing',
				price: 'From $50,000/project',
				billing: 'project',
				features: ['Problem analysis', 'Algorithm design', 'Quantum implementation', 'Performance testing'],
				ctaLabel: 'Develop Algorithm',
				href: '/contact'
			},
			{
				id: 'quantum-machine-learning',
				title: 'Quantum Machine Learning',
				description: 'Quantum-enhanced machine learning solutions for complex data problems.',
				category: 'Quantum Computing',
				price: 'From $75,000/project',
				billing: 'project',
				features: ['Quantum ML models', 'Hybrid classical-quantum', 'Performance optimization', 'Integration support'],
				ctaLabel: 'Quantum ML',
				href: '/contact'
			},
			{
				id: 'quantum-cryptography',
				title: 'Quantum Cryptography Solutions',
				description: 'Quantum-safe cryptographic solutions for future-proof security.',
				category: 'Quantum Computing',
				price: 'From $100,000/project',
				billing: 'project',
				features: ['Post-quantum algorithms', 'Key distribution', 'Security assessment', 'Implementation support'],
				ctaLabel: 'Secure Future',
				href: '/contact'
			}
		]
	},
	{
		name: 'Blockchain Solutions',
		slug: 'blockchain-solutions',
		items: [
			{
				id: 'defi-platform-development',
				title: 'DeFi Platform Development',
				description: 'Custom DeFi platform development with smart contracts and security auditing.',
				category: 'Blockchain Solutions',
				price: 'From $100,000/project',
				billing: 'project',
				features: ['Smart contract development', 'Security auditing', 'Frontend development', 'Deployment support'],
				ctaLabel: 'Build DeFi',
				href: '/contact'
			},
			{
				id: 'nft-marketplace',
				title: 'NFT Marketplace Development',
				description: 'Custom NFT marketplace with minting, trading, and auction capabilities.',
				category: 'Blockchain Solutions',
				price: 'From $75,000/project',
				billing: 'project',
				features: ['NFT minting', 'Marketplace features', 'Wallet integration', 'Analytics dashboard'],
				ctaLabel: 'Create Marketplace',
				href: '/contact'
			},
			{
				id: 'enterprise-blockchain',
				title: 'Enterprise Blockchain Solutions',
				description: 'Private blockchain solutions for enterprise use cases and supply chain management.',
				category: 'Blockchain Solutions',
				price: 'From $150,000/project',
				billing: 'project',
				features: ['Private blockchain', 'Smart contracts', 'Integration APIs', 'Management dashboard'],
				ctaLabel: 'Enterprise Blockchain',
				href: '/contact'
			}
		]
	},
	{
		name: 'IoT & Edge Computing',
		slug: 'iot-edge-computing',
		items: [
			{
				id: 'iot-platform-development',
				title: 'IoT Platform Development',
				description: 'Custom IoT platform for device management, data collection, and analytics.',
				category: 'IoT & Edge Computing',
				price: 'From $80,000/project',
				billing: 'project',
				features: ['Device management', 'Data collection', 'Real-time analytics', 'Mobile apps'],
				ctaLabel: 'Build IoT Platform',
				href: '/contact'
			},
			{
				id: 'edge-computing-solutions',
				title: 'Edge Computing Solutions',
				description: 'Edge computing infrastructure and applications for low-latency processing.',
				category: 'IoT & Edge Computing',
				price: 'From $60,000/project',
				billing: 'project',
				features: ['Edge infrastructure', 'Application deployment', 'Data processing', 'Performance monitoring'],
				ctaLabel: 'Edge Computing',
				href: '/contact'
			},
			{
				id: 'smart-city-solutions',
				title: 'Smart City Solutions',
				description: 'IoT solutions for smart city infrastructure and citizen services.',
				category: 'IoT & Edge Computing',
				price: 'From $200,000/project',
				billing: 'project',
				features: ['Infrastructure monitoring', 'Citizen services', 'Data analytics', 'Integration platform'],
				ctaLabel: 'Smart City',
				href: '/contact'
			}
		]
	},
	{
		name: 'FinTech Solutions',
		slug: 'fintech-solutions',
		items: [
			{
				id: 'digital-banking-platform',
				title: 'Digital Banking Platform',
				description: 'Modern digital banking platform with mobile apps and core banking integration.',
				category: 'FinTech Solutions',
				price: 'From $500,000/project',
				billing: 'project',
				features: ['Mobile banking', 'Core integration', 'Security features', 'Analytics dashboard'],
				ctaLabel: 'Digital Banking',
				href: '/contact'
			},
			{
				id: 'payment-processing-solution',
				title: 'Payment Processing Solution',
				description: 'Custom payment processing solution with multiple payment methods and security.',
				category: 'FinTech Solutions',
				price: 'From $150,000/project',
				billing: 'project',
				features: ['Multiple payment methods', 'Security compliance', 'Analytics', 'Integration APIs'],
				ctaLabel: 'Payment Processing',
				href: '/contact'
			},
			{
				id: 'wealth-management-platform',
				title: 'Wealth Management Platform',
				description: 'AI-powered wealth management platform with portfolio optimization and advice.',
				category: 'FinTech Solutions',
				price: 'From $300,000/project',
				billing: 'project',
				features: ['Portfolio management', 'AI advice', 'Risk assessment', 'Client portal'],
				ctaLabel: 'Wealth Management',
				href: '/contact'
			}
		]
	},
	{
		name: 'HealthTech Solutions',
		slug: 'healthtech-solutions',
		items: [
			{
				id: 'telemedicine-platform',
				title: 'Telemedicine Platform',
				description: 'Comprehensive telemedicine platform with video consultations and patient management.',
				category: 'HealthTech Solutions',
				price: 'From $200,000/project',
				billing: 'project',
				features: ['Video consultations', 'Patient management', 'EHR integration', 'Mobile apps'],
				ctaLabel: 'Telemedicine',
				href: '/contact'
			},
			{
				id: 'health-monitoring-system',
				title: 'Health Monitoring System',
				description: 'IoT-based health monitoring system with wearable integration and analytics.',
				category: 'HealthTech Solutions',
				price: 'From $150,000/project',
				billing: 'project',
				features: ['Wearable integration', 'Health analytics', 'Alert system', 'Mobile apps'],
				ctaLabel: 'Health Monitoring',
				href: '/contact'
			},
			{
				id: 'ai-diagnostic-tools',
				title: 'AI Diagnostic Tools',
				description: 'AI-powered diagnostic tools for medical imaging and patient assessment.',
				category: 'HealthTech Solutions',
				price: 'From $300,000/project',
				billing: 'project',
				features: ['Medical imaging AI', 'Diagnostic algorithms', 'Integration APIs', 'Compliance features'],
				ctaLabel: 'AI Diagnostics',
				href: '/contact'
			}
		]
	},
	{
		name: 'EdTech Solutions',
		slug: 'edtech-solutions',
		items: [
			{
				id: 'learning-management-system',
				title: 'Learning Management System',
				description: 'Modern LMS with AI-powered personalization and analytics.',
				category: 'EdTech Solutions',
				price: 'From $100,000/project',
				billing: 'project',
				features: ['Course management', 'AI personalization', 'Analytics dashboard', 'Mobile apps'],
				ctaLabel: 'Build LMS',
				href: '/contact'
			},
			{
				id: 'virtual-classroom-platform',
				title: 'Virtual Classroom Platform',
				description: 'Interactive virtual classroom with real-time collaboration and engagement tools.',
				category: 'EdTech Solutions',
				price: 'From $150,000/project',
				billing: 'project',
				features: ['Video conferencing', 'Interactive tools', 'Content sharing', 'Analytics'],
				ctaLabel: 'Virtual Classroom',
				href: '/contact'
			},
			{
				id: 'adaptive-learning-platform',
				title: 'Adaptive Learning Platform',
				description: 'AI-powered adaptive learning platform that personalizes content for each student.',
				category: 'EdTech Solutions',
				price: 'From $200,000/project',
				billing: 'project',
				features: ['AI personalization', 'Content adaptation', 'Progress tracking', 'Analytics'],
				ctaLabel: 'Adaptive Learning',
				href: '/contact'
			}
		]
	},
	{
		name: 'GreenTech Solutions',
		slug: 'greentech-solutions',
		items: [
			{
				id: 'energy-management-system',
				title: 'Energy Management System',
				description: 'IoT-based energy management system for buildings and facilities.',
				category: 'GreenTech Solutions',
				price: 'From $120,000/project',
				billing: 'project',
				features: ['Energy monitoring', 'Optimization algorithms', 'Analytics dashboard', 'Mobile apps'],
				ctaLabel: 'Energy Management',
				href: '/contact'
			},
			{
				id: 'carbon-tracking-platform',
				title: 'Carbon Tracking Platform',
				description: 'Comprehensive carbon footprint tracking and reduction platform for organizations.',
				category: 'GreenTech Solutions',
				price: 'From $80,000/project',
				billing: 'project',
				features: ['Carbon calculation', 'Reduction strategies', 'Reporting tools', 'Integration APIs'],
				ctaLabel: 'Track Carbon',
				href: '/contact'
			},
			{
				id: 'sustainability-analytics',
				title: 'Sustainability Analytics Platform',
				description: 'AI-powered sustainability analytics and reporting platform.',
				category: 'GreenTech Solutions',
				price: 'From $100,000/project',
				billing: 'project',
				features: ['Sustainability metrics', 'AI insights', 'Reporting tools', 'Benchmarking'],
				ctaLabel: 'Sustainability Analytics',
				href: '/contact'
			}
		]
	},
	{
		name: 'SpaceTech Solutions',
		slug: 'spacetech-solutions',
		items: [
			{
				id: 'satellite-data-platform',
				title: 'Satellite Data Platform',
				description: 'Platform for processing and analyzing satellite data for various applications.',
				category: 'SpaceTech Solutions',
				price: 'From $500,000/project',
				billing: 'project',
				features: ['Data processing', 'Analytics tools', 'API access', 'Custom algorithms'],
				ctaLabel: 'Satellite Data',
				href: '/contact'
			},
			{
				id: 'space-mission-planning',
				title: 'Space Mission Planning',
				description: 'AI-powered space mission planning and optimization platform.',
				category: 'SpaceTech Solutions',
				price: 'From $1,000,000/project',
				billing: 'project',
				features: ['Mission planning', 'Trajectory optimization', 'Risk assessment', 'Resource planning'],
				ctaLabel: 'Mission Planning',
				href: '/contact'
			}
		]
	},
	{
		name: 'Robotics & Automation',
		slug: 'robotics-automation',
		items: [
			{
				id: 'industrial-robotics',
				title: 'Industrial Robotics Solutions',
				description: 'Custom industrial robotics solutions for manufacturing and automation.',
				category: 'Robotics & Automation',
				price: 'From $200,000/project',
				billing: 'project',
				features: ['Robot programming', 'Integration', 'Safety systems', 'Maintenance support'],
				ctaLabel: 'Industrial Robotics',
				href: '/contact'
			},
			{
				id: 'service-robotics',
				title: 'Service Robotics Platform',
				description: 'Platform for developing and deploying service robots in various environments.',
				category: 'Robotics & Automation',
				price: 'From $150,000/project',
				billing: 'project',
				features: ['Robot development', 'AI integration', 'Safety features', 'Deployment support'],
				ctaLabel: 'Service Robotics',
				href: '/contact'
			}
		]
	},
	{
		name: 'AR/VR Solutions',
		slug: 'ar-vr-solutions',
		items: [
			{
				id: 'ar-training-platform',
				title: 'AR Training Platform',
				description: 'Augmented reality training platform for industrial and educational applications.',
				category: 'AR/VR Solutions',
				price: 'From $100,000/project',
				billing: 'project',
				features: ['AR content creation', 'Training modules', 'Analytics', 'Device support'],
				ctaLabel: 'AR Training',
				href: '/contact'
			},
			{
				id: 'vr-simulation-platform',
				title: 'VR Simulation Platform',
				description: 'Virtual reality simulation platform for training and research applications.',
				category: 'AR/VR Solutions',
				price: 'From $150,000/project',
				billing: 'project',
				features: ['VR environments', 'Simulation scenarios', 'Analytics', 'Hardware integration'],
				ctaLabel: 'VR Simulation',
				href: '/contact'
			}
		]
	},
	{
		name: 'Biotech Solutions',
		slug: 'biotech-solutions',
		items: [
			{
				id: 'drug-discovery-platform',
				title: 'Drug Discovery Platform',
				description: 'AI-powered drug discovery platform with molecular modeling and analysis.',
				category: 'Biotech Solutions',
				price: 'From $1,000,000/project',
				billing: 'project',
				features: ['Molecular modeling', 'AI algorithms', 'Data analysis', 'Integration APIs'],
				ctaLabel: 'Drug Discovery',
				href: '/contact'
			},
			{
				id: 'genomics-analysis',
				title: 'Genomics Analysis Platform',
				description: 'Platform for genomic data analysis and interpretation.',
				category: 'Biotech Solutions',
				price: 'From $500,000/project',
				billing: 'project',
				features: ['Data processing', 'Analysis tools', 'Interpretation', 'Reporting'],
				ctaLabel: 'Genomics Analysis',
				href: '/contact'
			}
		]
	},
	{
		name: 'LegalTech Solutions',
		slug: 'legaltech-solutions',
		items: [
			{
				id: 'contract-analysis-ai',
				title: 'AI Contract Analysis',
				description: 'AI-powered contract analysis and review platform for legal professionals.',
				category: 'LegalTech Solutions',
				price: 'From $200,000/project',
				billing: 'project',
				features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Reporting tools'],
				ctaLabel: 'Contract Analysis',
				href: '/contact'
			},
			{
				id: 'legal-research-platform',
				title: 'Legal Research Platform',
				description: 'AI-powered legal research and case law analysis platform.',
				category: 'LegalTech Solutions',
				price: 'From $150,000/project',
				billing: 'project',
				features: ['Case law search', 'AI analysis', 'Citation tools', 'Research history'],
				ctaLabel: 'Legal Research',
				href: '/contact'
			}
		]
	},
	{
		name: 'Real Estate Tech',
		slug: 'real-estate-tech',
		items: [
			{
				id: 'property-management-platform',
				title: 'Property Management Platform',
				description: 'Comprehensive property management platform with tenant and maintenance features.',
				category: 'Real Estate Tech',
				price: 'From $100,000/project',
				billing: 'project',
				features: ['Tenant management', 'Maintenance tracking', 'Financial reporting', 'Mobile apps'],
				ctaLabel: 'Property Management',
				href: '/contact'
			},
			{
				id: 'real-estate-analytics',
				title: 'Real Estate Analytics Platform',
				description: 'AI-powered real estate analytics and market insights platform.',
				category: 'Real Estate Tech',
				price: 'From $150,000/project',
				billing: 'project',
				features: ['Market analysis', 'Property valuation', 'Investment insights', 'Forecasting'],
				ctaLabel: 'Real Estate Analytics',
				href: '/contact'
			}
		]
	},
	{
		name: 'Supply Chain Solutions',
		slug: 'supply-chain-solutions',
		items: [
			{
				id: 'supply-chain-visibility',
				title: 'Supply Chain Visibility Platform',
				description: 'End-to-end supply chain visibility and tracking platform.',
				category: 'Supply Chain Solutions',
				price: 'From $200,000/project',
				billing: 'project',
				features: ['Real-time tracking', 'Analytics dashboard', 'Integration APIs', 'Mobile apps'],
				ctaLabel: 'Supply Chain Visibility',
				href: '/contact'
			},
			{
				id: 'inventory-optimization',
				title: 'AI Inventory Optimization',
				description: 'AI-powered inventory optimization and demand forecasting platform.',
				category: 'Supply Chain Solutions',
				price: 'From $150,000/project',
				billing: 'project',
				features: ['Demand forecasting', 'Inventory optimization', 'Analytics', 'Integration'],
				ctaLabel: 'Optimize Inventory',
				href: '/contact'
			}
		]
	}
];