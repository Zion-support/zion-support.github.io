import React, { useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

const WebVitalsTracker: React.FC = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: WebVitalsData) => {
      // Send to Google Analytics or other analytics service
      console.log('Web Vitals:', metric);
    };

    const getCLS = (onPerfEntry: (metric: WebVitalsData) => void) => {
      let clsValue = 0;
      let clsEntries: PerformanceEntry[] = [];
      let sessionValue = 0;
      let sessionEntries: PerformanceEntry[] = [];

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            const firstSessionEntry = sessionEntries[0];
            const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

            if (sessionValue && entry.startTime - (lastSessionEntry as any).startTime < 1000 && entry.startTime - (firstSessionEntry as any).startTime < 5000) {
              sessionValue += (entry as any).value;
              sessionEntries.push(entry);
            } else {
              sessionValue = (entry as any).value;
              sessionEntries = [entry];
            }

            if (sessionValue > clsValue) {
              clsValue = sessionValue;
              clsEntries = [...sessionEntries];
              onPerfEntry({
                name: 'CLS',
                value: clsValue,
                delta: clsValue,
                id: 'cls',
                navigationType: 'navigate'
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    };

    const getFID = (onPerfEntry: (metric: WebVitalsData) => void) => {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          onPerfEntry({
            name: 'FID',
            value: (entry as any).processingStart - entry.startTime,
            delta: (entry as any).processingStart - entry.startTime,
            id: 'fid',
            navigationType: 'navigate'
          });
        }
      }).observe({ entryTypes: ['first-input'] });
    };

    const getFCP = (onPerfEntry: (metric: WebVitalsData) => void) => {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            onPerfEntry({
              name: 'FCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: 'fcp',
              navigationType: 'navigate'
            });
          }
        }
      }).observe({ entryTypes: ['paint'] });
    };

    const getLCP = (onPerfEntry: (metric: WebVitalsData) => void) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        onPerfEntry({
          name: 'LCP',
          value: lastEntry.startTime,
          delta: lastEntry.startTime,
          id: 'lcp',
          navigationType: 'navigate'
        });
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    };

    const getTTFB = (onPerfEntry: (metric: WebVitalsData) => void) => {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            onPerfEntry({
              name: 'TTFB',
              value: (entry as any).responseStart - entry.startTime,
              delta: (entry as any).responseStart - entry.startTime,
              id: 'ttfb',
              navigationType: 'navigate'
            });
          }
        }
      }).observe({ entryTypes: ['navigation'] });
    };

    // Initialize web vitals tracking
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }, []);

  return null;
};

export default WebVitalsTracker;