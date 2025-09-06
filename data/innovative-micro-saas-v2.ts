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
  // Innovative Business Solutions
  {
    id: 'ai-content-generator-v2',
    name: 'AI Content Generator V2',
    tagline: 'Next-generation AI content creation platform',
    price: '$49',
    period: '/month',
    description: 'Advanced AI-powered content generation with multi-language support',
    features: ['AI content generation', 'Multi-language support', 'SEO optimization', 'Content scheduling'],
    popular: true,
    icon: '🤖',
    color: 'blue',
    textColor: 'white',
    link: '/ai-content-generator-v2',
    marketPosition: 'Leading',
    targetAudience: 'Content creators',
    trialDays: 14,
    setupTime: '5 minutes',
    category: 'AI & Content',
    realService: true,
    technology: ['React', 'Node.js', 'OpenAI API'],
    integrations: ['WordPress', 'Shopify', 'HubSpot'],
    useCases: ['Blog writing', 'Social media', 'Email marketing'],
    roi: '300%',
    competitors: ['Jasper', 'Copy.ai'],
    marketSize: '$1.2B',
    growthRate: '25%',
    variant: 'premium',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown, DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully implemented and operational',
    launchDate: '2024-01-15',
    customers: 150,
    rating: 4.8,
    reviews: 45
  }
];