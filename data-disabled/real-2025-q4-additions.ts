export interface RealQ4Service {
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

export const real2025Q4Additions: RealQ4Service[] = [
  {
    id: 'q4-2025-service',
    name: 'Q4 2025 Service',
    tagline: 'Latest Q4 2025 service',
    price: '$79',
    period: '/month',
    description: 'A new service added in Q4 2025.',
    features: [
      'Latest features',
      'Advanced capabilities',
      'Modern architecture'
    ],
    popular: true,
    icon: '🚀',
    color: 'green',
    textColor: 'white',
    link: '/services/q4-2025-service',
    marketPosition: 'Leading',
    targetAudience: 'Enterprises',
    realImplementation: true
  }
];