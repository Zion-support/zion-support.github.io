import { useEffect, useCallback, useRef } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';

/**
 * Hook for performance monitoring
 */
export const usePerformance = () => {
  const observerRef = useRef<PerformanceObserver | null>(null);

  const trackPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const metrics = performanceOptimizer.getMetrics();
    if (metrics) {
      performanceOptimizer.reportWebVitals(metrics);
    }
  }, []);

  const trackLongTasks = useCallback(() => {
    if (typeof window === 'undefined') return;

    const observer = performanceOptimizer.monitorLongTasks((entries) => {
      entries.forEach((entry) => {
        console.log('Long task detected:', entry.duration);
      });
    });

    if (observer) {
      observerRef.current = observer;
    }
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
    const observer = performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
      entries.forEach((entry: PerformanceEntry) => {
        console.log('Long task detected:', entry.duration);
      });
    });

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
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
    performanceOptimizer.cacheStaticAssets();
    
    // Lazy load images
    performanceOptimizer.lazyLoadImages();
  }, []);

  useEffect(() => {
    optimize();
  }, [optimize]);

  return { optimize };
};
