export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  features: string[];
  limitations: string[];
  bestFor: string[];
  roi: string;
  implementationTime: string;
  supportLevel: string;
  popular?: boolean;
}

export interface ServicePricing {
  id: string;
  title: string;
  description: string;
  category: string;
  basePrice: number;
  currency: string;
  pricingTiers: PricingTier[];
  marketPrice: string;
  roi: string;
  implementationTime: string;
  trainingRequired: string;
  supportLevel: string;
  competitors: string[];
  competitorPricing: {
    name: string;
    price: string;
    savings: string;
  }[];
  roiBreakdown: {
    costSavings: string;
    efficiencyGains: string;
    revenueIncrease: string;
    timeToValue: string;
  };
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

export const COMPREHENSIVE_PRICING_GUIDE: ServicePricing[] = [
  // AI Legal Document Automation Platform
  {
    id: "ai-legal-document-automation",
    title: "AI Legal Document Automation Platform",
    description: "Advanced AI-powered platform that automates legal document creation, review, and analysis with 99.9% accuracy and compliance monitoring.",
    category: "Legal Technology",
    basePrice: 299,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Document automation",
          "Template library",
          "Basic compliance checks",
          "Email support",
          "5 user licenses"
        ],
        limitations: ["Limited templates", "Basic reporting", "Standard support"],
        bestFor: ["Small law firms", "Legal departments", "Startups"],
        roi: "300-400%",
        implementationTime: "2-3 weeks",
        supportLevel: "Standard"
      },
      {
        name: "Professional",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced automation",
          "Custom templates",
          "Compliance monitoring",
          "Priority support",
          "Unlimited users",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited training"],
        bestFor: ["Medium law firms", "Corporate legal", "Growing businesses"],
        roi: "400-500%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 1199,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full automation suite",
          "Custom integrations",
          "Advanced analytics",
          "Dedicated support",
          "Training programs",
          "White-label options"
        ],
        limitations: ["None"],
        bestFor: ["Large law firms", "Enterprise legal", "Multi-office firms"],
        roi: "500-600%",
        implementationTime: "4-6 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$299 - $1,200/month",
    roi: "400-600%",
    implementationTime: "3-4 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "Enterprise",
    competitors: ["DocuSign", "ContractPodAi", "Evisort", "Kira Systems"],
    competitorPricing: [
      { name: "DocuSign", price: "$500/month", savings: "40% savings" },
      { name: "ContractPodAi", price: "$800/month", savings: "63% savings" },
      { name: "Evisort", price: "$1,000/month", savings: "70% savings" },
      { name: "Kira Systems", price: "$1,200/month", savings: "75% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce document creation time by 80%",
      efficiencyGains: "Improve accuracy by 99.9%",
      revenueIncrease: "Handle 3x more cases",
      timeToValue: "3-4 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI Healthcare Diagnostics Platform
  {
    id: "ai-healthcare-diagnostics",
    title: "AI Healthcare Diagnostics Platform",
    description: "Revolutionary AI-powered platform that provides accurate medical diagnostics, treatment recommendations, and patient monitoring with 95%+ accuracy.",
    category: "Healthcare Technology",
    basePrice: 899,
    currency: "$",
    pricingTiers: [
      {
        name: "Clinical",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI diagnostics",
          "Treatment recommendations",
          "Patient monitoring",
          "Basic reporting",
          "Email support"
        ],
        limitations: ["Limited specialties", "Basic analytics", "Standard support"],
        bestFor: ["Small clinics", "General practitioners", "Medical startups"],
        roi: "500-700%",
        implementationTime: "4-5 weeks",
        supportLevel: "Professional"
      },
      {
        name: "Specialist",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Multi-specialty AI",
          "Advanced analytics",
          "Custom workflows",
          "Priority support",
          "Training programs",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited specialties"],
        bestFor: ["Specialty clinics", "Hospitals", "Medical groups"],
        roi: "600-800%",
        implementationTime: "5-6 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI suite",
          "All specialties",
          "Custom integrations",
          "Dedicated support",
          "White-label options",
          "Compliance tools"
        ],
        limitations: ["None"],
        bestFor: ["Large hospitals", "Healthcare systems", "Research institutions"],
        roi: "700-900%",
        implementationTime: "6-8 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$899 - $2,500/month",
    roi: "500-900%",
    implementationTime: "4-8 weeks",
    trainingRequired: "1-2 weeks",
    supportLevel: "Enterprise",
    competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare", "Epic"],
    competitorPricing: [
      { name: "IBM Watson Health", price: "$2,000/month", savings: "55% savings" },
      { name: "Google Health", price: "$2,500/month", savings: "64% savings" },
      { name: "Microsoft Healthcare", price: "$2,200/month", savings: "59% savings" },
      { name: "Epic", price: "$3,000/month", savings: "70% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce diagnostic errors by 60%",
      efficiencyGains: "Improve patient outcomes by 40%",
      revenueIncrease: "Handle 2x more patients",
      timeToValue: "4-8 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI Financial Trading Platform
  {
    id: "ai-financial-trading",
    title: "AI Financial Trading Platform",
    description: "Advanced AI-powered trading platform that provides real-time market analysis, automated trading strategies, and risk management with 85%+ win rate.",
    category: "Financial Technology",
    basePrice: 699,
    currency: "$",
    pricingTiers: [
      {
        name: "Trader",
        price: 699,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI market analysis",
          "Basic trading strategies",
          "Risk management",
          "Real-time data",
          "Email support"
        ],
        limitations: ["Limited strategies", "Basic analytics", "Standard support"],
        bestFor: ["Individual traders", "Small funds", "Trading startups"],
        roi: "400-600%",
        implementationTime: "2-3 weeks",
        supportLevel: "Professional"
      },
      {
        name: "Professional",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced strategies",
          "Portfolio optimization",
          "Custom algorithms",
          "Priority support",
          "Training programs",
          "API access"
        ],
        limitations: ["No custom strategies", "Limited markets"],
        bestFor: ["Professional traders", "Hedge funds", "Investment firms"],
        roi: "500-700%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full trading suite",
          "Custom strategies",
          "All markets",
          "Dedicated support",
          "White-label options",
          "Compliance tools"
        ],
        limitations: ["None"],
        bestFor: ["Large funds", "Banks", "Financial institutions"],
        roi: "600-800%",
        implementationTime: "4-6 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$699 - $2,500/month",
    roi: "400-800%",
    implementationTime: "2-6 weeks",
    trainingRequired: "1-2 weeks",
    supportLevel: "Enterprise",
    competitors: ["Bloomberg", "Thomson Reuters", "FactSet", "Refinitiv"],
    competitorPricing: [
      { name: "Bloomberg", price: "$2,000/month", savings: "65% savings" },
      { name: "Thomson Reuters", price: "$2,500/month", savings: "72% savings" },
      { name: "FactSet", price: "$2,200/month", savings: "68% savings" },
      { name: "Refinitiv", price: "$2,800/month", savings: "75% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce trading costs by 40%",
      efficiencyGains: "Improve win rate by 25%",
      revenueIncrease: "Increase returns by 35%",
      timeToValue: "2-6 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI Supply Chain Optimization Platform
  {
    id: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization Platform",
    description: "Intelligent supply chain platform that optimizes operations, predicts demand, and reduces costs through AI-powered analytics and automation.",
    category: "Supply Chain",
    basePrice: 599,
    currency: "$",
    pricingTiers: [
      {
        name: "Basic",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Demand forecasting",
          "Inventory optimization",
          "Basic analytics",
          "Email support",
          "5 user licenses"
        ],
        limitations: ["Limited integrations", "Basic reporting", "Standard support"],
        bestFor: ["Small manufacturers", "Retailers", "Startups"],
        roi: "300-500%",
        implementationTime: "3-4 weeks",
        supportLevel: "Standard"
      },
      {
        name: "Advanced",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced optimization",
          "Multi-location support",
          "Custom workflows",
          "Priority support",
          "Unlimited users",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited training"],
        bestFor: ["Medium manufacturers", "Retail chains", "Growing businesses"],
        roi: "400-600%",
        implementationTime: "4-5 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 1899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full optimization suite",
          "Custom integrations",
          "Advanced analytics",
          "Dedicated support",
          "Training programs",
          "White-label options"
        ],
        limitations: ["None"],
        bestFor: ["Large manufacturers", "Global retailers", "Multi-national companies"],
        roi: "500-700%",
        implementationTime: "5-7 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$599 - $1,900/month",
    roi: "300-700%",
    implementationTime: "3-7 weeks",
    trainingRequired: "1-2 weeks",
    supportLevel: "Enterprise",
    competitors: ["SAP", "Oracle", "Manhattan Associates", "JDA Software"],
    competitorPricing: [
      { name: "SAP", price: "$1,500/month", savings: "60% savings" },
      { name: "Oracle", price: "$1,800/month", savings: "67% savings" },
      { name: "Manhattan Associates", price: "$1,600/month", savings: "63% savings" },
      { name: "JDA Software", price: "$2,000/month", savings: "70% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce supply chain costs by 30%",
      efficiencyGains: "Improve inventory turnover by 40%",
      revenueIncrease: "Reduce lead times by 50%",
      timeToValue: "3-7 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI Customer Experience Analytics Platform
  {
    id: "ai-customer-experience-analytics",
    title: "AI Customer Experience Analytics Platform",
    description: "Advanced AI-powered platform that analyzes customer behavior, predicts needs, and optimizes customer journeys for maximum satisfaction and loyalty.",
    category: "Customer Experience",
    basePrice: 449,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 449,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Customer analytics",
          "Basic insights",
          "Email support",
          "5 user licenses",
          "Standard reports"
        ],
        limitations: ["Limited data sources", "Basic analytics", "Standard support"],
        bestFor: ["Small businesses", "E-commerce startups", "Service companies"],
        roi: "300-400%",
        implementationTime: "2-3 weeks",
        supportLevel: "Standard"
      },
      {
        name: "Professional",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced analytics",
          "Predictive insights",
          "Custom dashboards",
          "Priority support",
          "Unlimited users",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited training"],
        bestFor: ["Medium businesses", "Growing e-commerce", "Service providers"],
        roi: "400-500%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full analytics suite",
          "Custom integrations",
          "Advanced AI models",
          "Dedicated support",
          "Training programs",
          "White-label options"
        ],
        limitations: ["None"],
        bestFor: ["Large businesses", "Enterprise e-commerce", "Multi-brand companies"],
        roi: "500-600%",
        implementationTime: "4-5 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$449 - $1,500/month",
    roi: "300-600%",
    implementationTime: "2-5 weeks",
    trainingRequired: "1-2 weeks",
    supportLevel: "Enterprise",
    competitors: ["Segment", "Amplitude", "Mixpanel", "Optimizely"],
    competitorPricing: [
      { name: "Segment", price: "$1,200/month", savings: "63% savings" },
      { name: "Amplitude", price: "$1,400/month", savings: "68% savings" },
      { name: "Mixpanel", price: "$1,100/month", savings: "59% savings" },
      { name: "Optimizely", price: "$1,300/month", savings: "65% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce customer churn by 30%",
      efficiencyGains: "Improve conversion rates by 45%",
      revenueIncrease: "Increase customer lifetime value by 40%",
      timeToValue: "2-5 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI Content Marketing Studio
  {
    id: "ai-content-marketing-studio",
    title: "AI Content Marketing Studio",
    description: "Intelligent content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.",
    category: "Content Marketing",
    basePrice: 299,
    currency: "$",
    pricingTiers: [
      {
        name: "Creator",
        price: 299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI content generation",
          "SEO optimization",
          "Basic templates",
          "Email support",
          "5 projects/month"
        ],
        limitations: ["Limited templates", "Basic analytics", "Standard support"],
        bestFor: ["Small businesses", "Content creators", "Marketing startups"],
        roi: "400-500%",
        implementationTime: "1-2 weeks",
        supportLevel: "Standard"
      },
      {
        name: "Professional",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced generation",
          "Custom templates",
          "Analytics dashboard",
          "Priority support",
          "Unlimited projects",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited training"],
        bestFor: ["Medium businesses", "Marketing agencies", "Growing companies"],
        roi: "500-600%",
        implementationTime: "2-3 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full content suite",
          "Custom integrations",
          "Advanced analytics",
          "Dedicated support",
          "Training programs",
          "White-label options"
        ],
        limitations: ["None"],
        bestFor: ["Large businesses", "Marketing agencies", "Multi-brand companies"],
        roi: "600-700%",
        implementationTime: "3-4 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$299 - $1,000/month",
    roi: "400-700%",
    implementationTime: "1-4 weeks",
    trainingRequired: "1 week",
    supportLevel: "Enterprise",
    competitors: ["Jasper", "Copy.ai", "Writesonic", "ContentBot"],
    competitorPricing: [
      { name: "Jasper", price: "$800/month", savings: "63% savings" },
      { name: "Copy.ai", price: "$600/month", savings: "50% savings" },
      { name: "Writesonic", price: "$700/month", savings: "57% savings" },
      { name: "ContentBot", price: "$500/month", savings: "40% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce content creation time by 80%",
      efficiencyGains: "Improve SEO rankings by 60%",
      revenueIncrease: "Increase engagement by 45%",
      timeToValue: "1-4 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI DevOps Automation Platform
  {
    id: "ai-devops-automation",
    title: "AI DevOps Automation Platform",
    description: "Advanced DevOps platform that automates deployment, testing, and monitoring using AI to optimize performance and reduce operational overhead.",
    category: "DevOps",
    basePrice: 499,
    currency: "$",
    pricingTiers: [
      {
        name: "Developer",
        price: 499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "CI/CD automation",
          "Basic testing",
          "Monitoring tools",
          "Email support",
          "5 team members"
        ],
        limitations: ["Limited integrations", "Basic analytics", "Standard support"],
        bestFor: ["Small teams", "Startups", "Individual developers"],
        roi: "400-500%",
        implementationTime: "2-3 weeks",
        supportLevel: "Standard"
      },
      {
        name: "Team",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced automation",
          "Comprehensive testing",
          "Performance analytics",
          "Priority support",
          "Unlimited team members",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited training"],
        bestFor: ["Medium teams", "Growing companies", "DevOps teams"],
        roi: "500-600%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 1599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full DevOps suite",
          "Custom integrations",
          "Advanced analytics",
          "Dedicated support",
          "Training programs",
          "White-label options"
        ],
        limitations: ["None"],
        bestFor: ["Large teams", "Enterprise companies", "Multi-team organizations"],
        roi: "600-700%",
        implementationTime: "4-5 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$499 - $1,600/month",
    roi: "400-700%",
    implementationTime: "2-5 weeks",
    trainingRequired: "1-2 weeks",
    supportLevel: "Enterprise",
    competitors: ["GitLab", "Jenkins", "CircleCI", "GitHub Actions"],
    competitorPricing: [
      { name: "GitLab", price: "$1,200/month", savings: "58% savings" },
      { name: "Jenkins", price: "$800/month", savings: "38% savings" },
      { name: "CircleCI", price: "$1,400/month", savings: "64% savings" },
      { name: "GitHub Actions", price: "$1,000/month", savings: "50% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce deployment time by 70%",
      efficiencyGains: "Improve code quality by 50%",
      revenueIncrease: "Reduce downtime by 80%",
      timeToValue: "2-5 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI E-commerce Optimization Platform
  {
    id: "ai-ecommerce-optimization",
    title: "AI E-commerce Optimization Platform",
    description: "Intelligent e-commerce platform that optimizes product recommendations, and customer experience to maximize sales and conversion rates.",
    category: "E-commerce",
    basePrice: 399,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 399,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Product recommendations",
          "Basic analytics",
          "Email support",
          "5,000 products",
          "Standard templates"
        ],
        limitations: ["Limited customization", "Basic analytics", "Standard support"],
        bestFor: ["Small stores", "E-commerce startups", "Individual sellers"],
        roi: "300-400%",
        implementationTime: "2-3 weeks",
        supportLevel: "Standard"
      },
      {
        name: "Professional",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced recommendations",
          "Dynamic pricing",
          "Custom analytics",
          "Priority support",
          "Unlimited products",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited training"],
        bestFor: ["Medium stores", "Growing e-commerce", "Multi-product sellers"],
        roi: "400-500%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full optimization suite",
          "Custom integrations",
          "Advanced AI models",
          "Dedicated support",
          "Training programs",
          "White-label options"
        ],
        limitations: ["None"],
        bestFor: ["Large stores", "Enterprise e-commerce", "Multi-brand retailers"],
        roi: "500-600%",
        implementationTime: "4-5 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$399 - $1,300/month",
    roi: "300-600%",
    implementationTime: "2-5 weeks",
    trainingRequired: "1-2 weeks",
    supportLevel: "Enterprise",
    competitors: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
    competitorPricing: [
      { name: "Shopify", price: "$1,000/month", savings: "60% savings" },
      { name: "WooCommerce", price: "$800/month", savings: "50% savings" },
      { name: "Magento", price: "$1,200/month", savings: "67% savings" },
      { name: "BigCommerce", price: "$1,100/month", savings: "64% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce cart abandonment by 40%",
      efficiencyGains: "Improve conversion rates by 35%",
      revenueIncrease: "Increase average order value by 25%",
      timeToValue: "2-5 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI Mental Health Support Platform
  {
    id: "ai-mental-health-support",
    title: "AI Mental Health Support Platform",
    description: "Compassionate AI-powered platform that provides mental health support, crisis intervention, and wellness monitoring with 24/7 availability.",
    category: "Healthcare Technology",
    basePrice: 199,
    currency: "$",
    pricingTiers: [
      {
        name: "Basic",
        price: 199,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI chat support",
          "Basic wellness tracking",
          "Crisis detection",
          "Email support",
          "100 users/month"
        ],
        limitations: ["Limited features", "Basic analytics", "Standard support"],
        bestFor: ["Small organizations", "Mental health startups", "Community groups"],
        roi: "400-600%",
        implementationTime: "2-3 weeks",
        supportLevel: "Standard"
      },
      {
        name: "Professional",
        price: 399,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI support",
          "Comprehensive tracking",
          "Crisis intervention",
          "Priority support",
          "Unlimited users",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited training"],
        bestFor: ["Medium organizations", "Healthcare providers", "Educational institutions"],
        roi: "500-700%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full mental health suite",
          "Custom integrations",
          "Advanced analytics",
          "Dedicated support",
          "Training programs",
          "White-label options"
        ],
        limitations: ["None"],
        bestFor: ["Large organizations", "Healthcare systems", "Government agencies"],
        roi: "600-800%",
        implementationTime: "4-5 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$199 - $800/month",
    roi: "400-800%",
    implementationTime: "2-5 weeks",
    trainingRequired: "1-2 weeks",
    supportLevel: "Enterprise",
    competitors: ["Woebot", "Wysa", "Ginger", "Talkspace"],
    competitorPricing: [
      { name: "Woebot", price: "$600/month", savings: "67% savings" },
      { name: "Wysa", price: "$700/month", savings: "71% savings" },
      { name: "Ginger", price: "$500/month", savings: "60% savings" },
      { name: "Talkspace", price: "$800/month", savings: "75% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce mental health costs by 50%",
      efficiencyGains: "Improve access to care by 80%",
      revenueIncrease: "Increase patient satisfaction by 60%",
      timeToValue: "2-5 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI Carbon Footprint Management Platform
  {
    id: "ai-carbon-footprint-management",
    title: "AI Carbon Footprint Management Platform",
    description: "Intelligent sustainability platform that tracks, analyzes, and optimizes carbon footprints to help organizations achieve net-zero emissions goals.",
    category: "Sustainability",
    basePrice: 349,
    currency: "$",
    pricingTiers: [
      {
        name: "Basic",
        price: 349,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Carbon tracking",
          "Basic reporting",
          "Email support",
          "5 locations",
          "Standard templates"
        ],
        limitations: ["Limited data sources", "Basic analytics", "Standard support"],
        bestFor: ["Small businesses", "Sustainability startups", "Local organizations"],
        roi: "300-400%",
        implementationTime: "2-3 weeks",
        supportLevel: "Standard"
      },
      {
        name: "Professional",
        price: 699,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced tracking",
          "Custom reporting",
          "Optimization tools",
          "Priority support",
          "Unlimited locations",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited training"],
        bestFor: ["Medium businesses", "Growing companies", "Multi-location organizations"],
        roi: "400-500%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 1199,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full sustainability suite",
          "Custom integrations",
          "Advanced analytics",
          "Dedicated support",
          "Training programs",
          "White-label options"
        ],
        limitations: ["None"],
        bestFor: ["Large enterprises", "Enterprise companies", "Multi-national organizations"],
        roi: "500-600%",
        implementationTime: "4-5 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$349 - $1,200/month",
    roi: "300-600%",
    implementationTime: "2-5 weeks",
    trainingRequired: "1-2 weeks",
    supportLevel: "Enterprise",
    competitors: ["Carbon Trust", "EcoAct", "South Pole", "ClimatePartner"],
    competitorPricing: [
      { name: "Carbon Trust", price: "$1,000/month", savings: "65% savings" },
      { name: "EcoAct", price: "$1,200/month", savings: "71% savings" },
      { name: "South Pole", price: "$900/month", savings: "61% savings" },
      { name: "ClimatePartner", price: "$1,100/month", savings: "68% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce carbon costs by 40%",
      efficiencyGains: "Improve sustainability scores by 60%",
      revenueIncrease: "Achieve compliance faster by 50%",
      timeToValue: "2-5 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI Smart Home Energy Management Platform
  {
    id: "ai-smart-home-energy",
    title: "AI Smart Home Energy Management Platform",
    description: "Intelligent home energy platform that optimizes energy usage, reduces costs, and integrates with smart home devices for maximum efficiency.",
    category: "Smart Home",
    basePrice: 149,
    currency: "$",
    pricingTiers: [
      {
        name: "Basic",
        price: 149,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Energy monitoring",
          "Basic optimization",
          "Mobile app",
          "Email support",
          "5 devices"
        ],
        limitations: ["Limited devices", "Basic analytics", "Standard support"],
        bestFor: ["Individual homeowners", "Small families", "Energy-conscious users"],
        roi: "200-300%",
        implementationTime: "1-2 weeks",
        supportLevel: "Standard"
      },
      {
        name: "Professional",
        price: 299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced optimization",
          "Smart integrations",
          "Custom analytics",
          "Priority support",
          "Unlimited devices",
          "API access"
        ],
        limitations: ["No custom integrations", "Limited training"],
        bestFor: ["Larger homes", "Smart home enthusiasts", "Growing families"],
        roi: "300-400%",
        implementationTime: "2-3 weeks",
        supportLevel: "Priority"
      },
      {
        name: "Enterprise",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full energy suite",
          "Custom integrations",
          "Advanced AI models",
          "Dedicated support",
          "Training programs",
          "White-label options"
        ],
        limitations: ["None"],
        bestFor: ["Large properties", "Property managers", "Multi-unit buildings"],
        roi: "400-500%",
        implementationTime: "3-4 weeks",
        supportLevel: "Enterprise"
      }
    ],
    marketPrice: "$149 - $600/month",
    roi: "200-500%",
    implementationTime: "1-4 weeks",
    trainingRequired: "1 week",
    supportLevel: "Enterprise",
    competitors: ["Nest", "Ecobee", "Honeywell", "Siemens"],
    competitorPricing: [
      { name: "Nest", price: "$400/month", savings: "63% savings" },
      { name: "Ecobee", price: "$350/month", savings: "57% savings" },
      { name: "Honeywell", price: "$500/month", savings: "70% savings" },
      { name: "Siemens", price: "$600/month", savings: "75% savings" }
    ],
    roiBreakdown: {
      costSavings: "Reduce energy costs by 30%",
      efficiencyGains: "Improve energy efficiency by 40%",
      revenueIncrease: "Increase home value by 15%",
      timeToValue: "1-4 weeks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
