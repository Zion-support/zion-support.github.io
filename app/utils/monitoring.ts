'use client'
/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */

// Declare gtag function for Google Analytics
declare global {
  function gtag(...args: any[]): void;
}

const performanceConfig = {
  monitoring: {
    enableLongTaskDetection: true,
    enableMemoryMonitoring: true,
    sampleRate: 0.1
  },
  webVitals: {
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    fcp: { good: 1800, needsImprovement: 3000 },
    ttfb: { good: 800, needsImprovement: 1800 },
    inp: { good: 200, needsImprovement: 500 }
  }
}

export interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
  inp?: number
}

export interface ErrorReport {
  message: string
  stack?: string
  component?: string
  timestamp: number
  userAgent: string
  url: string
}

class MonitoringService {
  private metrics: PerformanceMetrics = {}
  private errors: ErrorReport[] = []
  private observer: PerformanceObserver | null = null

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring()
    }
  }

  private initializeMonitoring(): void {
    // Monitor Web Vitals
    this.monitorWebVitals()
    // Monitor Long Tasks
    this.monitorLongTasks()
    // Monitor Resource Loading
    this.monitorResourceTiming()
    // Global Error Handler
    this.setupErrorHandling()
  }

  private monitorWebVitals(): void {
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
          this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime || 0
          this.reportMetric('lcp', this.metrics.lcp)
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceEntry) => {
            this.metrics.fid = (entry as any).processingStart - entry.startTime
            this.reportMetric('fid', this.metrics.fid)
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          this.metrics.cls = clsValue
          this.reportMetric('cls', this.metrics.cls)
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            this.metrics.fcp = fcpEntry.startTime
            this.reportMetric('fcp', this.metrics.fcp)
          }
        })
        fcpObserver.observe({ entryTypes: ['paint'] })
<<<<<<< HEAD

        // Time to First Byte
        const ttfbObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const ttfbEntry = entries.find(entry => entry.entryType === 'navigation') as PerformanceNavigationTiming
          if (ttfbEntry) {
            this.metrics.ttfb = ttfbEntry.responseStart - ttfbEntry.requestStart
            this.reportMetric('ttfb', this.metrics.ttfb)
          }
        })
        ttfbObserver.observe({ entryTypes: ['navigation'] })

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6f50
      } catch (error) {
        console.warn('Web Vitals monitoring failed:', error)
      }
    }
  }

  private monitorLongTasks(): void {
    if ('PerformanceObserver' in window && performanceConfig.monitoring.enableLongTaskDetection) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
<<<<<<< HEAD
            if (entry.duration > 50) {
              this.reportMetric('long_task', entry.duration)
            }
=======
            // eslint-disable-next-line no-console
            console.log('Long task detected:', entry.duration)
>>>>>>> cursor/fix-errors-and-merge-to-main-6f50
          }
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })
      } catch (error) {
        console.warn('Long task monitoring failed:', error)
      }
    }
  }

  private monitorResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const resourceEntry = entry as PerformanceResourceTiming
            if (resourceEntry.duration > 1000) {
              this.reportMetric('slow_resource', {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                size: resourceEntry.transferSize
              })
            }
          }
        })
        resourceObserver.observe({ entryTypes: ['resource'] })
      } catch (error) {
        console.warn('Resource timing monitoring failed:', error)
      }
    }
  }

  private setupErrorHandling(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        component: 'global',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      })
    })

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
<<<<<<< HEAD
      this.reportError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        component: 'promise',
=======
      this.logError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
>>>>>>> cursor/fix-errors-and-merge-to-main-6f50
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      })
    })
  }

<<<<<<< HEAD
  private reportMetric(name: string, value: number | object): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}:`, value)
=======
  private reportMetric(name: string, value: number): void {
    // Sample rate
    if (Math.random() > performanceConfig.monitoring.sampleRate) {
      return
    }

    const thresholds = performanceConfig.webVitals[name as keyof typeof performanceConfig.webVitals]
    if (thresholds) {
      const rating = value <= thresholds.good ? 'good' : value <= thresholds.needsImprovement ? 'needs-improvement' : 'poor'
      // eslint-disable-next-line no-console
      console.log(`Web Vital ${name}:`, value, `(${rating})`)
>>>>>>> cursor/fix-errors-and-merge-to-main-6f50
    }

    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: typeof value === 'number' ? value : JSON.stringify(value)
      })
    }
  }

  private reportError(error: ErrorReport): void {
    this.errors.push(error)
    
    if (process.env.NODE_ENV === 'development') {
      console.error('[Error]', error)
    }

    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.message,
        fatal: false
      })
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  public getErrors(): ErrorReport[] {
    return [...this.errors]
  }

  public clearErrors(): void {
    this.errors = []
  }
}

<<<<<<< HEAD
// Export singleton instance
export const monitoringService = new MonitoringService()

// Export utility functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters)
  }
}

export const trackPageView = (pagePath: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: pagePath
    })
  }
}
=======
  public measureMemory(): void {
    if ('memory' in performance && performanceConfig.monitoring.enableMemoryMonitoring) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
      if (memory) {
        // eslint-disable-next-line no-console
        console.log('Memory usage:', {
          used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
          total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
          limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
        })
      }
    }
  }

  public measureNavigationTiming(): void {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics:', {
          'DNS Lookup': `${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms`,
          'TCP Connect': `${Math.round(navigation.connectEnd - navigation.connectStart)}ms`,
          'TTFB': `${Math.round(navigation.responseStart - navigation.requestStart)}ms`,
          'Download': `${Math.round(navigation.responseEnd - navigation.responseStart)}ms`,
          'DOM Interactive': `${Math.round(navigation.domInteractive - navigation.fetchStart)}ms`,
          'DOM Complete': `${Math.round(navigation.domComplete - navigation.fetchStart)}ms`,
          'Load Complete': `${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`
        })
      }
    }
  }
}

// Singleton instance
const monitoring = new MonitoringService()
export default monitoring;
>>>>>>> cursor/fix-errors-and-merge-to-main-6f50
