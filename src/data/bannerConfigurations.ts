// Banner Configurations
export interface BannerConfig {
  id: string;
  name: string;
  priority: number;
}

export type RotationStrategy = 'sequential' | 'random' | 'weighted' | 'balanced';

export const bannerConfigurations: BannerConfig[] = [];

export const selectBannersForDisplay = (strategy?: RotationStrategy, maxBanners?: number) => bannerConfigurations;
export const selectBalancedBanners = () => bannerConfigurations;
export const trackImpression = (id: string) => {};
export const trackClick = (id: string) => {};
export const loadBannerStats = () => ({ impressions: 0, clicks: 0, ctr: 0 });
export const getRefreshInterval = () => 5000;
export const getRotationStrategy = (): RotationStrategy => 'sequential';

export default bannerConfigurations;
