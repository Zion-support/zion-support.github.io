export interface PracticalMicroSaas2027 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  category: string;
  technology: string[];
}

export const practicalMicroSaas2027: PracticalMicroSaas2027[] = [
  {
    id: 'ai-customer-success-automation',
    name: 'AI Customer Success Automation',
    tagline: 'Intelligent customer success automation platform',
    price: '$299',
    period: '/month',
    description: 'AI-powered platform for automating customer success processes and improving customer satisfaction.',
    features: [
      'Customer behavior analysis',
      'Automated outreach',
      'Success metrics tracking',
      'Predictive analytics',
      'Integration capabilities'
    ],
    category: 'Customer Success',
    technology: ['AI/ML', 'Automation', 'Analytics', 'Integration']
  },
  {
    id: 'automated-content-marketing',
    name: 'Automated Content Marketing',
    tagline: 'AI-driven content marketing automation',
    price: '$199',
    period: '/month',
    description: 'Comprehensive content marketing automation platform with AI-powered optimization.',
    features: [
      'Content generation',
      'Automated publishing',
      'Performance analytics',
      'SEO optimization',
      'Multi-channel management'
    ],
    category: 'Content Marketing',
    technology: ['AI/ML', 'Content Management', 'SEO', 'Automation']
  }
];