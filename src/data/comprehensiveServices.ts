export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'monthly' | 'hourly' | 'project-based';
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

// Service categories for filtering
export const SERVICE_CATEGORIES = [
    images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-30T12:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95
  }
];

// Service Categories for filtering
export const SERVICE_CATEGORIES = [
  { id: "ai-services", name: "AI Services", description: "Artificial Intelligence & Machine Learning Solutions" },
  { id: "it-services", name: "IT Services", description: "Infrastructure, Cloud & Cybersecurity" },
  { id: "business-solutions", name: "Business Solutions", description: "Process Automation & Optimization" },
  { id: "digital-solutions", name: "Digital Solutions", description: "E-commerce & Marketing" },
  { id: "specialized-solutions", name: "Specialized Solutions", description: "Healthcare, FinTech & Industry-Specific" },
  { id: "iot-solutions", name: "IoT Solutions", description: "Internet of Things & Smart Systems" },
  { id: "education-solutions", name: "Education Solutions", description: "Learning & Training Platforms" }
];

// Service Subcategories
export const SERVICE_SUBCATEGORIES = {
  "ai-services": ["Chatbots & Virtual Assistants", "Content Creation", "Data Analytics", "Computer Vision", "Natural Language Processing"],
  "it-services": ["Cloud Solutions", "Cybersecurity", "DevOps", "Infrastructure", "Network Management"],
  "business-solutions": ["Process Automation", "Customer Support", "Project Management", "HR Solutions", "Financial Management"],
  "digital-solutions": ["E-commerce", "Marketing Automation", "Web Development", "Mobile Apps", "Digital Transformation"],
  "specialized-solutions": ["Healthcare", "FinTech", "Manufacturing", "Retail", "Logistics"],
  "iot-solutions": ["Platform", "Smart Buildings", "Industrial IoT", "Connected Devices", "Data Analytics"],
  "education-solutions": ["Learning Management", "VR/AR Training", "Skill Assessment", "Content Creation", "Analytics"]
};

