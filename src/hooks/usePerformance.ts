/**
 * Performance Monitoring Hook
 * Provides React hooks for performance monitoring and optimization
 */
import { useEffect, useCallback, useRef } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';
import { analytics } from '../utils/analytics';

/**
 * Hook for monitoring page load performance
 */
export const usePageLoadPerformance = () => {
  useEffect(() => {
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            domInteractive: navigation.domInteractive - navigation.fetchStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          };
          // Track each metric
          Object.entries(metrics).forEach(([key, value]) => {
            performanceOptimizer.trackPerformance(`page_load_${key}`, value);
          });
        }
      }
    };
    
    // Track immediately if page is already loaded
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      // Wait for load event
      window.addEventListener('load', trackPageLoad);
    }
    
    return () => window.removeEventListener('load', trackPageLoad);
  }, []);
};
/**
 * Hook for monitoring resource loading performance
 */
export const useResourcePerformance = () => {
  useEffect(() => {
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          performanceOptimizer.trackPerformance(
            `resource_${resourceEntry.name.split('.').pop()}`,
            resourceEntry.duration,
            'ms'
          );
        }
      });
    });
    observer.observe({ entryTypes: ['resource'] });
    return () => observer.disconnect();
  }, []);
};

/**
 * Hook for monitoring long tasks
 */
export const useLongTaskMonitoring = () => {
  useEffect(() => {
    const observer = performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
      entries.forEach((entry: PerformanceEntry) => {
        performanceOptimizer.trackPerformance('long_task', entry.duration, 'ms');
      });
    });
    
    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};