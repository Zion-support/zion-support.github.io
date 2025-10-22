/**
 * Performance Metrics Collection and Analysis
 * Tracks and analyzes various performance metrics
 */

export interface PerformanceMetric {
  name: string
  value: number
  unit: string
  timestamp: Date
  category: 'load' | 'runtime' | 'network' | 'memory' | 'custom'
  metadata?: Record<string, any>
}

export interface WebVitalsMetrics {
  FCP?: number // First Contentful Paint
  LCP?: number // Largest Contentful Paint
  FID?: number // First Input Delay
  CLS?: number // Cumulative Layout Shift
  TTFB?: number // Time to First Byte
  INP?: number // Interaction to Next Paint
}

export interface PerformanceReport {
  timestamp: Date
  url: string
  userAgent: string
  metrics: PerformanceMetric[]
  webVitals: WebVitalsMetrics
  summary: {
    score: number
    grade: 'A' | 'B' | 'C' | 'D' | 'F'
    recommendations: string[]
  }
}

export class PerformanceMetricsCollector {
  private metrics: PerformanceMetric[] = []
  private webVitals: WebVitalsMetrics = {}
  private observers: PerformanceObserver[] = []

  constructor() {
    this.initialize()
  }

  private initialize(): void {
    if (typeof window === 'undefined') return

    this.observeWebVitals()
    this.observeCustomMetrics()
    this.collectInitialMetrics()
  }

  private observeWebVitals(): void {
    if (!('PerformanceObserver' in window)) return

    // Observe FCP
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.webVitals.FCP = entry.startTime
            this.addMetric('FCP', entry.startTime, 'ms', 'load')
          }
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
      this.observers.push(fcpObserver)
    } catch (error) {
      console.warn('Failed to observe FCP:', error)
    }

    // Observe LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.webVitals.LCP = entry.startTime
          this.addMetric('LCP', entry.startTime, 'ms', 'load')
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(lcpObserver)
    } catch (error) {
      console.warn('Failed to observe LCP:', error)
    }

    // Observe CLS
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        this.webVitals.CLS = clsValue
        this.addMetric('CLS', clsValue, '', 'load')
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(clsObserver)
    } catch (error) {
      console.warn('Failed to observe CLS:', error)
    }
  }

  private observeCustomMetrics(): void {
    if (!('PerformanceObserver' in window)) return

    // Observe navigation timing
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming
          
          this.addMetric('TTFB', navEntry.responseStart - navEntry.requestStart, 'ms', 'network')
          this.addMetric('DOMContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart, 'ms', 'load')
          this.addMetric('Load', navEntry.loadEventEnd - navEntry.loadEventStart, 'ms', 'load')
        }
      })
      navObserver.observe({ entryTypes: ['navigation'] })
      this.observers.push(navObserver)
    } catch (error) {
      console.warn('Failed to observe navigation timing:', error)
    }

    // Observe resource timing
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming
          this.addMetric('Resource Load Time', resourceEntry.responseEnd - resourceEntry.requestStart, 'ms', 'network', {
            resource: resourceEntry.name,
            type: resourceEntry.initiatorType
          })
        }
      })
      resourceObserver.observe({ entryTypes: ['resource'] })
      this.observers.push(resourceObserver)
    } catch (error) {
      console.warn('Failed to observe resource timing:', error)
    }
  }

  private collectInitialMetrics(): void {
    if (typeof window === 'undefined') return

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory
      this.addMetric('Used JS Heap Size', memory.usedJSHeapSize / 1024 / 1024, 'MB', 'memory')
      this.addMetric('Total JS Heap Size', memory.totalJSHeapSize / 1024 / 1024, 'MB', 'memory')
    }

    // Connection information
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection.effectiveType) {
        this.addMetric('Connection Type', 0, connection.effectiveType, 'network', {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt
        })
      }
    }
  }

  private addMetric(name: string, value: number, unit: string, category: PerformanceMetric['category'], metadata?: Record<string, any>): void {
    this.metrics.push({
      name,
      value,
      unit,
      timestamp: new Date(),
      category,
      metadata
    })
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics]
  }

  getWebVitals(): WebVitalsMetrics {
    return { ...this.webVitals }
  }

  generateReport(): PerformanceReport {
    const score = this.calculateScore()
    const grade = this.getGrade(score)
    const recommendations = this.getRecommendations()

    return {
      timestamp: new Date(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      metrics: this.getMetrics(),
      webVitals: this.getWebVitals(),
      summary: {
        score,
        grade,
        recommendations
      }
    }
  }

  private calculateScore(): number {
    const webVitals = this.webVitals
    let score = 100

    // FCP scoring (0-100)
    if (webVitals.FCP) {
      if (webVitals.FCP > 3000) score -= 30
      else if (webVitals.FCP > 1800) score -= 20
      else if (webVitals.FCP > 1000) score -= 10
    }

    // LCP scoring (0-100)
    if (webVitals.LCP) {
      if (webVitals.LCP > 4000) score -= 30
      else if (webVitals.LCP > 2500) score -= 20
      else if (webVitals.LCP > 1200) score -= 10
    }

    // CLS scoring (0-100)
    if (webVitals.CLS !== undefined) {
      if (webVitals.CLS > 0.25) score -= 30
      else if (webVitals.CLS > 0.1) score -= 20
      else if (webVitals.CLS > 0.05) score -= 10
    }

    return Math.max(0, score)
  }

  private getGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
    if (score >= 90) return 'A'
    if (score >= 80) return 'B'
    if (score >= 70) return 'C'
    if (score >= 60) return 'D'
    return 'F'
  }

  private getRecommendations(): string[] {
    const recommendations: string[] = []
    const webVitals = this.webVitals

    if (webVitals.FCP && webVitals.FCP > 1800) {
      recommendations.push('Optimize First Contentful Paint by reducing render-blocking resources')
    }

    if (webVitals.LCP && webVitals.LCP > 2500) {
      recommendations.push('Improve Largest Contentful Paint by optimizing images and critical resources')
    }

    if (webVitals.CLS && webVitals.CLS > 0.1) {
      recommendations.push('Reduce Cumulative Layout Shift by setting dimensions for images and ads')
    }

    if (webVitals.TTFB && webVitals.TTFB > 600) {
      recommendations.push('Improve Time to First Byte by optimizing server response time')
    }

    return recommendations
  }

  clearMetrics(): void {
    this.metrics = []
    this.webVitals = {}
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Default metrics collector
export const performanceMetrics = new PerformanceMetricsCollector()