<<<<<<< HEAD
'use client'
import React from 'react'
import { useRef } from 'react'
=======
<<<<<<< HEAD
import { useRef, useEffect } from 'react'
'use client'
>>>>>>> main
/**
 * Performance Enhancement Utilities
 * Advanced performance optimization tools for the application
 */
<<<<<<< HEAD
// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(,
    func: T
=======

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
>>>>>>> main
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
<<<<<<< HEAD
// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(,
    func: T
=======

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
>>>>>>> main
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
<<<<<<< HEAD
=======

>>>>>>> main
// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map()
  private observers: PerformanceObserver[] = [];
<<<<<<< HEAD
=======

>>>>>>> main
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }
<<<<<<< HEAD
=======

>>>>>>> main
  // Track component render time
  trackRender(componentName: string, renderTime: number) {
    this.metrics.set(`${componentName}_render`, renderTime)
    if (process.env['NODE_ENV'] === 'development') {
      // eslint-disable-next-line no-console
<<<<<<< HEAD
    console.log(`${componentName} rendered in ${renderTime}ms`)
    }
  }
=======
      console.log(`${componentName} rendered in ${renderTime}ms`)
    }
  }

>>>>>>> main
  // Track memory usage
  trackMemory(componentName: string) {
    if ('memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory
      if (memory) {
        this.metrics.set(`${componentName}_memory`, memory.usedJSHeapSize)
      }
    }
  }
<<<<<<< HEAD
=======

>>>>>>> main
  // Get performance metrics
  getMetrics() {
    return Object.fromEntries(this.metrics)
  }
<<<<<<< HEAD
=======

>>>>>>> main
  // Clear metrics
  clearMetrics() {
    this.metrics.clear()
  }
<<<<<<< HEAD
  // Monitor long tasks
  startLongTaskMonitoring() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
}
=======

  // Monitor long tasks
  startLongTaskMonitoring() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }
>>>>>>> main
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms
          // eslint-disable-next-line no-console
<<<<<<< HEAD
    console.log(`Long task detected: ${entry.name} took ${entry.duration}ms`)
=======
          console.log(`Long task detected: ${entry.name} took ${entry.duration}ms`)
>>>>>>> main
        }
      })
    })
    observer.observe({ entryTypes: ['longtask'] })
    this.observers.push(observer)
  }
<<<<<<< HEAD
  // Cleanup observers
  cleanup() {
  this.observers.forEach(observer => observer.disconnect())
    this.observers = []
}
}
=======

  // Cleanup observers
  cleanup() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

>>>>>>> main
// React hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number>(0)
  const monitor = PerformanceMonitor.getInstance()
<<<<<<< HEAD
  useEffect(() => {
    renderStartTime.current = performance.now()
    return (
    <>
      ) => {
=======

  useEffect(() => {
    renderStartTime.current = performance.now()
    return () => {
>>>>>>> main
      const renderTime = performance.now() - renderStartTime.current
      monitor.trackRender(componentName, renderTime)
      monitor.trackMemory(componentName)
    }
  }, [componentName, monitor])
<<<<<<< HEAD
=======

>>>>>>> main
  return {
    trackRender: (fn: () => void) => {
      const start = performance.now()
      fn()
      const duration = performance.now() - start
      monitor.trackRender(`${componentName}_function`, duration)
    }
  }
}
<<<<<<< HEAD
=======

>>>>>>> main
// Image lazy loading utility
export const lazyLoadImages = () => {
  if (typeof window === 'undefined') return
  const images = document.querySelectorAll('img[data-src]')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
<<<<<<< HEAD
        img['src'] = img.dataset['src'] || ''
=======
        img.src = img.dataset.src || ''
>>>>>>> main
        img.classList.remove('lazy')
        imageObserver.unobserve(img)
      }
    })
  })
  images.forEach((img) => imageObserver.observe(img))
}
<<<<<<< HEAD
=======

>>>>>>> main
// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return
  const criticalResources = [
<<<<<<< HEAD
    '/fonts/inter-var.woff2'
    '/css/critical.css']
=======
    '/fonts/inter-var.woff2',
    '/css/critical.css'
  ]
>>>>>>> main
  criticalResources.forEach((resource) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    link.as = resource.endsWith('.woff2') ? 'font' : 'style'
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous'
<<<<<<< HEAD
}
    document.head.appendChild(link)
  })
}
=======
    }
    document.head.appendChild(link)
  })
}

