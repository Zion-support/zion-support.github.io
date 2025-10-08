// Banner Configurations
export type RotationStrategy = 'sequential' | 'random' | 'weighted' | 'balanced';

export interface BannerConfig {
  id: string;
  component: string;
  priority: number;
  enabled: boolean;
}

const bannerConfigurations: BannerConfig[] = [
  {
    id: 'welcome-banner',
    component: 'WelcomeBanner',
    priority: 1,
    title: 'Welcome Banner',
    enabled: true,
  },
];

export default bannerConfigurations;

// Type definitions
export type BannerConfigType = typeof bannerConfigurations[number];

// Helper functions for banner rotation
export const selectBannersForDisplay = (
  strategy: RotationStrategy = 'sequential',
  maxBanners: number = 3
): BannerConfig[] => {
  const enabledBanners = bannerConfigurations.filter(b => b.enabled);
  return enabledBanners.slice(0, maxBanners);
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

export const loadBannerStats = (): Record<string, { impressions: number; clicks: number }> => {
  return {};
};

export const getRefreshInterval = (): number => {
  return 30000; // 30 seconds
};

export const getRotationStrategy = (): RotationStrategy => {
  return 'sequential';
};