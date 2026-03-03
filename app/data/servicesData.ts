// Service data for AI and IT solutions
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
  }
  contactInfo: {
    website: string;
    email: string;
    phone: string;
  }
  icon: string;
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
      'Increased efficiency',
      'Better decision making',
      'Cost reduction',
      'Competitive advantage'
    ],
    pricing: {
      basic: '299',
      pro: '599',
      enterprise: '1299'
    },
    contactInfo: {
      website: '/data-analytics',
      email: 'ai@ziontechgroup.com',
      phone: '+1-555-0123'
    },
    icon: '📊',
    href: '/data-analytics',
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
      'Time savings',
      'Reduced errors',
      'Scalable processes',
      'Improved productivity'
    ],
    pricing: {
      basic: '199',
      pro: '399',
      enterprise: '899'
    },
    contactInfo: {
      website: '/ai-services/process-automation',
      email: 'automation@ziontechgroup.com',
      phone: '+1-555-0124'
    },
    icon: '🤖',
    href: '/ai-services/process-automation',
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
      'Mobile accessibility',
      'Search engine visibility'
    ],
    pricing: {
      basic: '2999',
      pro: '5999',
      enterprise: '12999'
    },
    contactInfo: {
      website: '/web-development',
      email: 'web@ziontechgroup.com',
      phone: '+1-555-0125'
    },
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
      'Cloud migration',
      'Infrastructure as Code',
      'Auto-scaling',
      'Security compliance',
      '24/7 monitoring'
    ],
    benefits: [
      'Scalable resources',
      'Cost optimization',
      'High availability',
      'Security compliance'
    ],
    pricing: {
      basic: '1999',
      pro: '3999',
      enterprise: '7999'
    },
    contactInfo: {
      website: '/cloud-infrastructure',
      email: 'cloud@ziontechgroup.com',
      phone: '+1-555-0126'
    },
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
      'Threat monitoring',
      'Incident response',
      'Compliance management',
      'Security training'
    ],
    benefits: [
      'Data protection',
      'Regulatory compliance',
      'Risk mitigation',
      'Business continuity'
    ],
    pricing: {
      basic: '3999',
      pro: '6999',
      enterprise: '14999'
    },
    contactInfo: {
      website: '/cybersecurity',
      email: 'security@ziontechgroup.com',
      phone: '+1-555-0127'
    },
    icon: '🔒',
    href: '/cybersecurity',
    category: 'it'
  }
];

// Add itSolutions as alias for itServices
export const itSolutions = itServices;

export const allServices: Service[] = [...aiServices, ...itServices];
// Export as servicesData for backward compatibility
export const servicesData = {
  aiServices,
  itServices,
  itSolutions,
  allServices
}
export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
}
export const getServicesByCategory = (category: Service['category']): Service[] => {
  return allServices.filter(service => service.category === category);
}
export const getPopularServices = (): Service[] => {
  return allServices.filter(service => service.popular);
}