'use client';
import { useState, useEffect } from 'react';

export const usePerformance = () => {
  const [performanceData, setPerformanceData] = useState<{
    loadTime: number;
    renderTime: number;
    memoryUsage: number;
  } | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        setPerformanceData({
          loadTime,
          renderTime: performance.now(),
          memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
        });
      }
    };

    measurePerformance();
  }, []);

  return performanceData;
};

export default usePerformance;