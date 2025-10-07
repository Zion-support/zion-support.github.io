'use client';

import React, { useEffect, useState, memo } from 'react';

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

const PerformanceMonitor: React.FC = memo(() => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !('performance' in window)) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

      // Measure CLS (Cumulative Layout Shift)
      let cumulativeLayoutShift = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift' && !(entry as LayoutShift).hadRecentInput) {
              cumulativeLayoutShift += (entry as LayoutShift).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }

      // Measure FID (First Input Delay)
      let firstInputDelay = 0;
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              firstInputDelay = (entry as PerformanceEventTiming).processingStart - entry.startTime;
            }
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }

      const performanceData: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift,
        firstInputDelay
      };

      setMetrics(performanceData);

      // Log performance data in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', performanceData);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!metrics || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
      >
        {isVisible ? 'Hide' : 'Show'} Perf
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64">
          <h3 className="font-semibold text-gray-900 mb-2">Performance Metrics</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className="font-mono">{Math.round(metrics.loadTime)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">DOM Ready:</span>
              <span className="font-mono">{Math.round(metrics.domContentLoaded)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">FCP:</span>
              <span className="font-mono">{Math.round(metrics.firstContentfulPaint)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">LCP:</span>
              <span className="font-mono">{Math.round(metrics.largestContentfulPaint)}ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">CLS:</span>
              <span className="font-mono">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">FID:</span>
              <span className="font-mono">{Math.round(metrics.firstInputDelay)}ms</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;