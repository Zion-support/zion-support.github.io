export interface PromotionalBanner {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  variant: 'info' | 'success' | 'warning' | 'premium' | 'launch' | 'special';
  featured: boolean;
  newBadge?: boolean;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
  animation?: string;
  priority: number;
  active: boolean;
  autoHide?: boolean;
  hideAfter?: number;
}

export const latestPromotionalBanners: PromotionalBanner[] = [
  {
    id: 'ai-autonomous-infrastructure-launch-2025',
    title: '🚀 NEW: AI Autonomous Infrastructure Platform',
    description: 'Self-healing, self-optimizing infrastructure that achieves 99.99% uptime with 85% cost reduction. Transform your operations with AI that never sleeps.',
    ctaText: 'Start Free Trial',
    ctaLink: '/services/ai-autonomous-infrastructure-platform',
    variant: 'launch',
    featured: true,
    newBadge: true,
    icon: '🤖',
    backgroundColor: 'bg-gradient-to-r from-green-600 to-emerald-600',
    textColor: 'text-white',
    animation: 'pulse',
    priority: 0,
    active: true,
    autoHide: false
  },
  {
    id: 'quantum-ai-breakthrough-2025',
    title: '⚛️ BREAKTHROUGH: Quantum-AI Hybrid Computing',
    description: '1000x faster processing power for solving previously impossible problems. Quantum computing meets AI for exponential breakthroughs.',
    ctaText: 'Schedule Demo',
    ctaLink: '/services/quantum-ai-hybrid-computing',
    variant: 'premium',
    featured: true,
    newBadge: true,
    icon: '⚛️',
    backgroundColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    textColor: 'text-white',
    animation: 'bounce',
    priority: 0,
    active: true,
    autoHide: true,
    hideAfter: 20
  },
  {
    id: 'fresh-content-jan-2025',
    title: '📚 FRESH CONTENT: Revolutionary AI Articles',
    description: 'Just released: AI Autonomous Incident Runbooks, Privacy-First Feature Flags, SLO Guardrails, and Supply Chain Optimization guides.',
    ctaText: 'Read Latest',
    ctaLink: '/blog',
    variant: 'info',
    featured: true,
    newBadge: true,
    icon: '📚',
    backgroundColor: 'bg-gradient-to-r from-blue-600 to-cyan-600',
    textColor: 'text-white',
    animation: 'fade-in',
    priority: 1,
    active: true,
    autoHide: true,
    hideAfter: 15
  },
  {
    id: 'success-stories-showcase-2025',
    title: '🏆 SUCCESS STORIES: Proven Results',
    description: 'TechCorp Global: 99.99% uptime. VisionTech: 85% diagnostic accuracy. RetailMax: 65% faster deliveries. See how we transform businesses.',
    ctaText: 'View Case Studies',
    ctaLink: '/case-studies',
    variant: 'success',
    featured: true,
    newBadge: false,
    icon: '🏆',
    backgroundColor: 'bg-gradient-to-r from-yellow-600 to-orange-600',
    textColor: 'text-white',
    animation: 'slide-in',
    priority: 1,
    active: true,
    autoHide: true,
    hideAfter: 18
  },
  {
    id: 'zero-trust-security-advanced-2025',
    title: '🛡️ ADVANCED: AI-Powered Zero Trust Security',
    description: '99.9% threat detection accuracy with AI-powered zero trust architecture. Continuous monitoring, automated response, complete protection.',
    ctaText: 'Security Audit',
    ctaLink: '/services/zero-trust-security-ai',
    variant: 'warning',
    featured: true,
    newBadge: true,
    icon: '🛡️',
    backgroundColor: 'bg-gradient-to-r from-red-600 to-rose-600',
    textColor: 'text-white',
    animation: 'pulse',
    priority: 2,
    active: true,
    autoHide: true,
    hideAfter: 16
  },
  {
    id: 'special-offer-jan-2025',
    title: '🎯 LIMITED TIME: 50% OFF AI Platform',
    description: 'Get 50% OFF AI Autonomous Infrastructure Platform for your first 3 months. Plus FREE AI Strategy Consultation. Valid until March 31, 2025.',
    ctaText: 'Claim Offer',
    ctaLink: '/services/ai-autonomous-infrastructure-platform#pricing',
    variant: 'special',
    featured: true,
    newBadge: false,
    icon: '🎯',
    backgroundColor: 'bg-gradient-to-r from-pink-600 to-rose-600',
    textColor: 'text-white',
    animation: 'pulse',
    priority: 2,
    active: true,
    autoHide: false
  },
  {
    id: 'multi-modal-ai-solutions-2025',
    title: '👁️ NEW: Multi-Modal AI Solutions',
    description: 'AI that sees, hears, and understands like humans. Combine computer vision, NLP, and audio processing for revolutionary user experiences.',
    ctaText: 'Explore Solutions',
    ctaLink: '/services/multi-modal-ai-solutions',
    variant: 'info',
    featured: false,
    newBadge: true,
    icon: '👁️',
    backgroundColor: 'bg-gradient-to-r from-teal-600 to-green-600',
    textColor: 'text-white',
    animation: 'fade-in',
    priority: 3,
    active: true,
    autoHide: true,
    hideAfter: 14
  },
  {
    id: 'ai-governance-framework-2025',
    title: '📋 NEW: AI Governance Scorecards',
    description: 'Automated AI governance with scorecards, policy management, and compliance monitoring. Ensure ethical, compliant AI systems.',
    ctaText: 'Learn More',
    ctaLink: '/services/ai-governance-scorecards',
    variant: 'info',
    featured: false,
    newBadge: true,
    icon: '📋',
    backgroundColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    textColor: 'text-white',
    animation: 'bounce',
    priority: 3,
    active: true,
    autoHide: true,
    hideAfter: 13
  },
  {
    id: 'free-consultation-offer-2025',
    title: '🎁 FREE: AI Strategy Consultation',
    description: 'Discover how AI can transform your business. Free 30-minute consultation with our AI experts. No obligation, just insights.',
    ctaText: 'Book Free Call',
    ctaLink: '/contact',
    variant: 'special',
    featured: false,
    newBadge: false,
    icon: '🎁',
    backgroundColor: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    textColor: 'text-white',
    animation: 'pulse',
    priority: 4,
    active: true,
    autoHide: false
  }
];

export const getActiveBanners = () => {
  return latestPromotionalBanners
    .filter(banner => banner.active)
    .sort((a, b) => a.priority - b.priority);
};

export const getFeaturedBanners = () => {
  return latestPromotionalBanners
    .filter(banner => banner.featured && banner.active)
    .sort((a, b) => a.priority - b.priority);
};

export const getBannersByVariant = (variant: PromotionalBanner['variant']) => {
  return latestPromotionalBanners
    .filter(banner => banner.variant === variant && banner.active)
    .sort((a, b) => a.priority - b.priority);
};