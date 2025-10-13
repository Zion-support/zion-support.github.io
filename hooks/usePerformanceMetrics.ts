import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
<<<<<<< HEAD
=======
  fmp?: number;
  tti?: number;
  tbt?: number;
}

interface PerformanceEntryExtended extends PerformanceEntry {
  processingStart?: number;
  hadRecentInput?: boolean;
  value?: number;
  responseStart?: number;
  requestStart?: number;
>>>>>>> cursor/fix-errors-and-merge-to-main-bca9
}

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
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
<<<<<<< HEAD
        const inputEntry = entry as any;
        if (inputEntry.processingStart && inputEntry.startTime) {
          setMetrics(prev => ({ 
            ...prev, 
            fid: inputEntry.processingStart - inputEntry.startTime 
=======
        if (entry.processingStart !== undefined && entry.startTime !== undefined) {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart! - entry.startTime 
>>>>>>> cursor/fix-errors-and-merge-to-main-bca9
          }));
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver(list => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
<<<<<<< HEAD
        const layoutEntry = entry as any;
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value;
=======
        if (!entry.hadRecentInput) {
          clsValue += entry.value || 0;
>>>>>>> cursor/fix-errors-and-merge-to-main-bca9
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    new PerformanceObserver(list => {
      const entries = list.getEntries() as PerformanceEntryExtended[];
      entries.forEach(entry => {
<<<<<<< HEAD
        const navEntry = entry as any;
        if (navEntry.responseStart && navEntry.requestStart) {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: navEntry.responseStart - navEntry.requestStart 
=======
        if (entry.responseStart !== undefined && entry.requestStart !== undefined) {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: entry.responseStart! - entry.requestStart! 
>>>>>>> cursor/fix-errors-and-merge-to-main-bca9
          }));
        }
      });
    }).observe({ entryTypes: ['navigation'] });
  }, []);

  return { metrics, isSupported };
}
