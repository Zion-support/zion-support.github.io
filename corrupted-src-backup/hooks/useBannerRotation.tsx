/**
 * React Hook for Dynamic Banner Rotation
 * Manages banner display tracking and rotation logic
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  BannerConfig,
  RotationStrategy,
  trackImpression,
  trackClick,
  loadBannerStats,
  getRefreshInterval,
} from '../utils/bannerRotation';
import { trackBannerInteraction } from '../utils/analyticsTracker';

interface UseBannerRotationOptions {
  banners: BannerConfig[];
  strategy?: Partial<RotationStrategy>;
  autoRotate?: boolean;
  balancedSelection?: boolean;
}

interface UseBannerRotationReturn {
  displayedBanners: BannerConfig[];
  handleBannerImpression: (bannerId: string) => void;
  handleBannerClick: (bannerId: string) => void;
  refreshBanners: () => void;
  isLoading: boolean;
}

/**
 * Hook for managing banner rotation and tracking
 */
export const useBannerRotation = (
  banners: BannerConfig[],
  strategy: RotationStrategy = 'sequential',
  interval: number = 5000
): BannerRotationHook => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationState, setRotationState] =
    useState<BannerRotationState>('idle');

  // Load banner statistics from storage
  const bannersWithStats = useMemo(() => {
    return banners.map(banner => ({
      ...banner,
      ...loadBannerStats(banner.id),
    }));
  }, [banners]);

  const getNextIndex = useCallback(() => {
    if (filteredBanners.length === 0) return 0;

    switch (strategy) {
      case 'random':
        return Math.floor(Math.random() * filteredBanners.length);
      case 'weighted':
        // Simple weighted selection based on priority
        const totalWeight = filteredBanners.reduce(
          (sum, banner) => sum + banner.priority,
          0
        );
        let random = Math.random() * totalWeight;
        for (let i = 0; i < filteredBanners.length; i++) {
          random -= filteredBanners[i].priority;
          if (random <= 0) return i;
        }
        return 0;
      case 'sequential':
      default:
        return (currentIndex + 1) % filteredBanners.length;
    }
  }, [strategy, filteredBanners, currentIndex]);

  const nextBanner = useCallback(() => {
    if (filteredBanners.length === 0) return;

    setRotationState('rotating');
    const nextIndex = getNextIndex();
    setCurrentIndex(nextIndex);

    setTimeout(() => {
      setRotationState('idle');
    }, 300);
  }, [getNextIndex, filteredBanners.length]);

  const previousBanner = useCallback(() => {
    if (filteredBanners.length === 0) return;

    setRotationState('rotating');
    const prevIndex =
      currentIndex === 0 ? filteredBanners.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);

    setTimeout(() => {
      setRotationState('idle');
    }, 300);
  }, [currentIndex, filteredBanners.length]);

  const pauseRotation = useCallback(() => {
    setIsPlaying(false);
  }, []);

  // Handle banner click
  const handleBannerClick = useCallback((bannerId: string) => {
    trackClick(bannerId);
    trackBannerInteraction(bannerId, 'click');
  }, []);

  const goToBanner = useCallback(
    (index: number) => {
      if (index >= 0 && index < filteredBanners.length) {
        setRotationState('rotating');
        setCurrentIndex(index);
        setTimeout(() => {
          setRotationState('idle');
        }, 300);
      }
    },
    [filteredBanners.length]
  );

  // Initial selection
  useEffect(() => {
    selectBanners();
  }, [selectBanners]);

  // Auto-rotation
  useEffect(() => {
    if (!autoRotate) return;

    // Calculate refresh interval based on engagement
    const avgEngagement =
      bannersWithStats.reduce((sum, b) => {
        const impressions = b.impressions || 0;
        const clicks = b.clicks || 0;
        return sum + (impressions > 0 ? (clicks / impressions) * 100 : 0);
      }, 0) / bannersWithStats.length;

    const interval = getRefreshInterval(avgEngagement);
    const timer = setInterval(() => {
      selectBanners();
    }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, bannersWithStats, selectBanners]);

  return {
    displayedBanners,
    handleBannerImpression,
    handleBannerClick,
    refreshBanners,
    isLoading,
  };
};

/**
 * Hook for tracking banner visibility
 */
export const useBannerVisibility = (
  bannerId: string,
  onVisible?: () => void
): { ref: React.RefObject<HTMLDivElement | null> } => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackImpression(bannerId);
          trackBannerInteraction(bannerId, 'impression');
          if (onVisible) onVisible();
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // 50% visible
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [bannerId, onVisible]);

  return { ref };
};

/**
 * Hook for A/B testing banners
 */
export const useBannerABTest = (
  variations: BannerConfig[],
  testName: string
): {
  selectedVariation: BannerConfig;
  trackVariationPerformance: (metric: string, value: number) => void;
} => {
  // Get consistent user ID for test assignment
  const userId = useMemo(() => {
    const stored = localStorage.getItem('user_id');
    if (stored) return stored;

    const newId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('user_id', newId);
    return newId;
  }, []);

  // Assign variation based on user ID hash
  const selectedVariation = useMemo(() => {
    const hash = userId.split('').reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
    const index = Math.abs(hash) % variations.length;
    return variations[index];
  }, [userId, variations]);

  const trackVariationPerformance = useCallback(
    (metric: string, value: number) => {
      trackBannerInteraction(
        `${testName}_${selectedVariation.id}`,
        metric,
        value
      );
    },
    [testName, selectedVariation.id]
  );

  return {
    selectedVariation,
    trackVariationPerformance,
  };
};
