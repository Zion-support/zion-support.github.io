export interface Service { id: string
  );
  title: string
  );
  description: string
  );
  features: string[];,
benefits: string[];,
pricing: {,
basic: string
  );
    pro: string
  );
    enterprise: string; }
  }
  );
  contactInfo: { website: string
  );
    email: string
  );
    phone: string; }
  }
  );
  price?: string
  );
  icon?: string
  );
  href: string
  );
  popular?: boolean
  );
  category: "ai" | "it" | "cloud" | "security" | "data" | "automation""
  );
}

export const aiServices: Service[] = [
  { 
    id: "ai-analytics",""
    title: "AI Analytics & BI",""
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",""
    features: [
      "Real-time data processing",""
      "Predictive analytics",""
      "Custom dashboards",""
      "Automated reporting",""
      "Machine learning models""
    ],
    benefits: [
      "Improved decision making",""
      "Reduced manual analysis time",""
      "Enhanced business intelligence",""
      "Cost savings through automation""
    ],
    pricing: {,
basic: "299",""
      pro: "599",""
      enterprise: "999" }""
    },
    contactInfo: { ,
website: "https://ziontechgroup.com/ai-analytics",""
      email: "ai@ziontechgroup.com",""
      phone: "+1-555-0123" }""
    },
    price: "$299/month",""
    icon: "📊",""
                href: "/ai-analytics",""
    popular: true,
    category: "ai""
  },
  { 
    id: "ai-automation",""
    title: "AI Automation",""
    description: "Streamline your business processes with intelligent automation solutions.",""
    features: [
      "Workflow automation",""
      "Document processing",""
      "Email automation",""
      "Task scheduling",""
      "Process optimization""
    ],
    benefits: [
      "Increased productivity",""
      "Reduced human error",""
      "Faster processing times",""
      "Scalable operations""
    ],
    pricing: {,
basic: "199",""
      pro: "399",""
      enterprise: "799" }""
    },
    contactInfo: { ,
website: "https://ziontechgroup.com/ai-automation",""
      email: "automation@ziontechgroup.com",""
      phone: "+1-555-0124" }""
    },
    price: "$199/month",""
    icon: "🤖",""
                href: "/ai-automation",""
    category: "ai""
  },
  { 
    id: "ai-chatbots",""
    title: "AI Chatbots",""
    description: "Intelligent conversational AI solutions for customer service and support.",""
    features: [
      "Natural language processing",""
      "Multi-language support",""
      "24/7 availability",""
      "Integration with existing systems",""
      "Analytics and insights""
    ],
    benefits: [
      "Improved customer satisfaction",""
      "Reduced support costs",""
      "Instant responses",""
      "Scalable customer service""
    ],
    pricing: {,
basic: "149",""
      pro: "299",""
      enterprise: "599" }""
    },
    contactInfo: { ,
website: "https://ziontechgroup.com/ai-chatbots",""
      email: "chatbots@ziontechgroup.com",""
      phone: "+1-555-0125" }""
    },
    price: "$149/month",""
    icon: "💬",""
                href: "/ai-chatbots",""
    category: "ai""
  }
];
export const itServices: Service[] = [
  { 
    id: "web-development",""
    title: "Web Development",""
    description: "Build modern, responsive websites and web applications that drive results.",""
    features: [
      "Responsive design",""
      "SEO optimization",""
      "Performance optimization",""
      "Cross-browser compatibility",""
      "Mobile-first approach""
    ],
    benefits: [
      "Increased online presence",""
      "Better user experience",""
      "Higher conversion rates",""
      "Mobile accessibility""
    ],
    pricing: {,
basic: "2999",""
      pro: "5999",""
      enterprise: "9999" }""
    },
    contactInfo: { ,
website: "https://ziontechgroup.com/web-development",""
      email: "webdev@ziontechgroup.com",""
      phone: "+1-555-0126" }""
    },
    price: "$2,999/project",""
    icon: "🌐",""
                href: "/web-development",""
    popular: true,
    category: "it""
  },
  { 
    id: "cloud-infrastructure",""
    title: "Cloud Infrastructure",""
    description: "Scalable and secure cloud solutions for modern businesses.",""
    features: [
      "Cloud migration",""
      "Infrastructure as Code",""
      "Auto-scaling",""
      "Disaster recovery",""
      "Security compliance""
    ],
    benefits: [
      "Reduced infrastructure costs",""
      "Improved scalability",""
      "Enhanced security",""
      "Better reliability""
    ],
    pricing: {,
basic: "499",""
      pro: "999",""
      enterprise: "1999" }""
    },
    contactInfo: { ,
website: "https://ziontechgroup.com/cloud-infrastructure",""
      email: "cloud@ziontechgroup.com",""
      phone: "+1-555-0127" }""
    },
    price: "$499/month",""
    icon: "☁️",""
                href: "/cloud-infrastructure",""
    category: "it""
  },
  { 
    id: "cybersecurity",""
    title: "Cybersecurity",""
    description: "Comprehensive security solutions to protect your digital assets.",""
    features: [
      "Security audits",""
      "Threat monitoring",""
      "Incident response",""
      "Compliance management",""
      "Security training""
    ],
    benefits: [
      "Protection against threats",""
      "Regulatory compliance",""
      "Reduced risk exposure",""
      "Peace of mind""
    ],
    pricing: {,
basic: "399",""
      pro: "799",""
      enterprise: "1499" }""
    },
    contactInfo: { ,
website: "https://ziontechgroup.com/cybersecurity",""
      email: "security@ziontechgroup.com",""
      phone: "+1-555-0128" }""
    },
    price: "$399/month",""
    icon: "🔒",""
                href: "/cybersecurity",""
    category: "it""
  }
];
export const itSolutions = itServices,
export const allServices: Service[] = [...aiServices, ...itServices];
// Export as servicesData for backward compatibility,
export const servicesData = { aiServices,
  itServices,
  itSolutions: itServices,
  allServices }
}
export const getServiceById = (id: string): Service | undefined => { return allServices.find(service => service.id === id); }
}
export const getServicesByCategory = (category: Service["category"]): Service[] => { return allServices.filter(service => service.category === category); }""
}
export const getPopularServices = (): Service[] => { return allServices.filter(service => service.popular); }
}
  );