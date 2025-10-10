'use client'
import React, { useEffect, useCallback, ReactNode } from 'react'
import { useAnalytics } from './EnhancedAnalytics'
interface PerformanceOptimizerProps {
  children: ReactNode
  enableImageOptimization?: boolean
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableCodeSplitting?: boolean
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  const { trackPerformance } = useAnalytics()
  // Image optimization
  useEffect(() => {
    if (enableImageOptimization) {
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
  }, [enableImageOptimization])
  // Lazy loading for components
  useEffect(() => {
    if (enableLazyLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement
              element.classList.add('loaded')
              observer.unobserve(element)
            }
          })
        },
        { threshold: 0.1 }
      )
      const lazyElements = document.querySelectorAll('[data-lazy]')
      lazyElements.forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }
  }, [enableLazyLoading])
  // Preload critical resources
  useEffect(() => {
    if (enablePreloading) {
      const preloadResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
        { href: '/images/hero-bg.jpg', as: 'image' },
        { href: '/css/critical.css', as: 'style' }
      ]
      preloadResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource.href
        link.as = resource.as
        if (resource.type) {
          link.type = resource.type
        }
        document.head.appendChild(link)
      })
    }
  }, [enablePreloading])
  // Performance monitoring
  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
        }
        trackPerformance('page_load', metrics)
      }
    }
    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [trackPerformance])
  // Code splitting optimization
  const handleRouteChange = useCallback(() => {
    if (enableCodeSplitting) {
      // Preload next likely routes
      const nextRoutes = ['/about', '/services', '/contact']
      nextRoutes.forEach(route => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = route
        document.head.appendChild(link)
      })
    }
  }, [enableCodeSplitting])
  useEffect(() => {
    // Listen for route changes (if using React Router)
    const handlePopState = () => handleRouteChange()
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [handleRouteChange])
  return (
    <div>{children}
    </div></div>
  )
}
export default EnhancedPerformanceOptimizer