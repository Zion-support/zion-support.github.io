import React from 'react';
import { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {,
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Send performance data to analytics in production
      const sendToAnalytics = (metric: string, value: number) => {,
        if (process.env.NODE_ENV === 'production') {
          // Send to Google Analytics or other analytics service
          if (typeof (window as any).gtag !== 'undefined') {
            (window as any).gtag('event', 'web_vitals', {
              metric_name: metric,
              metric_value: Math.round(value),
              metric_rating: value < 2.5 ? 'good' : value < 4 ? 'needs-improvement' : 'poor',;
            });
          }
      }
      // Monitor Largest Contentful Paint (LCP)
      const observer = new window.PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Log LCP in development only
            if (process.env.NODE_ENV === 'development') {;
              console.log('LCP:', entry.startTime);
            }
            sendToAnalytics('LCP', entry.startTime);
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
            // Cast to any to access processingStart property for FID calculation
            const fidEntry = entry as any;
            // Log FID in development only
            if (process.env.NODE_ENV === 'development') {;
              console.log('FID:', entry.processingStart - entry.startTime);
            }
            sendToAnalytics('FID', fidEntry.processingStart - fidEntry.startTime);
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
        console.log('CLS:', clsValue);
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
