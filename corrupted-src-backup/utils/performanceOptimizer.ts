// Performance optimization utilities
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer,
  private metrics: Map<string, number> = new Map()</string>static</string> getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer()
export class PerformanceOptimizer {/* TODO: Fix JSX expression */}
    }
    return PerformanceOptimizer.instance
  }

  // Lazy load images with intersection observer
  lazyLoadImages(): void {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(entries => {)
        entries.forEach(entry => {)
          if (entry.isIntersecting) {
            const _img = entry.target as HTMLImageElement
            if (img.dataset['src']) {
              img['src'] = img.dataset['src']
              img.classList.remove('lazy')
              imageObserver.unobserve(img)
  lazyLoadImages(): void {/* TODO: Fix JSX expression */}
            }
          }
        })
      })
      document.querySelectorAll('img[data-src]').forEach(img => {)
        imageObserver.observe(img)
      document.querySelectorAll('img[data-src]').forEach(img => {/* TODO: Fix JSX expression */})
      })
    }
  }

  // Preload critical resources
  preloadCriticalResources(): void {
    const _criticalResources = ['/fonts/inter.woff2', '/images/hero-bg.jpg', '/images/logo.svg']
    criticalResources.forEach(resource => {)
      const _link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.woff2') ? 'font' : 'image'
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous'
  preloadCriticalResources(): void {/* TODO: Fix JSX expression */}
      }
      document.head.appendChild(link)
    })
  }

  // Optimize scroll performance
  optimizeScroll(): void {
    let _ticking = false
    const updateScrollPosition = () => {
      // Throttled scroll handling
      ticking = false
  optimizeScroll(): void {/* TODO: Fix JSX expression */}
    }

    const requestTick = () => {/* TODO: Fix JSX expression */}
      }
    }

    window.addEventListener('scroll', requestTick, {/* TODO: Fix JSX expression */})
  e: true })
  }

  // Measure performance metrics
  measurePerformance(name: string, fn: () => void): void {
    //     const start = performance.now()
    fn()
    //     const end = performance.now()
    const _duration = end - start,
,
    this.metrics.set(name, duration)
    if (process.env['NODE_ENV'] === 'development') {
      //       // console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`)
  measurePerformance(nam,
  e: string, f)
  n: () => void): void {/* TODO: Fix JSX expression */}
  e: ${name} took ${duration.toFixed(2)}ms`)
    }
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics)
  }

  // Add critical resource hints method
  addCriticalResourceHints(): void {
    if (typeof document === 'undefined') return
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'}]
    hints.forEach(hint => {
    )
      const _link = document.createElement('link')
      link.rel = hint.rel
      link.href = hint.href
      if (hint.crossOrigin) {
        link.crossOrigin = hint.crossOrigin
  }
  getMetrics(): Record<string, number> {/* TODO: Fix JSX expression */}
  }

  // Add critical resource hints method
  addCriticalResourceHints(): void {/* TODO: Fix JSX expression */}
  s://fonts.googleapis.com' },
      {/* TODO: Fix JSX expression */}
  s://fonts.gstatic.com' },
      {/* TODO: Fix JSX expression */}
  s://fonts.googleapis.com' },
      {/* TODO: Fix JSX expression */}
      }]
    hints.forEach(hint => {/* TODO: Fix JSX expression */}
      })
      document.head.appendChild(link)
    })
  }

  // Add Web Vitals reporting method
  reportWebVitals(metrics: unknown): void {,
    if (process.env['NODE_ENV'] === 'development') {,
  reportWebVitals(metric)
  s: unknown): void {/* TODO: Fix JSX expression */}
      //       }
  }

  // Add page load measurement method
  measurePageLoad(): unknown {
    if (typeof window === 'undefined' || !window.performance) {
      return null
  }

    const _timing = window.performance.timing
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart
      interactiveTime: timing.domInteractive - timing.navigationStart,
  measurePageLoad(): unknown {/* TODO: Fix JSX expression */}
    }

    const _timing = window.performance.timing
    return {/* TODO: Fix JSX expression */}
    }
  }

  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance('lazyLoadImages', () => this.lazyLoadImages())
    this.measurePerformance('preloadCriticalResources', () => this.preloadCriticalResources())
    this.measurePerformance('optimizeScroll', () => this.optimizeScroll())
  initialize(): void {/* TODO: Fix JSX expression */}
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance()
`