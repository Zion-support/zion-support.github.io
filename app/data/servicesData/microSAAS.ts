import { Service } from './index';

export const microSAAS: Service[] = [
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator Pro',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI',
    shortDescription: 'AI-powered content creation at scale',
    icon: '✍️',
    features: [
      'Blog Post Generation',
      'Social Media Content',
      'Email Marketing Copy',
      'SEO Optimization',
      'Multi-language Support',
      'Brand Voice Training',
      'Content Templates',
      'Plagiarism Detection',
      'Performance Analytics',
      'Team Collaboration'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799
    },
    benefits: [
      'Save 80% content creation time',
      'Consistent brand voice',
      'SEO-optimized content',
      'Multi-platform publishing',
      'Content calendar management',
      'ROI tracking'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions',
      'Ad copy generation',
      'Content localization'
    ],
    marketPrice: '$99 - $799/month',
    link: '/micro-saas/ai-content-generator',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-generator'
    }
  }
  // Add more micro SAAS services as needed
];