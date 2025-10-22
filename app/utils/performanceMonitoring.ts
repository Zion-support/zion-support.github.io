/**
 * Performance Monitoring System
 * Comprehensive performance tracking and analysis
 */

export interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
}

export interface WebVitals {
  FCP?: PerformanceMetric // First Contentful Paint
  LCP?: PerformanceMetric // Largest Contentful Paint
  FID?: PerformanceMetric // First Input Delay
  CLS?: PerformanceMetric // Cumulative Layout Shift
  TTFB?: PerformanceMetric // Time to First Byte
  INP?: PerformanceMetric // Interaction to Next Paint
}

export interface PerformanceReport {
  timestamp: number
  url: string
  userAgent: string
  webVitals: WebVitals
  customMetrics: PerformanceMetric[]
  summary: {
    overallScore: number
    grade: 'A' | 'B' | 'C' | 'D' | 'F'
    recommendations: string[]
  }
}

export class PerformanceMonitor {
  private webVitals: WebVitals = {}
  private customMetrics: PerformanceMetric[] = []
  private observers: PerformanceObserver[] = []
  private isInitialized = false

  constructor() {
    this.initialize()
  }

  private initialize(): void {
    if (typeof window === 'undefined' || this.isInitialized) return

    this.observeWebVitals()
    this.observeCustomMetrics()
    this.isInitialized = true
  }

  private observeWebVitals(): void {
    if (!('PerformanceObserver' in window)) return

    // FCP Observer
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.webVitals.FCP = this.createMetric('FCP', entry.startTime)
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
          this.webVitals.LCP = this.createMetric('LCP', entry.startTime)
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
        this.webVitals.CLS = this.createMetric('CLS', clsValue)
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
          this.webVitals.TTFB = this.createMetric('TTFB', navEntry.responseStart - navEntry.requestStart)
        }
      })
      navObserver.observe({ entryTypes: ['navigation'] })
      this.observers.push(navObserver)
    } catch (error) {
      console.warn('Failed to observe navigation:', error)
    }
  }

  private observeCustomMetrics(): void {
    if (!('PerformanceObserver' in window)) return

    // Resource Observer
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming
          const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart
          this.customMetrics.push(this.createMetric('Resource Load Time', loadTime))
        }
      })
      resourceObserver.observe({ entryTypes: ['resource'] })
      this.observers.push(resourceObserver)
    } catch (error) {
      console.warn('Failed to observe resources:', error)
    }
  }

  private createMetric(name: string, value: number): PerformanceMetric {
    return {
      name,
      value,
      rating: this.getRating(name, value),
      timestamp: Date.now()
    }
  }

  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = {
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      CLS: { good: 0.1, poor: 0.25 },
      TTFB: { good: 600, poor: 1500 },
      FID: { good: 100, poor: 300 },
      INP: { good: 200, poor: 500 }
    }

    const threshold = thresholds[name as keyof typeof thresholds]
    if (!threshold) return 'good'

    if (value <= threshold.good) return 'good'
    if (value <= threshold.poor) return 'needs-improvement'
    return 'poor'
  }

  addCustomMetric(name: string, value: number): void {
    this.customMetrics.push(this.createMetric(name, value))
  }

  getWebVitals(): WebVitals {
    return { ...this.webVitals }
  }

  getCustomMetrics(): PerformanceMetric[] {
    return [...this.customMetrics]
  }

  generateReport(): PerformanceReport {
    const overallScore = this.calculateOverallScore()
    const grade = this.getGrade(overallScore)
    const recommendations = this.getRecommendations()

    return {
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      webVitals: this.getWebVitals(),
      customMetrics: this.getCustomMetrics(),
      summary: {
        overallScore,
        grade,
        recommendations
      }
    }
  }

  private calculateOverallScore(): number {
    const webVitals = this.webVitals
    let score = 100

    // Deduct points based on metric ratings
    Object.values(webVitals).forEach(metric => {
      if (metric) {
        switch (metric.rating) {
          case 'poor':
            score -= 20
            break
          case 'needs-improvement':
            score -= 10
            break
        }
      }
    })

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

    if (webVitals.FCP?.rating === 'poor') {
      recommendations.push('Optimize First Contentful Paint by reducing render-blocking resources')
    }

    if (webVitals.LCP?.rating === 'poor') {
      recommendations.push('Improve Largest Contentful Paint by optimizing images and critical resources')
    }

    if (webVitals.CLS?.rating === 'poor') {
      recommendations.push('Reduce Cumulative Layout Shift by setting dimensions for images and ads')
    }

    if (webVitals.TTFB?.rating === 'poor') {
      recommendations.push('Improve Time to First Byte by optimizing server response time')
    }

    if (webVitals.FID?.rating === 'poor') {
      recommendations.push('Reduce First Input Delay by breaking up long tasks')
    }

    return recommendations
  }

  clearMetrics(): void {
    this.webVitals = {}
    this.customMetrics = []
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Default performance monitor
export const performanceMonitor = new PerformanceMonitor()