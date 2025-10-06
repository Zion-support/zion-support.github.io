export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  image?: string;
  slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'governed-agentic-automation',
    title: 'Governed Agentic Automation: Safe Tools, Fast Outcomes',
    excerpt:
      'Design agent toolchains with budgets, approvals, and rollback to move 10x faster without incidents.',
    content: `
# Governed Agentic Automation: Safe Tools, Fast Outcomes

Design agent toolchains with budgets, approvals, and rollback to move 10x faster without incidents.

## Key Features
- Budget-aware action routing
- Human-in-the-loop approvals
- Instant rollback capabilities
- KPI-linked SLIs
    `,
    author: 'Zion Tech Group',
    publishedAt: '2025-10-03',
    category: 'AI Operations',
    tags: ['Agents', 'Governance', 'Automation', 'Safety'],
    featured: true,
    readTime: '8 min read',
    image: '/images/governed-agentic-automation.jpg',
    slug: 'governed-agentic-automation',
  },
  {
    id: 'ai-cost-optimization-v6',
    title: 'GenAI Cost Optimization v6: Quality Tiers, Coalesce, Distill',
    excerpt:
      'Cut inference spend 60–85% with tiered routing, request coalescing, and selective distillation.',
    content: `
# GenAI Cost Optimization v6

Control GenAI costs without UX regressions through intelligent optimization strategies.

## Optimization Strategies
- Quality-tier routers with eval gates
- Request coalescing and semantic caches
- Selective distillation for hot paths
- Budget-aware fallbacks
    `,
    author: 'Zion Tech Group',
    publishedAt: '2025-10-03',
    category: 'GenAI Engineering',
    tags: ['Cost', 'Caching', 'Distillation', 'Routing'],
    featured: true,
    readTime: '9 min read',
    image: '/images/genai-cost-optimization-v6.jpg',
    slug: 'genai-cost-optimization-v6',
  },
];
