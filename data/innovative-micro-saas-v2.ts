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
    name: 'AI Content Generator Pro',
    tagline: 'Generate high-quality content with advanced AI',
    price: '$49',
    period: '/month',
    description: 'Create engaging content for blogs, social media, and marketing materials using cutting-edge AI technology.',
    features: ['AI-powered content generation', 'Multiple content formats', 'SEO optimization', 'Brand voice customization', 'Multi-language support'],
    popular: true,
    icon: '🤖',
    color: 'blue',
    textColor: 'white',
    link: '/services/ai-content-generator',
    marketPosition: 'Leading',
    targetAudience: 'Content creators, marketers, businesses',
    trialDays: 14,
    setupTime: '5 minutes',
    category: 'AI & Machine Learning',
    realService: true,
    technology: ['OpenAI GPT-4', 'React', 'Node.js', 'MongoDB'],
    integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp'],
    useCases: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions'],
    roi: '300% in 6 months',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic'],
    marketSize: '$1.2B',
    growthRate: '25% annually',
    variant: 'premium',
    contactInfo: {
      mobile: '+1 (555) 123-4567',
      email: 'support@ziontechgroup.com',
      address: '123 Tech Street, Innovation City, IC 12345',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Fully implemented with production-ready infrastructure',
    launchDate: '2024-01-15',
    customers: 1250,
    rating: 4.8,
    reviews: 342
  }
];