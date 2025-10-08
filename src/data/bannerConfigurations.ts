export interface Banner {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  featured: boolean;
  priority: number;
}

export type BannerConfig = Banner;
export type RotationStrategy = 'sequential' | 'random' | 'weighted' | 'balanced';

const bannerStats: Map<string, { impressions: number; clicks: number }> = new Map();

export async function selectBannersForDisplay(strategy: RotationStrategy = 'balanced', maxBanners: number = 3): Promise<BannerConfig[]> {
  return getFeaturedBanners(maxBanners);
}

export function selectBalancedBanners(maxBanners: number = 3): BannerConfig[] {
  return getFeaturedBanners(maxBanners);
}

export function trackImpression(bannerId: string): void {
  const stats = bannerStats.get(bannerId) || { impressions: 0, clicks: 0 };
  stats.impressions++;
  bannerStats.set(bannerId, stats);
}

export function trackClick(bannerId: string): void {
  const stats = bannerStats.get(bannerId) || { impressions: 0, clicks: 0 };
  stats.clicks++;
  bannerStats.set(bannerId, stats);
}

export async function loadBannerStats(): Promise<{ impressions: number; clicks: number; ctr: number }> {
  let totalImpressions = 0;
  let totalClicks = 0;
  bannerStats.forEach(stats => {
    totalImpressions += stats.impressions;
    totalClicks += stats.clicks;
  });
  return {
    impressions: totalImpressions,
    clicks: totalClicks,
    ctr: totalImpressions > 0 ? totalClicks / totalImpressions : 0,
  };
}

export function getRefreshInterval(): number {
  return 30000;
}

export function getRotationStrategy(): RotationStrategy {
  return 'balanced';
}

export const getFeaturedBanners = (count: number = 3): Banner[] => {
  const banners: Banner[] = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions for Enterprise',
      description: 'Transform your business with cutting-edge AI technology',
      ctaText: 'Learn More',
      ctaUrl: '/services',
      featured: true,
      priority: 1,
    },
    {
      id: 'automation-platform',
      title: 'Automation Platform',
      description: 'Streamline operations with intelligent automation',
      ctaText: 'Get Started',
      ctaUrl: '/services/automation',
      featured: true,
      priority: 2,
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Solutions',
      description: 'Unlock insights from your data with advanced analytics',
      ctaText: 'Explore',
      ctaUrl: '/services/analytics',
      featured: true,
      priority: 3,
    },
  ];

  return banners.slice(0, count);
};
