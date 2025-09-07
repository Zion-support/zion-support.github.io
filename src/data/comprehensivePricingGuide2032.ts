export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  description: string;
  features: string[];
  limitations?: string[];
  recommendedFor: string[];
  popular?: boolean;
  savings?: string;
  customFeatures?: string[];
}

export interface ServicePricing {
  serviceId: string;
  serviceName: string;
  category: string;
  description: string;
  tiers: PricingTier[];
  marketComparison: {
    competitors: string[];
    averageMarketPrice: string;
    ourAdvantage: string;
  };
  roi: {
    shortTerm: string;
    longTerm: string;
    paybackPeriod: string;
  };
  implementation: {
    timeline: string;
    complexity: string;
    support: string;
  };
}

export const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing[] = [
  {
    serviceId: "ai-autonomous-business-intelligence-2032",
    serviceName: "AI Autonomous Business Intelligence Platform",
    category: "AI & Analytics",
    description: "Next-generation AI-powered business intelligence platform with autonomous analysis and real-time insights.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        description: "Perfect for small teams and startups",
        features: [
          "Up to 5 data sources",
          "Basic AI analysis",
          "Standard dashboards",
          "Email reports",
          "Community support",
          "API access (100 calls/day)",
          "Basic integrations",
          "Data visualization tools"
        ],
        limitations: [
          "Limited to 10GB data storage",
          "No custom AI models",
          "Basic security features",
          "No advanced analytics"
        ],
        recommendedFor: ["Startups", "Small teams", "Basic analytics needs"]
      },
      {
        id: "professional",
        name: "Professional",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        description: "Ideal for growing businesses",
        popular: true,
        features: [
          "Up to 20 data sources",
          "Advanced AI analysis",
          "Custom dashboards",
          "Real-time alerts",
          "Priority support",
          "API access (1000 calls/day)",
          "Advanced integrations",
          "Custom AI model training",
          "Advanced security",
          "Team collaboration tools"
        ],
        limitations: [
          "Limited to 100GB data storage",
          "No enterprise features",
          "No dedicated support"
        ],
        recommendedFor: ["Growing businesses", "Medium teams", "Advanced analytics"]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        description: "For large organizations",
        features: [
          "Unlimited data sources",
          "Full AI capabilities",
          "Custom development",
          "Dedicated support",
          "Unlimited API access",
          "All integrations",
          "Custom AI models",
          "Enterprise security",
          "Advanced analytics",
          "Custom reporting",
          "White-label options",
          "SLA guarantees"
        ],
        recommendedFor: ["Large enterprises", "Complex analytics", "Custom requirements"]
      }
    ],
    marketComparison: {
      competitors: ["Tableau", "Power BI", "Looker", "Qlik", "Domo"],
      averageMarketPrice: "$2,500 - $5,000/month",
      ourAdvantage: "40% cost savings with superior AI capabilities"
    },
    roi: {
      shortTerm: "300% within 6 months",
      longTerm: "800% over 2 years",
      paybackPeriod: "3-4 months"
    },
    implementation: {
      timeline: "3-6 weeks",
      complexity: "Medium",
      support: "24/7 dedicated support"
    }
  },
  {
    serviceId: "ai-customer-experience-orchestrator-2032",
    serviceName: "AI Customer Experience Orchestrator",
    category: "AI & Customer Experience",
    description: "Comprehensive AI-powered platform for orchestrating personalized customer experiences.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: 699,
        currency: "$",
        billingCycle: "monthly",
        description: "For small businesses",
        features: [
          "Up to 10,000 customers",
          "Basic personalization",
          "Email automation",
          "Customer analytics",
          "Basic integrations",
          "Standard support",
          "Mobile app",
          "Basic reporting"
        ],
        limitations: [
          "Limited channels",
          "Basic AI features",
          "No advanced analytics"
        ],
        recommendedFor: ["Small businesses", "Basic personalization"]
      },
      {
        id: "professional",
        name: "Professional",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        description: "For growing businesses",
        popular: true,
        features: [
          "Up to 100,000 customers",
          "Advanced personalization",
          "Omnichannel orchestration",
          "AI-powered recommendations",
          "Advanced analytics",
          "Priority support",
          "All integrations",
          "Custom workflows",
          "A/B testing",
          "Advanced reporting"
        ],
        recommendedFor: ["Growing businesses", "Advanced personalization"]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        description: "For large enterprises",
        features: [
          "Unlimited customers",
          "Full AI capabilities",
          "Custom development",
          "Dedicated support",
          "Advanced security",
          "Custom integrations",
          "White-label options",
          "SLA guarantees",
          "Advanced analytics",
          "Custom reporting"
        ],
        recommendedFor: ["Large enterprises", "Complex customer journeys"]
      }
    ],
    marketComparison: {
      competitors: ["Adobe Experience Cloud", "Salesforce Marketing Cloud", "HubSpot", "Marketo"],
      averageMarketPrice: "$2,000 - $4,000/month",
      ourAdvantage: "50% cost savings with superior AI orchestration"
    },
    roi: {
      shortTerm: "400% within 6 months",
      longTerm: "600% over 2 years",
      paybackPeriod: "2-3 months"
    },
    implementation: {
      timeline: "4-8 weeks",
      complexity: "Medium",
      support: "24/7 support"
    }
  },
  {
    serviceId: "ai-cybersecurity-threat-hunter-2032",
    serviceName: "AI Cybersecurity Threat Hunter",
    category: "AI & Security",
    description: "Advanced AI-powered cybersecurity platform for proactive threat detection.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        description: "For small organizations",
        features: [
          "Basic threat detection",
          "Up to 100 endpoints",
          "Standard security",
          "Email support",
          "Basic reporting",
          "Standard integrations",
          "Vulnerability scanning",
          "Basic compliance"
        ],
        limitations: [
          "Limited endpoints",
          "Basic AI features",
          "No advanced threat hunting"
        ],
        recommendedFor: ["Small organizations", "Basic security"]
      },
      {
        id: "professional",
        name: "Professional",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        description: "For medium organizations",
        popular: true,
        features: [
          "Advanced threat detection",
          "Up to 1000 endpoints",
          "AI-powered hunting",
          "Priority support",
          "Advanced reporting",
          "All integrations",
          "Advanced compliance",
          "Incident response",
          "Threat intelligence",
          "Custom rules"
        ],
        recommendedFor: ["Medium organizations", "Advanced security"]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        description: "For large enterprises",
        features: [
          "Full AI capabilities",
          "Unlimited endpoints",
          "Custom development",
          "Dedicated support",
          "Advanced security",
          "Custom integrations",
          "Full compliance",
          "Advanced threat hunting",
          "White-label options",
          "SLA guarantees"
        ],
        recommendedFor: ["Large enterprises", "Complex security"]
      }
    ],
    marketComparison: {
      competitors: ["CrowdStrike", "SentinelOne", "Carbon Black", "FireEye"],
      averageMarketPrice: "$3,000 - $6,000/month",
      ourAdvantage: "60% cost savings with superior AI threat hunting"
    },
    roi: {
      shortTerm: "600% within 6 months",
      longTerm: "900% over 2 years",
      paybackPeriod: "2-3 months"
    },
    implementation: {
      timeline: "4-6 weeks",
      complexity: "Medium",
      support: "24/7 dedicated support"
    }
  },
  {
    serviceId: "ai-financial-analytics-suite-2032",
    serviceName: "AI Financial Analytics Suite",
    category: "AI & Finance",
    description: "Comprehensive AI-powered financial analytics for real-time market analysis.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        description: "For individual traders",
        features: [
          "Basic market analysis",
          "Up to 5 portfolios",
          "Standard reporting",
          "Basic alerts",
          "Email support",
          "Standard data feeds",
          "Basic risk analysis",
          "Mobile app"
        ],
        limitations: [
          "Limited portfolios",
          "Basic AI features",
          "No advanced analytics"
        ],
        recommendedFor: ["Individual traders", "Basic analysis"]
      },
      {
        id: "professional",
        name: "Professional",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        description: "For professional traders",
        popular: true,
        features: [
          "Advanced market analysis",
          "Up to 50 portfolios",
          "Real-time analytics",
          "Advanced alerts",
          "Priority support",
          "All data feeds",
          "Advanced risk analysis",
          "Custom strategies",
          "Backtesting",
          "Advanced reporting"
        ],
        recommendedFor: ["Professional traders", "Advanced analysis"]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        description: "For institutional clients",
        features: [
          "Full AI capabilities",
          "Unlimited portfolios",
          "Custom development",
          "Dedicated support",
          "Advanced security",
          "Custom integrations",
          "White-label options",
          "SLA guarantees",
          "Advanced analytics",
          "Custom reporting"
        ],
        recommendedFor: ["Institutional clients", "Complex strategies"]
      }
    ],
    marketComparison: {
      competitors: ["Bloomberg Terminal", "Thomson Reuters", "FactSet", "Refinitiv"],
      averageMarketPrice: "$5,000 - $10,000/month",
      ourAdvantage: "70% cost savings with superior AI analytics"
    },
    roi: {
      shortTerm: "300% within 6 months",
      longTerm: "500% over 2 years",
      paybackPeriod: "3-4 months"
    },
    implementation: {
      timeline: "6-10 weeks",
      complexity: "High",
      support: "24/7 dedicated support"
    }
  },
  {
    serviceId: "ai-healthcare-analytics-platform-2032",
    serviceName: "AI Healthcare Analytics Platform",
    category: "AI & Healthcare",
    description: "Advanced AI-powered healthcare analytics for patient care optimization.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: 849,
        currency: "$",
        billingCycle: "monthly",
        description: "For small clinics",
        features: [
          "Basic patient analytics",
          "Up to 1000 patients",
          "Standard reporting",
          "Basic alerts",
          "Email support",
          "Standard integrations",
          "Basic compliance",
          "Mobile app"
        ],
        limitations: [
          "Limited patients",
          "Basic AI features",
          "No advanced analytics"
        ],
        recommendedFor: ["Small clinics", "Basic analytics"]
      },
      {
        id: "professional",
        name: "Professional",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        description: "For medium hospitals",
        popular: true,
        features: [
          "Advanced patient analytics",
          "Up to 10000 patients",
          "Real-time analytics",
          "Advanced alerts",
          "Priority support",
          "All integrations",
          "Advanced compliance",
          "Custom workflows",
          "Advanced reporting",
          "Predictive analytics"
        ],
        recommendedFor: ["Medium hospitals", "Advanced analytics"]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        description: "For large healthcare systems",
        features: [
          "Full AI capabilities",
          "Unlimited patients",
          "Custom development",
          "Dedicated support",
          "Advanced security",
          "Custom integrations",
          "Full compliance",
          "White-label options",
          "SLA guarantees",
          "Advanced analytics"
        ],
        recommendedFor: ["Large healthcare systems", "Complex analytics"]
      }
    ],
    marketComparison: {
      competitors: ["Epic", "Cerner", "Allscripts", "Athenahealth"],
      averageMarketPrice: "$3,000 - $7,000/month",
      ourAdvantage: "60% cost savings with superior AI analytics"
    },
    roi: {
      shortTerm: "400% within 6 months",
      longTerm: "700% over 2 years",
      paybackPeriod: "2-3 months"
    },
    implementation: {
      timeline: "8-12 weeks",
      complexity: "High",
      support: "24/7 dedicated support"
    }
  }
];

export const PRICING_FEATURES = {
  commonFeatures: [
    "24/7 Customer Support",
    "99.9% Uptime Guarantee",
    "Data Encryption",
    "API Access",
    "Mobile Applications",
    "Regular Updates",
    "Training & Documentation",
    "Community Access"
  ],
  enterpriseFeatures: [
    "Dedicated Account Manager",
    "Custom Development",
    "White-label Options",
    "SLA Guarantees",
    "Advanced Security",
    "Custom Integrations",
    "On-premise Options",
    "Priority Support"
  ]
};

export const PRICING_COMPARISON = {
  marketAnalysis: {
    averageSavings: "50-70%",
    featureAdvantage: "Superior AI capabilities",
    supportAdvantage: "24/7 dedicated support",
    implementationAdvantage: "Faster deployment"
  },
  roiMetrics: {
    averagePaybackPeriod: "3-4 months",
    averageROI: "400-800%",
    longTermValue: "10x investment over 2 years"
  }
};