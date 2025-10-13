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
    // Only track metrics in development or when explicitly enabled
    const shouldTrack = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('show-performance-monitor') === 'true';
    
    if (!shouldTrack) return;

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

    // Log all metrics after a delay to allow them to be collected
    setTimeout(() => {
      console.log('Performance Metrics:', metrics);
    }, 5000);

  }, []);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;