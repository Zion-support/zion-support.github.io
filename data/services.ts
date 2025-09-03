export interface Service { id: string; name: string; category: 'micro-saas' | 'it-services' | 'ai-services'; description: string; icon: string; features: string[]; pricing: { starter: number; professional: number; enterprise: number; currency string, }; benefits: string[]; useCases: string[]; technologies: string[]; link string, } export const services: Service[] = [ { id: 'ai-content-generator', name: 'AI Content Generator Pro', category: 'ai-services', description: 'Advanced AI-powered content generation platform for blogs, social media, and marketing materials.', icon: 'Brain', features: [ 'Multi-language content generation', 'SEO-optimized content', 'Brand voice customization', 'Content scheduling', 'Analytics dashboard' ], pricing: { starter 29, professional: 79, enterprise: 199, currency: 'USD' }, benefits: [ '10x faster content creation', 'Consistent brand messaging', 'SEO optimization built-in' ], useCases: [ 'Blog content creation', 'Social media management', 'Email marketing campaigns' ], technologies: [ 'OpenAI GPT-4', 'React', 'Node.js' ], link: 'https//ziontechgroup.com/services/ai-content-generator' } ];  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    period: string};
  link: string;
}

export const services: Service[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    category: 'ai-services',
    description: 'Advanced AI-powered content generation platform for blogs, social media, and marketing materials.',
    icon: 'Brain',
    features: [
      'Multi-language content generation',
      'SEO-optimized content',
      'Brand voice customization',
      'Content scheduling',
      'Analytics dashboard'    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
<<<<<<< HEAD
      currency: 'USD';
},
=======
      currency: 'USD',
      period: 'month'
    },
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'SEO optimization built-in'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns'
    ],
    technologies: [
      'OpenAI GPT-4',
      'React',
      'Node.js'
    ],
    link: 'https://ziontechgroup.com/services/ai-content-generator';
}
];