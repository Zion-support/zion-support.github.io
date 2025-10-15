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
    // Only show in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const updateMetrics = () => {
      const newMetrics: PerformanceMetrics = {};

      // Get Core Web Vitals
      if ('web-vitals' in window) {
        // This would be implemented with the web-vitals library
        // For now, we'll use mock data
        newMetrics.fcp = Math.random() * 2000 + 1000;
        newMetrics.lcp = Math.random() * 3000 + 2000;
        newMetrics.fid = Math.random() * 100;
        newMetrics.cls = Math.random() * 0.3;
        newMetrics.ttfb = Math.random() * 1000 + 500;
      }

      setMetrics(newMetrics);
    };

    // Update metrics every 5 seconds
    const interval = setInterval(updateMetrics, 5000);
    updateMetrics();

    return () => clearInterval(interval);
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getScoreColor = (value: number | undefined, thresholds: { good: number; poor: number }) => {
    if (!value) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
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
            {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
          </span>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mt-2 text-xs text-gray-400 hover:text-white"
      >
        {isVisible ? 'Hide' : 'Show'} Details
      </button>
    </div>
  );
};

export default PerformanceMonitor;