import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            if (process.env.NODE_ENV === 'development') {
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
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            if (process.env.NODE_ENV === 'development') {
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
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        if (process.env.NODE_ENV === 'development') {
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
  }, []);

  return null; // This component doesn't render anything
};
export default PerformanceMonitor;