import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  const optimize = useCallback(() => {
    // Performance optimization logic
    console.log('[Performance] Optimizing...');
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Get performance metrics
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            setMetrics(prev => ({
              ...prev,
              [entry.name === 'first-contentful-paint' ? 'firstContentfulPaint' : 'loadTime']: entry.startTime,
            }));
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  return { metrics, optimize };
};