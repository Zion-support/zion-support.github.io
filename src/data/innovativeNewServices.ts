export interface InnovativeNewService {
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
}

export const INNOVATIVE_NEW_SERVICES: InnovativeNewService[] = [
  // Quantum Computing & Advanced AI Services
  {
    id: "quantum-ai-orchestrator",
    title: "Quantum AI Orchestrator Platform",
    description: "Revolutionary platform that orchestrates quantum computing resources with AI to solve complex optimization problems, drug discovery, and financial modeling.",
    category: "Quantum Computing & AI",
    subcategory: "Quantum Orchestration",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum resource orchestration",
      "AI-powered problem decomposition",
      "Hybrid classical-quantum workflows",
      "Real-time quantum simulation",
      "Multi-quantum processor support",
      "Advanced optimization algorithms",
      "Performance benchmarking",
      "Custom algorithm development",
      "Enterprise security",
      "24/7 quantum access"
    ],
    benefits: [
      "Solve problems 1000x faster than classical computers",
      "Access to cutting-edge quantum technology",
      "Competitive advantage in research and development",
      "Future-proof technology investment",
      "Expert quantum computing support"
    ],
    useCases: [
      "Drug discovery and molecular modeling",
      "Financial portfolio optimization",
      "Logistics and supply chain optimization",
      "Cryptographic security analysis",
      "Climate modeling and prediction"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services firms",
      "Government agencies",
      "Technology companies"
    ],
    tags: ["Quantum Computing", "AI", "Optimization", "Research", "Enterprise"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,999 - $15,000/month",
    roi: "500-1000%",
    innovationLevel: "Very High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Autonomous Systems
  {
    id: "ai-autonomous-fleet-management",
    title: "AI Autonomous Fleet Management System",
    description: "Next-generation autonomous fleet management platform that uses AI to coordinate self-driving vehicles, optimize routes, and ensure safety compliance.",
    category: "AI & Autonomous Systems",
    subcategory: "Fleet Management",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous vehicle coordination",
      "AI-powered route optimization",
      "Real-time safety monitoring",
      "Predictive maintenance",
      "Compliance management",
      "Fleet analytics dashboard",
      "Integration with existing systems",
      "Scalable architecture",
      "Advanced security protocols",
      "24/7 monitoring support"
    ],
    benefits: [
      "Reduce operational costs by 40-60%",
      "Improve safety and compliance",
      "Optimize fleet utilization",
      "Real-time decision making",
      "Scalable for any fleet size"
    ],
    useCases: [
      "Logistics and transportation",
      "Ride-sharing services",
      "Delivery companies",
      "Public transportation",
      "Corporate fleets"
    ],
    targetAudience: [
      "Transportation companies",
      "Logistics providers",
      "Ride-sharing platforms",
      "Delivery services",
      "Corporate fleet managers"
    ],
    tags: ["AI", "Autonomous Systems", "Fleet Management", "Transportation", "Safety"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $8,000/month",
    roi: "300-500%",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain & Web3 Services
  {
    id: "blockchain-enterprise-orchestrator",
    title: "Blockchain Enterprise Orchestrator",
    description: "Enterprise-grade blockchain orchestration platform that manages multiple blockchain networks, smart contracts, and DeFi protocols for business applications.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Orchestration",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-blockchain management",
      "Smart contract orchestration",
      "DeFi protocol integration",
      "Cross-chain interoperability",
      "Enterprise security features",
      "Regulatory compliance",
      "Real-time monitoring",
      "Custom blockchain deployment",
      "API management",
      "Advanced analytics"
    ],
    benefits: [
      "Reduce blockchain complexity by 70%",
      "Improve transaction efficiency by 50%",
      "Ensure regulatory compliance",
      "Multi-chain flexibility",
      "Enterprise-grade security"
    ],
    useCases: [
      "Supply chain transparency",
      "Digital asset management",
      "Decentralized finance",
      "Identity verification",
      "Smart contract automation"
    ],
    targetAudience: [
      "Financial institutions",
      "Supply chain companies",
      "Technology companies",
      "Government agencies",
      "Consulting firms"
    ],
    tags: ["Blockchain", "Web3", "DeFi", "Smart Contracts", "Enterprise"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$1,999 - $5,999/month",
    roi: "400-600%",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Cybersecurity & Threat Intelligence
  {
    id: "ai-threat-intelligence-platform",
    title: "AI Threat Intelligence Platform",
    description: "Advanced AI-powered threat intelligence platform that provides real-time threat detection, predictive analysis, and automated response for enterprise security.",
    category: "AI & Cybersecurity",
    subcategory: "Threat Intelligence",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered threat detection",
      "Predictive threat analysis",
      "Automated incident response",
      "Threat hunting automation",
      "Vulnerability assessment",
      "Security orchestration",
      "Real-time monitoring",
      "Custom security policies",
      "Integration capabilities",
      "Advanced reporting"
    ],
    benefits: [
      "Detect threats 95% faster",
      "Reduce false positives by 80%",
      "Automate incident response",
      "24/7 security monitoring",
      "Predictive threat prevention"
    ],
    useCases: [
      "Enterprise security operations",
      "Threat hunting",
      "Incident response",
      "Vulnerability management",
      "Security analytics"
    ],
    targetAudience: [
      "Security operations centers",
      "IT security teams",
      "Compliance officers",
      "Security consultants",
      "Enterprise organizations"
    ],
    tags: ["AI", "Cybersecurity", "Threat Intelligence", "Automation", "Security"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,499 - $7,999/month",
    roi: "350-500%",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Healthcare & Medical Research
  {
    id: "ai-medical-research-platform",
    title: "AI Medical Research Platform",
    description: "Revolutionary AI platform that accelerates medical research, drug discovery, and clinical trials through advanced machine learning and data analysis.",
    category: "AI & Healthcare",
    subcategory: "Medical Research",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered drug discovery",
      "Clinical trial optimization",
      "Medical image analysis",
      "Genomic data processing",
      "Predictive diagnostics",
      "Research collaboration tools",
      "Regulatory compliance",
      "Data security",
      "Integration capabilities",
      "Advanced analytics"
    ],
    benefits: [
      "Accelerate drug discovery by 5x",
      "Reduce clinical trial costs by 40%",
      "Improve diagnostic accuracy by 60%",
      "Faster research collaboration",
      "Regulatory compliance automation"
    ],
    useCases: [
      "Pharmaceutical research",
      "Clinical trials",
      "Medical imaging",
      "Genomic research",
      "Drug development"
    ],
    targetAudience: [
      "Pharmaceutical companies",
      "Research institutions",
      "Hospitals",
      "Medical device companies",
      "Biotechnology firms"
    ],
    tags: ["AI", "Healthcare", "Medical Research", "Drug Discovery", "Clinical Trials"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $12,999/month",
    roi: "450-700%",
    innovationLevel: "Very High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Financial Services & Trading
  {
    id: "ai-financial-trading-platform",
    title: "AI Financial Trading Platform",
    description: "Advanced AI-powered financial trading platform that provides algorithmic trading, risk management, and market analysis for institutional investors.",
    category: "AI & Financial Services",
    subcategory: "Algorithmic Trading",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered trading algorithms",
      "Real-time market analysis",
      "Risk management systems",
      "Portfolio optimization",
      "Market prediction models",
      "Compliance monitoring",
      "Multi-asset support",
      "Advanced analytics",
      "API integration",
      "Custom strategies"
    ],
    benefits: [
      "Improve trading performance by 30%",
      "Reduce risk exposure by 50%",
      "Automated trading strategies",
      "Real-time market insights",
      "Regulatory compliance"
    ],
    useCases: [
      "Algorithmic trading",
      "Portfolio management",
      "Risk management",
      "Market analysis",
      "Quantitative research"
    ],
    targetAudience: [
      "Investment firms",
      "Hedge funds",
      "Banks",
      "Asset managers",
      "Trading companies"
    ],
    tags: ["AI", "Financial Services", "Algorithmic Trading", "Risk Management", "Trading"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,999 - $15,000/month",
    roi: "400-600%",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Manufacturing & Industry 4.0
  {
    id: "ai-industry-4-0-platform",
    title: "AI Industry 4.0 Platform",
    description: "Comprehensive AI platform for Industry 4.0 that optimizes manufacturing processes, predictive maintenance, and quality control through intelligent automation.",
    category: "AI & Manufacturing",
    subcategory: "Industry 4.0",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Predictive maintenance",
      "Quality control automation",
      "Production optimization",
      "Supply chain integration",
      "IoT device management",
      "Real-time monitoring",
      "Performance analytics",
      "Custom dashboards",
      "Integration capabilities",
      "Mobile app support"
    ],
    benefits: [
      "Reduce downtime by 40%",
      "Improve product quality by 35%",
      "Optimize production by 50%",
      "Predictive maintenance",
      "Real-time insights"
    ],
    useCases: [
      "Manufacturing optimization",
      "Quality control",
      "Predictive maintenance",
      "Supply chain management",
      "Performance monitoring"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Industrial companies",
      "Operations managers",
      "Plant managers",
      "Industrial engineers"
    ],
    tags: ["AI", "Manufacturing", "Industry 4.0", "IoT", "Automation"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $9,999/month",
    roi: "300-450%",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Energy & Sustainability
  {
    id: "ai-energy-sustainability-platform",
    title: "AI Energy & Sustainability Platform",
    description: "Intelligent platform that optimizes energy consumption, manages renewable energy systems, and provides sustainability analytics for organizations.",
    category: "AI & Energy",
    subcategory: "Sustainability",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Energy consumption optimization",
      "Renewable energy management",
      "Carbon footprint tracking",
      "Sustainability reporting",
      "Predictive analytics",
      "IoT integration",
      "Real-time monitoring",
      "Custom dashboards",
      "Integration capabilities",
      "Mobile app support"
    ],
    benefits: [
      "Reduce energy costs by 30%",
      "Improve sustainability by 50%",
      "Automated optimization",
      "Real-time monitoring",
      "Compliance automation"
    ],
    useCases: [
      "Energy management",
      "Sustainability tracking",
      "Carbon footprint reduction",
      "Renewable energy integration",
      "Compliance reporting"
    ],
    targetAudience: [
      "Energy companies",
      "Manufacturing companies",
      "Commercial buildings",
      "Government agencies",
      "Sustainability consultants"
    ],
    tags: ["AI", "Energy", "Sustainability", "Renewable Energy", "Carbon Tracking"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$1,999 - $5,999/month",
    roi: "250-400%",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Transportation & Smart Cities
  {
    id: "ai-smart-city-platform",
    title: "AI Smart City Platform",
    description: "Comprehensive AI platform for smart cities that manages transportation, utilities, public safety, and urban planning through intelligent automation.",
    category: "AI & Smart Cities",
    subcategory: "Urban Management",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Traffic optimization",
      "Public safety monitoring",
      "Utility management",
      "Urban planning analytics",
      "Environmental monitoring",
      "Citizen engagement",
      "Real-time data processing",
      "Predictive analytics",
      "Integration capabilities",
      "Custom dashboards"
    ],
    benefits: [
      "Reduce traffic congestion by 30%",
      "Improve public safety by 40%",
      "Optimize utility usage by 25%",
      "Better urban planning",
      "Enhanced citizen experience"
    ],
    useCases: [
      "Traffic management",
      "Public safety",
      "Utility optimization",
      "Urban planning",
      "Environmental monitoring"
    ],
    targetAudience: [
      "City governments",
      "Municipalities",
      "Urban planners",
      "Transportation authorities",
      "Utility companies"
    ],
    tags: ["AI", "Smart Cities", "Urban Planning", "Transportation", "Public Safety"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,999 - $15,000/month",
    roi: "350-500%",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Education & Learning Analytics
  {
    id: "ai-education-analytics-platform",
    title: "AI Education Analytics Platform",
    description: "Advanced AI platform that provides comprehensive learning analytics, student performance tracking, and personalized education recommendations.",
    category: "AI & Education",
    subcategory: "Learning Analytics",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Learning analytics",
      "Student performance tracking",
      "Personalized recommendations",
      "Predictive modeling",
      "Content optimization",
      "Assessment automation",
      "Real-time insights",
      "Custom dashboards",
      "Integration capabilities",
      "Mobile app support"
    ],
    benefits: [
      "Improve student outcomes by 50%",
      "Reduce administrative workload by 60%",
      "Personalize learning experiences",
      "Better student engagement",
      "Data-driven insights"
    ],
    useCases: [
      "K-12 education",
      "Higher education",
      "Corporate training",
      "Online learning",
      "Skill development"
    ],
    targetAudience: [
      "Educational institutions",
      "Teachers",
      "Administrators",
      "Corporate trainers",
      "Learning consultants"
    ],
    tags: ["AI", "Education", "Learning Analytics", "Personalization", "Performance Tracking"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$1,499 - $4,999/month",
    roi: "200-350%",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Retail & E-commerce Innovation
  {
    id: "ai-retail-innovation-platform",
    title: "AI Retail Innovation Platform",
    description: "Cutting-edge AI platform that revolutionizes retail through personalized shopping experiences, inventory optimization, and predictive analytics.",
    category: "AI & Retail",
    subcategory: "Innovation",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized shopping experiences",
      "Inventory optimization",
      "Predictive analytics",
      "Customer behavior analysis",
      "Price optimization",
      "Supply chain management",
      "Real-time insights",
      "Custom dashboards",
      "Integration capabilities",
      "Mobile app support"
    ],
    benefits: [
      "Increase sales by 40%",
      "Reduce inventory costs by 30%",
      "Improve customer satisfaction by 50%",
      "Better pricing strategies",
      "Data-driven decisions"
    ],
    useCases: [
      "Retail optimization",
      "E-commerce enhancement",
      "Customer experience",
      "Inventory management",
      "Performance analytics"
    ],
    targetAudience: [
      "Retail companies",
      "E-commerce businesses",
      "Retail consultants",
      "Marketing teams",
      "Business analysts"
    ],
    tags: ["AI", "Retail", "E-commerce", "Personalization", "Innovation"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$2,499 - $7,999/month",
    roi: "300-450%",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Legal & Compliance Automation
  {
    id: "ai-legal-compliance-platform",
    title: "AI Legal & Compliance Platform",
    description: "Advanced AI platform that automates legal document generation, compliance monitoring, and regulatory reporting for enterprises.",
    category: "AI & Legal",
    subcategory: "Compliance Automation",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Legal document automation",
      "Compliance monitoring",
      "Regulatory reporting",
      "Risk assessment",
      "Contract analysis",
      "Legal research automation",
      "Real-time monitoring",
      "Custom workflows",
      "Integration capabilities",
      "Advanced analytics"
    ],
    benefits: [
      "Reduce legal costs by 60%",
      "Improve compliance by 80%",
      "Automate regulatory reporting",
      "Better risk management",
      "Faster document processing"
    ],
    useCases: [
      "Legal document generation",
      "Compliance monitoring",
      "Regulatory reporting",
      "Contract management",
      "Risk assessment"
    ],
    targetAudience: [
      "Law firms",
      "Legal departments",
      "Compliance officers",
      "Risk managers",
      "Legal consultants"
    ],
    tags: ["AI", "Legal", "Compliance", "Automation", "Risk Management"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $12,999/month",
    roi: "400-600%",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Agriculture & Precision Farming
  {
    id: "ai-precision-farming-platform",
    title: "AI Precision Farming Platform",
    description: "Revolutionary AI platform that optimizes agricultural operations through precision farming, crop monitoring, and sustainable agriculture practices.",
    category: "AI & Agriculture",
    subcategory: "Precision Farming",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Precision farming optimization",
      "Crop monitoring",
      "Soil analysis",
      "Weather prediction",
      "Resource optimization",
      "Sustainability tracking",
      "IoT integration",
      "Real-time monitoring",
      "Custom dashboards",
      "Mobile app support"
    ],
    benefits: [
      "Increase crop yields by 40%",
      "Reduce resource waste by 35%",
      "Improve sustainability by 50%",
      "Precision farming",
      "Data-driven decisions"
    ],
    useCases: [
      "Crop management",
      "Soil monitoring",
      "Resource optimization",
      "Weather prediction",
      "Sustainability tracking"
    ],
    targetAudience: [
      "Farmers",
      "Agricultural companies",
      "Agricultural consultants",
      "Research institutions",
      "Government agencies"
    ],
    tags: ["AI", "Agriculture", "Precision Farming", "IoT", "Sustainability"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$1,999 - $5,999/month",
    roi: "250-400%",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Construction & Infrastructure
  {
    id: "ai-construction-optimization",
    title: "AI Construction Optimization Platform",
    description: "Advanced AI platform that optimizes construction projects through intelligent planning, resource management, and performance analytics.",
    category: "AI & Construction",
    subcategory: "Project Optimization",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Project planning optimization",
      "Resource management",
      "Performance analytics",
      "Safety monitoring",
      "Cost tracking",
      "Real-time monitoring",
      "Predictive analytics",
      "Custom dashboards",
      "Integration capabilities",
      "Mobile app support"
    ],
    benefits: [
      "Reduce project delays by 35%",
      "Improve safety by 50%",
      "Optimize resource allocation by 40%",
      "Real-time monitoring",
      "Better project control"
    ],
    useCases: [
      "Project planning",
      "Resource management",
      "Performance monitoring",
      "Safety management",
      "Cost control"
    ],
    targetAudience: [
      "Construction companies",
      "Project managers",
      "Construction consultants",
      "Engineering firms",
      "Government agencies"
    ],
    tags: ["AI", "Construction", "Project Management", "Optimization", "Analytics"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "premium",
    marketPrice: "$2,999 - $8,999/month",
    roi: "300-450%",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Hospitality & Guest Experience
  {
    id: "ai-hospitality-optimization",
    title: "AI Hospitality Optimization Platform",
    description: "Intelligent platform that optimizes hospitality operations through guest experience enhancement, operational efficiency, and revenue optimization.",
    category: "AI & Hospitality",
    subcategory: "Guest Experience",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Guest experience optimization",
      "Operational efficiency",
      "Revenue optimization",
      "Customer analytics",
      "Predictive maintenance",
      "Real-time monitoring",
      "Custom dashboards",
      "Integration capabilities",
      "Mobile app support",
      "Advanced analytics"
    ],
    benefits: [
      "Improve guest satisfaction by 45%",
      "Increase revenue by 35%",
      "Optimize operations by 40%",
      "Better guest experiences",
      "Data-driven decisions"
    ],
    useCases: [
      "Guest management",
      "Operations optimization",
      "Revenue management",
      "Customer analytics",
      "Performance tracking"
    ],
    targetAudience: [
      "Hotels",
      "Restaurants",
      "Hospitality companies",
      "Tourism operators",
      "Event organizers"
    ],
    tags: ["AI", "Hospitality", "Guest Experience", "Optimization", "Analytics"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$1,999 - $5,999/month",
    roi: "250-400%",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const getServicesByCategory = (category: string) => {
  return INNOVATIVE_NEW_SERVICES.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getServicesByPrice = (minPrice: number, maxPrice: number) => {
  return INNOVATIVE_NEW_SERVICES.filter(service => 
    service.price >= minPrice && service.price <= maxPrice
  );
};

export const getServicesByTechnology = (technology: string) => {
  return INNOVATIVE_NEW_SERVICES.filter(service => 
    service.technicalSpecs?.technology.includes(technology)
  );
};

export const getServicesBySupportLevel = (supportLevel: string) => {
  return INNOVATIVE_NEW_SERVICES.filter(service => 
    service.supportLevel === supportLevel
  );
};