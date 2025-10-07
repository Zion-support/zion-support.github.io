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
    id: '99',
    title: 'Governed Agentic Automation: Safe Tools, Fast Outcomes',
    slug: 'governed-agentic-automation-2025-10-03',
    excerpt: 'Design agent toolchains with budgets, approvals, and rollback to move 10x faster without incidents.',
    content: 'Ship agent automations your SRE and compliance teams endorse: signed tools with scopes and quotas, action budgets and approvals, live traces with KPI-linked SLIs, and rollback hooks. Policy templates and dashboards included.',
    featuredImage: '/images/blog/governed-agentic-automation.jpg',
    category: 'AI',
    tags: ['Agents', 'Governance', 'Guardrails', 'Rollback'],
    author: 'Zion Tech Team',
    publishedAt: '2025-10-03',
    readTime: 8,
  },
  {
    id: '98',
    title: 'Enterprise RAG Blueprint v3: 45% Quality ↑, 62% Cost ↓',
    slug: 'enterprise-rag-blueprint-v3-2025-10-03',
    excerpt: 'Retrieval budgets, freshness windows, and cache tiers that raise answer quality while cutting spend.',
    content: 'A pragmatic RAG playbook: strict source governance, retrieval budgets and freshness windows, and tiered caches across features/chunks/answers. Eval-gated rollouts with kill switches. Includes reference architectures and KPI scorecards.',
    featuredImage: '/images/blog/enterprise-rag-blueprint-v3.jpg',
    category: 'RAG',
    tags: ['RAG', 'Retrieval', 'Caching', 'Quality', 'Cost'],
    author: 'Zion Tech Group Knowledge Systems',
    publishedAt: '2025-10-03',
    readTime: 9,
  },
  {
    id: '97',
    title: 'Cloud Cost Optimization v6: Quality Tiers, Coalesce, Distill',
    slug: 'genai-cost-optimization-v6-2025-10-03',
    excerpt: 'Cut inference spend 60–85% with tiered routing, request coalescing, and selective distillation.',
    content: 'Control GenAI costs without UX regressions: quality-tier routers, request coalescing, semantic caches, and selective distillation for hot paths. Includes rollout rituals, SLO templates, and dashboards used by platform teams.',
    featuredImage: '/images/blog/genai-cost-optimization-v6.jpg',
    category: 'Cloud',
    tags: ['FinOps', 'LLM', 'Caching', 'Optimization'],
    author: 'Zion Tech Team',
    publishedAt: '2025-10-03',
    readTime: 9,
  },
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
    id: '31',
    title: 'AI Platform Reliability Scorecards 2027: SLIs That Drive Outcomes',
    slug: 'ai-2025-oct-03-platform-reliability-scorecards-2027',
    excerpt: 'Design scorecards engineers adopt—SLIs tied to KPIs, policy tests, canaries, and rollback.',
    content: 'A practical system for platform reliability: pick leading indicator SLIs mapped to KPIs, wire policy tests in CI, run online canaries, and make changes reversible by default with one-click rollback. Includes dashboards and weekly review rituals.',
    featuredImage: '/images/blog/platform-reliability-scorecards-2027.jpg',
    category: 'Platform',
    tags: ['Scorecards', 'SLIs', 'Budgets', 'Rollback'],
    author: 'Zion Tech Team',
    publishedAt: '2025-10-03',
    readTime: 8,
  },
  {
    id: '32',
    title: 'Edge Experiments v4 (2026): Zero-PII A/B Under 100ms',
    slug: 'edge-2026-oct-03-consentless-experiments-v4',
    excerpt: 'Scoped IDs, on-device aggregation, and DP noise for compliant global experiments at <100ms.',
    content: 'Blueprint for privacy-first A/B: signed configs, cacheable variants at the edge, scoped rotating IDs, and DP aggregation. Canary scorecards + instant rollback keep teams fast and safe.',
    featuredImage: '/images/blog/edge-experiments-v4-2026.jpg',
    category: 'Experimentation',
    tags: ['Edge', 'A/B', 'Privacy', 'DP'],
    author: 'Zion Tech Team',
    publishedAt: '2025-10-03',
    readTime: 7,
  },
  {
    id: '33',
    title: 'GenAI Cost Controllers v4 (2027): Quality Tiers + Caches at Scale',
    slug: 'genai-2027-oct-03-cost-controllers-v4',
    excerpt: 'Stabilize UX under budget with tiered routing, semantic caches, and evaluator-backed policies.',
    content: 'Cut spend 40–70% without regressions: tiered model routing by SLA, prompt/embedding/retrieval caches with freshness windows, and online evals as deploy gates. Rollback-first operations included.',
    featuredImage: '/images/blog/genai-cost-controllers-v4-2027.jpg',
    category: 'GenAI',
    tags: ['Cost', 'Quality Tiers', 'Caching', 'Evals'],
    author: 'Zion Tech Team',
    publishedAt: '2025-10-03',
    readTime: 9,
  },
  {
    id: '23',
    title: 'Autonomous Cost Control: Real-Time FinOps with AI Guardrails',
    slug: 'autonomous-cost-control-real-time-finops-2025',
    excerpt: 'Cut cloud and LLM spend by 35–60% with policy-driven budgets, adaptive caching, and safe-ops automations.',
    content: 'Enterprises are moving from dashboards to decisions. This guide shows how to implement real-time FinOps using AI guardrails: adaptive request shaping, semantic and workflow caches, tiered model routing, and budget enforcement that never blocks business-critical paths. Includes architectural diagrams, policy examples, and rollout playbooks proven to reduce spend 35–60% while improving reliability.',
    featuredImage: '/images/blog/autonomous-cost-control.jpg',
    category: 'FinOps',
    tags: ['FinOps', 'AI', 'Cost Control', 'Automation'],
    author: 'Zion Tech Team',
    publishedAt: '2025-10-03',
    readTime: 12,
  },
];