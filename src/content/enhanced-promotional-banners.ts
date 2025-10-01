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
    id: 'oct-01-quantum-mesh-edge-2025',
    title: '🌟 JUST RELEASED: Quantum Neural Networks, Autonomous AI Mesh, <50ms Edge GenAI',
    description: '3 revolutionary articles just dropped! 500x faster training, self-organizing intelligence, and ultra-low latency at global scale. The future of enterprise AI is here.',
    ctaText: 'Explore the Breakthroughs',
    ctaLink: '/blog',
    variant: 'success',
    icon: '🌟',
    featured: true,
    priority: 0,
    startDate: '2025-10-01',
  },
  {
    id: 'quantum-neural-networks-oct-2025',
    title: '⚡ NEW: Quantum Neural Networks — 500x Faster AI Training',
    description: 'Breakthrough quantum-classical hybrid systems solving previously intractable problems. Train enterprise models in hours, not weeks.',
    ctaText: 'Discover Quantum AI',
    ctaLink: '/blog/quantum-neural-networks-enterprise-2025',
    variant: 'success',
    icon: '⚡',
    featured: true,
    priority: 1,
    startDate: '2025-10-01',
  },
  {
    id: 'autonomous-mesh-oct-2025',
    title: '🔮 NEW: Autonomous AI Mesh — Self-Organizing Intelligence',
    description: 'Revolutionary mesh architecture that self-coordinates and self-heals across global infrastructure. Zero manual intervention required.',
    ctaText: 'Explore AI Mesh',
    ctaLink: '/blog/autonomous-ai-mesh-architecture-2026',
    variant: 'info',
    icon: '🔮',
    featured: true,
    priority: 2,
    startDate: '2025-10-01',
  },
  {
    id: 'edge-genai-optimization-oct-2025',
    title: '⚡ NEW: <50ms GenAI at Global Scale',
    description: 'Ultra-low latency GenAI deployment with intelligent edge caching and adaptive routing. Instant user experiences worldwide.',
    ctaText: 'See Edge AI in Action',
    ctaLink: '/blog/real-time-genai-edge-optimization-2025',
    variant: 'success',
    icon: '⚡',
    featured: true,
    priority: 3,
    startDate: '2025-10-01',
  },
  {
    id: 'oct-breakthrough-2025',
    title: '🚀 BREAKTHROUGH: Neuromorphic AI, Sovereign Data Centers, Vector-First Databases',
    description: '3 game-changing articles just dropped! 1000x energy efficiency, national AI independence, and 100x faster queries. Transform your enterprise AI infrastructure today.',
    ctaText: 'Explore the Revolution',
    ctaLink: '/blog',
    variant: 'success',
    icon: '🚀',
    featured: true,
    priority: 4,
    startDate: '2025-10-01',
  },
  {
    id: 'neuromorphic-ai-chips-oct-2025',
    title: '⚡ NEW: Neuromorphic AI Chips — 1000x Energy Efficiency',
    description: 'Brain-inspired computing delivering sub-millisecond latency with 99% less power. The future of enterprise AI hardware is here.',
    ctaText: 'Discover Neuromorphic AI',
    ctaLink: '/blog/ai-neuromorphic-chips-2025',
    variant: 'success',
    icon: '⚡',
    featured: true,
    priority: 1,
    startDate: '2025-10-01',
  },
  {
    id: 'sovereign-ai-centers-oct-2025',
    title: '🛡️ NEW: Sovereign AI Data Centers — National AI Independence',
    description: '$100B+ investment reshaping global AI. Build domestically controlled infrastructure ensuring data sovereignty and compliance.',
    ctaText: 'Build Sovereign AI',
    ctaLink: '/blog/sovereign-ai-data-centers-2025',
    variant: 'info',
    icon: '🛡️',
    featured: true,
    priority: 2,
    startDate: '2025-10-01',
  },
  {
    id: 'ai-native-databases-oct-2025',
    title: '💾 NEW: AI-Native Databases — 100x Faster Queries',
    description: 'Vector-first architecture with semantic search and sub-10ms latency at billion-vector scale. Revolutionize your AI applications.',
    ctaText: 'Upgrade Your Database',
    ctaLink: '/blog/ai-native-databases-2025',
    variant: 'info',
    icon: '💾',
    featured: true,
    priority: 3,
    startDate: '2025-10-01',
  },
  {
    id: 'ai-self-healing-infrastructure-oct-2025',
    title: '🔄 NEW: AI Self-Healing Infrastructure — 99.99% Uptime Guaranteed',
    description: 'Autonomous infrastructure detecting and fixing issues in real-time. 95% MTTR reduction, zero human intervention.',
    ctaText: 'Explore Self-Healing AI',
    ctaLink: '/blog/ai-self-healing-infrastructure-2025',
    variant: 'success',
    icon: '🔄',
    featured: true,
    priority: 4,
    startDate: '2025-10-01',
  },
  {
    id: 'generative-ai-code-assistants-oct-2025',
    title: '💻 NEW: AI Code Assistants — 10x Developer Productivity',
    description: 'Next-gen AI pair programming that writes production-ready code. Ship 5x faster with 40% fewer bugs.',
    ctaText: 'Boost Your Dev Team',
    ctaLink: '/blog/generative-ai-code-assistants-2025',
    variant: 'info',
    icon: '💻',
    featured: true,
    priority: 2,
    startDate: '2025-10-01',
  },
  {
    id: 'edge-ai-privacy-analytics-oct-2025',
    title: '🔐 NEW: Privacy-Preserving Analytics — 95%+ Accuracy, Zero PII',
    description: 'GDPR/CCPA compliant analytics by design. Extract insights without collecting personal data.',
    ctaText: 'Learn Privacy-First AI',
    ctaLink: '/blog/edge-ai-privacy-preserving-analytics-2025',
    variant: 'success',
    icon: '🔐',
    featured: true,
    priority: 3,
    startDate: '2025-10-01',
  },
  {
    id: 'ai-supply-chain-optimization-oct-2025',
    title: '📦 NEW: AI Supply Chain Optimization — 35% Cost Savings',
    description: 'Transform operations with intelligent demand forecasting and logistics automation. 45% fulfillment boost.',
    ctaText: 'Optimize Your Supply Chain',
    ctaLink: '/blog/ai-driven-supply-chain-optimization-2025',
    variant: 'info',
    icon: '📦',
    featured: true,
    priority: 4,
    startDate: '2025-10-01',
  },
  {
    id: 'ai-ethics-operational-blueprint-2026',
    title: '⚖️ AI Ethics Operational Blueprint 2026',
    description: 'Bias tests, fairness SLAs, and audit trails teams adopt. Ship fast, stay compliant.',
    ctaText: 'Read the blueprint',
    ctaLink: '/blog/ai-ethics-operational-blueprint-2026',
    variant: 'info',
    icon: '⚖️',
    featured: true,
    priority: 5,
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

// Sept 30, 2025 – New homepage promo for latest content set
enhancedPromotionalBanners.push({
  id: 'sept30-autonomous-euai-edge-2025',
  title: '🔥 New: Autonomous Infra, EU AI Act Playbook, Edge RAG Cold‑Starts',
  description: 'Zero‑touch ops with budgets + live canaries, practical EU AI Act guardrails, and <100ms private answers with warm pools.',
  ctaText: 'Explore the new content',
  ctaLink: '/blog',
  variant: 'success',
  icon: '✨',
  featured: true,
  priority: 0,
  startDate: '2025-09-30'
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