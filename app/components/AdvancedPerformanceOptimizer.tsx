<<<<<<< HEAD
'use client'
import React, { useEffect, useCallback, useState } from 'react'
interface PerformanceMetrics {
  lcp: number,
    fid: number
  cls: number,
    fcp: number
  ttfb: number}
interface AdvancedPerformanceOptimizerProps {
  enableWebVitals?: boolean
  enableAdvancedCaching?: boolean
  enableImageOptimization?: boolean
  enablePreloading?: boolean
  enableServiceWorker?: boolean
}
const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableWebVitals = true
  enableAdvancedCaching = true
  enableImageOptimization = true
  enablePreloading = true
  enableServiceWorker = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0
    cls: 0,
    fcp: 0
    ttfb: 0})
  // Web Vitals monitoring
  const measureWebVitals = useCallback(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      // Measure Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
        setPerformanceMetrics(prev => ({
          ...prev
          lcp: lastEntry.renderTime || lastEntry.loadTime || 0}))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      // Measure First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
  const entries = list.getEntries()
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
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += entry.value
            setPerformanceMetrics(prev => ({
              ...prev
              cls: clsValue}))
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      // Measure First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach(entry => {
          setPerformanceMetrics(prev => ({
            ...prev
            fcp: entry.startTime}))
        })
      })
      fcpObserver.observe({ entryTypes: ['paint'] })
    }
  }, [enableWebVitals])
  // Advanced caching strategies
  const setupAdvancedCaching = useCallback(() => {
    if (typeof window === 'undefined') return
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
    }
    // Memory-based caching for API responses
    const cache = new Map()
    const originalFetch = window.fetch
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : input.url
      const cacheKey = `${url}-${JSON.stringify(init)}`
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey)
      }
      const response = await originalFetch(input, init)
      if (response.ok) {
        cache.set(cacheKey, response.clone())
      }
      return response
    }
  }, [enableServiceWorker])
  // Image optimization
  const optimizeImages = useCallback(() => {
  if (typeof window === 'undefined') return
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy'
}
      if (!img.decoding) {
  img.decoding = 'async'
}
    })
  }, [])
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
  if (typeof window === 'undefined') return
    const criticalResources = [
  '/fonts/inter-var.woff2',
    '/css/critical.css'
  ]
    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.woff2') ? 'font' : 'style'
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous'
}
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
    event_label: 'Core Web Vitals'
        value: Math.round(performanceMetrics.lcp),
    custom_map: {
          fcp: Math.round(performanceMetrics.fcp),
    lcp: Math.round(performanceMetrics.lcp)
          fid: Math.round(performanceMetrics.fid),
    cls: Math.round(performanceMetrics.cls * 1000) / 1000}
      })
    }
  }, [performanceMetrics])
  useEffect(() => {
    if (enableAdvancedCaching) {
      setupAdvancedCaching()
    }
    if (enableImageOptimization) {
      optimizeImages()
    }
    if (enablePreloading) {
      preloadCriticalResources()
    }
    if (enableWebVitals) {
      measureWebVitals()
    }
  }, [enableAdvancedCaching, enableImageOptimization, enablePreloading, enableWebVitals, setupAdvancedCaching, optimizeImages, preloadCriticalResources, measureWebVitals])
  useEffect(() => {
    if (enableWebVitals && performanceMetrics.lcp > 0) {
      reportPerformanceMetrics()
    }
  }, [enableWebVitals, performanceMetrics, reportPerformanceMetrics])
  return null
}
export default AdvancedPerformanceOptimizer
=======
<<<<<<< HEAD
'use client';
import React, { useEffect, useState, useCallback } from 'react';
interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableOptimizations?: boolean;
}
const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableOptimizations = true,
}) => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [optimizationMetrics, setOptimizationMetrics] = useState({
    imagesOptimized: 0,
    scriptsOptimized: 0,
    cssOptimized: 0,
    totalSavings: 0,
  });
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;
    const images = document.querySelectorAll('img');
    let optimizedCount = 0;
    images.forEach((img) => {
      // Add lazy loading if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
        optimizedCount++;
      }
      // Add decoding attribute for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
        optimizedCount++;
      }
    });
    return optimizedCount;
  }, []);
  const optimizeScripts = useCallback(() => {
    if (typeof window === 'undefined') return;
    const scripts = document.querySelectorAll('script[src]');
    let optimizedCount = 0;
    scripts.forEach((script) => {
      // Add defer attribute if not already present
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
        optimizedCount++;
      }
    });
    return optimizedCount;
  }, []);
  const optimizeCSS = useCallback(() => {
    if (typeof window === 'undefined') return;
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    let optimizedCount = 0;
    stylesheets.forEach((link) => {
      // Add media attribute for non-critical CSS
      if (!link.hasAttribute('media') && !link.hasAttribute('data-critical')) {
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
        optimizedCount++;
      }
    });
    return optimizedCount;
  }, []);
  const runOptimizations = useCallback(() => {
    if (!enableOptimizations) return;
    const imagesOptimized = optimizeImages();
    const scriptsOptimized = optimizeScripts();
    const cssOptimized = optimizeCSS();
    setOptimizationMetrics({
      imagesOptimized,
      scriptsOptimized,
      cssOptimized,
      totalSavings: imagesOptimized + scriptsOptimized + cssOptimized,
    });
    setIsOptimized(true);
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS]);
  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(runOptimizations, 100);
    return () => clearTimeout(timer);
  }, [runOptimizations]);
  // Add performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          if (navEntry.loadEventEnd - navEntry.loadEventStart > 1000) {
            console.warn('Page load time exceeded 1 second');
          }
        }
      });
    });
    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    return () => observer.disconnect();
  }, []);
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
            zIndex: 1000,
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
ursor/fix-errors-and-merge-to-main-21fe
'use client';
import React, { useEffect, useState, useCallback } from 'react';
interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableOptimizations?: boolean;
}
const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableOptimizations = true,
}) => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [optimizationMetrics, setOptimizationMetrics] = useState({
    imagesOptimized: 0,
    scriptsOptimized: 0,
    cssOptimized: 0,
    totalSavings: 0,
  });
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;
    const images = document.querySelectorAll('img');
    let optimizedCount = 0;
    images.forEach((img) => {
      // Add lazy loading if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
        optimizedCount++;
      }
      // Add decoding attribute for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
        optimizedCount++;
      }
    });
    return optimizedCount;
  }, []);
  const optimizeScripts = useCallback(() => {
    if (typeof window === 'undefined') return;
    const scripts = document.querySelectorAll('script[src]');
    let optimizedCount = 0;
    scripts.forEach((script) => {
      // Add defer attribute if not already present
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
        optimizedCount++;
      }
    });
    return optimizedCount;
  }, []);
  const optimizeCSS = useCallback(() => {
    if (typeof window === 'undefined') return;
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    let optimizedCount = 0;
    stylesheets.forEach((link) => {
      // Add media attribute for non-critical CSS
      if (!link.hasAttribute('media') && !link.hasAttribute('data-critical')) {
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
        optimizedCount++;
      }
    });
    return optimizedCount;
  }, []);
  const runOptimizations = useCallback(() => {
    if (!enableOptimizations) return;
    const imagesOptimized = optimizeImages();
    const scriptsOptimized = optimizeScripts();
    const cssOptimized = optimizeCSS();
    setOptimizationMetrics({
      imagesOptimized,
      scriptsOptimized,
      cssOptimized,
      totalSavings: imagesOptimized + scriptsOptimized + cssOptimized,
    });
    setIsOptimized(true);
  }, [enableOptimizations, optimizeImages, optimizeScripts, optimizeCSS]);
  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(runOptimizations, 100);
    return () => clearTimeout(timer);
  }, [runOptimizations]);
  // Add performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          if (navEntry.loadEventEnd - navEntry.loadEventStart > 1000) {
            console.warn('Page load time exceeded 1 second');
          }
        }
      });
    });
    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    return () => observer.disconnect();
  }, []);
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
            zIndex: 1000,
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
=======
import React, { useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface AdvancedPerformanceOptimizerProps {
  children?: React.ReactNode;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/css/critical.css', as: 'style' },
      { href: '/js/critical.js', as: 'script' },
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });
  }, []);

  // Implement intersection observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Throttle scroll events
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll-dependent elements here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  // Implement service worker for caching
  const registerServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    // Preload next likely pages
    const nextPages = ['/about', '/services', '/contact'];
    nextPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up unused event listeners
    const cleanup = () => {
      // Remove unused event listeners
      window.removeEventListener('beforeunload', cleanup);
    };
    
    window.addEventListener('beforeunload', cleanup);
  }, []);

  // Critical CSS injection
  const injectCriticalCSS = useCallback(() => {
    const criticalCSS = `
      .critical-loading { opacity: 0; }
      .critical-loaded { opacity: 1; transition: opacity 0.3s ease; }
      .hero-section { min-height: 100vh; }
      .navigation { position: sticky; top: 0; z-index: 50; }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }, []);

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log);
        onFID(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
      });
    }

    // Monitor resource loading
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) {
              console.warn('Slow resource:', resourceEntry.name, resourceEntry.duration);
            }
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
    }
  }, []);

  // Optimize animations
  const optimizeAnimations = useCallback(() => {
    // Use will-change for animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      (el as HTMLElement).style.willChange = 'transform, opacity';
    });
  }, []);

  // Memoized performance optimizations
  const performanceOptimizations = useMemo(() => ({
    preloadCriticalResources,
    optimizeImages,
    setupIntersectionObserver,
    optimizeScrollPerformance,
    registerServiceWorker,
    optimizeBundleLoading,
    optimizeMemory,
    injectCriticalCSS,
    setupPerformanceMonitoring,
    optimizeAnimations,
  }), [
    preloadCriticalResources,
    optimizeImages,
    setupIntersectionObserver,
    optimizeScrollPerformance,
    registerServiceWorker,
    optimizeBundleLoading,
    optimizeMemory,
    injectCriticalCSS,
    setupPerformanceMonitoring,
    optimizeAnimations,
  ]);

  useEffect(() => {
    // Run all optimizations
    Object.values(performanceOptimizations).forEach(optimization => {
      try {
        optimization();
      } catch (error) {
        console.warn('Performance optimization failed:', error);
      }
    });

    // Cleanup on unmount
    return () => {
      // Cleanup any ongoing optimizations
    };
  }, [performanceOptimizations]);

  return (
    <>
      <Helmet>
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//cdn.gpteng.co" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Resource hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Critical resource preloading */}
        <link rel="modulepreload" href="/assets/react-vendor-CByNqczl.js" />
        <link rel="modulepreload" href="/assets/pages-DUi2KyV9.js" />
      </Helmet>
      {children}
    </>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
export default AdvancedPerformanceOptimizer;
>>>>>>> main
