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
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          
          analytics.trackPerformance('page_load_time', loadTime);
          analytics.trackPerformance('dom_content_loaded', domContentLoaded);
        }
      }
    };

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      trackPageLoad();
      return undefined;
    } else {
      window.addEventListener('load', trackPageLoad);
      return () => window.removeEventListener('load', trackPageLoad);
    }
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
    const renderTime = performance.now() - renderStart.current;
    analytics.trackPerformance(`${componentName}_render_time`, renderTime);
    analytics.trackPerformance(`${componentName}_render_count`, renderCount.current, 'times');
  });
};

/**
 * Hook for monitoring memory usage
 */
export const useMemoryMonitoring = () => {
  useEffect(() => {
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);
        
        analytics.trackPerformance('memory_used', usedMB, 'MB');
        analytics.trackPerformance('memory_total', totalMB, 'MB');
      }
    };

    // Check memory every 30 seconds
    const interval = setInterval(checkMemory, 30000);
    checkMemory(); // Initial check

    return () => clearInterval(interval);
  }, []);
};

/**
 * Hook for monitoring long tasks
 */
export const useLongTaskMonitoring = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            analytics.trackPerformance('long_task', entry.duration);
            analytics.track('performance', 'long_task', entry.name, undefined, entry.duration);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['longtask'] });
        return () => observer.disconnect();
      } catch (error) {
        console.warn('Long task monitoring not supported:', error);
        return () => {};
      }
    }
    return () => {};
  }, []);
};

/**
 * Hook for monitoring Core Web Vitals
 */
export const useWebVitals = () => {
  useEffect(() => {
    const trackWebVitals = () => {
      // Track LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            analytics.trackPerformance('lcp', lastEntry.startTime);
          }
        });

        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.warn('LCP monitoring not supported:', error);
        }

        // Track FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fid = (entry as any).processingStart - entry.startTime;
            analytics.trackPerformance('fid', fid);
          }
        });

        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (error) {
          console.warn('FID monitoring not supported:', error);
        }

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
        };
      }
      return undefined;
    };

    trackWebVitals();
  }, []);
};