export interface ServiceData {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing?: {
    basic: number;
    pro: number;
    enterprise: number;
  };
}

export const servicesData: ServiceData[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Comprehensive AI solutions for your business',
    category: 'AI',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      basic: 999,
      pro: 2999,
      enterprise: 9999
    }
  },
  {
    id: 'it-services',
    name: 'IT Services',
    description: 'Professional IT services and support',
    category: 'IT',
    features: ['Infrastructure Management', 'Cloud Migration', 'Security'],
    pricing: {
      basic: 499,
      pro: 1499,
      enterprise: 4999
    }
  }
];

export default servicesData;