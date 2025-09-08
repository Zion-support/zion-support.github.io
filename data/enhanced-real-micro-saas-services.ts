export interface MicroSaasService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  category: string;
  color: string;
}

export const enhancedRealMicroSaasServices: EnhancedRealMicroSaasService[] = [
  // Revolutionary Quantum AI Services
  {
    id: 'quantum-ai-cognitive-platform',
    name: 'Quantum AI Cognitive Platform',
    tagline: 'Revolutionary quantum AI platform with unprecedented problem-solving capabilities',
    price: '$1,299',
    period: '/month',
    description: 'AI-powered content generation for blogs, social media, and marketing materials.',
    features: ['AI writing assistant', 'Multiple content types', 'SEO optimization', 'Team collaboration'],
    popular: true,
    icon: '🤖',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: 'https://ziontechgroup.com/autonomous-ai-agents',
    marketPosition: 'Cutting-edge autonomous AI platform. Competes with traditional RPA tools but offers true AI autonomy.',
    targetAudience: 'Enterprise businesses, E-commerce companies, Customer service teams, Operations managers, Data analysts',
    trialDays: 21,
    setupTime: '1-2 days',
    category: 'AI & Machine Learning',
    color: 'blue'
  }
];

export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'Data Analytics'
];