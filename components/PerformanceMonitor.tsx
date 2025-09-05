import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp,
        largestContentfulPaint: lcp,
        firstInputDelay: 0, // Would need to measure with Performance Observer
        cumulativeLayoutShift: 0, // Would need to measure with Performance Observer
      };

      setMetrics(newMetrics);
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Performance</span>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-300 hover:text-white"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      {isVisible && (
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
          <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
          <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;