// Stub file to satisfy import
export interface BannerConfig {
  id: string;
  [key: string]: any;
}

export type RotationStrategy = 'balanced' | 'sequential' | 'random';

export const selectBannersForDisplay = (strategy: RotationStrategy, maxBanners: number): BannerConfig[] => [];
export const selectBalancedBanners = (): BannerConfig[] => [];
export const trackImpression = (bannerId: string): void => {};
export const trackClick = (bannerId: string): void => {};
export const loadBannerStats = (): { impressions: number; clicks: number; ctr: number } => ({ impressions: 0, clicks: 0, ctr: 0 });
export const getRefreshInterval = (): number => 5000;
export const getRotationStrategy = (): RotationStrategy => 'balanced';
