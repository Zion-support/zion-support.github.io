export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  readTime?: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'ai-2027-operational-trust-blueprint',
    title: 'AI 2027: Operational Trust Blueprint',
    description: 'SLIs wired to KPIs with budgets, canaries, and instant rollback.',
    category: 'AI Strategy',
    publishedAt: '2027-02-07',
    featured: true,
    readTime: '8 min read',
  },
  {
    slug: 'edge-2026-private-feature-flags',
    title: 'Edge 2026: Private Feature Flags',
    description: 'Signed configs, scoped IDs, and on-device metrics for zero-PII rollouts.',
    category: 'Architecture',
    publishedAt: '2027-02-06',
    featured: true,
    readTime: '7 min read',
  },
  {
    slug: 'genai-quality-tiers-v2-2026',
    title: 'GenAI Quality Tiers v2 (2026)',
    description: 'Predictable cost and stable UX using quality tiers + caches.',
    category: 'GenAI',
    publishedAt: '2027-02-05',
    featured: true,
    readTime: '8 min read',
  },
  {
    slug: 'ai-2028-autonomous-enterprise-revolution',
    title: 'AI 2028: Autonomous Enterprise Revolution',
    description: 'From reactive ops to self-optimizing enterprises: budgets, guardrails, and KPI-linked autonomy that scales safely.',
    category: 'Enterprise AI',
    publishedAt: '2027-02-06',
    featured: true,
    readTime: '12 min read',
  },
  {
    slug: 'ai-2027-quantum-enhanced-machine-learning',
    title: 'Quantum-Enhanced Machine Learning 2027: Secure, Scalable, ROI-Proven',
    description: 'Next-generation quantum machine learning delivering 340% ROI with enterprise-grade security and scalability.',
    category: 'Quantum AI',
    publishedAt: '2027-02-04',
    featured: true,
    readTime: '15 min read',
  },
  {
    slug: 'ai-2027-multimodal-enterprise-platforms',
    title: 'AI 2027: Multimodal Enterprise Platforms',
    description: 'Unified vision, language, and action models delivering 280% productivity gains across enterprise workflows.',
    category: 'Multimodal AI',
    publishedAt: '2027-02-03',
    featured: true,
    readTime: '10 min read',
  },
  {
    slug: 'ai-2027-autonomous-devops-revolution',
    title: 'AI 2027: Autonomous DevOps Revolution',
    description: 'Self-healing infrastructure with 99.9% uptime and 85% cost reduction through AI-powered operations.',
    category: 'DevOps',
    publishedAt: '2027-02-02',
    featured: true,
    readTime: '9 min read',
  },
  {
    slug: 'ai-2027-edge-intelligence-breakthrough',
    title: 'AI 2027: Edge Intelligence Breakthrough',
    description: 'Sub-10ms inference at the edge with 95% accuracy and 70% power reduction for real-time applications.',
    category: 'Edge AI',
    publishedAt: '2027-02-01',
    featured: true,
    readTime: '11 min read',
  },
  {
    slug: 'ai-2027-conversational-enterprise-platforms',
    title: 'AI 2027: Conversational Enterprise Platforms',
    description: 'Natural language interfaces delivering 450% productivity gains and 98% user satisfaction across enterprise applications.',
    category: 'Conversational AI',
    publishedAt: '2027-01-31',
    featured: true,
    readTime: '13 min read',
  },
  {
    slug: 'ai-2027-predictive-analytics-revolution',
    title: 'AI 2027: Predictive Analytics Revolution',
    description: 'Real-time predictive analytics with 99.2% accuracy delivering $2.3B in value creation for Fortune 500 companies.',
    category: 'Analytics',
    publishedAt: '2027-01-30',
    featured: true,
    readTime: '14 min read',
  },
];

export default posts;
