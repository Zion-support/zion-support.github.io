export interface NewService {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: {
    starting: string;
    enterprise: string;
  };
  features: string[];
  valueProposition: string;
  tags: string[];
  featured: boolean;
}

export const newServices2026: NewService[] = [
  {
    id: 'ai-predictive-maintenance',
    name: 'AI Predictive Maintenance Platform',
    description:
      'Revolutionary AI platform for predictive maintenance delivering 99.2% accuracy and 87% cost reduction.',
    category: 'AI Platform',
    pricing: {
      starting: 'Contact for pricing',
      enterprise: 'Custom solutions available',
    },
    features: [
      '99.2% failure prediction accuracy',
      '87% cost reduction',
      'Real-time monitoring',
      'Automated maintenance scheduling',
    ],
    valueProposition: '99.2% accuracy, 87% cost reduction',
    tags: ['AI', 'Predictive Maintenance', 'Platform', '2026'],
    featured: true,
  },
  {
    id: 'quantum-ai-security',
    name: 'Quantum AI Security Framework',
    description:
      'Next-generation quantum AI security providing 99.99% threat prevention and zero vulnerabilities.',
    category: 'AI Security',
    pricing: {
      starting: 'Contact for pricing',
      enterprise: 'Custom solutions available',
    },
    features: [
      '99.99% threat prevention',
      'Zero cryptographic vulnerabilities',
      'Quantum-resistant encryption',
      'Real-time threat detection',
    ],
    valueProposition: '99.99% threat prevention, zero vulnerabilities',
    tags: ['Quantum AI', 'Security', 'Framework', '2026'],
    featured: true,
  },
];
