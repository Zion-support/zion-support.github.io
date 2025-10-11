import { useEffect, useState, useCallback } from 'react';

interface PerformanceData {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    // Measure load time
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

    // Measure Core Web Vitals
    let firstContentfulPaint = 0;
    let largestContentfulPaint = 0;
    let firstInputDelay = 0;
    let cumulativeLayoutShift = 0;

    // FCP
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      firstContentfulPaint = fcpEntry.startTime;
    }

    // LCP
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
    }

    // FID
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      firstInputDelay = (fidEntries[0] as any).processingStart - fidEntries[0].startTime;
    }

    // CLS
    const clsEntries = performance.getEntriesByType('layout-shift');
    cumulativeLayoutShift = clsEntries.reduce((cls, entry) => {
      return cls + ((entry as any).hadRecentInput ? 0 : (entry as any).value);
    }, 0);

    setPerformanceData({
      loadTime,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay,
      cumulativeLayoutShift
    });
  }, []);

  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  const startMonitoring = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log(`Performance entry: ${entry.name} - ${entry.startTime}ms`);
        });
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return {
    performanceData,
    isSupported,
    startMonitoring
  };
};