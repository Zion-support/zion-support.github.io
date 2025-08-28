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
  category: string;
  subcategory: string;
  description: string;
  pricingTiers: PricingTier[];
  marketPrice: string;
  roi: string;
  innovationLevel: string;
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
    category: "AI & Analytics",
    subcategory: "Business Intelligence",
    description: "Next-generation business intelligence platform that uses AI to automatically analyze data, generate insights, and create actionable reports for business decision-making.",
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
          "Data integration (up to 5 sources)",
          "Email support",
          "Standard reports"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        id: "professional",
        name: "Professional",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Starter features",
          "Advanced analytics",
          "Custom dashboard creation",
          "Multi-source data integration",
          "Priority support",
          "Advanced reporting",
          "API access"
        ],
        bestFor: "Growing businesses and teams",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 8999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Unlimited data sources",
          "Custom AI models",
          "White-label solutions",
          "Dedicated support",
          "Advanced security",
          "Custom integrations"
        ],
        bestFor: "Large enterprises and corporations"
      }
    ],
    marketPrice: "$2,999 - $8,999/month",
    roi: "250-400%",
    innovationLevel: "Advanced",
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Quantum Financial Modeling Platform
  {
    id: "ai-quantum-financial-modeling-platform",
    title: "AI Quantum Financial Modeling Platform",
    category: "Quantum Finance",
    subcategory: "Financial Modeling",
    description: "Revolutionary platform combining quantum computing and AI for ultra-accurate financial modeling, risk assessment, and investment optimization.",
    pricingTiers: [
      {
        id: "quantum-starter",
        name: "Quantum Starter",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic quantum risk modeling",
          "AI-driven market prediction",
          "Portfolio optimization",
          "Standard support",
          "Basic API access"
        ],
        bestFor: "Small investment firms and individual investors"
      },
      {
        id: "quantum-professional",
        name: "Quantum Professional",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Starter features",
          "Advanced quantum algorithms",
          "Real-time market analysis",
          "Advanced hedging strategies",
          "Priority support",
          "Full API access"
        ],
        bestFor: "Medium investment firms and hedge funds",
        popular: true
      },
      {
        id: "quantum-enterprise",
        name: "Quantum Enterprise",
        price: 15999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom quantum algorithms",
          "Multi-asset class support",
          "Regulatory compliance tools",
          "Dedicated support",
          "Custom integrations"
        ],
        bestFor: "Large investment banks and institutional investors"
      }
    ],
    marketPrice: "$4,999 - $15,999/month",
    roi: "600-1000%",
    innovationLevel: "Revolutionary",
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Autonomous Drone Fleet Management
  {
    id: "ai-autonomous-drone-fleet-management",
    title: "AI Autonomous Drone Fleet Management",
    category: "Autonomous Systems",
    subcategory: "Drone Management",
    description: "Intelligent platform for managing autonomous drone fleets for delivery, surveillance, agriculture, and industrial applications.",
    pricingTiers: [
      {
        id: "drone-basic",
        name: "Basic Fleet",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10 drones",
          "Basic flight planning",
          "Fleet monitoring",
          "Email support",
          "Standard safety protocols"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        id: "drone-professional",
        name: "Professional Fleet",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Up to 50 drones",
          "AI-powered obstacle avoidance",
          "Weather integration",
          "Priority support",
          "Advanced analytics"
        ],
        bestFor: "Medium businesses and delivery companies",
        popular: true
      },
      {
        id: "drone-enterprise",
        name: "Enterprise Fleet",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Unlimited drones",
          "Custom AI models",
          "Emergency protocols",
          "Dedicated support",
          "Custom integrations"
        ],
        bestFor: "Large logistics companies and government agencies"
      }
    ],
    marketPrice: "$1,999 - $5,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Predictive Healthcare Analytics
  {
    id: "ai-predictive-healthcare-analytics",
    title: "AI Predictive Healthcare Analytics",
    category: "AI & Healthcare",
    subcategory: "Predictive Analytics",
    description: "Advanced healthcare analytics platform that predicts patient outcomes, disease progression, and treatment effectiveness using AI and machine learning.",
    pricingTiers: [
      {
        id: "healthcare-basic",
        name: "Basic Analytics",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic patient outcome prediction",
          "Risk assessment",
          "Standard reports",
          "Email support",
          "Basic EHR integration"
        ],
        bestFor: "Small clinics and medical practices"
      },
      {
        id: "healthcare-professional",
        name: "Professional Analytics",
        price: 3499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Advanced disease modeling",
          "Treatment optimization",
          "Priority support",
          "Full EHR integration",
          "Custom dashboards"
        ],
        bestFor: "Medium hospitals and healthcare systems",
        popular: true
      },
      {
        id: "healthcare-enterprise",
        name: "Enterprise Analytics",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom AI models",
          "Population health insights",
          "Dedicated support",
          "Advanced security",
          "Custom integrations"
        ],
        bestFor: "Large healthcare systems and research institutions"
      }
    ],
    marketPrice: "$3,499 - $9,999/month",
    roi: "400-700%",
    innovationLevel: "Advanced",
    estimatedDelivery: "10-14 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Neuromorphic Computing Platform
  {
    id: "ai-neuromorphic-computing-platform",
    title: "AI Neuromorphic Computing Platform",
    category: "Neuromorphic Computing",
    subcategory: "Brain-Inspired AI",
    description: "Revolutionary neuromorphic computing platform that mimics the human brain's neural structure for ultra-efficient AI processing and edge computing applications.",
    pricingTiers: [
      {
        id: "neuro-basic",
        name: "Basic Neuro",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic neuromorphic processing",
          "Edge computing optimization",
          "Standard AI models",
          "Email support",
          "Basic API access"
        ],
        bestFor: "Research institutions and startups"
      },
      {
        id: "neuro-professional",
        name: "Professional Neuro",
        price: 7999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Advanced neural networks",
          "Real-time learning",
          "Priority support",
          "Full API access",
          "Custom models"
        ],
        bestFor: "Technology companies and research labs",
        popular: true
      },
      {
        id: "neuro-enterprise",
        name: "Enterprise Neuro",
        price: 25000,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom neuromorphic chips",
          "Advanced algorithms",
          "Dedicated support",
          "Hardware integration",
          "Custom solutions"
        ],
        bestFor: "Large tech companies and government agencies"
      }
    ],
    marketPrice: "$7,999 - $25,000/month",
    roi: "800-1500%",
    innovationLevel: "Revolutionary",
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Synthetic Biology Platform
  {
    id: "ai-synthetic-biology-platform",
    title: "AI Synthetic Biology Platform",
    category: "Synthetic Biology",
    subcategory: "AI-Driven Design",
    description: "Advanced platform combining AI and synthetic biology to design, simulate, and optimize biological systems for healthcare, agriculture, and industrial applications.",
    pricingTiers: [
      {
        id: "bio-basic",
        name: "Basic Bio",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic DNA design tools",
          "Simple simulations",
          "Standard templates",
          "Email support",
          "Basic lab integration"
        ],
        bestFor: "Small biotech startups and research labs"
      },
      {
        id: "bio-professional",
        name: "Professional Bio",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Advanced AI design",
          "Complex simulations",
          "Priority support",
          "Full lab integration",
          "Custom workflows"
        ],
        bestFor: "Medium biotech companies and research institutions",
        popular: true
      },
      {
        id: "bio-enterprise",
        name: "Enterprise Bio",
        price: 18000,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom AI models",
          "Advanced CRISPR tools",
          "Dedicated support",
          "Custom integrations",
          "Expert consultation"
        ],
        bestFor: "Large pharmaceutical companies and research institutions"
      }
    ],
    marketPrice: "$5,999 - $18,000/month",
    roi: "500-1000%",
    innovationLevel: "Revolutionary",
    estimatedDelivery: "14-18 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI Quantum Internet Platform
  {
    id: "ai-quantum-internet-platform",
    title: "AI Quantum Internet Platform",
    category: "Quantum Internet",
    subcategory: "Quantum Networking",
    description: "Next-generation quantum internet platform that enables ultra-secure communication, quantum networking, and distributed quantum computing across global networks.",
    pricingTiers: [
      {
        id: "quantum-net-basic",
        name: "Basic Quantum Net",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic quantum encryption",
          "Limited network access",
          "Standard security",
          "Email support",
          "Basic API access"
        ],
        bestFor: "Small companies and research institutions"
      },
      {
        id: "quantum-net-professional",
        name: "Professional Quantum Net",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Basic features",
          "Advanced quantum protocols",
          "Global network access",
          "Priority support",
          "Full API access",
          "Custom security"
        ],
        bestFor: "Medium companies and government agencies",
        popular: true
      },
      {
        id: "quantum-net-enterprise",
        name: "Enterprise Quantum Net",
        price: 35000,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "All Professional features",
          "Custom quantum protocols",
          "Global infrastructure",
          "Dedicated support",
          "Custom solutions",
          "Expert consultation"
        ],
        bestFor: "Large corporations and government agencies"
      }
    ],
    marketPrice: "$9,999 - $35,000/month",
    roi: "1000-2000%",
    innovationLevel: "Revolutionary",
    estimatedDelivery: "20-24 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2025;