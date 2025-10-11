'use client'
import React, { useEffect, useCallback } from 'react'

interface PerformanceOptimizerProps {
  children: React.ReactNode
  enablePreloading?: boolean
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  enablePreloading = true 
}) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return

    // Preload critical fonts
    const fontPreload = document.createElement('link')
    fontPreload.rel = 'preload'
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    fontPreload.as = 'style'
    fontPreload.onload = () => {
      fontPreload.rel = 'stylesheet'
    }
    document.head.appendChild(fontPreload)

    // Preload critical images
    const criticalImages = [
      '/hero-bg.jpg',
      '/logo.png'
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [enablePreloading])

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return

    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy')
      }
      
      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async')
    })
  }, [])

  // Intersection Observer for animations
  const setupAnimationObserver = useCallback(() => {
    if (typeof window === 'undefined') return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        const metrics = {
          FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
          LCP: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
          FID: performance.getEntriesByType('first-input')[0]?.processingStart,
          CLS: performance.getEntriesByType('layout-shift')[0]?.value,
          TTFB: navigation.responseStart - navigation.requestStart,
          DOMContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          LoadComplete: navigation.loadEventEnd - navigation.navigationStart
        }
        
        // Send metrics to analytics (replace with your analytics service)
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', metrics)
        }
      }
    }

    // Measure performance after page load
    window.addEventListener('load', measurePerformance)
    return () => window.removeEventListener('load', measurePerformance)
  }, [])

  useEffect(() => {
    preloadCriticalResources()
    optimizeImages()
    const cleanupAnimation = setupAnimationObserver()
    const cleanupPerformance = setupPerformanceMonitoring()

    // Re-optimize when DOM changes
    const observer = new MutationObserver(() => {
      optimizeImages()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      cleanupAnimation?.()
      cleanupPerformance?.()
      observer.disconnect()
    }
  }, [preloadCriticalResources, optimizeImages, setupAnimationObserver, setupPerformanceMonitoring])

  return <>{children}</>
}

export default PerformanceOptimizer
