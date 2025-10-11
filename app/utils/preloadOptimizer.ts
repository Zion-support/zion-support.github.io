<<<<<<< HEAD
/**;
 * Preload Optimizer;
 * Optimizes resource loading for better performance;
 */;
<<<<<<< HEAD
export const preloadCriticalResources = useCallback((...args) => {if (typeof window === 'undefined') return;
  // Preload critical fonts;}export const preloadCriticalResources = useCallback((...args) => {}if (typeof window === 'undefined') return;
  // Preload critical fonts;
  const fontPreloads = [
    'https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https: //fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap',
  ],
  fontPreloads.forEach(href => {)
    )}fontPreloads.forEach(href => {)}const link = document.createElement('link');
=======
export const preloadCriticalResources = useCallback((...args) => {;
    if (typeof window === 'undefined') return;
=======
/**
 * Preload Optimizer
 * Optimizes resource loading for better performance
 */
export const preloadCriticalResources = useCallback((...args) => {
    if (typeof window === 'undefined') return
>>>>>>> origin/main
  // Preload critical fonts
  }
export const preloadCriticalResources = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Preload critical fonts
  const fontPreloads = [
    'https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
<<<<<<< HEAD
  ]
  fontPreloads.forEach(href => {)
  fontPreloads.forEach(href => {</div>
=======
  ],
  fontPreloads.forEach()
    )
  }
<<<<<<< HEAD
  fontPreloads.forEach(href => {)}];];
    const link = document.createElement('link');
>>>>>>> origin/main
    link.rel = 'preload';
=======
  fontPreloads.forEach(href => {)}]
>>>>>>> origin/main
    const link = document.createElement('link')
    link.rel = 'preload'
>>>>>>> origin/main
    link.as = 'style',
    link.href = href
    link.crossOrigin = 'anonymous',
<<<<<<< HEAD
    document.head.appendChild(link</div>
=======
    document.head.appendChild(link)}
<<<<<<< HEAD
export const preloadCriticalResources = () => {/* TODO: Fix JSX expression */,}})
  // Preload critical images;
  const criticalImages = [
    '/images/hero-bg.webp',
    '/images/logo.webp',
    '/images/favicon.ico';
<<<<<<< HEAD
  ]
  criticalImages.forEach(src => {)
    )}criticalImages.forEach(src => {)}const link = document.createElement('link');
=======
  ];
  criticalImages.forEach(src => {
    )
  }
  criticalImages.forEach(src => {)}];];
    const link = document.createElement('link');
>>>>>>> origin/main
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link)}
  })
}
<<<<<<< HEAD
export const preloadRoute = useCallback((...args) => {if (typeof window === 'undefined') return;
=======
export const preloadRoute = useCallback((...args) => {;
  if (typeof window === 'undefined') return;
>>>>>>> origin/main
  // Preload route-specific resources;
  const routeResources = {}export const preloadRoute = useCallback((...args) => {}if (typeof window === 'undefined') return;
  // Preload route-specific resources;
<<<<<<< HEAD
  const routeResources = {}'/blog': ['/api/blog/posts', '/images/blog-hero.webp'],;
    '/services': ['/api/services', '/images/services-hero.webp'],;
=======
=======
>>>>>>> origin/main
export const preloadCriticalResources = () => {/* TODO: Fix JSX expression */}
  })
  // Preload critical images
  const criticalImages = [
    '/images/hero-bg.webp',
    '/images/logo.webp',
    '/images/favicon.ico'
  ]
<<<<<<< HEAD
  criticalImages.forEach(src => {)
  criticalImages.forEach(src => {</div>
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src;
    document.head.appendChild(link</div>
=======
  criticalImages.forEach()
    )
  }
  criticalImages.forEach(src => {)}]
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)}
>>>>>>> origin/main
  })
}
export const preloadRoute = useCallback((...args) => {
  if (typeof window === 'undefined') return
  // Preload route-specific resources
  const routeResources = {}
export const preloadRoute = useCallback((...args) => {}
  if (typeof window === 'undefined') return
  // Preload route-specific resources
>>>>>>> origin/main
  const routeResources = {}
    '/blog': ['/api/blog/posts', '/images/blog-hero.webp'],
    '/services': ['/api/services', '/images/services-hero.webp'],
>>>>>>> origin/main
    '/contact': ['/api/contact', '/images/contact-hero.webp']}
  }
  const resources = routeResources[route as keyof typeof routeResources]
<<<<<<< HEAD
  if (resources) {resources.forEach(resource => {)}if (resources) {}resources.forEach(resource => {)}const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
=======
  if (resources) {
    resources.forEach(resource => {)
  }
  if (resources) {}
    resources.forEach(resource => {</div>
      const link = document.createElement('link')
      link.rel = 'prefetch'
<<<<<<< HEAD
      link.href = resource;
      document.head.appendChild(link</div>
=======
      link.href = resource
>>>>>>> origin/main
      document.head.appendChild(link)}
>>>>>>> origin/main
    })
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export const optimizeImages = useCallback((...args) => {if (typeof window === 'undefined') return;
=======
export const optimizeImages = useCallback((...args) => {;
    if (typeof window === 'undefined') return;
>>>>>>> origin/main
  // Add loading="lazy" to images below the fold;
<<<<<<< HEAD
  const images = document.querySelectorAll('img[data-lazy]')
  images.forEach(img => {)
    img.setAttribute('loading', 'lazy'</div>
=======
  const images = document.querySelectorAll('img[data-lazy]');
  images.forEach(img => {)}img.setAttribute('loading', 'lazy')}
>>>>>>> origin/main
  })
  // Add intersection observer for lazy loading;
<<<<<<< HEAD
  if ('IntersectionObserver' in window) {const imageObserver = new IntersectionObserver((entries) => {
=======
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {;
>>>>>>> origin/main
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
=======
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
<<<<<<< HEAD
            imageObserver.unobserve(img</div>
  ];
  criticalImages.forEach(src => {/* TODO: Fix JSX expression */})
=======
>>>>>>> origin/main
            imageObserver.unobserve(img)}
  ]
  criticalImages.forEach(src => {/* TODO: Fix JSX expression */,)})
>>>>>>> origin/main
  })
}
<<<<<<< HEAD
export const preloadRoute = (rout);
  e: string) => {/* TODO: Fix JSX expression */,}}
=======
export const preloadRoute = (rout)
  e: string) => {/* TODO: Fix JSX expression */}
  }
