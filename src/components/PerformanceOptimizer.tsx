import React, { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer() {
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          console.log('FCP:', fcp.startTime);
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FCP',
              value: Math.round(fcp.startTime)
            });
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          console.log('LCP:', lcp.startTime);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(lcp.startTime)
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
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(entry.processingStart - entry.startTime)
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
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000) / 1000
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.loading = 'lazy';
      }
      
      // Add error handling
      img.onerror = () => {
        img.src = '/images/placeholder.jpg';
        img.alt = 'Image not available';
      };
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS and fonts
    const criticalResources = [
      '/fonts/orbitron-v15-latin-700.woff2',
      '/fonts/rajdhani-v15-latin-500.woff2'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'font';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    measurePerformance();
    optimizeImages();
    preloadCriticalResources();

    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
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

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }, [measurePerformance, optimizeImages, preloadCriticalResources]);

  return null; // This component doesn't render anything
}
