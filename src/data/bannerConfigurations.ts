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
