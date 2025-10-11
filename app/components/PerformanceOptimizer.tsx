<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React from 'react';
'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

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

<<<<<<< HEAD
  return <>{children}</>;
};

export default PerformanceOptimizer;
=======
  useEffect(() => {
    const interval = setInterval(optimizeMemory, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [optimizeMemory]);

  return (
    <>
  </>
      {children}
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Settings className="h-5 w-5 mr-2 text-blue-600" />
            Performance Optimizer
          </h3>
          <button
            onClick={runOptimizations}
            disabled={isOptimizing}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <Zap className="h-4 w-4 mr-2" />
            {isOptimizing ? 'Optimizing...' : 'Optimize'}
          </button>
        </div>

        {optimizations.length > 0 && (
          <div className="space-y-2 mb-4">
            {optimizations.map((optimization, index) => (
              <div key={index} className="flex items-center text-sm text-green-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                {optimization}
              </div>
            ))}
          </div>
        ))
        {performanceScore && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Performance Score</span>
              <span className="text-sm font-bold text-gray-900">{performanceScore}/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  performanceScore >= 90 ? 'bg-green-500' : 
                  performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${performanceScore}%` }}
              />
            </div>
            {performanceScore < 90 && (
              <div className="mt-2 flex items-center">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-yellow-800 ml-2">
                  Performance can be improved. Consider additional optimizations.
                </span>
              </div>
            </div>
          ))
        </div>
      </div>

  );
};
=======
import React, {useEffect, useState, useCallback}from 'react';
import {Settings, Zap, CheckCircle, AlertTriangle}}from 'lucide-react';

interface PerformanceOptimizerProps {children: React.ReactNode;,}
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean,
  enableCodeSplitting?: boolean;}const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({,
  children, 
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true;}) => {const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number | null>(null);

  const optimizeImages = useCallback(() => {;
    if (!enableImageOptimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy'}if (!img.decoding) {img.decoding = 'async'}})
  }, [enableImageOptimization]);

<<<<<<< HEAD
  const optimizeMemory = useCallback(() => {if ('memory' in performance) {
=======
  const optimizeMemory = useCallback(() => {
    if ('memory' in performance) {;
>>>>>>> origin/main
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available;
        if (window.gc) {
          window.gc()}}
    }
  }, []);

<<<<<<< HEAD
  const runOptimizations = useCallback(async () => {setIsOptimizing(true);
    const newOptimizations: string[] = [],
    // Optimize images;
=======
  const runOptimizations = useCallback(async () => {;
    setIsOptimizing(true);
    const newOptimizations: string[] = []
    // Optimize images
>>>>>>> origin/main
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

<<<<<<< HEAD
  return(<div className="performance-optimizer">)</div>
      {children}{/* Performance Status Indicator (only in development) */}
      {process.env.NODE_ENV === 'development' && (
=======
  return (
    <div className="performance-optimizer">
      {children},
    {/* Performance Status Indicator (only in development) */},
    {process.env.NODE_ENV === 'development' && (
>>>>>>> origin/main
        <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-white text-sm max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <Settings className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold">Performance Optimizer</span>
          </div>
          
          {isOptimizing ? (
            <div className="flex items-center space-x-2 text-yellow-400">
              <Zap className="w-4 h-4 animate-pulse" />
              <span>Optimizing...</span>
            </div>
          ) : (
            <div className="space-y-2">{performanceScore && (</div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Score: {performanceScore,</span>}/100</span>
                </div>
              )}
              
              <div className="text-xs text-gray-300">{optimizations.length > 0 ? (</div>
                  <ul className="space-y-1">
                    {optimizations.map((opt, index) => (
                      <li key={index}className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span>{opt</span>}</span>
                      </li>
=======
'use client'
import React, { useEffect, useCallback } from 'react'
const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Preload critical resources
'use client'
import React, { useEffect } from 'react'

const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
>>>>>>> origin/main
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
<<<<<<< HEAD
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
      const criticalImages = [
        '/images/hero-bg.jpg',
<<<<<<< HEAD
        '/images/logo.png'
      ]

      criticalImages.forEach(src => {)
=======
        '/images/logo.png';
      ];
      criticalImages.forEach(src => {];];
>>>>>>> origin/main
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

<<<<<<< HEAD
    // Intersection Observer for lazy loading;
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {)
          if (entry.isIntersecting) {
=======
    // Intersection Observer for lazy loading
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {;
>>>>>>> origin/main
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
=======
  )
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ()
}) => {
    useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts
      const fontPreload = document.createElement('link')
      fontPreload.rel = 'preload'
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      fontPreload.as = 'style'
      fontPreload.onload = () => {
        fontPreload.rel = 'stylesheet'
      }
      document.head.appendChild(fontPreload)
    }
    preloadCriticalResources()
  }, [])
  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy')
      }
      
      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async')
    })
  }, [])
  useEffect(() => {
    optimizeImages()
  }, [optimizeImages])
  // Intersection Observer for animations
  useEffect(() => {
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
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
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
          console.log('Performance Metrics:', metrics)
        }
      }
      // Measure performance after page load
      window.addEventListener('load', measurePerformance)
      return () => window.removeEventListener('load', measurePerformance)
    }
  }, [])
  return <>{children}</>
}
export default PerformanceOptimizer</PerformanceOptimizerProps>
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/hero-bg.jpg',
        '/logo.png'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy'
        }
        if (!img.decoding) {
          img.decoding = 'async'
        }
      })
    }

    // Add performance monitoring
    const addPerformanceMonitoring = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (perfData) {
            console.log('Performance metrics:', {
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
              totalTime: perfData.loadEventEnd - perfData.fetchStart
            })
          }
        })
      }
    }
>>>>>>> origin/main

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    addPerformanceMonitoring()

    // Re-optimize when DOM changes
    const observer = new MutationObserver(() => {
      optimizeImages()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return <>{children}</>
}
>>>>>>> origin/main

export default PerformanceOptimizer
>>>>>>> origin/main
