/**
 * Performance Monitoring Hook
 * Provides React hooks for performance monitoring and optimization
 */

import { useEffect, useCallback, useRef } from 'react';
import performanceOptimizer from '../utils/performanceOptimizer';
import analytics from '../utils/analytics';

export interface PerformanceMetrics {
  renderTime: number;
  componentMountTime: number;
  memoryUsage?: number;
  isSlowRender: boolean;
}

export interface UsePerformanceOptions {
  componentName: string;
  trackRenderTime?: boolean;
  trackMemoryUsage?: boolean;
  slowRenderThreshold?: number; // in milliseconds
}

/**
 * Hook for monitoring component performance
 */
export const usePerformance = (options: UsePerformanceOptions) => {
  const {
    componentName,
    trackRenderTime = true,
    trackMemoryUsage = false,
    slowRenderThreshold = 16, // 60fps threshold
  } = options;

  const mountTimeRef = useRef<number>(0);
  const renderStartTimeRef = useRef<number>(0);

  // Track component mount time
  useEffect(() => {
    mountTimeRef.current = performance.now();

    return () => {
//       const mountDuration = performance.now() - mountTimeRef.current;
      analytics.trackPerformance(`${componentName}_mount_time`, mountDuration);
    };
  }, [componentName]);

  // Track render performance
  const trackRender = useCallback(() => {
    if (!trackRenderTime) return;

    renderStartTimeRef.current = performance.now();

    // Use requestAnimationFrame to measure actual render time
    requestAnimationFrame(() => {
//       const renderTime = performance.now() - renderStartTimeRef.current;
//       const isSlowRender = renderTime > slowRenderThreshold;

      const metrics: PerformanceMetrics = {
        renderTime,
        componentMountTime: performance.now() - mountTimeRef.current,
        isSlowRender,
      };

      // Track memory usage if available
      if (trackMemoryUsage && 'memory' in performance) {
        const memory = (performance as any).memory;
        metrics.memoryUsage = memory.usedJSHeapSize;
      }

      // Send to analytics
      analytics.trackPerformance(`${componentName}_render_time`, renderTime);

      if (isSlowRender) {
        analytics.track(
          'slow_render',
          'performance',
          'warning',
          componentName,
          renderTime
        );
      }
    });
  }, [componentName, trackRenderTime, slowRenderThreshold, trackMemoryUsage]);

  return {
    trackRender,
    getMetrics: (): PerformanceMetrics => ({
      renderTime: performance.now() - renderStartTimeRef.current,
      componentMountTime: performance.now() - mountTimeRef.current,
      isSlowRender: false,
    }),
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
            domInteractive:
              navigation.domInteractive - navigation.navigationStart,
            totalLoadTime: navigation.loadEventEnd - navigation.navigationStart,
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
    const observer = performanceOptimizer.monitorLongTasks(entries => {
      entries.forEach(entry => {
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
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
};

export default usePerformance;
