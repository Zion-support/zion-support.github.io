export interface PricingTier {
  name: string,
  price: number,
  currency: string,
  billingCycle: string,
  features: string[],
  bestFor: string,
  popular?: boolean
}

export interface ServicePricing {
  serviceId: string,
  serviceName: string,
  category: string,
  basePrice: number,
  currency: string,
  pricingModel: string,
  tiers: PricingTier[],
  marketPrice: string,
  roi: string,
  implementationTime: string,
  supportLevel: string,
  customPricing: boolean,
  volumeDiscounts: boolean,
  enterpriseFeatures: string[],
  contactInfo: {
    phone: string,
    email: string,
    website: string
  },
}

export const COMPREHENSIVE_PRICING_GUIDE_2025: ServicePricing[] = [
  // AI Business Intelligence Platform
  {
    serviceId: "ai-business-intelligence-platform",
    serviceName: "AI Business Intelligence Platform",
    category: "AI & Analytics",
    basePrice: 2999,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Starter",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic AI analytics",
          "Up to 5 data sources",
          "Standard dashboards",
          "Email support",
          "Basic reporting"
        ],
        bestFor: "Small businesses"
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
        bestFor: "Medium enterprises",
        popular: true
      },
      {
        name: "Enterprise",
        price: 8999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI capabilities",
          "Custom integrations",
          "White-label solution",
          "24/7 support",
          "Custom development",
          "On-premise deployment",
          "Dedicated account manager"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$2,999 - $8,999/month",
    roi: "250-400%",
    implementationTime: "6-8 weeks",
    supportLevel: "enterprise",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom AI model training",
      "Advanced security features",
      "Compliance certifications",
      "Custom integrations",
      "Dedicated infrastructure"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum AI Optimization Platform
  {
    serviceId: "quantum-ai-optimization-platform",
    serviceName: "Quantum AI Optimization Platform",
    category: "Quantum Computing",
    basePrice: 4999,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Research",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic quantum algorithms",
          "Limited compute time",
          "Standard support",
          "Basic documentation"
        ],
        bestFor: "Research institutions"
      },
      {
        name: "Professional",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced quantum algorithms",
          "Extended compute time",
          "Priority support",
          "Custom algorithm development",
          "API access",
          "Performance analytics"
        ],
        bestFor: "Medium enterprises",
        popular: true
      },
      {
        name: "Enterprise",
        price: 15999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full quantum capabilities",
          "Unlimited compute time",
          "Custom hardware access",
          "24/7 support",
          "Dedicated quantum experts",
          "On-premise quantum systems"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$4,999 - $15,000/month",
    roi: "300-500%",
    implementationTime: "8-12 weeks",
    supportLevel: "premium",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom quantum hardware",
      "Advanced quantum algorithms",
      "Quantum-safe security",
      "Hybrid quantum-classical systems",
      "Quantum network access"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Content Creation Platform
  {
    serviceId: "ai-content-creation-platform",
    serviceName: "AI Content Creation & Marketing Platform",
    category: "AI & Marketing",
    basePrice: 899,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Creator",
        price: 299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic content generation",
          "Up to 50 articles/month",
          "Standard templates",
          "Email support"
        ],
        bestFor: "Content creators"
      },
      {
        name: "Professional",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced content generation",
          "Unlimited content",
          "Custom brand voice",
          "SEO optimization",
          "Social media automation",
          "Analytics dashboard",
          "Priority support"
        ],
        bestFor: "Marketing agencies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI capabilities",
          "Custom integrations",
          "White-label solution",
          "Dedicated account manager",
          "Custom training",
          "API access"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$899 - $2,999/month",
    roi: "200-400%",
    implementationTime: "2-4 weeks",
    supportLevel: "standard",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom AI model training",
      "Advanced analytics",
      "Multi-language support",
      "Custom integrations",
      "Brand voice customization"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain Supply Chain Platform
  {
    serviceId: "blockchain-supply-chain-platform",
    serviceName: "Blockchain Supply Chain Transparency Platform",
    category: "Blockchain & Supply Chain",
    basePrice: 1999,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Basic",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic tracking",
          "Up to 1000 products",
          "Standard reporting",
          "Email support"
        ],
        bestFor: "Small manufacturers"
      },
      {
        name: "Professional",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced tracking",
          "Unlimited products",
          "Smart contracts",
          "Real-time monitoring",
          "Compliance reporting",
          "API access",
          "Priority support"
        ],
        bestFor: "Medium enterprises",
        popular: true
      },
      {
        name: "Enterprise",
        price: 8999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full blockchain capabilities",
          "Custom smart contracts",
          "Multi-chain support",
          "Custom integrations",
          "Dedicated support",
          "On-premise deployment"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$1,999 - $8,999/month",
    roi: "150-300%",
    implementationTime: "8-12 weeks",
    supportLevel: "enterprise",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom blockchain networks",
      "Advanced smart contracts",
      "Multi-chain integration",
      "Custom compliance features",
      "Advanced analytics"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Customer Service Automation
  {
    serviceId: "ai-customer-service-automation",
    serviceName: "AI Customer Service Automation Platform",
    category: "AI & Customer Service",
    basePrice: 1299,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Starter",
        price: 499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic chatbot",
          "Up to 1000 conversations/month",
          "Standard templates",
          "Email support"
        ],
        bestFor: "Small businesses"
      },
      {
        name: "Professional",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI chatbot",
          "Unlimited conversations",
          "Multi-channel support",
          "Sentiment analysis",
          "Custom integrations",
          "Analytics dashboard",
          "Priority support"
        ],
        bestFor: "Medium enterprises",
        popular: true
      },
      {
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI capabilities",
          "Custom AI training",
          "White-label solution",
          "Dedicated support",
          "Custom development",
          "Advanced analytics"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$1,299 - $4,999/month",
    roi: "180-350%",
    implementationTime: "4-6 weeks",
    supportLevel: "standard",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom AI model training",
      "Advanced integrations",
      "Multi-language support",
      "Custom workflows",
      "Advanced analytics"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum-Safe Cybersecurity
  {
    serviceId: "quantum-safe-cybersecurity",
    serviceName: "Quantum-Safe Cybersecurity Platform",
    category: "Cybersecurity",
    basePrice: 3499,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Standard",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic quantum-safe encryption",
          "Standard threat detection",
          "Email support",
          "Basic reporting"
        ],
        bestFor: "Small enterprises"
      },
      {
        name: "Professional",
        price: 3499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced quantum-safe encryption",
          "Advanced threat detection",
          "Compliance management",
          "Security analytics",
          "Priority support",
          "Custom integrations"
        ],
        bestFor: "Medium enterprises",
        popular: true
      },
      {
        name: "Enterprise",
        price: 12999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full quantum-safe capabilities",
          "Custom security protocols",
          "24/7 monitoring",
          "Dedicated security team",
          "Custom development",
          "On-premise deployment"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$3,499 - $12,999/month",
    roi: "250-500%",
    implementationTime: "6-10 weeks",
    supportLevel: "enterprise",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom quantum-safe protocols",
      "Advanced threat intelligence",
      "Compliance automation",
      "Custom integrations",
      "Advanced analytics"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // 5G Network Optimization
  {
    serviceId: "5g-network-optimization-platform",
    serviceName: "5G Network Optimization Platform",
    category: "5G & Telecommunications",
    basePrice: 3999,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Basic",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic network monitoring",
          "Standard optimization",
          "Email support",
          "Basic reporting"
        ],
        bestFor: "Small telecom operators"
      },
      {
        name: "Professional",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced network optimization",
          "Real-time monitoring",
          "Predictive maintenance",
          "IoT management",
          "Priority support",
          "Custom integrations"
        ],
        bestFor: "Medium telecom operators",
        popular: true
      },
      {
        name: "Enterprise",
        price: 15999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full 5G capabilities",
          "Custom network slicing",
          "Advanced analytics",
          "Dedicated support",
          "Custom development",
          "On-premise deployment"
        ],
        bestFor: "Large telecom operators"
      }
    ],
    marketPrice: "$3,999 - $15,999/month",
    roi: "200-400%",
    implementationTime: "10-14 weeks",
    supportLevel: "enterprise",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom network slicing",
      "Advanced optimization algorithms",
      "Multi-vendor support",
      "Custom integrations",
      "Advanced analytics"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Autonomous Vehicle Fleet Management
  {
    serviceId: "autonomous-vehicle-fleet-management",
    serviceName: "Autonomous Vehicle Fleet Management Platform",
    category: "Autonomous Vehicles",
    basePrice: 2999,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Starter",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic fleet monitoring",
          "Up to 10 vehicles",
          "Standard safety features",
          "Email support"
        ],
        bestFor: "Small fleets"
      },
      {
        name: "Professional",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced fleet management",
          "Unlimited vehicles",
          "Advanced safety monitoring",
          "Route optimization",
          "Predictive maintenance",
          "Priority support",
          "Custom integrations"
        ],
        bestFor: "Medium fleets",
        popular: true
      },
      {
        name: "Enterprise",
        price: 12999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full autonomous capabilities",
          "Custom safety protocols",
          "Advanced analytics",
          "Dedicated support",
          "Custom development",
          "On-premise deployment"
        ],
        bestFor: "Large fleets"
      }
    ],
    marketPrice: "$2,999 - $12,999/month",
    roi: "250-500%",
    implementationTime: "12-16 weeks",
    supportLevel: "enterprise",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom safety protocols",
      "Advanced route optimization",
      "Multi-vehicle coordination",
      "Custom integrations",
      "Advanced analytics"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Metaverse Development Platform
  {
    serviceId: "metaverse-development-platform",
    serviceName: "Metaverse Development Platform",
    category: "Metaverse & VR/AR",
    basePrice: 2499,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Creator",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic 3D tools",
          "Up to 100 users",
          "Standard templates",
          "Email support"
        ],
        bestFor: "Small creators"
      },
      {
        name: "Professional",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced 3D tools",
          "Unlimited users",
          "VR/AR integration",
          "Custom avatars",
          "Analytics dashboard",
          "Priority support",
          "Custom integrations"
        ],
        bestFor: "Medium enterprises",
        popular: true
      },
      {
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full metaverse capabilities",
          "Custom development",
          "White-label solution",
          "Dedicated support",
          "Custom integrations",
          "On-premise deployment"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$2,499 - $9,999/month",
    roi: "300-600%",
    implementationTime: "8-12 weeks",
    supportLevel: "premium",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom 3D development",
      "Advanced VR/AR features",
      "Custom integrations",
      "Advanced analytics",
      "White-label solutions"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Brain-Computer Interface Platform
  {
    serviceId: "brain-computer-interface-platform",
    serviceName: "Brain-Computer Interface Development Platform",
    category: "Brain-Computer Interface",
    basePrice: 5999,
    currency: "$",
    pricingModel: "monthly",
    tiers: [
      {
        name: "Research",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic BCI tools",
          "Standard EEG processing",
          "Research support",
          "Email support"
        ],
        bestFor: "Research institutions"
      },
      {
        name: "Professional",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced BCI tools",
          "Advanced EEG processing",
          "Custom applications",
          "Medical device integration",
          "Analytics dashboard",
          "Priority support",
          "Custom integrations"
        ],
        bestFor: "Medical device companies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 25999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full BCI capabilities",
          "Custom hardware integration",
          "Clinical trial support",
          "Dedicated support",
          "Custom development",
          "On-premise deployment"
        ],
        bestFor: "Large medical companies"
      }
    ],
    marketPrice: "$5,999 - $25,999/month",
    roi: "300-800%",
    implementationTime: "16-20 weeks",
    supportLevel: "premium",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseFeatures: [
      "Custom BCI hardware",
      "Advanced signal processing",
      "Clinical trial support",
      "Custom integrations",
      "Advanced analytics"
    ],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
],

export const PRICING_FEATURES = {
  standardFeatures: [
    "24/7 Technical Support",
    "Regular Updates & Maintenance",
    "Security & Compliance",
    "API Access",
    "Documentation & Training",
    "Mobile App Access",
    "Analytics Dashboard",
    "Custom Branding Options"
  ],
  enterpriseFeatures: [
    "Dedicated Account Manager",
    "Custom Development",
    "On-Premise Deployment",
    "Advanced Security",
    "Custom Integrations",
    "White-Label Solutions",
    "Priority Support",
    "SLA Guarantees"
  ],
  volumeDiscounts: [
    "10% off for 2+ services",
    "20% off for 5+ services",
    "30% off for 10+ services",
    "Custom pricing for enterprise"
  ],
  paymentOptions: [
    "Monthly billing",
    "Annual billing (2 months free)",
    "Quarterly billing (1 month free)",
    "Custom payment terms for enterprise"
  ]
},