// Pricing Tiers
export const PRICING_TIERS = {
  "starter": { min: 500, max: 1999, label: "Starter Solutions" },
  "professional": { min: 2000, max: 4999, label: "Professional Solutions" },
  "enterprise": { min: 5000, max: 15000, label: "Enterprise Solutions" }
};
=======
    description: "Secure smart contract development for DeFi, NFTs, and blockchain applications with comprehensive security auditing.",
    category: "Blockchain & Web3",
    subcategory: "Smart Contracts",
    price: 7000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Smart contract development",
      "Security audit and testing",
      "Gas optimization",
      "Multi-chain deployment",
      "Documentation and testing",
      "Ongoing support"
    ],
    benefits: [
      "Secure and audited contracts",
      "Gas cost optimization",
      "Multi-chain compatibility",
      "Reduced security risks",
      "Professional development standards"
    ],
    useCases: [
      "DeFi applications",
      "NFT marketplaces",
      "DAO governance",
      "Supply chain tracking",
      "Gaming platforms"
    ],
    marketPrice: "$5,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Smart Contracts", "Blockchain", "DeFi", "NFTs", "Security Audit"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T16:15:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 78,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium"
  },

  // IoT & Edge Computing
  {
    id: "iot-platform-development",
    title: "IoT Platform Development & Management",
    description: "End-to-end IoT solution development including device management, data collection, analytics, and remote monitoring.",
    category: "IoT & Edge Computing",
    subcategory: "Platform Development",
    price: 10000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "IoT device management",
      "Real-time data collection",
      "Edge computing implementation",
      "Dashboard and analytics",
      "Alert and notification system",
      "Scalable architecture"
    ],
    benefits: [
      "Real-time monitoring and control",
      "Predictive maintenance",
      "Operational efficiency",
      "Data-driven insights",
      "Cost reduction"
    ],
    useCases: [
      "Industrial monitoring",
      "Smart buildings",
      "Agriculture automation",
      "Healthcare monitoring",
      "Logistics tracking"
    ],
    marketPrice: "$8,000 - $35,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["IoT", "Edge Computing", "Device Management", "Real-time", "Monitoring"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-20T10:45:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 134,
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise"
  },

  // Emerging Technologies
  {
    id: "quantum-computing-consulting",
    title: "Quantum Computing Strategy & Consulting",
    description: "Strategic consulting for quantum computing adoption, algorithm development, and quantum-ready application design.",
    category: "Emerging Technologies",
    subcategory: "Quantum Computing",
    price: 25000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "Quantum readiness assessment",
      "Algorithm optimization strategies",
      "Hybrid classical-quantum solutions",
      "Quantum software development",
      "Partnership recommendations",
      "ROI analysis and planning"
    ],
    benefits: [
      "Future-proof technology strategy",
      "Competitive advantage in research",
      "Optimization of complex problems",
      "Access to cutting-edge technology",
      "Strategic technology positioning"
    ],
    useCases: [
      "Pharmaceutical research",
      "Financial modeling",
      "Logistics optimization",
      "Cryptography and security",
      "Machine learning acceleration"
    ],
    marketPrice: "$20,000 - $100,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Quantum Computing", "Emerging Tech", "Strategy", "Algorithm Development", "Future Tech"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-25T14:20:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 45,
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "metaverse-development",
    title: "Metaverse Platform Development",
    description: "Complete metaverse platform development including 3D environments, avatar systems, social interactions, and virtual commerce.",
    category: "Emerging Technologies",
    subcategory: "Metaverse & VR",
    price: 35000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "3D virtual world creation",
      "Avatar customization system",
      "Social interaction features",
      "Virtual commerce integration",
      "Cross-platform compatibility",
      "Analytics and user tracking"
    ],
    benefits: [
      "Immersive brand experiences",
      "New revenue streams",
      "Enhanced customer engagement",
      "Virtual event hosting",
      "Innovative marketing platform"
    ],
    useCases: [
      "Virtual events and conferences",
      "Brand experiences",
      "Educational platforms",
      "Gaming and entertainment",
      "Virtual real estate"
    ],
    marketPrice: "$30,000 - $150,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["Metaverse", "VR/AR", "3D Development", "Virtual Worlds", "Social VR"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-28T11:30:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 67,
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise"
  },
  {
    id: "ai-ethics-compliance",
    title: "AI Ethics & Compliance Framework",
    description: "Comprehensive AI ethics and compliance framework development to ensure responsible AI deployment and regulatory adherence.",
    category: "AI & Machine Learning",
    subcategory: "AI Ethics & Governance",
    price: 8000,
    currency: "$",
    pricingModel: "project-based",
    features: [
      "AI ethics framework development",
      "Bias detection and mitigation",
      "Transparency and explainability",
      "Regulatory compliance assessment",
      "Ethics training and guidelines",
      "Ongoing monitoring and auditing"
    ],
    benefits: [
      "Regulatory compliance",
      "Reduced legal risks",
      "Enhanced brand reputation",
      "Ethical AI deployment",
      "Stakeholder trust"
    ],
    useCases: [
      "Financial services AI",
      "Healthcare AI systems",
      "HR and recruitment AI",
      "Autonomous vehicles",
      "Facial recognition systems"
    ],
    marketPrice: "$6,000 - $25,000",
    contactLink: "https://ziontechgroup.com/contact",
    tags: ["AI Ethics", "Compliance", "Responsible AI", "Governance", "Regulatory"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T16:45:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 89,
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium"
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Data & Analytics",
  "Web & Mobile Development",
  "Digital Transformation",
  "Blockchain & Web3",
  "IoT & Edge Computing",
  "Emerging Technologies"
];

export const SERVICE_SUBCATEGORIES = {
  "AI & Machine Learning": [
    "Chatbots & Conversational AI",
    "Content Generation",
    "Computer Vision",
    "Natural Language Processing",
    "Predictive Analytics",
    "AI Ethics & Governance"
  ],
  "Cloud & DevOps": [
    "Cost Optimization",
    "Container Orchestration",
    "Infrastructure as Code",
    "CI/CD Pipelines",
    "Cloud Migration"
  ],
  "Cybersecurity": [
    "Security Testing",
    "Monitoring & Response",
    "Compliance & Governance",
    "Identity & Access Management",
    "Threat Intelligence"
  ],
  "Data & Analytics": [
    "Data Engineering",
    "Business Intelligence",
    "Machine Learning",
    "Data Visualization",
    "Data Governance"
  ],
  "Web & Mobile Development": [
    "Progressive Web Apps",
    "Mobile Apps",
    "Web Applications",
    "API Development",
    "E-commerce Solutions"
  ],
  "Digital Transformation": [
    "Strategy & Consulting",
    "System Modernization",
    "Process Automation",
    "Change Management",
    "Technology Assessment"
  ],
  "Blockchain & Web3": [
    "Smart Contracts",
    "DeFi Development",
    "NFT Marketplaces",
    "Blockchain Integration",
    "Web3 Applications"
  ],
  "IoT & Edge Computing": [
    "Platform Development",
    "Device Management",
    "Edge Analytics",
    "Sensor Integration",
    "Remote Monitoring"
  ],
  "Emerging Technologies": [
    "Quantum Computing",
    "Metaverse & VR",
    "AI Ethics & Governance",
    "Augmented Reality",
    "Extended Reality (XR)"
  ]
};
=======
    description: "Develop comprehensive disaster recovery and business continuity plans. Includes risk assessment, recovery procedures, testing protocols, and ongoing maintenance. Features cloud-based backup solutions and failover systems.",
    category: "Managed IT Services",
    subcategory: "Disaster Recovery",
    price: 15999,
    currency: "$",
    tags: ["Disaster Recovery", "Business Continuity", "Risk Assessment", "Cloud Backup"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech",
      email: "kleber@ziontechgroup.com",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-05-15T15:30:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 89
  }
];

