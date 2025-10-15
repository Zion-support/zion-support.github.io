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
    });
  }, [enableImageOptimization]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;
    
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
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
  }, [enableCaching]);

  // Enable compression
  const enableCompressionStrategies = useCallback(() => {
    if (!enableCompression) return;
    
    // Enable gzip compression headers
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Encoding';
    meta.content = 'gzip';
    document.head.appendChild(meta);
  }, [enableCompression]);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    enableCachingStrategies();
    enableCompressionStrategies();
  }, [optimizeImages, preloadCriticalResources, enableCachingStrategies, enableCompressionStrategies]);

  return null; // This component doesn't render anything
};

export default AdvancedPerformanceEnhancer;
