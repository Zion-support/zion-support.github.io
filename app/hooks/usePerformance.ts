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
      
      // Measure performance metrics
      const measurePerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        setMetrics({
          loadTime,
          firstContentfulPaint,
          largestContentfulPaint: 0, // Would need to be measured with LCP API
          cumulativeLayoutShift: 0, // Would need to be measured with CLS API
          firstInputDelay: 0 // Would need to be measured with FID API
        });
      };

      // Wait for page load
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }
      
      return undefined;
    }
  }, []);

  return {
    metrics,
    isSupported
  };
};

export default usePerformance;