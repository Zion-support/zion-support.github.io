export type ServiceItem = {
	id: string;
	title: string;
	description: string;
	category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps';
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
					'Smartphone optimization',
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
	}
];