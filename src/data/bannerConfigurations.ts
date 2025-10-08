/**
 * Banner Configuration Data
 * Manages banner display tracking and rotation logic
 */

export interface BannerConfig {
  id: string;
  name: string;
  priority: number;
  enabled: boolean;
}

export type RotationStrategy = 'sequential' | 'random' | 'priority' | 'balanced';

export function selectBannersForDisplay(
  banners: BannerConfig[],
  count: number,
  strategy: RotationStrategy = 'balanced'
): BannerConfig[] {
  const enabled = banners.filter(b => b.enabled);
  if (strategy === 'priority') {
    return enabled.sort((a, b) => b.priority - a.priority).slice(0, count);
  }
  return enabled.slice(0, count);
}

export function selectBalancedBanners(
  banners: BannerConfig[],
  count: number
): BannerConfig[] {
  return selectBannersForDisplay(banners, count, 'balanced');
}

export function trackImpression(bannerId: string): void {
  // Stub implementation
  console.log('Banner impression:', bannerId);
}

export function trackClick(bannerId: string): void {
  // Stub implementation
  console.log('Banner click:', bannerId);
}

export function loadBannerStats(): Record<string, number> {
  return {};
}

export function getRefreshInterval(): number {
  return 30000; // 30 seconds
}

export function getRotationStrategy(): RotationStrategy {
  return 'balanced';
}