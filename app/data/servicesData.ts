export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  benefits: string[]
  pricing: {
    basic: string
    pro: string
    enterprise: string
  }
  contactInfo: {
    website: string
    email: string
    phone: string
  }
  price?: string
  icon?: string
  href: string
  popular?: boolean
  category: "ai" | "it" | "cloud" | "security" | "data" | "automation
}

export const aiServices: Service[] = [{
    id: "ai-analytics",
    title: "AI Analytics & BI",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    features: [
      "Real-time data processing",
      "Predictive analytics",
      "Custom dashboards",
      "Automated reporting",
      "Machine learning models
    ],
    benefits: [
      "Improved decision making",
      "Reduced manual analysis time",
      "Enhanced business intelligence",
      "Cost savings through automation
    ],
    pricing: {
      basic: "$999/month",
      pro: "$2,499/month",
      enterprise: "Custom pricing
    },
    contactInfo: {
      website: "https://ziontechgroup.com/ai-analytics",
      email: "ai-analytics@ziontechgroup.com",
      phone: "+1-555-123-4567
    },
    href: "/ai-analytics",
    popular: true,
    category: "ai
  },
  {
    id: "ai-automation",
    title: "AI Process Automation",
    description: "Streamline your business processes with intelligent automation solutions.",
    features: [
      "Workflow automation",
      "Document processing",
      "Task scheduling",
      "Error handling",
      "Performance monitoring
    ],
    benefits: [
      "Increased efficiency",
      "Reduced human error",
      "24/7 operation",
      "Scalable solutions
    ],
    pricing: {
      basic: "$1,499/month",
      pro: "$3,999/month",
      enterprise: "Custom pricing
    },
    contactInfo: {
      website: "https://ziontechgroup.com/ai-automation",
      email: "ai-automation@ziontechgroup.com",
      phone: "+1-555-123-4567
    },
    href: "/ai-automation",
    popular: true,
    category: "ai
  }
];
;
export const itServices: Service[] = [{
    id: "cloud-migration",
    title: "Cloud Migration Services",
    description: "Seamlessly migrate your infrastructure to the cloud with our expert team.",
    features: [
      "Infrastructure assessment",
      "Migration planning",
      "Data transfer",
      "Security implementation",
      "Performance optimization
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better performance
    ],
    pricing: {
      basic: "$2,999/month",
      pro: "$5,999/month",
      enterprise: "Custom pricing
    },
    contactInfo: {
      website: "https://ziontechgroup.com/cloud-migration",
      email: "cloud@ziontechgroup.com",
      phone: "+1-555-123-4567
    },
    href: "/cloud-migration",
    popular: true,
    category: "cloud
  }
];
;
export const allServices = [...aiServices, ...itServices];