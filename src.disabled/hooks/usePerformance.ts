/**
 * Performance Monitoring Hook
 * Provides React hooks for performance monitoring and optimization
 */
import { useEffect, useCallback, useRef } from 'react';

// Mock analytics object for performance tracking
const analytics = {
  trackPerformance: (name: string, value: number, unit: string = 'ms') => {
//     },
  track: (
    event: string,
    category: string,
    action: string,
    label?: string,
    value?: number
  ) => {
//     },
};

interface PerformanceMetrics {
  renderTime: number;
  componentMountTime: number;
  memoryUsage: number;
  interactionTime: number;
}

interface PerformanceOptions {
  trackRenderTime?: boolean;
  trackMemoryUsage?: boolean;
  trackInteractions?: boolean;
  logToConsole?: boolean;
}

/**
 * Hook for monitoring component performance
 */
export function usePerformance(
  componentName: string,
  options: PerformanceOptions = {}
): {
  metrics: PerformanceMetrics;
  trackRender: () => void;
  trackInteraction: (action: string) => void;
  getPerformanceReport: () => PerformanceMetrics;
} {
  const {
    trackRenderTime = true,
    trackMemoryUsage = true,
    trackInteractions = true,
    logToConsole = false,
  } = options;

  const metricsRef = useRef<PerformanceMetrics>({
    renderTime: 0,
    componentMountTime: 0,
    memoryUsage: 0,
    interactionTime: 0,
  });

  const _renderStartTime = useRef<number>(0);
  const _mountStartTime = useRef<number>(0);

  // Track component mount time
  useEffect(() => {
    mountStartTime.current = performance.now();

    return () => {
      const _mountTime = performance.now() - mountStartTime.current;
      metricsRef.current.componentMountTime = mountTime;

      if (logToConsole) {
//         console.log(
          `Component ${componentName} mount time: ${mountTime.toFixed(2)}ms`
        );
      }

      analytics.trackPerformance(`${componentName}_mount`, mountTime);
    };
  }, [componentName, logToConsole]);

  // Track memory usage
  useEffect(() => {
    if (trackMemoryUsage && 'memory' in performance) {
      const _memory = (performance as any).memory;
      if (memory) {
        metricsRef.current.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB

        if (logToConsole) {
//           console.log(
            `Component ${componentName} memory usage: ${metricsRef.current.memoryUsage.toFixed(2)}MB`
          );
        }

        analytics.trackPerformance(
          `${componentName}_memory`,
          metricsRef.current.memoryUsage,
          'MB'
        );
      }
    }
  }, [componentName, trackMemoryUsage, logToConsole]);

  const trackRender = useCallback(() => {
    if (trackRenderTime) {
      renderStartTime.current = performance.now();

      // Use requestAnimationFrame to measure actual render time
      requestAnimationFrame(() => {
        const _renderTime = performance.now() - renderStartTime.current;
        metricsRef.current.renderTime = renderTime;

        if (logToConsole) {
//           console.log(
            `Component ${componentName} render time: ${renderTime.toFixed(2)}ms`
          );
        }

        analytics.trackPerformance(`${componentName}_render`, renderTime);
      });
    }
  }, [componentName, trackRenderTime, logToConsole]);

  const trackInteraction = useCallback(
    (action: string) => {
      if (trackInteractions) {
        const _interactionTime = performance.now();
        metricsRef.current.interactionTime = interactionTime;

        if (logToConsole) {
//           console.log(
            `Component ${componentName} interaction: ${action} at ${interactionTime.toFixed(2)}ms`
          );
        }

        analytics.track(
          'interaction',
          componentName,
          action,
          undefined,
          interactionTime
        );
      }
    },
    [componentName, trackInteractions, logToConsole]
  );

  const getPerformanceReport = useCallback((): PerformanceMetrics => {
    return { ...metricsRef.current };
  }, []);

  return {
    metrics: metricsRef.current,
    trackRender,
    trackInteraction,
    getPerformanceReport,
  };
}

/**
 * Hook for monitoring page load performance
 */
export function usePagePerformance(pageName: string) {
  useEffect(() => {
//     const startTime = performance.now();

    // Track page load metrics
    const trackPageLoad = () => {
      const _loadTime = performance.now() - startTime;

      analytics.trackPerformance(`${pageName}_load`, loadTime);
      analytics.track('page_load', pageName, 'loaded', undefined, loadTime);

//       console.log(`Page ${pageName} loaded in ${loadTime.toFixed(2)}ms`);
    };

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
      return () => window.removeEventListener('load', trackPageLoad);
    }

    return undefined;
  }, [pageName]);
}

/**
 * Hook for monitoring API call performance
 */
export function useAPIPerformance() {
  const trackAPICall = useCallback(
    (endpoint: string, duration: number, success: boolean) => {
      analytics.trackPerformance(`api_${endpoint}`, duration);
      analytics.track(
        'api_call',
        endpoint,
        success ? 'success' : 'error',
        undefined,
        duration
      );

//       console.log(
        `API ${endpoint}: ${duration.toFixed(2)}ms (${success ? 'success' : 'error'})`
      );
    },
    []
  );

  return { trackAPICall };
}

export default usePerformance;