// Service Categories for better organization
export const SERVICE_CATEGORIES = [
  {
    id: "ai-machine-learning",
    name: "AI & Machine Learning",
    description: "Advanced artificial intelligence and machine learning solutions",
    icon: "🤖",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "AI & Machine Learning")
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    description: "Cloud migration, DevOps, and infrastructure management",
    icon: "☁️",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cloud & Infrastructure")
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Comprehensive security solutions and compliance",
    icon: "🔒",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cybersecurity")
  },
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description: "Data warehousing, analytics, and business intelligence",
    icon: "📊",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Data & Analytics")
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Strategic consulting and system modernization",
    icon: "🚀",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Digital Transformation")
  },
  {
    id: "mobile-web-development",
    name: "Mobile & Web Development",
    description: "Custom applications and digital solutions",
    icon: "💻",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Mobile & Web Development")
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Decentralized applications and smart contracts",
    icon: "⛓️",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Blockchain & Web3")
  },
  {
    id: "iot-edge-computing",
    name: "IoT & Edge Computing",
    description: "Internet of Things and edge computing solutions",
    icon: "🌐",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "IoT & Edge Computing")
  },
  {
    id: "enterprise-software",
    name: "Enterprise Software",
    description: "ERP, CRM, and enterprise system solutions",
    icon: "🏢",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Enterprise Software")
  },
  {
    id: "managed-it-services",
    name: "Managed IT Services",
    description: "24/7 support and managed IT solutions",
    icon: "🛠️",
    services: COMPREHENSIVE_SERVICES.filter(s => s.category === "Managed IT Services")
  }
];

// Featured Services for homepage display
export const FEATURED_SERVICES = COMPREHENSIVE_SERVICES.filter(service => service.featured);

// Services by price range
export const SERVICES_BY_PRICE = {
  budget: COMPREHENSIVE_SERVICES.filter(s => s.price && s.price < 5000),
  midRange: COMPREHENSIVE_SERVICES.filter(s => s.price && s.price >= 5000 && s.price < 15000),
  enterprise: COMPREHENSIVE_SERVICES.filter(s => s.price && s.price >= 15000)
};
=======
  { id: "ai-ml", name: "AI & Machine Learning", description: "Artificial intelligence and machine learning solutions" },
  { id: "cloud-devops", name: "Cloud & DevOps", description: "Cloud infrastructure and development operations" },
  { id: "cybersecurity", name: "Cybersecurity", description: "Security solutions and protection services" },
  { id: "data-analytics", name: "Data & Analytics", description: "Data processing and business intelligence" },
  { id: "web-mobile", name: "Web & Mobile Development", description: "Application development services" },
  { id: "blockchain-web3", name: "Blockchain & Web3", description: "Decentralized technology solutions" },
  { id: "iot-hardware", name: "IoT & Hardware", description: "Internet of Things and hardware solutions" },
  { id: "digital-transformation", name: "Digital Transformation", description: "Business transformation consulting" }
];

// Pricing tiers for subscription services
export const SUBSCRIPTION_TIERS = [
  {
    name: "Starter",
    price: 99,
    currency: "$",
    period: "month",
    features: ["Basic features", "Email support", "5 projects", "Standard templates"]
  },
  {
    name: "Professional",
    price: 299,
    currency: "$",
    period: "month",
    features: ["Advanced features", "Priority support", "Unlimited projects", "Custom templates", "API access"]
  },
  {
    name: "Enterprise",
    price: 999,
    currency: "$",
    period: "month",
    features: ["All features", "24/7 support", "Custom integrations", "Dedicated account manager", "SLA guarantee"]
  }
];
  website: "https://ziontechgroup.com"
};
=======
=======
  website: "https://ziontechgroup.com"
};
=======
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