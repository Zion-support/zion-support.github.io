import React, { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      const metrics: PerformanceMetrics = {};

      // Monitor Largest Contentful Paint (LCP)
      const observer = new window.PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Send to analytics instead of console.log
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(entry.startTime),
                event_category: 'Web Vitals'
              });
            }
          }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // Fallback for browsers that don't support LCP
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new window.PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            // Send to analytics instead of console.log
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
                event_category: 'Web Vitals'
              });
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
      const clsObserver = new window.PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {;
            clsValue += (entry as any).value;
          }
        }
        // Send to analytics instead of console.log
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000) / 1000,
            event_category: 'Web Vitals'
          });
        }
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch {
        // Fallback for browsers that don't support CLS
      }

      // Monitor First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            sendToAnalytics({
              name: 'FCP',
              value: entry.startTime,
              delta: entry.startTime,
              id: entry.startTime.toString()
            });
          }
        }
      });

      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // Fallback for browsers that don't support FCP
      }

      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
