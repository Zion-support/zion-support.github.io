export type ServiceItem = {
	id: string;
	title: string;
	description: string;
	category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Sustainability' | 'Digital Transformation' | 'Industry 4.0';
	price: string;
	billing: 'month' | 'project' | 'hour';
	features: string[];
	ctaLabel: string;
	href: string;
	external?: boolean;
	marketSize?: string;
	growthRate?: string;
	competitors?: string[];
	useCases?: string[];
};

export type ServiceCategory = {
	name: string;
	slug: string;
	items: ServiceItem[];
};

export const comprehensiveInnovativeServices2030: ServiceCategory[] = [
	{
		name: 'Advanced AI & Machine Learning',
		slug: 'advanced-ai-ml',
		items: [
			{
				id: 'ai-enterprise-workflow-automation',
				title: 'AI Enterprise Workflow Automation Platform',
				description: 'Intelligent workflow automation that learns from your business processes and automatically optimizes operations across departments.',
				category: 'AI Solutions',
				price: '$2,499',
				billing: 'month',
				features: [
					'Process mining and discovery',
					'Intelligent task routing',
					'Predictive process optimization',
					'Integration with 100+ enterprise systems',
					'Real-time performance analytics',
					'Compliance and audit trails',
					'Mobile-first interface',
					'Multi-language support'
				],
				ctaLabel: 'Start Automation',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$15.8B',
				growthRate: '23.4% CAGR',
				competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism'],
				useCases: ['HR onboarding', 'Invoice processing', 'Customer service', 'Supply chain management']
			},
			{
				id: 'ai-powered-business-intelligence-suite',
				title: 'AI-Powered Business Intelligence Suite',
				description: 'Next-generation BI platform that automatically generates insights, predicts trends, and provides actionable recommendations.',
				category: 'AI Solutions',
				price: '$1,999',
				billing: 'month',
				features: [
					'Natural language querying',
					'Automated insight generation',
					'Predictive analytics engine',
					'Real-time data visualization',
					'Custom dashboard builder',
					'Mobile BI app',
					'Advanced security and compliance',
					'Multi-cloud data integration'
				],
				ctaLabel: 'Get Intelligence',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$29.4B',
				growthRate: '18.7% CAGR',
				competitors: ['Tableau', 'Power BI', 'Qlik'],
				useCases: ['Sales forecasting', 'Customer analytics', 'Financial reporting', 'Operational insights']
			},
			{
				id: 'ai-content-generation-studio',
				title: 'AI Content Generation Studio Pro',
				description: 'Enterprise-grade content creation platform that generates high-quality, SEO-optimized content across all formats and languages.',
				category: 'AI Solutions',
				price: '$899',
				billing: 'month',
				features: [
					'Multi-format content generation',
					'SEO optimization engine',
					'Brand voice consistency',
					'Plagiarism detection',
					'Content calendar management',
					'Performance analytics',
					'Team collaboration tools',
					'API integration capabilities'
				],
				ctaLabel: 'Create Content',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$8.2B',
				growthRate: '26.3% CAGR',
				competitors: ['Jasper', 'Copy.ai', 'Writesonic'],
				useCases: ['Marketing content', 'Blog posts', 'Social media', 'Product descriptions']
			}
		]
	},
	{
		name: 'Cybersecurity & Compliance',
		slug: 'cybersecurity-compliance',
		items: [
			{
				id: 'zero-trust-security-platform',
				title: 'Zero Trust Security Platform',
				description: 'Comprehensive zero trust implementation with continuous verification, adaptive access control, and threat intelligence.',
				category: 'Cybersecurity',
				price: '$3,999',
				billing: 'month',
				features: [
					'Identity verification and management',
					'Micro-segmentation',
					'Continuous monitoring',
					'Threat detection and response',
					'Compliance reporting',
					'Multi-factor authentication',
					'Privileged access management',
					'Security analytics dashboard'
				],
				ctaLabel: 'Secure Now',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$45.2B',
				growthRate: '19.8% CAGR',
				competitors: ['Palo Alto Networks', 'Cisco', 'Fortinet'],
				useCases: ['Enterprise security', 'Cloud security', 'Remote work security', 'Compliance management']
			},
			{
				id: 'ai-threat-detection-response',
				title: 'AI-Powered Threat Detection & Response',
				description: 'Intelligent security platform that automatically detects, analyzes, and responds to cyber threats in real-time.',
				category: 'Cybersecurity',
				price: '$2,799',
				billing: 'month',
				features: [
					'AI-powered threat detection',
					'Automated incident response',
					'Behavioral analytics',
					'Threat intelligence feeds',
					'Forensic analysis tools',
					'Compliance automation',
					'24/7 security monitoring',
					'Custom security policies'
				],
				ctaLabel: 'Detect Threats',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$38.7B',
				growthRate: '22.1% CAGR',
				competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'],
				useCases: ['Endpoint protection', 'Network security', 'Cloud security', 'Incident response']
			}
		]
	},
	{
		name: 'Cloud & DevOps Innovation',
		slug: 'cloud-devops-innovation',
		items: [
			{
				id: 'multi-cloud-orchestration-platform',
				title: 'Multi-Cloud Orchestration Platform',
				description: 'Unified management platform for AWS, Azure, GCP, and hybrid cloud environments with cost optimization and security.',
				category: 'Cloud & DevOps',
				price: '$4,999',
				billing: 'month',
				features: [
					'Unified cloud management',
					'Cost optimization engine',
					'Security policy enforcement',
					'Automated scaling',
					'Performance monitoring',
					'Disaster recovery',
					'Compliance management',
					'Multi-cloud analytics'
				],
				ctaLabel: 'Orchestrate Clouds',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$67.8B',
				growthRate: '28.4% CAGR',
				competitors: ['HashiCorp', 'Terraform', 'Ansible'],
				useCases: ['Cloud migration', 'Multi-cloud management', 'Cost optimization', 'Security compliance']
			},
			{
				id: 'devops-automation-platform',
				title: 'DevOps Automation Platform',
				description: 'Complete CI/CD automation with intelligent testing, deployment, and monitoring for modern software development.',
				category: 'Cloud & DevOps',
				price: '$2,999',
				billing: 'month',
				features: [
					'Automated CI/CD pipelines',
					'Intelligent testing',
					'Deployment automation',
					'Performance monitoring',
					'Security scanning',
					'Infrastructure as code',
					'Team collaboration tools',
					'Analytics and reporting'
				],
				ctaLabel: 'Automate DevOps',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$25.6B',
				growthRate: '24.7% CAGR',
				competitors: ['GitLab', 'Jenkins', 'CircleCI'],
				useCases: ['Software development', 'Continuous deployment', 'Testing automation', 'Release management']
			}
		]
	},
	{
		name: 'Data & Analytics Excellence',
		slug: 'data-analytics-excellence',
		items: [
			{
				id: 'real-time-data-analytics-platform',
				title: 'Real-Time Data Analytics Platform',
				description: 'High-performance real-time analytics platform for streaming data with AI-powered insights and predictive capabilities.',
				category: 'Data & Analytics',
				price: '$3,999',
				billing: 'month',
				features: [
					'Real-time data processing',
					'Streaming analytics',
					'AI-powered insights',
					'Predictive modeling',
					'Interactive dashboards',
					'Data visualization',
					'API integration',
					'Scalable architecture'
				],
				ctaLabel: 'Analyze Real-Time',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$42.1B',
				growthRate: '25.6% CAGR',
				competitors: ['Apache Kafka', 'Apache Flink', 'Confluent'],
				useCases: ['IoT analytics', 'Financial trading', 'E-commerce analytics', 'Operational monitoring']
			},
			{
				id: 'data-governance-platform',
				title: 'Enterprise Data Governance Platform',
				description: 'Comprehensive data governance with quality management, lineage tracking, and compliance automation.',
				category: 'Data & Analytics',
				price: '$2,799',
				billing: 'month',
				features: [
					'Data quality management',
					'Lineage tracking',
					'Metadata management',
					'Compliance automation',
					'Data catalog',
					'Access control',
					'Audit trails',
					'Policy enforcement'
				],
				ctaLabel: 'Govern Data',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$15.4B',
				growthRate: '19.3% CAGR',
				competitors: ['Collibra', 'Informatica', 'Alation'],
				useCases: ['Data quality', 'Compliance management', 'Data lineage', 'Metadata management']
			}
		]
	},
	{
		name: 'IoT & Edge Computing',
		slug: 'iot-edge-computing',
		items: [
			{
				id: 'iot-platform-enterprise',
				title: 'Enterprise IoT Platform',
				description: 'Scalable IoT platform for enterprise applications with device management, data processing, and analytics.',
				category: 'IoT & Edge',
				price: '$4,999',
				billing: 'month',
				features: [
					'Device management',
					'Data processing',
					'Real-time analytics',
					'Security and compliance',
					'Integration capabilities',
					'Custom dashboards',
					'Mobile applications',
					'Enterprise support'
				],
				ctaLabel: 'Connect IoT',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$35.2B',
				growthRate: '26.8% CAGR',
				competitors: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT'],
				useCases: ['Smart manufacturing', 'Connected vehicles', 'Smart cities', 'Industrial monitoring']
			}
		]
	},
	{
		name: 'Blockchain & Web3 Solutions',
		slug: 'blockchain-web3',
		items: [
			{
				id: 'enterprise-blockchain-platform',
				title: 'Enterprise Blockchain Platform',
				description: 'Permissioned blockchain platform for enterprise applications with smart contracts and decentralized applications.',
				category: 'Blockchain & Web3',
				price: '$5,999',
				billing: 'month',
				features: [
					'Permissioned blockchain',
					'Smart contract development',
					'Consensus mechanisms',
					'Security framework',
					'Integration APIs',
					'Monitoring tools',
					'Compliance features',
					'Enterprise support'
				],
				ctaLabel: 'Build Blockchain',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$19.8B',
				growthRate: '87.7% CAGR',
				competitors: ['Hyperledger', 'Corda', 'Quorum'],
				useCases: ['Supply chain', 'Digital identity', 'Financial services', 'Healthcare records']
			}
		]
	},
	{
		name: 'Sustainability & Green Tech',
		slug: 'sustainability-green-tech',
		items: [
			{
				id: 'carbon-tracking-platform',
				title: 'Carbon Footprint Tracking Platform',
				description: 'Comprehensive carbon tracking and management platform for businesses with sustainability reporting and offset solutions.',
				category: 'Sustainability',
				price: '$1,999',
				billing: 'month',
				features: [
					'Carbon footprint calculation',
					'Sustainability reporting',
					'Offset solutions',
					'Compliance tracking',
					'Analytics dashboard',
					'Integration capabilities',
					'Mobile applications',
					'Expert consultation'
				],
				ctaLabel: 'Track Carbon',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$8.9B',
				growthRate: '18.4% CAGR',
				competitors: ['Watershed', 'Normative', 'Carbon Analytics'],
				useCases: ['ESG reporting', 'Sustainability compliance', 'Carbon offsetting', 'Environmental impact']
			}
		]
	},
	{
		name: 'Digital Transformation',
		slug: 'digital-transformation',
		items: [
			{
				id: 'digital-workplace-platform',
				title: 'Digital Workplace Platform',
				description: 'Unified digital workplace solution that transforms how employees collaborate, communicate, and work remotely.',
				category: 'Digital Transformation',
				price: '$2,499',
				billing: 'month',
				features: [
					'Unified communication',
					'Collaboration tools',
					'Document management',
					'Workflow automation',
					'Mobile applications',
					'Integration capabilities',
					'Security features',
					'Analytics dashboard'
				],
				ctaLabel: 'Transform Workplace',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$31.2B',
				growthRate: '24.8% CAGR',
				competitors: ['Microsoft 365', 'Google Workspace', 'Slack'],
				useCases: ['Remote work', 'Team collaboration', 'Document management', 'Communication']
			}
		]
	},
	{
		name: 'Industry 4.0 Solutions',
		slug: 'industry-4-0',
		items: [
			{
				id: 'smart-manufacturing-platform',
				title: 'Smart Manufacturing Platform',
				description: 'Industry 4.0 platform that digitizes manufacturing processes with IoT, AI, and predictive analytics.',
				category: 'Industry 4.0',
				price: '$6,999',
				billing: 'month',
				features: [
					'IoT device integration',
					'Predictive maintenance',
					'Quality control',
					'Supply chain optimization',
					'Real-time monitoring',
					'Analytics dashboard',
					'Mobile applications',
					'Integration capabilities'
				],
				ctaLabel: 'Smart Manufacturing',
				href: 'https://ziontechgroup.com/contact',
				marketSize: '$45.8B',
				growthRate: '28.9% CAGR',
				competitors: ['Siemens', 'GE Digital', 'PTC'],
				useCases: ['Predictive maintenance', 'Quality control', 'Supply chain', 'Operational efficiency']
			}
		]
	}
];

export default comprehensiveInnovativeServices2030;
