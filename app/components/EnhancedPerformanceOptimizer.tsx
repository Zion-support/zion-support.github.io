'use client'
import React, { useEffect, useCallback, useState } from 'react'
import { Phone, Mail, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react'
interface PerformanceMetrics {
  lcp: number | null
  fid: number | null
  cls: number | null
  fcp: number | null
  ttfb: number | null
  tbt: number | null
}

interface PerformanceOptimizerProps {
  children: React.ReactNode
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    tbt: null
  })
  const [isOptimizing, setIsOptimizing] = useState(false)
  // Performance optimization functions
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy')
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async')
      }
    })
  }, [])
  const optimizeFonts = useCallback(() => {
    // Preload critical fonts
    const fontPreload = document.createElement('link')
    fontPreload.rel = 'preload'
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    fontPreload.as = 'style'
    document.head.appendChild(fontPreload)
  }, [])
  const optimizeCSS = useCallback(() => {
    // Remove unused CSS
    const styleSheets = Array.from(document.styleSheets)
    styleSheets.forEach((sheet) => {
      try {
        const rules = Array.from(sheet.cssRules)
        rules.forEach((rule) => {
          if (rule instanceof CSSStyleRule) {
            const elements = document.querySelectorAll(rule.selectorText)
            if (elements.length === 0) {
              sheet.deleteRule(rule)
            }
          }
        })
      } catch (e) {
        // Cross-origin stylesheets can't be accessed
      }
    })
  }, [])
  const optimizeJavaScript = useCallback(() => {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[src]')
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '')
      }
    })
  }, [])
  const measurePerformance = useCallback(() => {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')
      setMetrics({
        lcp: null, // Would need to be measured with PerformanceObserver
        fid: null, // Would need to be measured with PerformanceObserver
        cls: null, // Would need to be measured with PerformanceObserver
        fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || null,
        ttfb: navigation.responseStart - navigation.requestStart,
        tbt: null // Would need to be measured with PerformanceObserver
      })
    }
  }, [])
  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true)
    try {
      optimizeImages()
      optimizeFonts()
      optimizeCSS()
      optimizeJavaScript()
      // Wait for optimizations to complete
      await new Promise(resolve => setTimeout(resolve, 100))
      measurePerformance()
    } catch (error) {
      console.error('Performance optimization error:', error)
    } finally {
      setIsOptimizing(false)
    }
  }, [optimizeImages, optimizeFonts, optimizeCSS, optimizeJavaScript, measurePerformance])
  useEffect(() => {
    // Run initial optimizations
    runOptimizations()
    // Set up performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
        }
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
        }
        if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
        }
      }
    })
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Some browsers don't support all entry types
    }

    return () => {
      observer.disconnect()
    }
  }, [runOptimizations])
  return (
    <div className="performance-optimizer">
      {children}
      
      {/* Performance Metrics Display (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs max-w-xs">
          <h3 className="font-bold mb-2">Performance Metrics
          <div className="space-y-1">
            {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}
            {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
            {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
            {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>}
            {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}
          {isOptimizing && <div className="text-cyan-400 mt-2">Optimizing...</div>}
      )}
  )
}
export default EnhancedPerformanceOptimizer