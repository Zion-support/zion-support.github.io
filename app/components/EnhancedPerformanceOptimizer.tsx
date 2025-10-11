'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

<<<<<<< HEAD
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ()
=======
const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    }

<<<<<<< HEAD
    // Run optimization after component mount
    const timer = setTimeout(optimizeImages, 100);
    return () => clearTimeout(timer);
  }, [enableImageOptimization]);

  // Lazy loading
  useEffect(() => {
    if (!enableLazyLoading) return;

    const observer = const observer = const observer = new IntersectionObserver()
      (entries) => {;
        entries.forEach((entry) => {;
          if (entry.isIntersecting) {;
            const target = entry.target as HTMLElement;
            target.classList.add('loaded');
=======
    // Lazy loading
    if (enableLazyLoading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          }
        });
      });

<<<<<<< HEAD
    const lazyElements = document.querySelectorAll('[data-lazy]');
    lazyElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [enableLazyLoading]);

  // Preloading
  useEffect(() => {
    if (!enablePreloading) return;

    const preloadCriticalResources = const preloadCriticalResources = () => {;
      // Preload critical CSS;
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/styles/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFont = document.createElement('link');
      criticalFont.rel = 'preload';
      criticalFont.href = '/fonts/inter-var.woff2';
      criticalFont.as = 'font';
      criticalFont.type = 'font/woff2';
      criticalFont.crossOrigin = 'anonymous';
      document.head.appendChild(criticalFont);
    }

    preloadCriticalResources();
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (!enableCodeSplitting) return;

    const optimizeCodeSplitting = const optimizeCodeSplitting = () => {;
      // Preload next likely routes;
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('#')) {
            // Preload the route
            import(/* webpackChunkName: "route" */ `../app${href}/page.tsx`);
          }
        })
      })
    }

    const timer = setTimeout(optimizeCodeSplitting, 1000);
    return () => clearTimeout(timer);
  }, [enableCodeSplitting]);

  // Performance monitoring
  useEffect(() => {
    const measurePerformance = const measurePerformance = () => {;
      if ('performance' in window) {;
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics = const metrics = const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0
        }
;
        // Send metrics to analytics;
        if (typeof window !== 'undefined' && 'gtag' in window) {;
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag()
            value: Math.round(metrics.domContentLoaded)
          })
        }
      }
=======
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => observer.observe(img));
    }

    // Preloading
    if (enablePreloading) {
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !document.querySelector(`link[href="${href}"]`)) {
          const newLink = document.createElement('link');
          newLink.rel = 'preload';
          newLink.href = href;
          newLink.as = link.getAttribute('as') || 'script';
          document.head.appendChild(newLink);
        }
      });
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
};

export default EnhancedPerformanceOptimizer;