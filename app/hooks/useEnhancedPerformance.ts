<<<<<<< HEAD

=======
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
  trackAnalytics?: boolean;}}
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {,)}) {const {component = 'Unknown',;}
    trackErrors = true,;
    trackPerformance = true,;
    trackAnalytics = true,}} = _options;const _renderCountRef = useRef<number>(0);
useEffect(() => {mountTimeRef.current = performance.now();
    mountTimeRef.current = performance.now();
    renderCountRef.current = 0;
// Track component mount;
    if (trackAnalytics) {
      analytics.trackCustomEvent('Component', 'Mounted', component)}}
return () => {// Track component unmount duration;
          // Long-lived component;
          analytics.trackCustomEvent('Performance',;)
            'Long Component Lifetime',;
            component,;
      analytics.trackCustomEvent('Performance',;)
        'High Render Count',;
        component,;
const trackError = useCallback(;)
    (error: Error, context?: Record<string, unknown>) => {if (trackErrors) {
        errorTracker.trackError(error, {)
          component,;
          ...context,}})
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
            analytics.trackPerformance()}`${component}-${operationName}`,;
              duration,;
  );
return {trackError,;}
    trackUserAction,;
    measureOperation,}}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
