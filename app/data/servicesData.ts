export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const services: Service[] = [
  {
    id: 'ai-content-generation',
    title: 'AI Content Generation',
    description: 'Advanced AI-powered content generation for all your business needs',
    shortDescription: 'AI content generation service',
    icon: 'document-text',
    features: [
      'Automated content creation',
      'Multiple content formats',
      'SEO optimization',
      'Brand voice consistency'
    ],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000
    },
    benefits: [
      'Save time on content creation',
      'Consistent quality output',
      'Scalable content production'
    ],
    useCases: [
      'Blog posts and articles',
      'Social media content',
      'Marketing copy',
      'Product descriptions'
    ],
    technologies: ['GPT-4', 'Claude', 'Custom AI models'],
    contactInfo: {
      phone: '+1-555-0123',
      email: 'ai-content@ziontech.com',
      website: 'https://ziontech.com/ai-content'
    }
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Professional web development services for modern businesses',
    shortDescription: 'Custom web development solutions',
    icon: 'code-bracket',
    features: [
      'Responsive design',
      'Modern frameworks',
      'SEO optimization',
      'Performance optimization'
    ],
    pricing: {
      basic: 2000,
      pro: 8000,
      enterprise: 25000
    },
    benefits: [
      'Custom solutions',
      'Modern technology stack',
      'Scalable architecture'
    ],
    useCases: [
      'Business websites',
      'E-commerce platforms',
      'Web applications',
      'Portfolio sites'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    contactInfo: {
      phone: '+1-555-0124',
      email: 'web-dev@ziontech.com',
      website: 'https://ziontech.com/web-development'
    }
  }
];

