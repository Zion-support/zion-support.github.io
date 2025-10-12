import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  className?: string;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  className = '',
  enableLazyLoading = true,
  enableImageOptimization = true,
  enableCodeSplitting = true
}) => {
  const [isOptimized, setIsOptimized] = useState(false);

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      
      // Add lazy loading
      if (enableLazyLoading && !imageElement.loading) {
        imageElement.loading = 'lazy';
      }
      
      // Add decoding attribute for better performance
      if (!imageElement.decoding) {
        imageElement.decoding = 'async';
      }
      
      // Add fetchpriority for above-the-fold images
      if (imageElement.getBoundingClientRect().top < window.innerHeight) {
        imageElement.fetchPriority = 'high';
      }
    });
  }, [enableImageOptimization, enableLazyLoading]);

  const optimizeResources = useCallback(() => {
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
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    const optimize = async () => {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          optimizeImages();
          optimizeResources();
          setIsOptimized(true);
        });
      } else {
        optimizeImages();
        optimizeResources();
        setIsOptimized(true);
      }
    };

    optimize();
  }, [optimizeImages, optimizeResources]);

  return (
    <div className={`performance-optimized ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceOptimizer;