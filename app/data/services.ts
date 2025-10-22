export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: 'ai' | 'it' | 'saas' | 'blockchain' | 'iot' | 'devops' | 'data' | 'security' | 'cloud' | 'mobile' | 'web';
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  demoUrl?: string;
  documentationUrl?: string;
  apiUrl?: string;
  status: 'active' | 'beta' | 'coming-soon';
  launchDate: string;
  lastUpdated: string;
  icon: string;
  gradient: string;
  glow: string;
  route: string;
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'Build intelligent conversational AI chatbots with natural language processing, multi-language support, and seamless integration capabilities.',
    shortDescription: 'Create intelligent chatbots with advanced NLP capabilities',
    category: 'ai',
    pricing: {
      basic: 29,
      pro: 99,
      enterprise: 299,
      currency: 'USD'
    },
    features: [
      'Natural Language Processing',
      'Multi-language Support',
      'Custom Training Models',
      'API Integration',
      'Analytics Dashboard',
      'Voice Recognition'
    ],
    benefits: [
      '24/7 Customer Support',
      'Reduced Response Time',
      'Scalable Solutions',
      'Cost Effective'
    ],
    useCases: [
      'Customer Service',
      'Lead Generation',
      'FAQ Automation',
      'E-commerce Support'
    ],
    technologies: ['OpenAI GPT', 'TensorFlow', 'React', 'Node.js'],
    demoUrl: 'https://demo.ziontechgroup.com/chatbot',
    documentationUrl: 'https://docs.ziontechgroup.com/chatbot',
    apiUrl: 'https://api.ziontechgroup.com/chatbot',
    status: 'active',
    launchDate: '2024-01-15',
    lastUpdated: '2024-10-08',
    icon: '🤖',
    gradient: 'from-blue-500 to-purple-600',
    glow: 'blue',
    route: '/ai-chatbot-builder'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
    shortDescription: 'AI-powered content creation for all your needs',
    category: 'ai',
    pricing: {
      basic: 49,
      pro: 149,
      enterprise: 399,
      currency: 'USD'
    },
    features: [
      'Multiple Content Types',
      'SEO Optimization',
      'Brand Voice Training',
      'Plagiarism Detection',
      'Content Scheduling',
      'Multi-language Support'
    ],
    benefits: [
      '10x Faster Content Creation',
      'Consistent Brand Voice',
      'SEO Optimized Output',
      'Time and Cost Savings'
    ],
    useCases: [
      'Blog Writing',
      'Social Media Posts',
      'Marketing Copy',
      'Product Descriptions'
    ],
    technologies: ['GPT-4', 'BERT', 'Python', 'FastAPI'],
    demoUrl: 'https://demo.ziontechgroup.com/content-generator',
    documentationUrl: 'https://docs.ziontechgroup.com/content-generator',
    apiUrl: 'https://api.ziontechgroup.com/content-generator',
    status: 'active',
    launchDate: '2024-02-01',
    lastUpdated: '2024-10-08',
    icon: '✍️',
    gradient: 'from-green-500 to-teal-600',
    glow: 'green',
    route: '/ai-content-generation-pro'
  },
  {
    id: 'ai-image-generator',
    name: 'AI Image Generator',
    description: 'Create stunning images, artwork, and graphics using advanced AI image generation models.',
    shortDescription: 'Generate beautiful images with AI',
    category: 'ai',
    pricing: {
      basic: 39,
      pro: 119,
      enterprise: 349,
      currency: 'USD'
    },
    features: [
      'Multiple Art Styles',
      'High Resolution Output',
      'Batch Processing',
      'Custom Prompts',
      'Image Editing Tools',
      'Commercial License'
    ],
    benefits: [
      'Unlimited Creativity',
      'Professional Quality',
      'Fast Generation',
      'Cost Effective'
    ],
    useCases: [
      'Marketing Materials',
      'Social Media Graphics',
      'Website Images',
      'Product Mockups'
    ],
    technologies: ['DALL-E', 'Stable Diffusion', 'Python', 'OpenCV'],
    demoUrl: 'https://demo.ziontechgroup.com/image-generator',
    documentationUrl: 'https://docs.ziontechgroup.com/image-generator',
    apiUrl: 'https://api.ziontechgroup.com/image-generator',
    status: 'active',
    launchDate: '2024-02-15',
    lastUpdated: '2024-10-08',
    icon: '🎨',
    gradient: 'from-pink-500 to-rose-600',
    glow: 'pink',
    route: '/ai-image-generator'
  }
];