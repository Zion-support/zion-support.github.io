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
    id: '14',
    title: 'Agentic Workflows in the Enterprise: Reliable, Observable, Governed',
    slug: 'agentic-workflows-enterprise',
    excerpt:
      'Blueprint for agentic systems with reliability, observability, and governance at the core.',
    content:
      'Agentic systems can deliver end-to-end outcomes when grounded by strong contracts, evals, and clear governance. This article outlines a production blueprint with structured tools, policy-based approvals, and robust observability for safe autonomy.',
    featuredImage: '/images/blog/agentic-workflows.jpg',
    category: 'AI',
    tags: ['AI', 'Agents', 'Governance'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 6,
  },
  {
    id: '15',
    title: 'AI Risk Register 2025: Practical Controls and Runbooks',
    slug: 'ai-risk-register-2025',
    excerpt:
      'A pragmatic template for risks, owners, mitigations, and runbooks that scale.',
    content:
      'A living AI risk register ties risks to concrete mitigations and runbooks. We provide a field-tested template covering prompt injection, privacy, and cost controls, with guidance on owners and SLAs.',
    featuredImage: '/images/blog/ai-risk-register.jpg',
    category: 'AI',
    tags: ['AI', 'Governance', 'Risk'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 5,
  },
  {
    id: '16',
    title: 'Zero-Trust AI Integrations: Safely Connecting to Your Systems',
    slug: 'zero-trust-ai-integrations',
    excerpt:
      'Least privilege, short-lived creds, and policy approvals for safe integrations.',
    content:
      'As AI features integrate with production systems, zero-trust becomes essential. We cover token exchange, granular scopes, immutable audits, and egress monitoring to keep integrations safe.',
    featuredImage: '/images/blog/zero-trust-ai-integrations.jpg',
    category: 'Security',
    tags: ['Security', 'AI', 'Integrations'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 6,
  },
  {
    id: '11',
    title: 'GenAI in Production: SLAs, Costs, and Control in 2025',
    slug: 'genai-in-production-slas-costs-control-2025',
    excerpt:
      'What changes when GenAI moves from pilots to P&L-backed products: SLOs, guardrails, and cost controls that stick.',
    content:
      'Pilots tolerate variance—products cannot. We cover request shaping, caching tiers, eval-driven release gates, fallback orchestration, and budget enforcement. Learn how teams keep latency predictable, quality measurable, and costs within guardrails while shipping faster.',
    featuredImage: '/images/blog/genai-in-production.jpg',
    category: 'AI',
    tags: ['GenAI', 'SLOs', 'Cost Management'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 6,
  },
  {
    id: '12',
    title: 'Edge + AI: Personalization Without the Privacy Tradeoff',
    slug: 'edge-ai-privacy-personalization',
    excerpt:
      'Run models near users, keep data local, and still learn globally. A practical blueprint for privacy-preserving personalization.',
    content:
      'We outline a pattern that blends edge inference, federated analytics, and anonymous feedback loops. Covering feature stores at the edge, secure aggregation, and rollout safety, we show how to ship fast UX while respecting user privacy and regional data rules.',
    featuredImage: '/images/blog/edge-ai-privacy.jpg',
    category: 'Product',
    tags: ['Edge', 'Privacy', 'Personalization'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 5,
  },
  {
    id: '13',
    title: 'Shipping Safer: Incident-Ready CI/CD for High-Velocity Teams',
    slug: 'incident-ready-cicd',
    excerpt:
      'Blueprint your pipelines with baked-in rollback, auto-verification, and guarded releases so speed never sacrifices safety.',
    content:
      'High velocity doesn’t need high risk. We cover pre-prod traffic mirrors, automated canaries, error budgets as deploy gates, and “fast rollback first” muscle memory. Includes reference configs and dashboards that make incidents rare and short.',
    featuredImage: '/images/blog/incident-ready-cicd.jpg',
    category: 'Engineering',
    tags: ['DevOps', 'Reliability', 'CI/CD'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 6,
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
  {
    id: '7',
    title: 'RAG Done Right: From Toy Demos to Reliable Systems',
    slug: 'rag-done-right',
    excerpt:
      'Hard-earned patterns for building retrieval-augmented generation that stands up to production traffic.',
    content:
      'RAG systems fail for predictable reasons: poor chunking, weak retrieval, missing grounding, and no evaluation. We cover index design, hybrid search, citation enforcement, structured outputs, and continuous eval loops that keep responses accurate as content evolves.',
    featuredImage: '/images/blog/rag-done-right.jpg',
    category: 'AI',
    tags: ['RAG', 'LLM', 'Search'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 7,
  },
  {
    id: '8',
    title: 'From Dashboards to Decisions: Actionable Observability',
    slug: 'actionable-observability',
    excerpt:
      'Turn signals into safe, automated actions with SLO-aware guardrails and feedback loops.',
    content:
      'Most stacks stop at charts. We outline a playbook to tie alerts to runbooks, codify guardrails, and trigger safe remediations. With canaries, circuit breakers, and human-in-the-loop policies, teams cut MTTR while reducing alert fatigue.',
    featuredImage: '/images/blog/actionable-observability.jpg',
    category: 'Observability',
    tags: ['SRE', 'SLO', 'Automation'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 6,
  },
  {
    id: '9',
    title: 'Designing AI Products Users Actually Trust',
    slug: 'designing-trustworthy-ai-products',
    excerpt:
      'Explainability, controls, and fallbacks that boost adoption—not just accuracy scores.',
    content:
      'Trust is earned through predictable behavior and clear affordances. We cover UX patterns for AI: uncertainty displays, actionable citations, reversible changes, privacy-level controls, and escape hatches to human help. The result: higher retention and fewer surprises.',
    featuredImage: '/images/blog/trustworthy-ai-products.jpg',
    category: 'Product',
    tags: ['UX', 'AI', 'Product'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 5,
  },
  {
    id: '10',
    title: 'Serverless at Scale: Cost, Cold Starts, and Control',
    slug: 'serverless-at-scale',
    excerpt:
      'Practical strategies to keep latency predictable and costs sane as functions multiply.',
    content:
      'We dig into workload shaping, provisioned concurrency, connection pooling, and shared-nothing constraints. Learn when to shard, when to co-locate, and how to trace across ephemeral boundaries so incidents are debuggable.',
    featuredImage: '/images/blog/serverless-at-scale.jpg',
    category: 'Cloud',
    tags: ['Serverless', 'Architecture', 'Performance'],
    author: 'Zion Tech Team',
    publishedAt: '2025-09-11',
    readTime: 7,
  },
];
