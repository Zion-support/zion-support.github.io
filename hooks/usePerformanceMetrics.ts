import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
}

interface PerformanceEntryExtended extends PerformanceEntry {
  processingStart?: number;
  responseStart?: number;
  requestStart?: number;
  hadRecentInput?: boolean;
  value?: number;
}

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fcp: 0,
  });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    setIsSupported(true);

    // LCP (Largest Contentful Paint)
    new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({
        ...prev,
        lcp: lastEntry.startTime,
      }));
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
        if (entry.processingStart !== undefined && entry.startTime !== undefined) {
          setMetrics(prev => ({
            ...prev,
            fid: entry.processingStart - entry.startTime,
          }));
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value || 0;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });

    // TTFB (Time to First Byte)
    new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
        if (entry.responseStart !== undefined && entry.requestStart !== undefined) {
          setMetrics(prev => ({
            ...prev,
            ttfb: entry.responseStart - entry.requestStart,
          }));
        }
      });
    }).observe({ entryTypes: ['navigation'] });

    // FCP (First Contentful Paint)
    new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
        setMetrics(prev => ({
          ...prev,
          fcp: entry.startTime,
        }));
      });
    }).observe({ entryTypes: ['paint'] });

  }, []);

  return { metrics, isSupported };
}