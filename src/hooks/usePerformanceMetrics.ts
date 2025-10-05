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
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const inputEntry = entry as any;
        setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart - inputEntry.startTime }));
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const layoutEntry = entry as any;
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const ttfbEntry = entries.find(entry => entry.name.includes('document'));
      if (ttfbEntry) {
        const navEntry = ttfbEntry as any;
        setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
      }
    }).observe({ entryTypes: ['navigation'] });

  }, []);

  return { metrics, isSupported };
}