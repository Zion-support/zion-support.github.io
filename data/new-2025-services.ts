export interface Service2025 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period?: string;
  description: string;
  link: string;
  category: string;
  realImplementation: boolean;
}

export const new2025Services: Service2025[] = [
  {
    id: 'starter-2025-service',
    name: 'Starter 2025 Service',
    tagline: 'Example 2025 service entry',
    price: '$99',
    period: '/month',
    description: 'Minimal placeholder to resolve type errors. Replace with real content later.',
    link: '/services/starter-2025-service',
    category: 'General',
    realImplementation: false,
  },
];