<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React from 'react'
import { useRef } from 'react'
=======
<<<<<<< HEAD
import { useRef, useEffect } from 'react'
'use client'
>>>>>>> main
=======
import { useRef, useEffect } from 'react'
'use client'
=======
'use client'
import React from 'react'
import { useRef } from 'react'
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
/**
 * Performance Enhancement Utilities
 * Advanced performance optimization tools for the application
 */
<<<<<<< HEAD
<<<<<<< HEAD
// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(,
    func: T
=======
=======
>>>>>>> 1c3bcb5bf864

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
<<<<<<< HEAD
>>>>>>> main
=======
=======
// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(,
    func: T
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(,
    func: T
=======
=======
>>>>>>> 1c3bcb5bf864

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
<<<<<<< HEAD
>>>>>>> main
=======
=======
// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(,
    func: T
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
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
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map()
  private observers: PerformanceObserver[] = [];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
  // Track component render time
  trackRender(componentName: string, renderTime: number) {
    this.metrics.set(`${componentName}_render`, renderTime)
    if (process.env['NODE_ENV'] === 'development') {
<<<<<<< HEAD
      // eslint-disable-next-line no-console
<<<<<<< HEAD
    console.log(`${componentName} rendered in ${renderTime}ms`)
    }
  }
=======
=======
<<<<<<< HEAD
       
>>>>>>> 1c3bcb5bf864
      console.log(`${componentName} rendered in ${renderTime}ms`)
    }
  }

<<<<<<< HEAD
>>>>>>> main
=======
=======
      // eslint-disable-next-line no-console
    console.log(`${componentName} rendered in ${renderTime}ms`)
    }
  }
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
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
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
  // Get performance metrics
  getMetrics() {
    return Object.fromEntries(this.metrics)
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
  // Clear metrics
  clearMetrics() {
    this.metrics.clear()
  }
<<<<<<< HEAD
<<<<<<< HEAD
  // Monitor long tasks
  startLongTaskMonitoring() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
}
=======
=======
>>>>>>> 1c3bcb5bf864

  // Monitor long tasks
  startLongTaskMonitoring() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }
>>>>>>> main
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms
<<<<<<< HEAD
          // eslint-disable-next-line no-console
<<<<<<< HEAD
    console.log(`Long task detected: ${entry.name} took ${entry.duration}ms`)
=======
          console.log(`Long task detected: ${entry.name} took ${entry.duration}ms`)
>>>>>>> main
=======
           
          console.log(`Long task detected: ${entry.name} took ${entry.duration}ms`)
=======
  // Monitor long tasks
  startLongTaskMonitoring() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
}
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms
          // eslint-disable-next-line no-console
    console.log(`Long task detected: ${entry.name} took ${entry.duration}ms`)
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
        }
      })
    })
    observer.observe({ entryTypes: ['longtask'] })
    this.observers.push(observer)
  }
<<<<<<< HEAD
<<<<<<< HEAD
  // Cleanup observers
  cleanup() {
  this.observers.forEach(observer => observer.disconnect())
    this.observers = []
}
}
=======
=======
>>>>>>> 1c3bcb5bf864

  // Cleanup observers
  cleanup() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

<<<<<<< HEAD
>>>>>>> main
=======
=======
  // Cleanup observers
  cleanup() {
  this.observers.forEach(observer => observer.disconnect())
    this.observers = []
}
}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
// React hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number>(0)
  const monitor = PerformanceMonitor.getInstance()
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    renderStartTime.current = performance.now()
    return (
    <>
      ) => {
=======
=======
>>>>>>> 1c3bcb5bf864

  useEffect(() => {
    renderStartTime.current = performance.now()
    return () => {
<<<<<<< HEAD
>>>>>>> main
=======
=======
  useEffect(() => {
    renderStartTime.current = performance.now()
    return (
    <>
      ) => {
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
      const renderTime = performance.now() - renderStartTime.current
      monitor.trackRender(componentName, renderTime)
      monitor.trackMemory(componentName)
    }
  }, [componentName, monitor])
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
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
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
// Image lazy loading utility
export const lazyLoadImages = () => {
  if (typeof window === 'undefined') return
  const images = document.querySelectorAll('img[data-src]')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
<<<<<<< HEAD
<<<<<<< HEAD
        img['src'] = img.dataset['src'] || ''
=======
        img.src = img.dataset.src || ''
>>>>>>> main
=======
        img.src = img.dataset.src || ''
=======
        img['src'] = img.dataset['src'] || ''
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
        img.classList.remove('lazy')
        imageObserver.unobserve(img)
      }
    })
  })
  images.forEach((img) => imageObserver.observe(img))
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return
  const criticalResources = [
<<<<<<< HEAD
<<<<<<< HEAD
    '/fonts/inter-var.woff2'
    '/css/critical.css']
=======
    '/fonts/inter-var.woff2',
    '/css/critical.css'
  ]
>>>>>>> main
=======
    '/fonts/inter-var.woff2',
    '/css/critical.css'
  ]
=======
    '/fonts/inter-var.woff2'
    '/css/critical.css']
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
  criticalResources.forEach((resource) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    link.as = resource.endsWith('.woff2') ? 'font' : 'style'
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous'
<<<<<<< HEAD
<<<<<<< HEAD
}
    document.head.appendChild(link)
  })
}
=======
=======
>>>>>>> 1c3bcb5bf864
    }
    document.head.appendChild(link)
  })
}

