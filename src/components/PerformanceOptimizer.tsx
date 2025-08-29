import React, { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  logMetrics?: boolean;
}

export function PerformanceOptimizer({
  enableMonitoring = true,
  enableOptimizations = true,
  logMetrics = process.env.NODE_ENV === 'development'
}: PerformanceOptimizerProps) {
  const measurePerformance = useCallback(() => {
    if (!enableMonitoring || !('PerformanceObserver' in window)) return;

    // Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (logMetrics) {
          console.log('Performance Metric:', entry.name, entry.value);
        }

        // Send to analytics service
        if (entry.name === 'LCP') {
          // Log Largest Contentful Paint
          console.log('LCP:', entry.value);
        } else if (entry.name === 'FID') {
          // Log First Input Delay
          console.log('FID:', entry.value);
        } else if (entry.name === 'CLS') {
          // Log Cumulative Layout Shift
          console.log('CLS:', entry.value);
        }
      }
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

    return observer;
  }, [enableMonitoring, logMetrics]);

  const optimizeImages = useCallback(() => {
    if (!enableOptimizations) return;

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, [enableOptimizations]);

  const optimizeFonts = useCallback(() => {
    if (!enableOptimizations) return;

    // Preload critical fonts
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
    link.as = 'style';
    document.head.appendChild(link);
  }, [enableOptimizations]);

  const enableServiceWorker = useCallback(() => {
    if (!enableOptimizations || !('serviceWorker' in navigator)) return;

    // Register service worker for caching
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        if (logMetrics) {
          console.log('Service Worker registered:', registration);
        }
      })
      .catch(error => {
        if (logMetrics) {
          console.error('Service Worker registration failed:', error);
        }
      });
  }, [enableOptimizations, logMetrics]);

  useEffect(() => {
    const observer = measurePerformance();
    optimizeImages();
    optimizeFonts();
    enableServiceWorker();

    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [measurePerformance, optimizeImages, optimizeFonts, enableServiceWorker]);

  // Performance optimization techniques
  useEffect(() => {
    if (!enableOptimizations) return;

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://api.ziontechgroup.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // DNS prefetch for performance
    const dnsPrefetchDomains = [
      'https://cdn.ziontechgroup.com',
      'https://analytics.ziontechgroup.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [enableOptimizations]);

  return null; // This component doesn't render anything
}
