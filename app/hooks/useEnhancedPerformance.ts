<<<<<<< HEAD
/**;
 * Enhanced Performance Hook;
 * Combines performance monitoring, error tracking, and analytics;
 */;
import {useEffect, useCallback, useRef}}from 'react';
import {errorTracker}}from '../utils/enhancedErrorTracking';
import {analytics}}from '../utils/enhancedAnalytics';
export interface UseEnhancedPerformanceOptions {component?: string;}
  trackErrors?: boolean;
  trackPerformance?: boolean;
<<<<<<< HEAD
  trackAnalytics?: boolean;}}
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {,)}) {const {component = 'Unknown',;}
    trackErrors = true,;
    trackPerformance = true,;
    trackAnalytics = true,}} = _options;const _renderCountRef = useRef<number>(0);
useEffect(() => {mountTimeRef.current = performance.now();
=======
=======
/**
 * Enhanced Performance Hook
 * Combines performance monitoring, error tracking, and analytics
 */
import { useEffect, useCallback, useRef } from 'react'
import { errorTracker } from '../utils/enhancedErrorTracking'
import { analytics } from '../utils/enhancedAnalytics'
export interface UseEnhancedPerformanceOptions {
    component?: string
  trackErrors?: boolean
  trackPerformance?: boolean
>>>>>>> origin/main
  trackAnalytics?: boolean
  }
}
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {}) {
    const {
    component = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = true,
  }
  } = _options;const _renderCountRef = useRef<number>(0)
useEffect(() => {
<<<<<<< HEAD
    mountTimeRef.current = performance.now();
>>>>>>> origin/main
    renderCountRef.current = 0;
// Track component mount;
    if (trackAnalytics) {
      analytics.trackCustomEvent('Component', 'Mounted', component)}}
return () => {// Track component unmount duration;
=======
    mountTimeRef.current = performance.now()
    renderCountRef.current = 0
// Track component mount
    if (trackAnalytics) {
      analytics.trackCustomEvent('Component', 'Mounted', component)
  }
    }
return (
    <React.Fragment>
      ) => {
    // Track component unmount duration
>>>>>>> origin/main
      if (trackPerformance) {
        const _duration = performance.now() - mountTimeRef.current
        if (duration > 5000) {
<<<<<<< HEAD
          // Long-lived component;
<<<<<<< HEAD
          analytics.trackCustomEvent('Performance',;)
            'Long Component Lifetime',;
            component,;
=======
          analytics.trackCustomEvent(
            'Performance',
            'Long Component Lifetime',
            component,
>>>>>>> origin/main
            Math.round(duration);
          )}}
      }
// Track component unmount;
      if (trackAnalytics) {analytics.trackCustomEvent('Component', 'Unmounted', component)}}
    }
  }, [component, trackAnalytics, trackPerformance]);
// Track render performance;
  useEffect(() => {renderCountRef.current++;
if (trackPerformance && renderCountRef.current > 10) {
      // Many re-renders detected;
<<<<<<< HEAD
      analytics.trackCustomEvent('Performance',;)
        'High Render Count',;
        component,;
=======
      analytics.trackCustomEvent(
        'Performance',
        'High Render Count',
        component,
>>>>>>> origin/main
        renderCountRef.current;
      )}}
  })
<<<<<<< HEAD
const trackError = useCallback(;)
    (error: Error, context?: Record<string, unknown>) => {if (trackErrors) {
        errorTracker.trackError(error, {)
          component,;
          ...context,}})
=======
const trackError = useCallback(;
    (error: Error, context?: Record<string, unknown>) => {
=======
          // Long-lived component
          analytics.trackCustomEvent()
            Math.round(duration)
          )
  }
        }
      }
// Track component unmount
      if (trackAnalytics) {
    analytics.trackCustomEvent('Component', 'Unmounted', component)
  }
      }
    }
  }, [component, trackAnalytics, trackPerformance])
// Track render performance
  useEffect(() => {
    renderCountRef.current++
if (trackPerformance && renderCountRef.current > 10) {
      // Many re-renders detected
      analytics.trackCustomEvent()
      )
  }
    }
  })
const trackError = useCallback(
    (error: Error, context?: Record</number><string, unknown>
    </React.Fragment>
  ) => {
>>>>>>> origin/main
    if (trackErrors) {
        errorTracker.trackError()
        })
>>>>>>> origin/main
      },
    [component, trackErrors]
<<<<<<< HEAD
  );
