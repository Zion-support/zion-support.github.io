'use client';

import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measureWebVitals = () => {
      if (typeof window === 'undefined') return;

      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          if (lastEntry) {
            const lcp = lastEntry.startTime;
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(lcp)
              });
            }
          }
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(fid)
              });
            }
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000)
            });
          }
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Monitor memory usage
    const handleMemoryUsage = () => {
      if (typeof window !== 'undefined' && (performance as any).memory) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
        };
        
        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          // Memory usage is high
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'memory_warning', {
              event_category: 'Performance',
              event_label: 'High Memory Usage',
              value: memoryUsage.used
            });
          }
        }
      }
    };

    // Set up monitoring
    if (document.readyState === 'complete') {
      measureWebVitals();
      handleMemoryUsage();
    } else {
      window.addEventListener('load', () => {
        measureWebVitals();
        handleMemoryUsage();
      });
    }

    // Monitor memory usage periodically
    const memoryInterval = setInterval(handleMemoryUsage, 30000);

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
    };
  }, []);
};