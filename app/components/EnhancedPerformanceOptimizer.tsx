'use client'
import React from 'react'

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableCodeSplitting?: boolean
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  React.useEffect(() => {
    // Image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
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

    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      const preloadLinks = [
        { href: '/app/styles/futuristic.css', as: 'style' },
        { href: '/app/components/Navigation.tsx', as: 'script' },
        { href: '/app/components/Footer.tsx', as: 'script' }
      ]

      preloadLinks.forEach(link => {
        const linkElement = document.createElement('link')
        linkElement.rel = 'preload'
        linkElement.href = link.href
        linkElement.as = link.as
        document.head.appendChild(linkElement)
      })
    }

    // Code splitting optimization
    if (enableCodeSplitting && typeof window !== 'undefined') {
      // Preload critical components
      const criticalComponents = [
        '/app/components/Navigation.tsx',
        '/app/components/Footer.tsx',
        '/app/page.tsx'
      ]

      criticalComponents.forEach(component => {
        const linkElement = document.createElement('link')
        linkElement.rel = 'modulepreload'
        linkElement.href = component
        document.head.appendChild(linkElement)
      })
    }
  }, [enableImageOptimization, enablePreloading, enableCodeSplitting])

  // Lazy loading implementation
  React.useEffect(() => {
    if (enableLazyLoading && typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement
              if (target.dataset.src) {
                target.src = target.dataset.src
                target.removeAttribute('data-src')
                observer.unobserve(target)
              }
            }
          })
        },
        { rootMargin: '50px' }
      )

      const lazyElements = document.querySelectorAll('[data-src]')
      lazyElements.forEach(el => observer.observe(el))

      return () => observer.disconnect()
    }
  }, [enableLazyLoading])

  return null
}

export default EnhancedPerformanceOptimizer