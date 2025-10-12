'use client';
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
            
            // Send to analytics
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(lastEntry.startTime)
              });
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.warn('LCP measurement failed:', error);
        }

        // FID - First Input Delay
        try {
          const fidObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              const fid = entry.processingStart - entry.startTime;
              console.log('FID:', fid);
              
              // Send to analytics
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  event_category: 'Performance',
                  event_label: 'FID',
                  value: Math.round(fid)
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (error) {
          console.warn('FID measurement failed:', error);
        }

        // CLS - Cumulative Layout Shift
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            }
            console.log('CLS:', clsValue);
            
            // Send to analytics
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000)
              });
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('CLS measurement failed:', error);
        }

        // FCP - First Contentful Paint
        try {
          const fcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              console.log('FCP:', entry.startTime);
              
              // Send to analytics
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  event_category: 'Performance',
                  event_label: 'FCP',
                  value: Math.round(entry.startTime)
                });
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (error) {
          console.warn('FCP measurement failed:', error);
        }

        // TTFB - Time to First Byte
        try {
          const ttfbObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              const ttfb = entry.responseStart - entry.requestStart;
              console.log('TTFB:', ttfb);
              
              // Send to analytics
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  event_category: 'Performance',
                  event_label: 'TTFB',
                  value: Math.round(ttfb)
                });
              }
            });
          });
          ttfbObserver.observe({ entryTypes: ['navigation'] });
        } catch (error) {
          console.warn('TTFB measurement failed:', error);
        }
      }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', measureWebVitals);
    } else {
      measureWebVitals();
    }

    // Monitor resource loading performance
    const monitorResourcePerformance = () => {
      if ('PerformanceObserver' in window) {
        try {
          const resourceObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              if (entry.duration > 1000) { // Resources taking more than 1 second
                console.warn('Slow resource:', entry.name, entry.duration);
              }
            });
          });
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch (error) {
          console.warn('Resource monitoring failed:', error);
        }
      }
    };

    monitorResourcePerformance();

    // Monitor memory usage
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
        });
      }
    };

    // Monitor memory usage every 30 seconds
    const memoryInterval = setInterval(monitorMemoryUsage, 30000);

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
    };
  }, []);
};