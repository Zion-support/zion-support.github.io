export interface PricingTier {
  name: string;
  price: number;
  billingCycle: string;
  features: string[];
  limitations: string[];
  bestFor: string[];
  roi: string;
  setupTime: string;
  support: string;
}

export interface ServicePricing {
  serviceId: string;
  serviceName: string;
  category: string;
  basePrice: number;
  pricingModel: string;
  tiers: PricingTier[];
  marketComparison: {
    competitors: string[];
    averageMarketPrice: string;
    ourAdvantage: string;
  };
  roiAnalysis: {
    shortTerm: string;
    longTerm: string;
    paybackPeriod: string;
  };
  volumeDiscounts: {
    annualDiscount: number;
    enterpriseDiscount: number;
    customPricing: boolean;
  };
}

// Comprehensive Pricing Guide for 2026 Revolutionary Services
export const comprehensivePricingGuide2026: ServicePricing[] = [
  {
    serviceId: "quantumflow-pro",
    serviceName: "QuantumFlow Pro",
    category: "Quantum Computing",
    basePrice: 2999,
    pricingModel: "monthly",
    tiers: [
      {
        name: "Starter",
        price: 2999,
        billingCycle: "monthly",
        features: [
          "Quantum process optimization (up to 100 processes/month)",
          "Real-time quantum simulation",
          "Basic quantum ML integration",
          "Standard API access",
          "Email support",
          "Basic analytics dashboard"
        ],
        limitations: [
          "Limited to 100 processes per month",
          "Basic quantum models only",
          "Standard response time"
        ],
        bestFor: ["Mid-size companies", "Research teams", "Financial services"],
        roi: "300% within 8 months",
        setupTime: "2-3 weeks",
        support: "Email support (24h response)"
      },
      {
        name: "Professional",
        price: 7999,
        billingCycle: "monthly",
        features: [
          "Unlimited quantum process optimization",
          "Advanced quantum simulation",
          "Full quantum ML integration",
          "Priority API access",
          "Hybrid classical-quantum workflows",
          "Advanced analytics",
          "Phone support",
          "Custom integrations"
        ],
        limitations: [
          "No dedicated quantum hardware",
          "Shared quantum resources"
        ],
        bestFor: ["Large enterprises", "Financial institutions", "Research institutions"],
        roi: "500% within 12 months",
        setupTime: "3-4 weeks",
        support: "Phone + email support (4h response)"
      },
      {
        name: "Enterprise",
        price: 19999,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Dedicated quantum hardware access",
          "Custom quantum algorithm development",
          "24/7 dedicated support",
          "On-premise deployment options",
          "Custom SLA guarantees",
          "White-label solutions",
          "Training and certification"
        ],
        limitations: [
          "Requires enterprise contract",
          "Custom deployment timeline"
        ],
        bestFor: ["Fortune 500 companies", "Government agencies", "Research institutions"],
        roi: "800% within 18 months",
        setupTime: "4-6 weeks",
        support: "24/7 dedicated support + account manager"
      }
    ],
    marketComparison: {
      competitors: ["IBM Quantum", "Google Quantum AI", "Microsoft Azure Quantum"],
      averageMarketPrice: "$5,000 - $25,000/month",
      ourAdvantage: "First-to-market quantum workflow automation with 1000x faster optimization and competitive pricing"
    },
    roiAnalysis: {
      shortTerm: "300-500% within 8-12 months",
      longTerm: "800-1200% within 18-24 months",
      paybackPeriod: "3-6 months"
    },
    volumeDiscounts: {
      annualDiscount: 20,
      enterpriseDiscount: 30,
      customPricing: true
    }
  },
  {
    serviceId: "neurosync-ai",
    serviceName: "NeuroSync AI",
    category: "Brain-Computer Interface",
    basePrice: 199,
    pricingModel: "monthly",
    tiers: [
      {
        name: "Individual",
        price: 199,
        billingCycle: "monthly",
        features: [
          "Real-time brain activity monitoring",
          "Cognitive performance tracking",
          "Mental health insights",
          "Productivity optimization",
          "Sleep quality analysis",
          "Basic stress management tools",
          "Mobile app access",
          "Email support"
        ],
        limitations: [
          "Single user only",
          "Basic analytics",
          "Standard response time"
        ],
        bestFor: ["Executives", "Athletes", "Researchers", "High-performers"],
        roi: "400% within 6 months",
        setupTime: "1 week",
        support: "Email support (24h response)"
      },
      {
        name: "Team",
        price: 499,
        billingCycle: "monthly",
        features: [
          "Everything in Individual",
          "Up to 10 users",
          "Team performance analytics",
          "Collaborative insights",
          "Advanced stress management",
          "Custom recommendations",
          "API access",
          "Phone support"
        ],
        limitations: [
          "Maximum 10 users",
          "Shared team insights"
        ],
        bestFor: ["Small teams", "Sports teams", "Research groups"],
        roi: "350% within 6 months",
        setupTime: "1-2 weeks",
        support: "Phone + email support (8h response)"
      },
      {
        name: "Enterprise",
        price: 1499,
        billingCycle: "monthly",
        features: [
          "Everything in Team",
          "Unlimited users",
          "Enterprise security",
          "Custom integrations",
          "Advanced analytics",
          "White-label solutions",
          "Dedicated support",
          "Training and certification"
        ],
        limitations: [
          "Requires enterprise contract",
          "Custom deployment timeline"
        ],
        bestFor: ["Large organizations", "Healthcare institutions", "Research institutions"],
        roi: "600% within 12 months",
        setupTime: "2-3 weeks",
        support: "Dedicated support + account manager"
      }
    ],
    marketComparison: {
      competitors: ["Neuralink", "Kernel", "CTRL-labs"],
      averageMarketPrice: "$299 - $999/month",
      ourAdvantage: "Advanced BCI platform with 25% productivity increase and comprehensive mental health optimization"
    },
    roiAnalysis: {
      shortTerm: "350-400% within 6 months",
      longTerm: "600-800% within 12-18 months",
      paybackPeriod: "2-4 months"
    },
    volumeDiscounts: {
      annualDiscount: 15,
      enterpriseDiscount: 25,
      customPricing: true
    }
  },
  {
    serviceId: "spacetech-analytics",
    serviceName: "SpaceTech Analytics",
    category: "Space Technology",
    basePrice: 1499,
    pricingModel: "monthly",
    tiers: [
      {
        name: "Basic",
        price: 1499,
        billingCycle: "monthly",
        features: [
          "Real-time satellite tracking (up to 50 satellites)",
          "Basic space weather forecasting",
          "Orbital debris monitoring",
          "Launch window optimization",
          "Standard API access",
          "Email support",
          "Basic reporting"
        ],
        limitations: [
          "Limited to 50 satellites",
          "Basic forecasting models",
          "Standard response time"
        ],
        bestFor: ["Small satellite operators", "Startups", "Educational institutions"],
        roi: "400% within 12 months",
        setupTime: "3-4 weeks",
        support: "Email support (24h response)"
      },
      {
        name: "Professional",
        price: 3999,
        billingCycle: "monthly",
        features: [
          "Everything in Basic",
          "Unlimited satellite tracking",
          "Advanced space weather forecasting",
          "Advanced debris monitoring",
          "Satellite constellation management",
          "Space traffic coordination",
          "Risk assessment tools",
          "Phone support",
          "Custom integrations"
        ],
        limitations: [
          "No dedicated ground stations",
          "Shared space data resources"
        ],
        bestFor: ["Medium satellite operators", "Aerospace companies", "Insurance companies"],
        roi: "600% within 18 months",
        setupTime: "4-6 weeks",
        support: "Phone + email support (4h response)"
      },
      {
        name: "Enterprise",
        price: 9999,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Dedicated ground stations",
          "Custom space data feeds",
          "Regulatory compliance automation",
          "Custom risk models",
          "White-label solutions",
          "24/7 dedicated support",
          "Training and certification"
        ],
        limitations: [
          "Requires enterprise contract",
          "Custom deployment timeline"
        ],
        bestFor: ["Large space agencies", "Major aerospace companies", "Government"],
        roi: "800% within 24 months",
        setupTime: "6-8 weeks",
        support: "24/7 dedicated support + account manager"
      }
    ],
    marketComparison: {
      competitors: ["LeoLabs", "Kayhan Space", "Astroscale"],
      averageMarketPrice: "$2,500 - $8,000/month",
      ourAdvantage: "Comprehensive space analytics platform with 99.9% mission success rate and competitive pricing"
    },
    roiAnalysis: {
      shortTerm: "400-600% within 12-18 months",
      longTerm: "800-1200% within 24-36 months",
      paybackPeriod: "6-12 months"
    },
    volumeDiscounts: {
      annualDiscount: 25,
      enterpriseDiscount: 35,
      customPricing: true
    }
  },
  {
    serviceId: "biotech-ai-lab",
    serviceName: "BioTech AI Lab",
    category: "Biotechnology",
    basePrice: 899,
    pricingModel: "monthly",
    tiers: [
      {
        name: "Researcher",
        price: 899,
        billingCycle: "monthly",
        features: [
          "AI drug discovery algorithms",
          "Basic molecular modeling",
          "Clinical trial optimization",
          "Drug repurposing tools",
          "Basic toxicity prediction",
          "Patent analysis",
          "Collaborative research tools",
          "Email support"
        ],
        limitations: [
          "Single researcher access",
          "Basic AI models",
          "Standard response time"
        ],
        bestFor: ["Individual researchers", "Small labs", "Universities"],
        roi: "500% within 12 months",
        setupTime: "2-3 weeks",
        support: "Email support (24h response)"
      },
      {
        name: "Laboratory",
        price: 2499,
        billingCycle: "monthly",
        features: [
          "Everything in Researcher",
          "Up to 10 researchers",
          "Advanced molecular modeling",
          "Advanced toxicity prediction",
          "Custom AI model training",
          "Advanced analytics",
          "API access",
          "Phone support"
        ],
        limitations: [
          "Maximum 10 researchers",
          "Shared computational resources"
        ],
        bestFor: ["Research laboratories", "Biotech startups", "Pharmaceutical companies"],
        roi: "700% within 18 months",
        setupTime: "3-4 weeks",
        support: "Phone + email support (8h response)"
      },
      {
        name: "Enterprise",
        price: 5999,
        billingCycle: "monthly",
        features: [
          "Everything in Laboratory",
          "Unlimited researchers",
          "Custom AI model development",
          "Advanced regulatory guidance",
          "White-label solutions",
          "On-premise deployment",
          "Dedicated support",
          "Training and certification"
        ],
        limitations: [
          "Requires enterprise contract",
          "Custom deployment timeline"
        ],
        bestFor: ["Large pharmaceutical companies", "Major biotech firms", "Research institutions"],
        roi: "800% within 24 months",
        setupTime: "4-6 weeks",
        support: "Dedicated support + account manager"
      }
    ],
    marketComparison: {
      competitors: ["Atomwise", "Insilico Medicine", "BenevolentAI"],
      averageMarketPrice: "$1,500 - $5,000/month",
      ourAdvantage: "AI-powered drug discovery platform with 10x faster research and competitive pricing"
    },
    roiAnalysis: {
      shortTerm: "500-700% within 12-18 months",
      longTerm: "800-1500% within 24-36 months",
      paybackPeriod: "4-8 months"
    },
    volumeDiscounts: {
      annualDiscount: 20,
      enterpriseDiscount: 30,
      customPricing: true
    }
  },
  {
    serviceId: "climateai-predictor",
    serviceName: "ClimateAI Predictor",
    category: "Climate Technology",
    basePrice: 79,
    pricingModel: "monthly",
    tiers: [
      {
        name: "Basic",
        price: 79,
        billingCycle: "monthly",
        features: [
          "AI climate modeling (basic)",
          "Weather forecasting",
          "Climate risk assessment",
          "Agricultural insights",
          "Basic analytics",
          "Email support",
          "Mobile app access"
        ],
        limitations: [
          "Basic models only",
          "Limited data access",
          "Standard response time"
        ],
        bestFor: ["Small farms", "Local businesses", "Individuals"],
        roi: "200% within 6 months",
        setupTime: "1 week",
        support: "Email support (48h response)"
      },
      {
        name: "Professional",
        price: 299,
        billingCycle: "monthly",
        features: [
          "Everything in Basic",
          "Advanced climate modeling",
          "Quantum weather prediction",
          "Extreme event forecasting",
          "Energy optimization",
          "Carbon footprint tracking",
          "Advanced analytics",
          "API access",
          "Phone support"
        ],
        limitations: [
          "No custom models",
          "Shared computational resources"
        ],
        bestFor: ["Medium farms", "Energy companies", "Insurance companies"],
        roi: "300% within 6 months",
        setupTime: "1-2 weeks",
        support: "Phone + email support (24h response)"
      },
      {
        name: "Enterprise",
        price: 999,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Custom climate models",
          "Dedicated computational resources",
          "Sustainability reporting",
          "White-label solutions",
          "Custom integrations",
          "Dedicated support",
          "Training and certification"
        ],
        limitations: [
          "Requires enterprise contract",
          "Custom deployment timeline"
        ],
        bestFor: ["Large agricultural companies", "Major energy companies", "Government"],
        roi: "400% within 12 months",
        setupTime: "2-3 weeks",
        support: "Dedicated support + account manager"
      }
    ],
    marketComparison: {
      competitors: ["ClimateAI", "Jupiter Intelligence", "One Concern"],
      averageMarketPrice: "$150 - $600/month",
      ourAdvantage: "Advanced climate prediction with 95% accuracy and quantum computing integration"
    },
    roiAnalysis: {
      shortTerm: "200-300% within 6 months",
      longTerm: "400-600% within 12-18 months",
      paybackPeriod: "2-4 months"
    },
    volumeDiscounts: {
      annualDiscount: 15,
      enterpriseDiscount: 25,
      customPricing: true
    }
  }
];

