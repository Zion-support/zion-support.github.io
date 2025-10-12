import React, { useEffect, useState } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'

interface PerformanceMetrics {
  cls: number | null
  inp: number | null
  fcp: number | null
  lcp: number | null
  ttfb: number | null
}

interface Props {
  children: React.ReactNode
}

const PerformanceMonitor: React.FC<Props> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  })

  useEffect(() => {
    // Monitor Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }))
      console.log('CLS:', metric.value)
    })

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }))
      console.log('INP:', metric.value)
    })

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }))
      console.log('FCP:', metric.value)
    })

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }))
      console.log('LCP:', metric.value)
    })

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }))
      console.log('TTFB:', metric.value)
    })

    // Monitor page load performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming
          console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart)
        }
      }
    })

    observer.observe({ entryTypes: ['navigation'] })

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming
          if (resourceEntry.duration > 1000) {
            console.warn('Slow resource:', resourceEntry.name, resourceEntry.duration)
          }
        }
      }
    })

    resourceObserver.observe({ entryTypes: ['resource'] })

    return () => {
      observer.disconnect()
      resourceObserver.disconnect()
    }
  }, [])

  // Performance optimization: Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
      fontLink.as = 'style'
      document.head.appendChild(fontLink)

      // Preload critical images
      const criticalImages = [
        '/og-image.svg',
        '/favicon.svg'
      ]

      criticalImages.forEach(src => {
        const img = new Image()
        img.src = src
      })
    }

    preloadCriticalResources()
  }, [])

  // Performance optimization: Lazy load non-critical components
  useEffect(() => {
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Run after initial render
    const timer = setTimeout(lazyLoadImages, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {children}
      {/* Performance metrics display (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-md rounded-lg p-3 text-xs text-white border border-cyan-500/20 z-50">
          <div className="font-semibold mb-2 text-cyan-400">Performance Metrics</div>
          <div className="space-y-1">
            {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(0)}ms</div>}
            {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(0)}ms</div>}
            {metrics.inp && <div>INP: {metrics.inp.toFixed(0)}ms</div>}
            {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
            {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>}
          </div>
        </div>
      )}
    </>
  )
}

export default PerformanceMonitor