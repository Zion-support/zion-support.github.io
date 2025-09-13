export interface EnhancedService {
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
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
}

export const enhancedServices: EnhancedService[] = [
  {
    id: "ai-powered-analytics",
    title: "AI-Powered Business Analytics",
    description: "Advanced analytics platform with machine learning capabilities for data-driven decision making.",
    category: "Analytics",
    subcategory: "Business Intelligence",
    price: 299,
    currency: "USD",
    pricingModel: "per-month",
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Natural language queries",
      "Automated insights",
      "Custom dashboards"
    ],
    benefits: [
      "Make data-driven decisions",
      "Identify trends and patterns",
      "Improve operational efficiency",
      "Reduce manual reporting"
    ],
    useCases: [
      "Sales performance analysis",
      "Customer behavior insights",
      "Operational efficiency tracking",
      "Financial forecasting"
    ],
    targetAudience: ["Data analysts", "Business intelligence teams", "Executives", "Operations managers"],
    tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"],
    estimatedDelivery: "4-8 weeks",
    supportLevel: "premium",
    marketPrice: "$299-999/month",
    contactInfo: {
      phone: "+1-555-0126",
      email: "analytics@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technology: ["Python", "TensorFlow", "React", "PostgreSQL"],
    integrations: ["Salesforce", "HubSpot", "Google Analytics", "Microsoft Power BI"],
    compliance: ["GDPR", "SOC 2", "HIPAA"],
    roi: "250% ROI within 6 months",
    competitors: ["Tableau", "Looker", "Microsoft Power BI", "Qlik"]
  }
];