>>>>>>> main
// Optimize scroll performance
export const optimizeScrollPerformance = () => {
  if (typeof window === 'undefined') return
  let ticking = false
  const updateScrollPosition = () => {
    // Update scroll position indicators
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    document.documentElement.style.setProperty('--scroll-top', `${scrollTop}px`)
    ticking = false
  }
  const requestTick = () => {
<<<<<<< HEAD
  if (!ticking) {
      requestAnimationFrame(updateScrollPosition)
      ticking = true
}
  }
  // Track Core Web Vitals
  const trackCLS = () => {
  let clsValue = 0
=======
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition)
      ticking = true
    }
  }

  // Track Core Web Vitals
  const trackCLS = () => {
    let clsValue = 0
>>>>>>> main
    const clsEntries: PerformanceEntry[] = [];
    interface LayoutShiftEntry extends PerformanceEntry {
      hadRecentInput?: boolean
      value: number
<<<<<<< HEAD
  }
    const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
=======
    }
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
>>>>>>> main
        const layoutEntry = entry as LayoutShiftEntry
        if (!layoutEntry.hadRecentInput) {
          clsEntries.push(entry)
          clsValue += layoutEntry.value
<<<<<<< HEAD
}
=======
        }
>>>>>>> main
      }
    })
    observer.observe({ entryTypes: ['layout-shift'] })
    return () => {
<<<<<<< HEAD
  observer.disconnect()
      return clsValue
}
  }
=======
      observer.disconnect()
      return clsValue
    }
  }

>>>>>>> main
  const trackLCP = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (process.env['NODE_ENV'] === 'development') {
<<<<<<< HEAD
          }
=======
          // eslint-disable-next-line no-console
          console.log('LCP:', entry.startTime)
        }
>>>>>>> main
      }
    })
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
    return () => observer.disconnect()
  }
<<<<<<< HEAD
  const trackFID = () => {
  interface FirstInputEntry extends PerformanceEntry {
      processingStart: number
  }
=======

  const trackFID = () => {
    interface FirstInputEntry extends PerformanceEntry {
      processingStart: number
    }
>>>>>>> main
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as FirstInputEntry
        const fid = fidEntry.processingStart - entry.startTime
        if (process.env['NODE_ENV'] === 'development') {
<<<<<<< HEAD
          }
=======
          // eslint-disable-next-line no-console
          console.log('FID:', fid)
        }
>>>>>>> main
      }
    })
    observer.observe({ entryTypes: ['first-input'] })
    return () => observer.disconnect()
  }
<<<<<<< HEAD
  window.addEventListener('scroll', requestTick, { passive: true })
=======

  window.addEventListener('scroll', requestTick, { passive: true })

>>>>>>> main
  // Start tracking
  const cleanupCLS = trackCLS()
  const cleanupLCP = trackLCP()
  const cleanupFID = trackFID()
<<<<<<< HEAD
=======

>>>>>>> main
  return () => {
    cleanupCLS()
    cleanupLCP()
    cleanupFID()
  }
}
<<<<<<< HEAD
=======

>>>>>>> main
// Memory usage monitoring
export const getMemoryUsage = () => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null
<<<<<<< HEAD
}
  const memory = (performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
  return {
    used: memory.usedJSHeapSize,
    total: memory.totalJSHeapSize
    limit: memory.jsHeapSizeLimit,
    percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100}
}
=======
  }
  const memory = (performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
  return {
    used: memory.usedJSHeapSize,
    total: memory.totalJSHeapSize,
    limit: memory.jsHeapSizeLimit,
    percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
  }
}

>>>>>>> main
// Performance metrics collection
export const collectPerformanceMetrics = () => {
  if (typeof window === 'undefined') return null
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  const paint = performance.getEntriesByType('paint')
  return {
<<<<<<< HEAD
    navigation: {,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    totalTime: navigation.loadEventEnd - navigation.fetchStart}
    paint: {,
    firstPaint: paint.find((entry) => entry.name === 'first-paint')?.startTime || 0
      firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0}
    memory: getMemoryUsage()}
}
=======
    navigation: {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart
    },
    paint: {
      firstPaint: paint.find((entry) => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0
    },
    memory: getMemoryUsage()
  }
}

>>>>>>> main
// Initialize performance enhancements
export const initializePerformanceEnhancements = () => {
  if (typeof window === 'undefined') return
  // Initialize lazy loading
  lazyLoadImages()
  // Preload critical resources
  preloadCriticalResources()
  // Optimize scroll performance
  optimizeScrollPerformance()
  // Collect performance metrics
  const metrics = collectPerformanceMetrics()
  if (metrics && (process.env['NODE_ENV'] === 'development' || import.meta.env.DEV)) {
<<<<<<< HEAD
    // // eslint-disable-next-line no-console
    console.log('Performance metrics:', metrics
    </>
  )
  }
}
=======
    // eslint-disable-next-line no-console
    console.log('Performance metrics:', metrics)
  }
}
=======
// performanceEnhancer utility functions
export const performanceEnhancer = () => {
  return null;
};

export default performanceEnhancer;
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
>>>>>>> main
