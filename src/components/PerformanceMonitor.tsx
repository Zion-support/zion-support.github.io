import React, { useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const metrics: PerformanceMetrics = {
      loadTime: 0,
      domContentLoaded: 0
    };

    // Basic performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          metrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          metrics.domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
        }
        
        if (entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = paintEntry.startTime;
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as PerformanceEntry;
          metrics.largestContentfulPaint = lcpEntry.startTime;
        }
        
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          metrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
        }
        
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number };
          metrics.cumulativeLayoutShift = (metrics.cumulativeLayoutShift || 0) + clsEntry.value;
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance Observer not supported:', e);
    }

    // Log metrics after page load
    const logMetrics = () => {
      console.group('🚀 Performance Metrics');
      console.log('Load Time:', `${metrics.loadTime.toFixed(2)}ms`);
      console.log('DOM Content Loaded:', `${metrics.domContentLoaded.toFixed(2)}ms`);
      
      if (metrics.firstContentfulPaint) {
        console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
      }
      
      if (metrics.largestContentfulPaint) {
        console.log('Largest Contentful Paint:', `${metrics.largestContentfulPaint.toFixed(2)}ms`);
      }
      
      if (metrics.firstInputDelay) {
        console.log('First Input Delay:', `${metrics.firstInputDelay.toFixed(2)}ms`);
      }
      
      if (metrics.cumulativeLayoutShift) {
        console.log('Cumulative Layout Shift:', metrics.cumulativeLayoutShift.toFixed(4));
      }
      
      console.groupEnd();
    };

    // Log metrics after a delay to ensure all metrics are collected
    const timeoutId = setTimeout(logMetrics, 2000);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;