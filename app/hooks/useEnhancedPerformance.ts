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

  const renderCountRef = useRef<number>(0)
  const mountTimeRef = useRef<number>(0)

  useEffect(() => {
    mountTimeRef.current = performance.now()
    renderCountRef.current += 1

    if (trackPerformance) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log(`Performance measure for ${component}:`, entry.name, entry.duration)
          }
        }
      })

      observer.observe({ entryTypes: ['measure'] })

      return () => observer.disconnect()
    }
    return undefined;
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