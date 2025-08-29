export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billing: string;
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
  marketPrice: string;
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
  // AI-Powered Business Intelligence Platform
  {
    id: "ai-business-intelligence-platform",
    title: "AI Business Intelligence Platform",
    description: "Next-generation business intelligence platform that uses AI to automatically analyze data, generate insights, and create actionable reports for business decision-making.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Starter",
        price: 1999,
        currency: "$",
        billing: "monthly",
        features: [
          "AI-powered data analysis",
          "Basic dashboards",
          "Standard integrations",
          "Email support",
          "Up to 5 users"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        name: "Professional",
        price: 2999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Starter",
          "Advanced analytics",
          "Custom dashboards",
          "Priority support",
          "Up to 25 users",
          "API access"
        ],
        bestFor: "Growing businesses",
        popular: true
      },
      {
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited users",
          "Custom integrations",
          "Dedicated support",
          "Advanced security",
          "White-label options"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$2,999 - $8,999/month",
    roi: "250-400%",
    implementationTime: "6-8 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Cybersecurity Suite Pro
  {
    id: "ai-cybersecurity-suite-pro",
    title: "AI Cybersecurity Suite Pro",
    description: "Comprehensive AI-powered cybersecurity platform that provides real-time threat detection, automated incident response, and intelligent security orchestration for enterprise environments.",
    category: "Cybersecurity",
    pricingTiers: [
      {
        name: "Essential",
        price: 2999,
        currency: "$",
        billing: "monthly",
        features: [
          "AI threat detection",
          "Basic incident response",
          "Security monitoring",
          "Email support",
          "Up to 100 endpoints"
        ],
        bestFor: "Small to medium businesses"
      },
      {
        name: "Professional",
        price: 4999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Essential",
          "Advanced threat hunting",
          "Automated response",
          "Priority support",
          "Up to 1000 endpoints",
          "Compliance reporting"
        ],
        bestFor: "Medium to large businesses",
        popular: true
      },
      {
        name: "Enterprise",
        price: 8999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited endpoints",
          "Custom integrations",
          "Dedicated security team",
          "Advanced compliance",
          "24/7 support"
        ],
        bestFor: "Large enterprises and government"
      }
    ],
    marketPrice: "$4,999 - $12,999/month",
    roi: "300-500%",
    implementationTime: "8-10 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Supply Chain Optimizer
  {
    id: "ai-supply-chain-optimizer",
    title: "AI Supply Chain Optimizer",
    description: "Intelligent supply chain optimization platform that uses AI to predict demand, optimize inventory, and streamline logistics operations for maximum efficiency and cost savings.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Basic",
        price: 2499,
        currency: "$",
        billing: "monthly",
        features: [
          "Demand forecasting",
          "Basic inventory optimization",
          "Standard reporting",
          "Email support",
          "Up to 3 warehouses"
        ],
        bestFor: "Small supply chains"
      },
      {
        name: "Professional",
        price: 3999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Basic",
          "Advanced optimization",
          "Route optimization",
          "Priority support",
          "Up to 10 warehouses",
          "API access"
        ],
        bestFor: "Medium supply chains",
        popular: true
      },
      {
        name: "Enterprise",
        price: 6999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited warehouses",
          "Custom algorithms",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        bestFor: "Large supply chains"
      }
    ],
    marketPrice: "$3,999 - $9,999/month",
    roi: "200-350%",
    implementationTime: "10-12 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Healthcare Analytics Platform
  {
    id: "ai-healthcare-analytics-platform",
    title: "AI Healthcare Analytics Platform",
    description: "Advanced healthcare analytics platform that leverages AI to analyze patient data, predict health outcomes, and optimize clinical decision-making for improved patient care.",
    category: "Healthcare",
    pricingTiers: [
      {
        name: "Clinical",
        price: 3999,
        currency: "$",
        billing: "monthly",
        features: [
          "Patient outcome prediction",
          "Basic clinical support",
          "Standard compliance",
          "Email support",
          "Up to 1000 patients"
        ],
        bestFor: "Small clinics"
      },
      {
        name: "Hospital",
        price: 5999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Clinical",
          "Advanced analytics",
          "Population health",
          "Priority support",
          "Up to 10000 patients",
          "Custom integrations"
        ],
        bestFor: "Medium hospitals",
        popular: true
      },
      {
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Hospital",
          "Unlimited patients",
          "Custom algorithms",
          "Dedicated support",
          "Advanced compliance",
          "Research capabilities"
        ],
        bestFor: "Large healthcare systems"
      }
    ],
    marketPrice: "$5,999 - $15,999/month",
    roi: "400-600%",
    implementationTime: "12-16 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Financial Trading Platform
  {
    id: "ai-financial-trading-platform",
    title: "AI Financial Trading Platform",
    description: "Intelligent financial trading platform that uses AI algorithms for market analysis, automated trading strategies, and portfolio optimization with real-time risk management.",
    category: "FinTech",
    pricingTiers: [
      {
        name: "Professional",
        price: 4999,
        currency: "$",
        billing: "monthly",
        features: [
          "AI market analysis",
          "Basic trading strategies",
          "Risk management",
          "Email support",
          "Up to $1M portfolio"
        ],
        bestFor: "Individual traders"
      },
      {
        name: "Institutional",
        price: 7999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Advanced strategies",
          "Portfolio optimization",
          "Priority support",
          "Up to $100M portfolio",
          "Custom algorithms"
        ],
        bestFor: "Hedge funds and institutions",
        popular: true
      },
      {
        name: "Enterprise",
        price: 14999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Institutional",
          "Unlimited portfolio size",
          "Custom development",
          "Dedicated support",
          "Advanced compliance",
          "White-label options"
        ],
        bestFor: "Large financial institutions"
      }
    ],
    marketPrice: "$7,999 - $19,999/month",
    roi: "500-800%",
    implementationTime: "14-18 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Content Generation Studio
  {
    id: "ai-content-generation-studio",
    title: "AI Content Generation Studio",
    description: "Advanced content creation platform that uses AI to generate high-quality, SEO-optimized content across multiple formats including articles, social media posts, and marketing materials.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Creator",
        price: 999,
        currency: "$",
        billing: "monthly",
        features: [
          "AI content generation",
          "Basic SEO optimization",
          "Standard templates",
          "Email support",
          "Up to 1000 words/month"
        ],
        bestFor: "Individual creators"
      },
      {
        name: "Professional",
        price: 1999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Creator",
          "Advanced SEO",
          "Custom templates",
          "Priority support",
          "Up to 10000 words/month",
          "Multi-language support"
        ],
        bestFor: "Marketing teams",
        popular: true
      },
      {
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited content",
          "Custom AI models",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        bestFor: "Large organizations"
      }
    ],
    marketPrice: "$1,999 - $4,999/month",
    roi: "150-300%",
    implementationTime: "4-6 weeks",
    supportLevel: "Professional",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Customer Experience Platform
  {
    id: "ai-customer-experience-platform",
    title: "AI Customer Experience Platform",
    description: "Comprehensive customer experience platform that uses AI to personalize interactions, predict customer needs, and optimize engagement across all touchpoints for maximum satisfaction and loyalty.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Growth",
        price: 1999,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic personalization",
          "Customer analytics",
          "Standard integrations",
          "Email support",
          "Up to 10000 customers"
        ],
        bestFor: "Growing businesses"
      },
      {
        name: "Professional",
        price: 3499,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Growth",
          "Advanced personalization",
          "Predictive analytics",
          "Priority support",
          "Up to 100000 customers",
          "Custom integrations"
        ],
        bestFor: "Medium businesses",
        popular: true
      },
      {
        name: "Enterprise",
        price: 6999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited customers",
          "Custom AI models",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$3,499 - $8,999/month",
    roi: "250-400%",
    implementationTime: "8-10 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Workflow Orchestrator Pro
  {
    id: "ai-workflow-orchestrator-pro",
    title: "AI Workflow Orchestrator Pro",
    description: "Intelligent workflow automation platform that uses AI to orchestrate complex business processes, optimize resource allocation, and ensure seamless execution across teams and systems.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Automation",
        price: 2499,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic workflow automation",
          "Standard integrations",
          "Email support",
          "Up to 100 workflows",
          "Basic analytics"
        ],
        bestFor: "Small businesses"
      },
      {
        name: "Professional",
        price: 4499,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Automation",
          "Advanced orchestration",
          "AI optimization",
          "Priority support",
          "Up to 1000 workflows",
          "Custom integrations"
        ],
        bestFor: "Medium businesses",
        popular: true
      },
      {
        name: "Enterprise",
        price: 8999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited workflows",
          "Custom AI models",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$4,499 - $11,999/month",
    roi: "300-500%",
    implementationTime: "10-12 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Data Governance Platform
  {
    id: "ai-data-governance-platform",
    title: "AI Data Governance Platform",
    description: "Intelligent data governance platform that uses AI to automate data classification, ensure compliance, and maintain data quality across enterprise systems for improved decision-making and regulatory adherence.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Compliance",
        price: 2499,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic data classification",
          "Standard compliance",
          "Email support",
          "Up to 1TB data",
          "Basic reporting"
        ],
        bestFor: "Small organizations"
      },
      {
        name: "Professional",
        price: 3999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Compliance",
          "Advanced classification",
          "AI automation",
          "Priority support",
          "Up to 10TB data",
          "Custom integrations"
        ],
        bestFor: "Medium organizations",
        popular: true
      },
      {
        name: "Enterprise",
        price: 7999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited data",
          "Custom AI models",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$3,999 - $9,999/month",
    roi: "400-600%",
    implementationTime: "12-16 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Edge Computing Platform
  {
    id: "ai-edge-computing-platform",
    title: "AI Edge Computing Platform",
    description: "Advanced edge computing platform that brings AI processing closer to data sources, enabling real-time analytics, reduced latency, and improved performance for IoT and mobile applications.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Edge",
        price: 3499,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic edge processing",
          "Standard integrations",
          "Email support",
          "Up to 100 devices",
          "Basic analytics"
        ],
        bestFor: "Small IoT deployments"
      },
      {
        name: "Professional",
        price: 5499,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Edge",
          "Advanced AI processing",
          "Real-time analytics",
          "Priority support",
          "Up to 1000 devices",
          "Custom integrations"
        ],
        bestFor: "Medium IoT deployments",
        popular: true
      },
      {
        name: "Enterprise",
        price: 10999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited devices",
          "Custom AI models",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        bestFor: "Large IoT deployments"
      }
    ],
    marketPrice: "$5,499 - $13,999/month",
    roi: "350-550%",
    implementationTime: "14-18 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Customer Success Platform
  {
    id: "ai-customer-success-platform",
    title: "AI Customer Success Platform",
    description: "Intelligent customer success platform that uses AI to predict churn, optimize customer engagement, and drive product adoption for increased customer lifetime value and retention.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        name: "Success",
        price: 1999,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic churn prediction",
          "Customer analytics",
          "Email support",
          "Up to 1000 customers",
          "Basic reporting"
        ],
        bestFor: "Small SaaS companies"
      },
      {
        name: "Professional",
        price: 2999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Success",
          "Advanced predictions",
          "AI optimization",
          "Priority support",
          "Up to 10000 customers",
          "Custom integrations"
        ],
        bestFor: "Medium SaaS companies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 5999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited customers",
          "Custom AI models",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        bestFor: "Large SaaS companies"
      }
    ],
    marketPrice: "$2,999 - $7,999/month",
    roi: "250-400%",
    implementationTime: "8-10 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum AI Platform
  {
    id: "quantum-ai-platform",
    title: "Quantum AI Platform",
    description: "Revolutionary quantum computing platform that combines quantum algorithms with AI to solve complex optimization problems, accelerate machine learning, and enable breakthrough discoveries.",
    category: "Quantum Computing",
    pricingTiers: [
      {
        name: "Research",
        price: 5999,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic quantum access",
          "Standard algorithms",
          "Email support",
          "Up to 100 qubits",
          "Basic documentation"
        ],
        bestFor: "Research institutions"
      },
      {
        name: "Professional",
        price: 9999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Research",
          "Advanced algorithms",
          "AI integration",
          "Priority support",
          "Up to 1000 qubits",
          "Custom development"
        ],
        bestFor: "Technology companies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 19999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited qubits",
          "Custom algorithms",
          "Dedicated support",
          "Advanced research",
          "White-label options"
        ],
        bestFor: "Large corporations and government"
      }
    ],
    marketPrice: "$9,999 - $25,999/month",
    roi: "1000-2000%",
    implementationTime: "20-24 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain Enterprise Solutions
  {
    id: "blockchain-enterprise-solutions",
    title: "Blockchain Enterprise Solutions",
    description: "Enterprise-grade blockchain platform that provides secure, scalable, and compliant solutions for supply chain management, digital identity, and decentralized applications.",
    category: "Blockchain",
    pricingTiers: [
      {
        name: "Enterprise",
        price: 4499,
        currency: "$",
        billing: "monthly",
        features: [
          "Private blockchain",
          "Basic smart contracts",
          "Standard security",
          "Email support",
          "Up to 1000 transactions/day"
        ],
        bestFor: "Medium enterprises"
      },
      {
        name: "Professional",
        price: 6499,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Enterprise",
          "Advanced contracts",
          "Enhanced security",
          "Priority support",
          "Up to 10000 transactions/day",
          "Custom development"
        ],
        bestFor: "Large enterprises",
        popular: true
      },
      {
        name: "Ultimate",
        price: 12999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited transactions",
          "Custom blockchain",
          "Dedicated support",
          "Advanced compliance",
          "White-label options"
        ],
        bestFor: "Fortune 500 companies"
      }
    ],
    marketPrice: "$6,499 - $16,999/month",
    roi: "400-700%",
    implementationTime: "16-20 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT Edge Computing Platform
  {
    id: "iot-edge-computing-platform",
    title: "IoT Edge Computing Platform",
    description: "Comprehensive IoT edge computing platform that enables real-time data processing, local AI inference, and seamless connectivity for industrial IoT applications.",
    category: "IoT",
    pricingTiers: [
      {
        name: "Industrial",
        price: 2999,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic edge processing",
          "Standard connectivity",
          "Email support",
          "Up to 500 devices",
          "Basic analytics"
        ],
        bestFor: "Small industrial deployments"
      },
      {
        name: "Professional",
        price: 4499,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Industrial",
          "Advanced processing",
          "AI inference",
          "Priority support",
          "Up to 5000 devices",
          "Custom integrations"
        ],
        bestFor: "Medium industrial deployments",
        popular: true
      },
      {
        name: "Enterprise",
        price: 8999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited devices",
          "Custom AI models",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        bestFor: "Large industrial deployments"
      }
    ],
    marketPrice: "$4,499 - $11,999/month",
    roi: "300-500%",
    implementationTime: "12-16 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Green Technology Solutions
  {
    id: "green-technology-solutions",
    title: "Green Technology Solutions",
    description: "Comprehensive green technology platform that helps organizations reduce carbon footprint, optimize energy usage, and achieve sustainability goals through AI-powered analytics and automation.",
    category: "Sustainability",
    pricingTiers: [
      {
        name: "Green",
        price: 2499,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic carbon tracking",
          "Energy optimization",
          "Email support",
          "Up to 10 locations",
          "Basic reporting"
        ],
        bestFor: "Small organizations"
      },
      {
        name: "Professional",
        price: 3999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Green",
          "Advanced analytics",
          "AI optimization",
          "Priority support",
          "Up to 100 locations",
          "Custom integrations"
        ],
        bestFor: "Medium organizations",
        popular: true
      },
      {
        name: "Enterprise",
        price: 7999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited locations",
          "Custom AI models",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        bestFor: "Large organizations"
      }
    ],
    marketPrice: "$3,999 - $9,999/month",
    roi: "200-400%",
    implementationTime: "10-14 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Space Technology Solutions
  {
    id: "space-technology-solutions",
    title: "Space Technology Solutions",
    description: "Advanced space technology platform that provides satellite data analytics, space mission planning, and Earth observation services for commercial and government applications.",
    category: "Space Tech",
    pricingTiers: [
      {
        name: "Satellite",
        price: 4999,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic satellite data",
          "Earth observation",
          "Email support",
          "Up to 100GB data/month",
          "Basic analytics"
        ],
        bestFor: "Small research projects"
      },
      {
        name: "Professional",
        price: 7999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Satellite",
          "Advanced analytics",
          "Mission planning",
          "Priority support",
          "Up to 1TB data/month",
          "Custom solutions"
        ],
        bestFor: "Medium research projects",
        popular: true
      },
      {
        name: "Enterprise",
        price: 15999,
        currency: "$",
        billing: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited data",
          "Custom satellites",
          "Dedicated support",
          "Advanced research",
          "White-label options"
        ],
        bestFor: "Large research projects and government"
      }
    ],
    marketPrice: "$7,999 - $19,999/month",
    roi: "500-800%",
    implementationTime: "18-24 weeks",
    supportLevel: "Enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2025;