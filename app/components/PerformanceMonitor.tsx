'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceData {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  memory?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceData>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            setMetrics(prev => ({ ...prev, cls: metric.value }));
          });
          
          getFID((metric) => {
            setMetrics(prev => ({ ...prev, fid: metric.value }));
          });
          
          getFCP((metric) => {
            setMetrics(prev => ({ ...prev, fcp: metric.value }));
          });
          
          getLCP((metric) => {
            setMetrics(prev => ({ ...prev, lcp: metric.value }));
          });
          
          getTTFB((metric) => {
            setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          });
        });
      }
    };

    // Track memory usage
    const trackMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memory: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    trackWebVitals();
    trackMemory();

    // Update memory usage periodically
    const interval = setInterval(trackMemory, 5000);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
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
            <span className={metrics.lcp > 2.5 ? 'text-red-400' : 'text-green-400'}>
              {metrics.lcp.toFixed(2)}s
            </span>
          </div>
        )}
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid > 100 ? 'text-red-400' : 'text-green-400'}>
              {metrics.fid.toFixed(0)}ms
            </span>
          </div>
        )}
        {metrics.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp > 1.8 ? 'text-red-400' : 'text-green-400'}>
              {metrics.fcp.toFixed(2)}s
            </span>
          </div>
        )}
        {metrics.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}
        {metrics.memory && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={metrics.memory > 50 ? 'text-red-400' : 'text-green-400'}>
              {metrics.memory.toFixed(1)}MB
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