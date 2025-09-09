export interface Revolutionary2030BusinessIndustryService {
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
  targetAudience: string[];
  realImplementation: boolean;
}

export const revolutionary2030BusinessIndustryServices: Revolutionary2030BusinessIndustryService[] = [
  {
    id: 'business-2030-service',
    name: 'Business 2030 Service',
    tagline: 'Revolutionary business service for 2030',
    price: '$399',
    period: '/month',
    description: 'A revolutionary business service for 2030.',
    features: ['Business intelligence', 'Process automation', 'Analytics'],
    popular: true,
    icon: '📊',
    color: 'green',
    textColor: 'white',
    link: '/services/business-2030-service',
    marketPosition: 'Revolutionary',
    targetAudience: ['Enterprises', 'Business analysts'],
    realImplementation: true
  }
];