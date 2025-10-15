import { useEffect, useCallback, useMemo } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface UsePerformanceOptimizationReturn {
  metrics: PerformanceMetrics | null;
  isOptimized: boolean;
  recommendations: string[];
}

export const usePerformanceOptimization = (): UsePerformanceOptimizationReturn => {
  const metrics = useMemo(() => {
    if (typeof window === 'undefined' || !window.performance) {
      return null;
    }

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint: 0, // Will be updated by web-vitals
      largestContentfulPaint: 0, // Will be updated by web-vitals
      cumulativeLayoutShift: 0, // Will be updated by web-vitals
      firstInputDelay: 0, // Will be updated by web-vitals
    };
  }, []);

  const recommendations = useMemo(() => {
    const recs: string[] = [];
    
    if (metrics) {
      if (metrics.loadTime > 3000) {
        recs.push('Consider optimizing images and reducing bundle size');
      }
      if (metrics.firstContentfulPaint > 1800) {
        recs.push('Optimize critical rendering path and reduce render-blocking resources');
      }
      if (metrics.cumulativeLayoutShift > 0.1) {
        recs.push('Add size attributes to images and avoid dynamic content insertion');
      }
    }
    
    return recs;
  }, [metrics]);

  const isOptimized = useMemo(() => {
    if (!metrics) return false;
    return (
      metrics.loadTime <= 3000 &&
      metrics.firstContentfulPaint <= 1800 &&
      metrics.cumulativeLayoutShift <= 0.1
    );
  }, [metrics]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    // Measure page load performance
    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] Page Load Time: ${loadTime}ms`);
        console.log(`[Performance] DOM Content Loaded: ${domContentLoaded}ms`);
      }
    }
  }, []);

  useEffect(() => {
    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [measurePerformance]);

  return {
    metrics,
    isOptimized,
    recommendations
  };
};