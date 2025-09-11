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
  {
    id: '4',
    title: 'LLM Guardrails: Production Patterns That Actually Work',
    slug: 'llm-guardrails-production-patterns',
    excerpt:
      'From prompt injection to hallucinations—see pragmatic guardrail patterns that keep LLM apps safe.',
    content:
      'Shipping LLM features safely means embracing layered defenses. In this post, we break down pragmatic guardrails: input validation and sanitization, retrieval augmentation with deterministic boundaries, constrained decoding, output format contracts, policy-based moderation, and continuous red-teaming. We cover engineering tradeoffs, real-world failure modes, and how to measure quality beyond simple accuracy.',
    featuredImage: '/images/blog/llm-guardrails.jpg',
    category: 'AI',
    tags: ['LLM', 'Safety', 'Production'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 8,
  },
  {
    id: '5',
    title: 'Cloud Cost Autopilot: 30% Savings Without Slowing Down',
    slug: 'cloud-cost-autopilot',
    excerpt:
      'Automate rightsizing, spot coverage, and waste cleanup with safe-ops guardrails for teams.',
    content:
      'Cost control should be continuous, not quarterly. We outline a reference implementation for Cloud Cost Autopilot that tags ownership, enforces budgets, and auto-remediates idle resources. With change windows, rollback policies, and SLO-aware policies, teams consistently cut 25–40% spend while improving reliability.',
    featuredImage: '/images/blog/cloud-cost-autopilot.jpg',
    category: 'Cloud',
    tags: ['FinOps', 'Automation', 'DevOps'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 6,
  },
  {
    id: '6',
    title: 'Proactive Security: Attack Paths, Not Just Vulnerabilities',
    slug: 'proactive-security-attack-paths',
    excerpt:
      'Move beyond CVE whack-a-mole with graph-based attack path analysis and auto-fixes.',
    content:
      'Point-in-time scans miss how real breaches happen—via chains. We demonstrate mapping identities, network edges, secrets, and CI permissions into a unified attack graph. Then we prioritize fixes that actually break paths to crown jewels, integrate with PR checks, and validate with continuous attack simulations.',
    featuredImage: '/images/blog/proactive-security.jpg',
    category: 'Security',
    tags: ['Security', 'Attack Graphs', 'Defense'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 7,
  },
];