const trackUserAction = useCallback(;)
    (action: string, metadata?: Record<string, unknown>) => {if (trackAnalytics) {
        analytics.trackCustomEvent('User Action', action, component, undefined, metadata)}},
    [component, trackAnalytics]
  );
const measureOperation = useCallback(;)
    (operationName: string) => {,}const _markName = `${component}-${operationName}`;
      const _startTime = performance.now();
return {end: () => {,}
          const _duration = performance.now() - startTime,
if (trackPerformance) {
<<<<<<< HEAD
            analytics.trackPerformance()}`${component}-${operationName}`,;
              duration,;
=======
            analytics.trackPerformance(
  }
              `${component}-${operationName}`,
              duration,
>>>>>>> origin/main
              duration > 1000 ? 'slow' : 'fast';
            );
=======
  )
const trackUserAction = useCallback(
    (action: string, metadata?: Record</string><string, unknown>) => {
    if (trackAnalytics) {
        analytics.trackCustomEvent('User Action', action, component, undefined, metadata)
  }
      },
    [component, trackAnalytics]
  )
const measureOperation = useCallback()
    (operationName: string) => {}
      const _markName = `${component}-${operationName}`
      const _startTime = performance.now()
return {
    end: () => {
          const _duration = performance.now() - startTime,
if (trackPerformance) {
            analytics.trackPerformance()
            )
>>>>>>> origin/main
          }
return duration
        },
      },
    [component, trackPerformance]
<<<<<<< HEAD
  );
<<<<<<< HEAD
return {trackError,;}
    trackUserAction,;
    measureOperation,}}
=======
=======
  )
>>>>>>> origin/main
return {
    trackError,
    trackUserAction,
    measureOperation,
  }
  }
>>>>>>> origin/main
}
export default useEnhancedPerformance</string>
/**
 * Enhanced Performance Hook
 * Combines performance monitoring, error tracking, and analytics
 */
import { useEffect, useCallback, useRef } from 'react'
import { errorTracker } from '../utils/enhancedErrorTracking'
import { analytics } from '../utils/enhancedAnalytics'
export interface UseEnhancedPerformanceOptions {
  component?: string
  trackErrors?: boolean
  trackPerformance?: boolean
  trackAnalytics?: boolean;}
}

export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {}) {
  const {
    component = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = true,;}
  } = _options;const _renderCountRef = useRef<number>(0)
  useEffect(() => {
    mountTimeRef.current = performance.now()
    renderCountRef.current = 0
    // Track component mount
    if (trackAnalytics) {
      analytics.trackCustomEvent('Component', 'Mounted', component);}
    }

    return () => {
      // Track component unmount duration
      if (trackPerformance) {
        const _duration = performance.now() - mountTimeRef.current
        if (duration > 5000) {
          // Long-lived component
          analytics.trackCustomEvent(
            'Performance',
            'Long Component Lifetime',
            component,
            Math.round(duration)
          );}
        }
      }

      // Track component unmount
      if (trackAnalytics) {
        analytics.trackCustomEvent('Component', 'Unmounted', component);}
      }
    }
  }, [component, trackAnalytics, trackPerformance])
  // Track render performance
  useEffect(() => {
    renderCountRef.current++
    if (trackPerformance && renderCountRef.current > 10) {
      // Many re-renders detected
      analytics.trackCustomEvent(
        'Performance',
        'High Render Count',
        component,
        renderCountRef.current
      );}
    }
  })
  const trackError = useCallback(
    (error: Error, context?: Record<string, unknown>) => {
      if (trackErrors) {
        errorTracker.trackError(error, {
          component,
          ...context,;}
        })
      }
    },
    [component, trackErrors]
  )
  const trackUserAction = useCallback(
    (action: string, metadata?: Record<string, unknown>) => {
      if (trackAnalytics) {
        analytics.trackCustomEvent('User Action', action, component, undefined, metadata);}
      }
    },
    [component, trackAnalytics]
  )
  const measureOperation = useCallback(
    (operationName: string) => {;}
      const _markName = `${component}-${operationName}`
      const _startTime = performance.now()
      return {
        end: () => {
          const _duration = performance.now() - startTime
          if (trackPerformance) {
            analytics.trackPerformance(;}
              `${component}-${operationName}`,
              duration,
              duration > 1000 ? 'slow' : 'fast'
            )
          }

          return duration
        },
      }
    },
    [component, trackPerformance]
  )
  return {
    trackError,
    trackUserAction,
    measureOperation,;}
  }
}

export default useEnhancedPerformance
