import { ServiceVariant } from '../types/service-variants';

export interface ComprehensiveServiceExpansion {
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

export const comprehensiveServicesExpansion2025: ComprehensiveServiceExpansion[] = [
  {
    id: 'ai-powered-business-intelligence',
    name: 'AI-Powered Business Intelligence',
    tagline: 'Intelligent business analytics with predictive insights and automated reporting',
    price: '$599',
    period: '/month',
    description: 'Advanced AI-powered business intelligence platform that provides intelligent analytics, predictive insights, and automated reporting to help businesses make data-driven decisions and optimize performance.',
    features: [
      'AI-powered data analysis',
      'Predictive analytics and forecasting',
      'Automated report generation',
      'Real-time dashboards and visualizations',
      'Natural language query interface',
      'Integration with data sources',
      'Custom analytics workflows',
      'Performance monitoring and alerts',
      'Mobile app and notifications'
    ],
    popular: true,
    icon: '📊',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: 'https://ziontechgroup.com/ai-business-intelligence',
    marketPosition: 'AI-enhanced BI competes with Tableau, Power BI, Looker, Qlik.',
    targetAudience: 'Business analysts, Data scientists, Executive teams',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Business Intelligence',
    realService: true,
    technology: ['AI/ML', 'Data Analytics', 'Predictive Modeling', 'Visualization'],
    integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Excel', 'SQL databases'],
    useCases: ['Business analytics', 'Predictive insights', 'Performance monitoring'],
    roi: 'Improve decision-making speed by 50-70% and increase business performance by 20-30%.',
    competitors: ['Tableau', 'Power BI', 'Looker', 'Qlik'],
    marketSize: '$28B business intelligence',
    growthRate: '22% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered business intelligence platform with predictive analytics and automated reporting.',
    launchDate: '2025-02-01',
    customers: 178,
    rating: 4.8,
    reviews: 134
  }
];