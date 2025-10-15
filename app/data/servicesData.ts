export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const services: Service[] = [
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Comprehensive AI strategy and implementation consulting services.',
    shortDescription: 'AI strategy and implementation consulting',
    icon: '🤖',
    features: [
      'AI Strategy Development',
      'Machine Learning Implementation',
      'Data Analytics Solutions',
      'AI Integration Services'
    ],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000
    },
    benefits: [
      'Improved efficiency',
      'Cost reduction',
      'Better decision making',
      'Competitive advantage'
    ],
    useCases: [
      'Process automation',
      'Predictive analytics',
      'Customer insights',
      'Risk management'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Azure'],
    contactInfo: {
      phone: '+1-555-0123',
      email: 'ai@ziontech.com',
      website: 'https://ziontech.com/ai'
    }
  }
];
