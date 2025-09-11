export interface InnovativeEnterpriseSolution2025 {
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
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const INNOVATIVE_ENTERPRISE_SOLUTIONS_2025: InnovativeEnterpriseSolution2025[] = [
  {
    id: "enterprise-solution-1",
    title: "Enterprise Digital Transformation Platform",
    description: "Comprehensive platform for enterprise digital transformation and modernization",
    category: "Digital Transformation",
    subcategory: "Enterprise Solutions",
    price: 5000,
    currency: "USD",
    pricingModel: "monthly",
    features: ["Cloud migration", "Process automation", "Data integration"],
    benefits: ["Improved efficiency", "Cost reduction", "Scalability"],
    useCases: ["Legacy modernization", "Cloud adoption", "Process optimization"],
    targetAudience: ["Large enterprises", "Fortune 500", "Government agencies"],
    tags: ["Digital Transformation", "Enterprise", "Cloud", "Automation"],
    estimatedDelivery: "3-6 months",
    supportLevel: "24/7",
    marketPrice: "$10,000-50,000",
    roi: "400%",
    innovationLevel: "Very High",
    contactInfo: {
      phone: "+1-555-0123",
      email: "enterprise@ziontech.com",
      website: "https://ziontech.com"
    }
  }
];