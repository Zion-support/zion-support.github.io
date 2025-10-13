import React, { useEffect } from 'react';

interface CoreWebVitalsProps {
  children: React.ReactNode;
  className?: string;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ children, className = '' }) => {
  useEffect(() => {
    // Core Web Vitals tracking
    const trackWebVitals = () => {
      // Track Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry) {
            const lcp = lastEntry.startTime;
            
            // Log in development
            if (process.env.NODE_ENV === 'development') {
              console.log('LCP:', lcp);
            }
            
            // Send to analytics
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(lcp)
              });
            }
          }
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Track First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            
            // Log in development
            if (process.env.NODE_ENV === 'development') {
              console.log('FID:', fid);
            }
            
            // Send to analytics
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(fid)
              });
            }
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Track Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          // Log in development
          if (process.env.NODE_ENV === 'development') {
            console.log('CLS:', clsValue);
          }
          
          // Send to analytics
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000) / 1000
            });
          }
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Track First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              const fcp = entry.startTime;
              
              // Log in development
              if (process.env.NODE_ENV === 'development') {
                console.log('FCP:', fcp);
              }
              
              // Send to analytics
              if (typeof window !== 'undefined' && 'gtag' in window) {
                (window as any).gtag('event', 'web_vitals', {
                  event_category: 'Performance',
                  event_label: 'FCP',
                  value: Math.round(fcp)
                });
              }
            }
          });
        });
        
        fcpObserver.observe({ entryTypes: ['paint'] });
      }
    };

    // Start tracking when component mounts
    trackWebVitals();

    // Track page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.navigationStart;
      
      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Page Load Time:', loadTime);
      }
      
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Page Load Time',
          value: Math.round(loadTime)
        });
      }
    });
  }, []);

  return (
    <div className={`core-web-vitals ${className}`}>
      {children}
    </div>
  );
};

export default CoreWebVitals;