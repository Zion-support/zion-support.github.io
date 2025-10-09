'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
  enableServiceWorker?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true,
  enableServiceWorker = true,
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
        // Add proper alt text if missing
        if (!img.alt) {
          img.alt = 'Zion Tech Group content';
        }
      });
    }

    // Prefetch critical resources
    if (enablePrefetching && typeof window !== 'undefined') {
      const prefetchLinks = [
        '/services',
        '/contact',
        '/ai-solutions',
        '/it-services',
      ];

      prefetchLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    }

    // Register Service Worker for caching
    if (enableServiceWorker && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // Handle service worker updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, notify user
                  if (confirm('New version available! Reload to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track Core Web Vitals
      const trackWebVitals = () => {
        // First Contentful Paint
        if ('PerformanceObserver' in window) {
          try {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                if (entry.name === 'first-contentful-paint') {
                  console.log('FCP:', entry.startTime);
                }
              });
            });
            observer.observe({ entryTypes: ['paint'] });
          } catch (error) {
            console.warn('Performance Observer not supported:', error);
          }
        }

        // Largest Contentful Paint
        if ('PerformanceObserver' in window) {
          try {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              console.log('LCP:', lastEntry.startTime);
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (error) {
            console.warn('LCP Observer not supported:', error);
          }
        }

        // Cumulative Layout Shift
        if ('PerformanceObserver' in window) {
          try {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry: any) => {
                if (!entry.hadRecentInput) {
                  clsValue += entry.value;
                }
              });
              console.log('CLS:', clsValue);
            });
            observer.observe({ entryTypes: ['layout-shift'] });
          } catch (error) {
            console.warn('CLS Observer not supported:', error);
          }
        }
      };

      // Track performance after page load
      window.addEventListener('load', trackWebVitals);
    }

    // Lazy loading for images
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    }

  }, [enableImageOptimization, enableLazyLoading, enableCodeSplitting, enablePrefetching, enableServiceWorker]);

  return null;
};

export default PerformanceOptimizer;
