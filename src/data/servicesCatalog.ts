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
				title: 'AI Content Generator',
				description: 'Advanced AI-powered content creation with multi-language support and SEO optimization.',
				category: 'Micro SaaS',
				price: 'From $79/month',
				billing: 'month',
				features: ['Multi-language support', 'SEO optimization', 'Brand consistency', 'Content templates'],
				ctaLabel: 'Start Creating',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'smart-social-scheduler',
				title: 'Smart Social Media Scheduler',
				description: 'AI-powered social media management with optimal timing and analytics.',
				category: 'Micro SaaS',
				price: 'From $49/month',
				billing: 'month',
				features: ['Multi-platform posting', 'Optimal timing', 'Analytics dashboard', 'Content calendar'],
				ctaLabel: 'Schedule Posts',
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
				features: ['Real-time detection', 'Active learning', 'Edge deployment'],
				ctaLabel: 'Deploy Vision AI',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'ai-autonomous-business',
				title: 'AI Autonomous Business Platform',
				description: 'End-to-end AI automation for business operations and decision making.',
				category: 'AI Solutions',
				price: 'From $1,999/month',
				billing: 'month',
				features: ['Process automation', 'Predictive analytics', 'Autonomous decision making'],
				ctaLabel: 'Transform Business',
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
				id: 'digital-transformation',
				title: 'Digital Transformation',
				description: 'End-to-end modernization of legacy systems and processes.',
				category: 'IT Services',
				price: 'From $50,000/project',
				billing: 'project',
				features: ['Legacy assessment', 'Cloud migration', 'Process optimization'],
				ctaLabel: 'Transform Now',
				href: '/contact'
			},
			{
				id: 'tech-talent',
				title: 'Tech Talent Solutions',
				description: 'Expert developers, engineers, and IT professionals for your projects.',
				category: 'IT Services',
				price: 'From $80/hour',
				billing: 'hour',
				features: ['Full-stack developers', 'DevOps engineers', 'Data scientists', 'UI/UX designers'],
				ctaLabel: 'Find Talent',
				href: '/contact'
			},
			{
				id: 'equipment-solutions',
				title: 'High-Performance Equipment',
				description: 'Advanced tech infrastructure and hardware solutions.',
				category: 'IT Services',
				price: 'From $5,000/project',
				billing: 'project',
				features: ['Cloud infrastructure', 'High-performance computing', 'Network solutions'],
				ctaLabel: 'Get Equipment',
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
			}
		]
	},
	{
		name: 'Quantum Computing',
		slug: 'quantum-computing',
		items: [
			{
				id: 'quantum-algorithms',
				title: 'Quantum Algorithm Development',
				description: 'Custom quantum algorithms for optimization, cryptography, and research.',
				category: 'Quantum Computing',
				price: 'From $25,000/project',
				billing: 'project',
				features: ['Algorithm design', 'Quantum simulation', 'Performance optimization'],
				ctaLabel: 'Explore Quantum',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'quantum-cryptography',
				title: 'Quantum Cryptography Solutions',
				description: 'Post-quantum cryptography and quantum key distribution systems.',
				category: 'Quantum Computing',
				price: 'From $15,000/project',
				billing: 'project',
				features: ['QKD implementation', 'Post-quantum algorithms', 'Security assessment'],
				ctaLabel: 'Secure with Quantum',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'Blockchain Solutions',
		slug: 'blockchain-solutions',
		items: [
			{
				id: 'defi-platform',
				title: 'DeFi Platform Development',
				description: 'Decentralized finance platforms with smart contracts and liquidity management.',
				category: 'Blockchain Solutions',
				price: 'From $30,000/project',
				billing: 'project',
				features: ['Smart contracts', 'Liquidity pools', 'Yield farming', 'Security audits'],
				ctaLabel: 'Build DeFi',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'nft-marketplace',
				title: 'NFT Marketplace Platform',
				description: 'Complete NFT marketplace with minting, trading, and royalty systems.',
				category: 'Blockchain Solutions',
				price: 'From $20,000/project',
				billing: 'project',
				features: ['NFT minting', 'Marketplace trading', 'Royalty distribution', 'Multi-chain support'],
				ctaLabel: 'Launch NFT Platform',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'IoT & Edge Computing',
		slug: 'iot-edge-computing',
		items: [
			{
				id: 'smart-city-platform',
				title: 'Smart City IoT Platform',
				description: 'Comprehensive IoT solution for urban infrastructure monitoring and management.',
				category: 'IoT & Edge Computing',
				price: 'From $50,000/project',
				billing: 'project',
				features: ['Sensor networks', 'Real-time monitoring', 'Data analytics', 'Edge processing'],
				ctaLabel: 'Build Smart City',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'industrial-iot',
				title: 'Industrial IoT Solutions',
				description: 'IoT platforms for manufacturing, energy, and industrial automation.',
				category: 'IoT & Edge Computing',
				price: 'From $35,000/project',
				billing: 'project',
				features: ['Predictive maintenance', 'Asset tracking', 'Energy optimization', 'Safety monitoring'],
				ctaLabel: 'Industrial IoT',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'FinTech Solutions',
		slug: 'fintech-solutions',
		items: [
			{
				id: 'digital-banking',
				title: 'Digital Banking Platform',
				description: 'Modern digital banking solutions with mobile apps and core banking systems.',
				category: 'FinTech Solutions',
				price: 'From $100,000/project',
				billing: 'project',
				features: ['Mobile banking', 'Core banking', 'Payment processing', 'Compliance'],
				ctaLabel: 'Digital Banking',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'payment-gateway',
				title: 'Payment Gateway & Processing',
				description: 'Secure payment processing with multiple payment methods and fraud detection.',
				category: 'FinTech Solutions',
				price: 'From $25,000/project',
				billing: 'project',
				features: ['Multi-payment methods', 'Fraud detection', 'PCI compliance', 'Analytics'],
				ctaLabel: 'Payment Solutions',
				href: 'https://ziontechgroup.com',
				external: true
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
				description: 'Complete telehealth solution with video consultations and patient management.',
				category: 'HealthTech Solutions',
				price: 'From $40,000/project',
				billing: 'project',
				features: ['Video consultations', 'Patient portal', 'EHR integration', 'HIPAA compliance'],
				ctaLabel: 'Telemedicine Platform',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'ai-diagnostics',
				title: 'AI-Powered Diagnostics',
				description: 'Machine learning solutions for medical imaging and diagnostic assistance.',
				category: 'HealthTech Solutions',
				price: 'From $60,000/project',
				billing: 'project',
				features: ['Medical imaging AI', 'Diagnostic assistance', 'Clinical validation', 'Regulatory compliance'],
				ctaLabel: 'AI Diagnostics',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'EdTech Solutions',
		slug: 'edtech-solutions',
		items: [
			{
				id: 'learning-management',
				title: 'Learning Management System',
				description: 'Comprehensive LMS with course creation, student tracking, and analytics.',
				category: 'EdTech Solutions',
				price: 'From $30,000/project',
				billing: 'project',
				features: ['Course creation', 'Student tracking', 'Analytics dashboard', 'Mobile learning'],
				ctaLabel: 'LMS Platform',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'virtual-classroom',
				title: 'Virtual Classroom Platform',
				description: 'Interactive virtual learning environment with real-time collaboration tools.',
				category: 'EdTech Solutions',
				price: 'From $25,000/project',
				billing: 'project',
				features: ['Video conferencing', 'Interactive whiteboard', 'Screen sharing', 'Recording'],
				ctaLabel: 'Virtual Classroom',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'GreenTech Solutions',
		slug: 'greentech-solutions',
		items: [
			{
				id: 'energy-management',
				title: 'Smart Energy Management',
				description: 'IoT-based energy monitoring and optimization for buildings and facilities.',
				category: 'GreenTech Solutions',
				price: 'From $35,000/project',
				billing: 'project',
				features: ['Energy monitoring', 'Smart controls', 'Optimization algorithms', 'Sustainability reporting'],
				ctaLabel: 'Energy Management',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'carbon-tracking',
				title: 'Carbon Footprint Tracking',
				description: 'Comprehensive carbon accounting and reduction planning platform.',
				category: 'GreenTech Solutions',
				price: 'From $20,000/project',
				billing: 'project',
				features: ['Carbon accounting', 'Reduction planning', 'Compliance reporting', 'Sustainability dashboard'],
				ctaLabel: 'Track Carbon',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'SpaceTech Solutions',
		slug: 'spacetech-solutions',
		items: [
			{
				id: 'satellite-data',
				title: 'Satellite Data Analytics',
				description: 'Earth observation data processing and analytics for various industries.',
				category: 'SpaceTech Solutions',
				price: 'From $45,000/project',
				billing: 'project',
				features: ['Satellite imagery', 'Data processing', 'Analytics platform', 'Industry applications'],
				ctaLabel: 'Satellite Analytics',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'mission-planning',
				title: 'Space Mission Planning',
				description: 'AI-powered mission planning and optimization for space operations.',
				category: 'SpaceTech Solutions',
				price: 'From $80,000/project',
				billing: 'project',
				features: ['Mission optimization', 'Risk assessment', 'Resource planning', 'Simulation tools'],
				ctaLabel: 'Mission Planning',
				href: 'https://ziontechgroup.com',
				external: true
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
				description: 'Advanced robotics systems for manufacturing and industrial automation.',
				category: 'Robotics & Automation',
				price: 'From $75,000/project',
				billing: 'project',
				features: ['Robot programming', 'Safety systems', 'Integration services', 'Maintenance support'],
				ctaLabel: 'Industrial Robotics',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'service-robotics',
				title: 'Service Robotics Platform',
				description: 'Autonomous service robots for hospitality, healthcare, and retail applications.',
				category: 'Robotics & Automation',
				price: 'From $50,000/project',
				billing: 'project',
				features: ['Autonomous navigation', 'Task automation', 'Human interaction', 'Safety protocols'],
				ctaLabel: 'Service Robots',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'AR/VR Solutions',
		slug: 'ar-vr-solutions',
		items: [
			{
				id: 'enterprise-ar',
				title: 'Enterprise AR Solutions',
				description: 'Augmented reality applications for training, maintenance, and remote assistance.',
				category: 'AR/VR Solutions',
				price: 'From $40,000/project',
				billing: 'project',
				features: ['AR training', 'Remote assistance', '3D visualization', 'Integration services'],
				ctaLabel: 'Enterprise AR',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'vr-simulation',
				title: 'VR Simulation & Training',
				description: 'Virtual reality training simulations for high-risk and complex scenarios.',
				category: 'AR/VR Solutions',
				price: 'From $35,000/project',
				billing: 'project',
				features: ['VR simulations', 'Training scenarios', 'Progress tracking', 'Analytics'],
				ctaLabel: 'VR Training',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'Biotech Solutions',
		slug: 'biotech-solutions',
		items: [
			{
				id: 'drug-discovery',
				title: 'AI-Powered Drug Discovery',
				description: 'Machine learning platforms for pharmaceutical research and drug development.',
				category: 'Biotech Solutions',
				price: 'From $100,000/project',
				billing: 'project',
				features: ['Molecular modeling', 'Drug screening', 'Clinical trial optimization', 'Regulatory support'],
				ctaLabel: 'Drug Discovery',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'genomics-platform',
				title: 'Genomics Data Platform',
				description: 'Comprehensive platform for genomic data analysis and interpretation.',
				category: 'Biotech Solutions',
				price: 'From $60,000/project',
				billing: 'project',
				features: ['DNA sequencing', 'Data analysis', 'Variant calling', 'Clinical interpretation'],
				ctaLabel: 'Genomics Platform',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'LegalTech Solutions',
		slug: 'legaltech-solutions',
		items: [
			{
				id: 'contract-analysis',
				title: 'AI Contract Analysis',
				description: 'Intelligent contract review and analysis with risk assessment.',
				category: 'LegalTech Solutions',
				price: 'From $25,000/project',
				billing: 'project',
				features: ['Contract review', 'Risk assessment', 'Compliance checking', 'Automated workflows'],
				ctaLabel: 'Contract Analysis',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'legal-research',
				title: 'Legal Research Platform',
				description: 'AI-powered legal research and case law analysis platform.',
				category: 'LegalTech Solutions',
				price: 'From $20,000/project',
				billing: 'project',
				features: ['Case law search', 'Legal analysis', 'Citation tracking', 'Research automation'],
				ctaLabel: 'Legal Research',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	},
	{
		name: 'Real Estate Tech',
		slug: 'real-estate-tech',
		items: [
			{
				id: 'property-management',
				title: 'Smart Property Management',
				description: 'IoT-enabled property management with predictive maintenance and tenant services.',
				category: 'Real Estate Tech',
				price: 'From $30,000/project',
				billing: 'project',
				features: ['IoT monitoring', 'Predictive maintenance', 'Tenant portal', 'Analytics dashboard'],
				ctaLabel: 'Property Management',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'virtual-tours',
				title: 'Virtual Tour Platform',
				description: 'Immersive virtual tours and 3D property visualization solutions.',
				category: 'Real Estate Tech',
				price: 'From $15,000/project',
				billing: 'project',
				features: ['3D scanning', 'Virtual tours', 'Interactive features', 'Mobile optimization'],
				ctaLabel: 'Virtual Tours',
				href: 'https://ziontechgroup.com',
				external: true
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
				description: 'End-to-end supply chain tracking and optimization with real-time analytics.',
				category: 'Supply Chain Solutions',
				price: 'From $40,000/project',
				billing: 'project',
				features: ['Real-time tracking', 'Predictive analytics', 'Risk management', 'Optimization tools'],
				ctaLabel: 'Supply Chain Visibility',
				href: 'https://ziontechgroup.com',
				external: true
			},
			{
				id: 'inventory-optimization',
				title: 'AI Inventory Optimization',
				description: 'Intelligent inventory management with demand forecasting and optimization.',
				category: 'Supply Chain Solutions',
				price: 'From $25,000/project',
				billing: 'project',
				features: ['Demand forecasting', 'Inventory optimization', 'Automated ordering', 'Cost analysis'],
				ctaLabel: 'Optimize Inventory',
				href: 'https://ziontechgroup.com',
				external: true
			}
		]
	}
];