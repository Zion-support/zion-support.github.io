// Performance monitor utility
export interface PerformanceMonitorConfig {
  enabled: boolean
  sampleRate: number
  maxMetrics: number
  trackCLS: boolean
  trackFID: boolean
  trackLCP: boolean
  trackFCP: boolean
  trackTTFB: boolean
}

export interface PerformanceMetric {
  name: string
  value: number
  timestamp: Date
  unit?: string
  category?: string
}

export class PerformanceMonitor {
  private config: PerformanceMonitorConfig
  private metrics: PerformanceMetric[] = []
  private observer?: PerformanceObserver

  constructor(config: PerformanceMonitorConfig) {
    this.config = {
      sampleRate: 1.0,
      maxMetrics: 1000,
      trackCLS: true,
      trackFID: true,
      trackLCP: true,
      trackFCP: true,
      trackTTFB: true,
      ...config
    }
  }

  start(): void {
    if (!this.config.enabled || typeof window === 'undefined') return

    this.setupPerformanceObserver()
    this.trackNavigationTiming()
    this.trackResourceTiming()
  }

  private setupPerformanceObserver(): void {
    if (typeof PerformanceObserver === 'undefined') return

    this.observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.processEntry(entry)
      }
    })

    const entryTypes: PerformanceEntryType[] = []
    
    if (this.config.trackCLS) entryTypes.push('layout-shift')
    if (this.config.trackFID) entryTypes.push('first-input')
    if (this.config.trackLCP) entryTypes.push('largest-contentful-paint')
    if (this.config.trackFCP) entryTypes.push('paint')

    if (entryTypes.length > 0) {
      this.observer.observe({ entryTypes })
    }
  }

  private processEntry(entry: PerformanceEntry): void {
    const timestamp = new Date()
    
    switch (entry.entryType) {
      case 'layout-shift':
        if (entry.value > 0) {
          this.recordMetric('CLS', entry.value, 'score', 'web-vitals')
        }
        break
      
      case 'first-input':
        this.recordMetric('FID', entry.processingStart - entry.startTime, 'ms', 'web-vitals')
        break
      
      case 'largest-contentful-paint':
        this.recordMetric('LCP', entry.startTime, 'ms', 'web-vitals')
        break
      
      case 'paint':
        if (entry.name === 'first-contentful-paint') {
          this.recordMetric('FCP', entry.startTime, 'ms', 'web-vitals')
        }
        break
      
      case 'navigation':
        this.processNavigationEntry(entry as PerformanceNavigationTiming)
        break
      
      case 'resource':
        this.processResourceEntry(entry as PerformanceResourceTiming)
        break
    }
  }

  private processNavigationEntry(entry: PerformanceNavigationTiming): void {
    if (this.config.trackTTFB) {
      this.recordMetric('TTFB', entry.responseStart - entry.requestStart, 'ms', 'navigation')
    }
    
    this.recordMetric('DOMContentLoaded', entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart, 'ms', 'navigation')
    this.recordMetric('Load', entry.loadEventEnd - entry.loadEventStart, 'ms', 'navigation')
  }

  private processResourceEntry(entry: PerformanceResourceTiming): void {
    const duration = entry.responseEnd - entry.startTime
    this.recordMetric('ResourceLoad', duration, 'ms', 'resource', entry.name)
  }

  private trackNavigationTiming(): void {
    if (typeof performance === 'undefined') return

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      this.processNavigationEntry(navigation)
    }
  }

  private trackResourceTiming(): void {
    if (typeof performance === 'undefined') return

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
    resources.forEach(resource => {
      this.processResourceEntry(resource)
    })
  }

  recordMetric(name: string, value: number, unit?: string, category?: string, resource?: string): void {
    if (!this.config.enabled) return

    const metric: PerformanceMetric = {
      name: resource ? `${name}_${resource}` : name,
      value,
      timestamp: new Date(),
      unit,
      category
    }

    this.metrics.push(metric)

    // Keep only the most recent metrics
    if (this.metrics.length > this.config.maxMetrics) {
      this.metrics = this.metrics.slice(-this.config.maxMetrics)
    }
  }

  getMetrics(name?: string, category?: string): PerformanceMetric[] {
    let filtered = [...this.metrics]

    if (name) {
      filtered = filtered.filter(m => m.name.includes(name))
    }

    if (category) {
      filtered = filtered.filter(m => m.category === category)
    }

    return filtered
  }

  getAverageMetric(name: string, category?: string): number | null {
    const metrics = this.getMetrics(name, category)
    if (metrics.length === 0) return null

    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0)
    return sum / metrics.length
  }

  getWebVitals(): Record<string, number | null> {
    return {
      CLS: this.getAverageMetric('CLS', 'web-vitals'),
      FID: this.getAverageMetric('FID', 'web-vitals'),
      LCP: this.getAverageMetric('LCP', 'web-vitals'),
      FCP: this.getAverageMetric('FCP', 'web-vitals'),
      TTFB: this.getAverageMetric('TTFB', 'navigation')
    }
  }

  stop(): void {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = undefined
    }
  }

  clearMetrics(): void {
    this.metrics = []
  }
}

export default PerformanceMonitor
