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
      
      // Optimize srcset if not already optimized
      if (img.srcset && !img.srcset.includes('w=')) {
        const src = img.src;
        const width = img.naturalWidth || img.width;
        if (width > 0) {
          img.srcset = `${src} ${width}w`;
        }
      }
    });
  }, [enableImageOptimization]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;
    
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
      '/js/critical.js'
    ];
    
    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.endsWith('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.endsWith('.js')) {
        link.as = 'script';
      }
      
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Enable caching strategies
  const enableCachingStrategies = useCallback(() => {
    if (!enableCaching) return;
    
    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
    
    // Enable HTTP caching headers
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Cache-Control';
    meta.content = 'public, max-age=31536000';
    document.head.appendChild(meta);
  }, [enableCaching]);

  // Enable compression
  const enableCompressionStrategies = useCallback(() => {
    if (!enableCompression) return;
    
    // Add compression hints
    const meta = document.createElement('meta');
    meta.name = 'compression';
    meta.content = 'gzip, deflate, br';
    document.head.appendChild(meta);
  }, [enableCompression]);

  // Route-based optimizations
  const optimizeForRoute = useCallback(() => {
    const currentPath = location.pathname;
    
    // Preload next likely routes
    const routePreloads = {
      '/': ['/about', '/services'],
      '/about': ['/team', '/contact'],
      '/services': ['/pricing', '/contact'],
      '/pricing': ['/contact', '/case-studies']
    };
    
    const preloadRoutes = routePreloads[currentPath as keyof typeof routePreloads] || [];
    
    preloadRoutes.forEach((route) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, [location.pathname]);

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
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Navigation timing:', entry);
        } else if (entry.entryType === 'resource') {
          console.log('Resource timing:', entry);
        }
      }
    });
    
    observer.observe({ entryTypes: ['navigation', 'resource'] });
  }, []);

  // Initialize all optimizations
  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    enableCachingStrategies();
    enableCompressionStrategies();
    optimizeForRoute();
    monitorPerformance();
  }, [
    optimizeImages,
    preloadCriticalResources,
    enableCachingStrategies,
    enableCompressionStrategies,
    optimizeForRoute,
    monitorPerformance
  ]);

  // Re-optimize on route change
  useEffect(() => {
    optimizeForRoute();
  }, [optimizeForRoute]);

  return null; // This component doesn't render anything
};

export default AdvancedPerformanceOptimizer;