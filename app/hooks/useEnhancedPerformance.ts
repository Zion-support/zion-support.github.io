'use client'
import { useState, useEffect, useCallback } from 'react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  networkLatency: number
}

export const useEnhancedPerformance = () => {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  })

    if (typeof window === 'undefined') return

    // Measure load time
    
    // Measure memory usage
    
    // Measure render time
    requestAnimationFrame(() => {
      
      setMetrics(prev => ({
        ...prev,
        loadTime,
        renderTime,
        memoryUsage: memoryUsage / 1024 / 1024 // Convert to MB
      }))
    })
  }, [])

    // Enable performance optimizations
    setIsOptimized(true)
    
    // Preload critical resources
    if (typeof window !== 'undefined') {
        '/fonts/inter.woff2',
        '/images/hero-bg.webp'
      ]
      
      criticalResources.forEach(resource => {
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.woff2') ? 'font' : 'image'
        document.head.appendChild(link)
      })
    }
  }, [])

  useEffect(() => {
    measurePerformance()

    return () => clearInterval(interval)
  }, [measurePerformance])

  return {
    metrics,
    isOptimized,
    optimizePerformance,
    measurePerformance
  }
}