export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  readTime: number;
  featured: boolean;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'AI Cost Optimization Breakthrough: Cut Spending by 90%',
    slug: 'ai-cost-optimization-breakthrough-2026',
    excerpt: 'Revolutionary AI cost optimization strategies delivering 90% cost reduction, $200M+ savings and 10x efficiency gains for Fortune 500 companies.',
    content: 'Full content here...',
    author: 'Zion Tech Group',
    publishedAt: '2026-01-30',
    updatedAt: '2026-01-30',
    tags: ['AI', 'Cost Optimization', 'Enterprise'],
    category: 'Cost Optimization',
    readTime: 22,
    featured: true,
    published: true
  }
];

export default blogPosts;