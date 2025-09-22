'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  domContentLoaded: number;
  loadComplete: number;
  totalTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      try {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const metrics: PerformanceMetrics = {
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
          totalTime: perfData.loadEventEnd - perfData.fetchStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
        };

        // Measure Core Web Vitals
        if ('web-vitals' in window) {
          // This would be imported from web-vitals library in a real implementation
          console.log('Core Web Vitals monitoring enabled');
        }

        // Log performance metrics
        console.group('🚀 Performance Metrics');
        console.log('DOM Content Loaded:', `${metrics.domContentLoaded.toFixed(2)}ms`);
        console.log('Load Complete:', `${metrics.loadComplete.toFixed(2)}ms`);
        console.log('Total Load Time:', `${metrics.totalTime.toFixed(2)}ms`);
        console.log('First Paint:', `${metrics.firstPaint.toFixed(2)}ms`);
        console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
        console.groupEnd();

        // Send to analytics service (placeholder)
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'page_performance', {
            event_category: 'Performance',
            custom_map: {
              metric_1: 'dom_content_loaded',
              metric_2: 'total_load_time',
            },
            metric_1: Math.round(metrics.domContentLoaded),
            metric_2: Math.round(metrics.totalTime),
          });
        }

        // Store metrics for debugging
        (window as any).__performanceMetrics = metrics;

      } catch (error) {
        console.error('Performance monitoring error:', error);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime.toFixed(2) + 'ms');
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime + 'ms');
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return null; // This component doesn't render anything
}