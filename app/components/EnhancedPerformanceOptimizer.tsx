'use client';
import React, { useEffect } from 'react';

const EnhancedPerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Performance optimization code
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

    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ]
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource
        link.as = resource.endsWith('.woff2') ? 'font' : 'style'
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous'
        }
        document.head.appendChild(link)
      })
    }

    const optimizeAnimations = () => {
      // Reduce motion for users who prefer it
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms')
        document.documentElement.style.setProperty('--animation-iteration-count', '1')
      }
    }

    const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
            }
          })
        },
        { threshold: 0.1 }
      )

      const elements = document.querySelectorAll('[data-animate]')
      elements.forEach(el => observer.observe(el))
    }

    // Run optimizations
    optimizeImages()
    preloadCriticalResources()
    optimizeAnimations()
    setupIntersectionObserver()

    // Cleanup
    return () => {
      // Cleanup code if needed
    }
  }, [])

  return null
}

export default EnhancedPerformanceOptimizer