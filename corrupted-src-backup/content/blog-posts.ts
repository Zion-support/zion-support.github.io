export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-2025-oct-04-operational-ai-scorecards-v2',
    title: 'Operational AI Scorecards v2: Gate Risk, Ship Faster',
    description:
      'KPI-linked SLIs, online canaries, and rollback-first ops that raise velocity while reducing incidents.',
    content: `
# Operational AI Scorecards v2: Ship AI features weekly without surprises by wiring measurement to decisions.

## What You'll Implement
- KPI-linked SLIs that predict outcomes
- Online canaries as deploy gates
- Budget-aware routing with safe fallbacks
- One-click rollback with blast-radius checks

## Results
- Fewer regressions, faster iteration, clearer ownership
    `,
    author: 'Zion Tech Group Reliability Lab',
    date: '2025-10-04',
    category: 'AI Reliability',
    tags: ['Scorecards', 'SLIs', 'Canaries', 'Rollback'],
    featured: true,
    readTime: '7 min read',
    image: '/images/operational-ai-scorecards-v2.jpg',
  },
  {
    slug: 'ai-2025-oct-04-enterprise-rag-quality-budgets',
    title: 'Enterprise RAG Quality Budgets: Lift Correctness, Cut Spend',
    description:
      'Freshness windows, retrieval tiers, and semantic caches that raise answer quality while reducing cost.',
    content: `
# Enterprise RAG Quality Budgets: Production RAG needs governance and budgets.

## Core Patterns
- Domain schemas and strict source governance
- Freshness windows per intent
- Retrieval budgets with quality tiers
- Semantic caches for cost optimization
    `,
    author: 'Zion Tech Group Knowledge Systems',
    date: '2025-10-04',
    category: 'RAG Engineering',
    tags: ['RAG', 'Quality', 'Budgets', 'Caching'],
    featured: true,
    readTime: '8 min read',
    image: '/images/enterprise-rag-quality-budgets.jpg',
  },
  {
    slug: 'ai-2025-oct-04-enterprise-agents-in-production',
    title: 'Enterprise Agents in Production: Budgets, Approvals, and Rollback',
    description:
      'Practical patterns to run AI agents safely in prod with KPI-linked SLIs, action budgets, and instant rollback.',
    content: `
# Enterprise Agents in Production: Budgets, Approvals, and Rollback

This guide shows how to ship agentic systems that operate within explicit budgets and guardrails while driving measurable outcomes.

## Ship Safely
- Signed tools with scopes and quotas
- Budget-aware action routing with KPI-linked SLIs
- Canary routes and one-click rollback hooks

## Outcomes
- Incident rate stable as automation expands
- Faster delivery without runaway spend
- Clear accountability via weekly scorecards
    `,
    author: 'Zion Tech Group AI Operations',
    date: '2025-10-04',
    category: 'AI Operations',
    tags: ['Agents', 'Governance', 'Guardrails', 'Rollback'],
    featured: true,
    readTime: '8 min read',
    image: '/images/governed-agentic-automation.jpg',
  },
  {
    slug: 'genai-cost-optimization-v6-2025-10-03',
    title: 'GenAI Cost Optimization v6: Quality Tiers, Coalesce, Distill',
    description:
      'Cut inference spend 60–85% with tiered routing, request coalescing, and selective distillation.',
    content: `# GenAI Cost Optimization v6

Control GenAI costs without UX regressions: quality-tier routers, request coalescing, semantic caches, and selective distillation for hot paths. Includes rollout rituals, SLO templates, and dashboards used by platform teams.`,
    author: 'Zion Tech Group Platform Team',
    date: '2025-10-03',
    category: 'GenAI Engineering',
    tags: ['Cost', 'Caching', 'Distillation', 'Routing', 'SLO'],
    featured: true,
    readTime: '9 min read',
    image: '/images/genai-cost-optimization-v6.jpg',
  },
  {
    slug: 'ai-2025-oct-01-enterprise-ai-governance-blueprint',
    title:
      'Enterprise AI Governance 2025: Scorecards, Guardrails, and Zero-Regret Rollouts',
    description:
      'Practical enterprise playbook to ship AI safely: policy tests in CI, KPI-linked scorecards, kill switches, and budget-aware routing.',
    content: `
# Enterprise AI Governance 2025: Scorecards, Guardrails, and Zero-Regret Rollouts

Modern enterprises need shipping speed without surprise risk. This field guide shows how to wire governance into the product lifecycle so teams move faster with fewer incidents and lower costs.

## What You'll Ship
- Policy tests in CI that gate risky changes
- KPI-linked scorecards across reliability, latency, and cost
- Budget-aware routing and circuit breakers
- Canary playbooks with instant rollback hooks

## Outcomes
- 8–12x deployment velocity with lower change-failure rate
- 30–70% GenAI cost reduction via quality tiers and caches
    `,
    author: 'Zion Tech Group AI Governance',
    date: '2025-10-01',
    category: 'AI Governance',
    tags: ['Governance', 'Scorecards', 'Guardrails', 'Rollouts'],
    featured: true,
    readTime: '10 min read',
    image: '/images/enterprise-ai-governance-2025.jpg',
  },
];
