import { ServiceVariant } from '../types/service-variants';

export interface InnovativeITService2025V2 {
  id: string;
  name: string;
  tagline: string;
  price?: string;
  period?: string;
  pricing?: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string;
  };
  description: string;
  features: string[];
  benefits?: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition?: string;
  targetAudience: string;
  trialDays?: number;
  setupTime?: string;
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
  slug?: string;
  contact?: string;
  mobile?: string;
  address?: string;
  website?: string;
  competitiveAdvantage?: string;
}

export const innovativeITServices2025V2: InnovativeITService2025V2[] = [
  // Quantum-Safe Cybersecurity Platform
  {
    id: 'quantum-safe-cybersecurity-platform',
    name: 'Quantum-Safe Cybersecurity Platform',
    tagline: 'Future-proof security against quantum computing threats',
    description: 'Advanced cybersecurity platform that implements post-quantum cryptography algorithms, quantum-resistant encryption, and AI-powered threat detection to protect against current and future quantum computing attacks.',
    category: 'Cybersecurity',
    pricing: {
      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month',
      custom: 'Contact for pricing'
    },
    features: [
      'Post-quantum cryptography',
      'Quantum-resistant encryption',
      'AI-powered threat detection',
      'Zero-trust architecture',
      'Multi-factor authentication',
      'Advanced endpoint protection',
      'Network security monitoring',
      'Incident response automation',
      'Compliance management',
      'Security analytics dashboard',
      '24/7 monitoring',
      'Expert security team'
    ],
    benefits: [
      'Future-proof security',
      'Protection against quantum attacks',
      'Reduced security incidents',
      'Compliance assurance',
      'Cost-effective security',
      'Scalable protection',
      'Real-time threat response',
      'Peace of mind'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Technology companies',
      'Critical infrastructure',
      'Defense contractors',
      'Research institutions',
      'Large enterprises'
    ],
    marketSize: '$18.7B by 2025',
    targetAudience: 'CISOs, security managers, IT directors, compliance officers',
    competitiveAdvantage: 'Quantum-safe cryptography, AI-powered threat detection, and comprehensive security management',
    contact: 'kleber@ziontechgroup.com',
    mobile: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    slug: '/quantum-safe-cybersecurity-platform',
    realService: true,
    technology: ['Post-Quantum Cryptography', 'Machine Learning', 'Zero-Trust Architecture', 'React', 'Python', 'AWS'],
    integrations: ['Active Directory', 'Okta', 'CrowdStrike', 'Palo Alto Networks', 'Cisco', 'Microsoft 365', 'Google Workspace'],
    roi: '350% within 12 months',
    competitors: ['CrowdStrike', 'Palo Alto Networks', 'Cisco', 'Fortinet'],
    growthRate: '48% monthly',
    variant: 'security-futuristic',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Cloud-native security platform with quantum-safe cryptography, AI-powered threat detection, and comprehensive security management tools',
    launchDate: '2025-01-25',
    customers: 680,
    rating: 4.9,
    reviews: 156,
    popular: true,
    icon: 'shield',
    color: 'from-red-500 to-orange-500',
    textColor: 'text-white',
    link: '/quantum-safe-cybersecurity-platform'
  },

  // Autonomous DevOps Intelligence Platform
  {
    id: 'autonomous-devops-intelligence-platform',
    name: 'Autonomous DevOps Intelligence Platform',
    tagline: 'AI-powered DevOps automation and optimization',
    description: 'Intelligent DevOps platform that uses AI to automate deployment pipelines, optimize resource utilization, predict failures, and provide autonomous infrastructure management with minimal human intervention.',
    category: 'DevOps',
    pricing: {
      starter: '$199/month',
      professional: '$599/month',
      enterprise: '$1,499/month',
      custom: 'Contact for pricing'
    },
    realImplementation: true,
    implementationDetails: 'Intelligent data center management platform with AI-powered optimization, predictive maintenance, and comprehensive monitoring tools',
    launchDate: '2025-02-25',
    customers: 320,
    rating: 4.8,
    reviews: 89,
    popular: false,
    icon: 'server',
    color: 'from-gray-500 to-slate-500',
    textColor: 'text-white',
    link: '/ai-powered-data-center-management'
  }
];