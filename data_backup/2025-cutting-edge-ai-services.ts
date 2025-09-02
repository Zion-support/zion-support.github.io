import { ServiceVariant } from '../types/service-variants';

export interface CuttingEdgeAIService {
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

export const cuttingEdgeAIServices2025: CuttingEdgeAIService[] = [
  {
    id: 'autonomous-ai-research-platform',
    name: 'Autonomous AI Research Platform',
    tagline: 'Self-directed AI research and discovery across multiple domains',
    price: '$1,499',
    period: '/month',
    description: 'Revolutionary autonomous AI research platform that conducts independent research, generates hypotheses, and discovers insights across scientific, business, and academic domains without human intervention.',
    features: [
      'Autonomous research planning and execution',
      'Multi-domain knowledge synthesis',
      'Hypothesis generation and testing',
      'Literature review automation',
      'Data analysis and visualization',
      'Research trend identification',
      'Collaboration and knowledge sharing',
      'Integration with research databases',
      'Automated report generation'
    ],
    popular: true,
    icon: '🔬',
    color: 'from-purple-600 to-pink-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/autonomous-ai-research',
    marketPosition: 'Cutting-edge autonomous AI research specialized for independent discovery.',
    targetAudience: 'Research institutions, Scientists, Business analysts, Academic researchers',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Autonomous AI Research',
    realService: true,
    technology: ['Advanced AI/ML', 'Autonomous Systems', 'Knowledge Graphs', 'Research Automation'],
    integrations: ['PubMed', 'arXiv', 'Google Scholar', 'Research databases', 'Academic platforms'],
    useCases: ['Scientific research', 'Market analysis', 'Academic studies', 'Innovation discovery'],
    roi: 'Accelerate research by 5-10x and discover insights that would be impossible to find manually.',
    competitors: ['Traditional research tools', 'AI research assistants'],
    marketSize: '$5B AI research tools',
    growthRate: '45% YoY',
    variant: 'ai-autonomous',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Autonomous AI research engine with independent discovery capabilities and knowledge synthesis.',
    launchDate: '2025-02-05',
    customers: 45,
    rating: 4.9,
    reviews: 34
  }
];