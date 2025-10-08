/**
 * React Hook for Dynamic Banner Rotation
 * Manages banner display tracking and rotation logic
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import bannerConfigurations, { BannerConfig, RotationStrategy } from '../data/bannerConfigurations';

interface UseBannerRotationOptions {
  strategy?: RotationStrategy;
  maxBanners?: number;
  refreshInterval?: number;
  enableTracking?: boolean;
}

interface UseBannerRotationReturn {
  currentBanners: BannerConfig[];
  rotateBanners: () => void;
  trackBannerImpression: (bannerId: string) => void;
  trackBannerClick: (bannerId: string) => void;
  isRotating: boolean;
}

/**
 * Custom hook for managing dynamic banner rotation
 */
export function useBannerRotation(
  options: UseBannerRotationOptions = {}
): UseBannerRotationReturn {
  const {
    strategy = 'sequential',
    maxBanners = 3,
    refreshInterval = 30000,
    enableTracking = true,
  } = options;

  const [currentBanners, setCurrentBanners] = useState<BannerConfig[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  // Filter enabled banners
  const enabledBanners = useMemo(() => {
    return bannerConfigurations.filter((banner) => banner.enabled);
  }, []);

  // Select banners based on strategy
  const selectBanners = useCallback(
    (startIndex: number = 0): BannerConfig[] => {
      if (enabledBanners.length === 0) return [];

      switch (strategy) {
        case 'random':
          return [...enabledBanners]
            .sort(() => Math.random() - 0.5)
            .slice(0, maxBanners);

        case 'weighted':
          // Simple weighted selection based on priority
          const weighted = [...enabledBanners].sort(
            (a, b) => (b.priority || 0) - (a.priority || 0)
          );
          return weighted.slice(0, maxBanners);

        case 'balanced':
          // Rotate through all banners evenly
          const selected: BannerConfig[] = [];
          for (let i = 0; i < maxBanners && i < enabledBanners.length; i++) {
            const index = (startIndex + i) % enabledBanners.length;
            selected.push(enabledBanners[index]);
          }
          return selected;

        case 'sequential':
        default:
          return enabledBanners.slice(0, maxBanners);
      }
    },
    [enabledBanners, strategy, maxBanners]
  );

  // Rotate to next set of banners
  const rotateBanners = useCallback(() => {
    setIsRotating(true);
    const nextIndex = (currentIndex + maxBanners) % enabledBanners.length;
    setCurrentIndex(nextIndex);
    setCurrentBanners(selectBanners(nextIndex));
    setTimeout(() => setIsRotating(false), 300); // Animation duration
  }, [currentIndex, maxBanners, enabledBanners.length, selectBanners]);

  // Track banner impression
  const trackBannerImpression = useCallback(
    (bannerId: string) => {
      if (enableTracking) {
        console.log(`Banner impression tracked: ${bannerId}`);
        // Implement your tracking logic here
      }
    },
    [enableTracking]
  );

  // Track banner click
  const trackBannerClick = useCallback(
    (bannerId: string) => {
      if (enableTracking) {
        console.log(`Banner click tracked: ${bannerId}`);
        // Implement your tracking logic here
      }
    },
    [enableTracking]
  );

  // Initialize banners on mount
  useEffect(() => {
    setCurrentBanners(selectBanners(0));
  }, [selectBanners]);

  // Set up auto-rotation
  useEffect(() => {
    if (refreshInterval > 0 && enabledBanners.length > maxBanners) {
      const intervalId = setInterval(rotateBanners, refreshInterval);
      return () => clearInterval(intervalId);
    }
  }, [refreshInterval, enabledBanners.length, maxBanners, rotateBanners]);

  // Track impressions for current banners
  useEffect(() => {
    if (enableTracking) {
      currentBanners.forEach((banner) => {
        trackBannerImpression(banner.id);
      });
    }
  }, [currentBanners, enableTracking, trackBannerImpression]);

  return {
    currentBanners,
    rotateBanners,
    trackBannerImpression,
    trackBannerClick,
    isRotating,
  };
}

export default useBannerRotation;