export interface BannerData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl?: string;
  category: string;
  priority: number;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
  tags?: string[];
}

export const bannerData: BannerData[] = [
  {
    id: 'january-2026-ai-breakthroughs',
    title: 'Revolutionary AI Breakthroughs - January 2026',
    subtitle: 'Ultra-Autonomous Enterprise + Quantum Consciousness BI',
    description: 'Experience the future of AI with our latest breakthroughs: Ultra-Autonomous Enterprise solutions, Quantum Consciousness Business Intelligence, and Neural-Quantum Fusion technology. Combined value of $36.8B in transformative capabilities.',
    ctaText: 'Explore Breakthroughs',
    ctaLink: '/ai-breakthroughs-2026',
    category: 'ai-breakthroughs',
    priority: 100,
    isActive: true,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    tags: ['AI', 'breakthroughs', 'quantum', 'enterprise']
  },
  {
    id: 'october-2025-llm-orchestration',
    title: 'Enterprise LLM Orchestration Revolution',
    subtitle: '$8.2B Value Creation, 1,840% ROI',
    description: 'Transform your enterprise with our LLM Orchestration platform. Proven results: 73% cost reduction, 520% productivity increase, Fortune 100 validated success.',
    ctaText: 'Learn More',
    ctaLink: '/llm-orchestration',
    category: 'enterprise-ai',
    priority: 95,
    isActive: true,
    startDate: '2025-10-01',
    endDate: '2026-03-31',
    tags: ['LLM', 'orchestration', 'enterprise', 'ROI']
  },
  {
    id: 'cognitive-orchestration',
    title: 'Cognitive Orchestration Platform',
    subtitle: '$84.7B Value Creation, 47,200% ROI',
    description: 'Revolutionary cognitive orchestration with 99.97% autonomous operations managing 287,000 AI agents across Fortune 50 enterprises.',
    ctaText: 'Discover Platform',
    ctaLink: '/cognitive-orchestration',
    category: 'cognitive-ai',
    priority: 90,
    isActive: true,
    startDate: '2025-10-01',
    endDate: '2026-06-30',
    tags: ['cognitive', 'orchestration', 'autonomous', 'AI agents']
  },
  {
    id: 'ai-ethics-governance',
    title: 'AI Ethics & Governance Framework',
    subtitle: '$8.7B Success Story, 18,400% ROI',
    description: 'Complete AI governance framework with 99.8% compliance rate, trusted by 240+ Fortune 500 companies for ethical AI implementation.',
    ctaText: 'View Framework',
    ctaLink: '/ai-ethics-governance',
    category: 'ai-governance',
    priority: 85,
    isActive: true,
    startDate: '2025-10-01',
    endDate: '2026-12-31',
    tags: ['AI ethics', 'governance', 'compliance', 'framework']
  },
  {
    id: 'real-time-intelligence-mesh',
    title: 'Real-Time Intelligence Mesh',
    subtitle: 'Sub-2ms Latency, 26,667% ROI',
    description: 'Next-generation intelligence mesh delivering real-time insights with sub-2ms latency, proven in Fortune 50 logistics operations.',
    ctaText: 'Experience Speed',
    ctaLink: '/intelligence-mesh',
    category: 'real-time-ai',
    priority: 80,
    isActive: true,
    startDate: '2025-10-01',
    endDate: '2026-09-30',
    tags: ['real-time', 'intelligence', 'mesh', 'latency']
  },
  {
    id: 'edge-ai-5g-revolution',
    title: 'Edge AI + 5G Revolution',
    subtitle: '$18.4B Automotive Success',
    description: 'Revolutionary Edge AI + 5G platform with <10ms latency, 2,400% ROI, powering 470,000+ AI devices in automotive industry.',
    ctaText: 'Join Revolution',
    ctaLink: '/edge-ai-5g',
    category: 'edge-computing',
    priority: 75,
    isActive: true,
    startDate: '2025-10-01',
    endDate: '2026-08-31',
    tags: ['edge AI', '5G', 'automotive', 'IoT']
  },
  {
    id: 'generative-ai-code-generation',
    title: 'Generative AI Code Generation',
    subtitle: '$47.3M Value Creation, 10.2x Productivity',
    description: 'Revolutionary code generation platform delivering 85% faster delivery times, trusted by 2,400+ developers worldwide.',
    ctaText: 'Start Coding',
    ctaLink: '/ai-code-generation',
    category: 'development-tools',
    priority: 70,
    isActive: true,
    startDate: '2025-10-01',
    endDate: '2026-07-31',
    tags: ['generative AI', 'code generation', 'development', 'productivity']
  },
  {
    id: 'quantum-edge-computing',
    title: 'Quantum-Enhanced Edge Computing',
    subtitle: '47,000+ Edge Devices, 99.99% Accuracy',
    description: 'Breakthrough quantum-enhanced edge computing with sub-10ms latency, 2,400% ROI, delivering unprecedented accuracy.',
    ctaText: 'Explore Quantum',
    ctaLink: '/quantum-edge',
    category: 'quantum-computing',
    priority: 65,
    isActive: true,
    startDate: '2025-10-01',
    endDate: '2026-10-31',
    tags: ['quantum', 'edge computing', 'accuracy', 'performance']
  }
];

export const getBannersByCategory = (category: string): BannerData[] => {
  return bannerData.filter(banner => banner.category === category);
};

export const getActiveBanners = (): BannerData[] => {
  const now = new Date();
  return bannerData.filter(banner => {
    if (!banner.isActive) return false;
    if (banner.startDate && new Date(banner.startDate) > now) return false;
    if (banner.endDate && new Date(banner.endDate) < now) return false;
    return true;
  }).sort((a, b) => b.priority - a.priority);
};

export const getBannerById = (id: string): BannerData | undefined => {
  return bannerData.find(banner => banner.id === id);
};