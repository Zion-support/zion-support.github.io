export interface InnovativeMicroSaasService {
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
  realImplementation: boolean;
  address?: string;
  website?: string;
}

export const innovativeMicroSaasServices: InnovativeMicroSaasService[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    tagline: 'Generate high-quality content with AI',
    price: '$29',
    period: '/month',
    description:
      'AI-powered content generation for blogs, social media, and marketing materials.',
    features: [
      'AI content generation',
      'Multiple content types',
      'SEO optimization',
      'Brand voice customization',
    ],
    popular: true,
    icon: '📝',
    color: 'blue',
    textColor: 'white',
    link: '/services/ai-content-generator',
    marketPosition: 'Leading',
    targetAudience: 'Content creators',
    realImplementation: true,
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
  },
];
