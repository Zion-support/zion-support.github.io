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
    features: string[];
  }[];
  roiBreakdown: {
    timeframe: string;
    savings: string;
    efficiency: string;
    additionalBenefits: string;
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
          "Up to 100 documents/month",
          "Basic AI document generation",
          "Standard legal templates",
          "Email support",
          "Basic compliance checking"
        ],
        bestFor: "Small law firms and solo practitioners"
      },
      {
        name: "Professional",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 500 documents/month",
          "Advanced AI analysis",
          "Custom template creation",
          "Priority support",
          "Advanced compliance monitoring",
          "API access",
          "Multi-user support"
        ],
        bestFor: "Growing law firms and legal departments",
        popular: true
      },
      {
        name: "Enterprise",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited documents",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security features",
          "White-label options",
          "Compliance automation",
          "Integration services"
        ],
        bestFor: "Large law firms and corporate legal departments"
      }
    ],
    marketPrice: "$299 - $1,200/month",
    roi: "400-600%",
    implementationTime: "3-4 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "Enterprise",
    competitors: ["DocuSign", "ContractPodAi", "Evisort", "Kira Systems"],
    competitorPricing: [
      {
        name: "DocuSign",
        price: "$300 - $1,200/month",
        features: ["Document signing", "Basic automation", "Standard templates"]
      },
      {
        name: "ContractPodAi",
        price: "$500 - $2,000/month",
        features: ["Contract analysis", "AI review", "Legal templates"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$15,000 - $30,000",
      efficiency: "70% time reduction",
      additionalBenefits: "Improved compliance, reduced errors"
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
    description: "Revolutionary AI platform that provides accurate medical diagnostics, symptom analysis, and health monitoring with FDA compliance and HIPAA security.",
    category: "Healthcare Technology",
    basePrice: 599,
    currency: "$",
    pricingTiers: [
      {
        name: "Clinical",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 1,000 patients/month",
          "AI symptom analysis",
          "Basic health monitoring",
          "Standard reporting",
          "Email support",
          "HIPAA compliance"
        ],
        bestFor: "Small clinics and medical practices"
      },
      {
        name: "Hospital",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10,000 patients/month",
          "Advanced AI diagnostics",
          "Medical image recognition",
          "Predictive analytics",
          "Priority support",
          "Custom integrations",
          "API access",
          "Multi-location support"
        ],
        bestFor: "Hospitals and healthcare systems",
        popular: true
      },
      {
        name: "Enterprise",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited patients",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Research capabilities",
          "Implementation services"
        ],
        bestFor: "Large healthcare systems and research institutions"
      }
    ],
    marketPrice: "$599 - $2,500/month",
    roi: "500-800%",
    implementationTime: "4-6 weeks",
    trainingRequired: "1 week",
    supportLevel: "Enterprise",
    competitors: ["Butterfly Network", "Zebra Medical", "Aidoc", "Enlitic"],
    competitorPricing: [
      {
        name: "Butterfly Network",
        price: "$2,000 - $5,000/month",
        features: ["Ultrasound imaging", "AI analysis", "Mobile access"]
      },
      {
        name: "Zebra Medical",
        price: "$1,500 - $4,000/month",
        features: ["Medical imaging", "AI diagnostics", "Clinical workflow"]
      }
    ],
    roiBreakdown: {
      timeframe: "18 months",
      savings: "$50,000 - $100,000",
      efficiency: "40% accuracy improvement",
      additionalBenefits: "Better patient outcomes, reduced costs"
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
    description: "Advanced AI-powered trading platform that provides real-time market analysis, automated trading strategies, and risk management for institutional and retail investors.",
    category: "Financial Technology",
    basePrice: 799,
    currency: "$",
    pricingTiers: [
      {
        name: "Retail",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to $100K portfolio",
          "Basic AI analysis",
          "Standard trading tools",
          "Email support",
          "Mobile trading",
          "Basic risk management"
        ],
        bestFor: "Individual investors and small traders"
      },
      {
        name: "Professional",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to $1M portfolio",
          "Advanced AI strategies",
          "Automated trading",
          "Priority support",
          "Advanced analytics",
          "API access",
          "Custom strategies",
          "Risk management tools"
        ],
        bestFor: "Professional traders and investment firms",
        popular: true
      },
      {
        name: "Institutional",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited portfolio size",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Compliance automation",
          "Implementation services"
        ],
        bestFor: "Large investment firms and institutions"
      }
    ],
    marketPrice: "$799 - $3,000/month",
    roi: "600-900%",
    implementationTime: "4-5 weeks",
    trainingRequired: "1-2 weeks",
    supportLevel: "Enterprise",
    competitors: ["Alpaca", "QuantConnect", "Zerodha", "Robinhood"],
    competitorPricing: [
      {
        name: "Alpaca",
        price: "$99 - $500/month",
        features: ["Commission-free trading", "API access", "Basic analytics"]
      },
      {
        name: "QuantConnect",
        price: "$200 - $1,000/month",
        features: ["Algorithmic trading", "Backtesting", "Research tools"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$25,000 - $75,000",
      efficiency: "25% return improvement",
      additionalBenefits: "Reduced risk, automated strategies"
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
    description: "Intelligent supply chain platform that uses AI to optimize inventory, predict demand, reduce costs, and improve efficiency across the entire supply chain network.",
    category: "Supply Chain Technology",
    basePrice: 449,
    currency: "$",
    pricingTiers: [
      {
        name: "Small Business",
        price: 449,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 1,000 SKUs",
          "Basic demand forecasting",
          "Inventory optimization",
          "Email support",
          "Standard reporting",
          "Basic integrations"
        ],
        bestFor: "Small manufacturers and retailers"
      },
      {
        name: "Enterprise",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100,000 SKUs",
          "Advanced AI optimization",
          "Multi-location support",
          "Priority support",
          "Advanced analytics",
          "API access",
          "Custom workflows",
          "Real-time monitoring"
        ],
        bestFor: "Large manufacturers and retailers",
        popular: true
      },
      {
        name: "Global",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited SKUs",
          "Full AI autonomy",
          "Global supply chain",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Custom AI models",
          "Implementation services"
        ],
        bestFor: "Global manufacturers and retailers"
      }
    ],
    marketPrice: "$449 - $1,800/month",
    roi: "350-500%",
    implementationTime: "3-4 weeks",
    trainingRequired: "3-5 days",
    supportLevel: "Professional",
    competitors: ["Llamasoft", "Elementum", "E2open", "Kinaxis"],
    competitorPricing: [
      {
        name: "Llamasoft",
        price: "$2,000 - $10,000/month",
        features: ["Supply chain design", "Optimization", "Analytics"]
      },
      {
        name: "Kinaxis",
        price: "$1,500 - $8,000/month",
        features: ["Supply chain planning", "Collaboration", "Analytics"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$20,000 - $50,000",
      efficiency: "30% cost reduction",
      additionalBenefits: "Improved efficiency, better forecasting"
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
    description: "Comprehensive customer experience analytics platform that uses AI to analyze customer behavior, predict churn, and optimize customer journeys across all touchpoints.",
    category: "Customer Analytics",
    basePrice: 349,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 349,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10,000 customers",
          "Basic customer analytics",
          "Churn prediction",
          "Email support",
          "Standard dashboards",
          "Basic integrations"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        name: "Growth",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100,000 customers",
          "Advanced AI analytics",
          "Customer journey mapping",
          "Priority support",
          "Advanced reporting",
          "API access",
          "Custom dashboards",
          "Multi-channel tracking"
        ],
        bestFor: "Growing businesses and mid-market companies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited customers",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Custom integrations",
          "Implementation services"
        ],
        bestFor: "Large enterprises and corporations"
      }
    ],
    marketPrice: "$349 - $1,400/month",
    roi: "400-600%",
    implementationTime: "2-3 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "Professional",
    competitors: ["Mixpanel", "Amplitude", "Hotjar", "FullStory"],
    competitorPricing: [
      {
        name: "Mixpanel",
        price: "$25 - $2,000/month",
        features: ["Event tracking", "Analytics", "A/B testing"]
      },
      {
        name: "Amplitude",
        price: "$995 - $5,000/month",
        features: ["Product analytics", "User behavior", "Cohort analysis"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$15,000 - $40,000",
      efficiency: "35% retention improvement",
      additionalBenefits: "Better customer insights, reduced churn"
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
    description: "Intelligent content creation and marketing platform that generates high-quality content, optimizes campaigns, and automates marketing workflows with AI-powered insights.",
    category: "Marketing Technology",
    basePrice: 199,
    currency: "$",
    pricingTiers: [
      {
        name: "Creator",
        price: 199,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 50 content pieces/month",
          "AI content generation",
          "Basic SEO optimization",
          "Email support",
          "Standard templates",
          "Basic analytics"
        ],
        bestFor: "Content creators and small businesses"
      },
      {
        name: "Marketer",
        price: 449,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 200 content pieces/month",
          "Advanced AI writing",
          "Full SEO optimization",
          "Priority support",
          "Custom templates",
          "Advanced analytics",
          "API access",
          "Multi-language support"
        ],
        bestFor: "Marketing teams and agencies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited content",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Custom integrations",
          "Implementation services"
        ],
        bestFor: "Large marketing teams and enterprises"
      }
    ],
    marketPrice: "$199 - $800/month",
    roi: "300-500%",
    implementationTime: "2-3 weeks",
    trainingRequired: "1-2 days",
    supportLevel: "Professional",
    competitors: ["Jasper", "Copy.ai", "Writesonic", "ContentBot"],
    competitorPricing: [
      {
        name: "Jasper",
        price: "$39 - $125/month",
        features: ["AI writing", "Templates", "SEO optimization"]
      },
      {
        name: "Copy.ai",
        price: "$49 - $1,000/month",
        features: ["AI copywriting", "Brand voice", "Content generation"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$10,000 - $25,000",
      efficiency: "10x content production",
      additionalBenefits: "Better SEO rankings, improved engagement"
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
    description: "Intelligent DevOps platform that automates deployment, monitoring, and infrastructure management using AI to predict issues and optimize performance.",
    category: "DevOps & Infrastructure",
    basePrice: 399,
    currency: "$",
    pricingTiers: [
      {
        name: "Developer",
        price: 399,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10 applications",
          "Basic automation",
          "Standard monitoring",
          "Email support",
          "Basic reporting",
          "Standard integrations"
        ],
        bestFor: "Small development teams and startups"
      },
      {
        name: "Team",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 50 applications",
          "Advanced AI automation",
          "Predictive monitoring",
          "Priority support",
          "Advanced analytics",
          "API access",
          "Custom workflows",
          "Multi-cloud support"
        ],
        bestFor: "Growing development teams and mid-market companies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited applications",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Custom integrations",
          "Implementation services"
        ],
        bestFor: "Large development teams and enterprises"
      }
    ],
    marketPrice: "$399 - $1,600/month",
    roi: "400-700%",
    implementationTime: "3-4 weeks",
    trainingRequired: "1 week",
    supportLevel: "Professional",
    competitors: ["GitLab", "Jenkins", "CircleCI", "GitHub Actions"],
    competitorPricing: [
      {
        name: "GitLab",
        price: "$19 - $99/month",
        features: ["CI/CD", "Repository", "Issue tracking"]
      },
      {
        name: "CircleCI",
        price: "$30 - $300/month",
        features: ["CI/CD", "Testing", "Deployment"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$20,000 - $60,000",
      efficiency: "80% deployment time reduction",
      additionalBenefits: "Better reliability, reduced costs"
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
    description: "Intelligent e-commerce platform that optimizes product recommendations, pricing, inventory, and customer experience using AI to maximize sales and profitability.",
    category: "E-commerce Technology",
    basePrice: 299,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 1,000 products",
          "Basic AI recommendations",
          "Standard optimization",
          "Email support",
          "Basic analytics",
          "Standard integrations"
        ],
        bestFor: "Small e-commerce businesses"
      },
      {
        name: "Growth",
        price: 699,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10,000 products",
          "Advanced AI optimization",
          "Dynamic pricing",
          "Priority support",
          "Advanced analytics",
          "API access",
          "Custom algorithms",
          "Multi-channel support"
        ],
        bestFor: "Growing e-commerce businesses",
        popular: true
      },
      {
        name: "Enterprise",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited products",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Custom integrations",
          "Implementation services"
        ],
        bestFor: "Large e-commerce businesses and marketplaces"
      }
    ],
    marketPrice: "$299 - $1,200/month",
    roi: "350-600%",
    implementationTime: "3-4 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "Professional",
    competitors: ["Klevu", "Algolia", "Elasticsearch", "SearchSpring"],
    competitorPricing: [
      {
        name: "Algolia",
        price: "$1 - $1,000/month",
        features: ["Search", "Recommendations", "Analytics"]
      },
      {
        name: "Klevu",
        price: "$200 - $1,000/month",
        features: ["AI search", "Personalization", "Analytics"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$15,000 - $40,000",
      efficiency: "45% conversion improvement",
      additionalBenefits: "Better customer experience, increased sales"
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
    description: "Compassionate AI-powered mental health platform that provides 24/7 support, mood tracking, and personalized wellness recommendations with clinical oversight.",
    category: "Healthcare Technology",
    basePrice: 149,
    currency: "$",
    pricingTiers: [
      {
        name: "Individual",
        price: 149,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "24/7 AI support",
          "Mood tracking",
          "Basic wellness recommendations",
          "Email support",
          "Mobile app",
          "Basic privacy controls"
        ],
        bestFor: "Individuals seeking mental health support"
      },
      {
        name: "Professional",
        price: 399,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100 users",
          "Advanced AI support",
          "Clinical oversight",
          "Priority support",
          "Advanced analytics",
          "API access",
          "Custom integrations",
          "Multi-language support"
        ],
        bestFor: "Mental health professionals and small practices",
        popular: true
      },
      {
        name: "Enterprise",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited users",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Custom integrations",
          "Implementation services"
        ],
        bestFor: "Large healthcare systems and organizations"
      }
    ],
    marketPrice: "$149 - $600/month",
    roi: "400-700%",
    implementationTime: "4-5 weeks",
    trainingRequired: "1 week",
    supportLevel: "Enterprise",
    competitors: ["Woebot", "Ginger", "Talkspace", "BetterHelp"],
    competitorPricing: [
      {
        name: "Woebot",
        price: "$39/month",
        features: ["AI chatbot", "Mood tracking", "CBT techniques"]
      },
      {
        name: "Ginger",
        price: "$129 - $349/month",
        features: ["Therapy", "Coaching", "Psychiatry"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$8,000 - $20,000",
      efficiency: "Immediate support availability",
      additionalBenefits: "Better mental health outcomes, reduced stigma"
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
    description: "Intelligent sustainability platform that tracks, analyzes, and optimizes carbon footprints for businesses and individuals, providing actionable insights for environmental impact reduction.",
    category: "Sustainability Technology",
    basePrice: 249,
    currency: "$",
    pricingTiers: [
      {
        name: "Business",
        price: 249,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100 employees",
          "Basic carbon tracking",
          "Standard reporting",
          "Email support",
          "Basic analytics",
          "Standard integrations"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        name: "Corporate",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 1,000 employees",
          "Advanced AI analytics",
          "Supply chain analysis",
          "Priority support",
          "Advanced reporting",
          "API access",
          "Custom dashboards",
          "Multi-location support"
        ],
        bestFor: "Mid-market companies and corporations",
        popular: true
      },
      {
        name: "Enterprise",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited employees",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Custom integrations",
          "Implementation services"
        ],
        bestFor: "Large enterprises and multinational companies"
      }
    ],
    marketPrice: "$249 - $1,000/month",
    roi: "300-500%",
    implementationTime: "3-4 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "Professional",
    competitors: ["Watershed", "Normative", "Carbon Trust", "South Pole"],
    competitorPricing: [
      {
        name: "Watershed",
        price: "$1,000 - $5,000/month",
        features: ["Carbon accounting", "Climate action", "Reporting"]
      },
      {
        name: "Normative",
        price: "$500 - $2,000/month",
        features: ["Carbon footprint", "Science-based targets", "Reporting"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$12,000 - $30,000",
      efficiency: "40% footprint reduction",
      additionalBenefits: "Improved sustainability, compliance"
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
    description: "Intelligent home energy management system that optimizes energy consumption, integrates renewable sources, and provides real-time insights for cost savings and sustainability.",
    category: "Smart Home Technology",
    basePrice: 99,
    currency: "$",
    pricingTiers: [
      {
        name: "Home",
        price: 99,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10 devices",
          "Basic energy monitoring",
          "Standard optimization",
          "Email support",
          "Mobile app",
          "Basic integrations"
        ],
        bestFor: "Homeowners and smart home enthusiasts"
      },
      {
        name: "Premium",
        price: 249,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 50 devices",
          "Advanced AI optimization",
          "Renewable integration",
          "Priority support",
          "Advanced analytics",
          "API access",
          "Custom automations",
          "Multi-home support"
        ],
        bestFor: "Smart home power users and multiple properties",
        popular: true
      },
      {
        name: "Professional",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited devices",
          "Full AI autonomy",
          "Custom AI models",
          "24/7 dedicated support",
          "Advanced security",
          "White-label options",
          "Custom integrations",
          "Installation services"
        ],
        bestFor: "Property managers and energy consultants"
      }
    ],
    marketPrice: "$99 - $400/month",
    roi: "250-400%",
    implementationTime: "2-3 weeks",
    trainingRequired: "1 day",
    supportLevel: "Standard",
    competitors: ["Nest", "Ecobee", "Sense", "Wiser Energy"],
    competitorPricing: [
      {
        name: "Nest",
        price: "$129 - $249",
        features: ["Smart thermostat", "Learning", "Mobile control"]
      },
      {
        name: "Ecobee",
        price: "$169 - $249",
        features: ["Smart thermostat", "Sensors", "Voice control"]
      }
    ],
    roiBreakdown: {
      timeframe: "12 months",
      savings: "$500 - $1,500",
      efficiency: "25% energy reduction",
      additionalBenefits: "Better comfort, sustainability"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE;
