'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Time to First Byte (TTFB)
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
        }
      }
    };

    // Measure page load time
    const measurePageLoad = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        
        // Send to analytics
        if ('gtag' in window) {
          (window as any).gtag('event', 'page_load_time', {
            value: loadTime,
            event_category: 'Performance'
          });
        }
      });
    };

    // Measure resource loading
    const measureResourceLoading = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.duration > 1000) { // Resources taking more than 1 second
              console.warn('Slow resource detected:', entry.name, entry.duration);
            }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
      }
    };

    // Initialize measurements
    measureWebVitals();
    measurePageLoad();
    measureResourceLoading();

    // Send metrics to analytics when available
    const sendMetricsToAnalytics = () => {
      if ('gtag' in window && Object.values(metrics).some(value => value !== null)) {
        (window as any).gtag('event', 'web_vitals', {
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          fcp: metrics.fcp,
          ttfb: metrics.ttfb,
          event_category: 'Performance'
        });
      }
    };

    // Send metrics after a delay to ensure all are collected
    const timer = setTimeout(sendMetricsToAnalytics, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [metrics]);

  // Monitor memory usage
  useEffect(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const checkMemoryUsage = () => {
      const memory = (performance as any).memory;
      if (memory) {
        const usedJSHeapSize = memory.usedJSHeapSize / 1024 / 1024; // MB
        const totalJSHeapSize = memory.totalJSHeapSize / 1024 / 1024; // MB
        
        if (usedJSHeapSize > 50) { // More than 50MB
          console.warn('High memory usage detected:', usedJSHeapSize, 'MB');
        }

        // Send to analytics
        if ('gtag' in window) {
          (window as any).gtag('event', 'memory_usage', {
            used_js_heap_size: usedJSHeapSize,
            total_js_heap_size: totalJSHeapSize,
            event_category: 'Performance'
          });
        }
      }
    };

    const interval = setInterval(checkMemoryUsage, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Monitor network conditions
  useEffect(() => {
    if (typeof window === 'undefined' || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    if (connection) {
      const networkInfo = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      };

      // Send to analytics
      if ('gtag' in window) {
        (window as any).gtag('event', 'network_info', {
          effective_type: networkInfo.effectiveType,
          downlink: networkInfo.downlink,
          rtt: networkInfo.rtt,
          event_category: 'Performance'
        });
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;