<<<<<<< HEAD
import { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`${entry.name}: ${entry.value || entry.startTime}ms`);
        }
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    } catch (e) {
      // PerformanceObserver might not be supported in all browsers
      console.warn('PerformanceObserver not supported');
    }

    // Monitor page load performance
    const handleLoad = () => {
      if (process.env.NODE_ENV === 'development') {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Page Load Performance:', {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalTime: navigation.loadEventEnd - navigation.fetchStart
          });
        }
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      observer.disconnect();
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
=======

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {;
  useEffect(() => {;
    // Only run on client side;
    if (typeof window === 'undefined' || typeof window && window.performance === 'undefined') return;
    const measurePerformance = () => {;
      const navigationEntries = window && window.performance.getEntriesByType('navigation');
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
      const paintEntries = window && window.performance.getEntriesByType('paint');
      const performanceData = {;
        // Navigation timing;
        domContentLoaded: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.domContentLoadedEventStart,;
        loadComplete: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,;
        totalLoadTime: navigation && navigation.loadEventEnd - navigation && navigation.fetchStart,;
        // Paint timing;
        firstPaint: paintEntries && paintEntries.find(entry => entry && entry.name === 'first-paint')?.startTime || 0,;
        firstContentfulPaint: paintEntries && paintEntries.find(entry => entry && entry.name === 'first-contentful-paint')?.startTime || 0,;
        // Resource timing;
        resourceCount: window && window.performance.getEntriesByType('resource').length,;
        // Memory usage (if available);
        memory: (window && window.performance as Performance & { memory?: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory ? {;
          used: (window && window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory && memory.usedJSHeapSize,;
          total: (window && window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory && memory.totalJSHeapSize,;
          limit: (window && window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory && memory.jsHeapSizeLimit;
      },;
      if (onPerformanceData) {;
        onPerformanceData(performanceData);
      }
      // Log performance data in development;
      if (process && process.env.NODE_ENV === 'development') {;
        // eslint-disable-next-line no-console;
        console && console.log('Performance Metrics:', performanceData);
      }
    };
    // Measure performance after page load;
    if (document && document.readyState === 'complete') {;

      measurePerformance();
    } else {;
      window && window.addEventListener('load', measurePerformance);
    }
  }, [onPerformanceData]);
  return null;

    } else {
      window.addEventListener ('load', measure_performance);
    }
    return () => {
      window.removeEventListener ('load', measure_performance);
    }
  }, [onPerformanceData]);
;
  return null;
}
;
export default PerformanceMonitor;
import React, { useEffect, useState } from 'react;
interface PerformanceMetrics {fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

};

export default PerformanceMonitor;
>>>>>>> origin/cursor/delete-old-data-records-6bba
