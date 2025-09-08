import { ProductListing } from "@/types/listings";

export const COMPREHENSIVE_PRICING_GUIDE_2025 = {
  marketOverview: {
    totalMarketSize: "$2.8 trillion by 2025",
    growthRate: "18.5% CAGR",
    keyTrends: [
      "AI-first approach becoming standard",
      "Quantum computing commercialization",
      "Blockchain mainstream adoption",
      "IoT proliferation across industries",
      "Cybersecurity as priority investment"
    ]
  },

  pricingStrategies: {
    valueBased: "Premium pricing for high-value solutions",
    competitive: "Market-competitive for standard services",
    penetration: "Aggressive pricing for new markets",
    freemium: "Free tier with premium upgrades"
  },

  serviceCategories: {
    "AI & Business Intelligence": {
      marketSize: "$45.8 billion by 2025",
      averagePrice: "$8,000-25,000",
      pricingModel: "Annual subscription + usage-based",
      competitors: ["Tableau", "Power BI", "Qlik", "Looker"],
      roi: "400-800% within 12 months"
    },

    "Cybersecurity": {
      marketSize: "$67.8 billion by 2025",
      averagePrice: "$15,000-40,000",
      pricingModel: "Annual subscription + incident response",
      competitors: ["CrowdStrike", "Palo Alto Networks", "Fortinet", "SentinelOne"],
      roi: "600-1200% within 18 months"
    },

    "Cloud & DevOps": {
      marketSize: "$89.2 billion by 2025",
      averagePrice: "$12,000-35,000",
      pricingModel: "Annual subscription + infrastructure costs",
      competitors: ["AWS", "Azure", "Google Cloud", "HashiCorp"],
      roi: "350-700% within 10 months"
    },

    "AI & Marketing": {
      marketSize: "$32.4 billion by 2025",
      averagePrice: "$8,000-20,000",
      pricingModel: "Monthly subscription + performance fees",
      competitors: ["Jasper", "Copy.ai", "Writesonic", "ContentBot"],
      roi: "500-900% within 8 months"
    },

    "Quantum Computing": {
      marketSize: "$1.8 billion by 2025",
      averagePrice: "$25,000-75,000",
      pricingModel: "Annual subscription + quantum time",
      competitors: ["IBM Quantum", "Google Quantum", "Amazon Braket", "Microsoft Azure Quantum"],
      roi: "800-2000% within 24 months"
    },

    "IoT & Edge Computing": {
      marketSize: "$15.7 billion by 2025",
      averagePrice: "$10,000-30,000",
      pricingModel: "Annual subscription + device fees",
      competitors: ["AWS Greengrass", "Azure IoT Edge", "Google Cloud IoT Edge", "FogHorn"],
      roi: "400-800% within 15 months"
    },

    "Blockchain & Web3": {
      marketSize: "$3.3 billion by 2025",
      averagePrice: "$15,000-40,000",
      pricingModel: "Annual subscription + transaction fees",
      competitors: ["IBM Food Trust", "VeChain", "OriginTrail", "Chronicled"],
      roi: "600-1200% within 18 months"
    },

    "AI & Healthcare": {
      marketSize: "$45.2 billion by 2027",
      averagePrice: "$20,000-50,000",
      pricingModel: "Annual subscription + per-patient fees",
      competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare", "Butterfly Network"],
      roi: "700-1500% within 20 months"
    },

    "FinTech": {
      marketSize: "$158.8 billion by 2025",
      averagePrice: "$18,000-45,000",
      pricingModel: "Annual subscription + transaction fees",
      competitors: ["Stripe", "Square", "PayPal", "Adyen"],
      roi: "500-1000% within 12 months"
    },

    "Digital Twin": {
      marketSize: "$86.1 billion by 2028",
      averagePrice: "$25,000-60,000",
      pricingModel: "Annual subscription + asset fees",
      competitors: ["Siemens Mindsphere", "GE Digital Twin", "PTC ThingWorx", "Microsoft Azure Digital Twins"],
      roi: "600-1200% within 18 months"
    },

    "Space Technology": {
      marketSize: "$4.2 billion by 2027",
      averagePrice: "$40,000-100,000",
      pricingModel: "Annual subscription + mission fees",
      competitors: ["Maxar", "Planet Labs", "Spire", "ICEYE"],
      roi: "800-2000% within 36 months"
    },

    "Sustainable Technology": {
      marketSize: "$74.8 billion by 2025",
      averagePrice: "$18,000-45,000",
      pricingModel: "Annual subscription + savings share",
      competitors: ["Sphera", "Benchmark ESG", "Wolters Kluwer", "Sustainalytics"],
      roi: "500-1000% within 15 months"
    }
  },

  pricingTiers: {
    starter: {
      name: "Starter",
      price: "$2,000-8,000",
      features: [
        "Basic functionality",
        "Standard support",
        "Limited integrations",
        "Community forum access"
      ],
      targetAudience: "Small businesses, startups",
      roi: "200-400% within 6 months"
    },

    professional: {
      name: "Professional",
      price: "$8,000-25,000",
      features: [
        "Advanced functionality",
        "Priority support",
        "Full integrations",
        "Custom training",
        "Dedicated account manager"
      ],
      targetAudience: "Mid-market companies",
      roi: "400-800% within 12 months"
    },

    enterprise: {
      name: "Enterprise",
      price: "$25,000-100,000+",
      features: [
        "Full functionality",
        "24/7 support",
        "Custom integrations",
        "On-site training",
        "Dedicated success team",
        "Custom development",
        "SLA guarantees"
      ],
      targetAudience: "Large enterprises",
      roi: "800-2000% within 18 months"
    }
  },

  competitiveAnalysis: {
    marketLeaders: {
      "Microsoft": "Azure-based solutions, enterprise focus",
      "Google": "AI-first approach, cloud-native",
      "Amazon": "AWS ecosystem, scalability",
      "IBM": "Enterprise heritage, hybrid cloud",
      "Oracle": "Database expertise, enterprise focus"
    },

    emergingPlayers: {
      "Snowflake": "Data cloud platform",
      "Databricks": "Unified analytics platform",
      "Palantir": "Data integration platform",
      "C3.ai": "Enterprise AI platform",
      "UiPath": "RPA platform"
    },

    pricingStrategies: {
      "Freemium": "Free tier with premium upgrades",
      "Usage-based": "Pay per use model",
      "Subscription": "Fixed monthly/annual fees",
      "Enterprise": "Custom pricing for large deals",
      "Performance-based": "Fees tied to business outcomes"
    }
  },

  roiAnalysis: {
    averageImplementation: "4-12 weeks",
    averageROI: "500-1000% within 12 months",
    costSavings: "20-60% operational costs",
    efficiencyGains: "300-800% productivity improvement",
    riskReduction: "40-80% security incidents",
    compliance: "100% regulatory compliance"
  },

  marketPositioning: {
    valueProposition: "Cutting-edge AI and technology solutions with proven ROI",
    competitiveAdvantage: [
      "AI-first approach",
      "Quantum computing expertise",
      "Blockchain innovation",
      "IoT integration",
      "Cybersecurity leadership"
    ],
    targetMarkets: [
      "Fortune 500 companies",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions",
      "Manufacturing companies"
    ]
  },

  contactInfo: {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    salesInquiry: "https://ziontechgroup.com/contact",
    pricingConsultation: "https://ziontechgroup.com/request-quote"
  }
};

export default COMPREHENSIVE_PRICING_GUIDE_2025;