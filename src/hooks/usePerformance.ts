import { useEffect, useCallback, useRef } from 'react';
import performanceOptimizer from '../utils/performanceOptimizer';

// Mock analytics object for tracking
const analytics = {
  trackPerformance: (name: string, value: number, unit: string = 'ms') => {
    console.log(`Performance: ${name} = ${value}${unit}`);
  },
  track: (event: { action: string; category: string; label?: string; value?: number }) => {
    console.log(`Analytics: ${event.action} - ${event.category} - ${event.label}`, { value: event.value });
  }
};

/**
 * Hook for monitoring page load performance
 */
export const usePageLoadPerformance = () => {
  useEffect(() => {
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            domInteractive: navigation.domInteractive - navigation.fetchStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          };
          
          // Track each metric
          Object.entries(metrics).forEach(([key, value]) => {
            analytics.trackPerformance(`page_load_${key}`, value);
          });
          
          // Track overall page load performance
          analytics.track({
            action: 'page_load_complete',
            category: 'performance',
            label: 'complete',
            value: metrics.totalLoadTime
          });
        }
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
  const observerRef = useRef<PerformanceObserver | null>(null);

  const trackPerformance = useCallback(() => {
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

    observerRef.current = observer;
    observer.observe({ entryTypes: ['resource'] });
  }, []);

  const trackLongTasks = useCallback(() => {
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        analytics.track({
          action: 'long_task',
          category: 'performance',
          label: 'detected',
          value: entry.duration
        });
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
  }, []);

  const preloadResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    performanceOptimizer.preloadCriticalResources();
  }, []);

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    performanceOptimizer.lazyLoadImages();
  }, []);

  useEffect(() => {
    trackPerformance();
    trackLongTasks();
    preloadResources();
    optimizeImages();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [trackPerformance, trackLongTasks, preloadResources, optimizeImages]);

  return {
    trackPerformance,
    trackLongTasks,
    preloadResources,
    optimizeImages,
  };
};

/**
 * Hook for monitoring long tasks
 */
export const useLongTaskMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        analytics.track({
          action: 'long_task',
          category: 'performance',
          label: 'detected',
          value: entry.duration
        });
      });
    });

    observer.observe({ entryTypes: ['longtask'] });

    return () => {
      observer.disconnect();
    };
  }, []);
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
        analytics.track({
          action: 'slow_render',
          category: 'performance',
          label: 'detected',
          value: renderTime
        });
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
        analytics.track({
          action: 'high_memory_usage',
          category: 'performance',
          label: 'warning',
          value: memoryUsage.percentage
        });
      }
    };

    // Check memory every 30 seconds
    const interval = setInterval(checkMemory, 30000);
    checkMemory(); // Initial check

    return () => clearInterval(interval);
  }, []);
};
