import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
}

interface OptimizationStatus {
  imagesOptimized: boolean;
  lazyLoadingEnabled: boolean;
  codeSplittingEnabled: boolean;
  prefetchingEnabled: boolean;
  serviceWorker: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true
}) => {
  const [optimizationStatus, setOptimizationStatus] = useState<OptimizationStatus>({
    imagesOptimized: false,
    lazyLoadingEnabled: false,
    codeSplittingEnabled: false,
    prefetchingEnabled: false,
    serviceWorker: false
  });

  // Image optimization
  useEffect(() => {
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          // Add loading="lazy" for better performance
          if (enableLazyLoading && !img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          
          // Add decoding="async" for better performance
          if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
        });
        
        setOptimizationStatus(prev => ({ ...prev, imagesOptimized: true, lazyLoadingEnabled: true }));
      };

      // Run optimization after DOM is loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', optimizeImages);
      } else {
        optimizeImages();
      }
    }
  }, [enableImageOptimization, enableLazyLoading]);

  // Code splitting optimization
  useEffect(() => {
    if (enableCodeSplitting) {
      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalResources = [
          '/src/components/Navigation.tsx',
          '/src/components/Footer.tsx',
          '/src/page.tsx'
        ];

        criticalResources.forEach((resource) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource;
          link.as = 'script';
          document.head.appendChild(link);
        });

        setOptimizationStatus(prev => ({ ...prev, codeSplittingEnabled: true }));
      };

      preloadCriticalResources();
    }
  }, [enableCodeSplitting]);

  // Prefetching optimization
  useEffect(() => {
    if (enablePrefetching) {
      const prefetchResources = () => {
        // Prefetch likely next pages
        const prefetchPages = [
          '/about',
          '/services',
          '/contact',
          '/blog'
        ];

        prefetchPages.forEach((page) => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);
        });

        setOptimizationStatus(prev => ({ ...prev, prefetchingEnabled: true }));
      };

      // Delay prefetching to not interfere with critical resources
      setTimeout(prefetchResources, 2000);
    }
  }, [enablePrefetching]);

  // Service Worker registration
  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        setOptimizationStatus(prev => ({ ...prev, serviceWorker: true }));
      } catch (error) {
        // Service Worker registration failed - handled silently in production
      }
    }
  };

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
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'resource'] });
    };

    monitorPerformance();
    registerServiceWorker();
  }, []);

  // Resource hints for better performance
  useEffect(() => {
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com'
      ];

      dnsPrefetchDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });

      // Preconnect to critical domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      preconnectDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;