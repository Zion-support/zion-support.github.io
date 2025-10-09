'use client';
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') return;

    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      if (window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Core Web Vitals
    const vitals = ['CLS', 'FID', 'FCP', 'LCP', 'TTFB'];
    
    vitals.forEach((vital) => {
      if ('web-vitals' in window) {
        (window as any)['web-vitals'].getCLS(reportWebVitals);
        (window as any)['web-vitals'].getFID(reportWebVitals);
        (window as any)['web-vitals'].getFCP(reportWebVitals);
        (window as any)['web-vitals'].getLCP(reportWebVitals);
        (window as any)['web-vitals'].getTTFB(reportWebVitals);
      }
    });

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            
            // Page load time
            const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            if (window.gtag) {
              window.gtag('event', 'timing_complete', {
                name: 'page_load',
                value: Math.round(loadTime),
              });
            }
          }
          
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            
            // Track slow resources
            if (resourceEntry.duration > 1000) {
              if (window.gtag) {
                window.gtag('event', 'slow_resource', {
                  event_category: 'Performance',
                  event_label: resourceEntry.name,
                  value: Math.round(resourceEntry.duration),
                });
              }
            }
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'resource'] });
    }

    // Memory usage monitoring (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };

      if (window.gtag) {
        window.gtag('event', 'memory_usage', {
          event_category: 'Performance',
          event_label: 'heap_usage',
          value: Math.round((memoryUsage.used / memoryUsage.limit) * 100),
        });
      }
    }

    // Connection monitoring
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (window.gtag) {
        window.gtag('event', 'connection_info', {
          event_category: 'Performance',
          event_label: 'connection_type',
          value: connection.effectiveType === '4g' ? 4 : connection.effectiveType === '3g' ? 3 : 2,
        });
      }
    }

  }, []);

  return null;
};

export default PerformanceMonitor;