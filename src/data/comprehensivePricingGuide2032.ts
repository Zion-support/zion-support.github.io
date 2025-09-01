export interface PricingTier2032 {

  id: string;
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  description: string;
  features: string[];
  limitations: string[];
  bestFor: string;
  popular?: boolean;
  savings?: string;
}

export interface ServicePricing2032 {

  serviceId: string;
  serviceName: string;
  category: string;
  basePrice: number;
  currency: string;
  pricingModel: string;
  tiers: PricingTier2032[];
  enterprisePricing: {

    custom: boolean;
    startingPrice: number;
    contactRequired: boolean;
    features: string[];
  };
  addOns: {

    name: string;
    price: number;
    description: string;
  }[];
  volumeDiscounts: {

    users: number;
    discount: number;
  }[];
  annualDiscount: number;
  freeTrial: boolean;
  trialDuration: string;
  moneyBackGuarantee: boolean;
  guaranteeDuration: string;
  sla: string;
  supportLevels: {

    level: string;
    responseTime: string;
    features: string[];
  }[];
}

export const COMPREHENSIVE_PRICING_GUIDE_2032: ServicePricing2032[] = [
  // 1. AI Legal Document Analyzer
  {

    serviceId: "ai-legal-document-analyzer",
    serviceName: "Zion AI Legal Document Analyzer",
    category: "AI & Legal Tech",
    basePrice: 599,
    currency: "$",
    pricingModel: "Tiered Subscription",
    tiers: [
      {

        id: "starter",
        name: "Starter",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        description: "Perfect for small law firms and solo practitioners",
        features: [
          "Up to 100 documents per month",
          "Basic contract analysis",
          "Standard compliance checking",
          "Email support",
          "Basic API access (100 calls/month)",
          "Standard security features"
        ],
        limitations: [
          "Limited to 3 user accounts",
          "Basic reporting only",
          "No custom templates",
          "Standard response time (24 hours)"
        ],
        bestFor: "Small law firms, solo practitioners, startups"
      },
      {

        id: "professional",
        name: "Professional",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        description: "Ideal for growing law firms and corporate legal departments",
        features: [
          "Up to 500 documents per month",
          "Advanced contract analysis",
          "Comprehensive compliance checking",
          "Priority support",
          "Full API access (1000 calls/month)",
          "Advanced security features",
          "Custom legal templates",
          "Advanced reporting and analytics",
          "Up to 10 user accounts",
          "Integration with legal management systems"
        ],
        limitations: [
          "No unlimited document processing",
          "Standard SLA (99.9% uptime)",
          "Limited custom development"
        ],
        bestFor: "Growing law firms, corporate legal departments, legal consultants",
        popular: true,
        savings: "Save 20% with annual billing"
      },
      {

        id: "enterprise",
        name: "Enterprise",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        description: "For large law firms and multinational corporations",
        features: [
          "Unlimited document processing",
          "AI-powered risk assessment",
          "Advanced compliance monitoring",
          "24/7 dedicated support",
          "Unlimited API access",
          "Enterprise-grade security",
          "Custom legal workflows",
          "Advanced analytics and insights",
          "Unlimited user accounts",
          "Full integration capabilities",
          "Custom development support",
          "Dedicated account manager"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 12-month commitment"
        ],
        bestFor: "Large law firms, multinational corporations, government agencies"
      }
    ],
    enterprisePricing: {

      custom: true,
      startingPrice: 5000,
      contactRequired: true,
      features: [
        "Custom AI model training",
        "On-premise deployment",
        "Custom integrations",
        "Dedicated infrastructure",
        "Custom SLA requirements",
        "White-label solutions",
        "Custom compliance frameworks"
      ]
    },
    addOns: [
      {

        name: "Additional API Calls",
        price: 0.01,
        description: "Per additional API call beyond plan limit"
      },
      {

        name: "Custom Model Training",
        price: 2500,
        description: "One-time fee for custom AI model training"
      },
      {

        name: "Priority Support Upgrade",
        price: 299,
        description: "Monthly upgrade to 24/7 priority support"
      }
    ],
    volumeDiscounts: [
      { users: 10, discount: 10 },
      { users: 25, discount: 20 },
      { users: 50, discount: 30 },
      { users: 100, discount: 40 }
    ],
    annualDiscount: 20,
    freeTrial: true,
    trialDuration: "14 days",
    moneyBackGuarantee: true,
    guaranteeDuration: "30 days",
    sla: "99.9% uptime guarantee",
    supportLevels: [
      {

        level: "Email Support",
        responseTime: "24 hours",
        features: ["Email support", "Knowledge base access", "Community forum"]
      },
      {

        level: "Priority Support",
        responseTime: "4 hours",
        features: ["Priority email support", "Phone support", "Live chat", "Dedicated support team"]
      },
      {

        level: "Enterprise Support",
        responseTime: "1 hour",
        features: ["24/7 phone support", "Dedicated account manager", "Custom SLA", "On-site support available"]
      }
    ]
  },

  // 2. Quantum-Secure Communication Platform
  {

    serviceId: "quantum-secure-communication",
    serviceName: "Zion Quantum-Secure Communication Platform",
    category: "Cybersecurity",
    basePrice: 1299,
    currency: "$",
    pricingModel: "Tiered Subscription",
    tiers: [
      {

        id: "starter",
        name: "Starter",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        description: "For small organizations requiring quantum-level security",
        features: [
          "Up to 50 users",
          "Basic QKD implementation",
          "Post-quantum cryptography",
          "Standard encryption protocols",
          "Email support",
          "Basic API access",
          "Standard security features"
        ],
        limitations: [
          "Limited to 5 concurrent connections",
          "Basic reporting only",
          "No custom protocols",
          "Standard response time (12 hours)"
        ],
        bestFor: "Small government agencies, research institutions, security-conscious startups"
      },
      {

        id: "professional",
        name: "Professional",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        description: "For organizations requiring enterprise-grade quantum security",
        features: [
          "Up to 200 users",
          "Advanced QKD implementation",
          "Multiple post-quantum algorithms",
          "Advanced encryption protocols",
          "Priority support",
          "Full API access",
          "Advanced security features",
          "Custom security protocols",
          "Advanced reporting and analytics",
          "Integration with enterprise systems"
        ],
        limitations: [
          "No unlimited users",
          "Standard SLA (99.99% uptime)",
          "Limited custom development"
        ],
        bestFor: "Government agencies, financial institutions, defense contractors",
        popular: true,
        savings: "Save 25% with annual billing"
      },
      {

        id: "enterprise",
        name: "Enterprise",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        description: "For large organizations requiring maximum quantum security",
        features: [
          "Unlimited users",
          "Full QKD implementation",
          "All post-quantum algorithms",
          "Custom encryption protocols",
          "24/7 dedicated support",
          "Unlimited API access",
          "Maximum security features",
          "Custom security frameworks",
          "Advanced analytics and insights",
          "Full integration capabilities",
          "Custom development support",
          "Dedicated security team"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 12-month commitment"
        ],
        bestFor: "Large government agencies, multinational corporations, critical infrastructure operators"
      }
    ],
    enterprisePricing: {

      custom: true,
      startingPrice: 15000,
      contactRequired: true,
      features: [
        "Custom quantum protocols",
        "On-premise deployment",
        "Custom security frameworks",
        "Dedicated infrastructure",
        "Custom SLA requirements",
        "White-label solutions",
        "Custom compliance frameworks"
      ]
    },
    addOns: [
      {

        name: "Additional Users",
        price: 25,
        description: "Per additional user beyond plan limit"
      },
      {

        name: "Custom Protocol Development",
        price: 5000,
        description: "One-time fee for custom quantum protocol development"
      },
      {

        name: "On-Site Security Audit",
        price: 2500,
        description: "One-time fee for on-site security audit and assessment"
      }
    ],
    volumeDiscounts: [
      { users: 50, discount: 15 },
      { users: 100, discount: 25 },
      { users: 250, discount: 35 },
      { users: 500, discount: 45 }
    ],
    annualDiscount: 25,
    freeTrial: false,
    trialDuration: "N/A",
    moneyBackGuarantee: true,
    guaranteeDuration: "30 days",
    sla: "99.99% uptime guarantee",
    supportLevels: [
      {

        level: "Email Support",
        responseTime: "12 hours",
        features: ["Email support", "Knowledge base access", "Security documentation"]
      },
      {

        level: "Priority Support",
        responseTime: "2 hours",
        features: ["Priority email support", "Phone support", "Live chat", "Dedicated security team"]
      },
      {

        level: "Enterprise Support",
        responseTime: "30 minutes",
        features: ["24/7 phone support", "Dedicated account manager", "Custom SLA", "On-site support available"]
      }
    ]
  },

  // 3. AI Healthcare Predictive Analytics
  {

    serviceId: "ai-healthcare-predictive-analytics",
    serviceName: "Zion AI Healthcare Predictive Analytics Platform",
    category: "AI & Healthcare",
    basePrice: 899,
    currency: "$",
    pricingModel: "Tiered Subscription",
    tiers: [
      {

        id: "starter",
        name: "Starter",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        description: "For small healthcare practices and clinics",
        features: [
          "Up to 1000 patients",
          "Basic predictive analytics",
          "Standard health monitoring",
          "Basic reporting",
          "Email support",
          "Basic API access",
          "Standard security features"
        ],
        limitations: [
          "Limited to 5 user accounts",
          "Basic analytics only",
          "No custom models",
          "Standard response time (24 hours)"
        ],
        bestFor: "Small healthcare practices, clinics, individual practitioners"
      },
      {

        id: "professional",
        name: "Professional",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        description: "For growing healthcare organizations and hospitals",
        features: [
          "Up to 10000 patients",
          "Advanced predictive analytics",
          "Comprehensive health monitoring",
          "Advanced reporting and analytics",
          "Priority support",
          "Full API access",
          "Advanced security features",
          "Custom health models",
          "Integration with EHR systems",
          "Up to 25 user accounts"
        ],
        limitations: [
          "No unlimited patients",
          "Standard SLA (99.9% uptime)",
          "Limited custom development"
        ],
        bestFor: "Growing healthcare organizations, hospitals, health systems",
        popular: true,
        savings: "Save 20% with annual billing"
      },
      {

        id: "enterprise",
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        description: "For large healthcare organizations and research institutions",
        features: [
          "Unlimited patients",
          "AI-powered predictive analytics",
          "Comprehensive health monitoring",
          "Advanced analytics and insights",
          "24/7 dedicated support",
          "Unlimited API access",
          "Maximum security features",
          "Custom AI models",
          "Full integration capabilities",
          "Unlimited user accounts",
          "Custom development support",
          "Dedicated healthcare team"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 12-month commitment"
        ],
        bestFor: "Large healthcare organizations, research institutions, government health agencies"
      }
    ],
    enterprisePricing: {

      custom: true,
      startingPrice: 8000,
      contactRequired: true,
      features: [
        "Custom AI model development",
        "On-premise deployment",
        "Custom healthcare workflows",
        "Dedicated infrastructure",
        "Custom SLA requirements",
        "White-label solutions",
        "Custom compliance frameworks"
      ]
    },
    addOns: [
      {

        name: "Additional Patients",
        price: 0.10,
        description: "Per additional patient beyond plan limit"
      },
      {

        name: "Custom Model Development",
        price: 3000,
        description: "One-time fee for custom AI model development"
      },
      {

        name: "Compliance Consulting",
        price: 1500,
        description: "Monthly fee for compliance consulting and support"
      }
    ],
    volumeDiscounts: [
      { users: 10, discount: 10 },
      { users: 25, discount: 20 },
      { users: 50, discount: 30 },
      { users: 100, discount: 40 }
    ],
    annualDiscount: 20,
    freeTrial: true,
    trialDuration: "30 days",
    moneyBackGuarantee: true,
    guaranteeDuration: "30 days",
    sla: "99.9% uptime guarantee",
    supportLevels: [
      {

        level: "Email Support",
        responseTime: "24 hours",
        features: ["Email support", "Knowledge base access", "Healthcare documentation"]
      },
      {

        level: "Priority Support",
        responseTime: "4 hours",
        features: ["Priority email support", "Phone support", "Live chat", "Dedicated healthcare team"]
      },
      {

        level: "Enterprise Support",
        responseTime: "1 hour",
        features: ["24/7 phone support", "Dedicated account manager", "Custom SLA", "On-site support available"]
      }
    ]
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2032;