import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const newMetrics: Partial<PerformanceMetrics> = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      };

      // Get paint metrics
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-paint') {
          newMetrics.firstPaint = entry.startTime;
        } else if (entry.name === 'first-contentful-paint') {
          newMetrics.firstContentfulPaint = entry.startTime;
        }
      });

      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        newMetrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // Get CLS
      const clsEntries = performance.getEntriesByType('layout-shift');
      let cls = 0;
      clsEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
      newMetrics.cumulativeLayoutShift = cls;

      setMetrics(newMetrics);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show performance panel in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible || process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white text-xs font-mono max-w-xs z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-cyan-400">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {metrics.loadTime && (
          <div>Load Time: <span className="text-green-400">{metrics.loadTime.toFixed(2)}ms</span></div>
        )}
        {metrics.firstPaint && (
          <div>First Paint: <span className="text-green-400">{metrics.firstPaint.toFixed(2)}ms</span></div>
        )}
        {metrics.firstContentfulPaint && (
          <div>FCP: <span className="text-green-400">{metrics.firstContentfulPaint.toFixed(2)}ms</span></div>
        )}
        {metrics.largestContentfulPaint && (
          <div>LCP: <span className="text-green-400">{metrics.largestContentfulPaint.toFixed(2)}ms</span></div>
        )}
        {metrics.cumulativeLayoutShift !== undefined && (
          <div>CLS: <span className="text-green-400">{metrics.cumulativeLayoutShift.toFixed(4)}</span></div>
        )}
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-600">
        <div className="text-gray-400 text-xs">
          Press F12 for full metrics
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
