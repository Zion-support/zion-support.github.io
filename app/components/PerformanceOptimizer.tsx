'use client'
import React, { useEffect, useState } from 'react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  bundleSize: number
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isOptimized, setIsOptimized] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart
      const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
      
      // Estimate memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0
      
      // Estimate bundle size (simplified)
      const bundleSize = document.querySelectorAll('script').length * 50 // Rough estimate
      
      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        bundleSize
      })
    }

    // Run after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    // Optimize images
    optimizeImages()
    
    // Preload critical resources
    preloadCriticalResources()
    
    // Enable service worker
    enableServiceWorker()

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  const optimizeImages = () => {
    if (typeof window === 'undefined') return
    
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      // Add  for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy')
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async')
      }
    })
  }

  const preloadCriticalResources = () => {if (typeof window === 'undefined') return
    
    // Preload critical CSS
    const criticalCSS = document.createElement('link')
    criticalCSS.rel = 'preload'
    criticalCSS.href = '/globals.css'
    criticalCSS.as = 'style'
    document.head.appendChild(criticalCSS)

    // Preload critical fonts
    const fontPreload = document.createElement('link'),fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    fontPreload.as = 'style'
    document.head.appendChild(fontPreload)}

  const enableServiceWorker = () => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return
    
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        console.log('Service Worker registered successfully')
        setIsOptimized(true)
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error)
      })
  }

  if (!metrics) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm max-w-xs">
      <h3 className="font-semibold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
        <div>Render Time: {metrics.renderTime.toFixed(2)}ms</div>
        <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
        <div>Bundle Size: {metrics.bundleSize}KB</div>
        {isOptimized && (
          <div className="text-green-400"}>{✓ Optimized}</div>
    </div></div>
  )
}

export default PerformanceOptimizer;)