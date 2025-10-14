import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart?: number;
}

interface LayoutShift extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

const PerformanceMonitor = (): void => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const currentMetrics: PerformanceMetrics = {};

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      currentMetrics.lcp = lastEntry.startTime;
      setMetrics({ ...currentMetrics });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const eventEntry = entry as PerformanceEventTiming;
        if (eventEntry.processingStart) {
          currentMetrics.fid = eventEntry.processingStart - eventEntry.startTime;
          setMetrics({ ...currentMetrics });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const layoutShift = entry as LayoutShift;
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value;
          currentMetrics.cls = clsValue;
          setMetrics({ ...currentMetrics });
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          currentMetrics.fcp = entry.startTime;
          setMetrics({ ...currentMetrics });
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      currentMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      setMetrics({ ...currentMetrics });
    }

    // Cleanup observers
    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  // Log metrics to console in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return undefined; // This component doesn't render anything
};

export default PerformanceMonitor;