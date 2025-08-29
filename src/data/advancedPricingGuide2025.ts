export interface AdvancedPricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  description: string;
  features: string[];
  aiCapabilities: string[];
  automationFeatures: string[];
  supportLevel: string;
  estimatedDelivery: string;
  roi: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  recommendedFor: string[];
  limitations: string[];
}

export const ADVANCED_PRICING_GUIDE_2025: AdvancedPricingTier[] = [
  {
    id: "starter-tier",
    name: "Starter Tier",
    price: 1999,
    currency: "$",
    billingCycle: "monthly",
    description: "Perfect for small businesses and startups looking to implement AI solutions",
    features: [
      "Basic AI integration",
      "Standard features",
      "Email support",
      "Basic analytics",
      "Mobile app access",
      "API access (limited)",
      "Standard security",
      "Basic customization"
    ],
    aiCapabilities: [
      "Basic machine learning",
      "Simple automation",
      "Data analysis",
      "Predictive insights"
    ],
    automationFeatures: [
      "Basic workflow automation",
      "Scheduled tasks",
      "Email automation",
      "Report generation"
    ],
    supportLevel: "Email support",
    estimatedDelivery: "4-6 weeks",
    roi: "150-250%",
    marketPrice: "$1,999 - $4,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    recommendedFor: [
      "Small businesses",
      "Startups",
      "Individual entrepreneurs",
      "Small teams"
    ],
    limitations: [
      "Limited AI capabilities",
      "Basic support",
      "Standard features only",
      "Limited customization"
    ]
  },
  {
    id: "professional-tier",
    name: "Professional Tier",
    price: 3999,
    currency: "$",
    billingCycle: "monthly",
    description: "Advanced AI solutions for growing businesses with comprehensive features",
    features: [
      "Advanced AI integration",
      "Premium features",
      "Priority support",
      "Advanced analytics",
      "Mobile app access",
      "Full API access",
      "Enhanced security",
      "Advanced customization",
      "White-label options",
      "Multi-user support"
    ],
    aiCapabilities: [
      "Advanced machine learning",
      "Deep learning algorithms",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
      "Anomaly detection"
    ],
    automationFeatures: [
      "Advanced workflow automation",
      "Intelligent task scheduling",
      "Multi-channel automation",
      "Advanced reporting",
      "Custom automation rules",
      "Integration automation"
    ],
    supportLevel: "Priority support with dedicated account manager",
    estimatedDelivery: "6-10 weeks",
    roi: "250-400%",
    marketPrice: "$3,999 - $9,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    recommendedFor: [
      "Growing businesses",
      "Medium enterprises",
      "Professional services",
      "Technology companies"
    ],
    limitations: [
      "No quantum computing features",
      "Limited space technology",
      "Standard metaverse features",
      "Basic autonomous systems"
    ]
  },
  {
    id: "enterprise-tier",
    name: "Enterprise Tier",
    price: 6999,
    currency: "$",
    billingCycle: "monthly",
    description: "Full-featured AI solutions for large enterprises with cutting-edge technology",
    features: [
      "Full AI integration",
      "All premium features",
      "24/7 dedicated support",
      "Enterprise analytics",
      "Mobile app access",
      "Unlimited API access",
      "Enterprise security",
      "Full customization",
      "White-label solutions",
      "Unlimited users",
      "Custom integrations",
      "Advanced reporting"
    ],
    aiCapabilities: [
      "Quantum AI computing",
      "Advanced deep learning",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
      "Anomaly detection",
      "Quantum machine learning",
      "AI ethics and governance"
    ],
    automationFeatures: [
      "Enterprise workflow automation",
      "AI-powered decision making",
      "Multi-system integration",
      "Advanced automation rules",
      "Custom automation workflows",
      "Real-time automation",
      "Predictive automation"
    ],
    supportLevel: "24/7 dedicated support with dedicated success manager",
    estimatedDelivery: "8-12 weeks",
    roi: "400-600%",
    marketPrice: "$6,999 - $19,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    recommendedFor: [
      "Large enterprises",
      "Fortune 500 companies",
      "Government agencies",
      "Research institutions"
    ],
    limitations: [
      "Requires enterprise infrastructure",
      "Complex implementation",
      "Higher resource requirements",
      "Advanced training needed"
    ]
  },
  {
    id: "revolutionary-tier",
    name: "Revolutionary Tier",
    price: 12999,
    currency: "$",
    billingCycle: "monthly",
    description: "Cutting-edge AI solutions with quantum computing, space technology, and autonomous systems",
    features: [
      "Quantum AI integration",
      "Space technology features",
      "Autonomous systems",
      "Metaverse capabilities",
      "All enterprise features",
      "Custom AI development",
      "Quantum encryption",
      "Space-grade security",
      "Autonomous operations",
      "Virtual reality integration",
      "Quantum optimization",
      "Space debris tracking"
    ],
    aiCapabilities: [
      "Quantum computing",
      "Quantum machine learning",
      "Space AI algorithms",
      "Autonomous AI systems",
      "Metaverse AI",
      "Quantum cryptography",
      "Space navigation AI",
      "Autonomous decision making"
    ],
    automationFeatures: [
      "Quantum automation",
      "Space operations automation",
      "Autonomous system automation",
      "Metaverse automation",
      "Quantum workflow optimization",
      "Space mission automation",
      "Autonomous fleet management"
    ],
    supportLevel: "24/7 dedicated support with quantum AI specialists",
    estimatedDelivery: "12-16 weeks",
    roi: "600-1000%",
    marketPrice: "$12,999 - $49,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    recommendedFor: [
      "Space agencies",
      "Defense contractors",
      "Quantum computing companies",
      "Autonomous vehicle companies",
      "Metaverse platforms"
    ],
    limitations: [
      "Requires specialized infrastructure",
      "Complex quantum setup",
      "Space-grade facilities needed",
      "Advanced security clearance"
    ]
  }
];

