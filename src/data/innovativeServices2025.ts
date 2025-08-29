export interface InnovativeService {
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
    address: string;
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
  uniqueValue?: string;
}

export const INNOVATIVE_SERVICES_2025: InnovativeService[] = [
  // AI-Powered Cybersecurity & Compliance
  {
    id: "ai-threat-intelligence-platform",
    title: "AI Threat Intelligence Platform",
    description: "Real-time AI-powered threat detection and response system that continuously monitors network traffic, identifies anomalies, and automatically responds to security threats.",
    category: "AI & Cybersecurity",
    subcategory: "Threat Intelligence",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat detection",
      "AI-powered anomaly analysis",
      "Automated incident response",
      "Threat hunting automation",
      "Behavioral analytics",
      "Zero-day threat prediction",
      "Compliance reporting",
      "Integration with SIEM tools",
      "Custom threat feeds",
      "24/7 monitoring dashboard"
    ],
    benefits: [
      "Reduce security incidents by 85%",
      "Automate 90% of threat responses",
      "Compliance with SOC 2, ISO 27001",
      "Real-time threat visibility",
      "Proactive threat prevention"
    ],
    useCases: [
      "Enterprise security operations",
      "Financial services compliance",
      "Healthcare data protection",
      "Government security",
      "Critical infrastructure protection"
    ],
    targetAudience: [
      "CISOs",
      "Security analysts",
      "IT managers",
      "Compliance officers",
      "Security operations teams"
    ],
    tags: ["AI", "Cybersecurity", "Threat Intelligence", "Compliance", "Automation"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,999 - $12,999/month",
    roi: "300-500%",
    innovationLevel: "Cutting-edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Kubernetes", "Elasticsearch", "Redis"],
      integrations: ["Splunk", "QRadar", "CrowdStrike", "Palo Alto", "Cisco"],
      apiEndpoints: 200,
      uptime: "99.99%",
      security: ["SOC 2 Type II", "ISO 27001", "FedRAMP", "Zero-trust architecture"]
    },
    competitors: ["CrowdStrike", "SentinelOne", "Darktrace", "Cylance"],
    marketSize: "$45.2 billion by 2027",
    uniqueValue: "AI-first approach with predictive threat modeling and automated response"
  },

  // Quantum AI Platform
  {
    id: "quantum-ai-optimization-platform",
    title: "Quantum AI Optimization Platform",
    description: "Next-generation platform combining quantum computing principles with AI to solve complex optimization problems in logistics, finance, and scientific research.",
    category: "Quantum AI",
    subcategory: "Optimization",
    price: 8999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-inspired algorithms",
      "Hybrid classical-quantum computing",
      "Multi-objective optimization",
      "Real-time problem solving",
      "Scalable architecture",
      "API-first design",
      "Custom algorithm development",
      "Performance benchmarking",
      "Integration frameworks",
      "Expert consultation"
    ],
    benefits: [
      "Solve problems 1000x faster than classical methods",
      "Handle exponentially complex scenarios",
      "Real-time optimization updates",
      "Scalable to enterprise needs",
      "Future-proof quantum-ready architecture"
    ],
    useCases: [
      "Supply chain optimization",
      "Portfolio optimization",
      "Drug discovery",
      "Climate modeling",
      "Logistics planning"
    ],
    targetAudience: [
      "Quantitative analysts",
      "Research scientists",
      "Operations managers",
      "Financial institutions",
      "Government agencies"
    ],
    tags: ["Quantum Computing", "AI", "Optimization", "Research", "Enterprise"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "premium",
    marketPrice: "$8,999 - $25,000/month",
    roi: "400-800%",
    innovationLevel: "Revolutionary",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Qiskit", "Cirq", "PennyLane", "Python", "C++"],
      integrations: ["AWS Braket", "Azure Quantum", "IBM Quantum", "Google Quantum"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["Quantum-safe cryptography", "Zero-knowledge proofs", "Multi-party computation"]
    },
    competitors: ["D-Wave", "Rigetti", "IonQ", "Xanadu"],
    marketSize: "$65.4 billion by 2030",
    uniqueValue: "Hybrid classical-quantum approach with practical business applications"
  },

  // AI-Powered Healthcare Analytics
  {
    id: "ai-healthcare-predictive-analytics",
    title: "AI Healthcare Predictive Analytics Platform",
    description: "Advanced healthcare analytics platform using AI to predict patient outcomes, optimize treatment plans, and improve healthcare delivery efficiency.",
    category: "AI & Healthcare",
    subcategory: "Predictive Analytics",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Patient outcome prediction",
      "Treatment optimization",
      "Risk stratification",
      "Clinical decision support",
      "Population health analytics",
      "Real-time monitoring",
      "HIPAA compliance",
      "Integration with EHR systems",
      "Custom ML models",
      "Clinical validation tools"
    ],
    benefits: [
      "Improve patient outcomes by 40%",
      "Reduce readmission rates by 30%",
      "Optimize resource allocation",
      "Early disease detection",
      "Personalized medicine support"
    ],
    useCases: [
      "Hospital operations",
      "Clinical research",
      "Population health management",
      "Pharmaceutical development",
      "Insurance risk assessment"
    ],
    targetAudience: [
      "Healthcare providers",
      "Hospital administrators",
      "Clinical researchers",
      "Pharmaceutical companies",
      "Health insurance companies"
    ],
    tags: ["AI", "Healthcare", "Predictive Analytics", "ML", "Clinical"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $9,999/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "PyTorch", "PostgreSQL", "Redis"],
      integrations: ["Epic", "Cerner", "Allscripts", "Athenahealth", "Practice Fusion"],
      apiEndpoints: 150,
      uptime: "99.9%",
      security: ["HIPAA", "HITECH", "SOC 2", "End-to-end encryption"]
    },
    competitors: ["IBM Watson Health", "Cerner", "Epic", "Athenahealth"],
    marketSize: "$84.2 billion by 2027",
    uniqueValue: "AI-first approach with clinical validation and real-world evidence"
  },

  // Sustainable Green IT Solutions
  {
    id: "green-it-optimization-platform",
    title: "Green IT Optimization Platform",
    description: "Comprehensive platform for optimizing IT infrastructure energy consumption, reducing carbon footprint, and implementing sustainable technology practices.",
    category: "Green IT",
    subcategory: "Sustainability",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Energy consumption monitoring",
      "Carbon footprint tracking",
      "Green procurement recommendations",
      "Sustainable architecture design",
      "Renewable energy integration",
      "Compliance reporting",
      "Cost optimization",
      "Performance benchmarking",
      "Custom sustainability metrics",
      "Expert consultation"
    ],
    benefits: [
      "Reduce IT energy costs by 40%",
      "Decrease carbon footprint by 60%",
      "Meet sustainability goals",
      "Improve brand reputation",
      "Compliance with regulations"
    ],
    useCases: [
      "Data center optimization",
      "Enterprise sustainability",
      "Government compliance",
      "ESG reporting",
      "Green building certification"
    ],
    targetAudience: [
      "IT directors",
      "Sustainability officers",
      "Facility managers",
      "Compliance teams",
      "Executive leadership"
    ],
    tags: ["Green IT", "Sustainability", "Energy Efficiency", "ESG", "Compliance"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $7,999/month",
    roi: "200-350%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Python", "IoT sensors", "Machine Learning", "Cloud computing", "Blockchain"],
      integrations: ["AWS", "Azure", "Google Cloud", "VMware", "OpenStack"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["ISO 14001", "SOC 2", "GDPR", "Zero-trust security"]
    },
    competitors: ["Schneider Electric", "Siemens", "Honeywell", "Johnson Controls"],
    marketSize: "$28.7 billion by 2027",
    uniqueValue: "Comprehensive sustainability platform with AI-powered optimization"
  },

  // Space Technology Solutions
  {
    id: "space-tech-analytics-platform",
    title: "Space Technology Analytics Platform",
    description: "Advanced analytics platform for space missions, satellite data processing, and space industry optimization using AI and machine learning.",
    category: "Space Technology",
    subcategory: "Analytics",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite data processing",
      "Mission optimization",
      "Space debris tracking",
      "Launch window optimization",
      "Orbital mechanics analysis",
      "Real-time monitoring",
      "Predictive analytics",
      "Custom algorithms",
      "Integration frameworks",
      "Expert consultation"
    ],
    benefits: [
      "Optimize mission success rates by 25%",
      "Reduce launch costs by 30%",
      "Improve satellite lifespan",
      "Enhanced space safety",
      "Data-driven decision making"
    ],
    useCases: [
      "Satellite operations",
      "Space missions",
      "Launch services",
      "Space research",
      "Commercial space industry"
    ],
    targetAudience: [
      "Space agencies",
      "Satellite operators",
      "Launch service providers",
      "Space research institutions",
      "Commercial space companies"
    ],
    tags: ["Space Technology", "AI", "Analytics", "Satellites", "Missions"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "premium",
    marketPrice: "$5,999 - $15,000/month",
    roi: "300-600%",
    innovationLevel: "Cutting-edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "Orbital mechanics", "Computer vision", "ML"],
      integrations: ["NASA APIs", "ESA data", "SpaceX", "Blue Origin", "Satellite operators"],
      apiEndpoints: 80,
      uptime: "99.9%",
      security: ["ITAR compliance", "Space security", "Data encryption", "Access control"]
    },
    competitors: ["Maxar", "Planet Labs", "BlackSky", "Capella Space"],
    marketSize: "$469.8 billion by 2030",
    uniqueValue: "AI-powered space analytics with real-time mission optimization"
  },

  // AI-Powered Financial Trading
  {
    id: "ai-financial-trading-platform",
    title: "AI Financial Trading Platform",
    description: "Advanced AI-powered trading platform that analyzes market data, identifies patterns, and executes trades with high accuracy and speed.",
    category: "AI & Finance",
    subcategory: "Trading",
    price: 7999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time market analysis",
      "Pattern recognition",
      "Risk management",
      "Portfolio optimization",
      "Automated trading",
      "Backtesting tools",
      "Performance analytics",
      "Multi-asset support",
      "Custom strategies",
      "Compliance monitoring"
    ],
    benefits: [
      "Increase trading accuracy by 35%",
      "Reduce risk exposure by 40%",
      "24/7 market monitoring",
      "Emotion-free trading",
      "Scalable operations"
    ],
    useCases: [
      "Algorithmic trading",
      "Portfolio management",
      "Risk assessment",
      "Market research",
      "Quantitative analysis"
    ],
    targetAudience: [
      "Hedge funds",
      "Investment banks",
      "Trading firms",
      "Individual traders",
      "Financial advisors"
    ],
    tags: ["AI", "Finance", "Trading", "Machine Learning", "Risk Management"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "premium",
    marketPrice: "$7,999 - $20,000/month",
    roi: "400-700%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "PyTorch", "PostgreSQL", "Redis"],
      integrations: ["Bloomberg", "Reuters", "Interactive Brokers", "TD Ameritrade", "E*TRADE"],
      apiEndpoints: 200,
      uptime: "99.99%",
      security: ["SOC 2", "PCI DSS", "FINRA compliance", "End-to-end encryption"]
    },
    competitors: ["Bloomberg", "Thomson Reuters", "FactSet", "Refinitiv"],
    marketSize: "$12.8 billion by 2027",
    uniqueValue: "AI-first approach with real-time market analysis and automated execution"
  },

  // IoT Edge Computing Platform
  {
    id: "iot-edge-computing-platform",
    title: "IoT Edge Computing Platform",
    description: "Next-generation IoT platform that processes data at the edge, reducing latency and enabling real-time decision making for industrial applications.",
    category: "IoT & Edge Computing",
    subcategory: "Platform",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge data processing",
      "Real-time analytics",
      "Device management",
      "Predictive maintenance",
      "Energy optimization",
      "Security monitoring",
      "Scalable architecture",
      "Custom algorithms",
      "Integration frameworks",
      "Expert support"
    ],
    benefits: [
      "Reduce latency by 80%",
      "Lower bandwidth costs by 60%",
      "Improve operational efficiency",
      "Real-time decision making",
      "Scalable IoT deployment"
    ],
    useCases: [
      "Industrial automation",
      "Smart cities",
      "Energy management",
      "Manufacturing",
      "Transportation"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Utility companies",
      "City governments",
      "Transportation companies",
      "Energy providers"
    ],
    tags: ["IoT", "Edge Computing", "Industrial", "Automation", "Real-time"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $9,999/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Kubernetes", "Docker", "Python", "Node.js", "MQTT"],
      integrations: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "Siemens", "Rockwell"],
      apiEndpoints: 150,
      uptime: "99.9%",
      security: ["Zero-trust", "Device authentication", "Data encryption", "Secure boot"]
    },
    competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "Siemens Mindsphere"],
    marketSize: "$43.4 billion by 2027",
    uniqueValue: "Edge-first approach with real-time processing and industrial-grade reliability"
  },

  // Blockchain Enterprise Solutions
  {
    id: "blockchain-enterprise-platform",
    title: "Blockchain Enterprise Platform",
    description: "Enterprise-grade blockchain platform for supply chain transparency, digital identity, and secure transactions with AI-powered analytics.",
    category: "Blockchain",
    subcategory: "Enterprise",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart contract automation",
      "Supply chain tracking",
      "Digital identity management",
      "Tokenization services",
      "DeFi integration",
      "AI analytics",
      "Compliance tools",
      "Multi-chain support",
      "Custom development",
      "Expert consultation"
    ],
    benefits: [
      "Increase transparency by 90%",
      "Reduce fraud by 70%",
      "Automate processes",
      "Improve trust",
      "Cost reduction"
    ],
    useCases: [
      "Supply chain management",
      "Digital identity",
      "Financial services",
      "Healthcare records",
      "Government services"
    ],
    targetAudience: [
      "Large enterprises",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Supply chain companies"
    ],
    tags: ["Blockchain", "Enterprise", "Supply Chain", "DeFi", "Smart Contracts"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $15,000/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Ethereum", "Hyperledger", "Polkadot", "Solana", "Python"],
      integrations: ["AWS", "Azure", "Google Cloud", "Oracle", "SAP"],
      apiEndpoints: 120,
      uptime: "99.9%",
      security: ["Multi-signature", "Zero-knowledge proofs", "Hardware security modules"]
    },
    competitors: ["IBM Blockchain", "Microsoft Azure Blockchain", "Amazon Managed Blockchain"],
    marketSize: "$67.4 billion by 2026",
    uniqueValue: "Enterprise-focused with AI integration and multi-chain support"
  },

  // Digital Twin Solutions
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform",
    description: "Comprehensive digital twin platform for creating virtual replicas of physical assets, enabling predictive maintenance and optimization.",
    category: "Digital Twin",
    subcategory: "Platform",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D modeling and visualization",
      "Real-time data integration",
      "Predictive analytics",
      "Simulation capabilities",
      "Performance monitoring",
      "Maintenance scheduling",
      "Custom dashboards",
      "API integration",
      "Scalable architecture",
      "Expert support"
    ],
    benefits: [
      "Reduce maintenance costs by 30%",
      "Improve asset performance by 25%",
      "Predict failures before they happen",
      "Optimize operations",
      "Reduce downtime"
    ],
    useCases: [
      "Manufacturing",
      "Energy infrastructure",
      "Smart buildings",
      "Transportation",
      "Healthcare facilities"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Utility companies",
      "Real estate developers",
      "Transportation companies",
      "Healthcare organizations"
    ],
    tags: ["Digital Twin", "IoT", "Predictive Maintenance", "3D Modeling", "Simulation"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,999 - $12,000/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["Unity3D", "Unreal Engine", "Python", "Three.js", "WebGL"],
      integrations: ["Siemens", "GE Digital", "PTC", "Dassault", "Autodesk"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["Role-based access", "Data encryption", "Secure APIs", "Audit logging"]
    },
    competitors: ["Siemens Mindsphere", "GE Digital", "PTC ThingWorx", "Microsoft Azure Digital Twins"],
    marketSize: "$86.7 billion by 2028",
    uniqueValue: "Comprehensive platform with real-time simulation and predictive capabilities"
  },

  // AI-Powered Content Creation
  {
    id: "ai-content-creation-studio",
    title: "AI Content Creation Studio",
    description: "Advanced AI platform for creating high-quality, personalized content including articles, videos, and marketing materials with brand consistency.",
    category: "AI & Content",
    subcategory: "Creation",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered writing",
      "Video generation",
      "Image creation",
      "Brand voice consistency",
      "Multi-language support",
      "SEO optimization",
      "Content planning",
      "Performance analytics",
      "Custom templates",
      "Expert consultation"
    ],
    benefits: [
      "Increase content production by 500%",
      "Maintain brand consistency",
      "Reduce content costs by 60%",
      "Improve SEO performance",
      "Multi-language reach"
    ],
    useCases: [
      "Marketing campaigns",
      "Blog content",
      "Social media",
      "Product descriptions",
      "Educational content"
    ],
    targetAudience: [
      "Marketing agencies",
      "E-commerce companies",
      "Content creators",
      "Educational institutions",
      "Small businesses"
    ],
    tags: ["AI", "Content Creation", "Marketing", "SEO", "Automation"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "professional",
    marketPrice: "$1,999 - $4,999/month",
    roi: "300-600%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    technicalSpecs: {
      technology: ["GPT-4", "DALL-E", "Stable Diffusion", "Python", "React"],
      integrations: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Social media platforms"],
      apiEndpoints: 80,
      uptime: "99.9%",
      security: ["Content filtering", "Plagiarism detection", "Brand safety", "Data privacy"]
    },
    competitors: ["Jasper", "Copy.ai", "Writesonic", "ContentBot"],
    marketSize: "$15.7 billion by 2027",
    uniqueValue: "Comprehensive content creation with brand consistency and multi-format support"
  }
];

export const getServiceById = (id: string): InnovativeService | undefined => {
  return INNOVATIVE_SERVICES_2025.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): InnovativeService[] => {
  return INNOVATIVE_SERVICES_2025.filter(service => service.category === category);
};

export const getServicesByTag = (tag: string): InnovativeService[] => {
  return INNOVATIVE_SERVICES_2025.filter(service => service.tags.includes(tag));
};

export const searchServices = (query: string): InnovativeService[] => {
  const q = query.toLowerCase();
  return INNOVATIVE_SERVICES_2025.filter(service =>
    service.title.toLowerCase().includes(q) ||
    service.description.toLowerCase().includes(q) ||
    service.category.toLowerCase().includes(q) ||
    service.tags.some(tag => tag.toLowerCase().includes(q))
  );
};