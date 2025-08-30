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
        price: 299,
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
        price: 799,
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
        price: 1999,
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
      averageMarketPrice: "$500 - $2,000/month",
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

  // Quantum AI Trading Platform
  {
    id: "quantum-ai-trading-platform",
    title: "Quantum AI Trading Platform",
    description: "Revolutionary trading platform combining quantum computing algorithms with AI for unprecedented market prediction accuracy.",
    category: "Quantum Computing",
    pricingTiers: [
      {
        name: "Professional",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Quantum AI algorithms",
          "Real-time market analysis",
          "Automated trading strategies",
          "Risk management",
          "Portfolio optimization",
          "Multi-exchange support",
          "Advanced backtesting",
          "API access"
        ],
        bestFor: "Professional traders and investment firms",
        popular: true
      },
      {
        name: "Institutional",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom quantum algorithms",
          "Dedicated account manager",
          "White-label solutions",
          "Advanced risk analytics",
          "24/7 trading support",
          "Custom integrations",
          "On-premise deployment"
        ],
        bestFor: "Hedge funds and institutional investors"
      }
    ],
    marketComparison: {
      competitors: ["Bloomberg Terminal", "Thomson Reuters", "FactSet", "Refinitiv"],
      averageMarketPrice: "$2,000 - $5,000/month",
      ourAdvantage: "25% more affordable with quantum computing advantage"
    },
    roi: "300-500% within 18 months",
    implementationTime: "8-12 weeks",
    supportLevel: "24/7 trading support with dedicated account managers",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Cybersecurity Suite
  {
    id: "ai-cybersecurity-suite",
    title: "AI Cybersecurity Suite",
    description: "Comprehensive AI-powered cybersecurity platform with threat detection, incident response, and automated security management.",
    category: "Cybersecurity",
    pricingTiers: [
      {
        name: "Essential",
        price: 399,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI threat detection",
          "Zero-day prevention",
          "Incident response automation",
          "Security monitoring",
          "Vulnerability assessment",
          "Compliance management",
          "Security analytics",
          "API security"
        ],
        bestFor: "Small to medium businesses",
        popular: true
      },
      {
        name: "Advanced",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Essential features",
          "Advanced threat hunting",
          "Custom AI models",
          "Penetration testing",
          "Security orchestration",
          "Threat intelligence",
          "Custom integrations",
          "Priority support"
        ],
        bestFor: "Growing enterprises with complex security needs"
      },
      {
        name: "Enterprise",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Advanced features",
          "Custom security policies",
          "Advanced compliance",
          "24/7 security operations",
          "White-label solutions",
          "On-premise deployment",
          "Custom development",
          "Dedicated security team"
        ],
        bestFor: "Large enterprises requiring maximum security"
      }
    ],
    marketComparison: {
      competitors: ["CrowdStrike", "SentinelOne", "Darktrace", "Cylance"],
      averageMarketPrice: "$600 - $1,500/month",
      ourAdvantage: "35% more affordable with superior AI capabilities"
    },
    roi: "200-350% within 12 months",
    implementationTime: "4-6 weeks",
    supportLevel: "24/7 security support with emergency response",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Digital Twin Platform
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform",
    description: "Create virtual replicas of physical assets, processes, and systems for real-time monitoring and optimization.",
    category: "IoT & Edge Computing",
    pricingTiers: [
      {
        name: "Starter",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "3D digital twin creation",
          "Real-time monitoring",
          "Predictive maintenance",
          "IoT integration",
          "AI-powered analytics",
          "Simulation capabilities",
          "Collaborative workspace",
          "API access"
        ],
        bestFor: "Manufacturers and facility managers",
        popular: true
      },
      {
        name: "Professional",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Starter features",
          "Advanced simulations",
          "Custom AI models",
          "Multi-site management",
          "Advanced analytics",
          "Custom integrations",
          "Training programs",
          "Priority support"
        ],
        bestFor: "Multi-site operations and complex systems"
      },
      {
        name: "Enterprise",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom development",
          "White-label solutions",
          "On-premise deployment",
          "24/7 monitoring",
          "Custom AI algorithms",
          "Dedicated support team",
          "Implementation consulting"
        ],
        bestFor: "Large enterprises with complex infrastructure"
      }
    ],
    marketComparison: {
      competitors: ["Siemens", "GE Digital", "PTC", "Dassault Systèmes"],
      averageMarketPrice: "$800 - $2,000/month",
      ourAdvantage: "25% more affordable with AI-powered insights"
    },
    roi: "180-300% within 18 months",
    implementationTime: "8-12 weeks",
    supportLevel: "Implementation support with training and consulting",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Healthcare Analytics Platform
  {
    id: "ai-healthcare-analytics",
    title: "AI Healthcare Analytics Platform",
    description: "Advanced healthcare analytics platform using AI to improve patient outcomes and optimize operations.",
    category: "Healthcare Technology",
    pricingTiers: [
      {
        name: "Clinical",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Patient outcome prediction",
          "Operational optimization",
          "Clinical decision support",
          "Population health analytics",
          "Risk stratification",
          "Quality metrics",
          "Compliance reporting",
          "HIPAA compliance"
        ],
        bestFor: "Healthcare providers and hospitals",
        popular: true
      },
      {
        name: "Enterprise",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Clinical features",
          "Advanced AI models",
          "Custom integrations",
          "Multi-site management",
          "Advanced analytics",
          "Custom reporting",
          "Priority support",
          "Clinical consulting"
        ],
        bestFor: "Health systems and large hospitals"
      }
    ],
    marketComparison: {
      competitors: ["Epic", "Cerner", "Allscripts", "Meditech"],
      averageMarketPrice: "$1,000 - $3,000/month",
      ourAdvantage: "20% more affordable with AI-powered insights"
    },
    roi: "150-250% within 24 months",
    implementationTime: "12-16 weeks",
    supportLevel: "Clinical consulting with 24/7 technical support",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Space Technology Platform
  {
    id: "space-technology-platform",
    title: "Space Technology Platform",
    description: "Cutting-edge space technology solutions including satellite data analysis and orbital optimization.",
    category: "Space Technology",
    pricingTiers: [
      {
        name: "Research",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Satellite data analysis",
          "Space weather monitoring",
          "Orbital optimization",
          "Earth observation",
          "Navigation systems",
          "Communication networks",
          "Research tools",
          "API access"
        ],
        bestFor: "Research institutions and space agencies",
        popular: true
      },
      {
        name: "Commercial",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Research features",
          "Advanced analytics",
          "Custom algorithms",
          "Commercial insights",
          "Custom integrations",
          "Priority support",
          "Space consulting",
          "Custom development"
        ],
        bestFor: "Commercial space companies and operators"
      }
    ],
    marketComparison: {
      competitors: ["Maxar", "Planet Labs", "BlackSky", "ICEYE"],
      averageMarketPrice: "$2,000 - $5,000/month",
      ourAdvantage: "35% more affordable with advanced AI capabilities"
    },
    roi: "200-400% within 24 months",
    implementationTime: "12-16 weeks",
    supportLevel: "Space consulting with technical support and collaboration",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Marketing Automation Suite
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation Suite",
    description: "Intelligent marketing automation platform that personalizes customer experiences and optimizes campaigns.",
    category: "Marketing & Sales",
    pricingTiers: [
      {
        name: "Starter",
        price: 199,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI-powered personalization",
          "Campaign optimization",
          "Customer segmentation",
          "A/B testing automation",
          "Lead scoring",
          "Email marketing",
          "Social media automation",
          "Analytics dashboard"
        ],
        bestFor: "Small businesses and startups",
        popular: true
      },
      {
        name: "Professional",
        price: 499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Starter features",
          "Advanced AI models",
          "Multi-channel campaigns",
          "Advanced analytics",
          "Custom integrations",
          "Priority support",
          "Marketing consulting",
          "Custom workflows"
        ],
        bestFor: "Growing businesses and marketing agencies"
      },
      {
        name: "Enterprise",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom AI algorithms",
          "White-label solutions",
          "Advanced reporting",
          "Custom development",
          "24/7 support",
          "Dedicated account manager",
          "Strategy consulting"
        ],
        bestFor: "Large enterprises and marketing teams"
      }
    ],
    marketComparison: {
      competitors: ["HubSpot", "Marketo", "Pardot", "ActiveCampaign"],
      averageMarketPrice: "$300 - $800/month",
      ourAdvantage: "30% more affordable with AI-powered optimization"
    },
    roi: "200-350% within 12 months",
    implementationTime: "4-6 weeks",
    supportLevel: "Marketing consulting with implementation support",
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
    description: "Enterprise-grade blockchain solutions for supply chain transparency, smart contracts, and digital identity.",
    category: "Blockchain & Web3",
    pricingTiers: [
      {
        name: "Business",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Smart contract development",
          "Supply chain tracking",
          "Digital identity management",
          "DeFi solutions",
          "NFT marketplace",
          "Cross-chain interoperability",
          "Enterprise security",
          "API access"
        ],
        bestFor: "Enterprises exploring blockchain",
        popular: true
      },
      {
        name: "Enterprise",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Business features",
          "Custom blockchain networks",
          "Advanced smart contracts",
          "Custom integrations",
          "Security auditing",
          "Compliance management",
          "Priority support",
          "Blockchain consulting"
        ],
        bestFor: "Large enterprises with blockchain needs"
      }
    ],
    marketComparison: {
      competitors: ["ConsenSys", "R3", "Hyperledger", "Digital Asset"],
      averageMarketPrice: "$1,200 - $3,000/month",
      ourAdvantage: "25% more affordable with enterprise-grade features"
    },
    roi: "180-300% within 18 months",
    implementationTime: "8-12 weeks",
    supportLevel: "Blockchain consulting with development support",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Green IT Solutions Platform
  {
    id: "green-it-solutions",
    title: "Green IT Solutions Platform",
    description: "Sustainable technology solutions that reduce carbon footprint and optimize energy consumption.",
    category: "Sustainability",
    pricingTiers: [
      {
        name: "Basic",
        price: 299,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Energy consumption monitoring",
          "Carbon footprint tracking",
          "Sustainable infrastructure",
          "Green cloud solutions",
          "E-waste management",
          "Sustainability reporting",
          "Green certifications",
          "Environmental analytics"
        ],
        bestFor: "Small businesses starting sustainability",
        popular: true
      },
      {
        name: "Advanced",
        price: 699,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Advanced energy optimization",
          "Custom sustainability metrics",
          "Compliance automation",
          "Custom reporting",
          "Integration support",
          "Sustainability consulting",
          "Priority support"
        ],
        bestFor: "Growing companies with sustainability goals"
      },
      {
        name: "Enterprise",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Advanced features",
          "Custom sustainability solutions",
          "Advanced compliance",
          "White-label options",
          "Custom development",
          "24/7 support",
          "Dedicated sustainability team",
          "Implementation consulting"
        ],
        bestFor: "Large enterprises with sustainability commitments"
      }
    ],
    marketComparison: {
      competitors: ["Schneider Electric", "Siemens", "Honeywell", "Johnson Controls"],
      averageMarketPrice: "$400 - $1,000/month",
      ourAdvantage: "25% more affordable with AI-powered optimization"
    },
    roi: "150-250% within 18 months",
    implementationTime: "6-10 weeks",
    supportLevel: "Sustainability consulting with implementation support",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2025;