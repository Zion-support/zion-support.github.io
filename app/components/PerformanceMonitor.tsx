import React, { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showInProduction = false }) => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      cls: null,
      inp: null,
      fcp: null,
      lcp: null,
      ttfb: null,
    };

    // Track Core Web Vitals
    onCLS((metric) => {
      metrics.cls = metric.value;
      console.log('CLS:', metric.value);
    });

    onINP((metric) => {
      metrics.inp = metric.value;
      console.log('INP:', metric.value);
    });

    onFCP((metric) => {
      metrics.fcp = metric.value;
      console.log('FCP:', metric.value);
    });

    onLCP((metric) => {
      metrics.lcp = metric.value;
      console.log('LCP:', metric.value);
    });

    onTTFB((metric) => {
      metrics.ttfb = metric.value;
      console.log('TTFB:', metric.value);
    });

    // Log performance metrics after page load
    const logMetrics = () => {
      console.log('Performance Metrics:', metrics);
      
      // Send to analytics service if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(metrics.lcp || 0),
          custom_map: {
            cls: metrics.cls,
            inp: metrics.inp,
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            ttfb: metrics.ttfb,
          }
        });
      }
    };

    // Log metrics after a delay to ensure all metrics are collected
    const timeoutId = setTimeout(logMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Only render in development or if explicitly enabled
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  return null; // This component doesn't render anything visible
};

export default PerformanceMonitor;