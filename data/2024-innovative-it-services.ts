<<<<<<< HEAD
export interface InnovativeITService2024 {
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

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const innovativeITServices2024: InnovativeITService2024[] = [
  // Autonomous DevOps Platform
  {
    id: 'cloud-infrastructure-2024',
    name: 'Cloud Infrastructure Solution 2024',
    tagline: 'Scalable cloud infrastructure for enterprises',
    price: '$499',
    variant: 'cloud',
    features: ['Auto-scaling', 'Load balancing', 'High availability'],
    rating: 4.7,
    customers: '300+'
  }
];
=======
export const innovativeITServices2024 = [
  {
    id: 'it-service-2024-001',
    title: 'Cloud-Native Infrastructure Management',
    description: 'Modern cloud infrastructure management with automated scaling and optimization',
    category: 'Infrastructure',
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: 799
    },
    features: [
      'Auto-scaling',
      'Cost optimization',
      'Multi-cloud support',
      'Real-time monitoring'
    ],
    slug: 'cloud-native-infrastructure-management'
  },
  {
    id: 'it-service-2024-002',
    title: 'AI-Powered Security Operations Center',
    description: 'Intelligent security monitoring and threat detection platform',
    category: 'Cybersecurity',
    pricing: {
      starter: 149,
      professional: 449,
      enterprise: 1199
    },
    features: [
      'Threat detection',
      'Incident response',
      'Security analytics',
      'Compliance reporting'
    ],
    slug: 'ai-powered-security-operations-center'
  }
];

export default innovativeITServices2024;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-43b7
