// Services data
export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions for your business',
    category: 'AI',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and services',
    category: 'Cloud',
    features: ['AWS', 'Azure', 'Google Cloud', 'Migration']
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights',
    category: 'Analytics',
    features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization']
  }
];

export default services;