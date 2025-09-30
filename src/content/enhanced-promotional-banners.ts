export interface EnhancedPromotionalBanner {
  id: string;
  message: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  textColor: string;
  showClose: boolean;
  autoHide: boolean;
  hideAfter: number;
  active: boolean;
  priority: number;
  variant: 'info' | 'success' | 'warning' | 'premium' | 'launch' | 'special';
  icon?: string;
  animation?: string;
  badge?: string;
  featured?: boolean;
}

export const enhancedPromotionalBanners: EnhancedPromotionalBanner[] = [
  {
    id: 'fresh-content-sep-30-2025',
    message: '🚀 NEW TODAY: Multimodal AI Agents, Real-Time Streaming, AI Code Review Automation',
    ctaText: 'Explore Now',
    ctaLink: '/blog',
    backgroundColor: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 20,
    active: true,
    priority: 0,
    variant: 'launch',
    icon: '🚀',
    animation: 'pulse',
    badge: 'FRESH CONTENT',
    featured: true
  },
  {
    id: 'fresh-content-sep-2025',
    message: '✨ New: Reliable RAG 2025 + Serverless Inference Cost Playbook',
    ctaText: 'Read now',
    ctaLink: '/blog',
    backgroundColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 18,
    active: true,
    priority: 1,
    variant: 'info',
    icon: '✨',
    badge: 'NEW',
    featured: true
  },
  {
    id: 'ai-autonomous-infrastructure-launch',
    message: '🚀 NEW: AI Autonomous Infrastructure Platform - Self-Healing Systems That Scale',
    ctaText: 'Start Free Trial',
    ctaLink: '/services/ai-autonomous-infrastructure-platform',
    backgroundColor: 'bg-gradient-to-r from-green-600 to-emerald-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 20,
    active: true,
    priority: 0,
    variant: 'launch',
    icon: '🤖',
    animation: 'pulse',
    badge: 'LAUNCH SPECIAL',
    featured: true
  },
  {
    id: 'fresh-oct-2025-content-drop',
    message: '📚 NEW: 4 Articles — Agent Safety Budgets, Privacy‑First Telemetry, On‑Device Agents',
    ctaText: 'Read Now',
    ctaLink: '/blog',
    backgroundColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 20,
    active: true,
    priority: 0,
    variant: 'info',
    icon: '📚',
    animation: 'fade-in',
    badge: 'FRESH OCT',
    featured: true
  },
  {
    id: 'quantum-ai-hybrid-computing',
    message: '⚛️ BREAKTHROUGH: Quantum-AI Hybrid Computing - 1000x Faster Processing Power',
    ctaText: 'Schedule Demo',
    ctaLink: '/services/quantum-ai-hybrid-computing',
    backgroundColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 18,
    active: true,
    priority: 1,
    variant: 'premium',
    icon: '⚛️',
    animation: 'bounce',
    badge: 'BREAKTHROUGH',
    featured: true
  },
  {
    id: 'ai-cybersecurity-zero-trust',
    message: '🛡️ ADVANCED: AI-Powered Zero Trust Cybersecurity - 99.9% Threat Detection',
    ctaText: 'Security Audit',
    ctaLink: '/services/ai-cybersecurity-zero-trust',
    backgroundColor: 'bg-gradient-to-r from-red-600 to-rose-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 1,
    variant: 'warning',
    icon: '🛡️',
    animation: 'pulse',
    badge: 'ADVANCED',
    featured: true
  },
  {
    id: 'new-content-alert-jan-2025',
    message: '📚 FRESH CONTENT: 6 New Articles on AI Autonomous Systems, Quantum Computing & Zero Trust Security',
    ctaText: 'Read Latest',
    ctaLink: '/blog',
    backgroundColor: 'bg-gradient-to-r from-blue-600 to-cyan-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 15,
    active: true,
    priority: 2,
    variant: 'info',
    icon: '📚',
    animation: 'fade-in',
    badge: 'NEW CONTENT',
    featured: false
  },
  {
    id: 'case-studies-success-stories',
    message: '🏆 SUCCESS STORIES: Global Retail Corp 45% Revenue Growth, Healthcare 99.9% Uptime',
    ctaText: 'View Case Studies',
    ctaLink: '/case-studies',
    backgroundColor: 'bg-gradient-to-r from-yellow-600 to-orange-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 17,
    active: true,
    priority: 2,
    variant: 'success',
    icon: '🏆',
    animation: 'slide-in',
    badge: 'SUCCESS STORIES',
    featured: false
  },
  {
    id: 'special-offer-jan-2025',
    message: '🎯 LIMITED TIME: 50% OFF AI Autonomous Infrastructure Platform - Valid Until March 31, 2025',
    ctaText: 'Claim Offer',
    ctaLink: '/services/ai-autonomous-infrastructure-platform#pricing',
    backgroundColor: 'bg-gradient-to-r from-pink-600 to-rose-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: false,
    hideAfter: 0,
    active: true,
    priority: 3,
    variant: 'special',
    icon: '🎯',
    animation: 'pulse',
    badge: 'LIMITED TIME',
    featured: true
  },
  {
    id: 'ai-content-generation-automation',
    message: '📝 NEW: AI Content Generation Platform - 10x Content Production with Brand Consistency',
    ctaText: 'Start Trial',
    ctaLink: '/services/ai-content-generation-automation',
    backgroundColor: 'bg-gradient-to-r from-teal-600 to-green-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 14,
    active: true,
    priority: 3,
    variant: 'info',
    icon: '📝',
    animation: 'fade-in',
    badge: 'NEW SERVICE',
    featured: false
  },
  {
    id: 'ai-customer-experience-platform',
    message: '💬 TRANSFORM: AI Customer Experience Platform - 45% Revenue Increase, 90% Satisfaction',
    ctaText: 'Transform CX',
    ctaLink: '/services/ai-customer-experience-platform',
    backgroundColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 13,
    active: true,
    priority: 4,
    variant: 'premium',
    icon: '💬',
    animation: 'bounce',
    badge: 'TRANSFORM',
    featured: false
  },
  {
    id: 'ai-supply-chain-optimization',
    message: '🚚 OPTIMIZE: AI Supply Chain Platform - 65% Faster Deliveries, 40% Cost Reduction',
    ctaText: 'Optimize Now',
    ctaLink: '/services/ai-supply-chain-optimization',
    backgroundColor: 'bg-gradient-to-r from-orange-600 to-red-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 12,
    active: true,
    priority: 4,
    variant: 'info',
    icon: '🚚',
    animation: 'slide-in',
    badge: 'OPTIMIZE',
    featured: false
  },
  {
    id: 'free-consultation-offer',
    message: '🎁 FREE: AI Strategy Consultation - Discover How AI Can Transform Your Business',
    ctaText: 'Book Free Call',
    ctaLink: '/contact',
    backgroundColor: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: false,
    hideAfter: 0,
    active: true,
    priority: 5,
    variant: 'special',
    icon: '🎁',
    animation: 'pulse',
    badge: 'FREE',
    featured: false
  }
];

export const getActiveEnhancedBanners = () => {
  return enhancedPromotionalBanners
    .filter(banner => banner.active)
    .sort((a, b) => a.priority - b.priority);
};

export const getFeaturedBanners = () => {
  return enhancedPromotionalBanners
    .filter(banner => banner.featured && banner.active)
    .sort((a, b) => a.priority - b.priority);
};

export const getBannersByVariant = (variant: EnhancedPromotionalBanner['variant']) => {
  return enhancedPromotionalBanners
    .filter(banner => banner.variant === variant && banner.active)
    .sort((a, b) => a.priority - b.priority);
};