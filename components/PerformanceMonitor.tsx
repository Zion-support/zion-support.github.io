import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

interface PerformanceData {
  domContentLoaded: number,
  loadComplete: number,
  totalLoadTime: number,
  firstPaint: number,
  firstContentfulPaint: number,
  resourceCount: number,
  memory: {
    used: number,
    total: number,
    limit: number,
  } | null;
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void,
}

// Extend the Window interface to include performance
declare global {
  interface Window {

    performance: Performance,
  }
  
  interface Performance {
    getEntriesByType(type: string): PerformanceEntry[],
    memory?: {
      usedJSHeapSize: number, totalJSHeapSize: number,
      jsHeapSizeLimit: number,
    };
  }
  
  interface PerformanceEntry {
    name: string, startTime: number,
    duration: number,
  }
  
  interface PerformanceNavigationTiming extends PerformanceEntry {
    domContentLoadedEventStart: number, domContentLoadedEventEnd: number,
    loadEventStart: number, loadEventEnd: number,
    fetchStart: number,
  }
}

// Define Performance types if not available
interface PerformanceEntry {
  name: string,
  entryType: string,
  startTime: number,
  duration: number,
}

interface Performance {
  getEntriesByType(type: string): PerformanceEntry[],
}

interface PerformanceNavigationTiming extends PerformanceEntry {
  loadEventEnd: number,
  loadEventStart: number,
  domContentLoadedEventEnd: number,
  domContentLoadedEventStart: number,
  responseEnd: number,
  responseStart: number,
  requestStart: number,
  navigationStart: number,
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side

    if (typeof window === 'undefined' || typeof window.performance === 'undefined') return;

    const measurePerformance = () => {
      const navigationEntries = window.performance.getEntriesByType('navigation');
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');

      
      const performanceData = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        // Paint timing

        firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        

        // Resource timing
        resourceCount: window.performance.getEntriesByType('resource').length,
        // Memory usage (if available)

        memory: (window.performance as Performance & { memory?: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory ? {
          used: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.usedJSHeapSize,
          total: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.totalJSHeapSize,
          limit: (window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory.jsHeapSizeLimit

        } : null
      },
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