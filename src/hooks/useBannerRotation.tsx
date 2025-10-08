/**
 * React Hook for Dynamic Banner Rotation
 * Manages banner display tracking and rotation logic
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import bannerConfigurations, { BannerConfig, RotationStrategy } from "../data/bannerConfigurations";

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

// Helper functions defined inline
const selectBannersForDisplay = (banners: any[], maxBanners: number, strategy: RotationStrategy) => {
  const enabled = banners.filter((b: any) => b.enabled !== false);
  const sorted = enabled.sort((a: any, b: any) => (b.priority || 0) - (a.priority || 0));
  return sorted.slice(0, maxBanners);
};

const selectBalancedBanners = (banners: any[], maxBanners: number) => {
  return selectBannersForDisplay(banners, maxBanners, 'balanced');
};

const trackImpression = (bannerId: string) => {
  if (typeof window !== 'undefined') {
    const key = `banner_impression_${bannerId}`;
    const current = parseInt(localStorage.getItem(key) || '0');
    localStorage.setItem(key, String(current + 1));
  }
};

const trackClick = (bannerId: string) => {
  if (typeof window !== 'undefined') {
    const key = `banner_click_${bannerId}`;
    const current = parseInt(localStorage.getItem(key) || '0');
    localStorage.setItem(key, String(current + 1));
  }
};

const loadBannerStats = () => {
  return {
    impressions: 0,
    clicks: 0,
    ctr: 0
  };
};

const getRefreshInterval = () => 30000;
const getRotationStrategy = (): RotationStrategy => 'balanced';

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
    stats: loadBannerStats()
  });

  // Initial banner selection
  useEffect(() => {
    const selectBanners = () => {
      try {
        const selected = selectBalancedBanners(bannerConfigurations, maxBanners);
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
    };

    selectBanners();
  }, [maxBanners]);

  // Rotation interval
  useEffect(() => {
    if (refreshInterval > 0) {
      const interval = setInterval(() => {
        const selected = selectBalancedBanners(bannerConfigurations, maxBanners);
        setState(prev => ({
          ...prev,
          currentBanners: selected
        }));
      }, refreshInterval);

      return () => clearInterval(interval);
    }
  }, [refreshInterval, maxBanners]);

  const handleImpression = useCallback((bannerId: string) => {
    if (enableTracking) {
      trackImpression(bannerId);
    }
  }, [enableTracking]);

  const handleClick = useCallback((bannerId: string) => {
    if (enableTracking) {
      trackClick(bannerId);
    }
  }, [enableTracking]);

  return {
    ...state,
    trackImpression: handleImpression,
    trackClick: handleClick,
    refresh: () => {
      const selected = selectBalancedBanners(bannerConfigurations, maxBanners);
      setState(prev => ({
        ...prev,
        currentBanners: selected
      }));
    }
  };
};

export default useBannerRotation;