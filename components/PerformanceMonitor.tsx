import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new (window as any).PerformanceObserver((list: any) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            if (typeof console !== 'undefined') {
              console.log('LCP:', entry.startTime);
            }
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // Fallback for browsers that don't support LCP
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new (window as any).PerformanceObserver((list: any) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            if (typeof console !== 'undefined') {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
          }
        }
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch {
        // Fallback for browsers that don't support FID
      }

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new (window as any).PerformanceObserver((list: any) => {
        for (const entry of list.getEntries()) {
          const entryAny = entry as any;
          if (!entryAny.hadRecentInput) {
            clsValue += entryAny.value;
          }
        }
        if (typeof console !== 'undefined') {
          console.log('CLS:', clsValue);
        }
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch {
        // Fallback for browsers that don't support CLS
      }

      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingStart - entry.startTime;
        metrics.fid = fid;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('FID:', fid);
        }
      }
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // Fallback for browsers that don't support FID
    }

    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      metrics.cls = clsValue;
      
      if (process.env.NODE_ENV === 'development') {
        console.log('CLS:', clsValue);
      }
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support CLS
    }

    // Monitor First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
          
          if (process.env.NODE_ENV === 'development') {
            console.log('FCP:', metrics.fcp);
          }
        }
      }
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // Fallback for browsers that don't support FCP
    }

    // Monitor Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      
      if (process.env.NODE_ENV === 'development') {
        console.log('TTFB:', metrics.ttfb);
      }
    }

    // Send metrics to analytics in production
    const sendMetrics = () => {
      if (process.env.NODE_ENV === 'production' && Object.keys(metrics).length > 0) {
        try {
          fetch('/api/performance-metrics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...metrics,
              timestamp: new Date().toISOString(),
              url: window.location.href,
              userAgent: navigator.userAgent
            })
          }).catch(() => {}); // Silent fail
        } catch (e) {
          // Silent fail
        }
      }
    };

    // Send metrics after page load
    window.addEventListener('load', () => {
      setTimeout(sendMetrics, 2000); // Wait 2 seconds for all metrics to be collected
    });

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
