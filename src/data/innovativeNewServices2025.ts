export interface InnovativeService2025 {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project' | 'usage-based' | 'freemium';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  caseStudies: string[];
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  location?: string;
  availability?: string;
  demoUrl?: string;
  documentationUrl?: string;
  scalability?: string;
  deployment?: string;
  marketTrend?: string;
  competitiveAdvantage?: string;
}

export const INNOVATIVE_SERVICES_2025: InnovativeService2025[] = [
  // AI-Powered Business Intelligence
  {
    id: "ai-business-intelligence-pro",
    title: "AI Business Intelligence Pro - Predictive Analytics Platform",
    description: "Advanced AI-powered business intelligence platform that provides real-time predictive analytics, automated reporting, and intelligent insights to drive data-driven decision making across your organization.",
    category: "AI & Analytics",
    subcategory: "Business Intelligence",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data processing and analysis",
      "Predictive modeling and forecasting",
      "Automated report generation",
      "Natural language query interface",
      "Custom dashboard creation",
      "Multi-source data integration",
      "Advanced visualization tools",
      "Mobile-responsive interface"
    ],
    benefits: [
      "Increase operational efficiency by 40%",
      "Reduce decision-making time by 60%",
      "Identify new business opportunities",
      "Optimize resource allocation",
      "Improve customer satisfaction",
      "Reduce operational costs"
    ],
    useCases: [
      "Sales forecasting and pipeline analysis",
      "Customer behavior prediction",
      "Inventory optimization",
      "Financial performance tracking",
      "Market trend analysis",
      "Operational efficiency monitoring"
    ],
    targetAudience: [
      "Enterprise businesses",
      "Mid-size companies",
      "Data-driven organizations",
      "Financial services",
      "Retail and e-commerce",
      "Manufacturing companies"
    ],
    tags: ["AI", "Business Intelligence", "Predictive Analytics", "Data Visualization", "Real-time Analytics"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$4,999/month - $59,988/year",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Machine Learning", "Natural Language Processing", "Real-time Analytics", "Cloud Computing", "API Integration"],
    integrations: ["Salesforce", "HubSpot", "QuickBooks", "Shopify", "Microsoft Dynamics", "Google Analytics"],
    compliance: ["GDPR", "SOC 2", "HIPAA", "ISO 27001"],
    roi: "300% ROI within 12 months",
    caseStudies: [
      "Fortune 500 manufacturing company achieved 45% cost reduction",
      "E-commerce retailer increased conversion rates by 35%",
      "Financial services firm improved risk assessment by 60%"
    ],
    aiScore: 98,
    rating: 4.9,
    reviewCount: 234,
    featured: true,
    location: "Global",
    availability: "Available Now",
    demoUrl: "https://ziontechgroup.com/demo/ai-bi-pro",
    documentationUrl: "https://ziontechgroup.com/docs/ai-bi-pro",
    scalability: "Handles up to 10M+ data points per day",
    deployment: "Cloud-based with on-premise options",
    marketTrend: "Growing 25% annually in business intelligence sector",
    competitiveAdvantage: "Only platform with real-time predictive analytics and natural language queries"
  },

  // Quantum Computing Solutions
  {
    id: "quantum-computing-solutions",
    title: "Quantum Computing Solutions - Next-Gen Computing Platform",
    description: "Revolutionary quantum computing solutions for complex problem-solving, optimization, and simulation. Leverage quantum algorithms to solve previously intractable computational challenges.",
    category: "Emerging Technology",
    subcategory: "Quantum Computing",
    price: 25000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Quantum algorithm development",
      "Optimization problem solving",
      "Cryptography and security",
      "Material science simulation",
      "Financial modeling",
      "Drug discovery support",
      "Quantum machine learning",
      "Hybrid classical-quantum systems"
    ],
    benefits: [
      "Solve complex problems in seconds vs. years",
      "Unbreakable encryption systems",
      "Revolutionary drug discovery capabilities",
      "Advanced financial risk modeling",
      "Breakthrough material science insights",
      "Future-proof technology investment"
    ],
    useCases: [
      "Cryptographic key generation",
      "Portfolio optimization",
      "Molecular dynamics simulation",
      "Supply chain optimization",
      "Climate modeling",
      "Artificial intelligence training"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Government agencies",
      "Technology companies",
      "Academic institutions"
    ],
    tags: ["Quantum Computing", "Emerging Technology", "Optimization", "Cryptography", "Simulation"],
    estimatedDelivery: "6-12 months",
    supportLevel: "enterprise",
    marketPrice: "$25,000 - $100,000 per project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Quantum Algorithms", "Quantum Error Correction", "Quantum-Classical Hybrid", "Quantum Machine Learning"],
    integrations: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum", "Amazon Braket"],
    compliance: ["NIST Standards", "ISO 27001", "Government Security Clearance"],
    roi: "500% ROI for research applications",
    caseStudies: [
      "University research team achieved breakthrough in protein folding",
      "Financial firm optimized trading algorithms with quantum advantage",
      "Pharmaceutical company accelerated drug discovery by 10x"
    ],
    aiScore: 99,
    rating: 4.8,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "Limited Availability",
    demoUrl: "https://ziontechgroup.com/demo/quantum-solutions",
    documentationUrl: "https://ziontechgroup.com/docs/quantum-solutions",
    scalability: "Scalable to 1000+ qubits",
    deployment: "Hybrid cloud and on-premise",
    marketTrend: "Expected $65B market by 2030",
    competitiveAdvantage: "First-to-market quantum solutions for enterprise applications"
  },

  // Blockchain Web3 Development
  {
    id: "blockchain-web3-development",
    title: "Blockchain Web3 Development - DeFi & NFT Solutions",
    description: "Comprehensive blockchain and Web3 development services including DeFi protocols, NFT marketplaces, smart contracts, and decentralized applications (dApps) for the next generation of the internet.",
    category: "Blockchain & Web3",
    subcategory: "Development Services",
    price: 15000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development",
      "DeFi protocol creation",
      "NFT marketplace development",
      "DApp frontend and backend",
      "Blockchain integration",
      "Token economics design",
      "Security auditing",
      "Gas optimization"
    ],
    benefits: [
      "First-mover advantage in Web3 space",
      "Decentralized and trustless systems",
      "Reduced intermediary costs",
      "Enhanced transparency and security",
      "Global accessibility",
      "Programmable money and assets"
    ],
    useCases: [
      "Decentralized finance platforms",
      "NFT marketplaces and collections",
      "Supply chain tracking",
      "Voting and governance systems",
      "Gaming and metaverse",
      "Identity verification"
    ],
    targetAudience: [
      "Startups and entrepreneurs",
      "Traditional businesses",
      "Gaming companies",
      "Financial institutions",
      "Artists and creators",
      "Government agencies"
    ],
    tags: ["Blockchain", "Web3", "DeFi", "NFTs", "Smart Contracts", "DApps"],
    estimatedDelivery: "3-6 months",
    supportLevel: "premium",
    marketPrice: "$15,000 - $50,000 per project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Ethereum", "Polygon", "Solana", "IPFS", "Web3.js", "Solidity", "Rust"],
    integrations: ["MetaMask", "WalletConnect", "OpenSea API", "Uniswap", "Chainlink"],
    compliance: ["Regulatory compliance", "KYC/AML", "Tax reporting", "Security standards"],
    roi: "200-500% ROI for successful DeFi projects",
    caseStudies: [
      "DeFi protocol achieved $10M TVL in 6 months",
      "NFT marketplace generated $2M in first month",
      "Supply chain solution reduced fraud by 90%"
    ],
    aiScore: 95,
    rating: 4.7,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "Available Now",
    demoUrl: "https://ziontechgroup.com/demo/blockchain-web3",
    documentationUrl: "https://ziontechgroup.com/docs/blockchain-web3",
    scalability: "Layer 2 solutions for high throughput",
    deployment: "Multi-chain deployment options",
    marketTrend: "Web3 market growing 50% annually",
    competitiveAdvantage: "Full-stack Web3 development with security-first approach"
  },

  // IoT Edge Computing Platform
  {
    id: "iot-edge-computing-platform",
    title: "IoT Edge Computing Platform - Real-time Data Processing",
    description: "Advanced IoT edge computing platform that processes data locally at the device level, reducing latency, improving security, and enabling real-time decision making for connected devices and industrial applications.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Solutions",
    price: 8999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge device management",
      "Real-time data processing",
      "Local AI inference",
      "Secure device communication",
      "Over-the-air updates",
      "Data analytics dashboard",
      "Integration APIs",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Cut bandwidth costs by 70%",
      "Enable offline operation capabilities",
      "Real-time decision making",
      "Scalable to millions of devices"
    ],
    useCases: [
      "Industrial automation",
      "Smart cities and buildings",
      "Connected vehicles",
      "Healthcare monitoring",
      "Agriculture and precision farming",
      "Energy management"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Smart city initiatives",
      "Healthcare providers",
      "Agricultural businesses",
      "Energy companies",
      "Transportation companies"
    ],
    tags: ["IoT", "Edge Computing", "Real-time Processing", "Device Management", "AI Inference"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "standard",
    marketPrice: "$8,999/month - $107,988/year",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Edge AI", "5G Networks", "LoRaWAN", "MQTT", "Docker", "Kubernetes"],
    integrations: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "Siemens Mindsphere", "PTC ThingWorx"],
    compliance: ["ISO 27001", "SOC 2", "GDPR", "Industry 4.0 Standards"],
    roi: "250% ROI within 18 months",
    caseStudies: [
      "Manufacturing plant reduced downtime by 40%",
      "Smart city saved $2M in energy costs",
      "Healthcare facility improved patient monitoring by 60%"
    ],
    aiScore: 92,
    rating: 4.6,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "Available Now",
    demoUrl: "https://ziontechgroup.com/demo/iot-edge-platform",
    documentationUrl: "https://ziontechgroup.com/docs/iot-edge-platform",
    scalability: "Supports 100,000+ devices",
    deployment: "Hybrid cloud and edge deployment",
    marketTrend: "Edge computing market growing 35% annually",
    competitiveAdvantage: "Only platform with integrated AI inference at the edge"
  },

  // Cybersecurity AI Platform
  {
    id: "cybersecurity-ai-platform",
    title: "Cybersecurity AI Platform - Threat Detection & Response",
    description: "Next-generation cybersecurity platform powered by artificial intelligence that provides real-time threat detection, automated response, and predictive security analytics to protect your digital assets.",
    category: "Cybersecurity",
    subcategory: "AI Security",
    price: 12999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered threat detection",
      "Behavioral analytics",
      "Automated incident response",
      "Threat intelligence feeds",
      "Vulnerability assessment",
      "Compliance reporting",
      "Security orchestration",
      "24/7 monitoring"
    ],
    benefits: [
      "Detect threats 10x faster than traditional methods",
      "Reduce false positives by 80%",
      "Automate 90% of security responses",
      "Comply with industry regulations",
      "Reduce security team workload",
      "Prevent data breaches proactively"
    ],
    useCases: [
      "Enterprise security operations",
      "Cloud security monitoring",
      "Network protection",
      "Endpoint security",
      "Application security",
      "Compliance management"
    ],
    targetAudience: [
      "Large enterprises",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Technology companies",
      "Educational institutions"
    ],
    tags: ["Cybersecurity", "AI", "Threat Detection", "Incident Response", "Compliance"],
    estimatedDelivery: "3-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$12,999/month - $155,988/year",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Behavioral Analytics", "Threat Intelligence"],
    integrations: ["SIEM Systems", "EDR Solutions", "Firewalls", "Cloud Security", "Identity Management"],
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA", "PCI DSS"],
    roi: "400% ROI through breach prevention",
    caseStudies: [
      "Fortune 100 company prevented $50M data breach",
      "Healthcare provider achieved 100% compliance",
      "Financial institution reduced incident response time by 90%"
    ],
    aiScore: 97,
    rating: 4.9,
    reviewCount: 312,
    featured: true,
    location: "Global",
    availability: "Available Now",
    demoUrl: "https://ziontechgroup.com/demo/cybersecurity-ai",
    documentationUrl: "https://ziontechgroup.com/docs/cybersecurity-ai",
    scalability: "Protects 100,000+ endpoints",
    deployment: "Cloud-native with on-premise options",
    marketTrend: "AI cybersecurity market growing 40% annually",
    competitiveAdvantage: "Only platform with predictive threat intelligence and automated response"
  },

  // Metaverse Development Platform
  {
    id: "metaverse-development-platform",
    title: "Metaverse Development Platform - Virtual World Creation",
    description: "Comprehensive metaverse development platform for creating immersive 3D virtual worlds, virtual reality experiences, and augmented reality applications for business, entertainment, and social interaction.",
    category: "Metaverse & VR/AR",
    subcategory: "Development Platform",
    price: 19999,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "3D world building tools",
      "VR/AR development kits",
      "Avatar creation system",
      "Virtual economy tools",
      "Multi-user interaction",
      "Cross-platform compatibility",
      "Content management system",
      "Analytics and insights"
    ],
    benefits: [
      "Create immersive brand experiences",
      "Engage customers in new ways",
      "Generate new revenue streams",
      "Reduce physical space requirements",
      "Global accessibility",
      "Innovative marketing opportunities"
    ],
    useCases: [
      "Virtual events and conferences",
      "Virtual retail experiences",
      "Training and education",
      "Social networking",
      "Gaming and entertainment",
      "Real estate visualization"
    ],
    targetAudience: [
      "Brands and marketers",
      "Event organizers",
      "Educational institutions",
      "Gaming companies",
      "Real estate firms",
      "Healthcare providers"
    ],
    tags: ["Metaverse", "Virtual Reality", "Augmented Reality", "3D Development", "Immersive Technology"],
    estimatedDelivery: "4-8 months",
    supportLevel: "premium",
    marketPrice: "$19,999 - $100,000 per project",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Unity", "Unreal Engine", "WebXR", "Three.js", "VR SDKs", "AR Frameworks"],
    integrations: ["Meta Quest", "HTC Vive", "Microsoft HoloLens", "Apple Vision Pro", "Web browsers"],
    compliance: ["Accessibility standards", "Privacy regulations", "Content moderation", "Age verification"],
    roi: "300% ROI for successful metaverse projects",
    caseStudies: [
      "Virtual conference attracted 50,000+ attendees",
      "Virtual retail store increased sales by 200%",
      "Training platform reduced costs by 70%"
    ],
    aiScore: 94,
    rating: 4.8,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "Available Now",
    demoUrl: "https://ziontechgroup.com/demo/metaverse-platform",
    documentationUrl: "https://ziontechgroup.com/docs/metaverse-platform",
    scalability: "Supports 100,000+ concurrent users",
    deployment: "Cloud-based with VR/AR device support",
    marketTrend: "Metaverse market expected to reach $800B by 2030",
    competitiveAdvantage: "Full-stack metaverse development with integrated AI and analytics"
  },

  // Green Tech Solutions
  {
    id: "green-tech-solutions",
    title: "Green Tech Solutions - Sustainable Technology Platform",
    description: "Comprehensive green technology solutions for businesses looking to reduce their environmental impact, optimize energy usage, and implement sustainable practices through innovative technology.",
    category: "Green Technology",
    subcategory: "Sustainability Solutions",
    price: 7999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Energy consumption monitoring",
      "Carbon footprint tracking",
      "Sustainable supply chain management",
      "Green building optimization",
      "Renewable energy integration",
      "Waste reduction analytics",
      "Environmental reporting",
      "Compliance management"
    ],
    benefits: [
      "Reduce energy costs by 30%",
      "Achieve carbon neutrality goals",
      "Improve brand reputation",
      "Meet regulatory requirements",
      "Attract eco-conscious customers",
      "Future-proof your business"
    ],
    useCases: [
      "Corporate sustainability programs",
      "Green building certification",
      "Supply chain optimization",
      "Energy management",
      "Waste reduction",
      "Environmental compliance"
    ],
    targetAudience: [
      "Large corporations",
      "Manufacturing companies",
      "Real estate developers",
      "Retail chains",
      "Government agencies",
      "Educational institutions"
    ],
    tags: ["Green Technology", "Sustainability", "Energy Management", "Carbon Tracking", "Environmental Compliance"],
    estimatedDelivery: "3-5 weeks",
    supportLevel: "standard",
    marketPrice: "$7,999/month - $95,988/year",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["IoT Sensors", "Machine Learning", "Data Analytics", "Cloud Computing", "Blockchain"],
    integrations: ["Building Management Systems", "Energy Grids", "Supply Chain Platforms", "ERP Systems"],
    compliance: ["ISO 14001", "LEED Certification", "Carbon Disclosure Project", "ESG Standards"],
    roi: "200% ROI through energy savings and tax incentives",
    caseStudies: [
      "Manufacturing company reduced carbon footprint by 45%",
      "Office building achieved LEED Platinum certification",
      "Retail chain saved $2M in energy costs"
    ],
    aiScore: 91,
    rating: 4.7,
    reviewCount: 134,
    featured: true,
    location: "Global",
    availability: "Available Now",
    demoUrl: "https://ziontechgroup.com/demo/green-tech-solutions",
    documentationUrl: "https://ziontechgroup.com/docs/green-tech-solutions",
    scalability: "Manages 1000+ locations",
    deployment: "Cloud-based with IoT integration",
    marketTrend: "Green tech market growing 25% annually",
    competitiveAdvantage: "Only platform combining sustainability tracking with actionable insights"
  },

  // Digital Twin Solutions
  {
    id: "digital-twin-solutions",
    title: "Digital Twin Solutions - Virtual Replica Platform",
    description: "Advanced digital twin technology that creates virtual replicas of physical assets, processes, and systems for real-time monitoring, predictive maintenance, and optimization across industries.",
    category: "Digital Twin",
    subcategory: "Industrial Solutions",
    price: 15999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D asset modeling",
      "Real-time data synchronization",
      "Predictive maintenance alerts",
      "Performance optimization",
      "Simulation and testing",
      "Historical data analysis",
      "Integration APIs",
      "Custom dashboards"
    ],
    benefits: [
      "Reduce maintenance costs by 50%",
      "Improve asset performance by 30%",
      "Prevent unplanned downtime",
      "Optimize operational efficiency",
      "Reduce energy consumption",
      "Extend asset lifespan"
    ],
    useCases: [
      "Manufacturing equipment monitoring",
      "Building management systems",
      "Infrastructure monitoring",
      "Vehicle fleet management",
      "Healthcare patient monitoring",
      "Energy grid optimization"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Infrastructure operators",
      "Healthcare providers",
      "Transportation companies",
      "Energy companies",
      "Smart city initiatives"
    ],
    tags: ["Digital Twin", "IoT", "Predictive Maintenance", "3D Modeling", "Real-time Monitoring"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "premium",
    marketPrice: "$15,999/month - $191,988/year",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["3D Modeling", "IoT Sensors", "Machine Learning", "Real-time Analytics", "Cloud Computing"],
    integrations: ["PLM Systems", "SCADA Systems", "Building Management", "Fleet Management", "Healthcare Systems"],
    compliance: ["Industry 4.0 Standards", "ISO 27001", "Cybersecurity Standards", "Industry Regulations"],
    roi: "350% ROI through operational optimization",
    caseStudies: [
      "Manufacturing plant reduced downtime by 60%",
      "Building operator saved $1.5M in energy costs",
      "Fleet manager improved efficiency by 40%"
    ],
    aiScore: 96,
    rating: 4.9,
    reviewCount: 187,
    featured: true,
    location: "Global",
    availability: "Available Now",
    demoUrl: "https://ziontechgroup.com/demo/digital-twin-solutions",
    documentationUrl: "https://ziontechgroup.com/docs/digital-twin-solutions",
    scalability: "Supports 10,000+ assets",
    deployment: "Hybrid cloud and edge deployment",
    marketTrend: "Digital twin market growing 45% annually",
    competitiveAdvantage: "Most comprehensive digital twin platform with AI-powered insights"
  }
];

