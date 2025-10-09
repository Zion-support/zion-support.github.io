import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FID',
              value: Math.round(entry.processingStart - entry.startTime),
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000),
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FCP:', entry.startTime);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FCP',
              value: Math.round(entry.startTime),
            });
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Time to First Byte (TTFB)
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const ttfb = navigation.responseStart - navigation.requestStart;
        console.log('TTFB:', ttfb);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'TTFB',
            value: Math.round(ttfb),
          });
        }
      });
    };

    // Resource timing monitoring
    const monitorResourceTiming = () => {
      window.addEventListener('load', () => {
        const resources = performance.getEntriesByType('resource');
        
        resources.forEach((resource) => {
          const duration = resource.responseEnd - resource.startTime;
          const size = resource.transferSize || 0;
          
          // Log slow resources
          if (duration > 1000) {
            console.warn('Slow resource:', resource.name, duration + 'ms');
          }
          
          // Log large resources
          if (size > 100000) { // 100KB
            console.warn('Large resource:', resource.name, Math.round(size / 1024) + 'KB');
          }
        });
      });
    };

    // Memory usage monitoring (if available)
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + 'MB',
        });
      }
    };

    // Network information monitoring
    const monitorNetworkInfo = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        console.log('Network info:', {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink + 'Mbps',
          rtt: connection.rtt + 'ms',
        });
      }
    };

    // Initialize monitoring
    measureWebVitals();
    monitorResourceTiming();
    monitorMemoryUsage();
    monitorNetworkInfo();

    // Monitor performance every 30 seconds
    const performanceInterval = setInterval(() => {
      monitorMemoryUsage();
    }, 30000);

    // Cleanup
    return () => {
      clearInterval(performanceInterval);
    };
  }, []);

  return null;
};

export default PerformanceMonitor;