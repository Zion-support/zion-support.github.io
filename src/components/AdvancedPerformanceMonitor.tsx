import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

export const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + entry.value }));
        } else if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });

    return () => observer.disconnect();
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-800">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-2 text-xs">
          {metrics.lcp && (
            <div className="flex justify-between">
              <span className="text-gray-600">LCP:</span>
              <span className={metrics.lcp < 2500 ? 'text-green-600' : 'text-red-600'}>
                {metrics.lcp.toFixed(0)}ms
              </span>
            </div>
          )}
          {metrics.fid && (
            <div className="flex justify-between">
              <span className="text-gray-600">FID:</span>
              <span className={metrics.fid < 100 ? 'text-green-600' : 'text-red-600'}>
                {metrics.fid.toFixed(0)}ms
              </span>
            </div>
          )}
          {metrics.cls && (
            <div className="flex justify-between">
              <span className="text-gray-600">CLS:</span>
              <span className={metrics.cls < 0.1 ? 'text-green-600' : 'text-red-600'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
          )}
          {metrics.fcp && (
            <div className="flex justify-between">
              <span className="text-gray-600">FCP:</span>
              <span className={metrics.fcp < 1800 ? 'text-green-600' : 'text-red-600'}>
                {metrics.fcp.toFixed(0)}ms
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;