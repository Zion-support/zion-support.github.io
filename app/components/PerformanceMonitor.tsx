import React, { useEffect, useCallback } from 'react';
import { performanceUtils } from '../utils/performanceUtils';

interface PerformanceMetrics {
  cls: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  inp: number;
}

const PerformanceMonitor: React.FC = () => {
  const handleMetric = useCallback((metric: any) => {
    // Store metrics in localStorage for analysis
    const metrics = JSON.parse(localStorage.getItem('performance-metrics') || '{}');
    metrics[metric.name] = metric.value;
    localStorage.setItem('performance-metrics', JSON.stringify(metrics));

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with your analytics service here
      console.log('Performance metric:', metric);
    }
  }, []);

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(handleMetric);
        onFCP(handleMetric);
        onLCP(handleMetric);
        onTTFB(handleMetric);
        onINP(handleMetric);
      }).catch(() => {
        // Silently fail if web-vitals is not available
      });
    }

    // Monitor performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const metrics = {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
            };
            console.log('Navigation timing:', metrics);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
      });
    }

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry.duration + 'ms');
          }
        }
      });
      
      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        // Long task observer not supported
      }
    }

    return () => {
      observer?.disconnect();
      longTaskObserver?.disconnect();
    };
  }, [handleMetric]);

  return null;
};

export default React.memo(PerformanceMonitor);
