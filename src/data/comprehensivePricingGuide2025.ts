export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  description: string;
  features: string[];
  limitations: string[];
  bestFor: string[];
  roi: string;
  implementationTime: string;
  supportLevel: string;
}

export interface ServicePricing {
  serviceId: string;
  serviceName: string;
  category: string;
  description: string;
  pricingTiers: PricingTier[];
  marketComparison: {
    competitor: string;
    competitorPrice: string;
    ourPrice: string;
    savings: string;
  }[];
  volumeDiscounts: {
    users: string;
    discount: string;
    additionalBenefits: string[];
  }[];
  customEnterprise: {
    features: string[];
    benefits: string[];
    contactInfo: {
      phone: string;
      email: string;
      website: string;
    };
  };
}

export const COMPREHENSIVE_PRICING_GUIDE_2025: ServicePricing[] = [
  // AI Content Generation Platform
  {
    serviceId: "ai-content-generation-platform",
    serviceName: "AI Content Generation Platform",
    category: "AI & Content Creation",
    description: "Advanced AI-powered content creation platform for blogs, social media, and marketing campaigns",
    pricingTiers: [
      {
        name: "Starter",
        price: 99,
        currency: "$",
        billingCycle: "monthly",
        description: "Perfect for small businesses and content creators",
        features: [
          "Up to 50 content pieces per month",
          "Basic AI models (GPT-3.5)",
          "5 brand voice profiles",
          "Basic SEO optimization",
          "Email support",
          "Standard templates"
        ],
        limitations: [
          "Limited to 3 team members",
          "Basic analytics",
          "Standard response time"
        ],
        bestFor: [
          "Small businesses",
          "Content creators",
          "Startups",
          "Individual marketers"
        ],
        roi: "200-300%",
        implementationTime: "1-2 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 299,
        currency: "$",
        billingCycle: "monthly",
        description: "Ideal for growing businesses and marketing teams",
        features: [
          "Up to 200 content pieces per month",
          "Advanced AI models (GPT-4, Claude)",
          "Unlimited brand voice profiles",
          "Advanced SEO optimization",
          "Priority support",
          "Custom templates",
          "Team collaboration",
          "Advanced analytics",
          "API access"
        ],
        limitations: [
          "Limited to 10 team members",
          "Standard SLA"
        ],
        bestFor: [
          "Growing businesses",
          "Marketing agencies",
          "E-commerce companies",
          "Medium-sized teams"
        ],
        roi: "300-500%",
        implementationTime: "2-3 weeks",
        supportLevel: "Priority support + chat"
      },
      {
        name: "Enterprise",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        description: "For large organizations with advanced content needs",
        features: [
          "Unlimited content generation",
          "Premium AI models + custom training",
          "Advanced brand consistency",
          "Multi-language support (50+ languages)",
          "White-label options",
          "Dedicated account manager",
          "Custom integrations",
          "Advanced security features",
          "SLA guarantees"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 50 team members"
        ],
        bestFor: [
          "Large enterprises",
          "Global brands",
          "Publishing companies",
          "Multinational corporations"
        ],
        roi: "500-800%",
        implementationTime: "3-4 weeks",
        supportLevel: "24/7 dedicated support"
      }
    ],
    marketComparison: [
      {
        competitor: "Jasper",
        competitorPrice: "$39-125/month",
        ourPrice: "$99-999/month",
        savings: "Better value with advanced features"
      },
      {
        competitor: "Copy.ai",
        competitorPrice: "$49-99/month",
        ourPrice: "$99-999/month",
        savings: "Superior AI models and brand consistency"
      },
      {
        competitor: "Writesonic",
        competitorPrice: "$19-199/month",
        ourPrice: "$99-999/month",
        savings: "Enterprise-grade features and support"
      }
    ],
    volumeDiscounts: [
      {
        users: "10-25",
        discount: "15% off",
        additionalBenefits: ["Priority support", "Custom onboarding"]
      },
      {
        users: "26-50",
        discount: "25% off",
        additionalBenefits: ["Dedicated account manager", "Custom integrations"]
      },
      {
        users: "50+",
        discount: "35% off",
        additionalBenefits: ["White-label options", "Custom AI training"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom AI model training",
        "On-premise deployment",
        "Advanced security compliance",
        "Custom integrations",
        "Dedicated infrastructure",
        "White-label solutions"
      ],
      benefits: [
        "Maximum ROI potential",
        "Complete customization",
        "Highest security standards",
        "Exclusive features",
        "Strategic partnership"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-content-generation"
      }
    }
  },

  // AI Customer Service Automation
  {
    serviceId: "ai-customer-service-automation",
    serviceName: "AI Customer Service Automation",
    category: "AI & Customer Service",
    description: "Intelligent customer service automation with AI chatbots and automated support",
    pricingTiers: [
      {
        name: "Starter",
        price: 99,
        currency: "$",
        billingCycle: "monthly",
        description: "Basic automation for small support teams",
        features: [
          "Up to 1,000 conversations/month",
          "Basic AI chatbot",
          "Email and chat support",
          "Basic integrations",
          "Standard templates",
          "Email support"
        ],
        limitations: [
          "Limited to 3 support agents",
          "Basic analytics",
          "Standard response time"
        ],
        bestFor: [
          "Small businesses",
          "Startups",
          "Small support teams"
        ],
        roi: "250-400%",
        implementationTime: "2-3 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 199,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced automation for growing support teams",
        features: [
          "Up to 10,000 conversations/month",
          "Advanced AI with sentiment analysis",
          "Multi-channel support",
          "Advanced integrations",
          "Custom workflows",
          "Priority support",
          "Advanced analytics",
          "API access"
        ],
        limitations: [
          "Limited to 15 support agents",
          "Standard SLA"
        ],
        bestFor: [
          "Growing businesses",
          "Medium support teams",
          "E-commerce companies"
        ],
        roi: "400-600%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority support + chat"
      },
      {
        name: "Enterprise",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        description: "Full automation for large support operations",
        features: [
          "Unlimited conversations",
          "Premium AI with custom training",
          "Omnichannel support",
          "Advanced integrations",
          "Custom workflows",
          "Dedicated account manager",
          "Advanced analytics",
          "SLA guarantees",
          "White-label options"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 25 support agents"
        ],
        bestFor: [
          "Large enterprises",
          "Global support teams",
          "High-volume operations"
        ],
        roi: "600-1000%",
        implementationTime: "4-6 weeks",
        supportLevel: "24/7 dedicated support"
      }
    ],
    marketComparison: [
      {
        competitor: "Intercom",
        competitorPrice: "$74-1,200/month",
        ourPrice: "$99-799/month",
        savings: "More affordable with better AI capabilities"
      },
      {
        competitor: "Zendesk",
        competitorPrice: "$49-215/month",
        ourPrice: "$99-799/month",
        savings: "Superior AI automation and analytics"
      },
      {
        competitor: "Freshdesk",
        competitorPrice: "$15-79/month",
        ourPrice: "$99-799/month",
        savings: "Advanced AI features and enterprise support"
      }
    ],
    volumeDiscounts: [
      {
        users: "15-30",
        discount: "20% off",
        additionalBenefits: ["Priority support", "Custom onboarding"]
      },
      {
        users: "31-50",
        discount: "30% off",
        additionalBenefits: ["Dedicated account manager", "Custom integrations"]
      },
      {
        users: "50+",
        discount: "40% off",
        additionalBenefits: ["White-label options", "Custom AI training"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom AI training",
        "On-premise deployment",
        "Advanced security compliance",
        "Custom integrations",
        "Dedicated infrastructure",
        "White-label solutions"
      ],
      benefits: [
        "Maximum automation efficiency",
        "Complete customization",
        "Highest security standards",
        "Exclusive features",
        "Strategic partnership"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-customer-service"
      }
    }
  },

  // AI Sales Intelligence Platform
  {
    serviceId: "ai-sales-intelligence-platform",
    serviceName: "AI Sales Intelligence Platform",
    category: "AI & Sales",
    description: "Advanced sales intelligence with AI-powered insights and predictive analytics",
    pricingTiers: [
      {
        name: "Starter",
        price: 199,
        currency: "$",
        billingCycle: "monthly",
        description: "Basic sales intelligence for small sales teams",
        features: [
          "Up to 5 sales users",
          "Basic lead scoring",
          "Sales analytics",
          "CRM integrations",
          "Email support",
          "Standard reports"
        ],
        limitations: [
          "Limited analytics depth",
          "Basic predictive models",
          "Standard response time"
        ],
        bestFor: [
          "Small sales teams",
          "Startups",
          "Individual sales professionals"
        ],
        roi: "300-500%",
        implementationTime: "3-4 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 399,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced intelligence for growing sales organizations",
        features: [
          "Up to 25 sales users",
          "Advanced lead scoring",
          "Predictive analytics",
          "Competitor intelligence",
          "Priority support",
          "Advanced reports",
          "API access",
          "Custom dashboards"
        ],
        limitations: [
          "Limited to 25 users",
          "Standard SLA"
        ],
        bestFor: [
          "Growing sales teams",
          "Medium businesses",
          "B2B companies"
        ],
        roi: "500-800%",
        implementationTime: "4-5 weeks",
        supportLevel: "Priority support + chat"
      },
      {
        name: "Enterprise",
        price: 1299,
        currency: "$",
        billingCycle: "monthly",
        description: "Full intelligence platform for large sales organizations",
        features: [
          "Unlimited sales users",
          "Premium predictive models",
          "Advanced competitor intelligence",
          "Custom AI training",
          "Dedicated account manager",
          "Advanced analytics",
          "SLA guarantees",
          "White-label options"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 50 sales users"
        ],
        bestFor: [
          "Large sales organizations",
          "Enterprise companies",
          "Global sales teams"
        ],
        roi: "800-1200%",
        implementationTime: "5-6 weeks",
        supportLevel: "24/7 dedicated support"
      }
    ],
    marketComparison: [
      {
        competitor: "Gong",
        competitorPrice: "$1,200-1,800/month",
        ourPrice: "$199-1,299/month",
        savings: "Significantly more affordable with better features"
      },
      {
        competitor: "Chorus",
        competitorPrice: "$1,000-1,500/month",
        ourPrice: "$199-1,299/month",
        savings: "Better value with advanced AI capabilities"
      },
      {
        competitor: "SalesLoft",
        competitorPrice: "$50-1,000/month",
        ourPrice: "$199-1,299/month",
        savings: "Superior AI intelligence and analytics"
      }
    ],
    volumeDiscounts: [
      {
        users: "25-50",
        discount: "25% off",
        additionalBenefits: ["Priority support", "Custom onboarding"]
      },
      {
        users: "51-100",
        discount: "35% off",
        additionalBenefits: ["Dedicated account manager", "Custom integrations"]
      },
      {
        users: "100+",
        discount: "45% off",
        additionalBenefits: ["White-label options", "Custom AI training"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom AI training",
        "On-premise deployment",
        "Advanced security compliance",
        "Custom integrations",
        "Dedicated infrastructure",
        "White-label solutions"
      ],
      benefits: [
        "Maximum sales intelligence",
        "Complete customization",
        "Highest security standards",
        "Exclusive features",
        "Strategic partnership"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-sales-intelligence"
      }
    }
  },

  // AI Financial Analytics Platform
  {
    serviceId: "ai-financial-analytics-platform",
    serviceName: "AI Financial Analytics Platform",
    category: "AI & Finance",
    description: "Advanced financial analytics with AI-powered insights and portfolio optimization",
    pricingTiers: [
      {
        name: "Professional",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced analytics for financial professionals",
        features: [
          "Up to 10 users",
          "Advanced financial modeling",
          "Portfolio optimization",
          "Risk assessment",
          "Priority support",
          "Advanced reports",
          "API access",
          "Custom dashboards"
        ],
        limitations: [
          "Limited to 10 users",
          "Standard SLA",
          "Basic compliance features"
        ],
        bestFor: [
          "Financial advisors",
          "Small investment firms",
          "Family offices"
        ],
        roi: "600-1000%",
        implementationTime: "6-8 weeks",
        supportLevel: "Priority support + chat"
      },
      {
        name: "Enterprise",
        price: 2999,
        currency: "$",
        billingCycle: "monthly",
        description: "Full platform for large financial institutions",
        features: [
          "Unlimited users",
          "Premium AI models",
          "Advanced compliance",
          "Custom AI training",
          "Dedicated account manager",
          "Advanced analytics",
          "SLA guarantees",
          "White-label options"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 100 users"
        ],
        bestFor: [
          "Large investment firms",
          "Banks",
          "Hedge funds",
          "Institutional investors"
        ],
        roi: "1000-1500%",
        implementationTime: "8-12 weeks",
        supportLevel: "24/7 dedicated support"
      }
    ],
    marketComparison: [
      {
        competitor: "Bloomberg Terminal",
        competitorPrice: "$24,000/year",
        ourPrice: "$599-2,999/month",
        savings: "Significantly more affordable with better AI capabilities"
      },
      {
        competitor: "FactSet",
        competitorPrice: "$12,000-36,000/year",
        ourPrice: "$599-2,999/month",
        savings: "Better value with advanced AI analytics"
      },
      {
        competitor: "Refinitiv",
        competitorPrice: "$15,000-45,000/year",
        ourPrice: "$599-2,999/month",
        savings: "Superior AI features and affordability"
      }
    ],
    volumeDiscounts: [
      {
        users: "50-100",
        discount: "30% off",
        additionalBenefits: ["Priority support", "Custom onboarding"]
      },
      {
        users: "101-250",
        discount: "40% off",
        additionalBenefits: ["Dedicated account manager", "Custom integrations"]
      },
      {
        users: "250+",
        discount: "50% off",
        additionalBenefits: ["White-label options", "Custom AI training"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom AI training",
        "On-premise deployment",
        "Advanced security compliance",
        "Custom integrations",
        "Dedicated infrastructure",
        "White-label solutions"
      ],
      benefits: [
        "Maximum financial intelligence",
        "Complete customization",
        "Highest security standards",
        "Exclusive features",
        "Strategic partnership"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-financial-analytics"
      }
    }
  },

  // AI Healthcare Analytics Platform
  {
    serviceId: "ai-healthcare-analytics-platform",
    serviceName: "AI Healthcare Analytics Platform",
    category: "AI & Healthcare",
    description: "Advanced healthcare analytics with AI-powered patient insights and predictive modeling",
    pricingTiers: [
      {
        name: "Professional",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced analytics for healthcare organizations",
        features: [
          "Up to 25 users",
          "Advanced patient analytics",
          "Predictive modeling",
          "HIPAA compliance",
          "Priority support",
          "Advanced reports",
          "API access",
          "Custom dashboards"
        ],
        limitations: [
          "Limited to 25 users",
          "Standard SLA",
          "Basic compliance features"
        ],
        bestFor: [
          "Hospitals",
          "Clinics",
          "Healthcare systems"
        ],
        roi: "400-700%",
        implementationTime: "8-10 weeks",
        supportLevel: "Priority support + chat"
      },
      {
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        description: "Full platform for large healthcare organizations",
        features: [
          "Unlimited users",
          "Premium AI models",
          "Advanced compliance",
          "Custom AI training",
          "Dedicated account manager",
          "Advanced analytics",
          "SLA guarantees",
          "White-label options"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 100 users"
        ],
        bestFor: [
          "Large health systems",
          "Academic medical centers",
          "Government agencies"
        ],
        roi: "700-1000%",
        implementationTime: "10-12 weeks",
        supportLevel: "24/7 dedicated support"
      }
    ],
    marketComparison: [
      {
        competitor: "Epic",
        competitorPrice: "$1,200-2,000/month",
        ourPrice: "$799-3,999/month",
        savings: "Better value with advanced AI capabilities"
      },
      {
        competitor: "Cerner",
        competitorPrice: "$1,000-1,800/month",
        ourPrice: "$799-3,999/month",
        savings: "Superior AI analytics and affordability"
      },
      {
        competitor: "IBM Watson Health",
        competitorPrice: "$2,000-5,000/month",
        ourPrice: "$799-3,999/month",
        savings: "More affordable with better features"
      }
    ],
    volumeDiscounts: [
      {
        users: "50-100",
        discount: "25% off",
        additionalBenefits: ["Priority support", "Custom onboarding"]
      },
      {
        users: "101-250",
        discount: "35% off",
        additionalBenefits: ["Dedicated account manager", "Custom integrations"]
      },
      {
        users: "250+",
        discount: "45% off",
        additionalBenefits: ["White-label options", "Custom AI training"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom AI training",
        "On-premise deployment",
        "Advanced security compliance",
        "Custom integrations",
        "Dedicated infrastructure",
        "White-label solutions"
      ],
      benefits: [
        "Maximum healthcare intelligence",
        "Complete customization",
        "Highest security standards",
        "Exclusive features",
        "Strategic partnership"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-healthcare-analytics"
      }
    }
  },

  // NEW: AI-Powered Business Intelligence Suite
  {
    serviceId: "ai-business-intelligence-suite",
    serviceName: "AI-Powered Business Intelligence Suite",
    category: "AI & Analytics",
    description: "Comprehensive BI platform with AI-driven insights, predictive analytics, and automated reporting",
    pricingTiers: [
      {
        name: "Starter",
        price: 149,
        currency: "$",
        billingCycle: "monthly",
        description: "Essential BI tools for small businesses",
        features: [
          "Up to 5 data sources",
          "Basic AI insights",
          "10 pre-built dashboards",
          "Email reports",
          "Basic data visualization",
          "Standard support"
        ],
        limitations: [
          "Limited to 5 users",
          "Basic AI models",
          "Standard data refresh rates"
        ],
        bestFor: [
          "Small businesses",
          "Startups",
          "Individual analysts"
        ],
        roi: "250-400%",
        implementationTime: "2-3 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 399,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced BI platform for growing organizations",
        features: [
          "Up to 20 data sources",
          "Advanced AI insights and predictions",
          "Unlimited dashboards",
          "Real-time data streaming",
          "Advanced visualizations",
          "API access",
          "Team collaboration",
          "Priority support"
        ],
        limitations: [
          "Limited to 25 users",
          "Standard SLA"
        ],
        bestFor: [
          "Growing businesses",
          "Data teams",
          "Analytics departments"
        ],
        roi: "350-600%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured enterprise BI platform",
        features: [
          "Unlimited data sources",
          "Custom AI model training",
          "Advanced predictive analytics",
          "Real-time streaming analytics",
          "Custom dashboards and reports",
          "Advanced security features",
          "99.9% uptime SLA",
          "Dedicated account manager"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for 100+ users"
        ],
        bestFor: [
          "Large enterprises",
          "Data-driven organizations",
          "Global companies"
        ],
        roi: "500-800%",
        implementationTime: "4-6 weeks",
        supportLevel: "Dedicated account manager + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "Tableau",
        competitorPrice: "$70/user/month",
        ourPrice: "$149/month (up to 5 users)",
        savings: "58% savings for small teams"
      },
      {
        competitor: "Power BI",
        competitorPrice: "$9.99/user/month + $20/month",
        ourPrice: "$149/month (up to 5 users)",
        savings: "Better features at competitive price"
      },
      {
        competitor: "Looker",
        competitorPrice: "$3000/month",
        ourPrice: "$999/month",
        savings: "67% savings"
      }
    ],
    volumeDiscounts: [
      {
        users: "25-50",
        discount: "20% off",
        additionalBenefits: ["Advanced AI features", "Custom integrations"]
      },
      {
        users: "51-100",
        discount: "30% off",
        additionalBenefits: ["Dedicated success manager", "Custom AI models"]
      },
      {
        users: "100+",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom infrastructure"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom AI model development",
        "White-label solutions",
        "Advanced security compliance",
        "Custom data connectors",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced compliance features"
      ],
      benefits: [
        "Tailored to your business needs",
        "Higher ROI through customization",
        "Better integration with existing systems",
        "Enhanced security and compliance",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  },

  // NEW: Quantum-Enhanced Cybersecurity Platform
  {
    serviceId: "quantum-enhanced-cybersecurity",
    serviceName: "Quantum-Enhanced Cybersecurity Platform",
    category: "Cybersecurity",
    description: "Next-generation cybersecurity platform leveraging quantum computing for unbreakable encryption and threat detection",
    pricingTiers: [
      {
        name: "Essential",
        price: 199,
        currency: "$",
        billingCycle: "monthly",
        description: "Quantum-enhanced security for small businesses",
        features: [
          "Quantum-resistant encryption",
          "AI threat detection",
          "Basic firewall protection",
          "Email security",
          "Vulnerability scanning",
          "Standard support"
        ],
        limitations: [
          "Limited to 10 endpoints",
          "Basic threat intelligence",
          "Standard response time"
        ],
        bestFor: [
          "Small businesses",
          "Startups",
          "Individual professionals"
        ],
        roi: "300-500%",
        implementationTime: "1-2 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced quantum security for growing organizations",
        features: [
          "Advanced quantum encryption",
          "AI-powered threat hunting",
          "Zero-trust architecture",
          "Advanced firewall rules",
          "Real-time threat intelligence",
          "Incident response automation",
          "Compliance reporting",
          "Priority support"
        ],
        limitations: [
          "Limited to 100 endpoints",
          "Standard SLA"
        ],
        bestFor: [
          "Growing businesses",
          "Security teams",
          "Compliance-focused organizations"
        ],
        roi: "400-700%",
        implementationTime: "2-3 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured quantum security platform",
        features: [
          "Custom quantum encryption algorithms",
          "Advanced AI threat intelligence",
          "Full zero-trust implementation",
          "Custom security policies",
          "Advanced compliance features",
          "99.99% uptime SLA",
          "Dedicated security team",
          "Custom integrations"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for 1000+ endpoints"
        ],
        bestFor: [
          "Large enterprises",
          "Financial institutions",
          "Government agencies"
        ],
        roi: "600-1000%",
        implementationTime: "4-6 weeks",
        supportLevel: "Dedicated security team + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "CrowdStrike",
        competitorPrice: "$8.99/endpoint/month",
        ourPrice: "$199/month (up to 10 endpoints)",
        savings: "Better features at competitive price"
      },
      {
        competitor: "SentinelOne",
        competitorPrice: "$5.00/endpoint/month",
        ourPrice: "$199/month (up to 10 endpoints)",
        savings: "Quantum-enhanced security at competitive price"
      },
      {
        competitor: "Palo Alto Networks",
        competitorPrice: "$50,000+ setup + $10,000/month",
        ourPrice: "$1499/month",
        savings: "90%+ savings with better features"
      }
    ],
    volumeDiscounts: [
      {
        users: "100-500 endpoints",
        discount: "25% off",
        additionalBenefits: ["Advanced threat intelligence", "Custom security policies"]
      },
      {
        users: "501-1000 endpoints",
        discount: "35% off",
        additionalBenefits: ["Dedicated security team", "Custom integrations"]
      },
      {
        users: "1000+ endpoints",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom quantum algorithms"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom quantum encryption algorithms",
        "White-label security solutions",
        "Advanced compliance features",
        "Custom security policies",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced threat intelligence"
      ],
      benefits: [
        "Tailored to your security needs",
        "Higher security through customization",
        "Better integration with existing systems",
        "Enhanced compliance and security",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  },

  // NEW: AI-Powered Project Management Platform
  {
    serviceId: "ai-project-management-platform",
    serviceName: "AI-Powered Project Management Platform",
    category: "Business Operations",
    description: "Intelligent project management with AI-driven resource allocation, risk prediction, and automated workflow optimization",
    pricingTiers: [
      {
        name: "Starter",
        price: 79,
        currency: "$",
        billingCycle: "monthly",
        description: "Essential project management for small teams",
        features: [
          "Up to 10 projects",
          "Basic AI task prioritization",
          "Team collaboration tools",
          "Basic reporting",
          "Mobile app access",
          "Email support"
        ],
        limitations: [
          "Limited to 5 team members",
          "Basic AI features",
          "Standard templates"
        ],
        bestFor: [
          "Small teams",
          "Startups",
          "Individual project managers"
        ],
        roi: "200-350%",
        implementationTime: "1 week",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 199,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced project management for growing organizations",
        features: [
          "Unlimited projects",
          "Advanced AI resource optimization",
          "Risk prediction algorithms",
          "Advanced reporting and analytics",
          "Custom workflows",
          "API access",
          "Priority support",
          "Advanced integrations"
        ],
        limitations: [
          "Limited to 25 team members",
          "Standard SLA"
        ],
        bestFor: [
          "Growing businesses",
          "Project teams",
          "Consulting firms"
        ],
        roi: "300-500%",
        implementationTime: "1-2 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 499,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured enterprise project management",
        features: [
          "Custom AI model training",
          "Advanced resource optimization",
          "Predictive analytics",
          "Custom workflows and automation",
          "Advanced security features",
          "99.9% uptime SLA",
          "Dedicated account manager",
          "Custom integrations"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for 100+ users"
        ],
        bestFor: [
          "Large enterprises",
          "Project management offices",
          "Global organizations"
        ],
        roi: "400-700%",
        implementationTime: "2-4 weeks",
        supportLevel: "Dedicated account manager + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "Asana",
        competitorPrice: "$10.99/user/month",
        ourPrice: "$79/month (up to 5 users)",
        savings: "28% savings with AI features"
      },
      {
        competitor: "Monday.com",
        competitorPrice: "$8/user/month",
        ourPrice: "$79/month (up to 5 users)",
        savings: "Better AI features at competitive price"
      },
      {
        competitor: "Jira",
        competitorPrice: "$7.50/user/month",
        ourPrice: "$79/month (up to 5 users)",
        savings: "AI-powered features at competitive price"
      }
    ],
    volumeDiscounts: [
      {
        users: "25-50",
        discount: "20% off",
        additionalBenefits: ["Advanced AI features", "Custom workflows"]
      },
      {
        users: "51-100",
        discount: "30% off",
        additionalBenefits: ["Dedicated success manager", "Custom AI models"]
      },
      {
        users: "100+",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom integrations"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom AI model development",
        "White-label solutions",
        "Advanced security compliance",
        "Custom workflow automation",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced compliance features"
      ],
      benefits: [
        "Tailored to your project needs",
        "Higher ROI through customization",
        "Better integration with existing systems",
        "Enhanced security and compliance",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  },

  // NEW: Quantum AI Trading Platform
  {
    serviceId: "quantum-ai-trading-platform",
    serviceName: "Quantum AI Trading Platform",
    category: "Financial Services",
    description: "Revolutionary trading platform combining quantum computing and AI for superior market prediction and automated trading",
    pricingTiers: [
      {
        name: "Starter",
        price: 299,
        currency: "$",
        billingCycle: "monthly",
        description: "Essential quantum AI trading for individual traders",
        features: [
          "Basic quantum AI predictions",
          "Up to 5 trading strategies",
          "Real-time market data",
          "Basic risk management",
          "Mobile trading app",
          "Email support"
        ],
        limitations: [
          "Limited to $10,000 trading volume",
          "Basic AI models",
          "Standard data feeds"
        ],
        bestFor: [
          "Individual traders",
          "Small investors",
          "Trading enthusiasts"
        ],
        roi: "500-1000%",
        implementationTime: "1 week",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced quantum AI trading for active traders",
        features: [
          "Advanced quantum AI algorithms",
          "Unlimited trading strategies",
          "Advanced risk management",
          "Portfolio optimization",
          "Advanced analytics",
          "API access",
          "Priority support",
          "Custom indicators"
        ],
        limitations: [
          "Limited to $100,000 trading volume",
          "Standard SLA"
        ],
        bestFor: [
          "Active traders",
          "Investment professionals",
          "Trading firms"
        ],
        roi: "800-1500%",
        implementationTime: "1-2 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured enterprise trading platform",
        features: [
          "Custom quantum AI algorithms",
          "Advanced portfolio management",
          "Institutional-grade security",
          "Custom trading strategies",
          "Advanced compliance features",
          "99.99% uptime SLA",
          "Dedicated account manager",
          "White-label options"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for $1M+ volume"
        ],
        bestFor: [
          "Institutional investors",
          "Hedge funds",
          "Investment banks"
        ],
        roi: "1000-2000%",
        implementationTime: "2-4 weeks",
        supportLevel: "Dedicated account manager + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "Interactive Brokers",
        competitorPrice: "$0.65 per 100 shares",
        ourPrice: "$299/month + competitive commissions",
        savings: "Better AI features at competitive price"
      },
      {
        competitor: "TD Ameritrade",
        competitorPrice: "$0.65 per trade",
        ourPrice: "$299/month + competitive commissions",
        savings: "Quantum AI advantages at competitive price"
      },
      {
        competitor: "E*TRADE",
        competitorPrice: "$0.65 per trade",
        ourPrice: "$299/month + competitive commissions",
        savings: "Superior AI technology at competitive price"
      }
    ],
    volumeDiscounts: [
      {
        users: "$100K-$500K volume",
        discount: "25% off",
        additionalBenefits: ["Advanced AI features", "Custom strategies"]
      },
      {
        users: "$500K-$1M volume",
        discount: "35% off",
        additionalBenefits: ["Dedicated success manager", "Custom AI models"]
      },
      {
        users: "$1M+ volume",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom quantum algorithms"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom quantum AI algorithms",
        "White-label trading platform",
        "Advanced security compliance",
        "Custom trading strategies",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced compliance features"
      ],
      benefits: [
        "Tailored to your trading needs",
        "Higher ROI through customization",
        "Better integration with existing systems",
        "Enhanced security and compliance",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  },

  // NEW: AI-Powered Healthcare Analytics Platform
  {
    serviceId: "ai-healthcare-analytics-platform",
    serviceName: "AI-Powered Healthcare Analytics Platform",
    category: "Healthcare Technology",
    description: "Advanced healthcare analytics platform using AI to improve patient outcomes, reduce costs, and enhance clinical decision-making",
    pricingTiers: [
      {
        name: "Starter",
        price: 399,
        currency: "$",
        billingCycle: "monthly",
        description: "Essential healthcare analytics for small practices",
        features: [
          "Basic patient analytics",
          "AI-powered diagnosis assistance",
          "Up to 1000 patient records",
          "Basic reporting",
          "HIPAA compliance",
          "Email support"
        ],
        limitations: [
          "Limited to 5 healthcare providers",
          "Basic AI models",
          "Standard data processing"
        ],
        bestFor: [
          "Small medical practices",
          "Dental offices",
          "Specialty clinics"
        ],
        roi: "300-600%",
        implementationTime: "2-3 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 999,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced healthcare analytics for growing organizations",
        features: [
          "Advanced patient analytics",
          "AI-powered treatment recommendations",
          "Unlimited patient records",
          "Advanced reporting and dashboards",
          "Predictive analytics",
          "API access",
          "Priority support",
          "Custom integrations"
        ],
        limitations: [
          "Limited to 25 healthcare providers",
          "Standard SLA"
        ],
        bestFor: [
          "Growing medical practices",
          "Multi-location clinics",
          "Healthcare networks"
        ],
        roi: "500-900%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured enterprise healthcare platform",
        features: [
          "Custom AI model training",
          "Advanced predictive analytics",
          "Population health management",
          "Custom dashboards and reports",
          "Advanced security features",
          "99.9% uptime SLA",
          "Dedicated account manager",
          "White-label options"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for 100+ providers"
        ],
        bestFor: [
          "Large hospital systems",
          "Healthcare networks",
          "Government agencies"
        ],
        roi: "800-1500%",
        implementationTime: "4-6 weeks",
        supportLevel: "Dedicated account manager + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "Epic Systems",
        competitorPrice: "$1.2M+ setup + $50K/month",
        ourPrice: "$2499/month",
        savings: "95%+ savings with better AI features"
      },
      {
        competitor: "Cerner",
        competitorPrice: "$500K+ setup + $25K/month",
        ourPrice: "$2499/month",
        savings: "90%+ savings with superior technology"
      },
      {
        competitor: "Allscripts",
        competitorPrice: "$300K+ setup + $15K/month",
        ourPrice: "$2499/month",
        savings: "85%+ savings with better features"
      }
    ],
    volumeDiscounts: [
      {
        users: "25-50 providers",
        discount: "20% off",
        additionalBenefits: ["Advanced AI features", "Custom integrations"]
      },
      {
        users: "51-100 providers",
        discount: "30% off",
        additionalBenefits: ["Dedicated success manager", "Custom AI models"]
      },
      {
        users: "100+ providers",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom infrastructure"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom AI model development",
        "White-label healthcare platform",
        "Advanced security compliance",
        "Custom healthcare workflows",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced compliance features"
      ],
      benefits: [
        "Tailored to your healthcare needs",
        "Higher ROI through customization",
        "Better integration with existing systems",
        "Enhanced security and compliance",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  },

  // NEW: Space Technology Solutions
  {
    serviceId: "space-technology-solutions",
    serviceName: "Space Technology Solutions",
    category: "Space Technology",
    description: "Cutting-edge space technology solutions including satellite systems, space analytics, and orbital optimization",
    pricingTiers: [
      {
        name: "Starter",
        price: 599,
        currency: "$",
        billingCycle: "monthly",
        description: "Essential space technology for small organizations",
        features: [
          "Basic satellite tracking",
          "Space weather monitoring",
          "Up to 5 satellite assets",
          "Basic analytics",
          "Email support",
          "Standard data feeds"
        ],
        limitations: [
          "Limited to 5 users",
          "Basic space analytics",
          "Standard update frequency"
        ],
        bestFor: [
          "Small space companies",
          "Educational institutions",
          "Research organizations"
        ],
        roi: "400-800%",
        implementationTime: "3-4 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 1499,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced space technology for growing organizations",
        features: [
          "Advanced satellite management",
          "AI-powered orbital optimization",
          "Unlimited satellite assets",
          "Advanced space analytics",
          "Real-time monitoring",
          "API access",
          "Priority support",
          "Custom integrations"
        ],
        limitations: [
          "Limited to 25 users",
          "Standard SLA"
        ],
        bestFor: [
          "Growing space companies",
          "Satellite operators",
          "Space research institutions"
        ],
        roi: "600-1200%",
        implementationTime: "4-6 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured enterprise space platform",
        features: [
          "Custom space technology solutions",
          "Advanced orbital mechanics",
          "Custom satellite systems",
          "Advanced space analytics",
          "Custom dashboards and reports",
          "Advanced security features",
          "99.9% uptime SLA",
          "Dedicated account manager"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for 100+ satellites"
        ],
        bestFor: [
          "Large space companies",
          "Government agencies",
          "International space organizations"
        ],
        roi: "1000-2000%",
        implementationTime: "6-8 weeks",
        supportLevel: "Dedicated account manager + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "Maxar Technologies",
        competitorPrice: "$50K+ setup + $10K/month",
        ourPrice: "$3999/month",
        savings: "60%+ savings with better technology"
      },
      {
        competitor: "Planet Labs",
        competitorPrice: "$25K+ setup + $5K/month",
        ourPrice: "$3999/month",
        savings: "Better features at competitive price"
      },
      {
        competitor: "SpaceX Starlink",
        competitorPrice: "$99/month + $500 setup",
        ourPrice: "$599/month",
        savings: "Professional space technology at competitive price"
      }
    ],
    volumeDiscounts: [
      {
        users: "25-50 satellites",
        discount: "25% off",
        additionalBenefits: ["Advanced space analytics", "Custom integrations"]
      },
      {
        users: "51-100 satellites",
        discount: "35% off",
        additionalBenefits: ["Dedicated success manager", "Custom space technology"]
      },
      {
        users: "100+ satellites",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom satellite systems"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom space technology development",
        "White-label space platform",
        "Advanced security compliance",
        "Custom satellite systems",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced compliance features"
      ],
      benefits: [
        "Tailored to your space needs",
        "Higher ROI through customization",
        "Better integration with existing systems",
        "Enhanced security and compliance",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  },

  // NEW: AI-Powered Marketing Automation Suite
  {
    serviceId: "ai-marketing-automation-suite",
    serviceName: "AI-Powered Marketing Automation Suite",
    category: "Marketing & Sales",
    description: "Intelligent marketing automation platform with AI-driven personalization, predictive analytics, and automated campaign optimization",
    pricingTiers: [
      {
        name: "Starter",
        price: 89,
        currency: "$",
        billingCycle: "monthly",
        description: "Essential marketing automation for small businesses",
        features: [
          "Up to 1000 contacts",
          "Basic AI personalization",
          "5 email templates",
          "Basic automation workflows",
          "Social media scheduling",
          "Email support"
        ],
        limitations: [
          "Limited to 3 team members",
          "Basic AI features",
          "Standard analytics"
        ],
        bestFor: [
          "Small businesses",
          "Startups",
          "Individual marketers"
        ],
        roi: "250-400%",
        implementationTime: "1 week",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 249,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced marketing automation for growing organizations",
        features: [
          "Up to 10,000 contacts",
          "Advanced AI personalization",
          "Unlimited email templates",
          "Advanced automation workflows",
          "AI-powered content optimization",
          "Advanced analytics",
          "API access",
          "Priority support"
        ],
        limitations: [
          "Limited to 10 team members",
          "Standard SLA"
        ],
        bestFor: [
          "Growing businesses",
          "Marketing teams",
          "Agencies"
        ],
        roi: "350-600%",
        implementationTime: "1-2 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 699,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured enterprise marketing platform",
        features: [
          "Unlimited contacts",
          "Custom AI model training",
          "Advanced predictive analytics",
          "Custom automation workflows",
          "Advanced security features",
          "99.9% uptime SLA",
          "Dedicated account manager",
          "White-label options"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for 100+ users"
        ],
        bestFor: [
          "Large enterprises",
          "Global brands",
          "Marketing agencies"
        ],
        roi: "500-800%",
        implementationTime: "2-4 weeks",
        supportLevel: "Dedicated account manager + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "HubSpot",
        competitorPrice: "$45/month + $450/month",
        ourPrice: "$89/month",
        savings: "80%+ savings with better AI features"
      },
      {
        competitor: "Mailchimp",
        competitorPrice: "$59/month",
        ourPrice: "$89/month",
        savings: "Better AI features at competitive price"
      },
      {
        competitor: "ActiveCampaign",
        competitorPrice: "$49/month",
        ourPrice: "$89/month",
        savings: "Superior AI technology at competitive price"
      }
    ],
    volumeDiscounts: [
      {
        users: "10-25",
        discount: "20% off",
        additionalBenefits: ["Advanced AI features", "Custom workflows"]
      },
      {
        users: "26-50",
        discount: "30% off",
        additionalBenefits: ["Dedicated success manager", "Custom AI models"]
      },
      {
        users: "50+",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom integrations"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom AI model development",
        "White-label marketing platform",
        "Advanced security compliance",
        "Custom automation workflows",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced compliance features"
      ],
      benefits: [
        "Tailored to your marketing needs",
        "Higher ROI through customization",
        "Better integration with existing systems",
        "Enhanced security and compliance",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  },

  // NEW: Blockchain Enterprise Solutions
  {
    serviceId: "blockchain-enterprise-solutions",
    serviceName: "Blockchain Enterprise Solutions",
    category: "Blockchain & Web3",
    description: "Enterprise-grade blockchain solutions for supply chain transparency, smart contracts, and decentralized applications",
    pricingTiers: [
      {
        name: "Starter",
        price: 299,
        currency: "$",
        billingCycle: "monthly",
        description: "Essential blockchain solutions for small businesses",
        features: [
          "Basic smart contract deployment",
          "Supply chain tracking",
          "Up to 1000 transactions/month",
          "Basic blockchain analytics",
          "Email support",
          "Standard security"
        ],
        limitations: [
          "Limited to 3 team members",
          "Basic blockchain features",
          "Standard performance"
        ],
        bestFor: [
          "Small businesses",
          "Startups",
          "Individual developers"
        ],
        roi: "300-500%",
        implementationTime: "2-3 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 799,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced blockchain solutions for growing organizations",
        features: [
          "Advanced smart contract development",
          "Multi-chain support",
          "Unlimited transactions",
          "Advanced blockchain analytics",
          "Custom token creation",
          "API access",
          "Priority support",
          "Advanced security"
        ],
        limitations: [
          "Limited to 10 team members",
          "Standard SLA"
        ],
        bestFor: [
          "Growing businesses",
          "Development teams",
          "Financial institutions"
        ],
        roi: "400-700%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 1999,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured enterprise blockchain platform",
        features: [
          "Custom blockchain development",
          "Private blockchain networks",
          "Advanced smart contract security",
          "Custom token economics",
          "Advanced compliance features",
          "99.9% uptime SLA",
          "Dedicated account manager",
          "White-label options"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for 100+ users"
        ],
        bestFor: [
          "Large enterprises",
          "Financial institutions",
          "Government agencies"
        ],
        roi: "600-1000%",
        implementationTime: "4-6 weeks",
        supportLevel: "Dedicated account manager + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "IBM Blockchain",
        competitorPrice: "$10K+ setup + $5K/month",
        ourPrice: "$1999/month",
        savings: "60%+ savings with better features"
      },
      {
        competitor: "Microsoft Azure Blockchain",
        competitorPrice: "$0.50 per transaction",
        ourPrice: "$299/month (up to 1000 transactions)",
        savings: "Better features at competitive price"
      },
      {
        competitor: "Amazon Managed Blockchain",
        competitorPrice: "$0.30 per transaction",
        ourPrice: "$299/month (up to 1000 transactions)",
        savings: "Superior technology at competitive price"
      }
    ],
    volumeDiscounts: [
      {
        users: "10-25",
        discount: "25% off",
        additionalBenefits: ["Advanced blockchain features", "Custom integrations"]
      },
      {
        users: "26-50",
        discount: "35% off",
        additionalBenefits: ["Dedicated success manager", "Custom blockchain networks"]
      },
      {
        users: "50+",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom infrastructure"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom blockchain development",
        "White-label blockchain platform",
        "Advanced security compliance",
        "Custom smart contracts",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced compliance features"
      ],
      benefits: [
        "Tailored to your blockchain needs",
        "Higher ROI through customization",
        "Better integration with existing systems",
        "Enhanced security and compliance",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  },

  // NEW: IoT Edge Computing Platform
  {
    serviceId: "iot-edge-computing-platform",
    serviceName: "IoT Edge Computing Platform",
    category: "IoT & Edge Computing",
    description: "Advanced IoT platform with edge computing capabilities for real-time data processing, device management, and intelligent automation",
    pricingTiers: [
      {
        name: "Starter",
        price: 179,
        currency: "$",
        billingCycle: "monthly",
        description: "Essential IoT platform for small deployments",
        features: [
          "Up to 100 IoT devices",
          "Basic edge computing",
          "Real-time data processing",
          "Basic device management",
          "Email support",
          "Standard security"
        ],
        limitations: [
          "Limited to 5 users",
          "Basic edge computing",
          "Standard data storage"
        ],
        bestFor: [
          "Small businesses",
          "Startups",
          "Individual developers"
        ],
        roi: "250-450%",
        implementationTime: "2-3 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 449,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced IoT platform for growing deployments",
        features: [
          "Up to 1000 IoT devices",
          "Advanced edge computing",
          "Real-time analytics",
          "Advanced device management",
          "Custom dashboards",
          "API access",
          "Priority support",
          "Advanced security"
        ],
        limitations: [
          "Limited to 25 users",
          "Standard SLA"
        ],
        bestFor: [
          "Growing businesses",
          "IoT teams",
          "Manufacturing companies"
        ],
        roi: "350-600%",
        implementationTime: "3-4 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 1199,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured enterprise IoT platform",
        features: [
          "Unlimited IoT devices",
          "Custom edge computing",
          "Advanced real-time analytics",
          "Custom device management",
          "Advanced security features",
          "99.9% uptime SLA",
          "Dedicated account manager",
          "White-label options"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for 10,000+ devices"
        ],
        bestFor: [
          "Large enterprises",
          "Manufacturing companies",
          "Smart city projects"
        ],
        roi: "500-900%",
        implementationTime: "4-6 weeks",
        supportLevel: "Dedicated account manager + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "AWS IoT Core",
        competitorPrice: "$0.08 per million messages",
        ourPrice: "$179/month (up to 100 devices)",
        savings: "Better features at competitive price"
      },
      {
        competitor: "Microsoft Azure IoT",
        competitorPrice: "$0.50 per million messages",
        ourPrice: "$179/month (up to 100 devices)",
        savings: "Superior technology at competitive price"
      },
      {
        competitor: "Google Cloud IoT",
        competitorPrice: "$0.40 per million messages",
        ourPrice: "$179/month (up to 100 devices)",
        savings: "Better features at competitive price"
      }
    ],
    volumeDiscounts: [
      {
        users: "1000-5000 devices",
        discount: "20% off",
        additionalBenefits: ["Advanced edge computing", "Custom integrations"]
      },
      {
        users: "5001-10000 devices",
        discount: "30% off",
        additionalBenefits: ["Dedicated success manager", "Custom edge computing"]
      },
      {
        users: "10000+ devices",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom infrastructure"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom IoT platform development",
        "White-label IoT platform",
        "Advanced security compliance",
        "Custom edge computing",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced compliance features"
      ],
      benefits: [
        "Tailored to your IoT needs",
        "Higher ROI through customization",
        "Better integration with existing systems",
        "Enhanced security and compliance",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  },

  // NEW: Sustainable Technology Solutions
  {
    serviceId: "sustainable-technology-solutions",
    serviceName: "Sustainable Technology Solutions",
    category: "Sustainability",
    description: "Green technology solutions for energy optimization, carbon footprint reduction, and sustainable business practices",
    pricingTiers: [
      {
        name: "Starter",
        price: 129,
        currency: "$",
        billingCycle: "monthly",
        description: "Essential sustainability tools for small businesses",
        features: [
          "Carbon footprint tracking",
          "Energy consumption monitoring",
          "Basic sustainability reporting",
          "Green certification support",
          "Email support",
          "Standard analytics"
        ],
        limitations: [
          "Limited to 5 users",
          "Basic sustainability features",
          "Standard reporting"
        ],
        bestFor: [
          "Small businesses",
          "Startups",
          "Individual professionals"
        ],
        roi: "200-400%",
        implementationTime: "1-2 weeks",
        supportLevel: "Email support"
      },
      {
        name: "Professional",
        price: 349,
        currency: "$",
        billingCycle: "monthly",
        description: "Advanced sustainability platform for growing organizations",
        features: [
          "Advanced carbon tracking",
          "Real-time energy monitoring",
          "Advanced sustainability analytics",
          "Custom sustainability goals",
          "Green certification automation",
          "API access",
          "Priority support",
          "Advanced reporting"
        ],
        limitations: [
          "Limited to 25 users",
          "Standard SLA"
        ],
        bestFor: [
          "Growing businesses",
          "Sustainability teams",
          "Environmental organizations"
        ],
        roi: "300-600%",
        implementationTime: "2-3 weeks",
        supportLevel: "Priority support"
      },
      {
        name: "Enterprise",
        price: 899,
        currency: "$",
        billingCycle: "monthly",
        description: "Full-featured enterprise sustainability platform",
        features: [
          "Custom sustainability solutions",
          "Advanced carbon analytics",
          "Custom energy optimization",
          "Advanced compliance features",
          "Custom dashboards and reports",
          "Advanced security features",
          "99.9% uptime SLA",
          "Dedicated account manager"
        ],
        limitations: [
          "Minimum 12-month contract",
          "Custom pricing for 100+ users"
        ],
        bestFor: [
          "Large enterprises",
          "Government agencies",
          "Environmental organizations"
        ],
        roi: "500-900%",
        implementationTime: "3-5 weeks",
        supportLevel: "Dedicated account manager + 24/7 support"
      }
    ],
    marketComparison: [
      {
        competitor: "Carbon Trust",
        competitorPrice: "$5000+ setup + $2000/month",
        ourPrice: "$899/month",
        savings: "55%+ savings with better technology"
      },
      {
        competitor: "Sustainalytics",
        competitorPrice: "$3000+ setup + $1500/month",
        ourPrice: "$899/month",
        savings: "40%+ savings with superior features"
      },
      {
        competitor: "MSCI ESG",
        competitorPrice: "$2000+ setup + $1000/month",
        ourPrice: "$899/month",
        savings: "10% savings with better technology"
      }
    ],
    volumeDiscounts: [
      {
        users: "25-50",
        discount: "20% off",
        additionalBenefits: ["Advanced sustainability features", "Custom integrations"]
      },
      {
        users: "51-100",
        discount: "30% off",
        additionalBenefits: ["Dedicated success manager", "Custom sustainability solutions"]
      },
      {
        users: "100+",
        discount: "Custom pricing",
        additionalBenefits: ["White-label options", "Custom infrastructure"]
      }
    ],
    customEnterprise: {
      features: [
        "Custom sustainability solutions",
        "White-label sustainability platform",
        "Advanced security compliance",
        "Custom sustainability workflows",
        "Enterprise SSO integration",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced compliance features"
      ],
      benefits: [
        "Tailored to your sustainability needs",
        "Higher ROI through customization",
        "Better integration with existing systems",
        "Enhanced security and compliance",
        "Dedicated support team"
      ],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2025;