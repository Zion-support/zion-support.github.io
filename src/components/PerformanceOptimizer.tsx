import React, { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
}

export function PerformanceOptimizer() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceData = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  useEffect(() => {
    // Initialize intersection observer for lazy loading
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
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1
        }
      );

      // Observe all lazy elements
      const lazyElements = document.querySelectorAll('[data-src], [data-bg-src]');
      lazyElements.forEach(el => observerRef.current?.observe(el));
    }

    // Performance monitoring
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            performanceData.current.fcp = entry.startTime;
            console.log('FCP:', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          performanceData.current.lcp = lastEntry.startTime;
          console.log('LCP:', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          performanceData.current.fid = entry.processingStart - entry.startTime;
          console.log('FID:', performanceData.current.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        performanceData.current.cls = clsValue;
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalPaths = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/api/services'
      ];

      criticalPaths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = path;
        if (path.endsWith('.woff2')) {
          link.as = 'font';
          link.type = 'font/woff2';
          link.crossOrigin = 'anonymous';
        } else if (path.endsWith('.jpg')) {
          link.as = 'image';
        }
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();

    // Service Worker registration for offline support
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Prefetch next likely pages
  useEffect(() => {
    const prefetchNextPages = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && !href.includes('#')) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
        }
      });
    };

    // Delay prefetching to not block initial load
    const timer = setTimeout(prefetchNextPages, 3000);
    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
}
