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
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Streamline your business processes with intelligent automation solutions.",
    features: [
      "Workflow automation",
      "Document processing",
      "Email automation", 
      "Task scheduling",
      "Process optimization"
    ],
    benefits: [
      "Increased productivity",
      "Reduced human error",
      "Cost efficiency",
      "Scalable operations"
    ],
    pricing: {
      basic: "199",
      pro: "399",
      enterprise: "799"
    },
    contactInfo: {
      website: "https://ziontechgroup.com/ai-automation",
      email: "automation@ziontechgroup.com", 
      phone: "+1-555-0124"
    },
    price: "$199/month",
    icon: "🤖",
    href: "/ai-automation",
    popular: false,
    category: "ai"
  }
];