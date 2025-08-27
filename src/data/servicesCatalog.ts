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
		]
	}
];