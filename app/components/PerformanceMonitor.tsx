import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loadTime: 0,
  });

  useEffect(() => {
    const measurePerformance = () => {
      const newMetrics = { ...metrics };

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
          ✕
        </button>
      </div>
      
      <div className="space-y-1">
        <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        <div>FID: {metrics.fid.toFixed(2)}ms</div>
        <div>CLS: {metrics.cls.toFixed(4)}</div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-600 text-xs text-gray-400">
        Press F12 for more details
      </div>
    </div>
  );
};

export default PerformanceMonitor;
