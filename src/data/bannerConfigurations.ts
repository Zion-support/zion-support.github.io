// Stub file to satisfy import
export interface BannerConfig {
  id: string;
  [key: string]: any;
}

export type RotationStrategy = 'balanced' | 'sequential' | 'random';

export const selectBannersForDisplay = (strategy: RotationStrategy, maxBanners: number) => [];
export const selectBalancedBanners = (banners: BannerConfig[], maxBanners: number) => [];
export const trackImpression = (bannerId: string) => {};
export const trackClick = (bannerId: string) => {};
export const loadBannerStats = async () => Promise.resolve({ impressions: 0, clicks: 0, ctr: 0 });
export const getRefreshInterval = () => 5000;
export const getRotationStrategy = (): RotationStrategy => 'balanced';
