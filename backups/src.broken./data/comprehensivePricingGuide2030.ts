import { PricingTier } from "@/types/pricing";

export const COMPREHENSIVE_PRICING_GUIDE_2030: PricingTier[] = [
  // AI Business Intelligence Platform
  {
    id: "ai-business-intelligence-pricing",
    serviceName: "AI Business Intelligence & Analytics Platform",
    serviceId: "ai-business-intelligence-platform-2030",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Starter",
        price: 2999,
        period: "one-time",
        description: "Perfect for small businesses starting with AI analytics",
        features: [
          "Real-time dashboard with 5 key metrics",
          "Basic predictive analytics",
          "Automated reporting (weekly)",
          "Email support",
          "Basic integrations (3 platforms)",
          "Data storage up to 100GB"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Professional",
        price: 5999,
        period: "one-time",
        description: "Ideal for growing businesses with advanced analytics needs",
        features: [
          "Everything in Starter",
          "Advanced ML algorithms",
          "Custom dashboard builder",
          "Real-time alerts and notifications",
          "Priority support",
          "Advanced integrations (10 platforms)",
          "Data storage up to 1TB",
          "API access (10,000 calls/month)",
          "Team collaboration tools"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise",
        price: 12999,
        period: "one-time",
        description: "Comprehensive solution for large organizations",
        features: [
          "Everything in Professional",
          "Custom AI model training",
          "Unlimited data storage",
          "Advanced security features",
          "24/7 dedicated support",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment option",
          "Compliance certifications"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$3,500",
      priceRange: "$2,000 - $8,000",
      competitors: ["Tableau ($70/month)", "Power BI ($9.99/month)", "Looker ($5,000/month)"],
      roi: "500% within 6 months",
      setupTime: "2-3 weeks"
    }
  },

  // AI Cybersecurity Platform
  {
    id: "ai-cybersecurity-pricing",
    serviceName: "AI-Powered Cybersecurity & Threat Detection Platform",
    serviceId: "ai-cybersecurity-platform-2030",
    category: "Cybersecurity",
    pricingTiers: [
      {
        name: "Basic",
        price: 3999,
        period: "one-time",
        description: "Essential cybersecurity for small to medium businesses",
        features: [
          "Real-time threat detection",
          "Basic incident response",
          "Email security",
          "Basic reporting",
          "Email support",
          "Up to 100 users"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Advanced",
        price: 7999,
        period: "one-time",
        description: "Comprehensive security for growing organizations",
        features: [
          "Everything in Basic",
          "Advanced threat hunting",
          "Zero-trust architecture",
          "Behavioral analysis",
          "Priority support",
          "Up to 500 users",
          "Advanced integrations",
          "Custom security policies"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise",
        price: 15999,
        period: "one-time",
        description: "Full-scale security for large enterprises",
        features: [
          "Everything in Advanced",
          "Custom AI model training",
          "Advanced compliance features",
          "24/7 dedicated support",
          "Unlimited users",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$4,500",
      priceRange: "$3,000 - $10,000",
      competitors: ["CrowdStrike ($8.99/user/month)", "SentinelOne ($4.99/user/month)", "Darktrace ($1,000/month)"],
      roi: "400% within 4 months",
      setupTime: "3-4 weeks"
    }
  },

  // AI Healthcare Analytics Platform
  {
    id: "ai-healthcare-analytics-pricing",
    serviceName: "AI Healthcare Analytics & Patient Care Platform",
    serviceId: "ai-healthcare-analytics-2030",
    category: "Healthcare",
    pricingTiers: [
      {
        name: "Clinic",
        price: 4999,
        period: "one-time",
        description: "Perfect for small clinics and medical practices",
        features: [
          "Patient analytics dashboard",
          "Basic predictive diagnostics",
          "Medical image analysis (100 images/month)",
          "Basic reporting",
          "Email support",
          "Up to 50 patients/month"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Hospital",
        price: 9999,
        period: "one-time",
        description: "Comprehensive solution for hospitals and medical centers",
        features: [
          "Everything in Clinic",
          "Advanced predictive analytics",
          "Unlimited medical image analysis",
          "Clinical decision support",
          "Priority support",
          "Up to 500 patients/month",
          "Advanced integrations",
          "Custom workflows"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise",
        price: 19999,
        period: "one-time",
        description: "Full-scale platform for healthcare systems",
        features: [
          "Everything in Hospital",
          "Custom AI model training",
          "Advanced compliance features",
          "24/7 dedicated support",
          "Unlimited patients",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$6,000",
      priceRange: "$4,000 - $15,000",
      competitors: ["Epic ($1,200/user/month)", "Cerner ($1,000/user/month)", "Allscripts ($800/user/month)"],
      roi: "600% within 8 months",
      setupTime: "4-5 weeks"
    }
  },

  // AI Financial Trading Platform
  {
    id: "ai-financial-trading-pricing",
    serviceName: "AI Financial Trading & Investment Platform",
    serviceId: "ai-financial-trading-2030",
    category: "Finance",
    pricingTiers: [
      {
        name: "Individual",
        price: 5999,
        period: "one-time",
        description: "Perfect for individual traders and investors",
        features: [
          "Basic algorithmic trading",
          "Risk management tools",
          "Real-time market data",
          "Basic portfolio analytics",
          "Email support",
          "Up to $100K portfolio"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Professional",
        price: 11999,
        period: "one-time",
        description: "Advanced platform for professional traders",
        features: [
          "Everything in Individual",
          "Advanced algorithmic trading",
          "Advanced risk management",
          "Predictive modeling",
          "Priority support",
          "Up to $1M portfolio",
          "Advanced integrations",
          "Custom trading strategies"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Institutional",
        price: 24999,
        period: "one-time",
        description: "Enterprise-grade platform for institutions",
        features: [
          "Everything in Professional",
          "Custom AI model training",
          "Advanced compliance features",
          "24/7 dedicated support",
          "Unlimited portfolio size",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$7,500",
      priceRange: "$5,000 - $20,000",
      competitors: ["Bloomberg ($24,000/year)", "Reuters ($12,000/year)", "TradingView ($29.95/month)"],
      roi: "800% within 12 months",
      setupTime: "3-4 weeks"
    }
  },

  // AI Supply Chain Optimization
  {
    id: "ai-supply-chain-pricing",
    serviceName: "AI Supply Chain Optimization & Management Platform",
    serviceId: "ai-supply-chain-optimization-2030",
    category: "Supply Chain",
    pricingTiers: [
      {
        name: "Small Business",
        price: 3499,
        period: "one-time",
        description: "Perfect for small businesses with basic supply chain needs",
        features: [
          "Basic inventory optimization",
          "Demand forecasting",
          "Basic reporting",
          "Email support",
          "Up to 1,000 SKUs",
          "Basic integrations"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Medium Business",
        price: 6999,
        period: "one-time",
        description: "Comprehensive solution for growing businesses",
        features: [
          "Everything in Small Business",
          "Advanced optimization algorithms",
          "Real-time tracking",
          "Automated procurement",
          "Priority support",
          "Up to 10,000 SKUs",
          "Advanced integrations",
          "Custom workflows"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise",
        price: 13999,
        period: "one-time",
        description: "Full-scale platform for large enterprises",
        features: [
          "Everything in Medium Business",
          "Custom AI model training",
          "Advanced analytics",
          "24/7 dedicated support",
          "Unlimited SKUs",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$4,000",
      priceRange: "$2,500 - $8,000",
      competitors: ["SAP ($1,500/user/month)", "Oracle ($1,200/user/month)", "Manhattan Associates ($2,000/user/month)"],
      roi: "450% within 6 months",
      setupTime: "3-4 weeks"
    }
  },

  // AI Content Creation Studio
  {
    id: "ai-content-creation-pricing",
    serviceName: "AI Content Creation & Marketing Studio",
    serviceId: "ai-content-creation-studio-2030",
    category: "Marketing",
    pricingTiers: [
      {
        name: "Creator",
        price: 1999,
        period: "one-time",
        description: "Perfect for content creators and small marketing teams",
        features: [
          "AI text generation (1,000 words/month)",
          "Basic image generation (100 images/month)",
          "Basic video creation (10 videos/month)",
          "SEO optimization",
          "Email support",
          "Basic templates"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Professional",
        price: 3999,
        period: "one-time",
        description: "Advanced platform for marketing professionals",
        features: [
          "Everything in Creator",
          "Advanced AI models",
          "Unlimited text generation",
          "Advanced image generation (500 images/month)",
          "Advanced video creation (100 videos/month)",
          "Priority support",
          "Advanced templates",
          "Custom branding"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise",
        price: 7999,
        period: "one-time",
        description: "Full-scale platform for large organizations",
        features: [
          "Everything in Professional",
          "Custom AI model training",
          "Unlimited content generation",
          "Advanced analytics",
          "24/7 dedicated support",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$2,500",
      priceRange: "$1,500 - $5,000",
      competitors: ["Jasper ($39/month)", "Copy.ai ($36/month)", "Writesonic ($25/month)"],
      roi: "300% within 3 months",
      setupTime: "1-2 weeks"
    }
  },

  // AI Sales Copilot
  {
    id: "ai-sales-copilot-pricing",
    serviceName: "AI Sales Copilot & Revenue Optimization Platform",
    serviceId: "ai-sales-copilot-2030",
    category: "Sales",
    pricingTiers: [
      {
        name: "Starter",
        price: 2499,
        period: "one-time",
        description: "Perfect for small sales teams",
        features: [
          "Basic lead scoring",
          "Sales forecasting",
          "Basic analytics",
          "Email support",
          "Up to 10 users",
          "Basic integrations"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Professional",
        price: 4999,
        period: "one-time",
        description: "Advanced platform for growing sales teams",
        features: [
          "Everything in Starter",
          "Advanced AI algorithms",
          "Customer insights",
          "Sales coaching",
          "Priority support",
          "Up to 50 users",
          "Advanced integrations",
          "Custom workflows"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise",
        price: 9999,
        period: "one-time",
        description: "Full-scale platform for large sales organizations",
        features: [
          "Everything in Professional",
          "Custom AI model training",
          "Advanced analytics",
          "24/7 dedicated support",
          "Unlimited users",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$3,000",
      priceRange: "$2,000 - $6,000",
      competitors: ["Salesforce ($25/user/month)", "HubSpot ($45/user/month)", "Pipedrive ($12.50/user/month)"],
      roi: "400% within 4 months",
      setupTime: "2-3 weeks"
    }
  },

  // AI Compliance Assistant
  {
    id: "ai-compliance-assistant-pricing",
    serviceName: "AI Compliance Assistant & Regulatory Management Platform",
    serviceId: "ai-compliance-assistant-2030",
    category: "Compliance",
    pricingTiers: [
      {
        name: "Basic",
        price: 3999,
        period: "one-time",
        description: "Essential compliance for small businesses",
        features: [
          "Basic regulatory reporting",
          "Risk monitoring",
          "Basic document review",
          "Email support",
          "Up to 100 documents/month",
          "Basic compliance tracking"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Advanced",
        price: 7999,
        period: "one-time",
        description: "Comprehensive compliance for growing organizations",
        features: [
          "Everything in Basic",
          "Advanced AI algorithms",
          "Automated risk assessment",
          "Advanced document review",
          "Priority support",
          "Up to 1,000 documents/month",
          "Advanced integrations",
          "Custom compliance workflows"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise",
        price: 15999,
        period: "one-time",
        description: "Full-scale platform for large enterprises",
        features: [
          "Everything in Advanced",
          "Custom AI model training",
          "Advanced compliance features",
          "24/7 dedicated support",
          "Unlimited documents",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$4,500",
      priceRange: "$3,000 - $8,000",
      competitors: ["LogicGate ($50,000/year)", "MetricStream ($75,000/year)", "SaiGlobal ($100,000/year)"],
      roi: "500% within 6 months",
      setupTime: "3-4 weeks"
    }
  },

  // Cloud FinOps Optimizer
  {
    id: "cloud-finops-optimizer-pricing",
    serviceName: "Cloud FinOps & Cost Optimization Platform",
    serviceId: "cloud-finops-optimizer-2030",
    category: "Cloud",
    pricingTiers: [
      {
        name: "Small Cloud",
        price: 2999,
        period: "one-time",
        description: "Perfect for small cloud deployments",
        features: [
          "Basic cost tracking",
          "Resource optimization",
          "Basic reporting",
          "Email support",
          "Up to $5K monthly cloud spend",
          "Basic integrations"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Medium Cloud",
        price: 5999,
        period: "one-time",
        description: "Advanced platform for growing cloud deployments",
        features: [
          "Everything in Small Cloud",
          "Advanced optimization algorithms",
          "Multi-cloud support",
          "Cost forecasting",
          "Priority support",
          "Up to $50K monthly cloud spend",
          "Advanced integrations",
          "Custom workflows"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise Cloud",
        price: 11999,
        period: "one-time",
        description: "Full-scale platform for large cloud deployments",
        features: [
          "Everything in Medium Cloud",
          "Custom AI model training",
          "Advanced analytics",
          "24/7 dedicated support",
          "Unlimited cloud spend",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$3,500",
      priceRange: "$2,500 - $7,000",
      competitors: ["CloudHealth ($1,000/month)", "Apptio ($2,000/month)", "CloudCheckr ($500/month)"],
      roi: "400% within 5 months",
      setupTime: "2-3 weeks"
    }
  },

  // Edge Computing Solutions
  {
    id: "edge-computing-solutions-pricing",
    serviceName: "Edge Computing & IoT Management Platform",
    serviceId: "edge-computing-solutions-2030",
    category: "IoT & Edge",
    pricingTiers: [
      {
        name: "Small IoT",
        price: 3499,
        period: "one-time",
        description: "Perfect for small IoT deployments",
        features: [
          "Basic device management",
          "Edge AI processing",
          "Basic analytics",
          "Email support",
          "Up to 100 devices",
          "Basic integrations"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Medium IoT",
        price: 6999,
        period: "one-time",
        description: "Advanced platform for growing IoT deployments",
        features: [
          "Everything in Small IoT",
          "Advanced edge AI",
          "Real-time analytics",
          "Automated deployment",
          "Priority support",
          "Up to 1,000 devices",
          "Advanced integrations",
          "Custom workflows"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise IoT",
        price: 13999,
        period: "one-time",
        description: "Full-scale platform for large IoT deployments",
        features: [
          "Everything in Medium IoT",
          "Custom AI model training",
          "Advanced analytics",
          "24/7 dedicated support",
          "Unlimited devices",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$4,000",
      priceRange: "$3,000 - $8,000",
      competitors: ["AWS Greengrass ($0.16/device/month)", "Azure IoT Edge ($0.08/device/month)", "Google Edge TPU ($0.50/device/month)"],
      roi: "450% within 6 months",
      setupTime: "3-4 weeks"
    }
  },

  // Blockchain Enterprise Solutions
  {
    id: "blockchain-enterprise-pricing",
    serviceName: "Blockchain Enterprise & Web3 Integration Platform",
    serviceId: "blockchain-enterprise-solutions-2030",
    category: "Blockchain",
    pricingTiers: [
      {
        name: "Basic Blockchain",
        price: 4999,
        period: "one-time",
        description: "Perfect for small blockchain projects",
        features: [
          "Basic smart contracts",
          "Single chain support",
          "Basic security",
          "Email support",
          "Up to 1,000 transactions/month",
          "Basic integrations"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Advanced Blockchain",
        price: 9999,
        period: "one-time",
        description: "Advanced platform for growing blockchain projects",
        features: [
          "Everything in Basic Blockchain",
          "Advanced smart contracts",
          "Multi-chain support",
          "Enterprise security",
          "Priority support",
          "Up to 10,000 transactions/month",
          "Advanced integrations",
          "Custom workflows"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise Blockchain",
        price: 19999,
        period: "one-time",
        description: "Full-scale platform for large blockchain projects",
        features: [
          "Everything in Advanced Blockchain",
          "Custom blockchain development",
          "Advanced security features",
          "24/7 dedicated support",
          "Unlimited transactions",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$6,000",
      priceRange: "$4,000 - $12,000",
      competitors: ["IBM Blockchain ($10,000/month)", "Microsoft Azure Blockchain ($5,000/month)", "Amazon Managed Blockchain ($0.30/hour)"],
      roi: "600% within 8 months",
      setupTime: "4-5 weeks"
    }
  },

  // Quantum AI Platform
  {
    id: "quantum-ai-platform-pricing",
    serviceName: "Quantum AI & Neural Network Platform",
    serviceId: "quantum-ai-platform-2030",
    category: "Quantum Computing",
    pricingTiers: [
      {
        name: "Research",
        price: 7999,
        period: "one-time",
        description: "Perfect for research institutions and universities",
        features: [
          "Basic quantum AI algorithms",
          "Quantum simulation",
          "Basic neural networks",
          "Email support",
          "Up to 100 quantum operations/month",
          "Basic integrations"
        ],
        popular: false,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Advanced Research",
        price: 15999,
        period: "one-time",
        description: "Advanced platform for research and development",
        features: [
          "Everything in Research",
          "Advanced quantum algorithms",
          "Hybrid quantum-classical",
          "Advanced neural networks",
          "Priority support",
          "Up to 1,000 quantum operations/month",
          "Advanced integrations",
          "Custom algorithms"
        ],
        popular: true,
        cta: "Get Started",
        link: "/contact"
      },
      {
        name: "Enterprise Quantum",
        price: 31999,
        period: "one-time",
        description: "Full-scale platform for enterprise quantum computing",
        features: [
          "Everything in Advanced Research",
          "Custom quantum algorithms",
          "Advanced quantum features",
          "24/7 dedicated support",
          "Unlimited quantum operations",
          "Custom integrations",
          "SLA guarantees",
          "On-premise deployment"
        ],
        popular: false,
        cta: "Contact Sales",
        link: "/contact"
      }
    ],
    marketAnalysis: {
      averagePrice: "$9,000",
      priceRange: "$6,000 - $18,000",
      competitors: ["IBM Quantum ($1,600/hour)", "Google Quantum AI ($2,000/hour)", "Microsoft Azure Quantum ($1,000/hour)"],
      roi: "800% within 12 months",
      setupTime: "5-6 weeks"
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2030;
