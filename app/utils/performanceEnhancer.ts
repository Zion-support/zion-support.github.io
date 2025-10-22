/**
 * Performance Enhancement Utilities
 * Provides various performance optimization functions
 */

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(
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

// Memoization function
export const memoize = <T extends (...args: unknown[]) => unknown>(
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

// Lazy loading utility
export const lazyLoad = (element: HTMLElement, callback: () => void): void => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    observer.observe(element)
  } else {
    // Fallback for browsers without IntersectionObserver
    callback()
  }
}

// Image lazy loading
export const lazyLoadImage = (img: HTMLImageElement, src: string): void => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement
            image.src = src
            image.classList.remove('lazy')
            observer.unobserve(image)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    observer.observe(img)
  } else {
    img.src = src
  }
}

// Preload critical resources
export const preloadResource = (href: string, as: string): void => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  document.head.appendChild(link)
}

// Prefetch resources
export const prefetchResource = (href: string): void => {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = href
  document.head.appendChild(link)
}

// Critical CSS inlining
export const inlineCriticalCSS = (css: string): void => {
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
}

// Resource hints
export const addResourceHints = (hints: Array<{ rel: string; href: string; as?: string }>): void => {
  hints.forEach(({ rel, href, as }) => {
    const link = document.createElement('link')
    link.rel = rel
    link.href = href
    if (as) link.as = as
    document.head.appendChild(link)
  })
}

// Performance timing utilities
export const measurePerformance = (name: string, fn: () => void): void => {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(`${name}-start`)
    fn()
    performance.mark(`${name}-end`)
    performance.measure(name, `${name}-start`, `${name}-end`)
  } else {
    fn()
  }
}

// Async performance measurement
export const measureAsyncPerformance = async (name: string, fn: () => Promise<void>): Promise<void> => {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(`${name}-start`)
    await fn()
    performance.mark(`${name}-end`)
    performance.measure(name, `${name}-start`, `${name}-end`)
  } else {
    await fn()
  }
}

// Bundle size optimization
export const loadScript = (src: string, async: boolean = true): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = async
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    document.head.appendChild(script)
  })
}

// CSS loading
export const loadCSS = (href: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.onload = () => resolve()
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`))
    document.head.appendChild(link)
  })
}

// Service Worker registration
export const registerServiceWorker = async (swPath: string): Promise<ServiceWorkerRegistration | null> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.register(swPath)
      console.log('Service Worker registered successfully')
      return registration
    } catch (error) {
      console.error('Service Worker registration failed:', error)
      return null
    }
  }
  return null
}

// Web Workers
export const createWorker = (workerFunction: Function): Worker => {
  const blob = new Blob([`(${workerFunction.toString()})()`], { type: 'application/javascript' })
  const url = URL.createObjectURL(blob)
  return new Worker(url)
}

// Performance budget monitoring
export const checkPerformanceBudget = (budget: {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
}): { passed: boolean; violations: string[] } => {
  const violations: string[] = []
  
  if (typeof performance !== 'undefined') {
    const entries = performance.getEntriesByType('paint')
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    // Check FCP
    if (budget.fcp) {
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
      if (fcpEntry && fcpEntry.startTime > budget.fcp) {
        violations.push(`FCP exceeded budget: ${fcpEntry.startTime}ms > ${budget.fcp}ms`)
      }
    }
    
    // Check TTFB
    if (budget.ttfb && navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart
      if (ttfb > budget.ttfb) {
        violations.push(`TTFB exceeded budget: ${ttfb}ms > ${budget.ttfb}ms`)
      }
    }
  }
  
  return {
    passed: violations.length === 0,
    violations
  }
}

// Performance optimization presets
export const performancePresets = {
  critical: {
    preload: true,
    prefetch: false,
    lazyLoad: true,
    minify: true,
    compress: true
  },
  balanced: {
    preload: true,
    prefetch: true,
    lazyLoad: true,
    minify: true,
    compress: true
  },
  aggressive: {
    preload: true,
    prefetch: true,
    lazyLoad: true,
    minify: true,
    compress: true,
    serviceWorker: true,
    webWorkers: true
  }
}