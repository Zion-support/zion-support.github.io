
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





  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com', }
;
export const realMarketServices: RealMarketService[] = [;



  {  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup && ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup && ziontechgroup.com',};

  id: string, name: string,
  tagline: string, price: string,
  period: string, description: string,
  features: string[], popular: boolean,
  icon: string, color: string,
  textColor: string, link: string,
  marketPosition: string, targetAudience: string,
  trialDays: number, setupTime: string,
  category: string, realService: boolean,
  technology: string[], integrations: string[],
  useCases: string[], roi: string,
  competitors: string[], marketSize: string,
  growthRate: string, variant: ServiceVariant,
  contactInfo: {
      
    mobile: string, email: string,
    address: string,
    website: string
  
    },
    realImplementation: boolean, implementationDetails: string,
  launchDate: string, customers: number,
  rating: number,
  reviews: number
}

const contact = {
  mobile: '+1 302 464 0950', email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',


export const realMarketServices: RealMarketService[] = [
  {  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup && ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup && ziontechgroup.com'
};

export const realMarketServices: RealMarketService[] = [
  {
    id: 'ai-chatbot-pro',
    name: 'AI Chatbot Pro',
    tagline: 'Intelligent customer support automation',
    price: '$299',
    period: 'month',
    description: 'Advanced AI-powered chatbot for customer support with natural language processing and multi-language support.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Integration with CRM systems',
      '24/7 customer support',
      'Analytics dashboard',
      'Custom training data'
    ],
    popular: true,
    category: 'AI & Data',
    real_implementation: true,
    implementation_details: 'Deployed for 50+ clients with 95% customer satisfaction',
    launch_date: '2024-01-15',
    customers: 50,
    rating: 4.8,
    reviews: 127
  },
  {
    id: 'cloud-migration-expert',
    name: 'Cloud Migration Expert',
    tagline: 'Seamless cloud infrastructure migration',
    price: '$2,500',
    period: 'project',
    description: 'Complete cloud migration service with zero downtime and optimized performance.',
    features: [
      'Zero downtime migration',
      'Performance optimization',
      'Security compliance',
      'Cost optimization',
      '24/7 monitoring',
      'Post-migration support'
    ],
    popular: true,
    category: 'Cloud & FinOps',
    real_implementation: true,
    implementation_details: 'Successfully migrated 200+ applications to AWS/Azure',
    launch_date: '2024-02-01',
    customers: 200,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'data-analytics-suite',
    name: 'Data Analytics Suite',
    tagline: 'Transform data into actionable insights',
    price: '$1,800',
    period: 'month',
    description: 'Comprehensive data analytics platform with real-time dashboards and predictive modeling.',
    features: [
      'Real-time dashboards',
      'Predictive modeling',
      'Data visualization',
      'Custom reports',
      'API integration',
      'Machine learning insights'
    ],
    popular: false,
    category: 'AI & Data',
    real_implementation: true,
    implementation_details: 'Implemented for 75+ companies with 40% improvement in decision making',
    launch_date: '2024-03-10',
    customers: 75,
    rating: 4.7,
    reviews: 156
  }
];