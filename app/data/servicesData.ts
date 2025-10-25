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
      "Better business insights",
      "Cost savings"
    ],
    pricing: {
      basic: "$999/month",
      pro: "$2,999/month",
      enterprise: "Custom pricing"
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/ai-analytics',
      email: 'ai@ziontechgroup.com',
      phone: '+1-555-0123'
    },
    price: "Starting at $999/month",
    icon: "📊",
    href: "/services/ai-analytics",
    popular: true,
    category: "ai"
  },
  {
    id: "ai-automation",
    title: "AI Process Automation",
    description: "Automate your business processes with intelligent AI solutions that learn and adapt.",
    features: [
      "Workflow automation",
      "Document processing",
      "Customer service bots",
      "Data entry automation",
      "Smart scheduling"
    ],
    benefits: [
      'Increased productivity',
      'Reduced human error',
      'Faster processing times',
      'Scalable operations'
    ],
    pricing: {
      basic: "$1,499/month",
      pro: "$3,999/month",
      enterprise: "Custom pricing"
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/ai-automation',
      email: 'automation@ziontechgroup.com',
      phone: '+1-555-0124'
    },
    price: "Starting at $1,499/month",
    icon: "🤖",
    href: "/services/ai-automation",
    popular: true,
    category: "ai"
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Virtual Assistants",
    description: "Deploy intelligent chatbots that provide 24/7 customer support and assistance.",
    features: [
      "Natural language processing",
      "Multi-language support",
      "Integration with CRM",
      "Voice recognition",
      "Custom training"
    ],
    benefits: [
      "24/7 customer support",
      "Reduced support costs",
      "Improved customer satisfaction",
      "Scalable support"
    ],
    pricing: {
      basic: "$799/month",
      pro: "$2,499/month",
      enterprise: "Custom pricing"
    },
    contactInfo: {
      website: "https://ziontechgroup.com",
      email: "sales@ziontechgroup.com",
      phone: "+1-555-0123"
    },
    price: "Starting at $799/month",
    icon: "💬",
    href: "/services/ai-chatbots",
    popular: false,
    category: "ai"
  }
];

export const itServices: Service[] = [
  {
    id: "cloud-migration",
    title: "Cloud Migration Services",
    description: "Seamlessly migrate your infrastructure to the cloud with our expert team.",
    features: [
      "AWS/Azure/GCP migration",
      "Data migration",
      "Application modernization",
      "Security compliance",
      "Performance optimization"
    ],
    benefits: [
      'Increased online presence',
      'Better user experience',
      'Higher conversion rates',
      'Mobile accessibility'
    ],
    pricing: {
      basic: "$5,000/project",
      pro: "$15,000/project",
      enterprise: "Custom pricing"
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/web-development',
      email: 'webdev@ziontechgroup.com',
      phone: '+1-555-0126'
    },
    price: "Starting at $5,000",
    icon: "☁️",
    href: "/services/cloud-migration",
    popular: true,
    category: "cloud"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Protect your business with comprehensive cybersecurity services and monitoring.",
    features: [
      'Security audits',
      'Threat monitoring',
      'Incident response',
      'Compliance management',
      'Security training'
    ],
    benefits: [
      "Enhanced security posture",
      "Reduced risk of breaches",
      "Compliance assurance",
      "Peace of mind"
    ],
    pricing: {
      basic: "$2,999/month",
      pro: "$7,999/month",
      enterprise: "Custom pricing"
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/cloud-infrastructure',
      email: 'cloud@ziontechgroup.com',
      phone: '+1-555-0127'
    },
    price: '$499/month',
    icon: '☁️',
    href: '/cloud-infrastructure',
    category: 'it'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: [
      'Security audits',
      'Threat monitoring',
      'Incident response',
      'Compliance management',
      'Security training'
    ],
    benefits: [
      'Protection against threats',
      'Regulatory compliance',
      'Reduced risk exposure',
      'Peace of mind'
    ],
    pricing: {
      basic: '399',
      pro: '799',
      enterprise: '1499'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com/cybersecurity',
      email: 'security@ziontechgroup.com',
      phone: '+1-555-0128'
    },
    price: '$399/month',
    icon: '🔒',
    href: '/cybersecurity',
    category: 'it'
>>>>>>> cursor/fix-errors-and-merge-to-main-e11d
  }
];

export const allServices: Service[] = [...aiServices, ...itServices];

// Export as servicesData for backward compatibility
export const servicesData = {
  aiServices,
  itServices,
  itSolutions: itServices, // Add alias for itSolutions
  allServices
};

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return allServices.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return allServices.filter(service => service.popular);
};
