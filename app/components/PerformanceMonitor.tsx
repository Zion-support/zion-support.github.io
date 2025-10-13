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
    // Only run in development or if explicitly enabled in production
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

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

    // Log performance metrics to console
    setTimeout(() => {
      console.group('🚀 Performance Metrics');
      console.log('First Contentful Paint (FCP):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A');
      console.log('Largest Contentful Paint (LCP):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A');
      console.log('First Input Delay (FID):', metrics.inp ? `${metrics.inp.toFixed(2)}ms` : 'N/A');
      console.log('Cumulative Layout Shift (CLS):', metrics.cls ? metrics.cls.toFixed(4) : 'N/A');
      console.log('Time to First Byte (TTFB):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A');
      console.groupEnd();
    }, 2000);

  }, [showInProduction]);

  return null;
};

export default PerformanceMonitor;
