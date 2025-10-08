#!/usr/bin/env node

import fs from 'fs';

// // Read the file
// const content = fs.readFileSync('src/hooks/usePerformance.ts', 'utf8');

// Fix the duplicate analytics definitions and syntax errors
const fixedContent = `/**
 * Performance Monitoring Hook
 * Provides React hooks for performance monitoring and optimization
 */
import { useEffect, useCallback, useRef } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';
import { analytics } from '../utils/analytics';

/**
 * Hook for monitoring page load performance
 */
export const usePageLoadPerformance = () => {
  useEffect(() => {
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            loadComplete: navigation.loadEventEnd - navigation.fetchStart,
            firstPaint: 0,
            firstContentfulPaint: 0
          };

          // Track paint metrics if available
          const _paintEntries = performance.getEntriesByType('paint');
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
        }
      }
    };

    // Track page load when component mounts
    trackPageLoad();

    // Track page load on navigation
    const handleNavigation = () => {
      setTimeout(trackPageLoad, 100);
    };

    window.addEventListener('popstate', handleNavigation);
    
    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);
};

/**
 * Hook for monitoring component performance
 */
export const useComponentPerformance = (componentName: string) => {
  const _startTime = useRef<number>(0);
  const _renderCount = useRef<number>(0);

  useEffect(() => {
    startTime.current = performance.now();
    renderCount.current += 1;

    return () => {
//       const endTime = performance.now();
//       const renderTime = endTime - startTime.current;
      
      analytics.trackPerformance(\`\${componentName}_render\`, renderTime);
      analytics.track('component_performance', 'render', componentName, undefined, renderTime);
    };
  });

  return {
    renderCount: renderCount.current
  };
};

/**
 * Hook for monitoring user interactions
 */
export const useInteractionPerformance = () => {
  const trackInteraction = useCallback((action: string, element: string, duration?: number) => {
    analytics.track('user_interaction', 'performance', action, element, duration);
  }, []);

  const trackClick = useCallback((element: string) => {
    const _startTime = performance.now();
    return () => {
//       const duration = performance.now() - startTime;
      trackInteraction('click', element, duration);
    };
  }, [trackInteraction]);

  const trackHover = useCallback((element: string) => {
    const _startTime = performance.now();
    return () => {
//       const duration = performance.now() - startTime;
      trackInteraction('hover', element, duration);
    };
  }, [trackInteraction]);

  return {
    trackInteraction,
    trackClick,
    trackHover
  };
};

/**
 * Hook for monitoring memory usage
 */
export const useMemoryMonitoring = () => {
  useEffect(() => {
    const checkMemory = () => {
      if ('memory' in performance) {
        const _memory = (performance as any).memory;
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
//     const interval = setInterval(checkMemory, 30000);
    
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
        const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const networkMetrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            request: navigation.responseStart - navigation.requestStart,
            response: navigation.responseEnd - navigation.responseStart,
            dom: navigation.domContentLoadedEventEnd - navigation.responseEnd
          };

          Object.entries(networkMetrics).forEach(([key, value]) => {
            analytics.trackPerformance(\`network_\${key}\`, value);
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
  const _scrollStartTime = useRef<number>(0);
  const _isScrolling = useRef<boolean>(false);

  useEffect(() => {
    const handleScrollStart = () => {
      if (!isScrolling.current) {
        scrollStartTime.current = performance.now();
        isScrolling.current = true;
      }
    };

    const handleScrollEnd = () => {
      if (isScrolling.current) {
//         const scrollDuration = performance.now() - scrollStartTime.current;
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
};
`;

// Write the fixed content
fs.writeFileSync('src/hooks/usePerformance.ts', fixedContent);

// 