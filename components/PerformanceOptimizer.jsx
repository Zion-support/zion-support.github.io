'use client'

import { useEffect, useState } from 'react'

export default function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
        }
        
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
        }
        
        if (entry.entryType === 'layout-shift') {
          if (!entry.hadRecentInput) {
            setMetrics(prev => ({ ...prev, cls: prev.cls + entry.value }))
          }
        }
      }
    })

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })

    // Navigation timing
    const navTiming = performance.getEntriesByType('navigation')[0]
    if (navTiming) {
      setMetrics(prev => ({ ...prev, ttfb: navTiming.responseStart - navTiming.requestStart }))
    }

    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      const logMetrics = () => {
        console.log('Performance Metrics:', {
          FCP: `${metrics.fcp.toFixed(2)}ms`,
          LCP: `${metrics.lcp.toFixed(2)}ms`,
          FID: `${metrics.fid.toFixed(2)}ms`,
          CLS: metrics.cls.toFixed(4),
          TTFB: `${metrics.ttfb.toFixed(2)}ms`
        })
      }
      
      setTimeout(logMetrics, 2000)
    }

    return () => observer.disconnect()
  }, [metrics])

  // Preload critical resources
  useEffect(() => {
    const preloadLinks = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/icons/logo.svg'
    ]

    preloadLinks.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = href.includes('.woff') ? 'font' : href.includes('.jpg') ? 'image' : 'image'
      if (href.includes('.woff')) {
        link.crossOrigin = 'anonymous'
      }
      document.head.appendChild(link)
    })

    // Critical CSS inlining
    const criticalCSS = `
      .hero-section { opacity: 0; animation: fadeIn 0.6s ease-in-out forwards; }
      @keyframes fadeIn { to { opacity: 1; } }
      .loading-spinner { animation: spin 1s linear infinite; }
      @keyframes spin { to { transform: rotate(360deg); } }
    `
    
    const style = document.createElement('style')
    style.textContent = criticalCSS
    document.head.appendChild(style)
  }, [])

  return null
}