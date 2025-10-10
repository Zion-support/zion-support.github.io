'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceEnhancerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);

    // Preload critical images
    const criticalImages = [
      '/og-image.svg',
      '/logo192.png',
      '/favicon.svg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for non-critical images
      if (enableLazyLoading && !img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add error handling
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
    });
  }, [enableImageOptimization, enableLazyLoading]);

  // Monitor Core Web Vitals
  const monitorWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      list.getEntries().forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }, []);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    if (typeof window === 'undefined' || !enableCodeSplitting) return;

    // Preload next likely routes
    const nextRoutes = ['/about', '/contact', '/services', '/pricing'];
    nextRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, [enableCodeSplitting]);

  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(() => {
      preloadCriticalResources();
      optimizeImages();
      monitorWebVitals();
      optimizeBundleLoading();
    }, 100);

    return () => clearTimeout(timer);
  }, [preloadCriticalResources, optimizeImages, monitorWebVitals, optimizeBundleLoading]);

  return null;
};

export default PerformanceEnhancer;