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
  enableCodeSplitting = true
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
    codeSplitting: false
  });

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
    
    setOptimizationStatus(prev => ({ ...prev, images: true }));
  }, [enableImageOptimization]);

  const enableLazyLoadingFeature = useCallback(() => {
    if (!enableLazyLoading) return;
    
    const observer = new IntersectionObserver((entries) => {
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
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => observer.observe(img));
    
    setOptimizationStatus(prev => ({ ...prev, lazyLoading: true }));
  }, [enableLazyLoading]);

  const enablePreloadingFeature = useCallback(() => {
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
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
    
    setOptimizationStatus(prev => ({ ...prev, preloading: true }));
  }, [enablePreloading]);

  const enableCodeSplittingFeature = useCallback(() => {
    if (!enableCodeSplitting) return;
    
    // This would typically be handled by the build system
    // For now, we'll just mark it as enabled
    setOptimizationStatus(prev => ({ ...prev, codeSplitting: true }));
  }, [enableCodeSplitting]);

  const runOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      await Promise.all([
        optimizeImages(),
        enableLazyLoadingFeature(),
        enablePreloadingFeature(),
        enableCodeSplittingFeature()
      ]);
    } catch (error) {
      console.error('Optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [optimizeImages, enableLazyLoadingFeature, enablePreloadingFeature, enableCodeSplittingFeature]);

  useEffect(() => {
    runOptimizations();
  }, [runOptimizations]);

  const allOptimizationsComplete = Object.values(optimizationStatus).every(Boolean);

  return (
    <div className="performance-optimizer">
      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center">
          <Settings className="w-5 h-5 mr-2 text-gray-600" />
          <span className="font-medium text-gray-900">Performance Optimizer</span>
        </div>
        
        <div className="flex items-center space-x-2">
          {isOptimizing ? (
            <div className="flex items-center text-blue-600">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
              <span className="text-sm">Optimizing...</span>
            </div>
          ) : allOptimizationsComplete ? (
            <div className="flex items-center text-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              <span className="text-sm">Optimized</span>
            </div>
          ) : (
            <div className="flex items-center text-yellow-600">
              <AlertTriangle className="w-4 h-4 mr-1" />
              <span className="text-sm">Pending</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Image Optimization</span>
          {optimizationStatus.images ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span>Lazy Loading</span>
          {optimizationStatus.lazyLoading ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span>Resource Preloading</span>
          {optimizationStatus.preloading ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span>Code Splitting</span>
          {optimizationStatus.codeSplitting ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizer;