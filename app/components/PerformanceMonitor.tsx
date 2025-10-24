'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  loadTime?: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const metrics: PerformanceMetrics = {};

    // Track page load time
    const trackLoadTime = () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      metrics.loadTime = loadTime;
      
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'page_load_time', {
          value: Math.round(loadTime),
          custom_parameter: 'load_time_ms'
        });
      }
    };

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  metric_name: 'FCP',
                  metric_value: Math.round(entry.startTime),
                  metric_rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs_improvement' : 'poor'
                });
              }
            }
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'LCP',
              metric_value: Math.round(lastEntry.startTime),
              metric_rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
            });
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            metrics.fid = entry.processingStart - entry.startTime;
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                metric_name: 'FID',
                metric_value: Math.round(metrics.fid),
                metric_rating: metrics.fid < 100 ? 'good' : metrics.fid < 300 ? 'needs_improvement' : 'poor'
              });
            }
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          metrics.cls = clsValue;
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'CLS',
              metric_value: Math.round(clsValue * 1000) / 1000,
              metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Track Time to First Byte (TTFB)
    const trackTTFB = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        metrics.ttfb = navigation.responseStart - navigation.requestStart;
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            metric_name: 'TTFB',
            metric_value: Math.round(metrics.ttfb),
            metric_rating: metrics.ttfb < 800 ? 'good' : metrics.ttfb < 1800 ? 'needs_improvement' : 'poor'
          });
        }
      }
    };

    // Track resource loading performance
    const trackResourcePerformance = () => {
      const resources = performance.getEntriesByType('resource');
      let totalResourceSize = 0;
      let slowResources = 0;

      resources.forEach((resource: any) => {
        totalResourceSize += resource.transferSize || 0;
        if (resource.duration > 1000) { // Resources taking more than 1 second
          slowResources++;
        }
      });

      if (window.gtag) {
        window.gtag('event', 'resource_performance', {
          total_resources: resources.length,
          total_size: Math.round(totalResourceSize / 1024), // Size in KB
          slow_resources: slowResources
        });
      }
    };

    // Track memory usage (if available)
    const trackMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        if (window.gtag) {
          window.gtag('event', 'memory_usage', {
            used_js_heap_size: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
            total_js_heap_size: Math.round(memory.totalJSHeapSize / 1024 / 1024), // MB
            js_heap_size_limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) // MB
          });
        }
      }
    };

    // Initialize tracking
    if (document.readyState === 'complete') {
      trackLoadTime();
      trackWebVitals();
      trackTTFB();
      trackResourcePerformance();
      trackMemoryUsage();
    } else {
      window.addEventListener('load', () => {
        trackLoadTime();
        trackWebVitals();
        trackTTFB();
        trackResourcePerformance();
        trackMemoryUsage();
      });
    }

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (window.gtag) {
          window.gtag('event', 'page_visible', {
            page_title: document.title,
            page_location: window.location.href
          });
        }
      } else {
        if (window.gtag) {
          window.gtag('event', 'page_hidden', {
            page_title: document.title,
            page_location: window.location.href
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;