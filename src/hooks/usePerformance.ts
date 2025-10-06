/**
 * Performance Monitoring Hook
 * Provides React hooks for performance monitoring and optimization
 */
import { useEffect, useCallback, useRef } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';

<<<<<<< HEAD
<<<<<<< HEAD
// Mock analytics object for tracking
const analytics = {
  trackPerformance: (name: string, value: number, unit: string = 'ms') => {
    console.log(`Performance: ${name} = ${value}${unit}`);
  },
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log(`Analytics: ${event} - ${category} - ${action}`, { label, value });
=======
// Mock analytics object for performance tracking
const analytics = {
  trackPerformance: (key: string, value: number, unit?: string) => {
    console.log(`Performance: ${key} = ${value}${unit ? ` ${unit}` : ''}`);
  },
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log(`Analytics: ${event} - ${category} - ${action}${label ? ` - ${label}` : ''}${value ? ` - ${value}` : ''}`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
  }
=======
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
      const mountDuration = performance.now() - mountTimeRef.current;
      analytics.trackPerformance(`${componentName}_mount_time`, mountDuration);
    };
  }, [componentName]);

  // Track render performance
  const trackRender = useCallback(() => {
    if (!trackRenderTime) return;

    renderStartTimeRef.current = performance.now();

    // Use requestAnimationFrame to measure actual render time
    requestAnimationFrame(() => {
      const renderTime = performance.now() - renderStartTimeRef.current;
      const isSlowRender = renderTime > slowRenderThreshold;

      const metrics: PerformanceMetrics = {
        renderTime,
        componentMountTime: performance.now() - mountTimeRef.current,
        isSlowRender,
      };

      // Track memory usage if available
      if (trackMemoryUsage && 'memory' in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e98c
};

/**
 * Hook for monitoring page load performance
 */
export const usePageLoadPerformance = () => {
  useEffect(() => {
    const trackPageLoad = () => {
<<<<<<< HEAD
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
<<<<<<< HEAD
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
=======
            domContentLoaded:
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstByte: navigation.responseStart - navigation.requestStart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e98c
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
=======
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const metrics = {
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
      }
    };

    // Track immediately if page is already loaded
    if (typeof window !== 'undefined' && document.readyState === 'complete') {
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
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

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
<<<<<<< HEAD
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    const observer = performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });

    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
=======
    // Long task monitoring is disabled due to missing performanceOptimizer
    // Long task monitoring not available in this environment
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e98c
  }, []);
<<<<<<< HEAD
};

/**
 * Hook for measuring component render performance
 */
export const useRenderPerformance = (componentName: string) => {
  const renderStart = useRef<number>(0);
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderStart.current = performance.now();
    renderCount.current += 1;

    return () => {
      const renderTime = performance.now() - renderStart.current;
      analytics.trackPerformance(
        `component_render_${componentName}`,
        renderTime
      );
      
      if (renderTime > 16) { // More than one frame at 60fps
        analytics.track(
          'slow_render',
          'performance',
          'detected',
          componentName,
          renderTime
        );
      }
    };
  });

  return {
    renderCount: renderCount.current,
    measureRender: useCallback((fn: () => void) => {
      const start = performance.now();
      fn();
      const duration = performance.now() - start;
      analytics.trackPerformance(`manual_${componentName}`, duration);
      return duration;
    }, [componentName])
  };
};

/**
 * Hook for monitoring memory usage
 */
export const useMemoryMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !(performance as any).memory) {
      return;
    }

    const checkMemory = () => {
      const memory = (performance as any).memory;
      const memoryUsage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
        percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
      };

      analytics.trackPerformance('memory_used', memoryUsage.used, 'bytes');
      analytics.trackPerformance('memory_percentage', memoryUsage.percentage, '%');

      if (memoryUsage.percentage > 80) {
        analytics.track('high_memory_usage', 'performance', 'warning', undefined, memoryUsage.percentage);
      }
    };

    // Check memory every 30 seconds
    const interval = setInterval(checkMemory, 30000);
    checkMemory(); // Initial check

    return () => clearInterval(interval);
  }, []);
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0883
};