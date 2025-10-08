<<<<<<< HEAD
// Stub file to satisfy import
export interface BannerConfig {
  id: string;
  [key: string]: any;
}

export type RotationStrategy = 'balanced' | 'sequential' | 'random';

export const selectBannersForDisplay = () => [];
export const selectBalancedBanners = () => [];
export const trackImpression = () => {};
export const trackClick = () => {};
export const loadBannerStats = () => ({});
export const getRefreshInterval = () => 5000;
export const getRotationStrategy = (): RotationStrategy => 'balanced';
=======
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
};

export const getRotationStrategy = (): RotationStrategy => {
  return 'sequential';
};

export default bannerConfigurations;
>>>>>>> cursor/fix-errors-and-merge-to-main-eab2
