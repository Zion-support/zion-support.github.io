'use client';
import React, { useEffect, useCallback, useState } from 'react';
interface PerformanceMetrics {
  lcp: number,
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
  enableWebVitals = true
  enableAdvancedCaching = true
  enableImageOptimization = true
  enablePreloading = true
  enableServiceWorker = true}
}) => {</AdvancedPerformanceOptimizerProps>
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0
    cl,
  s: 0,
    fcp: 0
    ttf,
  b: 0})
  // Web Vitals monitoring
  const measureWebVitals = useCallback(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
        setPerformanceMetrics(prev => ({
          ...prev)
          lcp: lastEntry.renderTime || lastEntry.loadTime || 0})
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
  const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          const fid = (entry as any).processingStart - entry.startTime
          setPerformanceMetrics(prev => ({
            ...prev
            fid)
})
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      // Measure Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += entry.value
            setPerformanceMetrics(prev => ({
              ...prev
              cl,)
  s: clsValue})
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          setPerformanceMetrics(prev => ({
            ...prev)
            fcp: entry.startTime})
        })
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
  }, [enableWebVitals])
  // Advanced caching strategies
  const setupAdvancedCaching = useCallback(() => {
    if (typeof window === 'undefined') return (
    // Service Worker registration
    if ('serviceWorker' in navigator && enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // eslint-disable-next-line no-console
    console.log('Service Worker registered:', registration)
        })
        .catch((registrationError) => {
          // eslint-disable-next-line no-console
    console.error('Service Worker registration failed:', registrationError)
        })
    // Memory-based caching for API responses
    const cache = new Map()
    const originalFetch = window.fetch
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : input.url
      const cacheKey = `${url}-${JSON.stringify(init)}`
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey)
      const response = await originalFetch(input, init)
      if (response.ok) {
        cache.set(cacheKey, response.clone()
      return response
  }, [enableServiceWorker])
  // Image optimization
  const optimizeImages = useCallback(() => {
  if (typeof window === 'undefined') return
    const images = document.querySelectorAll('img')
    images.forEach(img => {)
      if (!img.loading) {
        img.loading = 'lazy'
      if (!img.decoding) {
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
      document.head.appendChild(link)
    })
  }, [])
  // Performance monitoring and reporting
  const reportPerformanceMetrics = useCallback(() => {
    if (typeof window === 'undefined') return
    // Report to analytics
    if ('gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
    event_label: 'Core Web Vitals',)
        value: Math.round(performanceMetrics.lcp),
    custom_map: {
          fc,
  p: Math.round(performanceMetrics.fcp),
    lcp: Math.round(performanceMetrics.lcp)
          fi,
  d: Math.round(performanceMetrics.fid),
    cls: Math.round(performanceMetrics.cls * 1000) / 1000}
      })
  }, [performanceMetrics])
  useEffect(() => {
    if (enableAdvancedCaching) {
      setupAdvancedCaching()
    if (enableImageOptimization) {
      optimizeImages()
    if (enablePreloading) {
      preloadCriticalResources()
    if (enableWebVitals) {
      measureWebVitals()
  }, [enableAdvancedCaching, enableImageOptimization, enablePreloading, enableWebVitals, setupAdvancedCaching, optimizeImages, preloadCriticalResources, measureWebVitals])
  useEffect(() => {
    if (enableWebVitals && performanceMetrics.lcp > 0) {
      reportPerformanceMetrics()
  }, [enableWebVitals, performanceMetrics, reportPerformanceMetrics])
  return null
export default AdvancedPerformanceOptimizer</PerformanceMetrics>
  );