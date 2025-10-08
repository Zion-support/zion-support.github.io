export interface BannerConfig {
  id: string;
  title: string;
  enabled: boolean;
  priority?: number;
  impressions?: number;
  clicks?: number;
}

export type RotationStrategy = 'sequential' | 'random' | 'weighted' | 'balanced';

export const bannerConfigurations: BannerConfig[] = [
  {
    id: 'banner-1',
    title: 'Welcome Banner',
    enabled: true,
  },
];

// Banner rotation helper functions
export const selectBannersForDisplay = (banners: BannerConfig[], count: number = 1): BannerConfig[] => {
  return banners.filter(b => b.enabled).slice(0, count);
};

export const selectBalancedBanners = (banners: BannerConfig[], count: number = 1): BannerConfig[] => {
  const enabled = banners.filter(b => b.enabled);
  return enabled.sort((a, b) => (a.impressions || 0) - (b.impressions || 0)).slice(0, count);
};

export const trackImpression = (bannerId: string): void => {
  // Implementation for tracking impression
  if (typeof window !== 'undefined') {
    const stats = loadBannerStats();
    stats[bannerId] = stats[bannerId] || { impressions: 0, clicks: 0 };
    stats[bannerId].impressions++;
    localStorage.setItem('bannerStats', JSON.stringify(stats));
  }
};

export const trackClick = (bannerId: string): void => {
  // Implementation for tracking click
  if (typeof window !== 'undefined') {
    const stats = loadBannerStats();
    stats[bannerId] = stats[bannerId] || { impressions: 0, clicks: 0 };
    stats[bannerId].clicks++;
    localStorage.setItem('bannerStats', JSON.stringify(stats));
  }
};

export const loadBannerStats = (): Record<string, { impressions: number; clicks: number }> => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('bannerStats');
    return stored ? JSON.parse(stored) : {};
  }
  return {};
};

export const getRefreshInterval = (): number => {
  return 30000; // 30 seconds default
};

export const getRotationStrategy = (): RotationStrategy => {
  return 'balanced';
};

export default bannerConfigurations;