// IT Infrastructure Services Pricing
export const itInfrastructurePricing2026: ServicePricing[] = [
  {
    serviceId: "quantum-cloud-infrastructure",
    serviceName: "Quantum Cloud Infrastructure",
    category: "Quantum Computing",
    basePrice: 150,
    pricingModel: "hourly",
    tiers: [
      {
        name: "Development",
        price: 150,
        billingCycle: "hourly",
        features: [
          "Quantum cloud access",
          "Basic quantum algorithms",
          "Standard security",
          "Email support",
          "Basic monitoring"
        ],
        limitations: [
          "Limited quantum resources",
          "Standard response time",
          "Basic SLA"
        ],
        bestFor: ["Research projects", "Development teams", "Startups"],
        roi: "400% within 12 months",
        setupTime: "4-6 weeks",
        support: "Email support (24h response)"
      },
      {
        name: "Production",
        price: 250,
        billingCycle: "hourly",
        features: [
          "Everything in Development",
          "Hybrid classical-quantum systems",
          "Advanced quantum security",
          "24/7 monitoring",
          "Phone support",
          "Custom development"
        ],
        limitations: [
          "No dedicated quantum hardware",
          "Shared quantum resources"
        ],
        bestFor: ["Production applications", "Financial services", "Research institutions"],
        roi: "600% within 18 months",
        setupTime: "6-8 weeks",
        support: "Phone + email support (4h response)"
      },
      {
        name: "Enterprise",
        price: 50000,
        billingCycle: "project",
        features: [
          "Everything in Production",
          "Dedicated quantum hardware",
          "Custom quantum protocols",
          "Enterprise security",
          "Custom SLA",
          "Dedicated support",
          "Training and certification"
        ],
        limitations: [
          "Requires enterprise contract",
          "Custom deployment timeline"
        ],
        bestFor: ["Large enterprises", "Government agencies", "Financial institutions"],
        roi: "800% within 24 months",
        setupTime: "8-12 weeks",
        support: "24/7 dedicated support + account manager"
      }
    ],
    marketComparison: {
      competitors: ["IBM Quantum", "Google Quantum AI", "Microsoft Azure Quantum"],
      averageMarketPrice: "$200-500/hour, $100K-1M/project",
      ourAdvantage: "Enterprise-grade quantum infrastructure with competitive pricing and custom development"
    },
    roiAnalysis: {
      shortTerm: "400-600% within 12-18 months",
      longTerm: "800-1200% within 24-36 months",
      paybackPeriod: "6-12 months"
    },
    volumeDiscounts: {
      annualDiscount: 30,
      enterpriseDiscount: 40,
      customPricing: true
    }
  }
];

