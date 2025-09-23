export interface SpecializedIndustrySolution {
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

export const specializedIndustrySolutions2026: SpecializedIndustrySolution[] = [
  {
    id: 'healthcare-ai-diagnostic-platform',
    name: 'Healthcare AI Diagnostic Platform',
    tagline: 'Advanced AI-powered diagnostic tools for healthcare professionals',
    price: '$18,999',
    period: '/month',
    description: 'AI diagnostic platform that assists with analysis and planning.',
    features: ['Image analysis', 'Diagnosis support', 'Treatment recommendations'],
    popular: true,
    icon: '🏥',
    color: 'from-green-600 to-emerald-600',
    textColor: 'text-green-400',
    link: 'https://ziontechgroup.com/healthcare-ai-diagnostic-platform',
    marketPosition: 'Cost-effective implementation with comprehensive features.',
    targetAudience: 'Hospitals, Clinics, Diagnostic centers',
    trialDays: 30,
    setupTime: '4-6 weeks',
    category: 'Healthcare Technology',
    realService: true,
    technology: ['Python', 'TensorFlow', 'NLP', 'React', 'Node.js'],
    integrations: ['EMR systems', 'PACS systems'],
    useCases: ['Imaging analysis', 'Diagnostic support'],
    roi: 'Improve accuracy and reduce errors.',
    competitors: ['IBM Watson Health', 'Google Health AI'],
    marketSize: '$45.2B',
    growthRate: '44.9% annual',
    contactInfo: contact,
    realImplementation: true,
    implementationDetails: 'Diagnostic support and decision assistance.',
    launchDate: '2024-06-15',
    customers: 28,
    rating: 4.9,
    reviews: 22
  }
];

export const INDUSTRY_SOLUTION_CATEGORIES = [
  'Healthcare Technology',
  'FinTech Solutions',
  'Manufacturing Technology',
  'Retail Technology',
  'Logistics Technology'
];
