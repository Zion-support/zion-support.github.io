import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    // Performance monitoring logic
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + entry.value }));
        } else if (entry.entryType === 'navigation') {
          setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-sm text-gray-600">First Contentful Paint:</span>
          <span className="ml-2 font-mono">
            {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Loading...'}
          </span>
        </div>
        <div>
          <span className="text-sm text-gray-600">Largest Contentful Paint:</span>
          <span className="ml-2 font-mono">
            {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Loading...'}
          </span>
        </div>
        <div>
          <span className="text-sm text-gray-600">First Input Delay:</span>
          <span className="ml-2 font-mono">
            {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Loading...'}
          </span>
        </div>
        <div>
          <span className="text-sm text-gray-600">Cumulative Layout Shift:</span>
          <span className="ml-2 font-mono">
            {metrics.cls ? metrics.cls.toFixed(4) : 'Loading...'}
          </span>
        </div>
        <div>
          <span className="text-sm text-gray-600">Time to First Byte:</span>
          <span className="ml-2 font-mono">
            {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Loading...'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
