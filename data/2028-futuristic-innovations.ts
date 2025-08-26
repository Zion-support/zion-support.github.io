import { ServiceVariant } from '../types/service-variants';

export interface Futuristic2028Service {
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
  targetAudience: string | string[];
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

export const futuristic2028Services = [
  {
    id: '2028-futuristic-001',
    title: '2028 Futuristic Innovation Platform',
    description: 'Futuristic innovation platform for 2028',
    category: 'Futuristic',
    pricing: { starter: 299, professional: 999, enterprise: 2999 },
    features: ['2028 innovations', 'Futuristic tools', 'Next-gen capabilities'],
    slug: '2028-futuristic-innovation-platform'
  }
];

export default futuristic2028Services;