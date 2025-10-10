// Services data definitions
export interface Service {
  id: string;
  name: string;
  description: string;
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
    name: 'AI Solutions',
    description: 'Comprehensive AI-powered business solutions',
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
    description: 'Complete IT infrastructure and support services',
    category: 'IT',
    features: ['Cloud Migration', 'Cybersecurity', 'Network Management'],
    pricing: {
      basic: 499,
      pro: 1499,
      enterprise: 4999
    }
  }
];

export default services;