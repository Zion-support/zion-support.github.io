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
    title: 'Welcome to Our Blog',
    slug: 'welcome-to-our-blog',
    excerpt: 'This is our first blog post about our services and technology.',
    content: 'This is the full content of our first blog post...',
    featuredImage: '/images/blog/welcome.jpg',
    category: 'General',
    tags: ['welcome', 'introduction', 'technology'],
    author: 'Zion Tech Team',
    publishedAt: '2024-01-01',
    readTime: 5,
  },
  {
    id: '2',
    title: 'AI RFP Response Copilot: Win More, Write Less',
    slug: 'ai-rfp-response-copilot',
    excerpt: 'How teams cut response time by 70% and boost win rates with our AI Copilot.',
    content:
      'Procurement cycles are getting faster, not slower. Our AI RFP Response Copilot plugs into your existing knowledge base, extracts differentiators, enforces compliance, and drafts tailored responses in minutes. With human-in-the-loop review, teams ship polished proposals 70% faster while improving accuracy. In this article, we break down the architecture, data privacy controls, and field-proven prompts that drive measurable win-rate gains.',
    featuredImage: '/images/blog/ai-rfp-copilot.jpg',
    category: 'AI',
    tags: ['AI', 'Sales', 'RFP', 'Copilot'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-10',
    readTime: 7,
  },
  {
    id: '3',
    title: 'SEO Change Monitor: Catch Drops Before Rankings Slip',
    slug: 'seo-change-monitor',
    excerpt: 'Automated on-page diffs, alerts, and impact analysis keep SEO stable through releases.',
    content:
      'Small changes ship daily—title tweaks, internal links, robots rules. Our SEO Change Monitor snapshots critical pages, detects risky diffs (above-the-fold copy, canonical tags, internal link structure), and alerts the moment issues appear. With built-in Lighthouse deltas and Search Console annotations, teams correlate releases to traffic changes and fix problems before rankings slide.',
    featuredImage: '/images/blog/seo-change-monitor.jpg',
    category: 'Marketing',
    tags: ['SEO', 'Monitoring', 'Growth'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-10',
    readTime: 6,
  },
];
