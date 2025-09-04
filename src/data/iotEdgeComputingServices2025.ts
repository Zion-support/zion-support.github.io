export interface IoTEdgeComputingService {
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
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

export const IOT_EDGE_COMPUTING_SERVICES_2025: IoTEdgeComputingService[] = [
  // Smart City IoT Management Platform
  {
    id: "smart-city-iot-management",
    title: "Smart City IoT Management Platform",
    description: "Comprehensive IoT platform for smart cities that manages traffic, utilities, environmental monitoring, and public services through connected sensors and edge computing.",
    category: "IoT & Edge Computing",
    subcategory: "Smart Cities",
    price: 4999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Traffic optimization",
      "Environmental monitoring",
      "Utility management",
      "Public safety systems",
      "Edge computing nodes",
      "Real-time analytics",
      "Predictive maintenance",
      "Citizen engagement",
      "Mobile app",
      "API integration"
    ],
    benefits: [
      "Reduce traffic congestion by 40%",
      "Lower energy consumption by 25%",
      "Improve public safety",
      "Enhance citizen services",
      "Optimize resource allocation"
    ],
    useCases: [
      "Traffic management",
      "Air quality monitoring",
      "Smart lighting",
      "Waste management",
      "Emergency response"
    ],
    targetAudience: [
      "City governments",
      "Urban planners",
      "Public works departments",
      "Emergency services",
      "Utility companies"
    ],
    tags: ["IoT", "Smart Cities", "Edge Computing", "Analytics", "Public Services"],
    estimatedDelivery: "12-18 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,999 - $19,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["MQTT", "LoRaWAN", "5G", "Kubernetes", "TensorFlow"],
      integrations: ["Siemens", "Schneider Electric", "Honeywell", "IBM", "Microsoft Azure"],
      apiEndpoints: 300,
      uptime: "99.9%",
      security: ["Device authentication", "Data encryption", "Secure protocols", "Privacy protection"]
    },
    competitors: ["Siemens", "Schneider Electric", "Honeywell", "IBM", "Microsoft"],
    marketSize: "$25.6 billion by 2025"
  }
];