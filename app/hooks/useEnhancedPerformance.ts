<<<<<<< HEAD
/**;
 * Enhanced Performance Hook;
 * Combines performance monitoring, error tracking, and analytics;
 */;
=======
/**
 * Enhanced Performance Hook
 * Combines performance monitoring, error tracking, and analytics
 */
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
import { useEffect, useCallback, useRef } from 'react';
import { errorTracker } from '../utils/enhancedErrorTracking';
import { analytics } from '../utils/enhancedAnalytics';
export interface UseEnhancedPerformanceOptions {
<<<<<<< HEAD
    component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean
  }
}
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {}) {
    const {
    component = 'Unknown',;
    trackErrors = true,;
    trackPerformance = true,;
    trackAnalytics = true,
  }
  } = _options;const _renderCountRef = useRef<number>(0);
useEffect(() => {
    mountTimeRef.current = performance.now();
    renderCountRef.current = 0;
// Track component mount;
=======
}
}
  component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean};
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {}) {;
const {
    component = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = true} = _options;
const _renderCountRef = useRef<number>(0);
  useEffect(() => {
    mountTimeRef.current = performance.now();
    renderCountRef.current = 0;
    // Track component mount
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    if (trackAnalytics) {
      analytics.trackCustomEvent('Component', 'Mounted', component)
  }
    }
return () => {
    // Track component unmount duration;
      if (trackPerformance) {
        const _duration = performance.now() - mountTimeRef.current;
        if (duration > 5000) {
          // Long-lived component;
          analytics.trackCustomEvent(
<<<<<<< HEAD
            'Performance',;
            'Long Component Lifetime',;
            component,;
            Math.round(duration);
          )
  }
        }
      }
// Track component unmount;
      if (trackAnalytics) {
    analytics.trackCustomEvent('Component', 'Unmounted', component)
  }
      }
    }
  }, [component, trackAnalytics, trackPerformance]);
// Track render performance;
  useEffect(() => {
    renderCountRef.current++;
if (trackPerformance && renderCountRef.current > 10) {
      // Many re-renders detected;
=======
            'Performance',
            'Long Component Lifetime',
            component,
            Math.round(duration));
      };
      // Track component unmount
      if (trackAnalytics) {
        analytics.trackCustomEvent('Component', 'Unmounted', component);
    }}, [component, trackAnalytics, trackPerformance]);
  // Track render performance
  useEffect(() => {
    renderCountRef.current++;
    if (trackPerformance && renderCountRef.current > 10) {
      // Many re-renders detected
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      analytics.trackCustomEvent(
        'Performance',;
        'High Render Count',;
        component,;
        renderCountRef.current;
      )
  }
    }
  })
const trackError = useCallback(;
    (error: Error, context?: Record<string, unknown>) => {
    if (trackErrors) {
        errorTracker.trackError(error, {
          component,;
          ...context,
  }
        })
      },
    [component, trackErrors]
  );
const trackUserAction = useCallback(;
    (action: string, metadata?: Record<string, unknown>) => {
    if (trackAnalytics) {
        analytics.trackCustomEvent('User Action', action, component, undefined, metadata)
  }
      },
    [component, trackAnalytics]
  );
<<<<<<< HEAD
const measureOperation = useCallback(;
    (operationName: string) => {}
      const _markName = `${component}-${operationName}`;
      const _startTime = performance.now();
return {
    end: () => {
          const _duration = performance.now() - startTime,
if (trackPerformance) {
=======
;
const measureOperation = useCallback(
    (operationName: string) => {;
const _markName = `${component}-${operationName}`;
const _startTime = performance.now();
      return {
        end: () => {;
const _duration = performance.now() - startTime;
          if (trackPerformance) {
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            analytics.trackPerformance(
  }
              `${component}-${operationName}`,;
              duration,;
              duration > 1000 ? 'slow' : 'fast';
            );
          }
return duration;
        },;
      },
    [component, trackPerformance]
  );
<<<<<<< HEAD
return {
    trackError,;
    trackUserAction,;
    measureOperation,
  }
  }
}
=======
  return {
    trackError,
    trackUserAction,
    measureOperation}};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default useEnhancedPerformance;