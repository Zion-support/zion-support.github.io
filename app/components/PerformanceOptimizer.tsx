'use client'
import React, { useEffect, useCallback } from 'react'

interface PerformanceOptimizerProps {
  children: React.ReactNode
  enablePreloading?: boolean
<<<<<<< HEAD
  enableImageOptimization?: boolean
  enablePerformanceMonitoring?: boolean
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enablePreloading = true,
  enableImageOptimization = true,
  enablePerformanceMonitoring = true
=======
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  enablePreloading = true 
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65
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
<<<<<<< HEAD
      '/logo.png',
      '/og-image.jpg'
=======
      '/logo.png'
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65
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
<<<<<<< HEAD
    if (!enableImageOptimization || typeof window === 'undefined') return
=======
    if (typeof window === 'undefined') return
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65

    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy')
      }
      
      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async')
      
      // Add alt text if missing
      if (!img.alt) {
        img.alt = 'Zion Tech Group - AI & IT Solutions'
      }
    })
<<<<<<< HEAD
  }, [enableImageOptimization])

  // Intersection Observer for animations
  const setupIntersectionObserver = useCallback(() => {
=======
  }, [])

  // Intersection Observer for animations
  const setupAnimationObserver = useCallback(() => {
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65
    if (typeof window === 'undefined') return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
<<<<<<< HEAD

=======
    
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)
<<<<<<< HEAD

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

=======
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))
    
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65
    return () => observer.disconnect()
  }, [])

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
<<<<<<< HEAD
    if (!enablePerformanceMonitoring || typeof window === 'undefined' || !('performance' in window)) return
=======
    if (typeof window === 'undefined' || !('performance' in window)) return
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65

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
<<<<<<< HEAD
        console.log('Performance Metrics:', metrics)
        
        // Store metrics in localStorage for debugging
        localStorage.setItem('performance-metrics', JSON.stringify(metrics))
=======
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', metrics)
        }
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65
      }
    }

    // Measure performance after page load
    window.addEventListener('load', measurePerformance)
    return () => window.removeEventListener('load', measurePerformance)
<<<<<<< HEAD
  }, [enablePerformanceMonitoring])
=======
  }, [])
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65

  useEffect(() => {
    preloadCriticalResources()
    optimizeImages()
<<<<<<< HEAD
    const cleanupObserver = setupIntersectionObserver()
=======
    const cleanupAnimation = setupAnimationObserver()
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65
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
<<<<<<< HEAD
      cleanupObserver?.()
      cleanupPerformance?.()
      observer.disconnect()
    }
  }, [preloadCriticalResources, optimizeImages, setupIntersectionObserver, setupPerformanceMonitoring])
=======
      cleanupAnimation?.()
      cleanupPerformance?.()
      observer.disconnect()
    }
  }, [preloadCriticalResources, optimizeImages, setupAnimationObserver, setupPerformanceMonitoring])
>>>>>>> cursor/analyze-improve-and-deploy-application-6b65

  return <>{children}</>
}

export default PerformanceOptimizer