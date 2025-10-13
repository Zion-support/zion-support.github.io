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

    // Track page load time
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({
          ...prev,
          loadTime
        }));
      });
    }
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-2">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span className="text-gray-300">FCP:</span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.lcp && (
          <div className="flex justify-between">
            <span className="text-gray-300">LCP:</span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.inp && (
          <div className="flex justify-between">
            <span className="text-gray-300">INP:</span>
            <span className={getScoreColor(metrics.inp, { good: 100, needsImprovement: 300 })}>
              {metrics.inp.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex justify-between">
            <span className="text-gray-300">CLS:</span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}

        {metrics.ttfb && (
          <div className="flex justify-between">
            <span className="text-gray-300">TTFB:</span>
            <span className={getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}

        {metrics.loadTime && (
          <div className="flex justify-between">
            <span className="text-gray-300">Load:</span>
            <span className={getScoreColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
              {metrics.loadTime.toFixed(0)}ms
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