import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePreloading?: boolean;
  enableCriticalCSS?: boolean;
  enableResourceHints?: boolean;
  enableServiceWorker?: boolean;
  enableWebVitals?: boolean;
  enableCompression?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePreloading = true,
  enableCriticalCSS = true,
  enableResourceHints = true,
  enableServiceWorker = true,
  enableWebVitals = true,
  enableCompression = true,
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    }

<<<<<<< HEAD
    // Prefetch critical resources
    if (enablePrefetching) {
      const prefetchLinks = [
        '/services',
        '/contact',
        '/ai-solutions',
        '/it-services',
        '/about',
        '/blog',
      ];

      prefetchLinks.forEach((href) => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = href;
          document.head.appendChild(link);
        }
      });
    }

    // Add resource hints
    if (enableResourceHints) {
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'cdnjs.cloudflare.com',
      ];

      dnsPrefetchDomains.forEach((domain) => {
        const existingLink = document.querySelector(`link[href="//${domain}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'dns-prefetch';
          link.href = `//${domain}`;
          document.head.appendChild(link);
        }
      });
    }

    // Preload critical fonts
    if (enableCriticalCSS) {
      const fontPreloads = [
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
          as: 'style',
        },
      ];

      fontPreloads.forEach((font) => {
        const existingLink = document.querySelector(`link[href="${font.href}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = font.href;
          link.as = font.as;
          document.head.appendChild(link);
        }
      });
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            console.log('FID:', fidEntry.processingStart - entry.startTime);
=======
    // Lazy loading for images
    if (enableLazyLoading) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
>>>>>>> cursor/analyze-improve-and-deploy-application-c310
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach((img) => imageObserver.observe(img));
    }

    // Preload critical resources
    if (enablePreloading) {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css',
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    }

    // Resource hints
    if (enableResourceHints) {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      ];

      hints.forEach((hint) => {
        const link = document.createElement('link');
        Object.entries(hint).forEach(([key, value]) => {
          if (key === 'crossOrigin') {
            link.crossOrigin = value as string;
          } else {
            link.setAttribute(key, value as string);
          }
        });
        document.head.appendChild(link);
      });
    }

    // Web Vitals monitoring
    if (enableWebVitals && typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });

      // Performance observer for additional metrics
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as any;
              console.log('FID:', fidEntry.processingStart - entry.startTime);
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      }
    }

    // Service Worker registration
    if (enableServiceWorker && 'serviceWorker' in navigator) {
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

    // Compression optimization
    if (enableCompression) {
      // Enable gzip compression hints
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Accept-Encoding';
      meta.content = 'gzip, deflate, br';
      document.head.appendChild(meta);
    }

    // Critical CSS inlining
    if (enableCriticalCSS) {
      const criticalCSS = `
        .cyber-grid { background-image: linear-gradient(45deg, transparent 25%, rgba(6, 182, 212, 0.1) 25%), linear-gradient(-45deg, transparent 25%, rgba(6, 182, 212, 0.1) 25%), linear-gradient(45deg, rgba(6, 182, 212, 0.1) 75%, transparent 75%), linear-gradient(-45deg, rgba(6, 182, 212, 0.1) 75%, transparent 75%); background-size: 20px 20px; background-position: 0 0, 0 10px, 10px -10px, -10px 0px; }
        .neon-text { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor; }
        .cyber-button { background: linear-gradient(45deg, #0ea5e9, #8b5cf6); border: 1px solid #0ea5e9; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; transition: all 0.3s ease; }
        .cyber-card { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(6, 182, 212, 0.2); border-radius: 1rem; padding: 1.5rem; backdrop-filter: blur(10px); }
      `;
      
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);
    }

  }, [enableImageOptimization, enableLazyLoading, enableCodeSplitting, enablePreloading, enableCriticalCSS, enableResourceHints, enableServiceWorker, enableWebVitals, enableCompression]);

  return null;
};

export default PerformanceOptimizer;