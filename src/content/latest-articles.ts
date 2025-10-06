export interface LatestArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export const latestArticles: LatestArticle[] = [
  {
    id: 'ai-safety-budgets-2026',
    slug: 'ai-safety-budgets-2026',
    title: 'AI Safety Budgets 2026: Enterprise Risk Management',
    excerpt:
      'Comprehensive framework for managing AI safety risks with budgeted approaches and measurable outcomes.',
    author: 'Zion Tech Group',
    date: '2026-01-15',
    category: 'AI Safety',
    readTime: '12 min read',
    featured: true,
    tags: ['AI Safety', 'Risk Management', 'Enterprise', '2026'],
  },
  {
    id: 'quantum-ai-integration-2026',
    slug: 'quantum-ai-integration-2026',
    title: 'Quantum AI Integration 2026: Next-Gen Computing',
    excerpt:
      'Revolutionary quantum AI integration delivering unprecedented computational capabilities.',
    author: 'Zion Tech Group',
    date: '2026-01-10',
    category: 'Quantum AI',
    readTime: '15 min read',
    featured: true,
    tags: ['Quantum AI', 'Computing', 'Integration', '2026'],
  },
];
