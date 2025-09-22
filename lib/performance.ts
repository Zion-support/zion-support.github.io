// Performance optimization utilities

export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return

  const criticalImages = [
    '/images/hero-bg.jpg',
    '/images/logo.png',
    '/images/ai-solutions.jpg',
  ]

  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}

export const optimizeImages = () => {
  if (typeof window === 'undefined') return

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

export const addPerformanceMonitoring = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return

  window.addEventListener('load', () => {
    // Performance metrics logged
  })
}