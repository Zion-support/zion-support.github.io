export interface EnhancedPromotionalBanner {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  variant: 'success' | 'warning' | 'info' | 'error';
  icon?: string;
  featured: boolean;
  priority: number;
  startDate: string;
  endDate?: string;
}

export const enhancedPromotionalBanners: EnhancedPromotionalBanner[] = [
  {
    id: 'ai-ethics-operational-blueprint-2026',
    title: '⚖️ AI Ethics Operational Blueprint 2026',
    description: 'Bias tests, fairness SLAs, and audit trails teams adopt. Ship fast, stay compliant.',
    ctaText: 'Read the blueprint',
    ctaLink: '/blog/ai-ethics-operational-blueprint-2026',
    variant: 'info',
    icon: '⚖️',
    featured: true,
    priority: 1,
    startDate: '2025-09-30',
  },
  {
    id: 'edge-rag-blueprint-2026',
    title: '🛰️ Edge RAG Blueprint 2026 — <100ms Private Answers',
    description: 'Freshness TTLs, hybrid retrieval, and on-device caches for trustworthy answers.',
    ctaText: 'Explore Edge RAG',
    ctaLink: '/blog/edge-rag-blueprint-2026',
    variant: 'success',
    icon: '🛰️',
    featured: true,
    priority: 2,
    startDate: '2025-09-30',
  },
  {
    id: 'platform-roi-scorecards-2026',
    title: '📈 Platform ROI Scorecards 2026',
    description: 'Connect golden paths to adoption, SLOs, and revenue with actionable scorecards.',
    ctaText: 'See the guide',
    ctaLink: '/blog/platform-roi-scorecards-2026',
    variant: 'info',
    icon: '📈',
    featured: true,
    priority: 3,
    startDate: '2025-09-30',
  },
  {
    id: 'multimodal-ai-launch',
    title: '🎭 Multimodal AI Revolution - Just Released!',
    description: 'Master unified vision-language-audio AI achieving 98% accuracy. Transform your applications with cutting-edge multimodal capabilities.',
    ctaText: 'Explore Multimodal AI',
    ctaLink: '/blog/multimodal-ai-revolution-2025',
    variant: 'success',
    icon: '🎭',
    featured: true,
    priority: 1,
    startDate: '2025-10-15',
  },
  {
    id: 'blockchain-ai-integration',
    title: '⛓️ Blockchain-AI Integration Now Available',
    description: 'Combine blockchain immutability with AI intelligence for trustless, verifiable systems. Decentralized AI governance at scale.',
    ctaText: 'Learn About Blockchain-AI',
    ctaLink: '/blog/blockchain-ai-integration-2025',
    variant: 'info',
    icon: '⛓️',
    featured: true,
    priority: 2,
    startDate: '2025-10-15',
  },
  {
    id: 'green-ai-sustainability',
    title: '🌱 Green AI: 90% Carbon Reduction Achieved',
    description: 'Build sustainable AI systems with carbon-neutral ML at scale. Join the environmental revolution in AI.',
    ctaText: 'Discover Green AI',
    ctaLink: '/blog/green-ai-sustainability-2025',
    variant: 'success',
    icon: '🌱',
    featured: true,
    priority: 3,
    startDate: '2025-10-15',
  },
  {
    id: 'ai-predictive-maintenance',
    title: '⚙️ AI Predictive Maintenance - 85% Downtime Reduction',
    description: 'New service: Predict equipment failures with 98% accuracy. Reduce costs by 40% and eliminate unplanned downtime.',
    ctaText: 'Get Started',
    ctaLink: '/services/ai-predictive-maintenance',
    variant: 'warning',
    icon: '⚙️',
    featured: true,
    priority: 4,
    startDate: '2025-10-15',
  },
  {
    id: 'ai-talent-acquisition',
    title: '👥 AI Talent Acquisition - 10x Faster Hiring',
    description: 'Revolutionary recruiting with AI matching candidates 10x faster with 95% accuracy. Transform your HR operations.',
    ctaText: 'Explore Solution',
    ctaLink: '/services/ai-talent-acquisition',
    variant: 'info',
    icon: '👥',
    featured: true,
    priority: 5,
    startDate: '2025-10-15',
  }
  ,
  {
    id: 'oct-30-new-content-drop',
    title: '🚀 New Content Drop: Platform ROI, Supply Chain v2, Edge Experiments',
    description: 'Three fresh deep-dives: value realization, signed attestations, and sub‑100ms privacy‑first experiments.',
    ctaText: 'Read the latest',
    ctaLink: '/blog',
    variant: 'success',
    icon: '🚀',
    featured: true,
    priority: 0,
    startDate: '2025-10-30'
  }
];

