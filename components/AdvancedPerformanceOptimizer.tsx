'use client';

import { useEffect, useState } from 'react';

const AdvancedPerformanceOptimizer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Advanced performance optimizations
    const optimizePerformance = () => {
      // 1. Critical Resource Hints
      const addResourceHints = () => {
        const hints = [
          { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
          { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
          { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
          { rel: 'preconnect', href: 'https://www.google-analytics.com' },
          { rel: 'preload', href: '/og-image.jpg', as: 'image' },
          { rel: 'preload', href: '/hero-bg.jpg', as: 'image' },
          { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' }
        ];

        hints.forEach(hint => {
          const link = document.createElement('link');
          Object.entries(hint).forEach(([key, value]) => {
            link.setAttribute(key, value);
          });
          document.head.appendChild(link);
        });
      };

      // 2. Image Optimization
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          // Lazy loading
          if (!img.loading) {
            img.loading = 'lazy';
          }
          
          // Async decoding
          if (!img.decoding) {
            img.decoding = 'async';
          }

          // WebP support detection
          if (img.src && !img.src.includes('.webp')) {
            const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/, '.webp');
            const webpImg = new Image();
            webpImg.onload = () => {
              img.src = webpSrc;
            };
            webpImg.src = webpSrc;
          }

          // Responsive images
          if (img.width > 400) {
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
          }
        });
      };

      // 3. Font Optimization
      const optimizeFonts = () => {
        // Preload critical fonts
        const criticalFonts = [
          '/fonts/inter-var.woff2',
          '/fonts/inter-regular.woff2',
          '/fonts/inter-medium.woff2',
          '/fonts/inter-semibold.woff2',
          '/fonts/inter-bold.woff2'
        ];

        criticalFonts.forEach(font => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = font;
          link.as = 'font';
          link.type = 'font/woff2';
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        });

        // Font display optimization
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'Inter';
            font-display: swap;
            src: url('/fonts/inter-var.woff2') format('woff2');
          }
        `;
        document.head.appendChild(style);
      };

      // 4. JavaScript Optimization
      const optimizeJavaScript = () => {
        // Defer non-critical scripts
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
          if (!script.defer && !script.async) {
            script.defer = true;
          }
        });

        // Intersection Observer for lazy loading
        if ('IntersectionObserver' in window) {
          const lazyElements = document.querySelectorAll('[data-lazy]');
          const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const element = entry.target;
                if (element.dataset.src) {
                  element.src = element.dataset.src;
                  element.removeAttribute('data-src');
                }
                lazyObserver.unobserve(element);
              }
            });
          });

          lazyElements.forEach(element => {
            lazyObserver.observe(element);
          });
        }
      };

      // 5. CSS Optimization
      const optimizeCSS = () => {
        // Critical CSS inlining
        const criticalCSS = `
          .hero-section { opacity: 0; animation: fadeIn 0.5s ease-in-out forwards; }
          @keyframes fadeIn { to { opacity: 1; } }
          .loading { display: none; }
          .content-loaded .loading { display: none; }
          .content-loaded .content { display: block; }
        `;

        const style = document.createElement('style');
        style.textContent = criticalCSS;
        style.setAttribute('data-critical', 'true');
        document.head.appendChild(style);
      };

      // 6. Service Worker Registration
      const registerServiceWorker = () => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
              console.log('SW registration failed: ', registrationError);
            });
        }
      };

      // 7. Performance Monitoring
      const setupPerformanceMonitoring = () => {
        // Core Web Vitals
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime);
              }
              if (entry.entryType === 'first-input') {
                console.log('FID:', entry.processingStart - entry.startTime);
              }
              if (entry.entryType === 'layout-shift') {
                console.log('CLS:', entry.value);
              }
            });
          });

          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        }

        // Resource timing
        window.addEventListener('load', () => {
          const resources = performance.getEntriesByType('resource');
          const totalLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
          console.log('Total load time:', totalLoadTime);
          console.log('Resources loaded:', resources.length);
        });
      };

      // Execute optimizations
      addResourceHints();
      optimizeFonts();
      optimizeCSS();
      optimizeImages();
      optimizeJavaScript();
      registerServiceWorker();
      setupPerformanceMonitoring();

      // Mark as loaded
      setIsLoaded(true);
      document.body.classList.add('content-loaded');
    };

    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizePerformance);
    } else {
      optimizePerformance();
    }

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default AdvancedPerformanceOptimizer;