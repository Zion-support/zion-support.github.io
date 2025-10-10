import { useEffect, useCallback } from 'react';

export const usePerformanceMonitor = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstByte: navigation.responseStart - navigation.requestStart,
          domInteractive: navigation.domInteractive - navigation.navigationStart
        };
        
        return metrics;
      }
    }
    return null;
  }, []);

  useEffect(() => {
    const metrics = measurePerformance();
    if (metrics) {
      console.log('Performance metrics:', metrics);
    }
  }, [measurePerformance]);

  return { measurePerformance };
};
