import React, { useEffect, memo } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

export const PerformanceMonitor = memo(({ children }: PerformanceMonitorProps) => {
  useEffect(() => {
    // Track Core Web Vitals
    const sendToAnalytics = (metric: any) => {
      // You can send this to your analytics service
      console.log('Web Vital:', metric);
      
      // Example: Send to Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Example: Send to custom analytics
      if (typeof window !== 'undefined' && (window as any).analytics) {
        (window as any).analytics.track('Web Vital', {
          metric: metric.name,
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
        });
      }
    };

    // Measure Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics); // INP replaced FID in web-vitals v5
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalPageLoad: navigation.loadEventEnd - navigation.fetchStart,
          firstByte: navigation.responseStart - navigation.fetchStart,
          dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcpConnection: navigation.connectEnd - navigation.connectStart,
        };

        console.log('Page Load Metrics:', metrics);
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_load_time', {
            event_category: 'Performance',
            event_label: 'page_load',
            value: Math.round(metrics.totalPageLoad),
          });
        }
      }
    };

    // Track after page load
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
    }

    // Track memory usage (if available)
    const trackMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryMetrics = {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
        };

        console.log('Memory Usage:', memoryMetrics);
      }
    };

    // Track memory usage periodically
    const memoryInterval = setInterval(trackMemoryUsage, 30000); // Every 30 seconds

    // Cleanup
    return () => {
      window.removeEventListener('load', trackPageLoad);
      clearInterval(memoryInterval);
    };
  }, []);

  return <>{children}</>;
});

PerformanceMonitor.displayName = 'PerformanceMonitor';