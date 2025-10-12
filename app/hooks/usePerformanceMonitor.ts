import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number;
  FID: number;
  FCP: number;
  LCP: number;
  TTFB: number;
}

const usePerformanceMonitor = () => {
  useEffect(() => {
    const metrics: Partial<PerformanceMetrics> = {};

    // Measure Core Web Vitals
    getCLS((metric) => {
      metrics.CLS = metric.value;
      console.log('CLS:', metric.value);
    });

    getFID((metric) => {
      metrics.FID = metric.value;
      console.log('FID:', metric.value);
    });

    getFCP((metric) => {
      metrics.FCP = metric.value;
      console.log('FCP:', metric.value);
    });

    getLCP((metric) => {
      metrics.LCP = metric.value;
      console.log('LCP:', metric.value);
    });

    getTTFB((metric) => {
      metrics.TTFB = metric.value;
      console.log('TTFB:', metric.value);
    });

    // Monitor performance in development
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log('Performance Entry:', entry);
        });
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

      return () => observer.disconnect();
    }

    // Send metrics to analytics in production
    if (process.env.NODE_ENV === 'production') {
      const sendMetrics = () => {
        if (Object.keys(metrics).length === 5) {
          // Send to analytics service
          console.log('Sending performance metrics:', metrics);
          // Example: analytics.track('performance_metrics', metrics);
        }
      };

      // Send metrics after 5 seconds
      const timeout = setTimeout(sendMetrics, 5000);
      return () => clearTimeout(timeout);
    }
  }, []);
};

export default usePerformanceMonitor;