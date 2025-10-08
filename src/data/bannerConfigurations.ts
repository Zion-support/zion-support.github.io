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
export const getRotationStrategy = (): RotationStrategy => 'balanced';
