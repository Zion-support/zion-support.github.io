import { ProductListing } from "@/types/listings";
import { COMPREHENSIVE_SERVICES_INDEX_2030 } from "./comprehensiveServicesIndex2030";

export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  features: string[];
  limitations: string[];
  bestFor: string;
  popular?: boolean;
}

export interface ServicePricing {
  serviceId: string;
  serviceName: string;
  category: string;
  basePrice: number;
  currency: string;
  pricingModel: string;
  tiers: PricingTier[];
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  customPricing: boolean;
  volumeDiscounts: boolean;
  enterpriseOptions: boolean;
}

export const COMPREHENSIVE_PRICING_GUIDE_2030: ServicePricing[] = [
  // AI-Powered Business Intelligence Suite
  {
    serviceId: "ai-powered-business-intelligence-suite",
    serviceName: "AI-Powered Business Intelligence Suite",
    category: "AI & Business Intelligence",
    basePrice: 4999,
    currency: "$",
    pricingModel: "Subscription + Usage",
    tiers: [
      {
        name: "Starter",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic AI analytics",
          "Up to 5 data sources",
          "Standard reporting",
          "Email support"
        ],
        limitations: [
          "Limited AI models",
          "Basic integrations",
          "Standard SLA"
        ],
        bestFor: "Small businesses starting with AI"
      },
      {
        name: "Professional",
        price: 8999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced AI analytics",
          "Up to 20 data sources",
          "Custom dashboards",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "Limited custom models",
          "Standard compliance"
        ],
        bestFor: "Growing businesses with data needs",
        popular: true
      },
      {
        name: "Enterprise",
        price: 15999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI suite",
          "Unlimited data sources",
          "Custom AI models",
          "24/7 support",
          "Enterprise compliance",
          "Custom integrations"
        ],
        limitations: [],
        bestFor: "Large enterprises with complex needs"
      }
    ],
    marketPrice: "$4,000-8,000",
    competitors: ["Tableau", "Power BI", "Qlik"],
    roi: "500% within 6 months",
    setupTime: "4-6 weeks",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseOptions: true
  },

  // AI Autonomous Vehicle Fleet Management
  {
    serviceId: "ai-autonomous-vehicle-fleet-management",
    serviceName: "AI Autonomous Vehicle Fleet Management Platform",
    category: "AI & Autonomous Systems",
    basePrice: 15999,
    currency: "$",
    pricingModel: "Subscription + Per Vehicle",
    tiers: [
      {
        name: "Fleet Starter",
        price: 15999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 50 vehicles",
          "Basic route optimization",
          "Standard monitoring",
          "Email support"
        ],
        limitations: [
          "Limited AI features",
          "Basic reporting"
        ],
        bestFor: "Small fleet operators"
      },
      {
        name: "Fleet Professional",
        price: 24999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 200 vehicles",
          "Advanced AI optimization",
          "Predictive maintenance",
          "Priority support",
          "Advanced analytics"
        ],
        limitations: [
          "Limited custom features"
        ],
        bestFor: "Medium-sized fleets",
        popular: true
      },
      {
        name: "Fleet Enterprise",
        price: 39999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited vehicles",
          "Full AI suite",
          "Custom algorithms",
          "24/7 support",
          "Enterprise integrations"
        ],
        limitations: [],
        bestFor: "Large fleet operations"
      }
    ],
    marketPrice: "$12,000-25,000",
    competitors: ["Tesla Fleet", "Waymo", "Cruise"],
    roi: "800% within 12 months",
    setupTime: "8-12 weeks",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseOptions: true
  },

  // AI Medical Imaging Diagnostic Platform
  {
    serviceId: "ai-medical-imaging-diagnostic-platform",
    serviceName: "AI Medical Imaging Diagnostic Platform",
    category: "AI & Healthcare",
    basePrice: 24999,
    currency: "$",
    pricingModel: "Subscription + Per Scan",
    tiers: [
      {
        name: "Clinical",
        price: 24999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic diagnostic AI",
          "Up to 1000 scans/month",
          "Standard accuracy",
          "Email support"
        ],
        limitations: [
          "Limited AI models",
          "Basic compliance"
        ],
        bestFor: "Small clinics"
      },
      {
        name: "Hospital",
        price: 39999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced diagnostic AI",
          "Up to 10000 scans/month",
          "High accuracy models",
          "Priority support",
          "Full compliance"
        ],
        limitations: [
          "Limited custom models"
        ],
        bestFor: "Medium hospitals",
        popular: true
      },
      {
        name: "Medical Center",
        price: 59999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full AI diagnostic suite",
          "Unlimited scans",
          "Custom AI models",
          "24/7 support",
          "Research capabilities"
        ],
        limitations: [],
        bestFor: "Large medical centers"
      }
    ],
    marketPrice: "$20,000-40,000",
    competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare"],
    roi: "1000% within 18 months",
    setupTime: "12-16 weeks",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseOptions: true
  },

  // Quantum-Safe Cybersecurity Infrastructure
  {
    serviceId: "quantum-safe-cybersecurity-infrastructure",
    serviceName: "Quantum-Safe Cybersecurity Infrastructure",
    category: "IT Infrastructure",
    basePrice: 19999,
    currency: "$",
    pricingModel: "Subscription + Implementation",
    tiers: [
      {
        name: "Basic Security",
        price: 19999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic quantum-safe encryption",
          "Standard security protocols",
          "Email support",
          "Basic compliance"
        ],
        limitations: [
          "Limited security features",
          "Basic monitoring"
        ],
        bestFor: "Small organizations"
      },
      {
        name: "Advanced Security",
        price: 29999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced quantum-safe protocols",
          "Advanced monitoring",
          "Priority support",
          "Full compliance",
          "Custom security rules"
        ],
        limitations: [
          "Limited custom features"
        ],
        bestFor: "Medium organizations",
        popular: true
      },
      {
        name: "Enterprise Security",
        price: 44999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full quantum-safe suite",
          "Custom security protocols",
          "24/7 monitoring",
          "24/7 support",
          "Custom integrations"
        ],
        limitations: [],
        bestFor: "Large enterprises"
      }
    ],
    marketPrice: "$15,000-35,000",
    competitors: ["IBM Quantum", "Microsoft Quantum", "Google Quantum"],
    roi: "700% within 18 months",
    setupTime: "10-14 weeks",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseOptions: true
  },

  // Metaverse Development Platform
  {
    serviceId: "metaverse-development-platform",
    serviceName: "Metaverse Development Platform",
    category: "Emerging Technology",
    basePrice: 17999,
    currency: "$",
    pricingModel: "Subscription + Development",
    tiers: [
      {
        name: "Creator",
        price: 17999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Basic 3D tools",
          "VR/AR support",
          "Basic templates",
          "Email support"
        ],
        limitations: [
          "Limited customization",
          "Basic integrations"
        ],
        bestFor: "Individual creators"
      },
      {
        name: "Developer",
        price: 27999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Advanced 3D tools",
          "Full VR/AR suite",
          "Custom templates",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "Limited custom features"
        ],
        bestFor: "Development teams",
        popular: true
      },
      {
        name: "Enterprise",
        price: 44999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Full metaverse suite",
          "Custom development tools",
          "Enterprise integrations",
          "24/7 support",
          "Custom solutions"
        ],
        limitations: [],
        bestFor: "Large organizations"
      }
    ],
    marketPrice: "$15,000-35,000",
    competitors: ["Unity", "Unreal Engine", "Roblox"],
    roi: "700% within 18 months",
    setupTime: "12-16 weeks",
    customPricing: true,
    volumeDiscounts: true,
    enterpriseOptions: true
  }
];

// Pricing Analysis and Insights
export const PRICING_INSIGHTS_2030 = {
  averagePrice: Math.round(
    COMPREHENSIVE_PRICING_GUIDE_2030.reduce((sum, service) => sum + service.basePrice, 0) / 
    COMPREHENSIVE_PRICING_GUIDE_2030.length
  ),
  priceRange: {
    min: Math.min(...COMPREHENSIVE_PRICING_GUIDE_2030.map(s => s.basePrice)),
    max: Math.max(...COMPREHENSIVE_PRICING_GUIDE_2030.map(s => s.basePrice))
  },
  popularPricingModels: [
    "Subscription + Usage",
    "Subscription + Per Unit",
    "Subscription + Implementation",
    "Tiered Subscription"
  ],
  commonFeatures: [
    "AI-powered capabilities",
    "Enterprise-grade security",
    "Custom integrations",
    "Priority support",
    "ROI tracking",
    "Compliance certifications"
  ],
  marketTrends: [
    "AI services commanding premium pricing",
    "Quantum computing services at premium rates",
    "Emerging technology services with high value",
    "Healthcare AI services with regulatory compliance",
    "Autonomous systems with safety certifications"
  ]
};