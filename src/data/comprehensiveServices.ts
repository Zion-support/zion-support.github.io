export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  benefits: string[];
  marketPrice: string;
  roi: string;
  estimatedDelivery: string;
  supportLevel: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: "ai-autonomous-business-manager",
    title: "AI Autonomous Business Manager",
    description: "Intelligent business management platform that autonomously handles operations, decision-making, and strategic planning.",
    category: "AI & Machine Learning",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous decision making",
      "Business process automation",
      "Real-time analytics",
      "Predictive insights",
      "Multi-department coordination"
    ],
    useCases: [
      "Business process optimization",
      "Strategic planning",
      "Resource allocation",
      "Performance monitoring",
      "Risk management"
    ],
    targetAudience: [
      "Business executives",
      "Operations managers",
      "Strategic planners",
      "Business consultants"
    ],
    tags: ["AI", "automation", "business management", "analytics"],
    benefits: [
      "Increased operational efficiency",
      "Data-driven decision making",
      "Cost reduction",
      "Improved productivity"
    ],
    marketPrice: "$5,000 - $15,000",
    roi: "300-500%",
    estimatedDelivery: "4-8 weeks",
    supportLevel: "24/7 Premium Support",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-business-intelligence-platform",
    title: "AI Business Intelligence Platform",
    description: "Advanced analytics platform powered by artificial intelligence for comprehensive business insights and decision support.",
    category: "AI & Machine Learning",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered analytics",
      "Real-time dashboards",
      "Predictive modeling",
      "Data visualization",
      "Custom reporting"
    ],
    useCases: [
      "Business performance analysis",
      "Market trend analysis",
      "Customer behavior insights",
      "Financial forecasting",
      "Operational optimization"
    ],
    targetAudience: [
      "Data analysts",
      "Business managers",
      "Financial analysts",
      "Marketing teams"
    ],
    tags: ["AI", "analytics", "business intelligence", "data visualization"],
    benefits: [
      "Improved decision making",
      "Real-time insights",
      "Predictive capabilities",
      "Data-driven strategies"
    ],
    marketPrice: "$3,000 - $10,000",
    roi: "250-400%",
    estimatedDelivery: "3-6 weeks",
    supportLevel: "24/7 Standard Support",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-content-generation-automation",
    title: "AI Content Generation Automation",
    description: "Automated content creation platform that generates high-quality, engaging content across multiple formats and platforms.",
    category: "AI & Machine Learning",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-format content generation",
      "SEO optimization",
      "Brand voice consistency",
      "Content scheduling",
      "Performance analytics"
    ],
    useCases: [
      "Content marketing",
      "Social media management",
      "Blog writing",
      "Email campaigns",
      "Product descriptions"
    ],
    targetAudience: [
      "Marketing teams",
      "Content creators",
      "Social media managers",
      "Business owners"
    ],
    tags: ["AI", "content generation", "marketing", "automation"],
    benefits: [
      "Faster content creation",
      "Consistent brand voice",
      "SEO optimization",
      "Cost reduction"
    ],
    marketPrice: "$2,000 - $8,000",
    roi: "200-350%",
    estimatedDelivery: "2-4 weeks",
    supportLevel: "Business Hours Support",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Revolutionary quantum computing platform for advanced machine learning and complex problem solving.",
    category: "Quantum Computing",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum processors",
      "Advanced ML algorithms",
      "Real-time optimization",
      "Hybrid computing",
      "Enterprise security"
    ],
    useCases: [
      "Complex optimization problems",
      "Drug discovery",
      "Financial modeling",
      "Climate modeling",
      "Cryptography"
    ],
    targetAudience: [
      "Data scientists",
      "ML engineers",
      "Research institutions",
      "Financial services"
    ],
    tags: ["quantum computing", "machine learning", "AI", "optimization"],
    benefits: [
      "Exponential speedup",
      "Complex problem solving",
      "Advanced algorithms",
      "Research capabilities"
    ],
    marketPrice: "$25,000 - $100,000",
    roi: "500-1000%",
    estimatedDelivery: "8-16 weeks",
    supportLevel: "24/7 Premium Support",
    innovationLevel: "Very High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-automation-platform",
    title: "Cybersecurity Automation Platform",
    description: "Comprehensive cybersecurity platform with automated threat detection, response, and compliance management.",
    category: "Cybersecurity",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated threat detection",
      "Incident response",
      "Compliance monitoring",
      "Vulnerability assessment",
      "Security analytics"
    ],
    useCases: [
      "Threat monitoring",
      "Compliance management",
      "Incident response",
      "Security audits",
      "Risk assessment"
    ],
    targetAudience: [
      "Security teams",
      "IT managers",
      "Compliance officers",
      "Risk managers"
    ],
    tags: ["cybersecurity", "automation", "threat detection", "compliance"],
    benefits: [
      "Enhanced security",
      "Automated response",
      "Compliance assurance",
      "Risk reduction"
    ],
    marketPrice: "$6,000 - $20,000",
    roi: "300-500%",
    estimatedDelivery: "4-8 weeks",
    supportLevel: "24/7 Premium Support",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cloud-infrastructure-automation",
    title: "Cloud Infrastructure Automation",
    description: "Intelligent cloud infrastructure management platform with automated scaling, monitoring, and optimization.",
    category: "Cloud & Infrastructure",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Auto-scaling",
      "Cost optimization",
      "Performance monitoring",
      "Security management",
      "Multi-cloud support"
    ],
    useCases: [
      "Infrastructure management",
      "Cost optimization",
      "Performance monitoring",
      "Security compliance",
      "Disaster recovery"
    ],
    targetAudience: [
      "DevOps engineers",
      "Cloud architects",
      "IT managers",
      "System administrators"
    ],
    tags: ["cloud", "infrastructure", "automation", "DevOps"],
    benefits: [
      "Cost optimization",
      "Automated scaling",
      "Performance improvement",
      "Operational efficiency"
    ],
    marketPrice: "$4,000 - $15,000",
    roi: "250-400%",
    estimatedDelivery: "3-6 weeks",
    supportLevel: "24/7 Standard Support",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "blockchain-enterprise-solutions",
    title: "Blockchain Enterprise Solutions",
    description: "Enterprise-grade blockchain platform for secure, transparent, and efficient business operations.",
    category: "Blockchain & Web3",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Smart contracts",
      "Decentralized applications",
      "Supply chain tracking",
      "Digital identity",
      "Asset tokenization"
    ],
    useCases: [
      "Supply chain management",
      "Digital identity verification",
      "Asset management",
      "Smart contracts",
      "Decentralized finance"
    ],
    targetAudience: [
      "Financial institutions",
      "Supply chain managers",
      "Legal firms",
      "Real estate companies"
    ],
    tags: ["blockchain", "web3", "smart contracts", "decentralized"],
    benefits: [
      "Enhanced security",
      "Transparency",
      "Cost reduction",
      "Automation"
    ],
    marketPrice: "$8,000 - $25,000",
    roi: "400-600%",
    estimatedDelivery: "6-12 weeks",
    supportLevel: "24/7 Premium Support",
    innovationLevel: "High Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "iot-data-analytics-platform",
    title: "IoT Data Analytics Platform",
    description: "Comprehensive IoT platform with real-time data collection, analysis, and actionable insights.",
    category: "Data & Analytics",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data collection",
      "Advanced analytics",
      "Predictive maintenance",
      "Device management",
      "Security protocols"
    ],
    useCases: [
      "Smart city management",
      "Industrial monitoring",
      "Asset tracking",
      "Predictive maintenance",
      "Environmental monitoring"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Utility companies",
      "Smart city planners",
      "Industrial facilities"
    ],
    tags: ["IoT", "data analytics", "predictive maintenance", "smart cities"],
    benefits: [
      "Real-time insights",
      "Predictive capabilities",
      "Operational efficiency",
      "Cost savings"
    ],
    marketPrice: "$3,000 - $12,000",
    roi: "250-400%",
    estimatedDelivery: "4-8 weeks",
    supportLevel: "24/7 Standard Support",
    innovationLevel: "Medium Innovation",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity", 
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Digital Transformation",
  "Web & Mobile Development",
  "IT Support & Consulting",
  "Blockchain & Web3",
  "Voice AI",
  "Quantum Security",
  "Content Creation",
  "Identity Management",
  "Sales Intelligence",
  "Incident Response",
  "Customer Analytics",
  "Supply Chain",
  "HR Technology",
  "Financial Security",
  "Storage Solutions",
  "Customer Experience",
  "Zero Trust Security",
  "NFT Platform",
  "DeFi Services",
  "Security Testing",
  "Process Automation"
];