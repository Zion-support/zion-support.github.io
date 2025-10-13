import React, { useState, useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('show-performance-monitor') === 'true';

    if (!shouldShow) return;

    setIsVisible(true);

    // Measure Core Web Vitals
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 text-white text-xs font-mono z-50">
      <div className="mb-2 font-semibold text-cyan-400">Performance Metrics</div>
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