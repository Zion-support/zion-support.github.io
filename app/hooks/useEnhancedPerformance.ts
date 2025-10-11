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
            Math.round(duration);
          )}}
      }
// Track component unmount;
      if (trackAnalytics) {analytics.trackCustomEvent('Component', 'Unmounted', component)}}
    }
  }, [component, trackAnalytics, trackPerformance]);
// Track render performance;
  useEffect(() => {
    renderCountRef.current++;
if (trackPerformance && renderCountRef.current > 10) 
      // Many re-renders detected;
        })
      },
    [component, trackErrors];
  );
    (action: string, metadata?: Record<string, unknown>) => {
    if (trackAnalytics) 
        analytics.trackCustomEvent('User Action', action, component, undefined, metadata)
  }
      },
    [component, trackAnalytics];
  );
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
