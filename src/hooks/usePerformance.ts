/**
 * Performance Monitoring Hook
 * Provides React hooks for performance monitoring and optimization
 */
import { useEffect, useCallback, useRef } from 'react';
<<<<<<< HEAD
import performanceOptimizer from '../utils/performanceOptimizer';
import { analytics } from '../utils/analytics';
=======

// Mock analytics object for tracking
const analytics = {
  trackPerformance: (name: string, value: number, unit: string = 'ms') => {
    console.log(`Performance: ${name} = ${value}${unit}`);
  },
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log(`Analytics: ${event} - ${category} - ${action}`, { label, value });
  }
};
>>>>>>> cursor/fix-errors-and-merge-to-main-7ea5

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
<<<<<<< HEAD
            loadComplete: navigation.loadEventEnd - navigation.fetchStart,
            firstPaint: 0,
            firstContentfulPaint: 0
          };

          // Track paint metrics if available
          const paintEntries = performance.getEntriesByType('paint');
          paintEntries.forEach(entry => {
            if (entry.name === 'first-paint') {
              metrics.firstPaint = entry.startTime;
            } else if (entry.name === 'first-contentful-paint') {
              metrics.firstContentfulPaint = entry.startTime;
            }
          });

          // Track performance metrics
          analytics.trackPerformance('page_load', metrics.loadComplete);
          analytics.trackPerformance('dom_content_loaded', metrics.domContentLoaded);
          analytics.trackPerformance('first_paint', metrics.firstPaint);
          analytics.trackPerformance('first_contentful_paint', metrics.firstContentfulPaint);
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-7ea5
        }
      }
    };

<<<<<<< HEAD
    // Track page load when component mounts
    trackPageLoad();

    // Track page load on navigation
    const handleNavigation = () => {
      setTimeout(trackPageLoad, 100);
    };

    window.addEventListener('popstate', handleNavigation);
=======
    // Track immediately if page is already loaded
    if (typeof window !== 'undefined' && document.readyState === 'complete') {
      trackPageLoad();
      return;
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
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
        analytics.trackPerformance('long_task', entry.duration, 'ms');
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
>>>>>>> cursor/fix-errors-and-merge-to-main-7ea5
    
    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);
};

/**
<<<<<<< HEAD
 * Hook for monitoring component performance
 */
export const useComponentPerformance = (componentName: string) => {
  const startTime = useRef<number>(0);
=======
 * Hook for measuring component render performance
 */
export const useRenderPerformance = (componentName: string) => {
  const renderStart = useRef<number>(0);
>>>>>>> cursor/fix-errors-and-merge-to-main-7ea5
  const renderCount = useRef<number>(0);

  useEffect(() => {
    startTime.current = performance.now();
    renderCount.current += 1;

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime.current;
      
<<<<<<< HEAD
      analytics.trackPerformance(`${componentName}_render`, renderTime);
      analytics.track('component_performance', 'render', componentName, undefined, renderTime);
=======
      if (renderTime > 16) { // More than one frame at 60fps
        analytics.track(
          'slow_render',
          'performance',
          'detected',
          componentName,
          renderTime
        );
      }
>>>>>>> cursor/fix-errors-and-merge-to-main-7ea5
    };
  });

  return {
    renderCount: renderCount.current
  };
<<<<<<< HEAD
};

/**
 * Hook for monitoring user interactions
 */
export const useInteractionPerformance = () => {
  const trackInteraction = useCallback((action: string, element: string, duration?: number) => {
    analytics.track('user_interaction', 'performance', action, element, duration);
  }, []);

  const trackClick = useCallback((element: string) => {
    const startTime = performance.now();
    return () => {
      const duration = performance.now() - startTime;
      trackInteraction('click', element, duration);
    };
  }, [trackInteraction]);

  const trackHover = useCallback((element: string) => {
    const startTime = performance.now();
    return () => {
      const duration = performance.now() - startTime;
      trackInteraction('hover', element, duration);
    };
  }, [trackInteraction]);

  return {
    trackInteraction,
    trackClick,
    trackHover
  };
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-7ea5
};

/**
 * Hook for monitoring memory usage
 */
export const useMemoryMonitoring = () => {
<<<<<<< HEAD
  useEffect(() => {
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const metrics = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };

        analytics.trackPerformance('memory_used', metrics.used);
        analytics.trackPerformance('memory_total', metrics.total);
        analytics.trackPerformance('memory_limit', metrics.limit);
      }
    };

    // Check memory every 30 seconds
    const interval = setInterval(checkMemory, 30000);
    
    // Initial check
    checkMemory();

    return () => clearInterval(interval);
  }, []);
};

/**
 * Hook for monitoring network performance
 */
export const useNetworkPerformance = () => {
  useEffect(() => {
    const trackNetworkTiming = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const networkMetrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            request: navigation.responseStart - navigation.requestStart,
            response: navigation.responseEnd - navigation.responseStart,
            dom: navigation.domContentLoadedEventEnd - navigation.responseEnd
          };

          Object.entries(networkMetrics).forEach(([key, value]) => {
            analytics.trackPerformance(`network_${key}`, value);
          });
        }
      }
    };

    // Track network timing after page load
    if (document.readyState === 'complete') {
      trackNetworkTiming();
    } else {
      window.addEventListener('load', trackNetworkTiming);
    }

    return () => {
      window.removeEventListener('load', trackNetworkTiming);
    };
  }, []);
};

/**
 * Hook for monitoring scroll performance
 */
export const useScrollPerformance = () => {
  const scrollStartTime = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);

  useEffect(() => {
    const handleScrollStart = () => {
      if (!isScrolling.current) {
        scrollStartTime.current = performance.now();
        isScrolling.current = true;
      }
    };

    const handleScrollEnd = () => {
      if (isScrolling.current) {
        const scrollDuration = performance.now() - scrollStartTime.current;
        analytics.trackPerformance('scroll_duration', scrollDuration);
        analytics.track('user_interaction', 'performance', 'scroll', 'page', scrollDuration);
        isScrolling.current = false;
      }
    };

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      handleScrollStart();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
};

/**
 * Comprehensive performance monitoring hook
 */
export const usePerformanceMonitoring = () => {
  usePageLoadPerformance();
  useMemoryMonitoring();
  useNetworkPerformance();
  useScrollPerformance();

  return {
    trackCustomMetric: (name: string, value: number, unit: string = 'ms') => {
      analytics.trackPerformance(name, value, unit);
    }
  };
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
>>>>>>> cursor/fix-errors-and-merge-to-main-7ea5
};
