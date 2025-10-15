import React, { useState, useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  loadTime: number;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: 0,
    fcp: 0,
    lcp: 0,
    ttfb: 0,
    loadTime: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    const measurePerformance = () => {
      const newMetrics = { ...metrics };

      // Core Web Vitals
      onCLS((metric) => {
        newMetrics.cls = metric.value;
      });


      onFCP((metric) => {
        newMetrics.fcp = metric.value;
      });

      onLCP((metric) => {
        newMetrics.lcp = metric.value;
      });

      onTTFB((metric) => {
        newMetrics.ttfb = metric.value;
      });

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

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Open performance monitor"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-gray-800 text-white rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close performance monitor"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={metrics.cls > 0.1 ? 'text-red-400' : 'text-green-400'}>
            {metrics.cls.toFixed(3)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={metrics.fcp > 1800 ? 'text-red-400' : 'text-green-400'}>
            {metrics.fcp.toFixed(1)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={metrics.lcp > 2500 ? 'text-red-400' : 'text-green-400'}>
            {metrics.lcp.toFixed(1)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={metrics.ttfb > 600 ? 'text-red-400' : 'text-green-400'}>
            {metrics.ttfb.toFixed(1)}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={metrics.loadTime > 3000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-slate-600 text-xs text-gray-400">
        Press F12 for more details
      </div>
    </div>
  );
};

export default PerformanceMonitor;