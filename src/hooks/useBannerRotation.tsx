/**
 * React Hook for Dynamic Banner Rotation
 * Manages banner display, tracking, and rotation logic
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  BannerConfig,
  RotationStrategy,
  selectBannersForDisplay,
  selectBalancedBanners,
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
export const useBannerRotation = ({
  banners,
  strategy,
  autoRotate = true,
  balancedSelection = false,
}: UseBannerRotationOptions): UseBannerRotationReturn => {
  const [displayedBanners, setDisplayedBanners] = useState<BannerConfig[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setLastRotation] = useState(Date.now());
  
  // Load banner statistics from storage
  const bannersWithStats = useMemo(() => {
    return banners.map(banner => ({
      ...banner,
      ...loadBannerStats(banner.id),
    }));
  }, [banners]);
  
  // Select banners to display
  const selectBanners = useCallback(() => {
    const selected = balancedSelection
      ? selectBalancedBanners(bannersWithStats)
      : selectBannersForDisplay(bannersWithStats, strategy as RotationStrategy);
    
    setDisplayedBanners(selected);
    setLastRotation(Date.now());
    setIsLoading(false);
  }, [bannersWithStats, strategy, balancedSelection]);
  
  // Handle banner impression
  const handleBannerImpression = useCallback((bannerId: string) => {
    trackImpression(bannerId);
    trackBannerInteraction(bannerId, 'impression');
  }, []);
  
  // Handle banner click
  const handleBannerClick = useCallback((bannerId: string) => {
    trackClick(bannerId);
    trackBannerInteraction(bannerId, 'click');
  }, []);
  
  // Refresh banners manually
  const refreshBanners = useCallback(() => {
    selectBanners();
  }, [selectBanners]);
  
  // Initial selection
  useEffect(() => {
    selectBanners();
  }, [selectBanners]);
  
  // Auto-rotation
  useEffect(() => {
    if (!autoRotate) return;
    
    // Calculate refresh interval based on engagement
    const avgEngagement = bannersWithStats.reduce((sum, b) => {
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
  
  // Select variation based on user ID (consistent assignment)
  const selectedVariation = useMemo(() => {
    const hash = Array.from(userId + testName).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );
    const index = hash % variations.length;
    return variations[index];
  }, [userId, testName, variations]);
  
  // Track variation performance
  const trackVariationPerformance = useCallback(
    (metric: string, value: number) => {
      trackBannerInteraction(selectedVariation.id, 'click', {
        testName,
        variation: selectedVariation.id,
        metric,
        value,
      });
    },
    [selectedVariation, testName]
  );
  
  return {
    selectedVariation,
    trackVariationPerformance,
  };
};

export default useBannerRotation;
