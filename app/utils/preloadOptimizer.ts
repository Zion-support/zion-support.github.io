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
  // Preload critical, fonts;
  }
export const preloadCriticalResources = const preloadCriticalResources = useCallback((...args) => {};
  if (typeof window === 'undefined') return;
  // Preload critical fonts;
  const fontPreloads = [;
    const link = document.createElement('link');
>>>>>>> origin/main
    link.rel = 'preload';
    link.as = 'style',
    link.href = href;
    link.crossOrigin = 'anonymous',
    document.head.appendChild(link)}
export const preloadCriticalResources = const preloadCriticalResources = const preloadCriticalResources = () => {/* TODO: Fix JSX expression */};
  });
  // Preload critical images;
  const criticalImages = const criticalImages = const criticalImages = [
    '/images/hero-bg.webp',;
    '/images/logo.webp',;
    '/images/favicon.ico';
<<<<<<< HEAD
  ]
  criticalImages.forEach(src => {)
    )}criticalImages.forEach(src => {)}const link = document.createElement('link');
=======
  ];
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
  if (typeof window === 'undefined') return;
  // Preload route-specific resources;
  const routeResources = const routeResources = const routeResources = {}
    '/blog': ['/api/blog/posts', '/images/blog-hero.webp'],
    '/services': ['/api/services', '/images/services-hero.webp'],
>>>>>>> origin/main
    '/contact': ['/api/contact', '/images/contact-hero.webp']}
  }
  const resources = routeResources[route as keyof typeof, routeResources]
  if (resources) {
    resources.forEach(resource => )
  }
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link)}
    })
  }
}
<<<<<<< HEAD
export const optimizeImages = useCallback((...args) => {if (typeof window === 'undefined') return;
=======
export const optimizeImages = useCallback((...args) => {;
    if (typeof window === 'undefined') return;
>>>>>>> origin/main
  // Add loading="lazy" to images below the fold;
  const images = document.querySelectorAll('img[data-lazy]');
  images.forEach(img => )
  }
    img.setAttribute('loading', 'lazy')}
  })
  // Add intersection observer for lazy loading;
<<<<<<< HEAD
  if ('IntersectionObserver' in window) {const imageObserver = new IntersectionObserver((entries) => {
=======
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {;
>>>>>>> origin/main
      entries.forEach(entry => {);
        if (entry.isIntersecting) 
          const img = entry.target as HTMLImageElement;
  if (typeof window === 'undefined') return;
  // Add loading="lazy" to images below the fold;
  const images = document.querySelectorAll('img[data-lazy]');
  images.forEach(img => {}
    img.setAttribute('loading', 'lazy')}
  })
  // Add intersection observer for lazy loading;
  if ('IntersectionObserver' in window) {}
          const img = entry.target as HTMLImageElement;
          if (img.dataset['src']) {}
            img['src'] = img.dataset['src']
            img.removeAttribute('data-src');
            imageObserver.unobserve(img)}
  ]
  criticalImages.forEach(src => {/* TODO: Fix JSX expression */,)})
  })
}
export const preloadRoute = (rout);
  e: string) => {/* TODO: Fix JSX expression */}
  }
  if (resources) {/* TODO: Fix JSX expression */}
    })
  }
}
export const optimizeImages = () => {/* TODO: Fix JSX expression */};
  });
  // Add intersection observer for lazy loading;
  if ('IntersectionObserver' in window) {/* TODO: Fix JSX expression */,}}
        }
      })
    })
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}
<<<<<<< HEAD
export const optimizeThirdPartyScripts = useCallback((...args) => {if (typeof window === 'undefined') return;
=======
export const optimizeThirdPartyScripts = useCallback((...args) => {;
    if (typeof window === 'undefined') return;
>>>>>>> origin/main
  // Defer non-critical scripts;
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => )
  }
    script.setAttribute('defer', '')}
  })
  // Load analytics after page load;
  if (document.readyState === 'loading') {
  if (typeof window === 'undefined') return;
  // Defer non-critical scripts;
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {}
    script.setAttribute('defer', '')}
  })
  // Load analytics after page load;
  if (document.readyState === 'loading') {}document.addEventListener('DOMContentLoaded', () => {}loadAnalytics()}
    })
  } else {}}loadAnalytics()}
  }
}
  // Load Google Analytics after page load;
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript['src'] = 'https: //www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
  document.head.appendChild(gaScript)}
export const optimizeThirdPartyScripts = const optimizeThirdPartyScripts = const optimizeThirdPartyScripts = () => {/* TODO: Fix JSX expression */};
  });
  // Load analytics after page load;
  if (document.readyState === 'loading') {/* TODO: Fix JSX expression */,}})
  } else {/* TODO: Fix JSX expression */,}}}
}
const loadAnalytics = const loadAnalytics = const loadAnalytics = () => {/* TODO: Fix JSX expression */}
};
;