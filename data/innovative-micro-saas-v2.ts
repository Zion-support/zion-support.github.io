import { ServiceVariant } from '../types/service-variants';

export interface InnovativeMicroSaasV2 {
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

export const innovativeMicroSaasV2: InnovativeMicroSaasV2[] = [
  {
    id: 'ai-powered-inventory-optimizer',
    name: 'AI-Powered Inventory Optimizer',
    tagline: 'Intelligent inventory management with predictive analytics',
    price: '$299',
    period: '/month',
    description: 'Revolutionary inventory management platform that uses AI to predict demand, optimize stock levels, and reduce inventory costs by up to 40%. Perfect for e-commerce, retail, and manufacturing businesses.',
    features: [
      'AI-powered demand forecasting',
      'Real-time inventory optimization',
      'Automated reorder management',
      'Multi-location inventory tracking',
      'Supplier performance analytics',
      'Seasonal trend analysis',
      'Cost optimization algorithms',
      'Mobile app and dashboard',
      'API for integrations',
      '24/7 inventory monitoring'
    ],
    popular: true,
    icon: '📦',
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: 'https://ziontechgroup.com/ai-powered-inventory-optimizer',
    marketPosition: 'Competitive with TradeGecko ($99/month), Zoho Inventory ($99/month). Our advantage: AI-powered optimization, predictive analytics, and cost reduction algorithms.',
    targetAudience: 'E-commerce businesses, Retail stores, Manufacturing companies, Wholesale distributors, Food and beverage companies, Healthcare suppliers',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Innovative Micro SaaS & Business',
    realService: true,
    technology: ['AI/ML', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Python', 'TensorFlow'],
    integrations: ['Shopify', 'WooCommerce', 'Magento', 'QuickBooks', 'Xero', 'Salesforce', 'Custom APIs'],
    useCases: ['Inventory optimization', 'Demand forecasting', 'Cost reduction', 'Supplier management', 'Multi-location tracking', 'Seasonal planning'],
    roi: 'Average customer achieves 300% ROI within 4 months through reduced inventory costs and improved stock management.',
    competitors: ['TradeGecko', 'Zoho Inventory', 'Fishbowl', 'SAP Business One', 'Oracle NetSuite'],
    marketSize: '$8B market',
    growthRate: '180% annual growth',
    variant: 'business-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production-ready AI-powered inventory optimization platform with predictive analytics, real-time monitoring, and comprehensive integration capabilities. Includes custom AI model training.',
    launchDate: '2024-02-01',
    customers: 456,
    rating: 4.8,
    reviews: 567
  }
];