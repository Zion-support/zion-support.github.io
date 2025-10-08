/**
 * Performance Monitoring Hook
 * Provides React hooks for performance monitoring and optimization
 */
import { useEffect, useCallback, useRef } from 'react';

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
          
          analytics.trackPerformance('pageLoad', metrics.totalLoadTime);
          analytics.trackPerformance('domContentLoaded', metrics.domContentLoaded);
          analytics.trackPerformance('domInteractive', metrics.domInteractive);
        }
      }
    };

    // Track initial page load
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
      return () => window.removeEventListener('load', trackPageLoad);
    }
    
    return undefined;
  }, []);
};

/**
 * Hook for monitoring component render performance
 */
export const useRenderPerformance = (componentName: string) => {
  const renderStart = useRef<number>(0);
  const renderCount = useRef<number>(0);

  useEffect(() => {

    return () => {
      const renderTime = performance.now() - renderStart.current;
      analytics.trackPerformance(`${componentName}_render`, renderTime);
      analytics.track('component_render', componentName, 'render', undefined, renderTime);
    };
  });

  return {
    renderCount: renderCount.current,
    trackRender: useCallback((action: string) => {
      const renderTime = performance.now() - renderStart.current;
      analytics.trackPerformance(`${componentName}_${action}`, renderTime);
    }, [componentName])
  };
};

/**
 * Hook for monitoring user interactions
 */
export const useInteractionPerformance = () => {
  const trackInteraction = useCallback((interactionType: string, element: string, duration?: number) => {
    analytics.track('user_interaction', interactionType, 'click', element, duration);
    if (duration) {
      analytics.trackPerformance(`${interactionType}_${element}`, duration);
    }
  }, []);

  const trackScroll = useCallback((scrollDepth: number) => {
    analytics.track('user_interaction', 'scroll', 'depth', undefined, scrollDepth);
  }, []);

  const trackResize = useCallback((width: number, height: number) => {
    analytics.track('user_interaction', 'resize', 'viewport', `${width}x${height}`);
  }, []);

  return {
    trackInteraction,
    trackScroll,
    trackResize
  };
};

/**
 * Hook for monitoring memory usage
 */
export const useMemoryPerformance = () => {
  useEffect(() => {
    const trackMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const metrics = {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
        };

        analytics.trackPerformance('memory_used', metrics.usedJSHeapSize, 'bytes');
        analytics.trackPerformance('memory_total', metrics.totalJSHeapSize, 'bytes');
        analytics.trackPerformance('memory_limit', metrics.jsHeapSizeLimit, 'bytes');
      }
    };

    const interval = setInterval(trackMemory, 5000);
    return () => clearInterval(interval);
  }, []);
};

/**
 * Hook for monitoring network performance
 */
export const useNetworkPerformance = () => {
  useEffect(() => {
    const trackNetwork = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        const metrics = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        };

        analytics.track('network_performance', 'connection', 'type', metrics.effectiveType);
        analytics.trackPerformance('network_downlink', metrics.downlink, 'Mbps');
        analytics.trackPerformance('network_rtt', metrics.rtt, 'ms');
      }
    };

    trackNetwork();
    window.addEventListener('online', trackNetwork);
    window.addEventListener('offline', trackNetwork);

    return () => {
      window.removeEventListener('online', trackNetwork);
      window.removeEventListener('offline', trackNetwork);
    };
  }, []);
};

/**
 * Hook for monitoring Core Web Vitals
 */
export const useCoreWebVitals = () => {
  useEffect(() => {
    const trackWebVitals = () => {
      // Track Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            analytics.trackPerformance('lcp', lastEntry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Track First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as any;
            if (fidEntry.processingStart !== undefined) {
              analytics.trackPerformance('fid', fidEntry.processingStart - fidEntry.startTime);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Track Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          analytics.trackPerformance('cls', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
      return undefined;
    };

    if (typeof window !== 'undefined') {
      return trackWebVitals();
    }
    
    return undefined;
  }, []);
};

/**
 * Comprehensive performance monitoring hook
 */
export const usePerformanceMonitoring = (componentName?: string) => {
  usePageLoadPerformance();
  useMemoryPerformance();
  useNetworkPerformance();
  useCoreWebVitals();

  const renderPerformance = componentName ? useRenderPerformance(componentName) : null;
  const interactionPerformance = useInteractionPerformance();

  return {
    renderPerformance,
    interactionPerformance,
    trackCustomMetric: (name: string, value: number, unit?: string) => {
      analytics.trackPerformance(name, value, unit);
    },
    trackCustomEvent: (event: string, category: string, action: string, label?: string, value?: number) => {
      analytics.track(event, category, action, label, value);
    }
  };
};