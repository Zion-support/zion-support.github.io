import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  onPerformanceData?: (data: any) => void;
}

// Extend Window interface to include performance
declare global {
  interface Window {
    performance: Performance;
  }
}

// Declare Performance and PerformanceNavigationTiming types for TypeScript
declare global {
  interface Performance {
    getEntriesByType(type: string): PerformanceEntry[];
  }
  
  interface PerformanceNavigationTiming extends PerformanceEntry {
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    loadEventStart: number;
    loadEventEnd: number;
    fetchStart: number;
  }
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof performance === 'undefined') return;

    const measurePerformance = () => {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = window.performance.getEntriesByType('paint');
      
      const performanceData = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        
        // Resource timing
        resourceCount: window.performance.getEntriesByType('resource').length,
        
        // Memory usage (if available)
        memory: (window.performance as any).memory ? {
          used: (window.performance as any).memory.usedJSHeapSize,
          total: (window.performance as any).memory.totalJSHeapSize,
          limit: (window.performance as any).memory.jsHeapSizeLimit
        } : null
      };

      if (onPerformanceData) {
        onPerformanceData(performanceData);
      }

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
  }, [onPerformanceData]);

  return null;
};

export default PerformanceMonitor;