import React, { useEffect } from 'react',

interface PerformanceData {
  loadTime: number,
  domContentLoaded: number,
  firstPaint: number,
  firstContentfulPaint: number
}
import React, { useEffect } from 'react';

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
      }

      // Get FID
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        const fidEntry = fidEntries[0] as PerformanceEventTiming;
        performanceData.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
      }

      // Get CLS
      const clsEntries = performance.getEntriesByType('layout-shift');
      if (clsEntries.length > 0) {
        performanceData.cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
          const layoutShiftEntry = entry as LayoutShift;
          return sum + (layoutShiftEntry.value || 0);
        }, 0);
      }

      onPerformanceData?.(performanceData);
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
  }, [onPerformanceData]);

  return null;
};

export default PerformanceMonitor;