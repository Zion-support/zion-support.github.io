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

    return () => {
      if (trackPerformance) {
        const duration = performance.now() - mountTimeRef.current
        console.log(`Component ${component} unmounted after ${duration}ms`)
      }
    }
  }, [component, trackPerformance])

  const trackRender = useCallback(() => {
    renderCountRef.current += 1
    if (trackPerformance && renderCountRef.current > 10) {
      console.warn(`Component ${component} has rendered ${renderCountRef.current} times`)
    }
  }, [component, trackPerformance])

  const trackError = useCallback((error: Error) => {
    if (trackErrors) {
      console.error(`Error in ${component}:`, error)
    }
  }, [component, trackErrors])

  return {
    trackRender,
    trackError,
    renderCount: renderCountRef.current
  }
}
