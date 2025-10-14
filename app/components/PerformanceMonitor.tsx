import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  cls: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null
  });

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const updateMetrics = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : null,
          ttfb: navigation ? navigation.responseStart - navigation.requestStart : null
        }));
      }
    };

    // Update metrics on load
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  // Only render in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>Load Time: {metrics.loadTime ? `${metrics.loadTime.toFixed(2)}ms` : 'N/A'}</div>
      <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</div>
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A'}</div>
    </div>
  );
};

export default PerformanceMonitor;