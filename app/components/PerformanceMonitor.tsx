import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    onCLS(console.log);
    onINP(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);

    // Monitor bundle loading performance
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', {
              domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
              loadComplete: entry.loadEventEnd - entry.loadEventStart,
              totalTime: entry.loadEventEnd - entry.navigationStart
            });
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, []);

  return null;
}