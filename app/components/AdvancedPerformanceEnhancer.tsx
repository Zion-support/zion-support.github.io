import React, { useEffect, useCallback } from 'react';

interface PerformanceEnhancerProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

const AdvancedPerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true
}) => {
  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
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
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
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

  // Apply optimizations on mount
  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    enableCachingStrategies();
    enableCompressionStrategies();
    monitorPerformance();
  }, [
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

export default AdvancedPerformanceEnhancer;
