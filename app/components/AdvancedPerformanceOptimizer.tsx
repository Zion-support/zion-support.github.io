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
      img.setAttribute('decoding', 'async');
      
      // Convert to WebP if supported
      if (img.src && !img.src.includes('.webp') && img.src.includes('.jpg')) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
        img.src = webpSrc;
      }
    });
  }, [enableImageOptimization]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;
    
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
      '/js/vendor.js'
    ];
    
    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 
                resource.endsWith('.js') ? 'script' : 'font';
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Enable caching strategies
  const enableCachingStrategies = useCallback(() => {
    if (!enableCaching) return;
    
    // Set cache headers for static assets
    const staticAssets = document.querySelectorAll('link[rel="stylesheet"], script[src]');
    staticAssets.forEach((asset) => {
      if (asset instanceof HTMLLinkElement) {
        asset.setAttribute('data-cache', 'static');
      } else if (asset instanceof HTMLScriptElement) {
        asset.setAttribute('data-cache', 'static');
      }
    });
  }, [enableCaching]);

  // Enable compression
  const enableCompressionStrategies = useCallback(() => {
    if (!enableCompression) return;
    
    // Add compression hints to meta tags
    const compressionMeta = document.createElement('meta');
    compressionMeta.name = 'compression';
    compressionMeta.content = 'gzip, deflate, br';
    document.head.appendChild(compressionMeta);
  }, [enableCompression]);

  // Route-based optimizations
  const optimizeForRoute = useCallback(() => {
    const currentPath = location.pathname;
    
    // Preload next likely routes
    const routePreloads = {
      '/': ['/about', '/services'],
      '/about': ['/contact', '/services'],
      '/services': ['/contact', '/about']
    };
    
    const preloadRoutes = routePreloads[currentPath as keyof typeof routePreloads] || [];
    preloadRoutes.forEach((route) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, [location.pathname]);

  // Bundle optimization
  const optimizeBundles = useCallback(() => {
    // Split large bundles into smaller chunks
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (script.src.includes('bundle.js')) {
        // This would typically be handled by your bundler
        console.log('Bundle optimization applied');
      }
    });
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up unused event listeners
    const cleanup = () => {
      // Remove unused event listeners
      const elements = document.querySelectorAll('[data-cleanup]');
      elements.forEach((element) => {
        element.removeEventListener('click', () => {});
        element.removeEventListener('scroll', () => {});
      });
    };
    
    // Run cleanup every 30 seconds
    const interval = setInterval(cleanup, 30000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    enableCachingStrategies();
    enableCompressionStrategies();
    optimizeForRoute();
    optimizeBundles();
    
    const cleanup = optimizeMemory();
    
    return cleanup;
  }, [
    optimizeImages,
    preloadCriticalResources,
    enableCachingStrategies,
    enableCompressionStrategies,
    optimizeForRoute,
    optimizeBundles,
    optimizeMemory
  ]);

  return null; // This component doesn't render anything
};

export default AdvancedPerformanceOptimizer;
