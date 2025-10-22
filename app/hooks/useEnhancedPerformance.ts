import { useEffect, useCallback, useRef } from 'react'
export interface UseEnhancedPerformanceOptions {
  component?: string
  trackErrors?: boolean
  trackPerformance?: boolean
  trackAnalytics?: boolean
}

export function useEnhancedPerformance(options: UseEnhancedPerformanceOptions = {}) {
  const {
    component = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = true
  } = options

<<<<<<< HEAD
  const renderCountRef = useRef<number>(0)
  const mountTimeRef = useRef<number>(0)
=======
  
  
>>>>>>> bda5d40addebc09fc3c74601f15d6b21b20062c5

  useEffect(() => {
    mountTimeRef.current = performance.now()
    renderCountRef.current += 1

<<<<<<< HEAD
    if (trackPerformance) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log(`Performance measure for ${component}:`, entry.name, entry.duration)
=======
    // Track component mount
    if (trackAnalytics) {
      analytics.trackCustomEvent('Component', 'Mounted', component);
    }

    return () => {
      // Track component unmount duration
      if (trackPerformance) {
        
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
          ...context,
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
      
      

      return {
        end: () => {
          
          
          if (trackPerformance) {
            analytics.trackPerformance(
              `${component}-${operationName}`,
              duration,
              duration > 1000 ? 'slow' : 'fast'
            );
>>>>>>> bda5d40addebc09fc3c74601f15d6b21b20062c5
          }
        }
      })

      observer.observe({ entryTypes: ['measure'] })

      return () => observer.disconnect()
    }
    
    return undefined
  }, [component, trackPerformance])

  const measurePerformance = useCallback((name: string, fn: () => void) => {
    if (trackPerformance) {
      performance.mark(`${component}-${name}-start`)
      fn()
      performance.mark(`${component}-${name}-end`)
      performance.measure(
        `${component}-${name}`,
        `${component}-${name}-start`,
        `${component}-${name}-end`
      )
    } else {
      fn()
    }
  }, [component, trackPerformance])

  const trackError = useCallback((error: Error, context?: Record<string, unknown>) => {
    if (trackErrors) {
      console.error(`Error in ${component}:`, error, context)
      // Here you would typically send to an error tracking service
    }
  }, [component, trackErrors])

  const trackAnalyticsEvent = useCallback((event: string, data?: Record<string, unknown>) => {
    if (trackAnalytics) {
      console.log(`Analytics event in ${component}:`, event, data)
      // Here you would typically send to an analytics service
    }
  }, [component, trackAnalytics])

  return {
    measurePerformance,
    trackError,
    trackAnalytics: trackAnalyticsEvent,
    renderCount: renderCountRef.current,
    mountTime: mountTimeRef.current
  }
}