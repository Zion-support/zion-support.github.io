import { ProductListing } from "@/types/listings";

// Comprehensive Pricing Guide 2030 - Zion Tech Group
// This file provides detailed pricing information for all services

export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billing: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
}

export interface ServicePricing {
  serviceId: string;
  serviceName: string;
  category: string;
  description: string;
  pricingTiers: PricingTier[];
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

export const COMPREHENSIVE_PRICING_GUIDE_2030: ServicePricing[] = [
  // AI-Powered Legal Document Analysis & Contract Intelligence
  {
    serviceId: "ai-legal-document-analysis-platform",
    serviceName: "AI Legal Document Analysis & Contract Intelligence Platform",
    category: "AI & Legal Tech",
    description: "Advanced AI-powered legal document analysis platform that automatically reviews, analyzes, and extracts key information from contracts, legal documents, and compliance materials with 99.2% accuracy.",
    pricingTiers: [
      {
        name: "Starter",
        price: 999,
        currency: "$",
        billing: "per month",
        features: [
          "Document analysis up to 100 pages/month",
          "Basic contract review",
          "Standard compliance checks",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small law firms and solo practitioners"
      },
      {
        name: "Professional",
        price: 2499,
        currency: "$",
        billing: "per month",
        features: [
          "Document analysis up to 500 pages/month",
          "Advanced contract review",
          "Comprehensive compliance checks",
          "Priority support",
          "Advanced integrations",
          "Custom templates"
        ],
        bestFor: "Medium-sized law firms",
        popular: true
      },
      {
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billing: "per month",
        features: [
          "Unlimited document analysis",
          "AI-powered risk assessment",
          "Custom compliance workflows",
          "24/7 dedicated support",
          "Full API access",
          "Custom development",
          "On-premise deployment option"
        ],
        bestFor: "Large law firms and corporations"
      }
    ],
    marketPrice: "$10,000-25,000",
    competitors: ["Kira Systems", "Evisort", "ContractPodAi"],
    roi: "800% within 12 months",
    setupTime: "6-8 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-legal-platform",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Healthcare Predictive Analytics Platform
  {
    serviceId: "ai-healthcare-predictive-analytics-platform",
    serviceName: "AI Healthcare Predictive Analytics Platform",
    category: "AI & Healthcare",
    description: "Comprehensive healthcare analytics platform that uses machine learning to predict patient outcomes, optimize treatment plans, and identify early warning signs.",
    pricingTiers: [
      {
        name: "Clinical",
        price: 1999,
        currency: "$",
        billing: "per month",
        features: [
          "Patient outcome prediction",
          "Basic treatment optimization",
          "Standard reporting",
          "Email support",
          "HL7 integration"
        ],
        bestFor: "Small clinics and private practices"
      },
      {
        name: "Hospital",
        price: 4999,
        currency: "$",
        billing: "per month",
        features: [
          "Advanced patient analytics",
          "Treatment plan optimization",
          "Early warning systems",
          "Priority support",
          "Full EHR integration",
          "Custom dashboards"
        ],
        bestFor: "Medium-sized hospitals",
        popular: true
      },
      {
        name: "Health System",
        price: 9999,
        currency: "$",
        billing: "per month",
        features: [
          "Enterprise-wide analytics",
          "AI-powered diagnostics",
          "Population health insights",
          "24/7 dedicated support",
          "Full API access",
          "Custom development",
          "Multi-site deployment"
        ],
        bestFor: "Large health systems and networks"
      }
    ],
    marketPrice: "$12,000-30,000",
    competitors: ["IBM Watson Health", "Cerner", "Epic"],
    roi: "700% within 18 months",
    setupTime: "8-10 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-healthcare-analytics",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Supply Chain Optimization Platform
  {
    serviceId: "ai-supply-chain-optimization-platform",
    serviceName: "AI Supply Chain Optimization Platform",
    category: "AI & Operations",
    description: "Intelligent supply chain management platform that uses AI to predict demand, optimize inventory levels, and identify supply chain risks in real-time.",
    pricingTiers: [
      {
        name: "Basic",
        price: 1499,
        currency: "$",
        billing: "per month",
        features: [
          "Demand forecasting",
          "Basic inventory optimization",
          "Standard reporting",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        name: "Professional",
        price: 3999,
        currency: "$",
        billing: "per month",
        features: [
          "Advanced demand forecasting",
          "Inventory optimization",
          "Risk management",
          "Priority support",
          "Advanced integrations",
          "Custom dashboards"
        ],
        bestFor: "Medium-sized companies",
        popular: true
      },
      {
        name: "Enterprise",
        price: 7999,
        currency: "$",
        billing: "per month",
        features: [
          "Real-time supply chain analytics",
          "AI-powered risk prediction",
          "Multi-site optimization",
          "24/7 dedicated support",
          "Full API access",
          "Custom development",
          "On-premise option"
        ],
        bestFor: "Large enterprises and multinationals"
      }
    ],
    marketPrice: "$8,000-20,000",
    competitors: ["SAP", "Oracle", "Manhattan Associates"],
    roi: "600% within 10 months",
    setupTime: "6-8 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-supply-chain",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // AI-Powered Financial Trading & Portfolio Management
  {
    serviceId: "ai-financial-trading-portfolio-platform",
    serviceName: "AI Financial Trading & Portfolio Management Platform",
    category: "AI & FinTech",
    description: "Advanced AI-powered trading platform that analyzes market data, identifies trading opportunities, and manages portfolios with machine learning algorithms.",
    pricingTiers: [
      {
        name: "Individual",
        price: 2999,
        currency: "$",
        billing: "per month",
        features: [
          "Portfolio analysis",
          "Basic trading signals",
          "Risk management",
          "Email support",
          "Basic broker integrations"
        ],
        bestFor: "Individual investors and traders"
      },
      {
        name: "Professional",
        price: 6999,
        currency: "$",
        billing: "per month",
        features: [
          "Advanced portfolio management",
          "AI trading signals",
          "Risk assessment",
          "Priority support",
          "Full broker integrations",
          "Custom strategies"
        ],
        bestFor: "Professional traders and advisors",
        popular: true
      },
      {
        name: "Institutional",
        price: 14999,
        currency: "$",
        billing: "per month",
        features: [
          "Institutional-grade analytics",
          "AI-powered trading algorithms",
          "Multi-portfolio management",
          "24/7 dedicated support",
          "Full API access",
          "Custom development",
          "White-label solutions"
        ],
        bestFor: "Hedge funds and institutions"
      }
    ],
    marketPrice: "$15,000-40,000",
    competitors: ["Bloomberg Terminal", "Thomson Reuters", "Interactive Brokers"],
    roi: "1000% within 24 months",
    setupTime: "10-12 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-trading-platform",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // Zero Trust Cybersecurity Architecture
  {
    serviceId: "zero-trust-cybersecurity-architecture",
    serviceName: "Zero Trust Cybersecurity Architecture",
    category: "Cybersecurity",
    description: "Comprehensive zero-trust security framework with continuous authentication, micro-segmentation, and AI-powered threat detection.",
    pricingTiers: [
      {
        name: "Foundation",
        price: 2999,
        currency: "$",
        billing: "per month",
        features: [
          "Basic zero-trust implementation",
          "User authentication",
          "Basic threat detection",
          "Email support",
          "Standard integrations"
        ],
        bestFor: "Small to medium businesses"
      },
      {
        name: "Advanced",
        price: 6999,
        currency: "$",
        billing: "per month",
        features: [
          "Advanced zero-trust framework",
          "Continuous authentication",
          "AI threat detection",
          "Priority support",
          "Advanced integrations",
          "Custom policies"
        ],
        bestFor: "Medium to large enterprises",
        popular: true
      },
      {
        name: "Enterprise",
        price: 14999,
        currency: "$",
        billing: "per month",
        features: [
          "Full zero-trust architecture",
          "Micro-segmentation",
          "Advanced AI security",
          "24/7 dedicated support",
          "Full API access",
          "Custom development",
          "On-premise deployment"
        ],
        bestFor: "Large enterprises and government"
      }
    ],
    marketPrice: "$15,000-40,000",
    competitors: ["CrowdStrike", "Palo Alto Networks", "Fortinet"],
    roi: "700% within 12 months",
    setupTime: "8-12 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/zero-trust-architecture",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // Quantum Computing Infrastructure & Solutions
  {
    serviceId: "quantum-computing-infrastructure-platform",
    serviceName: "Quantum Computing Infrastructure & Solutions Platform",
    category: "Quantum Computing",
    description: "Advanced quantum computing platform that provides access to quantum processors, quantum algorithms, and hybrid quantum-classical computing solutions.",
    pricingTiers: [
      {
        name: "Research",
        price: 4999,
        currency: "$",
        billing: "per month",
        features: [
          "Access to quantum processors",
          "Basic quantum algorithms",
          "Research support",
          "Email support",
          "Standard quantum APIs"
        ],
        bestFor: "Research institutions and universities"
      },
      {
        name: "Development",
        price: 9999,
        currency: "$",
        billing: "per month",
        features: [
          "Advanced quantum computing",
          "Custom quantum algorithms",
          "Hybrid computing solutions",
          "Priority support",
          "Full quantum APIs",
          "Custom development"
        ],
        bestFor: "Technology companies and startups",
        popular: true
      },
      {
        name: "Enterprise",
        price: 19999,
        currency: "$",
        billing: "per month",
        features: [
          "Enterprise quantum solutions",
          "Custom quantum infrastructure",
          "Full API access",
          "24/7 dedicated support",
          "Custom development",
          "On-premise quantum systems"
        ],
        bestFor: "Large enterprises and government"
      }
    ],
    marketPrice: "$25,000-80,000",
    competitors: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum"],
    roi: "1500% within 36 months",
    setupTime: "12-16 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/quantum-computing",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // Edge Computing & IoT Infrastructure Platform
  {
    serviceId: "edge-computing-iot-infrastructure-platform",
    serviceName: "Edge Computing & IoT Infrastructure Platform",
    category: "IoT & Edge Computing",
    description: "Comprehensive edge computing platform that processes data closer to the source, reducing latency and bandwidth requirements.",
    pricingTiers: [
      {
        name: "Starter",
        price: 1999,
        currency: "$",
        billing: "per month",
        features: [
          "Basic edge computing",
          "IoT device management",
          "Standard analytics",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Small IoT deployments"
      },
      {
        name: "Professional",
        price: 4999,
        currency: "$",
        billing: "per month",
        features: [
          "Advanced edge computing",
          "Real-time analytics",
          "IoT optimization",
          "Priority support",
          "Advanced integrations",
          "Custom dashboards"
        ],
        bestFor: "Medium IoT deployments",
        popular: true
      },
      {
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billing: "per month",
        features: [
          "Enterprise edge solutions",
          "AI-powered analytics",
          "Full IoT management",
          "24/7 dedicated support",
          "Full API access",
          "Custom development",
          "On-premise deployment"
        ],
        bestFor: "Large IoT deployments and enterprises"
      }
    ],
    marketPrice: "$12,000-35,000",
    competitors: ["AWS IoT Greengrass", "Azure IoT Edge", "Google Cloud IoT"],
    roi: "600% within 15 months",
    setupTime: "8-10 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/edge-computing",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // Blockchain & Web3 Infrastructure Platform
  {
    serviceId: "blockchain-web3-infrastructure-platform",
    serviceName: "Blockchain & Web3 Infrastructure Platform",
    category: "Blockchain & Web3",
    description: "Enterprise-grade blockchain platform that enables secure, transparent, and decentralized applications.",
    pricingTiers: [
      {
        name: "Developer",
        price: 2999,
        currency: "$",
        billing: "per month",
        features: [
          "Basic blockchain access",
          "Smart contract development",
          "Standard APIs",
          "Email support",
          "Basic integrations"
        ],
        bestFor: "Developers and startups"
      },
      {
        name: "Business",
        price: 6999,
        currency: "$",
        billing: "per month",
        features: [
          "Advanced blockchain solutions",
          "Multi-protocol support",
          "Custom smart contracts",
          "Priority support",
          "Advanced integrations",
          "Custom development"
        ],
        bestFor: "Businesses and enterprises",
        popular: true
      },
      {
        name: "Enterprise",
        price: 14999,
        currency: "$",
        billing: "per month",
        features: [
          "Enterprise blockchain solutions",
          "Full protocol support",
          "Custom infrastructure",
          "24/7 dedicated support",
          "Full API access",
          "Custom development",
          "Private blockchain networks"
        ],
        bestFor: "Large enterprises and government"
      }
    ],
    marketPrice: "$15,000-40,000",
    competitors: ["ConsenSys", "Alchemy", "Infura"],
    roi: "800% within 18 months",
    setupTime: "10-12 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/blockchain-platform",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // Digital Twin & Simulation Platform
  {
    serviceId: "digital-twin-simulation-platform",
    serviceName: "Digital Twin & Simulation Platform",
    category: "Digital Twin",
    description: "Advanced digital twin platform that creates virtual replicas of physical assets, processes, and systems.",
    pricingTiers: [
      {
        name: "Basic",
        price: 3999,
        currency: "$",
        billing: "per month",
        features: [
          "Basic digital twin creation",
          "Standard simulation",
          "Basic monitoring",
          "Email support",
          "Standard integrations"
        ],
        bestFor: "Small businesses and startups"
      },
      {
        name: "Professional",
        price: 8999,
        currency: "$",
        billing: "per month",
        features: [
          "Advanced digital twins",
          "Real-time simulation",
          "Predictive maintenance",
          "Priority support",
          "Advanced integrations",
          "Custom dashboards"
        ],
        bestFor: "Medium businesses and manufacturers",
        popular: true
      },
      {
        name: "Enterprise",
        price: 17999,
        currency: "$",
        billing: "per month",
        features: [
          "Enterprise digital twins",
          "AI-powered simulation",
          "Full asset optimization",
          "24/7 dedicated support",
          "Full API access",
          "Custom development",
          "On-premise deployment"
        ],
        bestFor: "Large enterprises and manufacturers"
      }
    ],
    marketPrice: "$18,000-50,000",
    competitors: ["Siemens", "GE Digital", "PTC"],
    roi: "900% within 24 months",
    setupTime: "12-16 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/digital-twin",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },

  // Space Technology & Satellite Infrastructure Platform
  {
    serviceId: "space-technology-satellite-infrastructure",
    serviceName: "Space Technology & Satellite Infrastructure Platform",
    category: "Space Technology",
    description: "Comprehensive space technology platform for satellite operations, space debris tracking, and orbital optimization.",
    pricingTiers: [
      {
        name: "Satellite",
        price: 9999,
        currency: "$",
        billing: "per month",
        features: [
          "Basic satellite management",
          "Orbital tracking",
          "Standard monitoring",
          "Email support",
          "Basic space APIs"
        ],
        bestFor: "Small satellite operators"
      },
      {
        name: "Constellation",
        price: 19999,
        currency: "$",
        billing: "per month",
        features: [
          "Multi-satellite management",
          "Debris tracking",
          "Collision avoidance",
          "Priority support",
          "Advanced space APIs",
          "Custom development"
        ],
        bestFor: "Satellite constellations and operators",
        popular: true
      },
      {
        name: "Enterprise",
        price: 39999,
        currency: "$",
        billing: "per month",
        features: [
          "Enterprise space solutions",
          "Full satellite fleet management",
          "AI-powered optimization",
          "24/7 dedicated support",
          "Full API access",
          "Custom development",
          "Ground station integration"
        ],
        bestFor: "Large space companies and government"
      }
    ],
    marketPrice: "$30,000-100,000",
    competitors: ["SpaceX", "Blue Origin", "Lockheed Martin"],
    roi: "2000% within 48 months",
    setupTime: "16-20 weeks",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/space-technology",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];

// Pricing Summary and Statistics
export const PRICING_SUMMARY_2030 = {
  totalServices: COMPREHENSIVE_PRICING_GUIDE_2030.length,
  averageStartingPrice: Math.round(
    COMPREHENSIVE_PRICING_GUIDE_2030.reduce((sum, service) => 
      sum + service.pricingTiers[0].price, 0
    ) / COMPREHENSIVE_PRICING_GUIDE_2030.length
  ),
  averageEnterprisePrice: Math.round(
    COMPREHENSIVE_PRICING_GUIDE_2030.reduce((sum, service) => 
      sum + service.pricingTiers[service.pricingTiers.length - 1].price, 0
    ) / COMPREHENSIVE_PRICING_GUIDE_2030.length
  ),
  categories: [...new Set(COMPREHENSIVE_PRICING_GUIDE_2030.map(service => service.category))],
  mostPopularTier: "Professional",
  averageROI: "700%",
  averageSetupTime: "10 weeks"
};

// Contact Information for Zion Tech Group
export const ZION_TECH_GROUP_CONTACT = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  emergencySupport: "24/7 for Enterprise customers"
};