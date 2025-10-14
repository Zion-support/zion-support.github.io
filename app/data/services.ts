export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing?: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  icon?: string;
  href: string;
}

export const services: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Streamline your business processes with intelligent automation solutions.',
    category: 'AI Solutions',
    features: ['Process Automation', 'Workflow Optimization', 'Smart Decision Making'],
    pricing: {
      basic: 999,
      pro: 2499,
      enterprise: 4999
    },
    icon: '🤖',
    href: '/ai-automation'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for modern businesses.',
    category: 'Infrastructure',
    features: ['Cloud Migration', 'Scalable Architecture', 'Security & Compliance'],
    pricing: {
      basic: 799,
      pro: 1999,
      enterprise: 3999
    },
    icon: '☁️',
    href: '/cloud-infrastructure'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics.',
    category: 'Analytics',
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards'],
    pricing: {
      basic: 1299,
      pro: 2999,
      enterprise: 5999
    },
    icon: '📊',
    href: '/ai-data-analytics'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions.',
    category: 'Security',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management'],
    pricing: {
      basic: 899,
      pro: 2199,
      enterprise: 4499
    },
    icon: '🔒',
    href: '/cybersecurity'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export default services;