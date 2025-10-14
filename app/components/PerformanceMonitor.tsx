import React, { useEffect, useState } from 'react';
interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  useEffect(() => {
    const measurePerformance = () => {
      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigation.responseStart - navigation.requestStart,
          fcp: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          lcp: navigation.loadEventEnd - navigation.navigationStart
        }));
      }
      // Get CLS (Cumulative Layout Shift)
      if ('PerformanceObserver' in window) {
        try {
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS measurement not supported');
        }
      }
    };
    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);
  const getScoreColor = (value: number | undefined, thresholds: { good: number; poor: number }) => {
    if (value === undefined) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };
  const getScoreText = (value: number | undefined, thresholds: { good: number; poor: number }) => {
    if (value === undefined) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition-colors text-sm"
      >
        Performance
      </button>
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-slate-800 text-white p-4 rounded-lg shadow-lg min-w-64">
          <h3 className="font-semibold mb-3 text-sm">Performance Metrics</h3>
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
              <span>TTFB:</span>
              <span className={getScoreColor(metrics.ttfb, { good: 600, poor: 1500 })}>
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
              </span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-700">
            <div className="text-xs text-gray-400">
              {Object.values(metrics).some(v => v !== undefined) ? 'Development Mode' : 'Loading...'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PerformanceMonitor;