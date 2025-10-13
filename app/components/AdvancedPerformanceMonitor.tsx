import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
  timeToFirstByte: number | null;
  memoryUsage: number | null;
  domContentLoaded: number | null;
  totalBlockingTime: number | null;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToFirstByte: null,
    memoryUsage: null,
    domContentLoaded: null,
    totalBlockingTime: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = { ...metrics };

      // Basic timing metrics
      if (performance.timing) {
        const timing = performance.timing;
        newMetrics.loadTime = timing.loadEventEnd - timing.navigationStart;
        newMetrics.timeToFirstByte = timing.responseStart - timing.navigationStart;
        newMetrics.domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
      }

      // Web Vitals
      if ('web-vitals' in window) {
        // This would be handled by the WebVitalsTracker component
      }

      // Memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }

      // First Contentful Paint
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        newMetrics.firstContentfulPaint = fcpEntry.startTime;
      }

      // Largest Contentful Paint
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        newMetrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // First Input Delay
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        const fidEntry = fidEntries[0] as any;
        newMetrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
      }

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsEntries = performance.getEntriesByType('layout-shift');
      for (const entry of clsEntries) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      newMetrics.cumulativeLayoutShift = clsValue;

      // Total Blocking Time
      const longTasks = performance.getEntriesByType('longtask');
      newMetrics.totalBlockingTime = longTasks.reduce((total, task) => total + task.duration, 0);

      setMetrics(newMetrics);
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

  // Toggle visibility with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMetricStatus = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-white text-sm max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Advanced Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        {metrics.loadTime && (
          <div className="flex justify-between items-center">
            <span>Load Time:</span>
            <span className={getMetricColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.firstContentfulPaint && (
          <div className="flex justify-between items-center">
            <span>FCP:</span>
            <span className={getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.largestContentfulPaint && (
          <div className="flex justify-between items-center">
            <span>LCP:</span>
            <span className={getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
              {metrics.largestContentfulPaint.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.firstInputDelay && (
          <div className="flex justify-between items-center">
            <span>FID:</span>
            <span className={getMetricColor(metrics.firstInputDelay, { good: 100, poor: 300 })}>
              {metrics.firstInputDelay.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.cumulativeLayoutShift !== null && (
          <div className="flex justify-between items-center">
            <span>CLS:</span>
            <span className={getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </span>
          </div>
        )}
        
        {metrics.timeToFirstByte && (
          <div className="flex justify-between items-center">
            <span>TTFB:</span>
            <span className={getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 })}>
              {metrics.timeToFirstByte.toFixed(0)}ms
            </span>
          </div>
        )}
        
        {metrics.memoryUsage && (
          <div className="flex justify-between items-center">
            <span>Memory:</span>
            <span className={getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
        )}
        
        {metrics.totalBlockingTime && (
          <div className="flex justify-between items-center">
            <span>TBT:</span>
            <span className={getMetricColor(metrics.totalBlockingTime, { good: 200, poor: 600 })}>
              {metrics.totalBlockingTime.toFixed(0)}ms
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-700 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;