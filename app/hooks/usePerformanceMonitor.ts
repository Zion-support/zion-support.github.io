'use client';

import { useEffect, useCallback } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor page load performance
    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        };

        console.log('Performance Metrics:', metrics);

        // Send to analytics if available
        if ('gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
          gtag('event', 'page_performance', {
            event_category: 'performance',
            dom_content_loaded: Math.round(metrics.domContentLoaded),
            load_complete: Math.round(metrics.loadComplete),
            total_load_time: Math.round(metrics.totalLoadTime),
          });
        }
      }
    };

    // Monitor memory usage
    const handleMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryMetrics = {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
        };

        console.log('Memory Usage:', memoryMetrics);

        // Send to analytics if available
        if ('gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
          gtag('event', 'memory_usage', {
            event_category: 'performance',
            used_js_heap_size: Math.round(memoryMetrics.usedJSHeapSize / 1024 / 1024), // Convert to MB
            total_js_heap_size: Math.round(memoryMetrics.totalJSHeapSize / 1024 / 1024), // Convert to MB
            js_heap_size_limit: Math.round(memoryMetrics.jsHeapSizeLimit / 1024 / 1024), // Convert to MB
          });
        }
      }
    };

    // Set up event listeners
    window.addEventListener('load', handleLoad);
    
    // Monitor memory usage after page load
    setTimeout(handleMemoryUsage, 5000);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const measurePerformance = useCallback(() => {
    // Measure page load time
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
      };
    }
    
    return null;
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
      };
    }
    
    return null;
  }, []);

  const measureResourceTiming = useCallback(() => {
    const resources = performance.getEntriesByType('resource');
    return resources.map(resource => ({
      name: resource.name,
      duration: resource.duration,
      transferSize: resource.transferSize,
      encodedBodySize: resource.encodedBodySize,
      decodedBodySize: resource.decodedBodySize,
    }));
  }, []);

  return {
    measurePerformance,
    measureMemoryUsage,
    measureResourceTiming,
  };
};