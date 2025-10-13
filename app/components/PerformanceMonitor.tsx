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

    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));

      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    // Measure page load time
    if (typeof window !== 'undefined') {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    }
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-sm max-w-xs z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>INP: {metrics.inp ? `${metrics.inp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
        {metrics.loadTime && <div>Load: {metrics.loadTime}ms</div>}
      </div>
      
      <div className="space-y-2 text-xs">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span className="text-gray-300">FCP:</span>
            <span className={metrics.fcp < 1800 ? 'text-green-400' : metrics.fcp < 3000 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.fcp < 1800 ? 'Good' : metrics.fcp < 3000 ? 'Needs Improvement' : 'Poor'}
            </span>
          </div>
        )}
        {metrics.lcp && (
          <div className="flex justify-between">
            <span className="text-gray-300">LCP:</span>
            <span className={metrics.lcp < 2500 ? 'text-green-400' : metrics.lcp < 4000 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.lcp < 2500 ? 'Good' : metrics.lcp < 4000 ? 'Needs Improvement' : 'Poor'}
            </span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between">
            <span className="text-gray-300">CLS:</span>
            <span className={metrics.cls < 0.1 ? 'text-green-400' : metrics.cls < 0.25 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.cls < 0.1 ? 'Good' : metrics.cls < 0.25 ? 'Needs Improvement' : 'Poor'}
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-600 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;