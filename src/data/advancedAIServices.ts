export interface AdvancedAIService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const ADVANCED_AI_SERVICES: AdvancedAIService[] = [
  // AI-Powered Financial Services
  {
    id: "ai-financial-advisor",
    title: "AI-Powered Financial Advisory Platform",
    description: "Intelligent financial planning and investment advisory system that provides personalized financial recommendations using advanced machine learning algorithms.",
    category: "AI & Financial Services",
    subcategory: "Financial Advisory",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Personalized investment portfolios",
      "Risk assessment algorithms",
      "Market trend analysis",
      "Automated rebalancing",
      "Tax optimization strategies",
      "Real-time portfolio monitoring"
    ],
    benefits: [
      "Increase investment returns by 15-25%",
      "Reduce financial planning time by 80%",
      "Minimize tax liabilities",
      "Professional-grade financial advice",
      "24/7 portfolio management"
    ],
    useCases: [
      "Individual investors",
      "Financial advisors",
      "Wealth management firms",
      "Retirement planning",
      "Tax optimization"
    ],
    targetAudience: [
      "High-net-worth individuals",
      "Financial advisors",
      "Investment firms",
      "Retirement planners",
      "Tax professionals"
    ],
    tags: ["AI", "Financial Advisory", "Investment Management", "Portfolio Optimization", "Tax Planning"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Legal Research
  {
    id: "ai-legal-research-assistant",
    title: "AI Legal Research & Document Analysis Platform",
    description: "Advanced legal research platform that uses natural language processing to analyze case law, contracts, and legal documents for faster, more accurate legal research.",
    category: "AI & Legal Services",
    subcategory: "Legal Research",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Case law analysis",
      "Contract review automation",
      "Legal precedent identification",
      "Document similarity matching",
      "Regulatory compliance checking",
      "Legal citation validation"
    ],
    benefits: [
      "Reduce research time by 70%",
      "Improve case outcome prediction",
      "Enhance contract review accuracy",
      "Stay updated on legal changes",
      "Reduce legal research costs"
    ],
    useCases: [
      "Law firms",
      "Corporate legal departments",
      "Legal researchers",
      "Compliance officers",
      "Contract managers"
    ],
    targetAudience: [
      "Law firms",
      "Corporate legal teams",
      "Legal researchers",
      "Compliance professionals",
      "Contract administrators"
    ],
    tags: ["AI", "Legal Research", "Document Analysis", "Case Law", "Contract Review"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Healthcare Diagnostics
  {
    id: "ai-healthcare-diagnostics",
    title: "AI Healthcare Diagnostic Imaging Platform",
    description: "Advanced medical imaging analysis platform that uses deep learning to detect diseases, analyze medical scans, and provide diagnostic recommendations.",
    category: "AI & Healthcare",
    subcategory: "Medical Diagnostics",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Medical image analysis",
      "Disease detection algorithms",
      "Diagnostic recommendations",
      "Patient data integration",
      "Radiology workflow automation",
      "Clinical decision support"
    ],
    benefits: [
      "Improve diagnostic accuracy by 25%",
      "Reduce diagnosis time by 60%",
      "Enhance patient outcomes",
      "Optimize radiology workflows",
      "Reduce healthcare costs"
    ],
    useCases: [
      "Hospitals",
      "Radiology centers",
      "Medical clinics",
      "Research institutions",
      "Telemedicine platforms"
    ],
    targetAudience: [
      "Healthcare providers",
      "Radiologists",
      "Medical imaging centers",
      "Hospital administrators",
      "Healthcare IT teams"
    ],
    tags: ["AI", "Healthcare", "Medical Imaging", "Diagnostics", "Radiology"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Supply Chain Optimization
  {
    id: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization Platform",
    description: "Intelligent supply chain management system that uses predictive analytics and machine learning to optimize inventory, reduce costs, and improve efficiency.",
    category: "AI & Supply Chain",
    subcategory: "Supply Chain Management",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Route optimization",
      "Supplier performance analysis",
      "Risk assessment",
      "Real-time monitoring"
    ],
    benefits: [
      "Reduce inventory costs by 20-30%",
      "Improve delivery times by 25%",
      "Optimize supplier relationships",
      "Reduce supply chain risks",
      "Increase operational efficiency"
    ],
    useCases: [
      "Manufacturing companies",
      "Retail chains",
      "Logistics providers",
      "E-commerce businesses",
      "Distribution centers"
    ],
    targetAudience: [
      "Supply chain managers",
      "Operations directors",
      "Logistics coordinators",
      "Inventory managers",
      "Procurement teams"
    ],
    tags: ["AI", "Supply Chain", "Inventory Management", "Logistics", "Predictive Analytics"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $6,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // AI-Powered Energy Management
  {
    id: "ai-energy-management",
    title: "AI Energy Management & Optimization Platform",
    description: "Smart energy management system that uses AI to optimize energy consumption, predict demand, and reduce costs for commercial and industrial facilities.",
    category: "AI & Energy",
    subcategory: "Energy Management",
    price: 1900,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Energy consumption monitoring",
      "Demand forecasting",
      "Peak load management",
      "Renewable energy integration",
      "Cost optimization",
      "Sustainability reporting"
    ],
    benefits: [
      "Reduce energy costs by 15-25%",
      "Improve energy efficiency",
      "Optimize renewable energy usage",
      "Reduce carbon footprint",
      "Comply with regulations"
    ],
    useCases: [
      "Commercial buildings",
      "Industrial facilities",
      "Data centers",
      "Retail chains",
      "Manufacturing plants"
    ],
    targetAudience: [
      "Facility managers",
      "Energy managers",
      "Sustainability officers",
      "Building owners",
      "Operations managers"
    ],
    tags: ["AI", "Energy Management", "Sustainability", "Cost Optimization", "Renewable Energy"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,900 - $5,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];