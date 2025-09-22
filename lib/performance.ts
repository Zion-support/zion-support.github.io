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
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    console.log('Performance metrics:', {
      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
      loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
      totalTime: perfData.loadEventEnd - perfData.fetchStart,
    })
  })
}