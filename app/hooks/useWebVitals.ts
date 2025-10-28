
import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

export const useWebVitals = (onPerfEntry?: (metric: WebVitalsMetric) => void) => {
  useEffect(() => {
    if (onPerfEntry && typeof window !== 'undefined') {
      // Use the existing monitoring service instead of web-vitals
      // This avoids API compatibility issues
      // // console.log('Web Vitals monitoring initialized');
      
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            onPerfEntry({
              name: 'LCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: entry.name,
              navigationType: 'navigate'
            });
          } else if (entry.entryType === 'first-input') {
            onPerfEntry({
              name: 'FID',
              value: (entry as any).processingStart - entry.startTime,
              delta: (entry as any).processingStart - entry.startTime,
              id: entry.name,
              navigationType: 'navigate'
            });
          } else if (entry.entryType === 'layout-shift') {
            onPerfEntry({
              name: 'CLS',
              value: (entry as any).value,
              delta: (entry as any).value,
              id: entry.name,
              navigationType: 'navigate'
            });
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, [onPerfEntry]);
};