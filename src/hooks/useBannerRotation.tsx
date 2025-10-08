/**
 * React Hook for Dynamic Banner Rotation
 * Manages banner display tracking and rotation logic
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';

// @ts-ignore - Banner configurations may not have TypeScript definitions
import bannerConfigurationsModule from '../data/bannerConfigurations';

// Extract exports with fallbacks
const {
  BannerConfig = {} as any,
  RotationStrategy = 'sequential' as any,
  selectBannersForDisplay = (() => []) as any,
  selectBalancedBanners = (() => []) as any,
  trackImpression = (() => {}) as any,
  trackClick = (() => {}) as any,
  loadBannerStats = (() => ({})) as any,
  getRefreshInterval = (() => 5000) as any,
  getRotationStrategy = (() => 'sequential') as any
} = bannerConfigurationsModule || {};

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

  const loadBanners = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const banners = await selectBannersForDisplay(strategy, maxBanners);
      const stats = enableTracking ? await loadBannerStats() : { impressions: 0, clicks: 0, ctr: 0 };
      
      setState(prev => ({
        ...prev,
        currentBanners: banners,
        isLoading: false,
        stats
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to load banners'
      }));
    }
  }, [strategy, maxBanners, enableTracking]);

  const handleBannerImpression = useCallback((bannerId: string) => {
    if (enableTracking) {
      trackImpression(bannerId);
      setState(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          impressions: prev.stats.impressions + 1
        }
      }));
    }
  }, [enableTracking]);

  const handleBannerClick = useCallback((bannerId: string) => {
    if (enableTracking) {
      trackClick(bannerId);
      setState(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          clicks: prev.stats.clicks + 1
        }
      }));
    }
  }, [enableTracking]);

  const refreshBanners = useCallback(() => {
    loadBanners();
  }, [loadBanners]);

  useEffect(() => {
    loadBanners();
    
    const interval = setInterval(() => {
      loadBanners();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [loadBanners, refreshInterval]);

  const rotationInfo = useMemo(() => ({
    strategy,
    maxBanners,
    refreshInterval,
    totalBanners: state.currentBanners.length,
    isActive: !state.isLoading && !state.error
  }), [strategy, maxBanners, refreshInterval, state.currentBanners.length, state.isLoading, state.error]);

  return {
    ...state,
    rotationInfo,
    handleBannerImpression,
    handleBannerClick,
    refreshBanners
  };
};

export default useBannerRotation;