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

<<<<<<< HEAD
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
  // Track banner impression
  console.log('Banner impression:', bannerId);
};

export const trackClick = (bannerId: string): void => {
  // Track banner click
  console.log('Banner click:', bannerId);
};

export const loadBannerStats = (): Record<string, { impressions: number; clicks: number }> => {
  return {};
};

export const getRefreshInterval = (): number => {
  return 30000; // 30 seconds
=======
export default bannerConfigurations;


// Type definitions
export type BannerConfig = typeof bannerConfigurations[number];
export type RotationStrategy = 'sequential' | 'random' | 'weighted' | 'balanced';

// Stub implementations for banner rotation functions
export const selectBannersForDisplay = async (strategy: RotationStrategy = 'sequential', maxBanners: number = 3) => {
  return bannerConfigurations.slice(0, maxBanners);
};

export const selectBalancedBanners = (count: number = 3) => {
  return bannerConfigurations.slice(0, count);
};

export const trackImpression = (bannerId: string) => {
  if (typeof window !== 'undefined') {
    console.log(`Banner impression: ${bannerId}`);
  }
};

export const trackClick = (bannerId: string) => {
  if (typeof window !== 'undefined') {
    console.log(`Banner click: ${bannerId}`);
  }
};

export const loadBannerStats = async () => {
  return {
    impressions: 0,
    clicks: 0,
    ctr: 0
  };
};

export const getRefreshInterval = () => {
  return 30000; // 30 seconds default
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-fd0a
};

export const getRotationStrategy = (): RotationStrategy => {
  return 'sequential';
};
<<<<<<< HEAD

export default bannerConfigurations;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-fd0a
