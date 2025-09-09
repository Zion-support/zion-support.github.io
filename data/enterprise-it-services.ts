export interface EnterpriseItService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
}

export const enterpriseITServices: EnterpriseItService[] = [
  {
    id: 'enterprise-cloud-migration',
    name: 'Enterprise Cloud Migration',
    tagline: 'Complete cloud transformation for enterprise',
    price: '$50,000',
    description: 'Comprehensive cloud migration service for enterprise applications',
    features: [
      'AWS/Azure/GCP migration',
      'Data migration',
      'Security compliance',
      'Performance optimization'
    ],
    link: '/services/enterprise-cloud-migration',
    category: 'Cloud Services',
    realImplementation: true
  }
];