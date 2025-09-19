interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToInteractive: number
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  }

  private isSupported = 'PerformanceObserver' in window

  constructor() {
    if (this.isSupported) {
      this.initializeMonitoring()
    }
  }

  private initializeMonitoring() {
    // Monitor Core Web Vitals
    this.observeFirstContentfulPaint()
    this.observeLargestContentfulPaint()
    this.observeFirstInputDelay()
    this.observeCumulativeLayoutShift()
    this.observeTimeToInteractive()
  }

  private observeFirstContentfulPaint() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fcp = entries.find(entry => entry.name === 'first-contentful-paint')
      if (fcp) {
        this.metrics.firstContentfulPaint = fcp.startTime
      }
    })
    observer.observe({ entryTypes: ['paint'] })
  }

  private observeLargestContentfulPaint() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lcp = entries[entries.length - 1]
      if (lcp) {
        this.metrics.largestContentfulPaint = lcp.startTime
      }
    })
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  }

  private observeFirstInputDelay() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        this.metrics.firstInputDelay = entry.processingStart - entry.startTime
      })
    })
    observer.observe({ entryTypes: ['first-input'] })
  }

  private observeCumulativeLayoutShift() {
    let clsValue = 0
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      })
      this.metrics.cumulativeLayoutShift = clsValue
    })
    observer.observe({ entryTypes: ['layout-shift'] })
  }

  private observeTimeToInteractive() {
    // Simple TTI calculation based on when all resources are loaded
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      this.metrics.timeToInteractive = navigation.loadEventEnd - navigation.fetchStart
    })
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  public logMetrics() {
    console.group('🚀 Performance Metrics')
    console.log('Load Time:', `${this.metrics.loadTime.toFixed(2)}ms`)
    console.log('First Contentful Paint:', `${this.metrics.firstContentfulPaint.toFixed(2)}ms`)
    console.log('Largest Contentful Paint:', `${this.metrics.largestContentfulPaint.toFixed(2)}ms`)
    console.log('First Input Delay:', `${this.metrics.firstInputDelay.toFixed(2)}ms`)
    console.log('Cumulative Layout Shift:', this.metrics.cumulativeLayoutShift.toFixed(4))
    console.log('Time to Interactive:', `${this.metrics.timeToInteractive.toFixed(2)}ms`)
    console.groupEnd()
  }

  public sendToAnalytics() {
    // Send metrics to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        custom_map: {
          load_time: this.metrics.loadTime,
          fcp: this.metrics.firstContentfulPaint,
          lcp: this.metrics.largestContentfulPaint,
          fid: this.metrics.firstInputDelay,
          cls: this.metrics.cumulativeLayoutShift,
          tti: this.metrics.timeToInteractive
        }
      })
    }
  }

  public checkPerformanceBudget() {
    const budget = {
      fcp: 1800, // 1.8s
      lcp: 2500, // 2.5s
      fid: 100,  // 100ms
      cls: 0.1,  // 0.1
      tti: 3800  // 3.8s
    }

    const issues = []
    
    if (this.metrics.firstContentfulPaint > budget.fcp) {
      issues.push(`FCP exceeded budget: ${this.metrics.firstContentfulPaint.toFixed(2)}ms > ${budget.fcp}ms`)
    }
    
    if (this.metrics.largestContentfulPaint > budget.lcp) {
      issues.push(`LCP exceeded budget: ${this.metrics.largestContentfulPaint.toFixed(2)}ms > ${budget.lcp}ms`)
    }
    
    if (this.metrics.firstInputDelay > budget.fid) {
      issues.push(`FID exceeded budget: ${this.metrics.firstInputDelay.toFixed(2)}ms > ${budget.fid}ms`)
    }
    
    if (this.metrics.cumulativeLayoutShift > budget.cls) {
      issues.push(`CLS exceeded budget: ${this.metrics.cumulativeLayoutShift.toFixed(4)} > ${budget.cls}`)
    }
    
    if (this.metrics.timeToInteractive > budget.tti) {
      issues.push(`TTI exceeded budget: ${this.metrics.timeToInteractive.toFixed(2)}ms > ${budget.tti}ms`)
    }

    if (issues.length > 0) {
      console.warn('⚠️ Performance Budget Exceeded:', issues)
    } else {
      console.log('✅ Performance within budget')
    }

    return issues
  }
}

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor()

// Auto-log metrics after page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.logMetrics()
      performanceMonitor.checkPerformanceBudget()
      performanceMonitor.sendToAnalytics()
    }, 2000)
  })
}

export default PerformanceMonitor