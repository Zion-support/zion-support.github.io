<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Stub file to satisfy import
export interface BannerConfig {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  linkUrl?: string;
  priority: number;
  [key: string]: any;
}

export type RotationStrategy = 'balanced' | 'sequential' | 'random';

<<<<<<< HEAD
<<<<<<< HEAD
export const selectBannersForDisplay = async (strategy: RotationStrategy, maxBanners: number): Promise<BannerConfig[]> => {
  // Return empty array for now - this would be implemented with actual banner data
  return [];
};

export const selectBalancedBanners = async (maxBanners: number): Promise<BannerConfig[]> => {
  return [];
};

export const trackImpression = async (bannerId: string): Promise<void> => {
  // Implementation would track banner impressions
  console.log(`Tracking impression for banner: ${bannerId}`);
};

export const trackClick = async (bannerId: string): Promise<void> => {
  // Implementation would track banner clicks
  console.log(`Tracking click for banner: ${bannerId}`);
};

export const loadBannerStats = async (): Promise<{ impressions: number; clicks: number; ctr: number }> => {
  return {
    impressions: 0,
    clicks: 0,
    ctr: 0
  };
};

export const getRefreshInterval = (): number => 5000;
=======
export const selectBannersForDisplay = () => [];
export const selectBalancedBanners = () => [];
export const trackImpression = () => {};
export const trackClick = () => {};
export const loadBannerStats = () => ({ impressions: 0, clicks: 0, ctr: 0 });
=======
export const selectBannersForDisplay = (strategy: RotationStrategy, maxBanners: number): BannerConfig[] => [];
export const selectBalancedBanners = () => [];
export const trackImpression = (bannerId: string) => {};
export const trackClick = (bannerId: string) => {};
export const loadBannerStats = (): { impressions: number; clicks: number; ctr: number } => ({ impressions: 0, clicks: 0, ctr: 0 });
>>>>>>> cursor/fix-errors-and-merge-to-main-fa65
export const getRefreshInterval = () => 5000;
>>>>>>> cursor/fix-errors-and-merge-to-main-5f6c
export const getRotationStrategy = (): RotationStrategy => 'balanced';
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ad8
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e97f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-eab2
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ad8
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e97f
