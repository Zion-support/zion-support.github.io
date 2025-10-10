/**
 * Preload Optimizer;
 * Optimizes resource loading for better performance;
 */
<<<<<<< HEAD
export const preloadCriticalResources = useCallback((...args) => {
  if (typeof window === 'undefined') return;
  // Preload critical fonts;
=======
export const preloadCriticalResources = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Preload critical fonts
>>>>>>> origin/merge-error-fixes
  const fontPreloads = [
    'https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
  ]
<<<<<<< HEAD
  fontPreloads.forEach(href => {)
=======
  fontPreloads.forEach(href => {)}
>>>>>>> origin/merge-error-fixes
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'style',
    link.href = href;
    link.crossOrigin = 'anonymous',
    document.head.appendChild(link)}
  })
  // Preload critical images;
  const criticalImages = [
    '/images/hero-bg.webp',
    '/images/logo.webp',
    '/images/favicon.ico'
  ]
<<<<<<< HEAD
  criticalImages.forEach(src => {)
=======
  criticalImages.forEach(src => {)}
>>>>>>> origin/merge-error-fixes
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src;
    document.head.appendChild(link)}
  })
}
<<<<<<< HEAD
export const preloadRoute = useCallback((...args) => {
  if (typeof window === 'undefined') return;
  // Preload route-specific resources;
  const routeResources = {
=======
export const preloadRoute = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Preload route-specific resources
  const routeResources = {}
>>>>>>> origin/merge-error-fixes
    '/blog': ['/api/blog/posts', '/images/blog-hero.webp'],
    '/services': ['/api/services', '/images/services-hero.webp'],
    '/contact': ['/api/contact', '/images/contact-hero.webp']}
  }
  const resources = routeResources[route as keyof typeof routeResources]
<<<<<<< HEAD
  if (resources) {
    resources.forEach(resource => {)
=======
  if (resources) {}
    resources.forEach(resource => {)}
>>>>>>> origin/merge-error-fixes
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = resource;
      document.head.appendChild(link)}
    })
  }
}
<<<<<<< HEAD
export const optimizeImages = useCallback((...args) => {
  if (typeof window === 'undefined') return;
  // Add loading="lazy" to images below the fold;
  const images = document.querySelectorAll('img[data-lazy]')
  images.forEach(img => {)
    img.setAttribute('loading', 'lazy')}
  })
  // Add intersection observer for lazy loading;
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {)
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset['src']) {
=======
export const optimizeImages = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Add loading="lazy" to images below the fold
  const images = document.querySelectorAll('img[data-lazy]')
  images.forEach(img => {)}
    img.setAttribute('loading', 'lazy')}
  })
  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {}
    const imageObserver = new IntersectionObserver((entries) => {}
      entries.forEach(entry => {)}
        if (entry.isIntersecting) {}
          const img = entry.target as HTMLImageElement
          if (img.dataset['src']) {}
>>>>>>> origin/merge-error-fixes
            img['src'] = img.dataset['src']
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)}
          }
        }
      })
    })
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => imageObserver.observe(img))
  }
}
<<<<<<< HEAD
export const optimizeThirdPartyScripts = useCallback((...args) => {
  if (typeof window === 'undefined') return;
  // Defer non-critical scripts;
  const scripts = document.querySelectorAll('script[data-defer]')
  scripts.forEach(script => {)
    script.setAttribute('defer', '')}
  })
  // Load analytics after page load;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
=======
export const optimizeThirdPartyScripts = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-defer]')
  scripts.forEach(script => {)}
    script.setAttribute('defer', '')}
  })
  // Load analytics after page load
  if (document.readyState === 'loading') {}
    document.addEventListener('DOMContentLoaded', () => {}
>>>>>>> origin/merge-error-fixes
      loadAnalytics()}
    })
  } else {}
    loadAnalytics()}
  }
}
<<<<<<< HEAD
const loadAnalytics = useCallback((...args) => {
  // Load Google Analytics after page load;
=======
const loadAnalytics = useCallback((...args) => {}
  // Load Google Analytics after page load
>>>>>>> origin/merge-error-fixes
  const gaScript = document.createElement('script')
  gaScript.async = true;
  gaScript['src'] = 'https: //www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
  document.head.appendChild(gaScript)}
}