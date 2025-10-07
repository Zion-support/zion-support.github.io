export interface NewArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  publishedDate: string;
  featured: boolean;
  link: string;
  readTime: string;
  tags: string[];
}

export const newArticles2025: NewArticle[] = [
  {
    id: 'ai-2025-oct-03-reliable-agent-ops',
    title: '🤖 Reliable Agent Ops: Budgets, Approvals, and Live Evals',
    description: 'Ship agentic systems with budgeted tools, PR policy tests, and instant rollback—safely and fast.',
    category: 'GenAI',
    publishedDate: '2025-10-03',
    featured: true,
    link: '/blog/ai-2025-oct-03-reliable-agent-ops',
    readTime: '8 min',
    tags: ['agents', 'operations', 'budgets', 'approvals', 'rollback']
  },
  {
    id: 'ai-2025-oct-03-enterprise-rag-quality-budgets',
    title: '📚 Enterprise RAG Quality Budgets: Lift Correctness, Cut Spend',
    description: 'Freshness windows, retrieval tiers, and semantic caches that raise answer quality while reducing cost.',
    category: 'RAG',
    publishedDate: '2025-10-03',
    featured: true,
    link: '/blog/ai-2025-oct-03-enterprise-rag-quality-budgets',
    readTime: '9 min',
    tags: ['RAG', 'quality', 'caching', 'freshness', 'cost']
  },
  {
    id: 'ai-2025-oct-03-genai-cost-optimization-v6',
    title: '💰 GenAI Cost Optimization v6: Quality Tiers Coalesce Distill',
    description: 'Cut inference spend 60–85% with tiered routing, request coalescing, and selective distillation.',
    category: 'GenAI',
    publishedDate: '2025-10-03',
    featured: true,
    link: '/blog/ai-2025-oct-03-genai-cost-optimization-v6',
    readTime: '9 min',
    tags: ['cost optimization', 'tiered routing', 'caching', 'distillation']
  }
];

export const getFeaturedArticles = (): NewArticle[] => {
  return newArticles2025.filter(article => article.featured);
};

export const getArticlesByCategory = (category: string): NewArticle[] => {
  return newArticles2025.filter(article => article.category === category);
};