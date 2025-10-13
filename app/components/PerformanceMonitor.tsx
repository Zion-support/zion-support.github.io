import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      cls: null,
      inp: null,
      fcp: null,
      lcp: null,
      ttfb: null,
    };

    const sendMetrics = () => {
      // Only send if we have at least one metric
      const hasMetrics = Object.values(metrics).some(value => value !== null);
      
      if (hasMetrics) {
        // In a real application, you would send these metrics to your analytics service
        console.log('Performance Metrics:', metrics);
        
        // Example: Send to analytics service
        // analytics.track('performance_metrics', metrics);
      }
    };

    // Collect Core Web Vitals
    onCLS((metric) => {
      metrics.cls = metric.value;
    });

    onINP((metric) => {
      metrics.inp = metric.value;
    });

    onFCP((metric) => {
      metrics.fcp = metric.value;
    });

    onLCP((metric) => {
      metrics.lcp = metric.value;
    });

    onTTFB((metric) => {
      metrics.ttfb = metric.value;
    });

    // Send metrics after a delay to ensure all are collected
    const timeoutId = setTimeout(sendMetrics, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;