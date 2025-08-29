export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billing: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface ServicePricing {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: PricingTier[];
  marketComparison: string;
  roi: string;
  setupTime: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_PRICING_GUIDE_2030: ServicePricing[] = [
  // NEW INNOVATIVE MICRO SAAS SERVICES 2024-2025
  
  {
    id: "ai-legal-document-analyzer",
    title: "AI Legal Document Analyzer",
    description: "Advanced AI platform that analyzes legal documents, contracts, and agreements with 99.2% accuracy. Identifies risks, compliance issues, and provides intelligent recommendations.",
    category: "AI & Legal Tech",
    pricing: [
      {
        name: "Basic",
        price: 3499,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Document analysis up to 100 pages/month",
          "Basic risk assessment",
          "Compliance checking",
          "Email support",
          "Standard templates"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 5999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Unlimited document analysis",
          "Advanced risk assessment",
          "Custom compliance rules",
          "Priority support",
          "API access"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Custom AI models",
          "White-label solution",
          "Dedicated support",
          "Custom integrations",
          "Training & onboarding"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $3,000-6,000. Our solution provides 99.2% accuracy vs. industry standard of 85-90%.",
    roi: "400% within 4 months through improved efficiency and risk reduction.",
    setupTime: "3-5 weeks with dedicated onboarding team.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-legal-analyzer"
    }
  },

  {
    id: "ai-real-estate-investment-analyzer",
    title: "AI Real Estate Investment Analyzer",
    description: "Comprehensive real estate investment analysis platform using AI to evaluate properties, market trends, and investment opportunities with 94% accuracy.",
    category: "AI & Real Estate",
    pricing: [
      {
        name: "Starter",
        price: 2799,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Property analysis up to 50 properties/month",
          "Basic ROI calculations",
          "Market trend analysis",
          "Email support",
          "Standard reports"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 4499,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Starter",
          "Unlimited property analysis",
          "Advanced ROI modeling",
          "Predictive market forecasting",
          "Priority support",
          "API access"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 7999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Custom AI models",
          "Portfolio optimization",
          "Dedicated support",
          "Custom integrations",
          "Training & consulting"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $2,500-5,000. Our solution provides 94% accuracy vs. industry standard of 75-80%.",
    roi: "350% within 3 months through better investment decisions.",
    setupTime: "2-4 weeks with dedicated onboarding team.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-real-estate-analyzer"
    }
  },

  {
    id: "ai-restaurant-management-system",
    title: "AI Restaurant Management System",
    description: "Intelligent restaurant management platform with AI-powered inventory management, customer behavior analysis, and predictive ordering.",
    category: "AI & Hospitality",
    pricing: [
      {
        name: "Basic",
        price: 1899,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Inventory management",
          "Basic customer analytics",
          "Menu optimization",
          "Email support",
          "Standard reports"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 2999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Advanced AI analytics",
          "Predictive ordering",
          "Customer behavior insights",
          "Priority support",
          "API access"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Multi-location support",
          "Custom AI models",
          "Dedicated support",
          "Custom integrations",
          "Training & setup"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $1,500-3,500. Our solution reduces food waste by 30% vs. industry standard of 10-15%.",
    roi: "300% within 2 months through waste reduction and increased efficiency.",
    setupTime: "2-3 weeks with dedicated onboarding team.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-restaurant-management"
    }
  },

  {
    id: "ai-fitness-coaching-platform",
    title: "AI Fitness Coaching Platform",
    description: "Personalized AI fitness coaching platform that creates custom workout plans, tracks progress, and provides real-time feedback with 97% accuracy.",
    category: "AI & Health Tech",
    pricing: [
      {
        name: "Basic",
        price: 1299,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic workout planning",
          "Progress tracking",
          "Standard exercises",
          "Email support",
          "Mobile app access"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 1999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Advanced AI coaching",
          "Custom workout plans",
          "Real-time feedback",
          "Priority support",
          "API access"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 3499,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Custom AI models",
          "White-label solution",
          "Dedicated support",
          "Custom integrations",
          "Training & setup"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $1,000-2,500. Our solution provides 97% accuracy vs. industry standard of 80-85%.",
    roi: "250% within 2 months through improved user engagement.",
    setupTime: "1-2 weeks with dedicated onboarding team.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-fitness-coaching"
    }
  },

  {
    id: "ai-ecommerce-personalization-engine",
    title: "AI E-commerce Personalization Engine",
    description: "Advanced AI-powered e-commerce personalization platform that increases conversion rates by 40% through intelligent product recommendations.",
    category: "AI & E-commerce",
    pricing: [
      {
        name: "Basic",
        price: 2499,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic product recommendations",
          "User behavior tracking",
          "Standard personalization",
          "Email support",
          "Basic analytics"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 3999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Advanced AI personalization",
          "Dynamic pricing",
          "Real-time optimization",
          "Priority support",
          "API access"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 6999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Custom AI models",
          "White-label solution",
          "Dedicated support",
          "Custom integrations",
          "Training & consulting"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $2,000-5,000. Our solution increases conversion rates by 40% vs. industry standard of 15-20%.",
    roi: "450% within 3 months through increased sales and conversions.",
    setupTime: "3-4 weeks with dedicated onboarding team.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-ecommerce-personalization"
    }
  },

  {
    id: "ai-powered-business-intelligence-suite",
    title: "AI-Powered Business Intelligence Suite",
    description: "Enterprise-grade BI platform with natural language queries, predictive analytics, and automated insights generation.",
    category: "AI & Business Intelligence",
    pricing: [
      {
        name: "Starter",
        price: 4999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Natural language queries",
          "Basic predictive analytics",
          "Standard reporting dashboard",
          "Email support",
          "5 user licenses"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 8999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Starter",
          "Advanced predictive analytics",
          "Custom dashboards",
          "Priority support",
          "15 user licenses",
          "API access"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 15999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Custom AI models",
          "Unlimited users",
          "Dedicated support",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $4,000-8,000. Our solution provides 95% accuracy vs. industry standard of 75-80%.",
    roi: "500% within 6 months through improved decision-making and operational efficiency.",
    setupTime: "4-6 weeks with dedicated onboarding team.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-business-intelligence"
    }
  },

  {
    id: "zero-trust-cybersecurity-platform",
    title: "Zero-Trust Cybersecurity Platform",
    description: "Comprehensive zero-trust security solution with continuous authentication, micro-segmentation, and AI-powered threat detection.",
    category: "Cybersecurity",
    pricing: [
      {
        name: "Basic",
        price: 8999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Zero-trust architecture",
          "Continuous authentication",
          "Basic threat detection",
          "Standard compliance reports",
          "Email support"
        ],
        cta: "Get Started"
      },
      {
        name: "Advanced",
        price: 14999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "AI-powered threat detection",
          "Micro-segmentation",
          "Advanced compliance",
          "Priority support",
          "Custom policies"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 24999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Advanced",
          "Custom security policies",
          "Dedicated security team",
          "24/7 monitoring",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $7,000-15,000. Our solution reduces security incidents by 85% vs. industry average of 40-50%.",
    roi: "600% within 8 months through reduced security incidents and compliance automation.",
    setupTime: "6-8 weeks with security experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/zero-trust-security"
    }
  },

  {
    id: "intelligent-cloud-infrastructure-platform",
    title: "Intelligent Cloud Infrastructure Platform",
    description: "AI-driven cloud infrastructure management with automated scaling, cost optimization, and performance monitoring.",
    category: "Cloud & DevOps",
    pricing: [
      {
        name: "Starter",
        price: 6999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic cloud management",
          "Cost optimization",
          "Performance monitoring",
          "Standard support",
          "5 cloud accounts"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 12999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Starter",
          "Advanced auto-scaling",
          "Multi-cloud support",
          "Priority support",
          "15 cloud accounts",
          "Custom policies"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 22999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Unlimited cloud accounts",
          "Custom AI models",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $5,000-12,000. Our solution reduces cloud costs by 40% vs. industry average of 20-25%.",
    roi: "450% within 5 months through cost optimization and performance improvements.",
    setupTime: "5-7 weeks with cloud experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/cloud-infrastructure"
    }
  },

  {
    id: "ai-marketing-automation-suite",
    title: "AI Marketing Automation Suite",
    description: "Intelligent marketing platform with predictive customer segmentation, personalized content generation, and automated campaign optimization.",
    category: "AI & Marketing",
    pricing: [
      {
        name: "Basic",
        price: 3999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic marketing automation",
          "Customer segmentation",
          "Email campaigns",
          "Standard analytics",
          "Email support"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 6999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "AI content generation",
          "Advanced segmentation",
          "Multi-channel campaigns",
          "Priority support",
          "Custom workflows"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 12999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Custom AI models",
          "Unlimited campaigns",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $3,000-7,000. Our solution increases conversion rates by 45% vs. industry average of 15-20%.",
    roi: "400% within 4 months through improved conversion rates and reduced marketing costs.",
    setupTime: "3-4 weeks with marketing experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-marketing"
    }
  },

  {
    id: "quantum-computing-optimization-platform",
    title: "Quantum Computing Optimization Platform",
    description: "Advanced quantum computing platform for complex optimization problems, cryptography, and machine learning.",
    category: "Quantum Computing",
    pricing: [
      {
        name: "Research",
        price: 19999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic quantum algorithms",
          "Optimization tools",
          "Research support",
          "Standard documentation",
          "Email support"
        ],
        cta: "Get Started"
      },
      {
        name: "Commercial",
        price: 39999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Research",
          "Advanced algorithms",
          "Custom optimization",
          "Priority support",
          "Custom integrations",
          "Training programs"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 79999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Commercial",
          "Custom quantum solutions",
          "Dedicated quantum team",
          "White-label options",
          "Custom hardware integration",
          "Exclusive algorithms"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $15,000-35,000. Our solution provides 1000x speed improvement vs. classical computers for specific use cases.",
    roi: "800% within 12 months through quantum advantage in optimization problems.",
    setupTime: "8-12 weeks with quantum experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/quantum-computing"
    }
  },

  {
    id: "iot-edge-computing-platform",
    title: "IoT Edge Computing Platform",
    description: "Comprehensive IoT platform with edge computing capabilities, real-time analytics, and predictive maintenance.",
    category: "IoT & Edge Computing",
    pricing: [
      {
        name: "Starter",
        price: 5999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic IoT platform",
          "Edge computing",
          "Real-time analytics",
          "Standard support",
          "100 device licenses"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 10999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Starter",
          "Advanced analytics",
          "Predictive maintenance",
          "Priority support",
          "500 device licenses",
          "Custom dashboards"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 19999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Unlimited devices",
          "Custom AI models",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $4,500-10,000. Our solution provides 90% faster response times vs. cloud-only solutions.",
    roi: "500% within 6 months through improved operational efficiency and reduced bandwidth costs.",
    setupTime: "6-8 weeks with IoT experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/iot-edge-platform"
    }
  },

  {
    id: "enterprise-blockchain-platform",
    title: "Enterprise Blockchain Platform",
    description: "Scalable enterprise blockchain solution with smart contracts, decentralized identity, and cross-chain interoperability.",
    category: "Blockchain & Web3",
    pricing: [
      {
        name: "Basic",
        price: 12999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic blockchain platform",
          "Smart contracts",
          "Standard security",
          "Email support",
          "1000 transactions/month"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 22999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Decentralized identity",
          "Cross-chain support",
          "Priority support",
          "10000 transactions/month",
          "Custom contracts"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 39999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Unlimited transactions",
          "Custom blockchain",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $10,000-25,000. Our solution provides 99.9% uptime vs. industry average of 95-98%.",
    roi: "600% within 10 months through improved security and transparency.",
    setupTime: "8-10 weeks with blockchain experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/enterprise-blockchain"
    }
  },

  {
    id: "ai-healthcare-diagnostic-platform",
    title: "AI Healthcare Diagnostic Platform",
    description: "Advanced AI-powered healthcare platform for medical imaging analysis, patient data management, and predictive diagnostics.",
    category: "AI & Healthcare",
    pricing: [
      {
        name: "Clinical",
        price: 15999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic AI diagnostics",
          "Medical imaging analysis",
          "Patient data management",
          "Standard support",
          "HIPAA compliance"
        ],
        cta: "Get Started"
      },
      {
        name: "Hospital",
        price: 29999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Clinical",
          "Advanced diagnostics",
          "Predictive analytics",
          "Priority support",
          "Custom workflows",
          "Integration support"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 59999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Hospital",
          "Custom AI models",
          "Multi-site support",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $12,000-30,000. Our solution achieves 94% accuracy vs. industry average of 80-85%.",
    roi: "700% within 12 months through improved diagnostic accuracy and reduced diagnosis time.",
    setupTime: "10-12 weeks with healthcare experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-healthcare"
    }
  },

  {
    id: "ai-powered-fintech-platform",
    title: "AI-Powered FinTech Platform",
    description: "Comprehensive financial technology platform with fraud detection, risk assessment, and automated trading capabilities.",
    category: "FinTech",
    pricing: [
      {
        name: "Basic",
        price: 9999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic fraud detection",
          "Risk assessment",
          "Standard compliance",
          "Email support",
          "1000 transactions/month"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 17999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Advanced fraud detection",
          "Automated trading",
          "Priority support",
          "10000 transactions/month",
          "Custom algorithms"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 34999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Unlimited transactions",
          "Custom AI models",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $8,000-18,000. Our solution reduces fraud by 95% vs. industry average of 70-80%.",
    roi: "550% within 8 months through improved fraud detection and trading efficiency.",
    setupTime: "6-8 weeks with FinTech experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-fintech"
    }
  },

  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform",
    description: "Advanced digital twin platform for industrial IoT, predictive maintenance, and simulation modeling.",
    category: "Digital Twin",
    pricing: [
      {
        name: "Basic",
        price: 14999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic digital twin",
          "Real-time monitoring",
          "Standard analytics",
          "Email support",
          "10 asset models"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 26999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Predictive maintenance",
          "Advanced simulation",
          "Priority support",
          "50 asset models",
          "Custom dashboards"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 49999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Unlimited assets",
          "Custom AI models",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $12,000-28,000. Our solution provides real-time monitoring vs. batch processing in traditional solutions.",
    roi: "650% within 10 months through improved operational efficiency and predictive maintenance.",
    setupTime: "8-10 weeks with digital twin experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/digital-twin"
    }
  },

  {
    id: "space-tech-analytics-platform",
    title: "Space Technology Analytics Platform",
    description: "Innovative space technology platform for satellite data analysis, space debris tracking, and orbital optimization.",
    category: "Space Technology",
    pricing: [
      {
        name: "Research",
        price: 24999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic space analytics",
          "Satellite data analysis",
          "Standard reporting",
          "Email support",
          "Research tools"
        ],
        cta: "Get Started"
      },
      {
        name: "Commercial",
        price: 44999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Research",
          "Space debris tracking",
          "Orbital optimization",
          "Priority support",
          "Commercial tools",
          "Custom analytics"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 89999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Commercial",
          "Custom space solutions",
          "Dedicated space team",
          "White-label options",
          "Custom integrations",
          "Exclusive data access"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $20,000-45,000. Our solution provides real-time insights vs. delayed data in traditional solutions.",
    roi: "900% within 16 months through improved space operations and satellite management.",
    setupTime: "12-16 weeks with space technology experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/space-tech"
    }
  },

  {
    id: "sustainable-tech-platform",
    title: "Sustainable Technology Platform",
    description: "Comprehensive sustainability platform for carbon footprint tracking, renewable energy optimization, and environmental impact assessment.",
    category: "Sustainable Technology",
    pricing: [
      {
        name: "Basic",
        price: 7999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic sustainability tracking",
          "Carbon footprint analysis",
          "Standard reporting",
          "Email support",
          "5 organizational units"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 13999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Renewable energy optimization",
          "Advanced analytics",
          "Priority support",
          "25 organizational units",
          "Custom dashboards"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 24999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Unlimited units",
          "Custom AI models",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $6,000-15,000. Our solution helps achieve carbon neutrality vs. basic tracking in traditional solutions.",
    roi: "400% within 7 months through improved sustainability and cost savings.",
    setupTime: "5-7 weeks with sustainability experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/sustainable-tech"
    }
  },

  {
    id: "ai-content-creation-suite",
    title: "AI Content Creation Suite",
    description: "Advanced AI-powered content creation platform with natural language generation, multimedia content creation, and brand voice consistency.",
    category: "AI & Content",
    pricing: [
      {
        name: "Basic",
        price: 2999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic content generation",
          "Natural language processing",
          "Standard templates",
          "Email support",
          "1000 content pieces/month"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 5499,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Multimedia content",
          "Brand voice consistency",
          "Priority support",
          "5000 content pieces/month",
          "Custom templates"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Unlimited content",
          "Custom AI models",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $2,500-6,000. Our solution generates content 10x faster vs. traditional methods.",
    roi: "350% within 3 months through improved content creation efficiency and quality.",
    setupTime: "2-3 weeks with content experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-content"
    }
  },

  {
    id: "ai-customer-support-platform",
    title: "AI Customer Support Platform",
    description: "Intelligent customer support platform with AI chatbots, sentiment analysis, and automated ticket routing.",
    category: "AI & Customer Support",
    pricing: [
      {
        name: "Basic",
        price: 3999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic AI chatbots",
          "Ticket routing",
          "Standard analytics",
          "Email support",
          "1000 tickets/month"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 6999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Sentiment analysis",
          "Advanced chatbots",
          "Priority support",
          "5000 tickets/month",
          "Custom workflows"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 12999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Unlimited tickets",
          "Custom AI models",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $3,000-7,000. Our solution reduces response time by 90% vs. industry average of 40-50%.",
    roi: "400% within 4 months through improved customer satisfaction and support efficiency.",
    setupTime: "3-4 weeks with support experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-support"
    }
  },

  {
    id: "ai-hr-management-platform",
    title: "AI HR Management Platform",
    description: "Comprehensive HR platform with AI-powered recruitment, employee performance analysis, and workforce planning.",
    category: "AI & HR",
    pricing: [
      {
        name: "Basic",
        price: 5999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Basic HR management",
          "AI recruitment",
          "Standard analytics",
          "Email support",
          "100 employees"
        ],
        cta: "Get Started"
      },
      {
        name: "Professional",
        price: 10999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Basic",
          "Performance analysis",
          "Workforce planning",
          "Priority support",
          "500 employees",
          "Custom workflows"
        ],
        popular: true,
        cta: "Most Popular"
      },
      {
        name: "Enterprise",
        price: 19999,
        currency: "$",
        billing: "one-time setup",
        features: [
          "Everything in Professional",
          "Unlimited employees",
          "Custom AI models",
          "Dedicated team",
          "White-label options",
          "Custom integrations"
        ],
        cta: "Contact Sales"
      }
    ],
    marketComparison: "Market average: $4,500-10,000. Our solution reduces hiring time by 60% vs. industry average of 20-30%.",
    roi: "500% within 6 months through improved recruitment efficiency and employee retention.",
    setupTime: "4-6 weeks with HR experts.",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-hr"
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2030;