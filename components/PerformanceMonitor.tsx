import React, { useEffect } from 'react';

<<<<<<< HEAD
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
=======
interface PerformanceData {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const performanceData: PerformanceData = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      };

      // Get paint metrics
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        performanceData.firstContentfulPaint = fcp.startTime;
      }

      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        performanceData.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
      }

      // Get FID
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
<<<<<<< HEAD
        metrics.firstInputDelay = (fidEntries[0] as any).processingStart - fidEntries[0].startTime;
=======
        const fidEntry = fidEntries[0] as PerformanceEventTiming;
        performanceData.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
      }

      // Get CLS
      const clsEntries = performance.getEntriesByType('layout-shift');
<<<<<<< HEAD
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
=======
      if (clsEntries.length > 0) {
        performanceData.cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
          const layoutShiftEntry = entry as LayoutShift;
          return sum + (layoutShiftEntry.value || 0);
        }, 0);
      }

      onPerformanceData?.(performanceData);
    };
<<<<<<< HEAD
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
<<<<<<< HEAD
  }, [onPerformanceData, logMetrics, onThresholdExceeded]);

  if (showMetrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs">
        <div>Performance Monitor Active</div>
      </div>
    );
  }
=======
  }, [onPerformanceData]);
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31

  return null;
};

<<<<<<< HEAD
export default PerformanceMonitor;
=======
export default PerformanceMonitor;
=======
,
    // Measure performance after page load,
    if (document.readyState === 'complete') {,
      measurePerformance(),
    } else {,
      window.addEventListener('load', measurePerformance),
    };
,
    return () => {,
      window.removeEventListener('load', measurePerformance),
    };
  }, [onPerformanceData]),
,
  return null,
};
,
export default PerformanceMonitor,
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
