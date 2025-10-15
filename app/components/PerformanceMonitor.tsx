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
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    const updateMetric = (metric: string, value: number) => {
      setMetrics(prev => ({
        ...prev,
        [metric]: value
      }));
    };

    onCLS((metric) => updateMetric('cls', metric.value));
    onINP((metric) => updateMetric('inp', metric.value));
    onFCP((metric) => updateMetric('fcp', metric.value));
    onLCP((metric) => updateMetric('lcp', metric.value));
    onTTFB((metric) => updateMetric('ttfb', metric.value));
  }, []);

  // Only show in development or when debug mode is enabled
  if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>CLS: {metrics.cls?.toFixed(3) || 'N/A'}</div>
      <div>INP: {metrics.inp?.toFixed(0) || 'N/A'}ms</div>
      <div>FCP: {metrics.fcp?.toFixed(0) || 'N/A'}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(0) || 'N/A'}ms</div>
      <div>TTFB: {metrics.ttfb?.toFixed(0) || 'N/A'}ms</div>
    </div>
  );
};

export default PerformanceMonitor;
