// Comprehensive Pricing Guide 2030 - Zion Tech Group
// Complete pricing information for all services

import { advancedAIServices2030 } from './advancedAIServices2030';
import { specializedITInfrastructureServices2026 } from './specializedITInfrastructureServices2026';
import { emergingTechServices2030 } from './emergingTechServices2030';

export interface PricingTier {
  name: string;
  price: number;
  billingCycle: string;
  features: string[];
  limitations: string[];
  bestFor: string[];
}

export interface ServicePricing {
  id: string;
  name: string;
  category: string;
  description: string;
  pricingTiers: PricingTier[];
  marketPrice: string;
  competitors: string[];
  roi: string;
  setupTime: string;
  freeTier: boolean;
  trialPeriod: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

// Zion Tech Group Contact Information
const zionContact = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  website: "https://ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

// Create comprehensive pricing guide
export const comprehensivePricingGuide2030: ServicePricing[] = [
  // AI-Powered Code Review Assistant
  {
    id: "ai-code-review",
    name: "AI-Powered Code Review Assistant",
    category: "AI & Development",
    description: "Intelligent code review platform that automatically detects bugs, security vulnerabilities, and suggests improvements using advanced AI models",
    pricingTiers: [
      {
        name: "Starter",
        price: 99,
        billingCycle: "monthly",
        features: [
          "Up to 10,000 lines of code/month",
          "Basic bug detection",
          "Security vulnerability scanning",
          "GitHub integration",
          "Email support"
        ],
        limitations: [
          "Limited to 2 team members",
          "Basic reporting only",
          "No custom AI model training"
        ],
        bestFor: ["Small development teams", "Startups", "Individual developers"]
      },
      {
        name: "Professional",
        price: 299,
        billingCycle: "monthly",
        features: [
          "Unlimited code review",
          "Advanced bug detection",
          "Performance optimization suggestions",
          "Multi-language support",
          "Team collaboration tools",
          "Priority support"
        ],
        limitations: [
          "Up to 20 team members",
          "Standard AI models only"
        ],
        bestFor: ["Growing development teams", "Mid-size companies", "Tech startups"]
      },
      {
        name: "Enterprise",
        price: 599,
        billingCycle: "monthly",
        features: [
          "Unlimited everything",
          "Custom AI model training",
          "Advanced security protocols",
          "SLA guarantees",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Financial institutions", "Healthcare organizations"]
      }
    ],
    marketPrice: "$250 - $400/month",
    competitors: ["SonarQube", "CodeClimate", "DeepCode"],
    roi: "200% within 6 months",
    setupTime: "1-2 hours",
    freeTier: true,
    trialPeriod: "14 days",
    contactInfo: zionContact
  },

  // AI-Driven Customer Churn Prediction
  {
    id: "ai-churn-prediction",
    name: "AI-Driven Customer Churn Prediction",
    category: "AI & Business Intelligence",
    description: "Predictive analytics platform that identifies customers at risk of churning and provides actionable insights to improve retention",
    pricingTiers: [
      {
        name: "Growth",
        price: 299,
        billingCycle: "monthly",
        features: [
          "Up to 10,000 customers",
          "Basic churn prediction",
          "Email alerts",
          "Standard integrations",
          "Email support"
        ],
        limitations: [
          "Limited to 3 team members",
          "Basic analytics only"
        ],
        bestFor: ["Growing SaaS companies", "Small e-commerce", "Startups"]
      },
      {
        name: "Scale",
        price: 599,
        billingCycle: "monthly",
        features: [
          "Up to 100,000 customers",
          "Advanced prediction models",
          "Real-time analytics",
          "Multi-channel integration",
          "Priority support"
        ],
        limitations: [
          "Up to 10 team members"
        ],
        bestFor: ["Mid-size companies", "Growing e-commerce", "B2B SaaS"]
      },
      {
        name: "Enterprise",
        price: 899,
        billingCycle: "monthly",
        features: [
          "Unlimited customers",
          "Custom AI models",
          "Advanced analytics",
          "White-label options",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Enterprise SaaS", "Financial services"]
      }
    ],
    marketPrice: "$700 - $1,200/month",
    competitors: ["ChurnZero", "Gainsight", "Totango"],
    roi: "350% within 12 months",
    setupTime: "1-2 weeks",
    freeTier: false,
    trialPeriod: "30 days",
    contactInfo: zionContact
  },

  // Zero-Trust Network Access Platform
  {
    id: "zero-trust-network",
    name: "Zero-Trust Network Access Platform",
    category: "Cybersecurity",
    description: "Advanced zero-trust security platform that provides secure access to applications and resources without traditional VPNs",
    pricingTiers: [
      {
        name: "Professional",
        price: 799,
        billingCycle: "monthly",
        features: [
          "Up to 500 users",
          "Basic zero-trust policies",
          "Multi-factor authentication",
          "Standard integrations",
          "Business hours support"
        ],
        limitations: [
          "Limited to 2 locations",
          "Basic reporting only"
        ],
        bestFor: ["Mid-size companies", "Healthcare organizations", "Financial services"]
      },
      {
        name: "Enterprise",
        price: 1299,
        billingCycle: "monthly",
        features: [
          "Unlimited users",
          "Advanced security policies",
          "Micro-segmentation",
          "Advanced analytics",
          "24/7 support",
          "Custom integrations"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Government agencies", "Critical infrastructure"]
      }
    ],
    marketPrice: "$1,000 - $1,800/month",
    competitors: ["Okta", "Palo Alto Networks", "Cisco"],
    roi: "400% within 12 months",
    setupTime: "2-4 weeks",
    freeTier: false,
    trialPeriod: "30 days",
    contactInfo: zionContact
  },

  // Multi-Cloud Orchestration Platform
  {
    id: "multi-cloud-orchestration",
    name: "Multi-Cloud Orchestration Platform",
    category: "Cloud & DevOps",
    description: "Intelligent multi-cloud management platform that optimizes costs, performance, and security across AWS, Azure, and GCP",
    pricingTiers: [
      {
        name: "Starter",
        price: 299,
        billingCycle: "monthly",
        features: [
          "Up to $10K monthly cloud spend",
          "Basic cost optimization",
          "Multi-cloud dashboard",
          "Standard integrations",
          "Email support"
        ],
        limitations: [
          "Limited to 2 cloud providers",
          "Basic analytics only"
        ],
        bestFor: ["Small cloud users", "Startups", "DevOps teams"]
      },
      {
        name: "Professional",
        price: 899,
        billingCycle: "monthly",
        features: [
          "Up to $100K monthly cloud spend",
          "Advanced optimization",
          "Performance monitoring",
          "Security management",
          "Priority support"
        ],
        limitations: [
          "Up to 5 cloud providers"
        ],
        bestFor: ["Mid-size companies", "Cloud-native companies", "Enterprises"]
      },
      {
        name: "Enterprise",
        price: 1999,
        billingCycle: "monthly",
        features: [
          "Unlimited cloud spend",
          "Custom optimization",
          "Advanced analytics",
          "White-label options",
          "Dedicated support",
          "Custom integrations"
        ],
        limitations: [],
        bestFor: ["Large enterprises", "Multi-cloud companies", "Cloud providers"]
      }
    ],
    marketPrice: "$700 - $1,200/month",
    competitors: ["CloudHealth", "RightScale", "Scalr"],
    roi: "350% within 10 months",
    setupTime: "1-2 weeks",
    freeTier: true,
    trialPeriod: "30 days",
    contactInfo: zionContact
  },

  // Quantum Machine Learning Platform
  {
    id: "quantum-ml-platform",
    name: "Quantum Machine Learning Platform",
    category: "Quantum Computing",
    description: "Revolutionary quantum machine learning platform that leverages quantum computing for solving complex optimization problems and AI training",
    pricingTiers: [
      {
        name: "Research",
        price: 1999,
        billingCycle: "monthly",
        features: [
          "Basic quantum algorithms",
          "Up to 100 quantum operations/day",
          "Standard quantum simulators",
          "Email support",
          "Research documentation"
        ],
        limitations: [
          "Limited quantum resources",
          "Basic algorithms only"
        ],
        bestFor: ["Research institutions", "Universities", "Small research teams"]
      },
      {
        name: "Professional",
        price: 3999,
        billingCycle: "monthly",
        features: [
          "Advanced quantum algorithms",
          "Up to 1000 quantum operations/day",
          "Quantum error correction",
          "Priority support",
          "Custom algorithm development"
        ],
        limitations: [
          "Up to 10 research projects"
        ],
        bestFor: ["Pharmaceutical companies", "Financial services", "Research institutions"]
      },
      {
        name: "Enterprise",
        price: 7999,
        billingCycle: "monthly",
        features: [
          "Unlimited quantum resources",
          "Custom quantum algorithms",
          "Hardware access",
          "Dedicated support",
          "White-label options",
          "Custom integrations"
        ],
        limitations: [],
        bestFor: ["Large corporations", "Government agencies", "Quantum research centers"]
      }
    ],
    marketPrice: "$3,000 - $5,000/month",
    competitors: ["IBM Quantum", "Google Quantum AI", "Microsoft Azure Quantum"],
    roi: "600% within 24 months",
    setupTime: "4-6 weeks",
    freeTier: false,
    trialPeriod: "14 days",
    contactInfo: zionContact
  },

  // Metaverse Development Platform
  {
    id: "metaverse-platform",
    name: "Metaverse Development Platform",
    category: "Metaverse & AR/VR",
    description: "Comprehensive metaverse development platform for creating immersive 3D virtual worlds, AR/VR experiences, and digital twin environments",
    pricingTiers: [
      {
        name: "Creator",
        price: 499,
        billingCycle: "monthly",
        features: [
          "Basic 3D world creation",
          "Up to 100 concurrent users",
          "Standard templates",
          "Email support",
          "Basic analytics"
        ],
        limitations: [
          "Limited to 1 world",
          "Basic customization only"
        ],
        bestFor: ["Individual creators", "Small businesses", "Educational institutions"]
      },
      {
        name: "Professional",
        price: 1499,
        billingCycle: "monthly",
        features: [
          "Advanced world creation",
          "Up to 1000 concurrent users",
          "Custom templates",
          "Priority support",
          "Advanced analytics",
          "Multi-platform deployment"
        ],
        limitations: [
          "Up to 5 worlds"
        ],
        bestFor: ["Gaming companies", "Real estate", "Retail businesses"]
      },
      {
        name: "Enterprise",
        price: 3999,
        billingCycle: "monthly",
        features: [
          "Unlimited everything",
          "Custom development",
          "White-label options",
          "Dedicated support",
          "Custom integrations",
          "SLA guarantees"
        ],
        limitations: [],
        bestFor: ["Large corporations", "Entertainment companies", "Government agencies"]
      }
    ],
    marketPrice: "$1,200 - $2,000/month",
    competitors: ["Roblox", "Unity", "Unreal Engine"],
    roi: "400% within 18 months",
    setupTime: "2-4 weeks",
    freeTier: true,
    trialPeriod: "30 days",
    contactInfo: zionContact
  }
];

// Pricing Statistics
export const pricingStatistics = {
  totalServices: comprehensivePricingGuide2030.length,
  averageStarterPrice: Math.round(comprehensivePricingGuide2030.reduce((sum, service) => {
    const starterTier = service.pricingTiers.find(tier => tier.name.toLowerCase().includes('starter') || tier.name.toLowerCase().includes('basic') || tier.name.toLowerCase().includes('creator'));
    return sum + (starterTier?.price || 0);
  }, 0) / comprehensivePricingGuide2030.length),
  averageProfessionalPrice: Math.round(comprehensivePricingGuide2030.reduce((sum, service) => {
    const proTier = service.pricingTiers.find(tier => tier.name.toLowerCase().includes('professional') || tier.name.toLowerCase().includes('scale') || tier.name.toLowerCase().includes('pro'));
    return sum + (proTier?.price || 0);
  }, 0) / comprehensivePricingGuide2030.length),
  averageEnterprisePrice: Math.round(comprehensivePricingGuide2030.reduce((sum, service) => {
    const enterpriseTier = service.pricingTiers.find(tier => tier.name.toLowerCase().includes('enterprise'));
    return sum + (enterpriseTier?.price || 0);
  }, 0) / comprehensivePricingGuide2030.length),
  servicesWithFreeTier: comprehensivePricingGuide2030.filter(service => service.freeTier).length,
  averageTrialPeriod: Math.round(comprehensivePricingGuide2030.reduce((sum, service) => {
    const days = parseInt(service.trialPeriod.match(/\d+/)?.[0] || '0');
    return sum + days;
  }, 0) / comprehensivePricingGuide2030.length)
};

export default comprehensivePricingGuide2030;