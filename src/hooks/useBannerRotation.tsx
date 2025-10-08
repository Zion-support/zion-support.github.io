/**
 * React Hook for Dynamic Banner Rotation
 * Manages banner display tracking and rotation logic
 */

import { useState, useEffect, useCallback } from 'react';
import bannerConfigurations, { 
  type BannerConfig, 
  type RotationStrategy,
  selectBannersForDisplay,
  selectBalancedBanners,
  trackImpression,
  trackClick
} from '../data/bannerConfigurations';

interface UseBannerRotationOptions {
  strategy?: RotationStrategy;
  maxBanners?: number;
  refreshInterval?: number;
  enableTracking?: boolean;
}

interface BannerRotationState {
  currentBanners: BannerConfig[];
  isLoading: boolean;
  error: string | null;
  stats: {
    impressions: number;
    clicks: number;
    ctr: number;
  };
}

export const useBannerRotation = (options: UseBannerRotationOptions = {}) => {
  const {
    strategy = 'balanced',
    maxBanners = 3,
    refreshInterval = 30000,
    enableTracking = true
  } = options;

  const [state, setState] = useState<BannerRotationState>({
    currentBanners: [],
    isLoading: true,
    error: null,
    stats: {
      impressions: 0,
      clicks: 0,
      ctr: 0
    }
  });

  // Load initial banners
  useEffect(() => {
    try {
      const configs = Array.isArray(bannerConfigurations) ? bannerConfigurations : [];
      const selected = strategy === 'balanced' 
        ? selectBalancedBanners(maxBanners)
        : selectBannersForDisplay(strategy, maxBanners);
      
      setState(prev => ({
        ...prev,
        currentBanners: selected,
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'Failed to load banners',
        isLoading: false
      }));
    }
  }, [strategy, maxBanners]);

  // Track impressions
  useEffect(() => {
    if (enableTracking && state.currentBanners.length > 0) {
      state.currentBanners.forEach(banner => {
        trackImpression(banner.id);
      });
    }
  }, [state.currentBanners, enableTracking]);

  // Handle banner click
  const handleBannerClick = useCallback((bannerId: string) => {
    if (enableTracking) {
      trackClick(bannerId);
    }
  }, [enableTracking]);

  return {
    ...state,
    handleBannerClick,
    refresh: () => {
      // Trigger refresh
      setState(prev => ({ ...prev, isLoading: true }));
    }
  };
};

export default useBannerRotation;