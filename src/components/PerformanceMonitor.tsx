import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure First Contentful Paint (FCP)
    const measureFCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    };

    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // Measure First Input Delay (FID)
    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    };

    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    // Measure Time to First Byte (TTFB)
    const measureTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigation.responseStart - navigation.requestStart 
        }));
      }
    };

    // Initialize measurements
    measureFCP();
    measureLCP();
    measureFID();
    measureCLS();
    measureTTFB();

    // Send metrics to analytics
    const sendMetricsToAnalytics = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        
        if (metrics.fcp) {
          gtag('event', 'web_vitals', {
            name: 'FCP',
            value: Math.round(metrics.fcp),
            event_category: 'Performance'
          });
        }
        
        if (metrics.lcp) {
          gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(metrics.lcp),
            event_category: 'Performance'
          });
        }
        
        if (metrics.fid) {
          gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(metrics.fid),
            event_category: 'Performance'
          });
        }
        
        if (metrics.cls) {
          gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(metrics.cls * 1000) / 1000,
            event_category: 'Performance'
          });
        }
        
        if (metrics.ttfb) {
          gtag('event', 'web_vitals', {
            name: 'TTFB',
            value: Math.round(metrics.ttfb),
            event_category: 'Performance'
          });
        }
      }
    };

    // Send metrics after a delay to ensure all measurements are complete
    const timeoutId = setTimeout(sendMetricsToAnalytics, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [metrics]);

  // Log metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  // Performance budget alerts
  useEffect(() => {
    const performanceBudgets = {
      fcp: 1800,  // First Contentful Paint
      lcp: 2500,  // Largest Contentful Paint
      fid: 100,   // First Input Delay
      cls: 0.1,   // Cumulative Layout Shift
      ttfb: 600   // Time to First Byte
    };

    Object.entries(performanceBudgets).forEach(([metric, threshold]) => {
      const value = metrics[metric as keyof PerformanceMetrics];
      if (value !== null && value > threshold) {
        console.warn(`⚠️ Performance Budget Exceeded: ${metric.toUpperCase()} is ${value}ms (threshold: ${threshold}ms)`);
      }
    });
  }, [metrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;