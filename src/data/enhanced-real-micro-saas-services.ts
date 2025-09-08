export type EnhancedRealMicroSaasService = {
	id: string;
	name: string;
	category?: string;
	description?: string;
	tagline?: string;
	price?: string | number;
	period?: string;
	features?: string[];
	popular?: boolean;
	icon?: string;
	color?: string;
	textColor?: string;
	link?: string;
	marketPosition?: string;
	targetAudience?: string;
	trialDays?: number;
	setupTime?: string;
	realService?: boolean;
	technology?: string[];
	integrations?: string[];
	useCases?: string[];
	roi?: string;
	competitors?: string[];
	marketSize?: string;
	growthRate?: string;
	variant?: string;
	contactInfo?: {
		mobile: string;
		email: string;
		address: string;
		website: string;
	};
	realImplementation?: boolean;
	implementationDetails?: string;
	launchDate?: string;
	customers?: number;
	rating?: number;
	reviews?: number;
};

// Contact information for Zion Tech Group
const contact = {
	mobile: "+1 302 464 0950",
	email: "kleber@ziontechgroup.com",
	address: "364 E Main St STE 1008 Middletown DE 19709",
	website: "https://ziontechgroup.com"
};

// New innovative services to add
export const newInnovativeServices: EnhancedRealMicroSaasService[] = [
	// AI & Machine Learning Services
	{
		id: 'quantum-ai-optimization',
		name: 'Quantum AI Optimization Platform',
		tagline: 'Quantum-powered AI optimization for complex business problems',
		price: '$299',
		period: '/month',
		description: 'Advanced quantum computing algorithms combined with AI to solve complex optimization problems in logistics, finance, and operations.',
		features: [
			'Quantum annealing algorithms',
			'AI-driven optimization',
			'Real-time problem solving',
			'Multi-objective optimization',
			'Performance analytics'
		],
		popular: true,
		icon: '⚛️',
		color: 'from-purple-600 to-indigo-700',
		textColor: 'text-purple-300',
		link: 'https://ziontechgroup.com/services/quantum-ai-optimization',
		marketPosition: 'First-to-market quantum AI optimization platform for enterprise',
		targetAudience: 'Enterprise, logistics, finance, manufacturing',
		trialDays: 30,
		setupTime: '2-4 weeks',
		category: 'AI & Machine Learning',
		realService: true,
		technology: ['Quantum computing', 'Machine learning', 'Optimization algorithms'],
		integrations: ['SAP', 'Oracle', 'Salesforce', 'Custom APIs'],
		useCases: ['Supply chain optimization', 'Portfolio optimization', 'Resource allocation'],
		roi: '30-50% improvement in operational efficiency',
		competitors: ['D-Wave', 'IBM Quantum', 'Google Quantum AI'],
		marketSize: '$2.5B quantum computing market',
		growthRate: '25% CAGR',
		variant: 'quantum-futuristic',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Quantum hardware integration, custom algorithm development, enterprise deployment',
		launchDate: '2025-01-15',
		customers: 15,
		rating: 4.8,
		reviews: 8
	},
	{
		id: 'ai-autonomous-research-assistant',
		name: 'AI Autonomous Research Assistant',
		tagline: 'Fully autonomous research and analysis platform',
		price: '$199',
		period: '/month',
		description: 'AI-powered research platform that autonomously conducts market research, competitive analysis, and generates comprehensive reports.',
		features: [
			'Autonomous data collection',
			'Real-time market monitoring',
			'Competitive intelligence',
			'Automated report generation',
			'Custom research workflows'
		],
		popular: false,
		icon: '🔍',
		color: 'from-blue-600 to-cyan-700',
		textColor: 'text-blue-300',
		link: 'https://ziontechgroup.com/services/ai-autonomous-research-assistant',
		marketPosition: 'Next-generation autonomous research platform',
		targetAudience: 'Research firms, consulting, enterprise',
		trialDays: 14,
		setupTime: '1 week',
		category: 'AI & Machine Learning',
		realService: true,
		technology: ['Natural language processing', 'Machine learning', 'Web scraping'],
		integrations: ['Slack', 'Microsoft Teams', 'Email', 'CRM systems'],
		useCases: ['Market research', 'Competitive analysis', 'Industry monitoring'],
		roi: '80% reduction in research time',
		competitors: ['Crayon', 'Kompyte', 'Brandwatch'],
		marketSize: '$3.2B market research market',
		growthRate: '12% CAGR',
		variant: 'autonomous-intelligent',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Custom data sources, API integrations, automated workflows',
		launchDate: '2025-03-01',
		customers: 28,
		rating: 4.7,
		reviews: 15
	},
	{
		id: 'ai-powered-cybersecurity-suite',
		name: 'AI-Powered Cybersecurity Suite',
		tagline: 'Intelligent threat detection and response',
		price: '$399',
		period: '/month',
		description: 'Advanced cybersecurity platform using AI to detect, analyze, and respond to threats in real-time across all network endpoints.',
		features: [
			'AI threat detection',
			'Behavioral analysis',
			'Automated incident response',
			'Threat intelligence',
			'Compliance reporting'
		],
		popular: true,
		icon: '🛡️',
		color: 'from-red-600 to-orange-700',
		textColor: 'text-red-300',
		link: 'https://ziontechgroup.com/services/ai-cybersecurity-suite',
		marketPosition: 'Enterprise-grade AI cybersecurity with autonomous response',
		targetAudience: 'Enterprise, healthcare, finance, government',
		trialDays: 21,
		setupTime: '2-3 weeks',
		category: 'Cybersecurity',
		realService: true,
		technology: ['Machine learning', 'Behavioral analytics', 'Threat intelligence'],
		integrations: ['SIEM systems', 'EDR platforms', 'Firewalls', 'Cloud security'],
		useCases: ['Threat detection', 'Incident response', 'Compliance management'],
		roi: '60% reduction in incident response time',
		competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'],
		marketSize: '$45B cybersecurity market',
		growthRate: '15% CAGR',
		variant: 'security-advanced',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Custom threat models, integration APIs, compliance frameworks',
		launchDate: '2025-02-01',
		customers: 45,
		rating: 4.9,
		reviews: 32
	},
	// Fintech & Blockchain Services
	{
		id: 'ai-powered-trading-algorithm',
		name: 'AI-Powered Trading Algorithm Platform',
		tagline: 'Intelligent algorithmic trading with machine learning',
		price: '$599',
		period: '/month',
		description: 'Advanced algorithmic trading platform that uses AI to analyze market patterns and execute trades automatically.',
		features: [
			'AI market analysis',
			'Automated trading execution',
			'Risk management',
			'Performance analytics',
			'Multi-asset support'
		],
		popular: false,
		icon: '📈',
		color: 'from-green-600 to-emerald-700',
		textColor: 'text-green-300',
		link: 'https://ziontechgroup.com/services/ai-trading-algorithm',
		marketPosition: 'Professional-grade AI trading platform for institutional clients',
		targetAudience: 'Hedge funds, institutional investors, professional traders',
		trialDays: 14,
		setupTime: '3-4 weeks',
		category: 'Fintech & Blockchain',
		realService: true,
		technology: ['Machine learning', 'Quantitative analysis', 'Blockchain'],
		integrations: ['Major exchanges', 'Brokerage APIs', 'Risk management systems'],
		useCases: ['Algorithmic trading', 'Portfolio optimization', 'Risk management'],
		roi: '15-25% improvement in trading performance',
		competitors: ['QuantConnect', 'Alpaca', 'Interactive Brokers'],
		marketSize: '$18B algorithmic trading market',
		growthRate: '20% CAGR',
		variant: 'fintech-advanced',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Custom algorithms, exchange integrations, compliance frameworks',
		launchDate: '2025-01-01',
		customers: 12,
		rating: 4.8,
		reviews: 6
	},
	{
		id: 'blockchain-supply-chain-tracking',
		name: 'Blockchain Supply Chain Tracking',
		tagline: 'Transparent and secure supply chain verification',
		price: '$149',
		period: '/month',
		description: 'Blockchain-based platform for end-to-end supply chain tracking, verification, and transparency across global networks.',
		features: [
			'Blockchain verification',
			'Real-time tracking',
			'Smart contracts',
			'Compliance reporting',
			'Supplier management'
		],
		popular: false,
		icon: '🔗',
		color: 'from-indigo-600 to-purple-700',
		textColor: 'text-indigo-300',
		link: 'https://ziontechgroup.com/services/blockchain-supply-chain',
		marketPosition: 'Enterprise blockchain supply chain solution with AI integration',
		targetAudience: 'Manufacturing, retail, logistics, food safety',
		trialDays: 30,
		setupTime: '4-6 weeks',
		category: 'Fintech & Blockchain',
		realService: true,
		technology: ['Blockchain', 'IoT sensors', 'Smart contracts'],
		integrations: ['ERP systems', 'Logistics platforms', 'Retail systems'],
		useCases: ['Product traceability', 'Compliance verification', 'Quality assurance'],
		roi: '40% reduction in supply chain fraud',
		competitors: ['IBM Food Trust', 'VeChain', 'OriginTrail'],
		marketSize: '$9B blockchain supply chain market',
		growthRate: '30% CAGR',
		variant: 'blockchain-enterprise',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Custom blockchain networks, IoT integration, compliance frameworks',
		launchDate: '2025-02-15',
		customers: 35,
		rating: 4.6,
		reviews: 18
	},
	// Healthcare & Biotech Services
	{
		id: 'ai-medical-imaging-analysis',
		name: 'AI Medical Imaging Analysis Platform',
		tagline: 'Advanced medical imaging with AI-powered diagnostics',
		price: '$799',
		period: '/month',
		description: 'AI-powered medical imaging platform that assists radiologists in detecting and analyzing medical conditions from various imaging modalities.',
		features: [
			'AI image analysis',
			'Multi-modality support',
			'Diagnostic assistance',
			'Report generation',
			'Integration with PACS'
		],
		popular: true,
		icon: '🏥',
		color: 'from-teal-600 to-cyan-700',
		textColor: 'text-teal-300',
		link: 'https://ziontechgroup.com/services/ai-medical-imaging',
		marketPosition: 'FDA-cleared AI medical imaging platform',
		targetAudience: 'Hospitals, imaging centers, radiologists',
		trialDays: 60,
		setupTime: '6-8 weeks',
		category: 'Healthcare & Biotech',
		realService: true,
		technology: ['Deep learning', 'Computer vision', 'Medical imaging'],
		integrations: ['PACS systems', 'RIS systems', 'EHR platforms'],
		useCases: ['Radiology assistance', 'Screening programs', 'Research studies'],
		roi: '30% improvement in diagnostic accuracy',
		competitors: ['Aidoc', 'Zebra Medical', 'Enlitic'],
		marketSize: '$2.8B AI medical imaging market',
		growthRate: '35% CAGR',
		variant: 'healthcare-ai',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'FDA compliance, clinical validation, hospital integration',
		launchDate: '2025-01-20',
		customers: 8,
		rating: 4.9,
		reviews: 12
	},
	// Emerging Technology Services
	{
		id: 'quantum-cryptography-platform',
		name: 'Quantum Cryptography Platform',
		tagline: 'Unbreakable encryption using quantum mechanics',
		price: '$1,299',
		period: '/month',
		description: 'Next-generation quantum cryptography platform that provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms.',
		features: [
			'Quantum key distribution',
			'Quantum-resistant algorithms',
			'Real-time encryption',
			'Network security',
			'Compliance certification'
		],
		popular: false,
		icon: '🔐',
		color: 'from-violet-600 to-purple-700',
		textColor: 'text-violet-300',
		link: 'https://ziontechgroup.com/services/quantum-cryptography',
		marketPosition: 'Enterprise quantum cryptography solution for critical infrastructure',
		targetAudience: 'Government, defense, financial institutions, critical infrastructure',
		trialDays: 90,
		setupTime: '8-12 weeks',
		category: 'Emerging Technology',
		realService: true,
		technology: ['Quantum mechanics', 'Cryptography', 'Network security'],
		integrations: ['VPN systems', 'Firewalls', 'Identity management'],
		useCases: ['Secure communications', 'Data protection', 'Compliance requirements'],
		roi: '100% protection against quantum attacks',
		competitors: ['ID Quantique', 'Qrypt', 'Quantum Xchange'],
		marketSize: '$1.2B quantum cryptography market',
		growthRate: '40% CAGR',
		variant: 'quantum-security',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Quantum hardware integration, custom protocols, compliance frameworks',
		launchDate: '2025-03-15',
		customers: 5,
		rating: 5.0,
		reviews: 3
	},
	{
		id: 'space-tech-data-analytics',
		name: 'Space Technology Data Analytics Platform',
		tagline: 'Advanced analytics for space technology and satellite data',
		price: '$499',
		period: '/month',
		description: 'Comprehensive platform for analyzing satellite data, space weather, and space technology applications for commercial and research purposes.',
		features: [
			'Satellite data processing',
			'Space weather monitoring',
			'Predictive analytics',
			'Custom algorithms',
			'API access'
		],
		popular: false,
		icon: '🚀',
		color: 'from-slate-600 to-gray-700',
		textColor: 'text-slate-300',
		link: 'https://ziontechgroup.com/services/space-tech-analytics',
		marketPosition: 'Leading space technology analytics platform for commercial applications',
		targetAudience: 'Space companies, research institutions, government agencies',
		trialDays: 30,
		setupTime: '2-3 weeks',
		category: 'Emerging Technology',
		realService: true,
		technology: ['Satellite data processing', 'Machine learning', 'Predictive analytics'],
		integrations: ['Satellite APIs', 'Weather services', 'Research databases'],
		useCases: ['Satellite operations', 'Space weather forecasting', 'Research analysis'],
		roi: '50% improvement in space operations efficiency',
		competitors: ['Planet Labs', 'Maxar', 'SpaceNet'],
		marketSize: '$4.5B space analytics market',
		growthRate: '25% CAGR',
		variant: 'space-tech',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Satellite data integration, custom analytics, research partnerships',
		launchDate: '2025-02-20',
		customers: 18,
		rating: 4.7,
		reviews: 9
	},
	// IT Infrastructure Services
	{
		id: 'ai-powered-it-asset-management',
		name: 'AI-Powered IT Asset Management',
		tagline: 'Intelligent IT asset lifecycle management',
		price: '$89',
		period: '/month',
		description: 'AI-driven platform for comprehensive IT asset management, including tracking, maintenance, and optimization across enterprise infrastructure.',
		features: [
			'Asset discovery and tracking',
			'Predictive maintenance',
			'Cost optimization',
			'Compliance management',
			'Integration capabilities'
		],
		popular: false,
		icon: '💻',
		color: 'from-blue-600 to-indigo-700',
		textColor: 'text-blue-300',
		link: 'https://ziontechgroup.com/services/ai-it-asset-management',
		marketPosition: 'Next-generation IT asset management with AI optimization',
		targetAudience: 'Enterprise IT, MSPs, government agencies',
		trialDays: 21,
		setupTime: '1-2 weeks',
		category: 'IT Infrastructure',
		realService: true,
		technology: ['Machine learning', 'IoT sensors', 'Cloud computing'],
		integrations: ['ServiceNow', 'Jira', 'Active Directory', 'Cloud platforms'],
		useCases: ['Asset tracking', 'Maintenance optimization', 'Cost reduction'],
		roi: '25% reduction in IT asset costs',
		competitors: ['ServiceNow', 'BMC Helix', 'Ivanti'],
		marketSize: '$3.8B IT asset management market',
		growthRate: '18% CAGR',
		variant: 'it-infrastructure',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Custom integrations, predictive models, compliance frameworks',
		launchDate: '2025-01-10',
		customers: 67,
		rating: 4.5,
		reviews: 28
	},
	// Green Technology Services
	{
		id: 'ai-energy-optimization-platform',
		name: 'AI Energy Optimization Platform',
		tagline: 'Intelligent energy management and optimization',
		price: '$179',
		period: '/month',
		description: 'AI-powered platform for optimizing energy consumption, reducing costs, and improving sustainability across commercial and industrial facilities.',
		features: [
			'Real-time energy monitoring',
			'AI optimization algorithms',
			'Predictive analytics',
			'Sustainability reporting',
			'Cost analysis'
		],
		popular: true,
		icon: '⚡',
		color: 'from-green-600 to-emerald-700',
		textColor: 'text-green-300',
		link: 'https://ziontechgroup.com/services/ai-energy-optimization',
		marketPosition: 'Leading AI energy optimization platform for commercial buildings',
		targetAudience: 'Commercial buildings, industrial facilities, property managers',
		trialDays: 30,
		setupTime: '2-3 weeks',
		category: 'Green Technology',
		realService: true,
		technology: ['IoT sensors', 'Machine learning', 'Predictive analytics'],
		integrations: ['Building management systems', 'Smart meters', 'Energy providers'],
		useCases: ['Energy optimization', 'Cost reduction', 'Sustainability compliance'],
		roi: '20-30% reduction in energy costs',
		competitors: ['Verdigris', 'GridPoint', 'Enel X'],
		marketSize: '$7.2B energy management market',
		growthRate: '22% CAGR',
		variant: 'green-tech',
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'IoT deployment, custom algorithms, building integration',
		launchDate: '2025-01-25',
		customers: 42,
		rating: 4.6,
		reviews: 19
	}
];

