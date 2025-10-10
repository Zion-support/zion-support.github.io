'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show in development or when performance monitoring is enabled
    const shouldMonitor = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('performance-monitoring') === 'true';

    if (!shouldMonitor) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => updateMetrics({ cls: metric.value }));
        getFID((metric) => updateMetrics({ fid: metric.value }));
        getFCP((metric) => updateMetrics({ fcp: metric.value }));
        getLCP((metric) => updateMetrics({ lcp: metric.value }));
        getTTFB((metric) => updateMetrics({ ttfb: metric.value }));
      });
    }

    // Monitor performance with Performance Observer
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            updateMetrics({ lcp: entry.startTime });
          }
          if (entry.entryType === 'first-input') {
            updateMetrics({ fid: entry.processingStart - entry.startTime });
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      } catch (e) {
        // Fallback for older browsers
        console.warn('Performance Observer not supported');
      }
    }

    // Show monitor after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1 text-xs">
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
        )}
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid < 100 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.fid)}ms
            </span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
        )}
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb < 800 ? 'text-green-400' : 'text-red-400'}>
              {Math.round(metrics.ttfb)}ms
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;