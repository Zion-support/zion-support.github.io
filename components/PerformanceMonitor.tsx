import React, { useEffect } from 'react';

// Extend Window interface to include performance API
declare global {
  interface Window {
    performance: Performance;
  }
  
  interface Performance {
    getEntriesByType(_type: string): PerformanceEntry[];
    memory?: {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
      jsHeapSizeLimit: number;
    };
  }
  
  interface PerformanceEntry {
    name: string;
    startTime: number;
  }
  
  interface PerformanceNavigationTiming extends PerformanceEntry {
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    loadEventStart: number;
    loadEventEnd: number;
    fetchStart: number;
  }
}

interface PerformanceData {
  domContentLoaded: number;
  loadComplete: number;
  totalLoadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  resourceCount: number;
  memory: {
    used: number;
    total: number;
    limit: number;
  } | null;
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.performance === 'undefined') return;

    const measurePerformance = () => {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = window.performance.getEntriesByType('paint');
      
      const performanceData: PerformanceData = {
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
        memory: window.performance.memory ? {
          used: window.performance.memory.usedJSHeapSize,
          total: window.performance.memory.totalJSHeapSize,
          limit: window.performance.memory.jsHeapSizeLimit
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