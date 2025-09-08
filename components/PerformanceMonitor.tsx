import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  logMetrics?: boolean;
  onThresholdExceeded?: (metrics: PerformanceMetrics) => void;
  onPerformanceData?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  logMetrics = false,
  onThresholdExceeded,
  onPerformanceData
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
      
      const performanceData: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        firstInputDelay: 0, // Would need to be measured with PerformanceObserver
        cumulativeLayoutShift: 0 // Would need to be measured with PerformanceObserver
      };

      setMetrics(performanceData);

      if (logMetrics) {
        console.log('Performance Metrics:', performanceData);
      }

      if (onPerformanceData) {
        onPerformanceData(performanceData);
      }

      // Check thresholds
      if (onThresholdExceeded) {
        const thresholds = {
          loadTime: 3000,
          firstContentfulPaint: 1500,
          largestContentfulPaint: 2500
        };

        if (performanceData.loadTime > thresholds.loadTime ||
            performanceData.firstContentfulPaint > thresholds.firstContentfulPaint ||
            performanceData.largestContentfulPaint > thresholds.largestContentfulPaint) {
          onThresholdExceeded(performanceData);
        }
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
  }, [onPerformanceData, onThresholdExceeded, logMetrics]);

  if (!showMetrics || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono">
      <h4 className="font-bold mb-2">Performance Metrics</h4>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
      <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
    </div>
  );
};

export default PerformanceMonitor;