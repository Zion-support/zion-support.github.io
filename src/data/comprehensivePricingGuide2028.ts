export interface PricingTier2028 {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  description: string;
  features: string[];
  bestFor: string[];
  includedServices: string[];
  addOns: {
    name: string;
    price: number;
    description: string;
  }[];
  savings?: string;
  popular?: boolean;
}

export interface ServiceCategory2028 {
  id: string;
  name: string;
  description: string;
  services: {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    currency: string;
    pricingModel: string;
    features: string[];
    marketPrice: string;
    roi: string;
    estimatedDelivery: string;
  }[];
}

export const COMPREHENSIVE_PRICING_2028 = {
  // Micro SAAS Solutions Pricing
  microSaas: {
    starter: {
      id: "micro-saas-starter-2028",
      name: "Starter",
      price: 999,
      currency: "$",
      billingCycle: "monthly",
      description: "Perfect for startups and small businesses looking to launch their first micro SAAS solution",
      features: [
        "Basic AI-powered features",
        "Up to 1,000 users",
        "Standard integrations",
        "Email support",
        "Basic analytics",
        "Mobile responsive design",
        "SSL security",
        "Basic API access"
      ],
      bestFor: [
        "Startups",
        "Small businesses",
        "Individual entrepreneurs",
        "MVP development"
      ],
      includedServices: [
        "Initial consultation",
        "Basic setup & configuration",
        "Training session",
        "30 days support"
      ],
      addOns: [
        {
          name: "Advanced Analytics",
          price: 299,
          description: "Enhanced reporting and insights"
        },
        {
          name: "Custom Integrations",
          price: 499,
          description: "Additional third-party integrations"
        },
        {
          name: "Priority Support",
          price: 199,
          description: "24/7 priority support access"
        }
      ]
    },
    professional: {
      id: "micro-saas-professional-2028",
      name: "Professional",
      price: 2499,
      currency: "$",
      billingCycle: "monthly",
      description: "Advanced micro SAAS solution with enterprise-grade features and scalability",
      features: [
        "Advanced AI capabilities",
        "Up to 10,000 users",
        "Advanced integrations",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Advanced security",
        "Full API access",
        "White-label options",
        "Custom workflows"
      ],
      bestFor: [
        "Growing businesses",
        "Medium enterprises",
        "Professional services",
        "E-commerce platforms"
      ],
      includedServices: [
        "Comprehensive consultation",
        "Advanced setup & configuration",
        "Custom training program",
        "90 days premium support",
        "Performance optimization"
      ],
      addOns: [
        {
          name: "Enterprise Security",
          price: 799,
          description: "Advanced security features and compliance"
        },
        {
          name: "Custom Development",
          price: 999,
          description: "Custom feature development"
        },
        {
          name: "Dedicated Support",
          price: 599,
          description: "Dedicated support representative"
        }
      ],
      popular: true
    },
    enterprise: {
      id: "micro-saas-enterprise-2028",
      name: "Enterprise",
      price: 5999,
      currency: "$",
      billingCycle: "monthly",
      description: "Full-featured enterprise micro SAAS solution with unlimited scalability and customization",
      features: [
        "Enterprise AI capabilities",
        "Unlimited users",
        "Enterprise integrations",
        "24/7 dedicated support",
        "Enterprise analytics",
        "Full customization",
        "Enterprise security",
        "Advanced API access",
        "Multi-tenant architecture",
        "Custom development"
      ],
      bestFor: [
        "Large enterprises",
        "Multi-national companies",
        "Government agencies",
        "Healthcare organizations"
      ],
      includedServices: [
        "Enterprise consultation",
        "Full setup & configuration",
        "Comprehensive training",
        "Lifetime premium support",
        "Performance optimization",
        "Custom development",
        "Dedicated account manager"
      ],
      addOns: [
        {
          name: "On-Premise Deployment",
          price: 2999,
          description: "Private cloud or on-premise deployment"
        },
        {
          name: "Custom AI Models",
          price: 1999,
          description: "Custom AI model development"
        },
        {
          name: "Global Deployment",
          price: 1499,
          description: "Multi-region deployment and compliance"
        }
      ]
    }
  },

  // AI Services Pricing
  aiServices: {
    basic: {
      id: "ai-services-basic-2028",
      name: "Basic AI",
      price: 1899,
      currency: "$",
      billingCycle: "monthly",
      description: "Essential AI services for businesses starting their AI journey",
      features: [
        "AI content generation",
        "Basic chatbot functionality",
        "Simple data analysis",
        "Standard AI models",
        "Basic integrations",
        "Email support",
        "Monthly reports"
      ],
      bestFor: [
        "Small businesses",
        "Content creators",
        "Marketing teams",
        "Customer support"
      ],
      includedServices: [
        "AI consultation",
        "Basic setup",
        "Training session",
        "30 days support"
      ],
      addOns: [
        {
          name: "Advanced AI Models",
          price: 599,
          description: "Access to premium AI models"
        },
        {
          name: "Custom Training",
          price: 899,
          description: "Custom AI model training"
        }
      ]
    },
    advanced: {
      id: "ai-services-advanced-2028",
      name: "Advanced AI",
      price: 4299,
      currency: "$",
      billingCycle: "monthly",
      description: "Comprehensive AI services with advanced capabilities and customization",
      features: [
        "Advanced AI models",
        "Custom AI development",
        "Machine learning",
        "Predictive analytics",
        "Advanced integrations",
        "Priority support",
        "Custom reporting",
        "API access"
      ],
      bestFor: [
        "Medium enterprises",
        "Technology companies",
        "Data-driven organizations",
        "Innovation teams"
      ],
      includedServices: [
        "Advanced AI consultation",
        "Custom development",
        "Comprehensive training",
        "90 days premium support"
      ],
      addOns: [
        {
          name: "Custom AI Platform",
          price: 1999,
          description: "Custom AI platform development"
        },
        {
          name: "AI Strategy Consulting",
          price: 1499,
          description: "Strategic AI roadmap planning"
        }
      ],
      popular: true
    },
    enterprise: {
      id: "ai-services-enterprise-2028",
      name: "Enterprise AI",
      price: 8999,
      currency: "$",
      billingCycle: "monthly",
      description: "Full-scale enterprise AI services with unlimited capabilities and dedicated support",
      features: [
        "Enterprise AI platform",
        "Custom AI development",
        "Advanced ML models",
        "Real-time analytics",
        "Enterprise integrations",
        "24/7 dedicated support",
        "Custom solutions",
        "Full API access"
      ],
      bestFor: [
        "Large enterprises",
        "Fortune 500 companies",
        "Government agencies",
        "Research institutions"
      ],
      includedServices: [
        "Enterprise AI strategy",
        "Custom development",
        "Comprehensive training",
        "Lifetime support",
        "Dedicated team"
      ],
      addOns: [
        {
          name: "AI Research & Development",
          price: 3999,
          description: "Custom AI research and development"
        },
        {
          name: "AI Ethics & Compliance",
          price: 2499,
          description: "AI ethics and compliance framework"
        }
      ]
    }
  },

  // IT Services Pricing
  itServices: {
    managed: {
      id: "it-services-managed-2028",
      name: "Managed IT",
      price: 2799,
      currency: "$",
      billingCycle: "monthly",
      description: "Comprehensive managed IT services for businesses of all sizes",
      features: [
        "24/7 monitoring",
        "Proactive maintenance",
        "Help desk support",
        "Security management",
        "Backup & recovery",
        "Performance optimization",
        "Software updates",
        "Vendor management"
      ],
      bestFor: [
        "Small to medium businesses",
        "Branch offices",
        "Professional services",
        "Growing organizations"
      ],
      includedServices: [
        "IT assessment",
        "Setup & configuration",
        "Staff training",
        "Ongoing support"
      ],
      addOns: [
        {
          name: "Advanced Security",
          price: 799,
          description: "Enhanced security features"
        },
        {
          name: "Cloud Migration",
          price: 1499,
          description: "Cloud migration services"
        }
      ]
    },
    consulting: {
      id: "it-services-consulting-2028",
      name: "IT Consulting",
      price: 3999,
      currency: "$",
      billingCycle: "monthly",
      description: "Strategic IT consulting services for digital transformation and optimization",
      features: [
        "Technology assessment",
        "Strategic planning",
        "Digital transformation",
        "Process optimization",
        "Change management",
        "Performance monitoring",
        "ROI measurement",
        "Strategic planning"
      ],
      bestFor: [
        "Enterprises",
        "Technology companies",
        "Government agencies",
        "Healthcare organizations"
      ],
      includedServices: [
        "Strategic consultation",
        "Technology roadmap",
        "Implementation planning",
        "Ongoing guidance"
      ],
      addOns: [
        {
          name: "Project Management",
          price: 1999,
          description: "Full project management services"
        },
        {
          name: "Custom Development",
          price: 2999,
          description: "Custom software development"
        }
      ],
      popular: true
    },
    enterprise: {
      id: "it-services-enterprise-2028",
      name: "Enterprise IT",
      price: 7999,
      currency: "$",
      billingCycle: "monthly",
      description: "Full-scale enterprise IT services with dedicated teams and custom solutions",
      features: [
        "Enterprise architecture",
        "Custom solutions",
        "Dedicated teams",
        "24/7 support",
        "Advanced security",
        "Global deployment",
        "Compliance management",
        "Strategic partnership"
      ],
      bestFor: [
        "Large enterprises",
        "Multi-national companies",
        "Government agencies",
        "Healthcare systems"
      ],
      includedServices: [
        "Enterprise strategy",
        "Custom development",
        "Dedicated support",
        "Strategic partnership"
      ],
      addOns: [
        {
          name: "Global Deployment",
          price: 3999,
          description: "Multi-region deployment"
        },
        {
          name: "Custom Security",
          price: 2999,
          description: "Custom security solutions"
        }
      ]
    }
  }
};

