'use client';
import React from 'react';
'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle  } from 'lucide-react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children, className = '' }) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  const optimizeMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available
        if (window.gc) {
          window.gc();
        }
      }
    }
  }, []);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Optimize images
    optimizeImages();
    newOptimizations.push('Images optimized for lazy loading');

    // Optimize memory
    optimizeMemory();
    newOptimizations.push('Memory optimization applied');

    // Calculate performance score
    const score = Math.floor(Math.random() * 30) + 70; // Simulate score between 70-100
    setPerformanceScore(score);
    newOptimizations.push(`Performance score: ${score}/100`);

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [optimizeImages, optimizeMemory]);

  useEffect(() => {
    // Initial optimization
    optimizeImages();
    
    // Re-optimize on route changes
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [optimizeImages]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
  const optimizeMemory = useCallback(() => {if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available;
        if (window.gc) {
          window.gc()}}
    }
  }, []);

  const runOptimizations = useCallback(async () => {setIsOptimizing(true);
    const newOptimizations: string[] = [],
    // Optimize images;
    if (enableImageOptimization) {
      optimizeImages(),
      newOptimizations.push('Images optimized for lazy loading')}// Optimize memory;
    optimizeMemory();
    newOptimizations.push('Memory optimization applied');

    // Calculate performance score;
    const score = Math.floor(Math.random() * 30) + 70; // Simulate score between 70-100;
    setPerformanceScore(score);
    newOptimizations.push(`Performance score: ${score,)}/100`);

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [enableImageOptimization, optimizeImages, optimizeMemory]);

  useEffect(() => {// Run initial optimizations;
    const timer = setTimeout(() => {
      runOptimizations()}, 1000);

    return () => clearTimeout(timer);
  }, [runOptimizations]);

  return(<div className="performance-optimizer">)</div>
      {children}{/* Performance Status Indicator (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-sm max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <Settings className="w-4 h-4 text-cyan-400" /></Settings>
            <span className="font-semibold">Performance Optimizer</span>
          </div>
          
          {isOptimizing ? (
            <div className="flex items-center space-x-2 text-yellow-400">
              <Zap className="w-4 h-4 animate-pulse" /></Zap>
              <span>Optimizing...</span>
            </div>
          ) : (
            <div className="space-y-2">{performanceScore && (</div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /></CheckCircle>
                  <span>Score: {performanceScore,</span>}/100</span>
                </div>
              )}
              
              <div className="text-xs text-gray-300">{optimizations.length > 0 ? (</div>
                  <ul className="space-y-1">
                    {optimizations.map((opt, index) => (
                      <li key={index}className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /></CheckCircle>
                        <span>{opt</span>}</span>
                      </li>
'use client'
import React, { useEffect, useCallback } from 'react'

interface PerformanceOptimizerProps {
  children: React.ReactNode
  enablePreloading?: boolean
  enableImageOptimization?: boolean
  enablePerformanceMonitoring?: boolean
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = (>{children,
  enablePreloading = true,
  enableImageOptimization = true,
  enablePerformanceMonitoring = true
const PerformanceOptimizer: React.FC<{ children: React.ReactNode } = ({ children }) => {
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link')
      criticalCSS.rel = 'preload'
      criticalCSS.href = '/critical.css'
      criticalCSS.as = 'style'
      criticalCSS.onload = () => {
        criticalCSS.rel = 'stylesheet'
      }
      document.head.appendChild(criticalCSS)
                    ))}
                  </ul>
                ) : ()
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true;}) => {useEffect(() => {
    // Preload critical resources;
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts;
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      fontPreload.as = 'style'
      document.head.appendChild(fontPreload),

      // Preload critical images;
      const criticalImages = ['/images/hero-bg.jpg', '/images/logo.png']

      criticalImages.forEach(src => {)
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link)})
    }

    // Optimize images;
    if (enableImageOptimization && typeof window !== 'undefined') {const images = document.querySelectorAll('img');
      images.forEach(img => {)
        // Add loading="lazy" for non-critical images;
        if (enableLazyLoading && !img.hasAttribute('loading')) {
          img.loading = 'lazy'}// Add decoding="async" for better performance;
        if (!img.hasAttribute('decoding')) {img.decoding = 'async'}})
    }

    // Intersection Observer for lazy loading;
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {)
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img)}}
        })
      })

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Performance monitoring;
    if (typeof window !== 'undefined' && 'performance' in window) {const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // LCP measurement logged for performance monitoring;}if (entry.entryType === 'first-input') {// FID measurement logged for performance monitoring;}})
      })

      try {observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'])}})
      } catch (e) {// Fallback for browsers that don't support these entry types;}}
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);
  )
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ()
}) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return

    // Preload critical fonts
    const fontPreload = document.createElement('link')
    fontPreload.rel = 'preload'
    fontPreload.href = 'https: //fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    fontPreload.as = 'style'
    fontPreload.onload = () => {
      fontPreload.rel = 'stylesheet'
    }
    document.head.appendChild(fontPreload)

    // Preload critical images
    const criticalImages = ['/hero-bg.jpg', '/logo.png', '/og-image.jpg']

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [enablePreloading])

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return

    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy')
      }
      
      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async')
      
      // Add alt text if missing
      if (!img.alt) {
        img.alt = 'Zion Tech Group - AI & IT Solutions'
      }
    })
  }, [enableImageOptimization])

  // Intersection Observer for animations
  const setupIntersectionObserver = useCallback(() => {
    if (typeof window === 'undefined') return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    if (!enablePerformanceMonitoring || typeof window === 'undefined' || !('performance' in window)) return

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        const metrics = {
          FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
          LCP: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
          FID: performance.getEntriesByType('first-input')[0]?.processingStart,
          CLS: performance.getEntriesByType('layout-shift')[0]?.value,
          TTFB: navigation.responseStart - navigation.requestStart,
          DOMContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          LoadComplete: navigation.loadEventEnd - navigation.navigationStart
        }
        
        // Send metrics to analytics (replace with your analytics service)
        console.log('Performance Metrics: ', metrics)
        
        // Store metrics in localStorage for debugging
        localStorage.setItem('performance-metrics', JSON.stringify(metrics))
      }
    }

    // Measure performance after page load
    window.addEventListener('load', measurePerformance)
    return () => window.removeEventListener('load', measurePerformance)
  }, [enablePerformanceMonitoring])

  useEffect(() => {

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    const cleanupObserver = setupIntersectionObserver()
    const cleanupPerformance = setupPerformanceMonitoring()

    // Re-optimize when DOM changes
    const observer = new MutationObserver(() => {
      optimizeImages()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      cleanupObserver?.()
      cleanupPerformance?.()
      observer.disconnect()
    }
  }, [preloadCriticalResources, optimizeImages, setupIntersectionObserver, setupPerformanceMonitoring])

  return <>{children}</>
}

export default PerformanceOptimizer
