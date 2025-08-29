export type ServiceItem = {
	id: string;
	title: string;
	description: string;
	category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Advanced AI & ML' | 'Digital Marketing & SEO' | 'E-commerce & Retail' | 'Healthcare & Telemedicine' | 'Education & E-Learning' | 'Real Estate & Property' | 'Legal & Compliance' | 'Manufacturing & Industry 4.0' | 'Energy & Sustainability' | 'Transportation & Logistics';
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
			}
			,
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
			}
		]
	},
	{
		name: 'AI Solutions',
		slug: 'ai-solutions',
		items: [
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
			}
			,
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
			}
		]
	},
	{
		name: 'IT Services',
		slug: 'it-services',
		items: [
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
	{
		name: 'Advanced AI & ML',
		slug: 'advanced-ai-ml',
		items: [
			{
				id: 'ai-code-review-assistant',
				title: 'AI Code Review Assistant Pro',
				description: 'Intelligent code review system that automatically analyzes code quality, security vulnerabilities, and performance issues with detailed recommendations.',
				category: 'Advanced AI & ML',
				price: '$399',
				billing: 'month',
				features: [
					'Automated code analysis',
					'Security vulnerability detection',
					'Performance optimization suggestions',
					'Code style enforcement',
					'Integration with GitHub/GitLab',
					'Custom rule configuration',
					'Team collaboration tools',
					'Historical analysis tracking'
				],
				ctaLabel: 'Start Code Review',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-test-automation-platform',
				title: 'AI Test Automation Platform',
				description: 'Intelligent test automation that automatically generates, maintains, and optimizes test cases using AI and machine learning.',
				category: 'Advanced AI & ML',
				price: '$599',
				billing: 'month',
				features: [
					'AI-generated test cases',
					'Automated test maintenance',
					'Visual regression testing',
					'Performance testing automation',
					'Cross-browser compatibility',
					'CI/CD integration',
					'Test analytics dashboard',
					'Parallel execution support'
				],
				ctaLabel: 'Automate Testing',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-document-intelligence',
				title: 'AI Document Intelligence Suite',
				description: 'Advanced document processing platform that extracts, analyzes, and organizes information from any document type using AI.',
				category: 'Advanced AI & ML',
				price: '$299',
				billing: 'month',
				features: [
					'Multi-format document support',
					'Intelligent data extraction',
					'Natural language processing',
					'Automated categorization',
					'Search and retrieval',
					'Compliance monitoring',
					'API integration',
					'Custom workflow automation'
				],
				ctaLabel: 'Process Documents',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Digital Marketing & SEO',
		slug: 'digital-marketing-seo',
		items: [
			{
				id: 'ai-seo-optimizer-pro',
				title: 'AI SEO Optimizer Pro',
				description: 'Comprehensive SEO platform that uses AI to analyze, optimize, and monitor website performance with automated recommendations.',
				category: 'Digital Marketing & SEO',
				price: '$199',
				billing: 'month',
				features: [
					'AI-powered keyword research',
					'On-page optimization analysis',
					'Competitor analysis',
					'Technical SEO auditing',
					'Content optimization suggestions',
					'Ranking tracking',
					'Automated reporting',
					'Local SEO optimization'
				],
				ctaLabel: 'Optimize SEO',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'social-media-ai-manager',
				title: 'Social Media AI Manager',
				description: 'Intelligent social media management platform that automates content creation, scheduling, and engagement using AI.',
				category: 'Digital Marketing & SEO',
				price: '$149',
				billing: 'month',
				features: [
					'AI content generation',
					'Smart posting schedules',
					'Engagement automation',
					'Performance analytics',
					'Multi-platform management',
					'Brand voice consistency',
					'Trend analysis',
					'ROI tracking'
				],
				ctaLabel: 'Manage Social Media',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-email-marketing-automation',
				title: 'AI Email Marketing Automation',
				description: 'Advanced email marketing platform with AI-powered personalization, automation, and optimization for maximum engagement.',
				category: 'Digital Marketing & SEO',
				price: '$179',
				billing: 'month',
				features: [
					'AI personalization engine',
					'Behavioral automation',
					'A/B testing automation',
					'Predictive analytics',
					'Smart segmentation',
					'Engagement scoring',
					'Deliverability optimization',
					'Revenue attribution'
				],
				ctaLabel: 'Automate Email Marketing',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'E-commerce & Retail',
		slug: 'ecommerce-retail',
		items: [
			{
				id: 'ai-inventory-optimizer',
				title: 'AI Inventory Optimizer',
				description: 'Intelligent inventory management system that predicts demand, optimizes stock levels, and reduces costs using AI.',
				category: 'E-commerce & Retail',
				price: '$349',
				billing: 'month',
				features: [
					'Demand forecasting',
					'Stock level optimization',
					'Reorder automation',
					'Seasonal trend analysis',
					'Cost optimization',
					'Multi-location support',
					'Supplier management',
					'Real-time alerts'
				],
				ctaLabel: 'Optimize Inventory',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-pricing-optimizer',
				title: 'AI Pricing Optimizer',
				description: 'Dynamic pricing platform that automatically adjusts prices based on market conditions, demand, and competitor analysis.',
				category: 'E-commerce & Retail',
				price: '$299',
				billing: 'month',
				features: [
					'Dynamic pricing algorithms',
					'Competitor price monitoring',
					'Demand-based pricing',
					'Profit margin optimization',
					'Seasonal pricing strategies',
					'Real-time price updates',
					'Performance analytics',
					'Custom pricing rules'
				],
				ctaLabel: 'Optimize Pricing',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-customer-churn-predictor',
				title: 'AI Customer Churn Predictor',
				description: 'Predictive analytics platform that identifies at-risk customers and provides actionable insights to improve retention.',
				category: 'E-commerce & Retail',
				price: '$249',
				billing: 'month',
				features: [
					'Churn prediction models',
					'Risk scoring algorithms',
					'Retention strategies',
					'Customer behavior analysis',
					'Automated alerts',
					'ROI tracking',
					'Integration with CRM',
					'Custom retention campaigns'
				],
				ctaLabel: 'Predict Churn',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Healthcare & Telemedicine',
		slug: 'healthcare-telemedicine',
		items: [
			{
				id: 'ai-medical-imaging-analyzer',
				title: 'AI Medical Imaging Analyzer',
				description: 'Advanced medical imaging analysis platform that uses AI to detect abnormalities and assist in diagnosis.',
				category: 'Healthcare & Telemedicine',
				price: '$1,299',
				billing: 'month',
				features: [
					'Multi-modality support',
					'AI abnormality detection',
					'Diagnostic assistance',
					'Report generation',
					'Integration with PACS',
					'HIPAA compliance',
					'Clinical workflow integration',
					'Performance analytics'
				],
				ctaLabel: 'Analyze Medical Images',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-patient-scheduling-optimizer',
				title: 'AI Patient Scheduling Optimizer',
				description: 'Intelligent scheduling system that optimizes appointment booking, reduces no-shows, and improves patient satisfaction.',
				category: 'Healthcare & Telemedicine',
				price: '$399',
				billing: 'month',
				features: [
					'Smart appointment scheduling',
					'No-show prediction',
					'Patient preference learning',
					'Resource optimization',
					'Automated reminders',
					'Waitlist management',
					'Performance metrics',
					'Integration with EHR'
				],
				ctaLabel: 'Optimize Scheduling',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-medical-transcription',
				title: 'AI Medical Transcription Pro',
				description: 'Advanced medical transcription service that converts speech to text with medical terminology accuracy and EHR integration.',
				category: 'Healthcare & Telemedicine',
				price: '$199',
				billing: 'month',
				features: [
					'Medical terminology recognition',
					'Multi-speaker support',
					'EHR integration',
					'Custom vocabulary training',
					'Quality assurance tools',
					'Secure file handling',
					'Turnaround time tracking',
					'Compliance reporting'
				],
				ctaLabel: 'Start Transcription',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Education & E-Learning',
		slug: 'education-elearning',
		items: [
			{
				id: 'ai-personalized-learning-platform',
				title: 'AI Personalized Learning Platform',
				description: 'Adaptive learning platform that personalizes educational content based on individual student performance and learning styles.',
				category: 'Education & E-Learning',
				price: '$299',
				billing: 'month',
				features: [
					'Adaptive learning algorithms',
					'Personalized content delivery',
					'Progress tracking',
					'Learning style assessment',
					'Performance analytics',
					'Content recommendation engine',
					'Multi-subject support',
					'Parent/teacher dashboard'
				],
				ctaLabel: 'Personalize Learning',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-student-performance-predictor',
				title: 'AI Student Performance Predictor',
				description: 'Predictive analytics platform that identifies at-risk students and provides early intervention recommendations.',
				category: 'Education & E-Learning',
				price: '$199',
				billing: 'month',
				features: [
					'Performance prediction models',
					'Early warning system',
					'Intervention recommendations',
					'Progress monitoring',
					'Risk factor analysis',
					'Teacher insights dashboard',
					'Parent communication tools',
					'Outcome tracking'
				],
				ctaLabel: 'Predict Performance',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-content-creation-assistant',
				title: 'AI Content Creation Assistant',
				description: 'AI-powered content creation tool that helps educators create engaging, personalized learning materials.',
				category: 'Education & E-Learning',
				price: '$149',
				billing: 'month',
				features: [
					'AI content generation',
					'Curriculum customization',
					'Multimedia content creation',
					'Accessibility features',
					'Content quality assessment',
					'Collaboration tools',
					'Version control',
					'Distribution management'
				],
				ctaLabel: 'Create Content',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Real Estate & Property',
		slug: 'real-estate-property',
		items: [
			{
				id: 'ai-property-valuation-engine',
				title: 'AI Property Valuation Engine',
				description: 'Advanced property valuation platform that uses AI to analyze market data and provide accurate property assessments.',
				category: 'Real Estate & Property',
				price: '$399',
				billing: 'month',
				features: [
					'AI-powered valuation models',
					'Market trend analysis',
					'Comparable property analysis',
					'Risk assessment',
					'Automated reports',
					'Market data integration',
					'Custom valuation criteria',
					'Performance tracking'
				],
				ctaLabel: 'Value Properties',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-lead-scoring-platform',
				title: 'AI Lead Scoring Platform',
				description: 'Intelligent lead scoring system that prioritizes prospects based on AI analysis of behavior and engagement patterns.',
				category: 'Real Estate & Property',
				price: '$249',
				billing: 'month',
				features: [
					'Behavioral analysis',
					'Engagement scoring',
					'Lead prioritization',
					'Conversion prediction',
					'Automated follow-up',
					'CRM integration',
					'Performance analytics',
					'Custom scoring rules'
				],
				ctaLabel: 'Score Leads',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-market-analysis-tool',
				title: 'AI Market Analysis Tool',
				description: 'Comprehensive market analysis platform that provides real-time insights into real estate market trends and opportunities.',
				category: 'Real Estate & Property',
				price: '$299',
				billing: 'month',
				features: [
					'Real-time market data',
					'Trend analysis',
					'Opportunity identification',
					'Investment analysis',
					'Market forecasting',
					'Custom reports',
					'Data visualization',
					'Alert system'
				],
				ctaLabel: 'Analyze Market',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Legal & Compliance',
		slug: 'legal-compliance',
		items: [
			{
				id: 'ai-contract-analysis-platform',
				title: 'AI Contract Analysis Platform',
				description: 'Intelligent contract analysis platform that automatically reviews, analyzes, and extracts key information from legal documents.',
				category: 'Legal & Compliance',
				price: '$599',
				billing: 'month',
				features: [
					'Automated contract review',
					'Risk identification',
					'Clause extraction',
					'Compliance checking',
					'Version comparison',
					'Custom clause library',
					'Integration with legal tools',
					'Audit trail'
				],
				ctaLabel: 'Analyze Contracts',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-legal-research-assistant',
				title: 'AI Legal Research Assistant',
				description: 'Advanced legal research platform that uses AI to find relevant case law, statutes, and legal precedents.',
				category: 'Legal & Compliance',
				price: '$399',
				billing: 'month',
				features: [
					'AI-powered legal search',
					'Case law analysis',
					'Statute interpretation',
					'Precedent identification',
					'Research automation',
					'Citation management',
					'Collaboration tools',
					'Research analytics'
				],
				ctaLabel: 'Research Legal',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-compliance-monitoring',
				title: 'AI Compliance Monitoring System',
				description: 'Automated compliance monitoring platform that tracks regulatory changes and ensures organizational compliance.',
				category: 'Legal & Compliance',
				price: '$499',
				billing: 'month',
				features: [
					'Regulatory change tracking',
					'Compliance assessment',
					'Risk monitoring',
					'Automated reporting',
					'Policy management',
					'Training tracking',
					'Audit preparation',
					'Alert system'
				],
				ctaLabel: 'Monitor Compliance',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Manufacturing & Industry 4.0',
		slug: 'manufacturing-industry4',
		items: [
			{
				id: 'ai-quality-control-system',
				title: 'AI Quality Control System',
				description: 'Intelligent quality control platform that uses computer vision and AI to detect defects and ensure product quality.',
				category: 'Manufacturing & Industry 4.0',
				price: '$799',
				billing: 'month',
				features: [
					'Computer vision inspection',
					'Defect detection',
					'Quality scoring',
					'Process optimization',
					'Real-time monitoring',
					'Integration with MES',
					'Performance analytics',
					'Custom quality rules'
				],
				ctaLabel: 'Control Quality',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-predictive-maintenance',
				title: 'AI Predictive Maintenance Platform',
				description: 'Advanced predictive maintenance system that uses AI to predict equipment failures and optimize maintenance schedules.',
				category: 'Manufacturing & Industry 4.0',
				price: '$649',
				billing: 'month',
				features: [
					'Failure prediction models',
					'Maintenance optimization',
					'Equipment monitoring',
					'Cost optimization',
					'Integration with CMMS',
					'Real-time alerts',
					'Performance tracking',
					'Custom maintenance rules'
				],
				ctaLabel: 'Predict Maintenance',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-supply-chain-optimizer',
				title: 'AI Supply Chain Optimizer',
				description: 'Intelligent supply chain optimization platform that uses AI to improve efficiency, reduce costs, and enhance visibility.',
				category: 'Manufacturing & Industry 4.0',
				price: '$899',
				billing: 'month',
				features: [
					'Demand forecasting',
					'Inventory optimization',
					'Route optimization',
					'Cost analysis',
					'Risk assessment',
					'Supplier management',
					'Performance tracking',
					'Custom optimization rules'
				],
				ctaLabel: 'Optimize Supply Chain',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Energy & Sustainability',
		slug: 'energy-sustainability',
		items: [
			{
				id: 'ai-energy-optimization',
				title: 'AI Energy Optimization Platform',
				description: 'Intelligent energy management platform that optimizes consumption, reduces costs, and improves sustainability.',
				category: 'Energy & Sustainability',
				price: '$549',
				billing: 'month',
				features: [
					'Energy consumption analysis',
					'Optimization algorithms',
					'Cost reduction strategies',
					'Sustainability tracking',
					'Real-time monitoring',
					'Integration with IoT devices',
					'Performance analytics',
					'Custom optimization rules'
				],
				ctaLabel: 'Optimize Energy',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-carbon-footprint-tracker',
				title: 'AI Carbon Footprint Tracker',
				description: 'Comprehensive carbon footprint tracking platform that helps organizations measure, reduce, and report their environmental impact.',
				category: 'Energy & Sustainability',
				price: '$299',
				billing: 'month',
				features: [
					'Carbon footprint calculation',
					'Emissions tracking',
					'Reduction strategies',
					'Sustainability reporting',
					'Compliance monitoring',
					'Integration with ERP systems',
					'Performance analytics',
					'Custom tracking rules'
				],
				ctaLabel: 'Track Carbon Footprint',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-renewable-energy-manager',
				title: 'AI Renewable Energy Manager',
				description: 'Intelligent renewable energy management platform that optimizes renewable energy systems and grid integration.',
				category: 'Energy & Sustainability',
				price: '$699',
				billing: 'month',
				features: [
					'Renewable energy optimization',
					'Grid integration management',
					'Energy storage optimization',
					'Performance monitoring',
					'Predictive analytics',
					'Integration with smart grids',
					'Cost optimization',
					'Custom management rules'
				],
				ctaLabel: 'Manage Renewable Energy',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Transportation & Logistics',
		slug: 'transportation-logistics',
		items: [
			{
				id: 'ai-fleet-optimization',
				title: 'AI Fleet Optimization Platform',
				description: 'Intelligent fleet management platform that optimizes routes, reduces costs, and improves operational efficiency.',
				category: 'Transportation & Logistics',
				price: '$799',
				billing: 'month',
				features: [
					'Route optimization',
					'Fleet performance monitoring',
					'Cost optimization',
					'Driver behavior analysis',
					'Maintenance scheduling',
					'Integration with GPS systems',
					'Performance analytics',
					'Custom optimization rules'
				],
				ctaLabel: 'Optimize Fleet',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-last-mile-delivery',
				title: 'AI Last-Mile Delivery Optimizer',
				description: 'Advanced last-mile delivery optimization platform that improves delivery efficiency and customer satisfaction.',
				category: 'Transportation & Logistics',
				price: '$449',
				billing: 'month',
				features: [
					'Delivery route optimization',
					'Real-time tracking',
					'Customer communication',
					'Performance analytics',
					'Integration with delivery platforms',
					'Cost optimization',
					'Custom delivery rules',
					'Performance tracking'
				],
				ctaLabel: 'Optimize Last-Mile',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-warehouse-automation',
				title: 'AI Warehouse Automation Platform',
				description: 'Intelligent warehouse automation platform that optimizes operations, reduces costs, and improves efficiency.',
				category: 'Transportation & Logistics',
				price: '$1,199',
				billing: 'month',
				features: [
					'Automated picking systems',
					'Inventory optimization',
					'Space utilization',
					'Performance monitoring',
					'Integration with WMS',
					'Cost optimization',
					'Custom automation rules',
					'Performance analytics'
				],
				ctaLabel: 'Automate Warehouse',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	}
];