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
  description: 'Create engaging content for blogs, social media, and marketing materials using advanced AI technology.',
  features: ['AI-powered content generation', 'Multiple content formats', 'SEO optimization', 'Brand voice customization'],
  popular: true,
  icon: '🤖',
  category: 'AI & Machine Learning'
}];
export const categories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'Data Analytics'
];

export const enhancedRealMicroSaasServices = microSaasServices;

export function getServicesByCategory(category: string) {
  if (category === 'All') {
    return microSaasServices;
  }
  return microSaasServices.filter(service => service.category === category);
}

export function getPopularServices() {
  return microSaasServices.filter(service => service.popular);
}
