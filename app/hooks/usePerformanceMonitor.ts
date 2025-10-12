import { useState, useEffect } from 'react';

interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        setPerformanceData(prev => ({
          ...prev,
          loadTime,
          renderTime: performance.now(),
          memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
          networkLatency: navigation.responseEnd - navigation.requestStart,
        }));
      }
    };

    measurePerformance();
  }, []);

  return { performanceData };
};