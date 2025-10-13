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

  useEffect(() => {
    // Don't render anything in production
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const measurePerformance = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const fcpEntry = performance.getEntriesByType('paint').find(
          (entry) => entry.name === 'first-contentful-paint'
        );
        const lcpEntry = performance.getEntriesByType('largest-contentful-paint').pop();
        const fidEntry = performance.getEntriesByType('first-input').pop();
        const clsEntry = performance.getEntriesByType('layout-shift').pop();

        setMetrics({
          fcp: fcpEntry ? Math.round(fcpEntry.startTime) : undefined,
          lcp: lcpEntry ? Math.round(lcpEntry.startTime) : undefined,
          fid: fidEntry ? Math.round(fidEntry.processingStart - fidEntry.startTime) : undefined,
          cls: clsEntry ? Math.round(clsEntry.value * 1000) / 1000 : undefined,
          ttfb: performance.timing ? Math.round(performance.timing.responseStart - performance.timing.navigationStart) : undefined,
        });
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measurePerformance);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1 text-xs">
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp < 1800 ? 'text-green-400' : metrics.fcp < 3000 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.fcp}ms
            </span>
          </div>
        )}
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp < 2500 ? 'text-green-400' : metrics.lcp < 4000 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.lcp}ms
            </span>
          </div>
        )}
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid < 100 ? 'text-green-400' : metrics.fid < 300 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.fid}ms
            </span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls < 0.1 ? 'text-green-400' : metrics.cls < 0.25 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.cls}
            </span>
          </div>
        )}
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb < 800 ? 'text-green-400' : metrics.ttfb < 1800 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.ttfb}ms
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;