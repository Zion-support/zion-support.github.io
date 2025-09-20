export interface InnovativeService2025 {
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

export const INNOVATIVE_NEW_SERVICES_2025: InnovativeService2025[] = [
  {
    id: "ai-predictive-business-intelligence",
    title: "AI-Powered Predictive Business Intelligence Platform",
    description: "Advanced business intelligence platform that uses machine learning to predict market trends, customer behavior, and business outcomes with 95% accuracy.",
    category: "AI & Analytics",
    subcategory: "Business Intelligence",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time predictive analytics",
      "AI-powered forecasting models",
      "Custom dashboard builder",
      "Automated reporting engine",
      "Multi-source data integration"
    ],
    benefits: [
      "Increase revenue by 25-40% through predictive insights",
      "Reduce operational costs by 30%",
      "Improve decision-making speed by 80%",
      "Identify market opportunities before competitors"
    ],
    useCases: [
      "Financial forecasting",
      "Sales pipeline optimization",
      "Inventory management",
      "Customer churn prediction",
      "Market trend analysis"
    ],
    targetAudience: [
      "CFOs and finance teams",
      "Sales and marketing executives",
      "Operations managers",
      "Business analysts",
      "C-level executives"
    ],
    tags: ["AI", "Business Intelligence", "Predictive Analytics", "Machine Learning", "Data Science"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-ai-development-platform",
    title: "Autonomous AI Development & Deployment Platform",
    description: "Self-evolving AI platform that automatically designs, trains, and deploys machine learning models without human intervention, continuously improving performance.",
    category: "AI & Development",
    subcategory: "Autonomous Systems",
    price: 5000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AutoML model generation",
      "Continuous learning and optimization",
      "Automated hyperparameter tuning",
      "Self-healing model deployment",
      "Performance monitoring and alerts"
    ],
    benefits: [
      "Reduce AI development time by 90%",
      "Eliminate need for data scientists",
      "Continuous model improvement",
      "Faster time to market"
    ],
    useCases: [
      "Predictive maintenance",
      "Fraud detection",
      "Customer segmentation",
      "Demand forecasting",
      "Quality control"
    ],
    targetAudience: [
      "Software development teams",
      "Data science teams",
      "DevOps engineers",
      "Product managers",
      "Technology consultants"
    ],
    tags: ["AI", "AutoML", "Machine Learning", "DevOps", "Automation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$5,000 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const getServicesByCategory = (category: string) => {
  return INNOVATIVE_NEW_SERVICES_2025.filter(service => service.category === category);
};

export const getFeaturedServices = () => {
  return INNOVATIVE_NEW_SERVICES_2025.filter(service => 
    service.price >= 3000 || service.category === "AI & Analytics"
  );
};