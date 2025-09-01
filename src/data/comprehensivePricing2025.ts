export interface ComprehensivePricingService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  roi: string;
  estimatedDelivery: string;
  supportLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  competitors?: string[];
  marketSize?: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const COMPREHENSIVE_PRICING_2025: ComprehensivePricingService[] = [
  // Enterprise Solutions
  {
    id: 'enterprise-erp-platform',
    title: 'Enterprise ERP Platform',
    description: 'Comprehensive enterprise resource planning platform that integrates all business processes including finance, HR, supply chain, and customer relationship management.',
    category: 'Enterprise Solutions',
    subcategory: 'ERP',
    price: 15000,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Integrated business process management',
      'Real-time financial reporting',
      'Human resource management',
      'Supply chain optimization',
      'Customer relationship management',
      'Inventory management',
      'Project management',
      'Business intelligence dashboard',
      'Multi-currency support',
      'Compliance management',
      'Workflow automation',
      'Mobile application access'
    ],
    benefits: [
      'Reduce operational costs by 25-35%',
      'Improve process efficiency by 40%',
      'Centralized data management',
      'Real-time business insights',
      'Scalable enterprise solution'
    ],
    marketPrice: '$15,000 - $50,000/month',
    roi: '300-500%',
    estimatedDelivery: '12-16 weeks',
    supportLevel: 'enterprise',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['SAP', 'Oracle', 'Microsoft Dynamics'],
    marketSize: '$45 billion',
    demoUrl: 'https://ziontechgroup.com/demo/erp',
    documentationUrl: 'https://ziontechgroup.com/docs/erp'
  },

  // AI Services
  {
    id: 'ai-content-generation-platform',
    title: 'AI Content Generation Platform',
    description: 'Advanced AI-powered content generation platform that creates high-quality, SEO-optimized content for websites, blogs, social media, and marketing materials.',
    category: 'AI & Analytics',
    subcategory: 'Content Generation',
    price: 1800,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'SEO-optimized content generation',
      'Multi-language support',
      'Brand voice customization',
      'Content templates and styles',
      'Plagiarism detection',
      'Content scheduling',
      'Performance analytics',
      'Team collaboration tools',
      'API integration',
      'Mobile app access',
      'Content optimization suggestions',
      'Automated publishing'
    ],
    benefits: [
      'Reduce content creation time by 80%',
      'Improve SEO rankings by 40%',
      'Increase content engagement by 60%',
      'Consistent brand messaging',
      'Scalable content production'
    ],
    marketPrice: '$1,800 - $5,000/month',
    roi: '300-500%',
    estimatedDelivery: '4-6 weeks',
    supportLevel: 'premium',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'ContentBot'],
    marketSize: '$8 billion',
    demoUrl: 'https://ziontechgroup.com/demo/ai-content',
    documentationUrl: 'https://ziontechgroup.com/docs/ai-content'
  },

  // Cybersecurity Services
  {
    id: 'zero-trust-security-platform',
    title: 'Zero Trust Security Platform',
    description: 'Comprehensive zero trust security platform that implements continuous verification and least-privilege access controls across all enterprise resources.',
    category: 'Cybersecurity',
    subcategory: 'Zero Trust',
    price: 8500,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Identity verification and authentication',
      'Device trust assessment',
      'Network segmentation',
      'Application access control',
      'Data encryption and protection',
      'Continuous monitoring',
      'Threat detection and response',
      'Compliance reporting',
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'API security',
      'Mobile device management'
    ],
    benefits: [
      'Reduce security incidents by 80%',
      'Improve compliance posture',
      'Enhanced data protection',
      'Simplified access management',
      'Real-time threat prevention'
    ],
    marketPrice: '$8,500 - $25,000/month',
    roi: '300-500%',
    estimatedDelivery: '8-12 weeks',
    supportLevel: 'enterprise',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['Okta', 'Ping Identity', 'ForgeRock', 'Microsoft Azure AD'],
    marketSize: '$35 billion',
    demoUrl: 'https://ziontechgroup.com/demo/zero-trust',
    documentationUrl: 'https://ziontechgroup.com/docs/zero-trust'
  },

  // Blockchain & Web3 Services
  {
    id: 'defi-platform-development',
    title: 'DeFi Platform Development',
    description: 'Complete decentralized finance platform development including DEX, lending protocols, yield farming, and liquidity management solutions.',
    category: 'Blockchain & Web3',
    subcategory: 'DeFi',
    price: 25000,
    currency: '$',
    pricingModel: 'project',
    features: [
      'Decentralized exchange (DEX)',
      'Lending and borrowing protocols',
      'Yield farming mechanisms',
      'Liquidity pools management',
      'Smart contract development',
      'Token economics design',
      'Security audits',
      'Multi-chain support',
      'Mobile wallet integration',
      'Analytics dashboard',
      'Governance mechanisms',
      'Cross-chain bridges'
    ],
    benefits: [
      'Reduce development costs by 40%',
      'Accelerate time to market',
      'Enhanced security through audits',
      'Scalable DeFi infrastructure',
      'Multi-chain compatibility'
    ],
    marketPrice: '$25,000 - $150,000',
    roi: '300-800%',
    estimatedDelivery: '12-20 weeks',
    supportLevel: 'enterprise',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['ConsenSys', 'Chainlink Labs', 'OpenZeppelin', 'Truffle'],
    marketSize: '$50 billion',
    demoUrl: 'https://ziontechgroup.com/demo/defi',
    documentationUrl: 'https://ziontechgroup.com/docs/defi'
  },

  // IoT & Edge Services
  {
    id: 'industrial-iot-platform',
    title: 'Industrial IoT Platform',
    description: 'Comprehensive industrial IoT platform that connects, monitors, and optimizes industrial equipment and processes for maximum efficiency.',
    category: 'IoT & Edge',
    subcategory: 'Industrial IoT',
    price: 9500,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Device connectivity management',
      'Real-time data collection',
      'Predictive maintenance',
      'Asset performance monitoring',
      'Energy optimization',
      'Quality control automation',
      'Safety monitoring',
      'Remote equipment control',
      'Analytics dashboard',
      'Mobile app access',
      'Integration APIs',
      'Edge computing capabilities'
    ],
    benefits: [
      'Reduce operational costs by 25%',
      'Improve equipment uptime by 30%',
      'Prevent unplanned downtime',
      'Optimize energy consumption',
      'Enhanced safety compliance'
    ],
    marketPrice: '$9,500 - $30,000/month',
    roi: '250-400%',
    estimatedDelivery: '12-16 weeks',
    supportLevel: 'enterprise',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['Siemens Mindsphere', 'GE Predix', 'PTC ThingWorx', 'Bosch IoT Suite'],
    marketSize: '$35 billion',
    demoUrl: 'https://ziontechgroup.com/demo/industrial-iot',
    documentationUrl: 'https://ziontechgroup.com/docs/industrial-iot'
  },

  // Smart City Platform
  {
    id: 'smart-city-platform',
    title: 'Smart City Platform',
    description: 'Comprehensive smart city platform that integrates IoT sensors, data analytics, and automation to optimize urban infrastructure and services.',
    category: 'IoT & Edge',
    subcategory: 'Smart Cities',
    price: 15000,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Traffic management system',
      'Smart lighting control',
      'Waste management optimization',
      'Air quality monitoring',
      'Parking management',
      'Public safety monitoring',
      'Energy grid optimization',
      'Water management',
      'Citizen engagement portal',
      'Emergency response system',
      'Data analytics dashboard',
      'Mobile applications'
    ],
    benefits: [
      'Reduce traffic congestion by 30%',
      'Lower energy consumption by 25%',
      'Improve public safety',
      'Enhanced citizen services',
      'Optimized resource allocation'
    ],
    marketPrice: '$15,000 - $50,000/month',
    roi: '200-350%',
    estimatedDelivery: '16-24 weeks',
    supportLevel: 'enterprise',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['Cisco Smart Cities', 'IBM Watson IoT', 'Microsoft Azure IoT', 'Siemens'],
    marketSize: '$45 billion',
    demoUrl: 'https://ziontechgroup.com/demo/smart-city',
    documentationUrl: 'https://ziontechgroup.com/docs/smart-city'
  },

  // AI Video Analytics
  {
    id: 'ai-video-analytics-platform',
    title: 'AI Video Analytics Platform',
    description: 'Intelligent video analytics platform that uses computer vision and AI to analyze video content, extract insights, and provide actionable business intelligence.',
    category: 'AI & Analytics',
    subcategory: 'Video Analytics',
    price: 3200,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Real-time video analysis',
      'Object detection and tracking',
      'Face recognition and analytics',
      'Behavioral analysis',
      'Traffic flow monitoring',
      'Crowd counting and density',
      'Anomaly detection',
      'Heat mapping',
      'Performance reporting',
      'Mobile app monitoring',
      'Cloud storage integration',
      'API for custom integrations'
    ],
    benefits: [
      'Improve security by 90%',
      'Reduce manual monitoring costs by 70%',
      'Enhance customer experience',
      'Real-time incident detection',
      'Data-driven business insights'
    ],
    marketPrice: '$3,200 - $12,000/month',
    roi: '250-400%',
    estimatedDelivery: '6-8 weeks',
    supportLevel: 'enterprise',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['Vintra', 'BriefCam', 'Avigilon', 'Milestone'],
    marketSize: '$12 billion',
    demoUrl: 'https://ziontechgroup.com/demo/video-analytics',
    documentationUrl: 'https://ziontechgroup.com/docs/video-analytics'
  },

  // NFT Marketplace Platform
  {
    id: 'nft-marketplace-platform',
    title: 'NFT Marketplace Platform',
    description: 'Complete NFT marketplace platform with minting, trading, auctions, and royalty distribution capabilities for digital assets.',
    category: 'Blockchain & Web3',
    subcategory: 'NFT',
    price: 18000,
    currency: '$',
    pricingModel: 'project',
    features: [
      'NFT minting and creation',
      'Marketplace trading',
      'Auction system',
      'Royalty distribution',
      'Multi-chain support',
      'Wallet integration',
      'Metadata management',
      'IPFS storage',
      'Analytics dashboard',
      'Creator tools',
      'Community features',
      'Mobile app'
    ],
    benefits: [
      'Monetize digital assets',
      'Reduce marketplace fees',
      'Enhanced creator control',
      'Cross-chain compatibility',
      'Scalable infrastructure'
    ],
    marketPrice: '$18,000 - $100,000',
    roi: '250-600%',
    estimatedDelivery: '10-16 weeks',
    supportLevel: 'premium',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['OpenSea', 'Rarible', 'Foundation', 'SuperRare'],
    marketSize: '$25 billion',
    demoUrl: 'https://ziontechgroup.com/demo/nft-marketplace',
    documentationUrl: 'https://ziontechgroup.com/docs/nft-marketplace'
  },

  // Advanced Threat Detection
  {
    id: 'advanced-threat-detection',
    title: 'Advanced Threat Detection Platform',
    description: 'Next-generation threat detection platform that uses AI and machine learning to identify and respond to sophisticated cyber threats in real-time.',
    category: 'Cybersecurity',
    subcategory: 'Threat Detection',
    price: 6500,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'AI-powered threat detection',
      'Behavioral analytics',
      'Anomaly detection',
      'Real-time threat intelligence',
      'Automated incident response',
      'Threat hunting capabilities',
      'Forensic analysis',
      'Compliance reporting',
      'Integration with SIEM',
      'Mobile threat defense',
      'Cloud security monitoring',
      'Vulnerability assessment'
    ],
    benefits: [
      'Detect threats 90% faster',
      'Reduce false positives by 70%',
      'Automated threat response',
      'Enhanced security visibility',
      'Proactive threat hunting'
    ],
    marketPrice: '$6,500 - $20,000/month',
    roi: '250-400%',
    estimatedDelivery: '6-10 weeks',
    supportLevel: 'enterprise',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['CrowdStrike', 'FireEye', 'Carbon Black', 'SentinelOne'],
    marketSize: '$25 billion',
    demoUrl: 'https://ziontechgroup.com/demo/threat-detection',
    documentationUrl: 'https://ziontechgroup.com/docs/threat-detection'
  },

  // Edge Computing Platform
  {
    id: 'edge-computing-platform',
    title: 'Edge Computing Platform',
    description: 'Advanced edge computing platform that processes data locally for real-time applications, reducing latency and bandwidth requirements.',
    category: 'IoT & Edge',
    subcategory: 'Edge Computing',
    price: 6800,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Local data processing',
      'Real-time analytics',
      'Edge AI capabilities',
      'Low-latency applications',
      'Bandwidth optimization',
      'Offline operation',
      'Edge device management',
      'Security at the edge',
      'Scalable architecture',
      'Cloud integration',
      'Monitoring and alerts',
      'Automated updates'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Lower bandwidth costs by 60%',
      'Enable real-time processing',
      'Enhanced data privacy',
      'Improved reliability'
    ],
    marketPrice: '$6,800 - $20,000/month',
    roi: '180-300%',
    estimatedDelivery: '8-12 weeks',
    supportLevel: 'premium',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Edge TPU', 'NVIDIA Jetson'],
    marketSize: '$20 billion',
    demoUrl: 'https://ziontechgroup.com/demo/edge-computing',
    documentationUrl: 'https://ziontechgroup.com/docs/edge-computing'
  }
];