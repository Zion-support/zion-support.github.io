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
      if (typeof window === 'undefined' || !window.performance) return;
      
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');
      
      const performanceData: PerformanceData = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      };

      // Get First Contentful Paint
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        performanceData.firstContentfulPaint = fcpEntry.startTime;
      }

      // Get Largest Contentful Paint
      const lcpEntries = window.performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        performanceData.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // Get First Input Delay
      const fidEntries = window.performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        const fidEntry = fidEntries[0] as any;
        performanceData.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
      }

      // Get Cumulative Layout Shift
      const clsEntries = window.performance.getEntriesByType('layout-shift');
      if (clsEntries.length > 0) {
        performanceData.cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
          return sum + (entry as any).value;
        }, 0);
      }

      // Call the callback if provided
      if (onPerformanceData) {
        onPerformanceData(performanceData);
      }

      // Log performance data to console in development
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
  }, [onPerformanceData]);

  return null;
};

export default PerformanceMonitor;