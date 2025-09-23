import { ServiceVariant } from '../types/service-variants';

export interface InnovativeBusinessSolution {
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
  targetAudience: string[];
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

export const innovativeBusinessSolutions2025: InnovativeBusinessSolution[] = [
  // AI Business Intelligence Suite
  {
    id: 'ai-business-intelligence-suite',
    name: 'AI Business Intelligence Suite',
    tagline: 'Intelligent business insights and analytics',
    price: '$3,200',
    period: '/month',
    description: 'Advanced AI-powered business intelligence platform that provides intelligent analytics, predictive insights, and automated reporting to help organizations make data-driven decisions and optimize business performance.',
    features: [
      'AI-powered data analysis and insights',
      'Predictive analytics and forecasting',
      'Automated report generation',
      'Real-time business monitoring',
      'Custom dashboard creation',
      'Data visualization and exploration',
      'Business performance optimization',
      'Integration with business systems',
      'Advanced analytics and reporting',
      'Custom business intelligence workflows'
    ],
    popular: true,
    icon: '📈',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-business-intelligence-suite',
    marketPosition: 'Leading AI-powered business intelligence platform with advanced analytics, predictive insights, and comprehensive business optimization capabilities.',
    targetAudience: ['Business analysts', 'Data scientists', 'Executives', 'Business intelligence teams', 'Technology companies'],
    trialDays: 30,
    setupTime: '3-4 weeks',
    category: 'AI Business Intelligence',
    realService: true,
      website: 'https://ziontechgroup.com';
    }
    real_implementation: true,
    implementation_details: 'Comprehensive AI - powered project management platform with intelligent planning, optimization, and seamless project tool integration.';
    launch_date: '2025 - 05 - 01';
    customers: 38;
    rating: 4.7,
    reviews: 26;

  }
];

