export interface EnhancedRealMicroSaasService {
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
  realImplementation: boolean;
}

export const enhancedRealMicroSaasServices: EnhancedRealMicroSaasService[] = [
  {
    id: 'enhanced-service',
    name: 'Enhanced Service',
    tagline: 'Enhanced micro SaaS service',
    price: '$49',
    period: '/month',
    description: 'An enhanced micro SaaS service.',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    popular: true,
    icon: '⚡',
    color: 'blue',
    textColor: 'white',
    link: '/services/enhanced-service',
    marketPosition: 'Leading',
    targetAudience: 'SMBs',
    realImplementation: true
  }
];