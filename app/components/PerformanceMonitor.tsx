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
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Load web-vitals library dynamically
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // Measure Core Web Vitals
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          console.log('CLS:', metric);
        });

        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          console.log('FID:', metric);
        });

        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          console.log('FCP:', metric);
        });

        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          console.log('LCP:', metric);
        });

        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          console.log('TTFB:', metric);
        });
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    loadWebVitals();
  }, []);

  // Log metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs">
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