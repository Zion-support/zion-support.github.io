'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableServiceWorker?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableServiceWorker = true,
  enableResourceHints = true
}) => {
  useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts with better optimization
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);

      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/css/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical images with WebP support
      const criticalImages = [
        { src: '/images/hero-bg.webp', fallback: '/images/hero-bg.jpg' },
        { src: '/images/logo.webp', fallback: '/images/logo.png' }
      ];

      criticalImages.forEach(({ src, fallback }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        link.type = 'image/webp';
        document.head.appendChild(link);

        // Fallback for browsers that don't support WebP
        const fallbackLink = document.createElement('link');
        fallbackLink.rel = 'preload';
        fallbackLink.href = fallback;
        fallbackLink.as = 'image';
        fallbackLink.media = '(not (type: image/webp))';
        document.head.appendChild(fallbackLink);
      });
    }

    // Add resource hints for better performance
    if (enableResourceHints && typeof window !== 'undefined') {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });

      // Preconnect to critical third-party origins
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }

    // Optimize images
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for non-critical images
        if (enableLazyLoading && !img.hasAttribute('loading')) {
          img.loading = 'lazy';
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.decoding = 'async';
        }
      });
    }

    // Intersection Observer for lazy loading
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Service Worker registration for caching
    if (enableServiceWorker && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Performance monitoring with enhanced metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
            // Send to analytics
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(entry.startTime)
              });
            }
          }
          if (entry.entryType === 'first-input') {
            const fid = (entry as any).processingStart - entry.startTime;
            console.log('FID:', fid);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(fid)
              });
            }
          }
          if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              console.log('CLS:', (entry as any).value);
              if (typeof window !== 'undefined' && 'gtag' in window) {
                (window as any).gtag('event', 'web_vitals', {
                  event_category: 'Performance',
                  event_label: 'CLS',
                  value: (entry as any).value
                });
              }
            }
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support these entry types
        console.log('Performance Observer not supported');
      }

      // Monitor page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          console.log('Page Load Time:', loadTime);
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(loadTime)
            });
          }
        }
      });
    }

    // Optimize scroll performance
    if (typeof window !== 'undefined') {
      let ticking = false;
      const optimizeScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Throttled scroll handling
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener('scroll', optimizeScroll, { passive: true });
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting, enableServiceWorker, enableResourceHints]);

  return null;
};

export default PerformanceOptimizer;