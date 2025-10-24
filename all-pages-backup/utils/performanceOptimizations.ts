<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
export const debounce = <T extends (...args: any[]) => any>(;
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {;
  let timeout: NodeJS.Timeout
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
export const throttle = <T extends (...args: any[]) => any>(;
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {;
  let inThrottle: boolean
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
export const useIntersectionObserver = (;
  callback: (entries: IntersectionObserverEntry[]) => void,
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
            threshold: 0.1,
  rootMargin: '50px'
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
        lcp,
  ttfb: navigation?.responseStart - navigation?.requestStart
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
          usedJSHeapSize: memory.usedJSHeapSize,
  totalJSHeapSize: memory.totalJSHeapSize,
  jsHeapSizeLimit: memory.jsHeapSizeLimit
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
const performanceOptimizations = {;
<<<<<<< HEAD:all-pages-backup/utils/performanceOptimizations.ts
};
;
export default performanceOptimizations
=======
import { useCallback, useMemo, useState, useEffect } from 'react'
'use client'
      typeof window !== 'undefined'
  "rootMargin": '50px',
  const [imageSrc, setImageSrc] = useState(placeholder || ';
    if (typeof window === 'undefined'
      const navigation = performance.getEntriesByType('navigation';
      const paint = performance.getEntriesByType('paint';
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint';
      const lcp = performance.getEntriesByType('largest-contentful-paint';
    if (document.readyState === 'complete'
      window.addEventListener('load'
    if ('web-vitals'
      import('web-vitals'
      window.removeEventListener('load'
    if (typeof window === 'undefined' || !('memory'
  if (typeof window === 'undefined'
  const link = document.createElement('link'
  link.rel = 'preload'
  if (typeof window === 'undefined'
  preloadResource('/fonts/inter-var.woff2', 'font'
  preloadResource('/fonts/inter-var.woff', 'font'
  preloadResource('/images/hero-bg.webp', 'image'
  preloadResource('/images/logo.svg', 'image'
  preloadResource('/styles/critical.css', 'style'
    if (typeof window === 'undefined'
      const resources = performance.getEntriesByType('resource';
        if (resource.name.includes('.js'
        } else if (resource.name.includes('.css'
    if (document.readyState === 'complete'
      window.addEventListener('load';
      window.removeEventListener('load'
>>>>>>> origin/main
