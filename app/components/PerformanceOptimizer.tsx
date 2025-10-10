'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  children
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          // Add loading="lazy" if not already present
          if (enableLazyLoading && !img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          
          // Add decoding="async" for better performance
          if (!img.getAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
          
          // Add error handling
          img.addEventListener('error', () => {
            img.style.display = 'none';
          });
        });
      };

      // Run on initial load
      optimizeImages();

      // Run on dynamic content changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                if (element.tagName === 'IMG' || element.querySelector('img')) {
                  optimizeImages();
                }
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, [enableImageOptimization, enableLazyLoading]);

  useEffect(() => {
    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = '/critical.css';
        criticalCSS.as = 'style';
        criticalCSS.onload = () => {
          criticalCSS.rel = 'stylesheet';
        };
        document.head.appendChild(criticalCSS);

        // Preload critical fonts
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = '/fonts/inter-var.woff2';
        fontPreload.as = 'font';
        fontPreload.type = 'font/woff2';
        fontPreload.crossOrigin = 'anonymous';
        document.head.appendChild(fontPreload);

        // Preload critical images
        const criticalImages = [
          '/og-image.jpg',
          '/logo.png'
        ];

        criticalImages.forEach((src) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = src;
          link.as = 'image';
          document.head.appendChild(link);
        });
      };

      preloadCriticalResources();
    }
  }, [enablePreloading]);

  useEffect(() => {
    // Resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const externalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      externalDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });

      // Preconnect to critical domains
      const criticalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      criticalDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  useEffect(() => {
    // Service Worker registration for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  useEffect(() => {
    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        // Measure First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              console.log('FCP:', entry.startTime);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Measure Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
        };
      }
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;