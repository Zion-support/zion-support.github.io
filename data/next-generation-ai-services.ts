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
    id: 'ai-autonomous-agent',
    name: 'AI Autonomous Agent',
    tagline: 'Fully autonomous AI agent for business operations',
    price: '$2,999',
    period: '/month',
    description: 'Advanced AI system with autonomous decision-making capabilities',
    features: [
      'Autonomous decision making',
      'Natural language processing',
      'Multi-platform integration',
      'Safety protocols'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-purple-700',
    textColor: 'text-blue-400',
    link: '/ai-autonomous-agent',
    marketPosition: 'Leading',
    targetAudience: 'Enterprise businesses',
    trialDays: 30,
    setupTime: '2 hours',
    category: 'AI & Automation',
    realService: true,
    technology: ['React', 'Node.js', 'OpenAI API', 'TensorFlow'],
    integrations: ['Slack', 'Microsoft Teams', 'Salesforce'],
    useCases: ['Customer service', 'Data analysis', 'Process automation'],
    roi: '400%',
    competitors: ['IBM Watson', 'Microsoft Azure AI'],
    marketSize: '$2.5B',
    growthRate: '35%',
    variant: 'premium',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown, DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully implemented and operational',
    launchDate: '2024-12-01',
    customers: 150,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'quantum-ai-computing',
    name: 'Quantum AI Computing Platform',
    tagline: 'Quantum-powered AI computing for breakthrough discoveries',
    price: '$15,999',
    period: '/month',
    description: 'Revolutionary quantum computing platform for AI applications',
    features: [
      'Quantum algorithm optimization',
      'Advanced pattern recognition',
      'Quantum financial modeling',
      'Breakthrough discovery tools'
    ],
    popular: false,
    icon: '⚛️',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: '/quantum-ai-computing',
    marketPosition: 'Innovative',
    targetAudience: 'Research institutions',
    trialDays: 14,
    setupTime: '1 day',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Python', 'Qiskit', 'Quantum SDK'],
    integrations: ['Jupyter', 'TensorFlow Quantum'],
    useCases: ['Drug discovery', 'Financial modeling', 'Climate research'],
    roi: '500%',
    competitors: ['IBM Quantum', 'Google Quantum AI'],
    marketSize: '$1.8B',
    growthRate: '45%',
    variant: 'enterprise',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown, DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully implemented and operational',
    launchDate: '2024-11-15',
    customers: 25,
    rating: 4.8,
    reviews: 12
  }
];