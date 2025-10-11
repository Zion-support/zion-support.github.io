'use client'
import React, {useEffect} from 'react'

const PerformanceMonitor: React.FC = () => {useEffect(() => {
    if (typeof window === 'undefined') return

    const measurePerformance = () => {
      // Basic performance monitoring
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart)
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)}
    }

    window.addEventListener('load', measurePerformance)

    return () => {window.removeEventListener('load', measurePerformance)}
  }, [])

  return null
}

export default PerformanceMonitor