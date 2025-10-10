#!/usr/bin/env node

import fs from 'fs';

const content = `'use client';
import { useEffect } from 'react';

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
            event_label: 'page_load',
            value: Math.round(metrics.totalLoadTime),
          });
        }
      }
    };

    // Monitor resource timing
    const handleResourceTiming = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(resource => resource.duration > 1000);
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources);
      }
    };

    // Monitor memory usage
    const handleMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB',
        });
      }
    };

    // Add event listeners
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Monitor resources after a delay
    setTimeout(handleResourceTiming, 2000);
    setTimeout(handleMemoryUsage, 5000);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
};`;

fs.writeFileSync('/workspace/app/hooks/usePerformanceMonitor.ts', content, 'utf8');
console.log('Fixed usePerformanceMonitor hook');