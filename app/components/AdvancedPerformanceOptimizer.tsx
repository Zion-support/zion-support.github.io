import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true,
}) => {
  const location = useLocation();

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
      
      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
      
      // Optimize image sizes
      if (img.src && !img.src.includes('data:')) {
        const imgElement = img as HTMLImageElement;
        if (imgElement.naturalWidth > 0 && imgElement.naturalHeight > 0) {
          const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
          const containerWidth = imgElement.offsetWidth;
          const optimalHeight = Math.round(containerWidth / aspectRatio);
          
          if (imgElement.offsetHeight !== optimalHeight) {
            imgElement.style.height = `${optimalHeight}px`;
          }
        }
      }
    });
  }, [enableImageOptimization]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;
    
    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"]');
    if (criticalCSS) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'style';
      preloadLink.href = criticalCSS.href;
      document.head.appendChild(preloadLink);
    }
    
    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[href*="font"]');
    fontLinks.forEach((link) => {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'font';
      preloadLink.href = link.href;
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
    });
    
    // Preload next page resources
    const nextPageLinks = document.querySelectorAll('a[href]');
    nextPageLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
      }
    });
  }, [enablePreloading]);

  // Enable caching strategies
  const enableCachingStrategies = useCallback(() => {
    if (!enableCaching) return;
    
    // Set cache headers for static assets
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
    
    // Enable browser caching
    const cacheableResources = document.querySelectorAll('link[rel="stylesheet"], script[src], img[src]');
    cacheableResources.forEach((resource) => {
      if (resource instanceof HTMLLinkElement || resource instanceof HTMLScriptElement || resource instanceof HTMLImageElement) {
        resource.setAttribute('cache-control', 'max-age=31536000');
      }
    });
  }, [enableCaching]);

  // Enable compression
  const enableCompressionStrategies = useCallback(() => {
    if (!enableCompression) return;
    
    // Enable gzip compression for text-based resources
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      const request = new Request(input, {
        ...init,
        headers: {
          ...init?.headers,
          'Accept-Encoding': 'gzip, deflate, br'
        }
      });
      return originalFetch(request);
    };
  }, [enableCompression]);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          if (metric.value > 0.25) {
            console.warn('Poor CLS detected:', metric.value);
          }
        });
        
        getFID((metric) => {
          if (metric.value > 300) {
            console.warn('Poor FID detected:', metric.value);
          }
        });
        
        getFCP((metric) => {
          if (metric.value > 3000) {
            console.warn('Poor FCP detected:', metric.value);
          }
        });
        
        getLCP((metric) => {
          if (metric.value > 4000) {
            console.warn('Poor LCP detected:', metric.value);
          }
        });
        
        getTTFB((metric) => {
          if (metric.value > 1500) {
            console.warn('Poor TTFB detected:', metric.value);
          }
        });
      });
    }
    
    // Monitor resource loading
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) {
              console.warn('Slow resource detected:', resource.name, resource.duration);
            }
          }
        });
      });
      observer.observe({ entryTypes: ['resource'] });
    }
  }, []);

  // Apply optimizations on mount and route change
  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    enableCachingStrategies();
    enableCompressionStrategies();
    monitorPerformance();
  }, [
    location,
    optimizeImages,
    preloadCriticalResources,
    enableCachingStrategies,
    enableCompressionStrategies,
    monitorPerformance
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Cleanup any ongoing operations
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister();
          });
        });
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AdvancedPerformanceOptimizer;
