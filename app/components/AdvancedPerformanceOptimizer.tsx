'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface AdvancedPerformanceOptimizerProps {
  enableAdvancedCaching?: boolean;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableResourceHints?: boolean;
  enableServiceWorker?: boolean;
  enableCriticalCSS?: boolean;
  enableWebVitals?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableAdvancedCaching = true,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableResourceHints = true,
  enableServiceWorker = true,
  enableCriticalCSS = true,
  enableWebVitals = true
}) => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  // Web Vitals monitoring
  useEffect(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      const measureWebVitals = () => {
        // First Contentful Paint
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setPerformanceMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        }).observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setPerformanceMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setPerformanceMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              setPerformanceMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          }
        }).observe({ entryTypes: ['layout-shift'] });
      };

      measureWebVitals();
    }
  }, [enableWebVitals]);

  // Advanced caching strategies
  const setupAdvancedCaching = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Service Worker for advanced caching
    if ('serviceWorker' in navigator && enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          // console.log('SW registration failed: ', registrationError);
        });
    }

    // Memory-based caching for API responses
    const cache = new Map();
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : input.url;
      const cacheKey = `${url}_${JSON.stringify(init)}`;
      
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }
      
      const response = await originalFetch(input, init);
      if (response.ok) {
        cache.set(cacheKey, response.clone());
      }
      
      return response;
    };
  }, [enableServiceWorker]);

  // Image optimization with WebP and lazy loading
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            // Check for WebP support
            const canvas = document.createElement('canvas');
            const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            
            if (webpSupported && !src.includes('.webp')) {
              img.src = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            } else {
              img.src = src;
            }
            
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, []);

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
      '/js/main.js'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, []);

  // Resource hints for better performance
  const addResourceHints = useCallback(() => {
    if (typeof window === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ];

    hints.forEach((hint) => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.rel === 'preconnect') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  // Critical CSS inlining
  const inlineCriticalCSS = useCallback(() => {
    if (typeof window === 'undefined') return;

    const criticalCSS = `
      .cyber-grid { background-image: linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%), linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.1) 25%), linear-gradient(45deg, rgba(255,255,255,0.1) 75%, transparent 75%), linear-gradient(-45deg, rgba(255,255,255,0.1) 75%, transparent 75%); background-size: 20px 20px; background-position: 0 0, 0 10px, 10px -10px, -10px 0px; }
      .cyber-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
      .cyber-button { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none; color: white; padding: 12px 24px; border-radius: 8px; font-weight: 600; transition: all 0.3s ease; }
      .cyber-button:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);
  }, []);

  // Performance monitoring and reporting
  const reportPerformanceMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Report to analytics
    if ('gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(performanceMetrics.lcp),
        custom_map: {
          fcp: Math.round(performanceMetrics.fcp),
          lcp: Math.round(performanceMetrics.lcp),
          fid: Math.round(performanceMetrics.fid),
          cls: Math.round(performanceMetrics.cls * 1000) / 1000
        }
      });
    }
  }, [performanceMetrics]);

  useEffect(() => {
    if (enableAdvancedCaching) {
      setupAdvancedCaching();
    }
    if (enableImageOptimization) {
      optimizeImages();
    }
    if (enablePreloading) {
      preloadCriticalResources();
    }
    if (enableResourceHints) {
      addResourceHints();
    }
    if (enableCriticalCSS) {
      inlineCriticalCSS();
    }
  }, [enableAdvancedCaching, enableImageOptimization, enablePreloading, enableResourceHints, enableCriticalCSS, setupAdvancedCaching, optimizeImages, preloadCriticalResources, addResourceHints, inlineCriticalCSS]);

  useEffect(() => {
    if (enableWebVitals && performanceMetrics.lcp > 0) {
      reportPerformanceMetrics();
    }
  }, [enableWebVitals, performanceMetrics, reportPerformanceMetrics]);

  return null;
};

export default AdvancedPerformanceOptimizer;