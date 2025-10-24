'use client'
/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */
import React from 'react'

export interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
  inp?: number
  memory?: {
    used: string
    total: string
    limit: string
  }
}

export interface ErrorReport {
  errorId: string
  error: Error
  timestamp: string
  userAgent: string
  url: string
  stack?: string
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {}
  private errors: ErrorReport[] = []
  private observers: PerformanceObserver[] = []

  constructor() {
    this.initializeMonitoring()
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return

    this.monitorWebVitals()
    this.monitorLongTasks()
    this.monitorResourceTiming()
    this.setupErrorHandling()
  }

  private monitorWebVitals(): void {
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.reportMetric('fcp', entry.startTime)
            }
          })
        })
        fcpObserver.observe({ entryTypes: ['paint'] })
        this.observers.push(fcpObserver)
      } catch (error) {
        console.error('Error setting up performance observers:', error)
      }
    }
  }

  private monitorLongTasks(): void {
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn('Long task detected:', {
                duration: entry.duration,
                startTime: entry.startTime
              })
            }
          }
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })
        this.observers.push(longTaskObserver)
      } catch (error) {
        // Long task API might not be available
      }
    }
  }

  private monitorResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceResourceTiming) => {
            if (entry.duration > 1000) {
              console.warn('Slow resource detected:', {
                name: entry.name,
                duration: entry.duration,
                size: entry.transferSize
              })
            }
          })
        })
        resourceObserver.observe({ entryTypes: ['resource'] })
        this.observers.push(resourceObserver)
      } catch (error) {
        console.error('Error setting up resource observer:', error)
      }
    }
  }

  private setupErrorHandling(): void {
    if (typeof window === 'undefined') return

    // Global error handler
    window.addEventListener('error', (event) => {
      this.reportError(new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      })
    })

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError(new Error(event.reason), {
        filename: 'unhandled-promise',
        lineno: 0,
        colno: 0
      })
    })
  }

  private reportMetric(name: keyof PerformanceMetrics, value: number): void {
    if (typeof value !== 'number' || isNaN(value)) {
      return
    }

    const thresholds = {
      fcp: { good: 1800, needsImprovement: 3000 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      ttfb: { good: 600, needsImprovement: 1500 }
    }

    const threshold = thresholds[name as keyof typeof thresholds]
    if (threshold) {
      const rating = value <= threshold.good ? 'good' : value <= threshold.needsImprovement ? 'needs-improvement' : 'poor'
      console.log(`[Performance] ${name}:`, {
        value,
        rating,
        threshold: threshold.good
      })
    }

    this.metrics[name] = value
  }

  private reportError(error: Error, errorInfo?: { filename?: string; lineno?: number; colno?: number }): void {
    const errorReport: ErrorReport = {
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      error,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      stack: error.stack
    }

    this.errors.push(errorReport)
    // Keep only last 50 errors
    if (this.errors.length > 50) {
      this.errors = this.errors.slice(-50)
    }

    console.error('[Error]', error)
    // Send to error tracking service (if configured)
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  public getErrors(): ErrorReport[] {
    return [...this.errors]
  }

  public measureMemory(): void {
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
      if (memory) {
        this.metrics.memory = {
          used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
          total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
          limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
        }
      }
    }
  }

  public measureNavigationTiming(): void {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        console.log('Performance metrics:', {
          'DNS Lookup': `${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms`,
          'TCP Connect': `${Math.round(navigation.connectEnd - navigation.connectStart)}ms`,
          'TTFB': `${Math.round(navigation.responseStart - navigation.requestStart)}ms`,
          'Download': `${Math.round(navigation.responseEnd - navigation.responseStart)}ms`,
          'DOM Processing': `${Math.round(navigation.domComplete - navigation.domLoading)}ms`,
          'Total Load Time': `${Math.round(navigation.loadEventEnd - navigation.navigationStart)}ms`
        })
      }
    }
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor()

export default performanceMonitor