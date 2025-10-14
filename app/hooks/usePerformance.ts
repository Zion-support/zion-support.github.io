'use client';
import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if Performance API is supported
    if (typeof window !== 'undefined' && 'performance' in window) {
      setIsSupported(true);
      
      // Get performance metrics
      const getMetrics = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        
        const metrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? (lcp as PerformanceEntry & { startTime: number }).startTime : 0,
          cumulativeLayoutShift: 0, // Would need to be calculated separately
          firstInputDelay: 0 // Would need to be calculated separately
        };
        
        setMetrics(metrics);
      };

      // Wait for page to load
      if (document.readyState === 'complete') {
        getMetrics();
      } else {
        window.addEventListener('load', getMetrics);
        return () => window.removeEventListener('load', getMetrics);
      }
    }
  }, []);

  return {
    metrics,
    isSupported,
    isReady: metrics !== null
  };
};

export default usePerformance;