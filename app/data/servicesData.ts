export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
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
    price: '$2,999/project',
    icon: '🌐',
    href: '/web-development',
    popular: true,
    category: 'it'
  }
];

export const allServices: Service[] = [...aiServices, ...itServices];

// Export as servicesData for backward compatibility
export const servicesData = {
  aiServices,
  itServices,
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
