import { useEffect, useCallback } from 'react';

export const usePerformanceMonitoring = () => {
  const _reportWebVitals = useCallback((metric: unknown) => {
    const body = JSON.stringify(metric);
    const url = '/api/analytics';

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: 'POST', keepalive: true }).catch(console.error);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          _reportWebVitals({
            name: entry.name,
            value: entry.startTime,
            timestamp: Date.now()
          });
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, [_reportWebVitals]);

  return { _reportWebVitals };
};
