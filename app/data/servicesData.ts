export interface Service Data {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  icon: string;
}

export const services Data: Service Data[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Advanced AI and machine learning solutions',
    category: 'AI',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      starter: 1000,
      professional: 2500,
      enterprise: 5000
    },
    icon: 'robot'
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services',
    category: 'Cloud',
    features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps'],
    pricing: {
      starter: 2000,
      professional: 5000,
      enterprise: 10000
    },
    icon: 'cloud-upload'
  }
];