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