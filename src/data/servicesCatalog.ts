export type ServiceItem = {
	id: string;
	title: string;
	description: string;
	category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems';
	price: string; // average market starting price
	billing: 'month' | 'project' | 'hour';
	features: string[];
	ctaLabel: string;
	href: string; // internal path or external URL
	external?: boolean};
export type ServiceCategory = {
	name: string;
	slug: string;
	items: ServiceItem[]};
export const servicesCatalog: ServiceCategory[] = [
	{
		name: 'Micro SaaS',
		slug: 'micro-saas',
		items[
			{
				id: 'smart-contract-risk-scanner',
				title: 'Smart Contract Risk Scanner',
				description: 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',
				category: 'Micro SaaS',
				price: '$299',
				billing: 'month',
				features[
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
				features[
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
				features[
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
				features[
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
				features[
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
				features[
					'Quantum route optimization',
					'Real-time inventory tracking',
					'Predictive demand forecasting',
					'Cost optimization',
					'Risk assessment'
				],
				ctaLabel: 'Optimize Supply Chain',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'soc2-compliance-automation-saas',
				title: 'SOC 2 Compliance Automation SaaS',
				description: 'Automate evidence collection, policy mapping, and control monitoring to pass SOC 2 audits faster.',
				category: 'Micro SaaS',
				price: '$249',
				billing: 'month',
				features[
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
				features[
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
		items[
			{
				id: 'autonomous-business-manager',
				title: 'Autonomous Business Manager',
				description: 'AI-powered business management system that autonomously handles operations, decision-making, and strategic planning.',
				category: 'AI Solutions',
				price: '$2,999',
				billing: 'month',
				features[
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
				features[
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
				features[
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
				features[
					'Autonomous navigation',
					'Safety monitoring',
					'Fleet management',
					'Predictive maintenance',
					'Regulatory compliance'
				],
				ctaLabel: 'Vehicle Integration',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'enterprise-rag-search',
				title: 'Enterprise RAG Search Platform',
				description: 'Private, secure Retrieval-Augmented Generation over your docs, wikis, tickets, and data.',
				category: 'AI Solutions',
				price: '$3,499',
				billing: 'month',
				features[
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
				features[
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
		items[
			{
				id: 'zero-trust-architecture',
				title: 'Zero Trust Network Architecture',
				description: 'Comprehensive zero trust security implementation with continuous verification and adaptive access control.',
				category: 'IT Services',
				price: '$15,000',
				billing: 'project',
				features[
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
				features[
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
				features[
					'Quantum edge processing',
					'Real-time analytics',
					'Distributed computing',
					'Energy optimization',
					'Scalable architecture'
				],
				ctaLabel: 'Edge Deployment',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'platform-engineering-kubernetes',
				title: 'Platform Engineering on Kubernetes',
				description: 'Golden paths, IDP, and paved roads for developers with secure, standardized delivery.',
				category: 'IT Services',
				price: '$40,000',
				billing: 'project',
				features[
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
				features[
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
		items[
			{
				id: 'ai-threat-intelligence',
				title: 'AI Threat Intelligence Suite',
				description: 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',
				category: 'Cybersecurity',
				price: '$3,999',
				billing: 'month',
				features[
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
				features[
					'Quantum key distribution',
					'Post-quantum crypto',
					'Secure communication',
					'Key management',
					'Compliance ready'
				],
				ctaLabel: 'Quantum Security',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'managed-detection-response',
				title: 'Managed Detection & Response (MDR)',
				description: '24/7 monitoring, threat hunting, and incident response with SIEM/SOAR integration.',
				category: 'Cybersecurity',
				price: '$3,499',
				billing: 'month',
				features[
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
				features[
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
		items[
			{
				id: 'quantum-data-analytics',
				title: 'Quantum Data Analytics Platform',
				description: 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',
				category: 'Data & Analytics',
				price: '$6,999',
				billing: 'month',
				features[
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
				features[
					'Automated insights',
					'Natural language queries',
					'Predictive modeling',
					'Custom dashboards',
					'Data integration'
				],
				ctaLabel: 'BI Assessment',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'data-quality-observability',
				title: 'Data Quality & Observability',
				description: 'Monitor freshness, completeness, and lineage to trust your analytics and AI.',
				category: 'Data & Analytics',
				price: '$1,499',
				billing: 'month',
				features[
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
				features[
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
		items[
			{
				id: 'autonomous-devops-platform',
				title: 'Autonomous DevOps Platform',
				description: 'Self-managing DevOps platform that automatically optimizes deployments, scaling, and infrastructure management.',
				category: 'Cloud & DevOps',
				price: '$4,999',
				billing: 'month',
				features[
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
				features[
					'Quantum cloud services',
					'Hybrid infrastructure',
					'Quantum optimization',
					'Scalable architecture',
					'Enterprise support'
				],
				ctaLabel: 'Cloud Migration',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'serverless-application-factory',
				title: 'Serverless Application Factory',
				description: 'Blueprints and accelerators to build secure, low-cost serverless backends fast.',
				category: 'Cloud & DevOps',
				price: '$16,000',
				billing: 'project',
				features[
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
				features[
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
		items[
			{
				id: 'quantum-financial-trading',
				title: 'Quantum Financial Trading Platform',
				description: 'Revolutionary trading platform using quantum algorithms for portfolio optimization and risk assessment.',
				category: 'Quantum Computing',
				price: '$25,000',
				billing: 'month',
				features[
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
				features[
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
		items[
			{
				id: 'decentralized-ai-marketplace',
				title: 'Decentralized AI Marketplace',
				description: 'Web3-powered marketplace for AI models, data, and computational resources with blockchain-based governance.',
				category: 'Blockchain & Web3',
				price: '$1,999',
				billing: 'month',
				features[
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
				features[
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
		items[
			{
				id: 'quantum-iot-platform',
				title: 'Quantum IoT Platform',
				description: 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',
				category: 'IoT & Edge',
				price: '$3,999',
				billing: 'month',
				features[
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
				features[
					'Autonomous optimization',
					'Edge AI processing',
					'Network intelligence',
					'Resource management',
					'Performance monitoring'
				],
				ctaLabel: 'Edge AI Demo',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'predictive-maintenance-iot',
				title: 'Predictive Maintenance for IoT Fleets',
				description: 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',
				category: 'IoT & Edge',
				price: '$2,499',
				billing: 'month',
				features[
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
				features[
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
		items[
			{
				id: 'quantum-energy-optimization',
				title: 'Quantum Energy Optimization',
				description: 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',
				category: 'Green Tech',
				price: '$12,000',
				billing: 'month',
				features[
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
				features[
					'AI climate modeling',
					'Quantum simulations',
					'Real-time predictions',
					'Risk assessment',
					'Policy recommendations'
				],
				ctaLabel: 'Climate Demo',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'carbon-accounting-saas',
				title: 'Carbon Accounting & ESG Reporting',
				description: 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',
				category: 'Green Tech',
				price: '$999',
				billing: 'month',
				features[
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
		items[
			{
				id: 'satellite-ai-orchestrator',
				title: 'Satellite AI Orchestrator',
				description: 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',
				category: 'Space Tech',
				price: '$15,000',
				billing: 'month',
				features[
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
				features[
					'Quantum entanglement',
					'Unhackable encryption',
					'Light-speed transmission',
					'Deep space coverage',
					'Interplanetary network'
				],
				ctaLabel: 'Connect Space',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'satellite-imagery-analytics',
				title: 'Satellite Imagery Analytics',
				description: 'Computer vision on multi-spectral imagery for agriculture, insurance, and defense insights.',
				category: 'Space Tech',
				price: '$5,999',
				billing: 'month',
				features[
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
		items[
			{
				id: 'ai-drug-discovery-platform',
				title: 'AI Drug Discovery Platform',
				description: 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',
				category: 'BioTech & Health',
				price: '$35,000',
				billing: 'month',
				features[
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
				features[
					'Quantum DNA sequencing',
					'Personalized medicine',
					'Disease prediction',
					'Genetic counseling',
					'Research collaboration'
				],
				ctaLabel: 'Analyze Genome',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'telemedicine-ai-triage',
				title: 'Telemedicine AI Triage',
				description: 'AI symptom checker with escalation workflows to clinicians and EHR integration.',
				category: 'BioTech & Health',
				price: '$1,999',
				billing: 'month',
				features[
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
		items[
			{
				id: 'quantum-trading-algorithm',
				title: 'Quantum Trading Algorithm',
				description: 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',
				category: 'FinTech & DeFi',
				price: '$45,000',
				billing: 'month',
				features[
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
				features[
					'Autonomous yield farming',
					'Risk management',
					'Strategy optimization',
					'Cross-chain integration',
					'Smart contract security'
				],
				ctaLabel: 'Deploy Protocol',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'kyc-aml-transaction-monitoring',
				title: 'KYC/AML Transaction Monitoring',
				description: 'Detect suspicious activity using rules + ML with investigator case management.',
				category: 'FinTech & DeFi',
				price: '$2,499',
				billing: 'month',
				features[
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
		items[
			{
				id: 'quantum-metaverse-engine',
				title: 'Quantum Metaverse Engine',
				description: 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',
				category: 'Metaverse & AR/VR',
				price: '$28,000',
				billing: 'month',
				features[
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
				features[
					'Real-time AR overlays',
					'Autonomous navigation',
					'Smart city integration',
					'Traffic optimization',
					'Safety monitoring'
				],
				ctaLabel: 'Navigate AR',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'vr-training-simulators',
				title: 'VR Training Simulators',
				description: 'Enterprise-grade immersive learning for safety, field ops, and medical procedures.',
				category: 'Metaverse & AR/VR',
				price: '$30,000',
				billing: 'project',
				features[
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
		items[
			{
				id: 'quantum-ai-controller',
				title: 'Quantum AI Controller',
				description: 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',
				category: 'Autonomous Systems',
				price: '$32,000',
				billing: 'month',
				features[
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
				features[
					'Autonomous navigation',
					'Task learning',
					'Safety protocols',
					'Multi-robot coordination',
					'Performance analytics'
				],
				ctaLabel: 'Deploy Robots',
				href: 'https://ziontechgroup.com/contact'
			}
  {/* Removed stray comma */}
			{
				id: 'warehouse-robotics-orchestration',
				title: 'Warehouse Robotics Orchestration',
				description: 'Coordinate AMRs, conveyors, and pick stations to maximize throughput and safety.',
				category: 'Autonomous Systems',
				price: '$9,999',
				billing: 'month',
				features[
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
		name: 'AI-Powered Business Intelligence',
		slug: 'ai-business-intelligence',
		items[
			{
				id: 'ai-predictive-analytics-platform',
				title: 'AI Predictive Analytics Platform',
				description: 'Advanced predictive analytics platform using machine learning to forecast business trends, customer behavior, and market opportunities.',
				category: 'AI Solutions',
				price: '$1,299',
				billing: 'month',
				features[
					'Real-time data processing',
					'Advanced ML algorithms',
					'Custom forecasting models',
					'Interactive dashboards',
					'API integrations',
					'Automated reporting'
				],
				ctaLabel: 'Start Analytics',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-customer-segmentation-engine',
				title: 'AI Customer Segmentation Engine',
				description: 'Intelligent customer segmentation using AI to identify patterns, predict lifetime value, and optimize marketing strategies.',
				category: 'AI Solutions',
				price: '$899',
				billing: 'month',
				features[
					'Dynamic segmentation',
					'Behavioral analysis',
					'Predictive scoring',
					'Marketing automation',
					'ROI tracking',
					'Real-time updates'
				],
				ctaLabel: 'Segment Customers',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-market-intelligence-suite',
				title: 'AI Market Intelligence Suite',
				description: 'Comprehensive market intelligence platform that monitors competitors, tracks trends, and identifies new opportunities using AI.',
				category: 'AI Solutions',
				price: '$1,599',
				billing: 'month',
				features[
					'Competitor monitoring',
					'Market trend analysis',
					'Opportunity identification',
					'Risk assessment',
					'Custom alerts',
					'Strategic insights'
				],
				ctaLabel: 'Get Intelligence',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Advanced Cybersecurity',
		slug: 'advanced-cybersecurity',
		items[
			{
				id: 'ai-threat-hunting-platform',
				title: 'AI Threat Hunting Platform',
				description: 'Proactive threat hunting platform using AI to detect, analyze, and respond to advanced cyber threats in real-time.',
				category: 'Cybersecurity',
				price: '$2,499',
				billing: 'month',
				features[
					'AI-powered threat detection',
					'Behavioral analysis',
					'Automated response',
					'Threat intelligence',
					'Incident management',
					'Compliance reporting'
				],
				ctaLabel: 'Hunt Threats',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'quantum-encryption-suite',
				title: 'Quantum Encryption Suite',
				description: 'Future-proof encryption solutions using quantum-resistant algorithms to protect data against emerging threats.',
				category: 'Cybersecurity',
				price: '$3,999',
				billing: 'month',
				features[
					'Quantum-resistant algorithms',
					'Post-quantum cryptography',
					'Key management',
					'Hardware security modules',
					'Compliance certifications',
					'Migration support'
				],
				ctaLabel: 'Secure Future',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-security-operations-center',
				title: 'AI Security Operations Center',
				description: 'Intelligent SOC platform that automates security monitoring, incident response, and threat intelligence using AI.',
				category: 'Cybersecurity',
				price: '$4,999',
				billing: 'month',
				features[
					'24/7 AI monitoring',
					'Automated incident response',
					'Threat intelligence feeds',
					'Security orchestration',
					'Compliance automation',
					'Expert support'
				],
				ctaLabel: 'Deploy SOC',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Cloud-Native Development',
		slug: 'cloud-native-development',
		items[
			{
				id: 'kubernetes-orchestration-platform',
				title: 'Kubernetes Orchestration Platform',
				description: 'Enterprise-grade Kubernetes management platform with advanced orchestration, monitoring, and automation capabilities.',
				category: 'Cloud & DevOps',
				price: '$1,899',
				billing: 'month',
				features[
					'Multi-cluster management',
					'Advanced scheduling',
					'Resource optimization',
					'Monitoring & alerting',
					'Security policies',
					'Disaster recovery'
				],
				ctaLabel: 'Deploy K8s',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'serverless-architecture-platform',
				title: 'Serverless Architecture Platform',
				description: 'Complete serverless development platform with automated scaling, monitoring, and cost optimization.',
				category: 'Cloud & DevOps',
				price: '$1,299',
				billing: 'month',
				features[
					'Function orchestration',
					'Auto-scaling',
					'Cost optimization',
					'Performance monitoring',
					'API management',
					'DevOps integration'
				],
				ctaLabel: 'Go Serverless',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'microservices-mesh-platform',
				title: 'Microservices Mesh Platform',
				description: 'Service mesh platform for managing microservices communication, security, and observability at scale.',
				category: 'Cloud & DevOps',
				price: '$2,199',
				billing: 'month',
				features[
					'Service discovery',
					'Load balancing',
					'Security policies',
					'Observability',
					'Traffic management',
					'Circuit breaking'
				],
				ctaLabel: 'Mesh Services',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Data Engineering & Analytics',
		slug: 'data-engineering-analytics',
		items[
			{
				id: 'real-time-data-pipeline-platform',
				title: 'Real-Time Data Pipeline Platform',
				description: 'High-performance data pipeline platform for real-time streaming analytics, ETL processing, and data transformation.',
				category: 'Data & Analytics',
				price: '$2,799',
				billing: 'month',
				features[
					'Real-time streaming',
					'Data transformation',
					'Quality monitoring',
					'Scalable processing',
					'API integrations',
					'Data governance'
				],
				ctaLabel: 'Build Pipeline',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-data-quality-platform',
				title: 'AI Data Quality Platform',
				description: 'Intelligent data quality platform that automatically detects, cleans, and validates data using AI and machine learning.',
				category: 'Data & Analytics',
				price: '$1,599',
				billing: 'month',
				features[
					'AI-powered data cleaning',
					'Quality scoring',
					'Automated validation',
					'Data profiling',
					'Compliance monitoring',
					'Real-time alerts'
				],
				ctaLabel: 'Improve Quality',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'data-catalog-governance-platform',
				title: 'Data Catalog & Governance Platform',
				description: 'Comprehensive data catalog with governance, lineage tracking, and compliance management for enterprise data.',
				category: 'Data & Analytics',
				price: '$2,199',
				billing: 'month',
				features[
					'Data cataloging',
					'Lineage tracking',
					'Governance policies',
					'Compliance reporting',
					'Access control',
					'Data discovery'
				],
				ctaLabel: 'Catalog Data',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'DevOps & Automation',
		slug: 'devops-automation',
		items[
			{
				id: 'ai-powered-devops-platform',
				title: 'AI-Powered DevOps Platform',
				description: 'Intelligent DevOps platform that automates CI/CD, infrastructure management, and operational tasks using AI.',
				category: 'Cloud & DevOps',
				price: '$2,499',
				billing: 'month',
				features[
					'AI-powered automation',
					'Intelligent CI/CD',
					'Infrastructure as code',
					'Monitoring & alerting',
					'Performance optimization',
					'Security scanning'
				],
				ctaLabel: 'Automate DevOps',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'gitops-workflow-platform',
				title: 'GitOps Workflow Platform',
				description: 'GitOps workflow platform for declarative infrastructure management, deployment automation, and version control.',
				category: 'Cloud & DevOps',
				price: '$1,799',
				billing: 'month',
				features[
					'Git-based workflows',
					'Declarative infrastructure',
					'Automated deployments',
					'Rollback capabilities',
					'Compliance tracking',
					'Team collaboration'
				],
				ctaLabel: 'GitOps Workflow',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'chaos-engineering-platform',
				title: 'Chaos Engineering Platform',
				description: 'Chaos engineering platform for testing system resilience, identifying weaknesses, and improving reliability.',
				category: 'Cloud & DevOps',
				price: '$1,299',
				billing: 'month',
				features[
					'Automated testing',
					'Resilience scoring',
					'Failure injection',
					'Recovery testing',
					'Performance analysis',
					'Best practices'
				],
				ctaLabel: 'Test Resilience',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Enterprise Integration',
		slug: 'enterprise-integration',
		items[
			{
				id: 'api-gateway-management-platform',
				title: 'API Gateway Management Platform',
				description: 'Enterprise API gateway platform with advanced routing, security, monitoring, and developer portal capabilities.',
				category: 'IT Services',
				price: '$2,999',
				billing: 'month',
				features[
					'Advanced routing',
					'Security policies',
					'Rate limiting',
					'Developer portal',
					'Analytics & monitoring',
					'API versioning'
				],
				ctaLabel: 'Manage APIs',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'enterprise-service-bus-platform',
				title: 'Enterprise Service Bus Platform',
				description: 'Modern ESB platform for enterprise integration, message routing, and service orchestration.',
				category: 'IT Services',
				price: '$3,499',
				billing: 'month',
				features[
					'Message routing',
					'Service orchestration',
					'Data transformation',
					'Protocol support',
					'Monitoring & alerting',
					'High availability'
				],
				ctaLabel: 'Integrate Services',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'data-sync-orchestration-platform',
				title: 'Data Sync Orchestration Platform',
				description: 'Intelligent data synchronization platform for multi-cloud, hybrid, and on-premises data integration.',
				category: 'Data & Analytics',
				price: '$2,199',
				billing: 'month',
				features[
					'Multi-cloud sync',
					'Real-time replication',
					'Conflict resolution',
					'Data validation',
					'Performance monitoring',
					'Disaster recovery'
				],
				ctaLabel: 'Sync Data',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'AI Training & Customization',
		slug: 'ai-training-customization',
		items[
			{
				id: 'custom-ai-model-training',
				title: 'Custom AI Model Training Platform',
				description: 'Enterprise AI model training platform for custom machine learning models tailored to specific business needs.',
				category: 'AI Solutions',
				price: '$5,999',
				billing: 'month',
				features[
					'Custom model training',
					'Data preprocessing',
					'Hyperparameter optimization',
					'Model evaluation',
					'Deployment pipeline',
					'Performance monitoring'
				],
				ctaLabel: 'Train Models',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-fine-tuning-platform',
				title: 'AI Fine-Tuning Platform',
				description: 'Platform for fine-tuning pre-trained AI models with domain-specific data for improved accuracy and relevance.',
				category: 'AI Solutions',
				price: '$3,999',
				billing: 'month',
				features[
					'Model fine-tuning',
					'Domain adaptation',
					'Performance optimization',
					'Version control',
					'A/B testing',
					'Rollback capabilities'
				],
				ctaLabel: 'Fine-tune AI',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'ai-model-ops-platform',
				title: 'AI Model Operations Platform',
				description: 'Comprehensive MLOps platform for managing the entire AI model lifecycle from development to production.',
				category: 'AI Solutions',
				price: '$4,499',
				billing: 'month',
				features[
					'Model lifecycle management',
					'Version control',
					'Deployment automation',
					'Performance monitoring',
					'Model governance',
					'Compliance tracking'
				],
				ctaLabel: 'Manage Models',
				href: 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		name: 'Sustainability & Green Tech',
		slug: 'sustainability-green-tech',
		items[
			{
				id: 'carbon-footprint-tracking-platform',
				title: 'Carbon Footprint Tracking Platform',
				description: 'Comprehensive platform for tracking, analyzing, and reducing carbon footprint across business operations.',
				category: 'Green Tech',
				price: '$1,299',
				billing: 'month',
				features[
					'Carbon tracking',
					'Emissions calculation',
					'Reduction strategies',
					'Sustainability reporting',
					'Compliance monitoring',
					'Goal setting'
				],
				ctaLabel: 'Track Carbon',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'energy-optimization-platform',
				title: 'Energy Optimization Platform',
				description: 'AI-powered energy optimization platform for reducing energy consumption and costs in data centers and facilities.',
				category: 'Green Tech',
				price: '$2,199',
				billing: 'month',
				features[
					'Energy monitoring',
					'AI optimization',
					'Cost analysis',
					'Predictive maintenance',
					'Renewable integration',
					'Sustainability metrics'
				],
				ctaLabel: 'Optimize Energy',
				href: 'https://ziontechgroup.com/contact'
			},
			{
				id: 'circular-economy-platform',
				title: 'Circular Economy Platform',
				description: 'Platform for implementing circular economy principles, waste reduction, and sustainable resource management.',
				category: 'Green Tech',
				price: '$1,899',
				billing: 'month',
				features[
					'Waste tracking',
					'Resource optimization',
					'Circular design tools',
					'Sustainability metrics',
					'Compliance reporting',
					'Best practices'
				],
				ctaLabel: 'Go Circular',
				href: 'https://ziontechgroup.com/contact'
			}
		]
  {/* Removed stray closing brace */}
];