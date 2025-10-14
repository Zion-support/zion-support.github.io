'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      const renderTime = performance.now();
      
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage
      });
    };

    if (typeof window !== 'undefined') {
      measurePerformance();
    }
  }, []);

  return metrics;
};