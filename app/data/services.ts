// Services data

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Advanced AI and machine learning solutions',
    category: 'AI'
  },
  {
    id: 'it-services',
    name: 'IT Services',
    description: 'Comprehensive IT infrastructure and support',
    category: 'IT'
  },
  {
    id: 'cloud-services',
    name: 'Cloud Services',
    description: 'Cloud migration and management services',
    category: 'Cloud'
  }
];

export default services;