'use client'

// Performance Optimizations utility functions
export interface OptimizationConfig {
  enabled: boolean
  debug: boolean
}

export interface OptimizationResult {
  name: string
  before: number
  after: number
  improvement: number
  timestamp: number
}

class PerformanceOptimizations {
  private config: OptimizationConfig
  private results: OptimizationResult[] = []

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enabled: true,
      debug: false,
      ...config
    }
  }

  optimizeImageLoading(): void {
    if (!this.config.enabled) return

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          img.removeAttribute('data-src')
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))
  }

  optimizeResourceLoading(): void {
    if (!this.config.enabled) return

    // Preload critical resources
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css'
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.css') ? 'style' : 'font'
      document.head.appendChild(link)
    })
  }

  optimizeBundleSize(): void {
    if (!this.config.enabled) return

    // Dynamic imports for non-critical components
    const lazyComponents = document.querySelectorAll('[data-lazy-component]')
    lazyComponents.forEach(element => {
      const componentName = element.getAttribute('data-lazy-component')
      if (componentName) {
        import(`../components/${componentName}`).then(_module => {
          // Component loaded
          if (this.config.debug) {
            console.log(`Lazy component loaded: ${componentName}`)
          }
        })
      }
    })
  }

  trackOptimization(name: string, before: number, after: number): void {
    const improvement = ((before - after) / before) * 100
    const result: OptimizationResult = {
      name,
      before,
      after,
      improvement,
      timestamp: Date.now()
    }

    this.results.push(result)

    if (this.config.debug) {
      console.log('Optimization tracked:', result)
    }
  }

  getResults(): OptimizationResult[] {
    return [...this.results]
  }

  clearResults(): void {
    this.results = []
  }
}

// Create default instance
export const performanceOptimizations = new PerformanceOptimizations({
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development'
})

export default performanceOptimizations
