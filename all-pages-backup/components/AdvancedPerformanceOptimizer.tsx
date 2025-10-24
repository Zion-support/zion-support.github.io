'use client'
import React, { useEffect, useState, useCallback } from 'react'
<<<<<<< HEAD

interface AdvancedPerformanceOptimizerProps {
  enableAdvancedCaching?: boolean
  enableImageOptimization?: boolean
  enableLazyLoading?: boolean
  enablePreloading?: boolean
  enableCodeSplitting?: boolean
  enableResourceHints?: boolean
  enableServiceWorker?: boolean
  enableCriticalCSS?: boolean
  enableWebVitals?: boolean
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableAdvancedCaching = true
  enableImageOptimization = true
  enableLazyLoading = true
  enablePreloading = true
  enableCodeSplitting = true
  enableResourceHints = true
  enableServiceWorker = true
  enableCriticalCSS = true
  enableWebVitals = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fcp: 0,
  lcp: 0,
  fid: 0,
    cls: 0,
import React, { useEffect, useCallback, useState } from 'react';

interface PerformanceMetrics {
  lcp: number,
  fid: number,
  cls: number,
  fcp: number,
  ttfb: number
}

interface AdvancedPerformanceOptimizerProps {
  enableWebVitals?: boolean
  enableAdvancedCaching?: boolean
  enableImageOptimization?: boolean
  enablePreloading?: boolean
  enableServiceWorker?: boolean
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({;
  enableWebVitals = true
  enableAdvancedCaching = true
  enableImageOptimization = true
  enablePreloading = true
  enableServiceWorker = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({;
    lcp: 0,
  fid: 0,
  cls: 0,
  fcp: 0,
  ttfb: 0
  })

  // Web Vitals monitoring
  useEffect(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      const measureWebVitals = () => {
        // First Contentful Paint
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setPerformanceMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
          }
        }).observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setPerformanceMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }))
        }).observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fidEntry = entry as any
            if (fidEntry.processingStart) {
              setPerformanceMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))
            }
          }
        }).observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        let clsValue = 0
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              setPerformanceMetrics(prev => ({ ...prev, cls: clsValue }))
            }
          }
        }).observe({ entryTypes: ['layout-shift'] })
      }

      measureWebVitals();
  const measureWebVitals = useCallback(() => {;
    if (enableWebVitals && typeof window !== 'undefined') {
      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
        setPerformanceMetrics(prev => ({
          ...prev,
  lcp: lastEntry.renderTime || lastEntry.loadTime || 0
        }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          const fid = (entry as any).processingStart - entry.startTime
          setPerformanceMetrics(prev => ({
            ...prev
            fid
          }))
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Measure Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += entry.value
            setPerformanceMetrics(prev => ({
              ...prev,
  cls: clsValue
            }))
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        entries.forEach(entry => {
          setPerformanceMetrics(prev => ({
            ...prev,
  fcp: entry.startTime
          }))
        })
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
    }
  }, [enableWebVitals])

  // Advanced caching strategies
  const setupAdvancedCaching = useCallback(() => {
    if (typeof window === 'undefined') return

    // Service Worker for advanced caching
    if ('serviceWorker' in navigator && enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
<<<<<<< HEAD:app/components/AdvancedPerformanceOptimizer.tsx
          // eslint-disable-next-line no-console
=======
          // Service Worker registered successfully
        })
        .catch((registrationError) => {
          // Service Worker registration failed
  const setupAdvancedCaching = useCallback(() => {;
    if (typeof window === 'undefined') return

    // Service Worker registration
    if ('serviceWorker' in navigator && enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
>>>>>>> 56bbc73ed75f402be34887e1030b3e66772373eb:all-pages-backup/components/AdvancedPerformanceOptimizer.tsx
          console.log('Service Worker registered:', registration)
        })
        .catch((registrationError) => {
          // eslint-disable-next-line no-console
          console.error('Service Worker registration failed:', registrationError)
        })
    }

    // Memory-based caching for API responses
    const cache = new Map()
    const originalFetch = window.fetch
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : (input as Request).url
      const cacheKey = `${url}_${JSON.stringify(init)}`

      if (cache.has(cacheKey)) {
        return cache.get(cacheKey)
      }

      const response = await originalFetch(input, init)
      if (response.ok) {
        cache.set(cacheKey, response.clone())
      }
;
    const cache = new Map();
    const originalFetch = window.fetch
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : input.url
      const cacheKey = `${url}-${JSON.stringify(init)}`;
      
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey)
      }
      
      const response = await originalFetch(input, init);
      if (response.ok) {
        cache.set(cacheKey, response.clone())
      }
      
      return response
    }
  }, [enableServiceWorker])

  // Image optimization with WebP and lazy loading
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return

    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.dataset.src
          if (src) {
            // Check for WebP support
            const canvas = document.createElement('canvas')
            const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0

            if (webpSupported && !src.includes('.webp')) {
              img.src = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
            } else {
              img.src = src
            }

            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }, [])

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
  // Image optimization
  const optimizeImages = useCallback(() => {;
    if (typeof window === 'undefined') return

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
=======
import React, { useEffect, useCallback, useState } from 'react'
    if (enableWebVitals && typeof window !== 'undefined'
            if (entry.name === 'first-contentful-paint'
        }).observe({ "entryTypes": ['paint',
        }).observe({ "entryTypes": ['largest-contentful-paint',
        }).observe({ "entryTypes": ['first-input',
        }).observe({ "entryTypes": ['layout-shift',
    if (enableWebVitals && typeof window !== 'undefined'
      lcpObserver.observe({ "entryTypes": ['largest-contentful-paint');
      fidObserver.observe({ "entryTypes": ['first-input');
      clsObserver.observe({ "entryTypes": ['layout-shift');
      fcpObserver.observe({ "entryTypes": ['paint');
    if (typeof window === 'undefined'
    if ('serviceWorker'
      navigator.serviceWorker.register('/sw.js'
    if (typeof window === 'undefined'
    if ('serviceWorker'
      navigator.serviceWorker.register('/sw.js'
          console.log('Service Worker "registered": ');
          console.error('Service Worker registration "failed": ');
      const url = typeof input === 'string';
      const url = typeof input === 'string';
    if (typeof window === 'undefined'
    const images = document.querySelectorAll('img[data-src]';
            const canvas = document.createElement('canvas';
            const webpSupported = canvas.toDataURL('image/webp').indexOf('"data": image/webp',;
            if (webpSupported && !src.includes('.webp'
              img.src = src.replace(/\.(jpg|jpeg|png)$/i, '.webp'
            img.classList.remove('lazy'
    if (typeof window === 'undefined'
    const images = document.querySelectorAll('img'
>>>>>>> origin/main
        img.loading = 'lazy'
        img.decoding = 'async'
    if (typeof window === 'undefined'
      '/fonts/inter-var.woff2'
      '/css/critical.css'
      '/js/main.js'
      const link = document.createElement('link'
      link.rel = 'preload'
      link.as = resource.endsWith('.css') ? 'style' : 'script'
    if (typeof window === 'undefined'
      { "rel": 'dns-prefetch', "href": 'https://fonts.googleapis.com',
      { "rel": 'dns-prefetch', "href": 'https://fonts.gstatic.com',
      { "rel": 'preconnect', "href": 'https://www.googletagmanager.com',
      { "rel": 'preconnect', "href": 'https://www.google-analytics.com',
      const link = document.createElement('link';
      if (hint.rel === 'preconnect'
      '/css/critical.css'
      const link = document.createElement('link'
      link.rel = 'preload'
      link.as = resource.endsWith('.woff2') ? 'font' : 'style'
      if (resource.endsWith('.woff2'
        link.crossOrigin = 'anonymous'
    if (typeof window === 'undefined'}
    const style = document.createElement('style';
    if (typeof window === 'undefined'
    if ('gtag';
      (window as any).gtag('event', 'web_vitals'