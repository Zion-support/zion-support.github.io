import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  onPerformanceData?: (data: Record<string, unknown>) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof window.performance === 'undefined') {
      return;
    }

    const measurePerformance = () => {
      try {
        const navigation = window.performance.getEntriesByType('navigation')[0] as any;
        const paint = window.performance.getEntriesByType('paint');
        
        const performanceData = {
          // Navigation timing
          domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart || 0,
          loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart || 0,
          totalLoadTime: navigation?.loadEventEnd - navigation?.fetchStart || 0,
          
          // Paint timing
          firstPaint: paint.find((entry: any) => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find((entry: any) => entry.name === 'first-contentful-paint')?.startTime || 0,
          
          // Resource timing
          resourceCount: window.performance.getEntriesByType('resource').length,
          
          // Memory usage (if available)
          memory: (window.performance as any).memory ? {
            used: (window.performance as any).memory?.usedJSHeapSize,
            total: (window.performance as any).memory?.totalJSHeapSize,
            limit: (window.performance as any).memory?.jsHeapSizeLimit
          } : null
        };

        if (onPerformanceData) {
          onPerformanceData(performanceData);
        }

        // Log performance data in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', performanceData);
        }
      } catch (error) {
        console.error('Error measuring performance:', error);
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