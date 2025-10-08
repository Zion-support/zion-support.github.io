import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) {
        return;
      }

      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = window.performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
      };

      setMetrics(metrics);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50 max-w-sm">
      <h3 className="text-lg font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1 text-sm">
        <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
        <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
        <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
        <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
        <div>FID: {metrics.firstInputDelay.toFixed(2)}ms</div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="mt-2 text-xs text-gray-500 hover:text-gray-700"
      >
        Close (Ctrl+Shift+P)
      </button>
    </div>
  );
};

export default PerformanceMonitor;
