export interface MicroSaasService {_id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  category: string;
  color: string;}

export const microSaasServices: MicroSaasService[] = [
  {_id: 'ai-content-generator', _name: 'AI Content Generator', _tagline: 'Generate high-quality content with AI', _price: '$29', _period: '/month', _description: 'AI-powered content generation for blogs, _social media, _and marketing materials.', _features: ['AI writing assistant', _'Multiple content types', _'SEO optimization', _'Team collaboration'], _popular: true, _icon: '🤖', _category: 'AI & Machine Learning', _color: 'blue'}
];

export const _serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'Data Analytics'
];