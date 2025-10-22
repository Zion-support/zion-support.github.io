import { useState, useEffect } from 'react';

interface PerformanceData {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
        const cls = performance.getEntriesByType('layout-shift')[0];
        const fid = performance.getEntriesByType('first-input')[0];

        setPerformanceData({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          cumulativeLayoutShift: cls ? (cls as PerformanceEntry & { value: number }).value : 0,
          firstInputDelay: fid ? (fid as PerformanceEntry & { processingStart: number }).processingStart - fid.startTime : 0,
        });
      } catch (error) {
        console.error('Error measuring performance:', error);
      }
    };

    const startMonitoring = () => {
      setIsMonitoring(true);
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }
    };

    startMonitoring();

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return { performanceData, isMonitoring };
};