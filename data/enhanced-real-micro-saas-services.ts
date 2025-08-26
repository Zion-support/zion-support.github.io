export type SimpleService = { name: string; href: string; price: string };

=======
// Service categories
export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Cloud & Infrastructure',
  'Digital Marketing',
  'AI & Content Creation',
  'Software Development',
  'Cybersecurity',
  'Data & Analytics',
  'Design & User Experience',
  'E-commerce & Sales',
  'Finance & Accounting',
  'Healthcare & Medical',
  'Education & Training',
  'Productivity & Automation',
  'Communication & Collaboration',
  'Robotics & Automation',
  'Metaverse & VR/AR',
  'IoT & Smart Cities',
  'Analytics & Business Intelligence',
  'Legal & Compliance',
  'Logistics & Supply Chain',
  'Human Resources',
  'Manufacturing & Industry 4.0',
  'Real Estate & Property',
  'Energy & Sustainability'
];

export const getServicesByCategory = (category: string) => {
  if (category === 'All') return enhancedRealMicroSaasServices;
  return enhancedRealMicroSaasServices.filter(service => service.category === category);
};

export const getPopularServices = (limit: number = 6): SimpleMicroSaasService[] => {
  return enhancedRealMicroSaasServices
    .filter(service => service.popular)
    .slice(0, limit);
};

export const getServicesByTechnology = (technology: string): SimpleMicroSaasService[] => {
  return enhancedRealMicroSaasServices.filter(service =>
    service.technology.some(tech =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): SimpleMicroSaasService[] => {
  return enhancedRealMicroSaasServices.filter(service => {
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && (maxPrice === Infinity || price <= maxPrice);
  });
};
=======
export const enhancedRealMicroSaaSServices: SimpleService[] = [
  { name: 'API Security Scanner', href: '/services/api-security-scanner', price: '$299/mo' },
  { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor', price: '$49/mo' },
  { name: 'Vector Search Starter', href: '/vector-search-starter', price: '$249/mo' }
];

export default enhancedRealMicroSaaSServices;
