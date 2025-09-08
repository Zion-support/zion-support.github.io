import React from 'react';
export interface InnovativeService {

  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'yearly' | 'per-user' | 'per-project';
  features: string[];
  benefits: string[];
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology: string[];
  estimatedDelivery: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
}

export const INNOVATIVE_SERVICES_2025: InnovativeService2025[] = [
  {
    id: 'ai-autonomous-business-manager',
    title: 'AI Autonomous Business Manager',
    description: 'Fully autonomous AI system that manages business operations, makes strategic decisions, and optimizes processes in real-time.',
    category: 'AI & Automation',
    price: 2500,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      '24/7 autonomous business monitoring',
      'Real-time decision making',
      'Process optimization',
      'Financial forecasting',
      'Team performance analytics',
      'Market trend analysis'
    ],
    benefits: [
      'Reduce operational costs by 40%',
      'Improve decision speed by 300%',
      '24/7 business oversight',
      'Data-driven insights',
      'Scalable operations'
    ],
    marketPrice: '$2,500 - $5,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technology: ['GPT-4', 'Machine Learning', 'RPA', 'Business Intelligence'],
    estimatedDelivery: '2-4 weeks',
    supportLevel: 'premium'
  },
  {
    id: 'quantum-neural-network-platform',
    title: 'Quantum Neural Network Platform',
    description: 'Next-generation quantum computing platform with neural network capabilities for complex problem solving and optimization.',
    category: 'Quantum Computing',
    price: 15000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Quantum neural processing',
      'Complex optimization algorithms',
      'Real-time quantum simulations',
      'Hybrid classical-quantum computing',
      'Advanced cryptography',
      'Financial modeling'
    ],
    benefits: [
      'Solve previously impossible problems',
      '1000x faster computation',
      'Unbreakable encryption',
      'Advanced AI capabilities',
      'Future-proof technology'
    ],
    marketPrice: '$15,000 - $25,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technology: ['Quantum Computing', 'Neural Networks', 'Quantum Algorithms', 'AI'],
    estimatedDelivery: '6-8 weeks',
    supportLevel: 'enterprise'
  },
  {
    id: 'blockchain-defi-solutions',
    title: 'Blockchain DeFi Solutions',
    description: 'Comprehensive blockchain and DeFi platform for financial services, smart contracts, and decentralized applications.',
    category: 'Blockchain & DeFi',
    price: 8000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Smart contract development',
      'DeFi protocol integration',
      'Cross-chain interoperability',
      'Security auditing',
      'Token economics design',
      'Governance systems'
    ],
    benefits: [
      'Reduce transaction costs by 90%',
      'Increase transparency',
      'Global accessibility',
      'Automated compliance',
      'Innovative financial products'
    ],
    marketPrice: '$8,000 - $15,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technology: ['Ethereum', 'Solana', 'Smart Contracts', 'DeFi Protocols'],
    estimatedDelivery: '4-6 weeks',
    supportLevel: 'premium'
  },
  {
    id: 'iot-data-analytics-platform',
    title: 'IoT Data Analytics Platform',
    description: 'Advanced IoT platform with real-time data analytics, predictive maintenance, and intelligent automation.',
    category: 'IoT & Analytics',
    price: 5000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Real-time IoT monitoring',
      'Predictive analytics',
      'Machine learning insights',
      'Automated alerts',
      'Data visualization',
      'API integration'
    ],
    benefits: [
      'Reduce downtime by 60%',
      'Predictive maintenance',
      'Real-time insights',
      'Cost optimization',
      'Scalable infrastructure'
    ],
    marketPrice: '$5,000 - $10,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technology: ['IoT', 'Machine Learning', 'Big Data', 'Cloud Computing'],
    estimatedDelivery: '3-5 weeks',
    supportLevel: 'standard'
  },
  {
    id: 'ai-cybersecurity-automation',
    title: 'AI Cybersecurity Automation',
    description: 'Intelligent cybersecurity platform that automatically detects, prevents, and responds to threats using AI.',
    category: 'Cybersecurity',
    price: 12000,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'AI threat detection',
      'Automated incident response',
      'Behavioral analysis',
      'Zero-day protection',
      'Compliance monitoring',
      'Security orchestration'
    ],
    benefits: [
      'Reduce security incidents by 80%',
      '24/7 threat monitoring',
      'Automated response',
      'Compliance automation',
      'Cost-effective security'
    ],
    marketPrice: '$12,000 - $20,000/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ["Python", "NLP", "React", "Node.js", "MongoDB", "Redis"],
      integrations: ["Zendesk", "Intercom", "Freshdesk", "Help Scout", "Slack"],
      apiEndpoints: 80,
      uptime: "99.9%",
      security: ["SOC 2", "GDPR", "End-to-end encryption"]
    },
    competitors: ["Intercom", "Zendesk", "Freshdesk", "Help Scout"],
    marketSize: "$18.7 billion by 2025"
  },

  // AI Data Analytics & Business Intelligence
  {
    id: "ai-data-analytics-bi",
    title: "AI Data Analytics & Business Intelligence Platform",
    description: "Advanced business intelligence platform that uses AI to transform raw data into actionable insights, predictive analytics, and automated reporting for data-driven decision making.",
    category: "AI & Analytics",
    subcategory: "Business Intelligence",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Data Visualization",
      "Automated Reporting",
      "Machine Learning Models",
      "Data Integration",
      "Natural Language Queries",
      "Advanced Analytics",
      "Data Governance",
      "Mobile Access"
    ],
    benefits: [
      "Uncover hidden insights",
      "Make data-driven decisions",
      "Predict future trends",
      "Automate reporting processes",
      "Real-time business monitoring"
    ],
    useCases: [
      "Business intelligence",
      "Data analysis",
      "Performance monitoring",
      "Strategic planning",
      "Operational optimization"
    ],
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives",
      "Marketing teams",
      "Operations teams"
    ],
    tags: ["AI", "Analytics", "Business Intelligence", "Data Science", "Reporting"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,999 - $5,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Apache Spark"],
      integrations: ["Salesforce", "HubSpot", "QuickBooks", "Google Analytics", "Shopify"],
      apiEndpoints: 150,
      uptime: "99.9%",
      security: ["SOC 2", "GDPR", "HIPAA", "End-to-end encryption"]
    },
    competitors: ["Tableau", "Power BI", "Looker", "Qlik"],
    marketSize: "$29.9 billion by 2025"
  },

  // Quantum Computing Solutions
  {
    id: "quantum-computing-solutions",
    title: "Quantum Computing Solutions Platform",
    description: "Revolutionary quantum computing platform that provides access to quantum processing power for complex computational problems, cryptography, and scientific research applications.",
    category: "Quantum Computing",
    subcategory: "Computing Platform",
    price: 9999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum Processing Units",
      "Quantum Algorithms",
      "Cryptography Solutions",
      "Scientific Computing",
      "Machine Learning",
      "Optimization Problems",
      "Quantum Simulation",
      "API Access",
      "Development Tools",
      "Expert Support"
    ],
    benefits: [
      "Exponential speedup for specific algorithms",
      "Unprecedented computational power",
      "Breakthrough capabilities in cryptography",
      "Revolutionary AI and machine learning",
      "Advanced scientific research capabilities"
    ],
    useCases: [
      "Drug discovery",
      "Financial modeling",
      "Climate research",
      "Logistics optimization",
      "Cryptography"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial institutions",
      "Government agencies",
      "Technology companies"
    ],
    tags: ["Quantum Computing", "Cryptography", "Scientific Computing", "AI", "Research"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$9,999 - $25,000/month",
    roi: "500-1000%",
    innovationLevel: "Revolutionary",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Qiskit", "Cirq", "Q#", "Python", "C++", "Quantum Hardware"],
      integrations: ["IBM Quantum", "Google Quantum", "Microsoft Azure", "AWS Braket"],
      apiEndpoints: 50,
      uptime: "99.5%",
      security: ["Quantum-resistant cryptography", "End-to-end encryption", "Zero-trust architecture"]
    },
    competitors: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum", "D-Wave"],
    marketSize: "$1.8 billion by 2025"
  },

  // IoT Edge Computing Platform
  {
    id: "iot-edge-computing",
    title: "IoT Edge Computing Platform",
    description: "Advanced IoT edge computing platform that processes data at the edge, reduces latency, and provides real-time insights for connected devices and industrial applications.",
    category: "IoT & Edge Computing",
    subcategory: "Edge Platform",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge Data Processing",
      "Real-time Analytics",
      "Smartphone Management",
      "Security Framework",
      "Scalable Infrastructure",
      "Low Latency Processing",
      "Data Synchronization",
      "Remote Monitoring",
      "Predictive Maintenance",
      "API Gateway"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs",
      "Real-time decision making",
      "Enhanced security",
      "Scalable IoT deployments"
    ],
    useCases: [
      "Industrial IoT",
      "Smart cities",
      "Connected vehicles",
      "Healthcare monitoring",
      "Retail analytics"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Smart city planners",
      "Automotive companies",
      "Healthcare providers",
      "Retail businesses"
    ],
    tags: ["IoT", "Edge Computing", "Real-time Analytics", "Smartphone Management", "Security"],
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $6,999/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "Docker", "Kubernetes", "Node.js", "PostgreSQL", "Redis"],
      integrations: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "IBM Watson IoT"],
      apiEndpoints: 200,
      uptime: "99.9%",
      security: ["SOC 2", "ISO 27001", "End-to-end encryption", "Zero-trust architecture"]
    },
    competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "IBM Watson IoT"],
    marketSize: "$43.4 billion by 2025"
  },

  // Blockchain & Web3 Solutions
  {
    id: "blockchain-web3-solutions",
    title: "Blockchain & Web3 Solutions Platform",
    description: "Comprehensive blockchain and Web3 platform that enables decentralized applications, smart contracts, and digital asset management for the next generation of the internet.",
    category: "Blockchain & Web3",
    subcategory: "Development Platform",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart Contract Development",
      "DeFi Solutions",
      "NFT Marketplace",
      "Digital Asset Management",
      "Cross-chain Interoperability",
      "Security Auditing",
      "API Development",
      "Wallet Integration",
      "Governance Tools",
      "Analytics Dashboard"
    ],
    benefits: [
      "Decentralized applications",
      "Enhanced security and transparency",
      "Reduced transaction costs",
      "Global accessibility",
      "Innovative business models"
    ],
    useCases: [
      "DeFi applications",
      "NFT marketplaces",
      "Supply chain tracking",
      "Digital identity",
      "Decentralized finance"
    ],
    targetAudience: [
      "Developers",
      "Startups",
      "Financial institutions",
      "Gaming companies",
      "Art marketplaces"
    ],
    tags: ["Blockchain", "Web3", "DeFi", "NFTs", "Smart Contracts"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $9,999/month",
    roi: "300-600%",
    innovationLevel: "Revolutionary",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Solidity", "Rust", "JavaScript", "Python", "Ethereum", "Polkadot"],
      integrations: ["MetaMask", "WalletConnect", "OpenSea", "Uniswap", "Chainlink"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["Smart contract auditing", "Multi-signature wallets", "Zero-knowledge proofs"]
    },
    competitors: ["ConsenSys", "Alchemy", "Infura", "QuickNode"],
    marketSize: "$19.9 billion by 2025"
  },

  // Sustainable Technology Solutions
  {
    id: "sustainable-technology",
    title: "Sustainable Technology Solutions Platform",
    description: "Innovative platform that combines technology and sustainability to help businesses reduce their environmental impact, optimize resource usage, and achieve sustainability goals.",
    category: "Sustainability & Technology",
    subcategory: "Environmental Solutions",
    price: 1799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Carbon Footprint Tracking",
      "Energy Optimization",
      "Waste Management",
      "Sustainable Supply Chain",
      "ESG Reporting",
      "Green Technology Integration",
      "Sustainability Analytics",
      "Compliance Monitoring",
      "Resource Optimization",
      "Impact Measurement"
    ],
    benefits: [
      "Reduce environmental impact",
      "Lower operational costs",
      "Meet sustainability goals",
      "Enhance brand reputation",
      "Compliance with regulations"
    ],
    useCases: [
      "Corporate sustainability",
      "Energy management",
      "Supply chain optimization",
      "ESG compliance",
      "Green building management"
    ],
    targetAudience: [
      "Sustainability officers",
      "Facility managers",
      "Supply chain managers",
      "Corporate executives",
      "Government agencies"
    ],
    tags: ["Sustainability", "ESG", "Green Technology", "Carbon Tracking", "Energy Management"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "professional",
    marketPrice: "$1,799 - $4,999/month",
    roi: "200-400%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "IoT", "Machine Learning", "React", "Node.js", "PostgreSQL"],
      integrations: ["Energy management systems", "IoT sensors", "ERP systems", "Sustainability platforms"],
      apiEndpoints: 120,
      uptime: "99.9%",
      security: ["SOC 2", "ISO 14001", "End-to-end encryption"]
    },
    competitors: ["Watershed", "Normative", "Persefoni", "Sweep"],
    marketSize: "$8.5 billion by 2025"
  }
];

// Helper functions
export const getServicesByCategory = (category: string): InnovativeService2025[] => {
  return INNOVATIVE_SERVICES_2025.filter(service => service.category === category);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): InnovativeService2025[] => {
  return INNOVATIVE_SERVICES_2025.filter(service => service.price >= minPrice && service.price <= maxPrice);
};

export const getTopRatedServices = (limit: number = 5): InnovativeService2025[] => {
  return INNOVATIVE_SERVICES_2025
    .sort((a, b) => b??.rating - a.rating)
    .slice(0, limit);
};

export const getServicesByAIScore = (minScore: number): InnovativeService2025[] => {
  return INNOVATIVE_SERVICES_2025.filter(service => service?.aiScore >= minScore);
};