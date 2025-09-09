export interface New2025Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  category: string;
  description?: string;
}

export const new2025Services: New2025Service[] = [
  {
    id: 'new-2025-1',
    name: 'AI-Powered Analytics Suite',
    tagline: 'Next-generation AI analytics platform',
    price: '$599',
    category: 'AI & Analytics',
    description: 'Advanced AI-driven business intelligence and analytics'
  },
  {
    id: 'new-2025-2',
    name: 'Quantum Security Platform',
    tagline: 'Future-proof quantum security solutions',
    price: '$899',
    category: 'Cybersecurity',
    description: 'Quantum-resistant encryption and security protocols'
  }
];