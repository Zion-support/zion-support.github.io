import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Measure Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      console.log('CLS:', metric);
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
      console.log('INP:', metric);
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      console.log('FCP:', metric);
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      console.log('LCP:', metric);
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      console.log('TTFB:', metric);
    });

    // Monitor performance in development
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance Entry:', entry);
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

      return () => observer.disconnect();
    }
  }, []);

  // Send metrics to analytics service in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const allMetricsCollected = Object.values(metrics).every(value => value !== null);
      
      if (allMetricsCollected) {
        // Here you would typically send metrics to your analytics service
        console.log('All performance metrics collected:', metrics);
      }
    }
  }, [metrics]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;