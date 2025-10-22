interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number
  processingEnd: number
  cancelable: boolean
}
interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  memory?: number
  bundleSize: number
  cacheHitRate: number
  firstContentfulPaint?: number
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  fmp?: number
  ttfb?: number
}
interface OptimizationConfig {
  enableLazyLoading: boolean
  enableCodeSplitting: boolean
  enableImageOptimization: boolean
  enableCaching: boolean
  enableCompression: boolean
}
type PerformanceConfig = OptimizationConfig
class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    cacheHitRate: 0,
  }
  private config: OptimizationConfig = {
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableImageOptimization: true,
    enableCaching: true,
    enableCompression: true,
  }
  private observers: PerformanceObserver[] = []
  constructor(config?: Partial<OptimizationConfig>) {
    this.config = { ...this.config, ...config }
    this.initializePerformanceMonitoring()
  }
  /**
   * Initialize performance monitoring
   */
  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined') return
    // Monitor page load performance
    window.addEventListener('load', () => {
      this.measureLoadTime()
      this.measureMemoryUsage()
    })
    // Monitor render performance
// Performance optimization utilities
export const debounce = <T extends (...args: any[]) => any>(,
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {,
    let timeout: NodeJS.Timeout,
  return (...args: Parameters<T>) => {,
  func: T,
  wait: number,}): ((...args: Parameters<T>) => void) => {,}let timeout: NodeJS.Timeout,
  return (...args: Parameters<T>) => {,}clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
export const throttle = <T extends (...args: any[]) => any>(,
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {,
    let inThrottle: boolean,
  return (...args: Parameters<T>) => {,
    if (!inThrottle) {,
  func: T,
  limit: number,}): ((...args: Parameters<T>) => void) => {,}let inThrottle: boolean,
  return (...args: Parameters<T>) => {,}if (!inThrottle) {}func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
export const lazyLoad = (callback: () => void, options?: IntersectionObserverInit) => {}if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {}callback()
    return
  }
const observer = new IntersectionObserver((entries) => {}entries.forEach((entry) => {}if (entry.isIntersecting) {}callback()
        observer.disconnect()
      }
}, options)
return observer
}
export const preloadImage = (src: string): Promise<void> => {,
  return new Promise((resolve, reject) => {}export const preloadImage = (src: string): Promise<void> => {,}return new Promise((resolve, reject) => {}const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
}
export const preloadScript = (src: string): Promise<void> => {,
  return new Promise((resolve, reject) => {}export const preloadScript = (src: string): Promise<void> => {,}return new Promise((resolve, reject) => {}const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = reject
    document.head.appendChild(script)
}
export const measurePerformance = (name: string, fn: () => void) => {,
    ,
  if (typeof window === 'undefined' || !('performance' in window)) {,}export const measurePerformance = (name: string, fn: () => void) => {,}if (typeof window === 'undefined' || !('performance' in window)) {}fn()
    return
  }
const start = performance.now()
  fn()
  const end = performance.now()
if (process.env.NODE_ENV === 'development') {}}
}
export const getDeviceInfo = () => {}if (typeof window === 'undefined') {}return {isMobile: false, isTablet: false, isDesktop: true ,}}}
const width = window.innerWidth
  return {isMobile: width < 768,}
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,}}
  private observers: PerformanceObserver[] = [],
  private isMonitoring: boolean = false,
  constructor(config?: Partial<OptimizationConfig>) {,}return {}}isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,}
  private observers: PerformanceObserver[] = [],
  private isMonitoring: boolean = false,
  constructor(config?: Partial<OptimizationConfig>) {}'use client'
/**
 * Performance optimization utilities for the Zion Tech Group website
 * Provides tools for monitoring and optimizing application performance
 */
