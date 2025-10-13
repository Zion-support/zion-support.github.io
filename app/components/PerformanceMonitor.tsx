import React, { useEffect, useState, ReactNode } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  children: ReactNode;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children, showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    const measurePerformance = () => {
      if (typeof window === 'undefined' || !('performance' in window)) {
        return;
      }

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcpEntry = performance.getEntriesByType('largest-contentful-paint').pop();
      
      const newMetrics: PerformanceMetrics = {
        fcp: fcpEntry ? fcpEntry.startTime : null,
        lcp: lcpEntry ? (lcpEntry as any).startTime : null,
        fid: null, // First Input Delay - would need specific measurement
        cls: null, // Cumulative Layout Shift - would need specific measurement
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null,
      };

      setMetrics(newMetrics);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Measure LCP after a delay to ensure it's captured
    const lcpTimeout = setTimeout(measurePerformance, 2000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearTimeout(lcpTimeout);
    };
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

  if (!showDetails || !metrics) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
        >
          Performance
        </button>
        
        {isVisible && (
          <div className="absolute bottom-12 right-0 bg-gray-900 text-white p-4 rounded-lg shadow-xl min-w-64">
            <h3 className="font-semibold mb-3">Performance Metrics</h3>
            <div className="space-y-2 text-sm">
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
                <span>TTFB:</span>
                <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
                  {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>FID:</span>
                <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
                  {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>CLS:</span>
                <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
                  {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                </span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <div className="text-xs text-gray-400">
                <div>FCP: First Contentful Paint</div>
                <div>LCP: Largest Contentful Paint</div>
                <div>TTFB: Time to First Byte</div>
                <div>FID: First Input Delay</div>
                <div>CLS: Cumulative Layout Shift</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PerformanceMonitor;