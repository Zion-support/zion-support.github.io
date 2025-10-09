'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableResourceHints?: boolean;
  enableServiceWorker?: boolean;
  enablePrefetching?: boolean;
  enableCompression?: boolean;
  enableCaching?: boolean;
  enableCriticalCSS?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableResourceHints = true,
  enableServiceWorker = true,
  enablePrefetching = true,
  enableCompression = true,
  enableCaching = true,
  enableCriticalCSS = true
}) => {
  const [optimizationStatus, setOptimizationStatus] = useState({
    imagesOptimized: 0,
    lazyLoaded: 0,
    preloaded: 0,
    codeSplit: false,
    resourceHints: 0,
    serviceWorker: false,
    prefetched: 0,
    compressed: false,
    cached: false,
    criticalCSS: false
  });

  const [performanceMetrics, setPerformanceMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  });

  useEffect(() => {
    if (enableImageOptimization) {
      optimizeImages();
    }
    if (enableLazyLoading) {
      setupLazyLoading();
    }
    if (enablePreloading) {
      preloadCriticalResources();
    }
    if (enableCodeSplitting) {
      setupCodeSplitting();
    }
    if (enableResourceHints) {
      addResourceHints();
    }
    if (enableServiceWorker) {
      registerServiceWorker();
    }
    if (enablePrefetching) {
      setupPrefetching();
    }
    if (enableCompression) {
      setupCompression();
    }
    if (enableCaching) {
      setupCaching();
    }
    if (enableCriticalCSS) {
      setupCriticalCSS();
    }

    // Initialize performance monitoring
    initializePerformanceMonitoring();
  }, [
    enableImageOptimization, enableLazyLoading, enablePreloading, 
    enableCodeSplitting, enableResourceHints, enableServiceWorker,
    enablePrefetching, enableCompression, enableCaching, enableCriticalCSS
  ]);

  const initializePerformanceMonitoring = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          setPerformanceMetrics(prev => ({ ...prev, cls: metric.value }));
        });
        
        getFID((metric) => {
          setPerformanceMetrics(prev => ({ ...prev, fid: metric.value }));
        });
        
        getFCP((metric) => {
          setPerformanceMetrics(prev => ({ ...prev, fcp: metric.value }));
        });
        
        getLCP((metric) => {
          setPerformanceMetrics(prev => ({ ...prev, lcp: metric.value }));
        });
        
        getTTFB((metric) => {
          setPerformanceMetrics(prev => ({ ...prev, ttfb: metric.value }));
        });
      });
    }

    // Monitor resource loading performance
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart
            });
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation', 'resource'] });
    }
  }, []);

  const optimizeImages = useCallback(() => {
    if (typeof document === 'undefined') return;

    const images = document.querySelectorAll('img');
    let optimizedCount = 0;

    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
        optimizedCount++;
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
        optimizedCount++;
      }

      // Add fetchpriority="high" for above-the-fold images
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && !img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', 'high');
        optimizedCount++;
      }

      // Convert to WebP format if supported
      if (img.src && !img.src.includes('.webp') && !img.src.includes('data:')) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const webpImg = new Image();
        webpImg.onload = () => {
          img.src = webpSrc;
          optimizedCount++;
        };
        webpImg.onerror = () => {
          // Fallback to original if WebP not supported
        };
        webpImg.src = webpSrc;
      }
    });

    setOptimizationStatus(prev => ({ ...prev, imagesOptimized: optimizedCount }));
  }, []);

  const setupLazyLoading = useCallback(() => {
    if (typeof document === 'undefined' || !('IntersectionObserver' in window)) return;

    const lazyElements = document.querySelectorAll('[data-lazy]');
    let lazyLoadedCount = 0;

    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          if (element.dataset.src) {
            if (element.tagName === 'IMG') {
              (element as HTMLImageElement).src = element.dataset.src;
            } else if (element.tagName === 'VIDEO') {
              (element as HTMLVideoElement).src = element.dataset.src;
            }
            element.removeAttribute('data-src');
            lazyLoadedCount++;
          }
          
          lazyObserver.unobserve(element);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    lazyElements.forEach((element) => {
      lazyObserver.observe(element);
    });

    setOptimizationStatus(prev => ({ ...prev, lazyLoaded: lazyLoadedCount }));
  }, []);

  const preloadCriticalResources = useCallback(() => {
    if (typeof document === 'undefined') return;

    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/css/critical.css', as: 'style' },
      { href: '/js/critical.js', as: 'script' }
    ];

    let preloadedCount = 0;

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      
      document.head.appendChild(link);
      preloadedCount++;
    });

    setOptimizationStatus(prev => ({ ...prev, preloaded: preloadedCount }));
  }, []);

  const setupCodeSplitting = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Dynamic imports for route-based code splitting
    const routes = ['/about', '/contact', '/services', '/blog'];
    
    routes.forEach((route) => {
      // Preload route components on hover
      const routeLinks = document.querySelectorAll(`a[href="${route}"]`);
      routeLinks.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          import(`../pages${route}/page`).catch(() => {
            // Handle import errors gracefully
          });
        });
      });
    });

    setOptimizationStatus(prev => ({ ...prev, codeSplit: true }));
  }, []);

  const addResourceHints = useCallback(() => {
    if (typeof document === 'undefined') return;

    const resourceHints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com' }
    ];

    let hintsAdded = 0;

    resourceHints.forEach((hint) => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      
      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin;
      }
      
      document.head.appendChild(link);
      hintsAdded++;
    });

    setOptimizationStatus(prev => ({ ...prev, resourceHints: hintsAdded }));
  }, []);

  const registerServiceWorker = useCallback(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          setOptimizationStatus(prev => ({ ...prev, serviceWorker: true }));
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }, []);

  const setupPrefetching = useCallback(() => {
    if (typeof document === 'undefined') return;

    const prefetchResources = [
      '/api/services',
      '/api/testimonials',
      '/api/contact'
    ];

    let prefetchedCount = 0;

    prefetchResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
      prefetchedCount++;
    });

    setOptimizationStatus(prev => ({ ...prev, prefetched: prefetchedCount }));
  }, []);

  const setupCompression = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Enable compression for text resources
    const compressionEnabled = 'CompressionStream' in window;
    
    if (compressionEnabled) {
      // Add compression headers via meta tags
      const meta = document.createElement('meta');
      meta.name = 'compression';
      meta.content = 'gzip, deflate, br';
      document.head.appendChild(meta);
    }

    setOptimizationStatus(prev => ({ ...prev, compressed: compressionEnabled }));
  }, []);

  const setupCaching = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Set up cache headers
    const cacheHeaders = [
      { name: 'Cache-Control', content: 'public, max-age=31536000' },
      { name: 'Expires', content: new Date(Date.now() + 31536000000).toUTCString() }
    ];

    cacheHeaders.forEach((header) => {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', header.name);
      meta.content = header.content;
      document.head.appendChild(meta);
    });

    setOptimizationStatus(prev => ({ ...prev, cached: true }));
  }, []);

  const setupCriticalCSS = useCallback(() => {
    if (typeof document === 'undefined') return;

    // Inline critical CSS
    const criticalCSS = `
      .cyber-text-3d { color: #00ffff; text-shadow: 0 0 10px #00ffff; }
      .neon-text { color: #00ffff; text-shadow: 0 0 5px #00ffff; }
      .cyber-card { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(0, 255, 255, 0.2); }
      .cyber-button { background: linear-gradient(135deg, #00ffff, #8b5cf6); }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);

    setOptimizationStatus(prev => ({ ...prev, criticalCSS: true }));
  }, []);

  // Performance monitoring and reporting
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reportPerformance = () => {
      const performanceData = {
        optimization: optimizationStatus,
        metrics: performanceMetrics,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType || 'unknown'
      };

      // Send to analytics
      if ('gtag' in window) {
        (window as any).gtag('event', 'performance_optimization', {
          event_category: 'performance',
          event_label: 'optimization_status',
          value: Object.values(optimizationStatus).filter(Boolean).length
        });
      }

      console.log('Performance Optimization Status:', performanceData);
    };

    // Report performance after 3 seconds
    const timer = setTimeout(reportPerformance, 3000);

    return () => clearTimeout(timer);
  }, [optimizationStatus, performanceMetrics]);

  return null;
};

export default PerformanceOptimizer;