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

    // Collect Core Web Vitals
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

    // Send metrics to analytics (if in production)
    if (process.env.NODE_ENV === 'production' || showInProduction) {
      // You can send these metrics to your analytics service
      console.log('Performance metrics collected:', metrics);
    }
  }, [showInProduction]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
