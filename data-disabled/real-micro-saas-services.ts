export interface RealMicroSaasService {
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

export const realMicroSaasServices: RealMicroSaasService[] = [
  {
    id: 'real-micro-saas',
    name: 'Real Micro SaaS',
    tagline: 'Real micro SaaS solution',
    price: '$39',
    period: '/month',
    description: 'A real micro SaaS solution for businesses.',
    features: [
      'Micro service architecture',
      'Real-time processing',
      'Scalable infrastructure'
    ],
    popular: true,
    icon: '⚡',
    color: 'blue',
    textColor: 'white',
    link: '/services/real-micro-saas',
    marketPosition: 'Leading',
    targetAudience: 'SMBs',
    realImplementation: true
  }
];