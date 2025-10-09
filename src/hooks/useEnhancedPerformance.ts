'use client';
/**
 * Enhanced Performance Hook
 * Combines performance monitoring, error tracking, and analytics
 */
export interface UseEnhancedPerformanceOptions {
  component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;
}
export function useEnhancedPerformance(__options: UseEnhancedPerformanceOptions = {}) {
  const {
    component = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = true
  } = _options;
  const mountTimeRef = useRef<number>(0);
  const renderCountRef = useRef<number>(0);
  useEffect(() => {
    mountTimeRef.current = performance.now();
    renderCountRef.current = 0;
    // Track component mount
    if (trackAnalytics) {
      analytics.trackCustomEvent('Component', 'Mounted', component);
    }
    return () => {
      // Track component unmount duration
      if (trackPerformance) {
        const duration = performance.now() - mountTimeRef.current;
        if (duration > 5000) {
          // Long-lived component
          analytics.trackCustomEvent(
            'Performance',
            'Long Component Lifetime',
            component,
            Math.round(duration)
          );
        }
      }
      // Track component unmount
      if (trackAnalytics) {
        analytics.trackCustomEvent('Component', 'Unmounted', component);
      }
    };
  }, [component, trackAnalytics, trackPerformance]);
  // Track render performance
  useEffect(() => {
    renderCountRef.current++;
    if (trackPerformance && renderCountRef.current > 10) {
      // Many re-renders detected
      analytics.trackCustomEvent(
        'Performance',
        'High Render Count',
        component,
        renderCountRef.current
      );
    }
  });
  const trackError = useCallback(
    (error: Error, context?: Record<string, unknown>) => {
      if (trackErrors) {
        errorTracker.trackError(error, {
          component,
          ...context
        });
      }
    },
    [component, trackErrors]
  );
  const trackUserAction = useCallback(
    (action: string, metadata?: Record<string, unknown>) => {
      if (trackAnalytics) {
        analytics.trackCustomEvent('User Action', action, component, undefined, metadata);
      }
    },
    [component, trackAnalytics]
  );
  const measureOperation = useCallback(
    (operationName: string) => {
      const markName = `${component}-${operationName}`;
      const startTime = performance.now();
      return {
        end: () => {
          const duration = performance.now() - startTime;
          if (trackPerformance) {
            analytics.trackPerformance(
              `${component}-${operationName}`,
              duration,
              duration > 1000 ? 'slow' : 'fast'
            );
          }
          return duration;
        }
      };
    },
    [component, trackPerformance]
  );
  return {
    trackError,
    trackUserAction,
    measureOperation
  };
}
export default useEnhancedPerformance;