// usePerformance - TypeScript definitions and utilities
import { useEffect, useCallback, useRef } from 'react';
import { monitorLongTasks } from '../utils/performanceOptimizer';
import { performanceOptimizer } from '../utils/performanceOptimizer';
import analytics from '../utils/analytics';

export interface usePerformanceConfig {
  // Configuration properties
  enableMonitoring?: boolean;
  trackLongTasks?: boolean;
  trackResourceLoading?: boolean;
}

export interface PerformanceMetrics {
  renderTime: number;
  componentMountTime: number;
  memoryUsage?: number;
  isSlowRender: boolean;
}

export const defaultusePerformanceConfig: usePerformanceConfig = {
  enableMonitoring: true,
  trackLongTasks: true,
  trackResourceLoading: true,
};

const usePerformance = () => {
  // Performance monitoring logic would go here
  return {
    defaultusePerformanceConfig,
  };
};

/**
 * Hook for monitoring page load performance
 */
export const usePageLoadPerformance = () => {
  useEffect(() => {
    const trackPageLoad = () => {
      // Wait for page to be fully loaded
      if (document.readyState === 'complete') {
        const navigation = performance.getEntriesByType(
          'navigation'
        )[0] as PerformanceNavigationTiming;

        if (navigation) {
          const metrics = {
            domContentLoaded:
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstByte: navigation.responseStart - navigation.requestStart,
            domInteractive: navigation.domInteractive - navigation.fetchStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          };

          // Track each metric
          Object.entries(metrics).forEach(([key, value]) => {
            analytics.trackPerformance(`page_load_${key}`, value);
          });

          // Track overall page load performance
          analytics.track(
            'page_load_complete',
            'performance',
            'complete',
            undefined,
            metrics.totalLoadTime
          );
        }
      }
    };

    // Track immediately if page is already loaded
    if (document.readyState === 'complete') {
      trackPageLoad();
      return;
    } else {
      // Wait for load event
      window.addEventListener('load', trackPageLoad);
      return () => window.removeEventListener('load', trackPageLoad);
    }
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
          analytics.trackPerformance(
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
    const observer = monitorLongTasks((entries: PerformanceEntry[]) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track(
          'long_task',
          'performance',
          'detected',
          undefined,
          entry.duration
        );
      });
    });

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;