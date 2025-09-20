import { ProductListing } from "@/types/listings";
export interface PricingTier {
  id: string,name: string,price: number,currency: string,billing: string,description: string,features: string[[],
  ]
  popular?: boolean;
  recommended?: boolean;
  savings?: string;
  setupFee?: number;
  contractLength?: string
}

export interface ServicePricing {
  serviceId: string,serviceName: string,category: string,description: string,pricingTiers: PricingTier[],marketComparison: {
  averagePrice: string,competitors: string[],valueProposition: string
}
  roi: {
  timeframe: string,percentage: string,savings: string
}
  features: {
  core: string[],advanced: string[],enterprise: string[[],
  ],
  }
  integrations: string[],support: {
  responseTime: string,channels: string[],sla: string
},
  }

export const COMPREHENSIVE_PRICING_GUIDE_2025: ServicePricing[] = [
  {
  serviceId: "ai-revenue-optimization-platform",serviceName: "AI Revenue Optimization Platform",category: "AI & Business Intelligence",description: "Intelligent revenue optimization platform that analyzes customer behavior, pricing strategies, and market trends to maximize profitability.";
    pricingTiers: [
  {
  id: "starter",name: "Starter",price: 999,currency: "$",billing: "monthly",description: "Perfect for small businesses starting their revenue optimization journey",features: [
  "Basic revenue analytics";
          "Customer behavior insights";
          "Pricing recommendations";
          "Email support";
          "Monthly reports";
          "Up to 1,000 customers"
]
        setupFee: 0,contractLength: "Month-to-month"
},
  {
  id: "professional",name: "Professional",price: 2999,currency: "$",billing: "monthly",description: "Ideal for growing businesses with advanced revenue optimization needs",features: [
  "Advanced revenue analytics";
          "Predictive modeling";
          "A/B testing tools";
          "Priority support";
          "Weekly reports";
          "Up to 10,000 customers";
          "Custom integrations";
          "ROI tracking"
]
        popular: true,recommended: true,setupFee: 500,contractLength: "12 months"
},
  {
  id: "enterprise",name: "Enterprise",price: 7999,currency: "$",billing: "monthly",description: "Comprehensive solution for large enterprises with complex revenue streams",features: [
  "Full revenue optimization suite";
          "AI-powered insights";
          "Advanced reporting";
          "24/7 dedicated support";
          "Custom development";
          "Unlimited customers";
          "White-label options";
          "API access";
          "SLA guarantees"
]
        setupFee: 2000,contractLength: "24 months"
},
  ]
    marketComparison: {
  averagePrice: "$2,500-8,000/month";
      competitors: ["Gainsight", "ProfitWell", "ChartMogul"]
      valueProposition: "40% better ROI than competitors with AI-powered insights and faster implementation"
}
    roi: {
  timeframe: "4 months",percentage: "400%",savings: "$50,000+ annually"
}
    features: {
  core: [
  "Revenue analytics dashboard";
        "Customer segmentation";
        "Pricing optimization";
        "Performance tracking"
]
      advanced: [
  "Predictive analytics";
        "Machine learning models";
        "Custom reporting";
        "Integration APIs"
]
      enterprise: [
  "White-label solutions";
        "Custom algorithms";
        "Dedicated support team";
        "SLA guarantees"
],
  }
    integrations: ["Salesforce", "HubSpot", "QuickBooks", "NetSuite", "AWS", "Google Analytics"]
    support: {
  responseTime: "2 hours",channels: ["Email", "Phone", "Chat", "Video"]
      sla: "99.9% uptime"
},
  },
  {
  serviceId: "ai-customer-journey-orchestrator",serviceName: "AI Customer Journey Orchestrator",category: "AI & Customer Support",description: "Intelligent customer journey mapping and orchestration platform that personalizes experiences across all touchpoints.",pricingTiers: [
  {
  id: "starter",name: "Starter",price: 1499,currency: "$",billing: "monthly",description: "Basic customer journey orchestration for small teams",features: [
  "Journey mapping tools";
          "Basic personalization";
          "Email automation";
          "Standard support";
          "Up to 5,000 contacts"
]
        setupFee: 0,contractLength: "Month-to-month"
},
  {
  id: "professional",name: "Professional",price: 3999,currency: "$",billing: "monthly",description: "Advanced journey orchestration with AI-powered insights",features: [
  "AI-powered journey optimization";
          "Advanced personalization";
          "Multi-channel orchestration";
          "Priority support";
          "Up to 50,000 contacts";
          "Custom workflows";
          "A/B testing"
]
        popular: true,recommended: true,setupFee: 750,contractLength: "12 months"
},
  {
  id: "enterprise",name: "Enterprise",price: 9999,currency: "$",billing: "monthly",description: "Full-scale customer journey orchestration for enterprise organizations",features: [
  "Enterprise journey orchestration";
          "Custom AI models";
          "Advanced analytics";
          "24/7 dedicated support";
          "Unlimited contacts";
          "White-label options";
          "Custom integrations";
          "SLA guarantees"
]
        setupFee: 3000,contractLength: "24 months"
},
  ]
    marketComparison: {
  averagePrice: "$3,000-12,000/month";
      competitors: ["Segment", "Amplitude", "Mixpanel"]
      valueProposition: "30% better customer engagement with AI-powered journey optimization"
}
    roi: {
  timeframe: "5 months",percentage: "350%",savings: "$75,000+ annually"
}
    features: {
  core: [
  "Customer journey mapping";
        "Personalization engine";
        "Automation workflows";
        "Basic analytics"
]
      advanced: [
  "AI-powered optimization";
        "Predictive analytics";
        "Multi-channel orchestration";
        "Advanced reporting"
]
      enterprise: [
  "Custom AI models";
        "White-label solutions";
        "Enterprise integrations";
        "Dedicated support"
],
  }
    integrations: ["Intercom", "Zendesk", "HubSpot", "Salesforce", "Shopify", "WooCommerce", "Google Analytics"]
    support: {
  responseTime: "4 hours",channels: ["Email", "Phone", "Chat", "Video"]
      sla: "99.8% uptime"
},
  },
  {
  serviceId: "ai-marketing-attribution-engine",serviceName: "AI Marketing Attribution Engine",category: "AI & Marketing",description: "Advanced marketing attribution platform that uses machine learning to accurately track and attribute conversions across all marketing channels.",pricingTiers: [
  {
  id: "starter",name: "Starter",price: 799,currency: "$",billing: "monthly",description: "Basic attribution tracking for small marketing teams",features: [
  "Multi-touch attribution";
          "Basic reporting";
          "Standard support";
          "Up to 3 marketing channels";
          "Monthly data updates"
]
        setupFee: 0,contractLength: "Month-to-month"
},
  {
  id: "professional",name: "Professional",price: 2499,currency: "$",billing: "monthly",description: "Advanced attribution with AI-powered insights and unlimited channels",features: [
  "AI-powered attribution";
          "Unlimited marketing channels";
          "Advanced reporting";
          "Priority support";
          "Real-time data";
          "Custom dashboards";
          "ROI optimization"
]
        popular: true,recommended: true,setupFee: 500,contractLength: "12 months"
},
  {
  id: "enterprise",name: "Enterprise",price: 5999,currency: "$",billing: "monthly",description: "Enterprise-grade attribution with custom models and dedicated support",features: [
  "Custom attribution models";
          "Advanced AI algorithms";
          "Enterprise reporting";
          "24/7 dedicated support";
          "Custom integrations";
          "White-label options";
          "SLA guarantees"
]
        setupFee: 1500,contractLength: "24 months"
},
  ]
    marketComparison: {
  averagePrice: "$2,000-6,000/month";
      competitors: ["AppsFlyer", "Branch", "Adjust"]
      valueProposition: "25% more accurate attribution with AI-powered machine learning models"
}
    roi: {
  timeframe: "3 months",percentage: "300%",savings: "$40,000+ annually"
}
    features: {
  core: [
  "Multi-touch attribution";
        "Channel performance tracking";
        "Basic reporting";
        "Data integration"
]
      advanced: [
  "AI-powered attribution";
        "Advanced analytics";
        "Custom dashboards";
        "ROI optimization"
]
      enterprise: [
  "Custom models";
        "White-label solutions";
        "Enterprise integrations";
        "Dedicated support"
],
  }
    integrations: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "TikTok Ads", "Google Analytics", "HubSpot", "Salesforce"]
    support: {
  responseTime: "6 hours",channels: ["Email", "Phone", "Chat"]
      sla: "99.7% uptime"
},
  },
  {
  serviceId: "ai-content-performance-optimizer",serviceName: "AI Content Performance Optimizer",category: "AI & Content",description: "Intelligent content optimization platform that analyzes content performance and automatically suggests improvements for better engagement, SEO, and conversion rates.";
    pricingTiers: [
  {
  id: "starter",name: "Starter",price: 499,currency: "$",billing: "monthly",description: "Basic content optimization for small content teams",features: [
  "Content performance analysis";
          "Basic SEO suggestions";
          "Standard support";
          "Up to 100 content pieces";
          "Monthly reports"
]
        setupFee: 0,contractLength: "Month-to-month"
},
  {
  id: "professional",name: "Professional",price: 1999,currency: "$",billing: "monthly",description: "Advanced content optimization with AI-powered insights and unlimited content",features: [
  "AI-powered optimization";
          "Unlimited content pieces";
          "Advanced SEO analysis";
          "Priority support";
          "Real-time optimization";
          "Custom reports";
          "A/B testing tools"
]
        popular: true,recommended: true,setupFee: 300,contractLength: "12 months"
},
  {
  id: "enterprise",name: "Enterprise",price: 4999,currency: "$",billing: "monthly",description: "Enterprise-grade content optimization with custom AI models and dedicated support",features: [
  "Custom AI models";
          "Advanced analytics";
          "Enterprise reporting";
          "24/7 dedicated support";
          "Custom integrations";
          "White-label options";
          "SLA guarantees"
]
        setupFee: 1000,contractLength: "24 months"
},
  ]
    marketComparison: {
  averagePrice: "$1,500-4,500/month";
      competitors: ["Clearscope", "Frase", "MarketMuse"]
      valueProposition: "35% better content performance with AI-powered optimization"
}
    roi: {
  timeframe: "2 months",percentage: "250%",savings: "$30,000+ annually"
}
    features: {
  core: [
  "Content performance tracking";
        "Basic SEO analysis";
        "Performance reports";
        "Content suggestions"
]
      advanced: [
  "AI-powered optimization";
        "Advanced analytics";
        "Custom reports";
        "A/B testing"
]
      enterprise: [
  "Custom AI models";
        "White-label solutions";
        "Enterprise integrations";
        "Dedicated support"
],
  }
    integrations: ["WordPress", "Shopify", "HubSpot", "Mailchimp", "Google Analytics", "SEMrush", "Ahrefs"]
    support: {
  responseTime: "8 hours",channels: ["Email", "Chat", "Video"]
      sla: "99.5% uptime"
},
  },
  {
  serviceId: "ai-talent-acquisition-platform",serviceName: "AI Talent Acquisition Platform",category: "AI & HR",description: "Intelligent recruitment platform that uses AI to source, screen, and match candidates with job requirements. Automates the hiring process and improves candidate quality.";
    pricingTiers: [
  {
  id: "starter",name: "Starter",price: 1199,currency: "$",billing: "monthly",description: "Basic AI recruitment for small HR teams",features: [
  "AI candidate screening";
          "Basic matching algorithms";
          "Standard support";
          "Up to 50 job postings";
          "Monthly reports"
]
        setupFee: 0,contractLength: "Month-to-month"
},
  {
  id: "professional",name: "Professional",price: 3499,currency: "$",billing: "monthly",description: "Advanced AI recruitment with comprehensive automation and unlimited job postings",features: [
  "Advanced AI screening";
          "Unlimited job postings";
          "Automated workflows";
          "Priority support";
          "Advanced analytics";
          "Custom integrations";
          "ROI tracking"
]
        popular: true,recommended: true,setupFee: 750,contractLength: "12 months"
},
  {
  id: "enterprise",name: "Enterprise",price: 8999,currency: "$",billing: "monthly",description: "Enterprise-grade AI recruitment with custom models and dedicated support",features: [
  "Custom AI models";
          "Advanced automation";
          "Enterprise analytics";
          "24/7 dedicated support";
          "Custom development";
          "White-label options";
          "SLA guarantees"
]
        setupFee: 2000,contractLength: "24 months"
},
  ]
    marketComparison: {
  averagePrice: "$2,800-8,000/month";
      competitors: ["HireVue", "Pymetrics", "HiredScore"]
      valueProposition: "50% faster hiring with 40% better candidate quality using AI"
}
    roi: {
  timeframe: "4 months",percentage: "400%",savings: "$100,000+ annually"
}
    features: {
  core: [
  "AI candidate screening";
        "Job matching algorithms";
        "Basic analytics";
        "Standard workflows"
]
      advanced: [
  "Advanced AI models";
        "Automated workflows";
        "Advanced analytics";
        "Custom integrations"
]
      enterprise: [
  "Custom AI models";
        "White-label solutions";
        "Enterprise integrations";
        "Dedicated support"
],
  }
    integrations: ["Workday", "BambooHR", "Greenhouse", "Lever", "LinkedIn", "Indeed", "ZipRecruiter"]
    support: {
  responseTime: "4 hours",channels: ["Email", "Phone", "Chat", "Video"]
      sla: "99.8% uptime"
},
  },
  {
  serviceId: "ai-financial-fraud-detection",serviceName: "AI Financial Fraud Detection",category: "FinTech",description: "Advanced fraud detection platform that uses machine learning to identify and prevent financial fraud in real-time. Provides comprehensive risk assessment and automated fraud prevention.",pricingTiers: [
  {
  id: "starter",name: "Starter",price: 1999,currency: "$",billing: "monthly",description: "Basic fraud detection for small financial institutions",features: [
  "Real-time fraud detection";
          "Basic risk assessment";
          "Standard support";
          "Up to 10,000 transactions/month";
          "Monthly reports"
]
        setupFee: 0,contractLength: "Month-to-month"
},
  {
  id: "professional",name: "Professional",price: 5999,currency: "$",billing: "monthly",description: "Advanced fraud detection with comprehensive risk management and unlimited transactions",features: [
  "Advanced AI detection";
          "Unlimited transactions";
          "Comprehensive risk assessment";
          "Priority support";
          "Advanced analytics";
          "Custom rules engine";
          "ROI tracking"
]
        popular: true,recommended: true,setupFee: 1500,contractLength: "12 months"
},
  {
  id: "enterprise",name: "Enterprise",price: 14999,currency: "$",billing: "monthly",description: "Enterprise-grade fraud detection with custom models and dedicated support",features: [
  "Custom AI models";
          "Advanced risk management";
          "Enterprise analytics";
          "24/7 dedicated support";
          "Custom development";
          "White-label options";
          "SLA guarantees"
]
        setupFee: 5000,contractLength: "24 months"
},
  ]
    marketComparison: {
  averagePrice: "$4,500-15,000/month";
      competitors: ["Sift", "Signifyd", "Forter"]
      valueProposition: "99.9% fraud detection accuracy with 80% fewer false positives"
}
    roi: {
  timeframe: "6 months",percentage: "500%",savings: "$500,000+ annually"
}
    features: {
  core: [
  "Real-time fraud detection";
        "Risk assessment";
        "Basic reporting";
        "Standard integrations"
]
      advanced: [
  "Advanced AI models";
        "Custom rules engine";
        "Advanced analytics";
        "Custom integrations"
]
      enterprise: [
  "Custom AI models";
        "White-label solutions";
        "Enterprise integrations";
        "Dedicated support"
],
  }
    integrations: ["Stripe", "PayPal", "Square", "Adyen", "Shopify", "WooCommerce", "Magento"]
    support: {
  responseTime: "2 hours",channels: ["Email", "Phone", "Chat", "Video"]
      sla: "99.99% uptime"
},
  },
  ]
export default COMPREHENSIVE_PRICING_GUIDE_2025;