export interface Added2026Q2Service {
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

export const added2026Q2Services: Added2026Q2Service[] = [
  {
    id: 'ai-powered-legal-assistant-2026-q2',
    name: 'AI-Powered Legal Assistant Platform',
    tagline: 'Intelligent legal research and document analysis with AI',
    price: '$599',
    period: '/month',
    description: 'Advanced legal platform that uses AI to assist with legal research, document analysis, and case preparation.',
    features: [
      'AI-powered legal research',
      'Document analysis and review',
      'Case law search',
      'Contract analysis',
      'Legal precedent tracking',
      'Citation verification',
      'Document generation',
      'Compliance checking',
      'Risk assessment',
      'Integration with legal databases'
    ],
    popular: false,
    icon: '⚖️',
    color: 'from-indigo-600 to-purple-600',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-legal-assistant',
    marketPosition: 'Competes with Westlaw ($75/month) and LexisNexis with AI advantage.',
    targetAudience: 'Lawyers, Legal professionals, Law firms, Corporate legal departments',
    trialDays: 21,
    setupTime: '2 weeks',
    category: 'Legal Technology & AI',
    realService: true,
    technology: ['React, Node.js, Python, TensorFlow, PostgreSQL, Elasticsearch'],
    integrations: ['Westlaw, LexisNexis, Clio, PracticePanther, Legal databases'],
    useCases: ['Legal research, Document review, Case preparation, Contract analysis'],
    roi: 'Legal teams report 60% faster research and 40% reduction in document review time.',
    competitors: ['Westlaw, LexisNexis, Casetext, ROSS Intelligence'],
    marketSize: '$12B legal technology market',
    growthRate: '25% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production legal AI platform with advanced NLP, document analysis, and comprehensive legal database integration.',
    launchDate: '2026-04-01',
    customers: 45,
    rating: 4.7,
    reviews: 32
  }
];