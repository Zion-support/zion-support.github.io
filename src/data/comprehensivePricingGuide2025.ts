export interface ComprehensivePricingService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  basePrice: number;
  currency: string;
  pricingModel: string;
  pricingTiers: {
    starter: number;
    professional: number;
    enterprise: number;
    custom: string;
  };
  features: string[];
  benefits: string[];
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  estimatedDelivery: string;
  supportLevel: string;
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
  useCases: string[];
  targetAudience: string[];
  tags: string[];
}

export const COMPREHENSIVE_PRICING_GUIDE_2025: ComprehensivePricingService[] = [
  // AI-Powered Financial Services
  {
    id: "ai-credit-risk-assessment",
    title: "AI Credit Risk Assessment Platform",
    description: "Advanced AI-powered platform that analyzes credit risk using machine learning algorithms, alternative data sources, and real-time market conditions to provide accurate risk assessments.",
    category: "AI & FinTech",
    subcategory: "Credit Risk",
    basePrice: 1899,
    currency: "$",
    pricingModel: "monthly",
    pricingTiers: {
      starter: 1899,
      professional: 3999,
      enterprise: 7999,
      custom: "Contact Sales"
    },
    features: [
      "Real-time credit scoring",
      "Alternative data analysis",
      "Machine learning risk models",
      "Regulatory compliance tools",
      "Custom risk parameters",
      "API integration",
      "Real-time monitoring",
      "Automated reporting",
      "Multi-lender support",
      "Fraud detection"
    ],
    benefits: [
      "Reduce default rates by 35%",
      "Improve approval accuracy by 45%",
      "Faster credit decisions",
      "Compliance automation",
      "Cost-effective risk management"
    ],
    marketPrice: "$1,899 - $8,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis"],
      integrations: ["Experian", "Equifax", "TransUnion", "Plaid", "Stripe", "Square"],
      apiEndpoints: 200,
      uptime: "99.95%",
      security: ["SOC 2 Type II", "PCI DSS", "GDPR", "End-to-end encryption", "Multi-factor authentication"]
    },
    competitors: ["FICO", "VantageScore", "Credit Karma", "Experian Boost"],
    marketSize: "$12.4 billion by 2025",
    useCases: [
      "Bank lending decisions",
      "Credit card approvals",
      "Small business loans",
      "Mortgage applications",
      "Personal loans"
    ],
    targetAudience: [
      "Banks and credit unions",
      "FinTech companies",
      "Lending platforms",
      "Credit bureaus",
      "Insurance companies"
    ],
    tags: ["AI", "FinTech", "Credit Risk", "Machine Learning", "Compliance"]
  },

  // AI-Powered Healthcare Solutions
  {
    id: "ai-medical-imaging-analysis",
    title: "AI Medical Imaging Analysis Platform",
    description: "Advanced AI platform for medical image analysis that uses deep learning to detect diseases, analyze scans, and provide diagnostic assistance to healthcare professionals.",
    category: "AI & Healthcare",
    subcategory: "Medical Imaging",
    basePrice: 2499,
    currency: "$",
    pricingModel: "monthly",
    pricingTiers: {
      starter: 2499,
      professional: 4999,
      enterprise: 9999,
      custom: "Contact Sales"
    },
    features: [
      "Multi-modality image analysis",
      "Disease detection algorithms",
      "Radiology report generation",
      "Integration with PACS systems",
      "Real-time analysis",
      "Custom model training",
      "Compliance reporting",
      "Mobile app access",
      "API for EHR integration",
      "Performance analytics"
    ],
    benefits: [
      "Improve diagnostic accuracy by 25%",
      "Reduce reading time by 60%",
      "Early disease detection",
      "Standardized reporting",
      "Cost-effective diagnostics"
    ],
    marketPrice: "$2,499 - $6,999/month",
    roi: "400-600%",
    innovationLevel: "Advanced",
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "PyTorch", "React", "Node.js", "PostgreSQL"],
      integrations: ["DICOM", "PACS", "Epic", "Cerner", "Allscripts", "HL7 FHIR"],
      apiEndpoints: 300,
      uptime: "99.99%",
      security: ["HIPAA", "SOC 2", "HITECH", "End-to-end encryption", "Audit logging"]
    },
    competitors: ["IBM Watson Health", "Google Health", "Microsoft Azure Health", "NVIDIA Clara"],
    marketSize: "$45.8 billion by 2025",
    useCases: [
      "X-ray analysis",
      "CT scan interpretation",
      "MRI analysis",
      "Ultrasound imaging",
      "Pathology slides"
    ],
    targetAudience: [
      "Hospitals and clinics",
      "Radiology practices",
      "Medical imaging centers",
      "Healthcare networks",
      "Research institutions"
    ],
    tags: ["AI", "Healthcare", "Medical Imaging", "Deep Learning", "Radiology"]
  },

  // Quantum Computing Solutions
  {
    id: "quantum-optimization-platform",
    title: "Quantum Optimization Platform",
    description: "Advanced quantum computing platform that solves complex optimization problems in logistics, finance, and manufacturing using quantum algorithms and hybrid quantum-classical approaches.",
    category: "Quantum Computing",
    subcategory: "Optimization",
    basePrice: 15999,
    currency: "$",
    pricingModel: "monthly",
    pricingTiers: {
      starter: 15999,
      professional: 29999,
      enterprise: 49999,
      custom: "Contact Sales"
    },
    features: [
      "Quantum algorithm library",
      "Hybrid quantum-classical computing",
      "Real-time optimization",
      "Custom algorithm development",
      "Performance benchmarking",
      "API access",
      "Cloud-based quantum access",
      "Expert consultation",
      "Training and support",
      "Performance analytics"
    ],
    benefits: [
      "Solve previously intractable problems",
      "1000x faster optimization",
      "Breakthrough computational power",
      "Competitive advantage",
      "Future-proof technology"
    ],
    marketPrice: "$15,999 - $45,000/month",
    roi: "500-1000%",
    innovationLevel: "Revolutionary",
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Qiskit", "Cirq", "PennyLane", "Python", "React", "PostgreSQL"],
      integrations: ["IBM Quantum", "Google Quantum", "AWS Braket", "Azure Quantum", "D-Wave"],
      apiEndpoints: 800,
      uptime: "99.9%",
      security: ["Quantum encryption", "SOC 2", "FedRAMP", "End-to-end encryption"]
    },
    competitors: ["IBM Quantum", "Google Quantum", "D-Wave", "Rigetti", "IonQ"],
    marketSize: "$65.2 billion by 2030",
    useCases: [
      "Supply chain optimization",
      "Portfolio optimization",
      "Route planning",
      "Manufacturing scheduling",
      "Drug discovery"
    ],
    targetAudience: [
      "Fortune 500 companies",
      "Research institutions",
      "Government agencies",
      "Financial institutions",
      "Pharmaceutical companies"
    ],
    tags: ["Quantum Computing", "Optimization", "AI", "Research", "Innovation"]
  },

  // Edge AI Computing Platform
  {
    id: "edge-ai-computing-platform",
    title: "Edge AI Computing Platform",
    description: "Distributed AI computing platform that brings machine learning capabilities to edge devices, enabling real-time AI processing without cloud dependency for IoT and mobile applications.",
    category: "Edge Computing",
    subcategory: "AI Processing",
    basePrice: 3499,
    currency: "$",
    pricingModel: "monthly",
    pricingTiers: {
      starter: 3499,
      professional: 6999,
      enterprise: 14999,
      custom: "Contact Sales"
    },
    features: [
      "Edge AI model deployment",
      "Real-time inference",
      "Model optimization",
      "Device management",
      "Data synchronization",
      "Offline processing",
      "Custom model training",
      "Performance monitoring",
      "Security framework",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs",
      "Enhanced privacy",
      "Offline operation",
      "Real-time processing"
    ],
    marketPrice: "$3,499 - $9,999/month",
    roi: "300-600%",
    innovationLevel: "Advanced",
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["TensorFlow Lite", "ONNX Runtime", "React", "Node.js", "PostgreSQL", "Redis"],
      integrations: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "Kubernetes", "Docker"],
      apiEndpoints: 400,
      uptime: "99.95%",
      security: ["SOC 2", "ISO 27001", "End-to-end encryption", "Device authentication"]
    },
    competitors: ["AWS Greengrass", "Azure IoT Edge", "Google Edge TPU", "NVIDIA Jetson"],
    marketSize: "$43.7 billion by 2025",
    useCases: [
      "Autonomous vehicles",
      "Smart cities",
      "Industrial IoT",
      "Healthcare monitoring",
      "Retail analytics"
    ],
    targetAudience: [
      "IoT device manufacturers",
      "Smart city developers",
      "Industrial companies",
      "Healthcare providers",
      "Retail chains"
    ],
    tags: ["Edge Computing", "AI", "IoT", "Real-time", "Distributed"]
  },

  // Blockchain DeFi Platform
  {
    id: "blockchain-defi-platform",
    title: "Blockchain DeFi Platform",
    description: "Comprehensive decentralized finance platform that provides lending, borrowing, trading, and yield farming services using smart contracts and blockchain technology.",
    category: "Blockchain",
    subcategory: "DeFi",
    basePrice: 5999,
    currency: "$",
    pricingModel: "monthly",
    pricingTiers: {
      starter: 5999,
      professional: 11999,
      enterprise: 24999,
      custom: "Contact Sales"
    },
    features: [
      "Smart contract development",
      "DeFi protocol integration",
      "Yield optimization",
      "Risk management",
      "Liquidity pools",
      "Cross-chain bridges",
      "Mobile app access",
      "Analytics dashboard",
      "API integration",
      "Security auditing"
    ],
    benefits: [
      "Eliminate intermediaries",
      "Reduce transaction costs",
      "Global accessibility",
      "Transparent operations",
      "Programmable money"
    ],
    marketPrice: "$5,999 - $18,000/month",
    roi: "400-800%",
    innovationLevel: "Advanced",
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Ethereum", "Solidity", "React", "Node.js", "PostgreSQL", "Redis"],
      integrations: ["MetaMask", "WalletConnect", "Uniswap", "Compound", "Aave"],
      apiEndpoints: 300,
      uptime: "99.9%",
      security: ["Smart contract audits", "Multi-sig wallets", "Encryption", "Access controls"]
    },
    competitors: ["Uniswap", "Compound", "Aave", "MakerDAO", "Curve Finance"],
    marketSize: "$162.6 billion by 2025",
    useCases: [
      "Decentralized lending",
      "Yield farming",
      "DEX trading",
      "Stablecoin creation",
      "Cross-border payments"
    ],
    targetAudience: [
      "Financial institutions",
      "Crypto exchanges",
      "Investment firms",
      "Developers",
      "Traders"
    ],
    tags: ["Blockchain", "DeFi", "Smart Contracts", "Cryptocurrency", "Finance"]
  },

  // AI-Powered Cybersecurity Mesh
  {
    id: "ai-cybersecurity-mesh",
    title: "AI Cybersecurity Mesh Platform",
    description: "Next-generation cybersecurity platform that creates a distributed security architecture using AI to provide comprehensive protection across all digital assets and environments.",
    category: "Cybersecurity",
    subcategory: "Security Mesh",
    basePrice: 7999,
    currency: "$",
    pricingModel: "monthly",
    pricingTiers: {
      starter: 7999,
      professional: 15999,
      enterprise: 29999,
      custom: "Contact Sales"
    },
    features: [
      "Distributed security architecture",
      "AI threat detection",
      "Zero-trust implementation",
      "Behavioral analytics",
      "Automated response",
      "Compliance monitoring",
      "Real-time monitoring",
      "Incident response",
      "Security analytics",
      "24/7 SOC support"
    ],
    benefits: [
      "Comprehensive protection",
      "Reduce attack surface",
      "Automated threat response",
      "Compliance automation",
      "Cost-effective security"
    ],
    marketPrice: "$7,999 - $25,000/month",
    roi: "400-700%",
    innovationLevel: "Advanced",
    estimatedDelivery: "14-18 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Elasticsearch"],
      integrations: ["SIEM systems", "EDR solutions", "Firewalls", "Cloud platforms", "Identity providers"],
      apiEndpoints: 500,
      uptime: "99.99%",
      security: ["SOC 2", "ISO 27001", "FedRAMP", "Zero-trust architecture"]
    },
    competitors: ["Palo Alto Networks", "CrowdStrike", "SentinelOne", "Cisco", "Fortinet"],
    marketSize: "$67.8 billion by 2025",
    useCases: [
      "Enterprise security",
      "Cloud security",
      "IoT protection",
      "Critical infrastructure",
      "Government security"
    ],
    targetAudience: [
      "Large enterprises",
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Critical infrastructure"
    ],
    tags: ["Cybersecurity", "AI", "Zero Trust", "Security Mesh", "Threat Detection"]
  },

  // Metaverse Development Platform
  {
    id: "metaverse-development-platform",
    title: "Metaverse Development Platform",
    description: "Comprehensive platform for building, deploying, and managing virtual worlds, digital twins, and immersive experiences using AR/VR, AI, and blockchain technologies.",
    category: "Metaverse",
    subcategory: "Development Platform",
    basePrice: 4499,
    currency: "$",
    pricingModel: "monthly",
    pricingTiers: {
      starter: 4499,
      professional: 8999,
      enterprise: 17999,
      custom: "Contact Sales"
    },
    features: [
      "3D world building tools",
      "Avatar creation system",
      "Virtual asset marketplace",
      "Social interaction tools",
      "AI-powered NPCs",
      "Blockchain integration",
      "Multi-platform support",
      "Analytics dashboard",
      "Content management",
      "Monetization tools"
    ],
    benefits: [
      "Create immersive experiences",
      "Monetize virtual assets",
      "Engage users globally",
      "Reduce development time",
      "Scalable virtual worlds"
    ],
    marketPrice: "$4,499 - $12,000/month",
    roi: "300-600%",
    innovationLevel: "Advanced",
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Unity", "Unreal Engine", "React", "Node.js", "PostgreSQL", "Redis"],
      integrations: ["Meta Quest", "HTC Vive", "Steam VR", "WebXR", "Blockchain networks"],
      apiEndpoints: 350,
      uptime: "99.9%",
      security: ["SOC 2", "Content protection", "User privacy", "Asset security"]
    },
    competitors: ["Roblox", "Decentraland", "The Sandbox", "Meta", "Microsoft"],
    marketSize: "$82.5 billion by 2025",
    useCases: [
      "Virtual events",
      "Gaming platforms",
      "Virtual real estate",
      "Training simulations",
      "Social networking"
    ],
    targetAudience: [
      "Game developers",
      "Event organizers",
      "Real estate companies",
      "Educational institutions",
      "Brands and marketers"
    ],
    tags: ["Metaverse", "AR/VR", "3D", "Blockchain", "Social"]
  }
];

export const PRICING_CATEGORIES = [
  "AI & FinTech",
  "AI & Healthcare",
  "Quantum Computing",
  "Edge Computing",
  "Blockchain",
  "Cybersecurity",
  "Metaverse"
];

export const PRICING_TIERS = [
  { name: "Starter", description: "Essential features for small teams", color: "bg-green-500" },
  { name: "Professional", description: "Advanced features for growing businesses", color: "bg-blue-500" },
  { name: "Enterprise", description: "Full-featured solution for large organizations", color: "bg-purple-500" },
  { name: "Custom", description: "Tailored solution for specific needs", color: "bg-red-500" }
];