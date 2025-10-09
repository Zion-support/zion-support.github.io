'use client';
import { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measurePerformance = () => {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
            // Send to analytics
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                name: 'FCP',
                value: Math.round(entry.startTime),
                event_category: 'Web Vitals',
              });
            }
          }
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('LCP:', entry.startTime);
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(entry.startTime),
              event_category: 'Web Vitals',
            });
          }
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(entry.processingStart - entry.startTime),
              event_category: 'Web Vitals',
            });
          }
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            console.log('CLS:', clsValue);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                name: 'CLS',
                value: Math.round(clsValue * 1000) / 1000,
                event_category: 'Web Vitals',
              });
            }
          }
        }
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Monitor resource loading
    const monitorResources = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) { // Resources taking more than 1 second
              console.warn('Slow resource:', resource.name, resource.duration);
            }
          }
        }
      });
      observer.observe({ entryTypes: ['resource'] });
    };

    // Monitor JavaScript errors
    const monitorErrors = () => {
      window.addEventListener('error', (event) => {
        console.error('JavaScript error:', event.error);
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'exception', {
            description: event.error?.message || 'Unknown error',
            fatal: false,
          });
        }
      });

      window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'exception', {
            description: event.reason?.message || 'Unhandled promise rejection',
            fatal: false,
          });
        }
      });
    };

    // Initialize monitoring
    if (typeof window !== 'undefined') {
      measurePerformance();
      monitorResources();
      monitorErrors();
    }

    // Monitor page visibility
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log('Page hidden');
      } else {
        console.log('Page visible');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;