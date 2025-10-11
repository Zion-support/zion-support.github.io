'use client'
import React, { useEffect } from 'react'

interface PerformanceOptimizerProps {
  children: React.ReactNode
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization effects
    const optimizeImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy'
        }
        if (!img.decoding) {
          img.decoding = 'async'
        }
      })
    }

    const optimizeFonts = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.href = '/fonts/inter-var.woff2'
      fontLink.as = 'font'
      fontLink.type = 'font/woff2'
      fontLink.crossOrigin = 'anonymous'
      document.head.appendChild(fontLink)
    }

    const optimizeResources = () => {
      // Preload critical resources
      const criticalResources = [
        '/css/critical.css',
        '/js/critical.js'
      ]

      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.css') ? 'style' : 'script'
        document.head.appendChild(link)
      })
    }

    // Run optimizations
    optimizeImages()
    optimizeFonts()
    optimizeResources()

    // Cleanup function
    return () => {
      // Cleanup if needed
    }
  }, [])

  return <>{children}</>
}

export default EnhancedPerformanceOptimizer