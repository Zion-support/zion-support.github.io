'use client';

import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', entry.value);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    // Memory usage monitoring
    const handleMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
        };
        
        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }
    };

    // Check memory usage every 30 seconds
    const memoryInterval = setInterval(handleMemoryUsage, 30000);

    // Cleanup
    return () => {
      observer?.disconnect();
      clearInterval(memoryInterval);
    };
  }, []);
};