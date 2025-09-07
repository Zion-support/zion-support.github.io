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
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
  marketSize: string;
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
    tagline: 'Fully autonomous AI agent that runs your business operations',
    price: '$2,999',
    period: '/month',
    description: 'Advanced AI system with autonomous decision-making capabilities',
    features: [
      'Natural language business communication',
      'Multi-platform task execution',
      'Real-time market analysis',
      'Automated customer service',
      'Financial decision automation'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-purple-700',
    textColor: 'text-blue-400',
    targetAudience: 'Enterprise businesses, Startups, E-commerce companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'AI & Autonomous Systems',
    realService: true,
    technology: ['Claude 3 Opus', 'Custom AI models', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['Salesforce', 'HubSpot', 'Shopify', 'QuickBooks', 'Slack', 'Microsoft 365'],
    useCases: ['Business process automation', 'Customer service management', 'Financial operations'],
    roi: 'Average customer sees 800% ROI within 6 months',
    competitors: ['No direct competitors', 'Partial solutions: UiPath, Automation Anywhere'],
    growthRate: '400% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    marketSize: '$50B autonomous systems market',
    realImplementation: true,
    implementationDetails: 'Advanced AI system with autonomous decision-making capabilities',
    launchDate: '2024-12-01',
    customers: 150,
    rating: 4.9,
    reviews: 89
  }
];