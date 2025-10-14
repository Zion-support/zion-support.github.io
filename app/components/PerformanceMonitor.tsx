import React, { useState, useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  inp: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    inp: null,
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
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
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
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, loadTime }));
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 p-4 rounded-lg shadow-lg text-white text-sm z-50 max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>INP: {metrics.inp ? `${metrics.inp.toFixed(2)}ms` : 'Loading...'}</div>
        <div>CLS: {metrics.cls ? `${metrics.cls.toFixed(4)}` : 'Loading...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}</div>
        <div>Load Time: {metrics.loadTime ? `${metrics.loadTime}ms` : 'Loading...'}</div>
      </div>
      
      <div className="space-y-2 text-xs mt-3 pt-2 border-t border-slate-600">
        <div className="flex justify-between">
          <span>CLS:</span>
          <div className="flex flex-col items-end">
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <div className="flex flex-col items-end">
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {getScoreText(metrics.lcp, { good: 2500, poor: 4000 })}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <div className="flex flex-col items-end">
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {getScoreText(metrics.fcp, { good: 1800, poor: 3000 })}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-600">
        <div className="text-xs text-gray-400">
          Web Vitals monitoring active
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;