import { ProductListing } from "@/types/listings";
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from "./comprehensiveServicesIndex2030";

export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billingCycle: 'monthly' | 'annual' | 'one-time';
  features: string[];
  popular?: boolean;
  recommended?: boolean;
  savings?: number;
}

export interface ServicePricing {
  serviceId: string;
  serviceName: string;
  category: string;
  basePrice: number;
  currency: string;
  pricingTiers: PricingTier[];
  marketPrice: string;
  roi: string;
  setupTime: string;
  competitors: string[];
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
}

export const COMPREHENSIVE_PRICING_GUIDE_2030: ServicePricing[] = [
  // AI-Powered Business Intelligence Suite
  {
    serviceId: "ai-powered-business-intelligence-suite",
    serviceName: "AI-Powered Business Intelligence Suite",
    category: "AI & Business Intelligence",
    basePrice: 4999,
    currency: "$",
    pricingTiers: [
      {
        name: "Starter",
        price: 4999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Basic AI analytics dashboard",
          "Up to 5 data sources",
          "Standard reporting",
          "Email support",
          "Monthly updates"
        ]
      },
      {
        name: "Professional",
        price: 8999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Advanced AI analytics",
          "Unlimited data sources",
          "Custom dashboards",
          "Priority support",
          "Weekly updates",
          "API access"
        ],
        popular: true,
        recommended: true
      },
      {
        name: "Enterprise",
        price: 15999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Full AI suite",
          "Custom AI models",
          "White-label solution",
          "Dedicated support",
          "Daily updates",
          "Full API access",
          "Custom integrations"
        ]
      }
    ],
    marketPrice: "$4,000-8,000",
    roi: "500% within 6 months",
    setupTime: "4-6 weeks",
    competitors: ["Tableau", "Power BI", "Qlik"],
    features: [
      "Natural language queries",
      "Predictive analytics",
      "Automated insights",
      "Real-time data processing",
      "Advanced visualizations"
    ],
    benefits: [
      "95% accuracy in predictions",
      "40% faster decision making",
      "60% reduction in manual analysis",
      "Real-time business insights"
    ],
    useCases: [
      "Sales performance analysis",
      "Customer behavior insights",
      "Financial forecasting",
      "Operational optimization"
    ],
    targetAudience: [
      "Medium to large enterprises",
      "Data-driven organizations",
      "Business analysts",
      "Executive teams"
    ]
  },

  // Zero-Trust Cybersecurity Platform
  {
    serviceId: "zero-trust-cybersecurity-platform",
    serviceName: "Zero-Trust Cybersecurity Platform",
    category: "Cybersecurity",
    basePrice: 8999,
    currency: "$",
    pricingTiers: [
      {
        name: "Basic",
        price: 8999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Core zero-trust security",
          "Up to 100 users",
          "Basic threat detection",
          "Standard support"
        ]
      },
      {
        name: "Advanced",
        price: 15999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Advanced threat detection",
          "Unlimited users",
          "AI-powered security",
          "Priority support",
          "Custom policies"
        ],
        popular: true,
        recommended: true
      },
      {
        name: "Enterprise",
        price: 29999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Full security suite",
          "Custom AI models",
          "24/7 monitoring",
          "Dedicated team",
          "Compliance reporting"
        ]
      }
    ],
    marketPrice: "$7,000-15,000",
    roi: "600% within 8 months",
    setupTime: "6-8 weeks",
    competitors: ["CrowdStrike", "Palo Alto Networks", "Fortinet"],
    features: [
      "Continuous authentication",
      "Micro-segmentation",
      "AI threat detection",
      "Compliance monitoring",
      "Real-time alerts"
    ],
    benefits: [
      "85% reduction in security incidents",
      "99.99% uptime protection",
      "Zero-trust architecture",
      "Automated threat response"
    ],
    useCases: [
      "Enterprise security",
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations"
    ],
    targetAudience: [
      "Large enterprises",
      "Government organizations",
      "Financial services",
      "Healthcare providers"
    ]
  },

  // AI Autonomous Fleet Management Platform
  {
    serviceId: "ai-autonomous-fleet-management",
    serviceName: "AI Autonomous Fleet Management Platform",
    category: "AI & Autonomous Systems",
    basePrice: 12999,
    currency: "$",
    pricingTiers: [
      {
        name: "Fleet Manager",
        price: 12999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Basic fleet monitoring",
          "Up to 50 vehicles",
          "Route optimization",
          "Standard reporting"
        ]
      },
      {
        name: "Autonomous Pro",
        price: 24999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Full autonomous features",
          "Unlimited vehicles",
          "AI route optimization",
          "Predictive maintenance",
          "Priority support"
        ],
        popular: true,
        recommended: true
      },
      {
        name: "Enterprise Fleet",
        price: 49999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Custom AI models",
          "Multi-fleet management",
          "Advanced analytics",
          "Dedicated support",
          "Custom integrations"
        ]
      }
    ],
    marketPrice: "$10,000-20,000",
    roi: "700% within 12 months",
    setupTime: "8-12 weeks",
    competitors: ["Tesla Fleet", "Waymo", "Cruise"],
    features: [
      "Real-time monitoring",
      "Route optimization",
      "Predictive maintenance",
      "Autonomous operations",
      "Performance analytics"
    ],
    benefits: [
      "35% reduction in operational costs",
      "45% improvement in fleet efficiency",
      "Real-time optimization",
      "Automated decision making"
    ],
    useCases: [
      "Autonomous vehicle fleets",
      "Logistics companies",
      "Ride-sharing services",
      "Public transportation"
    ],
    targetAudience: [
      "Transportation companies",
      "Logistics providers",
      "Ride-sharing platforms",
      "Government agencies"
    ]
  },

  // Quantum-Resistant Cryptography Platform
  {
    serviceId: "quantum-resistant-cryptography-platform",
    serviceName: "Quantum-Resistant Cryptography Platform",
    category: "Cybersecurity",
    basePrice: 15999,
    currency: "$",
    pricingTiers: [
      {
        name: "Quantum Basic",
        price: 15999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Basic quantum-resistant algorithms",
          "Up to 1000 users",
          "Standard encryption",
          "Basic support"
        ]
      },
      {
        name: "Quantum Pro",
        price: 29999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Advanced quantum algorithms",
          "Unlimited users",
          "Custom encryption",
          "Priority support",
          "Compliance tools"
        ],
        popular: true,
        recommended: true
      },
      {
        name: "Quantum Enterprise",
        price: 59999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Custom quantum algorithms",
          "Full compliance suite",
          "24/7 support",
          "Custom integrations",
          "White-label solution"
        ]
      }
    ],
    marketPrice: "$12,000-25,000",
    roi: "800% within 18 months",
    setupTime: "10-14 weeks",
    competitors: ["IBM Quantum", "Microsoft Quantum", "Google Quantum"],
    features: [
      "Lattice-based cryptography",
      "Hash-based signatures",
      "Multivariate polynomials",
      "Quantum-resistant protocols",
      "Future-proof security"
    ],
    benefits: [
      "Quantum-safe encryption",
      "Future-proof security",
      "High performance",
      "Compliance ready"
    ],
    useCases: [
      "Government communications",
      "Financial transactions",
      "Healthcare data",
      "Military applications"
    ],
    targetAudience: [
      "Government agencies",
      "Financial institutions",
      "Healthcare organizations",
      "Defense contractors"
    ]
  },

  // Neural Interface Development Platform
  {
    serviceId: "neural-interface-development-platform",
    serviceName: "Neural Interface Development Platform",
    category: "AI & Emerging Technology",
    basePrice: 24999,
    currency: "$",
    pricingTiers: [
      {
        name: "Developer",
        price: 24999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Basic BCI development tools",
          "EEG signal processing",
          "Standard ML algorithms",
          "Developer support"
        ]
      },
      {
        name: "Research Pro",
        price: 49999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Advanced BCI tools",
          "Custom ML algorithms",
          "Real-time processing",
          "Priority support",
          "Research collaboration"
        ],
        popular: true,
        recommended: true
      },
      {
        name: "Enterprise BCI",
        price: 99999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Custom BCI solutions",
          "Full AI integration",
          "Dedicated research team",
          "Custom hardware",
          "Full IP ownership"
        ]
      }
    ],
    marketPrice: "$20,000-40,000",
    roi: "1000% within 24 months",
    setupTime: "12-16 weeks",
    competitors: ["Neuralink", "Kernel", "CTRL-labs"],
    features: [
      "EEG signal processing",
      "Machine learning algorithms",
      "Real-time neural analysis",
      "BCI development tools",
      "Hardware integration"
    ],
    benefits: [
      "Direct brain-computer communication",
      "Advanced research capabilities",
      "Customizable solutions",
      "Cutting-edge technology"
    ],
    useCases: [
      "Medical research",
      "Assistive technology",
      "Gaming and entertainment",
      "Human-computer interaction"
    ],
    targetAudience: [
      "Research institutions",
      "Medical device companies",
      "Gaming companies",
      "Technology startups"
    ]
  },

  // AI Consciousness Transfer Platform
  {
    serviceId: "ai-consciousness-transfer-platform",
    serviceName: "AI Consciousness Transfer Platform",
    category: "AI & Emerging Technology",
    basePrice: 199999,
    currency: "$",
    pricingTiers: [
      {
        name: "Consciousness Basic",
        price: 199999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Basic consciousness mapping",
          "Digital backup system",
          "Standard storage",
          "Basic support"
        ]
      },
      {
        name: "Consciousness Pro",
        price: 399999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Advanced consciousness transfer",
          "High-capacity storage",
          "Priority support",
          "Research collaboration",
          "Custom algorithms"
        ],
        popular: true,
        recommended: true
      },
      {
        name: "Consciousness Enterprise",
        price: 799999,
        currency: "$",
        billingCycle: 'one-time',
        features: [
          "Full consciousness transfer",
          "Unlimited storage",
          "Dedicated research team",
          "Custom hardware",
          "Full IP ownership"
        ]
      }
    ],
    marketPrice: "$150,000-500,000",
    roi: "10000% within 120 months",
    setupTime: "40-52 weeks",
    competitors: ["Nectome", "Alcor Life Extension", "Cryonics Institute"],
    features: [
      "Mind uploading technology",
      "Digital immortality",
      "Consciousness backup",
      "Neural mapping",
      "AI consciousness"
    ],
    benefits: [
      "Digital consciousness preservation",
      "Mind uploading capabilities",
      "Immortality technology",
      "Breakthrough research"
    ],
    useCases: [
      "Life extension research",
      "Digital consciousness",
      "Mind preservation",
      "Scientific research"
    ],
    targetAudience: [
      "Research institutions",
      "Life extension companies",
      "Technology companies",
      "Government agencies"
    ]
  }
];

