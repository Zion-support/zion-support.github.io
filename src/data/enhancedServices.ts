export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  features: string[];
}

export const enhancedServices: Service[] = [
  {
    id: '1',
    name: 'AI Development',
    description: 'Custom AI solutions for your business',
    category: 'AI Services',
    price: 5000,
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  },
  {
    id: '2',
    name: 'Cloud Migration',
    description: 'Migrate your infrastructure to the cloud',
    category: 'Cloud Services',
    price: 3000,
    features: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration']
  }
];