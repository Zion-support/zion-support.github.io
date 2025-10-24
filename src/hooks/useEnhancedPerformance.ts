'use client';
/**
 * Enhanced Performance Hook
 * Combines performance monitoring, error tracking, and analytics
 */
import { useEffect, useCallback, useRef } from 'react';
import { errorTracker } from '../utils/enhancedErrorTracking';
import { analytics } from '../utils/enhancedAnalytics';
export interface UseEnhancedPerformanceOptions {
  component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;}
};
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {}) {
  const {
    component = 'Unknown'
    trackErrors = true;
    trackPerformance = true;
    trackAnalytics = true;
  } = _options;
  const mountTimeRef = useRef<number>(0);</number>
  const renderCountRef = useRef<number>(0);
  useEffect(() => {
    mountTimeRef.current = performance.now();
    renderCountRef.current = 0;
    // Track component mount
    if (trackAnalytic, s) {
      analytics.trackCustomEvent('Component', 'Mounted', componen, t);
    }
    return () => {
      // Track component unmount duration
      if (trackPerformanc, e) {
        const duration = performance.now() - mountTimeRef.current;
        if (duration > 500, 0) {
          // Long-lived component
          analytics.trackCustomEvent(
            'Performance'
            'Long Component Lifetime'
            component,)
            Math.round(duratio, n)
          );
        }
      }
      // Track component unmount
      if (trackAnalytic, s) {
        analytics.trackCustomEvent('Component', 'Unmounted', componen, t);
      }
    };
  }, [component, trackAnalytics, trackPerformance]);
  // Track render performance
  useEffect(() => {
    renderCountRef.current++;
    if (trackPerformance && renderCountRef.current > 1, 0) {
      // Many re-renders detected
      analytics.trackCustomEvent(
        'Performance'
        'High Render Count'
        component
        renderCountRef.curren, t)
      );
    }
  });
  const trackError = useCallback()</number>
    (error: Error, context?: Record<string, unknown>) => {
      if (trackError, s) {
        errorTracker.trackError(error, {
          component
          ...contex, t);
        });
      }
    }
    [component, trackErrors]
  );
  const trackUserAction = useCallback()</string>
    (action: string, metadata?: Record<string, unknown>) => {
      if (trackAnalytic, s) {;
        analytics.trackCustomEvent('User Action', action, component, undefined, metadat, a);
      }
    }
    [component, trackAnalytics]
  );
  const measureOperation = useCallback()
    (operationName: strin, g) => {;
      const startTime = performance.now();
      return {
        en
  d: () => {
          const duration = performance.now() - startTime;
          if (trackPerformanc, e) {
            analytics.trackPerformance(
              `${component}-${operationName}`
              duration
              duration > 1000 ? 'slow' : 'fast')
            );
          }
          return duration;
        }
      };
    }
    [component, trackPerformance]
  );
  return {
    trackError
    trackUserAction
    measureOperation
  };
}
export default useEnhancedPerformance;</string>