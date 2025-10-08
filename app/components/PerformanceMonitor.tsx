import React, { useEffect } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
    };

    // Monitor Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;

    if (navigation) {
      metrics.ttfb = navigation.responseStart - navigation.requestStart;
      metrics.fcp = navigation.domContentLoadedEventEnd - navigation.navigationStart;
    }

    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      metrics.lcp = lastEntry.startTime;
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          metrics.fid = entry.processingStart - entry.startTime;
        }
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }

    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      metrics.cls = clsValue;
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('CLS observer not supported:', error);
    }

    // Monitor memory usage
    const memory = (
      performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }
    ).memory;

    if (memory) {
      const usedMemory = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      const totalMemory = memory.totalJSHeapSize / 1024 / 1024; // Convert to MB
      
      if (usedMemory > 50) {
        console.warn(`High memory usage detected: ${usedMemory.toFixed(2)}MB / ${totalMemory.toFixed(2)}MB`);
      }
    }

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      const logMetrics = () => {
        console.group('Performance Metrics');
        console.log('LCP (Largest Contentful Paint):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'Not available');
        console.log('FID (First Input Delay):', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'Not available');
        console.log('CLS (Cumulative Layout Shift):', metrics.cls ? metrics.cls.toFixed(4) : 'Not available');
        console.log('FCP (First Contentful Paint):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'Not available');
        console.log('TTFB (Time to First Byte):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'Not available');
        
        if (memory) {
          console.log('Memory Usage:', `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB / ${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
        }
        console.groupEnd();
      };

      // Log metrics after a delay to allow for collection
      setTimeout(logMetrics, 5000);
    }

    // Cleanup observers
    return () => {
      try {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      } catch (error) {
        console.warn('Error disconnecting performance observers:', error);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;