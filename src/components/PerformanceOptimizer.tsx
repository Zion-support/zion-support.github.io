import React, { useEffect, useCallback, useLocation } from 'react';

export function PerformanceOptimizer() {
  const location = useLocation();

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical images
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/logo.png',
      '/images/favicon.ico'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    criticalFonts.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  // Setup image optimization with Intersection Observer
  const setupImageOptimization = useCallback(() => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      // Observe all lazy images
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }, []);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log('LCP:', entry.startTime);
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  // Optimize bundle loading with resource hints
  const optimizeBundleLoading = useCallback(() => {
    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.jsdelivr.net'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  // Optimize route loading with prefetching
  const optimizeRouteLoading = useCallback(() => {
    const currentPath = location.pathname;
    
    // Prefetch next likely routes based on current path
    if (currentPath === '/') {
      // Prefetch main service pages
      const routesToPrefetch = [
        '/ai-services',
        '/it-services',
        '/about',
        '/contact'
      ];
      
      routesToPrefetch.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    // Initialize performance optimizations
    preloadCriticalResources();
    setupImageOptimization();
    monitorCoreWebVitals();
    optimizeBundleLoading();
    optimizeRouteLoading();
  }, [preloadCriticalResources, setupImageOptimization, monitorCoreWebVitals, optimizeBundleLoading, optimizeRouteLoading]);

  // This component doesn't render anything visible
  return null;
}
