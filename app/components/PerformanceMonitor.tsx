import React, { useEffect } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const metrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null
    };

    // Measure LCP (Largest Contentful Paint)
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
          console.log('LCP:', metrics.lcp);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    };

    // Measure FID (First Input Delay)
    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            metrics.fid = entry.processingStart - entry.startTime;
            console.log('FID:', metrics.fid);
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      }
    };

    // Measure CLS (Cumulative Layout Shift)
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          metrics.cls = clsValue;
          console.log('CLS:', metrics.cls);
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure FCP (First Contentful Paint)
    const measureFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
              console.log('FCP:', metrics.fcp);
            }
          });
        });
        observer.observe({ entryTypes: ['paint'] });
      }
    };

    // Measure TTFB (Time to First Byte)
    const measureTTFB = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              metrics.ttfb = (entry as any).responseStart - (entry as any).requestStart;
              console.log('TTFB:', metrics.ttfb);
            }
          });
        });
        observer.observe({ entryTypes: ['navigation'] });
      }
    };

    // Start monitoring
    measureLCP();
    measureFID();
    measureCLS();
    measureFCP();
    measureTTFB();

    // Log performance metrics after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        console.log('Performance Metrics:', metrics);
      }, 1000);
    });

  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
