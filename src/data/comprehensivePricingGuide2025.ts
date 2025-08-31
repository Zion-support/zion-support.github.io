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
  // AI-Powered Business Intelligence Platform
  {
    id: "ai-business-intelligence-platform",
    title: "AI-Powered Business Intelligence & Analytics Platform",
    description: "Advanced business intelligence platform that uses AI to analyze data, generate insights, and provide predictive analytics for informed decision-making across all business functions.",
    category: "AI & Analytics",
    basePrice: 899,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 5 data sources",
          "Basic AI analytics",
          "Standard dashboards",
          "Email support",
          "Basic reporting"
        ],
        bestFor: "Small businesses starting with data analytics"
      },
      {
        name: "Professional",
        price: 1899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 20 data sources",
          "Advanced AI analytics",
          "Custom dashboards",
          "Priority support",
          "Advanced reporting",
          "API access",
          "Real-time monitoring"
        ],
        bestFor: "Growing businesses with complex data needs",
        popular: true
      },
      {
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited data sources",
          "Full AI capabilities",
          "White-label dashboards",
          "24/7 dedicated support",
          "Custom AI models",
          "Advanced security",
          "Compliance automation"
        ],
        bestFor: "Large enterprises requiring comprehensive analytics"
      }
    ],
    marketPrice: "$899 - $3,999/month",
    roi: "400-600%",
    implementationTime: "3-4 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "Premium",
    competitors: ["Tableau", "Power BI", "Qlik", "Looker"],
    competitorPricing: [
      {
        name: "Tableau",
        price: "$70-70/user/month",
        features: ["Data visualization", "Basic analytics", "Standard support"]
      },
      {
        name: "Power BI",
        price: "$9.99-20/user/month",
        features: ["Microsoft integration", "Basic AI", "Standard support"]
      },
      {
        name: "Qlik",
        price: "$30-40/user/month",
        features: ["Associative analytics", "Basic AI", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "6-12 months",
      savings: "Reduce analysis time by 80%",
      efficiency: "Improve decision making by 50%",
      additionalBenefits: "Uncover hidden insights, enable data-driven culture"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Customer Experience Platform
  {
    id: "ai-customer-experience-platform",
    title: "AI-Powered Customer Experience & Personalization Platform",
    description: "Intelligent customer experience platform that uses AI to personalize interactions, predict customer needs, and optimize customer journeys across all touchpoints.",
    category: "AI & Customer Experience",
    basePrice: 699,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 699,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10,000 customers",
          "Basic personalization",
          "Standard analytics",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small businesses starting with personalization"
      },
      {
        name: "Professional",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100,000 customers",
          "Advanced personalization",
          "Predictive analytics",
          "Priority support",
          "Advanced integrations",
          "A/B testing",
          "Customer journey mapping"
        ],
        bestFor: "Growing businesses with customer experience focus",
        popular: true
      },
      {
        name: "Enterprise",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited customers",
          "Full AI personalization",
          "Advanced analytics",
          "24/7 dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced security"
        ],
        bestFor: "Large enterprises requiring advanced personalization"
      }
    ],
    marketPrice: "$699 - $2,999/month",
    roi: "350-550%",
    implementationTime: "2-3 weeks",
    trainingRequired: "1-2 days",
    supportLevel: "Professional",
    competitors: ["Segment", "Amplitude", "Mixpanel", "Optimizely"],
    competitorPricing: [
      {
        name: "Segment",
        price: "$120-2,000/month",
        features: ["Data collection", "Basic analytics", "Standard support"]
      },
      {
        name: "Amplitude",
        price: "$995-2,000/month",
        features: ["Product analytics", "Basic personalization", "Standard support"]
      },
      {
        name: "Mixpanel",
        price: "$25-2,000/month",
        features: ["Event tracking", "Basic analytics", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "4-8 months",
      savings: "Increase customer satisfaction by 35%",
      efficiency: "Improve conversion rates by 45%",
      additionalBenefits: "Reduce customer churn, enhance loyalty"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Marketing Automation Platform
  {
    id: "ai-marketing-automation-platform",
    title: "AI-Powered Marketing Automation & Campaign Optimization Platform",
    description: "Intelligent marketing automation platform that uses AI to optimize campaigns, personalize content, and maximize marketing ROI through predictive analytics and automation.",
    category: "AI & Marketing",
    basePrice: 799,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10,000 contacts",
          "Basic automation",
          "Email marketing",
          "Standard analytics",
          "Email support"
        ],
        bestFor: "Small businesses starting with marketing automation"
      },
      {
        name: "Professional",
        price: 1699,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100,000 contacts",
          "Advanced automation",
          "Multi-channel marketing",
          "AI optimization",
          "Priority support",
          "Advanced analytics",
          "A/B testing"
        ],
        bestFor: "Growing businesses with marketing automation needs",
        popular: true
      },
      {
        name: "Enterprise",
        price: 3499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited contacts",
          "Full AI automation",
          "Advanced optimization",
          "24/7 dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced security"
        ],
        bestFor: "Large enterprises requiring advanced marketing automation"
      }
    ],
    marketPrice: "$799 - $3,499/month",
    roi: "400-600%",
    implementationTime: "3-4 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "Professional",
    competitors: ["HubSpot", "Marketo", "Pardot", "ActiveCampaign"],
    competitorPricing: [
      {
        name: "HubSpot",
        price: "$45-3,200/month",
        features: ["Marketing automation", "Basic AI", "Standard support"]
      },
      {
        name: "Marketo",
        price: "$1,250-2,000/month",
        features: ["Enterprise automation", "Basic AI", "Standard support"]
      },
      {
        name: "Pardot",
        price: "$1,250-2,000/month",
        features: ["B2B automation", "Basic AI", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "6-10 months",
      savings: "Increase marketing ROI by 60%",
      efficiency: "Improve campaign performance by 45%",
      additionalBenefits: "Reduce manual work, enhance engagement"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Sales Intelligence Platform
  {
    id: "ai-sales-intelligence-platform",
    title: "AI-Powered Sales Intelligence & Lead Generation Platform",
    description: "Advanced sales intelligence platform that uses AI to identify prospects, predict sales opportunities, and optimize sales processes for maximum revenue generation.",
    category: "AI & Sales",
    basePrice: 649,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 649,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 5 sales users",
          "Basic lead scoring",
          "Standard analytics",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small sales teams starting with AI intelligence"
      },
      {
        name: "Professional",
        price: 1399,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 25 sales users",
          "Advanced lead scoring",
          "Predictive analytics",
          "Priority support",
          "Advanced integrations",
          "Pipeline analytics",
          "Revenue forecasting"
        ],
        bestFor: "Growing sales teams with intelligence needs",
        popular: true
      },
      {
        name: "Enterprise",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited sales users",
          "Full AI intelligence",
          "Advanced analytics",
          "24/7 dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced security"
        ],
        bestFor: "Large sales organizations requiring advanced intelligence"
      }
    ],
    marketPrice: "$649 - $2,999/month",
    roi: "450-650%",
    implementationTime: "2-3 weeks",
    trainingRequired: "1-2 days",
    supportLevel: "Professional",
    competitors: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"],
    competitorPricing: [
      {
        name: "Salesforce",
        price: "$25-300/user/month",
        features: ["CRM platform", "Basic AI", "Standard support"]
      },
      {
        name: "HubSpot",
        price: "$45-3,200/month",
        features: ["CRM platform", "Basic AI", "Standard support"]
      },
      {
        name: "Pipedrive",
        price: "$12.50-99/user/month",
        features: ["Sales CRM", "Basic analytics", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "4-8 months",
      savings: "Increase sales productivity by 40%",
      efficiency: "Improve lead conversion by 50%",
      additionalBenefits: "Reduce sales cycle time, enhance forecasting"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered HR & Talent Management Platform
  {
    id: "ai-hr-talent-management-platform",
    title: "AI-Powered HR & Talent Management Platform",
    description: "Intelligent HR platform that uses AI to streamline recruitment, optimize employee performance, and enhance workforce management through predictive analytics.",
    category: "AI & HR",
    basePrice: 549,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 549,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100 employees",
          "Basic AI screening",
          "Standard analytics",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small companies starting with AI HR"
      },
      {
        name: "Professional",
        price: 1199,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 500 employees",
          "Advanced AI screening",
          "Performance analytics",
          "Priority support",
          "Advanced integrations",
          "Employee engagement",
          "Workforce planning"
        ],
        bestFor: "Growing companies with HR automation needs",
        popular: true
      },
      {
        name: "Enterprise",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited employees",
          "Full AI capabilities",
          "Advanced analytics",
          "24/7 dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced security"
        ],
        bestFor: "Large organizations requiring advanced HR AI"
      }
    ],
    marketPrice: "$549 - $2,499/month",
    roi: "400-600%",
    implementationTime: "2-3 weeks",
    trainingRequired: "1-2 days",
    supportLevel: "Professional",
    competitors: ["Workday", "BambooHR", "Greenhouse", "Lever"],
    competitorPricing: [
      {
        name: "Workday",
        price: "$99-200/user/month",
        features: ["HR platform", "Basic AI", "Standard support"]
      },
      {
        name: "BambooHR",
        price: "$6.19-8.75/user/month",
        features: ["HR platform", "Basic analytics", "Standard support"]
      },
      {
        name: "Greenhouse",
        price: "$500-1,000/month",
        features: ["ATS platform", "Basic analytics", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "6-10 months",
      savings: "Reduce hiring time by 50%",
      efficiency: "Improve candidate quality by 40%",
      additionalBenefits: "Enhance retention, optimize workforce planning"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Financial Analytics Platform
  {
    id: "ai-financial-analytics-platform",
    title: "AI-Powered Financial Analytics & Risk Management Platform",
    description: "Advanced financial analytics platform that uses AI to analyze financial data, predict market trends, and provide comprehensive risk assessment for informed financial decisions.",
    category: "AI & Finance",
    basePrice: 999,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 5 financial users",
          "Basic AI analytics",
          "Standard risk assessment",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small financial teams starting with AI analytics"
      },
      {
        name: "Professional",
        price: 2199,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 25 financial users",
          "Advanced AI analytics",
          "Comprehensive risk assessment",
          "Priority support",
          "Advanced integrations",
          "Portfolio optimization",
          "Fraud detection"
        ],
        bestFor: "Growing financial organizations with analytics needs",
        popular: true
      },
      {
        name: "Enterprise",
        price: 4499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited financial users",
          "Full AI capabilities",
          "Advanced risk management",
          "24/7 dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced security"
        ],
        bestFor: "Large financial institutions requiring advanced analytics"
      }
    ],
    marketPrice: "$999 - $4,499/month",
    roi: "350-550%",
    implementationTime: "4-6 weeks",
    trainingRequired: "3-4 days",
    supportLevel: "Enterprise",
    competitors: ["Bloomberg", "Thomson Reuters", "FactSet", "Refinitiv"],
    competitorPricing: [
      {
        name: "Bloomberg",
        price: "$2,000-25,000/month",
        features: ["Financial data", "Basic analytics", "Standard support"]
      },
      {
        name: "Thomson Reuters",
        price: "$1,500-20,000/month",
        features: ["Financial data", "Basic analytics", "Standard support"]
      },
      {
        name: "FactSet",
        price: "$1,200-15,000/month",
        features: ["Financial data", "Basic analytics", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "8-15 months",
      savings: "Improve investment decisions by 45%",
      efficiency: "Reduce financial risks by 35%",
      additionalBenefits: "Enhance compliance, optimize portfolio performance"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Healthcare Analytics Platform
  {
    id: "ai-healthcare-analytics-platform",
    title: "AI-Powered Healthcare Analytics & Clinical Decision Support Platform",
    description: "Revolutionary healthcare analytics platform that uses AI to analyze patient data, predict health outcomes, and provide clinical decision support for improved patient care.",
    category: "AI & Healthcare",
    basePrice: 1299,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100 healthcare users",
          "Basic AI analytics",
          "Standard clinical support",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small healthcare practices starting with AI analytics"
      },
      {
        name: "Professional",
        price: 2799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 500 healthcare users",
          "Advanced AI analytics",
          "Comprehensive clinical support",
          "Priority support",
          "Advanced integrations",
          "Population health management",
          "Treatment optimization"
        ],
        bestFor: "Growing healthcare organizations with analytics needs",
        popular: true
      },
      {
        name: "Enterprise",
        price: 5499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited healthcare users",
          "Full AI capabilities",
          "Advanced clinical support",
          "24/7 dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced security"
        ],
        bestFor: "Large healthcare systems requiring advanced analytics"
      }
    ],
    marketPrice: "$1,299 - $5,499/month",
    roi: "300-500%",
    implementationTime: "6-8 weeks",
    trainingRequired: "4-5 days",
    supportLevel: "Enterprise",
    competitors: ["Epic", "Cerner", "Allscripts", "Athenahealth"],
    competitorPricing: [
      {
        name: "Epic",
        price: "$1,200-2,500/user/month",
        features: ["EHR platform", "Basic analytics", "Standard support"]
      },
      {
        name: "Cerner",
        price: "$1,000-2,000/user/month",
        features: ["EHR platform", "Basic analytics", "Standard support"]
      },
      {
        name: "Allscripts",
        price: "$800-1,800/user/month",
        features: ["EHR platform", "Basic analytics", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "12-18 months",
      savings: "Improve patient outcomes by 35%",
      efficiency: "Reduce healthcare costs by 25%",
      additionalBenefits: "Optimize treatment plans, enhance clinical decision making"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Supply Chain Intelligence Platform
  {
    id: "ai-supply-chain-intelligence-platform",
    title: "AI-Powered Supply Chain Intelligence & Optimization Platform",
    description: "Intelligent supply chain platform that uses AI to optimize operations, predict demand, manage inventory, and streamline logistics for maximum efficiency and cost savings.",
    category: "AI & Supply Chain",
    basePrice: 799,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 5 supply chain users",
          "Basic AI optimization",
          "Standard analytics",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small companies starting with supply chain AI"
      },
      {
        name: "Professional",
        price: 1699,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 25 supply chain users",
          "Advanced AI optimization",
          "Comprehensive analytics",
          "Priority support",
          "Advanced integrations",
          "Demand forecasting",
          "Inventory optimization"
        ],
        bestFor: "Growing companies with supply chain optimization needs",
        popular: true
      },
      {
        name: "Enterprise",
        price: 3499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited supply chain users",
          "Full AI capabilities",
          "Advanced optimization",
          "24/7 dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced security"
        ],
        bestFor: "Large organizations requiring advanced supply chain AI"
      }
    ],
    marketPrice: "$799 - $3,499/month",
    roi: "400-600%",
    implementationTime: "4-6 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "Professional",
    competitors: ["SAP", "Oracle", "Manhattan Associates", "JDA Software"],
    competitorPricing: [
      {
        name: "SAP",
        price: "$2,000-5,000/month",
        features: ["ERP platform", "Basic analytics", "Standard support"]
      },
      {
        name: "Oracle",
        price: "$1,800-4,500/month",
        features: ["ERP platform", "Basic analytics", "Standard support"]
      },
      {
        name: "Manhattan Associates",
        price: "$1,500-4,000/month",
        features: ["SCM platform", "Basic analytics", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "8-12 months",
      savings: "Reduce supply chain costs by 30%",
      efficiency: "Improve inventory turnover by 40%",
      additionalBenefits: "Optimize delivery routes, reduce lead times"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Cybersecurity Intelligence Platform
  {
    id: "ai-cybersecurity-intelligence-platform",
    title: "AI-Powered Cybersecurity Intelligence & Threat Prevention Platform",
    description: "Advanced cybersecurity platform that uses AI to detect threats, analyze security patterns, predict attacks, and provide autonomous threat response and prevention.",
    category: "AI & Cybersecurity",
    basePrice: 899,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100 endpoints",
          "Basic AI threat detection",
          "Standard security analytics",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small organizations starting with AI cybersecurity"
      },
      {
        name: "Professional",
        price: 1899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 1000 endpoints",
          "Advanced AI threat detection",
          "Comprehensive security analytics",
          "Priority support",
          "Advanced integrations",
          "Threat hunting",
          "Incident response automation"
        ],
        bestFor: "Growing organizations with cybersecurity needs",
        popular: true
      },
      {
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited endpoints",
          "Full AI capabilities",
          "Advanced security analytics",
          "24/7 dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced security"
        ],
        bestFor: "Large organizations requiring advanced cybersecurity AI"
      }
    ],
    marketPrice: "$899 - $3,999/month",
    roi: "400-600%",
    implementationTime: "3-4 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "Professional",
    competitors: ["CrowdStrike", "SentinelOne", "Palo Alto Networks", "Fortinet"],
    competitorPricing: [
      {
        name: "CrowdStrike",
        price: "$8.99-15/user/month",
        features: ["EDR platform", "Basic AI", "Standard support"]
      },
      {
        name: "SentinelOne",
        price: "$6-12/user/month",
        features: ["EDR platform", "Basic AI", "Standard support"]
      },
      {
        name: "Palo Alto Networks",
        price: "$5-10/user/month",
        features: ["Security platform", "Basic AI", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "6-10 months",
      savings: "Improve threat detection by 70%",
      efficiency: "Reduce false positives by 60%",
      additionalBenefits: "Automate incident response, enhance security posture"
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
