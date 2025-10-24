export interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  timeToInteractive: number
  firstMeaningfulPaint: number
}

// Measure Core Web Vitals
export const measureCoreWebVitals = (): Promise<PerformanceMetrics> => {
  return new Promise((resolve) => {
    const metrics: PerformanceMetrics = {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
      timeToInteractive: 0,
      firstMeaningfulPaint: 0
    }

    // Measure load time
    if (performance.timing) {
      metrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
    }

    // Measure First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime
          }
        }
      })
      observer.observe({ entryTypes: ['paint'] })
    }

    // Measure Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            metrics.largestContentfulPaint = entry.startTime
          }
        }
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    }

    // Measure Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            metrics.cumulativeLayoutShift += (entry as any).value
          }
        }
      })
      observer.observe({ entryTypes: ['layout-shift'] })
    }

    // Measure First Input Delay
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            metrics.firstInputDelay = (entry as any).processingStart - entry.startTime
          }
        }
      })
      observer.observe({ entryTypes: ['first-input'] })
    }

    // Measure Time to Interactive
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            metrics.timeToInteractive = (entry as any).domInteractive
          }
        }
      })
      observer.observe({ entryTypes: ['navigation'] })
    }

    // Measure First Meaningful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-meaningful-paint') {
            metrics.firstMeaningfulPaint = entry.startTime
          }
        }
      })
      observer.observe({ entryTypes: ['paint'] })
    }

    // Resolve after a delay to allow metrics to be collected
    setTimeout(() => {
      resolve(metrics)
    }, 1000)
  })
}

// Google Analytics integration for performance tracking
export const trackPerformanceToGA = (metrics: PerformanceMetrics) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', 'performance_metrics', {
      event_category: 'Performance',
      event_label: 'Core Web Vitals',
      custom_map: {
        load_time: metrics.loadTime,
        first_contentful_paint: metrics.firstContentfulPaint,
        largest_contentful_paint: metrics.largestContentfulPaint,
        first_input_delay: metrics.firstInputDelay,
        cumulative_layout_shift: metrics.cumulativeLayoutShift,
        time_to_interactive: metrics.timeToInteractive,
        total_blocking_time: metrics.totalBlockingTime
      }
    })
  }
}

declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void
  }
}