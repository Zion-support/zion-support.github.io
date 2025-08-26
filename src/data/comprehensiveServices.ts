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
  targetAudience?: string[];
  tags?: string[];
  benefits?: string[];
  marketPrice?: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: "ai-content-hub-pro",
    title: "AI Content Hub Pro",
    description: "Enterprise-grade AI content creation platform for multi-platform content generation and optimization.",
    category: "AI & Content Creation",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-language Generation",
      "SEO Optimization", 
      "Cross-platform Distribution",
      "Brand Voice Consistency",
      "Real-time Analytics",
      "24/7 Support"
    ],
    useCases: [
      "Marketing agencies",
      "Content creators",
      "E-commerce businesses",
      "Publishing companies"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-customer-service-automation",
    title: "AI Customer Service Automation",
    description: "Intelligent customer service automation with natural language processing and sentiment analysis.",
    category: "AI & Customer Service",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "24/7 Customer Support",
      "Multi-language Support",
      "Sentiment Analysis",
      "Ticket Routing",
      "Performance Analytics",
      "Integration APIs"
    ],
    useCases: [
      "E-commerce platforms",
      "SaaS companies",
      "Financial services",
      "Healthcare providers"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-sales-intelligence-platform",
    title: "AI Sales Intelligence Platform",
    description: "Advanced sales intelligence platform with predictive analytics and lead scoring.",
    category: "AI & Sales",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Lead Scoring",
      "Predictive Analytics",
      "Sales Forecasting",
      "CRM Integration",
      "Performance Tracking",
      "Custom Reports"
    ],
    useCases: [
      "Sales teams",
      "Marketing agencies",
      "B2B companies",
      "Real estate firms"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-fintech-platform",
    title: "AI Fintech Platform",
    description: "Comprehensive AI-powered financial technology platform for modern banking and fintech solutions.",
    category: "AI & Fintech",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Fraud Detection",
      "Risk Assessment",
      "Credit Scoring",
      "Investment Analysis",
      "Regulatory Compliance",
      "Real-time Processing"
    ],
    useCases: [
      "Banks",
      "Credit unions",
      "Investment firms",
      "Insurance companies"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-healthcare-tech-platform",
    title: "AI Healthcare Technology Platform",
    description: "Advanced healthcare technology platform with AI-powered diagnostics and patient care management.",
    category: "AI & Healthcare",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Medical Imaging Analysis",
      "Patient Data Analytics",
      "Drug Discovery Support",
      "Clinical Decision Support",
      "HIPAA Compliance",
      "Integration APIs"
    ],
    useCases: [
      "Hospitals",
      "Clinics",
      "Research institutions",
      "Pharmaceutical companies"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-enterprise-platform",
    title: "Quantum Enterprise Platform",
    description: "Enterprise-grade quantum computing platform for advanced computational problems.",
    category: "Quantum Computing",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum Algorithm Library",
      "Hybrid Classical-Quantum Processing",
      "Security Protocols",
      "Performance Monitoring",
      "Developer Tools",
      "Enterprise Support"
    ],
    useCases: [
      "Research institutions",
      "Financial services",
      "Pharmaceutical companies",
      "Government agencies"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-business-platform",
    title: "Autonomous Business Operations Platform",
    description: "Fully autonomous business operations platform with AI-driven decision making and process automation.",
    category: "AI & Business Automation",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Process Automation",
      "Decision Engine",
      "Performance Optimization",
      "Resource Management",
      "Analytics Dashboard",
      "Custom Workflows"
    ],
    useCases: [
      "Large enterprises",
      "Manufacturing companies",
      "Logistics firms",
      "Service providers"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-it-asset-management",
    title: "AI-Powered IT Asset Management",
    description: "Intelligent IT asset management platform with predictive maintenance and lifecycle optimization.",
    category: "IT & Asset Management",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Asset Tracking",
      "Predictive Maintenance",
      "Lifecycle Management",
      "Cost Optimization",
      "Compliance Monitoring",
      "Integration APIs"
    ],
    useCases: [
      "IT departments",
      "Data centers",
      "Manufacturing companies",
      "Healthcare facilities"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "soc2-compliance-automation",
    title: "SOC2 Compliance Automation",
    description: "Automated SOC2 compliance platform with continuous monitoring and audit preparation.",
    category: "Compliance & Security",
    price: 2999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Continuous Monitoring",
      "Audit Preparation",
      "Policy Management",
      "Risk Assessment",
      "Compliance Reporting",
      "Expert Support"
    ],
    useCases: [
      "SaaS companies",
      "Financial services",
      "Healthcare providers",
      "Government contractors"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-research-assistant",
    title: "AI Autonomous Research Assistant",
    description: "Advanced AI research assistant for autonomous scientific research and data analysis.",
    category: "AI & Research",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Literature Review",
      "Data Analysis",
      "Hypothesis Generation",
      "Experiment Design",
      "Results Interpretation",
      "Publication Support"
    ],
    useCases: [
      "Research institutions",
      "Universities",
      "Pharmaceutical companies",
      "Government labs"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "5g-enterprise-solutions",
    title: "5G Enterprise Solutions",
    description: "Comprehensive 5G enterprise solutions for next-generation connectivity and IoT applications.",
    category: "5G & Connectivity",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "5G Network Design",
      "IoT Integration",
      "Edge Computing",
      "Network Security",
      "Performance Monitoring",
      "24/7 Support"
    ],
    useCases: [
      "Manufacturing companies",
      "Smart cities",
      "Transportation companies",
      "Healthcare facilities"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Advanced quantum machine learning platform combining quantum computing with AI algorithms.",
    category: "Quantum & AI",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum ML Algorithms",
      "Hybrid Training",
      "Model Optimization",
      "Quantum Feature Selection",
      "Performance Analytics",
      "Research Support"
    ],
    useCases: [
      "Research institutions",
      "AI companies",
      "Financial services",
      "Government agencies"
    ],
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
  "Process Automation",
  "AI & Content Creation",
  "AI & Customer Service",
  "AI & Sales",
  "AI & Fintech",
  "AI & Healthcare",
  "Quantum Computing",
  "AI & Business Automation",
  "IT & Asset Management",
  "Compliance & Security",
  "AI & Research",
  "5G & Connectivity",
  "Quantum & AI"
];