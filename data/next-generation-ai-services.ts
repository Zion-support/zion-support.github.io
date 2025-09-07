import { ServiceVariant } from '../types/service-variants';

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
  variant: ServiceVariant;
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
    tagline: 'Fully autonomous AI agent that runs your business operations',
    price: '$2,999',
    period: '/month',
    description: 'Revolutionary AI agent that operates your business 24/7 with complete autonomy. Makes intelligent decisions, manages operations, and grows your business without human intervention.',
    features: [
      'Natural language business communication',
      'Multi-platform task execution',
      'Real-time market analysis',
      'Automated customer service',
      'Financial decision automation',
      'Supply chain optimization',
      'Predictive analytics',
      'Risk assessment and mitigation'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-purple-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-autonomous-business-agent',
    marketPosition: 'No direct competitors. Partial solutions: UiPath, Automation Anywhere. Our advantage: Complete autonomy, natural language processing, and business intelligence.',
    targetAudience: 'Enterprise businesses, Startups, E-commerce companies, Service providers, Manufacturing companies',
    trialDays: 30,
    setupTime: '2 weeks',
    category: 'AI & Autonomous Systems',
    realService: true,
    technology: ['GPT-4 Turbo', 'Claude 3 Opus', 'Custom AI models', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['Salesforce', 'HubSpot', 'Shopify', 'QuickBooks', 'Slack', 'Microsoft 365', 'Google Workspace'],
    useCases: ['Business process automation', 'Customer service management', 'Financial operations', 'Supply chain management', 'Marketing automation', 'HR operations'],
    roi: 'Average customer sees 800% ROI within 6 months through 24/7 operations and intelligent decision-making.',
    competitors: ['No direct competitors', 'Partial solutions: UiPath, Automation Anywhere'],
    marketSize: '$50B autonomous systems market',
    growthRate: '400% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
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