// AI Services Pricing
export const aiServicesPricing2026: ServicePricing[] = [
  {
    serviceId: "consciousness-ai-platform",
    serviceName: "Consciousness AI Platform",
    category: "Artificial General Intelligence",
    basePrice: 9999,
    pricingModel: "monthly",
    tiers: [
      {
        name: "Research",
        price: 9999,
        billingCycle: "monthly",
        features: [
          "Emergent consciousness simulation",
          "Creative problem solving",
          "Emotional intelligence",
          "Self-learning capabilities",
          "Multi-modal understanding",
          "Basic ethical reasoning",
          "Email support"
        ],
        limitations: [
          "Single research project",
          "Basic consciousness models",
          "Standard response time"
        ],
        bestFor: ["Research institutions", "Universities", "Individual researchers"],
        roi: "1000% within 24 months",
        setupTime: "4-6 weeks",
        support: "Email support (24h response)"
      },
      {
        name: "Development",
        price: 24999,
        billingCycle: "monthly",
        features: [
          "Everything in Research",
          "Advanced consciousness models",
          "Custom AI development",
          "Human-AI collaboration tools",
          "Advanced ethical reasoning",
          "API access",
          "Phone support"
        ],
        limitations: [
          "No custom model training",
          "Shared computational resources"
        ],
        bestFor: ["Technology companies", "AI research labs", "Government agencies"],
        roi: "1500% within 36 months",
        setupTime: "6-8 weeks",
        support: "Phone + email support (8h response)"
      },
      {
        name: "Enterprise",
        price: 49999,
        billingCycle: "monthly",
        features: [
          "Everything in Development",
          "Custom consciousness models",
          "Dedicated computational resources",
          "White-label solutions",
          "Custom integrations",
          "Dedicated support",
          "Training and certification"
        ],
        limitations: [
          "Requires enterprise contract",
          "Custom deployment timeline"
        ],
        bestFor: ["Major technology companies", "Government agencies", "Research institutions"],
        roi: "2000% within 48 months",
        setupTime: "8-12 weeks",
        support: "24/7 dedicated support + account manager"
      }
    ],
    marketComparison: {
      competitors: ["OpenAI", "Anthropic", "DeepMind"],
      averageMarketPrice: "$20,000 - $100,000/month",
      ourAdvantage: "First-to-market AGI platform with emergent consciousness capabilities"
    },
    roiAnalysis: {
      shortTerm: "1000-1500% within 24-36 months",
      longTerm: "2000-3000% within 48-60 months",
      paybackPeriod: "12-18 months"
    },
    volumeDiscounts: {
      annualDiscount: 25,
      enterpriseDiscount: 35,
      customPricing: true
    }
  }
];

// Export all pricing data
export const allPricing2026 = {
  microSaas: comprehensivePricingGuide2026,
  itInfrastructure: itInfrastructurePricing2026,
  aiServices: aiServicesPricing2026
};

export default allPricing2026;