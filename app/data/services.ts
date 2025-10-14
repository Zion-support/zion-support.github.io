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
    description: 'Advanced artificial intelligence solutions for business automation and optimization.',
    icon: '🤖',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ],
    pricing: {
      basic: 5000,
      premium: 15000,
      enterprise: 50000
    }
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud infrastructure solutions.',
    icon: '☁️',
    features: [
      'AWS/Azure/GCP Migration',
      'Container Orchestration',
      'Auto-scaling',
      'Security Hardening'
    ],
    pricing: {
      basic: 3000,
      premium: 10000,
      enterprise: 30000
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: '🔒',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Incident Response',
      'Compliance Management'
    ],
    pricing: {
      basic: 2000,
      premium: 8000,
      enterprise: 25000
    }
  }
];

export default services;
