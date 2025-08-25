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
    description: "Intelligent business management platform that autonomously handles day-to-day operations",
    category: "AI & Machine Learning",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Autonomous decision making",
      "Process automation",
      "Performance monitoring",
      "Predictive analytics"
    ],
    useCases: [
      "Business process optimization",
      "Operational efficiency",
      "Strategic planning",
      "Resource management"
    ],
    targetAudience: [
      "Enterprise businesses",
      "Medium-sized companies",
      "Operations managers",
      "Business consultants"
    ],
    tags: ["AI", "Business Management", "Automation", "Decision Making"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-business-intelligence-suite",
    title: "AI Business Intelligence Suite",
    description: "Comprehensive BI platform powered by artificial intelligence for data-driven insights",
    category: "Data & Analytics",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time analytics",
      "Predictive modeling",
      "Interactive dashboards",
      "Data visualization"
    ],
    useCases: [
      "Business reporting",
      "Market analysis",
      "Performance tracking",
      "Strategic planning"
    ],
    targetAudience: [
      "Data analysts",
      "Business managers",
      "Executives",
      "Consultants"
    ],
    tags: ["AI", "Business Intelligence", "Analytics", "Data Visualization"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Advanced quantum computing platform for complex machine learning tasks",
    category: "Quantum Technology",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum processors",
      "ML algorithm library",
      "Hybrid computing",
      "Real-time visualization"
    ],
    useCases: [
      "Drug discovery",
      "Financial modeling",
      "Climate research",
      "Cryptography"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Government agencies"
    ],
    tags: ["Quantum Computing", "Machine Learning", "Research", "Advanced Technology"],
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