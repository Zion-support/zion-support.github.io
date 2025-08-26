export interface SpecializedITService2025 {
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

export const SPECIALIZED_IT_SERVICES_2025: SpecializedITService2025[] = [
  {
    id: "5g-enterprise-network-solutions",
    title: "5G Enterprise Network Infrastructure & Management Platform",
    description: "Comprehensive 5G enterprise networking solution that provides ultra-fast, low-latency connectivity with advanced network slicing, security, and management capabilities.",
    category: "Network Infrastructure",
    subcategory: "5G Solutions",
    price: 6500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "5G network slicing",
      "Ultra-low latency connectivity",
      "Massive IoT device support",
      "Network function virtualization",
      "Advanced traffic management",
      "Real-time network analytics"
    ],
    benefits: [
      "Reduce network latency by 90%",
      "Support 100x more connected devices",
      "Improve network reliability by 99.9%",
      "Enable real-time applications",
      "Reduce infrastructure costs by 40%"
    ],
    useCases: [
      "Smart manufacturing",
      "Autonomous vehicles",
      "Remote surgery",
      "Augmented reality",
      "Industrial automation"
    ],
    targetAudience: [
      "Manufacturing companies",
      "Healthcare organizations",
      "Transportation companies",
      "Technology companies",
      "Government agencies"
    ],
    tags: ["5G", "Network Infrastructure", "IoT", "Low Latency", "Network Slicing"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$6,500 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "edge-ai-computing-platform",
    title: "Edge AI Computing & Inference Platform",
    description: "Distributed edge computing platform that brings AI processing closer to data sources, enabling real-time AI applications with minimal latency and bandwidth requirements.",
    category: "Edge Computing",
    subcategory: "AI Inference",
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Distributed AI inference",
      "Real-time model serving",
      "Edge device management",
      "Model optimization for edge",
      "Offline AI capabilities",
      "Federated learning support"
    ],
    benefits: [
      "Reduce latency by 95%",
      "Cut bandwidth costs by 80%",
      "Enable offline AI operations",
      "Improve privacy and security",
      "Scale to millions of edge devices"
    ],
    useCases: [
      "Autonomous vehicles",
      "Smart cities",
      "Industrial IoT",
      "Retail analytics",
      "Healthcare monitoring"
    ],
    targetAudience: [
      "Automotive companies",
      "City governments",
      "Manufacturing companies",
      "Retail chains",
      "Healthcare providers"
    ],
    tags: ["Edge Computing", "AI", "Machine Learning", "IoT", "Real-time Processing"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "premium",
    marketPrice: "$4,200 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export const getServicesByCategory = (category: string) => {
  return SPECIALIZED_IT_SERVICES_2025.filter(service => service.category === category);
};

export const getFeaturedServices = () => {
  return SPECIALIZED_IT_SERVICES_2025.filter(service => 
    service.price >= 4000 || service.category === "Network Infrastructure"
  );
};