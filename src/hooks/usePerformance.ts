/**
 * Performance Monitoring Hook
 * Provides React hooks for performance monitoring and optimization
 */
import { useEffect, useCallback, useRef } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';

//Mock analytics object for tracking
const analytics = {
  trackPerformance: (name: string,
  value: number, unit: string = 'ms') => {
    console.log(`Performance: ${name} = ${value}${unit}`);
  },
  track: (event: string,
  category: string, action: string, label?: string, value?: number) => {
    console.log(`Analytics: ${event} - ${category} - ${action}`, { label, value });
const analytics = {
  trackPerformance: (key: string,
  value: number, unit?: string) => {
    console.log(`Performance: ${key} = ${value}${unit ? ` ${unit}` : ''}`);
  },
  track: (event: string,
  category: string, action: string, label?: string, value?: number) => {
    console.log(`Analytics: ${event} - ${category} - ${action}${label ? ` - ${label}` : ''}${value ? ` - ${value}` : ''}`);
  }
//Mock analytics for now - replace with actual analytics implementation
const analytics = {
  trackPerformance: (metric: string,
  value: number, unit: string = 'ms') => {
    console.log(`Performance metric: ${metric} = ${value}${unit}`);
  },
  track: (event: string,
  category: string, action: string, label?: string, value?: number) => {
    console.log(`Analytics: ${event} - ${category} - ${action}`, { label, value });
  }
};
import { analytics } from '../utils/analytics';
  }
};

/**
 * Hook for monitoring page load performance
 */export const usePageLoadPerformance = () => {
  useEffect(() => {
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            domInteractive: navigation.domInteractive - navigation.fetchStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          };
          
          //Track each metric
          Object.entries(metrics).forEach(([key, value]) => {
            performanceOptimizer.trackPerformance(`page_load_${key}`, value);
          });
          
          //Track overall page load performance
          analytics.track(
            'page_load_complete',
            'performance',
            'complete',
            undefined,
            metrics.totalLoadTime
          );
        }
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const metrics = {
          domInteractive: navigation.domInteractive - navigation.fetchStart,
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        };
        //Track each metric
        Object.entries(metrics).forEach(([key, value]) => {
          analytics.trackPerformance(`page_load_${key}`, value);
        });
        //Track overall page load performance
        analytics.track(
          'page_load_complete',
          'performance',
          'complete',
          undefined,
          metrics.totalLoadTime
        );
      }
    };

    //Track immediately if page is already loaded
    if (typeof window !== 'undefined' && document.readyState === 'complete') {
      trackPageLoad();
      return;
    } else {
      //Wait for load event
      window.addEventListener('load', trackPageLoad);
    }
    
    return () => window.removeEventListener('load', trackPageLoad);
  }, []);
};

/**
 * Hook for monitoring resource loading performance
 */export const useResourcePerformance = () => {
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
 */export const useLongTaskMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    const observer = performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });

        performanceOptimizer.trackPerformance('long_task', entry.duration, 'ms');
      });
    });
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
    
    return () => {
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, []);
};

/**
 * Hook for measuring component render performance
 */export const useRenderPerformance = (componentName: string) => {
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
      
      if (renderTime > 16) { //More than one frame at 60fps
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
  }, []);
};

/**
 * Hook for monitoring memory usage
 */export const useMemoryMonitoring = () => {
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

    //Check memory every 30 seconds
    const interval = setInterval(checkMemory, 30000);
    checkMemory(); //Initial check

    return () => clearInterval(interval);
  }, []);
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: memory.usedJSHeapSize / 1024 /1024, //MB
          total: memory.totalJSHeapSize / 1024 /1024, //MB
          limit: memory.jsHeapSizeLimit / 1024 /1024, //MB
        };
        
        analytics.trackPerformance('memory_used', memoryUsage.used, 'MB');
        analytics.trackPerformance('memory_total', memoryUsage.total, 'MB');
        
        if (memoryUsage.used / memoryUsage.limit > 0.8) {
          analytics.track('high_memory_usage', 'performance', 'warning', undefined, memoryUsage.used);
        }
      }
    };

    const interval = setInterval(checkMemory, 5000);
    checkMemory(); //Check immediately

    return () => clearInterval(interval);
  }, []);
};

/**
 * Hook for monitoring Web Vitals
 */export const useWebVitals = () => {
  useEffect(() => {
    const trackWebVitals = () => {
      //Track FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            analytics.trackPerformance('fcp', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      //Track LCP (Largest Contentful Paint)
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
  }, []);
  const memoryRef = useRef<{ usedJSHeapSize: number; totalJSHeapSize: number } | null>(null);

  useEffect(() => {
    const checkMemory = () => {
      if (typeof window !== 'undefined' && (window as any).performance?.memory) {
        const memory = (window as any).performance.memory;
        memoryRef.current = {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
        };
        
        analytics.trackPerformance('memory_used', memory.usedJSHeapSize / 1024 /1024, 'MB');
        analytics.trackPerformance('memory_total', memory.totalJSHeapSize / 1024 /1024, 'MB');
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
};
