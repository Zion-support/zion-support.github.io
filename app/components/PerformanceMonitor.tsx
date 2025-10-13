import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Measure page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Web Vitals measurements
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });

  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono max-w-xs">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        {metrics.loadTime && (
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
        )}
        {metrics.fcp && (
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        )}
        {metrics.lcp && (
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        )}
        {metrics.cls && (
          <div>CLS: {metrics.cls.toFixed(4)}</div>
        )}
        {metrics.inp && (
          <div>INP: {metrics.inp.toFixed(2)}ms</div>
        )}
        {metrics.ttfb && (
          <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;