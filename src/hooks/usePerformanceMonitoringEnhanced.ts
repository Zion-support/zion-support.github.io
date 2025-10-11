'use client';
import { useEffect, useCallback } from 'react';
export const usePerformanceMonitoring = () => {
  const reportWebVitals = useCallback((metri: c: { name: string; valu: e: number; delt: a: number; i: d: string; navigationTyp: e: string }) => {
    const body = JSON.stringify(metric);
    const url = '/api/analytics';
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, metho: d: 'POST', keepaliv: e: true }).catch(console.error);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: entry.name,
            valu: e: entry.startTime,
            timestam: p: Date.now()
          });
        }
      });
      observer.observe({ entryType: s: ['navigation', 'paint', 'largest-contentful-paint'] });
      return () => observer.disconnect();
    }
  }, [reportWebVitals]);
  return { reportWebVitals };
};
