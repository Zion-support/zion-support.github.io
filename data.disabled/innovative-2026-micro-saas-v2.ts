export interface Innovative2026MicroSaasV2 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export interface Innovative2026MicroSaasServiceV2 {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
}

export const innovative2026MicroSaasV2Services: Innovative2026MicroSaasV2Service[] =
  [
    // AI-Powered Content Creation Suite
    {
      id: '2026-micro-saas-v2',
      name: '2026 Micro SAAS Platform V2',
      tagline: 'Enhanced micro SAAS solutions',
      price: '$99/month',
      description:
        'Enhanced version of the 2026 micro SAAS platform with additional features and improvements.',
      features: [
        'Enhanced micro SAAS',
        'Advanced capabilities',
        'Improved performance',
        'Better integration',
        'Enhanced support',
      ],
      link: '/services/2026-micro-saas-v2',
      category: 'Innovative 2026 Micro SAAS V2',
      realImplementation: true,
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709',
      },
    },
  ];

export const innovative2026MicroSaasServicesV2: Innovative2026MicroSaasServiceV2[] =
  [];

export const getPopularServices = () => {
  return innovative2026MicroSaasV2Services.filter(service => service.popular);
};

export const getServicesByCategory = (category: string) => {
  return innovative2026MicroSaasV2Services.filter(service =>
    service.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return innovative2026MicroSaasV2Services.filter(service => {
    const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
    return price >= minPrice && price <= maxPrice;
  });
};
