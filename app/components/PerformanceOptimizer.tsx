'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    const preloadCriticalResources = () => {
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.href = '/fonts/inter-var.woff2'
      fontLink.as = 'font'
      fontLink.type = 'font/woff2'
      fontLink.crossOrigin = 'anonymous'
      document.head.appendChild(fontLink)

      const imageLink = document.createElement('link')
      imageLink.rel = 'preload'
      imageLink.href = '/images/hero-bg.webp'
      imageLink.as = 'image'
      document.head.appendChild(imageLink)
    }

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

    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              if (img.dataset.src) {
                img.src = img.dataset.src
                img.removeAttribute('data-src')
                imageObserver.unobserve(img)
              }
            }
          })
        })

        const lazyImages = document.querySelectorAll('img[data-src]')
        lazyImages.forEach(img => imageObserver.observe(img))
      }
    }

    preloadCriticalResources()
    optimizeImages()
    setupLazyLoading()

    return () => {
      // no-op cleanup
    }
  }, [])

  return null
}