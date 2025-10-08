// Stub file to satisfy import
export interface BannerConfig {
  id: string;
  [key: string]: any;
}

export type RotationStrategy = 'balanced' | 'sequential' | 'random';

export const selectBannersForDisplay = async (strategy: RotationStrategy, maxBanners: number): Promise<BannerConfig[]> => [];
export const selectBalancedBanners = async (maxBanners: number): Promise<BannerConfig[]> => [];
export const trackImpression = async (bannerId: string): Promise<void> => {};
export const trackClick = async (bannerId: string): Promise<void> => {};
export const loadBannerStats = async (): Promise<{ impressions: number; clicks: number; ctr: number }> => ({ impressions: 0, clicks: 0, ctr: 0 });
export const getRefreshInterval = (): number => 5000;
export const getRotationStrategy = (): RotationStrategy => 'balanced';
