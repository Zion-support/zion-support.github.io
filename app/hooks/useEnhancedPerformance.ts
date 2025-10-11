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
          analytics.trackCustomEvent()      },
    [component, trackErrors];
  );
const trackUserAction = const trackUserAction = useCallback()}
export default useEnhancedPerformance;
