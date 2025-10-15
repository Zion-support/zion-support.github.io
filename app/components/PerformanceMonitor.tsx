import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  loadTime?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Measure performance metrics
    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = {};

      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                newMetrics.fcp = entry.startTime;
              }
            });
          });
          observer.observe({ entryTypes: ['paint'] });
        } catch (error) {
          }
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            newMetrics.lcp = lastEntry.startTime;
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          }
      }

      // Time to First Byte
      if (performance.timing) {
        newMetrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      }

      // Page load time
      if (performance.timing) {
        newMetrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      }

      setMetrics(newMetrics);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {metrics.fcp && (
          <div>FCP: {Math.round(metrics.fcp)}ms</div>
        )}
        {metrics.lcp && (
          <div>LCP: {Math.round(metrics.lcp)}ms</div>
        )}
        {metrics.ttfb && (
          <div>TTFB: {Math.round(metrics.ttfb)}ms</div>
        )}
        {metrics.loadTime && (
          <div>Load: {Math.round(metrics.loadTime)}ms</div>
        )}
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-600 text-xs text-gray-400">
        Press F12 for more details
      </div>
    </div>
  );
};

export default PerformanceMonitor;
