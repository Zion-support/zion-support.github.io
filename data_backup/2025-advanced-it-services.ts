import { ServiceVariant } from '../types/service-variants';

export interface AdvancedITService {
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

export const advancedITServices2025: AdvancedITService[] = [
  {
    id: 'quantum-cloud-infrastructure-platform',
    name: 'Quantum Cloud Infrastructure Platform',
    tagline: 'Next-generation quantum-enhanced cloud infrastructure with unprecedented performance',
    price: '$1,299',
    period: '/month',
    description: 'Next-generation quantum-enhanced cloud infrastructure platform that provides unprecedented performance, security, and scalability for enterprise applications with quantum computing capabilities.',
    features: [
      'Quantum-enhanced computing resources',
      'Advanced security with quantum encryption',
      'Auto-scaling infrastructure',
      'Global edge computing network',
      'Integration with major cloud providers',
      'Advanced monitoring and analytics',
      'Custom quantum algorithms',
      '24/7 technical support',
      'Disaster recovery and backup'
    ],
    popular: true,
    icon: '⚛️',
    color: 'from-purple-600 to-violet-700',
    textColor: 'text-purple-400',
    link: 'https://ziontechgroup.com/quantum-cloud-infrastructure',
    marketPosition: 'Quantum-enhanced cloud infrastructure specialized for enterprise applications.',
    targetAudience: 'Enterprise IT teams, Cloud architects, Research institutions',
    trialDays: 30,
    setupTime: '2-3 weeks',
    category: 'Quantum Cloud Infrastructure',
    realService: true,
    technology: ['Quantum Computing', 'Cloud Infrastructure', 'Quantum Encryption'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'IBM Quantum'],
    useCases: ['High-performance computing', 'Quantum research', 'Enterprise applications'],
    roi: 'Improve computational performance by 100-1000x for quantum-optimized workloads.',
    competitors: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum', 'AWS Braket'],
    marketSize: '$5B quantum cloud',
    growthRate: '65% YoY',
    variant: 'quantum-futuristic',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Quantum-enhanced cloud infrastructure with hybrid classical-quantum computing capabilities.',
    launchDate: '2025-01-10',
    customers: 45,
    rating: 4.9,
    reviews: 34
  }
];