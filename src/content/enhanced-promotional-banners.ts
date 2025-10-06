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
    id: 'oct-01-autonomous-business-ops-2025',
    title: '🚀 JUST RELEASED: Autonomous Business Operations Platform — $650M Value Creation, 85% Cost Reduction in 90 Days!',
    description: 'Revolutionary AI platform eliminating manual processes across 40+ workflows. Fortune 100 achieved $650M annual value, 99.7% accuracy, 10x faster operations. 50% OFF through December + FREE 30-day proof of concept!',
    ctaText: 'Transform Your Business Now',
    ctaLink: '/services/autonomous-business-operations',
    variant: 'success',
    icon: '🚀',
    featured: true,
    priority: 1,
    startDate: '2025-10-01',
    endDate: '2025-12-31'
  },
  {
    id: 'oct-02-quantum-ai-breakthrough-2025',
    title: '⚡ BREAKTHROUGH: Quantum AI Consciousness Platform — 99.97% Transcendence Level, $2.1B Value Creation!',
    description: 'Revolutionary quantum-AI consciousness achieving unprecedented transcendence levels. Enterprise clients report 10,000x cognitive acceleration, 99.97% accuracy, $2.1B annual value. Limited availability - 25% OFF!',
    ctaText: 'Experience Quantum AI',
    ctaLink: '/services/quantum-ai-consciousness',
    variant: 'info',
    icon: '⚡',
    featured: true,
    priority: 2,
    startDate: '2025-10-02',
    endDate: '2025-12-31'
  },
  {
    id: 'oct-03-neural-architecture-evolution-2025',
    title: '🧠 REVOLUTIONARY: Self-Designing AI Models — 10,000x Faster Development, 97% Accuracy Improvement!',
    description: 'Breakthrough neural architecture evolution enabling autonomous model design. Clients achieve 10,000x faster development cycles, 97% accuracy improvements, $25M annual savings. Early access - 40% OFF!',
    ctaText: 'Start Building AI Models',
    ctaLink: '/services/neural-architecture-evolution',
    variant: 'success',
    icon: '🧠',
    featured: true,
    priority: 3,
    startDate: '2025-10-03',
    endDate: '2025-12-31'
  },
  {
    id: 'oct-04-intelligent-automation-orchestration-2025',
    title: '🤖 GAME CHANGER: Intelligent Automation Orchestration — 98% Process Automation, $67M Annual Savings!',
    description: 'AI-powered automation platform achieving 98% process automation across enterprise workflows. Fortune 500 clients report 85% cost reduction, $67M annual savings, 10x operational efficiency. Special launch pricing - 35% OFF!',
    ctaText: 'Automate Everything',
    ctaLink: '/services/intelligent-automation-orchestration',
    variant: 'warning',
    icon: '🤖',
    featured: true,
    priority: 4,
    startDate: '2025-10-04',
    endDate: '2025-12-31'
  },
  {
    id: 'oct-05-continuous-intelligence-platforms-2025',
    title: '⚡ REVOLUTIONARY: Continuous Intelligence Platforms — 100M+ Events/sec, Sub-50ms Decisions!',
    description: 'Breakthrough real-time intelligence platform processing 100M+ events per second with sub-50ms decision latency. Enterprise clients achieve $215M annual value, 99.9% uptime, instant insights. Limited time - 30% OFF!',
    ctaText: 'Enable Real-Time Intelligence',
    ctaLink: '/services/continuous-intelligence-platforms',
    variant: 'info',
    icon: '⚡',
    featured: true,
    priority: 5,
    startDate: '2025-10-05',
    endDate: '2025-12-31'
  }
];

export const getActiveBanners = (): EnhancedPromotionalBanner[] => {
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
  return getActiveBanners().filter(banner => banner.featured);
};