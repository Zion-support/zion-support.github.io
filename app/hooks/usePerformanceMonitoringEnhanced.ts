import { useEffect, useCallback } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  timestamp: number;
}

interface UsePerformanceMonitoringEnhancedReturn {
  reportWebVitals: (metric: WebVitalsMetric) => void;
}

export const usePerformanceMonitoringEnhanced = (): UsePerformanceMonitoringEnhancedReturn => {
  const reportWebVitals = useCallback((metric: WebVitalsMetric) => {
    // Send to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        metric_name: metric.name,
        metric_value: metric.value,
        timestamp: metric.timestamp,
      });
    }

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      console.log('Web Vitals:', metric);
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
            timestamp: Date.now(),
          });
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, [reportWebVitals]);

  return { reportWebVitals };
};