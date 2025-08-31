import { ProductListing } from "@/types/listings";

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
  serviceId: string;
  serviceTitle: string;
  category: string;
  subcategory: string;
  description: string;
  pricingTiers: PricingTier[];
  marketPrice: string;
  roi: string;
  setupTime: string;
  aiScore: number;
  rating: number;
  reviewCount: number;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  competitors: string[];
  integrations: string[];
  useCases: string[];
  targetAudience: string[];
  benefits: string[];
  tags: string[];
}

export const COMPREHENSIVE_PRICING_GUIDE_2025: ServicePricing[] = [
  // AI Business Intelligence Platform
  {
    serviceId: "ai-business-intelligence-platform",
    serviceTitle: "AI Business Intelligence & Analytics Platform",
    category: "AI Development",
    subcategory: "Business Intelligence",
    description: "Next-generation BI platform powered by AI that provides real-time insights, predictive analytics, and automated reporting for data-driven decision making.",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 12999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Basic AI-powered analytics",
          "Up to 5 data sources",
          "Standard reporting templates",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small businesses starting with AI analytics"
      },
      {
        id: "professional",
        name: "Professional",
        price: 18999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Advanced AI algorithms",
          "Up to 20 data sources",
          "Custom dashboards",
          "Priority support",
          "Advanced integrations",
          "Real-time monitoring"
        ],
        bestFor: "Growing businesses needing advanced analytics",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 29999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Full AI suite with custom models",
          "Unlimited data sources",
          "Custom AI training",
          "24/7 dedicated support",
          "Full API access",
          "White-label solutions",
          "Advanced security features"
        ],
        bestFor: "Large enterprises requiring custom AI solutions"
      }
    ],
    marketPrice: "$12,000-20,000",
    roi: "450% within 8 months",
    setupTime: "6-8 weeks",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 234,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-business-intelligence",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    competitors: ["Tableau", "Power BI", "Qlik"],
    integrations: ["Salesforce", "HubSpot", "MySQL", "PostgreSQL", "MongoDB", "AWS", "Azure"],
    useCases: ["Business intelligence", "Data analytics", "Performance monitoring", "Strategic planning"],
    targetAudience: ["Data analysts", "Business leaders", "Consultants", "Enterprise organizations"],
    benefits: [
      "Real-time business insights",
      "Predictive analytics capabilities",
      "Automated reporting",
      "Data-driven decision making",
      "Cost optimization",
      "Competitive advantage"
    ],
    tags: ["AI BI", "Predictive Analytics", "Real-time Insights", "Automated Reporting", "Data Visualization"]
  },

  // AI Customer Experience Platform
  {
    serviceId: "ai-customer-experience-platform",
    serviceTitle: "AI Customer Experience & Personalization Platform",
    category: "AI Development",
    subcategory: "Customer Experience",
    description: "Comprehensive CX platform that uses AI to deliver personalized experiences, predict customer behavior, and optimize customer journeys across all touchpoints.",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 15999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Basic AI personalization",
          "Up to 3 customer touchpoints",
          "Standard customer analytics",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small businesses starting with AI CX"
      },
      {
        id: "professional",
        name: "Professional",
        price: 22999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Advanced AI personalization",
          "Up to 10 customer touchpoints",
          "Customer journey mapping",
          "Priority support",
          "Advanced integrations",
          "Behavioral analytics"
        ],
        bestFor: "Growing businesses needing advanced CX",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 34999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Full AI CX suite with custom models",
          "Unlimited touchpoints",
          "Custom AI training",
          "24/7 dedicated support",
          "Full API access",
          "White-label solutions",
          "Advanced security features"
        ],
        bestFor: "Large enterprises requiring custom CX solutions"
      }
    ],
    marketPrice: "$15,000-25,000",
    roi: "380% within 10 months",
    setupTime: "8-10 weeks",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 189,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-customer-experience",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    competitors: ["Adobe Experience Cloud", "Salesforce Marketing Cloud", "HubSpot"],
    integrations: ["CRM Systems", "Marketing Automation", "E-commerce Platforms", "Social Media", "Analytics Tools"],
    useCases: ["Customer personalization", "Journey optimization", "Behavior prediction", "CX improvement"],
    targetAudience: ["Marketing teams", "Customer success", "E-commerce businesses", "Service companies"],
    benefits: [
      "Personalized customer experiences",
      "Improved customer satisfaction",
      "Increased conversion rates",
      "Better customer retention",
      "Data-driven CX decisions",
      "Competitive advantage"
    ],
    tags: ["Customer Experience", "AI Personalization", "Behavior Prediction", "Journey Optimization", "Omnichannel"]
  },

  // AI Financial Technology Platform
  {
    serviceId: "ai-fintech-platform",
    serviceTitle: "AI-Powered Financial Technology Platform",
    category: "AI Development",
    subcategory: "Financial Technology",
    description: "Advanced fintech platform featuring AI-driven risk assessment, fraud detection, automated trading, and personalized financial advisory services.",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 24999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Basic AI risk assessment",
          "Fraud detection",
          "Up to 3 financial products",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small financial institutions starting with AI"
      },
      {
        id: "professional",
        name: "Professional",
        price: 34999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Advanced AI risk assessment",
          "Advanced fraud detection",
          "Up to 10 financial products",
          "Priority support",
          "Advanced integrations",
          "Automated trading"
        ],
        bestFor: "Growing financial institutions needing advanced AI",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 49999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Full AI fintech suite with custom models",
          "Unlimited financial products",
          "Custom AI training",
          "24/7 dedicated support",
          "Full API access",
          "White-label solutions",
          "Advanced security features"
        ],
        bestFor: "Large financial institutions requiring custom AI solutions"
      }
    ],
    marketPrice: "$24,000-40,000",
    roi: "600% within 18 months",
    setupTime: "12-16 weeks",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 156,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-fintech-platform",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    competitors: ["Plaid", "Stripe", "Square"],
    integrations: ["Banking APIs", "Trading Platforms", "Payment Gateways", "Regulatory Systems", "Analytics Tools"],
    useCases: ["Risk assessment", "Fraud detection", "Automated trading", "Financial advisory"],
    targetAudience: ["Banks", "Credit unions", "Investment firms", "Fintech startups"],
    benefits: [
      "Improved risk management",
      "Enhanced fraud prevention",
      "Automated trading capabilities",
      "Personalized financial advice",
      "Regulatory compliance",
      "Cost reduction"
    ],
    tags: ["Fintech", "AI Trading", "Risk Assessment", "Fraud Detection", "Financial Advisory"]
  },

  // AI Healthcare Analytics Platform
  {
    serviceId: "ai-healthcare-analytics-platform",
    serviceTitle: "AI Healthcare Analytics & Predictive Medicine Platform",
    category: "AI Development",
    subcategory: "Healthcare",
    description: "Comprehensive healthcare analytics platform using AI for disease prediction, treatment optimization, patient monitoring, and healthcare resource management.",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 29999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Basic AI disease prediction",
          "Patient monitoring",
          "Up to 3 medical specialties",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small healthcare facilities starting with AI"
      },
      {
        id: "professional",
        name: "Professional",
        price: 39999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Advanced AI disease prediction",
          "Advanced patient monitoring",
          "Up to 10 medical specialties",
          "Priority support",
          "Advanced integrations",
          "Treatment optimization"
        ],
        bestFor: "Growing healthcare facilities needing advanced AI",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 59999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Full AI healthcare suite with custom models",
          "Unlimited medical specialties",
          "Custom AI training",
          "24/7 dedicated support",
          "Full API access",
          "White-label solutions",
          "Advanced security features"
        ],
        bestFor: "Large healthcare systems requiring custom AI solutions"
      }
    ],
    marketPrice: "$28,000-50,000",
    roi: "700% within 24 months",
    setupTime: "16-20 weeks",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 98,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-healthcare-analytics",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare"],
    integrations: ["EMR Systems", "Medical Devices", "Lab Systems", "Pharmacy Systems", "Insurance Platforms"],
    useCases: ["Disease prediction", "Treatment optimization", "Patient monitoring", "Resource management"],
    targetAudience: ["Hospitals", "Clinics", "Research institutions", "Pharmaceutical companies"],
    benefits: [
      "Improved diagnostic accuracy",
      "Better treatment outcomes",
      "Reduced healthcare costs",
      "Enhanced patient care",
      "Resource optimization",
      "Research acceleration"
    ],
    tags: ["Healthcare AI", "Predictive Medicine", "Patient Monitoring", "Treatment Optimization", "Medical Analytics"]
  },

  // AI Supply Chain Optimization
  {
    serviceId: "ai-supply-chain-optimization",
    serviceTitle: "AI Supply Chain Optimization & Predictive Logistics Platform",
    category: "AI Development",
    subcategory: "Supply Chain",
    description: "Intelligent supply chain platform using AI for demand forecasting, inventory optimization, route planning, and real-time supply chain visibility.",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 18999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Basic AI demand forecasting",
          "Inventory optimization",
          "Up to 3 warehouses",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small businesses starting with AI supply chain"
      },
      {
        id: "professional",
        name: "Professional",
        price: 25999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Advanced AI demand forecasting",
          "Advanced inventory optimization",
          "Up to 10 warehouses",
          "Priority support",
          "Advanced integrations",
          "Route planning"
        ],
        bestFor: "Growing businesses needing advanced supply chain AI",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 39999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Full AI supply chain suite with custom models",
          "Unlimited warehouses",
          "Custom AI training",
          "24/7 dedicated support",
          "Full API access",
          "White-label solutions",
          "Advanced security features"
        ],
        bestFor: "Large enterprises requiring custom supply chain AI solutions"
      }
    ],
    marketPrice: "$18,000-30,000",
    roi: "450% within 12 months",
    setupTime: "10-12 weeks",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 145,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-supply-chain",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    competitors: ["SAP Ariba", "Oracle SCM", "JDA Software"],
    integrations: ["ERP Systems", "WMS", "TMS", "Supplier Portals", "Analytics Platforms"],
    useCases: ["Demand forecasting", "Inventory optimization", "Route planning", "Supplier management"],
    targetAudience: ["Manufacturers", "Retailers", "Logistics companies", "E-commerce businesses"],
    benefits: [
      "Reduced inventory costs",
      "Improved demand forecasting",
      "Optimized logistics",
      "Better supplier relationships",
      "Increased efficiency",
      "Cost savings"
    ],
    tags: ["Supply Chain AI", "Demand Forecasting", "Inventory Optimization", "Route Planning", "Logistics"]
  },

  // AI Cybersecurity Platform
  {
    serviceId: "ai-cybersecurity-platform",
    serviceTitle: "AI-Powered Advanced Cybersecurity & Threat Intelligence Platform",
    category: "Cybersecurity",
    subcategory: "AI Security",
    description: "Next-generation cybersecurity platform featuring AI-driven threat detection, behavioral analysis, automated incident response, and zero-trust security architecture.",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 21999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Basic AI threat detection",
          "Behavioral analysis",
          "Up to 100 endpoints",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small businesses starting with AI cybersecurity"
      },
      {
        id: "professional",
        name: "Professional",
        price: 29999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Advanced AI threat detection",
          "Advanced behavioral analysis",
          "Up to 1000 endpoints",
          "Priority support",
          "Advanced integrations",
          "Automated incident response"
        ],
        bestFor: "Growing businesses needing advanced AI cybersecurity",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 44999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Full AI cybersecurity suite with custom models",
          "Unlimited endpoints",
          "Custom AI training",
          "24/7 dedicated support",
          "Full API access",
          "White-label solutions",
          "Advanced security features"
        ],
        bestFor: "Large enterprises requiring custom AI cybersecurity solutions"
      }
    ],
    marketPrice: "$20,000-35,000",
    roi: "500% within 14 months",
    setupTime: "12-16 weeks",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 178,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-cybersecurity",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    competitors: ["CrowdStrike", "SentinelOne", "Carbon Black"],
    integrations: ["SIEM Systems", "EDR Solutions", "Firewall Management", "Identity Management", "Cloud Security"],
    useCases: ["Threat detection", "Incident response", "Behavioral analysis", "Compliance"],
    targetAudience: ["Enterprise organizations", "Financial institutions", "Healthcare providers", "Government agencies"],
    benefits: [
      "Enhanced threat detection",
      "Faster incident response",
      "Reduced false positives",
      "Improved compliance",
      "Cost savings",
      "Peace of mind"
    ],
    tags: ["AI Cybersecurity", "Threat Intelligence", "Behavioral Analysis", "Zero Trust", "Incident Response"]
  },

  // AI Marketing Automation Platform
  {
    serviceId: "ai-marketing-automation-platform",
    serviceTitle: "AI Marketing Automation & Personalization Platform",
    category: "AI Development",
    subcategory: "Marketing",
    description: "Intelligent marketing automation platform using AI for customer segmentation, personalized campaigns, predictive analytics, and ROI optimization.",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 13999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Basic AI customer segmentation",
          "Personalized campaigns",
          "Up to 10,000 contacts",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small businesses starting with AI marketing"
      },
      {
        id: "professional",
        name: "Professional",
        price: 19999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Advanced AI customer segmentation",
          "Advanced personalized campaigns",
          "Up to 100,000 contacts",
          "Priority support",
          "Advanced integrations",
          "Predictive analytics"
        ],
        bestFor: "Growing businesses needing advanced AI marketing",
        popular: true
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 29999,
        currency: "$",
        billingCycle: "one-time",
        features: [
          "Full AI marketing suite with custom models",
          "Unlimited contacts",
          "Custom AI training",
          "24/7 dedicated support",
          "Full API access",
          "White-label solutions",
          "Advanced security features"
        ],
        bestFor: "Large enterprises requiring custom AI marketing solutions"
      }
    ],
    marketPrice: "$13,000-22,000",
    roi: "350% within 10 months",
    setupTime: "8-10 weeks",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 267,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-marketing-automation",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    competitors: ["HubSpot", "Marketo", "Pardot"],
    integrations: ["CRM Systems", "Email Platforms", "Social Media", "Analytics Tools", "E-commerce Platforms"],
    useCases: ["Customer segmentation", "Campaign personalization", "ROI optimization", "Lead generation"],
    targetAudience: ["Marketing teams", "Sales teams", "E-commerce businesses", "Agencies"],
    benefits: [
      "Improved customer engagement",
      "Higher conversion rates",
      "Better ROI tracking",
      "Automated workflows",
      "Personalized experiences",
      "Cost optimization"
    ],
    tags: ["Marketing AI", "Automation", "Personalization", "Customer Segmentation", "ROI Optimization"]
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2025;
