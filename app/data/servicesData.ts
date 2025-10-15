export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | 'IoT';
  features: string[];
  pricing?: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  icon?: string;
  href: string;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Comprehensive artificial intelligence solutions for modern businesses',
    shortDescription: 'AI-powered solutions for business transformation',
    category: 'AI',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    pricing: {
      basic: 999,
      pro: 2999,
      enterprise: 9999
    },
    icon: '🤖',
    href: '/ai-solutions'
  },
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Complete IT infrastructure and support services',
    shortDescription: 'Professional IT services and support',
    category: 'IT',
    features: ['Infrastructure Management', 'Technical Support', 'System Integration', 'Cloud Migration'],
    pricing: {
      basic: 1999,
      pro: 4999,
      enterprise: 14999
    },
    icon: '💻',
    href: '/it-services'
  }
];