'use client';
import { useEffect } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: PerformanceMetric) => {
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (typeof window !== 'undefined') {
        fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            id: metric.id,
            delta: metric.delta,
            url: window.location.href,
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
          }),
        }).catch(() => {
          // Silently fail if analytics endpoint is not available
        });
      }
    };

    // Measure Core Web Vitals using Performance Observer
    const measureWebVitals = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        // Measure LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          sendToAnalytics({
            name: 'LCP',
            value: lastEntry.startTime,
            id: 'lcp',
            delta: lastEntry.startTime,
            entries: [lastEntry]
          });
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // LCP observer not supported
        }

        // Measure FID
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            sendToAnalytics({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              id: 'fid',
              delta: entry.processingStart - entry.startTime,
              entries: [entry]
            });
          });
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          // FID observer not supported
        }

        // Measure CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          sendToAnalytics({
            name: 'CLS',
            value: clsValue,
            id: 'cls',
            delta: clsValue,
            entries: []
          });
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // CLS observer not supported
        }
      }
    };

    measureWebVitals();

    // Monitor page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          const firstByte = navigation.responseStart - navigation.fetchStart;
          
          sendToAnalytics({
            name: 'PageLoad',
            value: loadTime,
            id: 'page-load',
            delta: loadTime,
            entries: [navigation]
          });
          
          sendToAnalytics({
            name: 'DOMContentLoaded',
            value: domContentLoaded,
            id: 'dom-content-loaded',
            delta: domContentLoaded,
            entries: [navigation]
          });

          sendToAnalytics({
            name: 'TTFB',
            value: firstByte,
            id: 'ttfb-custom',
            delta: firstByte,
            entries: [navigation]
          });
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor resource loading performance
    const measureResourcePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const resources = performance.getEntriesByType('resource');
        
        resources.forEach((resource: any) => {
          if (resource.duration > 1000) { // Log resources taking more than 1 second
            console.warn('Slow resource detected:', {
              name: resource.name,
              duration: resource.duration,
              size: resource.transferSize,
              type: resource.initiatorType,
            });

            // Send slow resource alert
            sendToAnalytics({
              name: 'SlowResource',
              value: resource.duration,
              id: 'slow-resource',
              delta: resource.duration,
              entries: [resource]
            });
          }
        });
      }
    };

    // Monitor after a delay to allow resources to load
    const timeoutId = setTimeout(measureResourcePerformance, 3000);

    // Monitor memory usage
    const measureMemoryUsage = () => {
      if (typeof window !== 'undefined' && 'memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit,
        };

        sendToAnalytics({
          name: 'MemoryUsage',
          value: memoryUsage.used,
          id: 'memory-usage',
          delta: memoryUsage.used,
          entries: []
        });
      }
    };

    // Monitor memory usage periodically
    const memoryInterval = setInterval(measureMemoryUsage, 30000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(memoryInterval);
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);
};