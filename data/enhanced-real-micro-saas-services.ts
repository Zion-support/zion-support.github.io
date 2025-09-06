export interface MicroSaasService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  category: string;
}

export const microSaasServices: MicroSaasService[] = [{
  id: 'ai-content-generator',
  name: 'AI Content Generator',
  tagline: 'Generate high-quality content with AI',
  price: '$29',
  period: '/month',
  popular: true,
  icon: '🤖',
  category: 'AI & Machine Learning',
  description: 'Generate high-quality content with AI',
  features: ['AI-powered content generation', 'Multiple content types', 'SEO optimization']
}];

export const categories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'Data Analytics'
];

export const getServicesByCategory = (category: string) => {
  if (category === 'All') return microSaasServices;
  return microSaasServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return microSaasServices.filter(service => service.popular);
};

export const enhancedRealMicroSaasServices = microSaasServices;
