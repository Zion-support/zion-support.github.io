export interface Revolutionary2030ITCloudService {
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

export const revolutionary2030ITCloudServices: Revolutionary2030ITCloudService[] = [
  {
    id: 'cloud-2030-service',
    name: 'Cloud 2030 Service',
    tagline: 'Revolutionary cloud service for 2030',
    price: '$299',
    period: '/month',
    description: 'A revolutionary cloud service for 2030.',
    features: ['Cloud infrastructure', 'Scalable architecture', 'Advanced security'],
    popular: true,
    icon: '☁️',
    color: 'blue',
    textColor: 'white',
    link: '/services/cloud-2030-service',
    marketPosition: 'Revolutionary',
    targetAudience: ['Enterprises', 'Cloud providers'],
    realImplementation: true
  }
];