export const ADVANCED_SERVICE_CATEGORIES = [
  {
    name: "AI & FinTech",
    services: [
      "AI FinTech Trading Platform",
      "AI Credit Risk Assessment",
      "AI Fraud Detection",
      "AI Financial Advisory"
    ],
    avgPrice: "$4,999/month",
    marketSize: "$45.2 billion by 2025"
  },
  {
    name: "AI & Healthcare",
    services: [
      "AI Healthcare Analytics Platform",
      "AI Medical Imaging Analysis",
      "AI Drug Discovery",
      "AI Patient Monitoring"
    ],
    avgPrice: "$3,999/month",
    marketSize: "$67.8 billion by 2025"
  },
  {
    name: "AI & Legal Tech",
    services: [
      "AI Legal Technology Platform",
      "AI Contract Analysis",
      "AI Legal Research",
      "AI Compliance Monitoring"
    ],
    avgPrice: "$2,999/month",
    marketSize: "$25.6 billion by 2025"
  },
  {
    name: "AI & Real Estate",
    services: [
      "AI Real Estate Investment Platform",
      "AI Property Valuation",
      "AI Market Analysis",
      "AI Investment Optimization"
    ],
    avgPrice: "$2,499/month",
    marketSize: "$18.7 billion by 2025"
  },
  {
    name: "AI & Supply Chain",
    services: [
      "AI Supply Chain Optimization Platform",
      "AI Demand Forecasting",
      "AI Inventory Management",
      "AI Route Optimization"
    ],
    avgPrice: "$3,499/month",
    marketSize: "$31.2 billion by 2025"
  },
  {
    name: "AI & Education",
    services: [
      "AI-Powered Education Platform",
      "AI Adaptive Learning",
      "AI Student Analytics",
      "AI Content Generation"
    ],
    avgPrice: "$1,999/month",
    marketSize: "$22.4 billion by 2025"
  },
  {
    name: "AI & Entertainment",
    services: [
      "AI-Powered Entertainment Platform",
      "AI Content Creation",
      "AI Personalization",
      "AI Audience Analytics"
    ],
    avgPrice: "$2,799/month",
    marketSize: "$28.9 billion by 2025"
  },
  {
    name: "AI & Space Technology",
    services: [
      "AI Space Technology Platform",
      "AI Satellite Management",
      "AI Space Debris Tracking",
      "AI Mission Planning"
    ],
    avgPrice: "$5,999/month",
    marketSize: "$15.3 billion by 2025"
  },
  {
    name: "AI & Metaverse",
    services: [
      "AI Metaverse Builder Platform",
      "AI 3D Content Generation",
      "AI Virtual World Creation",
      "AI Avatar Intelligence"
    ],
    avgPrice: "$3,999/month",
    marketSize: "$42.3 billion by 2025"
  },
  {
    name: "AI & Autonomous Systems",
    services: [
      "AI Autonomous Systems Platform",
      "AI Self-Driving Technology",
      "AI Drone Operations",
      "AI Industrial Automation"
    ],
    avgPrice: "$4,999/month",
    marketSize: "$38.7 billion by 2025"
  }
];

export const ADVANCED_PRICING_FEATURES = {
  commonFeatures: [
    "AI-powered automation",
    "Real-time analytics",
    "Mobile app access",
    "API integration",
    "Cloud hosting",
    "Data backup",
    "Security compliance",
    "Regular updates"
  ],
  advancedFeatures: [
    "Quantum computing integration",
    "Space technology features",
    "Autonomous system capabilities",
    "Metaverse integration",
    "Advanced AI algorithms",
    "Custom AI development",
    "White-label solutions",
    "Enterprise security"
  ],
  supportLevels: [
    {
      level: "Basic",
      features: ["Email support", "Documentation", "Community forum"],
      responseTime: "24-48 hours"
    },
    {
      level: "Professional",
      features: ["Priority support", "Dedicated account manager", "Phone support"],
      responseTime: "4-8 hours"
    },
    {
      level: "Enterprise",
      features: ["24/7 support", "Dedicated success manager", "Custom training"],
      responseTime: "1-2 hours"
    },
    {
      level: "Revolutionary",
      features: ["24/7 quantum AI specialists", "Custom development", "On-site support"],
      responseTime: "Immediate"
    }
  ]
};