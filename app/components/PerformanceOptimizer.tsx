import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true
}) => {
  // Image optimization
  useEffect(() => {
    if (!enableImageOptimization) return;

    const optimizeImages = () => {
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
    };

    // Run after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeImages);
    };
  }, [enableImageOptimization]);

  // Preload critical resources
  useEffect(() => {
    if (!enablePreloading) return;

    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = '/fonts/inter.woff2';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);

      // Preload critical images
      const heroImage = document.createElement('link');
      heroImage.rel = 'preload';
      heroImage.href = '/hero-image.jpg';
      heroImage.as = 'image';
      document.head.appendChild(heroImage);
    };

    preloadCriticalResources();
  }, [enablePreloading]);

  // Service Worker registration for caching
  useEffect(() => {
    if (!enableCaching || typeof window === 'undefined') return;

    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered successfully:', registration);
        } catch (error) {
          console.log('Service Worker registration failed:', error);
        }
      }
    };

    registerServiceWorker();
  }, [enableCaching]);

  // Compression optimization
  useEffect(() => {
    if (!enableCompression) return;

    const optimizeCompression = () => {
      // Add compression hints to meta tags
      const compressionMeta = document.createElement('meta');
      compressionMeta.name = 'compression';
      compressionMeta.content = 'gzip, deflate, br';
      document.head.appendChild(compressionMeta);

      // Optimize resource loading
      const resources = document.querySelectorAll('link[rel="stylesheet"], script[src]');
      resources.forEach((resource) => {
        if (resource instanceof HTMLLinkElement) {
          resource.media = 'print';
          resource.onload = () => {
            resource.media = 'all';
          };
        }
      });
    };

    optimizeCompression();
  }, [enableCompression]);

  // Performance monitoring
  useEffect(() => {
    const monitorPerformance = () => {
      // Monitor Core Web Vitals
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      // Monitor resource loading
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'resource'] });

      return () => observer.disconnect();
    };

    const cleanup = monitorPerformance();
    return cleanup;
  }, []);

  // Lazy load components
  const lazyLoadComponent = useCallback((componentName: string) => {
    return React.lazy(() => import(`../components/${componentName}.tsx`));
  }, []);

  // Prefetch next page
  const prefetchPage = useCallback((url: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    let ticking = false;

    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Throttle scroll events
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizeScroll);
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;