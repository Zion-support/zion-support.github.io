'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const metrics: PerformanceMetrics = {};

    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      metrics.lcp = lastEntry.startTime;
      
      // Send to analytics (replace with your analytics service)
      console.log('LCP:', lastEntry.startTime);
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP observer not supported');
    }

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        metrics.fid = entry.processingStart - entry.startTime;
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID observer not supported');
    }

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      metrics.cls = clsValue;
      console.log('CLS:', clsValue);
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS observer not supported');
    }

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
          console.log('FCP:', entry.startTime);
        }
      });
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP observer not supported');
    }

    // TTFB - Time to First Byte
    const ttfbObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.responseStart > 0) {
          metrics.ttfb = entry.responseStart - entry.requestStart;
          console.log('TTFB:', entry.responseStart - entry.requestStart);
        }
      });
    });

    try {
      ttfbObserver.observe({ entryTypes: ['navigation'] });
    } catch (e) {
      console.warn('TTFB observer not supported');
    }

    // Send metrics after page load
    const sendMetrics = () => {
      if (Object.keys(metrics).length > 0) {
        // Replace with your analytics service
        console.log('Performance Metrics:', metrics);
        
        // Example: Send to Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'Core Web Vitals',
            value: Math.round(metrics.lcp || 0),
            custom_map: {
              lcp: metrics.lcp,
              fid: metrics.fid,
              cls: metrics.cls,
              fcp: metrics.fcp,
              ttfb: metrics.ttfb,
            }
          });
        }
      }
    };

    // Send metrics when page is about to unload
    window.addEventListener('beforeunload', sendMetrics);

    // Cleanup
    return () => {
      lcpObserver?.disconnect();
      fidObserver?.disconnect();
      clsObserver?.disconnect();
      fcpObserver?.disconnect();
      ttfbObserver?.disconnect();
      window.removeEventListener('beforeunload', sendMetrics);
    };
  }, []);

  return null;
}