export interface ComprehensiveService {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  targetAudience: string[];
  useCases: string[];
  integration: string[];
  pricingTier: 'Starter' | 'Professional' | 'Enterprise' | 'Custom';
  website: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  rating: number;
  reviewCount: number;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
}

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  {
    id: 'ai-content-generator',
    title: 'Zion AI Content Generator',
    description: 'Advanced AI-powered content creation platform that generates high-quality articles, blog posts, social media content, and marketing copy in seconds.',
    category: 'AI',
    subcategory: 'Content Creation',
    price: {
      monthly: 29,
      yearly: 290,
      currency: '$'
    },
    features: [
      'Multi-language content generation',
      'SEO-optimized writing',
      'Brand voice customization',
      'Plagiarism-free content',
      'Bulk content creation',
      'API access for developers'
    ],
    benefits: [
      'Save 80% of content creation time',
      'Improve SEO rankings with optimized content',
      'Maintain consistent brand voice',
      'Scale content production effortlessly'
    ],
    targetAudience: ['Content creators', 'Marketing teams', 'Small businesses', 'Agencies'],
    useCases: [
      'Blog post generation',
      'Social media content',
      'Email marketing campaigns',
      'Product descriptions'
    ],
    integration: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'REST API'],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/ai-content-generator',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.8,
    reviewCount: 156,
    launchDate: '2024-01-15',
    status: 'Active'
  },
  {
    id: 'ai-chatbot-builder',
    title: 'Zion AI Chatbot Builder',
    description: 'No-code AI chatbot creation platform that helps businesses build intelligent customer service bots in minutes without technical expertise.',
    category: 'AI',
    subcategory: 'Customer Service',
    price: {
      monthly: 49,
      yearly: 490,
      currency: '$'
    },
    features: [
      'Drag-and-drop interface',
      'Multi-language support',
      'Integration with major platforms',
      'Analytics and insights',
      'Custom branding options',
      '24/7 customer support'
    ],
    benefits: [
      'Reduce customer service costs by 60%',
      'Provide instant responses 24/7',
      'Improve customer satisfaction scores',
      'Scale support operations efficiently'
    ],
    targetAudience: ['Customer service teams', 'E-commerce businesses', 'SaaS companies', 'Support agencies'],
    useCases: [
      'Customer support automation',
      'Lead qualification',
      'Appointment scheduling',
      'FAQ handling'
    ],
    integration: ['Slack', 'Discord', 'Website chat', 'Mobile apps', 'CRM systems'],
    pricingTier: 'Professional',
    website: 'https://ziontechgroup.com/ai-chatbot-builder',
    contactInfo: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    rating: 4.7,
    reviewCount: 89,
    launchDate: '2024-02-01',
    status: 'Active'
  }
];

export const SERVICE_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity", 
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Digital Transformation",
  "Web & Mobile Development",
  "IT Support & Consulting",
  "Blockchain & Web3",
  "Voice AI",
  "Quantum Security",
  "Content Creation",
  "Identity Management",
  "Sales Intelligence",
  "Incident Response",
  "Customer Analytics",
  "Supply Chain",
  "HR Technology",
  "Financial Security",
  "Storage Solutions",
  "Customer Experience",
  "Zero Trust Security",
  "NFT Platform",
  "DeFi Services",
  "Security Testing",
  "Process Automation"
];

export const SERVICE_PRICING_TIERS = {
  starter: {
    name: 'Starter',
    price: 99,
    features: ['Basic features', 'Email support', '5GB storage']
  },
  professional: {
    name: 'Professional',
    price: 299,
    features: ['Advanced features', 'Priority support', '25GB storage', 'API access']
  },
  enterprise: {
    name: 'Enterprise',
    price: 999,
    features: ['All features', '24/7 support', 'Unlimited storage', 'Custom integrations']
  }
};

export const CONTACT_INFO = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  website: 'https://ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

export const SERVICE_GUARANTEES = [
  '30-day money-back guarantee',
  '99.9% uptime SLA',
  '24/7 technical support',
  'Free migration assistance'
];