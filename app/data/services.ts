export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions for your business',
    icon: 'brain',
    category: 'AI',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      basic: 1000,
      pro: 5000,
      enterprise: 15000
    }
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions',
    icon: 'cloud',
    category: 'Infrastructure',
    features: ['AWS', 'Azure', 'Google Cloud'],
    pricing: {
      basic: 500,
      pro: 2000,
      enterprise: 8000
    }
  }
];