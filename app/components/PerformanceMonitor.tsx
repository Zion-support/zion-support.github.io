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
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        {metrics.cls !== null && (
          <div>CLS: {metrics.cls.toFixed(3)}</div>
        )}
        {metrics.inp !== null && (
          <div>INP: {metrics.inp.toFixed(1)}ms</div>
        )}
        {metrics.fcp !== null && (
          <div>FCP: {metrics.fcp.toFixed(1)}ms</div>
        )}
        {metrics.lcp !== null && (
          <div>LCP: {metrics.lcp.toFixed(1)}ms</div>
        )}
        {metrics.ttfb !== null && (
          <div>TTFB: {metrics.ttfb.toFixed(1)}ms</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;