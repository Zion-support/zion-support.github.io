export interface Service {
  id: string;
  name: string;
  description: string;
  icon?: string;
  category: string;
  features: string[];
  pricing?: {
    basic: number;
    premium: number;
    enterprise: number;
  };
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions for your business',
    category: 'AI',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      basic: 999,
      premium: 2499,
      enterprise: 4999
    }
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions',
    category: 'Infrastructure',
    features: ['AWS Integration', 'Azure Support', 'Google Cloud'],
    pricing: {
      basic: 799,
      premium: 1999,
      enterprise: 3999
    }
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive cybersecurity solutions',
    category: 'Security',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response'],
    pricing: {
      basic: 1299,
      premium: 2999,
      enterprise: 5999
    }
  }
];

export default services;
