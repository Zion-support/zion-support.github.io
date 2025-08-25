export interface EmergingTechService {
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
  websiteUrl: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const EMERGING_TECH_SERVICES: EmergingTechService[] = [
  // AI-Powered Edge Computing Platform
  {
    id: "ai-edge-computing-platform",
    title: "AI-Powered Edge Computing Platform",
    description: "Revolutionary edge computing platform that brings AI processing closer to data sources for real-time decision making and reduced latency.",
    category: "Edge Computing",
    subcategory: "AI Processing",
    price: 5500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge AI processing",
      "Real-time analytics",
      "Low latency computing",
      "Distributed intelligence",
      "Edge device management",
      "Data synchronization",
      "API gateway",
      "Security protocols"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs",
      "Real-time decision making",
      "Improved privacy",
      "Scalable edge deployment"
    ],
    useCases: [
      "IoT applications",
      "Autonomous vehicles",
      "Smart cities",
      "Industrial automation",
      "Healthcare monitoring"
    ],
    targetAudience: [
      "IoT companies",
      "Manufacturing firms",
      "Smart city developers",
      "Healthcare providers",
      "Automotive industry"
    ],
    tags: ["Edge Computing", "AI", "IoT", "Real-time", "Low Latency"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$5,500 - $18,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-edge-computing"
  },

  // Quantum Internet Infrastructure
  {
    id: "quantum-internet-infrastructure",
    title: "Quantum Internet Infrastructure Platform",
    description: "Next-generation quantum internet infrastructure that enables ultra-secure, high-speed quantum communication networks.",
    category: "Quantum Technology",
    subcategory: "Quantum Internet",
    price: 35000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum network nodes",
      "Quantum repeaters",
      "Quantum memory systems",
      "Quantum routing protocols",
      "Network management",
      "Security monitoring",
      "API integration",
      "Compliance tools"
    ],
    benefits: [
      "Unhackable communication",
      "Quantum advantage",
      "Future-proof infrastructure",
      "Regulatory compliance",
      "Competitive edge"
    ],
    useCases: [
      "Government networks",
      "Financial systems",
      "Healthcare data",
      "Military communications",
      "Research institutions"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Defense contractors",
      "Research organizations",
      "Critical infrastructure"
    ],
    tags: ["Quantum Internet", "Infrastructure", "Security", "Networking", "Government"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$35,000 - $100,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-internet-infrastructure"
  },

  // Neuromorphic AI Chips
  {
    id: "neuromorphic-ai-chips",
    title: "Neuromorphic AI Chip Design Platform",
    description: "Advanced platform for designing and manufacturing brain-inspired neuromorphic AI chips that mimic neural networks for ultra-efficient processing.",
    category: "Hardware AI",
    subcategory: "Chip Design",
    price: 45000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Neuromorphic architecture design",
      "Chip fabrication support",
      "Power optimization",
      "Performance testing",
      "Integration tools",
      "Development SDK",
      "Technical support",
      "Custom solutions"
    ],
    benefits: [
      "100x more energy efficient",
      "Real-time learning",
      "Superior pattern recognition",
      "Future-proof technology",
      "Competitive advantage"
    ],
    useCases: [
      "Edge AI devices",
      "IoT applications",
      "Autonomous systems",
      "Robotics",
      "Medical devices"
    ],
    targetAudience: [
      "Semiconductor companies",
      "IoT manufacturers",
      "Robotics companies",
      "Medical device makers",
      "Research institutions"
    ],
    tags: ["Neuromorphic", "AI Chips", "Hardware", "Energy Efficient", "IoT"],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$45,000 - $150,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/neuromorphic-ai-chips"
  },

  // Synthetic Biology Platform
  {
    id: "synthetic-biology-platform",
    title: "Synthetic Biology Design Platform",
    description: "Revolutionary platform for designing, simulating, and optimizing synthetic biological systems using AI and computational biology.",
    category: "Biotechnology",
    subcategory: "Synthetic Biology",
    price: 28000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "DNA sequence design",
      "Protein engineering",
      "Metabolic pathway design",
      "Biological simulation",
      "Optimization algorithms",
      "Compliance tools",
      "API integration",
      "Expert consultation"
    ],
    benefits: [
      "Accelerate bioengineering",
      "Reduce development costs",
      "Improve success rates",
      "Regulatory compliance",
      "Innovation leadership"
    ],
    useCases: [
      "Pharmaceutical development",
      "Agricultural biotechnology",
      "Industrial enzymes",
      "Biofuels",
      "Medical therapeutics"
    ],
    targetAudience: [
      "Biotech companies",
      "Pharmaceutical firms",
      "Agricultural companies",
      "Research institutions",
      "Government agencies"
    ],
    tags: ["Synthetic Biology", "Biotechnology", "AI", "DNA Design", "Bioengineering"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$28,000 - $80,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/synthetic-biology"
  },

  // Quantum Sensing Platform
  {
    id: "quantum-sensing-platform",
    title: "Quantum Sensing and Measurement Platform",
    description: "Advanced quantum sensing platform that provides unprecedented precision in measurement and detection across various applications.",
    category: "Quantum Technology",
    subcategory: "Quantum Sensing",
    price: 18000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum sensors",
      "Ultra-precise measurement",
      "Quantum imaging",
      "Sensing algorithms",
      "Data processing",
      "Integration APIs",
      "Calibration tools",
      "Performance monitoring"
    ],
    benefits: [
      "1000x more precise measurements",
      "Quantum advantage in sensing",
      "New detection capabilities",
      "Competitive edge",
      "Future-proof technology"
    ],
    useCases: [
      "Medical imaging",
      "Environmental monitoring",
      "Security detection",
      "Scientific research",
      "Industrial inspection"
    ],
    targetAudience: [
      "Medical device companies",
      "Environmental firms",
      "Security companies",
      "Research institutions",
      "Manufacturing companies"
    ],
    tags: ["Quantum Sensing", "Measurement", "Precision", "Detection", "Imaging"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$18,000 - $50,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-sensing"
  },

  // AI-Powered Space Technology
  {
    id: "ai-space-technology",
    title: "AI-Powered Space Technology Platform",
    description: "Innovative platform that combines artificial intelligence with space technology for satellite operations, space exploration, and Earth observation.",
    category: "Space Technology",
    subcategory: "AI Integration",
    price: 42000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite AI operations",
      "Space data analytics",
      "Autonomous navigation",
      "Earth observation AI",
      "Space debris tracking",
      "Mission planning",
      "API integration",
      "Real-time monitoring"
    ],
    benefits: [
      "Autonomous space operations",
      "Real-time space analytics",
      "Improved mission success",
      "Cost reduction",
      "Innovation leadership"
    ],
    useCases: [
      "Satellite operations",
      "Space exploration",
      "Earth observation",
      "Space debris management",
      "Planetary research"
    ],
    targetAudience: [
      "Space agencies",
      "Satellite companies",
      "Aerospace firms",
      "Research institutions",
      "Government agencies"
    ],
    tags: ["Space Technology", "AI", "Satellites", "Space Exploration", "Earth Observation"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$42,000 - $120,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-space-technology"
  },

  // Quantum Machine Learning Hardware
  {
    id: "quantum-ml-hardware",
    title: "Quantum Machine Learning Hardware Platform",
    description: "Revolutionary hardware platform that combines quantum computing with machine learning for unprecedented computational power.",
    category: "Quantum Computing",
    subcategory: "Hardware",
    price: 65000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum processors",
      "Quantum memory systems",
      "Quantum error correction",
      "ML acceleration",
      "Hardware optimization",
      "Performance monitoring",
      "Integration support",
      "Custom solutions"
    ],
    benefits: [
      "1000x faster ML training",
      "Quantum advantage",
      "Breakthrough capabilities",
      "Future-proof investment",
      "Competitive edge"
    ],
    useCases: [
      "AI research",
      "Drug discovery",
      "Financial modeling",
      "Climate simulation",
      "Cryptography"
    ],
    targetAudience: [
      "Research institutions",
      "Technology companies",
      "Financial institutions",
      "Government agencies",
      "Pharmaceutical companies"
    ],
    tags: ["Quantum Computing", "Machine Learning", "Hardware", "AI", "Research"],
    estimatedDelivery: "20-24 weeks",
    supportLevel: "enterprise",
    marketPrice: "$65,000 - $200,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-ml-hardware"
  },

  // Autonomous Robotics Platform
  {
    id: "autonomous-robotics-platform",
    title: "Autonomous Robotics Development Platform",
    description: "Advanced platform for developing, testing, and deploying autonomous robots with AI-powered decision making and learning capabilities.",
    category: "Robotics",
    subcategory: "Autonomous Systems",
    price: 8500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Robot development tools",
      "AI decision making",
      "Autonomous navigation",
      "Learning algorithms",
      "Simulation environment",
      "Hardware integration",
      "API framework",
      "Deployment tools"
    ],
    benefits: [
      "Accelerate robot development",
      "Reduce development costs",
      "Improve robot intelligence",
      "Scalable deployment",
      "Competitive advantage"
    ],
    useCases: [
      "Manufacturing automation",
      "Service robots",
      "Autonomous vehicles",
      "Healthcare robotics",
      "Agricultural automation"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Robotics startups",
      "Healthcare providers",
      "Agricultural firms",
      "Research institutions"
    ],
    tags: ["Robotics", "Autonomous Systems", "AI", "Automation", "Manufacturing"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$8,500 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/autonomous-robotics"
  },

  // Quantum Cryptography Platform
  {
    id: "quantum-cryptography-platform",
    title: "Quantum Cryptography and Security Platform",
    description: "Next-generation security platform that uses quantum mechanics to provide unbreakable encryption and secure communication.",
    category: "Cybersecurity",
    subcategory: "Quantum Security",
    price: 25000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Quantum random number generation",
      "Post-quantum cryptography",
      "Secure communication",
      "Key management",
      "Compliance tools",
      "API security",
      "Integration support"
    ],
    benefits: [
      "Unbreakable encryption",
      "Future-proof security",
      "Quantum advantage",
      "Regulatory compliance",
      "Competitive edge"
    ],
    useCases: [
      "Government communications",
      "Financial transactions",
      "Healthcare data",
      "Military applications",
      "Critical infrastructure"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Healthcare providers",
      "Defense contractors",
      "Critical infrastructure"
    ],
    tags: ["Quantum Cryptography", "Cybersecurity", "Encryption", "Security", "Government"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$25,000 - $80,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-cryptography"
  },

  // AI-Powered Climate Technology
  {
    id: "ai-climate-technology",
    title: "AI-Powered Climate Technology Platform",
    description: "Innovative platform that uses artificial intelligence to address climate change through monitoring, prediction, and mitigation strategies.",
    category: "Climate Technology",
    subcategory: "AI Solutions",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Climate monitoring",
      "Predictive modeling",
      "Carbon tracking",
      "Sustainability analytics",
      "Policy recommendations",
      "Impact assessment",
      "API integration",
      "Reporting tools"
    ],
    benefits: [
      "Accurate climate predictions",
      "Effective mitigation strategies",
      "Regulatory compliance",
      "Sustainability leadership",
      "Cost savings"
    ],
    useCases: [
      "Climate research",
      "Policy making",
      "Corporate sustainability",
      "Environmental monitoring",
      "Disaster preparedness"
    ],
    targetAudience: [
      "Government agencies",
      "Environmental organizations",
      "Corporations",
      "Research institutions",
      "Policy makers"
    ],
    tags: ["Climate Technology", "AI", "Sustainability", "Environmental", "Monitoring"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$12,000 - $35,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-climate-technology"
  }
];

export const getEmergingTechServiceByCategory = (category: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.category === category);
};

export const getEmergingTechServiceBySubcategory = (subcategory: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.subcategory === subcategory);
};

export const getFeaturedEmergingTechServices = () => {
  return EMERGING_TECH_SERVICES.slice(0, 8);
};

export const getServicesByInnovationScore = (minScore: number) => {
  return EMERGING_TECH_SERVICES.filter(service => service.price >= minScore);
};