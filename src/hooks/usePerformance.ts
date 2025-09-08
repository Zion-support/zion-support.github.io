import { useEffect, useState, useCallback } from 'react';

interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  bundleSize: number;
  isSlowConnection: boolean;
}

export const usePerformance = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const measurePerformance = useCallback(() => {
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Estimate bundle size
      const bundleSize = performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('.js'))
        .reduce((total, entry) => total + (entry.transferSize || 0), 0);

      // Check for slow connection
      const connection = (navigator as any).connection;
      const isSlowConnection = connection ? 
        connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' : false;

      setPerformanceData({
        loadTime,
        renderTime,
        memoryUsage: (performance as any).memory?.usedJSHeapSize,
        bundleSize,
        isSlowConnection
      });
    } catch (error) {
      console.error('Performance measurement failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const optimizeForSlowConnection = useCallback(() => {
    if (performanceData?.isSlowConnection) {
      // Implement optimizations for slow connections
      return {
        enableLazyLoading: true,
        reduceAnimations: true,
        compressImages: true,
        enableServiceWorker: true
      };
    }
    return null;
  }, [performanceData]);

  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  return {
    performanceData,
    isLoading,
    measurePerformance,
    optimizeForSlowConnection
  };
};