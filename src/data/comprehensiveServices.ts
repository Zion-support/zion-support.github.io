export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'one-time' | 'subscription' | 'usage-based' | 'project-based';
  features: string[];
  benefits: string[];
  marketPrice: string;
  deliveryTime: string;
  tags: string[];
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  aiScore: number;
  featured: boolean;
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    description: 'Custom AI-powered chatbots for customer service, sales, and support',
    category: 'AI & Machine Learning',
    subcategory: 'Chatbots',
    price: 2500,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'Natural language processing',
      'Multi-platform integration',
      'Custom training data',
      'Analytics dashboard',
      '24/7 support'
    ],
    benefits: [
      'Improved customer satisfaction',
      'Reduced support costs',
      '24/7 availability',
      'Scalable solution'
    ],
    marketPrice: '$3,000 - $5,000',
    deliveryTime: '2-4 weeks',
    tags: ['AI', 'Chatbot', 'NLP', 'Customer Service'],
    author: {
      name: 'Zion Tech Group',
      id: 'zion-tech',
      verified: true
    },
    images: ['https://picsum.photos/400/300?random=1'],
    rating: 4.8,
    reviewCount: 24,
    aiScore: 95,
    featured: true
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Services',
    description: 'Complete migration of your infrastructure to cloud platforms',
    category: 'Cloud & Infrastructure',
    subcategory: 'Migration',
    price: 5000,
    currency: 'USD',
    pricingModel: 'project-based',
    features: [
      'AWS/Azure/GCP migration',
      'Data migration',
      'Security configuration',
      'Performance optimization',
      'Training and documentation'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better performance'
    ],
    marketPrice: '$7,000 - $12,000',
    deliveryTime: '4-8 weeks',
    tags: ['Cloud', 'Migration', 'AWS', 'Azure', 'GCP'],
    author: {
      name: 'Zion Tech Group',
      id: 'zion-tech',
      verified: true
    },
    images: ['https://picsum.photos/400/300?random=2'],
    rating: 4.9,
    reviewCount: 18,
    aiScore: 92,
    featured: true
  }
];

export const SERVICE_CATEGORIES = [
  'AI & Machine Learning',
  'Cloud & Infrastructure',
  'Cybersecurity',
  'Data Analytics',
  'Web Development',
  'Mobile Development'
];

export const PRICING_TIERS = [
  {
    name: 'Basic',
    price: 1000,
    features: ['Basic features', 'Email support']
  },
  {
    name: 'Professional',
    price: 2500,
    features: ['All basic features', 'Priority support', 'Advanced features']
  },
  {
    name: 'Enterprise',
    price: 5000,
    features: ['All professional features', '24/7 support', 'Custom solutions']
  }
];

export const CONTACT_INFO = {
  email: 'info@ziontechgroup.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Silicon Valley, CA 94000'
};
