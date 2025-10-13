import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development or when debug mode is enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    const measurePerformance = () => {
      // Measure load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      
      // Get Web Vitals if available
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.name) {
            case 'first-contentful-paint':
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
              break;
            case 'largest-contentful-paint':
              setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
              break;
            case 'first-input':
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
              break;
            case 'layout-shift':
              if (!(entry as any).hadRecentInput) {
                setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
              }
              break;
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance Observer not supported');
      }

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measurePerformance);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMetricStatus = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Performance Metrics</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Load Time:</span>
            <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
              {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">FCP:</span>
            <span className={`font-mono ${metrics.fcp ? getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
              {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">LCP:</span>
            <span className={`font-mono ${metrics.lcp ? getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
              {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">FID:</span>
            <span className={`font-mono ${metrics.fid ? getMetricColor(metrics.fid, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
              {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">CLS:</span>
            <span className={`font-mono ${metrics.cls !== null ? getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 }) : 'text-gray-400'}`}>
              {metrics.cls !== null ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">TTFB:</span>
            <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 200, poor: 500 }) : 'text-gray-400'}`}>
              {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            Press Ctrl+Shift+P to toggle this panel
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;