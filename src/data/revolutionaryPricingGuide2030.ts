import { ProductListing } from "@/types/listings";

export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  features: string[];
  limitations: string[];
  bestFor: string;
  setupFee: number;
  contractLength: string;
  supportLevel: string;
}

export interface ServicePricing {
  service: ProductListing;
  pricingTiers: PricingTier[];
  marketComparison: {
    competitors: string[];
    marketAverage: string;
    ourAdvantage: string;
    priceDifference: string;
  };
  roiAnalysis: {
    averageROI: string;
    timeToROI: string;
    costSavings: string;
    revenueIncrease: string;
    caseStudies: string[];
  };
  implementation: {
    setupTime: string;
    trainingIncluded: boolean;
    customizationOptions: string[];
    integrationServices: string[];
    ongoingSupport: string;
  };
}

export const REVOLUTIONARY_PRICING_GUIDE_2030: ServicePricing[] = [
  {
    service: {
      id: "ai-powered-credit-risk-assessment",
      title: "AI-Powered Credit Risk Assessment Platform",
      description: "Advanced credit scoring system using machine learning algorithms, alternative data sources, and behavioral analysis. Provides real-time risk assessment with 92% accuracy and reduces default rates by 35%.",
      category: "FinTech",
      subcategory: "Credit Risk Management",
      price: 3499,
      currency: "$",
      tags: ["Credit Scoring", "Risk Assessment", "Machine Learning", "Alternative Data", "Real-time Analysis"],
      author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
      images: ["https://ziontechgroup.com/images/credit-risk-assessment.jpg"],
      createdAt: "2024-03-15T10:00:00.000Z",
      rating: 4.8,
      reviewCount: 156,
      featured: true,
      location: "Global",
      availability: "3-4 Weeks",
      aiScore: 96,
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/credit-risk-assessment",
        address: "364 E Main St STE 1008 Middletown DE 19709"
      },
      marketPrice: "$3,000-6,000",
      competitors: ["FICO", "Experian", "TransUnion"],
      roi: "450% within 6 months",
      setupTime: "3-4 weeks",
      integrations: ["Core Banking Systems", "Credit Bureaus", "Payment Processors", "CRM Systems", "Analytics Platforms"]
    },
    pricingTiers: [
      {
        name: "Starter",
        price: 2499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10,000 credit assessments per month",
          "Basic risk scoring models",
          "Standard API access",
          "Email support",
          "Basic reporting dashboard"
        ],
        limitations: [
          "Limited customization options",
          "Basic integration support",
          "Standard SLA (99.5%)"
        ],
        bestFor: "Small financial institutions and fintech startups",
        setupFee: 0,
        contractLength: "12 months",
        supportLevel: "Email support during business hours"
      },
      {
        name: "Professional",
        price: 3499,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 100,000 credit assessments per month",
          "Advanced ML models with custom training",
          "Full API access with webhooks",
          "Priority support",
          "Advanced analytics and reporting",
          "Custom risk models",
          "Integration consulting"
        ],
        limitations: [
          "Monthly volume limits",
          "Standard customization options"
        ],
        bestFor: "Medium-sized banks and lending institutions",
        setupFee: 5000,
        contractLength: "24 months",
        supportLevel: "Priority support with 4-hour response time"
      },
      {
        name: "Enterprise",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited credit assessments",
          "Custom AI model development",
          "White-label solution",
          "Dedicated account manager",
          "24/7 premium support",
          "Advanced fraud detection",
          "Compliance automation",
          "Custom integrations"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 12-month commitment"
        ],
        bestFor: "Large banks, credit unions, and enterprise lenders",
        setupFee: 15000,
        contractLength: "36 months",
        supportLevel: "24/7 dedicated support with 1-hour response time"
      }
    ],
    marketComparison: {
      competitors: ["FICO ($5,000-15,000/month)", "Experian ($4,000-12,000/month)", "TransUnion ($3,500-10,000/month)"],
      marketAverage: "$4,500-12,000/month",
      ourAdvantage: "40-60% cost savings with superior AI accuracy",
      priceDifference: "Up to 60% less than market leaders"
    },
    roiAnalysis: {
      averageROI: "450% within 6 months",
      timeToROI: "3-6 months",
      costSavings: "35% reduction in default rates, 50% faster processing",
      revenueIncrease: "25-40% increase in approved loans with better risk assessment",
      caseStudies: [
        "Regional Bank: 40% reduction in credit losses within 6 months",
        "FinTech Startup: 300% increase in loan approval rate",
        "Credit Union: 50% faster credit decision process"
      ]
    },
    implementation: {
      setupTime: "3-4 weeks",
      trainingIncluded: true,
      customizationOptions: ["Custom risk models", "White-label branding", "API customization", "Integration adapters"],
      integrationServices: ["Core banking integration", "CRM system connection", "Payment processor integration", "Compliance system setup"],
      ongoingSupport: "24/7 technical support, monthly optimization reviews, quarterly model updates"
    }
  },

  {
    service: {
      id: "ai-powered-medical-imaging-diagnosis",
      title: "AI-Powered Medical Imaging Diagnosis Platform",
      description: "Advanced medical imaging analysis using deep learning algorithms for early disease detection. Achieves 94% accuracy in detecting abnormalities and reduces diagnosis time by 70%.",
      category: "AI & Healthcare",
      subcategory: "Medical Imaging",
      price: 5999,
      currency: "$",
      tags: ["Medical Imaging", "Disease Detection", "Deep Learning", "Radiology", "Early Diagnosis"],
      author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
      images: ["https://ziontechgroup.com/images/medical-imaging.jpg"],
      createdAt: "2024-03-20T10:00:00.000Z",
      rating: 4.9,
      reviewCount: 89,
      featured: true,
      location: "Global",
      availability: "6-8 Weeks",
      aiScore: 98,
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/medical-imaging",
        address: "364 E Main St STE 1008 Middletown DE 19709"
      },
      marketPrice: "$5,000-12,000",
      competitors: ["IBM Watson Health", "Google Health", "Microsoft Healthcare"],
      roi: "600% within 8 months",
      setupTime: "6-8 weeks",
      integrations: ["PACS Systems", "EHR Platforms", "Radiology Workstations", "Hospital Information Systems"]
    },
    pricingTiers: [
      {
        name: "Clinical",
        price: 3999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 5,000 scans per month",
          "Standard disease detection models",
          "Basic PACS integration",
          "Standard reporting",
          "Email support"
        ],
        limitations: [
          "Limited model customization",
          "Basic integration support",
          "Standard accuracy (92%)"
        ],
        bestFor: "Small clinics and imaging centers",
        setupFee: 0,
        contractLength: "12 months",
        supportLevel: "Email support during business hours"
      },
      {
        name: "Hospital",
        price: 5999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 50,000 scans per month",
          "Advanced disease detection models",
          "Full PACS and EHR integration",
          "Custom reporting and analytics",
          "Priority support",
          "Model customization",
          "Training and certification"
        ],
        limitations: [
          "Monthly volume limits",
          "Standard customization options"
        ],
        bestFor: "Medium-sized hospitals and medical centers",
        setupFee: 10000,
        contractLength: "24 months",
        supportLevel: "Priority support with 2-hour response time"
      },
      {
        name: "Enterprise",
        price: 9999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited scans",
          "Custom AI model development",
          "Multi-site deployment",
          "Dedicated account manager",
          "24/7 premium support",
          "Advanced analytics platform",
          "Compliance automation",
          "Research collaboration tools"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 12-month commitment"
        ],
        bestFor: "Large hospital networks and research institutions",
        setupFee: 25000,
        contractLength: "36 months",
        supportLevel: "24/7 dedicated support with 30-minute response time"
      }
    ],
    marketComparison: {
      competitors: ["IBM Watson Health ($8,000-20,000/month)", "Google Health ($6,000-15,000/month)", "Microsoft Healthcare ($7,000-18,000/month)"],
      marketAverage: "$7,000-18,000/month",
      ourAdvantage: "30-50% cost savings with superior accuracy and faster setup",
      priceDifference: "Up to 50% less than market leaders"
    },
    roiAnalysis: {
      averageROI: "600% within 8 months",
      timeToROI: "4-8 months",
      costSavings: "70% reduction in diagnosis time, 40% reduction in radiologist workload",
      revenueIncrease: "30-50% increase in patient throughput, 25% reduction in diagnostic errors",
      caseStudies: [
        "Regional Hospital: 60% faster diagnosis turnaround time",
        "Imaging Center: 40% increase in daily scan capacity",
        "Research Institute: 80% improvement in early detection rates"
      ]
    },
    implementation: {
      setupTime: "6-8 weeks",
      trainingIncluded: true,
      customizationOptions: ["Custom disease models", "Multi-modality support", "White-label branding", "Custom workflows"],
      integrationServices: ["PACS integration", "EHR system connection", "Radiology workstation setup", "Compliance certification"],
      ongoingSupport: "24/7 technical support, monthly model updates, quarterly accuracy reviews, annual compliance audits"
    }
  },

  {
    service: {
      id: "ai-powered-legal-document-analysis",
      title: "AI-Powered Legal Document Analysis & Contract Review",
      description: "Intelligent legal document processing platform that analyzes contracts, identifies risks, and extracts key terms using NLP. Reduces contract review time by 80% and improves accuracy by 90%.",
      category: "AI & Legal Tech",
      subcategory: "Document Analysis",
      price: 2799,
      currency: "$",
      tags: ["Legal Tech", "Contract Review", "NLP", "Risk Assessment", "Document Processing"],
      author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
      images: ["https://ziontechgroup.com/images/legal-document-analysis.jpg"],
      createdAt: "2024-03-25T10:00:00.000Z",
      rating: 4.7,
      reviewCount: 134,
      featured: true,
      location: "Global",
      availability: "4-5 Weeks",
      aiScore: 95,
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/legal-document-analysis",
        address: "364 E Main St STE 1008 Middletown DE 19709"
      },
      marketPrice: "$2,500-5,500",
      competitors: ["Kira Systems", "Luminance", "ContractPodAi"],
      roi: "400% within 5 months",
      setupTime: "4-5 weeks",
      integrations: ["Document Management Systems", "Legal Practice Management", "E-signature Platforms", "CRM Systems"]
    },
    pricingTiers: [
      {
        name: "Practice",
        price: 1799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 1,000 documents per month",
          "Standard contract analysis",
          "Basic risk identification",
          "Standard reporting",
          "Email support"
        ],
        limitations: [
          "Limited customization options",
          "Basic integration support",
          "Standard accuracy (85%)"
        ],
        bestFor: "Small law firms and solo practitioners",
        setupFee: 0,
        contractLength: "12 months",
        supportLevel: "Email support during business hours"
      },
      {
        name: "Firm",
        price: 2799,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Up to 10,000 documents per month",
          "Advanced contract analysis",
          "Custom risk models",
          "Advanced reporting and analytics",
          "Priority support",
          "Integration consulting",
          "Training and certification"
        ],
        limitations: [
          "Monthly volume limits",
          "Standard customization options"
        ],
        bestFor: "Medium-sized law firms and legal departments",
        setupFee: 5000,
        contractLength: "24 months",
        supportLevel: "Priority support with 4-hour response time"
      },
      {
        name: "Enterprise",
        price: 4999,
        currency: "$",
        billingCycle: "monthly",
        features: [
          "Unlimited documents",
          "Custom AI model development",
          "White-label solution",
          "Dedicated account manager",
          "24/7 premium support",
          "Advanced compliance tools",
          "Custom integrations",
          "Multi-language support"
        ],
        limitations: [
          "Annual contract required",
          "Minimum 12-month commitment"
        ],
        bestFor: "Large law firms, corporate legal departments, and legal tech companies",
        setupFee: 12000,
        contractLength: "36 months",
        supportLevel: "24/7 dedicated support with 1-hour response time"
      }
    ],
    marketComparison: {
      competitors: ["Kira Systems ($3,500-8,000/month)", "Luminance ($4,000-10,000/month)", "ContractPodAi ($3,000-7,000/month)"],
      marketAverage: "$3,500-8,500/month",
      ourAdvantage: "25-40% cost savings with superior accuracy and faster processing",
      priceDifference: "Up to 40% less than market leaders"
    },
    roiAnalysis: {
      averageROI: "400% within 5 months",
      timeToROI: "3-5 months",
      costSavings: "80% reduction in contract review time, 60% reduction in legal costs",
      revenueIncrease: "40-60% increase in contract processing capacity, 30% reduction in legal risks",
      caseStudies: [
        "Corporate Legal Department: 75% faster contract review process",
        "Law Firm: 50% increase in client capacity",
        "Legal Tech Company: 80% improvement in document accuracy"
      ]
    },
    implementation: {
      setupTime: "4-5 weeks",
      trainingIncluded: true,
      customizationOptions: ["Custom risk models", "Multi-language support", "White-label branding", "Custom workflows"],
      integrationServices: ["Document management integration", "Legal practice management setup", "E-signature platform connection", "CRM system integration"],
      ongoingSupport: "24/7 technical support, monthly model updates, quarterly accuracy reviews, annual compliance updates"
    }
  }
];

export const getPricingByCategory = (category: string): ServicePricing[] => {
  return REVOLUTIONARY_PRICING_GUIDE_2030.filter(service => service.service.category === category);
};

export const getPricingByPriceRange = (minPrice: number, maxPrice: number): ServicePricing[] => {
  return REVOLUTIONARY_PRICING_GUIDE_2030.filter(service => 
    service.pricingTiers.some(tier => tier.price >= minPrice && tier.price <= maxPrice)
  );
};

export const getFeaturedPricing = (): ServicePricing[] => {
  return REVOLUTIONARY_PRICING_GUIDE_2030.filter(service => service.service.featured);
};

export const searchPricing = (query: string): ServicePricing[] => {
  const lowercaseQuery = query.toLowerCase();
  return REVOLUTIONARY_PRICING_GUIDE_2030.filter(service =>
    service.service.title.toLowerCase().includes(lowercaseQuery) ||
    service.service.description.toLowerCase().includes(lowercaseQuery) ||
    service.service.category.toLowerCase().includes(lowercaseQuery) ||
    service.service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export default REVOLUTIONARY_PRICING_GUIDE_2030;