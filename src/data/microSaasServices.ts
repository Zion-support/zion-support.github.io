export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  marketPrice: string;
  website: string;
  contactEmail: string;
  marketPrice: string;
  website: string;
  contactEmail: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  location: string;
  availability: string;
  featured: boolean;
  location: string;
  availability: string;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
    verified: boolean;
  };
  images: string[];
  createdAt: string;
}
export const MICRO_SAAS_SERVICES: MicroSaasService[] = [
    features: [
      'Process mapping and analysis',
      'AI implementation and training',
      'Real-time monitoring dashboard',
      'Ongoing optimization',
      'API integrations',
      'Custom workflow builder'
    ],
    benefits: [
      'Reduce manual tasks by 80%',
      'Improve process efficiency by 60%',
      'Real-time insights and analytics',
      'Scalable automation workflows'
    ],
    useCases: ['HR processes', 'Customer onboarding', 'Invoice processing', 'Data entry automation'],
    link: '/services/ai-workflow-automation',
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator Suite",
    description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and product descriptions. Includes SEO optimization and brand voice customization.",
    category: "AI Services",
    subcategory: "Content Creation",
  }
];

export const SERVICE_CATEGORIES = [
  {
    name: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions',
    icon: '🤖',
    color: 'from-purple-600 to-pink-600',
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'AI Services')
  },
  {
    name: 'IT Services',
    description: 'Comprehensive IT infrastructure and digital transformation',
    icon: '💻',
    color: 'from-blue-600 to-cyan-600',
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'IT Services')
  },
  {
    name: 'Micro SaaS',
    description: 'Scalable software solutions for specific business needs',
    icon: '🚀',
    color: 'from-green-600 to-emerald-600',
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'Micro SaaS')
  }
];

export const PRICING_TIERS = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: 29,
    features: [
      'Basic features',
      'Email support',
      '1 user',
      'Standard integrations',
      'Community forum access'
    ],
    color: 'from-cyan-500 to-blue-600',
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: 99,
    features: [
      'Advanced features',
      'Priority support',
      'Up to 10 users',
      'Advanced integrations',
      'API access',
      'Custom branding',
      'Analytics dashboard'
    ],
    color: 'from-purple-500 to-cyan-500',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: 299,
    features: [
      'Custom features',
      '24/7 dedicated support',
      'Unlimited users',
      'Custom integrations',
      'White-label options',
      'Advanced security',
      'SLA guarantees',
      'Dedicated account manager'
    ],
    color: 'from-blue-500 to-purple-500',
    popular: false
  }
];
export const CONTACT_INFO = {
  email: 'kleber@ziontechgroup.com',
  phone: '+1 302 464 0950',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};
export const getMicroSaasServiceById = (id: string): MicroSaasService | undefined => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};
export const getMicroSaasServicesByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};
export const getMicroSaasCategories = (): string[] => {
  return [...new Set(MICRO_SAAS_SERVICES.map(service => service.category))];
};