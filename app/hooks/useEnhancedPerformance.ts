/**;
 * Enhanced Performance Hook;
 * Combines performance monitoring, error tracking, and analytics;
 */;
import { useEffect, useCallback, useRef } from 'react';
import { errorTracker } from '../utils/enhancedErrorTracking';
import { analytics } from '../utils/enhancedAnalytics';
export interface UseEnhancedPerformanceOptions {
    component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;
  }
}
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {}) {
    const;
    component = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = true,
  }
  } = _options;const _renderCountRef = useRef<number>(0);
useEffect(() => {
    mountTimeRef.current = performance.now();
    renderCountRef.current = 0;
// Track component mount;
    if (trackAnalytics) 
      analytics.trackCustomEvent('Component', 'Mounted', component)
  }
    }
return () => {
    // Track component unmount duration;
      if (trackPerformance) 
        const _duration = performance.now() - mountTimeRef.current;
        if (duration > 5000) 
          // Long-lived component;
<<<<<<< HEAD
          analytics.trackCustomEvent()
=======
          analytics.trackCustomEvent(
            'Performance',
            'Long Component Lifetime',)
            component,)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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
if (trackPerformance && renderCountRef.current > 10) 
      // Many re-renders detected;
<<<<<<< HEAD
      analytics.trackCustomEvent()
      )
  }
    }
  })
const trackError = const trackError = useCallback()
    (error: Error, context?: Record<string, unknown>) => {
    if (trackErrors) {
        errorTracker.trackError()
=======
      analytics.trackCustomEvent(
        'Performance',
        'High Render Count',
        component,)
        renderCountRef.current;)
  }
    }
  })
const trackError = useCallback(;)
    (error: Error, context?: Record<string, unknown>) => {
    if (trackErrors) 
        errorTracker.trackError(error, 
          component,
          ...context,)
  })
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
        })
      },
    [component, trackErrors];
  );
<<<<<<< HEAD
const trackUserAction = const trackUserAction = useCallback()
=======
const trackUserAction = useCallback(;)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    (action: string, metadata?: Record<string, unknown>) => {
    if (trackAnalytics) 
        analytics.trackCustomEvent('User Action', action, component, undefined, metadata)
  }
      },
    [component, trackAnalytics];
  );
<<<<<<< HEAD
const measureOperation = const measureOperation = useCallback()
    (operationName: string) => {};
      const _markName = `${component}-${operationName}`;
      const _startTime = performance.now();
return {
    end: () => {
          const _duration = const _duration = const _duration = performance.now() - startTime,
if (trackPerformance) {
            analytics.trackPerformance();
=======
const measureOperation = useCallback(;)
    (operationName: string) => {}
      const _markName = `${component}-${operationName}`;
      const _startTime = performance.now();
return {
    end: () => 
          const _duration = performance.now() - startTime,
if (trackPerformance) 
            analytics.trackPerformance(
  }
              `${component}-${operationName}`,
              duration,)
              duration > 1000 ? 'slow' : 'fast';)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            );
          }
return duration;
        },
      },
    [component, trackPerformance]
  );
return {
    trackError,
    trackUserAction,
    measureOperation,
  }
  }
}
export default useEnhancedPerformance;
