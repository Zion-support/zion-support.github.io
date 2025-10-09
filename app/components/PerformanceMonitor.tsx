import React, { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      // Measure First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              const fcp = entry.startTime;
              console.log('FCP:', fcp);
              
              // Send to analytics
              if (typeof window !== 'undefined' && 'gtag' in window) {
                (window as any).gtag('event', 'web_vitals', {
                  name: 'FCP',
                  value: Math.round(fcp),
                  event_category: 'Web Vitals'
                });
              }
            }
          }
        });
        
        try {
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observer not supported');
        }
      }

      // Measure Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          const lcp = lastEntry.startTime;
          
          console.log('LCP:', lcp);
          
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(lcp),
              event_category: 'Web Vitals'
            });
          }
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observer not supported');
        }
      }

      // Measure Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          
          console.log('CLS:', clsValue);
          
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              name: 'CLS',
              value: Math.round(clsValue * 1000) / 1000,
              event_category: 'Web Vitals'
            });
          }
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer not supported');
        }
      }

      // Measure First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fid = (entry as any).processingStart - entry.startTime;
            console.log('FID:', fid);
            
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(fid),
                event_category: 'Web Vitals'
              });
            }
          }
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observer not supported');
        }
      }

      // Measure Time to First Byte (TTFB)
      if ('PerformanceObserver' in window) {
        const ttfbObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const ttfb = (entry as any).responseStart - (entry as any).requestStart;
              console.log('TTFB:', ttfb);
              
              if (typeof window !== 'undefined' && 'gtag' in window) {
                (window as any).gtag('event', 'web_vitals', {
                  name: 'TTFB',
                  value: Math.round(ttfb),
                  event_category: 'Web Vitals'
                });
              }
            }
          }
        });
        
        try {
          ttfbObserver.observe({ entryTypes: ['navigation'] });
        } catch (e) {
          console.warn('TTFB observer not supported');
        }
      }
    };

    // Start measuring after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;