// Performance enhancement utility functions

export interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
}

export interface PerformanceOptimization {
  type: 'image' | 'script' | 'css' | 'font' | 'lazy-loading'
  description: string
  impact: 'high' | 'medium' | 'low'
  implementation: string
}

export function measurePerformance(): Promise<PerformanceMetrics> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve({
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0
      })
      return
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const metrics: PerformanceMetrics = {
        loadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0
      }

      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          metrics.largestContentfulPaint = entry.startTime
        } else if (entry.entryType === 'layout-shift') {
          metrics.cumulativeLayoutShift += (entry as any).value
        }
      })

      resolve(metrics)
    })

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] })

    // Fallback timeout
    setTimeout(() => {
      observer.disconnect()
      resolve({
        loadTime: performance.now(),
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0
      })
    }, 5000)
  })
}

export function optimizeImages(): PerformanceOptimization[] {
  return [
    {
      type: 'image',
      description: 'Convert images to WebP format',
      impact: 'high',
      implementation: 'Use next/image component with WebP format'
    },
    {
      type: 'image',
      description: 'Implement lazy loading for images',
      impact: 'high',
      implementation: 'Add loading="lazy" attribute to img tags'
    },
    {
      type: 'image',
      description: 'Optimize image sizes',
      impact: 'medium',
      implementation: 'Use responsive images with srcset'
    }
  ]
}

export function optimizeScripts(): PerformanceOptimization[] {
  return [
    {
      type: 'script',
      description: 'Code splitting and lazy loading',
      impact: 'high',
      implementation: 'Use dynamic imports for route-based code splitting'
    },
    {
      type: 'script',
      description: 'Minify and compress JavaScript',
      impact: 'medium',
      implementation: 'Enable minification in build process'
    },
    {
      type: 'script',
      description: 'Remove unused code',
      impact: 'high',
      implementation: 'Use tree shaking and dead code elimination'
    }
  ]
}

export function generatePerformanceReport(metrics: PerformanceMetrics): string {
  let report = 'Performance Report\n'
  report += '==================\n\n'
  report += `Load Time: ${metrics.loadTime.toFixed(2)}ms\n`
  report += `First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms\n`
  report += `Largest Contentful Paint: ${metrics.largestContentfulPaint.toFixed(2)}ms\n`
  report += `Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.toFixed(4)}\n`
  report += `First Input Delay: ${metrics.firstInputDelay.toFixed(2)}ms\n\n`

  // Performance recommendations
  if (metrics.firstContentfulPaint > 1800) {
    report += '⚠️  First Contentful Paint is slow (>1.8s)\n'
  }
  if (metrics.largestContentfulPaint > 2500) {
    report += '⚠️  Largest Contentful Paint is slow (>2.5s)\n'
  }
  if (metrics.cumulativeLayoutShift > 0.1) {
    report += '⚠️  Cumulative Layout Shift is high (>0.1)\n'
  }

  return report
}