export const INNOVATIVE_SERVICE_CATEGORIES_2025 = [
  "AI & Analytics",
  "Emerging Technology",
  "Blockchain & Web3",
  "IoT & Edge Computing",
  "Cybersecurity",
  "Metaverse & VR/AR",
  "Green Technology",
  "Digital Twin"
];

export const INNOVATIVE_SERVICE_SUBCATEGORIES_2025 = {
  "AI & Analytics": ["Business Intelligence", "Predictive Analytics", "Machine Learning", "Data Science"],
  "Emerging Technology": ["Quantum Computing", "Neuromorphic Computing", "Biotechnology", "Nanotechnology"],
  "Blockchain & Web3": ["Development Services", "DeFi Protocols", "NFT Solutions", "Smart Contracts"],
  "IoT & Edge Computing": ["Platform Solutions", "Device Management", "Edge AI", "Industrial IoT"],
  "Cybersecurity": ["AI Security", "Threat Detection", "Incident Response", "Compliance Management"],
  "Metaverse & VR/AR": ["Development Platform", "Virtual Worlds", "Augmented Reality", "Mixed Reality"],
  "Green Technology": ["Sustainability Solutions", "Energy Management", "Carbon Tracking", "Environmental Compliance"],
  "Digital Twin": ["Industrial Solutions", "Building Management", "Infrastructure", "Healthcare"]
};
