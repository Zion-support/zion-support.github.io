'use client';
import React, { useEffect, useCallback } from 'react';

interface EnhancedPerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePreloading?: boolean;
  enableCriticalCSS?: boolean;
  enableResourceHints?: boolean;
  enableServiceWorker?: boolean;
  enableWebVitals?: boolean;
  enableCompression?: boolean;
};

const EnhancedPerformanceOptimizer: React.FC<EnhancedPerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePreloading = true,
  enableCriticalCSS = true,
  enableResourceHints = true,
  enableServiceWorker = true,
  enableWebVitals = true,
  enableCompression = true,
}) => {
  // Web Vitals tracking
  const trackWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !enableWebVitals) return;

    // Track Core Web Vitals
    const trackLCP = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime)
          });
        },
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    };

    const trackFID = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          console.log('FID:', fid);
          
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FID',
              value: Math.round(fid)
            });
          },
        });
      }).observe({ entryTypes: ['first-input'] });
    };

    const trackCLS = () => {
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          },
        });
        console.log('CLS:', clsValue);
        
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000)
          });
        },
      }).observe({ entryTypes: ['layout-shift'] });
    };

    trackLCP();
    trackFID();
    trackCLS();
  }, [enableWebVitals]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add lazy loading
      if (enableLazyLoading && !img.loading) {
        img.loading = 'lazy';
      }
      
      // Add async decoding
      if (!img.decoding) {
        img.decoding = 'async';
      }
      
      // Add fetchpriority for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }
      
      // Add WebP support detection
      if (!img.srcset && img.src) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        img.srcset = `${img.src} 1x, ${webpSrc} 2x`;
      }
      
      // Add error handling
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
    });
  }, [enableImageOptimization, enableLazyLoading]);

  // Resource prefetching
  const prefetchResources = useCallback(() => {
    if (typeof window === 'undefined' || !enablePreloading) return;

    const prefetchLinks = [
      '/services',
      '/contact',
      '/ai-services',
      '/it-services',
      '/about',
      '/blog',
      '/pricing',
      '/case-studies',
    ];

    prefetchLinks.forEach((href) => {
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      },
    });
  }, [enablePreloading]);

  // DNS prefetching
  const addResourceHints = useCallback(() => {
    if (typeof window === 'undefined' || !enableResourceHints) return;

    const dnsPrefetchDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdnjs.cloudflare.com',
      'www.google-analytics.com',
      'www.googletagmanager.com',
    ];

    dnsPrefetchDomains.forEach((domain) => {
      const existingLink = document.querySelector(`link[href="//${domain}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      },
    });
  }, [enableResourceHints]);

  // Critical CSS preloading
  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined' || !enableCriticalCSS) return;

    const criticalResources = [
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        as: 'style',
        crossorigin: 'anonymous'
      },
      {
        href: '/css/critical.css',
        as: 'style'
      },
    ];

    criticalResources.forEach((resource) => {
      const existingLink = document.querySelector(`link[href="${resource.href}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.crossorigin) {
          link.crossOrigin = resource.crossorigin;
        }
        document.head.appendChild(link);
      },
    });
  }, [enableCriticalCSS]);

  // Service Worker registration
  const registerServiceWorker = useCallback(() => {
    if (typeof window === 'undefined' || !enableServiceWorker) return;

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    },
  }, [enableServiceWorker]);

  // Compression optimization
  const optimizeCompression = useCallback(() => {
    if (typeof window === 'undefined' || !enableCompression) return;

    // Add compression hints
    const meta = document.createElement('meta');
    meta.name = 'compression';
    meta.content = 'gzip, deflate, br';
    document.head.appendChild(meta);
  }, [enableCompression]);

  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if (typeof window === 'undefined' || !enableLazyLoading) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          },
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));
  }, [enableLazyLoading]);

  useEffect(() => {
    // Initialize all optimizations
    trackWebVitals();
    optimizeImages();
    prefetchResources();
    addResourceHints();
    preloadCriticalResources();
    registerServiceWorker();
    optimizeCompression();
    setupIntersectionObserver();

    // Performance monitoring
    const performanceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.fetchStart);
        }
        if (entry.entryType === 'paint') {
          console.log(`${entry.name}:`, entry.startTime);
        },
      });
    });

    performanceObserver.observe({ entryTypes: ['navigation', 'paint'] });

    // Cleanup
    return () => {
      performanceObserver.disconnect();
    };
  }, [
    trackWebVitals,
    optimizeImages,
    prefetchResources,
    addResourceHints,
    preloadCriticalResources,
    registerServiceWorker,
    optimizeCompression,
    setupIntersectionObserver
  ]);

  return null;
};

export default EnhancedPerformanceOptimizer;