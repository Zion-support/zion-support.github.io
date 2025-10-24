export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    basic: string;
    pro: string;
    enterprise: string;
  };
  contactInfo: {
    website: string;
    email: string;
    phone: string;
  };
  price?: string;
  icon?: string;
  href: string;
  popular?: boolean;
  category: "ai" | "it" | "cloud" | "security" | "data" | "automation";
}

export const aiServices: Service[] = [
  {
    id: "ai-analytics",
    title: "AI Analytics & BI",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboards",
      "Automated reporting",
      "Machine learning models"
    ],
    benefits: [
      "Improved decision making",
      "Reduced manual analysis time",
      "Enhanced business intelligence",
      "Cost savings through automation"
    ],
    pricing: {
      basic: "299",
      pro: "599",
      enterprise: "999"
    },
    contactInfo: {
      website: "https://ziontechgroup.com/ai-analytics",
      email: "ai@ziontechgroup.com",
      phone: "+1-555-0123"
    },
    price: "$299/month",
    icon: "📊",
    href: "/ai-analytics",
    popular: true,
    category: "ai"
  }
];

export const itServices: Service[] = [
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud with our expert services.",
    features: [
      "Infrastructure assessment",
      "Migration planning",
      "Data transfer",
      "Security implementation",
      "Performance optimization"
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better performance"
    ],
    pricing: {
      basic: "199",
      pro: "399",
      enterprise: "799"
    },
    contactInfo: {
      website: "https://ziontechgroup.com/cloud-migration",
      email: "cloud@ziontechgroup.com",
      phone: "+1-555-0124"
    },
    price: "$199/month",
    icon: "☁️",
    href: "/cloud-migration",
    popular: true,
    category: "cloud"
  }
];

export const g5Services: Service[] = [
  {
    id: "5g-network-infrastructure",
    title: "5G Network Infrastructure",
    description: "Build robust 5G networks with our comprehensive infrastructure solutions.",
    features: [
      "Network design",
      "Infrastructure deployment",
      "Performance optimization",
      "Security implementation",
      "Monitoring and maintenance"
    ],
    benefits: [
      "Ultra-fast connectivity",
      "Low latency",
      "High reliability",
      "Future-proof technology"
    ],
    pricing: {
      basic: "499",
      pro: "999",
      enterprise: "1999"
    },
    contactInfo: {
      website: "https://ziontechgroup.com/5g-network-infrastructure",
      email: "5g@ziontechgroup.com",
      phone: "+1-555-0125"
    },
    price: "$499/month",
    icon: "📡",
    href: "/5g-network-infrastructure",
    popular: true,
    category: "data"
  }
];

export const aiServicesSubcategories: Service[] = [
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Advanced BI solutions powered by AI for better business insights.",
    features: [
      "Data visualization",
      "Predictive analytics",
      "Custom reports",
      "Real-time dashboards",
      "AI-powered insights"
    ],
    benefits: [
      "Better decision making",
      "Improved efficiency",
      "Cost reduction",
      "Competitive advantage"
    ],
    pricing: {
      basic: "199",
      pro: "399",
      enterprise: "799"
    },
    contactInfo: {
      website: "https://ziontechgroup.com/ai-services/business-intelligence",
      email: "bi@ziontechgroup.com",
      phone: "+1-555-0126"
    },
    price: "$199/month",
    icon: "📈",
    href: "/ai-services/business-intelligence",
    popular: false,
    category: "ai"
  }
];

// Export all services data
export const servicesData = {
  aiServices,
  itServices,
  g5Services,
  aiServicesSubcategories
};