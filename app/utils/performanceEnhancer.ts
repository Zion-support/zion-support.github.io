// Performance enhancer utility
export interface PerformanceEnhancerConfig {
  enabled: boolean
  lazyLoadImages: boolean
  preloadCriticalResources: boolean
  debounceScroll: boolean
  debounceResize: boolean
  debounceDelay: number
}

export class PerformanceEnhancer {
  private config: PerformanceEnhancerConfig
  private observers: Map<string, IntersectionObserver> = new Map()

  constructor(config: PerformanceEnhancerConfig) {
    this.config = {
      debounceDelay: 100,
      ...config
    }
  }

  initialize(): void {
    if (!this.config.enabled) return

    if (this.config.lazyLoadImages) {
      this.setupLazyLoading()
    }

    if (this.config.preloadCriticalResources) {
      this.preloadCriticalResources()
    }

    if (this.config.debounceScroll) {
      this.setupScrollDebouncing()
    }

    if (this.config.debounceResize) {
      this.setupResizeDebouncing()
    }
  }

  private setupLazyLoading(): void {
    if (typeof window === 'undefined') return

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        }
      })
    })

    this.observers.set('images', imageObserver)

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img)
    })
  }

  private preloadCriticalResources(): void {
    if (typeof document === 'undefined') return

    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css'
    ]

    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.css') ? 'style' : 'font'
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous'
      }
      document.head.appendChild(link)
    })
  }

  private setupScrollDebouncing(): void {
    if (typeof window === 'undefined') return

    let scrollTimeout: NodeJS.Timeout

    const debouncedScrollHandler = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        // Handle scroll events here
        this.handleScroll()
      }, this.config.debounceDelay)
    }

    window.addEventListener('scroll', debouncedScrollHandler, { passive: true })
  }

  private setupResizeDebouncing(): void {
    if (typeof window === 'undefined') return

    let resizeTimeout: NodeJS.Timeout

    const debouncedResizeHandler = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        // Handle resize events here
        this.handleResize()
      }, this.config.debounceDelay)
    }

    window.addEventListener('resize', debouncedResizeHandler, { passive: true })
  }

  private handleScroll(): void {
    // Implement scroll handling logic
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    // Example: Update scroll progress
    const scrollProgress = scrollY / (documentHeight - windowHeight)
    document.documentElement.style.setProperty('--scroll-progress', scrollProgress.toString())
  }

  private handleResize(): void {
    // Implement resize handling logic
    const width = window.innerWidth
    const height = window.innerHeight

    // Example: Update viewport size CSS variables
    document.documentElement.style.setProperty('--viewport-width', `${width}px`)
    document.documentElement.style.setProperty('--viewport-height', `${height}px`)
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers.clear()
  }
}

export default PerformanceEnhancer