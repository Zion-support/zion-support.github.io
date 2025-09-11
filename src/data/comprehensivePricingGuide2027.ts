// Comprehensive Pricing Guide 2027 - Zion Tech Group
// Complete pricing information for all innovative micro SAAS services

export interface PricingTier {
  name: string;
  price: number;
  billingCycle: string;
  features: string[];
  limitations: string[];
  recommendedFor: string[];
  savings?: string;
  popular?: boolean;
}

export interface ServicePricing {
  serviceId: number;
  serviceName: string;
  category: string;
  description: string;
  pricingTiers: PricingTier[];
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  freeTier: boolean;
  trialPeriod: string;
  contactInfo: ServiceContact;
}

export interface ServiceContact {
  phone: string;
  email: string;
  website: string;
  address: string;
}

// Zion Tech Group Contact Information
const zionContact: ServiceContact = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

export const COMPREHENSIVE_PRICING_GUIDE_2027: ServicePricing[] = [
  {
    serviceId: 1,
    serviceName: "AI-Powered Legal Document Analyzer",
    category: "Legal Technology",
    description: "Advanced AI platform that analyzes legal documents, contracts, and agreements to identify risks, compliance issues, and optimization opportunities",
    pricingTiers: [
      {
        name: "Starter",
        price: 99,
        billingCycle: "monthly",
        features: [
          "Document analysis (up to 50/month)",
          "Basic risk assessment",
          "Compliance checking",
          "Email support",
          "Standard integrations"
        ],
        limitations: [
          "Limited document types",
          "Basic reporting",
          "No collaboration tools"
        ],
        recommendedFor: ["Small law firms", "Individual lawyers", "Startups"]
      },
      {
        name: "Professional",
        price: 299,
        billingCycle: "monthly",
        features: [
          "Document analysis (unlimited)",
          "Advanced risk assessment",
          "Compliance monitoring",
          "Contract optimization",
          "Collaboration tools",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "No custom AI training",
          "Limited API access"
        ],
        recommendedFor: ["Medium law firms", "Corporate legal departments", "Growing businesses"],
        popular: true
      },
      {
        name: "Enterprise",
        price: 599,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Custom AI training",
          "Full API access",
          "White-label options",
          "Dedicated support",
          "Custom integrations",
          "Advanced analytics"
        ],
        limitations: [],
        recommendedFor: ["Large law firms", "Enterprise legal teams", "Government agencies"],
        savings: "Save 20% with annual billing"
      }
    ],
    marketPrice: "$500-800/month",
    competitors: ["DocuSign", "ContractPodAi", "Evisort"],
    roi: "300-500% within 6 months",
    setupTime: "2-3 business days",
    freeTier: true,
    trialPeriod: "14 days",
    contactInfo: zionContact
  },
  {
    serviceId: 2,
    serviceName: "AI Supply Chain Optimization Platform",
    category: "Supply Chain Management",
    description: "Intelligent supply chain platform that uses AI to predict demand, optimize inventory, reduce costs, and improve supplier relationships",
    pricingTiers: [
      {
        name: "Basic",
        price: 199,
        billingCycle: "monthly",
        features: [
          "Demand forecasting",
          "Basic inventory optimization",
          "Supplier analytics",
          "Email support",
          "Standard reports"
        ],
        limitations: [
          "Up to 1000 SKUs",
          "Basic integrations",
          "Limited customization"
        ],
        recommendedFor: ["Small retailers", "Startup e-commerce", "Local businesses"]
      },
      {
        name: "Professional",
        price: 599,
        billingCycle: "monthly",
        features: [
          "Everything in Basic",
          "Advanced inventory optimization",
          "Real-time tracking",
          "Risk assessment",
          "Sustainability metrics",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "Up to 10,000 SKUs",
          "No custom AI models"
        ],
        recommendedFor: ["Medium retailers", "Manufacturing companies", "Distribution centers"],
        popular: true
      },
      {
        name: "Enterprise",
        price: 1299,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited SKUs",
          "Custom AI models",
          "Full API access",
          "White-label options",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        recommendedFor: ["Large retailers", "Global manufacturers", "Logistics providers"],
        savings: "Save 25% with annual billing"
      }
    ],
    marketPrice: "$800-1200/month",
    competitors: ["SAP", "Oracle", "Blue Yonder"],
    roi: "400-600% within 8 months",
    setupTime: "1-2 weeks",
    freeTier: false,
    trialPeriod: "30 days",
    contactInfo: zionContact
  },
  {
    serviceId: 3,
    serviceName: "AI Healthcare Analytics Platform",
    category: "Healthcare Technology",
    description: "Comprehensive healthcare analytics platform that provides insights into patient outcomes, operational efficiency, and predictive healthcare",
    pricingTiers: [
      {
        name: "Practice",
        price: 199,
        billingCycle: "monthly",
        features: [
          "Patient analytics (up to 1000 patients)",
          "Basic reporting",
          "Performance metrics",
          "Email support",
          "Standard integrations"
        ],
        limitations: [
          "Limited analytics depth",
          "Basic dashboards",
          "No custom reports"
        ],
        recommendedFor: ["Small medical practices", "Dental offices", "Specialty clinics"]
      },
      {
        name: "Professional",
        price: 399,
        billingCycle: "monthly",
        features: [
          "Everything in Practice",
          "Advanced patient analytics",
          "Operational insights",
          "Resource optimization",
          "Custom dashboards",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "Up to 10,000 patients",
          "No custom AI models"
        ],
        recommendedFor: ["Medium practices", "Medical groups", "Urgent care centers"],
        popular: true
      },
      {
        name: "Enterprise",
        price: 899,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited patients",
          "Custom AI models",
          "Predictive analytics",
          "Full API access",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        recommendedFor: ["Large hospitals", "Healthcare networks", "Medical systems"],
        savings: "Save 20% with annual billing"
      }
    ],
    marketPrice: "$600-900/month",
    competitors: ["Epic", "Cerner", "Allscripts"],
    roi: "250-400% within 12 months",
    setupTime: "2-4 weeks",
    freeTier: true,
    trialPeriod: "21 days",
    contactInfo: zionContact
  },
  {
    serviceId: 4,
    serviceName: "AI Financial Trading Assistant",
    category: "Financial Technology",
    description: "Intelligent trading assistant that analyzes market data, identifies opportunities, and provides real-time trading recommendations",
    pricingTiers: [
      {
        name: "Individual",
        price: 99,
        billingCycle: "monthly",
        features: [
          "Market analysis",
          "Basic trading signals",
          "Portfolio tracking",
          "Email alerts",
          "Mobile app access"
        ],
        limitations: [
          "Up to 5 portfolios",
          "Basic analytics",
          "Limited market data"
        ],
        recommendedFor: ["Individual traders", "Retail investors", "Hobby traders"]
      },
      {
        name: "Professional",
        price: 199,
        billingCycle: "monthly",
        features: [
          "Everything in Individual",
          "Advanced analytics",
          "Real-time alerts",
          "Risk assessment",
          "Strategy backtesting",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "Up to 20 portfolios",
          "No custom strategies"
        ],
        recommendedFor: ["Active traders", "Investment advisors", "Small funds"],
        popular: true
      },
      {
        name: "Institutional",
        price: 499,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited portfolios",
          "Custom strategies",
          "Full API access",
          "White-label options",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        recommendedFor: ["Hedge funds", "Investment firms", "Financial institutions"],
        savings: "Save 30% with annual billing"
      }
    ],
    marketPrice: "$300-500/month",
    competitors: ["Bloomberg", "Reuters", "TradingView"],
    roi: "200-350% within 6 months",
    setupTime: "1-2 business days",
    freeTier: true,
    trialPeriod: "7 days",
    contactInfo: zionContact
  },
  {
    serviceId: 5,
    serviceName: "AI Content Creation Studio",
    category: "Content Marketing",
    description: "Comprehensive content creation platform that generates high-quality articles, social media posts, and marketing materials using AI",
    pricingTiers: [
      {
        name: "Creator",
        price: 79,
        billingCycle: "monthly",
        features: [
          "AI content generation (up to 100 pieces/month)",
          "Basic templates",
          "SEO optimization",
          "Email support",
          "Standard integrations"
        ],
        limitations: [
          "Limited content types",
          "Basic customization",
          "No team collaboration"
        ],
        recommendedFor: ["Bloggers", "Content creators", "Small businesses"]
      },
      {
        name: "Professional",
        price: 149,
        billingCycle: "monthly",
        features: [
          "Everything in Creator",
          "Unlimited content generation",
          "Advanced templates",
          "Brand voice consistency",
          "Team collaboration",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "Up to 10 team members",
          "No custom AI training"
        ],
        recommendedFor: ["Marketing agencies", "Content teams", "Growing businesses"],
        popular: true
      },
      {
        name: "Enterprise",
        price: 299,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom AI training",
          "White-label options",
          "Full API access",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        recommendedFor: ["Large agencies", "Enterprise marketing", "Publishing companies"],
        savings: "Save 25% with annual billing"
      }
    ],
    marketPrice: "$200-400/month",
    competitors: ["Jasper", "Copy.ai", "Writesonic"],
    roi: "300-500% within 4 months",
    setupTime: "1 business day",
    freeTier: true,
    trialPeriod: "14 days",
    contactInfo: zionContact
  },
  {
    serviceId: 6,
    serviceName: "AI Customer Support Automation",
    category: "Customer Service",
    description: "Intelligent customer support platform that automates responses, routes inquiries, and provides 24/7 customer assistance",
    pricingTiers: [
      {
        name: "Starter",
        price: 149,
        billingCycle: "monthly",
        features: [
          "Chatbot automation",
          "Basic ticket routing",
          "Knowledge base (up to 100 articles)",
          "Email support",
          "Standard integrations"
        ],
        limitations: [
          "Up to 1000 conversations/month",
          "Basic customization",
          "Limited analytics"
        ],
        recommendedFor: ["Small businesses", "Startups", "E-commerce stores"]
      },
      {
        name: "Professional",
        price: 249,
        billingCycle: "monthly",
        features: [
          "Everything in Starter",
          "Advanced automation",
          "Unlimited conversations",
          "Customer sentiment analysis",
          "Multi-channel support",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "Up to 50 agents",
          "No custom workflows"
        ],
        recommendedFor: ["Medium businesses", "SaaS companies", "Service providers"],
        popular: true
      },
      {
        name: "Enterprise",
        price: 499,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited agents",
          "Custom workflows",
          "Full API access",
          "White-label options",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        recommendedFor: ["Large businesses", "Enterprise companies", "Global brands"],
        savings: "Save 20% with annual billing"
      }
    ],
    marketPrice: "$400-700/month",
    competitors: ["Zendesk", "Intercom", "Freshdesk"],
    roi: "250-400% within 6 months",
    setupTime: "1-2 weeks",
    freeTier: true,
    trialPeriod: "21 days",
    contactInfo: zionContact
  },
  {
    serviceId: 7,
    serviceName: "AI Project Management Platform",
    category: "Project Management",
    description: "Intelligent project management platform that uses AI to optimize workflows, predict delays, and improve team collaboration",
    pricingTiers: [
      {
        name: "Team",
        price: 99,
        billingCycle: "monthly",
        features: [
          "AI-powered scheduling",
          "Basic project tracking",
          "Team collaboration (up to 10 users)",
          "Email support",
          "Standard integrations"
        ],
        limitations: [
          "Basic reporting",
          "Limited customization",
          "No advanced analytics"
        ],
        recommendedFor: ["Small teams", "Startups", "Freelancers"]
      },
      {
        name: "Professional",
        price: 179,
        billingCycle: "monthly",
        features: [
          "Everything in Team",
          "Advanced analytics",
          "Risk prediction",
          "Resource optimization",
          "Unlimited users",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "No custom AI models",
          "Limited API access"
        ],
        recommendedFor: ["Medium teams", "Agencies", "Growing companies"],
        popular: true
      },
      {
        name: "Enterprise",
        price: 399,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Custom AI models",
          "Full API access",
          "White-label options",
          "Advanced security",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        recommendedFor: ["Large teams", "Enterprise companies", "Government agencies"],
        savings: "Save 25% with annual billing"
      }
    ],
    marketPrice: "$250-450/month",
    competitors: ["Asana", "Monday.com", "ClickUp"],
    roi: "200-350% within 8 months",
    setupTime: "1-2 weeks",
    freeTier: true,
    trialPeriod: "14 days",
    contactInfo: zionContact
  },
  {
    serviceId: 8,
    serviceName: "AI Cybersecurity Platform",
    category: "Cybersecurity",
    description: "Advanced cybersecurity platform that uses AI to detect threats, prevent attacks, and provide real-time security monitoring",
    pricingTiers: [
      {
        name: "Business",
        price: 299,
        billingCycle: "monthly",
        features: [
          "Threat detection",
          "Basic behavioral analysis",
          "Incident response",
          "Email support",
          "Standard integrations"
        ],
        limitations: [
          "Up to 100 endpoints",
          "Basic reporting",
          "Limited customization"
        ],
        recommendedFor: ["Small businesses", "Startups", "Local companies"]
      },
      {
        name: "Professional",
        price: 499,
        billingCycle: "monthly",
        features: [
          "Everything in Business",
          "Advanced behavioral analysis",
          "Vulnerability assessment",
          "Compliance monitoring",
          "Advanced analytics",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "Up to 1000 endpoints",
          "No custom AI models"
        ],
        recommendedFor: ["Medium businesses", "Financial institutions", "Healthcare organizations"],
        popular: true
      },
      {
        name: "Enterprise",
        price: 999,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited endpoints",
          "Custom AI models",
          "Full API access",
          "White-label options",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        recommendedFor: ["Large enterprises", "Government agencies", "Global corporations"],
        savings: "Save 30% with annual billing"
      }
    ],
    marketPrice: "$800-1500/month",
    competitors: ["CrowdStrike", "SentinelOne", "Darktrace"],
    roi: "400-600% within 12 months",
    setupTime: "2-4 weeks",
    freeTier: false,
    trialPeriod: "30 days",
    contactInfo: zionContact
  },
  {
    serviceId: 9,
    serviceName: "AI Workflow Orchestrator",
    category: "Business Process Automation",
    description: "Intelligent workflow automation platform that orchestrates complex business processes and eliminates manual tasks",
    pricingTiers: [
      {
        name: "Starter",
        price: 199,
        billingCycle: "monthly",
        features: [
          "Basic workflow automation",
          "Pre-built templates",
          "Standard integrations",
          "Email support",
          "Basic reporting"
        ],
        limitations: [
          "Up to 10 workflows",
          "Limited customization",
          "Basic integrations"
        ],
        recommendedFor: ["Small businesses", "Startups", "Individual users"]
      },
      {
        name: "Professional",
        price: 329,
        billingCycle: "monthly",
        features: [
          "Everything in Starter",
          "Advanced automation",
          "Custom workflows",
          "Performance monitoring",
          "Advanced integrations",
          "Priority support",
          "Custom dashboards"
        ],
        limitations: [
          "Up to 100 workflows",
          "No custom AI models"
        ],
        recommendedFor: ["Medium businesses", "Operations teams", "Growing companies"],
        popular: true
      },
      {
        name: "Enterprise",
        price: 699,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited workflows",
          "Custom AI models",
          "Full API access",
          "White-label options",
          "Advanced security",
          "Dedicated support"
        ],
        limitations: [],
        recommendedFor: ["Large enterprises", "Global operations", "Complex organizations"],
        savings: "Save 25% with annual billing"
      }
    ],
    marketPrice: "$500-800/month",
    competitors: ["UiPath", "Automation Anywhere", "Blue Prism"],
    roi: "300-500% within 10 months",
    setupTime: "2-3 weeks",
    freeTier: true,
    trialPeriod: "21 days",
    contactInfo: zionContact
  },
  {
    serviceId: 10,
    serviceName: "AI Predictive Maintenance Platform",
    category: "Industrial IoT",
    description: "Intelligent predictive maintenance platform that monitors equipment health and predicts failures before they occur",
    pricingTiers: [
      {
        name: "Industrial",
        price: 299,
        billingCycle: "monthly",
        features: [
          "Equipment monitoring (up to 50 devices)",
          "Basic failure prediction",
          "Maintenance scheduling",
          "Email support",
          "Standard integrations"
        ],
        limitations: [
          "Basic analytics",
          "Limited customization",
          "No custom models"
        ],
        recommendedFor: ["Small manufacturers", "Local facilities", "Startup operations"]
      },
      {
        name: "Professional",
        price: 449,
        billingCycle: "monthly",
        features: [
          "Everything in Industrial",
          "Advanced analytics",
          "Custom alerts",
          "Performance optimization",
          "Advanced integrations",
          "Priority support",
          "Custom dashboards"
        ],
        limitations: [
          "Up to 500 devices",
          "No custom AI training"
        ],
        recommendedFor: ["Medium manufacturers", "Industrial facilities", "Growing operations"],
        popular: true
      },
      {
        name: "Enterprise",
        price: 899,
        billingCycle: "monthly",
        features: [
          "Everything in Professional",
          "Unlimited devices",
          "Custom AI training",
          "Full API access",
          "White-label options",
          "Advanced security",
          "Dedicated support"
        ],
        limitations: [],
        recommendedFor: ["Large manufacturers", "Global facilities", "Complex operations"],
        savings: "Save 30% with annual billing"
      }
    ],
    marketPrice: "$700-1200/month",
    competitors: ["GE Digital", "Siemens", "ABB"],
    roi: "350-550% within 12 months",
    setupTime: "3-4 weeks",
    freeTier: false,
    trialPeriod: "30 days",
    contactInfo: zionContact
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2027;
