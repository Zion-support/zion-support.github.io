export interface UltimateInnovativeService {
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
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

export const ULTIMATE_INNOVATIVE_SERVICES_2025: UltimateInnovativeService[] = [
  {
    id: 'ai-autonomous-business-manager',
    title: 'AI Autonomous Business Manager',
    description: 'Fully autonomous business operations management system that makes decisions, optimizes processes, and manages resources 24/7 without human intervention.',
    category: 'AI & Automation',
    subcategory: 'Business Intelligence',
    price: 15000,
    currency: 'USD',
    pricingModel: 'Monthly Subscription',
    features: [
      '24/7 autonomous decision making',
      'Real-time process optimization',
      'Predictive analytics and forecasting',
      'Automated resource allocation',
      'Intelligent risk management',
      'Multi-platform integration',
      'Custom AI model training',
      'Advanced reporting dashboard'
    ],
    benefits: [
      'Eliminates manual decision-making overhead',
      'Reduces operational costs by 40-60%',
      'Improves efficiency by 300-500%',
      '24/7 business optimization',
      'Data-driven strategic insights',
      'Scalable across all business units'
    ],
    useCases: [
      'Enterprise operations management',
      'Supply chain optimization',
      'Financial planning and analysis',
      'Customer service automation',
      'Marketing campaign optimization',
      'HR and talent management'
    ],
    targetAudience: [
      'Large enterprises',
      'Multi-national corporations',
      'Fast-growing startups',
      'Government agencies',
      'Educational institutions'
    ],
    tags: ['AI', 'Automation', 'Business Intelligence', 'Machine Learning', 'Process Optimization'],
    estimatedDelivery: '4-6 weeks',
    supportLevel: '24/7 Premium Support',
    marketPrice: '$20,000 - $50,000/month',
    roi: '300-500% within 6 months',
    innovationLevel: 'Revolutionary',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['GPT-4', 'BERT', 'TensorFlow', 'PyTorch', 'AWS SageMaker'],
      integrations: ['Salesforce', 'HubSpot', 'QuickBooks', 'Slack', 'Microsoft 365'],
      apiEndpoints: 150,
      uptime: '99.99%',
      security: ['SOC 2 Type II', 'GDPR Compliant', 'End-to-end encryption', 'Multi-factor authentication']
    },
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism'],
    marketSize: '$15.8 billion by 2027'
  },
  {
    id: 'quantum-ai-platform',
    title: 'Quantum AI Platform',
    description: 'Next-generation quantum computing platform that combines quantum algorithms with AI to solve previously unsolvable problems in cryptography, optimization, and scientific research.',
    category: 'Quantum Computing',
    subcategory: 'AI Integration',
    price: 25000,
    currency: 'USD',
    pricingModel: 'Usage-based + Monthly',
    features: [
      'Quantum machine learning algorithms',
      'Post-quantum cryptography',
      'Quantum optimization engines',
      'Hybrid classical-quantum computing',
      'Real-time quantum simulation',
      'Advanced quantum error correction',
      'Multi-qubit entanglement management',
      'Quantum-safe security protocols'
    ],
    benefits: [
      'Solves problems impossible for classical computers',
      'Exponential speedup for complex algorithms',
      'Future-proof cryptography solutions',
      'Revolutionary scientific research capabilities',
      'Competitive advantage in optimization',
      'Breakthrough in drug discovery and materials science'
    ],
    useCases: [
      'Cryptographic security',
      'Drug discovery and molecular modeling',
      'Financial portfolio optimization',
      'Climate modeling and prediction',
      'Logistics and supply chain optimization',
      'Artificial intelligence training'
    ],
    targetAudience: [
      'Research institutions',
      'Pharmaceutical companies',
      'Financial services firms',
      'Government agencies',
      'Technology companies',
      'Universities'
    ],
    tags: ['Quantum Computing', 'AI', 'Cryptography', 'Optimization', 'Scientific Research'],
    estimatedDelivery: '8-12 weeks',
    supportLevel: '24/7 Technical Support',
    marketPrice: '$50,000 - $100,000/month',
    roi: '500-1000% for research applications',
    innovationLevel: 'Breakthrough',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Custom quantum algorithms'],
      integrations: ['Python', 'Jupyter', 'TensorFlow', 'PyTorch', 'Cloud platforms'],
      apiEndpoints: 200,
      uptime: '99.9%',
      security: ['Quantum-safe encryption', 'Zero-knowledge proofs', 'Multi-party computation']
    },
    competitors: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Quantum'],
    marketSize: '$65 billion by 2030'
  },
  {
    id: 'blockchain-enterprise-platform',
    title: 'Enterprise Blockchain Platform',
    description: 'Scalable, enterprise-grade blockchain platform that enables secure, transparent, and efficient business processes with smart contracts and decentralized applications.',
    category: 'Blockchain',
    subcategory: 'Enterprise Solutions',
    price: 12000,
    currency: 'USD',
    pricingModel: 'Monthly Subscription',
    features: [
      'High-performance blockchain network',
      'Smart contract development platform',
      'Enterprise-grade security',
      'Scalable consensus mechanisms',
      'Multi-chain interoperability',
      'Advanced privacy controls',
      'Regulatory compliance tools',
      'Real-time analytics dashboard'
    ],
    benefits: [
      'Eliminates intermediaries and reduces costs',
      'Increases transparency and trust',
      'Automates complex business processes',
      'Improves data security and integrity',
      'Enables new business models',
      'Reduces fraud and errors'
    ],
    useCases: [
      'Supply chain management',
      'Financial services and payments',
      'Healthcare data management',
      'Real estate transactions',
      'Intellectual property protection',
      'Voting and governance systems'
    ],
    targetAudience: [
      'Financial institutions',
      'Manufacturing companies',
      'Healthcare organizations',
      'Government agencies',
      'Retail and e-commerce',
      'Legal services'
    ],
    tags: ['Blockchain', 'Smart Contracts', 'DeFi', 'Enterprise', 'Security'],
    estimatedDelivery: '6-8 weeks',
    supportLevel: '24/7 Support + Dedicated Account Manager',
    marketPrice: '$15,000 - $30,000/month',
    roi: '200-400% within 12 months',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Ethereum', 'Hyperledger Fabric', 'Polkadot', 'Solana', 'Custom protocols'],
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Oracle', 'SAP'],
      apiEndpoints: 300,
      uptime: '99.99%',
      security: ['Multi-signature wallets', 'Hardware security modules', 'Advanced encryption']
    },
    competitors: ['IBM Blockchain', 'Microsoft Azure Blockchain', 'Amazon Managed Blockchain'],
    marketSize: '$19.9 billion by 2027'
  },
  {
    id: 'cybersecurity-ai-defense',
    title: 'AI-Powered Cybersecurity Defense',
    description: 'Advanced cybersecurity platform that uses artificial intelligence to detect, prevent, and respond to cyber threats in real-time with zero false positives.',
    category: 'Cybersecurity',
    subcategory: 'AI Defense',
    price: 18000,
    currency: 'USD',
    pricingModel: 'Monthly Subscription',
    features: [
      'AI-powered threat detection',
      'Behavioral analysis and anomaly detection',
      'Automated incident response',
      'Zero-day vulnerability protection',
      'Advanced threat hunting',
      'Compliance monitoring and reporting',
      'Real-time threat intelligence',
      'Multi-layered defense architecture'
    ],
    benefits: [
      'Prevents 99.9% of cyber attacks',
      'Reduces security incidents by 95%',
      'Automates 80% of security operations',
      'Compliance with industry standards',
      '24/7 threat monitoring and response',
      'Significantly reduces security costs'
    ],
    useCases: [
      'Enterprise security operations',
      'Financial services protection',
      'Healthcare data security',
      'Government cybersecurity',
      'Critical infrastructure protection',
      'Cloud security management'
    ],
    targetAudience: [
      'Fortune 500 companies',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies',
      'Educational institutions'
    ],
    tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Incident Response', 'Compliance'],
    estimatedDelivery: '4-6 weeks',
    supportLevel: '24/7 Security Operations Center',
    marketPrice: '$25,000 - $50,000/month',
    roi: '400-600% in security cost savings',
    innovationLevel: 'Cutting-edge',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Behavioral Analytics'],
      integrations: ['SIEM systems', 'EDR solutions', 'Firewalls', 'Identity providers', 'Cloud platforms'],
      apiEndpoints: 250,
      uptime: '99.999%',
      security: ['Zero-trust architecture', 'End-to-end encryption', 'Multi-factor authentication']
    },
    competitors: ['CrowdStrike', 'SentinelOne', 'Darktrace'],
    marketSize: '$266 billion by 2027'
  },
  {
    id: 'iot-edge-intelligence',
    title: 'IoT Edge Intelligence Platform',
    description: 'Intelligent edge computing platform that processes IoT data locally using AI, reducing latency and bandwidth while providing real-time insights and automation.',
    category: 'IoT & Edge Computing',
    subcategory: 'Intelligence Platform',
    price: 8000,
    currency: 'USD',
    pricingModel: 'Per Device + Monthly',
    features: [
      'Edge AI processing and inference',
      'Real-time data analytics',
      'Local decision making',
      'Low-latency response',
      'Bandwidth optimization',
      'Offline operation capability',
      'Scalable edge deployment',
      'Advanced device management'
    ],
    benefits: [
      'Reduces latency by 90%',
      'Saves 80% on bandwidth costs',
      'Enables real-time automation',
      'Improves reliability and uptime',
      'Reduces cloud dependency',
      'Enhances data privacy and security'
    ],
    useCases: [
      'Industrial automation',
      'Smart cities and infrastructure',
      'Autonomous vehicles',
      'Healthcare monitoring',
      'Retail analytics',
      'Energy management'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Smart city initiatives',
      'Automotive industry',
      'Healthcare providers',
      'Retail chains',
      'Utility companies'
    ],
    tags: ['IoT', 'Edge Computing', 'AI', 'Real-time Analytics', 'Automation'],
    estimatedDelivery: '6-8 weeks',
    supportLevel: '24/7 Technical Support',
    marketPrice: '$10,000 - $25,000/month',
    roi: '250-400% in operational efficiency',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['TensorFlow Lite', 'ONNX Runtime', 'Edge TPU', 'Custom neural networks'],
      integrations: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'CoAP'],
      apiEndpoints: 100,
      uptime: '99.9%',
      security: ['Device authentication', 'Data encryption', 'Secure boot', 'Over-the-air updates']
    },
    competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Cloud IoT Edge'],
    marketSize: '$87 billion by 2026'
  },
  {
    id: 'metaverse-business-platform',
    title: 'Metaverse Business Platform',
    description: 'Comprehensive metaverse platform that enables businesses to create, manage, and monetize virtual experiences, digital assets, and immersive customer interactions.',
    category: 'Metaverse & VR',
    subcategory: 'Business Platform',
    price: 20000,
    currency: 'USD',
    pricingModel: 'Monthly Subscription',
    features: [
      '3D virtual world creation',
      'Digital asset marketplace',
      'Virtual event hosting',
      'Avatar customization and management',
      'Cross-platform compatibility',
      'Monetization tools',
      'Analytics and insights',
      'Multi-user collaboration'
    ],
    benefits: [
      'Creates new revenue streams',
      'Enhances customer engagement',
      'Reduces physical infrastructure costs',
      'Enables global reach and accessibility',
      'Provides immersive brand experiences',
      'Facilitates remote collaboration'
    ],
    useCases: [
      'Virtual retail and shopping',
      'Remote work and collaboration',
      'Virtual events and conferences',
      'Education and training',
      'Real estate visualization',
      'Entertainment and gaming'
    ],
    targetAudience: [
      'Retail and e-commerce',
      'Event organizers',
      'Educational institutions',
      'Real estate companies',
      'Entertainment industry',
      'Corporate training providers'
    ],
    tags: ['Metaverse', 'Virtual Reality', '3D', 'Digital Assets', 'Immersive Experience'],
    estimatedDelivery: '8-12 weeks',
    supportLevel: '24/7 Support + Creative Services',
    marketPrice: '$30,000 - $60,000/month',
    roi: '300-500% in new revenue streams',
    innovationLevel: 'Emerging',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Unity', 'Unreal Engine', 'WebGL', 'WebXR', 'Blockchain'],
      integrations: ['Payment gateways', 'CRM systems', 'Analytics platforms', 'Social media'],
      apiEndpoints: 200,
      uptime: '99.9%',
      security: ['Content protection', 'User authentication', 'Secure transactions']
    },
    competitors: ['Meta', 'Microsoft Mesh', 'NVIDIA Omniverse'],
    marketSize: '$800 billion by 2028'
  },
  {
    id: 'quantum-cryptography',
    title: 'Quantum Cryptography Solutions',
    description: 'Future-proof cryptographic solutions that use quantum mechanics to provide unbreakable encryption and secure communication channels.',
    category: 'Quantum Computing',
    subcategory: 'Cryptography',
    price: 30000,
    currency: 'USD',
    pricingModel: 'Project-based + Maintenance',
    features: [
      'Quantum key distribution (QKD)',
      'Post-quantum cryptography',
      'Quantum random number generation',
      'Secure quantum communication',
      'Quantum-resistant algorithms',
      'Hardware security modules',
      'Compliance certifications',
      'Integration services'
    ],
    benefits: [
      'Unbreakable encryption security',
      'Future-proof against quantum attacks',
      'Compliance with security standards',
      'Long-term data protection',
      'Competitive advantage in security',
      'Regulatory compliance assurance'
    ],
    useCases: [
      'Government communications',
      'Financial transactions',
      'Healthcare data protection',
      'Military communications',
      'Critical infrastructure',
      'Long-term data storage'
    ],
    targetAudience: [
      'Government agencies',
      'Financial institutions',
      'Healthcare organizations',
      'Military and defense',
      'Technology companies',
      'Research institutions'
    ],
    tags: ['Quantum Cryptography', 'Security', 'Encryption', 'QKD', 'Post-quantum'],
    estimatedDelivery: '12-16 weeks',
    supportLevel: '24/7 Security Support',
    marketPrice: '$50,000 - $100,000/project',
    roi: 'Invaluable for security-critical applications',
    innovationLevel: 'Breakthrough',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Quantum key distribution', 'Post-quantum algorithms', 'Hardware security modules'],
      integrations: ['VPN solutions', 'Secure communication platforms', 'Identity systems'],
      apiEndpoints: 50,
      uptime: '99.99%',
      security: ['Quantum-safe encryption', 'Hardware security', 'Multi-layer protection']
    },
    competitors: ['ID Quantique', 'QuintessenceLabs', 'Toshiba'],
    marketSize: '$3.5 billion by 2028'
  },
  {
    id: 'autonomous-robotics-platform',
    title: 'Autonomous Robotics Platform',
    description: 'Advanced robotics platform that enables autonomous operation, learning, and adaptation in various environments for industrial, commercial, and research applications.',
    category: 'Robotics & Automation',
    subcategory: 'Autonomous Systems',
    price: 25000,
    currency: 'USD',
    pricingModel: 'Monthly + Per Robot',
    features: [
      'Autonomous navigation and mapping',
      'Machine learning and adaptation',
      'Multi-sensor fusion',
      'Human-robot collaboration',
      'Remote monitoring and control',
      'Predictive maintenance',
      'Scalable fleet management',
      'Safety and compliance tools'
    ],
    benefits: [
      'Increases productivity by 300-500%',
      'Reduces operational costs by 40-60%',
      'Improves safety and reduces accidents',
      'Enables 24/7 operation',
      'Provides consistent quality output',
      'Scales operations efficiently'
    ],
    useCases: [
      'Manufacturing automation',
      'Warehouse and logistics',
      'Healthcare assistance',
      'Agriculture and farming',
      'Construction and maintenance',
      'Research and exploration'
    ],
    targetAudience: [
      'Manufacturing companies',
      'Logistics providers',
      'Healthcare facilities',
      'Agricultural businesses',
      'Construction companies',
      'Research institutions'
    ],
    tags: ['Robotics', 'Autonomous Systems', 'AI', 'Automation', 'Machine Learning'],
    estimatedDelivery: '10-14 weeks',
    supportLevel: '24/7 Technical Support + Field Service',
    marketPrice: '$35,000 - $75,000/month',
    roi: '400-600% in productivity gains',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['ROS 2', 'TensorFlow', 'Computer Vision', 'SLAM algorithms', 'Sensor fusion'],
      integrations: ['PLC systems', 'ERP platforms', 'IoT networks', 'Cloud platforms'],
      apiEndpoints: 150,
      uptime: '99.9%',
      security: ['Secure communication', 'Access control', 'Data encryption', 'Safety systems']
    },
    competitors: ['Boston Dynamics', 'ABB', 'KUKA', 'FANUC'],
    marketSize: '$75 billion by 2027'
  },
  {
    id: 'synthetic-biology-platform',
    title: 'Synthetic Biology Platform',
    description: 'Revolutionary platform that enables the design, construction, and optimization of biological systems for applications in medicine, agriculture, energy, and materials.',
    category: 'Biotechnology',
    subcategory: 'Synthetic Biology',
    price: 40000,
    currency: 'USD',
    pricingModel: 'Project-based + Licensing',
    features: [
      'DNA design and synthesis',
      'CRISPR gene editing tools',
      'Metabolic pathway engineering',
      'Protein design and optimization',
      'Biological circuit design',
      'High-throughput screening',
      'Computational modeling',
      'Regulatory compliance tools'
    ],
    benefits: [
      'Revolutionizes drug discovery',
      'Creates sustainable materials',
      'Improves agricultural yields',
      'Enables personalized medicine',
      'Reduces environmental impact',
      'Opens new market opportunities'
    ],
    useCases: [
      'Drug discovery and development',
      'Agricultural biotechnology',
      'Biofuels and renewable energy',
      'Biomaterials and textiles',
      'Environmental remediation',
      'Personalized therapeutics'
    ],
    targetAudience: [
      'Pharmaceutical companies',
      'Agricultural companies',
      'Energy companies',
      'Research institutions',
      'Biotech startups',
      'Government agencies'
    ],
    tags: ['Synthetic Biology', 'CRISPR', 'Gene Editing', 'Biotechnology', 'Drug Discovery'],
    estimatedDelivery: '16-24 weeks',
    supportLevel: '24/7 Scientific Support + Regulatory Guidance',
    marketPrice: '$75,000 - $150,000/project',
    roi: 'Revolutionary for breakthrough applications',
    innovationLevel: 'Breakthrough',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['CRISPR-Cas9', 'DNA synthesis', 'Computational biology', 'Machine learning'],
      integrations: ['Lab automation systems', 'Analytics platforms', 'Regulatory databases'],
      apiEndpoints: 100,
      uptime: '99.9%',
      security: ['Biosafety protocols', 'Data security', 'Access control', 'Compliance monitoring']
    },
    competitors: ['Ginkgo Bioworks', 'Twist Bioscience', 'Synthetic Genomics'],
    marketSize: '$30 billion by 2030'
  },
  {
    id: 'space-tech-platform',
    title: 'Space Technology Platform',
    description: 'Comprehensive space technology platform that enables satellite deployment, space data analytics, and space-based services for commercial and research applications.',
    category: 'Space Technology',
    subcategory: 'Commercial Space',
    price: 50000,
    currency: 'USD',
    pricingModel: 'Project-based + Service Fees',
    features: [
      'Satellite design and deployment',
      'Space data collection and analysis',
      'Earth observation services',
      'Satellite communication networks',
      'Space debris monitoring',
      'Launch vehicle integration',
      'Ground station management',
      'Regulatory compliance support'
    ],
    benefits: [
      'Access to space-based resources',
      'Global connectivity and coverage',
      'Advanced Earth observation capabilities',
      'New revenue streams from space',
      'Competitive advantage in space sector',
      'Research and development opportunities'
    ],
    useCases: [
      'Satellite communications',
      'Earth observation and monitoring',
      'Navigation and positioning',
      'Space research and exploration',
      'Defense and security',
      'Environmental monitoring'
    ],
    targetAudience: [
      'Telecommunications companies',
      'Government agencies',
      'Research institutions',
      'Defense contractors',
      'Environmental organizations',
      'Technology companies'
    ],
    tags: ['Space Technology', 'Satellites', 'Earth Observation', 'Space Communications', 'Satellite Data'],
    estimatedDelivery: '18-24 months',
    supportLevel: '24/7 Mission Control + Technical Support',
    marketPrice: '$100,000 - $500,000/project',
    roi: 'Revolutionary for space-based applications',
    innovationLevel: 'Breakthrough',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Satellite technology', 'Launch systems', 'Ground stations', 'Data analytics'],
      integrations: ['Communication networks', 'Data centers', 'Analytics platforms'],
      apiEndpoints: 200,
      uptime: '99.9%',
      security: ['Secure communications', 'Data encryption', 'Access control', 'Mission security']
    },
    competitors: ['SpaceX', 'Blue Origin', 'Virgin Galactic', 'Planet Labs'],
    marketSize: '$469 billion by 2030'
  }
];

export const SERVICE_CATEGORIES = [
  'AI & Automation',
  'Quantum Computing',
  'Blockchain',
  'Cybersecurity',
  'IoT & Edge Computing',
  'Metaverse & VR',
  'Robotics & Automation',
  'Biotechnology',
  'Space Technology'
];

export const SERVICE_SUBCATEGORIES = [
  'Business Intelligence',
  'AI Integration',
  'Enterprise Solutions',
  'AI Defense',
  'Intelligence Platform',
  'Business Platform',
  'Cryptography',
  'Autonomous Systems',
  'Synthetic Biology',
  'Commercial Space'
];