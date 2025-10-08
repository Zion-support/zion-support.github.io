import React, { useEffect, useState } from 'react';

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      setMetrics({
        loadTime: perfData?.loadEventEnd - perfData?.fetchStart,
        domContentLoaded: perfData?.domContentLoadedEventEnd - perfData?.fetchStart,
      });
    }
  }, []);

  if (!metrics) return null;

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <p>Load Time: {metrics.loadTime}ms</p>
      <p>DOM Content Loaded: {metrics.domContentLoaded}ms</p>
    </div>
  );
};

export default PerformanceMonitor;
