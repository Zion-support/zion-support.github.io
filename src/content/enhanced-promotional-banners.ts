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
    id: 'ai-autonomous-infrastructure',
    title: '🤖 AI Autonomous Infrastructure — Zero‑Touch Ops',
    description: 'Self‑healing, self‑optimizing, self‑scaling platform with policy‑tested rollouts.',
    ctaText: 'Read the blueprint',
    ctaLink: '/blog/ai-autonomous-infrastructure-2025',
    variant: 'success',
    icon: '🤖',
    featured: true,
    priority: 1,
    startDate: '2025-09-30',
  },
  {
    id: 'privacy-first-analytics',
    title: '🔒 Privacy‑First Analytics — Insights Without PII',
    description: 'Scoped IDs, DP noise, and edge telemetry. Ship analytics that respect privacy.',
    ctaText: 'Get the quickstart',
    ctaLink: '/blog/privacy-first-analytics-quickstart-2025',
    variant: 'info',
    icon: '🔒',
    featured: true,
    priority: 2,
    startDate: '2025-09-30',
  }
  ,
  {
    id: 'eu-ai-act-2026-playbook',
    title: '📜 EU AI Act Playbook 2026 — Move Fast, Stay Compliant',
    description: 'Model registries, audit trails, and KPI‑linked policy tests you can ship today.',
    ctaText: 'Read the playbook',
    ctaLink: '/blog/ai-governance-eu-ai-act-2026',
    variant: 'info',
    icon: '📜',
    featured: true,
    priority: 1,
    startDate: '2025-10-30',
  },
  {
    id: 'edge-rag-privacy-2026',
    title: '🛰️ Edge RAG — Private Answers in <100ms',
    description: 'Hybrid retrieval with signed configs and TTL windows. No PII, all insights.',
    ctaText: 'Explore Edge RAG',
    ctaLink: '/blog/edge-rag-privacy-preserving-2026',
    variant: 'success',
    icon: '🛰️',
    featured: true,
    priority: 2,
    startDate: '2025-10-30',
  },
  {
    id: 'agentic-control-planes-2026',
    title: '🧭 Agentic Control Planes 2026 — Budgets & Policies',
    description: 'Operate agent platforms with budgeted actions, policy gates, and instant recovery.',
    ctaText: 'Read the guide',
    ctaLink: '/blog/agentic-control-planes-2026',
    variant: 'info',
    icon: '🧭',
    featured: true,
    priority: 3,
    startDate: '2025-09-30',
  },
  {
    id: 'edge-eval-canaries-2026',
    title: '🚦 Edge Evals & Canaries — Quality at <100ms',
    description: 'KPI‑linked evals and live canaries that protect UX without latency tax.',
    ctaText: 'Explore the playbook',
    ctaLink: '/blog/edge-eval-canaries-2026',
    variant: 'success',
    icon: '🚦',
    featured: true,
    priority: 4,
    startDate: '2025-09-30',
  },
  {
    id: 'ai-value-stream-maps-2026',
    title: '📈 AI Value Stream Maps — Prove End‑to‑End ROI',
    description: 'Trace prompts, tools, and UX to outcomes with audit‑ready scorecards.',
    ctaText: 'See how',
    ctaLink: '/blog/ai-value-stream-maps-2026',
    variant: 'info',
    icon: '📈',
    featured: true,
    priority: 5,
    startDate: '2025-09-30',
  }
];

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