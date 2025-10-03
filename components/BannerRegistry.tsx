// import React from 'react';

// Import all banner components
import October2025DigitalTwinsBreakthroughBanner from './October2025DigitalTwinsBreakthroughBanner';
import October2025CognitiveBusinessIntelligenceBanner from './October2025CognitiveBusinessIntelligenceBanner';
import October2025NewContentShowcaseBanner from './October2025NewContentShowcaseBanner';
import October2025BreakingContentBanner from './October2025BreakingContentBanner';
import October2025FreshContentLaunchBanner from './October2025FreshContentLaunchBanner';
import October2025NewestContentMegaBanner from './October2025NewestContentMegaBanner';
import October2025CybersecurityMeshRevolutionBanner from './October2025CybersecurityMeshRevolutionBanner';
import December2025NewContentShowcaseBanner from './December2025NewContentShowcaseBanner';
import January2026ConsciousnessBreakthroughBanner from './January2026ConsciousnessBreakthroughBanner';
import January2026NeuralArchitectureRevolutionBanner from './January2026NeuralArchitectureRevolutionBanner';
import February2026NextGenerationAutonomousIntelligenceBanner from './February2026NextGenerationAutonomousIntelligenceBanner';
import February2026NextGenerationAutonomousSystemsBanner from './February2026NextGenerationAutonomousSystemsBanner';
import FebruaryMarch2026ContentShowcaseBanner from './FebruaryMarch2026ContentShowcaseBanner';
import March2026QuantumConsciousnessTransformationBanner from './March2026QuantumConsciousnessTransformationBanner';
import AI2027TranscendentQuantumConsciousnessBanner from './AI2027TranscendentQuantumConsciousnessBanner';
import AI2027UniversalIntelligenceSingularityBanner from './AI2027UniversalIntelligenceSingularityBanner';

export interface BannerConfig {
  id: string;
  component: React.ComponentType;
  priority: number;
  datePublished: Date;
  category: 'breakthrough' | 'content' | 'product' | 'service' | 'event';
  isActive: boolean;
}

export const bannerRegistry: BannerConfig[] = [
  // 2027 Breakthrough Content - Highest Priority
  {
    id: 'ai-2027-universal-intelligence',
    component: AI2027UniversalIntelligenceSingularityBanner,
    priority: 110,
    datePublished: new Date('2027-01-01'),
    category: 'breakthrough',
    isActive: true,
  },
  {
    id: 'ai-2027-transcendent-quantum',
    component: AI2027TranscendentQuantumConsciousnessBanner,
    priority: 108,
    datePublished: new Date('2027-01-01'),
    category: 'breakthrough',
    isActive: true,
  },
  
  // 2026 Advanced Content
  {
    id: 'march-2026-quantum-consciousness',
    component: March2026QuantumConsciousnessTransformationBanner,
    priority: 105,
    datePublished: new Date('2026-03-01'),
    category: 'breakthrough',
    isActive: true,
  },
  {
    id: 'feb-march-2026-showcase',
    component: FebruaryMarch2026ContentShowcaseBanner,
    priority: 104,
    datePublished: new Date('2026-02-15'),
    category: 'content',
    isActive: true,
  },
  {
    id: 'february-2026-autonomous-intelligence',
    component: February2026NextGenerationAutonomousIntelligenceBanner,
    priority: 103,
    datePublished: new Date('2026-02-01'),
    category: 'breakthrough',
    isActive: true,
  },
  {
    id: 'february-2026-autonomous-systems',
    component: February2026NextGenerationAutonomousSystemsBanner,
    priority: 102,
    datePublished: new Date('2026-02-01'),
    category: 'breakthrough',
    isActive: true,
  },
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
  
  // 2025 December Content
  {
    id: 'december-2025-showcase',
    component: December2025NewContentShowcaseBanner,
    priority: 95,
    datePublished: new Date('2025-12-15'),
    category: 'content',
    isActive: true,
  },
  
  // 2025 October Content - Most Recent Production Content
  {
    id: 'october-2025-digital-twins-breakthrough',
    component: October2025DigitalTwinsBreakthroughBanner,
    priority: 120,
    datePublished: new Date('2025-10-01'),
    category: 'breakthrough',
    isActive: true,
  },
  {
    id: 'october-2025-cognitive-bi',
    component: October2025CognitiveBusinessIntelligenceBanner,
    priority: 98,
    datePublished: new Date('2025-10-01'),
    category: 'breakthrough',
    isActive: true,
  },
  {
    id: 'october-2025-new-content-showcase',
    component: October2025NewContentShowcaseBanner,
    priority: 97,
    datePublished: new Date('2025-10-01'),
    category: 'content',
    isActive: true,
  },
  {
    id: 'october-2025-cybersecurity-mesh',
    component: October2025CybersecurityMeshRevolutionBanner,
    priority: 92,
    datePublished: new Date('2025-10-01'),
    category: 'content',
    isActive: true,
  },
  {
    id: 'october-2025-newest-mega',
    component: October2025NewestContentMegaBanner,
    priority: 91,
    datePublished: new Date('2025-10-01'),
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
