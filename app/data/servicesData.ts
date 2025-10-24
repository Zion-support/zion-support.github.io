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
  category: 'ai' | 'it' | 'cloud' | 'security' | 'data' | 'automation';
}

export const aiServices: Service[] = [
  {
    id: 'ai-analytics',
    title: 'AI Analytics & BI',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Custom dashboards',
      'Automated reporting',
      'Machine learning models'
    ],
    benefits: [
      'Improved decision making',
      'Cost reduction',
      'Increased efficiency',
      'Better customer insights'
    ],
    pricing: {
      basic: '299',
      pro: '599',
      enterprise: '999'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com',
      email: 'ai@ziontechgroup.com',
      phone: '+1-555-0123'
    },
    price: '$299/month',
    icon: '📊',
    href: '/ai-analytics',
    popular: true,
    category: 'ai'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Streamline your business processes with intelligent automation solutions.',
    features: [
      'Workflow automation',
      'Document processing',
      'Email automation',
      'Task scheduling',
      'Process optimization'
    ],
    benefits: [
      'Reduced manual work',
      'Faster processing',
      'Lower error rates',
      'Scalable operations'
    ],
    pricing: {
      basic: '199',
      pro: '399',
      enterprise: '799'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com',
      email: 'ai@ziontechgroup.com',
      phone: '+1-555-0123'
    },
    price: '$199/month',
    icon: '🤖',
    href: '/ai-automation',
    category: 'ai'
  }
];

export const itServices: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build modern, responsive websites and web applications that drive results.',
    features: [
      'Responsive design',
      'SEO optimization',
      'Performance optimization',
      'Cross-browser compatibility',
      'Mobile-first approach'
    ],
    benefits: [
      'Better user experience',
      'Higher conversion rates',
      'Improved SEO rankings',
      'Mobile accessibility'
    ],
    pricing: {
      basic: '2999',
      pro: '5999',
      enterprise: '9999'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com',
      email: 'web@ziontechgroup.com',
      phone: '+1-555-0123'
    },
    price: '$2,999/project',
    icon: '🌐',
    href: '/web-development',
    popular: true,
    category: 'it'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses.',
    features: [
      'AWS/Azure/GCP setup',
      'Auto-scaling',
      'Load balancing',
      'Disaster recovery',
      '24/7 monitoring'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better reliability'
    ],
    pricing: {
      basic: '499',
      pro: '999',
      enterprise: '1999'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com',
      email: 'cloud@ziontechgroup.com',
      phone: '+1-555-0123'
    },
    price: '$499/month',
    icon: '☁️',
    href: '/cloud-infrastructure',
    popular: true,
    category: 'it'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: [
      'Security audits',
      'Penetration testing',
      'Firewall configuration',
      'Incident response',
      'Compliance management'
    ],
    benefits: [
      'Enhanced security posture',
      'Compliance assurance',
      'Risk mitigation',
      'Peace of mind'
    ],
    pricing: {
      basic: '399',
      pro: '799',
      enterprise: '1499'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com',
      email: 'security@ziontechgroup.com',
      phone: '+1-555-0123'
    },
    price: '$399/month',
    icon: '🔒',
    href: '/cybersecurity',
    category: 'it'
  }
];

export const itSolutions = itServices;

export const allServices: Service[] = [...aiServices, ...itServices];

// Export as servicesData for backward compatibility
export const servicesData = {
  aiServices,
  itServices,
  itSolutions,
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
