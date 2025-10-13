import React, { useEffect } from 'react';

const CoreWebVitals: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Track LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Track FID (First Input Delay)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }

      // Track CLS (Cumulative Layout Shift)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          console.log('CLS:', clsValue);
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    trackWebVitals();
  }, []);

  return <>{children}</>;
};

export default CoreWebVitals;