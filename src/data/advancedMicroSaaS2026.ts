export interface MicroSaaSProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  features: string[];
}

export const advancedMicroSaaS2026: MicroSaaSProduct[] = [
  {
    id: '1',
    name: 'AI Content Generator',
    description: 'Generate high-quality content using AI',
    category: 'AI Tools',
    price: 29.99,
    features: ['Content Generation', 'SEO Optimization', 'Multi-language Support']
  },
  {
    id: '2',
    name: 'Social Media Scheduler',
    description: 'Schedule and manage social media posts',
    category: 'Social Media',
    price: 19.99,
    features: ['Multi-platform Support', 'Analytics', 'Auto-posting']
  }
];