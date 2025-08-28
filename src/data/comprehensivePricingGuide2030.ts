import { ProductListing } from "@/types/listings";

export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billing: string;
  features: string[];
  limitations: string[];
  bestFor: string[];
  popular?: boolean;
}

export interface ServicePricing {
  id: string;
  title: string;
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
    marketAnalysis: {
      averagePrice: "$8,000-15,000/month",
      priceRange: "$5,000-25,000/month",
      competitors: ["Jasper", "Copy.ai", "Writesonic"],
      roi: "600% within 8 months",
      setupTime: "6-8 weeks",
      marketSize: "$18.4 billion by 2030",
      growthRate: "28.7% annually"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-content-creation-studio-2030",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-sales-intelligence-2030",
    title: "AI Sales Intelligence 2030",
    category: "AI & Marketing",
    description: "Intelligent sales platform with predictive lead scoring, automated outreach, and real-time market insights.",
    pricingTiers: [
      {
        name: "Sales Pro",
        price: 7999,
        currency: "$",
        billing: "monthly",
        features: [
          "AI lead scoring",
          "Basic outreach automation",
          "Standard analytics",
          "Email support",
          "Basic integrations"
        ],
        limitations: [
          "Limited AI models",
          "Basic reporting",
          "Standard SLA"
        ],
        bestFor: ["Sales teams", "Small businesses", "Startups"]
      },
      {
        name: "Sales Enterprise",
        price: 12999,
        currency: "$",
        billing: "monthly",
        features: [
          "Advanced AI scoring",
          "Full outreach automation",
          "Advanced analytics",
          "Priority support",
          "Advanced integrations",
          "Custom AI training"
        ],
        limitations: [
          "Limited customization",
          "Standard compliance"
        ],
        bestFor: ["Sales organizations", "Medium businesses", "Growing companies"]
      },
      {
        name: "Sales Intelligence Suite",
        price: 19999,
        currency: "$",
        billing: "monthly",
        features: [
          "Full AI sales suite",
          "Custom AI models",
          "Unlimited integrations",
          "Advanced compliance",
          "24/7 dedicated support",
          "Custom development",
          "White-label options"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Sales organizations", "Multi-national companies"],
        popular: true
      }
    ],
    marketAnalysis: {
      averagePrice: "$12,000-20,000/month",
      priceRange: "$8,000-30,000/month",
      competitors: ["Salesforce Einstein", "HubSpot", "Pipedrive"],
      roi: "700% within 10 months",
      setupTime: "8-10 weeks",
      marketSize: "$14.7 billion by 2030",
      growthRate: "25.3% annually"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-sales-intelligence-2030",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-customer-support-automation-2030",
    title: "AI Customer Support Automation 2030",
    category: "AI & Customer Support",
    description: "Advanced customer support platform with natural language processing, emotional intelligence, and seamless human handoff.",
    pricingTiers: [
      {
        name: "Support Basic",
        price: 4999,
        currency: "$",
        billing: "monthly",
        features: [
          "AI chatbot",
          "Basic NLP",
          "Standard integrations",
          "Email support",
          "Basic analytics"
        ],
        limitations: [
          "Limited AI models",
          "Basic customization",
          "Standard SLA"
        ],
        bestFor: ["Small businesses", "Basic support needs", "Startups"]
      },
      {
        name: "Support Pro",
        price: 7999,
        currency: "$",
        billing: "monthly",
        features: [
          "Advanced AI support",
          "Emotional intelligence",
          "Advanced integrations",
          "Priority support",
          "Advanced analytics",
          "Custom AI training"
        ],
        limitations: [
          "Limited customization",
          "Standard compliance"
        ],
        bestFor: ["Medium businesses", "Growing support teams", "Customer service"]
      },
      {
        name: "Support Enterprise",
        price: 12999,
        currency: "$",
        billing: "monthly",
        features: [
          "Full AI support suite",
          "Custom AI models",
          "Unlimited integrations",
          "Advanced compliance",
          "24/7 dedicated support",
          "Custom development",
          "White-label options"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Support organizations", "Multi-national companies"],
        popular: true
      }
    ],
    marketAnalysis: {
      averagePrice: "$8,000-12,000/month",
      priceRange: "$5,000-20,000/month",
      competitors: ["Zendesk", "Intercom", "Freshdesk"],
      roi: "500% within 6 months",
      setupTime: "5-7 weeks",
      marketSize: "$12.3 billion by 2030",
      growthRate: "22.1% annually"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-customer-support-automation-2030",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "ai-data-analytics-bi-2030",
    title: "AI Data Analytics & BI 2030",
    category: "AI & Business Intelligence",
    description: "Next-generation business intelligence platform with real-time analytics, predictive modeling, and automated insights.",
    pricingTiers: [
      {
        name: "Analytics Basic",
        price: 9999,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic AI analytics",
          "Standard reporting",
          "Basic integrations",
          "Email support",
          "Basic dashboards"
        ],
        limitations: [
          "Limited AI models",
          "Basic customization",
          "Standard SLA"
        ],
        bestFor: ["Small businesses", "Basic analytics needs", "Startups"]
      },
      {
        name: "Analytics Pro",
        price: 14999,
        currency: "$",
        billing: "monthly",
        features: [
          "Advanced AI analytics",
          "Predictive modeling",
          "Advanced integrations",
          "Priority support",
          "Advanced dashboards",
          "Custom AI training"
        ],
        limitations: [
          "Limited customization",
          "Standard compliance"
        ],
        bestFor: ["Medium businesses", "Growing analytics teams", "Data-driven companies"]
      },
      {
        name: "Analytics Enterprise",
        price: 24999,
        currency: "$",
        billing: "monthly",
        features: [
          "Full AI analytics suite",
          "Custom AI models",
          "Unlimited integrations",
          "Advanced compliance",
          "24/7 dedicated support",
          "Custom development",
          "White-label options"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Analytics organizations", "Multi-national companies"],
        popular: true
      }
    ],
    marketAnalysis: {
      averagePrice: "$15,000-25,000/month",
      priceRange: "$10,000-40,000/month",
      competitors: ["Tableau", "Power BI", "Qlik"],
      roi: "800% within 12 months",
      setupTime: "8-10 weeks",
      marketSize: "$22.8 billion by 2030",
      growthRate: "19.7% annually"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-data-analytics-bi-2030",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  {
    id: "cloud-infrastructure-devops-2030",
    title: "Cloud Infrastructure & DevOps 2030",
    category: "Cloud & DevOps",
    description: "Intelligent cloud infrastructure platform with AI-driven optimization, automated scaling, and zero-downtime deployments.",
    pricingTiers: [
      {
        name: "Infrastructure Basic",
        price: 12999,
        currency: "$",
        billing: "monthly",
        features: [
          "Basic cloud management",
          "Standard DevOps",
          "Basic monitoring",
          "Email support",
          "Basic scaling"
        ],
        limitations: [
          "Limited AI optimization",
          "Basic customization",
          "Standard SLA"
        ],
        bestFor: ["Small businesses", "Basic cloud needs", "Startups"]
      },
      {
        name: "Infrastructure Pro",
        price: 18999,
        currency: "$",
        billing: "monthly",
        features: [
          "Advanced cloud management",
          "AI optimization",
          "Advanced monitoring",
          "Priority support",
          "Advanced scaling",
          "Custom AI training"
        ],
        limitations: [
          "Limited customization",
          "Standard compliance"
        ],
        bestFor: ["Medium businesses", "Growing cloud teams", "DevOps organizations"]
      },
      {
        name: "Infrastructure Enterprise",
        price: 29999,
        currency: "$",
        billing: "monthly",
        features: [
          "Full cloud infrastructure suite",
          "Custom AI models",
          "Unlimited integrations",
          "Advanced compliance",
          "24/7 dedicated support",
          "Custom development",
          "White-label options"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Cloud organizations", "Multi-national companies"],
        popular: true
      }
    ],
    marketAnalysis: {
      averagePrice: "$20,000-30,000/month",
      priceRange: "$15,000-50,000/month",
      competitors: ["AWS", "Azure", "Google Cloud"],
      roi: "900% within 15 months",
      setupTime: "10-12 weeks",
      marketSize: "$35.2 billion by 2030",
      growthRate: "21.4% annually"
    },
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/cloud-infrastructure-devops-2030",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
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
  };
};