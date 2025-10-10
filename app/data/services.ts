export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  benefits: string[];
  pricing?: {
    basic: number;
    pro: number;
    enterprise: number;
  };
}

export const services: Service[] = [
  {
    id: 'ai-analytics',
    title: 'AI Analytics',
    description: 'Advanced AI-powered analytics platform for data-driven insights.',
    icon: 'BarChart',
    category: 'AI',
    features: ['Real-time analytics', 'Predictive modeling', 'Data visualization', 'Custom dashboards'],
    benefits: ['Increase efficiency by 80%', 'Reduce costs by 60%', 'Improve decision making', 'Scale operations'],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 999
    }
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Intelligent process automation for business operations.',
    icon: 'Zap',
    category: 'AI',
    features: ['Process automation', 'Workflow optimization', 'Smart scheduling', 'Task management'],
    benefits: ['Reduce manual work by 90%', 'Increase productivity', 'Eliminate errors', 'Scale efficiently'],
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 1299
    }
  },
  {
    id: 'ai-blockchain',
    title: 'AI Blockchain Solutions',
    description: 'AI-powered blockchain solutions for DeFi and enterprise applications.',
    icon: 'Shield',
    category: 'Blockchain',
    features: ['Smart contracts', 'DeFi protocols', 'NFT platforms', 'Security auditing'],
    benefits: ['Enhanced security', 'Reduced costs', 'Improved transparency', 'Global accessibility'],
    pricing: {
      basic: 199,
      pro: 599,
      enterprise: 1999
    }
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions for modern applications.',
    icon: 'Cloud',
    category: 'Infrastructure',
    features: ['Auto-scaling', 'Load balancing', 'Monitoring', 'Backup & recovery'],
    benefits: ['99.9% uptime', 'Cost optimization', 'Global reach', 'Security compliance'],
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 799
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive cybersecurity solutions to protect your business.',
    icon: 'Shield',
    category: 'Security',
    features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring'],
    benefits: ['Protect against threats', 'Ensure compliance', 'Minimize risks', '24/7 monitoring'],
    pricing: {
      basic: 129,
      pro: 349,
      enterprise: 1199
    }
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getAllServices = (): Service[] => {
  return services;
};