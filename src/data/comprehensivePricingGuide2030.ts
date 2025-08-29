// Comprehensive Pricing Guide 2030 - Zion Tech Group
// Complete pricing information for all innovative services

export interface PricingTier {
  name: string;
  price: number;
  billing: string;
  features: string[];
  recommended: boolean;
  popular?: boolean;
}

export interface ServicePricing {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: PricingTier[];
  marketComparison: string;
  roi: string;
  setupTime: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

// Zion Tech Group Contact Information
const zionContact = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

export const comprehensivePricingGuide2030: ServicePricing[] = [
  // Micro SaaS Services
  {
    id: "supply-chain-risk-intelligence",
    name: "AI-Powered Supply Chain Risk Intelligence Platform",
    category: "Micro SaaS",
    description: "Real-time supply chain risk monitoring and predictive analytics platform that identifies potential disruptions before they occur.",
    pricing: [
      {
        name: "Starter",
        price: 599,
        billing: "month",
        features: [
          "Up to 100 suppliers",
          "Basic risk monitoring",
          "Monthly reports",
          "Email alerts",
          "Standard support"
        ],
        recommended: false
      },
      {
        name: "Professional",
        price: 899,
        billing: "month",
        features: [
          "Up to 500 suppliers",
          "Advanced risk monitoring",
          "Real-time alerts",
          "Predictive analytics",
          "API access",
          "Priority support"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Enterprise",
        price: 1499,
        billing: "month",
        features: [
          "Unlimited suppliers",
          "Full risk intelligence",
          "Custom integrations",
          "Dedicated account manager",
          "24/7 support",
          "Custom reporting"
        ],
        recommended: false
      }
    ],
    marketComparison: "$750 - $1,200/month per organization",
    roi: "300% within 8 months",
    setupTime: "2-3 weeks",
    contactInfo: zionContact
  },
  {
    id: "quantum-financial-trading",
    name: "Quantum-Enhanced Financial Trading Analytics Platform",
    category: "Micro SaaS",
    description: "Next-generation financial trading platform leveraging quantum computing principles for ultra-fast market analysis.",
    pricing: [
      {
        name: "Professional",
        price: 1499,
        billing: "month",
        features: [
          "Up to 10 active traders",
          "Quantum-inspired algorithms",
          "Real-time market analysis",
          "Basic risk assessment",
          "Standard support"
        ],
        recommended: false
      },
      {
        name: "Premium",
        price: 2499,
        billing: "month",
        features: [
          "Up to 50 active traders",
          "Advanced quantum algorithms",
          "Portfolio optimization",
          "Automated trading signals",
          "Priority support",
          "Custom indicators"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Institutional",
        price: 4999,
        billing: "month",
        features: [
          "Up to 100 active traders",
          "Full quantum platform",
          "Custom algorithm development",
          "Dedicated support team",
          "White-label options",
          "Advanced analytics"
        ],
        recommended: false
      }
    ],
    marketComparison: "$1,200 - $2,000/month per trader",
    roi: "500% within 12 months",
    setupTime: "3-4 weeks",
    contactInfo: zionContact
  },
  {
    id: "ai-healthcare-analytics",
    name: "AI-Powered Healthcare Predictive Analytics Platform",
    category: "Healthcare Technology",
    description: "Advanced healthcare analytics platform that predicts patient outcomes and optimizes treatment plans.",
    pricing: [
      {
        name: "Basic",
        price: 399,
        billing: "month",
        features: [
          "Up to 50 healthcare professionals",
          "Basic patient analytics",
          "Standard reporting",
          "Email support"
        ],
        recommended: false
      },
      {
        name: "Professional",
        price: 599,
        billing: "month",
        features: [
          "Up to 200 healthcare professionals",
          "Advanced predictive analytics",
          "Treatment optimization",
          "Clinical decision support",
          "Priority support",
          "API integrations"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Enterprise",
        price: 999,
        billing: "month",
        features: [
          "Unlimited users",
          "Full AI platform",
          "Custom integrations",
          "Dedicated support",
          "Compliance reporting",
          "Research collaboration"
        ],
        recommended: false
      }
    ],
    marketComparison: "$500 - $800/month per provider",
    roi: "350% within 10 months",
    setupTime: "4-6 weeks",
    contactInfo: zionContact
  },
  {
    id: "autonomous-cybersecurity",
    name: "Autonomous Cybersecurity Threat Intelligence Platform",
    category: "Cybersecurity",
    description: "Self-learning cybersecurity platform that autonomously detects, analyzes, and responds to cyber threats.",
    pricing: [
      {
        name: "Professional",
        price: 999,
        billing: "month",
        features: [
          "Up to 100 endpoints",
          "Basic threat detection",
          "Automated response",
          "Standard reporting",
          "Email support"
        ],
        recommended: false
      },
      {
        name: "Enterprise",
        price: 1299,
        billing: "month",
        features: [
          "Up to 1000 endpoints",
          "Advanced threat intelligence",
          "Full automation",
          "Behavioral analysis",
          "Priority support",
          "Custom integrations"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Government",
        price: 2499,
        billing: "month",
        features: [
          "Unlimited endpoints",
          "Full platform access",
          "Custom deployments",
          "Dedicated SOC team",
          "Compliance packages",
          "White-label options"
        ],
        recommended: false
      }
    ],
    marketComparison: "$1,000 - $1,500/month per organization",
    roi: "400% within 6 months",
    setupTime: "2-3 weeks",
    contactInfo: zionContact
  },
  {
    id: "sustainable-energy-management",
    name: "Sustainable Energy Management & Optimization Platform",
    category: "Green Technology",
    description: "Comprehensive energy management platform that optimizes energy consumption and integrates renewable sources.",
    pricing: [
      {
        name: "Basic",
        price: 299,
        billing: "month",
        features: [
          "Up to 10 facilities",
          "Basic energy monitoring",
          "Monthly reports",
          "Email support"
        ],
        recommended: false
      },
      {
        name: "Professional",
        price: 399,
        billing: "month",
        features: [
          "Up to 50 facilities",
          "Advanced monitoring",
          "Predictive maintenance",
          "Renewable integration",
          "Priority support",
          "Mobile app access"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Enterprise",
        price: 699,
        billing: "month",
        features: [
          "Unlimited facilities",
          "Full platform access",
          "Custom integrations",
          "Dedicated support",
          "Advanced analytics",
          "White-label options"
        ],
        recommended: false
      }
    ],
    marketComparison: "$300 - $500/month per facility",
    roi: "250% within 12 months",
    setupTime: "3-4 weeks",
    contactInfo: zionContact
  },
  // IT Services
  {
    id: "quantum-cloud-infrastructure",
    name: "Quantum-Enhanced Cloud Infrastructure & DevOps Platform",
    category: "IT Services",
    description: "Next-generation cloud infrastructure platform leveraging quantum computing principles for ultra-fast deployment.",
    pricing: [
      {
        name: "Professional",
        price: 1999,
        billing: "month",
        features: [
          "Up to 100 servers",
          "Basic quantum optimization",
          "Standard DevOps tools",
          "Email support"
        ],
        recommended: false
      },
      {
        name: "Enterprise",
        price: 2500,
        billing: "month",
        features: [
          "Up to 500 servers",
          "Advanced quantum algorithms",
          "Full DevOps automation",
          "Multi-cloud orchestration",
          "Priority support",
          "Custom integrations"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Government",
        price: 4999,
        billing: "month",
        features: [
          "Unlimited infrastructure",
          "Full quantum platform",
          "Custom deployments",
          "Dedicated team",
          "Compliance packages",
          "White-label options"
        ],
        recommended: false
      }
    ],
    marketComparison: "$2,000 - $3,500/month per organization",
    roi: "400% within 12 months",
    setupTime: "6-8 weeks",
    contactInfo: zionContact
  },
  {
    id: "ai-digital-twin",
    name: "AI-Powered Digital Twin & IoT Integration Platform",
    category: "IT Services",
    description: "Comprehensive digital twin platform creating real-time virtual replicas of physical assets.",
    pricing: [
      {
        name: "Basic",
        price: 599,
        billing: "month",
        features: [
          "Up to 25 assets",
          "Basic monitoring",
          "Standard dashboard",
          "Email support"
        ],
        recommended: false
      },
      {
        name: "Professional",
        price: 899,
        billing: "month",
        features: [
          "Up to 100 assets",
          "Advanced analytics",
          "3D visualization",
          "Predictive maintenance",
          "Priority support",
          "API access"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Enterprise",
        price: 1499,
        billing: "month",
        features: [
          "Unlimited assets",
          "Full platform access",
          "Custom integrations",
          "Dedicated support",
          "Advanced AI features",
          "White-label options"
        ],
        recommended: false
      }
    ],
    marketComparison: "$700 - $1,200/month per facility",
    roi: "300% within 10 months",
    setupTime: "8-12 weeks",
    contactInfo: zionContact
  },
  // AI Solutions
  {
    id: "autonomous-ai-bi",
    name: "Autonomous AI Business Intelligence & Decision Engine",
    category: "AI Solutions",
    description: "Self-learning AI platform that autonomously analyzes business data and makes strategic decisions.",
    pricing: [
      {
        name: "Professional",
        price: 2499,
        billing: "month",
        features: [
          "Up to 50 users",
          "Basic AI analytics",
          "Standard reporting",
          "Email support"
        ],
        recommended: false
      },
      {
        name: "Enterprise",
        price: 3200,
        billing: "month",
        features: [
          "Up to 200 users",
          "Advanced AI platform",
          "Autonomous decision making",
          "Predictive modeling",
          "Priority support",
          "Custom integrations"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Government",
        price: 5999,
        billing: "month",
        features: [
          "Unlimited users",
          "Full AI platform",
          "Custom deployments",
          "Dedicated team",
          "Compliance packages",
          "White-label options"
        ],
        recommended: false
      }
    ],
    marketComparison: "$2,500 - $4,000/month per organization",
    roi: "450% within 10 months",
    setupTime: "8-12 weeks",
    contactInfo: zionContact
  },
  {
    id: "quantum-ml-platform",
    name: "Quantum-Enhanced Machine Learning & Neural Network Platform",
    category: "AI Solutions",
    description: "Breakthrough machine learning platform leveraging quantum computing principles for unprecedented AI capabilities.",
    pricing: [
      {
        name: "Research",
        price: 3499,
        billing: "month",
        features: [
          "Up to 10 researchers",
          "Basic quantum ML",
          "Standard models",
          "Email support"
        ],
        recommended: false
      },
      {
        name: "Premium",
        price: 4500,
        billing: "month",
        features: [
          "Up to 50 researchers",
          "Advanced quantum platform",
          "Full ML capabilities",
          "Custom model development",
          "Priority support",
          "API access"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Institutional",
        price: 8999,
        billing: "month",
        features: [
          "Unlimited researchers",
          "Full quantum platform",
          "Custom deployments",
          "Dedicated team",
          "Advanced research tools",
          "White-label options"
        ],
        recommended: false
      }
    ],
    marketComparison: "$3,500 - $6,000/month per organization",
    roi: "600% within 15 months",
    setupTime: "12-16 weeks",
    contactInfo: zionContact
  },
  {
    id: "ai-customer-experience",
    name: "AI-Powered Autonomous Customer Experience Platform",
    category: "AI Solutions",
    description: "Intelligent customer experience platform that autonomously manages customer interactions and predicts needs.",
    pricing: [
      {
        name: "Basic",
        price: 599,
        billing: "month",
        features: [
          "Up to 10,000 interactions/month",
          "Basic chatbot",
          "Standard analytics",
          "Email support"
        ],
        recommended: false
      },
      {
        name: "Professional",
        price: 899,
        billing: "month",
        features: [
          "Up to 100,000 interactions/month",
          "Advanced AI platform",
          "Full automation",
          "Predictive analytics",
          "Priority support",
          "Custom integrations"
        ],
        recommended: true,
        popular: true
      },
      {
        name: "Enterprise",
        price: 1499,
        billing: "month",
        features: [
          "Unlimited interactions",
          "Full platform access",
          "Custom deployments",
          "Dedicated support",
          "Advanced features",
          "White-label options"
        ],
        recommended: false
      }
    ],
    marketComparison: "$700 - $1,200/month per organization",
    roi: "320% within 8 months",
    setupTime: "6-8 weeks",
    contactInfo: zionContact
  }
];

export default comprehensivePricingGuide2030;