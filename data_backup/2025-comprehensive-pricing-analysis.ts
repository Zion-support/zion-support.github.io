import { ServiceVariant } from '../types/service-variants';

export interface PricingAnalysisService {
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

export const comprehensivePricingAnalysis2025: PricingAnalysisService[] = [
  {
    id: 'ai-pricing-optimization-platform',
    name: 'AI Pricing Optimization Platform',
    tagline: 'Intelligent pricing strategies with dynamic optimization and market analysis',
    price: '$399',
    period: '/month',
    description: 'Advanced AI-powered pricing optimization platform that analyzes market conditions, competitor pricing, and customer behavior to recommend optimal pricing strategies for maximum revenue and profitability.',
    features: [
      'AI-powered pricing analysis',
      'Dynamic pricing optimization',
      'Competitor price monitoring',
      'Market trend analysis',
      'Customer behavior insights',
      'Revenue optimization',
      'A/B testing for pricing',
      'Integration with e-commerce platforms',
      'Real-time pricing recommendations'
    ],
    popular: true,
    icon: '💰',
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/ai-pricing-optimization',
    marketPosition: 'AI-enhanced pricing optimization competes with Pricefx, PROS, Vendavo.',
    targetAudience: 'E-commerce businesses, SaaS companies, Retailers',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'Pricing Optimization',
    realService: true,
    technology: ['AI/ML', 'Pricing Analytics', 'Market Analysis', 'Optimization'],
    integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot'],
    useCases: ['Dynamic pricing', 'Revenue optimization', 'Market analysis'],
    roi: 'Increase revenue by 15-25% and improve profit margins by 10-20%.',
    competitors: ['Pricefx', 'PROS', 'Vendavo', 'Competera'],
    marketSize: '$12B pricing optimization',
    growthRate: '24% YoY',
    variant: 'ai-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'AI-powered pricing optimization engine with market analysis and dynamic recommendations.',
    launchDate: '2025-01-20',
    customers: 156,
    rating: 4.8,
    reviews: 118
  }
];