export interface NewService {
  id: string;
  name: string;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  category: string;
  pricing: string;
  link: string;
  icon: string;
  featured: boolean;
  launchDate: string;
}

export const newServices2026: NewService[] = [
  {
    id: 'ai-predictive-maintenance',
    name: 'AI Predictive Maintenance Platform',
    title: '⚙️ AI Predictive Maintenance: Zero Unplanned Downtime',
    description: 'AI-powered predictive maintenance reducing equipment downtime by 85% and maintenance costs by 40%. Predict failures before they happen with 98% accuracy.',
    benefits: [
      '85% reduction in unplanned downtime',
      '40% lower maintenance costs',
      '98% failure prediction accuracy',
      'Real-time equipment monitoring'
    ],
    features: [
      'Machine learning algorithms',
      'IoT sensor integration',
      'Predictive analytics',
      'Real-time alerts',
      'Maintenance scheduling'
    ],
    category: 'AI Operations',
    pricing: 'Starting at $50K/month',
    link: '/services/ai-predictive-maintenance',
    icon: '⚙️',
    featured: true,
    launchDate: '2026-01-01'
  },
  {
    id: 'ai-autonomous-operations',
    name: 'AI Autonomous Operations Platform',
    title: '🤖 AI Autonomous Operations: Complete Business Automation',
    description: 'Revolutionary AI platform achieving 98% process automation, 85% cost reduction, and $650M annual value creation.',
    benefits: [
      '98% process automation',
      '85% cost reduction',
      '$650M annual value creation',
      'Zero human intervention'
    ],
    features: [
      'Autonomous decision making',
      'Process optimization',
      'Cost reduction algorithms',
      'Value creation tracking',
      'Performance monitoring'
    ],
    category: 'Enterprise AI',
    pricing: 'Custom enterprise pricing',
    link: '/services/ai-autonomous-operations',
    icon: '🤖',
    featured: true,
    launchDate: '2026-01-01'
  }
];

export const getFeaturedServices = (): NewService[] => {
  return newServices2026.filter(service => service.featured);
};

export const getServicesByCategory = (category: string): NewService[] => {
  return newServices2026.filter(service => service.category === category);
};