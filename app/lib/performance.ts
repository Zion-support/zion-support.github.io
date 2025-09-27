import React from 'react'

/**
 * Performance monitoring and optimization utilities
 */

export interface PerformanceMetrics {
  fcp?: number
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  fmp?: number
  tbt?: number
  si?: number
}

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

export interface PerformanceConfig {
  enableLogging: boolean
  enableReporting: boolean
  reportingEndpoint?: string
  sampleRate: number
}

class PerformanceMonitor {
  private config: PerformanceConfig
  private metrics: PerformanceMetrics = {}
  private observers: PerformanceObserver[] = []

  constructor(config: PerformanceConfig) {
    this.config = config
    this.initializeObservers()
  }

  private initializeObservers(): void {
    if (typeof window === 'undefined') return

    // First Contentful Paint
    this.observeMetric('paint', (entries) => {
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime
        }
      })
    })

    // Largest Contentful Paint
    this.observeMetric('largest-contentful-paint', (entries) => {
      const lastEntry = entries[entries.length - 1]
      if (lastEntry) {
        this.metrics.lcp = (lastEntry as PerformanceEntry).startTime
      }
    })

    // First Input Delay
    this.observeMetric('first-input', (entries) => {
      entries.forEach((entry) => {
        const anyEntry = entry as any
        if (typeof anyEntry.processingStart === 'number') {
          this.metrics.fid = anyEntry.processingStart - anyEntry.startTime
        }
      })
    })

    // Cumulative Layout Shift
    this.observeMetric('layout-shift', (entries) => {
      let clsValue = 0
      entries.forEach((entry) => {
        const layoutShiftEntry = entry as LayoutShift
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value
        }
      })
      this.metrics.cls = clsValue
    })

    // Time to First Byte
    this.observeNavigationTiming()
  }

  private observeMetric(type: string, callback: (entries: PerformanceEntry[]) => void): void {
    if (typeof window === 'undefined') return

    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries())
      })
      observer.observe({ type, buffered: true })
      this.observers.push(observer)
    } catch (error) {
      if (this.config.enableLogging) {
        // eslint-disable-next-line no-console
        console.warn(`Failed to observe ${type}:`, error)
      }
    }
  }

  private observeNavigationTiming(): void {
    if (typeof window === 'undefined') return

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        this.metrics.ttfb = navigation.responseStart - navigation.requestStart
      }
    })
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  public async reportMetrics(): Promise<void> {
    if (!this.config.enableReporting || !this.config.reportingEndpoint) return

    try {
      await fetch(this.config.reportingEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metrics: this.metrics,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      })
    } catch (error) {
      if (this.config.enableLogging) {
        // eslint-disable-next-line no-console
        console.error('Failed to report metrics:', error)
      }
    }
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Resource optimization utilities
export class ResourceOptimizer {
  private static preloadedResources = new Set<string>()

  static preloadResource(href: string, as: string, type?: string): void {
    if (typeof window === 'undefined' || this.preloadedResources.has(href)) return

    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    if (type) link.type = type
    link.crossOrigin = 'anonymous'

    document.head.appendChild(link)
    this.preloadedResources.add(href)
  }

  static preloadCriticalFonts(fonts: string[]): void {
    fonts.forEach(font => {
      this.preloadResource(font, 'font', 'font/woff2')
    })
  }

  static preloadCriticalImages(images: string[]): void {
    images.forEach(image => {
      this.preloadResource(image, 'image')
    })
  }

  static lazyLoadImage(img: HTMLImageElement, src: string, placeholder?: string): void {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.src = src
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      })
    })

    if (placeholder) {
      img.src = placeholder
    }
    img.classList.add('lazy')
    observer.observe(img)
  }
}

// Bundle optimization utilities
import React from 'react'

export class BundleOptimizer {
  static async loadChunk(chunkName: string): Promise<Record<string, unknown>> {
    try {
      return await import(/* webpackChunkName: "[request]" */ `../components/${chunkName}`)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Failed to load chunk ${chunkName}:`, error)
      throw error
    }
  }

  static createLazyComponent<T extends React.ComponentType<Record<string, unknown>>>(
    importFunc: () => Promise<{ default: T }>
  ): React.LazyExoticComponent<T> {
    return React.lazy(importFunc)
  }
}

// Export default instance
export const performanceMonitor = new PerformanceMonitor({
  enableLogging: process.env.NODE_ENV === 'development',
  enableReporting: process.env.NODE_ENV === 'production',
  reportingEndpoint: process.env.NODE_ENV === 'production' ? '/api/metrics' : undefined,
  sampleRate: 0.1,
})

export default performanceMonitor