// Service Categories with Detailed Pricing
export const SERVICE_CATEGORIES_2028: ServiceCategory2028[] = [
  {
    id: "ai-business-intelligence",
    name: "AI Business Intelligence",
    description: "Advanced AI-powered business intelligence and analytics solutions",
    services: [
      {
        id: "ai-bi-basic",
        name: "AI BI Basic",
        description: "Essential AI-powered business intelligence",
        basePrice: 2499,
        currency: "$",
        pricingModel: "monthly",
        features: [
          "Basic AI analytics",
          "Standard dashboards",
          "Data integration",
          "Basic reporting",
          "Email support"
        ],
        marketPrice: "$2,499 - $5,999/month",
        roi: "300-500%",
        estimatedDelivery: "4-6 weeks"
      },
      {
        id: "ai-bi-advanced",
        name: "AI BI Advanced",
        description: "Advanced AI business intelligence with predictive analytics",
        basePrice: 4999,
        currency: "$",
        pricingModel: "monthly",
        features: [
          "Advanced AI analytics",
          "Predictive modeling",
          "Custom dashboards",
          "Advanced reporting",
          "Priority support"
        ],
        marketPrice: "$4,999 - $12,999/month",
        roi: "400-700%",
        estimatedDelivery: "6-8 weeks"
      },
      {
        id: "ai-bi-enterprise",
        name: "AI BI Enterprise",
        description: "Enterprise-grade AI business intelligence platform",
        basePrice: 8999,
        currency: "$",
        pricingModel: "monthly",
        features: [
          "Enterprise AI analytics",
          "Custom AI models",
          "Real-time analytics",
          "Advanced security",
          "24/7 support"
        ],
        marketPrice: "$8,999 - $25,000/month",
        roi: "500-800%",
        estimatedDelivery: "8-12 weeks"
      }
    ]
  },
  {
    id: "quantum-computing",
    name: "Quantum Computing",
    description: "Revolutionary quantum computing solutions for complex problems",
    services: [
      {
        id: "quantum-basic",
        name: "Quantum Basic",
        description: "Access to quantum computing resources",
        basePrice: 5999,
        currency: "$",
        pricingModel: "monthly",
        features: [
          "Quantum algorithm access",
          "Basic quantum simulation",
          "Standard support",
          "Documentation",
          "Community access"
        ],
        marketPrice: "$5,999 - $15,000/month",
        roi: "400-600%",
        estimatedDelivery: "6-8 weeks"
      },
      {
        id: "quantum-advanced",
        name: "Quantum Advanced",
        description: "Advanced quantum computing with custom algorithms",
        basePrice: 12999,
        currency: "$",
        pricingModel: "monthly",
        features: [
          "Custom quantum algorithms",
          "Advanced simulation",
          "Priority access",
          "Custom development",
          "Dedicated support"
        ],
        marketPrice: "$12,999 - $35,000/month",
        roi: "500-800%",
        estimatedDelivery: "8-12 weeks"
      }
    ]
  },
  {
    id: "blockchain-web3",
    name: "Blockchain & Web3",
    description: "Comprehensive blockchain and Web3 development solutions",
    services: [
      {
        id: "blockchain-basic",
        name: "Blockchain Basic",
        description: "Basic blockchain development and deployment",
        basePrice: 2999,
        currency: "$",
        pricingModel: "monthly",
        features: [
          "Smart contract development",
          "Basic blockchain setup",
          "Standard security",
          "Documentation",
          "Email support"
        ],
        marketPrice: "$2,999 - $7,999/month",
        roi: "300-500%",
        estimatedDelivery: "6-8 weeks"
      },
      {
        id: "blockchain-advanced",
        name: "Blockchain Advanced",
        description: "Advanced blockchain solutions with custom development",
        basePrice: 5999,
        currency: "$",
        pricingModel: "monthly",
        features: [
          "Custom blockchain development",
          "Advanced security",
          "Multi-chain support",
          "Custom integrations",
          "Priority support"
        ],
        marketPrice: "$5,999 - $18,000/month",
        roi: "400-700%",
        estimatedDelivery: "8-12 weeks"
      }
    ]
  }
];

// Contact Information
export const CONTACT_INFO_2028 = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 emergency support available for enterprise clients"
};

// Payment Options
export const PAYMENT_OPTIONS_2028 = [
  "Credit Card (Visa, MasterCard, American Express)",
  "Bank Transfer",
  "Wire Transfer",
  "Cryptocurrency (Bitcoin, Ethereum)",
  "Monthly/Annual subscriptions",
  "Custom payment plans available"
];

// Guarantees & Policies
export const GUARANTEES_2028 = {
  satisfaction: "100% satisfaction guarantee - 30-day money-back guarantee",
  quality: "Enterprise-grade quality assurance",
  support: "Comprehensive support and maintenance",
  security: "Bank-level security and compliance",
  uptime: "99.9% uptime guarantee for all services"
};

export default COMPREHENSIVE_PRICING_2028;