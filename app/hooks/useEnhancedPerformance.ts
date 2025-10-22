import { useEffect, useCallback, useRef } from 'react'

export interface UseEnhancedPerformanceOptions {
  component?: string
  trackErrors?: boolean
  trackPerformance?: boolean
  trackAnalytics?: boolean
  threshold?: number
}

export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = {}) => {
  const {
    component = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = true,
    threshold = 100
  } = options

  const startTime = useRef<number>(0)
  const performanceData = useRef<{
    renderTime: number
    errorCount: number
    interactionCount: number
  }>({
    renderTime: 0,
    errorCount: 0,
    interactionCount: 0
  })

  const trackRenderTime = useCallback(() => {
    if (trackPerformance) {
      const renderTime = performance.now() - startTime.current
      performanceData.current.renderTime = renderTime
      
      if (renderTime > threshold) {
        console.warn(`Slow render detected in ${component}: ${renderTime}ms`)
      }
    }
  }, [component, trackPerformance, threshold])

  const trackError = useCallback((error: Error) => {
    if (trackErrors) {
      performanceData.current.errorCount++
      console.error(`Error in ${component}:`, error)
    }
  }, [component, trackErrors])

  const trackInteraction = useCallback(() => {
    if (trackAnalytics) {
      performanceData.current.interactionCount++
    }
  }, [trackAnalytics])

  useEffect(() => {
    startTime.current = performance.now()
    
    return () => {
      trackRenderTime()
    }
  }, [trackRenderTime])

  return {
    trackError,
    trackInteraction,
    performanceData: performanceData.current
  }
}