import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay (FID)
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift (CLS)
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // First Contentful Paint (FCP)
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

          // Time to First Byte (TTFB)
          const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigationEntry) {
            setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
          }
        } catch (error) {
          console.warn('Performance monitoring not fully supported:', error);
        }
      }
    };

    // Monitor resource loading
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        try {
          const resourceObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              // Log slow resources
              if (entry.duration > 1000) {
                console.warn('Slow resource detected:', {
                  name: entry.name,
                  duration: entry.duration,
                  size: (entry as any).transferSize || 0,
                });
              }
            });
          });
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch (error) {
          console.warn('Resource monitoring not supported:', error);
        }
      }
    };

    // Start monitoring
    observeWebVitals();
    monitorResources();

    // Log metrics when they change
    const logMetrics = () => {
      const { lcp, fid, cls, fcp, ttfb } = metrics;
      if (lcp !== null || fid !== null || cls !== null || fcp !== null || ttfb !== null) {
        console.log('Performance Metrics:', {
          LCP: lcp ? `${lcp.toFixed(2)}ms` : 'N/A',
          FID: fid ? `${fid.toFixed(2)}ms` : 'N/A',
          CLS: cls ? cls.toFixed(4) : 'N/A',
          FCP: fcp ? `${fcp.toFixed(2)}ms` : 'N/A',
          TTFB: ttfb ? `${ttfb.toFixed(2)}ms` : 'N/A',
        });
      }
    };

    // Log metrics after a delay to allow for collection
    const timeoutId = setTimeout(logMetrics, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [metrics]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;