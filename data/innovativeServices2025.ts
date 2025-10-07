export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  features: string[];
}

export const INNOVATIVE_SERVICES_2025: Service[] = [
  {
    id: 'ai-automation',
    name: 'AI Automation Suite',
    category: 'AI',
    description: 'Complete AI automation solution for business processes',
    price: 5000,
    features: ['Process automation', 'Machine learning', 'Data analysis'],
  },
  {
    id: 'blockchain-integration',
    name: 'Blockchain Integration',
    category: 'Blockchain',
    description: 'Secure blockchain integration for enterprise applications',
    price: 8000,
    features: ['Smart contracts', 'Security', 'Scalability'],
  },
  {
    id: 'cloud-optimization',
    name: 'Cloud Optimization',
    category: 'Cloud',
    description: 'Advanced cloud infrastructure optimization',
    price: 3000,
    features: ['Cost reduction', 'Performance', 'Scalability'],
  },
];
