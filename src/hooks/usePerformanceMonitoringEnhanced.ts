'use client';
import { useEffect, useCallback } from 'react';
export const usePerformanceMonitoring = () => {
  const reportWebVitals = useCallback((metric: any) => {
    const body = JSON.stringify(metric);
    const url = '/api/analytics';
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
<<<<<<< HEAD
      fetch(url, { body, method: 'POST', keepalive: true }).catch(console.error);
=======
      fetch(url, { body: body, method: 'POST', keepalive: true }).catch(console.error);
>>>>>>> cursor/fix-errors-and-merge-to-main-f2a4
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: entry.name,
            value: entry.startTime,
            timestamp: Date.now()
          });
        }
      });
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      return () => observer.disconnect();
    }
  }, [reportWebVitals]);
  return { reportWebVitals };
};
