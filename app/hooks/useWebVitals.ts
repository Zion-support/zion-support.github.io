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
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              onPerfEntry({
                name: 'FCP',
                value: entry.startTime,
                delta: entry.startTime,
                id: 'fcp',
                navigationType: 'navigate',
              });
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            onPerfEntry({
              name: 'LCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: 'lcp',
              navigationType: 'navigate',
            });
          } else if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            onPerfEntry({
              name: 'FID',
              value: fid,
              delta: fid,
              id: 'fid',
              navigationType: 'navigate',
            });
          } else if (entry.entryType === 'layout-shift') {
            const cls = (entry as any).value;
            onPerfEntry({
              name: 'CLS',
              value: cls,
              delta: cls,
              id: 'cls',
              navigationType: 'navigate',
            });
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, [onPerfEntry]);
};