// Simple logger for performance optimizer
const logger = {/* TODO: Fix JSX expression */,},
  performanc,
  e: (messag,
  e: string, dat)
  a: Record<string, unknown>, context?: string) => {/* TODO: Fix JSX expression */,},
  erro,
  r: (messag,
  e: string, erro)
  r: Error) => {/* TODO: Fix JSX expression */,}}
}
interface PerformanceMetrics {/* TODO: Fix JSX expression */,}}}
interface OptimizationConfig {/* TODO: Fix JSX expression */,}}}
interface PerformanceConfig extends OptimizationConfig {}}class PerformanceOptimizer {/* TODO: Fix JSX expression */,}}}
  private,
  config: OptimizationConfig = {/* TODO: Fix JSX expression */,}}
  private,
  observers: PerformanceObserver[] = [],
  private,
  isMonitoring: boolean = false,
  constructor(config?: Partial<OptimizationConfig>) {/* TODO: Fix JSX expression */,}this.config = {...this.config, ...config}this.initializePerformanceMonitoring()
  }
  /**
   * Initialize performance monitoring
   */
  private initializePerformanceMonitoring(): void {}}if (typeof window === 'undefined') return
    // Monitor page load performance
    window.addEventListener('load', () => {// Monitor page load performance;}window.addEventListener('load', () => {}this.measureLoadTime()
      this.measureMemoryUsage()
private initializePerformanceMonitoring(): void {/* TODO: Fix JSX expression */,}}})
    // Monitor render performance
    this.measureRenderTime()
    // Start observing Core Web Vitals
    this.observeLCP()
    this.observeFID()
    this.observeCLS()
    this.observeFCP()
    this.observeTTFB()
    this.observeMemory()
  }
  /**
   * Measure page load time
   */
  private measureLoadTime(): void {
    if (typeof window === 'undefined' || !window.performance) return
    if (typeof window.performance.getEntriesByType !== 'function') return
    try {
      const navigation = window.performance.getEntriesByType?.('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart
      }
    } catch (error) {
      console.warn('Performance API not fully supported:', error)
    }
  }
  /**
   * Measure render time
   */
  private measureRenderTime(): void {
    if (typeof window === 'undefined') return
    // Check if PerformanceObserver exists (may not be available in test environments)
    if (typeof PerformanceObserver === 'undefined') return
    try {
      const observer = new PerformanceObserver((list) => {
    try {}}const navigation = window.performance.getEntriesByType?.('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {}this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart
  private measureLoadTime(): void {/* TODO: Fix JSX expression */,}}}
    } catch (error) {}}
  }
  /**
   * Measure render time using PerformanceObserver
   */
  private measureRenderTime(): void {}}// Check if PerformanceObserver exists (may not be available in test environments)
    if (typeof PerformanceObserver === 'undefined') return
    try {}}const observer = new PerformanceObserver((list) => {}const entries = list.getEntries()
        entries.forEach((entry) => {}if (entry.entryType === 'measure') {}this.metrics.renderTime = entry.duration
          }
observer.observe({entryTypes: ['measure'] ,)})
      this.observers.push(observer)
    } catch (error) {// PerformanceObserver may not support 'measure' entryType in some environments;}} catch (error) {}// PerformanceObserver may not support 'measure' entryType in some environments
      }
  }
  private observeLCP() {}try {}}const observer = new PerformanceObserver((list) => {}const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        this.metrics.lcp = lastEntry.startTime
  private measureRenderTime(): void {/* TODO: Fix JSX expression */,}}}
        })
      })
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['measure'] ,})
      this.observers.push(observer)
    } catch (error) {/* TODO: Fix JSX expression */,}}
  }
  private observeLCP() {/* TODO: Fix JSX expression */,}})
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['largest-contentful-paint'] ,})
      this.observers.push(observer)
    } catch {// Ignore if not supported;}}} catch {}}// Ignore if not supported
    }
  }
  private observeFID() {}try {}}const observer = new PerformanceObserver((list) => {}const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {,
    ,}entries.forEach((entry: PerformanceEntry) => {,}const fidEntry = entry as PerformanceEntry & {processingStart: number ,}} catch {/* TODO: Fix JSX expression */,}}}
  }
  private observeFID() {/* TODO: Fix JSX expression */,}t: number ,}
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime
        })
      })
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['first-input'] ,})
      this.observers.push(observer)
    } catch {// Ignore if not supported;}}}
  }
  private observeCLS() {try {let clsValue = 0;}
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'measure') {
            this.metrics.renderTime = entry.duration
          }
        })
      })
      observer.observe({ entryTypes: ['measure'] })
      this.observers.push(observer)
    } catch {
      // PerformanceObserver may not support 'measure' entryType in some environments
    }
  }
  /**
   * Measure memory usage
   */
  private measureMemoryUsage(): void {
    if (typeof window === 'undefined' || !('memory' in window.performance)) return
    const memory = (window.performance as Performance & {
      memory?: {
        usedJSHeapSize: number
        totalJSHeapSize: number
        jsHeapSizeLimit: number
      }
    }).memory
    if (memory) {
      this.metrics.memoryUsage = memory.usedJSHeapSize
    }
  }
  /**
   * Observe Largest Contentful Paint (LCP)
   */
  private observeLCP(): void {
    if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') return
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        this.metrics.lcp = lastEntry.startTime
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(observer)
    } catch {
      // LCP not supported in this environment
    }
  }
  /**
   * Observe First Input Delay (FID)
   */
  private observeFID(): void {
    if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') return
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming
          if (fidEntry.processingStart) {
            this.metrics.fid = fidEntry.processingStart - fidEntry.startTime
          }
        })
      })
      observer.observe({ entryTypes: ['first-input'] })
      this.observers.push(observer)
    } catch {
      // FID not supported in this environment
    }
  }
  /**
   * Observe Cumulative Layout Shift (CLS)
   */
  private observeCLS(): void {
    if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') return
    try {
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        })
        this.metrics.cls = clsValue
      })
      observer.observe({ entryTypes: ['layout-shift'] })
        this.metrics.cls = clsValue
      })
      observer.observe({entryTypes: ['layout-shift'] ,)})
      this.observers.push(observer)
    } catch {
      // CLS not supported in this environment
    }
  }
  /**
   * Observe First Contentful Paint (FCP)
   */
  private observeFCP(): void {
    if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') return
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          this.metrics.fcp = entry.startTime
        })
      })
      observer.observe({ entryTypes: ['paint'] })
      this.observers.push(observer)
    } catch {
      // FCP not supported in this environment
    }
  }
  /**
   * Observe Time to First Byte (TTFB)
   */
  private observeTTFB(): void {
    if (typeof window === 'undefined' || !window.performance) return
    try {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        this.metrics.ttfb = navigation.responseStart - navigation.requestStart
  private observeFCP() {}try {}}const observer = new PerformanceObserver((list) => {}const entries = list.getEntries()
        entries.forEach((entry) => {if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;}entries.forEach((entry) => {}if (entry.name === 'first-contentful-paint') {}this.metrics.fcp = entry.startTime
    } catch {/* TODO: Fix JSX expression */,}}}
  }
  private observeCLS() {/* TODO: Fix JSX expression */,}e: number ,}
          if (!clsEntry.hadRecentInput) {/* TODO: Fix JSX expression */,}}
        })
        this.metrics.cls = clsValue
      })
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['layout-shift'] ,})
      this.observers.push(observer)
    } catch {/* TODO: Fix JSX expression */,}}}
  }
  private observeFCP() {/* TODO: Fix JSX expression */,}}
        })
      })
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['paint'] ,})
      this.observers.push(observer)
    } catch {// Ignore if not supported;}}} catch {}}// Ignore if not supported
    }
  }
  private observeTTFB() {}try {}}const observer = new PerformanceObserver((list) => {}const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {,
    ,}const navEntry = entry as PerformanceEntry & {responseStart: number, requestStart: number ,}if (navEntry.responseStart > 0) {this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart;}entries.forEach((entry: PerformanceEntry) => {,}const navEntry = entry as PerformanceEntry & {responseStart: number, requestStart: number ,}if (navEntry.responseStart > 0) {}this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart
    } catch {/* TODO: Fix JSX expression */,}}}
  }
  private observeTTFB() {/* TODO: Fix JSX expression */,}t: number ,}
          if (navEntry.responseStart > 0) {/* TODO: Fix JSX expression */,}}
        })
      })
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['navigation'] ,})
      this.observers.push(observer)
    } catch {// Ignore if not supported;}}}
  }
  private observeMemory() {if (typeof window !== 'undefined' && 'memory' in performance) {}const memory = (performance as Performance & {memory?: {// usedJSHeapSize: number, jsHeapSizeLimit: number,}}).memory
      if (memory) {this.metrics.memoryUsage = memory.usedJSHeapSize;}} catch {}}// Ignore if not supported
    }
  }
  private observeMemory() {}if (typeof window !== 'undefined' && 'memory' in performance) {}const memory = (performance as Performance & {memory?: {// usedJSHeapSize: number, jsHeapSizeLimit: number,}}).memory
      if (memory) {}this.metrics.memoryUsage = memory.usedJSHeapSize
    } catch {/* TODO: Fix JSX expression */,}}}
  }
  private observeMemory() {/* TODO: Fix JSX expression */,}t: number,} }).memory
      if (memory) {/* TODO: Fix JSX expression */,}}
    }
  }
  /**
   * Measure memory usage
   */
  private measureMemoryUsage(): void {}}if (typeof window === 'undefined' || !('memory' in window.performance)) return
    const memory = (window.performance as Performance & {}memory?: {}usedJSHeapSize: number,
        totalJSHeapSize: number,
        jsHeapSizeLimit: number,
      }
    } catch {
      // TTFB calculation failed
    }
  }
  /**
   * Observe memory usage
   */
  private observeMemory(): void {
    if (typeof window === 'undefined' || !('memory' in window.performance)) return
    try {
      const memory = (window.performance as Performance & {
        memory?: {
          usedJSHeapSize: number
          totalJSHeapSize: number
          jsHeapSizeLimit: number
        }
      }).memory
      if (memory) {
        this.metrics.memory = memory.usedJSHeapSize
      }
    } catch {
      // Memory observation failed
    }
  }
  /**
   * Optimize images for better performance
   */
  optimizeImages(): void {
    if (typeof window === 'undefined') return
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy')
    images.forEach((img) => {// Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy')}}
      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {img.setAttribute('alt', 'Zion Tech Group content')}}
      // Optimize image format
      if (img.src.includes('.webp') || img.src.includes('.webp')) {// Convert to WebP if supported
        if (this.supportsWebP()) {}images.forEach((img) => {}// Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {}img.setAttribute('loading', 'lazy')
      }
      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group content')
      }
      // Optimize image format
      if (img.src.includes('.jpg') || img.src.includes('.jpeg')) {
        // Convert to WebP if supported
        if (this.supportsWebP()) {
          img.src = img.src.replace(/\.(jpg|jpeg)$/i, '.webp')
        }
      }
    })
  }
  /**
   * Check if browser supports WebP
   */
  private supportsWebP(): boolean {
    if (typeof window === 'undefined') return false
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }
  /**
   * Enable code splitting for better performance
   */
  enableCodeSplitting(): void {
    if (!this.config.enableCodeSplitting) return
    // This would typically be handled by the bundler (Vite/Webpack)
    // Here we can add runtime optimizations
    if (process.env.NODE_ENV === 'development') { console.log('Code splitting enabled for better performance'); }
  }
  /**
   * Enable caching strategies
   */
  enableCaching(): void {
    if (!this.config.enableCaching) return
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return
    // Register service worker for caching
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (process.env.NODE_ENV === 'development') { console.log('Service Worker registered:', registration); }
      })
      .catch((error) => {
        if (process.env.NODE_ENV === 'development') { console.log('Service Worker registration failed:', error); }
      })
  }
  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }
  /**
   * Get performance score (0-100)
   */
  getPerformanceScore(): number {
    let score = 100
    // Deduct points for slow load times
    if (this.metrics.loadTime > 3000) score -= 20
    else if (this.metrics.loadTime > 2000) score -= 10
    // Deduct points for slow render times
    if (this.metrics.renderTime > 100) score -= 15
    else if (this.metrics.renderTime > 50) score -= 5
    // Deduct points for high memory usage
    if (this.metrics.memoryUsage > 50 * 1024 * 1024) score -= 15; // 50MB
    else if (this.metrics.memoryUsage > 30 * 1024 * 1024) score -= 5; // 30MB
    return Math.max(0, score)
  }
  /**
   * Generate performance report
   */
  generateReport(): string {
    const score = this.getPerformanceScore()
    return `Performance Score: ${score}`
  }
  /**
   * Lazy load images for better performance
   */
  lazyLoadImages(): void {
    if (typeof window === 'undefined') return
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
images.forEach((img) => imageObserver.observe(img))
}
  public optimizeImages(): void {/* TODO: Fix JSX expression */,}}}
      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {/* TODO: Fix JSX expression */,}}
      // Optimize image format
      if (img.src.includes('.jpg') || img.src.includes('.jpeg')) {/* TODO: Fix JSX expression */,}}
      }
    })
  }
  /**
   * Check if browser supports WebP
   */
  private supportsWebP(): boolean {/* TODO: Fix JSX expression */,}}}
  /**
   * Setup lazy loading for better performance
   */
  public setupLazyLoading(): void {/* TODO: Fix JSX expression */,}}} else {/* TODO: Fix JSX expression */,}}element.style.backgroundImage = `url(${src)})`
              }
              element.removeAttribute('data-lazy')
              lazyObserver.unobserve(element)
            }
          }
        })
      })
      lazyElements.forEach((element) => {/* TODO: Fix JSX expression */,}})
    }
    this.metrics.lazyLoading = true
  }
  /**
   * Enable code splitting for better performance
   */
  enableCodeSplitting(): void {/* TODO: Fix JSX expression */,}}if (process.env.NODE_ENV === 'development') {}}
  /**
   * Enable caching strategies
   */
  enableCaching(): void {/* TODO: Fix JSX expression */,}}if (process.env.NODE_ENV === 'development') {}})
      .catch((error) => {/* TODO: Fix JSX expression */,}if (process.env.NODE_ENV === 'development') {}})
  }
  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {/* TODO: Fix JSX expression */,}}return {...this.metrics}}}
  /**
   * Get performance score (0-100)
   */
  getPerformanceScore(): number {/* TODO: Fix JSX expression */,}}}
  /**
   * Generate performance report
   */
  generateReport(): string {/* TODO: Fix JSX expression */,}}`
  Score: ${score,}`
  }
  /**
   * Lazy load images for better performance
   */
  lazyLoadImages(): void {/* TODO: Fix JSX expression */,}}}
      })
    })
    images.forEach(img => imageObserver.observe(img))
    console.log('Lazy loading initialized for images')
  }
  /**
   * Add critical resource hints
   */
  addCriticalResourceHints(): void {
    if (typeof window === 'undefined') return
    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/css/critical.css', as: 'style' },
    ]
    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource.href
      link.as = resource.as
      if (resource.type) link.type = resource.type
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin
      document.head.appendChild(link)
    })
    console.log('Critical resource hints added')
  /**
   * Add critical resource hints
   */
  addCriticalResourceHints(): void {/* TODO: Fix JSX expression */,}}n: 'anonymous' ,},
      {/* TODO: Fix JSX expression */,}s: 'style' ,}]
    criticalResources.forEach(resource => {/* TODO: Fix JSX expression */,)})
    })
    logger.info('Critical resource hints added', 'PerformanceOptimizer')
  }
  /**
   * Measure page load metrics
   */
  measurePageLoad(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !('performance' in window)) return null
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (!navigation) return null
    return {
      loadTime: this.metrics.loadTime,
      renderTime: this.metrics.renderTime,
      memoryUsage: this.metrics.memoryUsage,
      bundleSize: this.metrics.bundleSize,
      cacheHitRate: this.metrics.cacheHitRate,
      ttfb: navigation.responseStart - navigation.requestStart,
      fcp: this.metrics.fcp || 0,
      lcp: this.metrics.lcp || 0,
      fid: this.metrics.fid || 0,
      cls: this.metrics.cls || 0,
      fmp: this.metrics.fmp || 0,
    }
  }
  /**
   * Report web vitals
   */
  reportWebVitals(metrics: PerformanceMetrics): void {
    console.log('Web Vitals reported', metrics)
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as { gtag?: (...args: unknown[]) => void }).gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (typeof value === 'number') {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'web_vitals', {
            metric_name: key,
            metric_value: value,
            metric_rating: value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor'
  /**
   * Report web vitals
   */
  reportWebVitals(metric)
  s: PerformanceMetrics): void {/* TODO: Fix JSX expression */,}}if(typeof window !== 'undefined' && (window as {gtag?: Function)}}).gtag) {/* TODO: Fix JSX expression */,}g: Function ,}).gtag('event', 'web_vitals', {/* TODO: Fix JSX expression */,)})
          })
        }
      })
    }
  }
  /**
   * Generate comprehensive performance report
   */
  generateComprehensiveReport(): string {
    const score = this.getPerformanceScore()
    const metrics = this.getMetrics()
    return `
Performance Report - Zion Tech Group Website
Performance Score: ${score}/100
Load Time: ${metrics.loadTime.toFixed(2)}ms
Render Time: ${metrics.renderTime.toFixed(2)}ms
Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
Bundle Size: ${metrics.bundleSize}KB
Cache Hit Rate: ${metrics.cacheHitRate}%
Recommendations:
${score < 80 ? '- Consider optimizing images and enabling compression' : ''}
${metrics.loadTime > 2000 ? '- Implement lazy loading for better initial load time' : ''}
${metrics.memoryUsage > 30 * 1024 * 1024 ? '- Review memory usage and optimize components' : ''}
  /**
   * Cleanup observers and resources
   */
  public cleanup(): void {/* TODO: Fix JSX expression */,}}}
  /**
   * Generate comprehensive performance report
   */
  generateComprehensiveReport(): string {/* TODO: Fix JSX expression */,}}Score: ${score,}/100
Load,
  Time: ${metrics.loadTime.toFixed(2),}ms
Render,
  Time: ${metrics.renderTime.toFixed(2),}ms
Memory,
  Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2),}MB
Bundle,
  Size: ${metrics.bundleSize,}KB
Cache Hit,
  Rate: ${metrics.cacheHitRate,}%
Recommendation,
  s:  ,
${score < 80 ? '- Consider optimizing images and enabling compression' : ''}${metrics.loadTime > 2000 ? '- Implement lazy loading for better initial load time' : ''}${metrics.memoryUsage > 30 * 1024 * 1024 ? '- Review memory usage and optimize components' : ''}`
    `.trim()
  }
  /**
   * Optimize the entire application
   */
  optimize(): void {
    this.optimizeImages()
    this.enableCodeSplitting()
    this.enableCaching()
    this.lazyLoadImages()
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance optimization completed')
      console.log(this.generateComprehensiveReport())
    }
  }
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}
// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer()
export default PerformanceOptimizer
export { PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig }
export {PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig}}`