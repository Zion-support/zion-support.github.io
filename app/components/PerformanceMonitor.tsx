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
    // Only run in development or when debug flag is set
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    const updateMetric = (name: keyof PerformanceMetrics, value: number) => {
      setMetrics(prev => ({ ...prev, [name]: value }));
    };

    // Measure Core Web Vitals
    onCLS((metric) => updateMetric('cls', metric.value));
    onINP((metric) => updateMetric('inp', metric.value));
    onFCP((metric) => updateMetric('fcp', metric.value));
    onLCP((metric) => updateMetric('lcp', metric.value));
    onTTFB((metric) => updateMetric('ttfb', metric.value));

    // Log performance metrics to console
    const logMetrics = () => {
      console.group('🚀 Performance Metrics');
      console.log('CLS (Cumulative Layout Shift):', metrics.cls);
      console.log('INP (Interaction to Next Paint):', metrics.inp);
      console.log('FCP (First Contentful Paint):', metrics.fcp);
      console.log('LCP (Largest Contentful Paint):', metrics.lcp);
      console.log('TTFB (Time to First Byte):', metrics.ttfb);
      console.groupEnd();
    };

    // Log metrics when they change
    if (Object.values(metrics).some(value => value !== null)) {
      logMetrics();
    }
  }, [metrics]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production' && !localStorage.getItem('debug-performance')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">Performance Monitor</div>
      <div className="space-y-1">
        <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
        <div>INP: {metrics.inp?.toFixed(1) || 'N/A'}ms</div>
        <div>FCP: {metrics.fcp?.toFixed(1) || 'N/A'}ms</div>
        <div>LCP: {metrics.lcp?.toFixed(1) || 'N/A'}ms</div>
        <div>TTFB: {metrics.ttfb?.toFixed(1) || 'N/A'}ms</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
