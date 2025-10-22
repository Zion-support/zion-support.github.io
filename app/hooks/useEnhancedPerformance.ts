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

  const mountTimeRef = useRef<number>(0)
  const renderCountRef = useRef<number>(0)

  useEffect(() => {
    mountTimeRef.current = performance.now()
    renderCountRef.current += 1

    // Track component mount
    if (trackAnalytics) {
      console.log(`Component ${component} mounted`)
    }

    return () => {
      // Track component unmount duration
      if (trackPerformance) {
        const duration = performance.now() - mountTimeRef.current
        
        if (duration > 5000) {
          // Long-lived component
          console.log(`Long component lifetime: ${component} - ${Math.round(duration)}ms`)
        }
      }

      // Track component unmount
      if (trackAnalytics) {
        console.log(`Component ${component} unmounted`)
      }
    };
  }, [component, trackAnalytics, trackPerformance]);

  // Track render performance
  useEffect(() => {
    renderCountRef.current++;

    if (trackPerformance && renderCountRef.current > 10) {
      // Many re-renders detected
      console.log(`High render count in ${component}: ${renderCountRef.current}`)
    }
  });

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