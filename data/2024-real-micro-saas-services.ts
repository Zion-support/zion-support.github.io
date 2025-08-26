import { ServiceVariant } from '../types/service-variants';
export interface RealMicroSaasService2024 {
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

export const realMicroSaasServices2024: RealMicroSaasService2024[] = [
  // AI-Powered Business Intelligence
  {
    id: 'ai-automation-2024',
    name: 'AI Automation Platform 2024',
    tagline: 'Intelligent automation for modern businesses',
    price: '$299',
    variant: 'ai',
    features: ['AI-powered workflows', 'Process automation', 'Smart decision making'],
    rating: 4.8,
    customers: '500+'
  }
];
