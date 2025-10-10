'use client';
import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const metrics: PerformanceMetrics = {};

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
          
          // Send to analytics
          if ('gtag' in window) {
            const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
            gtag('event', 'web_vitals', {
              metric_name: 'LCP',
              metric_value: Math.round(lastEntry.startTime),
              metric_rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
            });
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metrics.fid = entry.processingStart - entry.startTime;
            
            if ('gtag' in window) {
              const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
              gtag('event', 'web_vitals', {
                metric_name: 'FID',
                metric_value: Math.round(entry.processingStart - entry.startTime),
                metric_rating: entry.processingStart - entry.startTime < 100 ? 'good' : entry.processingStart - entry.startTime < 300 ? 'needs_improvement' : 'poor'
              });
            }
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
            }
          });
          metrics.cls = clsValue;
          
          if ('gtag' in window) {
            const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
            gtag('event', 'web_vitals', {
              metric_name: 'CLS',
              metric_value: Math.round(clsValue * 1000) / 1000,
              metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metrics.fcp = entry.startTime;
            
            if ('gtag' in window) {
              const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
              gtag('event', 'web_vitals', {
                metric_name: 'FCP',
                metric_value: Math.round(entry.startTime),
                metric_rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs_improvement' : 'poor'
              });
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          
          if ('gtag' in window) {
            const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
            gtag('event', 'web_vitals', {
              metric_name: 'TTFB',
              metric_value: Math.round(navigationEntry.responseStart - navigationEntry.requestStart),
              metric_rating: navigationEntry.responseStart - navigationEntry.requestStart < 800 ? 'good' : navigationEntry.responseStart - navigationEntry.requestStart < 1800 ? 'needs_improvement' : 'poor'
            });
          }
        }

        // Cleanup observers
        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          fcpObserver.disconnect();
        };
      }
    };

    // Measure page load time
    const measurePageLoad = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        
        if ('gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'page_load_time', {
            load_time: Math.round(loadTime),
            page_title: document.title,
            page_location: window.location.href
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
            // Track slow resources
            if (entry.duration > 1000) {
              if ('gtag' in window) {
                const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
                gtag('event', 'slow_resource', {
                  resource_name: entry.name,
                  resource_duration: Math.round(entry.duration),
                  resource_type: entry.initiatorType
                });
              }
            }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });

        return () => resourceObserver.disconnect();
      }
    };

    // Initialize monitoring
    const cleanupWebVitals = measureWebVitals();
    measurePageLoad();
    const cleanupResources = measureResourceLoading();

    // Cleanup on unmount
    return () => {
      cleanupWebVitals?.();
      cleanupResources?.();
    };
  }, []);

  return null;
};