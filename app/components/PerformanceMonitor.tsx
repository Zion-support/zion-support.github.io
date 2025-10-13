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

  const [isVisible, setIsVisible] = useState(false);

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
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, loadTime }));
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const getScore = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
        title="Performance Monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-xl border border-slate-600 z-50 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-sm">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-sm"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>INP:</span>
          <span className={getScoreColor(metrics.inp, { good: 200, poor: 500 })}>
            {metrics.inp ? `${Math.round(metrics.inp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-slate-600">
        <div className="text-xs text-gray-400">
          <div>Good: Green | Needs Improvement: Yellow | Poor: Red</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;