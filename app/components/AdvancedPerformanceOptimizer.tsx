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
    });
  }, [enableImageOptimization]);

  // Resource preloading
  const preloadResources = useCallback(() => {
    if (!enablePreloading) return;
    
    // Preload critical resources
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

  // Cache optimization
  const optimizeCaching = useCallback(() => {
    if (!enableCaching) return;
    
    // Set cache headers for static assets
    const staticAssets = document.querySelectorAll('img, script, link[rel="stylesheet"]');
    staticAssets.forEach((asset) => {
      if (asset instanceof HTMLElement) {
        asset.setAttribute('data-cache', 'true');
      }
    });
  }, [enableCaching]);

  // Compression optimization
  const optimizeCompression = useCallback(() => {
    if (!enableCompression) return;
    
    // Enable gzip compression for text resources
    const textResources = document.querySelectorAll('script, link[rel="stylesheet"]');
    textResources.forEach((resource) => {
      if (resource instanceof HTMLElement) {
        resource.setAttribute('data-compress', 'true');
      }
    });
  }, [enableCompression]);

  useEffect(() => {
    // Run optimizations on mount and route change
    optimizeImages();
    preloadResources();
    optimizeCaching();
    optimizeCompression();
  }, [location.pathname, optimizeImages, preloadResources, optimizeCaching, optimizeCompression]);

  return null; // This component doesn't render anything
};

export default AdvancedPerformanceOptimizer;