import { ServiceVariant } from '../types/service-variants';

export interface EmergingTech2028Service {
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

export const emergingTech2028Services = [
  {
    id: '2028-emerging-001',
    title: '2028 Emerging Tech Services Platform',
    description: 'Emerging tech services platform for 2028',
    category: 'Emerging Tech',
    pricing: { starter: 399, professional: 1199, enterprise: 3499 },
    features: ['2028 emerging tech', 'Cutting edge tools', 'Future ready'],
    slug: '2028-emerging-tech-services-platform'
  }
];

export default emergingTech2028Services;