// Sept 30, 2025 – Fresh homepage banner promoting the new content
enhancedPromotionalBanners.push({
  id: 'sept30-fresh-content-2025',
  title: '🚀 Fresh Drop: Governance Guardrails, Edge Inference, Agent Observability',
  description: 'Three new deep-dives just landed. Ship fast with policy checks, deliver <100ms at the edge, and get live traces for agents.',
  ctaText: 'Read the latest',
  ctaLink: '/blog',
  variant: 'success',
  icon: '🚀',
  featured: true,
  priority: 0,
  startDate: '2025-09-30'
});

// Sept 30, 2025 – Promote three brand-new articles (2027 theme)
enhancedPromotionalBanners.push({
  id: 'sept30-2025-new-2027-trio',
  title: '🚀 New: GenAI Scorecards, Edge Private Analytics, AI Sustainability',
  description: 'Reliability and cost KPIs, zero‑PII insights at <100ms, and green AI routing.',
  ctaText: 'Read the latest',
  ctaLink: '/blog',
  variant: 'success',
  icon: '🚀',
  featured: true,
  priority: 0,
  startDate: '2025-09-30'
});

// Sept 30, 2025 – Additional banner to advertise the latest content
enhancedPromotionalBanners.push({
  id: 'sept30-additional-fresh-content-2025',
  title: '🔥 New Today: Real‑Time Decisions, Privacy‑First Insights, Agent Safety',
  description: 'Explore sub‑ms decision engines, PII‑safe analytics, and battle‑tested agent safety checklists.',
  ctaText: 'Explore new posts',
  ctaLink: '/blog',
  variant: 'success',
  icon: '✨',
  featured: true,
  priority: 1,
  startDate: '2025-09-30'
});

// Jan 2026 – Promote newly added articles site-wide
enhancedPromotionalBanners.push({
  id: 'jan-2026-new-content',
  title: '🚀 New: Risk Budgets, Edge Consent Mode, GenAI Quality Tiers',
  description: 'Ship faster and safer: budgets + KPI canaries, private analytics without PII, and predictable GenAI costs.',
  ctaText: 'Read the latest',
  ctaLink: '/blog',
  variant: 'success',
  icon: '🚀',
  featured: true,
  priority: 0,
  startDate: '2026-01-05'
});

// Mar 2026 – Promote three brand-new articles site‑wide
enhancedPromotionalBanners.push({
  id: 'mar-2026-new-content',
  title: '✨ New: Runtime Scorecards v2, Edge Experiments v2, GenAI Tiers v3',
  description: 'Live KPIs + budgets + rollback, compliant <100ms experiments, and predictable GenAI UX under budget.',
  ctaText: 'Explore the new posts',
  ctaLink: '/blog',
  variant: 'success',
  icon: '✨',
  featured: true,
  priority: 0,
  startDate: '2026-03-25'
});

export const getActiveEnhancedBanners = (): EnhancedPromotionalBanner[] => {
  const now = new Date();
  return enhancedPromotionalBanners
    .filter(banner => {
      const startDate = new Date(banner.startDate);
      const endDate = banner.endDate ? new Date(banner.endDate) : null;
      return startDate <= now && (!endDate || endDate >= now);
    })
    .sort((a, b) => a.priority - b.priority);
};

export const getFeaturedBanners = (): EnhancedPromotionalBanner[] => {
  return getActiveEnhancedBanners().filter(banner => banner.featured);
};

