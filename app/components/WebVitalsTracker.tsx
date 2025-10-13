import React, { useEffect, ReactNode } from 'react';

interface WebVitalsTrackerProps {
  children: ReactNode;
}

const WebVitalsTracker: React.FC<WebVitalsTrackerProps> = ({ children }) => {
  useEffect(() => {
    // Track Core Web Vitals
    const trackWebVitals = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Track LCP (Largest Contentful Paint)
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
          }
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });

        // Track FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Track CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          console.log('CLS:', clsValue);
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    trackWebVitals();
  }, []);

  return <>{children}</>;
};

export default WebVitalsTracker;