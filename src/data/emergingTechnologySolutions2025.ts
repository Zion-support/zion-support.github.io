export interface EmergingTechnologySolution2025 {
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

export const EMERGING_TECHNOLOGY_SOLUTIONS_2025: EmergingTechnologySolution2025[] = [
  {
    id: "emerging-tech-1",
    title: "Quantum Computing Integration Service",
    description: "Cutting-edge quantum computing solutions for complex problem solving",
    category: "Quantum Computing",
    subcategory: "Advanced Computing",
    price: 10000,
    currency: "USD",
    pricingModel: "project-based",
    features: ["Quantum algorithms", "Hybrid computing", "Optimization solutions"],
    benefits: ["Exponential speedup", "Complex problem solving", "Future-proof technology"],
    useCases: ["Cryptography", "Optimization", "Simulation", "Machine Learning"],
    targetAudience: ["Research institutions", "Tech companies", "Government labs"],
    tags: ["Quantum Computing", "Advanced Technology", "Innovation", "Future Tech"],
    estimatedDelivery: "6-12 months",
    supportLevel: "24/7",
    marketPrice: "$50,000-200,000",
    roi: "500%",
    innovationLevel: "Revolutionary",
    contactInfo: {
      phone: "+1-555-0123",
      email: "quantum@ziontech.com",
      website: "https://ziontech.com"
    }
  }
];