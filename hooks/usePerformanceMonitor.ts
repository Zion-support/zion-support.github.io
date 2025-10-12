'use client';
import { useEffect } from 'react';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production or when debug flag is set
    const shouldMonitor = process.env.NODE_ENV === 'production' || 
                         localStorage.getItem('debug-performance') === 'true';

    if (!shouldMonitor) return;

    // Measure Core Web Vitals
    onCLS((metric) => {
      console.log('CLS:', metric);
      // Send to analytics service
      sendToAnalytics('CLS', metric.value);
    });

    onFID((metric) => {
      console.log('FID:', metric);
      sendToAnalytics('FID', metric.value);
    });

    onFCP((metric) => {
      console.log('FCP:', metric);
      sendToAnalytics('FCP', metric.value);
    });

    onLCP((metric) => {
      console.log('LCP:', metric);
      sendToAnalytics('LCP', metric.value);
    });

    onTTFB((metric) => {
      console.log('TTFB:', metric);
      sendToAnalytics('TTFB', metric.value);
    });

    // Monitor additional performance metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const metrics = {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              domInteractive: navEntry.domInteractive - navEntry.navigationStart,
              totalLoadTime: navEntry.loadEventEnd - navEntry.navigationStart
            };
            
            console.log('Navigation Timing:', metrics);
            sendToAnalytics('NavigationTiming', metrics);
          }
        }
      });

      observer.observe({ 
        entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] 
      });
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryMetrics = {
        used: Math.round(memory.usedJSHeapSize / 1048576),
        total: Math.round(memory.totalJSHeapSize / 1048576),
        limit: Math.round(memory.jsHeapSizeLimit / 1048576)
      };
      
      console.log('Memory Usage:', memoryMetrics);
      sendToAnalytics('MemoryUsage', memoryMetrics);
    }

    // Monitor resource loading
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const resourceMetrics = {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize,
              type: resourceEntry.initiatorType
            };
            
            // Only log slow resources
            if (resourceEntry.duration > 1000) {
              console.log('Slow Resource:', resourceMetrics);
              sendToAnalytics('SlowResource', resourceMetrics);
            }
          }
        }
      });

      resourceObserver.observe({ entryTypes: ['resource'] });
    }

  }, []);

  const sendToAnalytics = (metricName: string, value: any) => {
    // Send to your analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: metricName,
        metric_value: typeof value === 'number' ? value : JSON.stringify(value),
        event_category: 'Performance',
        event_label: 'Core Web Vitals'
      });
    }

    // Also send to custom analytics
    if (typeof window !== 'undefined') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: metricName,
          value: value,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        console.log('Failed to send performance data:', error);
      });
    }
  };
};