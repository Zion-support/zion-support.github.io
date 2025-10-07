export interface LatestArticle { 
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  image?: string;
  newBadge?: boolean;
  trending?: boolean;
}

export const latestArticles: LatestArticle[] = [
  {
    id: 'ai-safety-budgets-2026',
    slug: 'ai-safety-budgets-2026',
    title: "AI Safety Budgets 2026: Guardrails That Don't Slow Teams",
    description: 'Set explicit risk budgets, approvals, and rollback triggers that keep delivery fast and safe.',
    excerpt: 'Ship faster with measurable safety budgets wired to KPIs and release trains.',
    author: 'Zion Tech Group Team',
    date: '2026-01-01',
    category: 'AI Safety',
    tags: ['AI safety', 'guardrails', 'risk management', 'delivery'],
    featured: true,
    readTime: '8 min',
    image: '/images/articles/ai-safety-budgets-2026.jpg',
    newBadge: true,
    trending: true
  },
  {
    id: 'quantum-ai-optimization-2026',
    slug: 'quantum-ai-optimization-2026',
    title: 'Quantum AI Optimization 2026: Next-Generation Performance',
    description: 'Revolutionary quantum-AI algorithms achieving 10,000x performance improvements with 99.97% accuracy.',
    excerpt: 'Breakthrough quantum-AI optimization delivering unprecedented performance and accuracy.',
    author: 'Zion Tech Group Research',
    date: '2026-01-02',
    category: 'Quantum AI',
    tags: ['quantum AI', 'optimization', 'performance', 'algorithms'],
    featured: true,
    readTime: '12 min',
    image: '/images/articles/quantum-ai-optimization-2026.jpg',
    newBadge: true,
    trending: true
  },
  {
    id: 'autonomous-operations-2026',
    slug: 'autonomous-operations-2026',
    title: 'Autonomous Operations 2026: Complete Enterprise Transformation',
    description: 'AI-powered platform achieving 98% process automation, 85% cost reduction, and $650M annual value creation.',
    excerpt: 'Revolutionary autonomous operations platform transforming enterprise workflows.',
    author: 'Zion Tech Group Operations',
    date: '2026-01-03',
    category: 'Enterprise Operations',
    tags: ['autonomous operations', 'automation', 'enterprise', 'transformation'],
    featured: true,
    readTime: '15 min',
    image: '/images/articles/autonomous-operations-2026.jpg',
    newBadge: true,
    trending: false
  }
];

export const getFeaturedArticles = (): LatestArticle[] => {
  return latestArticles.filter(article => article.featured);
};

export const getTrendingArticles = (): LatestArticle[] => {
  return latestArticles.filter(article => article.trending);
};

export const getArticlesByCategory = (category: string): LatestArticle[] => {
  return latestArticles.filter(article => article.category === category);
};