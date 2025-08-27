import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

const PerformanceOptimizer: React.FC = () => {
  const location = useLocation();

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
            // Send to analytics
            if (window.gtag) {
              window.gtag('event', 'performance_metric', {
                metric_name: 'FCP',
                value: Math.round(entry.startTime),
                page: location.pathname
              });
            }
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
          if (window.gtag) {
            window.gtag('event', 'performance_metric', {
              metric_name: 'LCP',
              value: Math.round(lastEntry.startTime),
              page: location.pathname
            });
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          if (window.gtag) {
            window.gtag('event', 'performance_metric', {
              metric_name: 'FID',
              value: Math.round(entry.processingStart - entry.startTime),
              page: location.pathname
            });
          }
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
        console.log('CLS:', clsValue);
        if (window.gtag) {
          window.gtag('event', 'performance_metric', {
            metric_name: 'CLS',
            value: Math.round(clsValue * 1000) / 1000,
            page: location.pathname
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, [location.pathname]);

  // Resource preloading
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/images/hero-ai-solutions.jpg',
      '/images/hero-quantum.jpg',
      '/images/hero-autonomous.jpg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = resource;
      document.head.appendChild(link);
    });
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  // Intersection Observer for animations
  const setupIntersectionObserver = useCallback(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return observer;
  }, []);

  // Memory management
  const cleanupMemory = useCallback(() => {
    // Clean up event listeners and observers
    if (window.performance && window.performance.memory) {
      const memoryInfo = window.performance.memory;
      if (memoryInfo.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
        console.warn('High memory usage detected:', memoryInfo.usedJSHeapSize / 1024 / 1024, 'MB');
        // Trigger garbage collection if available
        if (window.gc) {
          window.gc();
        }
      }
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    preloadCriticalResources();
    optimizeImages();
    
    const observer = setupIntersectionObserver();
    const memoryInterval = setInterval(cleanupMemory, 30000); // Check every 30 seconds

    return () => {
      if (observer) {
        observer.disconnect();
      }
      clearInterval(memoryInterval);
    };
  }, [measurePerformance, preloadCriticalResources, optimizeImages, setupIntersectionObserver, cleanupMemory]);

  // Route change optimization
  useEffect(() => {
    // Prefetch next likely routes
    const prefetchRoutes = () => {
      const likelyRoutes = ['/services', '/about', '/contact'];
      likelyRoutes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    };

    // Delay prefetching to avoid blocking initial load
    const timeoutId = setTimeout(prefetchRoutes, 2000);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
