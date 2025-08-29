import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer() {
  const location = useLocation();

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalPaths = [
      '/services',
      '/ai-services',
      '/contact',
      '/about'
    ];

    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      document.head.appendChild(link);
    });
  }, []);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
            // Send to analytics
            if (entry.startTime < 1800) {
              console.log('✅ FCP is good');
            } else {
              console.log('⚠️ FCP needs improvement');
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
          if (lastEntry.startTime < 2500) {
            console.log('✅ LCP is good');
          } else {
            console.log('⚠️ LCP needs improvement');
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          const fid = entry.processingStart - entry.startTime;
          if (fid < 100) {
            console.log('✅ FID is good');
          } else {
            console.log('⚠️ FID needs improvement');
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
        if (clsValue < 0.1) {
          console.log('✅ CLS is good');
        } else {
          console.log('⚠️ CLS needs improvement');
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
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

  // Add intersection observer for animations
  const setupIntersectionObserver = useCallback(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));
  }, []);

  // Route change optimization
  useEffect(() => {
    // Preload critical resources on route change
    preloadCriticalResources();
    
    // Optimize images on route change
    setTimeout(optimizeImages, 100);
    
    // Setup intersection observer
    setupIntersectionObserver();
  }, [location.pathname, preloadCriticalResources, optimizeImages, setupIntersectionObserver]);

  // Initial setup
  useEffect(() => {
    monitorCoreWebVitals();
    preloadCriticalResources();
    optimizeImages();
    setupIntersectionObserver();

    // Add performance monitoring to window for debugging
    (window as any).performanceMetrics = {
      getMetrics: () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        return {
          ttfb: navigation.responseStart - navigation.requestStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalTime: navigation.loadEventEnd - navigation.navigationStart
        };
      }
    };
  }, [monitorCoreWebVitals, preloadCriticalResources, optimizeImages, setupIntersectionObserver]);

  return null; // This component doesn't render anything
}
