import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (!('PerformanceObserver' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    // First Contentful Paint
    new PerformanceObserver(list => {
      const _entries = list.getEntries();
      const _fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver(list => {
      const _entries = list.getEntries();
      const _lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver(list => {
      const _entries = list.getEntries();
      entries.forEach(entry => {
        const _inputEntry = entry as PerformanceEventTiming;
        setMetrics(prev => ({
          ...prev,
          fid: inputEntry.processingStart - inputEntry.startTime,
        }));
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let _clsValue = 0;
    new PerformanceObserver(list => {
      const _entries = list.getEntries();
      entries.forEach(entry => {
        const layoutEntry = entry as PerformanceEntry & {
          hadRecentInput?: boolean;
          value?: number;
        };
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value || 0;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    new PerformanceObserver(list => {
      const _entries = list.getEntries();
      const ttfbEntry = entries.find(entry =>
        entry.name.includes('document')
      ) as PerformanceNavigationTiming;
      if (ttfbEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: ttfbEntry.responseStart - ttfbEntry.requestStart,
        }));
      }
    }).observe({ entryTypes: ['navigation'] });
  }, []);

  return { metrics, isSupported };
}
