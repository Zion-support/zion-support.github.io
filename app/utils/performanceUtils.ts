/**
 * Performance Utilities
 * Collection of performance measurement and optimization utilities
 */

interface PerformanceMetrics {
  loadTime: number
  fcp: number
  lcp: number
  fid: number
  cls: number
  ttfb: number
  inp: number
}

export class PerformanceUtils {
  private metrics: PerformanceMetrics = {} as PerformanceMetrics
  private observers: PerformanceObserver[] = []

  constructor() {
    this.initializeMetrics()
  }

  private initializeMetrics(): void {
    if (typeof window === 'undefined' || !('performance' in window)) return

    // Measure page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart
    })

    // Measure Core Web Vitals
    this.observeWebVitals()
  }

  private observeWebVitals(): void {
    if (!('PerformanceObserver' in window)) return

    // FCP Observer
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime
          }
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
      this.observers.push(fcpObserver)
    } catch (error) {
      console.warn('Failed to observe FCP:', error)
    }

    // LCP Observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.lcp = entry.startTime
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(lcpObserver)
    } catch (error) {
      console.warn('Failed to observe LCP:', error)
    }

    // CLS Observer
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        this.metrics.cls = clsValue
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(clsObserver)
    } catch (error) {
      console.warn('Failed to observe CLS:', error)
    }

    // Navigation Observer
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming
          this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart
        }
      })
      navObserver.observe({ entryTypes: ['navigation'] })
      this.observers.push(navObserver)
    } catch (error) {
      console.warn('Failed to observe navigation:', error)
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  measureFunction<T extends (...args: any[]) => any>(
    name: string,
    fn: T
  ): T {
    return ((...args: Parameters<T>) => {
      const start = performance.now()
      const result = fn(...args)
      const end = performance.now()
      
      console.log(`${name} took ${end - start} milliseconds`)
      
      return result
    }) as T
  }

  measureAsyncFunction<T extends (...args: any[]) => Promise<any>>(
    name: string,
    fn: T
  ): T {
    return (async (...args: Parameters<T>) => {
      const start = performance.now()
      const result = await fn(...args)
      const end = performance.now()
      
      console.log(`${name} took ${end - start} milliseconds`)
      
      return result
    }) as T
  }

  createPerformanceMark(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name)
    }
  }

  createPerformanceMeasure(name: string, startMark: string, endMark: string): void {
    if (typeof performance !== 'undefined' && performance.measure) {
      performance.measure(name, startMark, endMark)
    }
  }

  getPerformanceEntries(type?: string): PerformanceEntry[] {
    if (typeof performance === 'undefined') return []
    
    if (type) {
      return performance.getEntriesByType(type)
    }
    
    return performance.getEntries()
  }

  getPerformanceTiming(): PerformanceNavigationTiming | null {
    if (typeof performance === 'undefined') return null
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    return navigation || null
  }

  getResourceTiming(): PerformanceResourceTiming[] {
    if (typeof performance === 'undefined') return []
    
    return performance.getEntriesByType('resource') as PerformanceResourceTiming[]
  }

  getMemoryInfo(): any {
    if (typeof performance !== 'undefined' && 'memory' in performance) {
      return (performance as any).memory
    }
    return null
  }

  getConnectionInfo(): any {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      return (navigator as any).connection
    }
    return null
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Default performance utils instance
export const performanceUtils = new PerformanceUtils()

// Utility functions
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export const memoize = <T extends (...args: any[]) => any>(
  func: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T => {
  const cache = new Map<string, ReturnType<T>>()
  
  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args)
    
    if (cache.has(key)) {
      return cache.get(key)
    }
    
    const result = func(...args)
    cache.set(key, result)
    return result
  }) as T
}