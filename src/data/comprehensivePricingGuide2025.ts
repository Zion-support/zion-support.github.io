export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
}

export interface ServicePricing {
  id: string;
  title: string;
  description: string;
  category: string;
  pricingTiers: PricingTier[];
  marketComparison: {
    competitors: string[];
    averageMarketPrice: string;
    ourAdvantage: string;
  };
  roi: string;
  implementationTime: string;
  supportLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const COMPREHENSIVE_PRICING_GUIDE_2025: ServicePricing[] = [
  // AI Business Intelligence Platform
  {
    id: "ai-business-intelligence-platform",
    title: "AI Business Intelligence Platform",
    description: "Transform your data into actionable insights with AI-powered analytics and automated reporting.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Starter",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic AI analytics",
          "5 data sources",
          "Standard dashboards",
          "Email support",
          "Basic reporting"
        ],
        bestFor: "Small businesses starting with AI analytics"
      },
      {
        name: "Professional",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI analytics",
          "Unlimited data sources",
          "Custom dashboards",
          "Priority support",
          "Advanced reporting",
          "API access",
          "Mobile app"
        ],
        bestFor: "Growing companies needing comprehensive BI",
        popular: true
      },
      {
        name: "Enterprise",
        price: 8999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI capabilities",
          "Unlimited everything",
          "Custom AI models",
          "24/7 support",
          "White-label options",
          "On-premise deployment",
          "Custom integrations"
        ],
        bestFor: "Large enterprises requiring full AI capabilities"
      }
    ],
    marketComparison: {
      competitors: ["Tableau", "Power BI", "Looker", "Qlik"],
      averageMarketPrice: "$3,500 - $12,000/month",
      ourAdvantage: "30% more affordable with superior AI capabilities"
    },
    roi: "250-400% within 12 months",
    implementationTime: "6-8 weeks",
    supportLevel: "Enterprise-grade with 24/7 availability",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum AI Hybrid Platform
  {
    id: "quantum-ai-hybrid-platform",
    title: "Quantum AI Hybrid Platform",
    description: "Revolutionary platform combining quantum computing with AI for unprecedented computational power.",
    category: "Quantum Computing",
    pricingTiers: [
      {
        name: "Research",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic quantum algorithms",
          "AI model acceleration",
          "Research support",
          "Email support",
          "Basic documentation"
        ],
        bestFor: "Research institutions and academic projects"
      },
      {
        name: "Professional",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced quantum algorithms",
          "Full AI integration",
          "Custom development",
          "Priority support",
          "API access",
          "Performance analytics",
          "Training sessions"
        ],
        bestFor: "Companies requiring quantum AI capabilities",
        popular: true
      },
      {
        name: "Enterprise",
        price: 14999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full quantum capabilities",
          "Custom algorithm development",
          "Dedicated support team",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Exclusive quantum resources"
        ],
        bestFor: "Large enterprises and government agencies"
      }
    ],
    marketComparison: {
      competitors: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum"],
      averageMarketPrice: "$5,000 - $20,000/month",
      ourAdvantage: "Competitive pricing with superior AI integration"
    },
    roi: "500-1000% for research and optimization applications",
    implementationTime: "8-12 weeks",
    supportLevel: "Premium with dedicated quantum experts",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Zero Trust Security Platform
  {
    id: "zero-trust-security-platform",
    title: "Zero Trust Security Platform",
    description: "Enterprise-grade zero trust security with continuous verification and real-time threat prevention.",
    category: "Cybersecurity",
    pricingTiers: [
      {
        name: "Basic",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic identity verification",
          "Multi-factor authentication",
          "Email support",
          "Standard security",
          "Basic reporting"
        ],
        bestFor: "Small businesses needing basic security"
      },
      {
        name: "Professional",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full zero trust implementation",
          "Advanced threat detection",
          "Priority support",
          "Compliance automation",
          "Real-time monitoring",
          "API access",
          "Mobile app"
        ],
        bestFor: "Companies requiring comprehensive security",
        popular: true
      },
      {
        name: "Enterprise",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Complete security suite",
          "Custom integrations",
          "24/7 support",
          "On-premise options",
          "Custom compliance",
          "White-label solutions",
          "Dedicated security team"
        ],
        bestFor: "Large enterprises with complex security needs"
      }
    ],
    marketComparison: {
      competitors: ["Okta", "Ping Identity", "ForgeRock", "CyberArk"],
      averageMarketPrice: "$2,500 - $8,000/month",
      ourAdvantage: "25% more affordable with superior AI capabilities"
    },
    roi: "300-500% through reduced security incidents",
    implementationTime: "4-6 weeks",
    supportLevel: "Enterprise with 24/7 security monitoring",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT Edge AI Platform
  {
    id: "iot-edge-ai-platform",
    title: "IoT Edge AI Platform",
    description: "Intelligent IoT platform with edge AI processing for real-time decision making and optimization.",
    category: "IoT & Edge Computing",
    pricingTiers: [
      {
        name: "Starter",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic edge processing",
          "Up to 100 devices",
          "Email support",
          "Basic analytics",
          "Standard security"
        ],
        bestFor: "Small IoT deployments"
      },
      {
        name: "Professional",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced edge AI",
          "Unlimited devices",
          "Priority support",
          "Real-time analytics",
          "Custom AI models",
          "API access",
          "Mobile dashboard"
        ],
        bestFor: "Growing IoT operations",
        popular: true
      },
      {
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full edge AI capabilities",
          "Custom development",
          "24/7 support",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Dedicated IoT team"
        ],
        bestFor: "Large-scale IoT deployments"
      }
    ],
    marketComparison: {
      competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "IBM Watson IoT"],
      averageMarketPrice: "$1,800 - $6,000/month",
      ourAdvantage: "20% more affordable with superior edge AI"
    },
    roi: "200-400% through operational efficiency",
    implementationTime: "6-10 weeks",
    supportLevel: "Premium with IoT specialists",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain Web3 Development Platform
  {
    id: "blockchain-web3-platform",
    title: "Blockchain Web3 Development Platform",
    description: "Comprehensive platform for building and deploying decentralized applications with enterprise security.",
    category: "Blockchain & Web3",
    pricingTiers: [
      {
        name: "Developer",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic development tools",
          "Single chain support",
          "Email support",
          "Basic templates",
          "Standard security"
        ],
        bestFor: "Individual developers and small projects"
      },
      {
        name: "Professional",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Multi-chain support",
          "Advanced development tools",
          "Priority support",
          "Custom smart contracts",
          "Security auditing",
          "API access",
          "Analytics dashboard"
        ],
        bestFor: "Growing blockchain projects",
        popular: true
      },
      {
        name: "Enterprise",
        price: 7999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full platform capabilities",
          "Custom development",
          "24/7 support",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Dedicated blockchain team"
        ],
        bestFor: "Large blockchain enterprises"
      }
    ],
    marketComparison: {
      competitors: ["Alchemy", "Infura", "QuickNode", "Moralis"],
      averageMarketPrice: "$2,800 - $9,000/month",
      ourAdvantage: "15% more affordable with superior enterprise features"
    },
    roi: "400-800% for successful dApp deployments",
    implementationTime: "8-12 weeks",
    supportLevel: "Premium with blockchain experts",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Marketing Automation Platform
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation Platform",
    description: "Intelligent marketing platform that automates campaigns and personalizes customer engagement.",
    category: "Marketing & Sales",
    pricingTiers: [
      {
        name: "Starter",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic AI automation",
          "Up to 10,000 contacts",
          "Email support",
          "Basic templates",
          "Standard analytics"
        ],
        bestFor: "Small businesses starting with AI marketing"
      },
      {
        name: "Professional",
        price: 1799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI automation",
          "Unlimited contacts",
          "Priority support",
          "Custom campaigns",
          "Advanced analytics",
          "API access",
          "Mobile app"
        ],
        bestFor: "Growing companies needing AI marketing",
        popular: true
      },
      {
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI capabilities",
          "Custom development",
          "24/7 support",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Dedicated marketing team"
        ],
        bestFor: "Large enterprises with complex marketing needs"
      }
    ],
    marketComparison: {
      competitors: ["HubSpot", "Marketo", "Pardot", "ActiveCampaign"],
      averageMarketPrice: "$2,200 - $7,000/month",
      ourAdvantage: "20% more affordable with superior AI capabilities"
    },
    roi: "250-500% through improved conversion rates",
    implementationTime: "4-6 weeks",
    supportLevel: "Premium with marketing specialists",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud-Native DevOps Platform
  {
    id: "cloud-native-devops",
    title: "Cloud-Native DevOps Platform",
    description: "Enterprise-grade DevOps platform automating the entire software development lifecycle.",
    category: "Cloud & DevOps",
    pricingTiers: [
      {
        name: "Team",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic CI/CD",
          "Up to 10 developers",
          "Email support",
          "Standard security",
          "Basic monitoring"
        ],
        bestFor: "Small development teams"
      },
      {
        name: "Professional",
        price: 2199,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced CI/CD",
          "Unlimited developers",
          "Priority support",
          "Full automation",
          "Advanced monitoring",
          "API access",
          "Custom workflows"
        ],
        bestFor: "Growing development teams",
        popular: true
      },
      {
        name: "Enterprise",
        price: 6999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full platform capabilities",
          "Custom development",
          "24/7 support",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Dedicated DevOps team"
        ],
        bestFor: "Large enterprises with complex DevOps needs"
      }
    ],
    marketComparison: {
      competitors: ["GitLab", "Jenkins", "CircleCI", "GitHub Actions"],
      averageMarketPrice: "$2,500 - $8,500/month",
      ourAdvantage: "25% more affordable with superior automation"
    },
    roi: "300-600% through faster development cycles",
    implementationTime: "6-10 weeks",
    supportLevel: "Enterprise with DevOps experts",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Customer Service Platform
  {
    id: "ai-customer-service",
    title: "AI Customer Service Platform",
    description: "Intelligent customer service combining AI chatbots with human agents for exceptional experiences.",
    category: "Customer Service",
    pricingTiers: [
      {
        name: "Starter",
        price: 699,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic AI chatbot",
          "Up to 1,000 conversations",
          "Email support",
          "Basic templates",
          "Standard analytics"
        ],
        bestFor: "Small businesses starting with AI support"
      },
      {
        name: "Professional",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI chatbot",
          "Unlimited conversations",
          "Priority support",
          "Custom workflows",
          "Advanced analytics",
          "API access",
          "Mobile app"
        ],
        bestFor: "Growing companies needing AI support",
        popular: true
      },
      {
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI capabilities",
          "Custom development",
          "24/7 support",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Dedicated support team"
        ],
        bestFor: "Large enterprises with complex support needs"
      }
    ],
    marketComparison: {
      competitors: ["Intercom", "Zendesk", "Freshdesk", "Help Scout"],
      averageMarketPrice: "$1,600 - $5,500/month",
      ourAdvantage: "25% more affordable with superior AI capabilities"
    },
    roi: "200-400% through improved support efficiency",
    implementationTime: "4-6 weeks",
    supportLevel: "Premium with support specialists",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Compliance & Governance Platform
  {
    id: "compliance-governance",
    title: "AI-Powered Compliance & Governance Platform",
    description: "Comprehensive compliance management automating regulatory requirements and risk assessment.",
    category: "Compliance & Governance",
    pricingTiers: [
      {
        name: "Basic",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic compliance tracking",
          "Standard regulations",
          "Email support",
          "Basic reporting",
          "Standard security"
        ],
        bestFor: "Small companies with basic compliance needs"
      },
      {
        name: "Professional",
        price: 2599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced compliance automation",
          "Multiple regulations",
          "Priority support",
          "Risk assessment",
          "Advanced reporting",
          "API access",
          "Custom workflows"
        ],
        bestFor: "Companies requiring comprehensive compliance",
        popular: true
      },
      {
        name: "Enterprise",
        price: 7999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full compliance suite",
          "Custom development",
          "24/7 support",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Dedicated compliance team"
        ],
        bestFor: "Large enterprises with complex compliance needs"
      }
    ],
    marketComparison: {
      competitors: ["MetricStream", "LogicGate", "NAVEX Global", "Diligent"],
      averageMarketPrice: "$3,200 - $10,000/month",
      ourAdvantage: "20% more affordable with superior AI automation"
    },
    roi: "300-600% through reduced compliance costs",
    implementationTime: "8-12 weeks",
    supportLevel: "Enterprise with compliance experts",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Twin Platform
  {
    id: "digital-twin-platform",
    title: "AI-Powered Digital Twin Platform",
    description: "Advanced digital twin platform for real-time monitoring, simulation, and optimization.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Starter",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic digital twin",
          "Up to 10 assets",
          "Email support",
          "Basic visualization",
          "Standard analytics"
        ],
        bestFor: "Small companies starting with digital twins"
      },
      {
        name: "Professional",
        price: 3499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced digital twin",
          "Unlimited assets",
          "Priority support",
          "3D visualization",
          "Advanced analytics",
          "API access",
          "Custom models"
        ],
        bestFor: "Growing companies needing digital twins",
        popular: true
      },
      {
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full digital twin capabilities",
          "Custom development",
          "24/7 support",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Dedicated digital twin team"
        ],
        bestFor: "Large enterprises with complex digital twin needs"
      }
    ],
    marketComparison: {
      competitors: ["Siemens", "GE Digital", "PTC", "Microsoft Azure Digital Twins"],
      averageMarketPrice: "$4,500 - $15,000/month",
      ourAdvantage: "25% more affordable with superior AI capabilities"
    },
    roi: "400-800% through operational optimization",
    implementationTime: "10-16 weeks",
    supportLevel: "Premium with digital twin specialists",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered HR Platform
  {
    id: "ai-hr-platform",
    title: "AI-Powered HR Management Platform",
    description: "Intelligent HR platform automating recruitment, employee management, and workforce analytics.",
    category: "Business Operations",
    pricingTiers: [
      {
        name: "Starter",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic HR automation",
          "Up to 100 employees",
          "Email support",
          "Basic reporting",
          "Standard features"
        ],
        bestFor: "Small companies starting with AI HR"
      },
      {
        name: "Professional",
        price: 1899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced HR automation",
          "Unlimited employees",
          "Priority support",
          "AI recruitment",
          "Advanced analytics",
          "API access",
          "Mobile app"
        ],
        bestFor: "Growing companies needing AI HR",
        popular: true
      },
      {
        name: "Enterprise",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full HR capabilities",
          "Custom development",
          "24/7 support",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Dedicated HR team"
        ],
        bestFor: "Large enterprises with complex HR needs"
      }
    ],
    marketComparison: {
      competitors: ["Workday", "BambooHR", "ADP", "Paychex", "Gusto"],
      averageMarketPrice: "$2,400 - $8,500/month",
      ourAdvantage: "25% more affordable with superior AI capabilities"
    },
    roi: "250-500% through improved HR efficiency",
    implementationTime: "6-8 weeks",
    supportLevel: "Premium with HR specialists",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Financial AI Platform
  {
    id: "financial-ai-platform",
    title: "AI-Powered Financial Intelligence Platform",
    description: "Comprehensive financial platform using AI for risk assessment, fraud detection, and investment analysis.",
    category: "Financial Services",
    pricingTiers: [
      {
        name: "Professional",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic financial AI",
          "Risk assessment",
          "Email support",
          "Basic analytics",
          "Standard security"
        ],
        bestFor: "Financial companies starting with AI"
      },
      {
        name: "Advanced",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced financial AI",
          "Full risk management",
          "Priority support",
          "Fraud detection",
          "Advanced analytics",
          "API access",
          "Custom models"
        ],
        bestFor: "Growing financial companies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 12999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full financial AI suite",
          "Custom development",
          "24/7 support",
          "On-premise options",
          "Custom integrations",
          "White-label solutions",
          "Dedicated financial team"
        ],
        bestFor: "Large financial institutions"
      }
    ],
    marketComparison: {
      competitors: ["Bloomberg", "Reuters", "FactSet", "Morningstar", "Refinitiv"],
      averageMarketPrice: "$5,000 - $20,000/month",
      ourAdvantage: "30% more affordable with superior AI capabilities"
    },
    roi: "500-1000% for successful implementations",
    implementationTime: "8-12 weeks",
    supportLevel: "Enterprise with financial experts",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

