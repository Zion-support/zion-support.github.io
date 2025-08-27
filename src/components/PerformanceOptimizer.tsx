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
              window.gtag('event', 'performance', {
                metric_name: 'FCP',
                value: Math.round(entry.startTime)
              });
            }
          }
        });
      });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
            if (window.gtag) {
              window.gtag('event', 'performance', {
                metric_name: 'LCP',
                value: Math.round(entry.startTime)
              });
            }
          }
        });
      });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
            if (window.gtag) {
              window.gtag('event', 'performance', {
                metric_name: 'FID',
                value: Math.round(entry.processingStart - entry.startTime)
              });
            }
          }
        });
      });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'layout-shift') {
            console.log('CLS:', entry.value);
            if (window.gtag) {
              window.gtag('event', 'performance', {
                metric_name: 'CLS',
                value: entry.value
              });
            }
          }
        });
      });

      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        fidObserver.observe({ entryTypes: ['first-input'] });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }
  }, []);

  // Resource optimization
  const optimizeResources = useCallback(() => {
    // Lazy load images
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

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  // Route change optimization
  useEffect(() => {
    // Prefetch next likely routes
    const prefetchRoutes = () => {
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

    // Debounce prefetching
    const timeoutId = setTimeout(prefetchRoutes, 1000);
    return () => clearTimeout(timeoutId);
  }, [location]);

  // Initialize performance monitoring
  useEffect(() => {
    measurePerformance();
    optimizeResources();
  }, [measurePerformance, optimizeResources]);

  // Service Worker registration for caching
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;