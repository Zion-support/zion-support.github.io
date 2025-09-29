export interface PromotionalBanner {
  id: string;
  message: string;
  link: string;
  variant: 'default' | 'success' | 'warning' | 'info';
}

export const enhancedPromotionalBanners: PromotionalBanner[] = [
  {
    id: 'ai-foundation-models-banner',
    message: '🔥 NEW: AI Foundation Models 2026 - 90% Cost Reduction & $8M ROI Guide',
    link: '/blog/ai-foundation-models-2026',
    variant: 'success'
  },
  {
    id: 'ai-operational-excellence-banner',
    message: '⚡ NEW: AI Operational Excellence 2026 - 90% Automation & $8M+ Savings',
    link: '/blog/ai-operational-excellence-2026',
    variant: 'info'
  },
  {
    id: 'ai-agent-orchestration-banner',
    message: '🤖 NEW: AI Agent Orchestration 2026 - Multi-Agent System Architecture',
    link: '/blog/ai-agent-orchestration-2026',
    variant: 'default'
  },
  {
    id: 'ai-sustainability-banner',
    message: '🌱 NEW: AI Sustainability & Green Tech 2026 - Carbon-Neutral Operations',
    link: '/blog/ai-sustainability-green-tech-2026',
    variant: 'success'
  },
  {
    id: 'ai-quantum-computing-banner',
    message: '🔮 NEW: AI Quantum Computing 2026 - Next-Generation Intelligence',
    link: '/blog/ai-quantum-computing-2026',
    variant: 'warning'
  }
];

export const getActiveEnhancedBanners = () => {
  return enhancedPromotionalBanners.filter(banner => banner.id);
};

export const getFeaturedBanners = () => {
  return enhancedPromotionalBanners.filter(banner => banner.variant === 'success');
};

export default enhancedPromotionalBanners;
