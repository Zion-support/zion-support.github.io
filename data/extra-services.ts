export interface ExtraService {
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

export const extraServices: ExtraService[] = [
  {
    id: 'extra-service',
    name: 'Extra Service',
    tagline: 'Additional service offering',
    price: '$29',
    period: '/month',
    description: 'An additional service offering.',
    features: ['Feature 1', 'Feature 2'],
    popular: false,
    icon: '➕',
    color: 'green',
    textColor: 'white',
    link: '/services/extra-service',
    marketPosition: 'Growing',
    targetAudience: 'Startups',
    realImplementation: true
  }
];