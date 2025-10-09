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
    ttfb: null
  });

  useEffect(() => {
<<<<<<< HEAD
    // Monitor Core Web Vitals
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        return observer;
=======
    // Monitor performance metrics
    const monitorPerformance = () => {
      // Monitor Core Web Vitals
      if ('web-vitals' in window) {
        // This would typically use the web-vitals library
        // eslint-disable-next-line no-console
        console.log('Performance monitoring enabled');
      }
      
      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        // eslint-disable-next-line no-console
        console.log(`Page load time: ${loadTime}ms`);
      });
      
      // Monitor memory usage if available
      if ('memory' in performance) {
        const memory = (performance as unknown as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
        if (memory) {
          // eslint-disable-next-line no-console
          console.log('Memory usage:', {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
          });
        }
>>>>>>> main
      }
      return null;
    };

    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
        return observer;
      }
      return null;
    };

<<<<<<< HEAD
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        return observer;
      }
      return null;
    };

    const measureFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          });
        });
        observer.observe({ entryTypes: ['paint'] });
        return observer;
      }
      return null;
    };

    const measureTTFB = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'navigation') {
              setMetrics(prev => ({ ...prev, ttfb: entry.responseStart - entry.requestStart }));
            }
          });
        });
        observer.observe({ entryTypes: ['navigation'] });
        return observer;
      }
      return null;
    };

    // Start monitoring
    const observers = [
      measureLCP(),
      measureFID(),
      measureCLS(),
      measureFCP(),
      measureTTFB()
    ].filter(Boolean);

    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance metrics:', metrics);
=======
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            // eslint-disable-next-line no-console
            console.warn('Long task detected:', entry.duration + 'ms');
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
      
      return () => {
        observer.disconnect();
      };
>>>>>>> main
    }

<<<<<<< HEAD
    // Cleanup
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [metrics]);

  // This component doesn't render anything visible
  return null;
=======
  return null; // This component doesn't render anything
>>>>>>> main
};

export default PerformanceMonitor;