// Sept 30, 2025 – New banners to advertise fresh content
enhancedPromotionalBanners.push({
  id: 'sept30-2025-just-added-trio',
  title: '✨ Just Added: Real‑Time Engines, Federated Learning, FinAI 2027',
  description: 'Explore sub‑ms decision engines, private federated learning, and high‑accuracy financial AI.',
  ctaText: 'Read the latest',
  ctaLink: '/blog',
  variant: 'success',
  icon: '✨',
  featured: true,
  priority: 0,
  startDate: '2025-09-30'
});

enhancedPromotionalBanners.push({
  id: 'sept30-2025-fresh-trio-q4',
  title: '🚀 New: Operational Scorecards, Consentless Metrics, Budget‑Aware Routing',
  description: 'Three fresh deep‑dives: SLIs to KPIs, zero‑PII analytics, and predictable GenAI cost with stable UX.',
  ctaText: 'Read the latest',
  ctaLink: '/blog',
  variant: 'success',
  icon: '🚀',
  featured: true,
  priority: 0,
  startDate: '2025-09-30'
});

enhancedPromotionalBanners.push({
  id: 'sept30-autonomy-blueprint-2026',
  title: '🧭 Enterprise Autonomy Blueprint 2026 — New',
  description: 'From pilots to governed production. Budgets, traces, and instant rollback.',
  ctaText: 'Read the blueprint',
  ctaLink: '/blog/ai-enterprise-autonomy-blueprint-2026',
  variant: 'success',
  icon: '🧭',
  featured: true,
  priority: 1,
  startDate: '2025-09-30'
});

enhancedPromotionalBanners.push({
  id: 'sept30-edge-trustless-analytics-2026',
  title: '🔐 Edge Trustless Analytics — Verifiable, PII‑Safe',
  description: 'Scoped IDs, on‑device aggregation, and signed attestations for insights without PII.',
  ctaText: 'Explore the guide',
  ctaLink: '/blog/edge-trustless-analytics-2026',
  variant: 'info',
  icon: '🔐',
  featured: true,
  priority: 2,
  startDate: '2025-09-30'
});

// Apr 2026 – Promote three brand-new posts site-wide
enhancedPromotionalBanners.push({
  id: 'apr-2026-new-content-trio',
  title: '🚀 New: AI SLA Scorecards, Edge Private Insights v2, Runbooks v2',
  description: 'SLIs to KPIs + zero‑PII analytics + safe agent releases with one‑click recovery.',
  ctaText: 'Read the latest',
  ctaLink: '/blog',
  variant: 'success',
  icon: '🚀',
  featured: true,
  priority: 0,
  startDate: '2026-04-01'
});

enhancedPromotionalBanners.push({
  id: 'apr-2026-ai-sla-scorecards',
  title: '📊 AI SLA Scorecards 2026 Q1 — New',
  description: 'SLIs wired to KPIs with budgets and instant rollback for safe velocity.',
  ctaText: 'Read article',
  ctaLink: '/blog/ai-sla-scorecards-2026-q1',
  variant: 'info',
  icon: '📊',
  featured: true,
  priority: 1,
  startDate: '2026-04-01'
});

enhancedPromotionalBanners.push({
  id: 'apr-2026-edge-private-insights-v2',
  title: '🔐 Edge Private Insights v2 (2026)',
  description: 'Scoped IDs, on‑device aggregation, DP noise — <100ms insights without PII.',
  ctaText: 'Explore',
  ctaLink: '/blog/edge-private-insights-v2-2026',
  variant: 'success',
  icon: '🔐',
  featured: true,
  priority: 2,
  startDate: '2026-04-01'
});

enhancedPromotionalBanners.push({
  id: 'apr-2026-agent-runbooks-v2',
  title: '🧭 Agent Release Runbooks v2 (2026)',
  description: 'Budgets, KPI canaries, approvals, and one‑click rollback for safe autonomy.',
  ctaText: 'See templates',
  ctaLink: '/blog/agent-release-runbooks-v2-2026',
  variant: 'warning',
  icon: '🧭',
  featured: true,
  priority: 3,
  startDate: '2026-04-01'
});