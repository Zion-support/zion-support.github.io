import React from 'react';

// Import all banner components
import October2025BreakingContentBanner from './October2025BreakingContentBanner';
import October2025FreshContentLaunchBanner from './October2025FreshContentLaunchBanner';
import December2025NewContentShowcaseBanner from './December2025NewContentShowcaseBanner';
import January2026ConsciousnessBreakthroughBanner from './January2026ConsciousnessBreakthroughBanner';
import January2026NeuralArchitectureRevolutionBanner from './January2026NeuralArchitectureRevolutionBanner';

export interface BannerConfig {
  id: string;
  component: React.ComponentType;
  priority: number;
  datePublished: Date;
  category: 'breakthrough' | 'content' | 'product' | 'service' | 'event';
  isActive: boolean;
}

export const bannerRegistry: BannerConfig[] = [
  {
    id: 'january-2026-consciousness',
    component: January2026ConsciousnessBreakthroughBanner,
    priority: 100,
    datePublished: new Date('2026-01-01'),
    category: 'breakthrough',
    isActive: true,
  },
  {
    id: 'january-2026-neural-arch',
    component: January2026NeuralArchitectureRevolutionBanner,
    priority: 99,
    datePublished: new Date('2026-01-01'),
    category: 'breakthrough',
    isActive: true,
  },
  {
    id: 'december-2025-showcase',
    component: December2025NewContentShowcaseBanner,
    priority: 95,
    datePublished: new Date('2025-12-15'),
    category: 'content',
    isActive: true,
  },
  {
    id: 'october-2025-breaking',
    component: October2025BreakingContentBanner,
    priority: 90,
    datePublished: new Date('2025-10-01'),
    category: 'content',
    isActive: true,
  },
  {
    id: 'october-2025-fresh',
    component: October2025FreshContentLaunchBanner,
    priority: 85,
    datePublished: new Date('2025-10-01'),
    category: 'content',
    isActive: true,
  },
];

export const getActiveBanners = (category?: string, limit?: number): BannerConfig[] => {
  let banners = bannerRegistry
    .filter(banner => banner.isActive)
    .sort((a, b) => b.priority - a.priority);
  
  if (category) {
    banners = banners.filter(banner => banner.category === category);
  }
  
  if (limit) {
    banners = banners.slice(0, limit);
  }
  
  return banners;
};

export const getBannerById = (id: string): BannerConfig | undefined => {
  return bannerRegistry.find(banner => banner.id === id);
};
