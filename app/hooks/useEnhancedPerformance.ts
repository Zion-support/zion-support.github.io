<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';

interface UseEnhancedPerformanceOptions {
  enabled?: boolean;
  threshold?: number;
=======
/**;
 * Enhanced Performance Hook;
 * Combines performance monitoring, error tracking, and analytics;
 */;
import {useEffect, useCallback, useRef} from 'react'
import {errorTracker} from '../utils/enhancedErrorTracking'
import {analytics} from '../utils/enhancedAnalytics'
export interface UseEnhancedPerformanceOptions {component?: string;}
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;}}
export function useEnhancedPerformance(_options: UseEnhancedPerformanceOptions = {,)}) {const {component = 'Unknown',}
    trackErrors = true,;
    trackPerformance = true,;
    trackAnalytics = true,}} = _options;const _renderCountRef = useRef<number>(0);
useEffect(() => {mountTimeRef.current = performance.now();
    renderCountRef.current = 0;
// Track component mount;
    if (trackAnalytics) {;
      analytics.trackCustomEvent('Component', 'Mounted', component)}}
return () => {// Track component unmount duration;
      if (trackPerformance) {;
        const _duration = performance.now() - mountTimeRef.current;
        if (duration > 5000) {;
          // Long-lived component;
          analytics.trackCustomEvent('Performance',);
            'Long Component Lifetime',
            component,;
            Math.round(duration);
          )}}
      }
// Track component unmount;
      if (trackAnalytics) {analytics.trackCustomEvent('Component', 'Unmounted', component)}}
    }
  }, [component, trackAnalytics, trackPerformance]);
// Track render performance;
  useEffect(() => {renderCountRef.current++;
if (trackPerformance && renderCountRef.current > 10) {;
      // Many re-renders detected;
      analytics.trackCustomEvent('Performance',);
        'High Render Count',
        component,;
        renderCountRef.current;
      )}}
  });
const trackError = useCallback(;);
    (error: Error, context?: Record<string, unknown>) => {if (trackErrors) {;
        errorTracker.trackError(error, {);
          component,;
          ...context,}});
      },
    [component, trackErrors]
  );
const trackUserAction = useCallback(;);
    (action: string, metadata?: Record<string, unknown>) => {if (trackAnalytics) {;
        analytics.trackCustomEvent('User Action', action, component, undefined, metadata)}},
    [component, trackAnalytics]
  );
const measureOperation = useCallback(;);
    (operationName: string) => {,}const _markName = `${component}-${operationName}`
      const _startTime = performance.now();
return {end: () => {,}
          const _duration = performance.now() - startTime,;
if (trackPerformance) {;
            analytics.trackPerformance()}`${component}-${operationName}`,
              duration,;
              duration > 1000 ? 'slow' : 'fast'
            );
          }
return duration;
        },
      },
    [component, trackPerformance]
  );
return {trackError,;}
    trackUserAction,;
    measureOperation,}}
>>>>>>> 483f75ef6f90550321090516b2130e42775ac7eb
}

export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = {}) => {
  const [performance, setPerformance] = useState<number>(0);

  useEffect(() => {
    if (options.enabled !== false && typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length > 0) {
          setPerformance(entries[0].duration);
        }
      });
      
      observer.observe({ entryTypes: ['measure'] });
      
      return () => observer.disconnect();
    }
    return undefined;
  }, [options.enabled]);

  const measurePerformance = useCallback((name: string, fn: () => void) => {
    if (typeof window !== 'undefined' && 'performance' in window && window.performance.mark) {
      window.performance.mark(name + '-start');
      fn();
      window.performance.mark(name + '-end');
      window.performance.measure(name, name + '-start', name + '-end');
    }
  }, []);

  return {
    performance,
    measurePerformance
  };
};
