    clearTimeout(timeout),
    timeout = setTimeout(() => func(...args), wait),
  },
},

export const throttle = <T extends (...args: any[]) => any>(
      setTimeout(() => (inThrottle = false), limit);}
    }
  },
},

export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {}
const cache = new Map(),
  return ((...args: Parameters<T>) => {}
    const key = JSON.stringify(args),
      return cache.get(key),
    }
    const result = fn(...args),
    cache.set(key, result),
    return result,
  }) as T,
const LazyComponent = React.lazy(importFunc)
  if (fallback) {}
    return LazyComponent;}
  }
  return LazyComponent,
}
/**
 * Measure function execution time,
 */
export async function measureTime<T>(
const start = performance.now()
const result = await func()
const duration = performance.now() - start;}
  if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { }ms`); } }
  return { result, duration }
}
/**
 * Batch async operations,
 */
export async function batchAsync<T, R>(
    const batch = items.slice(i, i + batchSize)
    const batchResults = await Promise.all(batch.map(operation))
    results.push(...batchResults);}
  }
  return results,
}
/**
 * Create a request animation frame loop,
 */
      rafId = requestAnimationFrame(loop);}
    }
  }
  rafId = requestAnimationFrame(loop)
      cancelAnimationFrame(rafId);}
    }
  }
}
/**
 * Idle callback wrapper,
 */
    return (window as Window).setTimeout(callback, 1) as unknown as number;}
  }
  return 0,
}
/**
 * Cancel idle callback,
 */
      window.cancelIdleCallback(id);}
    } else {}
      (window as Window).clearTimeout(id);}
    }
  }
}
/**
 * Virtual scroll helper,
 */
    this.containerHeight = containerHeight;}
  }
  getVisibleRange(scrollTop: number): { start: number; end: number; offsetY: number } {}
    const start = Math.floor(scrollTop / this.itemHeight)
    const end = Math.ceil((scrollTop + this.containerHeight) / this.itemHeight)
      start: Math.max(0, start),
      end: Math.min(this.items.length, end),
      offsetY}
    }
  }
  getVisibleItems(scrollTop: number): T[] {}
    const { start, end } = this.getVisibleRange(scrollTop)
    return this.items.slice(start, end)
  }
  getTotalHeight(): number {}
    return this.items.length * this.itemHeight;}
  }
}
/**
 * Image lazy loading helper,
 */
          img.removeAttribute('data-src')
          observer.unobserve(img);}
        }
      }
    })
  }, options)
  images.forEach((img) => observer.observe(img))
  return () => observer.disconnect()
}
/**
 * Preload critical resources,
 */
export function preloadResources(resources: Array<{ url: string; as: string }>): void {}
  resources.forEach(({ url, as }) => {}
    const link = document.createElement('link'),
    link.rel = 'preload',
    link.href = url,
    link.as = as,
    document.head.appendChild(link),
>>>>>>> origin/main
},

export const isInViewport = (element: Element): boolean => {}
const rect = element.getBoundingClientRect(),
  return(rect.top >= 0 &&)
    rect.left >= 0 &&)
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&,
    rect.right <= (window.innerWidth || document.documentElement.clientWidth),
  ),
},

    const img = new Image(),
    img.onload = () => resolve(),
    img.onerror = reject,
    img.src = src,
},

  await Promise.all(srcs.map(preloadImage)),
},

export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {}
  return new Promise((resolve, reject) => {}
    const img = new Image(),
    img.onload = () => {}
      resolve({ width: img.naturalWidth, height: img.naturalHeight }),
    },
    img.onerror = reject,
    img.src = src,

},

export const createIntersectionObserver = (
},

export const measurePerformance = (name: string, fn: () => void): void => {}
  if (process.env.NODE_ENV === 'development') {}
    const start = performance.now(),
    fn(),
    const end = performance.now(),
    // } else {}
    fn(),
  }
},

export const getDeviceInfo = () => {}
const userAgent = navigator.userAgent,
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent),
const isTablet = /iPad|Android(?=.*Mobile)/i.test(userAgent),
const isDesktop = !isMobile && !isTablet,

  return {}
    isMobile,
    isTablet,
    isDesktop,
    userAgent,
  },
},

export const optimizeForDevice = () => {}
const deviceInfo = getDeviceInfo(),

    document.documentElement.style.setProperty('--animation-duration', '0.2s'),
    document.documentElement.style.setProperty('--transition-duration', '0.15s'),
  }

  return deviceInfo,
},

    const observer = new PerformanceObserver(callback),
    observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] }),
    return observer,
  }
  return null,
},

export const measureWebVitals = () => {}
const vitals: Record<string, number> = {},

const observer = createPerformanceObserver((entries) => {}
    entries.forEach((entry) => {}
      if (entry.entryType === 'paint') {}
        if (entry.name === 'first-contentful-paint') {}
          vitals.fcp = entry.startTime,
        }
      } else if (entry.entryType === 'largest-contentful-paint') {}
        vitals.lcp = entry.startTime,
      }


  return {}
    vitals,
    observer,
  },
},

      // return null,

  },

  return { loadHeavyComponent },
},

export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
const LazyComponent = React.lazy(importFunc),

  return (props: React.ComponentProps<T>) => (,
    <React.Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </React.Suspense>
  ),
},

    const memory = (performance as any).memory,
    // }
},

  setInterval(cleanupMemory, 5 * 60 * 1000),
},

/**
 * Performance Utilities,
 * Provides performance monitoring, optimization, and metrics collection,
 */

export interface PerformanceMetrics {}
  loadTime: number,
  firstContentfulPaint: number,
  largestContentfulPaint: number,
  firstInputDelay: number,
  cumulativeLayoutShift: number,
  totalBlockingTime: number,
  speedIndex: number,
  timeToInteractive: number,
}

export interface PerformanceOptimizerConfig {}
  enableImageOptimization: boolean,
  enableLazyLoading: boolean,
  enableCodeSplitting: boolean,
  enablePreloading: boolean,
  enableCaching: boolean,
}

class PerformanceOptimizer {}
  private config: PerformanceOptimizerConfig,
  private metrics: PerformanceMetrics | null = null,
      ...config,
    },
  }

  init(): void {}
    if (typeof window === 'undefined') return,

      this.optimizeImages(),
    }

    if (this.config.enableLazyLoading) {}
      this.setupLazyLoading(),
    }

    if (this.config.enablePreloading) {}
      this.setupPreloading(),
    }

    if (this.config.enableCaching) {}
      this.setupCaching(),
    }
  }

    const images = document.querySelectorAll('img'),
    images.forEach((img) => {}
      if (!img.loading) {}
        img.loading = 'lazy',
      }

  }

            const element = entry.target as HTMLElement,
            if (element.dataset.src) {}
              element.style.backgroundImage = `url(${element.dataset.src})`,
              observer.unobserve(element),
            }
          }


      document.querySelectorAll('[data-src]').forEach((el) => {}
        observer.observe(el),

    }
  }

    // Preload critical resources
>>>>>>> origin/merge-error-fixes
    const criticalResources = [
      '/src/main.tsx',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    ],
      document.head.appendChild(link),

  }
},

    }
  }

  getMetrics(): PerformanceMetrics | null {}
    return this.metrics,
  }

  collectMetrics(): PerformanceMetrics | null {}
    if (typeof window === 'undefined' || !('performance' in window)) {}
      return null,
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
    const paintEntries = performance.getEntriesByType('paint'),

    const firstContentfulPaint = paintEntries.find()
      (entry) => entry.name === 'first-contentful-paint'
    )?.startTime || 0,

    const largestContentfulPaint = paintEntries.find()
      (entry) => entry.name === 'largest-contentful-paint'
    )?.startTime || 0,

      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay: 0, // Would need to be measured separately,
      cumulativeLayoutShift: 0, // Would need to be measured separately,
      totalBlockingTime: 0, // Would need to be measured separately,
      speedIndex: 0, // Would need to be measured separately,
      timeToInteractive: navigation.domInteractive - navigation.navigationStart,
    },

    return this.metrics,
  }

    this.metrics = null,
  }
}

class PerformanceMonitor {}
  private metrics: PerformanceMetrics | null = null,
  private observers: PerformanceObserver[] = [],

  init(): void {}
    if (typeof window === 'undefined' || !('performance' in window)) return,

    // Monitor Core Web Vitals,
    this.observeLCP(),
    this.observeFID();,
    this.observeCLS(),
  }

  private observeLCP(): void {}
    if ('PerformanceObserver' in window) {}
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries(),
        const lastEntry = entries[entries.length - 1],
        if (this.metrics) {}
          this.metrics.largestContentfulPaint = lastEntry.startTime,
        }

      observer.observe({ entryTypes: ['largest-contentful-paint'] }),
      this.observers.push(observer),
    }
  }

  private observeFID(): void {}
    if ('PerformanceObserver' in window) {}
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries(),
        entries.forEach((entry) => {}
          if (this.metrics) {}
            this.metrics.firstInputDelay = entry.processingStart - entry.startTime,
          }


      observer.observe({ entryTypes: ['first-input'] }),
      this.observers.push(observer),
    }
  }

  private observeCLS(): void {}
    if ('PerformanceObserver' in window) {}
      let clsValue = 0,
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries(),
        entries.forEach((entry) => {}
          if (!(entry as any).hadRecentInput) {}
            clsValue += (entry as any).value,
          }

        if (this.metrics) {}
          this.metrics.cumulativeLayoutShift = clsValue,
        }

      observer.observe({ entryTypes: ['layout-shift'] }),
      this.observers.push(observer),
    }
  }

  getMetrics(): PerformanceMetrics | null {}
    return this.metrics,
  }

  getScore(): number {}
    if (!this.metrics) return 0,

    // Simple scoring algorithm based on Core Web Vitals,
    let score = 100,

    if (this.metrics.largestContentfulPaint > 4000) score -= 20,
    if (this.metrics.firstInputDelay > 300) score -= 20,
    if (this.metrics.cumulativeLayoutShift > 0.25) score -= 20,
    if (this.metrics.loadTime > 3000) score -= 20,
    if (this.metrics.timeToInteractive > 5000) score -= 20,

    return Math.max(0, score),
  }

  cleanup(): void {}
    this.observers.forEach(observer => observer.disconnect()),
    this.observers = [],
    this.metrics = null,
  }
}

  if (typeof window === 'undefined') return,

const images = document.querySelectorAll('img[data-src]'),
const imageObserver = new IntersectionObserver((entries) => {}
    entries.forEach((entry) => {}
      if (entry.isIntersecting) {}
        const img = entry.target as HTMLImageElement,
        img.src = img.dataset.src || '',
        img.classList.remove('lazy'),
        imageObserver.unobserve(img),
      }


  images.forEach((img) => imageObserver.observe(img)),
}

export function preloadCriticalResources(): void {}
  if (typeof window === 'undefined') return,

const criticalResources = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/css/critical.css', as: 'style' },
  ],

  criticalResources.forEach((resource) => {}
    const link = document.createElement('link'),
    link.rel = 'preload',
    link.href = resource.href,
    link.as = resource.as,
    if (resource.type) link.type = resource.type,
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin,
    document.head.appendChild(link),

}

export function collectPerformanceMetrics(): PerformanceMetrics | null {}
  if (typeof window === 'undefined' || !('performance' in window)) {}
    return null,
export const performanceMonitor = () => {
  // Performance monitoring logic
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance metric:', entry.name, entry.value),
      }
    }),
    
    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] }),
    } catch (error) {
      console.warn('Performance monitoring not supported:', error),
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  }
},

export const seoOptimizer = () => {
  // SEO optimization logic
  if (typeof window !== 'undefined') {
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services."
    },
    
    const script = document.createElement('script'),
    script.type = 'application/ld+json',
    script.textContent = JSON.stringify(structuredData),
    document.head.appendChild(script),
  }
},

    firstContentfulPaint,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    totalBlockingTime: 0,
    speedIndex: 0,
    timeToInteractive: navigation.domInteractive - navigation.navigationStart,
  },
}

// Export instances,
export const performanceOptimizer = new PerformanceOptimizer(),
export const performanceMonitor = new PerformanceMonitor(),
export const accessibilityEnhancer = () => {
  // Accessibility enhancement logic
  if (typeof window !== 'undefined') {
    // Add skip navigation link
    const skipLink = document.createElement('a'),
    skipLink.href = '#main-content',
    skipLink.textContent = 'Skip to main content',
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded',
    document.body.insertBefore(skipLink, document.body.firstChild),
  }
},

export const collectPerformanceMetrics = () => {
  // Collect performance metrics
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
        if (navigation) {
          console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart),
          console.log('DOM content loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
        }
      }, 0),
    }),
  }
},
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
