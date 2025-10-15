import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
  enableLazyLoading?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true,
  enableLazyLoading = true
}) => {
  // Image optimization
  useEffect(() => {
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading && enableLazyLoading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
        // Add WebP support detection
        if (img.src && !img.src.includes('.webp')) {
          const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          const webpImg = new Image();
          webpImg.onload = () => {
            img.src = webpSrc;
          };
          webpImg.src = webpSrc;
        }
      });
    }
  }, [enableImageOptimization, enableLazyLoading]);

  // Preloading optimization
  useEffect(() => {
    if (enablePreloading) {
      // Preload critical resources
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
        { href: '/css/critical.css', as: 'style' },
        { href: '/js/critical.js', as: 'script' }
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) {
          link.type = resource.type;
        }
        if (resource.as === 'font') {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    }
  }, [enablePreloading]);

  // Caching optimization
  useEffect(() => {
    if (enableCaching) {
      // Set cache headers for static assets
      const style = document.createElement('style');
      style.textContent = `
        img, video, audio {
          max-width: 100%;
          height: auto;
        }
        .lazy {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .lazy.loaded {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);

      // Implement service worker for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    }
  }, [enableCaching]);

  // Compression optimization
  useEffect(() => {
    if (enableCompression) {
      // Enable gzip compression for text content
      const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
      textElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.textCompression = 'gzip';
        }
      });

      // Optimize CSS delivery
      const criticalCSS = document.querySelector('style[data-critical]');
      if (criticalCSS) {
        criticalCSS.setAttribute('media', 'all');
      }
    }
  }, [enableCompression]);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const cleanup = monitorPerformance();
    return cleanup;
  }, [monitorPerformance]);

  return null; // This component doesn't render anything
};

export default AdvancedPerformanceOptimizer;