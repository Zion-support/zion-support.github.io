import { ServiceVariant } from '../types/service-variants';

export interface CuttingEdgeEmergingTechService {
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
  variant: ServiceVariant;
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

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const cuttingEdgeEmergingTechServices2025: CuttingEdgeEmergingTechService[] = [
  {
    id: 'quantum-computing-as-a-service',
    name: 'Quantum Computing as a Service',
    tagline: 'Access to quantum computing power for complex problem solving',
    price: '$2,999',
    period: '/month',
    description: 'Advanced quantum computing platform that provides access to quantum computing resources for solving complex optimization, cryptography, and simulation problems that are intractable for classical computers.',
    features: [
      'Quantum computing resource access',
      'Quantum algorithm development',
      'Hybrid classical-quantum workflows',
      'Quantum simulation capabilities',
      'Expert quantum consulting',
      'Integration with classical systems',
      'Performance benchmarking',
      'Custom quantum solutions',
      '24/7 technical support'
    ],
    popular: false,
    icon: '⚛️',
    color: 'from-violet-600 to-purple-700',
    textColor: 'text-violet-400',
    link: 'https://ziontechgroup.com/quantum-computing-service',
    marketPosition: 'Quantum computing access specialized for complex problem solving.',
    targetAudience: 'Research institutions, Government agencies, Enterprise R&D teams',
    trialDays: 45,
    setupTime: '1 month',
    category: 'Quantum Computing',
    realService: true,
    technology: ['Quantum Computing', 'Quantum Algorithms', 'Hybrid Systems'],
    integrations: ['Classical computing systems', 'Research platforms', 'Enterprise software'],
    useCases: ['Complex optimization', 'Cryptography', 'Scientific simulation'],
    roi: 'Solve previously intractable problems and accelerate research by 10-100x.',
    competitors: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum', 'AWS Braket'],
    marketSize: '$2B quantum computing services',
    growthRate: '65% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum computing platform with hybrid classical-quantum workflow support.',
    launchDate: '2025-02-10',
    customers: 23,
    rating: 4.9,
    reviews: 18
  }
];