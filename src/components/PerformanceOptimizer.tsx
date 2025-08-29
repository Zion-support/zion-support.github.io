import React, { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

export function PerformanceOptimizer() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceMetrics = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domLoad: 0,
    windowLoad: number
  });

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          performanceMetrics.current.fcp = fcpEntry.startTime;
          console.log('FCP:', fcpEntry.startTime);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          performanceMetrics.current.lcp = lcpEntry.startTime;
          console.log('LCP:', lcpEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          performanceMetrics.current.fid = entry.processingStart - entry.startTime;
          console.log('FID:', performanceMetrics.current.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        performanceMetrics.current.cls = clsValue;
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      performanceMetrics.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', performanceMetrics.current.ttfb);
    }

    // DOM Load Time
    performanceMetrics.current.domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    performanceMetrics.current.windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
  }, []);

  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              
              // Lazy load images
              if (target.tagName === 'IMG' && target.dataset.src) {
                target.src = target.dataset.src;
                target.classList.remove('lazy');
                observerRef.current?.unobserve(target);
              }
              
              // Lazy load background images
              if (target.dataset.bgSrc) {
                target.style.backgroundImage = `url(${target.dataset.bgSrc})`;
                target.classList.remove('lazy-bg');
                observerRef.current?.unobserve(target);
              }
              
              // Add animation classes
              if (target.dataset.animate) {
                target.classList.add('animate-in');
                observerRef.current?.unobserve(target);
              }
            }
          });
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      );

      // Observe all lazy elements
      const lazyElements = document.querySelectorAll('[data-src], [data-bg-src], [data-animate]');
      lazyElements.forEach(el => observerRef.current?.observe(el));
    }
  }, []);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/orbitron-v19-latin-700.woff2',
      '/fonts/rajdhani-v15-latin-500.woff2',
      '/images/zion-logo.png'
    ];

    criticalResources.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = href.includes('fonts') ? 'font' : 'image';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const externalDomains = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.google-analytics.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  // Service Worker registration
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New version available
                console.log('New version available');
              }
            });
          }
        });
      } catch (error) {
        console.warn('Service Worker registration failed:', error);
      }
    }
  }, []);

  // Performance optimization on mount
  useEffect(() => {
    // Measure performance metrics
    measurePerformance();
    
    // Setup intersection observer for lazy loading
    setupIntersectionObserver();
    
    // Optimize resource hints
    optimizeResourceHints();
    
    // Register service worker
    registerServiceWorker();

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [measurePerformance, setupIntersectionObserver, optimizeResourceHints, registerServiceWorker]);

  // Performance monitoring on route changes
  useEffect(() => {
    const handleRouteChange = () => {
      // Reset metrics for new route
      performanceMetrics.current = {
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
        ttfb: 0,
        domLoad: 0,
        windowLoad: 0
      };
      
      // Re-measure performance
      setTimeout(measurePerformance, 100);
    };

    // Listen for route changes (if using React Router)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [measurePerformance]);

  // Performance reporting
  useEffect(() => {
    const reportPerformance = () => {
      // Send performance metrics to analytics
      if (window.gtag) {
        window.gtag('event', 'performance_metrics', {
          event_category: 'performance',
          fcp: performanceMetrics.current.fcp,
          lcp: performanceMetrics.current.lcp,
          fid: performanceMetrics.current.fid,
          cls: performanceMetrics.current.cls,
          ttfb: performanceMetrics.current.ttfb
        });
      }
    };

    // Report performance after 5 seconds
    const timer = setTimeout(reportPerformance, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
}
