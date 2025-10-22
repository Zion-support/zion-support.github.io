/**
 * Performance Monitoring System
 * Tracks web vitals, errors, and user interactions
 */

export interface PerformanceMetrics {
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  fcp?: number // First Contentful Paint
  ttfb?: number // Time to First Byte
  inp?: number // Interaction to Next Paint
}

export interface ErrorReport {
  message: string
  stack?: string
  url?: string
  line?: number
  column?: number
  timestamp: number
  userAgent?: string
  userId?: string
}

export interface UserInteraction {
  type: 'click' | 'scroll' | 'keydown' | 'resize' | 'focus' | 'blur'
  target?: string
  timestamp: number
  x?: number
  y?: number
  duration?: number
}

export interface MonitoringConfig {
  enablePerformance: boolean
  enableErrors: boolean
  enableInteractions: boolean
  enableWebVitals: boolean
  sampleRate: number
  endpoint?: string
}

export class MonitoringSystem {
  private config: MonitoringConfig
  private metrics: PerformanceMetrics = {}
  private errors: ErrorReport[] = []
  private interactions: UserInteraction[] = []
  private observer?: PerformanceObserver

  constructor(config: Partial<MonitoringConfig> = {}) {
    this.config = {
      enablePerformance: true,
      enableErrors: true,
      enableInteractions: true,
      enableWebVitals: true,
      sampleRate: 1.0,
      ...config
    }

    this.initialize()
  }

  private initialize(): void {
    if (typeof window === 'undefined') return

    if (this.config.enablePerformance) {
      this.observePerformance()
    }

    if (this.config.enableErrors) {
      this.observeErrors()
    }

    if (this.config.enableInteractions) {
      this.observeInteractions()
    }

    if (this.config.enableWebVitals) {
      this.observeWebVitals()
    }
  }

  private observePerformance(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

    try {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.handlePerformanceEntry(entry)
        }
      })

      this.observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })
    } catch (error) {
      console.warn('Failed to initialize performance observer:', error)
    }
  }

  private handlePerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'navigation':
        const navEntry = entry as PerformanceNavigationTiming
        this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart
        break
      case 'paint':
        const paintEntry = entry as PerformancePaintTiming
        if (paintEntry.name === 'first-contentful-paint') {
          this.metrics.fcp = paintEntry.startTime
        }
        break
      case 'largest-contentful-paint':
        const lcpEntry = entry as PerformanceEntry
        this.metrics.lcp = lcpEntry.startTime
        break
    }
  }

  private observeErrors(): void {
    if (typeof window === 'undefined') return

    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename,
        line: event.lineno,
        column: event.colno,
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      })
    })

    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      })
    })
  }

  private observeInteractions(): void {
    if (typeof window === 'undefined') return

    const interactionTypes: (keyof WindowEventMap)[] = ['click', 'scroll', 'keydown', 'resize', 'focus', 'blur']

    interactionTypes.forEach(type => {
      window.addEventListener(type, (event) => {
        this.recordInteraction({
          type: type as UserInteraction['type'],
          target: (event.target as Element)?.tagName?.toLowerCase(),
          timestamp: Date.now(),
          x: (event as MouseEvent).clientX,
          y: (event as MouseEvent).clientY
        })
      }, { passive: true })
    })
  }

  private observeWebVitals(): void {
    if (typeof window === 'undefined') return

    // Observe CLS
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              this.metrics.cls = (this.metrics.cls || 0) + (entry as any).value
            }
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (error) {
        console.warn('Failed to observe CLS:', error)
      }
    }
  }

  private reportError(error: ErrorReport): void {
    if (Math.random() > this.config.sampleRate) return

    this.errors.push(error)

    // Send to remote endpoint if configured
    if (this.config.endpoint) {
      this.sendToRemote('error', error)
    }
  }

  private recordInteraction(interaction: UserInteraction): void {
    if (Math.random() > this.config.sampleRate) return

    this.interactions.push(interaction)

    // Keep only recent interactions
    if (this.interactions.length > 1000) {
      this.interactions = this.interactions.slice(-500)
    }
  }

  private async sendToRemote(type: string, data: any): Promise<void> {
    if (!this.config.endpoint) return

    try {
      await fetch(this.config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type,
          data,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      })
    } catch (error) {
      console.warn('Failed to send monitoring data:', error)
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  getErrors(): ErrorReport[] {
    return [...this.errors]
  }

  getInteractions(): UserInteraction[] {
    return [...this.interactions]
  }

  clearData(): void {
    this.metrics = {}
    this.errors = []
    this.interactions = []
  }

  setConfig(config: Partial<MonitoringConfig>): void {
    this.config = { ...this.config, ...config }
  }

  destroy(): void {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}

// Default monitoring instance
export const monitoring = new MonitoringSystem({
  enablePerformance: true,
  enableErrors: true,
  enableInteractions: true,
  enableWebVitals: true,
  sampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0
})