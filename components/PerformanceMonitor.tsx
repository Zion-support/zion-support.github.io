import React, { useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

interface PerformanceMonitorProps {
  onPerformanceData?: (metrics: PerformanceMetrics) => void;
  showMetrics?: boolean;
  logMetrics?: boolean;
  onThresholdExceeded?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onPerformanceData,
  showMetrics = false,
  logMetrics = false,
  onThresholdExceeded
}) => {
  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined') return;

      const metrics: PerformanceMetrics = {
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0
      };

      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }

      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.firstContentfulPaint = entry.startTime;
        }
      });

      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        metrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // Get FID
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        metrics.firstInputDelay = (fidEntries[0] as any).processingStart - fidEntries[0].startTime;
      }

      // Get CLS
      const clsEntries = performance.getEntriesByType('layout-shift');
      let cls = 0;
      clsEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
      metrics.cumulativeLayoutShift = cls;

      if (logMetrics) {
        console.log('Performance Metrics:', metrics);
      }

      if (onPerformanceData) {
        onPerformanceData(metrics);
      }

      // Check thresholds
      if (onThresholdExceeded) {
        const thresholds = {
          loadTime: 3000,
          firstContentfulPaint: 1800,
          largestContentfulPaint: 2500,
          firstInputDelay: 100,
          cumulativeLayoutShift: 0.1
        };

        const exceeded = Object.keys(thresholds).some(key => 
          metrics[key as keyof PerformanceMetrics] > thresholds[key as keyof typeof thresholds]
        );

        if (exceeded) {
          onThresholdExceeded(metrics);
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
  }, [onPerformanceData, logMetrics, onThresholdExceeded]);

  if (showMetrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs">
        <div>Performance Monitor Active</div>
      </div>
    );
  }

  return null;
};

export default PerformanceMonitor;