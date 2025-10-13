<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac

interface PerformanceOptimizerProps {
  children: React.ReactNode;
=======
import React, { useEffect, useState } from 'react'

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization logic
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = '/fonts/inter.woff2';
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
    }
  }, []);

  return <>{children}</>;
};

<<<<<<< HEAD
export default PerformanceOptimizer;
=======
    // Lazy load non-critical components
    const lazyLoadComponents = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement
              element.classList.add('loaded')
              observer.unobserve(element)
            }
          })
        },
        { threshold: 0.1 }
      )

      const lazyElements = document.querySelectorAll('[data-lazy]')
      lazyElements.forEach(el => observer.observe(el))
    }

    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => setMetrics(prev => ({ ...prev, cls: metric.value })))
        onFID((metric) => setMetrics(prev => ({ ...prev, fid: metric.value })))
        onFCP((metric) => setMetrics(prev => ({ ...prev, fcp: metric.value })))
        onLCP((metric) => setMetrics(prev => ({ ...prev, lcp: metric.value })))
        onTTFB((metric) => setMetrics(prev => ({ ...prev, ttfb: metric.value })))
      }).catch(() => {
        // Silently fail if web-vitals is not available
      })
    }

      }

      window.addEventListener('scroll', updateScrollPosition, { passive: true })
      
      return () => window.removeEventListener('scroll', updateScrollPosition)
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    lazyLoadComponents()
    monitorWebVitals()
    const cleanupScroll = optimizeScroll()

    // Cleanup
    return () => {
      cleanupScroll()
    }
  }, [])

  // Log performance metrics in development
  useEffect(() => {
    if (process.env['NODE_ENV'] === 'development' && Object.values(metrics).some(val => val !== null)) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])

  return null
}

export default PerformanceOptimizer
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
interface PerformanceMetrics {
  lcp: number | null
  fid: number | null
  cls: number | null
  fcp: number | null
  ttfb: number | null
    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false
      
      const updateScrollPosition = () => {
        // Throttle scroll events
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll-dependent elements
            ticking = false
          })
          ticking = true
        }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
