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

export const selectBannersForDisplay = (
  strategy: RotationStrategy = 'sequential',
  maxBanners: number = 3
): BannerConfig[] => {
  return bannerConfigurations.filter(b => b.enabled).slice(0, maxBanners);
};

export const selectBalancedBanners = (maxBanners: number = 3): BannerConfig[] => {
  return selectBannersForDisplay('balanced', maxBanners);
};

export const trackImpression = (bannerId: string): void => {
  if (typeof window !== 'undefined') {
    console.log(`Banner impression: ${bannerId}`);
  }
};

export const trackClick = (bannerId: string): void => {
  if (typeof window !== 'undefined') {
    console.log(`Banner click: ${bannerId}`);
  }
};

export const loadBannerStats = (): Record<string, { impressions: number; clicks: number; ctr?: number }> => {
  return {
    impressions: 0,
    clicks: 0,
    ctr: 0
  };
};

export const getRefreshInterval = (): number => {
  return 30000; // 30 seconds
};

export const getRotationStrategy = (): RotationStrategy => {
  return 'sequential';
};

export default bannerConfigurations;
