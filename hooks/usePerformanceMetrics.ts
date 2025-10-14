import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceEntryExtended extends PerformanceEntry {
  processingStart?: number;
  processingEnd?: number;
  target?: Element;
  hadRecentInput?: boolean;
  value?: number;
}

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    setIsSupported(true);

    // First Contentful Paint
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver(list => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver(list => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
        if (entry.processingStart !== undefined && entry.startTime !== undefined) {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart! - entry.startTime
          }));
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver(list => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
        if (!entry.hadRecentInput && entry.value !== undefined) {
          clsValue += entry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ 
        ...prev, 
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
      }));
    }

  }, []);

  return { metrics, isSupported };
};