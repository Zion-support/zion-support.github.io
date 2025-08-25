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
  // Web3 & DeFi Services
  {
    id: "web3-defi-platform",
    title: "Web3 DeFi Platform & Smart Contract Development",
    description: "Complete Web3 DeFi platform with smart contract development, yield farming, liquidity pools, and cross-chain interoperability for decentralized finance applications.",
    category: "Web3 & DeFi",
    subcategory: "DeFi Platform",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart contract development",
      "Yield farming protocols",
      "Liquidity pool management",
      "Cross-chain bridges",
      "DeFi dashboard",
      "Wallet integration",
      "Security auditing",
      "Governance token systems"
    ],
    benefits: [
      "Launch DeFi protocols in weeks",
      "Generate passive income streams",
      "Access global liquidity pools",
      "Reduce financial intermediaries",
      "Enable financial inclusion"
    ],
    useCases: [
      "DeFi startups",
      "Cryptocurrency exchanges",
      "Investment platforms",
      "Lending protocols",
      "Trading platforms"
    ],
    targetAudience: [
      "DeFi developers",
      "Crypto entrepreneurs",
      "Financial institutions",
      "Investment firms",
      "Blockchain startups"
    ],
    tags: ["Web3", "DeFi", "Blockchain", "Smart Contracts", "Cryptocurrency"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/web3-defi-platform"
  },

  // Metaverse Development Platform
  {
    id: "metaverse-development-platform",
    title: "Metaverse Development & Virtual World Platform",
    description: "Comprehensive metaverse development platform for creating immersive 3D virtual worlds, VR experiences, and digital twin environments for businesses and communities.",
    category: "Metaverse & VR",
    subcategory: "Virtual World Development",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D world builder",
      "VR/AR integration",
      "Avatar customization",
      "Virtual real estate",
      "Social interactions",
      "Digital asset marketplace",
      "Multi-platform support",
      "Analytics and insights"
    ],
    benefits: [
      "Create immersive brand experiences",
      "Engage customers in virtual spaces",
      "Generate new revenue streams",
      "Reduce physical infrastructure costs",
      "Enable global collaboration"
    ],
    useCases: [
      "Virtual events and conferences",
      "Brand experiences",
      "Virtual real estate",
      "Gaming platforms",
      "Educational environments"
    ],
    targetAudience: [
      "Brand managers",
      "Event organizers",
      "Real estate developers",
      "Gaming companies",
      "Educational institutions"
    ],
    tags: ["Metaverse", "VR", "3D", "Virtual Worlds", "Digital Twins"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $7,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/metaverse-development"
  },

  // AI-Powered Autonomous Vehicles Platform
  {
    id: "ai-autonomous-vehicles",
    title: "AI Autonomous Vehicles & Fleet Management Platform",
    description: "Advanced autonomous vehicle platform with AI-powered navigation, fleet optimization, and safety systems for autonomous cars, drones, and industrial vehicles.",
    category: "AI & Autonomous Systems",
    subcategory: "Vehicle Automation",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI navigation systems",
      "Computer vision processing",
      "Predictive maintenance",
      "Fleet optimization",
      "Safety monitoring",
      "Route planning",
      "Real-time analytics",
      "Integration APIs"
    ],
    benefits: [
      "Reduce transportation costs by 40%",
      "Improve safety and reduce accidents",
      "Optimize fleet operations",
      "Enable 24/7 operations",
      "Reduce carbon footprint"
    ],
    useCases: [
      "Autonomous delivery",
      "Industrial automation",
      "Public transportation",
      "Logistics and warehousing",
      "Agricultural automation"
    ],
    targetAudience: [
      "Fleet managers",
      "Transportation companies",
      "Manufacturing companies",
      "Logistics providers",
      "Technology directors"
    ],
    tags: ["AI", "Autonomous Vehicles", "Computer Vision", "Fleet Management", "Safety"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-autonomous-vehicles"
  },

  // Quantum Internet Infrastructure
  {
    id: "quantum-internet-infrastructure",
    title: "Quantum Internet Infrastructure & Network Security",
    description: "Next-generation quantum internet infrastructure providing unhackable communication networks, quantum key distribution, and quantum-resistant security protocols.",
    category: "Quantum Technology",
    subcategory: "Internet Infrastructure",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum key distribution",
      "Quantum network nodes",
      "Quantum-resistant protocols",
      "Network monitoring",
      "Security auditing",
      "Compliance reporting",
      "Performance optimization",
      "Expert consultation"
    ],
    benefits: [
      "Unhackable communication networks",
      "Future-proof security infrastructure",
      "Meet strict compliance requirements",
      "Protect critical data",
      "Maintain competitive advantage"
    ],
    useCases: [
      "Government communications",
      "Financial networks",
      "Healthcare systems",
      "Critical infrastructure",
      "Research institutions"
    ],
    targetAudience: [
      "Government officials",
      "CISOs",
      "Network architects",
      "Security directors",
      "Infrastructure managers"
    ],
    tags: ["Quantum", "Internet", "Security", "Networking", "Infrastructure"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,000 - $20,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-internet"
  },

  // AI-Powered Healthcare Diagnostics
  {
    id: "ai-healthcare-diagnostics",
    title: "AI Healthcare Diagnostics & Medical Imaging Platform",
    description: "Advanced AI-powered healthcare diagnostics platform for medical imaging analysis, disease detection, and patient monitoring with high accuracy and compliance.",
    category: "AI & Healthcare",
    subcategory: "Medical Diagnostics",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Medical image analysis",
      "Disease detection algorithms",
      "Patient monitoring",
      "Diagnostic reporting",
      "Compliance tools",
      "Integration with EHR",
      "Mobile applications",
      "Analytics dashboard"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce diagnosis time by 60%",
      "Lower healthcare costs",
      "Enable early disease detection",
      "Improve patient outcomes"
    ],
    useCases: [
      "Hospitals and clinics",
      "Radiology departments",
      "Primary care practices",
      "Specialty clinics",
      "Research institutions"
    ],
    targetAudience: [
      "Healthcare administrators",
      "Radiologists",
      "Primary care physicians",
      "IT directors",
      "Compliance officers"
    ],
    tags: ["AI", "Healthcare", "Medical Imaging", "Diagnostics", "Compliance"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $9,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-healthcare-diagnostics"
  },

  // Blockchain Identity Management
  {
    id: "blockchain-identity-management",
    title: "Blockchain Identity Management & Digital Identity Platform",
    description: "Secure blockchain-based identity management platform providing self-sovereign identity, digital credentials, and privacy-preserving authentication solutions.",
    category: "Blockchain & Identity",
    subcategory: "Digital Identity",
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Self-sovereign identity",
      "Digital credentials",
      "Privacy-preserving authentication",
      "Multi-factor security",
      "Compliance tools",
      "API integration",
      "Mobile applications",
      "Analytics dashboard"
    ],
    benefits: [
      "Eliminate identity fraud",
      "Improve user privacy",
      "Reduce compliance costs",
      "Streamline verification processes",
      "Enable secure digital interactions"
    ],
    useCases: [
      "Financial services",
      "Healthcare organizations",
      "Government agencies",
      "Educational institutions",
      "E-commerce platforms"
    ],
    targetAudience: [
      "Security officers",
      "Compliance managers",
      "IT directors",
      "Product managers",
      "Business owners"
    ],
    tags: ["Blockchain", "Identity", "Security", "Privacy", "Authentication"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,200 - $4,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/blockchain-identity"
  },

  // AI-Powered Climate Modeling
  {
    id: "ai-climate-modeling",
    title: "AI Climate Modeling & Environmental Analytics Platform",
    description: "Advanced AI-powered climate modeling platform for environmental monitoring, climate prediction, and sustainability analytics with real-time data processing.",
    category: "AI & Environmental",
    subcategory: "Climate Modeling",
    price: 1600,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Climate prediction models",
      "Environmental monitoring",
      "Sustainability analytics",
      "Real-time data processing",
      "Predictive modeling",
      "Compliance reporting",
      "Integration APIs",
      "Visualization tools"
    ],
    benefits: [
      "Improve climate predictions by 40%",
      "Enable proactive environmental planning",
      "Reduce compliance risks",
      "Optimize sustainability strategies",
      "Support ESG initiatives"
    ],
    useCases: [
      "Environmental agencies",
      "Energy companies",
      "Agricultural businesses",
      "Urban planning",
      "Research institutions"
    ],
    targetAudience: [
      "Environmental scientists",
      "Sustainability officers",
      "Policy makers",
      "Business leaders",
      "Research directors"
    ],
    tags: ["AI", "Climate", "Environmental", "Sustainability", "Analytics"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$1,600 - $5,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-climate-modeling"
  },

  // Neuromorphic Computing Platform
  {
    id: "neuromorphic-computing",
    title: "Neuromorphic Computing & Brain-Inspired AI Platform",
    description: "Revolutionary neuromorphic computing platform that mimics brain architecture for ultra-efficient AI processing, enabling real-time learning and adaptation.",
    category: "Advanced Computing",
    subcategory: "Neuromorphic AI",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Brain-inspired architecture",
      "Real-time learning",
      "Ultra-low power consumption",
      "Edge AI processing",
      "Adaptive algorithms",
      "Custom hardware design",
      "Development tools",
      "Performance optimization"
    ],
    benefits: [
      "Reduce power consumption by 90%",
      "Enable real-time learning",
      "Process data 100x faster",
      "Extend battery life",
      "Enable edge AI applications"
    ],
    useCases: [
      "Autonomous vehicles",
      "Smart sensors",
      "Wearable devices",
      "Industrial IoT",
      "Medical devices"
    ],
    targetAudience: [
      "Hardware engineers",
      "AI researchers",
      "IoT developers",
      "System architects",
      "Technology executives"
    ],
    tags: ["Neuromorphic", "AI", "Edge Computing", "Low Power", "Real-time"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,500 - $18,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/neuromorphic-computing"
  },

  // AI-Powered Space Technology
  {
    id: "ai-space-technology",
    title: "AI Space Technology & Satellite Operations Platform",
    description: "Advanced AI platform for satellite operations, space data analysis, and autonomous space systems management with real-time monitoring and optimization.",
    category: "AI & Space Technology",
    subcategory: "Satellite Operations",
    price: 3800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Satellite operations management",
      "Space data analysis",
      "Autonomous systems control",
      "Real-time monitoring",
      "Predictive maintenance",
      "Mission planning",
      "Data visualization",
      "Integration APIs"
    ],
    benefits: [
      "Optimize satellite operations",
      "Reduce mission costs by 30%",
      "Improve data collection efficiency",
      "Enable autonomous operations",
      "Support space exploration"
    ],
    useCases: [
      "Satellite operators",
      "Space agencies",
      "Telecommunications",
      "Earth observation",
      "Space research"
    ],
    targetAudience: [
      "Space engineers",
      "Satellite operators",
      "Research directors",
      "Technology executives",
      "Government officials"
    ],
    tags: ["AI", "Space", "Satellites", "Autonomous Systems", "Data Analysis"],
    estimatedDelivery: "10-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,800 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-space-technology"
  },

  // Synthetic Biology Platform
  {
    id: "synthetic-biology-platform",
    title: "Synthetic Biology & Bioengineering Platform",
    description: "Revolutionary synthetic biology platform for designing, modeling, and engineering biological systems with AI-powered optimization and automation.",
    category: "Synthetic Biology",
    subcategory: "Bioengineering",
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "DNA design and synthesis",
      "Biological modeling",
      "Automated lab protocols",
      "Quality control systems",
      "Compliance tools",
      "Data management",
      "Collaboration tools",
      "Analytics dashboard"
    ],
    benefits: [
      "Accelerate bioengineering by 10x",
      "Reduce development costs",
      "Improve design accuracy",
      "Enable rapid prototyping",
      "Support innovation"
    ],
    useCases: [
      "Biotechnology companies",
      "Pharmaceutical research",
      "Agricultural companies",
      "Research institutions",
      "Startup labs"
    ],
    targetAudience: [
      "Bioengineers",
      "Research scientists",
      "Lab managers",
      "Technology directors",
      "Innovation officers"
    ],
    tags: ["Synthetic Biology", "Bioengineering", "AI", "Automation", "Research"],
    estimatedDelivery: "14-18 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,200 - $16,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/synthetic-biology"
  }
];

export const EMERGING_TECH_CATEGORIES = [
  "Web3 & DeFi",
  "Metaverse & VR",
  "AI & Autonomous Systems",
  "Quantum Technology",
  "AI & Healthcare",
  "Blockchain & Identity",
  "AI & Environmental",
  "Advanced Computing",
  "AI & Space Technology",
  "Synthetic Biology"
];

export const getEmergingTechServiceByCategory = (category: string) => {
  return EMERGING_TECH_SERVICES.filter(service => service.category === category);
};