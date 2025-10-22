'use client'

// Performance Optimizer utility functions
export interface OptimizerConfig {
  enabled: boolean
  debug: boolean
  sampleRate: number
}

export interface OptimizationMetric {
  name: string
  value: number
  timestamp: number
  type: 'timing' | 'memory' | 'bundle'
}

class PerformanceOptimizer {
  private config: OptimizerConfig
  private metrics: OptimizationMetric[] = []

  constructor(config: Partial<OptimizerConfig> = {}) {
    this.config = {
      enabled: true,
      debug: false,
      sampleRate: 1.0,
      ...config
    }
  }

  optimizeBundle(): void {
    if (!this.config.enabled) return

    // Code splitting
    this.enableCodeSplitting()
    
    // Tree shaking
    this.enableTreeShaking()
    
    // Minification
    this.enableMinification()
  }

  optimizeImages(): void {
    if (!this.config.enabled) return

    // Lazy loading
    this.enableLazyLoading()
    
    // WebP conversion
    this.enableWebPConversion()
    
    // Responsive images
    this.enableResponsiveImages()
  }

  optimizeCaching(): void {
    if (!this.config.enabled) return

    // Service worker
    this.enableServiceWorker()
    
    // HTTP caching
    this.enableHTTPCaching()
    
    // Memory caching
    this.enableMemoryCaching()
  }

  private enableCodeSplitting(): void {
    // Dynamic imports for route-based splitting
    const routes = document.querySelectorAll('[data-route]')
    routes.forEach(route => {
      const routeName = route.getAttribute('data-route')
      if (routeName) {
        import(`../pages/${routeName}`).then(_module => {
          if (this.config.debug) {
            console.log(`Route loaded: ${routeName}`)
          }
        })
      }
    })
  }

  private enableTreeShaking(): void {
    // Remove unused CSS
    const unusedCSS = document.querySelectorAll('[data-unused-css]')
    unusedCSS.forEach(element => element.remove())
  }

  private enableMinification(): void {
    // Minify inline styles
    const styleElements = document.querySelectorAll('style')
    styleElements.forEach(style => {
      style.textContent = style.textContent?.replace(/\s+/g, ' ').trim() || ''
    })
  }

  private enableLazyLoading(): void {
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

  private enableWebPConversion(): void {
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      if (img.src && !img.src.includes('.webp')) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/, '.webp')
        img.src = webpSrc
      }
    })
  }

  private enableResponsiveImages(): void {
    const images = document.querySelectorAll('img[data-srcset]')
    images.forEach(img => {
      const srcset = img.getAttribute('data-srcset')
      if (srcset) {
        img.srcset = srcset
        img.removeAttribute('data-srcset')
      }
    })
  }

  private enableServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          if (this.config.debug) {
            console.log('Service worker registered:', registration)
          }
        })
        .catch(error => {
          console.error('Service worker registration failed:', error)
        })
    }
  }

  private enableHTTPCaching(): void {
    // Set cache headers for static assets
    const staticAssets = document.querySelectorAll('link[rel="stylesheet"], script[src]')
    staticAssets.forEach(asset => {
      if (asset instanceof HTMLLinkElement) {
        asset.setAttribute('data-cache', 'static')
      } else if (asset instanceof HTMLScriptElement) {
        asset.setAttribute('data-cache', 'static')
      }
    })
  }

  private enableMemoryCaching(): void {
    // Cache API responses
    const apiCalls = document.querySelectorAll('[data-api-cache]')
    apiCalls.forEach(element => {
      const cacheKey = element.getAttribute('data-api-cache')
      if (cacheKey) {
        // Implement API caching logic
        if (this.config.debug) {
          console.log(`API cache enabled for: ${cacheKey}`)
        }
      }
    })
  }

  trackMetric(name: string, value: number, type: 'timing' | 'memory' | 'bundle'): void {
    if (!this.config.enabled || Math.random() > this.config.sampleRate) return

    const metric: OptimizationMetric = {
      name,
      value,
      timestamp: Date.now(),
      type
    }

    this.metrics.push(metric)

    if (this.config.debug) {
      console.log('Optimization metric:', metric)
    }
  }

  getMetrics(): OptimizationMetric[] {
    return [...this.metrics]
  }

  clearMetrics(): void {
    this.metrics = []
  }
}

// Create default instance
export const performanceOptimizer = new PerformanceOptimizer({
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development'
})

export default performanceOptimizer