>>>>>>> origin/main
  const resources = routeResources[route as keyof typeof routeResources]
  if (resources) {/* TODO: Fix JSX expression */,}})
  }
}
<<<<<<< HEAD
export const optimizeImages = () => {/* TODO: Fix JSX expression */,}})
  // Add intersection observer for lazy loading;
  if ('IntersectionObserver' in window) {/* TODO: Fix JSX expression */,}}
=======
export const optimizeImages = () => {/* TODO: Fix JSX expression */}
  })
  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {/* TODO: Fix JSX expression */}
          }
>>>>>>> origin/main
        }
      })
    })
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => imageObserver.observe(img))
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export const optimizeThirdPartyScripts = useCallback((...args) => {if (typeof window === 'undefined') return;
=======
export const optimizeThirdPartyScripts = useCallback((...args) => {;
    if (typeof window === 'undefined') return;
>>>>>>> origin/main
  // Defer non-critical scripts;
<<<<<<< HEAD
  const scripts = document.querySelectorAll('script[data-defer]')
  scripts.forEach(script => {)
    script.setAttribute('defer', ''</div>
=======
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {)}script.setAttribute('defer', '')}
>>>>>>> origin/main
  })
  // Load analytics after page load;
  if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', () => {}export const optimizeThirdPartyScripts = useCallback((...args) => {}if (typeof window === 'undefined') return;
  // Defer non-critical scripts;
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {)}script.setAttribute('defer', '')}
  })
  // Load analytics after page load;
  if (document.readyState === 'loading') {}document.addEventListener('DOMContentLoaded', () => {}loadAnalytics()}
=======
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
<<<<<<< HEAD
      loadAnalytics(</div>
    })
  } else {}
    loadAnalytics(</div>
=======
      loadAnalytics()}
>>>>>>> origin/main
    })
  } else {}}loadAnalytics()}
>>>>>>> origin/main
  }
}
<<<<<<< HEAD
const loadAnalytics = useCallback((...args) => {// Load Google Analytics after page load;}const loadAnalytics = useCallback((...args) => {}// Load Google Analytics after page load;
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript['src'] = 'https: //www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
  document.head.appendChild(gaScript)}
export const optimizeThirdPartyScripts = () => {/* TODO: Fix JSX expression */,}})
  // Load analytics after page load;
  if (document.readyState === 'loading') {/* TODO: Fix JSX expression */,}})
  } else {/* TODO: Fix JSX expression */,}}}
=======
const loadAnalytics = useCallback((...args) => {
    // Load Google Analytics after page load
  }
const loadAnalytics = useCallback((...args) => {}
  // Load Google Analytics after page load
  const gaScript = document.createElement('script')
  gaScript.async = true
  gaScript['src'] = 'https: //www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
  document.head.appendChild(gaScript</div>
export const optimizeThirdPartyScripts = () => {/* TODO: Fix JSX expression */}
  })
  // Load analytics after page load
  if (document.readyState === 'loading') {/* TODO: Fix JSX expression */}
    })
  } else {/* TODO: Fix JSX expression */}
  }
>>>>>>> origin/main
}
<<<<<<< HEAD
const loadAnalytics = () => {/* TODO: Fix JSX expression */,}}
=======
const loadAnalytics = () => {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
}
>>>>>>> origin/main
=======
}
>>>>>>> origin/main
