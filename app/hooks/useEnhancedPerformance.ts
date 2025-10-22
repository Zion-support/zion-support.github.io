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
          console.log('Long-lived component unmounted:', component, 'Duration:', duration)
        }
      }
    }
  }, [component, trackPerformance, trackAnalytics])

  const trackRender = useCallback(() => {
    renderCountRef.current += 1
    
    if (trackPerformance && renderCountRef.current > 10) {
      console.warn('High render count detected:', component, 'Renders:', renderCountRef.current)
    }
  }, [component, trackPerformance])

  const trackError = useCallback((error: Error, errorInfo?: any) => {
    if (trackErrors) {
      console.error('Component error:', component, error, errorInfo)
    }
  }, [component, trackErrors])

  const trackCustomEvent = useCallback((eventName: string, data?: any) => {
    if (trackAnalytics) {
      console.log('Custom event:', component, eventName, data)
    }
  }, [component, trackAnalytics])

  return {
    trackRender,
    trackError,
    trackCustomEvent,
    renderCount: renderCountRef.current
  }
}