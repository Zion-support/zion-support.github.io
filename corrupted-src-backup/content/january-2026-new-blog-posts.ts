export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  slug: string;
}

export const january2026NewBlogPosts: BlogPost[] = [
  {
    id: 'ai-safety-budgets-2026',
    title: 'AI Safety Budgets 2026: Enterprise Risk Management',
    excerpt:
      'Comprehensive framework for managing AI safety risks with budgeted approaches and measurable outcomes.',
    content: 'Full content about AI safety budgets...',
    author: 'Zion Tech Group',
    publishedAt: '2026-01-15',
    readTime: 12,
    category: 'AI Safety',
    tags: ['AI Safety', 'Risk Management', 'Enterprise', '2026'],
    featured: true,
    slug: 'ai-safety-budgets-2026',
  },
  {
    id: 'quantum-ai-integration-2026',
    title: 'Quantum AI Integration 2026: Next-Gen Computing',
    excerpt:
      'Revolutionary quantum AI integration delivering unprecedented computational capabilities.',
    content: 'Full content about quantum AI integration...',
    author: 'Zion Tech Group',
    publishedAt: '2026-01-10',
    readTime: 15,
    category: 'Quantum AI',
    tags: ['Quantum AI', 'Computing', 'Integration', '2026'],
    featured: true,
    slug: 'quantum-ai-integration-2026',
  },
];
