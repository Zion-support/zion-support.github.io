/**
 * Performance Monitoring Hook
 * Provides React hooks for performance monitoring and optimization
 */
import { useEffect, useCallback, useRef } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { performanceOptimizer } from '../utils/performanceOptimizer';
<<<<<<< HEAD
=======
import { initPerformanceMonitoring, getPerformanceMetrics } from '../utils/performanceOptimizer';
import analytics from '../utils/analytics';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8

<<<<<<< HEAD
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
=======
import performanceOptimizer from '../utils/performanceOptimizer';

// Mock analytics for now - replace with actual analytics implementation
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
const analytics = {
  trackPerformance: (key: string, value: number, unit?: string) => {
    console.log(`Performance: ${key} = ${value}${unit ? ` ${unit}` : ''}`);
  },
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log(`Analytics: ${event} - ${category} - ${action}${label ? ` - ${label}` : ''}${value ? ` - ${value}` : ''}`);
<<<<<<< HEAD
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
=======
// Mock analytics for now - replace with actual analytics implementation
const analytics = {
  trackPerformance: (metric: string, value: number, unit: string = 'ms') => {
    console.log(`Performance metric: ${metric} = ${value}${unit}`);
  },
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log(`Analytics: ${event} - ${category} - ${action}`, { label, value });
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
};
=======
import { analytics } from '../utils/analytics';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
  }
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8

/**
 * Hook for monitoring page load performance
 */
export const usePageLoadPerformance = () => {
  useEffect(() => {
    const trackPageLoad = () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
=======
            domContentLoaded:
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstByte: navigation.responseStart - navigation.requestStart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e98c
=======
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
            domInteractive: navigation.domInteractive - navigation.fetchStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          };
          
          // Track each metric
          Object.entries(metrics).forEach(([key, value]) => {
            performanceOptimizer.trackPerformance(`page_load_${key}`, value);
          });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
          
          // Track overall page load performance
          analytics.track(
            'page_load_complete',
            'performance',
            'complete',
            undefined,
            metrics.totalLoadTime
          );
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
    // Track immediately if page is already loaded
    if (typeof window !== 'undefined' && document.readyState === 'complete') {
      trackPageLoad();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
      return;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
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
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    const observer = performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
=======
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
      entries.forEach((entry: PerformanceEntry) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
=======
        analytics.track(
          'long_task',
          'performance',
          'detected',
          undefined,
          entry.duration
        );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b7c1
=======
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
      });
    });

=======
        performanceOptimizer.trackPerformance('long_task', entry.duration, 'ms');
      });
    });
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Long task monitoring is disabled due to missing performanceOptimizer
    // Long task monitoring not available in this environment
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e98c
  }, []);
<<<<<<< HEAD
};

/**
 * Hook for measuring component render performance
=======
  }, []);
};

/**
 * Hook for monitoring component render performance
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
 */
export const useRenderPerformance = (componentName: string) => {
  const renderStart = useRef<number>(0);
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderStart.current = performance.now();
    renderCount.current += 1;
<<<<<<< HEAD

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
=======
  });

  useEffect(() => {
    const renderTime = performance.now() - renderStart.current;
    analytics.trackPerformance(`render_${componentName}`, renderTime);
    
    if (renderTime > 16) { // 16ms = 60fps threshold
      analytics.track('slow_render', 'performance', 'detected', componentName, renderTime);
    }
  });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
};

/**
 * Hook for monitoring memory usage
 */
export const useMemoryMonitoring = () => {
<<<<<<< HEAD
  useEffect(() => {
<<<<<<< HEAD
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
=======
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: memory.usedJSHeapSize / 1024 / 1024, // MB
          total: memory.totalJSHeapSize / 1024 / 1024, // MB
          limit: memory.jsHeapSizeLimit / 1024 / 1024, // MB
        };
        
        analytics.trackPerformance('memory_used', memoryUsage.used, 'MB');
        analytics.trackPerformance('memory_total', memoryUsage.total, 'MB');
        
        if (memoryUsage.used / memoryUsage.limit > 0.8) {
          analytics.track('high_memory_usage', 'performance', 'warning', undefined, memoryUsage.used);
        }
      }
    };

    const interval = setInterval(checkMemory, 5000);
    checkMemory(); // Check immediately

    return () => clearInterval(interval);
  }, []);
};

/**
 * Hook for monitoring Web Vitals
 */
export const useWebVitals = () => {
  useEffect(() => {
    const trackWebVitals = () => {
      // Track FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            analytics.trackPerformance('fcp', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Track LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          analytics.trackPerformance('lcp', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
      };
    };

    return trackWebVitals();
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
  const memoryRef = useRef<{ usedJSHeapSize: number; totalJSHeapSize: number } | null>(null);

  useEffect(() => {
    const checkMemory = () => {
      if (typeof window !== 'undefined' && (window as any).performance?.memory) {
        const memory = (window as any).performance.memory;
        memoryRef.current = {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
        };
        
        analytics.trackPerformance('memory_used', memory.usedJSHeapSize / 1024 / 1024, 'MB');
        analytics.trackPerformance('memory_total', memory.totalJSHeapSize / 1024 / 1024, 'MB');
      }
    };

    checkMemory();
    const interval = setInterval(checkMemory, 5000);
    return () => clearInterval(interval);
  }, []);

  return memoryRef.current;
};

/**
 * Hook for monitoring component render performance
 */
export const useRenderPerformance = (componentName: string) => {
  const renderStartRef = useRef<number>(0);

  useEffect(() => {
    renderStartRef.current = performance.now();
  });

  useEffect(() => {
    const renderTime = performance.now() - renderStartRef.current;
    analytics.trackPerformance(`render_${componentName}`, renderTime, 'ms');
  });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
};