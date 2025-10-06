import { useEffect, useCallback, useRef } from 'react';
<<<<<<< HEAD
import performanceOptimizer from '../utils/performanceOptimizer';
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e9bd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc

// Mock analytics object for tracking
const analytics = {
  trackPerformance: (name: string, value: number, unit: string = 'ms') => {
    console.log(`Performance: ${name} = ${value}${unit}`);
  },
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log(`Analytics: ${event} - ${category} - ${action}`, { label, value });
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
            analytics.trackPerformance(key, value);
          });
        }
      }
    };

<<<<<<< HEAD
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

<<<<<<< HEAD
  const trackPerformance = useCallback(() => {
=======
  const preloadResources = useCallback(() => {
    if (typeof window === 'undefined') return;
    performanceOptimizer.preloadCriticalResources();
  }, []);

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;
    performanceOptimizer.lazyLoadImages();
  }, []);

  const trackPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;
    // Track performance metrics
    console.log('Tracking performance...');
  }, []);

  const trackLongTasks = useCallback(() => {
    if (typeof window === 'undefined') return;
    // Track long tasks
    console.log('Tracking long tasks...');
  }, []);

  useEffect(() => {
>>>>>>> cursor/fix-errors-and-merge-to-main-e9bd
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
<<<<<<< HEAD
  }, []);

  const trackLongTasks = useCallback(() => {
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
  }, []);

  const trackLongTasks = useCallback(() => {
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  }, []);

  const preloadResources = useCallback(() => {
    if (typeof window === 'undefined') return;
    // Add preloading logic here
  }, []);

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;
    // Add image optimization logic here
  }, []);

  useEffect(() => {
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-e9bd
    trackPerformance();
    const longTaskObserver = trackLongTasks();
    preloadResources();
    optimizeImages();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (longTaskObserver) {
        longTaskObserver.disconnect();
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

<<<<<<< HEAD
    const observer = new PerformanceObserver((entries) => {
      entries.getEntries().forEach((entry) => {
    const observer = new PerformanceObserver((entries: PerformanceEntryList) => {
      entries.forEach((entry: PerformanceEntry) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
=======
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
        }
>>>>>>> cursor/fix-errors-and-merge-to-main-e9bd
      });
    });

    observer.observe({ entryTypes: ['longtask'] });

    return () => {
      observer.disconnect();
    };
=======
    // Track page load after component mounts
    const timeoutId = setTimeout(trackPageLoad, 100);
    
    return () => clearTimeout(timeoutId);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
  }, []);
};

/**
 * Hook for monitoring component render performance
 */
export const useRenderPerformance = (componentName: string) => {
  const renderStart = useRef<number>(0);
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderStart.current = performance.now();
    renderCount.current += 1;
  });

  useEffect(() => {
    if (renderStart.current > 0) {
      const renderTime = performance.now() - renderStart.current;
      analytics.trackPerformance(`${componentName}_render`, renderTime);
      
      if (renderTime > 16) { // More than one frame
        console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
      }
    }
  });
};

/**
 * Hook for monitoring user interactions
 */
export const useInteractionPerformance = () => {
  const trackInteraction = useCallback((eventName: string, startTime: number) => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    analytics.trackPerformance(`interaction_${eventName}`, duration);
    
    if (duration > 100) { // More than 100ms
      console.warn(`Slow interaction detected: ${eventName} took ${duration.toFixed(2)}ms`);
    }
  }, []);

  return { trackInteraction };
};

/**
 * Hook for monitoring memory usage
 */
export const useMemoryPerformance = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        if (memory) {
          const metrics = {
            usedJSHeapSize: memory.usedJSHeapSize,
            totalJSHeapSize: memory.totalJSHeapSize,
            jsHeapSizeLimit: memory.jsHeapSizeLimit,
          };
          
          Object.entries(metrics).forEach(([key, value]) => {
            analytics.trackPerformance(`memory_${key}`, value, 'bytes');
          });
        }
      };

      // Check memory every 30 seconds
      const intervalId = setInterval(checkMemory, 30000);
      
      return () => clearInterval(intervalId);
    }
  }, []);
};

/**
 * Hook for monitoring Core Web Vitals
 */
export const useWebVitals = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            analytics.trackPerformance('FCP', entry.startTime);
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        analytics.trackPerformance('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = entry.processingStart - entry.startTime;
          analytics.trackPerformance('FID', fid);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            analytics.trackPerformance('CLS', clsValue);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);
<<<<<<< HEAD
};

export { usePageLoadPerformance, useMemoryMonitoring };
};
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
=======
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e9bd
