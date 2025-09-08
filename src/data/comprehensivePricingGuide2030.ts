// Removed unused: import { ProductListing } from "@/types/listings";
// Removed unused: import { COMPREHENSIVE_SERVICES_INDEX_2030 } from "./comprehensiveServicesIndex2030";

// Comprehensive Pricing Guide 2030 - Zion Tech Group
// Complete pricing information for all services with market analysis and ROI projections

export type PricingTier = {

  name: string;
  price: number;
  currency: string;
  billing: string;
  features: string[];
  limitations: string[];
  bestFor: string[];
  popular?: boolean;
}

export type ServicePricing = {

  serviceId: string;
  serviceName: string;
  category: string;
  description: string;
  pricingTiers: PricingTier[];
  marketAnalysis: {
    averagePrice: string;
    priceRange: string;
    competitors: string[];
    roi: string;
    setupTime: string;
    marketSize: string;
    growthRate: string;
  };
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

export const COMPREHENSIVE_PRICING_GUIDE_2030: ServicePricing[] = [
  {
    id: "ai-autonomous-business-operations-2030",
    title: "AI Autonomous Business Operations 2030",
    category: "AI & Operations",
    description: "Next-generation autonomous business platform with self-optimizing workflows, predictive decision-making, and zero-touch operations.",
    pricingTiers: [
      {
        name: "Starter",
        price: 7999,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic autonomous workflows",
          "AI decision support",
          "Standard integrations",
          "Email support",
          "Basic analytics"
        ],
        limitations: [
          "Limited AI models",
          "Basic reporting",
          "Standard SLA"
        ],
        bestFor: ["Small businesses", "Startups", "Pilot programs"]
      },
      {
        name: "Professional",
        price: 15999,
        currency: "$",
        billing: "monthly",
        features: [
          "Advanced autonomous operations",
          "Full AI decision making",
          "Advanced integrations",
          "Priority support",
          "Advanced analytics",
          "Custom AI training"
        ],
        limitations: [
          "Limited customization",
          "Standard compliance"
        ],
        bestFor: ["Medium businesses", "Growing companies", "Multi-department"]
      },
      {
        name: "Enterprise",
        price: 29999,
        currency: "$",
        billing: "monthly",
        features: [
          "Full autonomous operations",
          "Custom AI models",
          "Unlimited integrations",
          "24/7 dedicated support",
          "Advanced compliance",
          "Custom development",
          "White-label options"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Multi-national companies", "Regulated industries"],
        popular: true
      }
    ],
    marketAnalysis: {
      averagePrice: "$15,000-25,000/month",
      priceRange: "$8,000-40,000/month",
      competitors: ["UiPath", "Automation Anywhere", "Blue Prism"],
      roi: "800% within 12 months",
      setupTime: "8-12 weeks",
      marketSize: "$25.6 billion by 2030",
      growthRate: "23.4% annually"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-autonomous-operations-2030",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "quantum-ai-cybersecurity-2030",
    title: "Quantum AI Cybersecurity 2030",
    category: "Cybersecurity",
    description: "Revolutionary quantum-resistant cybersecurity platform with AI-powered threat detection, quantum encryption, and autonomous incident response.",
    pricingTiers: [
      {
        name: "Basic",
        price: 14999,
        currency: "$",
        billing: "monthly",
        features: [
          "Quantum-resistant encryption",
          "AI threat detection",
          "Basic incident response",
          "Standard compliance",
          "Email support"
        ],
        limitations: [
          "Limited AI models",
          "Basic reporting",
          "Standard SLA"
        ],
        bestFor: ["Small organizations", "Basic security needs", "Compliance requirements"]
      },
      {
        name: "Advanced",
        price: 24999,
        currency: "$",
        billing: "monthly",
        features: [
          "Advanced quantum security",
          "AI-powered threat hunting",
          "Automated incident response",
          "Advanced compliance",
          "Priority support",
          "Custom security policies"
        ],
        limitations: [
          "Limited customization",
          "Standard integrations"
        ],
        bestFor: ["Medium organizations", "High security needs", "Regulated industries"]
      },
      {
        name: "Enterprise",
        price: 39999,
        currency: "$",
        billing: "monthly",
        features: [
          "Full quantum security suite",
          "Custom AI models",
          "Zero-trust architecture",
          "Full compliance suite",
          "24/7 dedicated support",
          "Custom development",
          "White-label options"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Government agencies", "Financial institutions"],
        popular: true
      }
    ],
    marketAnalysis: {
      averagePrice: "$25,000-40,000/month",
      priceRange: "$15,000-60,000/month",
      competitors: ["Post-Quantum", "ISARA", "Crypta Labs"],
      roi: "1000% within 18 months",
      setupTime: "12-16 weeks",
      marketSize: "$403.1 billion by 2030",
      growthRate: "15.2% annually"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/quantum-ai-cybersecurity-2030",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-content-creation-studio-2030",
    title: "AI Content Creation Studio 2030",
    category: "AI & Content",
    description: "Advanced AI-powered content creation platform with multi-modal generation, brand voice consistency, and automated content strategy.",
    pricingTiers: [
      {
        name: "Creator",
        price: 4999,
        currency: "$",
        billing: "monthly",
        features: [
          "AI content generation",
          "Basic brand voice",
          "Standard templates",
          "Email support",
          "Basic analytics"
        ],
        limitations: [
          "Limited AI models",
          "Basic customization",
          "Standard content types"
        ],
        bestFor: ["Content creators", "Small businesses", "Marketing teams"]
      },
      {
        name: "Professional",
        price: 8999,
        currency: "$",
        billing: "monthly",
        features: [
          "Advanced AI generation",
          "Custom brand voice",
          "Advanced templates",
          "Priority support",
          "Advanced analytics",
          "Multi-modal content"
        ],
        limitations: [
          "Limited integrations",
          "Standard compliance"
        ],
        bestFor: ["Marketing agencies", "Medium businesses", "Content teams"]
      },
      {
        name: "Enterprise",
        price: 15999,
        currency: "$",
        billing: "monthly",
        features: [
          "Full AI content suite",
          "Custom AI models",
          "Unlimited content types",
          "Advanced compliance",
          "24/7 dedicated support",
          "Custom development",
          "White-label options"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Media companies", "Marketing agencies"],
        popular: true
      }
    ],
    marketPrice: "$15,000-40,000",
    competitors["Bloomberg Risk", "Reuters Risk", "S&P Global"],
    roi: "900% within 18 months",
    setupTime: "8-10 weeks",
    paymentOptions["One-time payment", "Annual subscription", "Per-portfolio pricing"],
    volumeDiscounts["20% off for 10+ licenses", "35% off for 50+ licenses", "Custom enterprise pricing"],
    enterpriseFeatures["Custom risk models", "White-label solutions", "Enterprise support", "Custom integrations"]
  {/* Removed stray closing brace */}
];

export const getPricingByCategory = (category: string): ServicePricing[] => {
  return COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => 
    service.category === category
  );
};

export const getPricingByPriceRange = (minPrice: number, maxPrice: number): ServicePricing[] => {
  return COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => {
    const avgPrice = service.pricingTiers[1]?.price || service.pricingTiers[0]?.price;
    return avgPrice >= minPrice && avgPrice <= maxPrice;
  });
};

export const getPopularPricing = (): ServicePricing[] => {
  return COMPREHENSIVE_PRICING_GUIDE_2030.filter(service => 
    service.pricingTiers.some(tier => tier.popular)
  );
};

export const getPricingStats = () => {
  const totalServices = COMPREHENSIVE_PRICING_GUIDE_2030.length;
  const totalCategories = [...new Set(COMPREHENSIVE_PRICING_GUIDE_2030.map(s => s.category))].length;
  const avgPrice = COMPREHENSIVE_PRICING_GUIDE_2030.reduce((sum, service) => {
    const avgPrice = service.pricingTiers[1]?.price || service.pricingTiers[0]?.price;
    return sum + avgPrice;
  }, 0) / totalServices;

  return {
    totalServices,
    totalCategories,
    averagePrice: Math.round(avgPrice),
    priceRanges: {
      low: "$5,000-10,000/month",
      medium: "$10,000-20,000/month",
      high: "$20,000-40,000/month"
    }
    acc[service?.category]?.push(service?.basePrice);
    return acc;
  }, {} as Record<string, number[]>),
  roiAnalysis: COMPREHENSIVE_PRICING_GUIDE_2030.map(service => ({
    serviceName: service.serviceName,
    roi: service.roi,
    setupTime: service.setupTime,
    price: service.basePrice
  }))
};

// Payment and Discount Information
export const PAYMENT_OPTIONS_2030 = {
  paymentMethods: ["Credit Card", "Bank Transfer", "Wire Transfer", "Cryptocurrency"],
  installmentPlans: ["3-month plan", "6-month plan", "12-month plan"],
  volumeDiscounts: [
    "5-10 licenses: 15% discount",
    "11-25 licenses: 25% discount",
    "26-50 licenses: 35% discount",
    "51+ licenses: Custom pricing"
  ],
  enterpriseFeatures: [
    "Custom development",
    "White-label solutions",
    "Dedicated support",
    "On-premise deployment",
    "Custom integrations",
    "SLA guarantees"
  {/* Removed stray closing bracket */}
};

// Contact Information for Pricing Inquiries
export const PRICING_CONTACT_2030 = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  responseTime: "Within 24 hours for pricing inquiries"
};