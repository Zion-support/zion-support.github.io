export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  features: string[];
  popular?: boolean;
  recommended?: boolean;
}

export interface ServiceCategory {
  name: string;
  description: string;
  services: ServicePricing[];
}

export interface ServicePricing {
  id: string;
  title: string;
  description: string;
  pricing: PricingTier[];
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  link: string;
  badge?: string;
  icon: string;
  marketPrice: string;
  contactEmail: string;
  tags: string[];
  score: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export const COMPREHENSIVE_PRICING_GUIDE_2032: ServiceCategory[] = [
  {
    name: "AI & Machine Learning Services",
    description: "Cutting-edge AI and ML solutions for business transformation and innovation",
    services: [
      {
        id: "ai-predictive-business-intelligence",
        title: "AI Predictive Business Intelligence Suite",
        description: "Advanced AI-powered business intelligence platform with predictive analytics and real-time insights",
        pricing: [
          {
            name: "Starter",
            price: 299,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Real-time data processing",
              "Basic predictive modeling",
              "Standard dashboards",
              "Email support"
            ]
          },
          {
            name: "Professional",
            price: 599,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Advanced predictive modeling",
              "Custom dashboard builder",
              "Multi-source data integration",
              "Priority support",
              "API access"
            ],
            popular: true
          },
          {
            name: "Enterprise",
            price: 899,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Enterprise-grade security",
              "Custom AI models",
              "Dedicated account manager",
              "24/7 support",
              "On-premise deployment"
            ]
          }
        ],
        features: [
          "Real-time data processing & analytics",
          "Predictive modeling & forecasting",
          "Custom dashboard builder",
          "Automated report generation",
          "Multi-source data integration",
          "Advanced visualization tools",
          "AI-powered anomaly detection",
          "Natural language query interface"
        ],
        benefits: [
          "Increase operational efficiency by 40%",
          "Reduce decision-making time by 60%",
          "Identify market opportunities faster",
          "Optimize resource allocation",
          "Improve forecasting accuracy by 85%"
        ],
        useCases: [
          "Financial forecasting & planning",
          "Market trend analysis",
          "Operational performance monitoring",
          "Customer behavior prediction",
          "Supply chain optimization"
        ],
        targetAudience: ["Enterprise companies", "Financial institutions", "Retail chains", "Manufacturing firms", "Consulting agencies"],
        link: "https://ziontechgroup.com/services/ai-predictive-business-intelligence",
        badge: "Most Popular",
        icon: "📊",
        marketPrice: "$299-899/month",
        contactEmail: "kleber@ziontechgroup.com",
        tags: ["AI Analytics", "Business Intelligence", "Predictive Modeling", "Data Visualization"],
        score: 98,
        rating: 4.9,
        reviewCount: 234,
        featured: true
      },
      {
        id: "ai-cybersecurity-threat-hunter",
        title: "AI Cybersecurity Threat Hunter Pro",
        description: "Advanced AI-powered cybersecurity platform for proactive threat detection and response",
        pricing: [
          {
            name: "Basic",
            price: 199,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "AI-powered threat hunting",
              "Real-time threat detection",
              "Basic incident response",
              "Email support"
            ]
          },
          {
            name: "Professional",
            price: 399,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Advanced behavioral analysis",
              "Automated incident response",
              "Threat intelligence feeds",
              "Priority support",
              "Compliance reporting"
            ],
            popular: true
          },
          {
            name: "Enterprise",
            price: 599,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "24/7 security monitoring",
              "Dedicated security analyst",
              "Custom threat models",
              "Emergency response team",
              "Training & certification"
            ]
          }
        ],
        features: [
          "AI-powered threat hunting",
          "Real-time threat detection",
          "Behavioral analysis engine",
          "Automated incident response",
          "Threat intelligence feeds",
          "Vulnerability assessment",
          "Compliance reporting",
          "24/7 security monitoring"
        ],
        benefits: [
          "Reduce security incidents by 90%",
          "Faster threat response time",
          "Lower cybersecurity costs",
          "Compliance automation",
          "Proactive security posture"
        ],
        useCases: [
          "Enterprise security operations",
          "Financial institution protection",
          "Healthcare data security",
          "Government agency security",
          "Critical infrastructure protection"
        ],
        targetAudience: ["Large enterprises", "Financial services", "Healthcare organizations", "Government agencies"],
        link: "https://ziontechgroup.com/services/ai-cybersecurity-threat-hunter",
        badge: "Enterprise Ready",
        icon: "🛡️",
        marketPrice: "$199-599/month",
        contactEmail: "kleber@ziontechgroup.com",
        tags: ["AI Security", "Threat Hunting", "Cybersecurity", "Incident Response"],
        score: 97,
        rating: 4.8,
        reviewCount: 189,
        featured: true
      }
    ]
  },
  {
    name: "Cloud & DevOps Services",
    description: "Modern cloud infrastructure and DevOps automation solutions",
    services: [
      {
        id: "cloud-native-devops-platform",
        title: "Cloud-Native DevOps Platform Elite",
        description: "Comprehensive cloud-native DevOps platform with automated CI/CD and infrastructure management",
        pricing: [
          {
            name: "Starter",
            price: 399,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Basic CI/CD pipelines",
              "Container orchestration",
              "Monitoring & alerting",
              "Email support"
            ]
          },
          {
            name: "Professional",
            price: 699,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Advanced CI/CD automation",
              "Multi-cloud management",
              "Security scanning",
              "Priority support",
              "Training programs"
            ],
            popular: true
          },
          {
            name: "Enterprise",
            price: 999,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Custom automation workflows",
              "Dedicated DevOps engineers",
              "24/7 support",
              "Compliance automation",
              "Disaster recovery"
            ]
          }
        ],
        features: [
          "Automated CI/CD pipelines",
          "Infrastructure as Code (IaC)",
          "Multi-cloud management",
          "Container orchestration",
          "Real-time monitoring & alerting",
          "Security scanning & compliance",
          "Auto-scaling capabilities",
          "Disaster recovery automation"
        ],
        benefits: [
          "Reduce deployment time by 80%",
          "Improve code quality by 60%",
          "Lower infrastructure costs by 40%",
          "Enhance security posture",
          "Faster time to market"
        ],
        useCases: [
          "Microservices architecture",
          "Containerized applications",
          "Multi-cloud deployments",
          "DevOps transformation",
          "Application modernization"
        ],
        targetAudience: ["Technology companies", "Enterprises", "Startups", "Digital agencies", "Financial services"],
        link: "https://ziontechgroup.com/services/cloud-native-devops-platform",
        badge: "Cloud Native",
        icon: "☁️",
        marketPrice: "$399-999/month",
        contactEmail: "kleber@ziontechgroup.com",
        tags: ["Cloud DevOps", "CI/CD", "Infrastructure as Code", "Container Orchestration"],
        score: 98,
        rating: 4.9,
        reviewCount: 267,
        featured: true
      }
    ]
  },
  {
    name: "Healthcare Technology Services",
    description: "AI-powered healthcare solutions for improved patient outcomes and operational efficiency",
    services: [
      {
        id: "ai-healthcare-predictive-analytics",
        title: "AI Healthcare Predictive Analytics Platform",
        description: "Comprehensive AI-powered healthcare analytics platform for patient outcome prediction and treatment optimization",
        pricing: [
          {
            name: "Clinical",
            price: 399,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Patient outcome prediction",
              "Basic treatment optimization",
              "Clinical decision support",
              "Email support"
            ]
          },
          {
            name: "Hospital",
            price: 699,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Advanced predictive models",
              "Population health analytics",
              "Real-time monitoring",
              "Priority support",
              "Training programs"
            ],
            popular: true
          },
          {
            name: "Enterprise",
            price: 999,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Custom AI models",
              "EHR integration",
              "Dedicated clinical support",
              "24/7 support",
              "Compliance consulting"
            ]
          }
        ],
        features: [
          "Patient outcome prediction",
          "Treatment optimization algorithms",
          "Risk stratification models",
          "Clinical decision support",
          "Population health analytics",
          "Real-time monitoring dashboards",
          "HIPAA compliance",
          "Integration with EHR systems"
        ],
        benefits: [
          "Improve patient outcomes by 35%",
          "Reduce readmission rates by 40%",
          "Optimize resource allocation",
          "Enhance clinical decision making",
          "Lower healthcare costs"
        ],
        useCases: [
          "Hospital patient management",
          "Clinical research & trials",
          "Population health management",
          "Preventive care programs",
          "Chronic disease management"
        ],
        targetAudience: ["Hospitals", "Healthcare systems", "Research institutions", "Insurance companies", "Public health agencies"],
        link: "https://ziontechgroup.com/services/ai-healthcare-predictive-analytics",
        badge: "HIPAA Compliant",
        icon: "🏥",
        marketPrice: "$399-999/month",
        contactEmail: "kleber@ziontechgroup.com",
        tags: ["Healthcare AI", "Predictive Analytics", "Clinical Decision Support", "Population Health"],
        score: 96,
        rating: 4.9,
        reviewCount: 156,
        featured: true
      }
    ]
  },
  {
    name: "Supply Chain & Logistics",
    description: "Intelligent supply chain optimization and logistics management solutions",
    services: [
      {
        id: "ai-supply-chain-optimizer",
        title: "AI Supply Chain Optimization Suite",
        description: "Intelligent supply chain optimization platform using AI for demand forecasting and inventory management",
        pricing: [
          {
            name: "Basic",
            price: 249,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Demand forecasting",
              "Basic inventory optimization",
              "Route optimization",
              "Email support"
            ]
          },
          {
            name: "Professional",
            price: 449,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Advanced forecasting models",
              "Real-time tracking",
              "Supplier risk assessment",
              "Priority support",
              "Training programs"
            ],
            popular: true
          },
          {
            name: "Enterprise",
            price: 699,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Custom optimization models",
              "Multi-site management",
              "Dedicated consultants",
              "24/7 support",
              "Sustainability metrics"
            ]
          }
        ],
        features: [
          "Demand forecasting algorithms",
          "Inventory optimization",
          "Route optimization",
          "Supplier risk assessment",
          "Real-time tracking & monitoring",
          "Cost optimization analysis",
          "Supply chain resilience scoring",
          "Sustainability metrics"
        ],
        benefits: [
          "Reduce inventory costs by 25%",
          "Improve forecast accuracy by 40%",
          "Reduce supply chain disruptions",
          "Optimize transportation routes",
          "Enhance supplier relationships"
        ],
        useCases: [
          "Retail inventory management",
          "Manufacturing supply chains",
          "Logistics optimization",
          "E-commerce fulfillment",
          "Global trade operations"
        ],
        targetAudience: ["Retail chains", "Manufacturing companies", "Logistics providers", "E-commerce platforms", "Global trade companies"],
        link: "https://ziontechgroup.com/services/ai-supply-chain-optimizer",
        badge: "Industry Leader",
        icon: "🚚",
        marketPrice: "$249-699/month",
        contactEmail: "kleber@ziontechgroup.com",
        tags: ["Supply Chain AI", "Demand Forecasting", "Inventory Optimization", "Logistics"],
        score: 95,
        rating: 4.8,
        reviewCount: 178,
        featured: true
      }
    ]
  },
  {
    name: "Financial Technology Services",
    description: "Advanced fintech solutions for trading, risk management, and financial analytics",
    services: [
      {
        id: "ai-financial-trading-platform",
        title: "AI Financial Trading Platform Elite",
        description: "Advanced AI-powered financial trading platform with algorithmic trading and risk management",
        pricing: [
          {
            name: "Professional",
            price: 599,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "AI trading algorithms",
              "Real-time market analysis",
              "Basic risk management",
              "Email support"
            ]
          },
          {
            name: "Institutional",
            price: 999,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Advanced algorithms",
              "Portfolio optimization",
              "Compliance tools",
              "Priority support",
              "Training programs"
            ],
            popular: true
          },
          {
            name: "Enterprise",
            price: 1499,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Custom trading strategies",
              "Dedicated support team",
              "Regulatory compliance",
              "24/7 market support",
              "Risk consulting"
            ]
          }
        ],
        features: [
          "AI-powered trading algorithms",
          "Real-time market analysis",
          "Risk management tools",
          "Portfolio optimization",
          "Backtesting capabilities",
          "Multi-asset support",
          "Regulatory compliance",
          "Advanced analytics dashboard"
        ],
        benefits: [
          "Improve trading performance by 30%",
          "Reduce trading risks",
          "Automate trading strategies",
          "Optimize portfolio allocation",
          "Real-time market insights"
        ],
        useCases: [
          "Institutional trading",
          "Hedge fund operations",
          "Retail trading platforms",
          "Portfolio management",
          "Risk assessment"
        ],
        targetAudience: ["Investment firms", "Hedge funds", "Banks", "Trading platforms", "Individual investors"],
        link: "https://ziontechgroup.com/services/ai-financial-trading-platform",
        badge: "Regulated",
        icon: "📈",
        marketPrice: "$599-1499/month",
        contactEmail: "kleber@ziontechgroup.com",
        tags: ["AI Trading", "Algorithmic Trading", "Risk Management", "Portfolio Optimization"],
        score: 98,
        rating: 4.9,
        reviewCount: 203,
        featured: true
      }
    ]
  },
  {
    name: "Customer Experience & Marketing",
    description: "AI-powered customer experience and marketing automation solutions",
    services: [
      {
        id: "ai-customer-experience-platform",
        title: "AI Customer Experience Platform",
        description: "Comprehensive AI-powered customer experience platform for personalization and journey optimization",
        pricing: [
          {
            name: "Starter",
            price: 179,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Basic personalization",
              "Customer journey mapping",
              "Sentiment analysis",
              "Email support"
            ]
          },
          {
            name: "Professional",
            price: 329,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Advanced personalization",
              "Predictive analytics",
              "A/B testing tools",
              "Priority support",
              "Training programs"
            ],
            popular: true
          },
          {
            name: "Enterprise",
            price: 479,
            currency: "$",
            billingCycle: "monthly",
            features: [
              "Custom AI models",
              "Omnichannel engagement",
              "Dedicated consultants",
              "24/7 support",
              "ROI optimization"
            ]
          }
        ],
        features: [
          "Customer journey mapping",
          "Personalization engine",
          "Predictive customer analytics",
          "Omnichannel engagement",
          "Sentiment analysis",
          "Customer segmentation",
          "A/B testing tools",
          "ROI measurement"
        ],
        benefits: [
          "Increase customer satisfaction by 45%",
          "Improve conversion rates by 35%",
          "Reduce customer churn by 30%",
          "Personalize customer interactions",
          "Optimize customer lifetime value"
        ],
        useCases: [
          "E-commerce personalization",
          "Customer service optimization",
          "Marketing campaign personalization",
          "Product recommendation engines",
          "Customer feedback analysis"
        ],
        targetAudience: ["E-commerce platforms", "Retail companies", "SaaS businesses", "Financial services", "Telecommunications"],
        link: "https://ziontechgroup.com/services/ai-customer-experience-platform",
        badge: "Customer Favorite",
        icon: "💬",
        marketPrice: "$179-479/month",
        contactEmail: "kleber@ziontechgroup.com",
        tags: ["Customer Experience", "Personalization", "Customer Analytics", "Journey Mapping"],
        score: 94,
        rating: 4.8,
        reviewCount: 167,
        featured: true
      }
    ]
  }
];

// Contact Information
export const CONTACT_INFORMATION = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  supportHours: "24/7 Technical Support Available"
};

// Pricing Benefits
export const PRICING_BENEFITS = [
  "Competitive market pricing",
  "Flexible billing options",
  "Volume discounts available",
  "Custom enterprise pricing",
  "Free consultation included",
  "30-day money-back guarantee",
  "No hidden fees",
  "Transparent pricing structure"
];

// Service Guarantees
export const SERVICE_GUARANTEES = [
  "99.9% uptime guarantee",
  "24/7 technical support",
  "30-day implementation guarantee",
  "Performance optimization guarantee",
  "Security compliance guarantee",
  "Data protection guarantee",
  "Integration success guarantee",
  "ROI improvement guarantee"
];