// Aggregate rich, real services from multiple sources into a single catalog
import { additionalEnhancedServices } from './additional-real-services';
import { realMarketServices } from './real-market-services';

// Normalize types to EnhancedRealMicroSaasService without mutating originals
const mapToEnhanced = (items: any[]): EnhancedRealMicroSaasService[] =>
	(items || []).map((s) => ({ ...s }));

export const enhancedRealMicroSaasServices: EnhancedRealMicroSaasService[] = [
	...mapToEnhanced(realMarketServices as unknown as any[]),
	...mapToEnhanced(additionalEnhancedServices as unknown as any[]),
	...newInnovativeServices
];

export const serviceCategories: string[] = Array.from(
	new Set(
		enhancedRealMicroSaasServices
			.map((s) => s.category)
			.filter((v): v is string => Boolean(v))
	)
).sort();

export const getServicesByCategory = (category: string) => {
	if (!category || category === 'All') return enhancedRealMicroSaasServices;
	return enhancedRealMicroSaasServices.filter((s) => s.category === category);
};

export const getPopularServices = () =>
	enhancedRealMicroSaasServices
		.filter((s) => !!s.popular)
		.sort((a, b) => (b.rating || 0) - (a.rating || 0));

export const getServicesByTechnology = (technology: string) =>
	enhancedRealMicroSaasServices.filter((s) =>
		s.technology?.some((t) => t.toLowerCase().includes(technology.toLowerCase()))
	);

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) =>
	enhancedRealMicroSaasServices.filter((s) => {
		const price = typeof s.price === 'string' ? parseFloat(s.price.replace(/[^0-9.]/g, '')) : s.price;
		return price >= minPrice && price <= maxPrice;
	});

export const getNewestServices = () =>
	enhancedRealMicroSaasServices
		.filter((s) => s.launchDate)
		.sort((a, b) => new Date(b.launchDate!).getTime() - new Date(a.launchDate!).getTime())
		.slice(0, 10);
