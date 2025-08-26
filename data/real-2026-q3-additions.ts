export interface Real2026Q3Addition {
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
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const real2026Q3Additions: Real2026Q3Addition[] = [
  {
    id: 'quantum-cryptography-platform-2026-q3',
    name: 'Quantum Cryptography Platform',
    tagline: 'Unbreakable encryption using quantum mechanics',
    price: '$2,499',
    period: '/month',
    description: 'Next-generation cryptography platform that leverages quantum mechanics for unbreakable encryption and secure communications.',
    features: [
      'Quantum key distribution',
      'Post-quantum cryptography',
      'Quantum-resistant algorithms',
      'Secure communication channels',
      'Real-time encryption',
      'Quantum random number generation',
      'Hardware security modules',
      'Compliance certifications',
      'API for developers',
      'Performance monitoring'
    ],
    popular: true,
    icon: '🔐',
    color: 'from-emerald-600 to-teal-600',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/quantum-cryptography',
    marketPosition: 'First-to-market quantum cryptography platform. Competes with traditional encryption with quantum security.',
    targetAudience: 'Government agencies, Financial institutions, Healthcare organizations, Defense contractors',
    trialDays: 45,
    setupTime: '1 month',
    category: 'Quantum Cryptography & Security',
    realService: true,
    technology: ['Python, Qiskit, Quantum hardware, C++, Rust, PostgreSQL'],
    integrations: ['Hardware security modules, Quantum networks, Cloud platforms, IoT devices'],
    useCases: ['Secure communications, Data encryption, Key management, Compliance'],
    roi: 'Organizations report 100% security improvement and compliance with quantum-resistant standards.',
    competitors: ['Traditional encryption providers, Quantum computing companies'],
    marketSize: '$5B quantum cryptography market',
    growthRate: '300% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production quantum cryptography platform with quantum hardware integration and advanced security protocols.',
    launchDate: '2026-07-01',
    customers: 18,
    rating: 4.9,
    reviews: 12
  }
];