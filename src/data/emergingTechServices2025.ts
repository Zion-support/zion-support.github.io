export interface EmergingTechService2025 {
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
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const EMERGING_TECH_SERVICES_2025: EmergingTechService2025[] = [
  // Quantum Computing Services
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning & AI Optimization Platform",
    description: "Revolutionary platform that combines quantum computing with machine learning to solve complex optimization problems and accelerate AI training.",
    category: "Quantum Computing",
    subcategory: "Machine Learning",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum ML algorithms",
      "AI model optimization",
      "Complex problem solving",
      "Quantum neural networks",
      "Hybrid classical-quantum computing",
      "Real-time optimization",
      "API for research tools",
      "Performance benchmarking"
    ],
    benefits: [
      "Accelerate ML training by 100x",
      "Solve previously intractable problems",
      "Enhanced optimization capabilities",
      "Quantum advantage in AI",
      "Future-proof technology"
    ],
    useCases: [
      "AI research institutions",
      "Machine learning companies",
      "Financial modeling",
      "Drug discovery",
      "Climate modeling"
    ],
    targetAudience: [
      "AI researchers",
      "Data scientists",
      "ML engineers",
      "Research institutions",
      "Technology companies"
    ],
    tags: ["Quantum Computing", "Machine Learning", "AI", "Optimization", "Research"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-cryptography-security",
    title: "Quantum Cryptography & Post-Quantum Security Platform",
    description: "Advanced security platform using quantum cryptography and post-quantum algorithms to protect against future quantum threats.",
    category: "Quantum Computing",
    subcategory: "Cryptography & Security",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Post-quantum cryptography",
      "Quantum-resistant algorithms",
      "Secure communication protocols",
      "Threat assessment",
      "Compliance frameworks",
      "Security auditing",
      "Future-proof encryption"
    ],
    benefits: [
      "Quantum-resistant security",
      "Future-proof encryption",
      "Enhanced data protection",
      "Regulatory compliance",
      "Advanced threat protection"
    ],
    useCases: [
      "Financial institutions",
      "Government agencies",
      "Healthcare organizations",
      "Critical infrastructure",
      "Defense contractors"
    ],
    targetAudience: [
      "Security architects",
      "Cryptographers",
      "CISOs",
      "Government officials",
      "Security consultants"
    ],
    tags: ["Quantum Computing", "Cryptography", "Security", "Post-Quantum", "Encryption"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // AI & Machine Learning Services
  {
    id: "autonomous-ai-agents-platform",
    title: "Autonomous AI Agents & Multi-Agent Systems Platform",
    description: "Intelligent platform for creating, deploying, and managing autonomous AI agents that can work independently and collaboratively.",
    category: "AI & Machine Learning",
    subcategory: "Autonomous Systems",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous AI agents",
      "Multi-agent coordination",
      "Learning & adaptation",
      "Task automation",
      "Decision making",
      "Agent marketplace",
      "Performance monitoring",
      "Scalable deployment"
    ],
    benefits: [
      "Automate complex tasks",
      "Improve decision making",
      "Reduce operational costs",
      "Enhanced efficiency",
      "Scalable automation"
    ],
    useCases: [
      "Business process automation",
      "Customer service",
      "Supply chain management",
      "Financial trading",
      "Research automation"
    ],
    targetAudience: [
      "AI engineers",
      "Business analysts",
      "Process automation specialists",
      "Technology consultants",
      "Business owners"
    ],
    tags: ["AI", "Autonomous Agents", "Multi-Agent Systems", "Automation", "Machine Learning"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "federated-learning-platform",
    title: "Federated Learning & Privacy-Preserving AI Platform",
    description: "Advanced federated learning platform that enables AI model training across distributed data sources while preserving privacy.",
    category: "AI & Machine Learning",
    subcategory: "Privacy-Preserving AI",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Federated learning algorithms",
      "Privacy-preserving training",
      "Distributed model training",
      "Secure aggregation",
      "Differential privacy",
      "Model synchronization",
      "Performance monitoring",
      "Compliance tools"
    ],
    benefits: [
      "Preserve data privacy",
      "Collaborative AI training",
      "Regulatory compliance",
      "Enhanced security",
      "Distributed learning"
    ],
    useCases: [
      "Healthcare organizations",
      "Financial institutions",
      "Research collaborations",
      "Cross-border projects",
      "Privacy-sensitive applications"
    ],
    targetAudience: [
      "AI researchers",
      "Data scientists",
      "Privacy officers",
      "Compliance managers",
      "Technology leaders"
    ],
    tags: ["Federated Learning", "Privacy-Preserving AI", "Machine Learning", "Security", "Compliance"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,500 - $7,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Blockchain & Web3 Services
  {
    id: "decentralized-finance-platform",
    title: "Decentralized Finance (DeFi) Platform & Smart Contract Suite",
    description: "Comprehensive DeFi platform with advanced smart contracts, yield farming, and decentralized trading capabilities.",
    category: "Blockchain & Web3",
    subcategory: "DeFi",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart contract development",
      "DeFi protocols",
      "Yield farming strategies",
      "Decentralized trading",
      "Liquidity management",
      "Risk assessment",
      "Compliance tools",
      "Analytics dashboard"
    ],
    benefits: [
      "Access to DeFi opportunities",
      "Automated trading strategies",
      "Enhanced liquidity",
      "Reduced intermediaries",
      "Transparent operations"
    ],
    useCases: [
      "Cryptocurrency exchanges",
      "Investment firms",
      "Trading platforms",
      "Financial institutions",
      "Individual investors"
    ],
    targetAudience: [
      "DeFi developers",
      "Traders",
      "Investment managers",
      "Financial advisors",
      "Technology enthusiasts"
    ],
    tags: ["DeFi", "Blockchain", "Smart Contracts", "Cryptocurrency", "Trading"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "nft-marketplace-platform",
    title: "Advanced NFT Marketplace & Digital Asset Management Platform",
    description: "Feature-rich NFT marketplace with advanced trading, analytics, and digital asset management capabilities.",
    category: "Blockchain & Web3",
    subcategory: "NFTs & Digital Assets",
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "NFT creation & minting",
      "Advanced trading features",
      "Marketplace analytics",
      "Digital asset management",
      "Royalty distribution",
      "Multi-chain support",
      "Mobile applications",
      "API integration"
    ],
    benefits: [
      "Monetize digital assets",
      "Enhanced trading experience",
      "Comprehensive analytics",
      "Multi-chain support",
      "Automated royalty distribution"
    ],
    useCases: [
      "Art galleries",
      "Gaming companies",
      "Content creators",
      "Brands & marketers",
      "Collectors"
    ],
    targetAudience: [
      "NFT creators",
      "Digital artists",
      "Gaming companies",
      "Brand managers",
      "Collectors"
    ],
    tags: ["NFTs", "Blockchain", "Digital Assets", "Marketplace", "Trading"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,500 - $4,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Internet of Things Services
  {
    id: "iot-edge-ai-platform",
    title: "IoT Edge AI & Real-Time Analytics Platform",
    description: "Advanced IoT platform that combines edge computing with AI for real-time data processing and intelligent decision making.",
    category: "Internet of Things",
    subcategory: "Edge AI",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge AI processing",
      "Real-time analytics",
      "IoT device management",
      "Predictive maintenance",
      "Anomaly detection",
      "Data visualization",
      "API integration",
      "Scalable deployment"
    ],
    benefits: [
      "Real-time processing",
      "Reduced latency",
      "Lower bandwidth costs",
      "Enhanced intelligence",
      "Scalable architecture"
    ],
    useCases: [
      "Industrial IoT",
      "Smart cities",
      "Autonomous vehicles",
      "Healthcare monitoring",
      "Environmental sensing"
    ],
    targetAudience: [
      "IoT engineers",
      "Data scientists",
      "System architects",
      "Technology consultants",
      "Business analysts"
    ],
    tags: ["IoT", "Edge AI", "Real-time Analytics", "Machine Learning", "Edge Computing"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,200 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Augmented Reality & Virtual Reality
  {
    id: "ar-vr-enterprise-platform",
    title: "Enterprise AR/VR Platform & Immersive Experience Solutions",
    description: "Comprehensive AR/VR platform for enterprise applications including training, visualization, and remote collaboration.",
    category: "Extended Reality",
    subcategory: "AR/VR Solutions",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AR/VR content creation",
      "Immersive experiences",
      "Remote collaboration",
      "Training simulations",
      "3D visualization",
      "Multi-user support",
      "Analytics & insights",
      "Integration APIs"
    ],
    benefits: [
      "Enhanced training effectiveness",
      "Improved collaboration",
      "Cost-effective visualization",
      "Remote work capabilities",
      "Immersive experiences"
    ],
    useCases: [
      "Employee training",
      "Product design",
      "Remote collaboration",
      "Customer experiences",
      "Educational content"
    ],
    targetAudience: [
      "Training managers",
      "Product designers",
      "HR professionals",
      "Marketing teams",
      "Educational institutions"
    ],
    tags: ["AR/VR", "Immersive Technology", "Training", "Collaboration", "Visualization"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Biotechnology & Healthcare
  {
    id: "ai-powered-drug-discovery",
    title: "AI-Powered Drug Discovery & Pharmaceutical Research Platform",
    description: "Intelligent platform that uses AI and machine learning to accelerate drug discovery and pharmaceutical research processes.",
    category: "Biotechnology",
    subcategory: "Drug Discovery",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI drug discovery",
      "Molecular modeling",
      "Target identification",
      "Drug repurposing",
      "Clinical trial optimization",
      "Data analytics",
      "Collaboration tools",
      "Compliance management"
    ],
    benefits: [
      "Accelerate drug discovery",
      "Reduce research costs",
      "Improve success rates",
      "Enhanced collaboration",
      "Data-driven insights"
    ],
    useCases: [
      "Pharmaceutical companies",
      "Biotech firms",
      "Research institutions",
      "Academic labs",
      "Drug developers"
    ],
    targetAudience: [
      "Research scientists",
      "Pharmaceutical researchers",
      "Biotech researchers",
      "Academic researchers",
      "Drug developers"
    ],
    tags: ["AI", "Drug Discovery", "Biotechnology", "Pharmaceutical Research", "Machine Learning"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Renewable Energy & Sustainability
  {
    id: "smart-grid-optimization",
    title: "Smart Grid Optimization & Renewable Energy Management Platform",
    description: "Intelligent platform for optimizing smart grid operations, managing renewable energy sources, and improving energy efficiency.",
    category: "Renewable Energy",
    subcategory: "Smart Grid",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart grid optimization",
      "Renewable energy management",
      "Demand response",
      "Energy storage optimization",
      "Grid stability",
      "Predictive analytics",
      "Real-time monitoring",
      "Compliance reporting"
    ],
    benefits: [
      "Improve grid efficiency",
      "Reduce energy costs",
      "Enhanced sustainability",
      "Grid stability",
      "Renewable integration"
    ],
    useCases: [
      "Utility companies",
      "Energy providers",
      "Smart cities",
      "Industrial facilities",
      "Government agencies"
    ],
    targetAudience: [
      "Energy managers",
      "Grid operators",
      "Utility managers",
      "Sustainability officers",
      "Infrastructure managers"
    ],
    tags: ["Smart Grid", "Renewable Energy", "Energy Management", "Sustainability", "Grid Optimization"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Space Technology
  {
    id: "satellite-data-analytics",
    title: "Satellite Data Analytics & Earth Observation Platform",
    description: "Advanced platform for analyzing satellite data, monitoring environmental changes, and providing insights for various industries.",
    category: "Space Technology",
    subcategory: "Satellite Analytics",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite data processing",
      "Earth observation analytics",
      "Environmental monitoring",
      "Climate change tracking",
      "Agricultural insights",
      "Urban development analysis",
      "Disaster monitoring",
      "Data visualization"
    ],
    benefits: [
      "Global monitoring capabilities",
      "Environmental insights",
      "Agricultural optimization",
      "Urban planning support",
      "Disaster response"
    ],
    useCases: [
      "Environmental agencies",
      "Agricultural companies",
      "Urban planners",
      "Insurance companies",
      "Research institutions"
    ],
    targetAudience: [
      "Environmental scientists",
      "Agricultural experts",
      "Urban planners",
      "Research analysts",
      "Policy makers"
    ],
    tags: ["Satellite Data", "Earth Observation", "Environmental Monitoring", "Space Technology", "Analytics"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $9,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const EMERGING_TECH_CATEGORIES_2025 = [
  "Quantum Computing",
  "AI & Machine Learning",
  "Blockchain & Web3",
  "Internet of Things",
  "Extended Reality",
  "Biotechnology",
  "Renewable Energy",
  "Space Technology"
];