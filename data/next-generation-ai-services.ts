export interface NextGenerationAIService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const nextGenerationAIServices: NextGenerationAIService[] = [
  {
    id: 'ai-autonomous-business-agent',
    name: 'AI Autonomous Business Agent',
    tagline: 'Fully autonomous AI agent that runs your entire business operations',
    price: '$9,999',
    period: '/month',
    description: 'Revolutionary AI agent that autonomously manages all aspects of your business including operations, customer service, marketing, and decision-making.',
    features: [
      'Autonomous decision-making capabilities',
      'Multi-platform task execution',
      'Real-time market analysis',
      'Automated customer service',
      'Financial decision automation',
      'Supply chain optimization',
      'Predictive analytics',
      'Risk assessment and mitigation',
      'Performance optimization'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-purple-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-autonomous-business-agent',
    marketPosition: 'First-to-market autonomous business AI agent. No direct competitors in fully autonomous business operations.',
    targetAudience: 'Enterprise businesses, Startups, E-commerce companies, Service providers, Manufacturing companies',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['GPT-4', 'Custom Neural Networks', 'Reinforcement Learning', 'Natural Language Processing'],
    integrations: ['Salesforce', 'HubSpot', 'Shopify', 'QuickBooks', 'Slack', 'Microsoft Teams'],
    useCases: ['Business automation', 'Customer service', 'Marketing automation', 'Financial management'],
    roi: '500% in 6 months',
    competitors: ['No direct competitors'],
    marketSize: '$50B+',
    growthRate: '300% annually',
    variant: 'premium',
    contactInfo: {
      mobile: '+1 (555) 123-4567',
      email: 'support@ziontechgroup.com',
      address: '123 Tech Street, Innovation City, IC 12345',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Advanced AI system with autonomous decision-making capabilities, natural language processing, and multi-platform integration. Includes safety protocols and human oversight options.',
    launchDate: '2024-12-01',
    customers: 150,
    rating: 4.9,
    reviews: 89
  }
];