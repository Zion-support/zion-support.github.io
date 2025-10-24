'use client'
/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */

const performanceConfig = $2;
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
          this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime || 0
          this.reportMetric('lcp', this.metrics.lcp)
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = $2;
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimi,
  t: number } }).memory
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
      const navigation = $2;
export default monitoring