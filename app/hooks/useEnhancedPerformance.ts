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
  const errorCountRef = useRef<number>(0)

  useEffect(() => {
    mountTimeRef.current = performance.now()
    renderCountRef.current += 1

    // Track component mount
    if (trackAnalytics) {
      console.log(`Component ${component} mounted`)
    }

    return () => {
      const unmountTime = performance.now()
      const mountDuration = unmountTime - mountTimeRef.current
      
      if (trackPerformance) {
        console.log(`Component ${component} unmounted after ${mountDuration.toFixed(2)}ms`)
      }
    }
  }, [component, trackAnalytics, trackPerformance])

  const trackError = useCallback((error: Error, errorInfo?: any) => {
    if (!trackErrors) return

    errorCountRef.current += 1
    
    console.error(`Error in ${component}:`, error, errorInfo)
    
    if (trackAnalytics) {
      console.log(`Error tracked for ${component}`)
    }
  }, [component, trackErrors, trackAnalytics])

  const trackPerformanceMetric = useCallback((metric: string, value: number) => {
    if (!trackPerformance) return

    console.log(`Performance metric for ${component}: ${metric} = ${value}ms`)
    
    if (trackAnalytics) {
      console.log(`Performance tracked for ${component}`)
    }
  }, [component, trackPerformance, trackAnalytics])

  const getPerformanceMetrics = useCallback(() => {
    return {
      component,
      mountTime: mountTimeRef.current,
      renderCount: renderCountRef.current,
      errorCount: errorCountRef.current,
      currentTime: performance.now()
    }
  }, [component])

  return {
    trackError,
    trackPerformance: trackPerformanceMetric,
    getPerformanceMetrics,
    renderCount: renderCountRef.current,
    errorCount: errorCountRef.current
  }
}