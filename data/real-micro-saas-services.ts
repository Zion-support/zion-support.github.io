export interface RealMicroSaasService {
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
  category: string;
  realImplementation: boolean;
}

export const realMicroSaasServices: RealMicroSaasService[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    tagline: 'Generate high-quality content with AI',
    price: '$99',
    period: '/month',
    description: 'AI-powered content generation for blogs, social media, and marketing',
    features: [
      'Blog post generation',
      'Social media content',
      'SEO optimization',
      'Multi-language support'
    ],
    popular: true,
    icon: '🤖',
    color: 'from-blue-500 to-purple-600',
    textColor: 'text-white',
    link: '/services/ai-content-generator',
    category: 'AI Services',
    realImplementation: true
  }
];