import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if Performance Observer is supported
    if (!('PerformanceObserver' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
            firstContentfulPaint: prev?.firstContentfulPaint || 0,
            largestContentfulPaint: prev?.largestContentfulPaint || 0,
            firstInputDelay: prev?.firstInputDelay || 0,
            cumulativeLayoutShift: prev?.cumulativeLayoutShift || 0
          }));
        }
        if (entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry.name === 'first-contentful-paint') {
            setMetrics(prev => ({
              loadTime: prev?.loadTime || 0,
              firstContentfulPaint: paintEntry.startTime,
              largestContentfulPaint: prev?.largestContentfulPaint || 0,
              firstInputDelay: prev?.firstInputDelay || 0,
              cumulativeLayoutShift: prev?.cumulativeLayoutShift || 0
            }));
          }
        }
        if (entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as PerformanceEntry;
          setMetrics(prev => ({
            loadTime: prev?.loadTime || 0,
            firstContentfulPaint: prev?.firstContentfulPaint || 0,
            largestContentfulPaint: lcpEntry.startTime,
            firstInputDelay: prev?.firstInputDelay || 0,
            cumulativeLayoutShift: prev?.cumulativeLayoutShift || 0
          }));
        }
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({
            loadTime: prev?.loadTime || 0,
            firstContentfulPaint: prev?.firstContentfulPaint || 0,
            largestContentfulPaint: prev?.largestContentfulPaint || 0,
            firstInputDelay: fidEntry.processingStart - fidEntry.startTime,
            cumulativeLayoutShift: prev?.cumulativeLayoutShift || 0
          }));
        }
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number };
          setMetrics(prev => ({
            loadTime: prev?.loadTime || 0,
            firstContentfulPaint: prev?.firstContentfulPaint || 0,
            largestContentfulPaint: prev?.largestContentfulPaint || 0,
            firstInputDelay: prev?.firstInputDelay || 0,
            cumulativeLayoutShift: (prev?.cumulativeLayoutShift || 0) + clsEntry.value
          }));
        }
      });
    });

    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not fully supported:', error);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { metrics, isSupported };
}