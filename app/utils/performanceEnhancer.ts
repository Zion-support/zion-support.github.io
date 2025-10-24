<<<<<<< HEAD:app/utils/performanceEnhancer.ts
'use client';
import React from 'react';
import { useRef } from 'react';
/**
 * Performance Enhancement Utilities
 * Advanced performance optimization tools for the application
 */
// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(,
    func: T
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(,
    func: T
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
// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map()
  private observers: PerformanceObserver[] = [];
  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }
  // Track component render time
  trackRender(componentName: string, renderTime: number) {
    this.metrics.set(`${componentName}_render`, renderTime)
    if (process.env['NODE_ENV'] === 'development') {
      // eslint-disable-next-line no-console
    console.log(`${componentName} rendered in ${renderTime}ms`)
    }
  }
  // Track memory usage
  trackMemory(componentName: string) {
    if ('memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory
      if (memory) {
        this.metrics.set(`${componentName}_memory`, memory.usedJSHeapSize)
      }
    }
  }
  // Get performance metrics
  getMetrics() {
    return Object.fromEntries(this.metrics)
  }
  // Clear metrics
  clearMetrics() {
    this.metrics.clear()
  }
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
        }
      })
    })
    observer.observe({ entryTypes: ['longtask'] })
    this.observers.push(observer)
  }
  // Cleanup observers
  cleanup() {
  this.observers.forEach(observer => observer.disconnect())
    this.observers = []
}
}
// React hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number>(0)
  const monitor = PerformanceMonitor.getInstance()
  useEffect(() => {
    renderStartTime.current = performance.now()
    return (
    <>
      ) => {
      const renderTime = performance.now() - renderStartTime.current
      monitor.trackRender(componentName, renderTime)
      monitor.trackMemory(componentName)
    }
  }, [componentName, monitor])
  return {
    trackRender: (fn: () => void) => {
      const start = performance.now()
      fn()
      const duration = performance.now() - start
      monitor.trackRender(`${componentName}_function`, duration)
    }
  }
}
// Image lazy loading utility
export const lazyLoadImages = () => {
  if (typeof window === 'undefined') return
  const images = document.querySelectorAll('img[data-src]')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        img['src'] = img.dataset['src'] || ''
        img.classList.remove('lazy')
        imageObserver.unobserve(img)
      }
    })
  })
  images.forEach((img) => imageObserver.observe(img))
}
// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/css/critical.css']
  criticalResources.forEach((resource) => {
    const link = document.createElement('link')
=======
import React from 'react'
import { useRef } from 'react'
'use client'
    if (process.env['NODE_ENV'] === 'development'
    if ('memory'
  if (typeof window === 'undefined' || !('PerformanceObserver'
    observer.observe({ "entryTypes": ['longtask');
  if (typeof window === 'undefined'
  const images = document.querySelectorAll('img[data-src]'
        img['src'] = img.dataset['src'] || ''
        img.classList.remove('lazy'
  if (typeof window === 'undefined'
    '/fonts/inter-var.woff2'
    '/css/critical.css'
    const link = document.createElement('link'
>>>>>>> origin/main:app-backup/utils/performanceEnhancer.ts
    link.rel = 'preload'
    link.as = resource.endsWith('.woff2') ? 'font' : 'style'
    if (resource.endsWith('.woff2'
      link.crossOrigin = 'anonymous'
  if (typeof window === 'undefined'
    document.documentElement.style.setProperty('--scroll-top'
    observer.observe({ "entryTypes": ['layout-shift');
        if (process.env['NODE_ENV'] === 'development'
    observer.observe({ "entryTypes": ['largest-contentful-paint');
        if (process.env['NODE_ENV'] === 'development'
    observer.observe({ "entryTypes": ['first-input');
  window.addEventListener('scroll'
  if (typeof window === 'undefined' || !('memory'
  if (typeof window === 'undefined'
  const navigation = performance.getEntriesByType('navigation'}
  const paint = performance.getEntriesByType('paint'
    "firstPaint": paint.find((entry) => entry.name === 'first-paint',
      "firstContentfulPaint": paint.find((entry) => entry.name === 'first-contentful-paint',
  if (typeof window === 'undefined'
  if (metrics && (process.env['NODE_ENV'] === 'development';
    console.log('Performance "metrics": '