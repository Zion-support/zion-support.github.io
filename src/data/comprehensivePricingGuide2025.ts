export interface PricingTier {
  id: string;
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
  marketPrice: string;
  roi: string;
  estimatedDelivery: string;
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
    description: "Next-generation business intelligence platform that uses AI to automatically analyze data, generate insights, and create actionable reports.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI-powered data analysis",
          "Basic dashboard creation",
          "Data integration (5 sources)",
          "Email support",
          "Mobile app access"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        id: "professional",
        name: "Professional",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Starter features",
          "Advanced analytics",
          "Custom dashboards",
          "API access",
          "Priority support",
          "Data integration (15 sources)"
        ],
        bestFor: "Growing businesses and teams",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Unlimited data sources",
          "Custom development",
          "Dedicated support",
          "Advanced security",
          "White-label options"
        ],
        bestFor: "Large enterprises and corporations"
      }
    ],
    marketPrice: "$2,999 - $8,999/month",
    roi: "250-400%",
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
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
    description: "Revolutionary platform combining quantum computing algorithms with AI to solve complex optimization problems.",
    category: "Quantum Computing",
    pricingTiers: [
      {
        id: "basic",
        name: "Basic",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Quantum algorithm access",
          "Basic optimization tools",
          "API access",
          "Email support",
          "Documentation"
        ],
        bestFor: "Research institutions and startups"
      },
      {
        id: "advanced",
        name: "Advanced",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Advanced quantum algorithms",
          "Custom optimization",
          "Priority support",
          "Performance analytics",
          "Training sessions"
        ],
        bestFor: "Financial institutions and manufacturing firms",
        popular: true
      },
      {
        id: "premium",
        name: "Premium",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Advanced features",
          "Custom algorithm development",
          "Dedicated support team",
          "On-site training",
          "White-label solutions",
          "SLA guarantees"
        ],
        bestFor: "Large enterprises and government agencies"
      }
    ],
    marketPrice: "$4,999 - $15,000/month",
    roi: "300-500%",
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
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
    description: "Advanced cybersecurity platform using machine learning and AI to detect, prevent, and respond to cyber threats.",
    category: "Cybersecurity",
    pricingTiers: [
      {
        id: "essential",
        name: "Essential",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI threat detection",
          "Basic monitoring",
          "Email support",
          "Standard security",
          "Mobile app"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        id: "professional",
        name: "Professional",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Essential features",
          "Advanced threat detection",
          "24/7 monitoring",
          "Priority support",
          "Compliance reporting",
          "API access"
        ],
        bestFor: "Medium businesses and enterprises",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom security rules",
          "Dedicated support",
          "Advanced compliance",
          "White-label options",
          "SLA guarantees"
        ],
        bestFor: "Large enterprises and government agencies"
      }
    ],
    marketPrice: "$1,999 - $5,999/month",
    roi: "200-350%",
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Content Generation Platform
  {
    id: "ai-content-generation-platform",
    title: "AI Content Generation Platform",
    description: "Revolutionary AI platform that generates high-quality, SEO-optimized content for blogs, marketing materials, and business communications.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "AI content creation",
          "Basic SEO optimization",
          "5 content templates",
          "Email support",
          "Mobile app access"
        ],
        bestFor: "Bloggers and small businesses"
      },
      {
        id: "professional",
        name: "Professional",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Starter features",
          "Advanced SEO tools",
          "Unlimited templates",
          "API access",
          "Priority support",
          "Performance analytics"
        ],
        bestFor: "Marketing agencies and growing businesses",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom brand voice",
          "Multi-language support",
          "Dedicated support",
          "White-label options",
          "Custom integrations"
        ],
        bestFor: "Large companies and agencies"
      }
    ],
    marketPrice: "$899 - $2,999/month",
    roi: "300-500%",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Video Analytics Platform
  {
    id: "ai-video-analytics-platform",
    title: "AI Video Analytics Platform",
    description: "Advanced video analytics platform using computer vision and AI to extract insights, detect objects, and analyze video content in real-time.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        id: "basic",
        name: "Basic",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic video analysis",
          "Object detection",
          "5 camera feeds",
          "Email support",
          "Basic dashboard"
        ],
        bestFor: "Small security companies"
      },
      {
        id: "professional",
        name: "Professional",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Advanced analytics",
          "25 camera feeds",
          "Priority support",
          "API access",
          "Custom alerts"
        ],
        bestFor: "Medium businesses and retail chains",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Unlimited cameras",
          "Custom development",
          "Dedicated support",
          "White-label options",
          "Advanced security"
        ],
        bestFor: "Large enterprises and government agencies"
      }
    ],
    marketPrice: "$2,499 - $7,999/month",
    roi: "200-350%",
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain Supply Chain Platform
  {
    id: "blockchain-supply-chain-platform",
    title: "Blockchain Supply Chain Platform",
    description: "Transparent and secure supply chain management platform using blockchain technology for end-to-end traceability and verification.",
    category: "Blockchain & Web3",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic blockchain tracking",
          "5 supply chain nodes",
          "Standard reporting",
          "Email support",
          "Mobile app access"
        ],
        bestFor: "Small manufacturers and retailers"
      },
      {
        id: "professional",
        name: "Professional",
        price: 1799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Starter features",
          "Advanced tracking",
          "25 supply chain nodes",
          "API access",
          "Priority support",
          "Custom reporting"
        ],
        bestFor: "Medium businesses and logistics providers",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Unlimited nodes",
          "Custom development",
          "Dedicated support",
          "White-label options",
          "Advanced analytics"
        ],
        bestFor: "Large enterprises and global supply chains"
      }
    ],
    marketPrice: "$1,799 - $5,999/month",
    roi: "180-300%",
    estimatedDelivery: "10-16 weeks",
    supportLevel: "enterprise",
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
    description: "Intelligent trading platform that uses AI and machine learning to analyze market data, predict trends, and execute automated trades.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        id: "basic",
        name: "Basic",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic AI analysis",
          "Market data access",
          "Simple trading tools",
          "Email support",
          "Mobile app"
        ],
        bestFor: "Individual traders and small investors"
      },
      {
        id: "professional",
        name: "Professional",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Advanced AI algorithms",
          "Automated trading",
          "API access",
          "Priority support",
          "Portfolio analytics"
        ],
        bestFor: "Active traders and investment firms",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom algorithms",
          "Institutional features",
          "Dedicated support",
          "White-label options",
          "Advanced risk management"
        ],
        bestFor: "Hedge funds and institutional investors"
      }
    ],
    marketPrice: "$3,999 - $12,999/month",
    roi: "250-400%",
    estimatedDelivery: "12-16 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Healthcare Diagnostics Platform
  {
    id: "ai-healthcare-diagnostics-platform",
    title: "AI Healthcare Diagnostics Platform",
    description: "Advanced medical diagnostics platform using AI and machine learning to analyze medical images, predict diseases, and assist healthcare professionals.",
    category: "AI & Analytics",
    pricingTiers: [
      {
        id: "basic",
        name: "Basic",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic image analysis",
          "5 user licenses",
          "Standard reporting",
          "Email support",
          "HIPAA compliance"
        ],
        bestFor: "Small clinics and practices"
      },
      {
        id: "professional",
        name: "Professional",
        price: 3499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Advanced diagnostics",
          "25 user licenses",
          "API access",
          "Priority support",
          "Custom workflows"
        ],
        bestFor: "Medium hospitals and medical centers",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 7999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Unlimited users",
          "Custom development",
          "Dedicated support",
          "White-label options",
          "Advanced analytics"
        ],
        bestFor: "Large hospital networks and research institutions"
      }
    ],
    marketPrice: "$3,499 - $9,999/month",
    roi: "200-350%",
    estimatedDelivery: "16-24 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum Machine Learning Platform
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Revolutionary platform combining quantum computing with machine learning to solve complex problems in drug discovery, materials science, and optimization.",
    category: "Quantum Computing",
    pricingTiers: [
      {
        id: "research",
        name: "Research",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic quantum algorithms",
          "Research tools",
          "Email support",
          "Documentation",
          "Community access"
        ],
        bestFor: "Research institutions and universities"
      },
      {
        id: "professional",
        name: "Professional",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Research features",
          "Advanced algorithms",
          "Custom development",
          "Priority support",
          "Training sessions",
          "Performance analytics"
        ],
        bestFor: "Pharmaceutical companies and research labs",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 19999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom algorithms",
          "Dedicated support team",
          "On-site training",
          "White-label solutions",
          "SLA guarantees"
        ],
        bestFor: "Large corporations and government agencies"
      }
    ],
    marketPrice: "$5,999 - $25,000/month",
    roi: "400-800%",
    estimatedDelivery: "20-32 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Marketing Automation Platform
  {
    id: "ai-marketing-automation-platform",
    title: "AI Marketing Automation Platform",
    description: "Intelligent marketing platform that uses AI to automate campaigns, personalize content, optimize conversions, and drive revenue growth.",
    category: "Marketing & Sales",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic automation",
          "5 campaigns",
          "Email support",
          "Standard templates",
          "Mobile app access"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        id: "professional",
        name: "Professional",
        price: 1599,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Starter features",
          "Advanced AI features",
          "Unlimited campaigns",
          "API access",
          "Priority support",
          "Advanced analytics"
        ],
        bestFor: "Growing businesses and marketing teams",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom development",
          "Dedicated support",
          "White-label options",
          "Advanced integrations",
          "SLA guarantees"
        ],
        bestFor: "Large enterprises and agencies"
      }
    ],
    marketPrice: "$1,599 - $4,999/month",
    roi: "250-400%",
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2025;