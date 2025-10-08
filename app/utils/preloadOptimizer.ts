/**
 * Preload Optimizer
 * Optimizes resource loading for better performance
 */
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return

  // Preload critical fonts
  const fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
  ]

  fontPreloads.forEach(href => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'style'
    link.href = href
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  })

  // Preload critical images
  const criticalImages = [
    '/images/hero-bg.jpg',
    '/images/logo.png',
    '/images/favicon.ico'
  ]

  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}
export const preloadRoute = (route: string) => {
  if (typeof window === 'undefined') return

  // Preload route-specific resources
  const routeResources = {
    '/blog': ['/api/blog/posts', '/images/blog-hero.jpg'],
    '/services': ['/api/services', '/images/services-hero.jpg'],
    '/contact': ['/api/contact', '/images/contact-hero.jpg']
  };
  const resources = routeResources[route as keyof typeof routeResources]
  if (resources) {
    resources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = resource
      document.head.appendChild(link)
    })
  }
}
export const optimizeImages = () => {
  if (typeof window === 'undefined') return

  // Add loading="lazy" to images below the fold
  const images = document.querySelectorAll('img[data-lazy]')
  images.forEach(img => {
    img.setAttribute('loading', 'lazy')
  })

  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset['src']) {
            img['src'] = img.dataset['src']
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
export const optimizeThirdPartyScripts = () => {
  if (typeof window === 'undefined') return

  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-defer]')
  scripts.forEach(script => {
    script.setAttribute('defer', '')
  })

  // Load analytics after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadAnalytics()
    })
  } else {
    loadAnalytics()
  }
}
const loadAnalytics = () => {
  // Load Google Analytics after page load
  const gaScript = document.createElement('script')
  gaScript.async = true
  gaScript['src'] = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
  document.head.appendChild(gaScript)
}