// Special Pricing Packages
export const SPECIAL_PRICING_PACKAGES = [
  {
    name: "Startup Package",
    description: "Perfect for startups and small businesses",
    services: ["AI Business Intelligence Platform", "AI Marketing Automation", "AI Customer Service Platform"],
    originalPrice: 5597,
    discountedPrice: 3999,
    savings: "28% savings",
    features: [
      "Full access to 3 core AI services",
      "Priority support",
      "Implementation assistance",
      "Training sessions",
      "30-day money-back guarantee"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    name: "Enterprise Suite",
    description: "Complete solution for large enterprises",
    services: ["All 15 AI and technology services"],
    originalPrice: 49999,
    discountedPrice: 34999,
    savings: "30% savings",
    features: [
      "Full access to all services",
      "24/7 dedicated support",
      "Custom development",
      "On-premise options",
      "White-label solutions",
      "Dedicated account team",
      "Priority implementation"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    name: "Industry Solutions",
    description: "Tailored packages for specific industries",
    industries: ["Healthcare", "Finance", "Manufacturing", "Retail", "Government"],
    pricing: "Custom pricing based on requirements",
    features: [
      "Industry-specific AI models",
      "Compliance automation",
      "Custom integrations",
      "Dedicated industry experts",
      "Implementation support"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

// Contact Information
export const CONTACT_INFORMATION = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  supportHours: "24/7",
  responseTime: "< 2 hours",
  consultation: "Free initial consultation available"
};