"use client"

import React, { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring logic
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Performance monitoring can be implemented here
          // console.log('Performance entry:', entry)
        }
      })

      try {
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] })
      } catch (error) {
        // Performance observer not supported in this environment
        // console.warn('Performance observer not supported:', error)
      }

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return null
}