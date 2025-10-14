export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
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
    title: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions for your business',
    icon: '🤖',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ],
    pricing: {
      basic: 999,
      premium: 2999,
      enterprise: 9999
    }
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud infrastructure solutions',
    icon: '☁️',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Auto-scaling',
      '24/7 Monitoring'
    ],
    pricing: {
      basic: 1999,
      premium: 4999,
      enterprise: 14999
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive cybersecurity solutions to protect your business',
    icon: '🔒',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Incident Response',
      'Compliance Management'
    ],
    pricing: {
      basic: 1499,
      premium: 3999,
      enterprise: 11999
    }
  }
];

export default services;