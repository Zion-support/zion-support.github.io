import { useEffect, useCallback, useRef } from 'react'
    if (!enableLazyLoading || typeof window === 'undefined''',
    const images = document.querySelectorAll('img[data-src]''',
            const src = img.getAttribute('data-src'
              img.removeAttribute('data-src'
              img.classList.add('loaded'
        "rootMargin": '50px 0px''"'",
    if (!enablePreloading || typeof window === 'undefined''',
      '/fonts/inter.woff2'
      '/images/hero-bg.jpg'
      '/images/logo.svg'
      const link = document.createElement('link'
      link.rel = 'preload''',
      if (resource.endsWith('.woff2'
        link.as = 'font''',
        link.type = 'font/woff2''',
        link.crossOrigin = 'anonymous''',
      } else if (resource.endsWith('.jpg') || resource.endsWith('.png'
        link.as = 'image''',
    if (!enableImageOptimization || typeof window === 'undefined'',''',
    const images = document.querySelectorAll('img'