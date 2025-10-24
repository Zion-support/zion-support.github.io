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
  category?: string;
}

export const aiServices: Service[] = [
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced AI',
    features: ['Text generation', 'Content optimization', 'SEO integration'],
    benefits: ['Faster content creation', 'Consistent quality', 'Cost effective'],
    pricing: {
      basic: '$99/month',
      pro: '$299/month',
      enterprise: 'Custom'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com',
      email: 'info@ziontechgroup.com',
      phone: '+1-555-0123'
    },
    href: '/ai-content-generation',
    popular: true,
    category: 'ai'
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration',
    description: 'Seamless migration to cloud infrastructure',
    features: ['Data migration', 'Security setup', 'Performance optimization'],
    benefits: ['Reduced costs', 'Better scalability', 'Enhanced security'],
    pricing: {
      basic: '$199/month',
      pro: '$599/month',
      enterprise: 'Custom'
    },
    contactInfo: {
      website: 'https://ziontechgroup.com',
      email: 'info@ziontechgroup.com',
      phone: '+1-555-0123'
    },
    href: '/cloud-migration',
    popular: true,
    category: 'it'
  }
];

export const allServices: Service[] = [...aiServices, ...itServices];

export const servicesData = {
  aiServices,
  itServices,
  allServices
};

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return allServices.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return allServices.filter(service => service.popular);
};