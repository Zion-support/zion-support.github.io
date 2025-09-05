export interface MicroSaasService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  category: string;
  color: string;
}

export const microSaasServices: MicroSaasService[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    tagline: 'Generate high-quality content with AI',
    price: '$29',
    period: '/month',
    description: 'AI-powered content generation for blogs, social media, and marketing materials.',
    features: ['AI writing assistant', 'Multiple content types', 'SEO optimization', 'Team collaboration'],
    popular: true,
    icon: '🤖',
    category: 'AI & Machine Learning',
    color: 'blue'
  }
];

export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'Data Analytics'
];