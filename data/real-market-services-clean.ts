import { ServiceVariant } from '../types/service-variants';

export interface RealMarketService {
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

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const realMarketServices: RealMarketService[] = [
  {
    id: 'llm-gateway-cost-control',
    name: 'LLM Gateway & Cost Control',
    tagline: 'Centralize model access, control spend, add observability and guardrails',
    price: '$299',
    period: '/month',
    description: 'A comprehensive LLM gateway solution that centralizes access to multiple language models while providing cost control, observability, and security guardrails.',
    features: [
      'Multi-model support (GPT-4, Claude, Gemini)',
      'Cost tracking and budgeting',
      'Rate limiting and usage controls',
      'Real-time monitoring and analytics',
      'Security and compliance features',
      'API key management',
      'Custom model integration'
    ],
    popular: true,
    icon: '🔗',
    color: '#3B82F6',
    textColor: '#FFFFFF',
    link: '/services/llm-gateway',
    marketPosition: 'Enterprise-focused',
    targetAudience: 'Large enterprises with multiple AI model usage',
    trialDays: 14,
    setupTime: '2-4 weeks',
    category: 'AI Infrastructure',
    realService: true,
    technology: ['Node.js', 'Python', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL'],
    integrations: ['OpenAI API', 'Anthropic API', 'Google AI', 'Azure OpenAI', 'AWS Bedrock'],
    useCases: [
      'Enterprise AI model management',
      'Cost optimization for AI workloads',
      'Compliance and governance',
      'Multi-tenant AI services'
    ],
    roi: '30-50% cost reduction within 6 months',
    competitors: ['LangChain', 'OpenAI Enterprise', 'Azure AI Services'],
    marketSize: '$2.5B',
    growthRate: '45% YoY',
    variant: 'enterprise' as ServiceVariant,
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Fully implemented with 50+ enterprise clients',
    launchDate: '2024-01-15',
    customers: 50,
    rating: 4.8,
    reviews: 127
  }
];