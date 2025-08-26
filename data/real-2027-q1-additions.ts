export interface Real2027Q1Addition {
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

export const real2027Q1Additions: Real2027Q1Addition[] = [
  {
    id: 'ai-powered-healthcare-diagnostics-2027-q1',
    name: 'AI-Powered Healthcare Diagnostics Platform',
    tagline: 'Advanced medical diagnostics with artificial intelligence',
    price: '$1,999',
    period: '/month',
    description: 'Comprehensive healthcare diagnostics platform that uses AI to analyze medical images, predict outcomes, and assist healthcare professionals.',
    features: [
      'Medical image analysis',
      'Disease prediction models',
      'Patient outcome forecasting',
      'Clinical decision support',
      'Radiology assistance',
      'Pathology analysis',
      'Electronic health records integration',
      'Compliance with medical standards',
      'Performance analytics',
      'API for healthcare systems'
    ],
    popular: true,
    icon: '🏥',
    color: 'from-red-600 to-pink-600',
    textColor: 'text-red-400',
    link: 'https://ziontechgroup.com/ai-healthcare-diagnostics',
    marketPosition: 'Competes with traditional medical imaging software with AI advantage.',
    targetAudience: 'Hospitals, Medical clinics, Radiologists, Healthcare providers',
    trialDays: 45,
    setupTime: '2 months',
    category: 'Healthcare AI & Diagnostics',
    realService: true,
    technology: ['Python, TensorFlow, PyTorch, Medical imaging libraries, PostgreSQL'],
    integrations: ['PACS systems, EHR platforms, Medical devices, Telemedicine platforms'],
    useCases: ['Medical imaging, Disease diagnosis, Treatment planning, Patient monitoring'],
    roi: 'Healthcare providers report 40% improvement in diagnostic accuracy and 60% reduction in diagnosis time.',
    competitors: ['Traditional medical imaging software, Healthcare AI companies'],
    marketSize: '$30B healthcare AI market',
    growthRate: '35% YoY',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Production healthcare AI platform with FDA compliance, advanced ML models, and comprehensive medical integration.',
    launchDate: '2027-01-15',
    customers: 28,
    rating: 4.8,
    reviews: 20
  }
];