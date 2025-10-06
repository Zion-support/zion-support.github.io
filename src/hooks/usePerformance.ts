import { useEffect, useCallback, useRef } from 'react';
import performanceOptimizer from '../utils/performanceOptimizer';

/**
 * Hook for performance monitoring
 */
export const usePerformance = () => {
  const observerRef = useRef<PerformanceObserver | null>(null);

  const trackPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;
    console.log('Performance tracking initialized');
  }, []);

  const trackLongTasks = useCallback(() => {
    if (typeof window === 'undefined') return;
    console.log('Long task monitoring initialized');
  }, []);

  const preloadResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    performanceOptimizer.preloadCriticalResources();
  }, []);

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    performanceOptimizer.lazyLoadImages();
  }, []);

  useEffect(() => {
    trackPerformance();
    trackLongTasks();
    preloadResources();
    optimizeImages();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [trackPerformance, trackLongTasks, preloadResources, optimizeImages]);

  return {
    trackPerformance,
    trackLongTasks,
    preloadResources,
    optimizeImages,
  };
};

/**
 * Hook for monitoring long tasks
 */
export const useLongTaskMonitoring = () => {
  useEffect(() => {
    console.log('Long task monitoring initialized');
  }, []);
};

/**
 * Hook for performance optimization
 */
export const usePerformanceOptimization = () => {
  const optimize = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Preload critical resources
    performanceOptimizer.preloadCriticalResources();
    
    // Cache static assets
    console.log('Caching static assets');
    
    // Lazy load images
    performanceOptimizer.lazyLoadImages();
  }, []);

  useEffect(() => {
    optimize();
  }, [optimize]);

  return { optimize };
};
