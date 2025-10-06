import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  BannerConfig,
  RotationStrategy,
  BannerRotationHook,
  BannerRotationState,
} from '../types/banner';

/**
 * Custom hook for managing banner rotation with various strategies
 */
export const useBannerRotation = (
  banners: BannerConfig[],
  strategy: RotationStrategy = 'sequential',
  interval: number = 5000
): BannerRotationHook => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotationState, setRotationState] = useState<BannerRotationState>('idle');

  const filteredBanners = useMemo(() => {
    const now = new Date();
    return banners.filter(banner => {
      const startDate = new Date(banner.startDate);
      const endDate = new Date(banner.endDate);
      return startDate <= now && now <= endDate;
    });
  }, [banners]);

  const getNextIndex = useCallback(() => {
    if (filteredBanners.length === 0) return 0;
    
    switch (strategy) {
      case 'random':
        return Math.floor(Math.random() * filteredBanners.length);
      case 'weighted':
        // Simple weighted selection based on priority
        const totalWeight = filteredBanners.reduce((sum, banner) => sum + banner.priority, 0);
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
    const prevIndex = currentIndex === 0 ? filteredBanners.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    
    setTimeout(() => {
      setRotationState('idle');
    }, 300);
  }, [currentIndex, filteredBanners.length]);

  const pauseRotation = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const resumeRotation = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const goToBanner = useCallback((index: number) => {
    if (index >= 0 && index < filteredBanners.length) {
      setRotationState('rotating');
      setCurrentIndex(index);
      setTimeout(() => {
        setRotationState('idle');
      }, 300);
    }
  }, [filteredBanners.length]);

  useEffect(() => {
    if (!isPlaying || filteredBanners.length <= 1) return;

    const timer = setInterval(nextBanner, interval);
    return () => clearInterval(timer);
  }, [isPlaying, nextBanner, interval, filteredBanners.length]);

  return {
    currentBanner: filteredBanners[currentIndex] || null,
    currentIndex,
    totalBanners: filteredBanners.length,
    isPlaying,
    rotationState,
    nextBanner,
    previousBanner,
    pauseRotation,
    resumeRotation,
    goToBanner,
  };
};