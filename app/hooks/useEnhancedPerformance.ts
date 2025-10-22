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
    renderCountRef.current = 0

    // Track component mount
    if (trackAnalytics) {
      console.log('Component mounted:', component)
    }

    return () => {
      // Track component unmount duration
      if (trackPerformance) {
        const duration = performance.now() - mountTimeRef.current
        if (duration > 5000) {
          // Long-lived component
          console.log('Long component lifetime:', component, Math.round(duration))
        }
      }

      // Track component unmount
      if (trackAnalytics) {
        console.log('Component unmounted:', component)
      }
    }
  }, [component, trackAnalytics, trackPerformance])

  // Track render performance
  useEffect(() => {
    renderCountRef.current++
    if (trackPerformance && renderCountRef.current > 10) {
      // Many re-renders detected
      console.log('High render count:', component, renderCountRef.current)
    }
  })

  const trackError = useCallback(
    (error: Error, context?: Record<string, unknown>) => {
      if (trackErrors) {
        console.error('Error tracked:', error, { component, ...context })
      }
    },
    [component, trackErrors]
  )

  const trackUserAction = useCallback(
    (action: string, metadata?: Record<string, unknown>) => {
      if (trackAnalytics) {
        console.log('User action:', action, component, metadata)
      }
    },
    [component, trackAnalytics]
  )

  const measureOperation = useCallback(
    (operationName: string) => {
      const startTime = performance.now()

      return {
        end: () => {
          const duration = performance.now() - startTime
          if (trackPerformance) {
            console.log('Performance measure:', `${component}-${operationName}`, duration)
          }
          return duration
        }
      }
    },
    [component, trackPerformance]
  )

  return {
    trackError,
    trackUserAction,
    measureOperation
  }
}
