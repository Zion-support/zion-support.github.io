export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
}

export const services: Service[] = [
  {
    id: 'ai-services',
    name: 'AI Services',
    description: 'Advanced artificial intelligence solutions',
    price: 'Starting at $1,500/month',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    category: 'AI'
  },
  {
    id: 'cloud-services',
    name: 'Cloud Services',
    description: 'Comprehensive cloud infrastructure solutions',
    price: 'Starting at $299/month',
    features: ['AWS', 'Azure', 'GCP', '24/7 Support'],
    category: 'Infrastructure'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Enterprise-grade security solutions',
    price: 'Starting at $799/month',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance'],
    category: 'Security'
  }
];