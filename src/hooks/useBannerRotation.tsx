/**
 * React Hook for Dynamic Banner Rotation
 * Manages banner display tracking and rotation logic
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import bannerConfigurations from '../data/bannerConfigurations';

// Define types inline since they're not exported
type RotationStrategy = 'sequential' | 'random' | 'weighted' | 'balanced';

interface BannerConfig {
  id: string;
  component: string;
  priority: number;
  weight?: number;
  enabled: boolean;
}

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
        ? selectBalancedBanners(configs, maxBanners)
        : selectBannersForDisplay(configs, maxBanners, strategy);
      
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

