// Comprehensive Pricing Guide 2026 - Zion Tech Group
// Detailed pricing structures for revolutionary micro SAAS, IT, and AI services

export type PricingTier = {

  name: string;
  price: number;
  currency: string;
  billing: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
}

export type ServicePricing = {

  serviceId: number;
  serviceName: string;
  category: string;
  pricingTiers: PricingTier[];
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

export const COMPREHENSIVE_PRICING_GUIDE_2026: ServicePricing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-autonomous-business-operations",
    title: "AI Autonomous Business Operations Platform",
    description: "Fully autonomous business operations platform that uses AI agents to manage and optimize all aspects of business operations without human intervention.",
    category: "AI & Machine Learning",
    subcategory: "Autonomous Operations",
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: 1999,
        currency: "$",
        billing: "month",
        description: "Perfect for small to medium businesses starting their automation journey",
        features: [
          "Basic AI agent setup",
          "Up to 5 automated processes",
          "Standard integrations",
          "Email support",
          "Basic analytics dashboard"
        ],
        cta: "Start Free Trial",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "professional",
        name: "Professional",
        price: 3999,
        currency: "$",
        billing: "month",
        description: "Advanced automation for growing enterprises",
        features: [
          "Advanced AI agent orchestration",
          "Up to 20 automated processes",
          "Premium integrations",
          "Priority support",
          "Advanced analytics and reporting",
          "Custom workflow builder",
          "Multi-department coordination"
        ],
        popular: true,
        cta: "Get Started",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 7999,
        currency: "$",
        billing: "month",
        description: "Full-scale autonomous operations for large enterprises",
        features: [
          "Unlimited AI agents",
          "Unlimited automated processes",
          "All integrations included",
          "24/7 dedicated support",
          "Custom AI model training",
          "Advanced security features",
          "Compliance automation",
          "Custom development"
        ],
        cta: "Contact Sales",
        href: "https://ziontechgroup.com/contact"
      }
    ],
    features: [
      "Multi-agent AI orchestration",
      "Autonomous decision making",
      "Real-time process optimization",
      "Predictive maintenance",
      "Automated resource allocation",
      "Continuous learning and adaptation",
      "Cross-department coordination",
      "Performance analytics",
      "Compliance automation",
      "Scalable architecture"
    ],
    benefits: [
      "Reduce operational costs by 40-60%",
      "Improve efficiency by 80%",
      "24/7 autonomous operation",
      "Eliminate human errors",
      "Scalable business growth"
    ],
    useCases: [
      "Manufacturing operations",
      "Supply chain management",
      "Customer service automation",
      "Financial operations",
      "HR and recruitment"
    ],
    targetAudience: [
      "Operations directors",
      "CIOs and CTOs",
      "Business transformation leaders",
      "Process improvement teams",
      "Enterprise executives"
    ],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,999 - $8,999/month",
    roi: "400-600%",
    innovationLevel: "Revolutionary",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "quantum-ai-platform",
    title: "Quantum AI Platform",
    description: "Next-generation AI platform leveraging quantum computing principles for solving complex problems that are impossible for classical computers.",
    category: "AI & Machine Learning",
    subcategory: "Quantum AI",
    pricingTiers: [
      {
        id: "researcher",
        name: "Researcher",
        price: 2999,
        currency: "$",
        billing: "month",
        description: "For research institutions and academic use",
        features: [
          "Basic quantum algorithms",
          "Up to 100 quantum operations/month",
          "Standard quantum simulators",
          "Email support",
          "Basic documentation"
        ],
        cta: "Start Research",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "developer",
        name: "Developer",
        price: 5999,
        currency: "$",
        billing: "month",
        description: "For software developers and startups",
        features: [
          "Advanced quantum algorithms",
          "Up to 1000 quantum operations/month",
          "Quantum machine learning tools",
          "Priority support",
          "API access",
          "Custom algorithm development",
          "Integration support"
        ],
        popular: true,
        cta: "Start Building",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 12999,
        currency: "$",
        billing: "month",
        description: "For large enterprises and government agencies",
        features: [
          "All quantum algorithms",
          "Unlimited quantum operations",
          "Custom quantum solutions",
          "24/7 dedicated support",
          "Custom hardware integration",
          "Advanced security features",
          "Compliance certification"
        ],
        cta: "Contact Sales",
        href: "https://ziontechgroup.com/contact"
      }
    ],
    features: [
      "Quantum-inspired algorithms",
      "Hybrid quantum-classical computing",
      "Complex optimization solving",
      "Quantum machine learning",
      "Real-time quantum simulation",
      "Advanced cryptography",
      "Quantum error correction",
      "Scalable quantum architecture",
      "API access to quantum computers",
      "Quantum algorithm library"
    ],
    benefits: [
      "Solve previously impossible problems",
      "Exponential speed improvements",
      "Advanced optimization capabilities",
      "Future-proof technology",
      "Competitive advantage"
    ],
    useCases: [
      "Drug discovery and development",
      "Financial modeling and risk assessment",
      "Logistics optimization",
      "Cryptography and security",
      "Climate modeling"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Government agencies",
      "Technology companies"
    ],
    estimatedDelivery: "16-20 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $12,999/month",
    roi: "500-800%",
    innovationLevel: "Cutting-Edge",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  // Cybersecurity Services
  {
    id: "ai-cybersecurity-suite",
    title: "AI Cybersecurity Suite",
    description: "Comprehensive cybersecurity solution using AI to detect, prevent, and respond to threats in real-time with autonomous incident response.",
    category: "Cybersecurity",
    subcategory: "AI Security",
    pricingTiers: [
      {
        id: "basic",
        name: "Basic",
        price: 999,
        currency: "$",
        billing: "month",
        description: "Essential security for small businesses",
        features: [
          "Basic threat detection",
          "Up to 100 endpoints",
          "Email security",
          "Basic reporting",
          "Email support"
        ],
        cta: "Start Securing",
        href: "https://ziontechgroup.com/contact"
      },
      {
        id: "professional",
        name: "Professional",
        price: 2499,
        currency: "$",
        billing: "month",
        description: "Advanced security for growing enterprises",
        features: [
          "AI-powered threat detection",
          "Up to 1000 endpoints",
          "Advanced malware detection",
          "Behavioral analysis",
          "Priority support",
          "Compliance reporting",
          "24/7 monitoring"
        ],
        limitations: [
          "Smartphone volume limits",
          "Business hours support"
        ],
        bestFor: ["Medium IoT deployments", "Manufacturing", "Smart buildings"],
        roi: "250-400%",
        setupCost: 6000,
        contractLength: "12 months"
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billing: "month",
        description: "Enterprise-grade security with full automation",
        features: [
          "Full AI cybersecurity suite",
          "Unlimited endpoints",
          "Autonomous incident response",
          "Zero-day threat prevention",
          "24/7 dedicated support",
          "Custom security policies",
          "Advanced compliance"
        ],
        cta: "Contact Sales",
        href: "https://ziontechgroup.com/contact"
      }
    ],
    marketComparison: {
      competitors: ["AWS Greengrass", "Azure IoT Edge", "Google Cloud IoT Edge"],
      averageMarketPrice: "$2,000 - $8,000/month",
      ourAdvantage: [
        "More advanced edge processing",
        "Better analytics capabilities",
        "Lower latency",
        "More cost-effective"
      ]
    },
    roiAnalysis: {
      shortTerm: "90% reduction in latency",
      longTerm: "250-600% ROI through operational efficiency",
      paybackPeriod: "6-10 months",
      totalValue: "$300K - $3M+ in operational optimization"
    },
    implementation: {
      timeline: "6-10 weeks",
      requirements: [
        "IoT devices and sensors",
        "Network infrastructure",
        "Data access permissions",
        "Performance requirements"
      ],
      support: [
        "IoT specialists",
        "Edge computing experts",
        "24/7 monitoring",
        "Performance optimization"
      ],
      training: [
        "Platform administration",
        "Smartphone management",
        "Analytics interpretation",
        "Performance monitoring"
      ]
    }
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2026;
