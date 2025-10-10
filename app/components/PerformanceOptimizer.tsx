'use client',
import React, { useEffect, useState } from 'react',

interface PerformanceMetrics {
  lcp: number,
  fid: number,
  cls: number,
  fcp: number,
  ttfb: number,
}

const PerformanceOptimizer: React.FC = () => {
const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
  }),

  useEffect(() => {
    if (typeof window === 'undefined') return,

    // Collect Core Web Vitals
    const vitals: PerformanceMetrics = {
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0,
    },

    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries(),
      const lastEntry = entries[entries.length - 1],
      vitals.lcp = lastEntry.startTime,
      setMetrics(prev => ({ ...prev, lcp: vitals.lcp })),
    }),
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] }),

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries(),
      entries.forEach((entry: any) => {
        vitals.fid = entry.processingStart - entry.startTime,
        setMetrics(prev => ({ ...prev, fid: vitals.fid })),
      }),
    }),
    fidObserver.observe({ entryTypes: ['first-input'] }),

    // CLS - Cumulative Layout Shift
    let clsValue = 0,
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries(),
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value,
          vitals.cls = clsValue,
          setMetrics(prev => ({ ...prev, cls: vitals.cls })),
        }
      }),
    }),
    clsObserver.observe({ entryTypes: ['layout-shift'] }),

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries(),
      entries.forEach((entry: any) => {
        if (entry.name === 'first-contentful-paint') {
          vitals.fcp = entry.startTime,
          setMetrics(prev => ({ ...prev, fcp: vitals.fcp })),
        }
      }),
    }),
    fcpObserver.observe({ entryTypes: ['paint'] }),

    // TTFB - Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
    if (navigationEntry) {
      vitals.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,
      setMetrics(prev => ({ ...prev, ttfb: vitals.ttfb })),
    }

    // Cleanup observers
    return () => {
      lcpObserver.disconnect(),
      fidObserver.disconnect(),
      clsObserver.disconnect(),
      fcpObserver.disconnect(),
    },
  }, []),

  // Performance optimizations
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.webp',
        '/images/logo.svg'
      ],

      criticalResources.forEach(resource => {
        const link = document.createElement('link'),
        link.rel = 'preload',
        link.href = resource,
        link.as = resource.endsWith('.woff2') ? 'font' : 'image',
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous',
        }
        document.head.appendChild(link),
      }),
    },

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]'),
      images.forEach(img => {
        const imageElement = img as HTMLImageElement,
        if (imageElement.dataset.src) {
          imageElement.src = imageElement.dataset.src,
          imageElement.removeAttribute('data-src'),
        }
      }),
    },

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      const lazyElements = document.querySelectorAll('[data-lazy]'),
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement,
            const src = element.dataset.lazy,
            if (src) {
              if (element.tagName === 'IMG') {
                (element as HTMLImageElement).src = src,
              } else {
                element.style.backgroundImage = `url(${src})`,
              }
              element.removeAttribute('data-lazy'),
              observer.unobserve(element),
            }
          }
        }),
      }),

      lazyElements.forEach(element => observer.observe(element)),
    },

    // Execute optimizations
    preloadCriticalResources(),
    optimizeImages(),
    lazyLoadResources(),

    // Report metrics to analytics
    const reportMetrics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(vitals.lcp + vitals.fid + vitals.cls),
          custom_map: {
            lcp: vitals.lcp,
            fid: vitals.fid,
            cls: vitals.cls,
            fcp: vitals.fcp,
            ttfb: vitals.ttfb
          }
        }),
      }
    },

    // Report after 5 seconds to allow metrics to stabilize
    const timeoutId = setTimeout(reportMetrics, 5000),

    return () => clearTimeout(timeoutId),
  }, [metrics]),

  // Don't render anything - this is a performance optimization component
  return null,
},

export default PerformanceOptimizer,