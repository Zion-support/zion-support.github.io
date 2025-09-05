import React, { useEffect } from 'react';

interface PerformanceData {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    const measurePerformance = () => {
      const performanceData: PerformanceData = {
        loadTime: 0,
        domContentLoaded: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
      };

      // Basic timing metrics
      if (performance.timing) {
        performanceData.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        performanceData.domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      }

      // Web Vitals
      if (performance.getEntriesByType) {
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          performanceData.firstContentfulPaint = fcpEntry.startTime;
        }

        const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
        if (lcpEntries.length > 0) {
          performanceData.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
        }

        const fidEntries = performance.getEntriesByType('first-input');
        if (fidEntries.length > 0) {
          performanceData.firstInputDelay = (fidEntries[0] as PerformanceEventTiming).processingStart - fidEntries[0].startTime;
        }

        const clsEntries = performance.getEntriesByType('layout-shift');
        if (clsEntries.length > 0) {
          performanceData.cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
            return sum + (entry as any).value;
          }, 0);
        }
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