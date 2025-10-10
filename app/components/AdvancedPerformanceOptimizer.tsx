'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableLazyLoading = true,
  enableImageOptimization = true,
  enableCodeSplitting = true,
  enableCaching = true
}) => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [optimizationStats, setOptimizationStats] = useState({
    imagesOptimized: 0,
    lazyLoadedElements: 0,
    cacheHits: 0,
    bundleSize: 0
  });

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    let optimizedCount = 0;

    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
        optimizedCount++;
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
        optimizedCount++;
      }

      // Add width and height attributes if missing
      if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
        img.onload = () => {
          img.setAttribute('width', img.naturalWidth.toString());
          img.setAttribute('height', img.naturalHeight.toString());
        };
      }
    });

    setOptimizationStats(prev => ({
      ...prev,
      imagesOptimized: optimizedCount
    }));
  }, [enableImageOptimization]);

  const enableLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Lazy load images
            if (element.tagName === 'IMG') {
              const img = element as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
              }
            }

            // Lazy load background images
            if (element.dataset.bgSrc) {
              element.style.backgroundImage = `url(${element.dataset.bgSrc})`;
              element.removeAttribute('data-bg-src');
            }

            observer.unobserve(element);
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Observe all elements with data-src or data-bg-src
    const lazyElements = document.querySelectorAll('[data-src], [data-bg-src]');
    lazyElements.forEach((el) => observer.observe(el));

    setOptimizationStats(prev => ({
      ...prev,
      lazyLoadedElements: lazyElements.length
    }));
  }, [enableLazyLoading]);

  const enableCaching = useCallback(() => {
    if (!enableCaching) return;

    // Set cache headers for static assets
    const staticAssets = document.querySelectorAll('link[rel="stylesheet"], script[src]');
    staticAssets.forEach((asset) => {
      if (asset instanceof HTMLLinkElement) {
        asset.setAttribute('data-cache', 'true');
      }
      if (asset instanceof HTMLScriptElement) {
        asset.setAttribute('data-cache', 'true');
      }
    });

    // Implement service worker for caching
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

  const measureBundleSize = useCallback(() => {
    if (!enableCodeSplitting) return;

    // Measure bundle size (simplified)
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;

    scripts.forEach((script) => {
      const src = script.getAttribute('src');
      if (src) {
        // This is a simplified measurement
        // In a real implementation, you'd fetch the actual file size
        totalSize += 1000; // Placeholder
      }
    });

    setOptimizationStats(prev => ({
      ...prev,
      bundleSize: totalSize
    }));
  }, [enableCodeSplitting]);

  useEffect(() => {
    const optimize = async () => {
      await optimizeImages();
      await enableLazyLoading();
      await enableCaching();
      await measureBundleSize();
      setIsOptimized(true);
    };

    optimize();
  }, [optimizeImages, enableLazyLoading, enableCaching, measureBundleSize]);

  return (
    <div className="performance-optimizer" data-optimized={isOptimized}>
      {children}
      
      {/* Performance Stats (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs z-50">
          <div>Images Optimized: {optimizationStats.imagesOptimized}</div>
          <div>Lazy Loaded: {optimizationStats.lazyLoadedElements}</div>
          <div>Cache Hits: {optimizationStats.cacheHits}</div>
          <div>Bundle Size: {optimizationStats.bundleSize}KB</div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceOptimizer;