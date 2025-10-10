'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => updateMetrics({ cls: metric.value }));
        getFID((metric) => updateMetrics({ fid: metric.value }));
        getFCP((metric) => updateMetrics({ fcp: metric.value }));
        getLCP((metric) => updateMetrics({ lcp: metric.value }));
        getTTFB((metric) => updateMetrics({ ttfb: metric.value }));
      });
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        {metrics.lcp && (
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        )}
        {metrics.fid && (
          <div>FID: {metrics.fid.toFixed(2)}ms</div>
        )}
        {metrics.cls && (
          <div>CLS: {metrics.cls.toFixed(4)}</div>
        )}
        {metrics.fcp && (
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        )}
        {metrics.ttfb && (
          <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;