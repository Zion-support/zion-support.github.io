// Enhanced Services Catalog 2025 - Zion Tech Group
// Real, Useful, Intelligent, Innovative, and Diversified Services

export interface EnhancedServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Digital Transformation' | 'Enterprise Solutions' | 'Startup Solutions';
  price: string;
  billing: 'month' | 'project' | 'hour' | 'year';
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketSize: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  integrations: string[];
  freeTier: boolean;
  trialPeriod: string;
  innovationLevel: string;
  ctaLabel: string;
  href: string;
  external?: boolean;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

export interface EnhancedServiceCategory {
  name: string;
  slug: string;
  description: string;
  items: EnhancedServiceItem[];
}

// Zion Tech Group Contact Information
const zionContact = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

export const enhancedServicesCatalog: EnhancedServiceCategory[] = [
  {
    name: 'AI-Powered Micro SaaS',
    slug: 'ai-powered-micro-saas',
    description: 'Intelligent software solutions that automate and optimize business processes',
    items: [
      {
        id: 'ai-content-intelligence-platform',
        title: 'AI Content Intelligence Platform',
        description: 'Advanced content analysis and optimization platform that uses AI to improve SEO, readability, and engagement across all digital channels.',
        category: 'Micro SaaS',
        price: '$299',
        billing: 'month',
        features: [
          'AI-powered SEO optimization',
          'Content readability scoring',
          'Multi-language support',
          'Performance analytics dashboard',
          'Automated A/B testing',
          'Content performance tracking',
          'Competitor analysis',
          'ROI measurement tools'
        ],
        benefits: [
          'Increase organic traffic by 40-60%',
          'Improve content engagement by 35%',
          'Reduce content creation time by 50%',
          'Optimize for multiple search engines',
          'Real-time performance insights'
        ],
        targetAudience: ['Marketing teams', 'Content creators', 'SEO specialists', 'Digital agencies', 'E-commerce businesses'],
        marketSize: '$15.2B (Content Marketing Software)',
        competitors: ['Grammarly Business', 'Clearscope', 'MarketMuse', 'Frase'],
        roi: '300-500% within 6 months',
        setupTime: '2-3 business days',
        integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Google Analytics', 'SEMrush'],
        freeTier: true,
        trialPeriod: '14 days',
        innovationLevel: 'Cutting-edge AI/ML',
        ctaLabel: 'Start Free Trial',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'autonomous-crm-optimizer',
        title: 'Autonomous CRM Optimizer',
        description: 'AI-powered CRM system that automatically optimizes customer relationships, sales processes, and marketing campaigns with predictive analytics.',
        category: 'Micro SaaS',
        price: '$599',
        billing: 'month',
        features: [
          'Autonomous lead scoring',
          'Predictive customer behavior analysis',
          'Automated follow-up sequences',
          'Revenue optimization algorithms',
          'Multi-channel integration',
          'Real-time performance monitoring',
          'Customer churn prediction',
          'Sales forecasting'
        ],
        benefits: [
          'Increase sales conversion by 45%',
          'Reduce customer churn by 30%',
          'Automate 80% of follow-up tasks',
          'Improve customer lifetime value by 60%',
          'Real-time sales insights'
        ],
        targetAudience: ['Sales teams', 'Marketing departments', 'Customer success teams', 'Small to medium businesses'],
        marketSize: '$58.2B (CRM Software)',
        competitors: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM'],
        roi: '400-600% within 8 months',
        setupTime: '1 week',
        integrations: ['Slack', 'Microsoft Teams', 'Gmail', 'Outlook', 'LinkedIn', 'Twitter'],
        freeTier: false,
        trialPeriod: '30 days',
        innovationLevel: 'Advanced AI/ML',
        ctaLabel: 'Schedule Demo',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'quantum-supply-chain-optimizer',
        title: 'Quantum Supply Chain Optimizer',
        description: 'Revolutionary supply chain optimization using quantum-inspired algorithms for complex logistics, inventory management, and demand forecasting.',
        category: 'Micro SaaS',
        price: '$799',
        billing: 'month',
        features: [
          'Quantum route optimization',
          'Real-time inventory tracking',
          'Predictive demand forecasting',
          'Cost optimization algorithms',
          'Risk assessment and mitigation',
          'Supplier performance analytics',
          'Sustainability metrics',
          'Compliance monitoring'
        ],
        benefits: [
          'Reduce logistics costs by 25-40%',
          'Improve delivery times by 30%',
          'Optimize inventory levels by 35%',
          'Reduce carbon footprint by 20%',
          'Enhance supplier relationships'
        ],
        targetAudience: ['Manufacturing companies', 'Retail chains', 'Logistics providers', 'E-commerce platforms'],
        marketSize: '$37.4B (Supply Chain Management)',
        competitors: ['SAP', 'Oracle', 'Manhattan Associates', 'JDA Software'],
        roi: '500-800% within 12 months',
        setupTime: '2-3 weeks',
        integrations: ['ERP systems', 'WMS', 'TMS', 'E-commerce platforms', 'IoT sensors'],
        freeTier: false,
        trialPeriod: '21 days',
        innovationLevel: 'Quantum-inspired AI',
        ctaLabel: 'Optimize Supply Chain',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'ai-legal-document-analyzer',
        title: 'AI Legal Document Analyzer',
        description: 'Intelligent legal document analysis platform that uses AI to review contracts, identify risks, and ensure compliance with legal requirements.',
        category: 'Micro SaaS',
        price: '$449',
        billing: 'month',
        features: [
          'AI-powered contract review',
          'Risk identification and scoring',
          'Compliance checking',
          'Legal clause analysis',
          'Document comparison tools',
          'Automated legal research',
          'Regulatory updates',
          'Audit trail generation'
        ],
        benefits: [
          'Reduce legal review time by 70%',
          'Identify 95% of potential risks',
          'Ensure 100% compliance',
          'Save 40-60% on legal costs',
          'Improve contract quality'
        ],
        targetAudience: ['Law firms', 'Corporate legal departments', 'Compliance officers', 'Risk managers'],
        marketSize: '$12.8B (Legal Tech)',
        competitors: ['DocuSign', 'ContractPodAi', 'Kira Systems', 'Luminance'],
        roi: '350-500% within 6 months',
        setupTime: '1 week',
        integrations: ['Microsoft Word', 'Adobe Acrobat', 'DocuSign', 'Clio', 'PracticePanther'],
        freeTier: true,
        trialPeriod: '7 days',
        innovationLevel: 'Advanced NLP/AI',
        ctaLabel: 'Start Legal Analysis',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'ai-healthcare-diagnostics-platform',
        title: 'AI Healthcare Diagnostics Platform',
        description: 'Advanced medical diagnostics platform using AI to analyze medical images, patient data, and provide early disease detection and treatment recommendations.',
        category: 'Micro SaaS',
        price: '$899',
        billing: 'month',
        features: [
          'AI-powered medical image analysis',
          'Patient data analytics',
          'Early disease detection',
          'Treatment recommendation engine',
          'Clinical decision support',
          'Patient monitoring tools',
          'Integration with EHR systems',
          'Compliance with HIPAA/FDA'
        ],
        benefits: [
          'Improve diagnostic accuracy by 25%',
          'Reduce diagnosis time by 40%',
          'Enable early disease detection',
          'Reduce healthcare costs by 30%',
          'Improve patient outcomes'
        ],
        targetAudience: ['Hospitals', 'Medical clinics', 'Radiology centers', 'Healthcare providers'],
        marketSize: '$45.2B (Healthcare AI)',
        competitors: ['IBM Watson Health', 'Google Health', 'Microsoft Healthcare', 'Philips Healthcare'],
        roi: '600-900% within 18 months',
        setupTime: '3-4 weeks',
        integrations: ['Epic', 'Cerner', 'Allscripts', 'PACS systems', 'Lab systems'],
        freeTier: false,
        trialPeriod: '30 days',
        innovationLevel: 'Cutting-edge Medical AI',
        ctaLabel: 'Request Healthcare Demo',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      }
    ]
  },
  {
    name: 'Advanced IT Infrastructure Services',
    slug: 'advanced-it-infrastructure',
    description: 'Comprehensive IT infrastructure solutions for modern enterprises',
    items: [
      {
        id: 'zero-trust-network-architecture',
        title: 'Zero Trust Network Architecture',
        description: 'Complete zero-trust security implementation with continuous verification, micro-segmentation, and advanced threat detection for enterprise networks.',
        category: 'IT Services',
        price: '$15,000',
        billing: 'project',
        features: [
          'Identity and access management',
          'Network micro-segmentation',
          'Continuous monitoring',
          'Threat detection and response',
          'Compliance reporting',
          'Security automation',
          'Multi-cloud support',
          '24/7 security operations'
        ],
        benefits: [
          'Reduce security breaches by 90%',
          'Improve compliance scores',
          'Enable secure remote work',
          'Reduce security overhead',
          'Enhance threat visibility'
        ],
        targetAudience: ['Enterprises', 'Financial institutions', 'Healthcare organizations', 'Government agencies'],
        marketSize: '$38.6B (Zero Trust Security)',
        competitors: ['Cisco', 'Palo Alto Networks', 'Fortinet', 'Check Point'],
        roi: '200-400% within 24 months',
        setupTime: '8-12 weeks',
        integrations: ['Active Directory', 'LDAP', 'SAML', 'OAuth', 'Cloud platforms'],
        freeTier: false,
        trialPeriod: 'Security assessment',
        innovationLevel: 'Enterprise-grade security',
        ctaLabel: 'Get Security Assessment',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'hybrid-cloud-orchestration',
        title: 'Hybrid Cloud Orchestration Platform',
        description: 'Intelligent hybrid cloud management platform that optimizes workloads across multiple cloud providers and on-premises infrastructure.',
        category: 'IT Services',
        price: '$2,500',
        billing: 'month',
        features: [
          'Multi-cloud management',
          'Workload optimization',
          'Cost optimization',
          'Performance monitoring',
          'Automated scaling',
          'Disaster recovery',
          'Compliance management',
          'API management'
        ],
        benefits: [
          'Reduce cloud costs by 30-40%',
          'Improve performance by 25%',
          'Enhance disaster recovery',
          'Simplify cloud operations',
          'Ensure compliance'
        ],
        targetAudience: ['Enterprises', 'Cloud-native companies', 'Digital transformation initiatives'],
        marketSize: '$97.1B (Cloud Management)',
        competitors: ['VMware', 'Red Hat', 'HashiCorp', 'Terraform'],
        roi: '300-500% within 18 months',
        setupTime: '4-6 weeks',
        integrations: ['AWS', 'Azure', 'GCP', 'VMware', 'OpenStack'],
        freeTier: false,
        trialPeriod: '30 days',
        innovationLevel: 'Advanced cloud orchestration',
        ctaLabel: 'Start Cloud Optimization',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'edge-computing-infrastructure',
        title: 'Edge Computing Infrastructure',
        description: 'Distributed edge computing infrastructure that brings computation closer to data sources for real-time processing and reduced latency.',
        category: 'IT Services',
        price: '$3,200',
        billing: 'month',
        features: [
          'Edge node deployment',
          'Real-time data processing',
          'Low-latency computing',
          'Edge AI capabilities',
          'Distributed storage',
          'Network optimization',
          'Security at the edge',
          'Monitoring and management'
        ],
        benefits: [
          'Reduce latency by 80-90%',
          'Improve real-time processing',
          'Reduce bandwidth costs',
          'Enable edge AI applications',
          'Enhance user experience'
        ],
        targetAudience: ['IoT companies', 'Manufacturing', 'Smart cities', 'Autonomous vehicles'],
        marketSize: '$53.7B (Edge Computing)',
        competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Edge TPU', 'Intel Edge'],
        roi: '400-600% within 24 months',
        setupTime: '6-8 weeks',
        integrations: ['IoT platforms', 'Cloud providers', '5G networks', 'AI frameworks'],
        freeTier: false,
        trialPeriod: 'Proof of concept',
        innovationLevel: 'Cutting-edge edge computing',
        ctaLabel: 'Deploy Edge Infrastructure',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      }
    ]
  },
  {
    name: 'Quantum Computing Solutions',
    slug: 'quantum-computing-solutions',
    description: 'Next-generation quantum computing services and platforms',
    items: [
      {
        id: 'quantum-ai-trading-platform',
        title: 'Quantum AI Trading Platform',
        description: 'Revolutionary trading platform combining quantum computing with AI for ultra-fast market analysis, risk assessment, and automated trading strategies.',
        category: 'Quantum Computing',
        price: '$5,000',
        billing: 'month',
        features: [
          'Quantum market analysis',
          'AI-powered trading strategies',
          'Real-time risk assessment',
          'Portfolio optimization',
          'Market prediction models',
          'Automated trading execution',
          'Compliance monitoring',
          'Performance analytics'
        ],
        benefits: [
          'Improve trading performance by 40-60%',
          'Reduce risk exposure by 30%',
          'Enable faster decision making',
          'Optimize portfolio returns',
          'Stay ahead of market trends'
        ],
        targetAudience: ['Hedge funds', 'Investment banks', 'Trading firms', 'Asset managers'],
        marketSize: '$18.9B (Algorithmic Trading)',
        competitors: ['Bloomberg', 'Thomson Reuters', 'FactSet', 'Refinitiv'],
        roi: '800-1200% within 36 months',
        setupTime: '12-16 weeks',
        integrations: ['Bloomberg Terminal', 'Reuters Eikon', 'Trading platforms', 'Risk management systems'],
        freeTier: false,
        trialPeriod: 'Demo account',
        innovationLevel: 'Quantum + AI breakthrough',
        ctaLabel: 'Access Quantum Trading',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'quantum-cybersecurity-platform',
        title: 'Quantum Cybersecurity Platform',
        description: 'Advanced cybersecurity platform using quantum-resistant encryption and quantum key distribution for unbreakable security.',
        category: 'Quantum Computing',
        price: '$4,200',
        billing: 'month',
        features: [
          'Quantum-resistant encryption',
          'Quantum key distribution',
          'Advanced threat detection',
          'Zero-trust architecture',
          'Compliance frameworks',
          'Security automation',
          'Incident response',
          '24/7 monitoring'
        ],
        benefits: [
          'Future-proof security',
          'Unbreakable encryption',
          'Reduce security breaches',
          'Ensure compliance',
          'Protect against quantum threats'
        ],
        targetAudience: ['Government agencies', 'Financial institutions', 'Healthcare', 'Defense contractors'],
        marketSize: '$22.4B (Quantum Security)',
        competitors: ['IBM', 'Google', 'Microsoft', 'Intel'],
        roi: '500-800% within 24 months',
        setupTime: '8-12 weeks',
        integrations: ['SIEM systems', 'Firewalls', 'Identity management', 'Cloud platforms'],
        freeTier: false,
        trialPeriod: 'Security assessment',
        innovationLevel: 'Quantum security breakthrough',
        ctaLabel: 'Secure with Quantum',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      }
    ]
  },
  {
    name: 'Blockchain & Web3 Solutions',
    slug: 'blockchain-web3-solutions',
    description: 'Innovative blockchain and decentralized web solutions',
    items: [
      {
        id: 'defi-liquidity-optimization',
        title: 'DeFi Liquidity Optimization Platform',
        description: 'Intelligent DeFi platform that optimizes liquidity provision, yield farming, and portfolio management across multiple blockchain networks.',
        category: 'Blockchain & Web3',
        price: '$1,200',
        billing: 'month',
        features: [
          'Multi-chain liquidity management',
          'Automated yield farming',
          'Portfolio optimization',
          'Risk management tools',
          'Cross-chain bridges',
          'DeFi analytics',
          'Smart contract auditing',
          'Compliance monitoring'
        ],
        benefits: [
          'Maximize yield returns by 50-80%',
          'Reduce impermanent loss',
          'Optimize portfolio allocation',
          'Minimize gas fees',
          'Access to best DeFi opportunities'
        ],
        targetAudience: ['DeFi users', 'Crypto investors', 'Institutional investors', 'Trading firms'],
        marketSize: '$13.7B (DeFi)',
        competitors: ['Uniswap', 'Aave', 'Compound', 'Yearn Finance'],
        roi: '600-1000% within 12 months',
        setupTime: '2-3 weeks',
        integrations: ['Ethereum', 'Polygon', 'BSC', 'Solana', 'Wallet providers'],
        freeTier: true,
        trialPeriod: 'Demo mode',
        innovationLevel: 'Advanced DeFi protocols',
        ctaLabel: 'Optimize DeFi Strategy',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'nft-marketplace-platform',
        title: 'NFT Marketplace Platform',
        description: 'Complete NFT marketplace solution with minting, trading, and analytics capabilities for creators and collectors.',
        category: 'Blockchain & Web3',
        price: '$800',
        billing: 'month',
        features: [
          'NFT minting tools',
          'Marketplace functionality',
          'Royalty management',
          'Analytics dashboard',
          'Multi-chain support',
          'Mobile app',
          'Creator tools',
          'Community features'
        ],
        benefits: [
          'Launch NFT marketplace quickly',
          'Generate revenue from trading fees',
          'Build engaged community',
          'Access global market',
          'Monetize digital assets'
        ],
        targetAudience: ['Artists', 'Content creators', 'Brands', 'Entertainment companies'],
        marketSize: '$35.9B (NFT Market)',
        competitors: ['OpenSea', 'Rarible', 'Foundation', 'SuperRare'],
        roi: '400-700% within 18 months',
        setupTime: '4-6 weeks',
        integrations: ['Ethereum', 'Polygon', 'Solana', 'Payment gateways', 'Social media'],
        freeTier: false,
        trialPeriod: '14 days',
        innovationLevel: 'Modern NFT infrastructure',
        ctaLabel: 'Launch NFT Marketplace',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      }
    ]
  },
  {
    name: 'IoT & Smart City Solutions',
    slug: 'iot-smart-city-solutions',
    description: 'Comprehensive IoT and smart city infrastructure solutions',
    items: [
      {
        id: 'smart-city-iot-platform',
        title: 'Smart City IoT Platform',
        description: 'Integrated IoT platform for smart cities with traffic management, environmental monitoring, and public safety systems.',
        category: 'IoT & Edge',
        price: '$25,000',
        billing: 'project',
        features: [
          'Traffic management system',
          'Environmental monitoring',
          'Public safety integration',
          'Smart lighting control',
          'Waste management',
          'Energy optimization',
          'Data analytics dashboard',
          'Mobile applications'
        ],
        benefits: [
          'Reduce traffic congestion by 30%',
          'Improve public safety',
          'Reduce energy consumption by 25%',
          'Enhance citizen experience',
          'Generate operational insights'
        ],
        targetAudience: ['City governments', 'Municipalities', 'Urban planners', 'Infrastructure companies'],
        marketSize: '$67.2B (Smart Cities)',
        competitors: ['Cisco', 'Siemens', 'IBM', 'Schneider Electric'],
        roi: '300-500% within 36 months',
        setupTime: '16-24 weeks',
        integrations: ['Traffic systems', 'Public safety networks', 'Energy grids', 'Water systems'],
        freeTier: false,
        trialPeriod: 'Pilot program',
        innovationLevel: 'Advanced IoT ecosystem',
        ctaLabel: 'Transform Your City',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'industrial-iot-monitoring',
        title: 'Industrial IoT Monitoring System',
        description: 'Comprehensive IIoT monitoring solution for manufacturing, energy, and industrial facilities with predictive maintenance and optimization.',
        category: 'IoT & Edge',
        price: '$3,800',
        billing: 'month',
        features: [
          'Real-time equipment monitoring',
          'Predictive maintenance',
          'Energy optimization',
          'Quality control',
          'Safety monitoring',
          'Performance analytics',
          'Alert systems',
          'Mobile dashboard'
        ],
        benefits: [
          'Reduce downtime by 40%',
          'Lower maintenance costs by 30%',
          'Improve energy efficiency by 25%',
          'Enhance product quality',
          'Increase operational safety'
        ],
        targetAudience: ['Manufacturing companies', 'Energy providers', 'Industrial facilities', 'Mining companies'],
        marketSize: '$76.7B (Industrial IoT)',
        competitors: ['GE Digital', 'Siemens', 'ABB', 'Rockwell Automation'],
        roi: '400-600% within 24 months',
        setupTime: '8-12 weeks',
        integrations: ['SCADA systems', 'ERP platforms', 'Cloud platforms', 'Mobile devices'],
        freeTier: false,
        trialPeriod: '30 days',
        innovationLevel: 'Advanced IIoT',
        ctaLabel: 'Monitor Industrial Operations',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      }
    ]
  },
  {
    name: 'Green Tech & Sustainability',
    slug: 'green-tech-sustainability',
    description: 'Environmental technology and sustainability solutions',
    items: [
      {
        id: 'carbon-footprint-tracker',
        title: 'Carbon Footprint Tracking Platform',
        description: 'Comprehensive carbon footprint monitoring and reduction platform for businesses and organizations with sustainability reporting and offset options.',
        category: 'Green Tech',
        price: '$450',
        billing: 'month',
        features: [
          'Carbon footprint calculation',
          'Real-time monitoring',
          'Reduction recommendations',
          'Sustainability reporting',
          'Carbon offset marketplace',
          'Compliance tracking',
          'Employee engagement',
          'Analytics dashboard'
        ],
        benefits: [
          'Reduce carbon footprint by 20-40%',
          'Meet sustainability goals',
          'Improve brand reputation',
          'Comply with regulations',
          'Generate cost savings'
        ],
        targetAudience: ['Corporations', 'Manufacturing', 'Logistics companies', 'Government agencies'],
        marketSize: '$28.9B (Carbon Management)',
        competitors: ['Carbon Trust', 'EcoAct', 'South Pole', 'ClimatePartner'],
        roi: '250-400% within 18 months',
        setupTime: '4-6 weeks',
        integrations: ['ERP systems', 'Energy management', 'Fleet management', 'Cloud platforms'],
        freeTier: true,
        trialPeriod: '30 days',
        innovationLevel: 'Advanced sustainability tech',
        ctaLabel: 'Track Carbon Footprint',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      },
      {
        id: 'renewable-energy-optimization',
        title: 'Renewable Energy Optimization Platform',
        description: 'AI-powered platform for optimizing renewable energy production, storage, and distribution with smart grid integration.',
        category: 'Green Tech',
        price: '$2,800',
        billing: 'month',
        features: [
          'Energy production optimization',
          'Storage management',
          'Grid integration',
          'Demand forecasting',
          'Weather prediction',
          'Performance monitoring',
          'Maintenance scheduling',
          'Financial analytics'
        ],
        benefits: [
          'Increase energy production by 15-25%',
          'Optimize storage utilization',
          'Reduce operational costs',
          'Improve grid stability',
          'Maximize ROI on renewable assets'
        ],
        targetAudience: ['Energy companies', 'Solar farms', 'Wind farms', 'Utility companies'],
        marketSize: '$42.1B (Renewable Energy)',
        competitors: ['GE Renewable Energy', 'Siemens Gamesa', 'Vestas', 'NextEra Energy'],
        roi: '500-800% within 36 months',
        setupTime: '12-16 weeks',
        integrations: ['SCADA systems', 'Weather APIs', 'Grid management', 'Financial systems'],
        freeTier: false,
        trialPeriod: 'Pilot program',
        innovationLevel: 'Advanced energy optimization',
        ctaLabel: 'Optimize Renewable Energy',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      }
    ]
  },
  {
    name: 'Space Technology Solutions',
    slug: 'space-technology-solutions',
    description: 'Innovative space technology and satellite solutions',
    items: [
      {
        id: 'satellite-data-analytics',
        title: 'Satellite Data Analytics Platform',
        description: 'Advanced platform for analyzing satellite imagery and data for agriculture, environmental monitoring, and urban planning.',
        category: 'Space Tech',
        price: '$1,500',
        billing: 'month',
        features: [
          'Satellite imagery analysis',
          'AI-powered insights',
          'Environmental monitoring',
          'Agricultural analytics',
          'Urban development tracking',
          'Climate change analysis',
          'Real-time data processing',
          'Custom reporting'
        ],
        benefits: [
          'Access global satellite data',
          'Generate actionable insights',
          'Monitor environmental changes',
          'Optimize agricultural operations',
          'Support urban planning'
        ],
        targetAudience: ['Agriculture companies', 'Environmental agencies', 'Urban planners', 'Research institutions'],
        marketSize: '$8.9B (Satellite Analytics)',
        competitors: ['Planet Labs', 'Maxar', 'Airbus Defence', 'DigitalGlobe'],
        roi: '400-700% within 24 months',
        setupTime: '6-8 weeks',
        integrations: ['GIS systems', 'Agricultural platforms', 'Environmental databases', 'Cloud platforms'],
        freeTier: true,
        trialPeriod: '14 days',
        innovationLevel: 'Advanced space analytics',
        ctaLabel: 'Access Satellite Data',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      }
    ]
  },
  {
    name: 'Digital Transformation Services',
    slug: 'digital-transformation-services',
    description: 'Comprehensive digital transformation consulting and implementation',
    items: [
      {
        id: 'enterprise-digital-transformation',
        title: 'Enterprise Digital Transformation',
        description: 'End-to-end digital transformation services for large enterprises including strategy, implementation, and change management.',
        category: 'Digital Transformation',
        price: '$50,000',
        billing: 'project',
        features: [
          'Digital strategy development',
          'Technology assessment',
          'Process optimization',
          'Change management',
          'Training and adoption',
          'Performance monitoring',
          'Continuous improvement',
          'ROI tracking'
        ],
        benefits: [
          'Improve operational efficiency by 30-50%',
          'Reduce operational costs by 25-40%',
          'Enhance customer experience',
          'Enable innovation',
          'Future-proof business operations'
        ],
        targetAudience: ['Large enterprises', 'Fortune 500 companies', 'Government agencies', 'Healthcare systems'],
        marketSize: '$469.8B (Digital Transformation)',
        competitors: ['Accenture', 'Deloitte', 'McKinsey', 'BCG'],
        roi: '300-600% within 36 months',
        setupTime: '24-36 weeks',
        integrations: ['ERP systems', 'CRM platforms', 'Cloud infrastructure', 'Legacy systems'],
        freeTier: false,
        trialPeriod: 'Strategy workshop',
        innovationLevel: 'Comprehensive transformation',
        ctaLabel: 'Transform Your Business',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: zionContact
      }
    ]
  }
];

