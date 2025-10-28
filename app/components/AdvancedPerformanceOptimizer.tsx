'use client';


import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode
  enableOptimizations?: boolean
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableOptimizations = true
}) => {
  const [isOptimized, setIsOptimized] = useState(false)
  const [optimizationMetrics, setOptimizationMetrics] = useState({
    imagesOptimized: 0,
      scriptsOptimized: 0,
      cssOptimized: 0,
      totalSavings: 0
  })
  const optimizeImages = useCallback((): number => {
    if (typeof window === 'undefined') return 0
    const images = document.querySelectorAll('img')
    let optimizedCount = 0
    images.forEach((img) => {
      // Add lazy loading if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy')
        optimizedCount++
      }

      // Add decoding attribute for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async')
        optimizedCount++
      }
    })
    return optimizedCount
  }, [])
  const optimizeScripts = useCallback((): number => {
    if (typeof window === 'undefined') return 0
    const scripts = document.querySelectorAll('script[src]')
    let optimizedCount = 0
    scripts.forEach((script) => {
      // Add defer attribute if not already present
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '')
        optimizedCount++
      }
    })
    return optimizedCount
  }, [])
  const optimizeCSS = useCallback((): number => {
    if (typeof window === 'undefined') return 0
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    let optimizedCount = 0
    stylesheets.forEach((link) => {
      // Add media attribute for non-critical CSS
      if (!link.hasAttribute('media') && !link.hasAttribute('data-critical')) {
        link.setAttribute('media', 'print')
        link.setAttribute('onload', "this.media='all'")
        optimizedCount++
      }
    })
    return optimizedCount
  }, [])
  const runOptimizations = useCallback(() => {
    if (!enableOptimizations) return
    const imagesOptimized = optimizeImages() || 0
    const scriptsOptimized = optimizeScripts() || 0
    const cssOptimized = optimizeCSS() || 0
    setOptimizationMetrics({
      imagesOptimized,
      scriptsOptimized,
      cssOptimized,
      totalSavings: imagesOptimized + scriptsOptimized + cssOptimized
    });
    setIsOptimized(true)
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS])
  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(runOptimizations, 100)
    return () => clearTimeout(timer)
  }, [runOptimizations])
  // Add performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming
          if (navEntry.loadEventEnd - navEntry.loadEventStart > 1000) {
            console.warn('Page load time exceeded 1 second')
          }
        }
      })
    })
    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })
    return () => observer.disconnect()
  }, [])
  return (
    <div className="performance-optimized" data-optimized={isOptimized}>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div
          className="optimization-debug"
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '12px',
            zIndex: 1000
          }}
        >
          <div>Images: {optimizationMetrics.imagesOptimized}</div>
          <div>Scripts: {optimizationMetrics.scriptsOptimized}</div>
          <div>CSS: {optimizationMetrics.cssOptimized}</div>
          <div>Total: {optimizationMetrics.totalSavings}</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;
