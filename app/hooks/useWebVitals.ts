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
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            onPerfEntry({
              name: 'FCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: entry.name,
              navigationType: 'navigate'
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['paint'] });
      
      return () => observer.disconnect();
    }
  }, [onPerfEntry]);
};

export const sendToGoogleAnalytics = (metric: WebVitalsMetric) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
};