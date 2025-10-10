import React, { useEffect } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            console.log('LCP:', lcp);
            
            // Send to analytics
            if ((window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(lcp),
                event_category: 'Performance'
              });
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = (entry as any).processingStart - entry.startTime;
          console.log('FID:', fid);
          
          if ((window as any).gtag) {
            (window as any).gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(fid),
              event_category: 'Performance'
            });
          }
        }
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
        
        if ((window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Performance'
          });
        }
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor page load time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page Load Time:', loadTime);
        
        if ((window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            name: 'Page Load Time',
            value: Math.round(loadTime),
            event_category: 'Performance'
          });
        }
      });

      // Cleanup observers
      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;