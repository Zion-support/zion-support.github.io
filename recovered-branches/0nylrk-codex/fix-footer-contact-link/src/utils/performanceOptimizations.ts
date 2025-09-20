/**,
 * Performance Optimization Utilities,
 * Advanced performance monitoring and optimization tools,
 */,
export interface PerformanceMetrics {,
  loadTime: number,
  firstContentfulPaint: number,
  largestContentfulPaint: number,
  cumulativeLayoutShift: number,
  firstInputDelay: number,
  memoryUsage: number}
,
class PerformanceMonitor {,
  private metrics: Partial<PerformanceMetrics> = {},
  getMetrics(): Partial<PerformanceMetrics> {,
    return { ...this.metrics },
  }
  init(): void {,
    if (typeof window === 'undefined') return,
    try {,
      this.metrics.loadTime = performance.timing ? performance.now() : 0,
      if ('memory' in performance) {,
        // @ts-ignore non-standard,
        this.metrics.memoryUsage = Math.round((performance as any).memory?.usedJSHeapSize / 1024 / 1024),
      }
      if ('PerformanceObserver' in window) {,
        const po = new PerformanceObserver((list) => {,
          for (const entry of list.getEntries()) {,
            if (entry.entryType === 'largest-contentful-paint') this.metrics.largestContentfulPaint = entry.startTime,
            if (entry.entryType === 'paint' && (entry as any).name === 'first-contentful-paint') this.metrics.firstContentfulPaint = entry.startTime,
            if (entry.entryType === 'layout-shift') {,
              const e: any = entry,
              if (!e.hadRecentInput) this.metrics.cumulativeLayoutShift = (this.metrics.cumulativeLayoutShift || 0) + e.value
            }
          }
        }),
        try { po.observe({ type: 'largest-contentful-paint', buffered: true } as any) } catch {}
        try { po.observe({ type: 'paint', buffered: true } as any) } catch {}
        try { po.observe({ type: 'layout-shift', buffered: true } as any) } catch {}
      }
    } catch {}
  }
}
,
export class ImageOptimizer {,
  private static instance: ImageOptimizer,
  private intersectionObserver: IntersectionObserver | null = null,
  private constructor() {,
    this.initializeLazyLoading()
  }
,
  public static getInstance(): ImageOptimizer {,
    if (!ImageOptimizer.instance) {,
      ImageOptimizer.instance = new ImageOptimizer(),
    }
    return ImageOptimizer.instance,
  }
,
  private initializeLazyLoading() {,
    if ('IntersectionObserver' in window) {,
      this.intersectionObserver = new IntersectionObserver(,
        (entries) => {,
          entries.forEach(entry => {,
            if (entry.isIntersecting) {,
              const img = entry.target as HTMLImageElement,
              this.loadImage(img),
              this.intersectionObserver?.unobserve(img),
            }
          }),
        },
        { rootMargin: '50px' }
      ),
    }
  }
,
  private loadImage(img: HTMLImageElement) {,
    const src = img.dataset.src,
    if (src) {,
      img.src = src,
      img.removeAttribute('data-src'),
      img.classList.add('loaded')
    }
  }
,
  public observeImage(img: HTMLImageElement) {,
    if (this.intersectionObserver) {,
      this.intersectionObserver.observe(img)} else {,
      // Fallback for browsers without IntersectionObserver,
      this.loadImage(img),
    }
  }
,
  public cleanup() {,
    if (this.intersectionObserver) {,
      this.intersectionObserver.disconnect(),
    }
  }
}
,
export class BundleOptimizer {,
  public static preloadCriticalResources() {,
    // Preload critical resources,
    const criticalResources = [,
      '/css/main.css/js/main.js/fonts/roboto.woff2'
    ],
    criticalResources.forEach(resource => {,
      const link = document.createElement('link'),
      link.rel = 'preload',
      link.href = resource,
      link.as = resource.endsWith('.css') ? 'style' : 'script',
      document.head.appendChild(link),
    }),
  }
,
  public static prefetchNextPageResources(route: string) {,
    // Prefetch resources for likely next pages,
    const prefetchRoutes = {,
      '/': ['/blog/case-study'],
      '/blog': ['//case-study'],
      '/case-study': ['//blog']
    },
    const routesToPrefetch = prefetchRoutes[route as keyof typeof prefetchRoutes] || [],
    routesToPrefetch.forEach(route => {,
      const link = document.createElement('link'),
      link.rel = 'prefetch',
      link.href = route,
      document.head.appendChild(link),
    }),
  }
,
  public static optimizeThirdPartyScripts() {,
    // Defer non-critical third-party scripts,
    const scripts = document.querySelectorAll('script[src*="analytics"], script[src*="gtag"]'),
    scripts.forEach(script => {,
      script.defer = true,
      script.async = true,
    }),
  }
}
,
export class MemoryOptimizer {,
  private static cleanupTasks: (() => void)[] = [],
  public static registerCleanup(task: () => void) {,
    this.cleanupTasks.push(task)}
,
  public static cleanup() {,
    this.cleanupTasks.forEach(task => {,
      try {,
        task(),
      } catch (e) {,
        console.warn('Cleanup task failed:', e),
      }
    }),
    this.cleanupTasks = [],
  }
,
  public static optimizeImages() {,
    // Convert images to WebP if supported,
    if (this.supportsWebP()) {,
      const images = document.querySelectorAll('img[src$=".jpg"], img[src$=".png"]'),
      images.forEach(img => {,
        const webpSrc = img.src.replace(/\.(jpg|png)$/, '.webp'),
        const webpImg = new Image(),
        webpImg.onload = () => {,
          img.src = webpSrc,
        },
        webpImg.src = webpSrc,
      }),
    }
  }
,
  private static supportsWebP(): boolean {,
    const canvas = document.createElement('canvas'),
    canvas.width = 1,
    canvas.height = 1,
    return canvas.toDataURL('image/webp').indexOf('data: image/webp') === 0}
}
,
// Initialize performance monitoring,
export const performanceMonitor = new PerformanceMonitor(),
export const imageOptimizer = ImageOptimizer.getInstance(),
// Cleanup on page unload,
if (typeof window !== 'undefined') {,
  window.addEventListener('beforeunload', () => {,
    performanceMonitor.cleanup(),
    imageOptimizer.cleanup(),
    MemoryOptimizer.cleanup(),
  }),
  // Report metrics after page load,
  window.addEventListener('load', () => {,
    setTimeout(() => {,
      performanceMonitor.reportMetrics(),
    }, 2000),
  }),
}