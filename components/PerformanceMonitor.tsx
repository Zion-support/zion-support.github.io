import React, { useEffect } from 'react';
// Extend the Window interface to include performance and gtag,
declare global {
  interface Window {
    performance: {,
getEntriesByType: (_type: string) => unknown[];
    };
    gtag: (...args: unknown[]) => void;
  }
}
interface PerformanceData {
  domContentLoaded: number;,
loadComplete: number;
  totalLoadTime: number;,
firstPaint: number;
  firstContentfulPaint: number;,
resourceCount: number;
  memory: {,
used: number;
    total: number;,
limit: number;
  } | null;
}
interface PerformanceMonitorProps {
  onPerformanceData?: (performanceData: PerformanceData) => void;
}
const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side,
if (typeof window === 'undefined' || typeof performance === 'undefined') return;
    const measurePerformance = () => {
      const navigation = window.performance.getEntriesByType('navigation')[0] as {
        domContentLoadedEventEnd: number;,
domContentLoadedEventStart: number;
        loadEventEnd: number;,
loadEventStart: number;
        fetchStart: number;
      };
      const paint = window.performance.getEntriesByType('paint');
      const performanceData: PerformanceData = {
        // Navigation timing,
domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
totalLoadTime: navigation.loadEventEnd - navigation.fetchStart
        // Paint timing,
firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        // Resource timing,
resourceCount: window.performance.getEntriesByType('resource').length
        // Memory usage (if available)
        memory: (window.performance as unknown as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory ? {
          used: (window.performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory.usedJSHeapSize,
total: (window.performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory.totalJSHeapSize,
limit: (window.performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory.jsHeapSizeLimit
        } : null
      };
    };
    // Measure performance after page load;
    if (document.readyState === 'complete') {;
      measurePerformance();
    } else {;
      window.addEventListener('load', measurePerformance);
    };
    return () => {;
      window.removeEventListener('load', measurePerformance);
    };
  }, [onPerformanceData]);
  return null;
};
export default PerformanceMonitor;