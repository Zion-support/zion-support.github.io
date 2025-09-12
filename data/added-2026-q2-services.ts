export interface Added2026Q2Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
};

export const added2026Q2Services: EnhancedRealMicroSaasService[] = [
  {
    id: 'q2-2026-service-1',
    name: 'Q2 2026 Service 1',
    tagline: 'Second quarter 2026 service',
    price: '$799',
    features: ['2026 Q2 features', 'Advanced capabilities', 'Enhanced performance']
  }
];
