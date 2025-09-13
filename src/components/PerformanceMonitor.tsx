import { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
}

interface PerformanceMonitorProps {
  onMetrics?: (metrics: PerformanceMetrics) => void;
  logToConsole?: boolean;
  sendToAnalytics?: boolean;
  analyticsEndpoint?: string;
}

export function PerformanceMonitor({
  onMetrics,
  logToConsole = false,
  sendToAnalytics = false,
  analyticsEndpoint = '/api/analytics/performance',
}: PerformanceMonitorProps) {
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
  });

  // Measure First Contentful Paint (FCP)
  const measureFCP = () => {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      metricsRef.current.fcp = fcpEntry.startTime;
      if (logToConsole) {
        console.log('FCP:', fcpEntry.startTime);
      }
    }
  };

  // Measure Largest Contentful Paint (LCP)
  const measureLCP = () => {
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            metricsRef.current.lcp = lastEntry.startTime;
            if (logToConsole) {
              console.log('LCP:', lastEntry.startTime);
            }
          }
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP measurement failed:', error);
      }
    }
  };

  // Measure Cumulative Layout Shift (CLS)
  const measureCLS = () => {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          metricsRef.current.cls = clsValue;
          if (logToConsole) {
            console.log('CLS:', clsValue);
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS measurement failed:', error);
      }
    }
  };

  // Measure First Input Delay (FID)
  const measureFID = () => {
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            metricsRef.current.fid = (entry as any).processingStart - entry.startTime;
            if (logToConsole) {
              console.log('FID:', metricsRef.current.fid);
            }
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID measurement failed:', error);
      }
    }
  };

  // Measure Time to First Byte (TTFB)
  const measureTTFB = () => {
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    if (navigationEntries.length > 0) {
      const nav = navigationEntries[0];
      metricsRef.current.ttfb = nav.responseStart - nav.requestStart;
      if (logToConsole) {
        console.log('TTFB:', metricsRef.current.ttfb);
      }
    }
  };

  // Send metrics to analytics
  const sendMetricsToAnalytics = async (metrics: PerformanceMetrics) => {
    if (!sendToAnalytics) return;

    try {
      await fetch(analyticsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metrics,
          timestamp: Date.now(),
          url: window.location.href,
        }),
      });
    } catch (error) {
      console.warn('Failed to send metrics to analytics:', error);
    }
  };

  useEffect(() => {
    // Measure initial metrics
    measureFCP();
    measureLCP();
    measureCLS();
    measureFID();
    measureTTFB();

    // Set up periodic measurement
    const interval = setInterval(() => {
      measureFCP();
      measureLCP();
      measureCLS();
      measureFID();
      measureTTFB();

      // Call onMetrics callback if provided
      if (onMetrics) {
        onMetrics(metricsRef.current);
      }

      // Send to analytics if enabled
      if (sendToAnalytics) {
        sendMetricsToAnalytics(metricsRef.current);
      }
    }, 5000); // Check every 5 seconds

    // Cleanup
    return () => {
      clearInterval(interval);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onMetrics, logToConsole, sendToAnalytics, analyticsEndpoint]);

  // This component doesn't render anything
  return null;
}

// Utility function to get current performance metrics
export function getCurrentPerformanceMetrics(): PerformanceMetrics {
  const paintEntries = performance.getEntriesByType('paint');
  const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
  
  const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  const ttfb = navigationEntries.length > 0 
    ? navigationEntries[0].responseStart - navigationEntries[0].requestStart 
    : null;

  return {
    fcp: fcpEntry ? fcpEntry.startTime : null,
    lcp: null, // Would need observer to get current LCP
    fid: null, // Would need observer to get current FID
    cls: null, // Would need observer to get current CLS
    ttfb,
    fmp: null, // First Meaningful Paint is deprecated
  };
}

export default PerformanceMonitor;