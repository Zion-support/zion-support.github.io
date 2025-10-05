export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: number;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Governed, Agentic, Automation: Safe, Tools, Fast, Outcomes',
    slug: 'governed-agentic-automation-2025-10-03',
    excerpt: 'Design agent toolchains with budgets, approvals, and rollback to move 10x faster without incidents.',
    content: 'Ship agent automations your SRE and compliance teams endorse: signed tools with scopes and quotas, action budgets and approvals, live traces with KPI-linked SLIs and rollback hooks. Policy templates and dashboards included.',
    featuredImage: '/images/blog/governed-agentic-automation.jpg',
    category: 'AI',
    tags: ['Agents', 'Governance', 'Guardrails', 'Rollback'],
    author: 'Zion Tech Team',
    publishedAt: '2025-10-03',
    readTime: 5
  },
  {
    id: '2',
    title: 'Advanced AI Solutions for Enterprise',
    slug: 'advanced-ai-solutions-enterprise',
    excerpt: 'Discover how our AI solutions can transform your business operations.',
    content: 'Our comprehensive AI solutions help enterprises automate processes, improve efficiency, and drive innovation.',
    featuredImage: '/images/blog/ai-solutions.jpg',
    category: 'AI',
    tags: ['Enterprise', 'Automation', 'Innovation'],
    author: 'Zion Tech Team',
    publishedAt: '2025-10-02',
    readTime: 4
  },
  {
    id: '3',
    title: 'The Future of IT Infrastructure',
    slug: 'future-it-infrastructure',
    excerpt: 'Exploring the latest trends in IT infrastructure and cloud computing.',
    content: 'Modern IT infrastructure is evolving rapidly with cloud-native technologies, microservices, and edge computing.',
    featuredImage: '/images/blog/it-infrastructure.jpg',
    category: 'Infrastructure',
    tags: ['Cloud', 'Microservices', 'Edge Computing'],
    author: 'Zion Tech Team',
    publishedAt: '2025-10-01',
    readTime: 6
  }
];