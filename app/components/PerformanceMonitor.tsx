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
    // Only run in browser
    if (typeof window === 'undefined') return;

    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));
    };

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

    // Get performance metrics
    const getPerformanceMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint');
      
      setMetrics(prev => ({
        ...prev,
        fcp: fcp ? fcp.startTime : null,
        lcp: lcp.length > 0 ? lcp[lcp.length - 1].startTime : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null,
        loadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : null
      }));
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      getPerformanceMetrics();
    } else {
      window.addEventListener('load', getPerformanceMetrics);
    }

    // Set up web vitals monitoring
    onCLS(handleMetric);
    onINP(handleMetric);
    onFCP(handleMetric);
    onLCP(handleMetric);
    onTTFB(handleMetric);

    return () => {
      window.removeEventListener('load', getPerformanceMetrics);
    };
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (!value) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">
          <h3 className="font-semibold text-gray-900 mb-3">Performance Metrics</h3>
          
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
              <span>CLS:</span>
              <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>INP:</span>
              <span className={getScoreColor(metrics.inp, { good: 200, poor: 500 })}>
                {metrics.inp ? `${Math.round(metrics.inp)}ms` : 'N/A'}
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
              <span className={getScoreColor(metrics.loadTime, { good: 3000, poor: 5000 })}>
                {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
              </span>
            </div>
          </div>
          
          <div className="mt-3 pt-2 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <div>Good: Green | Needs Improvement: Yellow | Poor: Red</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
