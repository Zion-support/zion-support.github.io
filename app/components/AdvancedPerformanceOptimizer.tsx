'use client';
import React from 'react';
import React, { useEffect, useCallback, useState } from 'react';
interface PerformanceMetrics {


  lcp: number,
<<<<<<< HEAD
    fid: number,
  cls: number,
    fcp: number,
  ttfb: number}
interface AdvancedPerformanceOptimizerProps {

  enableWebVitals?: boolean;
  enableAdvancedCaching?: boolean;
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableServiceWorker?: boolean;
}
const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({,

=======
    fid: number
  cl,
  s: number,
    fcp: number}
  ttfb: number};
interface AdvancedPerformanceOptimizerProps {
  enableWebVitals?: boolean
  enableAdvancedCaching?: boolean
  enableImageOptimization?: boolean
  enablePreloading?: boolean
  enableServiceWorker?: boolean
const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  enableWebVitals = true
  enableAdvancedCaching = true
  enableImageOptimization = true
  enablePreloading = true
  enableServiceWorker = true}
}) => {</AdvancedPerformanceOptimizerProps>
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
<<<<<<< HEAD
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0})
  // Web Vitals monitoring;

const measureWebVitals = useCallback(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      // Measure Largest Contentful Paint;

const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
=======
    fid: 0
    cl,
  s: 0,
    fcp: 0
    ttf,
  b: 0})
  // Web Vitals monitoring
  const measureWebVitals = useCallback(() => {
    if(enableWebVitals && typeof, window !== 'undefined') {
      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
        setPerformanceMetrics(prev => ({
          ...prev)
          lcp: lastEntry.renderTime || lastEntry.loadTime || 0})
      })
<<<<<<< HEAD
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      // Measure First Input Delay;

const fidObserver = new PerformanceObserver((list) => {
  const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {,
=======
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
  const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
          const fid = (entry as any).processingStart - entry.startTime
          setPerformanceMetrics(prev => ({
            ...prev
            fid)
})
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] });
      // Measure Cumulative Layout Shift
<<<<<<< HEAD
      let clsValue = 0;

const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {,
=======
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
          if (!(entry as any).hadRecentInput) {
            clsValue += entry.value
            setPerformanceMetrics(prev => ({
              ...prev
              cl,)
  s: clsValue})
        })
      })
<<<<<<< HEAD
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      // Measure First Contentful Paint;

const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
=======
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
        entries.forEach(entry => {
          setPerformanceMetrics(prev => ({
            ...prev)
            fcp: entry.startTime})
        })
      })
      fcpObserver.observe({ entryTypes: ['paint'] });
  }, [enableWebVitals])
<<<<<<< HEAD
  // Advanced caching strategies;

const setupAdvancedCaching = useCallback(() => {
    if (typeof window === 'undefined') return
    // Service Worker registration
    if ('serviceWorker' in navigator && enableServiceWorker) {
=======
  // Advanced caching strategies
  const setupAdvancedCaching = useCallback(() => {
    if (typeof window === 'undefined') return(// Service, Worker registration, if ('serviceWorker' in, navigator && enableServiceWorker) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
      navigator.serviceWorker.register('/sw.js');
        .then((registration) => {
          // eslint-disable-next-line no-console
    console.log('Service Worker registered:', registration);
        })
        .catch((registrationError) => {
          // eslint-disable-next-line no-console
    console.error('Service Worker registration failed:', registrationError);
        })
<<<<<<< HEAD

    }
    // Memory-based caching for API responses;

const cache = new Map()

=======
    // Memory-based caching for API responses
    const cache = new Map();
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    const originalFetch = window.fetch
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : input.url
      const cacheKey = `${url}-${JSON.stringify(init)}`
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
      const response = await originalFetch(input, init);
      if(response.ok) {
        cache.set(cacheKey, response.clone();
      return response
  }, [enableServiceWorker])
<<<<<<< HEAD
  // Image optimization;

const optimizeImages = useCallback(() => {
  if (typeof window === 'undefined') return;

const images = document.querySelectorAll('img')
    images.forEach(img => {
      if (!img.loading) {
=======
  // Image optimization
  const optimizeImages = useCallback(() => {
  if (typeof window === 'undefined') return
    const images = document.querySelectorAll('img')
    images.forEach(img => {)
      if(!img.loading) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
        img.loading = 'lazy'
      if(!img.decoding) {
  img.decoding = 'async'
    })
  }, [])
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
  if (typeof window === 'undefined') return
    const criticalResources = [
  '/fonts/inter-var.woff2',
    '/css/critical.css'
  ]
    criticalResources.forEach(resource => {)
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.woff2') ? 'font' : 'style'
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous'
      document.head.appendChild(link);
    })
  }, [])
  // Performance monitoring and reporting
  const reportPerformanceMetrics = useCallback(() => {
    if (typeof window === 'undefined') return
    // Report to analytics
    if('gtag' in, window) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
    event_label: 'Core Web Vitals',)
        value: Math.round(performanceMetrics.lcp),
<<<<<<< HEAD
    custom_map: {,
          fcp: Math.round(performanceMetrics.fcp),
    lcp: Math.round(performanceMetrics.lcp),
          fid: Math.round(performanceMetrics.fid),
=======
    custom_map: {
          fc,
  p: Math.round(performanceMetrics.fcp),
    lcp: Math.round(performanceMetrics.lcp)
          fi,
  d: Math.round(performanceMetrics.fid),
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    cls: Math.round(performanceMetrics.cls * 1000) / 1000}
      })
  }, [performanceMetrics])
  useEffect(() => {
    if(enableAdvancedCaching) {
      setupAdvancedCaching();
    if(enableImageOptimization) {
      optimizeImages();
    if(enablePreloading) {
      preloadCriticalResources();
    if(enableWebVitals) {
      measureWebVitals();
  }, [enableAdvancedCaching, enableImageOptimization, enablePreloading, enableWebVitals, setupAdvancedCaching, optimizeImages, preloadCriticalResources, measureWebVitals])
  useEffect(() => {
    if(enableWebVitals && performanceMetrics.lcp > 0) {
      reportPerformanceMetrics();
  }, [enableWebVitals, performanceMetrics, reportPerformanceMetrics])
  return null
<<<<<<< HEAD

}


export default AdvancedPerformanceOptimizer
=======
export default AdvancedPerformanceOptimizer</PerformanceMetrics>
  );
}}}}}}}}}}}}}}}
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
