// Enhanced performance hook
import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

export const useEnhancedPerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      setMetrics({
        loadTime,
        renderTime: 0, // Would be measured in real implementation
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
      });
    }
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      measurePerformance();
    }
  }, [isMonitoring, measurePerformance]);

  const startMonitoring = () => setIsMonitoring(true);
  const stopMonitoring = () => setIsMonitoring(false);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    measurePerformance
  };
};

export default useEnhancedPerformance;