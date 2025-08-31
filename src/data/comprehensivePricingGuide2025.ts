export interface PricingTier {













  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  features: string[];
<<<<<<< HEAD
  bestFor: string;
  popular?: boolean;
}

export interface ServicePricing {
  id: string;
  title: string;
=======
  limitations: string[];
  bestFor: string[];
  roi: string;
  implementationTime: string;
  supportLevel: string;













}

export interface ServicePricing {













  serviceId: string;
  serviceName: string;
  category: string;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  description: string;
  category: string;
  basePrice: number;
  currency: string;
  pricingTiers: PricingTier[];
<<<<<<< HEAD
  marketPrice: string;
  roi: string;
  implementationTime: string;
  trainingRequired: string;
  supportLevel: string;
  competitors: string[];
  competitorPricing: {
    name: string;
    price: string;
=======
marketComparison: {;
    competitor: string;
    competitorPrice: string;
    ourPrice: string;
    savings: string;
  












}[];
  volumeDiscounts: {
    users: string;
    discount: string;
    additionalBenefits: string[];
  }[];
  customEnterprise: {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
  {
    id: "ai-autonomous-business-operations-platform",
    title: "AI Autonomous Business Operations Platform",
    description: "Next-generation autonomous business operations platform that uses advanced AI to automatically manage, optimize, and scale business processes across all departments without human intervention.",
    category: "AI & Automation",
    basePrice: 4999,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100 automated processes",
          "Basic AI decision making",
          "Standard integrations",
          "Email support",
          "Basic reporting"
        ],
        bestFor: "Small to medium businesses starting automation"
      },
      {
        name: "Professional",
        price: 8999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 500 automated processes",
          "Advanced AI decision making",
          "Premium integrations",
          "Priority support",
          "Advanced analytics",
          "Custom workflows",
          "API access"
        ],
        bestFor: "Growing businesses with complex operations",
        popular: true
      },
      {
        name: "Enterprise",
        price: 14999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited automated processes",
          "Full AI autonomy",
          "All integrations",
          "24/7 dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced security",
          "Compliance automation"
        ],
        bestFor: "Large enterprises requiring full automation"
      }
    ],
    marketPrice: "$4,999 - $15,000/month",
    roi: "300-500%",
    implementationTime: "8-12 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "enterprise",
    competitors: ["UiPath", "Automation Anywhere", "Blue Prism", "Pega"],
    competitorPricing: [
      {
        name: "UiPath",
        price: "$1,200 - $5,000/month",
        features: ["Basic automation", "Limited AI", "Standard support"]
      },
      {
        name: "Automation Anywhere",
        price: "$2,500 - $8,000/month",
        features: ["Process automation", "Some AI features", "Enterprise support"]
      },
      {
        name: "Blue Prism",
        price: "$3,000 - $12,000/month",
        features: ["RPA platform", "Basic intelligence", "Professional support"]
      }
    ],
    roiBreakdown: {
      timeframe: "6-12 months",
      savings: "Reduce operational costs by 60%",
      efficiency: "Improve process efficiency by 85%",
      additionalBenefits: "24/7 autonomous operations, eliminate human error"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "quantum-safe-cybersecurity-intelligence-platform",
    title: "Quantum-Safe Cybersecurity Intelligence Platform",
    description: "Future-proof cybersecurity platform that combines quantum-resistant cryptography with advanced AI threat detection, providing protection against both current and future quantum computing threats.",
    category: "Cybersecurity",
    basePrice: 7999,
    currency: "$",
    pricingTiers: [
      {
        name: "Standard",
        price: 7999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Post-quantum cryptography",
          "AI threat detection",
          "Basic compliance",
          "Standard support",
          "Core security features"
        ],
        bestFor: "Medium businesses requiring quantum-safe security"
      },
      {
        name: "Advanced",
        price: 12999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced quantum algorithms",
          "AI threat intelligence",
          "Full compliance suite",
          "Priority support",
          "Advanced forensics",
          "Custom security policies",
          "24/7 monitoring"
        ],
        bestFor: "Large enterprises with high security requirements",
        popular: true
      },
      {
        name: "Government",
        price: 19999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Military-grade quantum security",
          "Full threat intelligence",
          "Government compliance",
          "Dedicated support team",
          "Custom deployments",
          "Advanced analytics",
          "Zero-trust architecture"
        ],
        bestFor: "Government agencies and defense contractors"
      }
    ],
    marketPrice: "$7,999 - $25,000/month",
    roi: "400-600%",
    implementationTime: "10-14 weeks",
    trainingRequired: "3-5 days",
    supportLevel: "enterprise",
    competitors: ["CrowdStrike", "Palo Alto Networks", "FireEye", "Carbon Black"],
    competitorPricing: [
      {
        name: "CrowdStrike",
        price: "$8.99 - $15.99/user/month",
        features: ["Endpoint protection", "Threat intelligence", "Basic AI"]
      },
      {
        name: "Palo Alto Networks",
        price: "$5,000 - $20,000/month",
        features: ["Network security", "Threat prevention", "Enterprise features"]
      },
      {
        name: "FireEye",
        price: "$3,000 - $15,000/month",
        features: ["Threat detection", "Incident response", "Security services"]
      }
    ],
    roiBreakdown: {
      timeframe: "12-18 months",
      savings: "Prevent security breaches worth millions",
      efficiency: "Reduce security incidents by 90%",
      additionalBenefits: "Future-proof protection, compliance automation"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-autonomous-research-assistant-platform",
    title: "AI Autonomous Research Assistant Platform",
    description: "Advanced autonomous research platform that independently conducts comprehensive research, analyzes data, generates insights, and produces research reports across multiple domains without human supervision.",
    category: "AI & Research",
    basePrice: 3499,
    currency: "$",
    pricingTiers: [
      {
        name: "Academic",
        price: 3499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic research automation",
          "Academic databases access",
          "Standard report generation",
          "Email support",
          "Basic analytics"
        ],
        bestFor: "Universities and research institutions"
      },
      {
        name: "Professional",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced research automation",
          "Multiple domain support",
          "Custom research methodologies",
          "Priority support",
          "Advanced analytics",
          "Collaboration tools",
          "API access"
        ],
        bestFor: "Consulting firms and research companies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full research autonomy",
          "All domains and sources",
          "Custom AI models",
          "Dedicated support",
          "White-label options",
          "Advanced security",
          "Compliance features"
        ],
        bestFor: "Large research organizations and corporations"
      }
    ],
    marketPrice: "$3,499 - $12,000/month",
    roi: "250-400%",
    implementationTime: "6-8 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "enterprise",
    competitors: ["Iris.ai", "Semantic Scholar", "ResearchGate", "Mendeley"],
    competitorPricing: [
      {
        name: "Iris.ai",
        price: "$500 - $2,000/month",
        features: ["Research discovery", "Basic AI", "Limited domains"]
      },
      {
        name: "Semantic Scholar",
        price: "Free - $1,000/month",
        features: ["Academic search", "Basic analytics", "Open access"]
      },
      {
        name: "ResearchGate",
        price: "Free - $500/month",
        features: ["Academic networking", "Basic tools", "Community features"]
      }
    ],
    roiBreakdown: {
      timeframe: "3-6 months",
      savings: "Reduce research costs by 70%",
      efficiency: "Accelerate research by 10x",
      additionalBenefits: "24/7 autonomous operation, eliminate human bias"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-financial-trading-risk-management-platform",
    title: "AI Financial Trading Risk Management Platform",
    description: "Intelligent financial trading platform that uses advanced AI to analyze market data, predict trends, manage risk, and execute trades with sophisticated risk management algorithms.",
    category: "AI & Finance",
    basePrice: 5999,
    currency: "$",
    pricingTiers: [
      {
        name: "Professional",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI market analysis",
          "Basic risk management",
          "Standard trading tools",
          "Email support",
          "Basic reporting"
        ],
        bestFor: "Individual traders and small funds"
      },
      {
        name: "Institutional",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI algorithms",
          "Comprehensive risk management",
          "Multi-asset support",
          "Priority support",
          "Advanced analytics",
          "Custom strategies",
          "API access"
        ],
        bestFor: "Hedge funds and investment firms",
        popular: true
      },
      {
        name: "Enterprise",
        price: 15999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI autonomy",
          "Advanced risk modeling",
          "All asset classes",
          "Dedicated support",
          "Custom AI models",
          "White-label options",
          "Advanced compliance",
          "Real-time monitoring"
        ],
        bestFor: "Large investment banks and asset managers"
      }
    ],
    marketPrice: "$5,999 - $18,000/month",
    roi: "350-500%",
    implementationTime: "8-10 weeks",
    trainingRequired: "3-4 days",
    supportLevel: "enterprise",
    competitors: ["Bloomberg Terminal", "Thomson Reuters", "FactSet", "Refinitiv"],
    competitorPricing: [
      {
        name: "Bloomberg Terminal",
        price: "$24,000/year per terminal",
        features: ["Market data", "Trading tools", "News and research"]
      },
      {
        name: "Thomson Reuters",
        price: "$15,000 - $50,000/year",
        features: ["Financial data", "Trading platforms", "Risk management"]
      },
      {
        name: "FactSet",
        price: "$12,000 - $40,000/year",
        features: ["Portfolio analytics", "Risk management", "Data feeds"]
      }
    ],
    roiBreakdown: {
      timeframe: "6-12 months",
      savings: "Improve trading performance by 40%",
      efficiency: "Reduce risk exposure by 60%",
      additionalBenefits: "24/7 market monitoring, automated compliance"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-healthcare-analytics-platform",
    title: "AI Healthcare Analytics Platform",
    description: "Comprehensive healthcare analytics platform that leverages AI to analyze patient data, predict outcomes, optimize treatments, and improve healthcare delivery across all aspects of patient care.",
    category: "AI & Healthcare",
    basePrice: 4499,
    currency: "$",
    pricingTiers: [
      {
        name: "Clinical",
        price: 4499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic patient analytics",
          "Treatment optimization",
          "Standard reporting",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small clinics and medical practices"
      },
      {
        name: "Hospital",
        price: 7999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced patient analytics",
          "Population health management",
          "Clinical decision support",
          "Priority support",
          "Full EHR integrations",
          "Custom analytics",
          "Compliance tools"
        ],
        bestFor: "Hospitals and healthcare systems",
        popular: true
      },
      {
        name: "Enterprise",
        price: 12999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI healthcare suite",
          "Multi-site management",
          "Custom AI models",
          "Dedicated support",
          "Advanced security",
          "White-label options",
          "Research capabilities"
        ],
        bestFor: "Large healthcare networks and research institutions"
      }
    ],
    marketPrice: "$4,499 - $15,000/month",
    roi: "300-450%",
    implementationTime: "10-12 weeks",
    trainingRequired: "3-5 days",
    supportLevel: "enterprise",
    competitors: ["Epic", "Cerner", "Allscripts", "Practice Fusion"],
    competitorPricing: [
      {
        name: "Epic",
        price: "$1,200 - $2,400/bed/month",
        features: ["EHR system", "Basic analytics", "Standard support"]
      },
      {
        name: "Cerner",
        price: "$800 - $1,800/bed/month",
        features: ["EHR platform", "Some analytics", "Professional support"]
      },
      {
        name: "Allscripts",
        price: "$500 - $1,200/bed/month",
        features: ["EHR solution", "Basic reporting", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "12-18 months",
      savings: "Improve patient outcomes by 35%",
      efficiency: "Reduce healthcare costs by 25%",
      additionalBenefits: "Enhanced diagnostic accuracy, optimized treatment plans"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-supply-chain-optimization-platform",
    title: "AI Supply Chain Optimization Platform",
    description: "Intelligent supply chain platform that uses AI to optimize inventory, predict demand, manage logistics, and streamline operations across the entire supply chain network.",
    category: "AI & Supply Chain",
    basePrice: 3999,
    currency: "$",
    pricingTiers: [
      {
        name: "Basic",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic demand forecasting",
          "Inventory optimization",
          "Standard reporting",
          "Email support",
          "Core integrations"
        ],
        bestFor: "Small manufacturers and retailers"
      },
      {
        name: "Advanced",
        price: 6999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI forecasting",
          "Full supply chain optimization",
          "Real-time tracking",
          "Priority support",
          "Advanced analytics",
          "Custom workflows",
          "Multi-location support"
        ],
        bestFor: "Medium-sized companies with complex supply chains",
        popular: true
      },
      {
        name: "Enterprise",
        price: 11999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI supply chain suite",
          "Global optimization",
          "Custom AI models",
          "Dedicated support",
          "Advanced security",
          "White-label options",
          "Compliance automation"
        ],
        bestFor: "Large multinational corporations"
      }
    ],
    marketPrice: "$3,999 - $12,000/month",
    roi: "250-400%",
    implementationTime: "8-10 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "enterprise",
    competitors: ["SAP", "Oracle", "Microsoft Dynamics", "Blue Yonder"],
    competitorPricing: [
      {
        name: "SAP",
        price: "$50,000 - $500,000/year",
        features: ["ERP system", "Supply chain modules", "Enterprise features"]
      },
      {
        name: "Oracle",
        price: "$30,000 - $300,000/year",
        features: ["ERP platform", "SCM tools", "Professional support"]
      },
      {
        name: "Microsoft Dynamics",
        price: "$20,000 - $200,000/year",
        features: ["ERP solution", "Basic SCM", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "6-12 months",
      savings: "Reduce inventory costs by 30%",
      efficiency: "Improve delivery times by 25%",
      additionalBenefits: "Optimize supply chain efficiency, reduce waste"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-customer-experience-analytics-platform",
    title: "AI Customer Experience Analytics Platform",
    description: "Advanced customer experience platform that uses AI to analyze customer behavior, predict needs, personalize interactions, and optimize customer journeys across all touchpoints.",
    category: "AI & Customer Experience",
    basePrice: 2999,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic customer analytics",
          "Simple personalization",
          "Standard reporting",
          "Email support",
          "Core integrations"
        ],
        bestFor: "Small e-commerce businesses"
      },
      {
        name: "Growth",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced customer analytics",
          "AI-powered personalization",
          "Customer journey mapping",
          "Priority support",
          "Advanced analytics",
          "Custom dashboards",
          "API access"
        ],
        bestFor: "Growing businesses with customer focus",
        popular: true
      },
      {
        name: "Enterprise",
        price: 8999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full CX AI suite",
          "Custom AI models",
          "Advanced personalization",
          "Dedicated support",
          "White-label options",
          "Advanced security",
          "Compliance features"
        ],
        bestFor: "Large companies with complex customer needs"
      }
    ],
    marketPrice: "$2,999 - $9,000/month",
    roi: "200-350%",
    implementationTime: "6-8 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "enterprise",
    competitors: ["Segment", "Mixpanel", "Amplitude", "Hotjar"],
    competitorPricing: [
      {
        name: "Segment",
        price: "$120 - $1,200/month",
        features: ["Customer data platform", "Basic analytics", "Standard support"]
      },
      {
        name: "Mixpanel",
        price: "$25 - $1,000/month",
        features: ["Event analytics", "User behavior", "Basic personalization"]
      },
      {
        name: "Amplitude",
        price: "$995 - $5,000/month",
        features: ["Product analytics", "User insights", "Professional support"]
      }
    ],
    roiBreakdown: {
      timeframe: "3-6 months",
      savings: "Increase customer satisfaction by 40%",
      efficiency: "Reduce churn by 30%",
      additionalBenefits: "Improve conversion rates, enhance customer loyalty"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-project-management-platform",
    title: "AI Project Management Platform",
    description: "Intelligent project management platform that uses AI to automate task allocation, predict project timelines, identify risks, and optimize resource utilization for maximum project success.",
    category: "AI & Project Management",
    basePrice: 2499,
    currency: "$",
    pricingTiers: [
      {
        name: "Team",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic AI task allocation",
          "Project timeline prediction",
          "Standard reporting",
          "Email support",
          "Core integrations"
        ],
        bestFor: "Small teams and startups"
      },
      {
        name: "Professional",
        price: 4499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI project management",
          "Risk identification",
          "Resource optimization",
          "Priority support",
          "Advanced analytics",
          "Custom workflows",
          "API access"
        ],
        bestFor: "Growing companies with multiple projects",
        popular: true
      },
      {
        name: "Enterprise",
        price: 7999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI project suite",
          "Custom AI models",
          "Advanced risk management",
          "Dedicated support",
          "White-label options",
          "Advanced security",
          "Compliance features"
        ],
        bestFor: "Large organizations with complex projects"
      }
    ],
    marketPrice: "$2,499 - $8,000/month",
    roi: "200-300%",
    implementationTime: "6-8 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "enterprise",
    competitors: ["Asana", "Monday.com", "ClickUp", "Notion"],
    competitorPricing: [
      {
        name: "Asana",
        price: "$10.99 - $24.99/user/month",
        features: ["Task management", "Basic reporting", "Standard support"]
      },
      {
        name: "Monday.com",
        price: "$8 - $16/user/month",
        features: ["Project management", "Visual workflows", "Basic analytics"]
      },
      {
        name: "ClickUp",
        price: "$5 - $12/user/month",
        features: ["All-in-one platform", "Basic AI", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "3-6 months",
      savings: "Improve project success rate by 50%",
      efficiency: "Reduce project delays by 40%",
      additionalBenefits: "Optimize resource utilization, enhance team collaboration"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-marketing-automation-platform",
    title: "AI Marketing Automation Platform",
    description: "Advanced marketing automation platform that uses AI to personalize campaigns, optimize content, predict customer behavior, and automate marketing workflows for maximum engagement and conversion.",
    category: "AI & Marketing",
    basePrice: 1999,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic AI personalization",
          "Campaign automation",
          "Standard reporting",
          "Email support",
          "Core integrations"
        ],
        bestFor: "Small businesses starting automation"
      },
      {
        name: "Professional",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI marketing",
          "Multi-channel automation",
          "Predictive analytics",
          "Priority support",
          "Advanced analytics",
          "Custom campaigns",
          "API access"
        ],
        bestFor: "Growing businesses with marketing focus",
        popular: true
      },
      {
        name: "Enterprise",
        price: 6999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI marketing suite",
          "Custom AI models",
          "Advanced personalization",
          "Dedicated support",
          "White-label options",
          "Advanced security",
          "Compliance features"
        ],
        bestFor: "Large companies with complex marketing needs"
      }
    ],
    marketPrice: "$1,999 - $6,000/month",
    roi: "150-300%",
    implementationTime: "6-8 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "enterprise",
    competitors: ["HubSpot", "Marketo", "Pardot", "ActiveCampaign"],
    competitorPricing: [
      {
        name: "HubSpot",
        price: "$45 - $3,200/month",
        features: ["Marketing automation", "CRM integration", "Basic AI"]
      },
      {
        name: "Marketo",
        price: "$800 - $2,000/month",
        features: ["Marketing automation", "Advanced analytics", "Professional support"]
      },
      {
        name: "Pardot",
        price: "$1,250 - $15,000/month",
        features: ["B2B marketing", "Lead management", "Enterprise features"]
      }
    ],
    roiBreakdown: {
      timeframe: "3-6 months",
      savings: "Increase conversion rates by 35%",
      efficiency: "Reduce marketing costs by 25%",
      additionalBenefits: "Improve customer engagement, automate repetitive tasks"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-workflow-orchestrator",
    title: "AI Workflow Orchestrator",
    description: "Intelligent workflow orchestration platform that uses AI to automate, optimize, and orchestrate complex business workflows across multiple systems and departments.",
    category: "AI & Automation",
    basePrice: 3499,
    currency: "$",
    pricingTiers: [
      {
        name: "Basic",
        price: 3499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic workflow automation",
          "Standard integrations",
          "Simple reporting",
          "Email support",
          "Core features"
        ],
        bestFor: "Small businesses with simple workflows"
      },
      {
        name: "Advanced",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced workflow orchestration",
          "Multi-system integration",
          "AI optimization",
          "Priority support",
          "Advanced analytics",
          "Custom workflows",
          "API access"
        ],
        bestFor: "Medium companies with complex workflows",
        popular: true
      },
      {
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI workflow suite",
          "Custom AI models",
          "Advanced orchestration",
          "Dedicated support",
          "White-label options",
          "Advanced security",
          "Compliance features"
        ],
        bestFor: "Large enterprises with complex operations"
      }
    ],
    marketPrice: "$3,499 - $12,000/month",
    roi: "250-400%",
    implementationTime: "8-10 weeks",
    trainingRequired: "3-4 days",
    supportLevel: "enterprise",
    competitors: ["Apache Airflow", "Prefect", "Dagster", "n8n"],
    competitorPricing: [
      {
        name: "Apache Airflow",
        price: "Free - $500/month",
        features: ["Open source", "Basic orchestration", "Community support"]
      },
      {
        name: "Prefect",
        price: "$50 - $500/month",
        features: ["Workflow automation", "Basic AI", "Professional support"]
      },
      {
        name: "n8n",
        price: "Free - $200/month",
        features: ["Visual workflows", "Basic automation", "Standard support"]
      }
    ],
    roiBreakdown: {
      timeframe: "6-12 months",
      savings: "Reduce workflow processing time by 70%",
      efficiency: "Eliminate manual errors",
      additionalBenefits: "Improve operational efficiency, enhance system integration"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-predictive-maintenance-platform",
    title: "AI Predictive Maintenance Platform",
    description: "Intelligent predictive maintenance platform that uses AI and IoT sensors to predict equipment failures, optimize maintenance schedules, and reduce downtime in industrial and manufacturing environments.",
    category: "AI & IoT",
    basePrice: 3999,
    currency: "$",
    pricingTiers: [
      {
        name: "Basic",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic failure prediction",
          "Standard monitoring",
          "Simple reporting",
          "Email support",
          "Core integrations"
        ],
        bestFor: "Small manufacturing facilities"
      },
      {
        name: "Advanced",
        price: 6999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI prediction",
          "IoT sensor integration",
          "Maintenance optimization",
          "Priority support",
          "Advanced analytics",
          "Custom alerts",
          "Mobile access"
        ],
        bestFor: "Medium manufacturing companies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 11999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI maintenance suite",
          "Custom AI models",
          "Advanced IoT integration",
          "Dedicated support",
          "White-label options",
          "Advanced security",
          "Compliance features"
        ],
        bestFor: "Large industrial facilities and manufacturers"
      }
    ],
    marketPrice: "$3,999 - $15,000/month",
    roi: "300-500%",
    implementationTime: "8-10 weeks",
    trainingRequired: "3-4 days",
    supportLevel: "enterprise",
    competitors: ["IBM Maximo", "SAP PM", "Oracle EAM", "Infor EAM"],
    competitorPricing: [
      {
        name: "IBM Maximo",
        price: "$100 - $200/user/month",
        features: ["EAM system", "Basic maintenance", "Professional support"]
      },
      {
        name: "SAP PM",
        price: "$50 - $150/user/month",
        features: ["Plant maintenance", "Basic analytics", "Enterprise support"]
      },
      {
        name: "Oracle EAM",
        price: "$75 - $175/user/month",
        features: ["Asset management", "Maintenance tools", "Professional support"]
      }
    ],
    roiBreakdown: {
      timeframe: "6-12 months",
      savings: "Reduce unplanned downtime by 50%",
      efficiency: "Lower maintenance costs by 30%",
      additionalBenefits: "Extend equipment lifespan, improve safety"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-hr-platform",
    title: "AI HR Platform",
    description: "Comprehensive HR platform that uses AI to automate recruitment, optimize employee performance, predict turnover, and enhance the overall employee experience.",
    category: "AI & HR",
    basePrice: 1999,
    currency: "$",
    pricingTiers: [
      {
        name: "Basic",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic AI recruitment",
          "Simple performance tracking",
          "Standard reporting",
          "Email support",
          "Core HR features"
        ],
        bestFor: "Small companies and startups"
      },
      {
        name: "Professional",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI HR suite",
          "Performance optimization",
          "Turnover prediction",
          "Priority support",
          "Advanced analytics",
          "Custom workflows",
          "API access"
        ],
        bestFor: "Growing companies with HR focus",
        popular: true
      },
      {
        name: "Enterprise",
        price: 6999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI HR suite",
          "Custom AI models",
          "Advanced analytics",
          "Dedicated support",
          "White-label options",
          "Advanced security",
          "Compliance features"
        ],
        bestFor: "Large organizations with complex HR needs"
      }
    ],
    marketPrice: "$1,999 - $6,000/month",
    roi: "200-350%",
    implementationTime: "6-8 weeks",
    trainingRequired: "2-3 days",
    supportLevel: "enterprise",
    competitors: ["Workday", "BambooHR", "Greenhouse", "Lever"],
    competitorPricing: [
      {
        name: "Workday",
        price: "$45 - $100/user/month",
        features: ["HR management", "Basic AI", "Enterprise features"]
      },
      {
        name: "BambooHR",
        price: "$6.19 - $8.25/user/month",
        features: ["HR platform", "Basic analytics", "Standard support"]
      },
      {
        name: "Greenhouse",
        price: "$50 - $100/user/month",
        features: ["Recruitment platform", "Basic AI", "Professional support"]
      }
    ],
    roiBreakdown: {
      timeframe: "3-6 months",
      savings: "Reduce hiring time by 60%",
      efficiency: "Improve employee retention by 40%",
      additionalBenefits: "Enhance candidate quality, optimize performance management"
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
