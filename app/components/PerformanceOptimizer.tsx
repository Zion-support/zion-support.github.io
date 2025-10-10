'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { logger } from '../utils/productionLogger';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

export const PerformanceOptimizer: React.FC = () => {
  const collectWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Collect Core Web Vitals
    const vitals: PerformanceMetrics = {
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0,
    };

    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      vitals.lcp = lastEntry.startTime;
      logger.info('LCP measured', { lcp: vitals.lcp });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        vitals.fid = entry.processingStart - entry.startTime;
        logger.info('FID measured', { fid: vitals.fid });
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    setOptimizationStatus(prev => ({ ...prev, preloaded: criticalResources.length }));
  };

  const setupCodeSplitting = () => {
    // This would be handled by Next.js dynamic imports
    setOptimizationStatus(prev => ({ ...prev, codeSplit: true }));
  };

  const addResourceHints = () => {
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
    ];

    hints.forEach((hint) => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin;
      }
      document.head.appendChild(link);
    });

    setOptimizationStatus(prev => ({ ...prev, resourceHints: hints.length }));
  };

  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        setOptimizationStatus(prev => ({ ...prev, serviceWorker: true }));
      } catch (error) {
        logger.error('Service Worker registration failed', { error: error.message }, 'PerformanceOptimizer');
      }
    }
  };

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Track LCP
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(entry.startTime),
                event_category: 'Performance'
              });
            }
          }
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        vitals.fcp = entry.startTime;
        logger.info('FCP measured', { fcp: vitals.fcp });
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB - Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      vitals.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      logger.info('TTFB measured', { ttfb: vitals.ttfb });
    }

    // Send metrics to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(vitals.lcp),
        custom_map: {
          lcp: vitals.lcp,
          fid: vitals.fid,
          cls: vitals.cls,
          fcp: vitals.fcp,
          ttfb: vitals.ttfb,
        },
      });
    }
  }, []);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);

    // Preload critical images
    const criticalImages = [
      '/logo.png',
      '/og-image.svg',
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  const optimizeThirdPartyScripts = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }, []);

  useEffect(() => {
    // Collect performance metrics after page load
    if (document.readyState === 'complete') {
      collectWebVitals();
    } else {
      window.addEventListener('load', collectWebVitals);
    }

    // Optimize images
    optimizeImages();

    // Preload critical resources
    preloadCriticalResources();

    // Optimize third-party scripts
    optimizeThirdPartyScripts();

    return () => {
      window.removeEventListener('load', collectWebVitals);
    };
  }, [collectWebVitals, optimizeImages, preloadCriticalResources, optimizeThirdPartyScripts]);

  return null;
};

export default PerformanceOptimizer;