// Pricing Statistics
export const PRICING_STATISTICS_2030 = {
  totalServices: COMPREHENSIVE_PRICING_GUIDE_2030.length,
  averageBasePrice: Math.round(
    COMPREHENSIVE_PRICING_GUIDE_2030.reduce((sum, service) => sum + service.basePrice, 0) / 
    COMPREHENSIVE_PRICING_GUIDE_2030.length
  ),
  priceRanges: {
    affordable: COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => service.basePrice < 10000).length,
    midRange: COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => service.basePrice >= 10000 && service.basePrice < 50000).length,
    premium: COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => service.basePrice >= 50000 && service.basePrice < 100000).length,
    enterprise: COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => service.basePrice >= 100000).length
  },
  categories: [...new Set(COMPREHENSIVE_PRICING_GUIDE_2030.map(service => service.category))],
  averageROI: "800% within 18 months",
  averageSetupTime: "16 weeks"
};

// Featured Services
export const FEATURED_PRICING_SERVICES_2030 = COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => 
  service.pricingTiers.some(tier => tier.popular || tier.recommended)
);

// High-ROI Services
export const HIGH_ROI_PRICING_SERVICES_2030 = COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => {
  const roi = service.roi;
  const roiNumber = parseInt(roi.match(/\d+/)?.[0] || '0');
  return roiNumber > 500;
});

// Quick Setup Services
export const QUICK_SETUP_PRICING_SERVICES_2030 = COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => {
  const setupTime = service.setupTime;
  const weeks = parseInt(setupTime.match(/\d+/)?.[0] || '0');
  return weeks < 12;
});