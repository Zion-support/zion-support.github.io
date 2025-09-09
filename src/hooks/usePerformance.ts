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

      const bundleSize = performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('.js'))
        .reduce((acc, entry) => acc + entry.decodedBodySize, 0);

      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const isSlowConnection = connection ? (connection.effectiveType === '2g' || connection.effectiveType === '3g') : false;

      setPerformanceData({
        loadTime: parseFloat(loadTime.toFixed(2)),
        renderTime: parseFloat(renderTime.toFixed(2)),
        memoryUsage: (window.performance as any).memory ? (window.performance as any).memory.usedJSHeapSize / (1024 * 1024) : undefined,
        bundleSize: parseFloat((bundleSize / (1024 * 1024)).toFixed(2)),
        isSlowConnection,
      });
    } catch (error) {
      console.error("Failed to measure performance:", error);
      setPerformanceData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const optimizeForSlowConnection = useCallback(() => {
    if (performanceData?.isSlowConnection) {
      console.log("Optimizing for slow connection...");
      // Implement specific optimizations here, e.g.,
      // - Reduce image quality
      // - Disable non-essential animations
      // - Load fewer items initially
    }
  }, [performanceData]);

  useEffect(() => {
    measurePerformance();
    const interval = setInterval(measurePerformance, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, [measurePerformance]);

  return {
    performanceData,
    isLoading,
    measurePerformance,
    optimizeForSlowConnection
  };
};