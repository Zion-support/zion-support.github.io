import { useState, useEffect } from 'react';

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
            ...prev,
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
          }));
        }
        if (entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry.name === 'first-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              firstContentfulPaint: paintEntry.startTime,
            }));
          }
        }
        if (entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as PerformanceEntry;
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: lcpEntry.startTime,
          }));
        }
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({
            ...prev,
            firstInputDelay: fidEntry.processingStart - fidEntry.startTime,
          }));
        }
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number };
          setMetrics(prev => ({
            ...prev,
            cumulativeLayoutShift: (prev?.cumulativeLayoutShift || 0) + clsEntry.value,
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  return { metrics, isSupported };
}

export default usePerformanceMonitor;