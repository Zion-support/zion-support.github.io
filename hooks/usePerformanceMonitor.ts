import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Get LCP if available
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const largestContentfulPaint = lcpEntries[lcpEntries.length - 1]?.startTime || 0;
      
      // Get FID if available
      const fidEntries = performance.getEntriesByType('first-input');
      const firstInputDelay = fidEntries[0]?.processingStart ? 
        fidEntries[0].processingStart - fidEntries[0].startTime : 0;
      
      // Get CLS if available
      const clsEntries = performance.getEntriesByType('layout-shift');
      const cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
        return sum + (entry as any).value;
      }, 0);

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return { metrics, isSupported };
};

export default usePerformanceMonitor;