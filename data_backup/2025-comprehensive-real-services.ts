import { ServiceVariant } from '../types/service-variants';

export interface ComprehensiveRealService {
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

export const comprehensiveRealServices2025: ComprehensiveRealService[] = [
  {
    id: 'enterprise-ai-automation-suite',
    name: 'Enterprise AI Automation Suite',
    tagline: 'Comprehensive AI automation for enterprise workflows and processes',
    price: '$1,299',
    period: '/month',
    description: 'Complete enterprise AI automation platform that streamlines business processes, automates repetitive tasks, and enhances productivity across all departments with intelligent workflow automation.',
    features: [
      'Intelligent workflow automation',
      'Document processing and analysis',
      'Customer service automation',
      'Data entry and validation',
      'Report generation and analysis',
      'Integration with enterprise systems',
      'Custom automation workflows',
      'Performance monitoring and analytics',
      '24/7 technical support'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/enterprise-ai-automation',
    marketPosition: 'Comprehensive AI automation competes with UiPath, Automation Anywhere, Blue Prism.',
    targetAudience: 'Enterprise organizations, Large businesses, Process automation teams',
    trialDays: 21,
    setupTime: '2-3 weeks',
    category: 'Enterprise Automation',
    realService: true,
    technology: ['AI/ML', 'RPA', 'Workflow Automation', 'Process Mining'],
    integrations: ['SAP', 'Oracle', 'Salesforce', 'Microsoft 365', 'Google Workspace'],
    useCases: ['Process automation', 'Workflow optimization', 'Productivity enhancement'],
    roi: 'Reduce operational costs by 40-60% and improve process efficiency by 50-70%.',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate'],
    marketSize: '$35B enterprise automation',
    growthRate: '28% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Enterprise AI automation platform with intelligent workflow orchestration and process optimization.',
    launchDate: '2025-01-25',
    customers: 89,
    rating: 4.8,
    reviews: 67
  }
];