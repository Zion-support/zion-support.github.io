export interface ServicePricing {
  id: string;
  title: string;
  category: string;
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    billing: string;
  };
  marketPrice: {
    low: number;
    high: number;
    average: number;
    currency: string;
  };
  roi: {
    conservative: string;
    aggressive: string;
    average: string;
  };
  features: {
    starter: string[];
    professional: string[];
    enterprise: string[];
  };
  targetAudience: string[];
  competitors: string[];
  marketSize: string;
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
    category: "AI & Analytics",
    pricing: {
      starter: 999,
      professional: 2999,
      enterprise: 8999,
      currency: "$",
      billing: "monthly"
    },
    marketPrice: {
      low: 1999,
      high: 8999,
      average: 5499,
      currency: "$"
    },
    roi: {
      conservative: "250%",
      aggressive: "400%",
      average: "325%"
    },
    features: {
      starter: [
        "AI-powered data analysis",
        "Basic dashboard creation",
        "Data integration (up to 5 sources)",
        "Email support",
        "Standard security"
      ],
      professional: [
        "All starter features",
        "Advanced analytics",
        "Custom dashboards",
        "API access",
        "Priority support",
        "Advanced security"
      ],
      enterprise: [
        "All professional features",
        "Unlimited data sources",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Enterprise security"
      ]
    },
    targetAudience: [
      "Business analysts",
      "Data scientists",
      "Executives",
      "Marketing teams",
      "Sales teams"
    ],
    competitors: ["Tableau", "Power BI", "Looker", "Qlik"],
    marketSize: "$25.5B (2025)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum AI Optimization Platform
  {
    id: "quantum-ai-optimization-platform",
    title: "Quantum AI Optimization Platform",
    category: "Quantum Computing",
    pricing: {
      starter: 1999,
      professional: 4999,
      enterprise: 15000,
      currency: "$",
      billing: "monthly"
    },
    marketPrice: {
      low: 4999,
      high: 15000,
      average: 9999,
      currency: "$"
    },
    roi: {
      conservative: "300%",
      aggressive: "500%",
      average: "400%"
    },
    features: {
      starter: [
        "Basic quantum algorithms",
        "Standard optimization",
        "API access",
        "Email support",
        "Basic security"
      ],
      professional: [
        "All starter features",
        "Advanced quantum algorithms",
        "Custom optimization",
        "Performance analytics",
        "Priority support",
        "Advanced security"
      ],
      enterprise: [
        "All professional features",
        "Custom quantum models",
        "Hybrid computing",
        "Dedicated infrastructure",
        "24/7 support",
        "Enterprise security"
      ]
    },
    targetAudience: [
      "Financial institutions",
      "Logistics companies",
      "Manufacturing firms",
      "Research institutions",
      "Government agencies"
    ],
    competitors: ["D-Wave", "IBM Quantum", "Google Quantum AI"],
    marketSize: "$8.7B (2025)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Cybersecurity Platform
  {
    id: "ai-cybersecurity-platform",
    title: "AI-Powered Cybersecurity Platform",
    category: "Cybersecurity",
    pricing: {
      starter: 999,
      professional: 1999,
      enterprise: 5999,
      currency: "$",
      billing: "monthly"
    },
    marketPrice: {
      low: 1999,
      high: 5999,
      average: 3999,
      currency: "$"
    },
    roi: {
      conservative: "200%",
      aggressive: "350%",
      average: "275%"
    },
    features: {
      starter: [
        "Basic threat detection",
        "Email security",
        "Basic monitoring",
        "Email support",
        "Standard security"
      ],
      professional: [
        "All starter features",
        "Advanced threat detection",
        "Behavioral analysis",
        "Incident response",
        "Priority support",
        "Advanced security"
      ],
      enterprise: [
        "All professional features",
        "Zero-trust architecture",
        "Advanced analytics",
        "Compliance tools",
        "24/7 support",
        "Enterprise security"
      ]
    },
    targetAudience: [
      "Enterprise companies",
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Educational institutions"
    ],
    competitors: ["CrowdStrike", "SentinelOne", "Darktrace", "Cylance"],
    marketSize: "$45.2B (2025)",
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
    category: "IoT & Edge Computing",
    pricing: {
      starter: 799,
      professional: 1499,
      enterprise: 4999,
      currency: "$",
      billing: "monthly"
    },
    marketPrice: {
      low: 1499,
      high: 4999,
      average: 3249,
      currency: "$"
    },
    roi: {
      conservative: "180%",
      aggressive: "300%",
      average: "240%"
    },
    features: {
      starter: [
        "Basic device management",
        "Data processing",
        "Basic analytics",
        "Email support",
        "Standard security"
      ],
      professional: [
        "All starter features",
        "Advanced analytics",
        "Real-time processing",
        "API gateway",
        "Priority support",
        "Advanced security"
      ],
      enterprise: [
        "All professional features",
        "Custom protocols",
        "Advanced monitoring",
        "Scalable architecture",
        "24/7 support",
        "Enterprise security"
      ]
    },
    targetAudience: [
      "Manufacturing companies",
      "Automotive industry",
      "Smart city projects",
      "Healthcare providers",
      "Energy companies"
    ],
    competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT", "Particle"],
    marketSize: "$18.7B (2025)",
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
    category: "Blockchain & Web3",
    pricing: {
      starter: 1499,
      professional: 2499,
      enterprise: 7999,
      currency: "$",
      billing: "monthly"
    },
    marketPrice: {
      low: 2499,
      high: 7999,
      average: 5249,
      currency: "$"
    },
    roi: {
      conservative: "220%",
      aggressive: "400%",
      average: "310%"
    },
    features: {
      starter: [
        "Basic smart contracts",
        "Single chain support",
        "Basic tools",
        "Email support",
        "Standard security"
      ],
      professional: [
        "All starter features",
        "Multi-chain support",
        "Advanced tools",
        "API management",
        "Priority support",
        "Advanced security"
      ],
      enterprise: [
        "All professional features",
        "Custom chains",
        "Advanced analytics",
        "White-label solution",
        "24/7 support",
        "Enterprise security"
      ]
    },
    targetAudience: [
      "Startups",
      "Enterprises",
      "Developers",
      "Financial institutions",
      "Gaming companies"
    ],
    competitors: ["Alchemy", "Infura", "QuickNode", "Moralis"],
    marketSize: "$12.8B (2025)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Marketing Automation
  {
    id: "ai-marketing-automation",
    title: "AI-Powered Marketing Automation",
    category: "Marketing & Sales",
    pricing: {
      starter: 499,
      professional: 899,
      enterprise: 2999,
      currency: "$",
      billing: "monthly"
    },
    marketPrice: {
      low: 899,
      high: 2999,
      average: 1949,
      currency: "$"
    },
    roi: {
      conservative: "150%",
      aggressive: "250%",
      average: "200%"
    },
    features: {
      starter: [
        "Basic automation",
        "Email marketing",
        "Simple campaigns",
        "Email support",
        "Standard security"
      ],
      professional: [
        "All starter features",
        "Advanced automation",
        "Multi-channel campaigns",
        "Analytics dashboard",
        "Priority support",
        "Advanced security"
      ],
      enterprise: [
        "All professional features",
        "Custom AI models",
        "Advanced analytics",
        "White-label solution",
        "24/7 support",
        "Enterprise security"
      ]
    },
    targetAudience: [
      "Marketing teams",
      "E-commerce businesses",
      "B2B companies",
      "Agencies",
      "Startups"
    ],
    competitors: ["HubSpot", "Marketo", "Pardot", "ActiveCampaign"],
    marketSize: "$35.8B (2025)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cloud-Native DevOps Platform
  {
    id: "cloud-native-devops-platform",
    title: "Cloud-Native DevOps Platform",
    category: "Cloud & DevOps",
    pricing: {
      starter: 999,
      professional: 1799,
      enterprise: 5999,
      currency: "$",
      billing: "monthly"
    },
    marketPrice: {
      low: 1799,
      high: 5999,
      average: 3899,
      currency: "$"
    },
    roi: {
      conservative: "200%",
      aggressive: "350%",
      average: "275%"
    },
    features: {
      starter: [
        "Basic CI/CD",
        "Container management",
        "Basic monitoring",
        "Email support",
        "Standard security"
      ],
      professional: [
        "All starter features",
        "Advanced CI/CD",
        "Multi-cloud support",
        "Advanced monitoring",
        "Priority support",
        "Advanced security"
      ],
      enterprise: [
        "All professional features",
        "Custom workflows",
        "Advanced analytics",
        "White-label solution",
        "24/7 support",
        "Enterprise security"
      ]
    },
    targetAudience: [
      "Development teams",
      "DevOps engineers",
      "System administrators",
      "Startups",
      "Enterprises"
    ],
    competitors: ["GitLab", "Jenkins", "CircleCI", "Spinnaker"],
    marketSize: "$28.9B (2025)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Customer Service Platform
  {
    id: "ai-customer-service-platform",
    title: "AI-Powered Customer Service Platform",
    category: "Customer Service",
    pricing: {
      starter: 699,
      professional: 1299,
      enterprise: 3999,
      currency: "$",
      billing: "monthly"
    },
    marketPrice: {
      low: 1299,
      high: 3999,
      average: 2649,
      currency: "$"
    },
    roi: {
      conservative: "180%",
      aggressive: "280%",
      average: "230%"
    },
    features: {
      starter: [
        "Basic chatbots",
        "Ticket management",
        "Simple analytics",
        "Email support",
        "Standard security"
      ],
      professional: [
        "All starter features",
        "Advanced chatbots",
        "Multi-channel support",
        "Advanced analytics",
        "Priority support",
        "Advanced security"
      ],
      enterprise: [
        "All professional features",
        "Custom AI models",
        "Advanced integrations",
        "White-label solution",
        "24/7 support",
        "Enterprise security"
      ]
    },
    targetAudience: [
      "Customer service teams",
      "E-commerce businesses",
      "SaaS companies",
      "Enterprises",
      "Support agencies"
    ],
    competitors: ["Zendesk", "Intercom", "Freshdesk", "Help Scout"],
    marketSize: "$22.4B (2025)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Data Privacy & Compliance Platform
  {
    id: "data-privacy-compliance-platform",
    title: "Data Privacy & Compliance Platform",
    category: "Compliance & Governance",
    pricing: {
      starter: 999,
      professional: 1899,
      enterprise: 5999,
      currency: "$",
      billing: "monthly"
    },
    marketPrice: {
      low: 1899,
      high: 5999,
      average: 3949,
      currency: "$"
    },
    roi: {
      conservative: "150%",
      aggressive: "250%",
      average: "200%"
    },
    features: {
      starter: [
        "Basic compliance tools",
        "Data mapping",
        "Simple reporting",
        "Email support",
        "Standard security"
      ],
      professional: [
        "All starter features",
        "Advanced compliance",
        "Automated workflows",
        "Advanced reporting",
        "Priority support",
        "Advanced security"
      ],
      enterprise: [
        "All professional features",
        "Custom compliance",
        "Advanced analytics",
        "White-label solution",
        "24/7 support",
        "Enterprise security"
      ]
    },
    targetAudience: [
      "Compliance officers",
      "Legal teams",
      "Data protection officers",
      "Enterprises",
      "Healthcare organizations"
    ],
    competitors: ["OneTrust", "TrustArc", "Privacera", "BigID"],
    marketSize: "$15.6B (2025)",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2025;