  // Preload critical fonts
  }
export const preloadCriticalResources = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Preload critical fonts
  const fontPreloads = [
    'https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
    link.rel = 'preload';
  fontPreloads.forEach(href => {)}]
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'style',
    link.href = href
    link.crossOrigin = 'anonymous',
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link)}
  })
}
  // Preload route-specific resources;
  const routeResources = {}export const preloadRoute = useCallback((...args) => {}if (typeof window === 'undefined') return;
  // Preload route-specific resources;
export const preloadCriticalResources = () => {/* TODO: Fix JSX expression */}
  })
  // Preload critical images
  const criticalImages = [
    '/images/hero-bg.webp',
    '/images/logo.webp',
    '/images/favicon.ico'
  ]
  })
}
export const preloadRoute = useCallback((...args) => {
  if (typeof window === 'undefined') return
  // Preload route-specific resources
  const routeResources = {}
export const preloadRoute = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Preload route-specific resources
  const routeResources = {}
    '/blog': ['/api/blog/posts', '/images/blog-hero.webp'],
    '/services': ['/api/services', '/images/services-hero.webp'],
    '/contact': ['/api/contact', '/images/contact-hero.webp']}
  }
  const resources = routeResources[route as keyof typeof routeResources]
      document.head.appendChild(link)}
    })
  }
}
  // Add loading="lazy" to images below the fold;
  })
  // Add intersection observer for lazy loading;
      entries.forEach(entry => {);
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset['src']) {}export const optimizeImages = useCallback((...args) => {}if (typeof window === 'undefined') return;
  // Add loading="lazy" to images below the fold;
  const images = document.querySelectorAll('img[data-lazy]');
  images.forEach(img => {)}img.setAttribute('loading', 'lazy')}
  })
  // Add intersection observer for lazy loading;
  if ('IntersectionObserver' in window) {}const imageObserver = new IntersectionObserver((entries) => {}entries.forEach(entry => {)}if (entry.isIntersecting) {}const img = entry.target as HTMLImageElement;
          if (img.dataset['src']) {}img['src'] = img.dataset['src']
            img.removeAttribute('data-src');
export const optimizeImages = useCallback((...args) => {
    if (typeof window === 'undefined') return
  // Add loading="lazy" to images below the fold
  const images = document.querySelectorAll('img[data-lazy]')
  images.forEach(img => {)
  }
    img.setAttribute('loading', 'lazy')}
  })
  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {)
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset['src']) {}
export const optimizeImages = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Add loading="lazy" to images below the fold
  const images = document.querySelectorAll('img[data-lazy]')
  images.forEach(img => {</div>
    img.setAttribute('loading', 'lazy'</div>
  })
  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {}
    const imageObserver = new IntersectionObserver((entries) => {}
      entries.forEach(entry => {</div>
        if (entry.isIntersecting) {}
          const img = entry.target as HTMLImageElement
          if (img.dataset['src']) {}
            img['src'] = img.dataset['src']
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)}
  ]
  criticalImages.forEach(src => {/* TODO: Fix JSX expression */,)})
  })
}
  const resources = routeResources[route as keyof typeof routeResources]
  if (resources) {/* TODO: Fix JSX expression */,}})
  }
}
        }
      })
    })
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => imageObserver.observe(img))
  }
}
  // Defer non-critical scripts;
  })
  // Load analytics after page load;
  if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', () => {}export const optimizeThirdPartyScripts = useCallback((...args) => {}if (typeof window === 'undefined') return;
  // Defer non-critical scripts;
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {)}script.setAttribute('defer', '')}
  })
  // Load analytics after page load;
  if (document.readyState === 'loading') {}document.addEventListener('DOMContentLoaded', () => {}loadAnalytics()}
export const optimizeThirdPartyScripts = useCallback((...args) => {
    if (typeof window === 'undefined') return
  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-defer]')
  scripts.forEach(script => {)
  }
    script.setAttribute('defer', '')}
  })
  // Load analytics after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {}
export const optimizeThirdPartyScripts = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-defer]')
  scripts.forEach(script => {</div>
    script.setAttribute('defer', ''</div>
  })
  // Load analytics after page load
  if (document.readyState === 'loading') {}
    document.addEventListener('DOMContentLoaded', () => {}
    })
  } else {}}loadAnalytics()}
  }
}
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
}
