export interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const services: Service[] = [
  {
    id: "ai-customer-support-automation",
    name: "AI Customer Support Automation",
    tagline: "Transform customer service with intelligent AI automation",
    price: "$299",
    description: "Advanced AI-powered customer support automation that handles inquiries, resolves issues, and provides 24/7 assistance with natural language processing.",
    features: [
      "Natural language processing",
      "Multi-channel support",
      "Automated ticket routing",
      "Sentiment analysis",
      "Knowledge base integration",
      "Real-time chat support",
      "Escalation management",
      "Performance analytics",
      "Custom AI training",
      "API integration"
    ],
    link: "/services/ai-customer-support-automation",
    category: "AI & Automation",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "cloud-infrastructure-optimization",
    name: "Cloud Infrastructure Optimization",
    tagline: "Maximize cloud performance and reduce costs",
    price: "$199",
    description: "Comprehensive cloud infrastructure optimization service that analyzes, monitors, and optimizes your cloud resources for maximum efficiency and cost savings.",
    features: [
      "Cost optimization analysis",
      "Performance monitoring",
      "Resource right-sizing",
      "Auto-scaling configuration",
      "Security assessment",
      "Compliance reporting",
      "Migration planning",
      "24/7 monitoring",
      "Expert consultation",
      "Custom solutions"
    ],
    link: "/services/cloud-infrastructure-optimization",
    category: "Cloud & Infrastructure",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];