<<<<<<< HEAD
>>>>>>> main
=======
=======
}
    document.head.appendChild(link)
  })
}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
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
=======
>>>>>>> 1c3bcb5bf864
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition)
      ticking = true
    }
  }

  // Track Core Web Vitals
  const trackCLS = () => {
    let clsValue = 0
<<<<<<< HEAD
>>>>>>> main
=======
=======
  if (!ticking) {
      requestAnimationFrame(updateScrollPosition)
      ticking = true
}
  }
  // Track Core Web Vitals
  const trackCLS = () => {
  let clsValue = 0
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
    const clsEntries: PerformanceEntry[] = [];
    interface LayoutShiftEntry extends PerformanceEntry {
      hadRecentInput?: boolean
      value: number
<<<<<<< HEAD
<<<<<<< HEAD
  }
    const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
=======
    }
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
>>>>>>> main
=======
    }
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
=======
  }
    const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
        const layoutEntry = entry as LayoutShiftEntry
        if (!layoutEntry.hadRecentInput) {
          clsEntries.push(entry)
          clsValue += layoutEntry.value
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
        }
>>>>>>> main
=======
        }
=======
}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
      }
    })
    observer.observe({ entryTypes: ['layout-shift'] })
    return () => {
<<<<<<< HEAD
<<<<<<< HEAD
  observer.disconnect()
      return clsValue
}
  }
=======
=======
>>>>>>> 1c3bcb5bf864
      observer.disconnect()
      return clsValue
    }
  }

<<<<<<< HEAD
>>>>>>> main
=======
=======
  observer.disconnect()
      return clsValue
}
  }
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
  const trackLCP = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (process.env['NODE_ENV'] === 'development') {
<<<<<<< HEAD
<<<<<<< HEAD
          }
=======
          // eslint-disable-next-line no-console
          console.log('LCP:', entry.startTime)
        }
>>>>>>> main
=======
           
          console.log('LCP:', entry.startTime)
        }
=======
          }
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
      }
    })
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
    return () => observer.disconnect()
  }
<<<<<<< HEAD
<<<<<<< HEAD
  const trackFID = () => {
  interface FirstInputEntry extends PerformanceEntry {
      processingStart: number
  }
=======
=======
>>>>>>> 1c3bcb5bf864

  const trackFID = () => {
    interface FirstInputEntry extends PerformanceEntry {
      processingStart: number
    }
<<<<<<< HEAD
>>>>>>> main
=======
=======
  const trackFID = () => {
  interface FirstInputEntry extends PerformanceEntry {
      processingStart: number
  }
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as FirstInputEntry
        const fid = fidEntry.processingStart - entry.startTime
        if (process.env['NODE_ENV'] === 'development') {
<<<<<<< HEAD
<<<<<<< HEAD
          }
=======
          // eslint-disable-next-line no-console
          console.log('FID:', fid)
        }
>>>>>>> main
=======
           
          console.log('FID:', fid)
        }
=======
          }
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
      }
    })
    observer.observe({ entryTypes: ['first-input'] })
    return () => observer.disconnect()
  }
<<<<<<< HEAD
<<<<<<< HEAD
  window.addEventListener('scroll', requestTick, { passive: true })
=======

  window.addEventListener('scroll', requestTick, { passive: true })

>>>>>>> main
=======

  window.addEventListener('scroll', requestTick, { passive: true })

=======
  window.addEventListener('scroll', requestTick, { passive: true })
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
  // Start tracking
  const cleanupCLS = trackCLS()
  const cleanupLCP = trackLCP()
  const cleanupFID = trackFID()
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
  return () => {
    cleanupCLS()
    cleanupLCP()
    cleanupFID()
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> main
=======

=======
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
// Memory usage monitoring
export const getMemoryUsage = () => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null
<<<<<<< HEAD
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
=======
>>>>>>> 1c3bcb5bf864
  }
  const memory = (performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
  return {
    used: memory.usedJSHeapSize,
    total: memory.totalJSHeapSize,
    limit: memory.jsHeapSizeLimit,
    percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
  }
}

<<<<<<< HEAD
>>>>>>> main
=======
=======
}
  const memory = (performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
  return {
    used: memory.usedJSHeapSize,
    total: memory.totalJSHeapSize
    limit: memory.jsHeapSizeLimit,
    percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100}
}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
// Performance metrics collection
export const collectPerformanceMetrics = () => {
  if (typeof window === 'undefined') return null
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  const paint = performance.getEntriesByType('paint')
  return {
<<<<<<< HEAD
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
=======
>>>>>>> 1c3bcb5bf864
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

<<<<<<< HEAD
>>>>>>> main
=======
=======
    navigation: {,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    totalTime: navigation.loadEventEnd - navigation.fetchStart}
    paint: {,
    firstPaint: paint.find((entry) => entry.name === 'first-paint')?.startTime || 0
      firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0}
    memory: getMemoryUsage()}
}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
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
<<<<<<< HEAD
    // // eslint-disable-next-line no-console
    console.log('Performance metrics:', metrics
    </>
  )
  }
}
=======
    // eslint-disable-next-line no-console
=======
     
>>>>>>> 1c3bcb5bf864
    console.log('Performance metrics:', metrics)
=======
    // // eslint-disable-next-line no-console
    console.log('Performance metrics:', metrics
    </>
  )
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
  }
<<<<<<< HEAD
}
=======
// performanceEnhancer utility functions
export const performanceEnhancer = () => {
  return null;
};

export default performanceEnhancer;
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
>>>>>>> main
=======
}
>>>>>>> 1c3bcb5bf864
