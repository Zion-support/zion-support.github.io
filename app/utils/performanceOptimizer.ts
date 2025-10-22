/**
 * Performance Optimizer
 * Comprehensive performance optimization system
 */

interface OptimizationConfig {
  enableLazyLoading: boolean
  enablePreloading: boolean
  enablePrefetching: boolean
  enableCompression: boolean
  enableMinification: boolean
  enableCaching: boolean
  enableServiceWorker: boolean
  enableWebWorkers: boolean
  enableCodeSplitting: boolean
  enableTreeShaking: boolean
}

interface PerformanceMetrics {
  fcp: number
  lcp: number
  fid: number
  cls: number
  ttfb: number
  inp: number
}

export class PerformanceOptimizer {
  private config: OptimizationConfig
  private metrics: PerformanceMetrics = {} as PerformanceMetrics
  private observers: PerformanceObserver[] = []

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enablePreloading: true,
      enablePrefetching: true,
      enableCompression: true,
      enableMinification: true,
      enableCaching: true,
      enableServiceWorker: false,
      enableWebWorkers: false,
      enableCodeSplitting: true,
      enableTreeShaking: true,
      ...config
    }

    this.initialize()
  }

  private initialize(): void {
    if (typeof window === 'undefined') return

    this.observePerformance()
    this.optimizeImages()
    this.optimizeScripts()
    this.optimizeCSS()
    this.optimizeFonts()
    this.optimizeResources()
  }

  private observePerformance(): void {
    if (!('PerformanceObserver' in window)) return

    // Observe FCP
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime
          }
        }
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
      this.observers.push(fcpObserver)
    } catch (error) {
      console.warn('Failed to observe FCP:', error)
    }

    // Observe LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.lcp = entry.startTime
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(lcpObserver)
    } catch (error) {
      console.warn('Failed to observe LCP:', error)
    }

    // Observe CLS
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        this.metrics.cls = clsValue
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(clsObserver)
    } catch (error) {
      console.warn('Failed to observe CLS:', error)
    }
  }

  private optimizeImages(): void {
    if (!this.config.enableLazyLoading) return

    const images = document.querySelectorAll('img[data-src]')
    images.forEach((img) => {
      this.lazyLoadImage(img as HTMLImageElement)
    })
  }

  private lazyLoadImage(img: HTMLImageElement): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const image = entry.target as HTMLImageElement
              const src = image.dataset.src
              if (src) {
                image.src = src
                image.classList.remove('lazy')
                observer.unobserve(image)
              }
            }
          })
        },
        { threshold: 0.1 }
      )
      
      observer.observe(img)
    } else {
      const src = img.dataset.src
      if (src) {
        img.src = src
        img.classList.remove('lazy')
      }
    }
  }

  private optimizeScripts(): void {
    if (!this.config.enableCodeSplitting) return

    const scripts = document.querySelectorAll('script[data-src]')
    scripts.forEach((script) => {
      this.lazyLoadScript(script as HTMLScriptElement)
    })
  }

  private lazyLoadScript(script: HTMLScriptElement): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const scriptElement = entry.target as HTMLScriptElement
              const src = scriptElement.dataset.src
              if (src) {
                scriptElement.src = src
                observer.unobserve(scriptElement)
              }
            }
          })
        },
        { threshold: 0.1 }
      )
      
      observer.observe(script)
    } else {
      const src = script.dataset.src
      if (src) {
        script.src = src
      }
    }
  }

  private optimizeCSS(): void {
    if (!this.config.enableMinification) return

    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    stylesheets.forEach((link) => {
      this.optimizeStylesheet(link as HTMLLinkElement)
    })
  }

  private optimizeStylesheet(link: HTMLLinkElement): void {
    // Add media query for non-critical CSS
    if (link.href.includes('non-critical')) {
      link.media = 'print'
      link.onload = () => {
        link.media = 'all'
      }
    }
  }

  private optimizeFonts(): void {
    if (!this.config.enablePreloading) return

    const fonts = document.querySelectorAll('link[rel="stylesheet"][href*="font"]')
    fonts.forEach((font) => {
      this.preloadFont(font as HTMLLinkElement)
    })
  }

  private preloadFont(link: HTMLLinkElement): void {
    const preloadLink = document.createElement('link')
    preloadLink.rel = 'preload'
    preloadLink.href = link.href
    preloadLink.as = 'style'
    document.head.appendChild(preloadLink)
  }

  private optimizeResources(): void {
    if (!this.config.enablePrefetching) return

    const links = document.querySelectorAll('a[href]')
    links.forEach((link) => {
      this.prefetchLink(link as HTMLAnchorElement)
    })
  }

  private prefetchLink(link: HTMLAnchorElement): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const linkElement = entry.target as HTMLAnchorElement
              this.prefetchResource(linkElement.href)
              observer.unobserve(linkElement)
            }
          })
        },
        { threshold: 0.1 }
      )
      
      observer.observe(link)
    }
  }

  private prefetchResource(href: string): void {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = href
    document.head.appendChild(link)
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  getConfig(): OptimizationConfig {
    return { ...this.config }
  }

  setConfig(config: Partial<OptimizationConfig>): void {
    this.config = { ...this.config, ...config }
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Default performance optimizer
export const performanceOptimizer = new PerformanceOptimizer()

// Utility functions
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export const memoize = <T extends (...args: any[]) => any>(
  func: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T => {
  const cache = new Map<string, ReturnType<T>>()
  
  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args)
    
    if (cache.has(key)) {
      return cache.get(key)
    }
    
    const result = func(...args)
    cache.set(key, result)
    return result
  }) as T
}