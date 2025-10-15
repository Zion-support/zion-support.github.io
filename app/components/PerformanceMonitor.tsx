import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = {
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
      };

      // Page load time
      if (performance.timing) {
        newMetrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      }

      // Web Vitals
      if ('web-vitals' in window) {
        // This would be implemented with the web-vitals library
        // For now, we'll use placeholder values
        newMetrics.firstContentfulPaint = 0;
        newMetrics.largestContentfulPaint = 0;
        newMetrics.firstInputDelay = 0;
        newMetrics.cumulativeLayoutShift = 0;
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

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
      setIsVisible(!isVisible);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-700">
      <h3 className="text-white font-semibold mb-3">Performance Metrics</h3>
      <div className="space-y-2 text-sm text-gray-300">
        <div>Load Time: {metrics.loadTime}ms</div>
        <div>FCP: {metrics.firstContentfulPaint}ms</div>
        <div>LCP: {metrics.largestContentfulPaint}ms</div>
        <div>FID: {metrics.firstInputDelay}ms</div>
        <div>CLS: {metrics.cumulativeLayoutShift}</div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="mt-3 text-xs text-gray-400 hover:text-white"
      >
        Close
      </button>
    </div>
  );
};

export default PerformanceMonitor;
