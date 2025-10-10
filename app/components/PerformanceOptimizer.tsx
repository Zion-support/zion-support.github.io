'use client';

import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach((img) => {
          const image = img as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }
        });
      };

      // Run optimization after page load
      if (document.readyState === 'complete') {
        optimizeImages();
      } else {
        window.addEventListener('load', optimizeImages);
      }
    }

    // Lazy loading for images
    if (enableLazyLoading) {
      const lazyImages = document.querySelectorAll('img[data-lazy]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.lazy) {
              img.src = img.dataset.lazy;
              img.removeAttribute('data-lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    }

    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = '/styles/critical.css';
        criticalCSS.as = 'style';
        document.head.appendChild(criticalCSS);

        // Preload critical fonts
        const criticalFont = document.createElement('link');
        criticalFont.rel = 'preload';
        criticalFont.href = '/fonts/inter-var.woff2';
        criticalFont.as = 'font';
        criticalFont.type = 'font/woff2';
        criticalFont.crossOrigin = 'anonymous';
        document.head.appendChild(criticalFont);
      };

      preloadCriticalResources();
    }

    // Code splitting optimization
    if (enableCodeSplitting) {
      // Preload next likely pages
      const preloadNextPages = () => {
        const links = document.querySelectorAll('a[href^="/"]');
        const preloadedPages = new Set();

        links.forEach((link) => {
          const href = link.getAttribute('href');
          if (href && !preloadedPages.has(href)) {
            preloadedPages.add(href);
            
            // Preload on hover
            link.addEventListener('mouseenter', () => {
              const prefetchLink = document.createElement('link');
              prefetchLink.rel = 'prefetch';
              prefetchLink.href = href;
              document.head.appendChild(prefetchLink);
            }, { once: true });
          }
        });
      };

      // Run after initial load
      setTimeout(preloadNextPages, 2000);
    }

    // Resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const externalDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com',
        'www.googletagmanager.com'
      ];

      externalDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
    };

    addResourceHints();

    // Service Worker registration
    if ('serviceWorker' in navigator) {
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

  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
};

export default PerformanceOptimizer;