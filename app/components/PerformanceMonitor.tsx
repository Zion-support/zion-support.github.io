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

    // Send metrics to analytics (if needed)
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          custom_map: {
            cls: metrics.cls,
            inp: metrics.inp,
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            ttfb: metrics.ttfb,
          },
        });
      }
    };

    // Send metrics after a delay to ensure all are collected
    const timeoutId = setTimeout(sendMetrics, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
