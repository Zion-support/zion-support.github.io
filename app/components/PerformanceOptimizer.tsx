'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<{
    images: boolean;
    lazyLoading: boolean;
    preloading: boolean;
    codeSplitting: boolean;
  }>({
    images: false,
    lazyLoading: false,
    preloading: false,
    codeSplitting: false,
  });

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (img.loading !== 'lazy') {
        img.loading = 'lazy';
      }
      
      // Add WebP support detection
      if (!img.src.includes('.webp') && img.src.includes('.jpg')) {
        const webpSrc = img.src.replace('.jpg', '.webp');
        const webpImg = new Image();
        webpImg.onload = () => {
          img.src = webpSrc;
        };
        webpImg.src = webpSrc;
      }
    });

    setOptimizationStatus(prev => ({ ...prev, images: true }));
  }, [enableImageOptimization]);

  const enableLazyLoadingOptimization = useCallback(() => {
    if (!enableLazyLoading) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => observer.observe(img));

    setOptimizationStatus(prev => ({ ...prev, lazyLoading: true }));
  }, [enableLazyLoading]);

  const enablePreloadingOptimization = useCallback(() => {
    if (!enablePreloading) return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css',
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

    setOptimizationStatus(prev => ({ ...prev, preloading: true }));
  }, [enablePreloading]);

  const enableCodeSplittingOptimization = useCallback(() => {
    if (!enableCodeSplitting) return;

    // Dynamic imports for code splitting
    const loadComponent = async (componentName: string) => {
      try {
        const componentModule = await import(`../components/${componentName}.tsx`);
        return componentModule.default;
      } catch (error) {
        console.warn(`Failed to load component: ${componentName}`, error);
        return null;
      }
    };

    // Store the function globally for use in other components
    (window as any).loadComponent = loadComponent;

    setOptimizationStatus(prev => ({ ...prev, codeSplitting: true }));
  }, [enableCodeSplitting]);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      await Promise.all([
        optimizeImages(),
        enableLazyLoadingOptimization(),
        enablePreloadingOptimization(),
        enableCodeSplittingOptimization(),
      ]);
    } catch (error) {
      console.error('Optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizeImages, enableLazyLoadingOptimization, enablePreloadingOptimization, enableCodeSplittingOptimization]);

  useEffect(() => {
    runOptimizations();
  }, [runOptimizations]);

  const allOptimizationsComplete = Object.values(optimizationStatus).every(Boolean);

  return (
    <div className="performance-optimizer">
      {isOptimizing && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 animate-spin" />
            Optimizing performance...
          </div>
        </div>
      )}

      {allOptimizationsComplete && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Performance optimized!
          </div>
        </div>
      )}

      <div className="optimization-status">
        <h3 className="text-lg font-semibold mb-4">Performance Optimizations</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {optimizationStatus.images ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            )}
            <span>Image Optimization</span>
          </div>
          <div className="flex items-center gap-2">
            {optimizationStatus.lazyLoading ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            )}
            <span>Lazy Loading</span>
          </div>
          <div className="flex items-center gap-2">
            {optimizationStatus.preloading ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            )}
            <span>Resource Preloading</span>
          </div>
          <div className="flex items-center gap-2">
            {optimizationStatus.codeSplitting ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            )}
            <span>Code Splitting</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;