// Export individual service arrays for specific use cases
export const microSaasServices = enhancedServicesCatalog.find(cat => cat.slug === 'ai-powered-micro-saas')?.items || [];
export const itInfrastructureServices = enhancedServicesCatalog.find(cat => cat.slug === 'advanced-it-infrastructure')?.items || [];
export const quantumServices = enhancedServicesCatalog.find(cat => cat.slug === 'quantum-computing-solutions')?.items || [];
export const blockchainServices = enhancedServicesCatalog.find(cat => cat.slug === 'blockchain-web3-solutions')?.items || [];
export const iotServices = enhancedServicesCatalog.find(cat => cat.slug === 'iot-smart-city-solutions')?.items || [];
export const greenTechServices = enhancedServicesCatalog.find(cat => cat.slug === 'green-tech-sustainability')?.items || [];
export const spaceTechServices = enhancedServicesCatalog.find(cat => cat.slug === 'space-technology-solutions')?.items || [];
export const digitalTransformationServices = enhancedServicesCatalog.find(cat => cat.slug === 'digital-transformation-services')?.items || [];

// Export all services as a flat array
export const allEnhancedServices = enhancedServicesCatalog.flatMap(category => category.items);

// Export service categories for navigation
export const serviceCategories = enhancedServicesCatalog.map(category => ({
  name: category.name,
  slug: category.slug,
  description: category.description,
  count: category.items.length
}));